import logo from "@/assets/logo.svg";
import { AdminPanel } from "@/components/mudando/AdminPanel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api, errorMessage, type Quote } from "@/api";
import { formatEuros, VIVIENDA_META } from "@/lib/quote";
import { CHECKLIST_TASKS } from "@/lib/checklist";
import {
  ArrowRight,
  Boxes,
  CalendarDays,
  CalendarPlus,
  Check,
  Clock,
  House,
  Loader2,
  ListChecks,
  PackageCheck,
  PartyPopper,
  Route,
  Star,
  Trash2,
  Truck,
  X,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

const STATUS_META: Record<
  Quote["status"],
  { label: string; className: string; icon: typeof Clock; step: number | null }
> = {
  pendiente: {
    label: "Presupuesto pendiente",
    className: "border-coral/40 bg-coral/10 text-coral-deep",
    icon: Clock,
    step: 1,
  },
  confirmado: {
    label: "Reserva confirmada",
    className: "border-leaf/40 bg-leaf/10 text-leaf",
    icon: Check,
    step: 2,
  },
  completado: {
    label: "Completada",
    className: "border-ink/20 bg-ink/5 text-ink/70",
    icon: PackageCheck,
    step: 3,
  },
  cancelado: {
    label: "Cancelada",
    className: "border-destructive/30 bg-destructive/10 text-destructive",
    icon: X,
    step: null,
  },
};

const TIMELINE = ["Presupuesto", "Fecha reservada", "Completada"];

function formatFecha(ts: number) {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(ts));
}

function formatFechaISO(iso: string) {
  const date = new Date(`${iso}T00:00:00`);
  if (Number.isNaN(date.getTime())) return iso;
  return formatFecha(date.getTime());
}

