import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { useParams } from "react-router";
import { BadgeCheck, Loader2, ShieldCheck, ThumbsDown, ThumbsUp } from "lucide-react";

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

export default function Propuesta() {
  const { token = "" } = useParams();
  const quote = useQuery(api.pestControl.quoteByToken, { token });
  const respond = useMutation(api.pestControl.respondQuote);
  const [sending, setSending] = useState<"accept" | "reject" | null>(null);

  if (quote === undefined) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  if (quote === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <ShieldCheck className="mx-auto size-6 text-muted-foreground" />
          <p className="mt-3 text-base font-semibold">Enlace no válido</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Esta propuesta no existe o ha caducado. Pide a tu empresa de control
            de plagas un nuevo enlace.
          </p>
        </div>
      </main>
    );
  }

  const respond_ = async (accept: boolean) => {
    setSending(accept ? "accept" : "reject");
    try {
      await respond({
        token,
        quoteId: quote._id as Id<"quotes">,
        accept,
      });
    } finally {
      setSending(null);
    }
  };

  const decided = quote.status === "aceptado" || quote.status === "rechazado";

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-sidebar text-sidebar-foreground">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-6 sm:px-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Vigía</p>
            <p className="text-xs text-sidebar-foreground/60">
              Propuesta de control de plagas
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <article className="rounded-xl border border-border/70 bg-card p-6 sm:p-8">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Para {quote.clientName}
              </p>
              <h1 className="mt-1 text-2xl font-semibold tracking-tight">
                Tu propuesta de servicio
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">
                {quote.city}
                {quote.sector ? ` · ${SECTOR_LABEL[quote.sector]}` : ""}
              </p>
            </div>
            <Badge variant="outline" className={QUOTE_STATUS_CLASS[quote.status]}>
              {QUOTE_STATUS_LABEL[quote.status]}
            </Badge>
          </div>

          <table className="mt-6 w-full text-sm">
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
                  <td className="py-2.5">{line.concept}</td>
                  <td className="py-2.5 text-right tabular-nums">
                    {line.quantity}
                  </td>
                  <td className="py-2.5 text-right tabular-nums text-muted-foreground">
                    {formatCurrency(line.price)}
                  </td>
                  <td className="py-2.5 text-right font-medium tabular-nums">
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
                <td className="py-3 text-right text-xl font-semibold tabular-nums">
                  {formatCurrency(quote.total)}
                </td>
              </tr>
            </tfoot>
          </table>

          <p className="mt-4 text-xs text-muted-foreground">
            Propuesta válida hasta el {formatDate(quote.validUntil)}.
          </p>

          <div className="mt-8 rounded-xl border border-border/70 bg-muted/40 p-5">
            {quote.status === "aceptado" ? (
              <p className="flex items-center gap-2 text-sm font-medium text-primary">
                <BadgeCheck className="size-5" />
                Propuesta aceptada. Hemos creado tu contrato y programado la
                primera visita.
              </p>
            ) : quote.status === "rechazado" ? (
              <p className="text-sm text-muted-foreground">
                Has rechazado esta propuesta. Tu empresa podrá contactarte si
                quieres ajustar el alcance.
              </p>
            ) : quote.status === "enviado" ? (
              <p className="text-sm text-muted-foreground">
                Revisa el detalle y acepta para continuar con el alta.
              </p>
            ) : null}

            {quote.status === "borrador" || quote.status === "enviado" ? (
              <div className="flex flex-wrap gap-2">
                <Button
                  className="gap-2"
                  disabled={sending !== null}
                  onClick={() => respond_(true)}
                >
                  <ThumbsUp className="size-4" />
                  {sending === "accept" ? "Enviando…" : "Aceptar propuesta"}
                </Button>
                <Button
                  variant="outline"
                  className="gap-2"
                  disabled={sending !== null}
                  onClick={() => respond_(false)}
                >
                  <ThumbsDown className="size-4" />
                  Rechazar
                </Button>
              </div>
            ) : (
              !decided && null
            )}
          </div>
        </article>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Portal de cliente de Vigía · software de gestión para empresas de
          control de plagas.
        </p>
      </main>
    </div>
  );
}
