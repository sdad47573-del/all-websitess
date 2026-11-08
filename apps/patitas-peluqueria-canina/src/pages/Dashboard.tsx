import { useMemo, useState } from "react";
import { useMutation, useQuery } from "@app-client";
import { api } from "@/lib/api";
import type { Id } from "@/lib/types";
import { useAuth } from "@app-client";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import {
  Bell,
  BellRing,
  CalendarDays,
  CalendarPlus,
  Camera,
  Clock,
  LogOut,
  PawPrint,
  Pencil,
  ShieldAlert,
  Star,
  Stethoscope,
  Ticket,
  Trash2,
  Users,
  X,
} from "lucide-react";
import {
  DAY_NAMES,
  EXTRAS,
  PICKUP_FEE_EUR,
  SALON,
  SERVICES,
  SIZE_LABELS,
  SCHEDULE,
  STATUS_LABELS,
  BONO_USES,
  BONO_DISCOUNT,
  durationLabel,
  eur,
  isoDate,
  nextOpenDates,
  prettyDate,
  priceFor,
  shortDate,
} from "@/lib/services";
import type { AppointmentStatus, SizeKey } from "@/lib/services";

type Notif = {
  _id: string;
  type: string;
  title: string;
  body: string;
  createdAt: number;
  readAt?: number | null;
};

