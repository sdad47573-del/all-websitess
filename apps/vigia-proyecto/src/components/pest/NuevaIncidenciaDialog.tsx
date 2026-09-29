import { useState } from "react";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { Severity } from "@/convex/schema";
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
import { PESTS, SEVERITIES, SEVERITY_LABEL } from "@/components/pest/domain";

export function NuevaIncidenciaDialog({
  sites,
  defaultSiteId,
  onClose,
  onCreate,
}: {
  sites: Doc<"sites">[];
  defaultSiteId?: Id<"sites">;
  onClose: () => void;
  onCreate: (args: {
    siteId: Id<"sites">;
    title: string;
    pest: string;
    severity: Severity;
  }) => Promise<unknown>;
}) {
  const [siteId, setSiteId] = useState<string>(
    defaultSiteId ?? (sites[0] ? String(sites[0]._id) : ""),
  );
  const [title, setTitle] = useState("");
  const [pest, setPest] = useState<string>(PESTS[0]);
  const [severity, setSeverity] = useState<Severity>("media");
  const [saving, setSaving] = useState(false);

  const effectiveSite = siteId || (sites[0] ? String(sites[0]._id) : "");

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!effectiveSite || !title.trim()) return;
    setSaving(true);
    try {
      await onCreate({
        siteId: effectiveSite as Id<"sites">,
        title: title.trim(),
        pest,
        severity,
      });
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open onOpenChange={(next) => !next && onClose()}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Registrar incidencia</DialogTitle>
          <DialogDescription>
            Documenta el aviso del cliente y asígnale una severidad para
            priorizar la ruta del técnico.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="incident-site">Sitio</Label>
            <Select value={effectiveSite} onValueChange={setSiteId}>
              <SelectTrigger id="incident-site">
                <SelectValue placeholder="Selecciona un cliente" />
              </SelectTrigger>
              <SelectContent>
                {sites.map((site) => (
                  <SelectItem key={site._id} value={String(site._id)}>
                    {site.name} · {site.city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="incident-title">Descripción</Label>
            <Input
              id="incident-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Roedores en sala de despensa"
              required
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Label htmlFor="incident-pest">Plaga</Label>
              <Select value={pest} onValueChange={setPest}>
                <SelectTrigger id="incident-pest">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {PESTS.map((item) => (
                    <SelectItem key={item} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="incident-severity">Severidad</Label>
              <Select
                value={severity}
                onValueChange={(value) => setSeverity(value as Severity)}
              >
                <SelectTrigger id="incident-severity">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {SEVERITIES.map((item) => (
                    <SelectItem key={item} value={item}>
                      {SEVERITY_LABEL[item]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={saving || !effectiveSite}>
              {saving ? "Guardando…" : "Abrir incidencia"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