function Timeline({ step }: { step: number | null }) {
  return (
    <ol className="flex items-center gap-2">
      {TIMELINE.map((label, i) => {
        const position = i + 1;
        const done = step !== null && position <= step;
        return (
          <li key={label} className="flex flex-1 flex-col gap-1.5">
            <div
              className={`h-1.5 rounded-full ${
                done ? "bg-coral" : "bg-ink/10"
              }`}
            />
            <span
              className={`text-[11px] font-medium ${
                done ? "text-coral-deep" : "text-muted-foreground"
              }`}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}

function viviendaLabel(quote: Quote) {
  return (
    VIVIENDA_META[quote.vivienda as keyof typeof VIVIENDA_META]?.label ??
    quote.vivienda
  );
}

export default function Dashboard() {
  // Quotes come from the Hono API and are refetched after every write, so
  // what is on screen always matches what is stored.
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadFailed, setLoadFailed] = useState(false);
  const [toCancel, setToCancel] = useState<Quote | null>(null);
  const [cancelling, setCancelling] = useState(false);
  const [fecha, setFecha] = useState("");
  const [reserving, setReserving] = useState<string | null>(null);
  const [checklistDone, setChecklistDone] = useState<string[]>([]);
  const [savingChecklist, setSavingChecklist] = useState(false);
  const checklistDirty = useRef(false);

  const load = useCallback(async () => {
    try {
      const response = await api.api.quotes.$get({ query: {} });
      if (!response.ok) throw new Error("read");
      setQuotes((await response.json()) as Quote[]);
      setLoadFailed(false);
    } catch {
      // Keep whatever is on screen rather than blanking the page, and say
      // so instead of showing stale numbers as if they were current.
      setLoadFailed(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void load();
  }, [load]);

  async function handleCancel() {
    if (!toCancel) return;
    setCancelling(true);
    try {
      const response = await api.api.quotes[":id"].cancel.$post({
        param: { id: toCancel.id },
      });
      if (!response.ok) {
        toast.error(
          await errorMessage(response, "No se pudo cancelar el presupuesto."),
        );
        return;
      }

      toast.success("Presupuesto cancelado");
      setToCancel(null);
      await load();
    } catch (error) {
      console.error("Error cancelando presupuesto:", error);
      toast.error("No se pudo cancelar el presupuesto.");
    } finally {
      setCancelling(false);
    }
  }

  // Sincroniza el checklist local con el presupuesto activo más reciente.
  useEffect(() => {
    if (quotes.length === 0) return;
    const activo = quotes[0];
    const saved = activo.checklistState ?? [];
    if (!checklistDirty.current) {
      setChecklistDone(saved);
    }
  }, [quotes]);

  async function persistChecklist(next: string[]) {
    const activo = quotes[0];
    if (!activo || !checklistDirty.current) return;
    setSavingChecklist(true);
    try {
      const response = await api.api.quotes[":id"].checklist.$put({
        param: { id: activo.id },
        json: { checklistState: next },
      });
      if (!response.ok) {
        toast.error(
          await errorMessage(response, "No se pudo guardar el checklist."),
        );
      }
    } catch (error) {
      console.error("Error guardando checklist:", error);
      toast.error("No se pudo guardar el checklist.");
    } finally {
      setSavingChecklist(false);
    }
  }

  function toggleChecklist(id: string) {
    setChecklistDone((prev) => {
      const next = prev.includes(id)
        ? prev.filter((v) => v !== id)
        : [...prev, id];
      checklistDirty.current = true;
      void persistChecklist(next);
      return next;
    });
  }

  async function handleReserve(quote: Quote) {
    if (!fecha) {
      toast.error("Elige primero la fecha de tu mudanza.");
      return;
    }
    setReserving(quote.id);
    try {
      const response = await api.api.quotes[":id"].confirm.$post({
        param: { id: quote.id },
        json: { scheduledDate: fecha },
      });
      if (!response.ok) {
        toast.error(
          await errorMessage(response, "No se pudo reservar la fecha."),
        );
        return;
      }

      toast.success("¡Mudanza reservada!", {
        description: `Te esperamos el ${formatFechaISO(fecha)}. Te presentamos al equipo 48 h antes.`,
      });
      setFecha("");
      await load();
    } catch (error) {
      console.error("Error reservando mudanza:", error);
      toast.error("No se pudo reservar la fecha.");
    } finally {
      setReserving(null);
    }
  }

  const activas = quotes.filter(
    (q) => q.status === "pendiente" || q.status === "confirmado",
  );
  const proxima = activas[0];
  const hoy = new Date().toISOString().slice(0, 10);
  const checklistPct = Math.round(
    (checklistDone.length / CHECKLIST_TASKS.length) * 100,
  );
  const checklistCompleto = checklistDone.length === CHECKLIST_TASKS.length;

  return (
    <div className="min-h-screen bg-cream text-foreground">
      <header className="border-b border-ink/10 bg-cream/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Mudando" className="size-9 rounded-lg" />
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              Mudando
            </span>
          </Link>
          <div className="flex items-center gap-2">
            <Button
              asChild
              variant="ghost"
              className="text-ink/80 hover:text-ink"
            >
              <Link to="/">
                <House className="size-4" />
                <span className="hidden sm:inline">Volver a la web</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6">
        {loadFailed && (
          <p
            role="alert"
            className="mb-6 rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
          >
            No se pudieron cargar los presupuestos. Comprueba que el servidor de
            la API está en marcha.
          </p>
        )}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-medium text-muted-foreground">
              Panel de mudanzas
            </p>
            <h1 className="mt-1 font-display text-3xl font-bold tracking-tight text-ink">
              Presupuestos y reservas
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Gestiona los presupuestos guardados y reserva la fecha de cada
              mudanza.
            </p>
          </div>
          <Button asChild className="self-start">
            <Link to="/#calculadora">
              <Route className="size-4" />
              Calcular otra mudanza
            </Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {[
            {
              icon: Boxes,
              label: "Presupuestos guardados",
              value: quotes.length,
            },
            {
              icon: CalendarDays,
              label: "Mudanzas activas",
              value: activas.length,
            },
            {
              icon: PackageCheck,
              label: "Completadas",
              value: quotes.filter((q) => q.status === "completado").length,
            },
          ].map(({ icon: Icon, label, value }) => (
            <Card key={label} className="border-ink/10 shadow-none">
              <CardContent className="flex items-center gap-4 pt-6">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-coral/15 text-coral-deep">
                  <Icon className="size-5" />
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold text-ink">
                    {value}
                  </p>
                  <p className="text-xs text-muted-foreground">{label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Administración (solo visible para admin) */}
        <AdminPanel />

        {/* Reseña si ya completó una mudanza */}
        {quotes.some((q) => q.status === "completado") && (
          <div className="mt-8 flex flex-col gap-3 rounded-2xl border border-coral/30 bg-coral/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm text-ink">
              <span className="font-semibold">¿Ya te hemos mudado?</span> Tu
              reseña ayuda a que otros confíen en el precio cerrado.
            </p>
            <Button asChild size="sm" className="shrink-0">
              <Link to="/#opiniones">
                <Star className="size-4" />
                Dejar reseña
              </Link>
            </Button>
          </div>
        )}

        {/* Banner del día D */}
        {proxima?.scheduledDate &&
          proxima.status === "confirmado" &&
          (() => {
            const mudanza = new Date(`${proxima.scheduledDate}T00:00:00`);
            const hoyDate = new Date(`${hoy}T00:00:00`);
            const dias = Math.round(
              (mudanza.getTime() - hoyDate.getTime()) / 86_400_000,
            );
            const esHoy = dias === 0;
            const esManana = dias === 1;
            if (dias > 3 || dias < 0) return null;
            return (
              <div
                className={`mt-8 overflow-hidden rounded-2xl p-5 sm:p-6 ${
                  esHoy ? "bg-coral text-white" : "bg-ink text-cream"
                }`}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex size-12 shrink-0 items-center justify-center rounded-xl ${
                        esHoy ? "bg-white/20" : "bg-coral/20 text-coral"
                      }`}
                    >
                      <Truck className="size-6" />
                    </span>
                    <div>
                      <p
                        className={`font-display text-lg font-bold ${
                          esHoy ? "text-white" : "text-cream"
                        }`}
                      >
                        {esHoy
                          ? "¡Hoy es el gran día! El equipo está en camino"
                          : esManana
                            ? "Mañana es tu mudanza"
                            : `Tu mudanza es en ${dias} días`}
                      </p>
                      <p
                        className={`text-sm ${
                          esHoy ? "text-white/85" : "text-cream/70"
                        }`}
                      >
                        {esHoy
                          ? "Ten a mano el kit de supervivencia y disfruta: del resto nos encargamos nosotros."
                          : `Tu equipo confirmado llega el ${formatFechaISO(proxima.scheduledDate)} en tu ventana de ±30 min.`}
                      </p>
                      {!esHoy && (
                        <p className="mt-1 flex items-center gap-1.5 text-xs text-cream/60">
                          <ListChecks className="size-3.5" />
                          Checklist: {checklistDone.length}/
                          {CHECKLIST_TASKS.length} tareas completadas
                        </p>
                      )}
                    </div>
                  </div>
                  <a
                    href="/#checklist"
                    className={`shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
                      esHoy
                        ? "bg-white/15 text-white hover:bg-white/25"
                        : "bg-coral text-primary-foreground hover:bg-coral-deep"
                    }`}
                  >
                    Abrir checklist
                  </a>
                </div>
              </div>
            );
          })()}

        {/* Próxima mudanza */}
        {proxima && (
          <section className="mt-10">
            <h2 className="font-display text-xl font-bold text-ink">
              Tu próxima mudanza
            </h2>
            <Card className="mt-4 overflow-hidden border-ink/10 shadow-md shadow-ink/5">
              <div className="bg-tape px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-coral-deep">
                {proxima.status === "pendiente"
                  ? "Reserva tu fecha para cerrar el precio"
                  : "Todo listo para el gran día"}
              </div>
              <CardContent className="pt-6">
                <div className="flex flex-col gap-6 lg:flex-row">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="font-display text-lg font-semibold text-ink">
                        Mudanza de {viviendaLabel(proxima)}
                      </h3>
                      <Badge
                        variant="outline"
                        className={STATUS_META[proxima.status].className}
                      >
                        {(() => {
                          const Icon = STATUS_META[proxima.status].icon;
                          return <Icon className="size-3.5" />;
                        })()}
                        {STATUS_META[proxima.status].label}
                      </Badge>
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {proxima.distanciaKm} km · plantas {proxima.pisoOrigen}ª →{" "}
                      {proxima.pisoDestino}ª · {proxima.volumen} m³
                      {proxima.extras.length > 0 &&
                        ` · ${proxima.extras.length} extra(s)`}
                    </p>
                    <p className="mt-1 font-display text-2xl font-extrabold text-ink">
                      {formatEuros(proxima.total)}
                      <span className="ml-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        precio cerrado
                      </span>
                    </p>

                    {proxima.status === "pendiente" ? (
                      <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-center">
                        <Input
                          type="date"
                          min={hoy}
                          value={fecha}
                          onChange={(e) => setFecha(e.target.value)}
                          className="sm:w-44"
                        />
                        <Button
                          type="button"
                          onClick={() => handleReserve(proxima)}
                          disabled={reserving === proxima.id || !fecha}
                        >
                          {reserving === proxima.id ? (
                            <Loader2 className="size-4 animate-spin" />
                          ) : (
                            <CalendarPlus className="size-4" />
                          )}
                          Reservar fecha
                        </Button>
                      </div>
                    ) : (
                      <p className="mt-5 flex items-center gap-2 rounded-xl border border-leaf/30 bg-leaf/10 px-4 py-3 text-sm font-medium text-ink">
                        <CalendarDays className="size-4 text-leaf" />
                        {proxima.scheduledDate
                          ? `Fecha confirmada: ${formatFechaISO(proxima.scheduledDate)}`
                          : "Fecha confirmada"}
                        <span className="ml-1 text-xs font-normal text-muted-foreground">
                          · te presentamos al equipo 48 h antes
                        </span>
                      </p>
                    )}
                  </div>

                  <div className="w-full lg:w-64">
                    <Timeline step={STATUS_META[proxima.status].step} />
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Checklist sincronizado */}
        {quotes.length > 0 && (
          <section className="mt-10">
            <div className="flex items-center justify-between gap-4">
              <h2 className="font-display text-xl font-bold text-ink">
                Checklist de tu mudanza
              </h2>
              {savingChecklist && (
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Loader2 className="size-3.5 animate-spin" />
                  Guardando…
                </span>
              )}
            </div>
            <Card className="mt-4 border-ink/10 shadow-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-ink">
                    {checklistCompleto
                      ? "¡Todo listo para el día D!"
                      : `${checklistDone.length} de ${CHECKLIST_TASKS.length} tareas completadas`}
                  </p>
                  <p className="font-display text-lg font-extrabold text-coral-deep">
                    {checklistPct}%
                  </p>
                </div>
                <div className="mt-2.5 h-2.5 overflow-hidden rounded-full bg-ink/10">
                  <div
                    className="h-full rounded-full bg-coral transition-all duration-500"
                    style={{ width: `${checklistPct}%` }}
                  />
                </div>
                {checklistCompleto && (
                  <p className="mt-3 flex items-center gap-2 text-sm font-medium text-leaf">
                    <PartyPopper className="size-4" />
                    Con esto y el camión, la mudanza está dominada.
                  </p>
                )}
                <ul className="mt-5 grid gap-x-8 gap-y-1 sm:grid-cols-2">
                  {CHECKLIST_TASKS.map(({ id, title }) => {
                    const checked = checklistDone.includes(id);
                    return (
                      <li key={id}>
                        <button
                          type="button"
                          onClick={() => toggleChecklist(id)}
                          aria-pressed={checked}
                          className={`flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                            checked
                              ? "text-ink/45 line-through"
                              : "text-ink hover:bg-sand/60"
                          }`}
                        >
                          <span
                            className={`flex size-5 shrink-0 items-center justify-center rounded-md border-2 transition-colors ${
                              checked
                                ? "border-leaf bg-leaf text-white"
                                : "border-ink/25"
                            }`}
                          >
                            {checked && <Check className="size-3.5" />}
                          </span>
                          {title}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>
          </section>
        )}

        {/* Historial */}
        <section className="mt-10">
          <h2 className="font-display text-xl font-bold text-ink">
            Todos los presupuestos
          </h2>
          {loading ? (
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Loader2 className="size-4 animate-spin" />
              Cargando presupuestos…
            </div>
          ) : quotes.length === 0 ? (
            <Card className="mt-4 border-dashed border-ink/20 bg-card/60 shadow-none">
              <CardContent className="flex flex-col items-center gap-4 py-12 text-center">
                <span className="flex size-14 items-center justify-center rounded-2xl bg-coral/15 text-coral-deep">
                  <Boxes className="size-7" />
                </span>
                <div>
                  <p className="font-display text-lg font-semibold text-ink">
                    Aún no hay presupuestos
                  </p>
                  <p className="mx-auto mt-1 max-w-sm text-sm text-muted-foreground">
                    Calcula una mudanza en la portada y guarda el presupuesto
                    para verlo aquí con su estado.
                  </p>
                </div>
                <Button asChild>
                  <Link to="/#calculadora">
                    Calcular mi mudanza
                    <ArrowRight className="size-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="mt-4 space-y-4">
              {quotes.map((quote) => {
                const status = STATUS_META[quote.status];
                const StatusIcon = status.icon;
                return (
                  <Card key={quote.id} className="border-ink/10 shadow-sm">
                    <CardContent className="pt-6">
                      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <h3 className="font-display text-lg font-semibold text-ink">
                            Mudanza de {viviendaLabel(quote)}
                          </h3>
                          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
                            <CalendarDays className="size-3.5" />
                            Guardado el {formatFecha(quote.createdAt)}
                            {quote.scheduledDate &&
                              quote.status !== "cancelado" &&
                              ` · mudanza el ${formatFechaISO(quote.scheduledDate)}`}
                          </p>
                        </div>
                        <Badge variant="outline" className={status.className}>
                          <StatusIcon className="size-3.5" />
                          {status.label}
                        </Badge>
                      </div>

                      <div className="mt-4 grid gap-3 text-sm sm:grid-cols-2">
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Route className="size-4 text-coral-deep" />
                          {quote.distanciaKm} km · plantas {quote.pisoOrigen}ª →{" "}
                          {quote.pisoDestino}ª
                        </p>
                        <p className="flex items-center gap-2 text-muted-foreground">
                          <Boxes className="size-4 text-coral-deep" />
                          {quote.volumen} m³
                          {quote.extras.length > 0 &&
                            ` · ${quote.extras.length} extra(s)`}
                        </p>
                      </div>

                      <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4">
                        <p>
                          <span className="text-xs uppercase tracking-wide text-muted-foreground">
                            Total cerrado{" "}
                          </span>
                          <span className="font-display text-2xl font-extrabold text-ink">
                            {formatEuros(quote.total)}
                          </span>
                        </p>
                        {quote.status === "pendiente" && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="text-destructive hover:bg-destructive/10 hover:text-destructive"
                            onClick={() => setToCancel(quote)}
                          >
                            <Trash2 className="size-4" />
                            Cancelar
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </section>
      </main>

      <Dialog
        open={toCancel !== null}
        onOpenChange={(open) => !open && setToCancel(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¿Cancelar este presupuesto?</DialogTitle>
            <DialogDescription>
              La mudanza quedará marcada como cancelada. Si te cambias de idea,
              siempre puedes calcular una nueva en la portada.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setToCancel(null)}
              disabled={cancelling}
            >
              Mantener
            </Button>
            <Button
              variant="destructive"
              onClick={handleCancel}
              disabled={cancelling}
            >
              {cancelling && <Loader2 className="size-4 animate-spin" />}
              Cancelar presupuesto
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
