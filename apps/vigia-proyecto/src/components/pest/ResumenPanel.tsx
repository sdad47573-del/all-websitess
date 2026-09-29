import type { Doc } from "@/convex/_generated/dataModel";
import {
  Activity,
  ArrowRight,
  Bug,
  CalendarClock,
  Receipt,
  Siren,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DEVICE_STATUS_LABEL,
  INCIDENT_STATUS_CLASS,
  INCIDENT_STATUS_LABEL,
  SEVERITY_CLASS,
  SEVERITY_LABEL,
  formatCountdown,
  formatCurrency,
  formatDate,
  daysLeft,
  isOverdue,
  type TabId,
} from "@/components/pest/domain";

const CHART_COLORS = [
  "bg-chart-1",
  "bg-chart-2",
  "bg-chart-3",
  "bg-chart-4",
  "bg-chart-5",
];

export function ResumenPanel({
  sites,
  devices,
  incidents,
  visits,
  invoices,
  leads,
  reviews,
  products,
  credentials,
  onNavigate,
}: {
  sites: Doc<"sites">[];
  devices: Doc<"devices">[];
  incidents: Doc<"incidents">[];
  visits: Doc<"visits">[];
  invoices: Doc<"invoices">[];
  leads: Doc<"leads">[];
  reviews: Doc<"reviews">[];
  products: Doc<"products">[];
  credentials: Doc<"credentials">[];
  onNavigate: (tab: TabId) => void;
}) {
  const activeDevices = devices.filter((d) => d.status !== "inactivo");
  const trapsInAlert = activeDevices.filter(
    (d) => d.status === "alerta" || d.status === "critico",
  );
  const openIncidents = incidents.filter((i) => i.status !== "resuelta");
  const avgBait = activeDevices.length
    ? Math.round(
        activeDevices.reduce((acc, d) => acc + d.bait, 0) / activeDevices.length,
      )
    : 0;
  const captures = activeDevices.reduce((acc, d) => acc + d.count, 0);

  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);
  const billedThisMonth = invoices
    .filter((i) => i.issuedAt >= monthStart.getTime())
    .reduce((acc, i) => acc + i.amount, 0);
  const outstanding = invoices
    .filter((i) => i.status === "pendiente")
    .reduce((acc, i) => acc + i.amount, 0);

  const pendingVisits = visits.filter((v) => v.status === "programada");
  const dayStart = new Date().setHours(0, 0, 0, 0);
  const visitsToday = pendingVisits.filter(
    (v) => v.scheduledFor <= dayStart + 24 * 60 * 60 * 1000,
  );
  const lowBait = activeDevices.filter((d) => d.bait < 40);
  const openLeads = leads.filter(
    (l) => l.status !== "ganado" && l.status !== "perdido",
  );
  const rated = reviews.filter((r) => r.status === "respondida" && r.rating);
  const avgRating = rated.length
    ? Math.round(
        (rated.reduce((acc, r) => acc + (r.rating ?? 0), 0) / rated.length) * 10,
      ) / 10
    : 0;
  const pendingReviews = reviews.filter((r) => r.status === "solicitada").length;
  const lowStock = products.filter((p) => p.stock <= p.minStock);
  const expiringCredentials = credentials.filter(
    (c) => daysLeft(c.expiresAt) < 60,
  );

  const byPest = Object.entries(
    activeDevices.reduce<Record<string, number>>((acc, d) => {
      acc[d.pest] = (acc[d.pest] ?? 0) + d.count;
      return acc;
    }, {}),
  )
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5);
  const maxPest = byPest[0]?.[1] ?? 1;

  const today = sites.filter((s) => formatCountdown(s.nextVisitAt) === "Hoy");
  const agenda = [...sites]
    .sort((a, b) => a.nextVisitAt - b.nextVisitAt)
    .slice(0, 5);

  const kpis = [
    {
      label: "Sitios activos",
      value: sites.length,
      hint: `${today.length} visita${today.length === 1 ? "" : "s"} hoy`,
      icon: CalendarClock,
      tone: "text-primary bg-primary/10",
    },
    {
      label: "Trampas en alerta",
      value: trapsInAlert.length,
      hint: `de ${activeDevices.length} trampas activas`,
      icon: Bug,
      tone: "text-chart-3 bg-chart-3/15",
    },
    {
      label: "Incidencias abiertas",
      value: openIncidents.length,
      hint: `${captures} capturas registradas`,
      icon: Siren,
      tone: "text-destructive bg-destructive/10",
    },
    {
      label: "Facturado este mes",
      value: formatCurrency(billedThisMonth),
      hint: `${formatCurrency(outstanding)} pendiente de cobro`,
      icon: Receipt,
      tone: "text-primary bg-primary/10",
    },
  ];

  const alerts = [
    ...(lowBait.length
      ? [
          {
            tone: "destructive",
            title: `${lowBait.length} trampa${lowBait.length === 1 ? "" : "s"} con cebo bajo`,
            detail: `${lowBait.map((d) => d.code).join(", ")} por debajo del 40 %`,
            tab: "trampas" as const,
          },
        ]
      : []),
    ...(visitsToday.length
      ? [
          {
            tone: "primary",
            title: `${visitsToday.length} visita${visitsToday.length === 1 ? "" : "s"} para pasar hoy`,
            detail: "Cierra la visita para registrar producto y facturar",
            tab: "visitas" as const,
          },
        ]
      : []),
    ...(invoices.some((i) => i.status === "pendiente")
      ? [
          {
            tone: "warning",
            title: `${invoices.filter((i) => i.status === "pendiente").length} factura(s) sin cobrar`,
            detail: `${formatCurrency(outstanding)} pendientes de cobro`,
            tab: "facturacion" as const,
          },
        ]
      : []),
    ...(pendingReviews
      ? [
          {
            tone: "primary",
            title: `${pendingReviews} valoración(es) sin responder`,
            detail: "Envia el enlace del portal para cerrar el ciclo",
            tab: "visitas" as const,
          },
        ]
      : []),
    ...(expiringCredentials.length
      ? [
          {
            tone: "destructive",
            title: `${expiringCredentials.length} credencial(es) por caducar`,
            detail: expiringCredentials
              .slice(0, 2)
              .map((c) => `${c.kind} (${c.technician})`)
              .join(", "),
            tab: "informes" as const,
          },
        ]
      : []),
    ...(lowStock.length
      ? [
          {
            tone: "warning",
            title: `${lowStock.length} material(es) bajo mínimo`,
            detail: lowStock
              .slice(0, 2)
              .map((p) => p.name)
              .join(", "),
            tab: "material" as const,
          },
        ]
      : []),
    ...(openLeads.length
      ? [
          {
            tone: "muted",
            title: `${openLeads.length} lead(s) sin cerrar`,
            detail: openLeads
              .slice(0, 2)
              .map((l) => l.name)
              .join(", "),
            tab: "crm" as const,
          },
        ]
      : []),
  ];

  const alertTone: Record<string, string> = {
    destructive: "border-destructive/40 bg-destructive/10 text-destructive",
    warning: "border-chart-3/40 bg-chart-3/12 text-chart-3",
    primary: "border-primary/30 bg-primary/10 text-primary",
    muted: "border-border bg-muted/60 text-muted-foreground",
  };

  return (
    <div className="flex flex-col gap-6">
      <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border/70 bg-card p-5 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                  {kpi.label}
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-tight">
                  {kpi.value}
                </p>
              </div>
              <span
                className={`flex size-9 items-center justify-center rounded-lg ${kpi.tone}`}
              >
                <kpi.icon className="size-4" />
              </span>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">{kpi.hint}</p>
          </div>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-5">
        <div className="rounded-xl border border-border/70 bg-card p-5 lg:col-span-3">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="text-base font-semibold tracking-tight">
                Capturas por plaga
              </h2>
              <p className="text-xs text-muted-foreground">
                Suma de la última lectura de cada trampa activa
              </p>
            </div>
            <Activity className="size-4 text-muted-foreground" />
          </div>

          <div className="mt-6 flex flex-col gap-4">
            {byPest.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Todavía no hay lecturas registradas.
              </p>
            )}
            {byPest.map(([pest, total], index) => (
              <div key={pest} className="flex flex-col gap-1.5">
                <div className="flex items-baseline justify-between gap-3 text-sm">
                  <span className="font-medium">{pest}</span>
                  <span className="tabular-nums text-muted-foreground">
                    {total}
                  </span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-muted">
                  <div
                    className={`h-full rounded-full ${CHART_COLORS[index % CHART_COLORS.length]}`}
                    style={{ width: `${Math.max(6, (total / maxPest) * 100)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-lg border border-border/60 bg-muted/50 p-4">
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Cobertura de cebo
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Progress value={avgBait} className="h-2" />
              <span className="text-sm font-semibold tabular-nums">
                {avgBait}%
              </span>
            </div>
            <Button
              type="button"
              variant="link"
              size="sm"
              className="mt-2 h-auto gap-1 px-0 text-xs"
              onClick={() => onNavigate("trampas")}
            >
              Ver trampas
              <ArrowRight className="size-3" />
            </Button>
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-card p-5 lg:col-span-2">
          <h2 className="text-base font-semibold tracking-tight">
            Próximas visitas
          </h2>
          <p className="text-xs text-muted-foreground">
            Agenda de campo ordenada por fecha
          </p>

          <ul className="mt-4 flex flex-col divide-y divide-border/60">
            {agenda.map((site) => {
              const overdue = isOverdue(site.nextVisitAt);
              const countdown = formatCountdown(site.nextVisitAt);
              return (
                <li key={site._id} className="flex items-center gap-3 py-3">
                  <div className="flex size-9 shrink-0 flex-col items-center justify-center rounded-lg bg-muted text-[10px] font-semibold leading-none">
                    <span>{formatDate(site.nextVisitAt).split(" ")[0]}</span>
                    <span className="mt-0.5 opacity-60">
                      {formatDate(site.nextVisitAt).split(" ")[1]}
                    </span>
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-medium">{site.name}</p>
                    <p className="truncate text-xs text-muted-foreground">
                      {site.city} · {site.address}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      overdue
                        ? "border-destructive/40 bg-destructive/10 text-destructive"
                        : "border-border text-muted-foreground"
                    }
                  >
                    {countdown}
                  </Badge>
                </li>
              );
            })}
            {agenda.length === 0 && (
              <li className="py-6 text-sm text-muted-foreground">
                Todavía no hay clientes registrados.
              </li>
            )}
          </ul>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-4 w-full"
            onClick={() => onNavigate("sitios")}
          >
            Gestionar sitios
          </Button>
        </div>
      </section>

      <section className="rounded-xl border border-border/70 bg-card p-5">
        <div className="flex items-center justify-between gap-3">
          <h2 className="text-base font-semibold tracking-tight">
            Incidencias abiertas
          </h2>
          <Button
            type="button"
            variant="link"
            size="sm"
            className="h-auto gap-1 px-0 text-xs"
            onClick={() => onNavigate("incidencias")}
          >
            Ver todas
            <ArrowRight className="size-3" />
          </Button>
        </div>

        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {openIncidents.slice(0, 4).map((incident) => {
            const site = sites.find((s) => s._id === incident.siteId);
            return (
              <div
                key={incident._id}
                className="rounded-lg border border-border/70 p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="text-sm font-medium leading-snug">
                    {incident.title}
                  </p>
                  <Badge
                    variant="outline"
                    className={SEVERITY_CLASS[incident.severity]}
                  >
                    {SEVERITY_LABEL[incident.severity]}
                  </Badge>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  {site?.name ?? "Sitio eliminado"} · {incident.pest}
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <Badge
                    variant="outline"
                    className={INCIDENT_STATUS_CLASS[incident.status]}
                  >
                    {INCIDENT_STATUS_LABEL[incident.status]}
                  </Badge>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(incident.reportedAt)}
                  </span>
                </div>
              </div>
            );
          })}
          {openIncidents.length === 0 && (
            <p className="text-sm text-muted-foreground">
              Ninguna incidencia abierta. Buen trabajo de campo.
            </p>
          )}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-border/70 bg-card p-5 lg:col-span-2">
          <h2 className="text-base font-semibold tracking-tight">
            Satisfacción del cliente
          </h2>
          <p className="text-xs text-muted-foreground">
            Valoraciones recogidas a través del portal tras cada visita
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-6">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-semibold tracking-tight">
                {avgRating || "—"}
              </span>
              <span className="text-sm text-muted-foreground">/ 5</span>
            </div>
            <div className="flex gap-1">
              {[1, 2, 3, 4, 5].map((value) => (
                <span
                  key={value}
                  className={
                    value <= avgRating
                      ? "text-lg text-chart-3"
                      : "text-lg text-muted-foreground/30"
                  }
                >
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">
              {rated.length} resposta{rated.length === 1 ? "" : "s"} ·{" "}
              {pendingReviews} pendiente{pendingReviews === 1 ? "" : "s"}
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-primary/30 bg-primary/8 p-5">
          <h2 className="text-sm font-semibold text-primary">
            Portal de cliente
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Cada sitio tiene un enlace público con su historial de visitas,
            trampas, facturas y valoración.
          </p>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="mt-3"
            onClick={() => onNavigate("sitios")}
          >
            Copiar enlace desde Sitios
          </Button>
        </div>
      </section>

      {alerts.length > 0 && (
        <section className="rounded-xl border border-border/70 bg-card p-5">
          <h2 className="text-base font-semibold tracking-tight">
            Alertas operativas
          </h2>
          <p className="text-xs text-muted-foreground">
            Lo que requiere una decisión hoy
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {alerts.map((alert) => (
              <button
                key={alert.title}
                type="button"
                onClick={() => onNavigate(alert.tab)}
                className="flex items-start gap-3 rounded-lg border border-border/70 p-4 text-left transition-colors hover:border-primary/50"
              >
                <span
                  className={`mt-0.5 size-2 shrink-0 rounded-full ${alertTone[alert.tone]}`}
                />
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">
                    {alert.title}
                  </span>
                  <span className="mt-0.5 block truncate text-xs text-muted-foreground">
                    {alert.detail}
                  </span>
                </span>
                <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
              </button>
            ))}
          </div>
        </section>
      )}

      {trapsInAlert.length > 0 && (
        <section className="rounded-xl border border-chart-3/40 bg-chart-3/10 p-5">
          <h2 className="text-sm font-semibold text-chart-3">
            {trapsInAlert.length} trampa
            {trapsInAlert.length === 1 ? "" : "s"} por revisar
          </h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {trapsInAlert.slice(0, 8).map((device) => (
              <li key={device._id}>
                <Badge
                  variant="outline"
                  className="border-chart-3/40 bg-background/60 text-foreground"
                >
                  {device.code} · {DEVICE_STATUS_LABEL[device.status]} ·{" "}
                  {device.count} capturas
                </Badge>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
