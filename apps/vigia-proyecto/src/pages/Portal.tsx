import { useMutation, useQuery } from "convex/react";
import { useState } from "react";
import { useParams } from "react-router";
import {
  BadgeCheck,
  CalendarClock,
  FileText,
  Loader2,
  MapPin,
  ShieldCheck,
  Star,
  Wallet,
} from "lucide-react";

import { api } from "@/convex/_generated/api";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  DEVICE_KIND_LABEL,
  DEVICE_STATUS_CLASS,
  DEVICE_STATUS_LABEL,
  INVOICE_STATUS_CLASS,
  formatCountdown,
  formatCurrency,
  formatDate,
  formatDateTime,
} from "@/components/pest/domain";

export default function Portal() {
  const { token = "" } = useParams();
  const data = useQuery(api.pestControl.portalByToken, { token });
  const submitReview = useMutation(api.pestControl.submitReview);
  const payInvoice = useMutation(api.pestControl.payInvoiceFromPortal);
  const [paying, setPaying] = useState<string | null>(null);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);

  if (data === undefined) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  if (data === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-background px-6">
        <Card className="w-full max-w-md text-center">
          <CardContent className="pt-8">
            <ShieldCheck className="mx-auto size-6 text-muted-foreground" />
            <p className="mt-3 text-base font-semibold">Enlace no válido</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Este portal de cliente no existe o ha caducado. Pide a tu empresa de
              control de plagas un nuevo enlace.
            </p>
          </CardContent>
        </Card>
      </main>
    );
  }

  const pendingInvoices = data.invoices.filter((i) => i.status === "pendiente");
  const completed = data.visits.filter((v) => v.status === "completada");
  const next = [...data.visits]
    .filter((v) => v.status === "programada")
    .sort((a, b) => a.scheduledFor - b.scheduledFor)[0];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/60 bg-sidebar text-sidebar-foreground">
        <div className="mx-auto flex max-w-4xl items-center gap-3 px-4 py-6 sm:px-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <ShieldCheck className="size-5" />
          </div>
          <div>
            <p className="text-sm font-semibold">Portal de cliente</p>
            <p className="text-xs text-sidebar-foreground/60">
              Seguimiento de tu servicio de control de plagas
            </p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <section className="rounded-xl border border-border/70 bg-card p-6">
          <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            {data.name}
          </p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight">
            Estado de tu contrato
          </h1>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="size-3.5" />
            {data.address}, {data.city}
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-muted/60 p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Próxima visita
              </p>
              <p className="mt-1 flex items-center gap-1.5 text-sm font-semibold">
                <CalendarClock className="size-4 text-primary" />
                {next ? formatCountdown(next.scheduledFor) : "Sin programar"}
              </p>
            </div>
            <div className="rounded-lg bg-muted/60 p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Frecuencia
              </p>
              <p className="mt-1 text-sm font-semibold">
                Cada {data.cadenceDays} días
              </p>
            </div>
            <div className="rounded-lg bg-muted/60 p-4">
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                Pendiente de pago
              </p>
              <p className="mt-1 text-sm font-semibold">
                {formatCurrency(
                  pendingInvoices.reduce((acc, i) => acc + i.amount, 0),
                )}
              </p>
            </div>
          </div>
        </section>

        {data.pendingReview && !sent && (
          <Card className="mt-6 border-primary/40">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-base">
                <Star className="size-4 text-chart-3" />
                ¿Cómo ha ido el servicio?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    key={value}
                    type="button"
                    onClick={() => setRating(value)}
                    aria-label={`${value} estrellas`}
                    className="p-1"
                  >
                    <Star
                      className={
                        value <= rating
                          ? "size-7 fill-chart-3 text-chart-3"
                          : "size-7 text-muted-foreground/40"
                      }
                    />
                  </button>
                ))}
              </div>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows={2}
                className="mt-3"
                placeholder="Comentario opcional"
              />
              <Button
                className="mt-3"
                onClick={async () => {
                  await submitReview({
                    reviewId: data.pendingReview!.reviewId,
                    token,
                    rating,
                    comment,
                  });
                  setSent(true);
                }}
              >
                Enviar valoración
              </Button>
            </CardContent>
          </Card>
        )}

        {sent && (
          <Card className="mt-6 border-primary/40">
            <CardContent className="flex items-center gap-2 pt-6 text-sm">
              <BadgeCheck className="size-4 text-primary" />
              ¡Gracias! Hemos registrado tu valoración.
            </CardContent>
          </Card>
        )}

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-base font-semibold tracking-tight">
            <FileText className="size-4 text-primary" />
            Historial de visitas
          </h2>
          <div className="mt-3 flex flex-col gap-3">
            {data.visits.slice(0, 8).map((visit) => (
              <div
                key={visit._id}
                className="rounded-xl border border-border/70 bg-card p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <p className="text-sm font-semibold">{visit.serviceType}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDateTime(visit.completedAt ?? visit.scheduledFor)} ·{" "}
                      {visit.technician}
                    </p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      visit.status === "completada"
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border text-muted-foreground"
                    }
                  >
                    {visit.status === "completada"
                      ? "Realizada"
                      : visit.status === "programada"
                        ? "Programada"
                        : "Omitida"}
                  </Badge>
                </div>
                {visit.products.length > 0 && (
                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {visit.products.map((product) => (
                      <li key={product.registration + product.name}>
                        <Badge variant="outline" className="font-normal">
                          {product.name} · {product.dose} · reg.{" "}
                          {product.registration}
                        </Badge>
                      </li>
                    ))}
                  </ul>
                )}
                {visit.notes && (
                  <p className="mt-3 text-sm text-muted-foreground">
                    {visit.notes}
                  </p>
                )}
              </div>
            ))}
            {data.visits.length === 0 && (
              <p className="text-sm text-muted-foreground">
                Todavía no hay visitas registradas.
              </p>
            )}
          </div>
        </section>

        <section className="mt-8">
          <h2 className="flex items-center gap-2 text-base font-semibold tracking-tight">
            <ShieldCheck className="size-4 text-primary" />
            Dispositivos instalados
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {data.devices.map((device) => (
              <div
                key={device._id}
                className="flex items-center justify-between rounded-lg border border-border/70 bg-card p-4"
              >
                <div>
                  <p className="text-sm font-medium">{device.code}</p>
                  <p className="text-xs text-muted-foreground">
                    {DEVICE_KIND_LABEL[device.kind] ?? device.kind} · {device.pest}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className={DEVICE_STATUS_CLASS[device.status]}
                >
                  {DEVICE_STATUS_LABEL[device.status]}
                </Badge>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 pb-10">
          <h2 className="flex items-center gap-2 text-base font-semibold tracking-tight">
            <Wallet className="size-4 text-primary" />
            Facturas
          </h2>
          <p className="mb-3 text-xs text-muted-foreground">
            Puedes registrar el pago de una factura pendiente desde aquí.
          </p>
          <div className="mt-3 overflow-hidden rounded-xl border border-border/70 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Factura</th>
                  <th className="px-4 py-3 font-medium">Fecha</th>
                  <th className="px-4 py-3 font-medium">Importe</th>
                  <th className="px-4 py-3 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {data.invoices.map((invoice) => (
                <tr key={invoice._id}>
                  <td className="px-4 py-3 font-medium">{invoice.number}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {formatDate(invoice.issuedAt)}
                  </td>
                  <td className="px-4 py-3 font-semibold tabular-nums">
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="px-4 py-3">
                    {invoice.status === "pagada" ? (
                      <Badge
                        variant="outline"
                        className={INVOICE_STATUS_CLASS[invoice.status]}
                      >
                        Pagada
                      </Badge>
                    ) : (
                      <Button
                        size="sm"
                        variant="outline"
                        className="gap-1.5"
                        disabled={paying === invoice._id}
                        onClick={async () => {
                          setPaying(invoice._id);
                          try {
                            await payInvoice({
                              token,
                              invoiceId: invoice._id,
                              method: "Transferencia",
                            });
                          } finally {
                            setPaying(null);
                          }
                        }}
                      >
                        <Wallet className="size-3.5" />
                        {paying === invoice._id
                          ? "Registrando…"
                          : "Registrar pago"}
                      </Button>
                    )}
                  </td>
                </tr>
                ))}
                {data.invoices.length === 0 && (
                  <tr>
                    <td
                      colSpan={4}
                      className="px-4 py-8 text-center text-sm text-muted-foreground"
                    >
                      Sin facturas emitidas.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            {completed.length} visita{completed.length === 1 ? "" : "s"}
            completadas en tu histórico.
          </p>
        </section>
      </main>
    </div>
  );
}
