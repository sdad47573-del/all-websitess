import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import {
  api,
  errorMessage,
  type Availability,
  type Booking,
  GIFT_AMOUNTS,
  TIME_SLOTS,
  type ExtraId,
  type Gift as GiftVoucher,
  type GiftAmount,
  type Pass,
  type PassType,
} from "@/api";
import {
  BadgeCheck,
  CalendarCheck,
  CalendarDays,
  Car,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Crown,
  Droplets,
  Lightbulb,
  LayoutDashboard,
  Loader2,
  LogOut,
  Armchair,
  Sparkles,
  Star,
  Ticket,
  Wind,
  Wrench,
  X,
  CarFront,
  Gift,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { BrandMark } from "@/components/BrandMark";
import {
  SERVICES,
  VEHICLE_TYPES,
  EXTRA_SERVICES,
  PASS_OFFERS,
  PROMO,
  PICKUP_PRICE,
  LOYALTY_EURO_PER_POINT,
  STATUS_LABELS,
  STATUS_STYLES,
  priceFor,
  type ServiceId,
  type VehicleType,
} from "@/lib/services";

const SERVICE_NAMES: Record<ServiceId, string> = {
  express: "Express 30'",
  complete: "Lavado Completo",
  premium: "Detailing Premium",
  ceramic: "Cerámico 9H",
};

const VEHICLE_LABELS: Record<VehicleType, string> = {
  small: "Compacto",
  sedan: "Sedán",
  suv: "SUV",
  van: "Furgoneta",
};

const EXTRA_ICONS = {
  wind: Wind,
  engine: Wrench,
  lightbulb: Lightbulb,
  armchair: Armchair,
};

function formatDMY(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

function addDays(base: Date, days: number) {
  const d = new Date(base);
  d.setDate(d.getDate() + days);
  return d;
}

function toDateKey(d: Date) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

const WEEKDAYS = ["L", "M", "X", "J", "V", "S", "D"];

function MiniCalendar({
  selected,
  onSelect,
}: {
  selected: string | null;
  onSelect: (dateKey: string) => void;
}) {
  const [monthOffset, setMonthOffset] = useState(0);
  const today = new Date();
  const base = new Date(today.getFullYear(), today.getMonth() + monthOffset, 1);
  const year = base.getFullYear();
  const month = base.getMonth();

  const firstWeekday = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const cells: (number | null)[] = [
    ...Array.from({ length: firstWeekday }, () => null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const todayKey = toDateKey(today);
  const maxDate = addDays(today, 60);

  return (
    <div>
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          className="rounded-md p-1.5 hover:bg-primary/10 disabled:opacity-30"
          onClick={() => setMonthOffset((m) => m - 1)}
          disabled={monthOffset === 0}
          aria-label="Mes anterior"
        >
          <ChevronLeft className="size-4" />
        </button>
        <p className="font-display text-sm font-semibold capitalize">
          {base.toLocaleDateString("es-ES", { month: "long", year: "numeric" })}
        </p>
        <button
          type="button"
          className="rounded-md p-1.5 hover:bg-primary/10 disabled:opacity-30"
          onClick={() => setMonthOffset((m) => m + 1)}
          disabled={base > maxDate}
          aria-label="Mes siguiente"
        >
          <ChevronRight className="size-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-muted-foreground">
        {WEEKDAYS.map((w, i) => (
          <span key={i} className="py-1">
            {w}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          if (day === null) return <span key={`x-${i}`} />;
          const key = toDateKey(new Date(year, month, day));
          const disabled = key < todayKey || key > toDateKey(maxDate);
          const isSelected = selected === key;
          return (
            <button
              key={key}
              type="button"
              disabled={disabled}
              onClick={() => onSelect(key)}
              className={`aspect-square rounded-lg text-sm transition-all ${
                isSelected
                  ? "bg-primary font-bold text-primary-foreground glow-brand"
                  : disabled
                    ? "text-muted-foreground/30"
                    : "text-foreground hover:bg-primary/15"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Presupuesto orientativo del cliente (el precio final lo calcula el servidor) */
function quote(
  service: ServiceId,
  vehicle: VehicleType,
  extras: string[],
  usePass: Pass | null,
) {
  const base = priceFor(service, vehicle);
  const extrasTotal = extras.reduce(
    (sum, id) => sum + (EXTRA_SERVICES.find((e) => e.id === id)?.price ?? 0),
    0,
  );
  let price = base + extrasTotal;
  let discount = 0;
  if (usePass && usePass.washesUsed < usePass.washesTotal) {
    price = Math.max(0, price - base);
    discount = 100;
  }
  return { price, base, extrasTotal, discount };
}

function WizardBooking({
  onBooked,
  passes,
}: {
  onBooked: () => void;
  passes: Pass[];
}) {
  const [step, setStep] = useState(0);
  const [service, setService] = useState<ServiceId | null>(null);
  const [vehicle, setVehicle] = useState<VehicleType>("sedan");
  // The account used to supply these, and the workshop needs them to know whose
  // car to expect and how to reach the customer. Both are required.
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [plate, setPlate] = useState("");
  const [notes, setNotes] = useState("");
  const [extras, setExtras] = useState<ExtraId[]>([]);
  const [promoInput, setPromoInput] = useState("");
  const [promoApplied, setPromoApplied] = useState(false);
  const [usePassId, setUsePassId] = useState<string | null>(null);
  const [pickup, setPickup] = useState(false);
  const [giftInput, setGiftInput] = useState("");
  const [date, setDate] = useState<string | null>(null);
  const [slot, setSlot] = useState<(typeof TIME_SLOTS)[number] | null>(null);
  const [submitting, setSubmitting] = useState(false);

  // Availability for the chosen day. Refetched when the day changes, and left
  // null before a day is picked rather than showing a misleading empty grid.
  const [availability, setAvailability] = useState<Availability[] | null>(null);
  const [loadingSlots, setLoadingSlots] = useState(false);

  useEffect(() => {
    if (!date) {
      setAvailability(null);
      return;
    }

    let cancelled = false;
    setLoadingSlots(true);
    void api.api.bookings.availability
      .$get({ query: { date } })
      .then((response) => (response.ok ? response.json() : []))
      .then((slots: Availability[]) => {
        if (!cancelled) setAvailability(slots);
      })
      .catch(() => {
        if (!cancelled) setAvailability([]);
      })
      .finally(() => {
        if (!cancelled) setLoadingSlots(false);
      });

    return () => {
      cancelled = true;
    };
  }, [date]);

  // Voucher check, only once there is something that looks like a code.
  const trimmedGift = giftInput.trim();
  const [giftCheck, setGiftCheck] = useState<
    | { valid: false; reason: string }
    | { valid: true; amount: number; code: string }
    | null
  >(null);

  useEffect(() => {
    if (trimmedGift.length < 8) {
      setGiftCheck(null);
      return;
    }

    let cancelled = false;
    void (async () => {
      try {
        const response = await api.api.gifts.validate.$get({
          query: { code: trimmedGift },
        });
        if (cancelled) return;
        if (!response.ok) {
          setGiftCheck(null);
          return;
        }
        setGiftCheck(
          (await response.json()) as
            | { valid: false; reason: string }
            | { valid: true; amount: number; code: string },
        );
      } catch {
        if (!cancelled) setGiftCheck(null);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [trimmedGift]);

  const activePass =
    passes?.find((p) => p.id === usePassId && p.washesLeft > 0) ?? null;
  const usablePasses =
    passes?.filter((p) => p.washesLeft > 0 && p.serviceId === service) ?? [];

  const q = service
    ? quote(service, vehicle, extras, activePass)
    : { price: 0, base: 0, extrasTotal: 0, discount: 0 };
  const pickupFee = pickup ? PICKUP_PRICE : 0;
  const giftValid =
    giftCheck && giftCheck.valid
      ? { code: giftCheck.code, amount: giftCheck.amount }
      : null;
  const giftActive = giftValid !== null && q.discount === 0;
  const promoActive = promoApplied && q.discount === 0;
  const finalEstimate =
    (promoActive ? Math.round(q.price * 0.9) : q.price) + pickupFee;

  const toggleExtra = (id: ExtraId) =>
    setExtras((prev) =>
      prev.includes(id) ? prev.filter((e) => e !== id) : [...prev, id],
    );

  const STEPS = [
    "Servicio",
    "Vehículo",
    "Extras",
    "Fecha y hora",
    "Tus datos",
    "Confirmar",
  ];

  return (
    <div className="space-y-6">
      {/* Pasos */}
      <div className="flex items-center gap-2">
        {STEPS.map((label, i) => (
          <div key={label} className="flex flex-1 items-center gap-2">
            <div
              className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-colors ${
                step > i
                  ? "bg-primary text-primary-foreground"
                  : step === i
                    ? "border-2 border-primary text-primary"
                    : "border border-border text-muted-foreground"
              }`}
            >
              {step > i ? <CheckCircle2 className="size-4" /> : i + 1}
            </div>
            <span
              className={`hidden text-sm lg:block ${step === i ? "font-semibold" : "text-muted-foreground"}`}
            >
              {label}
            </span>
            {i < STEPS.length - 1 && (
              <div
                className={`h-px flex-1 ${step > i ? "bg-primary" : "bg-border"}`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Contenido del paso */}
      <div className="min-h-[320px]">
        {step === 0 && (
          <div className="grid gap-3 sm:grid-cols-2">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setService(s.id)}
                className={`rounded-xl border p-4 text-left transition-all ${
                  service === s.id
                    ? "border-primary bg-primary/10 glow-brand"
                    : "border-border bg-card/60 hover:border-primary/40"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-display font-bold">{s.name}</span>
                  <span className="text-sm font-semibold text-primary">
                    {priceFor(s.id, vehicle)}€
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {s.tagline}
                </p>
                <p className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="size-3" />
                  {s.durationMin < 60
                    ? `${s.durationMin} min`
                    : `${s.durationMin / 60} h`}
                </p>
              </button>
            ))}
          </div>
        )}

        {step === 1 && (
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {VEHICLE_TYPES.map((v) => (
                <button
                  key={v.id}
                  type="button"
                  onClick={() => setVehicle(v.id)}
                  className={`rounded-xl border p-4 text-center transition-all ${
                    vehicle === v.id
                      ? "border-primary bg-primary/10 glow-brand"
                      : "border-border bg-card/60 hover:border-primary/40"
                  }`}
                >
                  <Car className="mx-auto size-5 text-primary" />
                  <p className="mt-2 text-sm font-semibold">{v.label}</p>
                  <p className="text-xs text-muted-foreground">{v.example}</p>
                </button>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <Label htmlFor="w-plate">Matrícula (opcional)</Label>
                <Input
                  id="w-plate"
                  value={plate}
                  onChange={(e) => setPlate(e.target.value.toUpperCase())}
                  placeholder="1234 ABC"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="w-notes">Notas para el equipo</Label>
                <Textarea
                  id="w-notes"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={2}
                  placeholder="Ej: manchas en el asiento trasero"
                />
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <div className="grid gap-3 sm:grid-cols-2">
              {EXTRA_SERVICES.map((e) => {
                const Icon = EXTRA_ICONS[e.icon];
                const selected = extras.includes(e.id);
                return (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => toggleExtra(e.id)}
                    className={`flex items-center justify-between gap-3 rounded-xl border p-4 text-left transition-all ${
                      selected
                        ? "border-primary bg-primary/10 glow-brand"
                        : "border-border bg-card/60 hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex size-10 items-center justify-center rounded-xl ${selected ? "bg-primary text-primary-foreground" : "bg-primary/15 text-primary"}`}
                      >
                        <Icon className="size-5" />
                      </div>
                      <div>
                        <p className="font-semibold">{e.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {e.description}
                        </p>
                      </div>
                    </div>
                    <span className="font-display font-bold text-primary">
                      +{e.price}€
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bono disponible para este servicio */}
            {usablePasses.length > 0 && (
              <div className="rounded-xl border border-amber-500/40 bg-amber-500/[0.07] p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-amber-400">
                  <Ticket className="size-4" /> Tienes bonos para este servicio
                </p>
                <div className="mt-3 space-y-2">
                  {usablePasses.map((p) => (
                    <label
                      key={p.id}
                      className="flex cursor-pointer items-center justify-between rounded-lg bg-card/70 px-4 py-2.5 text-sm"
                    >
                      <span className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={usePassId === p.id}
                          onChange={(ev) =>
                            setUsePassId(ev.target.checked ? p.id : null)
                          }
                          className="accent-primary"
                        />
                        Bono {SERVICE_NAMES[p.serviceId as ServiceId]} —{" "}
                        {p.washesTotal - p.washesUsed} lavados restantes
                      </span>
                      <span className="text-xs text-muted-foreground">
                        Lavado incluido
                      </span>
                    </label>
                  ))}
                </div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Usar bono: el lavado sale gratis (los extras se pagan aparte).
                </p>
              </div>
            )}
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-border bg-card/60 p-4">
              <MiniCalendar selected={date} onSelect={(key) => setDate(key)} />
            </div>
            <div className="rounded-xl border border-border bg-card/60 p-4">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold">
                <Clock className="size-4 text-primary" /> Franjas horarias
              </p>
              {!date && (
                <p className="text-sm text-muted-foreground">
                  Selecciona primero un día.
                </p>
              )}
              {loadingSlots && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="size-4 animate-spin" /> Cargando
                  disponibilidad...
                </div>
              )}
              {date && !loadingSlots && (
                <div className="space-y-2">
                  {availability?.map((a) => (
                    <button
                      key={a.timeSlot}
                      type="button"
                      disabled={!a.free}
                      onClick={() => setSlot(a.timeSlot)}
                      className={`flex w-full items-center justify-between rounded-lg border px-4 py-2.5 text-sm transition-all ${
                        slot === a.timeSlot
                          ? "border-primary bg-primary/10 glow-brand"
                          : a.free
                            ? "border-border hover:border-primary/40"
                            : "border-border/50 text-muted-foreground/50 line-through"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <Clock className="size-4 text-primary" />
                        {a.timeSlot}
                      </span>
                      <span className="text-xs">
                        {a.free ? "Disponible" : "Completo"}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {step === 4 && service && date && slot && (
          <div className="max-w-md space-y-4 rounded-xl border border-border bg-card/60 p-6">
            <div>
              <Label htmlFor="w-name">Nombre *</Label>
              <Input
                id="w-name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder="Para quién es la cita"
                className="mt-1.5"
              />
            </div>
            <div>
              <Label htmlFor="w-phone">Teléfono *</Label>
              <Input
                id="w-phone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder="+34 600 000 000"
                className="mt-1.5"
              />
              <p className="mt-1.5 text-xs text-muted-foreground">
                Te llamamos si hay cualquier cambio con la cita.
              </p>
            </div>
          </div>
        )}

        {step === 5 && service && date && slot && (
          <div className="grid gap-6 md:grid-cols-5">
            <div className="rounded-xl border border-border bg-card/60 p-6 md:col-span-3 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-xs text-muted-foreground">Servicio</p>
                  <p className="font-display text-lg font-bold">
                    {SERVICE_NAMES[service]}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Vehículo</p>
                  <p className="font-display text-lg font-bold">
                    {VEHICLE_LABELS[vehicle]}
                    {plate ? ` · ${plate}` : ""}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Fecha</p>
                  <p className="font-display text-lg font-bold">
                    {formatDMY(date)} · {slot}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Contacto</p>
                  <p className="font-display text-lg font-bold">
                    {customerName}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {customerPhone}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Extras</p>
                  <p className="text-sm font-semibold">
                    {extras.length === 0
                      ? "Ninguno"
                      : extras
                          .map(
                            (id) =>
                              EXTRA_SERVICES.find((e) => e.id === id)?.name,
                          )
                          .join(", ")}
                  </p>
                </div>
              </div>

              {/* Recogida a domicilio */}
              <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border bg-card/70 p-3">
                <input
                  type="checkbox"
                  checked={pickup}
                  onChange={(e) => setPickup(e.target.checked)}
                  className="mt-0.5 accent-primary"
                />
                <span>
                  <span className="flex items-center gap-1.5 text-sm font-semibold">
                    <CarFront className="size-4 text-primary" /> Recogida a
                    domicilio
                    <Badge
                      variant="outline"
                      className="border-primary/40 text-primary"
                    >
                      +{PICKUP_PRICE}€
                    </Badge>
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    Recogemos tu coche, lo tratamos en el centro y te lo
                    devolvemos el mismo día (Madrid capital).
                  </span>
                </span>
              </label>

              {activePass && (
                <div className="flex items-center gap-2 rounded-lg bg-amber-500/10 border border-amber-500/30 px-3 py-2 text-sm text-amber-400">
                  <Ticket className="size-4" /> Bono aplicado:{" "}
                  {activePass.washesTotal - activePass.washesUsed} lavados
                  restantes después de esta cita
                </div>
              )}
              {notes && (
                <div className="border-t border-border/70 pt-4">
                  <p className="text-xs text-muted-foreground">Notas</p>
                  <p className="text-sm">{notes}</p>
                </div>
              )}
            </div>

            {/* Resumen económico */}
            <div className="rounded-xl border border-primary/30 bg-primary/[0.06] p-6 md:col-span-2">
              <p className="font-display font-bold">Resumen</p>
              <div className="mt-3 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground">
                  <span>
                    {SERVICE_NAMES[service]} ({VEHICLE_LABELS[vehicle]})
                  </span>
                  <span>{q.base}€</span>
                </div>
                {q.extrasTotal > 0 && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Extras ({extras.length})</span>
                    <span>+{q.extrasTotal}€</span>
                  </div>
                )}
                {pickup && (
                  <div className="flex justify-between text-muted-foreground">
                    <span>Recogida a domicilio</span>
                    <span>+{PICKUP_PRICE}€</span>
                  </div>
                )}
                {activePass && (
                  <div className="flex justify-between text-amber-400">
                    <span>Bono (lavado gratis)</span>
                    <span>-{q.base}€</span>
                  </div>
                )}
                {giftActive && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Bono regalo {giftValid!.code}</span>
                    <span>-{giftValid!.amount}€</span>
                  </div>
                )}
                {promoActive && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Promo {PROMO.code}</span>
                    <span>-10%</span>
                  </div>
                )}
                <div className="flex items-baseline justify-between border-t border-border/70 pt-3">
                  <span className="font-semibold">Total estimado</span>
                  <span className="font-display text-3xl font-extrabold text-primary">
                    {finalEstimate}€
                  </span>
                </div>
              </div>

              {!activePass && !promoApplied && !giftActive && (
                <div className="mt-4">
                  <Label
                    htmlFor="w-promo"
                    className="text-xs text-muted-foreground"
                  >
                    ¿Tienes código promo?
                  </Label>
                  <div className="mt-1.5 flex gap-2">
                    <Input
                      id="w-promo"
                      value={promoInput}
                      onChange={(e) =>
                        setPromoInput(e.target.value.toUpperCase())
                      }
                      placeholder={PROMO.code}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        if (promoInput.trim() === PROMO.code) {
                          setPromoApplied(true);
                          toast.success(`Promo ${PROMO.code} aplicada: -10%`);
                        } else {
                          toast.error("Código no válido");
                        }
                      }}
                    >
                      Aplicar
                    </Button>
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {PROMO.label}
                  </p>
                </div>
              )}

              {/* Bono regalo (si alguien te lo ha regalado) */}
              {!activePass && !giftActive && (
                <div className="mt-4">
                  <Label
                    htmlFor="w-gift"
                    className="text-xs text-muted-foreground"
                  >
                    ¿Tienes un bono regalo?
                  </Label>
                  <div className="mt-1.5 flex gap-2">
                    <Input
                      id="w-gift"
                      value={giftInput}
                      onChange={(e) =>
                        setGiftInput(e.target.value.toUpperCase())
                      }
                      placeholder="AUTO-XXXX-XXXX"
                    />
                  </div>
                  {giftInput.trim().length >= 8 && giftCheck && (
                    <p
                      className={`mt-1.5 text-xs ${giftCheck.valid ? "text-emerald-400" : "text-red-400"}`}
                    >
                      {giftCheck.valid
                        ? `Bono de ${giftCheck.amount}€ válido — se descontará al confirmar.`
                        : giftCheck.reason}
                    </p>
                  )}
                </div>
              )}
              <p className="mt-3 text-[11px] text-muted-foreground">
                El precio definitivo lo confirma el taller al recibir la
                reserva.
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Navegación */}
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="gap-1.5"
        >
          <ChevronLeft className="size-4" /> Atrás
        </Button>
        {step < STEPS.length - 1 ? (
          <Button
            onClick={() => setStep((s) => s + 1)}
            disabled={
              (step === 0 && !service) ||
              (step === 3 && (!date || !slot)) ||
              (step === 4 &&
                (customerName.trim().length < 2 ||
                  customerPhone.trim().length < 9))
            }
            className="gap-1.5"
          >
            Continuar <ChevronRight className="size-4" />
          </Button>
        ) : (
          <Button
            onClick={async () => {
              if (!service || !date || !slot) return;
              if (
                customerName.trim().length < 2 ||
                customerPhone.trim().length < 9
              ) {
                toast.error(
                  "Indica tu nombre y un teléfono para que podamos confirmarte la cita.",
                );
                return;
              }
              setSubmitting(true);
              try {
                // No price is sent: the server computes it, and a pass or
                // voucher is re-checked inside the same transaction.
                const response = await api.api.bookings.$post({
                  json: {
                    customerName,
                    customerPhone,
                    serviceId: service,
                    vehicleType: vehicle,
                    vehiclePlate: plate || undefined,
                    date,
                    timeSlot: slot,
                    notes: notes || undefined,
                    extras,
                    promoCode: promoActive ? PROMO.code : undefined,
                    usePassId: activePass?.id,
                    pickup,
                    giftCode: giftActive ? giftValid!.code : undefined,
                  },
                });
                if (!response.ok) {
                  toast.error(
                    await errorMessage(response, "Error al crear la reserva"),
                  );
                  return;
                }

                const booking = (await response.json()) as Booking;
                toast.success("¡Reserva creada!", {
                  description: `Te confirmaremos la cita del ${formatDMY(booking.date)}.`,
                });
                setStep(0);
                setService(null);
                setDate(null);
                setSlot(null);
                setCustomerName("");
                setCustomerPhone("");
                setPlate("");
                setNotes("");
                setExtras([]);
                setPromoApplied(false);
                setPromoInput("");
                setUsePassId(null);
                setPickup(false);
                setGiftInput("");
                onBooked();
              } catch {
                toast.error("No se pudo crear la reserva.");
              } finally {
                setSubmitting(false);
              }
            }}
            disabled={submitting}
            className="gap-2 shine relative overflow-hidden"
          >
            {submitting ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <CalendarCheck className="size-4" />
            )}
            {submitting
              ? "Reservando..."
              : `Confirmar reserva · ${finalEstimate}€`}
          </Button>
        )}
      </div>
    </div>
  );
}

function MyBookings({
  bookings,
  onChanged,
  onNewBooking,
}: {
  bookings: Booking[];
  onChanged: () => void;
  onNewBooking: () => void;
}) {
  const [reviewFor, setReviewFor] = useState<Booking | null>(null);

  const sorted = useMemo(() => {
    return [...bookings].sort((a, b) => {
      const ka = `${a.date}-${a.timeSlot}`;
      const kb = `${b.date}-${b.timeSlot}`;
      return ka.localeCompare(kb);
    });
  }, [bookings]);

  const upcoming = sorted.filter(
    (b) => b.status === "pending" || b.status === "confirmed",
  );
  const history = sorted.filter(
    (b) => b.status === "done" || b.status === "cancelled",
  );

  const handleCancel = async (bookingId: string) => {
    const response = await api.api.bookings[":id"].cancel.$post({
      param: { id: bookingId },
    });
    if (!response.ok) {
      toast.error(await errorMessage(response, "Error al cancelar"));
      return;
    }

    toast.success("Reserva cancelada");
    onChanged();
  };

  const renderBooking = (b: Booking) => (
    <div
      key={b.id}
      className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card/60 p-4"
    >
      <div>
        <div className="flex items-center gap-2">
          <p className="font-semibold">
            {SERVICE_NAMES[b.serviceId as ServiceId] ?? b.serviceId}
          </p>
          <Badge variant="outline" className={STATUS_STYLES[b.status] ?? ""}>
            {STATUS_LABELS[b.status] ?? b.status}
          </Badge>
          {b.discount === 100 && (
            <Badge
              variant="outline"
              className="border-amber-500/30 bg-amber-500/10 text-amber-500"
            >
              Bono
            </Badge>
          )}
        </div>
        <p className="mt-1 text-sm text-muted-foreground">
          {formatDMY(b.date)} · {b.timeSlot} ·{" "}
          {VEHICLE_LABELS[b.vehicleType as VehicleType] ?? b.vehicleType}
          {b.vehiclePlate ? ` · ${b.vehiclePlate}` : ""}
        </p>
        {b.extras && b.extras.length > 0 && (
          <p className="mt-1 text-xs text-primary">
            +{" "}
            {b.extras
              .map((id) => EXTRA_SERVICES.find((e) => e.id === id)?.name ?? id)
              .join(", ")}
          </p>
        )}
        {b.notes && (
          <p className="mt-1 text-xs text-muted-foreground italic">
            "{b.notes}"
          </p>
        )}
      </div>
      <div className="flex items-center gap-3">
        <span className="font-display text-lg font-bold text-primary">
          {b.price}€
        </span>
        {b.status === "done" && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-amber-400 hover:bg-amber-500/10 hover:text-amber-400"
            onClick={() => setReviewFor(b)}
          >
            <Star className="size-3.5" /> Valorar
          </Button>
        )}
        {(b.status === "pending" || b.status === "confirmed") && (
          <Button
            variant="outline"
            size="sm"
            className="gap-1 text-red-400 hover:bg-red-500/10 hover:text-red-400"
            onClick={() => handleCancel(b.id)}
          >
            <X className="size-3.5" /> Cancelar
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {upcoming.length === 0 && history.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border p-10 text-center">
          <Droplets className="mx-auto size-10 text-primary/60" />
          <h3 className="mt-4 font-display text-lg font-semibold">
            Aún no tienes reservas
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Reserva tu primer lavado y gana puntos de fidelidad.
          </p>
          <Button className="mt-5 gap-2" onClick={onNewBooking}>
            <CalendarCheck className="size-4" /> Reservar ahora
          </Button>
        </div>
      ) : (
        <>
          <div>
            <h3 className="mb-3 flex items-center gap-2 font-display font-bold">
              <CalendarDays className="size-4 text-primary" /> Próximas citas
            </h3>
            {upcoming.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No tienes citas próximas.
              </p>
            ) : (
              <div className="space-y-3">{upcoming.map(renderBooking)}</div>
            )}
          </div>
          {history.length > 0 && (
            <div>
              <h3 className="mb-3 flex items-center gap-2 font-display font-bold">
                <Clock className="size-4 text-primary" /> Historial
              </h3>
              <div className="space-y-3">{history.map(renderBooking)}</div>
            </div>
          )}
        </>
      )}

      <ReviewDialog
        booking={reviewFor}
        onClose={() => setReviewFor(null)}
        onReviewed={onChanged}
      />
    </div>
  );
}

function ReviewDialog({
  booking,
  onClose,
  onReviewed,
}: {
  booking: Booking | null;
  onClose: () => void;
  onReviewed: () => void;
}) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const open = booking !== null;

  const handleSubmit = async () => {
    if (!booking) return;
    setSubmitting(true);
    try {
      const response = await api.api.reviews.$post({
        json: { bookingId: booking.id, rating, comment: comment || undefined },
      });
      if (!response.ok) {
        toast.error(await errorMessage(response, "Error al enviar la reseña"));
        return;
      }

      toast.success("¡Gracias por tu reseña verificada!");
      onClose();
      setComment("");
      setRating(5);
      onReviewed();
    } catch {
      toast.error("No se pudo enviar la reseña.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 font-display">
            <BadgeCheck className="size-5 text-primary" /> Reseña verificada
          </DialogTitle>
          <DialogDescription>
            Solo los clientes con un servicio finalizado pueden valorar. Tu
            opinión aparece en la web.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-1.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                type="button"
                onClick={() => setRating(n)}
                aria-label={`${n} estrellas`}
              >
                <Star
                  className={`size-8 transition-all ${n <= rating ? "fill-amber-400 text-amber-400 scale-110" : "text-muted-foreground/40"}`}
                />
              </button>
            ))}
          </div>
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            rows={3}
            placeholder="¿Cómo ha quedado tu coche? (opcional)"
          />
        </div>
        <DialogFooter>
          <Button variant="ghost" onClick={onClose}>
            Cancelar
          </Button>
          <Button
            onClick={handleSubmit}
            disabled={submitting}
            className="gap-2"
          >
            {submitting && <Loader2 className="size-4 animate-spin" />}
            Enviar reseña
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Passes({
  passes,
  myGifts,
  onBuy,
}: {
  passes: Pass[];
  myGifts: GiftVoucher[];
  onBuy: () => void;
}) {
  const [buying, setBuying] = useState<string | null>(null);
  const [giftAmount, setGiftAmount] = useState<GiftAmount | null>(null);
  const [lastGift, setLastGift] = useState<{
    code: string;
    amount: number;
  } | null>(null);

  const handleBuy = async (passType: PassType) => {
    setBuying(passType);
    try {
      const response = await api.api.passes.$post({ json: { passType } });
      if (!response.ok) {
        toast.error(await errorMessage(response, "Error al comprar el bono"));
        return;
      }

      toast.success("¡Bono activado!", {
        description:
          "Ya puedes usarlo al reservar. El pago se realiza en el taller.",
      });
      onBuy();
    } finally {
      setBuying(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2">
        {PASS_OFFERS.map((offer) => {
          const mine = passes.filter((p) => p.serviceId === offer.serviceId);
          const remaining = mine.reduce((sum, p) => sum + p.washesLeft, 0);
          return (
            <Card
              key={offer.id}
              className="relative border-primary/30 bg-primary/[0.05]"
            >
              <span className="absolute -top-3 right-4 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-amber-950">
                AHORRA {offer.savingPct}%
              </span>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2 font-display">
                  <Ticket className="size-5 text-primary" /> {offer.name}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-4xl font-extrabold text-primary">
                    {offer.price}€
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    {offer.normalPrice}€
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {offer.washes} lavados de {SERVICE_NAMES[offer.serviceId]} a{" "}
                  {VEHICLE_LABELS.sedan.toLowerCase()} (equivalente).
                </p>
                {remaining > 0 && (
                  <Badge
                    className="mt-3 border-amber-500/30 bg-amber-500/10 text-amber-500"
                    variant="outline"
                  >
                    Te quedan {remaining} lavados
                  </Badge>
                )}
                <Button
                  className="mt-4 w-full gap-2 shine relative overflow-hidden"
                  onClick={() => handleBuy(offer.id)}
                  disabled={buying !== null}
                >
                  {buying === offer.id ? (
                    <Loader2 className="size-4 animate-spin" />
                  ) : (
                    <Ticket className="size-4" />
                  )}
                  {remaining > 0 ? "Comprar otro" : "Comprar bono"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <p className="text-xs text-muted-foreground">
        Los bonos no caducan y son válidos para un vehículo. En cada reserva
        podrás elegir si gastas un lavado del bono o pagas con normalidad. El
        pago del bono se efectúa en el taller.
      </p>

      {/* BONO REGALO */}
      <div className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-6">
        <h3 className="flex items-center gap-2 font-display text-xl font-bold">
          <Gift className="size-5 text-amber-400" /> Bono regalo digital
        </h3>
        <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
          Compra un importe, recibe tu código único y regalaselo a quien
          quieras. El afortunado lo canjea al reservar online (no vale para el
          comprador).
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {GIFT_AMOUNTS.map((amount) => (
            <button
              key={amount}
              type="button"
              onClick={() => setGiftAmount(amount)}
              className={`rounded-xl border px-5 py-3 font-display font-bold transition-all ${
                giftAmount === amount
                  ? "border-amber-400 bg-amber-400/15 text-amber-300"
                  : "border-border bg-card/60 text-muted-foreground hover:border-amber-400/40"
              }`}
            >
              {amount}€
            </button>
          ))}
          <Button
            className="gap-2"
            disabled={giftAmount === null || buying !== null}
            onClick={async () => {
              if (giftAmount === null) return;
              setBuying("gift");
              try {
                const response = await api.api.gifts.$post({
                  json: { amount: giftAmount },
                });
                if (!response.ok) {
                  toast.error(
                    await errorMessage(response, "Error al crear el bono"),
                  );
                  return;
                }

                const gift = (await response.json()) as {
                  code: string;
                  amount: number;
                };
                setLastGift(gift);
                toast.success(`Bono regalo ${gift.code} creado`);
                onBuy();
              } catch {
                toast.error("No se pudo crear el bono.");
              } finally {
                setBuying(null);
              }
            }}
          >
            {buying === "gift" ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              <Gift className="size-4" />
            )}
            Crear bono regalo
          </Button>
        </div>

        {lastGift && (
          <div className="mt-4 rounded-lg border border-emerald-500/40 bg-emerald-500/10 p-4">
            <p className="text-sm text-emerald-400">
              ¡Bono creado! Código para regalar:{" "}
              <span className="font-mono font-bold">{lastGift.code}</span>
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-2"
              onClick={() => {
                void navigator.clipboard?.writeText(lastGift.code);
                toast.success("Código copiado al portapapeles");
              }}
            >
              Copiar código
            </Button>
          </div>
        )}

        {myGifts.length > 0 && (
          <div className="mt-4 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Tus bonos regalo
            </p>
            {myGifts.map((g) => (
              <div
                key={g.id}
                className="flex items-center justify-between rounded-lg bg-card/70 px-4 py-2 text-sm"
              >
                <span className="font-mono">{g.code}</span>
                <span className="flex items-center gap-2">
                  <span className="font-semibold">{g.amount}€</span>
                  <Badge
                    variant="outline"
                    className={
                      g.status === "active"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-muted-foreground/30 text-muted-foreground"
                    }
                  >
                    {g.status === "active" ? "Activo" : "Canjeado"}
                  </Badge>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Loyalty({ bookings }: { bookings: Booking[] }) {
  const done = bookings.filter((b) => b.status === "done");
  const totalSpent = done.reduce((sum, b) => sum + b.price, 0);
  const points = Math.floor(totalSpent / LOYALTY_EURO_PER_POINT);
  const FREE_EXPRESS_AT = 100;
  const progress = Math.min(100, (points / FREE_EXPRESS_AT) * 100);

  return (
    <div className="space-y-4">
      <Card className="border-primary/30 bg-primary/[0.06]">
        <CardHeader className="pb-3">
          <CardTitle className="flex items-center gap-2 font-display">
            <Crown className="size-5 text-amber-400" /> Tu fidelidad
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-end justify-between">
            <div>
              <p className="font-display text-4xl font-extrabold text-primary">
                {points}
              </p>
              <p className="text-sm text-muted-foreground">puntos acumulados</p>
            </div>
            <p className="text-xs text-muted-foreground">
              {Math.max(0, FREE_EXPRESS_AT - points)} puntos para tu Express
              gratis
            </p>
          </div>
          <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-muted">
            <div
              className="h-full rounded-full bg-gradient-to-r from-primary to-amber-400 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            1 punto por cada {LOYALTY_EURO_PER_POINT}€ en servicios finalizados.
            Con {FREE_EXPRESS_AT} puntos: Express 30' gratis.
          </p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="flex items-center gap-4 pt-6">
          <div className="flex size-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Sparkles className="size-6" />
          </div>
          <div>
            <p className="font-semibold">{done.length} servicios completados</p>
            <p className="text-sm text-muted-foreground">
              Gracias por confiar en AutoSpa Astro
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Dashboard() {
  const navigate = useNavigate();
  const [tab, setTab] = useState("book");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [passes, setPasses] = useState<Pass[]>([]);
  const [gifts, setGifts] = useState<GiftVoucher[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);

  const load = useCallback(async () => {
    try {
      const [bookingsResponse, passesResponse, giftsResponse] =
        await Promise.all([
          api.api.bookings.$get({ query: {} }),
          api.api.passes.$get(),
          api.api.gifts.$get(),
        ]);
      if (!bookingsResponse.ok || !passesResponse.ok || !giftsResponse.ok) {
        throw new Error("read");
      }

      setBookings((await bookingsResponse.json()) as Booking[]);
      setPasses((await passesResponse.json()) as Pass[]);
      setGifts((await giftsResponse.json()) as GiftVoucher[]);
      setLoadFailed(false);
    } catch {
      setLoadFailed(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="glass sticky top-0 z-30 border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <button onClick={() => navigate("/")}>
            <BrandMark />
          </button>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={() => navigate("/admin")}
            >
              <LayoutDashboard className="size-4" /> Panel del taller
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-1.5"
            >
              <LogOut className="size-4" /> Salir
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Tus reservas 👋
        </h1>
        <p className="mt-1 text-muted-foreground">
          Gestiona tus reservas, bonos y puntos de fidelidad.
        </p>

        <Tabs value={tab} onValueChange={setTab} className="mt-8">
          <TabsList>
            <TabsTrigger value="book" className="gap-1.5">
              <CalendarCheck className="size-4" /> Nueva reserva
            </TabsTrigger>
            <TabsTrigger value="bookings" className="gap-1.5">
              <Ticket className="size-4" /> Mis citas
            </TabsTrigger>
            <TabsTrigger value="passes" className="gap-1.5">
              <Ticket className="size-4" /> Bonos
            </TabsTrigger>
            <TabsTrigger value="loyalty" className="gap-1.5">
              <Crown className="size-4" /> Fidelidad
            </TabsTrigger>
          </TabsList>

          {loadFailed ? (
            <p
              role="alert"
              className="mt-6 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
            >
              No se pudieron cargar tus reservas y bonos. Comprueba que el
              servidor de la API está en marcha.
            </p>
          ) : loading ? (
            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" /> Cargando tus datos...
            </div>
          ) : tab === "book" ? (
            <div className="mt-6">
              <WizardBooking
                onBooked={() => {
                  void load();
                  setTab("bookings");
                }}
                passes={passes}
              />
            </div>
          ) : null}

          {tab === "bookings" && (
            <div className="mt-6">
              <MyBookings
                bookings={bookings}
                onChanged={() => void load()}
                onNewBooking={() => setTab("book")}
              />
            </div>
          )}

          {tab === "passes" && (
            <div className="mt-6">
              <Passes
                passes={passes}
                myGifts={gifts}
                onBuy={() => {
                  void load();
                  setTab("book");
                }}
              />
            </div>
          )}

          {tab === "loyalty" && (
            <div className="mt-6">
              <Loyalty bookings={bookings} />
            </div>
          )}
        </Tabs>
      </div>
    </main>
  );
}
