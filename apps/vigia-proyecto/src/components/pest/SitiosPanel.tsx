import { useState } from "react";
import { toast } from "sonner";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { RiskLevel, SiteSector } from "@/convex/schema";
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
import {
  Building2,
  CalendarClock,
  Copy,
  MapPin,
  Plus,
  QrCode,
  Siren,
  Wrench,
} from "lucide-react";
import {
  RISKS,
  RISK_CLASS,
  RISK_LABEL,
  SECTORS,
  SECTOR_LABEL,
  formatCountdown,
  formatDate,
  isOverdue,
} from "@/components/pest/domain";
import { PortalQr } from "@/components/pest/PortalQr";

export function SitiosPanel({
  sites,
  devices,
  onSchedule,
  onCreateSite,
  onNewIncident,
}: {
  sites: Doc<"sites">[];
  devices: Doc<"devices">[];
  onSchedule: (args: { siteId: Id<"sites"> }) => Promise<unknown>;
  onCreateSite: (args: {
    name: string;
    contact: string;
    address: string;
    city: string;
    sector: SiteSector;
    risk: RiskLevel;
    daysUntilVisit?: number;
  }) => Promise<unknown>;
  onNewIncident: (siteId: Id<"sites">) => void;
}) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [qrSite, setQrSite] = useState<Doc<"sites"> | null>(null);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    address: "",
    city: "",
    sector: "restaurante" as (typeof SECTORS)[number],
    risk: "medium" as (typeof RISKS)[number],
  });
  const [saving, setSaving] = useState(false);

  const copyPortal = async (site: Doc<"sites">) => {
    const url = `${window.location.origin}/portal/${site.portalToken}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success(`Enlace del portal copiado · ${site.name}`);
    } catch {
      toast.error("No se pudo copiar el enlace");
    }
  };

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.city.trim()) return;
    setSaving(true);
    try {
      await onCreateSite({
        name: form.name.trim(),
        contact: form.contact.trim() || "Sin contacto",
        address: form.address.trim(),
        city: form.city.trim(),
        sector: form.sector,
        risk: form.risk,
        daysUntilVisit: 3,
      });
      setForm({
        name: "",
        contact: "",
        address: "",
        city: "",
        sector: "restaurante",
        risk: "medium",
      });
      setDialogOpen(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Cartera de clientes
          </h2>
          <p className="text-sm text-muted-foreground">
            {sites.length} local{sites.length === 1 ? "" : "es"} bajo control
            con {devices.length} trampa{devices.length === 1 ? "" : "s"}{" "}
            instalada{devices.length === 1 ? "" : "s"}.
          </p>
        </div>
        <Button
          type="button"
          className="gap-2"
          onClick={() => setDialogOpen(true)}
        >
          <Plus className="size-4" />
          Nuevo cliente
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {sites.map((site) => {
          const siteDevices = devices.filter((d) => d.siteId === site._id);
          const inAlert = siteDevices.filter(
            (d) => d.status === "alerta" || d.status === "critico",
          ).length;
          const overdue = isOverdue(site.nextVisitAt);

          return (
            <article
              key={site._id}
              className="flex flex-col rounded-xl border border-border/70 bg-card p-5 transition-shadow hover:shadow-[0_10px_30px_-20px_rgba(0,0,0,0.4)]"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-base font-semibold tracking-tight">
                    {site.name}
                  </h3>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {site.contact}
                  </p>
                </div>
                <Badge variant="outline" className="shrink-0">
                  {SECTOR_LABEL[site.sector] ?? site.sector}
                </Badge>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-3.5" />
                <span className="truncate">
                  {site.address}, {site.city}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-muted/60 py-2">
                  <p className="text-sm font-semibold tabular-nums">
                    {siteDevices.length}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Trampas
                  </p>
                </div>
                <div className="rounded-lg bg-muted/60 py-2">
                  <p
                    className={`text-sm font-semibold tabular-nums ${
                      inAlert > 0 ? "text-destructive" : "text-primary"
                    }`}
                  >
                    {inAlert}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    En alerta
                  </p>
                </div>
                <div className="rounded-lg bg-muted/60 py-2">
                  <p
                    className={`text-sm font-semibold ${RISK_CLASS[site.risk]}`}
                  >
                    {RISK_LABEL[site.risk]?.replace("Riesgo ", "")}
                  </p>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                    Riesgo
                  </p>
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2 rounded-lg border border-border/60 px-3 py-2">
                <CalendarClock
                  className={`size-4 ${overdue ? "text-destructive" : "text-primary"}`}
                />
                <div className="flex-1 text-sm">
                  <span className="font-medium">
                    {formatCountdown(site.nextVisitAt)}
                  </span>
                  <span className="text-muted-foreground">
                    {" "}
                    · {formatDate(site.nextVisitAt)}
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {site.portalToken && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => setQrSite(site)}
                  >
                    <QrCode className="size-3.5" />
                    QR portal
                  </Button>
                )}
                {site.portalToken && (
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => copyPortal(site)}
                  >
                    <Copy className="size-3.5" />
                    Copiar portal
                  </Button>
                )}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => onSchedule({ siteId: site._id })}
                >
                  <Wrench className="size-3.5" />
                  Visita realizada
                </Button>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="gap-1.5"
                  onClick={() => onNewIncident(site._id)}
                >
                  <Siren className="size-3.5" />
                  Abrir incidencia
                </Button>
              </div>
            </article>
          );
        })}

        {sites.length === 0 && (
          <div className="col-span-full rounded-xl border border-dashed border-border p-10 text-center">
            <Building2 className="mx-auto size-6 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium">Todavía no hay clientes</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Añade el primero para empezar a instalar trampas y registrar
              incidencias.
            </p>
          </div>
        )}
      </div>

      <Dialog
        open={qrSite !== null}
        onOpenChange={(next) => !next && setQrSite(null)}
      >
        <DialogContent className="sm:max-w-xs">
          <DialogHeader>
            <DialogTitle>Acceso al portal</DialogTitle>
            <DialogDescription>
              {qrSite?.name} — el cliente escanea el código y ve su historial,
              trampas y facturas.
            </DialogDescription>
          </DialogHeader>
          {qrSite?.portalToken && (
            <div className="flex flex-col items-center gap-3 py-2">
              <PortalQr token={qrSite.portalToken} size={168} />
              <p className="break-all text-center text-[11px] text-muted-foreground">
                {typeof window !== "undefined" &&
                  `${window.location.origin}/portal/${qrSite.portalToken}`}
              </p>
              <Button
                variant="outline"
                size="sm"
                className="w-full gap-2"
                onClick={() => window.print()}
              >
                Imprimir etiqueta
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nuevo cliente</DialogTitle>
            <DialogDescription>
              Da de alta un local y programa su primera visita en 3 días.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="site-name">Nombre comercial</Label>
              <Input
                id="site-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Restaurante La Abuela"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="site-city">Ciudad</Label>
                <Input
                  id="site-city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Valencia"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="sector">Sector</Label>
                <Select
                  value={form.sector}
                  onValueChange={(value) =>
                    setForm({ ...form, sector: value as (typeof SECTORS)[number] })
                  }
                >
                  <SelectTrigger id="sector">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {SECTORS.map((sector) => (
                      <SelectItem key={sector} value={sector}>
                        {SECTOR_LABEL[sector]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="site-address">Dirección</Label>
              <Input
                id="site-address"
                value={form.address}
                onChange={(e) => setForm({ ...form, address: e.target.value })}
                placeholder="Calle Mayor 14, bajo"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="site-contact">Contacto</Label>
              <Input
                id="site-contact"
                value={form.contact}
                onChange={(e) => setForm({ ...form, contact: e.target.value })}
                placeholder="Nombre · teléfono"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="site-risk">Riesgo</Label>
              <Select
                value={form.risk}
                onValueChange={(value) =>
                  setForm({ ...form, risk: value as (typeof RISKS)[number] })
                }
              >
                <SelectTrigger id="site-risk">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {RISKS.map((risk) => (
                    <SelectItem key={risk} value={risk}>
                      {RISK_LABEL[risk]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={saving}>
                {saving ? "Guardando…" : "Crear cliente"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
