import { useMutation, useQuery } from "convex/react";
import { useParams } from "react-router";
import { ArrowLeft, Printer, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  QUOTE_STATUS_CLASS,
  QUOTE_STATUS_LABEL,
  SECTOR_LABEL,
  formatCurrency,
  formatDate,
} from "@/components/pest/domain";

export default function Presupuesto() {
  const { quoteId = "" } = useParams();
  const quote = useQuery(api.pestControl.quoteById, {
    quoteId: quoteId as Id<"quotes">,
  });
  const updateQuote = useMutation(api.pestControl.updateQuote);
  const acceptQuote = useMutation(api.pestControl.acceptQuote);

  if (quote === undefined) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/40">
        <p className="text-sm text-muted-foreground">Cargando presupuesto…</p>
      </main>
    );
  }

  if (quote === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-sm font-semibold">Presupuesto no encontrado</p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link to="/dashboard">Volver al panel</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-muted/40 py-8">
      <div className="mx-auto max-w-3xl px-4">
        <div className="no-print mb-4 flex flex-wrap items-center justify-between gap-3">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/dashboard">
              <ArrowLeft className="size-4" />
              Volver
            </Link>
          </Button>
          <div className="flex flex-wrap items-center gap-2">
            {quote.status === "borrador" && (
              <Button
                variant="outline"
                onClick={() =>
                  updateQuote({ quoteId: quote._id, status: "enviado" })
                }
              >
                Marcar enviado
              </Button>
            )}
            {quote.status !== "aceptado" && (
              <Button
                onClick={async () => {
                  await acceptQuote({ quoteId: quote._id });
                }}
              >
                Marcar aceptado y crear cliente
              </Button>
            )}
            <Button className="gap-2" onClick={() => window.print()}>
              <Printer className="size-4" />
              Imprimir o PDF
            </Button>
          </div>
        </div>

        <article className="rounded-xl border border-border/70 bg-card p-8 print:rounded-none print:border-0 print:p-0">
          <header className="flex items-start justify-between gap-6 border-b border-border pb-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ShieldCheck className="size-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">Vigía</p>
                <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                  Presupuesto de control de plagas
                </p>
              </div>
            </div>
            <Badge variant="outline" className={QUOTE_STATUS_CLASS[quote.status]}>
              {QUOTE_STATUS_LABEL[quote.status]}
            </Badge>
          </header>

          <section className="grid gap-6 border-b border-border py-6 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Cliente
              </h2>
              <p className="mt-2 text-sm font-medium">{quote.clientName}</p>
              <p className="text-sm text-muted-foreground">{quote.contact}</p>
              <p className="text-sm text-muted-foreground">{quote.city}</p>
            </div>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Condiciones
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Sector: {quote.sector ? SECTOR_LABEL[quote.sector] : "—"}
              </p>
              <p className="text-sm text-muted-foreground">
                Emitido: {formatDate(quote.createdAt)}
              </p>
              <p className="text-sm text-muted-foreground">
                Válido hasta: {formatDate(quote.validUntil)}
              </p>
            </div>
          </section>

          <section className="border-b border-border py-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-2 font-medium">Concepto</th>
                  <th className="py-2 text-right font-medium">Cantidad</th>
                  <th className="py-2 text-right font-medium">Precio</th>
                  <th className="py-2 text-right font-medium">Importe</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {quote.lines.map((line, index) => (
                  <tr key={`${line.concept}-${index}`}>
                    <td className="py-2">{line.concept}</td>
                    <td className="py-2 text-right tabular-nums">
                      {line.quantity}
                    </td>
                    <td className="py-2 text-right tabular-nums text-muted-foreground">
                      {formatCurrency(line.price)}
                    </td>
                    <td className="py-2 text-right font-medium tabular-nums">
                      {formatCurrency(line.price * line.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-border">
                  <td colSpan={3} className="py-3 text-right font-medium">
                    Total
                  </td>
                  <td className="py-3 text-right text-lg font-semibold tabular-nums">
                    {formatCurrency(quote.total)}
                  </td>
                </tr>
              </tfoot>
            </table>
          </section>

          <footer className="pt-6 text-xs leading-relaxed text-muted-foreground">
            <p>
              Presupuesto válido durante el periodo indicado. La aceptación
              genera el alta del cliente, su contrato recurrente y la
              programación de la primera visita.
            </p>
            <div className="mt-8 flex gap-12">
              <div className="flex-1 border-t border-border pt-2">Firma cliente</div>
              <div className="flex-1 border-t border-border pt-2">
                Fecha y sello de la empresa
              </div>
            </div>
          </footer>
        </article>
      </div>
    </main>
  );
}
