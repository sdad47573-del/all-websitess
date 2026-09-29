import type { Doc, Id } from "@/convex/_generated/dataModel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Download, TrendingUp, Wallet } from "lucide-react";
import {
  INVOICE_STATUS_CLASS,
  formatCurrency,
  formatDate,
} from "@/components/pest/domain";

export function FacturacionPanel({
  sites,
  invoices,
  onMarkPaid,
}: {
  sites: Doc<"sites">[];
  invoices: Doc<"invoices">[];
  onMarkPaid: (args: { invoiceId: Id<"invoices"> }) => Promise<unknown>;
}) {
  const siteName = (siteId: Id<"sites">) =>
    sites.find((s) => s._id === siteId)?.name ?? "Sitio eliminado";

  const paid = invoices.filter((i) => i.status === "pagada");
  const pending = invoices.filter((i) => i.status === "pendiente");
  const monthStart = new Date();
  monthStart.setDate(1);
  monthStart.setHours(0, 0, 0, 0);
  const billedThisMonth = invoices.filter((i) => i.issuedAt >= monthStart.getTime());

  const billed = billedThisMonth.reduce((acc, i) => acc + i.amount, 0);
  const collected = paid
    .filter((i) => i.issuedAt >= monthStart.getTime())
    .reduce((acc, i) => acc + i.amount, 0);
  const outstanding = pending.reduce((acc, i) => acc + i.amount, 0);
  const avgTicket = invoices.length
    ? Math.round(invoices.reduce((acc, i) => acc + i.amount, 0) / invoices.length)
    : 0;

  const kpis = [
    { label: "Facturado este mes", value: formatCurrency(billed), icon: TrendingUp },
    { label: "Cobrado", value: formatCurrency(collected), icon: Check },
    { label: "Pendiente de cobro", value: formatCurrency(outstanding), icon: Wallet },
    { label: "Ticket medio", value: formatCurrency(avgTicket), icon: TrendingUp },
  ];

  const exportCsv = () => {
    const rows = [
      ["Factura", "Cliente", "Concepto", "Fecha", "Importe", "Estado"],
      ...invoices.map((i) => [
        i.number,
        siteName(i.siteId),
        i.concept,
        formatDate(i.issuedAt),
        String(i.amount),
        i.status,
      ]),
    ];
    const csv = rows
      .map((row) =>
        row.map((cell) => `"${cell.replace(/"/g, '""')}"`).join(";"),
      )
      .join("\n");
    // BOM para que Excel reconozca UTF-8 y muestre bien los acentos.
    const blob = new Blob(["\ufeff", csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "facturas-vigia.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Facturación</h2>
          <p className="text-sm text-muted-foreground">
            Cada visita cerrada genera su factura al instante, sin cola de
            administración.
          </p>
        </div>
        <Button
          type="button"
          variant="outline"
          className="gap-2"
          onClick={exportCsv}
        >
          <Download className="size-4" />
          Exportar CSV
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <div className="flex items-start justify-between gap-3">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                {kpi.label}
              </p>
              <kpi.icon className="size-4 text-muted-foreground" />
            </div>
            <p className="mt-2 text-2xl font-semibold tracking-tight">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-border/70 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Factura</th>
              <th className="px-4 py-3 font-medium">Cliente</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">
                Concepto
              </th>
              <th className="px-4 py-3 font-medium">Importe</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 text-right font-medium">Acción</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {invoices.map((invoice) => (
              <tr
                key={invoice._id}
                className="transition-colors hover:bg-muted/40"
              >
                <td className="px-4 py-3">
                  <p className="font-medium">{invoice.number}</p>
                  <p className="text-xs text-muted-foreground">
                    {formatDate(invoice.issuedAt)}
                  </p>
                </td>
                <td className="px-4 py-3">{siteName(invoice.siteId)}</td>
                <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                  {invoice.concept}
                </td>
                <td className="px-4 py-3 font-semibold tabular-nums">
                  {formatCurrency(invoice.amount)}
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant="outline"
                    className={INVOICE_STATUS_CLASS[invoice.status]}
                  >
                    {invoice.status === "pagada" ? "Cobrada" : "Pendiente"}
                  </Badge>
                </td>
                <td className="px-4 py-3 text-right">
                  {invoice.status === "pendiente" ? (
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      className="gap-1.5"
                      onClick={() => onMarkPaid({ invoiceId: invoice._id })}
                    >
                      <Check className="size-3.5" />
                      Marcar cobrada
                    </Button>
                  ) : (
                    <span className="text-xs text-muted-foreground">
                      {invoice.paidAt ? formatDate(invoice.paidAt) : "—"}
                    </span>
                  )}
                </td>
              </tr>
            ))}
            {invoices.length === 0 && (
              <tr>
                <td
                  colSpan={6}
                  className="px-4 py-10 text-center text-sm text-muted-foreground"
                >
                  Aún no hay facturas. Se emiten al cerrar una visita.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
