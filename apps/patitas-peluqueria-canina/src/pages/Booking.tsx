import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@app-client";
import { api } from "@/lib/api";
import type { Id } from "@/lib/types";
import { useAuth } from "@app-client";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import {
  Bath,
  Brush,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronLeft,
  Loader2,
  LogIn,
  PawPrint,
  Plus,
  Scissors,
  ShieldAlert,
  Sparkles,
  Stethoscope,
  Ticket,
  UserRound,
} from "lucide-react";
import { useNavigate, useSearchParams } from "react-router";
import {
  BREEDS,
  EXTRAS,
  PICKUP_FEE_EUR,
  SERVICES,
  SIZE_LABELS,
  durationLabel,
  eur,
  minutesFor,
  nextOpenDates,
  priceFor,
  prettyDate,
  shortDate,
} from "@/lib/services";
import type { Service, SizeKey } from "@/lib/services";

const SERVICE_ICONS: Record<Service["icon"], typeof Scissors> = {
  scissors: Scissors,
  bath: Bath,
  sparkles: Sparkles,
  brush: Brush,
  stethoscope: Stethoscope,
  paw: PawPrint,
};

const STEPS = ["Servicio", "Peludo", "Extras", "Fecha y hora"];

function PawLogo({ className = "size-9" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm ${className}`}>
      <PawPrint className="size-3/5" />
    </span>
  );
}

export default function Booking() {
  const { isLoading: authLoading, isAuthenticated } = useAuth();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const preselected = SERVICES.find((s) => s.key === searchParams.get("service"))?.key;

  const pets = useQuery(api.pets.listMyPets, isAuthenticated ? {} : "skip");
  const myAppointments = useQuery(api.appointments.listMyAppointments, isAuthenticated ? {} : "skip");
  const bonos = useQuery(api.appointments.listMyBonos, isAuthenticated ? {} : "skip");

  const [step, setStep] = useState(0);
  const [serviceKey, setServiceKey] = useState<string | null>(preselected ?? null);
  const [manualPetId, setManualPetId] = useState<Id<"pets"> | null>(null);
  const petParam = searchParams.get("pet");
  const petId =
    manualPetId ??
    (pets ?? []).find((p) => !p.archived && p._id === petParam)?._id ??
    null;
  const [extras, setExtras] = useState<string[]>([]);
  const [date, setDate] = useState<string | null>(null);
  const [start, setStart] = useState<string | null>(null);
  const [notes, setNotes] = useState("");
  const [pickup, setPickup] = useState(false);
  const [useBonoId, setUseBonoId] = useState<Id<"bonos"> | null>(null);
  const [confirmed, setConfirmed] = useState<{ id: Id<"appointments">; wasNewClient: boolean } | null>(null);

  const service = SERVICES.find((s) => s.key === serviceKey) ?? null;
  const pet = (pets ?? []).find((p) => p._id === petId) ?? null;

  const duration = service && pet ? minutesFor(service, pet.size, extras) : 0;
  const basePrice = service && pet ? priceFor(service, pet.size, []) : 0;
  const fullPrice = service && pet ? priceFor(service, pet.size, extras) : 0;
  const activeBonosForService =
    service && pet
      ? (bonos ?? []).filter(
          (b) => b.petId === pet._id && b.serviceKey === service.key && b.active && b.usesUsed < b.totalUses,
        )
      : [];
  const activeBono = activeBonosForService.find((b) => b._id === useBonoId) ?? null;
  const price = activeBono
    ? Math.round((fullPrice - basePrice) * 100) / 100
    : fullPrice + (pickup ? PICKUP_FEE_EUR : 0);

  const openDays = useMemo(() => nextOpenDates(12), []);
  const daySlots = useQuery(
    api.appointments.getAvailability,
    service && pet && date ? { date, durationMin: duration } : "skip",
  );

  const createAppointment = useMutation(api.appointments.createAppointment);
  const createPet = useMutation(api.pets.createPet);
  const joinWaitlist = useMutation(api.appointments.joinWaitlist);

  // --- alta de mascota inline ---
  const [showPetForm, setShowPetForm] = useState(false);
  const [petForm, setPetForm] = useState({
    name: "",
    breedKey: "mestizo",
    size: "M" as SizeKey,
    birthYear: "",
    lastVaccineAt: "",
    notes: "",
  });
  const [savingPet, setSavingPet] = useState(false);

  async function handleCreatePet() {
    if (!petForm.name.trim()) {
      toast.error("Ponle un nombre al peludo.");
      return;
    }
    setSavingPet(true);
    try {
      const id = await createPet({
        name: petForm.name.trim(),
        breed: BREEDS.find((b) => b.key === petForm.breedKey)?.label,
        breedKey: petForm.breedKey,
        size: petForm.size,
        birthYear: petForm.birthYear ? Number(petForm.birthYear) : undefined,
        lastVaccineAt: petForm.lastVaccineAt || undefined,
        notes: petForm.notes.trim() || undefined,
      });
      toast.success(`¡${petForm.name.trim()} registrado!`);
      setManualPetId(id);
      setShowPetForm(false);
      setPetForm({ name: "", breedKey: "mestizo", size: "M", birthYear: "", lastVaccineAt: "", notes: "" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo guardar la ficha.");
    } finally {
      setSavingPet(false);
    }
  }

  async function handleConfirm() {
    if (!service || !petId || !date || !start) return;
    const wasNewClient = (myAppointments ?? []).length === 0;
    try {
      const id = await createAppointment({
        petId,
        serviceKey: service.key,
        extraKeys: extras,
        date,
        start,
        pickup: pickup || undefined,
        useBonoId: activeBono ? activeBono._id : undefined,
        notes: notes.trim() || undefined,
      });
      setConfirmed({ id, wasNewClient });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo crear la cita.");
      setStart(null);
    }
  }

  const canNext = [!!service, !!petId, true, !!(date && start)][step];

  function next() {
    if (step < 3) setStep(step + 1);
    else void handleConfirm();
  }
  function back() {
    setStep(Math.max(0, step - 1));
  }

  /* ---------- Confirmación ---------- */
  if (confirmed && service && pet && date && start) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-6">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8">
            <span className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/40">
              <CheckCircle2 className="size-8 text-green-600 dark:text-green-400" />
            </span>
            <h1 className="mt-5 font-display text-2xl font-semibold">¡Cita confirmada!</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              {pet.name} tiene cita de <strong>{service.name}</strong>.
            </p>
            <div className="mt-5 space-y-2 rounded-2xl bg-muted/60 p-4 text-sm">
              <p className="flex justify-between"><span className="text-muted-foreground">Cuándo</span><span className="font-medium capitalize">{prettyDate(date)} · {start}</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Duración</span><span className="font-medium">{durationLabel(duration)}</span></p>
              <p className="flex justify-between"><span className="text-muted-foreground">Precio</span><span className="font-semibold">{eur(price)}</span></p>
            </div>
            {confirmed.wasNewClient && (
              <p className="mt-3 rounded-xl bg-primary/10 px-3 py-2 text-xs text-primary">
                Se aplica tu 15% de bienvenida al llegar al salón.
              </p>
            )}
            <div className="mt-6 flex flex-col gap-2">
              <Button onClick={() => navigate("/dashboard")}>Ver mis citas</Button>
              <Button
                variant="ghost"
                onClick={() => {
                  setConfirmed(null);
                  setStep(0);
                  setServiceKey(null);
                  setManualPetId(null);
                  setExtras([]);
                  setDate(null);
                  setStart(null);
                  setPickup(false);
                  setUseBonoId(null);
                }}
              >
                Nueva reserva
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-4xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <PawLogo />
            <span className="font-display text-lg font-semibold">Patitas</span>
          </a>
          <Button variant="ghost" size="sm" asChild>
            <a href="/dashboard">Mi área</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
        <h1 className="font-display text-3xl font-semibold tracking-tight">Reservar cita</h1>

        {/* Progreso */}
        <ol className="mt-6 flex items-center gap-2">
          {STEPS.map((label, i) => (
            <li key={label} className="flex flex-1 items-center gap-2">
              <span
                className={`flex size-7 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                  i < step
                    ? "bg-primary text-primary-foreground"
                    : i === step
                      ? "border-2 border-primary text-primary"
                      : "border border-border text-muted-foreground"
                }`}
              >
                {i < step ? <Check className="size-3.5" /> : i + 1}
              </span>
              <span className={`hidden text-xs font-medium sm:block ${i === step ? "text-foreground" : "text-muted-foreground"}`}>
                {label}
              </span>
              {i < STEPS.length - 1 && <span className="h-px flex-1 bg-border" />}
            </li>
          ))}
        </ol>

        {/* Paso 0: servicio */}
        {step === 0 && (
          <section className="mt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {SERVICES.map((s) => {
                const Icon = SERVICE_ICONS[s.icon];
                const selected = serviceKey === s.key;
                return (
                  <button
                    key={s.key}
                    type="button"
                    onClick={() => setServiceKey(s.key)}
                    className={`rounded-2xl border p-5 text-left transition-all ${
                      selected
                        ? "border-primary bg-primary/5 shadow-md shadow-primary/10 ring-1 ring-primary"
                        : "border-border bg-card hover:border-primary/40 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className={`flex size-10 items-center justify-center rounded-xl ${selected ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"}`}>
                        <Icon className="size-5" />
                      </span>
                      {selected && <Badge className="rounded-full">Elegido</Badge>}
                    </div>
                    <p className="mt-3 font-semibold">{s.name}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{s.tagline}</p>
                  </button>
                );
              })}
            </div>
          </section>
        )}

        {/* Paso 1: peludo */}
        {step === 1 && (
          <section className="mt-8">
            {authLoading ? (
              <div className="flex justify-center py-10"><Loader2 className="size-6 animate-spin text-muted-foreground" /></div>
            ) : !isAuthenticated ? (
              <Card className="mx-auto max-w-md text-center">
                <CardHeader>
                  <span className="mx-auto flex size-12 items-center justify-center rounded-full bg-accent">
                    <UserRound className="size-6 text-primary" />
                  </span>
                  <CardTitle className="mt-2">Guarda la reserva a tu nombre</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                  <p className="text-sm text-muted-foreground">
                    Inicia sesión (o entra como invitado) para registrar a tu peludo y elegir la hora.
                  </p>
                  <Button
                    onClick={() =>
                      navigate(`/auth?returnTo=${encodeURIComponent(`/reservar${serviceKey ? `?service=${serviceKey}` : ""}`)}`)
                    }
                    className="gap-2"
                  >
                    <LogIn className="size-4" /> Iniciar sesión
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() =>
                      signIn("anonymous").catch(() =>
                        toast.error("No se pudo continuar como invitado."),
                      )
                    }
                  >
                    Continuar como invitado
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <>
                {pet && !pet.lastVaccineAt && (
                  <p className="mb-3 flex items-center gap-2 rounded-xl border border-amber-300/60 bg-amber-50 px-4 py-2.5 text-xs text-amber-800 dark:border-amber-900/50 dark:bg-amber-950/40 dark:text-amber-300">
                    <ShieldAlert className="size-4 shrink-0" />
                    Para atender a {pet.name} necesitamos la vacuna de la rabia al día. Indícala en tu panel de peludos.
                  </p>
                )}
                <div className="grid gap-3 sm:grid-cols-2">
                  {(pets ?? []).filter((p) => !p.archived).map((p) => {
                    const selected = petId === p._id;
                    return (
                      <button
                        key={p._id}
                        type="button"
                        onClick={() => setManualPetId(p._id)}
                        className={`flex items-center gap-3 rounded-2xl border p-4 text-left transition-all ${
                          selected
                            ? "border-primary bg-primary/5 ring-1 ring-primary"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-xl">🐶</span>
                        <div className="min-w-0">
                          <p className="truncate font-semibold">{p.name}</p>
                          <p className="truncate text-xs text-muted-foreground">{p.breed ?? "Raza sin especificar"} · {p.size}</p>
                        </div>
                        {selected && <Check className="ml-auto size-5 shrink-0 text-primary" />}
                      </button>
                    );
                  })}
                  <button
                    type="button"
                    onClick={() => setShowPetForm(true)}
                    className={`flex items-center gap-3 rounded-2xl border border-dashed p-4 text-left transition-all ${
                      showPetForm ? "border-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-accent">
                      <Plus className="size-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold">Añadir peludo</p>
                      <p className="text-xs text-muted-foreground">Nombre, raza y tamaño</p>
                    </div>
                  </button>
                </div>

                {showPetForm && (
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle className="text-base">Nueva ficha</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-4 sm:grid-cols-2">
                      <div className="grid gap-2">
                        <Label htmlFor="pet-name">Nombre</Label>
                        <Input
                          id="pet-name"
                          value={petForm.name}
                          onChange={(e) => setPetForm({ ...petForm, name: e.target.value })}
                          placeholder="Rocco"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label>Raza</Label>
                        <Select
                          value={petForm.breedKey}
                          onValueChange={(key) => {
                            const breed = BREEDS.find((b) => b.key === key);
                            setPetForm({
                              ...petForm,
                              breedKey: key,
                              size: breed?.suggestedSize ?? petForm.size,
                            });
                          }}
                        >
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {BREEDS.map((b) => (
                              <SelectItem key={b.key} value={b.key}>{b.label}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label>Tamaño</Label>
                        <Select value={petForm.size} onValueChange={(v) => setPetForm({ ...petForm, size: v as SizeKey })}>
                          <SelectTrigger><SelectValue /></SelectTrigger>
                          <SelectContent>
                            {(Object.keys(SIZE_LABELS) as SizeKey[]).map((k) => (
                              <SelectItem key={k} value={k}>{SIZE_LABELS[k]}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="pet-year">Año de nacimiento (opcional)</Label>
                        <Input
                          id="pet-year"
                          inputMode="numeric"
                          value={petForm.birthYear}
                          onChange={(e) => setPetForm({ ...petForm, birthYear: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                          placeholder="2021"
                        />
                      </div>
                      <div className="grid gap-2">
                        <Label htmlFor="pet-vaccine">Última vacuna de la rabia (opcional)</Label>
                        <Input
                          id="pet-vaccine"
                          type="date"
                          value={petForm.lastVaccineAt}
                          onChange={(e) => setPetForm({ ...petForm, lastVaccineAt: e.target.value })}
                        />
                      </div>
                      <div className="grid gap-2 sm:col-span-2">
                        <Label htmlFor="pet-notes">Alergias, costumbres, sensibilidad… (opcional)</Label>
                        <Textarea
                          id="pet-notes"
                          value={petForm.notes}
                          onChange={(e) => setPetForm({ ...petForm, notes: e.target.value })}
                          placeholder="Tiene la piel sensible y le da miedo el secador."
                        />
                      </div>
                      <div className="flex gap-2 sm:col-span-2">
                        <Button onClick={handleCreatePet} disabled={savingPet}>
                          {savingPet && <Loader2 className="size-4 animate-spin" />} Guardar ficha
                        </Button>
                        <Button variant="ghost" onClick={() => setShowPetForm(false)}>Cancelar</Button>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}
          </section>
        )}

        {/* Paso 2: extras */}
        {step === 2 && (
          <section className="mt-8">
            <div className="grid gap-3 sm:grid-cols-2">
              {EXTRAS.map((x) => {
                const checked = extras.includes(x.key);
                return (
                  <label
                    key={x.key}
                    className={`flex cursor-pointer items-start gap-3 rounded-2xl border p-4 transition-all ${
                      checked ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <Checkbox
                      checked={checked}
                      onCheckedChange={(v) =>
                        setExtras(v ? [...extras, x.key] : extras.filter((k) => k !== x.key))
                      }
                      className="mt-0.5"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold">{x.name}</p>
                        <p className="text-sm font-medium text-primary">+{eur(x.price)}</p>
                      </div>
                      <p className="mt-0.5 text-sm text-muted-foreground">{x.description}</p>
                    </div>
                  </label>
                );
              })}
            </div>
          </section>
        )}

        {/* Paso 3: fecha, hora y resumen */}
        {step === 3 && service && pet && (
          <section className="mt-8 space-y-6">
            <div>
              <p className="mb-3 text-sm font-semibold">Elige el día</p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {openDays.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => { setDate(d); setStart(null); }}
                    className={`flex min-w-20 shrink-0 flex-col items-center rounded-xl border px-3 py-2.5 text-center transition-all ${
                      date === d
                        ? "border-primary bg-primary text-primary-foreground shadow-md shadow-primary/20"
                        : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <span className={`text-xs capitalize ${date === d ? "opacity-80" : "text-muted-foreground"}`}>
                      {shortDate(d).split(",")[0]}
                    </span>
                    <span className="mt-0.5 text-sm font-semibold">{shortDate(d).split(", ")[1]}</span>
                  </button>
                ))}
              </div>
            </div>

            {date && (
              <div>
                <p className="mb-3 text-sm font-semibold">Horas libres · {durationLabel(duration)} aprox.</p>
                {daySlots === undefined ? (
                  <div className="flex justify-center py-6"><Loader2 className="size-5 animate-spin text-muted-foreground" /></div>
                ) : (daySlots?.length ?? 0) === 0 ? (
                  <div className="rounded-xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                    No quedan huecos para este día.{" "}
                    <button
                      type="button"
                      onClick={async () => {
                        try {
                          await joinWaitlist({ petId: pet._id, date, serviceKey: service.key });
                          toast.success("Apuntado: te avisamos si se libera un hueco.");
                        } catch (e) {
                          toast.error(e instanceof Error ? e.message : "No se pudo apuntar.");
                        }
                      }}
                      className="font-semibold text-primary underline underline-offset-2"
                    >
                      Apúntame a la lista de espera
                    </button>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
                    {daySlots!.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setStart(t)}
                        className={`rounded-xl border py-2 text-sm font-medium tabular-nums transition-all ${
                          start === t
                            ? "border-primary bg-primary text-primary-foreground"
                            : "border-border bg-card hover:border-primary/40"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Opciones: recogida y bono */}
            <div className="space-y-3">
              <label
                className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border p-4 transition-all ${
                  pickup ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card hover:border-primary/40"
                }`}
              >
                <div>
                  <p className="font-semibold">Recogida a domicilio</p>
                  <p className="text-sm text-muted-foreground">Vamos a buscarlo y te lo devolvemos guapo. +{eur(PICKUP_FEE_EUR)}.</p>
                </div>
                <Switch checked={pickup} disabled={!!activeBono} onCheckedChange={setPickup} />
              </label>

              {activeBonosForService.length > 0 && (
                <label
                  className={`flex cursor-pointer items-center justify-between gap-3 rounded-2xl border p-4 transition-all ${
                    activeBono ? "border-primary bg-primary/5 ring-1 ring-primary" : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent">
                      <Ticket className="size-5 text-primary" />
                    </span>
                    <div>
                      <p className="font-semibold">Usar bono</p>
                      <p className="text-sm text-muted-foreground">
                        {activeBonosForService[0].totalUses - activeBonosForService[0].usesUsed} sesión(es) restantes ·
                        el servicio sale incluido (extras aparte)
                      </p>
                    </div>
                  </div>
                  <Switch
                    checked={!!activeBono}
                    onCheckedChange={(v) => setUseBonoId(v ? activeBonosForService[0]._id : null)}
                  />
                </label>
              )}
            </div>

            <div className="grid gap-2">
              <Label htmlFor="booking-notes">Notas para la peluquera (opcional)</Label>
              <Textarea
                id="booking-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Se mueve mucho con la tijera, mejor con máquina en la cabeza."
              />
            </div>

            {/* Resumen */}
            <div className="rounded-2xl border border-border/70 bg-card p-5">
              <p className="font-display text-lg font-semibold">Resumen</p>
              <div className="mt-3 space-y-2 text-sm">
                <p className="flex justify-between"><span className="text-muted-foreground">Servicio</span><span className="font-medium">{service.name}</span></p>
                <p className="flex justify-between"><span className="text-muted-foreground">Peludo</span><span className="font-medium">{pet.name} · {pet.size}</span></p>
                {activeBono && (
                  <p className="flex justify-between"><span className="text-muted-foreground">Bono</span><span className="font-medium text-primary">Servicio incluido en tu bono</span></p>
                )}
                {pickup && !activeBono && (
                  <p className="flex justify-between"><span className="text-muted-foreground">Recogida a domicilio</span><span className="font-medium">+{eur(PICKUP_FEE_EUR)}</span></p>
                )}
                {extras.length > 0 && (
                  <p className="flex justify-between">
                    <span className="text-muted-foreground">Extras</span>
                    <span className="font-medium">{EXTRAS.filter((e) => extras.includes(e.key)).map((e) => e.name).join(", ")}</span>
                  </p>
                )}
                {date && start && (
                  <p className="flex justify-between"><span className="text-muted-foreground">Cuándo</span><span className="font-medium capitalize">{prettyDate(date)} · {start}</span></p>
                )}
                <div className="border-t border-border/60 pt-2">
                  <p className="flex items-baseline justify-between">
                    <span className="font-medium">Total estimado</span>
                    <span className="font-display text-2xl font-bold">{eur(price)}</span>
                  </p>
                  {(myAppointments ?? []).length === 0 && (
                    <p className="mt-1 text-xs text-primary">Con el 15% de bienvenida serían {eur(price * 0.85)} en tu primera visita.</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Navegación */}
        <div className="mt-10 flex items-center justify-between border-t border-border/60 pt-6">
          <Button variant="ghost" onClick={back} disabled={step === 0} className="gap-1">
            <ChevronLeft className="size-4" /> Atrás
          </Button>
          <Button onClick={next} disabled={!canNext} className="gap-2">
            {step === 3 ? (
              <><CalendarCheck className="size-4" /> Confirmar cita</>
            ) : (
              <>Siguiente <ChevronLeft className="size-4 rotate-180" /></>
            )}
          </Button>
        </div>
      </main>
    </div>
  );
}