function NotifBell({
  notifications,
  unread,
  onMarkAllRead,
}: {
  notifications: Notif[];
  unread: number;
  onMarkAllRead: () => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative" aria-label={`Notificaciones (${unread} sin leer)`}>
          <Bell className="size-4" />
          {unread > 0 && (
            <span className="absolute -right-0.5 -top-0.5 flex size-4.5 min-w-4.5 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-bold text-white">
              {unread > 9 ? "9+" : unread}
            </span>
            )}
        </Button>
      </PopoverTrigger>
      <PopoverContent align="end" className="w-80 p-0">
        <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
          <p className="text-sm font-semibold">Notificaciones</p>
          {unread > 0 && (
            <button
              type="button"
              onClick={() => {
                onMarkAllRead();
              }}
              className="text-xs font-medium text-primary hover:underline"
            >
              Marcar todo leído
            </button>
          )}
        </div>
        <div className="max-h-80 overflow-y-auto">
          {notifications.length === 0 ? (
            <p className="px-4 py-8 text-center text-sm text-muted-foreground">Todo tranquilo por ahora 🐾</p>
          ) : (
            <ul className="divide-y divide-border/50">
              {notifications.map((n) => (
                <li key={n._id} className={`px-4 py-3 ${!n.readAt ? "bg-primary/5" : ""}`}>
                  <div className="flex items-start justify-between gap-2">
                    <p className="text-sm font-medium leading-snug">{n.title}</p>
                    {!n.readAt && <span className="mt-1 size-2 shrink-0 rounded-full bg-primary" />}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{n.body}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-muted-foreground/70">
                    {new Date(n.createdAt).toLocaleString("es-ES", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" })}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}

const STATUS_STYLES: Record<AppointmentStatus, string> = {
  pending: "bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300",
  confirmed: "bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300",
  completed: "bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300",
  cancelled: "bg-muted text-muted-foreground",
};

export default function Dashboard() {
  const { user, isLoading, signOut } = useAuth();
  const navigate = useNavigate();

  const pets = useQuery(api.pets.listMyPets);
  const appointments = useQuery(api.appointments.listMyAppointments);
  const bonos = useQuery(api.appointments.listMyBonos);
  const notifications = useQuery(api.notifications.listMyNotifications);
  const unread = useQuery(api.notifications.unreadCount);
  const myWaitlist = useQuery(api.appointments.listMyWaitlist);
  const loadingData =
    pets === undefined || appointments === undefined || bonos === undefined || notifications === undefined || unread === undefined || myWaitlist === undefined;

  const cancelAppointment = useMutation(api.appointments.cancelAppointment);
  const rescheduleAppointment = useMutation(api.appointments.rescheduleAppointment);
  const updatePet = useMutation(api.pets.updatePet);
  const submitReview = useMutation(api.reviews.submitReview);
  const purchaseBono = useMutation(api.appointments.purchaseBono);
  const leaveWaitlist = useMutation(api.appointments.leaveWaitlist);
  const markAllRead = useMutation(api.notifications.markAllRead);

  const today = isoDate(new Date());
  const active = useMemo(
    () =>
      (appointments ?? [])
        .filter((a) => a.status !== "cancelled" && a.status !== "completed" && a.date >= today)
        .sort((a, b) => (a.date + a.start).localeCompare(b.date + b.start)),
    [appointments, today],
  );
  const history = useMemo(
    () =>
      (appointments ?? [])
        .filter((a) => a.status === "completed" || a.date < today || a.status === "cancelled")
        .sort((a, b) => (b.date + b.start).localeCompare(a.date + a.start)),
    [appointments, today],
  );
  const completedCount = (appointments ?? []).filter((a) => a.status === "completed").length;
  const loyaltyStamps = completedCount % 6;

  // agenda del salón para los próximos días abiertos
  const salonDays = useMemo(() => nextOpenDates(4), []);
  const day1 = useQuery(api.appointments.listByDate, { date: salonDays[0] ?? today });
  const day2 = useQuery(api.appointments.listByDate, { date: salonDays[1] ?? today });

  // editar mascota
  const [petDialog, setPetDialog] = useState<{ petId: Id<"pets">; size: SizeKey; notes: string; lastVaccineAt: string } | null>(null);

  // reseña
  const [reviewDialog, setReviewDialog] = useState<Id<"appointments"> | null>(null);
  const [reviewStars, setReviewStars] = useState(5);
  const [reviewText, setReviewText] = useState("");

  // reprogramar
  const [reschedule, setReschedule] = useState<{ id: Id<"appointments">; durationMin: number } | null>(null);
  const [rescheduleDate, setRescheduleDate] = useState<string | null>(null);
  const [rescheduleStart, setRescheduleStart] = useState<string | null>(null);
  const rescheduleDays = useMemo(() => nextOpenDates(10), []);
  const rescheduleSlots = useQuery(
    api.appointments.getAvailability,
    reschedule && rescheduleDate ? { date: rescheduleDate, durationMin: reschedule.durationMin } : "skip",
  );

  async function handleCancel(id: Id<"appointments">) {
    try {
      await cancelAppointment({ appointmentId: id });
      toast.success("Cita cancelada. ¡Hasta la próxima!");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo cancelar.");
    }
  }

  async function handleReschedule() {
    if (!reschedule || !rescheduleDate || !rescheduleStart) return;
    try {
      await rescheduleAppointment({
        appointmentId: reschedule.id,
        date: rescheduleDate,
        start: rescheduleStart,
      });
      toast.success("Cita reprogramada.");
      setReschedule(null);
      setRescheduleDate(null);
      setRescheduleStart(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo reprogramar.");
    }
  }

  async function handleSavePet() {
    if (!petDialog) return;
    try {
      await updatePet({
        petId: petDialog.petId,
        size: petDialog.size,
        notes: petDialog.notes || undefined,
        lastVaccineAt: petDialog.lastVaccineAt || undefined,
      });
      toast.success("Ficha actualizada.");
      setPetDialog(null);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo actualizar.");
    }
  }

  async function handleRemovePet(petId: Id<"pets">) {
    try {
      await updatePet({ petId, archived: true });
      toast.success("Ficha archivada.");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo archivar.");
    }
  }

  async function handleReviewSubmit() {
    if (!reviewDialog) return;
    try {
      await submitReview({ appointmentId: reviewDialog, stars: reviewStars, text: reviewText });
      toast.success("¡Gracias por tu reseña!");
      setReviewDialog(null);
      setReviewText("");
      setReviewStars(5);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo enviar la reseña.");
    }
  }

  async function handlePurchaseBono(petId: Id<"pets">, serviceKey: string) {
    try {
      await purchaseBono({ petId, serviceKey });
      toast.success("Bono activado. ¡A por esas sesiones!");
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "No se pudo activar el bono.");
    }
  }

  const nextAppointment = active[0];
  const nextPet = nextAppointment
    ? (pets ?? []).find((p) => p._id === nextAppointment.petId)
    : undefined;

  if (isLoading || loadingData) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <div className="animate-pulse text-sm text-muted-foreground">Cargando tu área…</div>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <PawPrint className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold">Patitas</span>
            <Badge variant="secondary" className="ml-1 hidden rounded-full sm:inline-flex">Mi área</Badge>
          </a>
          <div className="flex items-center gap-2">
            <Button asChild size="sm" className="rounded-full">
              <a href="/reservar">
                <CalendarPlus className="size-4" /> Nueva cita
              </a>
            </Button>
            <NotifBell notifications={notifications!} unread={unread ?? 0} onMarkAllRead={() => void markAllRead({})} />
            <Button
              variant="ghost"
              size="icon"
              onClick={async () => {
                await signOut();
                navigate("/");
              }}
              aria-label="Cerrar sesión"
            >
              <LogOut className="size-4" />
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm text-muted-foreground">Hola{user?.name ? `, ${user.name}` : ""} 👋</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight">Tu panel de peludos</h1>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-primary/25 bg-primary/5 px-4 py-2.5">
            <div className="flex gap-1">
              {Array.from({ length: 6 }).map((_, i) => (
                <PawPrint
                  key={i}
                  className={`size-5 ${
                    i < loyaltyStamps ? "fill-primary text-primary" : "text-border"
                  }`}
                />
              ))}
            </div>
            <p className="text-sm">
              <strong>{loyaltyStamps}/6</strong>
              <span className="text-muted-foreground"> · {6 - loyaltyStamps} para baño gratis</span>
            </p>
          </div>
        </div>

        <Tabs defaultValue="citas" className="mt-8">
          <TabsList className="h-auto w-full justify-start gap-1 overflow-x-auto rounded-xl bg-muted/70 p-1 sm:w-fit">
            <TabsTrigger value="citas" className="gap-1.5 rounded-lg"><CalendarDays className="size-4" /> Citas</TabsTrigger>
            <TabsTrigger value="mascotas" className="gap-1.5 rounded-lg"><PawPrint className="size-4" /> Peludos</TabsTrigger>
            <TabsTrigger value="bonos" className="gap-1.5 rounded-lg"><Ticket className="size-4" /> Bonos</TabsTrigger>
            <TabsTrigger value="agenda" className="gap-1.5 rounded-lg"><Clock className="size-4" /> Agenda</TabsTrigger>
          </TabsList>

          {/* ---------- Citas ---------- */}
          <TabsContent value="citas" className="mt-6 space-y-8">
            <section>
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Próximas citas</h2>
              {active.length === 0 ? (
                <Card className="border-dashed">
                  <CardContent className="flex flex-col items-center py-10 text-center">
                    <span className="flex size-12 items-center justify-center rounded-full bg-accent">
                      <CalendarPlus className="size-6 text-primary" />
                    </span>
                    <p className="mt-4 font-medium">Todavía no tienes citas</p>
                    <p className="mt-1 max-w-xs text-sm text-muted-foreground">
                      Reserva en un minuto: elige servicio, hora y listo.
                    </p>
                    <Button asChild className="mt-5 rounded-full">
                      <a href="/reservar">Reservar cita</a>
                    </Button>
                  </CardContent>
                </Card>
              ) : (
                <div className="grid gap-3">
                  {active.map((a) => (
                    <Card key={a._id} className="overflow-hidden">
                      <CardContent className="flex flex-wrap items-center gap-4 p-5">
                        <div className="flex min-w-32 flex-col items-center rounded-xl bg-secondary/70 px-4 py-3 text-center">
                          <span className="text-xs font-medium capitalize text-muted-foreground">{shortDate(a.date).split(",")[0]}</span>
                          <span className="font-display text-xl font-semibold">{a.date.slice(8)}</span>
                          <span className="text-xs text-muted-foreground">{a.date.slice(5, 7)}/{a.date.slice(2, 4)}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="font-semibold">{a.serviceName}</p>
                            <Badge className={`rounded-full ${STATUS_STYLES[a.status]}`}>{STATUS_LABELS[a.status]}</Badge>
                            {a.promoKey === "bienvenida" && (
                              <Badge variant="outline" className="rounded-full border-primary/40 text-primary">−15% bienvenida</Badge>
                            )}
                          </div>
                          <p className="mt-1 text-sm text-muted-foreground">
                            🐶 {a.petName} · {a.start}–{a.end} ({durationLabel(a.durationMin)})
                          </p>
                          {a.extraKeys.length > 0 && (
                            <p className="mt-0.5 text-xs text-muted-foreground">
                              Extras: {EXTRAS.filter((e) => a.extraKeys.includes(e.key)).map((e) => e.name).join(", ")}
                            </p>
                          )}
                          {a.pickup && (
                            <Badge variant="outline" className="rounded-full border-primary/40 text-primary">🚗 Recogida a domicilio (+{eur(PICKUP_FEE_EUR)})</Badge>
                          )}
                          {a.bonoId && (
                            <Badge variant="outline" className="rounded-full border-primary/40 text-primary">Cubierta por bono</Badge>
                          )}
                          {a.notes && <p className="mt-1 text-xs italic text-muted-foreground">“{a.notes}”</p>}
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <p className="font-display text-xl font-bold">{eur(a.price)}</p>
                          <div className="flex gap-1.5">
                            <Button
                              size="sm"
                              variant="outline"
                              className="rounded-full"
                              onClick={() => {
                                setReschedule({ id: a._id, durationMin: a.durationMin });
                                setRescheduleDate(null);
                                setRescheduleStart(null);
                              }}
                            >
                              <Pencil className="size-3.5" /> Mover
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="rounded-full text-destructive hover:text-destructive"
                              onClick={() => handleCancel(a._id)}
                            >
                              <X className="size-3.5" /> Cancelar
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </section>

            {history.length > 0 && (
              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Historial</h2>
                <div className="grid gap-2">
                  {history.slice(0, 8).map((a) => (
                    <div
                      key={a._id}
                      className="flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 text-sm"
                    >
                      <span className="min-w-28 text-muted-foreground">{prettyDate(a.date)}</span>
                      <span className="font-medium">{a.serviceName}</span>
                      <span className="text-muted-foreground">· {a.petName}</span>
                      <Badge className={`ml-auto rounded-full ${STATUS_STYLES[a.status]}`}>{STATUS_LABELS[a.status]}</Badge>
                      <span className="w-16 text-right font-semibold">{eur(a.price)}</span>
                      {a.status === "completed" && !a.reviewId && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          onClick={() => setReviewDialog(a._id)}
                        >
                          <Star className="size-3.5" /> Valorar
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}
          </TabsContent>

          {/* ---------- Peludos ---------- */}
          <TabsContent value="mascotas" className="mt-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(pets ?? []).filter((p) => !p.archived).map((p) => (
                <Card key={p._id}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <span className="flex size-11 items-center justify-center rounded-2xl bg-secondary text-2xl">🐶</span>
                      <div className="flex gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-8"
                          onClick={() => setPetDialog({ petId: p._id, size: p.size, notes: p.notes ?? "", lastVaccineAt: p.lastVaccineAt ?? "" })}
                          aria-label={`Editar ficha de ${p.name}`}
                        >
                          <Pencil className="size-3.5" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="size-8 text-destructive hover:text-destructive"
                          onClick={() => handleRemovePet(p._id)}
                          aria-label={`Archivar ficha de ${p.name}`}
                        >
                          <Trash2 className="size-3.5" />
                        </Button>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{p.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      {p.breed ?? "Raza sin especificar"}
                      {p.birthYear ? ` · nacido en ${p.birthYear}` : ""}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <p className="flex justify-between"><span className="text-muted-foreground">Tamaño</span><span className="font-medium">{SIZE_LABELS[p.size].split(" (")[0]} ({p.size})</span></p>
                    <p className="flex justify-between">
                      <span className="text-muted-foreground">Vacuna rabia</span>
                      {p.lastVaccineAt ? (
                        <span className="font-medium">{p.lastVaccineAt}</span>
                      ) : (
                        <span className="flex items-center gap-1 text-xs font-medium text-amber-600 dark:text-amber-400"><ShieldAlert className="size-3.5" /> Pendiente</span>
                      )}
                    </p>
                    {p.notes && (
                      <p className="rounded-lg bg-muted/60 px-3 py-2 text-xs leading-relaxed text-muted-foreground">{p.notes}</p>
                    )}
                    <Button asChild size="sm" variant="outline" className="mt-2 w-full rounded-full">
                      <a href={`/reservar?pet=${p._id}`}>Pedir cita para {p.name}</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
              <button
                type="button"
                onClick={() => navigate("/reservar")}
                className="flex min-h-48 flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-border p-6 text-center transition-colors hover:border-primary/50 hover:bg-primary/5"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-accent">
                  <PawPrint className="size-5 text-primary" />
                </span>
                <p className="font-medium">Añadir peludo</p>
                <p className="text-xs text-muted-foreground">Se crea al pedir su primera cita</p>
              </button>
            </div>
          </TabsContent>

          {/* ---------- Bonos ---------- */}
          <TabsContent value="bonos" className="mt-6 space-y-6">
            {(bonos ?? []).length === 0 ? (
              <Card className="border-dashed">
                <CardContent className="flex flex-col items-center py-10 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-accent">
                    <Ticket className="size-6 text-primary" />
                  </span>
                  <p className="mt-4 font-medium">Sin bonos todavía</p>
                  <p className="mt-1 max-w-sm text-sm text-muted-foreground">
                    4 sesiones del mismo servicio con un <strong>15% de descuento</strong>. Elige un peludo y un servicio:
                  </p>
                  <div className="mt-5 w-full max-w-md space-y-3">
                    {(pets ?? []).filter((p) => !p.archived).map((p) => (
                      <div key={p._id} className="rounded-xl border border-border/60 bg-card p-3 text-left">
                        <p className="mb-2 text-sm font-semibold">🐶 {p.name}</p>
                        <div className="flex flex-wrap gap-2">
                          {SERVICES.filter((s) => s.key !== "puppy" && s.key !== "arreglo-patas").map((s) => (
                            <Button
                              key={s.key}
                              size="sm"
                              variant="outline"
                              className="rounded-full"
                              onClick={() => handlePurchaseBono(p._id, s.key)}
                            >
                              + {s.name} · {eur(Math.round(priceFor(s, p.size, []) * BONO_USES * (1 - BONO_DISCOUNT) * 100) / 100)}
                            </Button>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <div className="grid gap-3 sm:grid-cols-2">
                {(bonos ?? []).map((b) => {
                  const pet = (pets ?? []).find((p) => p._id === b.petId);
                  const service = SERVICES.find((s) => s.key === b.serviceKey);
                  const usesLeft = b.totalUses - b.usesUsed;
                  return (
                    <Card key={b._id} className={b.active && usesLeft > 0 ? "border-primary/40" : "opacity-70"}>
                      <CardContent className="p-5">
                        <div className="flex items-start justify-between">
                          <span className="flex size-10 items-center justify-center rounded-xl bg-accent">
                            <Ticket className="size-5 text-primary" />
                          </span>
                          <Badge variant={b.active && usesLeft > 0 ? "default" : "secondary"} className="rounded-full">
                            {b.active && usesLeft > 0 ? "Activo" : "Agotado"}
                          </Badge>
                        </div>
                        <p className="mt-3 font-semibold">{service?.name}</p>
                        <p className="text-sm text-muted-foreground">🐶 {pet?.name ?? ""}</p>
                        <div className="mt-3 flex gap-1.5">
                          {Array.from({ length: b.totalUses }).map((_, i) => (
                            <span
                              key={i}
                              className={`h-2 flex-1 rounded-full ${i < b.usesUsed ? "bg-muted" : "bg-primary"}`}
                            />
                          ))}
                        </div>
                        <p className="mt-2 text-xs text-muted-foreground">
                          {usesLeft} de {b.totalUses} sesiones restantes · pagaste {eur(b.priceEur)}
                        </p>
                        {b.active && usesLeft > 0 && (
                          <Button asChild size="sm" className="mt-3 w-full rounded-full">
                            <a href={`/reservar?pet=${b.petId}&service=${b.serviceKey}`}>Usar en una cita</a>
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
                <Card className="border-dashed">
                  <CardContent className="py-6 text-center">
                    <p className="text-sm font-medium">¿Otro bono?</p>
                    <div className="mt-3 flex flex-wrap justify-center gap-2">
                      {(pets ?? []).filter((p) => !p.archived).slice(0, 2).map((p) => (
                        <Button
                          key={p._id}
                          size="sm"
                          variant="outline"
                          className="rounded-full"
                          onClick={() => handlePurchaseBono(p._id, "banco")}
                        >
                          Bono baño · {p.name}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {(myWaitlist ?? []).length > 0 && (
              <section>
                <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">Lista de espera</h2>
                <div className="grid gap-2">
                  {(myWaitlist ?? []).map((w) => (
                    <div key={w._id} className="flex flex-wrap items-center gap-3 rounded-xl border border-border/60 bg-card px-4 py-3 text-sm">
                      <BellRing className="size-4 shrink-0 text-primary" />
                      <span className="font-medium capitalize">{prettyDate(w.date)}</span>
                      <span className="text-muted-foreground">· {w.serviceName} · {w.petName}</span>
                      {w.notified ? (
                        <Badge className="ml-auto rounded-full bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300">¡Hueco libre!</Badge>
                      ) : (
                        <Badge variant="secondary" className="ml-auto rounded-full">Esperando hueco</Badge>
                      )}
                      <Button
                        size="sm"
                        variant="ghost"
                        className="rounded-full"
                        onClick={async () => {
                          try {
                            await leaveWaitlist({ waitlistId: w._id });
                            toast.success("Saliste de la lista de espera.");
                          } catch (e) {
                            toast.error(e instanceof Error ? e.message : "No se pudo salir.");
                          }
                        }}
                      >
                        <X className="size-3.5" /> Salir
                      </Button>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </TabsContent>

          {/* ---------- Agenda del salón ---------- */}
          <TabsContent value="agenda" className="mt-6">
            <div className="grid gap-4 lg:grid-cols-2">
              {[day1, day2].map((dayAppts, idx) => {
                const dateStr = salonDays[idx];
                if (!dateStr) return null;
                const sched = SCHEDULE[new Date(dateStr + "T12:00:00").getDay()];
                const relevant = (dayAppts ?? [])
                  .filter((a) => a.status !== "cancelled")
                  .sort((a, b) => a.start.localeCompare(b.start));
                return (
                  <Card key={dateStr}>
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center justify-between text-base">
                        <span className="capitalize">{prettyDate(dateStr)}</span>
                        <span className="text-xs font-normal text-muted-foreground">
                          {sched ? `${sched.open}–${sched.close}` : "Cerrado"}
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {relevant.length === 0 ? (
                        <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">
                          Día libre. ¡Perfecto para reservar con toda la tranquilidad!
                        </p>
                      ) : (
                        <ul className="space-y-2">
                          {relevant.map((a) => (
                            <li
                              key={a._id}
                              className={`flex items-center gap-3 rounded-xl border px-3 py-2.5 text-sm ${
                                a.userId === user?._id ? "border-primary/40 bg-primary/5" : "border-border/60 bg-card"
                              }`}
                            >
                              <span className="w-24 shrink-0 font-semibold tabular-nums">{a.start}</span>
                              <span className="min-w-0 flex-1 truncate">
                                {a.serviceName} · <strong>{a.petName}</strong>
                              </span>
                              <Badge variant="secondary" className="rounded-full">{a.petSize}</Badge>
                            </li>
                          ))}
                        </ul>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
              <Card className="lg:col-span-2">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-base">
                    <Clock className="size-4 text-primary" /> Horario del salón
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-1.5 text-sm sm:grid-cols-2">
                    {[1, 2, 3, 4, 5, 6, 0].map((d) => {
                      const s = SCHEDULE[d];
                      return (
                        <p key={d} className="flex justify-between border-b border-border/40 pb-1.5 last:border-0">
                          <span className="text-muted-foreground">{DAY_NAMES[d]}</span>
                          <span className="font-medium">{s ? `${s.open} – ${s.close}` : "Cerrado"}</span>
                        </p>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5"><Users className="size-3.5" /> {SALON.address}</span>
          <span className="flex items-center gap-1.5"><Stethoscope className="size-3.5" /> Urgencias: {SALON.phone}</span>
          <span className="flex items-center gap-1.5"><Camera className="size-3.5" /> Fotos del resultado en cada visita</span>
        </p>
      </main>

      {/* ---------- Dialog: editar peludo ---------- */}
      <Dialog open={!!petDialog} onOpenChange={(open) => !open && setPetDialog(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Editar ficha</DialogTitle>
            <DialogDescription>Actualiza el tamaño o las notas de cuidado.</DialogDescription>
          </DialogHeader>
          {petDialog && (
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label>Tamaño</Label>
                <Select
                  value={petDialog.size}
                  onValueChange={(v) => setPetDialog({ ...petDialog, size: v as SizeKey })}
                >
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    {(Object.keys(SIZE_LABELS) as SizeKey[]).map((k) => (
                      <SelectItem key={k} value={k}>{SIZE_LABELS[k]}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-vaccine">Última vacuna de la rabia</Label>
                <Input
                  id="edit-vaccine"
                  type="date"
                  value={petDialog.lastVaccineAt}
                  onChange={(e) => setPetDialog({ ...petDialog, lastVaccineAt: e.target.value })}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="edit-notes">Notas</Label>
                <Textarea
                  id="edit-notes"
                  value={petDialog.notes}
                  onChange={(e) => setPetDialog({ ...petDialog, notes: e.target.value })}
                  placeholder="Alergias, miedos, preferencias…"
                />
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="ghost" onClick={() => setPetDialog(null)}>Cancelar</Button>
            <Button onClick={handleSavePet}>Guardar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ---------- Dialog: reprogramar ---------- */}
      <Dialog open={!!reschedule} onOpenChange={(open) => !open && setReschedule(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Mover cita</DialogTitle>
            <DialogDescription>Elige otro día y hora libres. Sin coste.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex gap-2 overflow-x-auto pb-2">
              {rescheduleDays.map((d) => (
                <button
                  key={d}
                  type="button"
                  onClick={() => { setRescheduleDate(d); setRescheduleStart(null); }}
                  className={`flex min-w-20 shrink-0 flex-col items-center rounded-xl border px-3 py-2 transition-colors ${
                    rescheduleDate === d
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary/40"
                  }`}
                >
                  <span className="text-xs capitalize opacity-80">{shortDate(d).split(",")[0]}</span>
                  <span className="text-sm font-semibold">{shortDate(d).split(", ")[1]}</span>
                </button>
              ))}
            </div>
            {rescheduleDate && (
              rescheduleSlots === undefined ? (
                <div className="flex justify-center py-4"><PawPrint className="size-5 animate-pulse text-muted-foreground" /></div>
              ) : (rescheduleSlots?.length ?? 0) === 0 ? (
                <p className="rounded-xl bg-muted/60 px-4 py-3 text-sm text-muted-foreground">Sin huecos ese día.</p>
              ) : (
                <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
                  {rescheduleSlots!.map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setRescheduleStart(t)}
                      className={`rounded-xl border py-2 text-sm font-medium tabular-nums transition-colors ${
                        rescheduleStart === t
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-card hover:border-primary/40"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              )
            )}
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setReschedule(null)}>Cancelar</Button>
            <Button onClick={handleReschedule} disabled={!rescheduleDate || !rescheduleStart}>
              Confirmar nueva hora
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ---------- Dialog: reseña ---------- */}
      <Dialog open={!!reviewDialog} onOpenChange={(open) => !open && setReviewDialog(null)}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>¿Cómo fue la visita?</DialogTitle>
            <DialogDescription>Tu opinión ayuda a otros humanos y a nosotros.</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="flex justify-center gap-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <button key={i} type="button" onClick={() => setReviewStars(i)} aria-label={`${i} estrellas`}>
                  <Star className={`size-8 transition-transform hover:scale-110 ${i <= reviewStars ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`} />
                </button>
              ))}
            </div>
            <Textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              placeholder="Cuentas cómo salió el peludo…"
              rows={3}
            />
            <p className="text-xs text-muted-foreground">
              Se publicará con el nombre de tu perfil{nextPet ? ` y el nombre de ${nextPet.name}` : ""}.
            </p>
          </div>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setReviewDialog(null)}>Ahora no</Button>
            <Button onClick={handleReviewSubmit} disabled={reviewText.trim().length < 4}>
              Publicar reseña
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
