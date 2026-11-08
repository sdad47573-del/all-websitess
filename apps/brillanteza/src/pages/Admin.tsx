import { useMutation, useQuery } from "@app-client";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  ArrowLeft,
  Building2,
  CalendarClock,
  Check,
  ChevronDown,
  ChevronUp,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Users,
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { api } from "@/lib/api";
import type { Doc } from "@/lib/types";
import { serviceLabel, slotLabel } from "@/lib/pricing";

const QUOTE_STATUS_META: Record<string, { label: string; className: string }> = {
  new: {
    label: "Nueva",
    className: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300",
  },
  contacted: {
    label: "Contactada",
    className: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300",
  },
  closed: {
    label: "Cerrada",
    className: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300",
  },
};

function formatDate(iso: string) {
  const [y, m, d] = iso.split("-").map(Number);
  return new Date(y, m - 1, d).toLocaleDateString("es-ES", {
    weekday: "short",
    day: "numeric",
    month: "short",
  });
}

function AdminBookingRow({ booking }: { booking: Doc<"bookings"> }) {
  const updateStatus = useMutation(api.bookings.updateStatus);
  const [open, setOpen] = useState(false);

  const statusLabels: Record<string, string> = {
    pending: "Pendiente",
    confirmed: "Confirmada",
    in_progress: "En curso",
    completed: "Completada",
    cancelled: "Cancelada",
  };

  const handleStatus = async (newStatus: string) => {
    try {
      await updateStatus({ id: booking._id, status: newStatus as never });
      toast.success(`Reserva ${statusLabels[newStatus]?.toLowerCase() ?? newStatus}`);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al actualizar");
    }
  };

  return (
    <Card className="border-border/70 shadow-none">
      <CardHeader className="pb-3">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 text-left"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-bold">{formatDate(booking.preferredDate)}</p>
              <Badge
                className={
                  booking.status === "completed"
                    ? "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    : booking.status === "cancelled"
                      ? "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300"
                      : booking.status === "confirmed"
                        ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300"
                        : "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300"
                }
              >
                {statusLabels[booking.status] ?? booking.status}
              </Badge>
              <span className="font-extrabold tabular-nums">
                {booking.price.toFixed(2).replace(".", ",")} €
              </span>
            </div>
            <p className="mt-0.5 truncate text-sm text-muted-foreground">
              {serviceLabel(booking.serviceType)} · {slotLabel(booking.preferredSlot)} ·{" "}
              {booking.address}, {booking.city}
            </p>
          </div>
          {open ? <ChevronUp className="size-4 shrink-0" /> : <ChevronDown className="size-4 shrink-0" />}
        </button>
      </CardHeader>
      {open && (
        <CardContent className="flex flex-col gap-3 border-t pt-4">
          <div className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-4">
            <div>
              <p className="text-xs text-muted-foreground">Frecuencia</p>
              <p className="font-medium">{booking.frequency}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Tamaño</p>
              <p className="font-medium">
                {booking.bedrooms} hab. · {booking.bathrooms} baños
              </p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">CP</p>
              <p className="font-medium">{booking.postalCode ?? "—"}</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Duración</p>
              <p className="font-medium">{booking.durationHours} h</p>
            </div>
          </div>
          {booking.extras.length > 0 && (
            <p className="text-sm text-muted-foreground">
              Extras: {booking.extras.join(", ")}
            </p>
          )}
          {booking.notes && (
            <p className="rounded-lg bg-muted/60 p-3 text-sm">
              <span className="font-semibold">Notas: </span>
              {booking.notes}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-2">
            <Select
              value={booking.status}
              onValueChange={handleStatus}
            >
              <SelectTrigger className="w-44">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(statusLabels).map(([value, label]) => (
                  <SelectItem key={value} value={value} disabled={booking.status === "cancelled" && value !== "cancelled"}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      )}
    </Card>
  );
}

function AdminQuoteRow({ quote }: { quote: Doc<"customQuotes"> }) {
  const setStatus = useMutation(api.customQuotes.setStatus);
  const [open, setOpen] = useState(false);
  const meta = QUOTE_STATUS_META[quote.status] ?? QUOTE_STATUS_META.new;

  const typeLabels: Record<string, string> = {
    office: "Oficina",
    community: "Comunidad",
    store: "Comercio",
    hotel: "Hotel",
    other: "Otro",
  };

  const handleStatus = async (newStatus: string) => {
    try {
      await setStatus({ id: quote._id, status: newStatus as never });
      toast.success("Estado actualizado");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Error al actualizar");
    }
  };

  return (
    <Card className="border-border/70 shadow-none">
      <CardHeader className="pb-3">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 text-left"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-bold">{quote.name}</p>
              <Badge className={meta.className}>{meta.label}</Badge>
              <span className="text-sm text-muted-foreground">
                {typeLabels[quote.requestType] ?? quote.requestType}
              </span>
            </div>
            <p className="mt-0.5 flex items-center gap-1.5 truncate text-sm text-muted-foreground">
              <MapPin className="size-3 shrink-0" /> {quote.city}
              {quote.company && ` · ${quote.company}`}
            </p>
          </div>
          {open ? <ChevronUp className="size-4 shrink-0" /> : <ChevronDown className="size-4 shrink-0" />}
        </button>
      </CardHeader>
      {open && (
        <CardContent className="flex flex-col gap-3 border-t pt-4">
          <p className="rounded-lg bg-muted/60 p-3 text-sm">{quote.details}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a
              href={`mailto:${quote.email}`}
              className="flex items-center gap-1.5 font-medium text-primary hover:underline"
            >
              <Mail className="size-3.5" /> {quote.email}
            </a>
            {quote.phone && (
              <a
                href={`tel:${quote.phone}`}
                className="flex items-center gap-1.5 font-medium text-primary hover:underline"
              >
                <Phone className="size-3.5" /> {quote.phone}
              </a>
            )}
          </div>
          <Select value={quote.status} onValueChange={handleStatus}>
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Nueva</SelectItem>
              <SelectItem value="contacted">Contactada</SelectItem>
              <SelectItem value="closed">Cerrada</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      )}
    </Card>
  );
}

function AdminJobRow({ job }: { job: Doc<"jobApplications"> }) {
  const setStatus = useMutation(api.jobs.setStatus);
  const [open, setOpen] = useState(false);
  const statusMeta: Record<string, { label: string; className: string }> = {
    new: { label: "Nueva", className: "bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300" },
    reviewing: { label: "En revisión", className: "bg-sky-100 text-sky-800 dark:bg-sky-950 dark:text-sky-300" },
    accepted: { label: "Aceptada", className: "bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300" },
    rejected: { label: "Descartada", className: "bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300" },
  };
  const meta = statusMeta[job.status] ?? statusMeta.new;

  return (
    <Card className="border-border/70 shadow-none">
      <CardHeader className="pb-3">
        <button
          type="button"
          className="flex w-full items-center justify-between gap-3 text-left"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <p className="font-bold">{job.name}</p>
              <Badge className={meta.className}>{meta.label}</Badge>
              <span className="text-sm text-muted-foreground">
                {job.city} · {job.experienceYears} años exp.
              </span>
            </div>
          </div>
          {open ? <ChevronUp className="size-4 shrink-0" /> : <ChevronDown className="size-4 shrink-0" />}
        </button>
      </CardHeader>
      {open && (
        <CardContent className="flex flex-col gap-3 border-t pt-4">
          {job.message && <p className="rounded-lg bg-muted/60 p-3 text-sm">{job.message}</p>}
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href={`mailto:${job.email}`} className="flex items-center gap-1.5 font-medium text-primary hover:underline">
              <Mail className="size-3.5" /> {job.email}
            </a>
            {job.phone && (
              <a href={`tel:${job.phone}`} className="flex items-center gap-1.5 font-medium text-primary hover:underline">
                <Phone className="size-3.5" /> {job.phone}
              </a>
            )}
          </div>
          <Select
            value={job.status}
            onValueChange={async (newStatus) => {
              try {
                await setStatus({ id: job._id, status: newStatus as never });
                toast.success("Estado actualizado");
              } catch (error) {
                toast.error(error instanceof Error ? error.message : "Error");
              }
            }}
          >
            <SelectTrigger className="w-44">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="new">Nueva</SelectItem>
              <SelectItem value="reviewing">En revisión</SelectItem>
              <SelectItem value="accepted">Aceptada</SelectItem>
              <SelectItem value="rejected">Descartada</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      )}
    </Card>
  );
}

export default function Admin() {
  const bookings = useQuery(api.bookings.listAll, {});
  const quotes = useQuery(api.customQuotes.listAll, {});
  const jobs = useQuery(api.jobs.listAll, {});

  const pendingBookings = (bookings ?? []).filter(
    (b) => b.status === "pending" || b.status === "confirmed",
  );
  const otherBookings = (bookings ?? []).filter(
    (b) => b.status === "in_progress" || b.status === "completed" || b.status === "cancelled",
  );
  const newQuotes = (quotes ?? []).filter((q) => q.status === "new");

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b border-border/60 bg-background">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link to="/dashboard" className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="size-4" /> Volver al panel
          </Link>
          <span className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sparkles className="size-4" />
            </span>
            <span className="font-extrabold tracking-tight">Brillanteza Admin</span>
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight">Operativa diaria</h1>
        <p className="mt-1 text-muted-foreground">
          Gestiona reservas y solicitudes comerciales. Al marcar una reserva como
          completada se liquidan las recompensas de referido pendientes.
        </p>

        <Tabs defaultValue="bookings" className="mt-6">
          <TabsList>
            <TabsTrigger value="bookings" className="gap-1.5">
              <CalendarClock className="size-4" />
              Reservas ({pendingBookings.length} activas)
            </TabsTrigger>
            <TabsTrigger value="quotes" className="gap-1.5">
              <Building2 className="size-4" />
              Presupuestos ({newQuotes.length} nuevas)
            </TabsTrigger>
            <TabsTrigger value="jobs" className="gap-1.5">
              <Users className="size-4" />
              Candidatos ({jobs?.length ?? 0})
            </TabsTrigger>
          </TabsList>

          <TabsContent value="bookings" className="mt-4 flex flex-col gap-3">
            {bookings === undefined ? (
              <p className="py-8 text-center text-sm text-muted-foreground">Cargando…</p>
            ) : bookings.length === 0 ? (
              <Card className="border-dashed shadow-none">
                <CardContent className="p-8 text-center text-sm text-muted-foreground">
                  No hay reservas todavía. Cuando los clientes reserven, aparecerán aquí.
                </CardContent>
              </Card>
            ) : (
              <>
                {pendingBookings.map((b) => (
                  <AdminBookingRow key={b._id} booking={b} />
                ))}
                {otherBookings.map((b) => (
                  <AdminBookingRow key={b._id} booking={b} />
                ))}
              </>
            )}
          </TabsContent>

          <TabsContent value="quotes" className="mt-4 flex flex-col gap-3">
            {quotes === undefined ? (
              <p className="py-8 text-center text-sm text-muted-foreground">Cargando…</p>
            ) : quotes.length === 0 ? (
              <Card className="border-dashed shadow-none">
                <CardContent className="p-8 text-center text-sm text-muted-foreground">
                  No hay solicitudes de presupuesto. Las del formulario B2B de la
                  landing llegan aquí.
                </CardContent>
              </Card>
            ) : (
              quotes.map((q) => <AdminQuoteRow key={q._id} quote={q} />)
            )}
          </TabsContent>

          <TabsContent value="jobs" className="mt-4 flex flex-col gap-3">
            {jobs === undefined ? (
              <p className="py-8 text-center text-sm text-muted-foreground">Cargando…</p>
            ) : jobs.length === 0 ? (
              <Card className="border-dashed shadow-none">
                <CardContent className="p-8 text-center text-sm text-muted-foreground">
                  No hay candidaturas todavía. Las del formulario «Únete» de la
                  landing llegan aquí.
                </CardContent>
              </Card>
            ) : (
              jobs.map((j) => <AdminJobRow key={j._id} job={j} />)
            )}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
