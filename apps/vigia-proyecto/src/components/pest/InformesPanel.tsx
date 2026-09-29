import { useState } from "react";
import { toast } from "sonner";

import type { Doc } from "@/convex/_generated/dataModel";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Download, Gauge, Plus, TrendingUp } from "lucide-react";
import {
  CREDENTIAL_KINDS,
  SEVERITY_LABEL,
  daysLeft,
  formatCurrency,
  formatDate,
  formatExpiry,
  toDateInput,
} from "@/components/pest/domain";

const DAY = 24 * 60 * 60 * 1000;

/** Valores iniciales del alta de credencial (se calculan al abrir el diálogo). */
function credentialFormDefaults(technician: string) {
  return {
    technician,
    kind: CREDENTIAL_KINDS[0] as string,
    code: "",
    issuedAt: toDateInput(Date.now()),
    expiresAt: toDateInput(Date.now() + 365 * DAY),
  };
}

/** Umbral de cumplimiento de ruta para la insignia. */
const COMPLIANCE_GOOD = 0.6;

export function InformesPanel({
  sites,
  visits,
  invoices,
  incidents,
  credentials,
  onCreateCredential,
}: {
  sites: Doc<"sites">[];
  visits: Doc<"visits">[];
  invoices: Doc<"invoices">[];
  incidents: Doc<"incidents">[];
  credentials: Doc<"credentials">[];
  onCreateCredential: (args: {
    technician: string;
    kind: string;
    code: string;
    issuedAt: number;
    expiresAt: number;
  }) => Promise<unknown>;
}) {
  const technicians = [
    ...new Set(visits.map((v) => v.technician).filter(Boolean)),
  ].sort();

  const [credentialOpen, setCredentialOpen] = useState(false);
  const [savingCredential, setSavingCredential] = useState(false);
  const [credentialForm, setCredentialForm] = useState(() =>
    credentialFormDefaults("Técnico A"),
  );

  const expiring = credentials.filter((c) => daysLeft(c.expiresAt) < 60);

  const submitCredential = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!credentialForm.code.trim()) return;
    setSavingCredential(true);
    try {
      await onCreateCredential({
        technician: credentialForm.technician,
        kind: credentialForm.kind,
        code: credentialForm.code.trim(),
        issuedAt: new Date(credentialForm.issuedAt).getTime(),
        expiresAt: new Date(credentialForm.expiresAt).getTime(),
      });
      setCredentialOpen(false);
      setCredentialForm((form) => ({ ...form, code: "" }));
      toast.success("Credencial registrada");
    } finally {
      setSavingCredential(false);
    }
  };

  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);
  const from = monthStart.getTime();

  const rows = technicians.map((technician) => {
    const own = visits.filter((v) => v.technician === technician);
    const completed = own.filter((v) => v.status === "completada");
    const ownInvoiceIds = new Set(completed.map((v) => v._id));
    const revenue = invoices
      .filter((i) => ownInvoiceIds.has(i.visitId))
      .reduce((acc, i) => acc + i.amount, 0);
    const scheduled = own.filter((v) => v.status === "programada").length;
    return {
      technician,
      scheduled,
      completed: completed.length,
      revenue,
      avgTicket: completed.length ? Math.round(revenue / completed.length) : 0,
      // Cumplimiento de ruta: parte de lo planificado que ya se ha cerrado.
      compliance: own.length
        ? Math.round((completed.length / own.length) * 100)
        : 0,
    };
  });

  const topTechnician = [...rows].sort((a, b) => b.revenue - a.revenue)[0];
  const monthRevenue = invoices
    .filter((i) => i.issuedAt >= from)
    .reduce((acc, i) => acc + i.amount, 0);
  const collected = invoices
    .filter((i) => i.issuedAt >= from && i.status === "pagada")
    .reduce((acc, i) => acc + i.amount, 0);

  // Facturacion por mes de los ultimos seis meses.
  const months: { label: string; total: number }[] = [];
  for (let back = 5; back >= 0; back -= 1) {
    const start = new Date();
    start.setMonth(start.getMonth() - back, 1);
    start.setHours(0, 0, 0, 0);
    const end = new Date(start);
    end.setMonth(end.getMonth() + 1);
    const total = invoices
      .filter((i) => i.issuedAt >= start.getTime() && i.issuedAt < end.getTime())
      .reduce((acc, i) => acc + i.amount, 0);
    months.push({
      label: start.toLocaleDateString("es-ES", { month: "short" }),
      total,
    });
  }
  const maxMonth = Math.max(...months.map((m) => m.total), 1);

  const exportCsv = () => {
    const lines = [
      ["Tecnico", "Programadas", "Completadas", "Facturado", "Ticket medio", "% Cumplimiento"],
      ...rows.map((r) => [
        r.technician,
        String(r.scheduled),
        String(r.completed),
        String(r.revenue),
        String(r.avgTicket),
        `${r.compliance}%`,
      ]),
    ];
    const csv = lines
      .map((line) => line.map((cell) => `"${cell}"`).join(";"))
      .join("\n");
    const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "rendimiento-tecnicos.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Informes de rendimiento
          </h2>
          <p className="text-sm text-muted-foreground">
            Los números que separan crecer de solo estar ocupado.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="gap-2"
          onClick={exportCsv}
        >
          <Download className="size-4" />
          Exportar rendimiento
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {[
          {
            label: "Facturación del mes",
            value: formatCurrency(monthRevenue),
            hint: `${formatCurrency(collected)} cobrados`,
          },
          {
            label: "Técnico líder",
            value: topTechnician?.technician ?? "—",
            hint: topTechnician
              ? `${formatCurrency(topTechnician.revenue)} facturados`
              : "sin datos",
          },
          {
            label: "Incidencias abiertas",
            value: String(incidents.filter((i) => i.status !== "resuelta").length),
            hint: "requieren técnico asignado",
          },
        ].map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              {kpi.label}
            </p>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {kpi.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">{kpi.hint}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/70 bg-card p-5">
        <div className="flex items-center gap-2">
          <TrendingUp className="size-4 text-primary" />
          <h3 className="text-sm font-semibold">Facturación mensual</h3>
        </div>
        <div className="mt-5 flex h-40 items-end gap-2">
          {months.map((month) => (
            <div
              key={month.label}
              className="flex flex-1 flex-col items-center gap-2"
            >
              <span className="text-[10px] tabular-nums text-muted-foreground">
                {month.total ? formatCurrency(month.total) : ""}
              </span>
              <div
                className="w-full rounded-t-md bg-primary/85"
                style={{
                  height: `${Math.max(4, (month.total / maxMonth) * 100)}%`,
                }}
              />
              <span className="text-[10px] uppercase text-muted-foreground">
                {month.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-xl border border-border/70 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Técnico</th>
              <th className="px-4 py-3 font-medium">Programadas</th>
              <th className="px-4 py-3 font-medium">Completadas</th>
              <th className="px-4 py-3 font-medium">Facturado</th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">
                Ticket medio
              </th>
              <th className="px-4 py-3 font-medium">Cumplimiento de ruta</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {rows.map((row) => (
              <tr key={row.technician} className="hover:bg-muted/40">
                <td className="px-4 py-3 font-medium">{row.technician}</td>
                <td className="px-4 py-3 tabular-nums">{row.scheduled}</td>
                <td className="px-4 py-3 tabular-nums">{row.completed}</td>
                <td className="px-4 py-3 font-semibold tabular-nums">
                  {formatCurrency(row.revenue)}
                </td>
                <td className="hidden px-4 py-3 tabular-nums text-muted-foreground sm:table-cell">
                  {formatCurrency(row.avgTicket)}
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant="outline"
                    className={
                      row.compliance / 100 >= COMPLIANCE_GOOD
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-chart-3/40 bg-chart-3/15 text-chart-3"
                    }
                  >
                    <Gauge className="mr-1 size-3" />
                    {row.compliance}% completadas
                  </Badge>
                </td>
              </tr>
            ))}
            {rows.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-sm text-muted-foreground"
                >
                  Sin visitas asignadas todavía.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-border/70 bg-card p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="text-sm font-semibold">Vencimientos del equipo</h3>
            <p className="text-xs text-muted-foreground">
              {expiring.length} credencial(es) caducan en los próximos 60 días
            </p>
          </div>
          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1.5"
            onClick={() => {
              setCredentialForm(
                credentialFormDefaults(technicians[0] ?? "Técnico A"),
              );
              setCredentialOpen(true);
            }}
          >
            <Plus className="size-3.5" />
            Registrar credencial
          </Button>
        </div>
        <div className="mt-3 flex flex-col divide-y divide-border/60">
          {credentials.map((credential) => {
            const days = daysLeft(credential.expiresAt);
            return (
              <div
                key={credential._id}
                className="flex flex-wrap items-center gap-3 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">{credential.kind}</p>
                  <p className="text-xs text-muted-foreground">
                    {credential.technician} · {credential.code} · emitido{" "}
                    {formatDate(credential.issuedAt)}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={
                    days < 0
                      ? "border-destructive/40 bg-destructive/10 text-destructive"
                      : days < 30
                        ? "border-chart-3/40 bg-chart-3/15 text-chart-3"
                        : "border-primary/30 bg-primary/10 text-primary"
                  }
                >
                  {formatExpiry(credential.expiresAt)}
                </Badge>
              </div>
            );
          })}
          {credentials.length === 0 && (
            <p className="py-6 text-sm text-muted-foreground">
              Sin credenciales registradas.
            </p>
          )}
        </div>
      </div>

      <div className="rounded-xl border border-border/70 bg-card p-5">
        <h3 className="text-sm font-semibold">Resumen por cliente</h3>
        <div className="mt-3 flex flex-col divide-y divide-border/60">
          {sites.map((site) => {
            const siteVisits = visits.filter(
              (v) => v.siteId === site._id && v.status === "completada",
            );
            const open = incidents.filter(
              (i) => i.siteId === site._id && i.status !== "resuelta",
            );
            const last = siteVisits.sort(
              (a, b) => (b.completedAt ?? 0) - (a.completedAt ?? 0),
            )[0];
            return (
              <div
                key={site._id}
                className="flex flex-wrap items-center gap-3 py-3"
              >
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{site.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {last
                      ? `Último servicio: ${formatDate(last.completedAt ?? last.scheduledFor)}`
                      : "Sin servicios completados"}
                    {open.length > 0 &&
                      ` · ${open.length} incidencia(s) abierta(s) de severidad ${
                        SEVERITY_LABEL[open[0].severity]
                      }`}
                  </p>
                </div>
                <Badge variant="outline" className="text-muted-foreground">
                  {siteVisits.length} servicios
                </Badge>
              </div>
            );
          })}
        </div>
      </div>

      <Dialog open={credentialOpen} onOpenChange={setCredentialOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Registrar credencial</DialogTitle>
            <DialogDescription>
              Certificados y carnés con fecha de caducidad, para tener el aviso
              antes de que se queden sin validez.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submitCredential} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="credential-tech">Técnico</Label>
              <Input
                id="credential-tech"
                value={credentialForm.technician}
                onChange={(e) =>
                  setCredentialForm({
                    ...credentialForm,
                    technician: e.target.value,
                  })
                }
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="credential-kind">Tipo</Label>
              <Select
                value={credentialForm.kind}
                onValueChange={(value) =>
                  setCredentialForm({ ...credentialForm, kind: value })
                }
              >
                <SelectTrigger id="credential-kind">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {CREDENTIAL_KINDS.map((kind) => (
                    <SelectItem key={kind} value={kind}>
                      {kind}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="credential-code">Nº documento</Label>
              <Input
                id="credential-code"
                value={credentialForm.code}
                onChange={(e) =>
                  setCredentialForm({ ...credentialForm, code: e.target.value })
                }
                placeholder="FUM-2026-0042"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="credential-issued">Emisión</Label>
                <Input
                  id="credential-issued"
                  type="date"
                  value={credentialForm.issuedAt}
                  onChange={(e) =>
                    setCredentialForm({
                      ...credentialForm,
                      issuedAt: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="credential-expires">Caducidad</Label>
                <Input
                  id="credential-expires"
                  type="date"
                  value={credentialForm.expiresAt}
                  onChange={(e) =>
                    setCredentialForm({
                      ...credentialForm,
                      expiresAt: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={savingCredential}>
                {savingCredential ? "Guardando…" : "Registrar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
