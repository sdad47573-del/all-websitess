import { useQuery } from "convex/react";
import { useParams } from "react-router";
import { ArrowLeft, Loader2, Printer, ShieldCheck } from "lucide-react";
import { Link } from "react-router";

import { api } from "@/convex/_generated/api";
import type { Id } from "@/convex/_generated/dataModel";
import { Button } from "@/components/ui/button";
import { PortalQr } from "@/components/pest/PortalQr";
import {
  DEVICE_KIND_LABEL,
  formatCurrency,
  formatDate,
  formatDateTime,
} from "@/components/pest/domain";

export default function InformeVisita() {
  const { visitId = "" } = useParams();
  const report = useQuery(api.pestControl.visitReport, {
    visitId: visitId as Id<"visits">,
  });

  if (report === undefined) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/40">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </main>
    );
  }

  if (report === null) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-muted/40 p-6">
        <div className="rounded-xl border border-border bg-card p-8 text-center">
          <p className="text-sm font-semibold">Informe no disponible</p>
          <Button asChild variant="outline" size="sm" className="mt-4">
            <Link to="/dashboard">Volver al panel</Link>
          </Button>
        </div>
      </main>
    );
  }

  const { visit, site, devices, invoice } = report;

  return (
    <main className="min-h-screen bg-muted/40 py-8">
      <div className="mx-auto max-w-3xl px-4">
        <div className="no-print mb-4 flex items-center justify-between gap-3">
          <Button asChild variant="ghost" size="sm" className="gap-2">
            <Link to="/dashboard">
              <ArrowLeft className="size-4" />
              Volver
            </Link>
          </Button>
          <Button className="gap-2" onClick={() => window.print()}>
            <Printer className="size-4" />
            Imprimir o guardar PDF
          </Button>
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
                  Informe de servicio
                </p>
              </div>
            </div>
            <div className="text-right text-xs text-muted-foreground">
              <p>Nº {invoice?.number ?? "s/f"}</p>
              <p>{formatDateTime(visit.completedAt ?? visit.scheduledFor)}</p>
            </div>
          </header>

          <section className="grid gap-6 border-b border-border py-6 sm:grid-cols-2">
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Cliente
              </h2>
              <p className="mt-2 text-sm font-medium">{site.name}</p>
              <p className="text-sm text-muted-foreground">
                {site.address}, {site.city}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                {site.contact}
              </p>
            </div>
            <div>
              <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Servicio
              </h2>
              <p className="mt-2 text-sm font-medium">{visit.serviceType}</p>
              <p className="text-sm text-muted-foreground">
                Técnico: {visit.technician}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Próxima visita prevista: {formatDate(site.nextVisitAt)}
              </p>
            </div>
          </section>

          <section className="border-b border-border py-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Planilla de inspección
            </h2>
            {visit.checklist && visit.checklist.length > 0 ? (
              <table className="mt-3 w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 font-medium">Zona</th>
                    <th className="py-2 font-medium">Estado</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {visit.checklist.map((item) => (
                    <tr key={item.area}>
                      <td className="py-2">{item.area}</td>
                      <td className="py-2">
                        <span
                          className={
                            item.ok
                              ? "text-primary"
                              : "text-destructive"
                          }
                        >
                          {item.ok ? "Correcto" : "Pendiente"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                Sin planilla registrada en esta visita.
              </p>
            )}
          </section>

          <section className="border-b border-border py-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Dispositivos revisados
            </h2>
            <table className="mt-3 w-full text-sm">
              <thead>
                <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="py-2 font-medium">Código</th>
                  <th className="py-2 font-medium">Tipo</th>
                  <th className="py-2 font-medium">Plaga</th>
                  <th className="py-2 text-right font-medium">Capturas</th>
                  <th className="py-2 text-right font-medium">Cebo</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {devices.map((device) => (
                  <tr key={device._id}>
                    <td className="py-2 font-medium">{device.code}</td>
                    <td className="py-2 text-muted-foreground">
                      {DEVICE_KIND_LABEL[device.kind] ?? device.kind}
                    </td>
                    <td className="py-2 italic text-muted-foreground">
                      {device.pest}
                    </td>
                    <td className="py-2 text-right tabular-nums">
                      {device.count}
                    </td>
                    <td className="py-2 text-right tabular-nums">
                      {device.bait}%
                    </td>
                  </tr>
                ))}
                {devices.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-4 text-sm text-muted-foreground"
                    >
                      Sin dispositivos instalados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </section>

          <section className="border-b border-border py-6">
            <h2 className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
              Producto aplicado
            </h2>
            {visit.products && visit.products.length > 0 ? (
              <table className="mt-3 w-full text-sm">
                <thead>
                  <tr className="border-b border-border text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="py-2 font-medium">Producto</th>
                    <th className="py-2 font-medium">Dosis</th>
                    <th className="py-2 font-medium">Nº registro</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {visit.products.map((product) => (
                    <tr key={product.registration + product.name}>
                      <td className="py-2">{product.name}</td>
                      <td className="py-2 text-muted-foreground">
                        {product.dose}
                      </td>
                      <td className="py-2 text-muted-foreground">
                        {product.registration}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p className="mt-2 text-sm text-muted-foreground">
                No se registraron aplicaciones de producto.
              </p>
            )}
            {visit.notes && (
              <p className="mt-4 text-sm leading-relaxed">{visit.notes}</p>
            )}
          </section>

          <footer className="flex flex-wrap items-end justify-between gap-6 pt-6">
            <div className="flex items-end gap-6">
              {site.portalToken && (
                <div className="text-center">
                  <PortalQr token={site.portalToken} size={84} />
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Portal verificable del cliente
                  </p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Firma del cliente
                </p>
                <p className="mt-6 border-b border-border pb-1 text-sm">
                  {visit.signature ?? ""}
                </p>
              </div>
            </div>
            {invoice && (
              <div className="text-right">
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">
                  Importe facturado
                </p>
                <p className="mt-2 text-xl font-semibold">
                  {formatCurrency(invoice.amount)}
                </p>
                <p className="text-xs text-muted-foreground">
                  {invoice.status === "pagada" ? "Pagada" : "Pendiente de pago"}
                </p>
              </div>
            )}
          
			<p style="font-size: 0.75rem; opacity: 0.7; margin: 0.5rem 0 0;">
				<small>Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a></small>
			</p>
</footer>
        </article>
      </div>
    </main>
  );
}
