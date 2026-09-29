import { useMemo, useState } from "react";
import { Link } from "react-router";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  CalendarClock,
  Check,
  FileText,
  MapPin,
  Navigation,
  Route,
  Star,
  Timer,
} from "lucide-react";
import {
  CHECKLIST_AREAS,
  SERVICE_TYPES,
  VISIT_STATUS_CLASS,
  distanceKm,
  formatCountdown,
  formatCurrency,
  formatDateTime,
  nearestNeighborOrder,
} from "@/components/pest/domain";

/** Minutos estimados de trabajo en campo por parada. */
const MINUTES_PER_STOP = 45;
/** Velocidad media en nucleo urbano. */
const KM_PER_MINUTE = 0.45;
const DAY = 24 * 60 * 60 * 1000;
/** Punto de salida de las rutas (base de operacion). */
const DEPOT = { lat: 39.4699, lng: -0.3763 };

type Product = { name: string; dose: string; registration: string };

export function VisitasPanel({
  sites,
  visits,
  invoices,
  reviews,
  products,
  onGenerateSchedule,
  onComplete,
  onRequestReview,
}: {
  sites: Doc<"sites">[];
  visits: Doc<"visits">[];
  invoices: Doc<"invoices">[];
  reviews: Doc<"reviews">[];
  products: Doc<"products">[];
  onGenerateSchedule: (args: { daysAhead?: number }) => Promise<unknown>;
  onComplete: (args: {
    visitId: Id<"visits">;
    products?: Product[];
    notes?: string;
    signature?: string;
    amount?: number;
    consumptions?: { productId: Id<"products">; quantity: number }[];
    checklist?: { area: string; ok: boolean; note?: string }[];
  }) => Promise<unknown>;
  onRequestReview: (args: { visitId: Id<"visits"> }) => Promise<unknown>;
}) {
  const [showDone, setShowDone] = useState(false);
  const [closing, setClosing] = useState<Doc<"visits"> | null>(null);
  const [productName, setProductName] = useState(
    "Cebo en gel cipermetrina 2,5 %",
  );
  const [productDose, setProductDose] = useState("30 g");
  const [productReg, setProductReg] = useState("ES-REG-24810");
  const [serviceType, setServiceType] = useState<string>(SERVICE_TYPES[0]);
  const [notes, setNotes] = useState("");
  const [signature, setSignature] = useState("");
  const [amount, setAmount] = useState("");
  const [consumed, setConsumed] = useState<Record<string, string>>({});
  const [checklist, setChecklist] = useState<Record<string, boolean>>({});
  const [saving, setSaving] = useState(false);

  const siteOf = (siteId: Id<"sites">) => sites.find((s) => s._id === siteId);
  const invoiceOf = (visitId: Id<"visits">) =>
    invoices.find((i) => i.visitId === visitId);
  const reviewOf = (visitId: Id<"visits">) =>
    reviews.find((r) => r.visitId === visitId);

  const pending = useMemo(
    () =>
      visits
        .filter((v) => v.status === "programada")
        .sort((a, b) => a.scheduledFor - b.scheduledFor),
    [visits],
  );
  const done = useMemo(
    () =>
      visits
        .filter((v) => v.status === "completada")
        .sort((a, b) => (b.completedAt ?? 0) - (a.completedAt ?? 0)),
    [visits],
  );

  const visible = showDone ? done : pending;

  /** Rutas por tecnico, ordenadas por parada mas cercana y con ETA. */
  const routes = useMemo(() => {
    const groups = new Map<string, Doc<"visits">[]>();
    for (const visit of pending) {
      const key = visit.technician || "Sin asignar";
      groups.set(key, [...(groups.get(key) ?? []), visit]);
    }

    return [...groups.entries()].map(([technician, items]) => {
      const pointOf = (visit: Doc<"visits">) => {
        const site = siteOf(visit.siteId);
        if (!site || site.lat === undefined || site.lng === undefined) return null;
        return { lat: site.lat, lng: site.lng };
      };
      // Optimizacion de recorrido: vecino mas cercano desde la base.
      const ordered = nearestNeighborOrder(items, pointOf, DEPOT);

      let km = 0;
      let cursor = DEPOT;
      const base = ordered[0]?.scheduledFor ?? 0;

      const stops = ordered.map((visit) => {
        const point = pointOf(visit);
        if (point) {
          km += distanceKm(cursor, point);
          cursor = point;
        }
        const driveMinutes = Math.round(km / KM_PER_MINUTE);
        const stop = {
          visit,
          leg: Math.round(km * 10) / 10,
          eta: new Date(base).setHours(
            8 + Math.floor((30 + driveMinutes) / 60),
            (30 + driveMinutes) % 60,
            0,
            0,
          ),
        };
        return stop;
      });

      return {
        technician,
        stops,
        minutes: stops.length * MINUTES_PER_STOP,
        km: Math.round(km * 10) / 10,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pending, sites]);

  const today = new Date().setHours(0, 0, 0, 0);
  const dueToday = pending.filter(
    (v) => v.scheduledFor <= today + DAY && v.scheduledFor >= today - 2 * DAY,
  ).length;

  const openClose = (visit: Doc<"visits">) => {
    const site = siteOf(visit.siteId);
    setClosing(visit);
    setServiceType(visit.serviceType || SERVICE_TYPES[0]);
    setNotes("");
    setSignature("");
    setAmount(String(site?.monthlyFee ?? 0));
    setConsumed({});
    setChecklist({});
  };

  const complete = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!closing) return;
    setSaving(true);
    try {
      await onComplete({
        visitId: closing._id,
        products: productName.trim()
          ? [
              {
                name: productName.trim(),
                dose: productDose.trim(),
                registration: productReg.trim(),
              },
            ]
          : [],
        notes: notes.trim() || undefined,
        signature: signature.trim() || undefined,
        amount: Number(amount) || 0,
        consumptions: Object.entries(consumed)
          .map(([productId, quantity]) => ({
            productId: productId as Id<"products">,
            quantity: Number(quantity) || 0,
          }))
          .filter((c) => c.quantity > 0),
        checklist: CHECKLIST_AREAS.filter((area) => area in checklist).map(
          (area) => ({ area, ok: checklist[area] }),
        ),
      });
      setClosing(null);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Rutas y órdenes de trabajo
          </h2>
          <p className="text-sm text-muted-foreground">
            {pending.length} visita{pending.length === 1 ? "" : "s"} en ruta ·{" "}
            {dueToday} para pasar hoy · {done.length} completadas
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button
            type="button"
            variant="outline"
            className="gap-2"
            onClick={() => onGenerateSchedule({ daysAhead: 45 })}
          >
            <CalendarClock className="size-4" />
            Programar contrato
          </Button>
          <Button
            type="button"
            variant="ghost"
            onClick={() => setShowDone((v) => !v)}
          >
            {showDone ? "Ver pendientes" : "Ver completadas"}
          </Button>
        </div>
      </div>

      {!showDone && routes.length > 0 && (
        <section className="grid gap-4 lg:grid-cols-2">
          {routes.map((route) => (
            <div
              key={route.technician}
              className="rounded-xl border border-border/70 bg-card p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <Route className="size-4 text-primary" />
                  <h3 className="text-sm font-semibold">{route.technician}</h3>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Navigation className="size-3" />
                  {route.km} km
                </Badge>
                <Badge variant="outline" className="gap-1">
                  <Timer className="size-3" />
                  {Math.round((route.minutes / 60) * 10) / 10} h de campo
                </Badge>
              </div>

              <ol className="mt-4 flex flex-col">
                {route.stops.map((stop, index) => {
                  const site = siteOf(stop.visit.siteId);
                  return (
                    <li key={stop.visit._id} className="flex gap-3">
                      <div className="flex flex-col items-center">
                        <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-semibold text-primary">
                          {index + 1}
                        </span>
                        {index < route.stops.length - 1 && (
                          <span className="my-1 w-px flex-1 bg-border" />
                        )}
                      </div>
                      <div className="min-w-0 flex-1 pb-4">
                        <div className="flex flex-wrap items-center gap-2">
                          <p className="text-sm font-medium">
                            {site?.name ?? "Sitio eliminado"}
                          </p>
                          <Badge
                            variant="outline"
                            className={VISIT_STATUS_CLASS[stop.visit.status]}
                          >
                            {formatCountdown(stop.visit.scheduledFor)}
                          </Badge>
                        </div>
                        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground">
                          <MapPin className="size-3" />
                          {site?.city ?? "—"} · {site?.address ?? "—"}
                        </p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {stop.visit.serviceType} · llegada estimada{" "}
                          {new Date(stop.eta).toLocaleTimeString("es-ES", {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}{" "}
                          · {stop.leg} km acumulados
                        </p>
                        <Button
                          type="button"
                          size="sm"
                          variant="outline"
                          className="mt-2 gap-1.5"
                          onClick={() => openClose(stop.visit)}
                        >
                          <Check className="size-3.5" />
                          Cerrar visita y facturar
                        </Button>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          ))}
        </section>
      )}

      <section className="rounded-xl border border-border/70 bg-card p-5">
        <h3 className="text-sm font-semibold">
          {showDone ? "Historial de servicio" : "Visitas pendientes"}
        </h3>
        <div className="mt-3 flex flex-col divide-y divide-border/60">
          {visible.slice(0, 12).map((visit) => {
            const site = siteOf(visit.siteId);
            const invoice = invoiceOf(visit._id);
            return (
              <div
                key={visit._id}
                className="flex flex-wrap items-center gap-3 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {site?.name ?? "Sitio eliminado"}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {visit.serviceType} · {visit.technician} ·{" "}
                    {formatDateTime(visit.completedAt ?? visit.scheduledFor)}
                  </p>
                  {visit.products && visit.products.length > 0 && (
                    <ul className="mt-1.5 flex flex-wrap gap-1.5">
                      {visit.products.map((product) => (
                        <li key={product.registration + product.name}>
                          <Badge
                            variant="outline"
                            className="border-border bg-muted/60 font-normal"
                          >
                            {product.name} · {product.dose} · reg.{" "}
                            {product.registration}
                          </Badge>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {invoice && (
                  <div className="text-right">
                    <p className="text-sm font-semibold tabular-nums">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p className="text-[11px] text-muted-foreground">
                      {invoice.number}
                    </p>
                  </div>
                )}
                {visit.signature && (
                  <Badge variant="outline" className="border-primary/30 text-primary">
                    Firmado
                  </Badge>
                )}
                {visit.status === "completada" && (
                  <Button asChild size="sm" variant="ghost" className="gap-1.5">
                    <Link to={`/informe/${visit._id}`}>
                      <FileText className="size-3.5" />
                      Informe
                    </Link>
                  </Button>
                )}
                {visit.status === "completada" && !reviewOf(visit._id) && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="gap-1.5"
                    onClick={() => onRequestReview({ visitId: visit._id })}
                  >
                    <Star className="size-3.5" />
                    Pedir valoración
                  </Button>
                )}
                {visit.status === "completada" &&
                  reviewOf(visit._id)?.status === "respondida" && (
                    <Badge
                      variant="outline"
                      className="border-primary/30 text-primary"
                    >
                      <Star className="mr-1 size-3" />
                      {reviewOf(visit._id)?.rating}/5
                    </Badge>
                  )}
              </div>
            );
          })}
          {visible.length === 0 && (
            <p className="py-6 text-sm text-muted-foreground">
              {showDone
                ? "Todavía no hay visitas completadas."
                : "No hay visitas en ruta. Pulsa «Programar contrato» para generar el calendario de los clientes."}
            </p>
          )}
        </div>
      </section>

      <Dialog
        open={closing !== null}
        onOpenChange={(next) => !next && setClosing(null)}
      >
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Cerrar visita</DialogTitle>
            <DialogDescription>
              {closing ? `${siteOf(closing.siteId)?.name ?? ""} · orden de trabajo` : ""}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={complete} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="visit-service">Servicio</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger id="visit-service">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SERVICE_TYPES.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="rounded-lg border border-border/70 bg-muted/40 p-3">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Registro de producto aplicado
              </p>
              <div className="mt-2 grid gap-3 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label htmlFor="product-name">Producto</Label>
                  <Input
                    id="product-name"
                    value={productName}
                    onChange={(e) => setProductName(e.target.value)}
                    placeholder="Cebo en gel cipermetrina 2,5 %"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="product-dose">Dosis</Label>
                  <Input
                    id="product-dose"
                    value={productDose}
                    onChange={(e) => setProductDose(e.target.value)}
                    placeholder="30 g"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="product-reg">Nº registro</Label>
                  <Input
                    id="product-reg"
                    value={productReg}
                    onChange={(e) => setProductReg(e.target.value)}
                    placeholder="ES-REG-24810"
                  />
                </div>
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Este registro se guarda con la visita y queda disponible para
                auditorías de uso de fitosanitarios.
              </p>
            </div>

            <div className="rounded-lg border border-border/70 p-3">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Planilla de inspección
              </p>
              <div className="mt-2 grid gap-1.5 sm:grid-cols-2">
                {CHECKLIST_AREAS.map((area) => {
                  const checked = area in checklist;
                  return (
                    <button
                      key={area}
                      type="button"
                      onClick={() =>
                        setChecklist({ ...checklist, [area]: !checked })
                      }
                      className={
                        checked
                          ? "flex items-center gap-2 rounded-md bg-primary/10 px-2.5 py-1.5 text-left text-xs text-primary"
                          : "flex items-center gap-2 rounded-md bg-muted/50 px-2.5 py-1.5 text-left text-xs text-muted-foreground"
                      }
                    >
                      <Check
                        className={`size-3.5 shrink-0 ${checked ? "text-primary" : "text-muted-foreground/50"}`}
                      />
                      <span className="truncate">
                        {area} · {checked ? "Correcto" : "Pendiente"}
                      </span>
                    </button>
                  );
                })}
              </div>
              <p className="mt-2 text-[11px] text-muted-foreground">
                Pulsa cada punto para alternar entre correcto y pendiente. La
                planilla se imprime en el informe de servicio.
              </p>
            </div>

            {products.length > 0 && (
              <div className="rounded-lg border border-border/70 bg-muted/40 p-3">
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  Consumo de almacén
                </p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  {products.map((item) => (
                    <div
                      key={item._id}
                      className="flex items-center gap-2 rounded-md bg-background/60 px-2.5 py-1.5"
                    >
                      <span className="min-w-0 flex-1 truncate text-xs">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-muted-foreground">
                        {item.stock} {item.unit}
                      </span>
                      <Input
                        type="number"
                        min={0}
                        value={consumed[item._id] ?? ""}
                        onChange={(e) =>
                          setConsumed({ ...consumed, [item._id]: e.target.value })
                        }
                        placeholder="0"
                        className="h-7 w-16 px-2 py-1 text-xs"
                      />
                    </div>
                  ))}
                </div>
                <p className="mt-2 text-[11px] text-muted-foreground">
                  Las cantidades se descuentan del almacén al cerrar la visita.
                </p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              <Label htmlFor="visit-notes">Notas del técnico</Label>
              <Textarea
                id="visit-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Observaciones, trabajos pendientes…"
                rows={2}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="visit-signature">Firma del cliente</Label>
                <Input
                  id="visit-signature"
                  value={signature}
                  onChange={(e) => setSignature(e.target.value)}
                  placeholder="Nombre de quien firma"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="visit-amount">Importe facturado (€)</Label>
                <Input
                  id="visit-amount"
                  type="number"
                  min={0}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
            </div>

            <DialogFooter>
              <Button type="submit" disabled={saving}>
                {saving ? "Cerrando…" : "Cerrar visita y emitir factura"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
