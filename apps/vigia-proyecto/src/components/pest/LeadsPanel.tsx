import { useState } from "react";
import { Link } from "react-router";
import { toast } from "sonner";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { SiteSector } from "@/convex/schema";
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
import { Copy, FileText, Handshake, Plus, UserRoundPlus } from "lucide-react";
import {
  LEAD_STATUS_CLASS,
  LEAD_STATUS_LABEL,
  PESTS,
  QUOTE_STATUS_CLASS,
  QUOTE_STATUS_LABEL,
  SECTORS,
  SECTOR_LABEL,
  formatCurrency,
  formatDate,
} from "@/components/pest/domain";
import { QuoteDialog } from "@/components/pest/QuoteDialog";

type LeadStatus = "nuevo" | "presupuestado" | "ganado" | "perdido";

const FUNNEL: LeadStatus[] = ["nuevo", "presupuestado", "ganado", "perdido"];

export function LeadsPanel({
  leads,
  quotes,
  onCreate,
  onUpdate,
  onConvert,
  onCreateQuote,
}: {
  leads: Doc<"leads">[];
  quotes: Doc<"quotes">[];
  onCreate: (args: {
    name: string;
    contact: string;
    city: string;
    sector?: SiteSector;
    pest?: string;
    monthlyFee?: number;
  }) => Promise<unknown>;
  onUpdate: (args: { leadId: Id<"leads">; status: LeadStatus }) => Promise<unknown>;
  onConvert: (args: { leadId: Id<"leads"> }) => Promise<unknown>;
  onCreateQuote: (args: {
    leadId?: Id<"leads">;
    clientName: string;
    contact: string;
    city: string;
    sector?: SiteSector;
    lines: { concept: string; quantity: number; price: number }[];
    validDays?: number;
  }) => Promise<unknown>;
}) {
  const [open, setOpen] = useState(false);
  const [quoteLead, setQuoteLead] = useState<Doc<"leads"> | null>(null);
  const [saving, setSaving] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    city: "",
    sector: "vivienda" as SiteSector,
    pest: PESTS[1],
    monthlyFee: "90",
  });

  const counts = FUNNEL.map((status) => ({
    status,
    total: leads.filter((l) => l.status === status).length,
    value: leads
      .filter((l) => l.status === status)
      .reduce((acc, l) => acc + (l.monthlyFee ?? 0), 0),
  }));

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.city.trim()) return;
    setSaving(true);
    try {
      await onCreate({
        name: form.name.trim(),
        contact: form.contact.trim() || "Sin contacto",
        city: form.city.trim(),
        sector: form.sector,
        pest: form.pest,
        monthlyFee: Number(form.monthlyFee) || 0,
      });
      setForm({
        name: "",
        contact: "",
        city: "",
        sector: "vivienda",
        pest: PESTS[1],
        monthlyFee: "90",
      });
      setOpen(false);
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            CRM de contactos
          </h2>
          <p className="text-sm text-muted-foreground">
            {leads.filter((l) => l.status !== "perdido").length} contactos activos
            en el embudo comercial
          </p>
        </div>
        <Button type="button" className="gap-2" onClick={() => setOpen(true)}>
          <Plus className="size-4" />
          Nuevo contacto
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {counts.map((item) => (
          <div
            key={item.status}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <Badge variant="outline" className={LEAD_STATUS_CLASS[item.status]}>
              {LEAD_STATUS_LABEL[item.status]}
            </Badge>
            <p className="mt-3 text-2xl font-semibold tracking-tight">
              {item.total}
            </p>
            <p className="mt-1 text-xs text-muted-foreground">
              {formatCurrency(item.value)}/mes potenciales
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-border/70 bg-card p-5">
        <div className="flex flex-col divide-y divide-border/60">
          {leads.map((lead) => {
            const quote = quotes.find((q) => q.leadId === lead._id);
            return (
            <div
              key={lead._id}
              className="flex flex-wrap items-center gap-3 py-4"
            >
              <div className="min-w-0 flex-1">
                <p className="text-sm font-medium">{lead.name}</p>
                <p className="text-xs text-muted-foreground">
                  {lead.contact} · {lead.city}
                  {lead.sector ? ` · ${SECTOR_LABEL[lead.sector]}` : ""}
                  {lead.pest ? ` · ${lead.pest}` : ""} · alta{" "}
                  {formatDate(lead.createdAt)}
                </p>
                {quote && (
                  <p className="mt-1 flex flex-wrap items-center gap-2 text-xs">
                    <Badge
                      variant="outline"
                      className={QUOTE_STATUS_CLASS[quote.status]}
                    >
                      {QUOTE_STATUS_LABEL[quote.status]} ·{" "}
                      {formatCurrency(quote.total)}
                    </Badge>
                    <Button asChild size="sm" variant="ghost" className="h-6 gap-1 px-1">
                      <Link to={`/presupuesto/${quote._id}`}>
                        <FileText className="size-3" />
                        Ver presupuesto
                      </Link>
                    </Button>
                    {quote.portalToken &&
                      quote.status !== "aceptado" &&
                      quote.status !== "rechazado" && (
                        <Button
                          type="button"
                          size="sm"
                          variant="ghost"
                          className="h-6 gap-1 px-1"
                          onClick={async () => {
                            await navigator.clipboard.writeText(
                              `${window.location.origin}/propuesta/${quote.portalToken}`,
                            );
                            toast.success("Enlace de propuesta copiado");
                          }}
                        >
                          <Copy className="size-3" />
                          Copiar enlace para el cliente
                        </Button>
                      )}
                  </p>
                )}
              </div>
              <Badge variant="outline" className={LEAD_STATUS_CLASS[lead.status]}>
                {LEAD_STATUS_LABEL[lead.status]}
              </Badge>
              <span className="text-sm font-semibold tabular-nums">
                {formatCurrency(lead.monthlyFee ?? 0)}
              </span>
              <div className="flex flex-wrap gap-2">
                {!quote && lead.status !== "ganado" && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    className="gap-1.5"
                    onClick={() => {
                      setQuoteLead(lead);
                      onUpdate({
                        leadId: lead._id,
                        status: "presupuestado",
                      });
                    }}
                  >
                    <FileText className="size-3.5" />
                    Presupuestar
                  </Button>
                )}
                {lead.status === "nuevo" && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() => onUpdate({ leadId: lead._id, status: "presupuestado" })}
                  >
                    Marcar en negociación
                  </Button>
                )}
                {lead.status !== "ganado" && (
                  <Button
                    type="button"
                    size="sm"
                    variant="ghost"
                    onClick={() => onUpdate({ leadId: lead._id, status: "perdido" })}
                  >
                    Descartar
                  </Button>
                )}
                {lead.status !== "ganado" && (
                  <Button
                    type="button"
                    size="sm"
                    className="gap-1.5"
                    onClick={() => onConvert({ leadId: lead._id })}
                  >
                    <Handshake className="size-3.5" />
                    Convertir en cliente
                  </Button>
                )}
              </div>
            </div>
            );
          })}
          {leads.length === 0 && (
            <p className="py-8 text-center text-sm text-muted-foreground">
              Aún no hay contactos en el embudo.
            </p>
          )}
        </div>
      </div>

      <QuoteDialog
        open={quoteLead !== null}
        lead={quoteLead}
        onClose={() => setQuoteLead(null)}
        onCreate={onCreateQuote}
      />

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Nuevo contacto</DialogTitle>
            <DialogDescription>
              Registra la consulta y sírvela de presupuesto con la tarifa
              mensual estimada.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="lead-name">Empresa o particular</Label>
              <Input
                id="lead-name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Grupo Hostelero Turia"
                required
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="lead-contact">Contacto</Label>
                <Input
                  id="lead-contact"
                  value={form.contact}
                  onChange={(e) => setForm({ ...form, contact: e.target.value })}
                  placeholder="Nombre · teléfono"
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="lead-city">Ciudad</Label>
                <Input
                  id="lead-city"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Valencia"
                  required
                />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="lead-sector">Sector</Label>
                <Select
                  value={form.sector}
                  onValueChange={(value) =>
                    setForm({ ...form, sector: value as SiteSector })
                  }
                >
                  <SelectTrigger id="lead-sector">
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
              <div className="flex flex-col gap-2">
                <Label htmlFor="lead-fee">Tarifa mensual (€)</Label>
                <Input
                  id="lead-fee"
                  type="number"
                  min={0}
                  value={form.monthlyFee}
                  onChange={(e) => setForm({ ...form, monthlyFee: e.target.value })}
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="lead-pest">Plaga principal</Label>
              <Select
                value={form.pest}
                onValueChange={(value) => setForm({ ...form, pest: value })}
              >
                <SelectTrigger id="lead-pest">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PESTS.map((pest) => (
                    <SelectItem key={pest} value={pest}>
                      {pest}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button type="submit" disabled={saving}>
                <UserRoundPlus className="size-4" />
                {saving ? "Guardando…" : "Añadir al embudo"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
