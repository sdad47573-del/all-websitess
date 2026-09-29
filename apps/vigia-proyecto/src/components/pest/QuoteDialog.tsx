import { useState } from "react";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { SiteSector } from "@/convex/schema";
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
import { Plus, Trash2 } from "lucide-react";
import { SECTORS, SECTOR_LABEL, formatCurrency } from "@/components/pest/domain";

type Line = { concept: string; quantity: number; price: number };

const DEFAULT_LINES: Line[] = [
  { concept: "Control preventivo mensual", quantity: 1, price: 120 },
  { concept: "Ratonera adicional con cebo", quantity: 2, price: 28 },
];

export function QuoteDialog({
  open,
  lead,
  onClose,
  onCreate,
}: {
  open: boolean;
  lead: Doc<"leads"> | null;
  onClose: () => void;
  onCreate: (args: {
    leadId?: Id<"leads">;
    clientName: string;
    contact: string;
    city: string;
    sector?: SiteSector;
    lines: Line[];
    validDays?: number;
  }) => Promise<unknown>;
}) {
  const [lines, setLines] = useState<Line[]>(DEFAULT_LINES);
  const [sector, setSector] = useState<SiteSector>("vivienda");
  const [validDays, setValidDays] = useState("30");
  const [saving, setSaving] = useState(false);

  const total = lines.reduce(
    (acc, line) => acc + (Number(line.price) || 0) * (Number(line.quantity) || 0),
    0,
  );

  const updateLine = (index: number, patch: Partial<Line>) =>
    setLines(
      lines.map((line, i) => (i === index ? { ...line, ...patch } : line)),
    );

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!lead) return;
    const clean = lines.filter((line) => line.concept.trim());
    if (clean.length === 0) return;
    setSaving(true);
    try {
      await onCreate({
        leadId: lead._id,
        clientName: lead.name,
        contact: lead.contact,
        city: lead.city,
        sector: lead.sector ?? sector,
        lines: clean.map((line) => ({
          concept: line.concept.trim(),
          quantity: Number(line.quantity) || 1,
          price: Number(line.price) || 0,
        })),
        validDays: Number(validDays) || 30,
      });
      setLines(DEFAULT_LINES);
      onClose();
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Presupuesto para {lead?.name}</DialogTitle>
          <DialogDescription>
            Detalla los conceptos y el precio. Al aceptarlo, el cliente y su
            primera visita se crean automáticamente.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="quote-sector">Sector</Label>
              <Select
                value={lead?.sector ?? sector}
                onValueChange={(value) => setSector(value as SiteSector)}
              >
                <SelectTrigger id="quote-sector">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SECTORS.map((item) => (
                    <SelectItem key={item} value={item}>
                      {SECTOR_LABEL[item]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="quote-valid">Validez (días)</Label>
              <Input
                id="quote-valid"
                type="number"
                min={1}
                value={validDays}
                onChange={(e) => setValidDays(e.target.value)}
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <Label>Conceptos</Label>
            <div className="flex flex-col gap-2">
              {lines.map((line, index) => (
                <div key={index} className="flex flex-wrap items-center gap-2">
                  <Input
                    value={line.concept}
                    onChange={(e) =>
                      updateLine(index, { concept: e.target.value })
                    }
                    placeholder="Concepto"
                    className="min-w-40 flex-1"
                  />
                  <Input
                    type="number"
                    min={0}
                    value={line.quantity}
                    onChange={(e) =>
                      updateLine(index, {
                        quantity: Number(e.target.value) || 0,
                      })
                    }
                    className="w-20"
                    aria-label="Cantidad"
                  />
                  <Input
                    type="number"
                    min={0}
                    value={line.price}
                    onChange={(e) =>
                      updateLine(index, { price: Number(e.target.value) || 0 })
                    }
                    className="w-24"
                    aria-label="Precio"
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label="Eliminar concepto"
                    onClick={() =>
                      setLines(lines.filter((_, i) => i !== index))
                    }
                  >
                    <Trash2 className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="w-fit gap-2"
              onClick={() =>
                setLines([
                  ...lines,
                  { concept: "", quantity: 1, price: 0 },
                ])
              }
            >
              <Plus className="size-4" />
              Añadir concepto
            </Button>
          </div>

          <div className="flex items-center justify-between rounded-lg bg-muted/60 px-4 py-3">
            <span className="text-sm text-muted-foreground">Total</span>
            <span className="text-lg font-semibold tabular-nums">
              {formatCurrency(total)}
            </span>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={saving || total <= 0}>
              {saving ? "Guardando…" : "Crear presupuesto"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
