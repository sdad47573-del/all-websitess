import { useMemo, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";
import { useMutation, useQuery } from "@app-client";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import {
  checkCoverage,
  estimateMonthlyCost,
  LIFE_MOMENTS,
  type CoverageStatus,
} from "@/lib/lifemoments";
import {
  calculateQuote,
  EXTRAS,
  FREQUENCIES,
  SERVICE_TYPES,
  SLOTS,
  type ExtraKey,
  type FrequencyKey,
  type ServiceKey,
} from "@/lib/pricing";
import {
  ArrowRight,
  BookMarked,
  Building2,
  Calendar,
  CalendarCheck,
  Check,
  CreditCard,
  Gift,
  Home,
  Hotel,
  Loader2,
  MapPin,
  Sparkles,
  X,
} from "lucide-react";

const SERVICE_ICONS = {
  regular: Home,
  deep: Sparkles,
  move: Building2,
  office: Building2,
  airbnb: Hotel,
} as const;

/** Fechas mínima (mañana) y máxima (+60 días) para reservar, en formato YYYY-MM-DD */
function dateBounds() {
  const toISO = (d: Date) => d.toISOString().slice(0, 10);
  const min = new Date();
  min.setDate(min.getDate() + 1);
  const max = new Date();
  max.setDate(max.getDate() + 60);
  return { min: toISO(min), max: toISO(max) };
}

/**
 * mode="quote": calculadora pública para la landing (sin campos personales).
 * mode="book": reserva completa para el panel autenticado.
 */
export function BookingForm({
  mode = "book",
  onSuccess,
  initial,
}: {
  mode?: "quote" | "book";
  onSuccess?: () => void;
  /** Presets iniciales (p.ej. "repetir limpieza") */
  initial?: {
    serviceType?: ServiceKey;
    frequency?: FrequencyKey;
    bedrooms?: number;
    bathrooms?: number;
    extras?: ExtraKey[];
    address?: string;
    city?: string;
    postalCode?: string;
    notes?: string;
  };
}) {
  const [serviceType, setServiceType] = useState<ServiceKey>(initial?.serviceType ?? "regular");
  const [frequency, setFrequency] = useState<FrequencyKey>(initial?.frequency ?? "biweekly");
  const [bedrooms, setBedrooms] = useState(initial?.bedrooms ?? 2);
  const [bathrooms, setBathrooms] = useState(initial?.bathrooms ?? 1);
  const [extras, setExtras] = useState<ExtraKey[]>(initial?.extras ?? []);
  const [address, setAddress] = useState(initial?.address ?? "");
  const [city, setCity] = useState(initial?.city ?? "");
  const [postalCode, setPostalCode] = useState(initial?.postalCode ?? "");
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [notes, setNotes] = useState(initial?.notes ?? "");
  const [referralInput, setReferralInput] = useState("");
  const [giftCardInput, setGiftCardInput] = useState("");
  const [selectedAddressId, setSelectedAddressId] = useState<string | null>(null);
  const [saveThisAddress, setSaveThisAddress] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Prefill desde ?ref=CODE (enlaces de referidos), ?service=KEY o ?moment=KEY
  const [searchParams] = useSearchParams();
  useEffect(() => {
    const ref = searchParams.get("ref") ?? localStorage.getItem("brillanteza_ref");
    if (ref) setReferralInput(ref.toUpperCase());

    const service = searchParams.get("service") as ServiceKey | null;
    if (service && SERVICE_TYPES.some((s) => s.key === service)) {
      setServiceType(service);
    }

    const momentKey = searchParams.get("moment");
    if (momentKey) {
      const moment = LIFE_MOMENTS.find((m) => m.key === momentKey);
      if (moment) {
        setServiceType(moment.preset.serviceType);
        setFrequency(moment.preset.frequency);
        setBedrooms(moment.preset.bedrooms);
        setBathrooms(moment.preset.bathrooms);
        setExtras(moment.preset.extras);
      }
    }
  }, [searchParams]);

  const referralCheck = useQuery(
    api.referrals.validateCode,
    referralInput.trim().length >= 4 ? { code: referralInput } : "skip",
  );

  const giftCardCheck = useQuery(
    api.giftCards.validate,
    mode === "book" && giftCardInput.trim().length >= 8 ? { code: giftCardInput } : "skip",
  );

  // Direcciones guardadas (modo reserva)
  const savedAddresses = useQuery(
    api.addresses.listMine,
    mode === "book" ? {} : "skip",
  );
  const saveAddress = useMutation(api.addresses.add);

  const availability = useQuery(
    api.bookings.availability,
    date ? { date } : "skip",
  );

  const createBooking = useMutation(api.bookings.create);
  const redeemGiftCard = useMutation(api.giftCards.redeem);
  const navigate = useNavigate();

  const quote = useMemo(
    () =>
      calculateQuote({
        serviceType,
        frequency,
        bedrooms,
        bathrooms,
        extras,
      }),
    [serviceType, frequency, bedrooms, bathrooms, extras],
  );

  const monthly = useMemo(
    () => estimateMonthlyCost({ serviceType, frequency, bedrooms, bathrooms, extras }),
    [serviceType, frequency, bedrooms, bathrooms, extras],
  );

  const coverage: CoverageStatus = checkCoverage(postalCode);

  const { min, max } = dateBounds();

  const toggleExtra = (key: ExtraKey) => {
    setExtras((prev) =>
      prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
    );
  };

  const isBook = mode === "book";
  const canSubmit =
    isBook &&
    address.trim().length >= 5 &&
    city.trim().length >= 2 &&
    date !== "" &&
    slot !== "" &&
    !submitting;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isBook) {
      navigate("/auth?returnTo=%2Fdashboard");
      return;
    }
    if (!canSubmit) return;
    setSubmitting(true);
    try {
      await createBooking({
        serviceType,
        frequency,
        bedrooms,
        bathrooms,
        extras,
        address: address.trim(),
        city: city.trim(),
        postalCode: postalCode.trim() || undefined,
        preferredDate: date,
        preferredSlot: slot,
        // El precio y la duración los calcula el servidor.

        notes: notes.trim() || undefined,
        referralCode:
          referralCheck?.valid && referralInput.trim().length >= 4
            ? referralInput.trim().toUpperCase()
            : undefined,
      });
      // Canjea la tarjeta regalo si hay una válida (server-side, atómico)
      let giftDiscount = 0;
      if (giftCardCheck?.valid && giftCardInput.trim().length >= 8) {
        const result = await redeemGiftCard({
          code: giftCardInput.trim().toUpperCase(),
          bookingPrice: quote.price,
        });
        if (result.ok) giftDiscount = result.discount ?? 0;
      }

      toast.success("¡Reserva creada!", {
        description:
          giftDiscount > 0
            ? `Tarjeta regalo aplicada: −${giftDiscount.toFixed(2).replace(".", ",")} €.`
            : referralCheck?.valid
              ? "Código de amigo aplicado: −10 € en tu primera reserva."
              : "Te confirmaremos por email en menos de 24 h.",
      });
      setNotes("");

      // Guarda la dirección si el usuario lo pidió y es nueva
      if (saveThisAddress && postalCode !== undefined) {
        try {
          await saveAddress({
            label: address.trim().split(",")[0].slice(0, 24) || city.trim(),
            address: address.trim(),
            city: city.trim(),
            postalCode: postalCode.trim() || undefined,
          });
        } catch {
          /* no bloquea la reserva */
        }
      }

      setSubmitting(false);
      onSuccess?.();
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "No se pudo crear la reserva",
      );
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* Tipo de servicio */}
      <div className="flex flex-col gap-3">
        <Label className="text-sm font-semibold">¿Qué necesitas?</Label>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SERVICE_TYPES.map((service) => {
            const Icon = SERVICE_ICONS[service.key] ?? Sparkles;
            const selected = serviceType === service.key;
            return (
              <button
                key={service.key}
                type="button"
                onClick={() => setServiceType(service.key)}
                className={cn(
                  "group flex items-start gap-3 rounded-xl border p-3 text-left transition-all",
                  selected
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:border-primary/40 hover:bg-primary/5",
                )}
              >
                <span
                  className={cn(
                    "flex size-9 shrink-0 items-center justify-center rounded-lg",
                    selected
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground group-hover:text-primary",
                  )}
                >
                  <Icon className="size-4" />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium leading-tight">
                    {service.label}
                  </span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                    {service.description}
                  </span>
                </span>
                {selected && (
                  <Check className="ml-auto size-4 shrink-0 text-primary" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Tamaño de la vivienda */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2 rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-semibold">Habitaciones</Label>
            <span className="text-lg font-bold tabular-nums text-primary">
              {bedrooms}
            </span>
          </div>
          <Slider
            min={1}
            max={6}
            step={1}
            value={[bedrooms]}
            onValueChange={([v]) => setBedrooms(v)}
          />
        </div>
        <div className="flex flex-col gap-2 rounded-xl border border-border p-4">
          <div className="flex items-center justify-between">
            <Label className="text-sm font-semibold">Baños</Label>
            <span className="text-lg font-bold tabular-nums text-primary">
              {bathrooms}
            </span>
          </div>
          <Slider
            min={1}
            max={4}
            step={1}
            value={[bathrooms]}
            onValueChange={([v]) => setBathrooms(v)}
          />
        </div>
      </div>

      {/* Frecuencia */}
      <div className="flex flex-col gap-3">
        <Label className="text-sm font-semibold">¿Con qué frecuencia?</Label>
        <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
          {FREQUENCIES.map((freq) => {
            const selected = frequency === freq.key;
            return (
              <button
                key={freq.key}
                type="button"
                onClick={() => setFrequency(freq.key)}
                className={cn(
                  "flex flex-col items-start gap-1 rounded-xl border p-3 text-left transition-all",
                  selected
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:border-primary/40 hover:bg-primary/5",
                )}
              >
                <span className="text-sm font-medium">{freq.label}</span>
                <span className="text-xs text-muted-foreground">
                  {freq.description}
                </span>
                {freq.discount > 0 && (
                  <span className="mt-1 inline-flex items-center rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                    −{Math.round(freq.discount * 100)} %
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Extras */}
      <div className="flex flex-col gap-3">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-semibold">Extras (opcional)</Label>
          <Switch
            checked={extras.length > 0}
            onCheckedChange={(checked) =>
              setExtras(checked ? ["ironing"] : [])
            }
            aria-label="Añadir o quitar extras"
          />
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {EXTRAS.map((extra) => {
            const selected = extras.includes(extra.key);
            return (
              <button
                key={extra.key}
                type="button"
                onClick={() => toggleExtra(extra.key)}
                className={cn(
                  "flex items-center gap-3 rounded-xl border p-3 text-left transition-all",
                  selected
                    ? "border-primary bg-primary/10 shadow-sm"
                    : "border-border bg-background hover:border-primary/40 hover:bg-primary/5",
                )}
              >
                <span
                  className={cn(
                    "flex size-5 shrink-0 items-center justify-center rounded-md border",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-input",
                  )}
                >
                  {selected && <Check className="size-3" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium leading-tight">
                    {extra.label}
                  </span>
                  <span className="block text-xs text-muted-foreground">
                    {extra.description}
                  </span>
                </span>
                <span className="text-sm font-semibold tabular-nums">
                  +{extra.price} €
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Datos y fecha (solo modo reserva) */}
      {isBook && (
      <>
      {/* Direcciones guardadas */}
      {savedAddresses && savedAddresses.length > 0 && (
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-1.5">
            <BookMarked className="size-3.5" /> Mis direcciones
          </Label>
          <div className="flex flex-wrap gap-2">
            {savedAddresses.map((addr) => (
              <button
                key={addr._id}
                type="button"
                onClick={() => {
                  setSelectedAddressId(addr._id);
                  setAddress(addr.address);
                  setCity(addr.city);
                  if (addr.postalCode) setPostalCode(addr.postalCode);
                }}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs font-medium transition-all",
                  selectedAddressId === addr._id
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background hover:border-primary/40 hover:bg-primary/5",
                )}
              >
                {addr.label}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setSelectedAddressId(null)}
              className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground hover:bg-muted"
            >
              Otra dirección
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-address">Dirección</Label>
          <Input
            id="booking-address"
            placeholder="Calle Gran Vía 42, 3ºB"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-city">Ciudad</Label>
          <Input
            id="booking-city"
            placeholder="Madrid"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </div>
      </div>

      {/* Código postal con comprobación de cobertura */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="booking-zip" className="flex items-center gap-1.5">
          <MapPin className="size-3.5" /> Código postal
        </Label>
        <Input
          id="booking-zip"
          inputMode="numeric"
          maxLength={5}
          placeholder="28001"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value.replace(/\D/g, "").slice(0, 5))}
        />
        {coverage.status === "covered" && (
          <p className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <Check className="size-3.5" /> ¡Damos servicio en {coverage.province}!
          </p>
        )}
        {coverage.status === "waitlist" && (
          <p className="text-xs font-medium text-amber-600 dark:text-amber-400">
            Aún no llegamos a tu provincia. Escríbenos y te avisamos al abrir zona.
          </p>
        )}
        {coverage.status === "invalid" && (
          <p className="text-xs text-destructive">Introduce un CP español de 5 dígitos.</p>
        )}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-date" className="flex items-center gap-1.5">
            <Calendar className="size-3.5" /> Fecha preferida
          </Label>
          <Input
            id="booking-date"
            type="date"
            min={min}
            max={max}
            value={date}
            onChange={(e) => {
              setDate(e.target.value);
              setSlot("");
            }}
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="flex items-center gap-1.5">
            <CalendarCheck className="size-3.5" /> Franja horaria
          </Label>
          <div className="grid grid-cols-2 gap-2">
            {SLOTS.map((s) => {
              const takenCount = availability?.[s.key] ?? 0;
              const full = takenCount >= 2;
              const selected = slot === s.key;
              return (
                <button
                  key={s.key}
                  type="button"
                  disabled={full || !date}
                  onClick={() => setSlot(s.key)}
                  className={cn(
                    "rounded-lg border px-3 py-2 text-left transition-all",
                    selected
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background hover:border-primary/40 hover:bg-primary/5",
                    full && "opacity-40",
                    !date && "opacity-60",
                  )}
                >
                  <span className="block text-xs font-semibold">{s.label}</span>
                  <span className="block text-[10px] text-muted-foreground">
                    {full ? "Completo" : s.range}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="booking-notes">Notas para el equipo (opcional)</Label>
        <Textarea
          id="booking-notes"
          placeholder="Portero azul, mascota en casa, productos concretos…"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={2}
        />
      </div>

      {/* Guardar esta dirección (si es nueva) */}
      {savedAddresses !== undefined && (
        <label className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground">
          <input
            type="checkbox"
            checked={saveThisAddress}
            onChange={(e) => setSaveThisAddress(e.target.checked)}
            className="size-4 accent-[var(--primary)]"
          />
          Guardar esta dirección para futuras limpiezas
        </label>
      )}

      </>
      )}

      {/* Tarjeta regalo (solo modo reserva) */}
      {isBook && (
        <div className="flex flex-col gap-2">
          <Label htmlFor="booking-giftcard" className="flex items-center gap-1.5">
            <CreditCard className="size-3.5" /> Tarjeta regalo (opcional)
          </Label>
          <Input
            id="booking-giftcard"
            placeholder="BRIL-XXXX-XXXX"
            value={giftCardInput}
            onChange={(e) => setGiftCardInput(e.target.value.toUpperCase())}
            className="uppercase"
          />
          {giftCardInput.trim().length >= 8 && giftCardCheck && (
            <p
              className={cn(
                "flex items-center gap-1.5 text-xs font-medium",
                giftCardCheck.valid
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-destructive",
              )}
            >
              {giftCardCheck.valid ? <Check className="size-3.5" /> : <X className="size-3.5" />}
              {giftCardCheck.message}
            </p>
          )}
        </div>
      )}

      {/* Código de amigo (visible en ambos modos) */}
      <div className="flex flex-col gap-2">
        <Label htmlFor="booking-referral" className="flex items-center gap-1.5">
          <Gift className="size-3.5" /> ¿Tienes código de amigo?
        </Label>
        <Input
          id="booking-referral"
          placeholder="Ej. K7MQ2X"
          value={referralInput}
          onChange={(e) => setReferralInput(e.target.value.toUpperCase())}
          onBlur={(e) => {
            if (e.target.value.trim().length >= 4) {
              localStorage.setItem("brillanteza_ref", e.target.value.trim().toUpperCase());
            }
          }}
          className="uppercase"
        />
        {referralInput.trim().length >= 4 && referralCheck && (
          <p
            className={cn(
              "flex items-center gap-1.5 text-xs font-medium",
              referralCheck.valid
                ? "text-emerald-600 dark:text-emerald-400"
                : "text-destructive",
            )}
          >
            {referralCheck.valid ? <Check className="size-3.5" /> : <X className="size-3.5" />}
            {referralCheck.message || "Introduce un código válido"}
          </p>
        )}
        {referralInput.trim().length < 4 && (
          <p className="text-xs text-muted-foreground">
            10 € de descuento para ti y 15 € para tu amigo en su primera reserva.
          </p>
        )}
      </div>

      {/* Resumen de precio */}
      <Card className="border-primary/30 bg-primary/5 shadow-none">
        <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Tu presupuesto
            </span>
            <span className="text-3xl font-extrabold tabular-nums text-foreground">
              {quote.price.toFixed(2).replace(".", ",")} €
            </span>
            {quote.savings > 0 && (
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                Ahorras {quote.savings.toFixed(2).replace(".", ",")} € con «
                {quote.discountLabel}»
              </span>
            )}
            {monthly && (
              <span className="text-xs font-medium text-foreground">
                ≈ {monthly.perMonth.toFixed(0)} €/mes · {monthly.visitsPerMonth} visita(s) al mes
              </span>
            )}
          </div>
          <ul className="flex-1 space-y-1 sm:pl-6 sm:text-right">
            {quote.breakdown.map((item, i) => (
              <li
                key={i}
                className="flex items-center justify-between gap-2 text-xs text-muted-foreground sm:justify-end"
              >
                <span>{item.label}</span>
                <span className="font-medium tabular-nums">
                  {item.amount >= 0 ? "" : "−"}
                  {Math.abs(item.amount).toFixed(2).replace(".", ",")} €
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between gap-2 text-xs font-medium text-foreground sm:justify-end">
              <span>Duración estimada</span>
              <span>{quote.durationHours} h</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Button
        type="submit"
        size="lg"
        disabled={isBook && !canSubmit}
        className="w-full text-base font-semibold"
      >
        {submitting ? (
          <>
            <Loader2 className="mr-2 size-4 animate-spin" /> Reservando…
          </>
        ) : isBook ? (
          <>
            <MapPin className="mr-2 size-4" /> Confirmar reserva
          </>
        ) : (
          <>
            Reservar con este precio <ArrowRight className="ml-2 size-4" />
          </>
        )}
      </Button>
      <p className="text-center text-xs text-muted-foreground">
        Sin pago por adelantado. Cancela gratis hasta 24 h antes.
      </p>
    </form>
  );
}
