import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router";
import {
  api,
  errorMessage,
  type Booking,
  type BookingStatus,
  type Message,
  type Stats,
} from "@/api";
import {
  CalendarCheck,
  CalendarDays,
  Car,
  CheckCircle2,
  Clock,
  Euro,
  Inbox,
  Loader2,
  LogOut,
  Mail,
  MailOpen,
  ShieldCheck,
  Star,
  User,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BrandMark } from "@/components/BrandMark";
import {
  STATUS_LABELS,
  STATUS_STYLES,
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

function formatDMY(dateStr: string) {
  const [y, m, d] = dateStr.split("-");
  return `${d}/${m}/${y}`;
}

function StatCard({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Euro;
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="mt-1 font-display text-3xl font-extrabold">{value}</p>
            {hint && (
              <p className="mt-1 text-xs text-muted-foreground">{hint}</p>
            )}
          </div>
          <div className="flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
            <Icon className="size-5" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function AdminBookings({
  bookings,
  onChanged,
}: {
  bookings: Booking[];
  onChanged: () => void;
}) {
  const sorted = useMemo(() => {
    return [...bookings].sort((a, b) => {
      const ka = `${a.date}-${a.timeSlot}`;
      const kb = `${b.date}-${b.timeSlot}`;
      return ka.localeCompare(kb);
    });
  }, [bookings]);

  const handleSetStatus = async (bookingId: string, status: BookingStatus) => {
    const response = await api.api.bookings[":id"].status.$put({
      param: { id: bookingId },
      json: { status },
    });
    if (!response.ok) {
      toast.error(await errorMessage(response, "Error al actualizar"));
      return;
    }

    toast.success(
      `Reserva marcada como ${STATUS_LABELS[status]?.toLowerCase() ?? status}`,
    );
    onChanged();
  };

  if (sorted.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">Todavía no hay reservas.</p>
    );
  }

  return (
    <div className="space-y-3">
      {sorted.map((b) => (
        <div
          key={b.id}
          className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border bg-card/60 p-4"
        >
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-semibold">
                {SERVICE_NAMES[b.serviceId as ServiceId] ?? b.serviceId}
              </p>
              <Badge
                variant="outline"
                className={STATUS_STYLES[b.status] ?? ""}
              >
                {STATUS_LABELS[b.status] ?? b.status}
              </Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {formatDMY(b.date)} · {b.timeSlot} ·{" "}
              {VEHICLE_LABELS[b.vehicleType as VehicleType] ?? b.vehicleType}
              {b.vehiclePlate ? ` · ${b.vehiclePlate}` : ""}
            </p>
            {b.notes && (
              <p className="mt-1 text-xs italic text-muted-foreground">
                "{b.notes}"
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-2 font-display text-lg font-bold text-primary">
              {b.price}€
            </span>
            {b.status !== "confirmed" && b.status !== "done" && (
              <Button
                size="sm"
                variant="outline"
                className="gap-1 border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10"
                onClick={() => handleSetStatus(b.id, "confirmed")}
              >
                <CheckCircle2 className="size-3.5" /> Confirmar
              </Button>
            )}
            {b.status !== "done" && b.status !== "cancelled" && (
              <Button
                size="sm"
                variant="outline"
                className="gap-1 border-emerald-500/40 text-emerald-400 hover:bg-emerald-500/10"
                onClick={() => handleSetStatus(b.id, "done")}
              >
                <CheckCircle2 className="size-3.5" /> Finalizar
              </Button>
            )}
            {b.status !== "cancelled" && b.status !== "done" && (
              <Button
                size="sm"
                variant="outline"
                className="gap-1 text-red-400 hover:bg-red-500/10 hover:text-red-400"
                onClick={() => handleSetStatus(b.id, "cancelled")}
              >
                <XCircle className="size-3.5" /> Cancelar
              </Button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function AdminInbox({
  messages,
  onChanged,
}: {
  messages: Message[];
  onChanged: () => void;
}) {
  const sorted = useMemo(() => {
    return [...messages].sort((a, b) => b.createdAt - a.createdAt);
  }, [messages]);

  const handleMarkRead = async (messageId: string) => {
    const response = await api.api.messages[":id"].$put({
      param: { id: messageId },
    });
    if (!response.ok) {
      toast.error(await errorMessage(response, "Error al actualizar"));
      return;
    }

    toast.success("Mensaje marcado como leído");
    onChanged();
  };

  if (sorted.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        La bandeja de entrada está vacía.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {sorted.map((m) => (
        <div
          key={m.id}
          className={`rounded-xl border p-4 ${m.status === "new" ? "border-primary/40 bg-primary/[0.06]" : "border-border bg-card/60"}`}
        >
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              {m.status === "new" ? (
                <Mail className="size-4 text-primary" />
              ) : (
                <MailOpen className="size-4 text-muted-foreground" />
              )}
              <p className="font-semibold">{m.name}</p>
              <a
                href={`mailto:${m.email}`}
                className="text-sm text-primary hover:underline"
              >
                {m.email}
              </a>
              {m.phone && (
                <span className="text-sm text-muted-foreground">
                  · {m.phone}
                </span>
              )}
              {m.status === "new" && (
                <Badge
                  className="bg-primary/15 text-primary border-primary/30"
                  variant="outline"
                >
                  Nuevo
                </Badge>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {new Date(m.createdAt).toLocaleString("es-ES", {
                  dateStyle: "short",
                  timeStyle: "short",
                })}
              </span>
              {m.status === "new" && (
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => handleMarkRead(m.id)}
                >
                  Marcar leído
                </Button>
              )}
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{m.body}</p>
        </div>
      ))}
    </div>
  );
}

export default function Admin() {
  const navigate = useNavigate();
  const [stats, setStats] = useState<Stats | null>(null);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [reviewSummary, setReviewSummary] = useState<{
    avg: number;
    total: number;
  }>({
    avg: 0,
    total: 0,
  });
  const [loadFailed, setLoadFailed] = useState(false);

  const load = useCallback(async () => {
    try {
      // Four independent reads of the same state, fetched together.
      const [statsResponse, bookingsResponse, summaryResponse, messagesResponse] =
        await Promise.all([
          api.api.bookings.stats.$get(),
          api.api.bookings.$get({ query: {} }),
          api.api.reviews.summary.$get(),
          api.api.messages.$get(),
        ]);
      if (
        !statsResponse.ok ||
        !bookingsResponse.ok ||
        !summaryResponse.ok ||
        !messagesResponse.ok
      ) {
        throw new Error("read");
      }

      setStats((await statsResponse.json()) as Stats);
      setBookings((await bookingsResponse.json()) as Booking[]);
      setReviewSummary(
        (await summaryResponse.json()) as { avg: number; total: number },
      );
      setMessages((await messagesResponse.json()) as Message[]);
      setLoadFailed(false);
    } catch {
      setLoadFailed(true);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  if (loadFailed) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background p-6 text-foreground">
        <Card className="max-w-md text-center">
          <CardContent className="text-sm text-destructive">
            No se pudieron cargar los datos del taller. Comprueba que el
            servidor de la API está en marcha.
          </CardContent>
        </Card>
      </main>
    );
  }

  const today = new Date().toISOString().slice(0, 10);
  const todaysBookings = (bookings ?? []).filter(
    (b) => b.date === today && b.status !== "cancelled",
  );

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="glass sticky top-0 z-30 border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate("/")}>
              <BrandMark />
            </button>
            <Badge
              variant="outline"
              className="gap-1 border-primary/40 text-primary"
            >
              <ShieldCheck className="size-3.5" /> Admin
            </Badge>
          </div>
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={() => navigate("/dashboard")}
            >
              <User className="size-4" /> Mi área
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => navigate("/")}
              className="gap-1.5"
            >
              <LogOut className="size-4" /> Salir del panel
            </Button>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="font-display text-3xl font-bold tracking-tight">
          Panel del taller
        </h1>
        <p className="mt-1 text-muted-foreground">
          Reservas, facturación y mensajes de clientes en tiempo real.
        </p>

        {stats && (
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard
              icon={CalendarCheck}
              label="Citas hoy"
              value={stats?.todayCount ?? 0}
              hint="No canceladas"
            />
            <StatCard
              icon={Clock}
              label="Pendientes"
              value={stats?.pending ?? 0}
              hint="Esperan confirmación"
            />
            <StatCard
              icon={Euro}
              label="Facturado"
              value={`${stats?.revenueDone ?? 0}€`}
              hint="Servicios finalizados"
            />
            <StatCard
              icon={Star}
              label="Valoración media"
              value={
                reviewSummary && reviewSummary.total > 0
                  ? `${reviewSummary.avg}/5`
                  : "—"
              }
              hint={
                reviewSummary
                  ? `${reviewSummary.total} reseñas verificadas`
                  : "Sin reseñas aún"
              }
            />
          </div>
        )}

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          <Card className="lg:col-span-2 border-primary/30 bg-primary/[0.05]">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-display">
                <CalendarDays className="size-5 text-primary" /> Agenda de hoy
              </CardTitle>
            </CardHeader>
            <CardContent>
              {todaysBookings.length === 0 ? (
                <p className="text-sm text-muted-foreground">
                  No hay citas para hoy. Buen día para detallar la web. 😄
                </p>
              ) : (
                <div className="space-y-2">
                  {todaysBookings
                    .sort((a, b) => a.timeSlot.localeCompare(b.timeSlot))
                    .map((b) => (
                      <div
                        key={b.id}
                        className="flex items-center justify-between rounded-lg bg-card/70 px-4 py-2.5 text-sm"
                      >
                        <span className="flex items-center gap-2">
                          <Clock className="size-4 text-primary" />
                          <span className="font-semibold">{b.timeSlot}</span>
                          {SERVICE_NAMES[b.serviceId as ServiceId] ??
                            b.serviceId}
                        </span>
                        <Badge
                          variant="outline"
                          className={STATUS_STYLES[b.status] ?? ""}
                        >
                          {STATUS_LABELS[b.status] ?? b.status}
                        </Badge>
                      </div>
                    ))}
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center gap-2 font-display">
                <Car className="size-5 text-primary" /> Ocupación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {(["09:00", "11:00", "13:00", "16:00", "18:00"] as const).map(
                (slot) => {
                  const count = todaysBookings.filter(
                    (b) => b.timeSlot === slot,
                  ).length;
                  const pct = Math.min(100, (count / 2) * 100);
                  return (
                    <div key={slot}>
                      <div className="mb-1 flex items-center justify-between text-xs">
                        <span className="text-muted-foreground">{slot}</span>
                        <span className="font-medium">{count}/2</span>
                      </div>
                      <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-primary transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                  );
                },
              )}
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="bookings" className="mt-10">
          <TabsList>
            <TabsTrigger value="bookings" className="gap-1.5">
              <CalendarCheck className="size-4" /> Reservas
            </TabsTrigger>
            <TabsTrigger value="inbox" className="gap-1.5">
              <Inbox className="size-4" /> Mensajes
            </TabsTrigger>
          </TabsList>
          <TabsContent value="bookings" className="mt-6">
            <AdminBookings bookings={bookings} onChanged={load} />
          </TabsContent>
          <TabsContent value="inbox" className="mt-6">
            <AdminInbox messages={messages} onChanged={load} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
