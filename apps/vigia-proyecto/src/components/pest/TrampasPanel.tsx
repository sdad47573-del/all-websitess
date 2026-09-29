import { useMemo, useState } from "react";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { DeviceKind, DeviceStatus } from "@/convex/schema";
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
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ClipboardCheck, Droplet, Gauge, Plus, Search } from "lucide-react";
import { Sparkline } from "@/components/pest/Sparkline";
import {
  DEVICE_KINDS,
  DEVICE_KIND_LABEL,
  DEVICE_STATUS_CLASS,
  DEVICE_STATUS_LABEL,
  PESTS,
  formatDateTime,
} from "@/components/pest/domain";

const FILTERS = ["todos", "ok", "alerta", "critico", "inactivo"] as const;
type Filter = (typeof FILTERS)[number];

export function TrampasPanel({
  sites,
  devices,
  readings,
  thresholds,
  onLogReading,
  onRefill,
  onCreateDevice,
  onSetThreshold,
}: {
  sites: Doc<"sites">[];
  devices: Doc<"devices">[];
  readings: Doc<"readings">[];
  thresholds: Doc<"thresholds">[];
  onLogReading: (args: {
    deviceId: Id<"devices">;
    count: number;
    status: DeviceStatus;
  }) => Promise<unknown>;
  onRefill: (args: { deviceId: Id<"devices"> }) => Promise<unknown>;
  onCreateDevice: (args: {
    siteId: Id<"sites">;
    code: string;
    kind: DeviceKind;
    pest: string;
  }) => Promise<unknown>;
  onSetThreshold: (args: { pest: string; limit: number }) => Promise<unknown>;
}) {
  const [filter, setFilter] = useState<Filter>("todos");
  const [query, setQuery] = useState("");
  const [editing, setEditing] = useState<Doc<"devices"> | null>(null);
  const [count, setCount] = useState("0");
  const [status, setStatus] = useState<DeviceStatus>("ok");
  const [installOpen, setInstallOpen] = useState(false);
  const [installSite, setInstallSite] = useState("");
  const [installCode, setInstallCode] = useState("");
  const [installKind, setInstallKind] = useState<DeviceKind>("roentera");
  const [installPest, setInstallPest] = useState<string>(PESTS[1]);
  const [installing, setInstalling] = useState(false);
  const [thresholdsOpen, setThresholdsOpen] = useState(false);
  const [limits, setLimits] = useState<Record<string, string>>({});

  const installSiteId = installSite || (sites[0] ? String(sites[0]._id) : "");

  const siteName = (siteId: Id<"sites">) =>
    sites.find((s) => s._id === siteId)?.name ?? "Sitio eliminado";

  const trend = (deviceId: Id<"devices">) =>
    readings
      .filter((r) => r.deviceId === deviceId)
      .slice(-6)
      .map((r) => r.count);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return devices
      .filter((d) => (filter === "todos" ? true : d.status === filter))
      .filter((d) =>
        needle
          ? d.code.toLowerCase().includes(needle) ||
            d.pest.toLowerCase().includes(needle) ||
            siteName(d.siteId).toLowerCase().includes(needle)
          : true,
      )
      .sort((a, b) => b.count - a.count);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [devices, filter, query, sites]);

  const openReading = (device: Doc<"devices">) => {
    setEditing(device);
    setCount(String(device.count));
    setStatus(device.status);
  };

  const saveReading = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!editing) return;
    await onLogReading({
      deviceId: editing._id,
      count: Number(count) || 0,
      status,
    });
    setEditing(null);
  };

  const install = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!installSiteId || !installCode.trim()) return;
    setInstalling(true);
    try {
      await onCreateDevice({
        siteId: installSiteId as Id<"sites">,
        code: installCode.trim().toUpperCase(),
        kind: installKind,
        pest: installPest,
      });
      setInstallCode("");
      setInstallOpen(false);
    } finally {
      setInstalling(false);
    }
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">Red de trampas</h2>
          <p className="text-sm text-muted-foreground">
            {devices.length} dispositivos instalados en{" "}
            {sites.length} local{sites.length === 1 ? "" : "es"}.
          </p>
        </div>
        <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
          <div className="relative w-full sm:w-64">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar trampa o plaga…"
              className="pl-9"
            />
          </div>
          <Button
            type="button"
            variant="outline"
            className="gap-2"
            onClick={() => {
              setLimits(
                Object.fromEntries(
                  PESTS.map((pest) => [
                    pest,
                    String(
                      thresholds.find((t) => t.pest === pest)?.limit ?? 10,
                    ),
                  ]),
                ),
              );
              setThresholdsOpen(true);
            }}
          >
            <Gauge className="size-4" />
            Umbrales de acción
          </Button>
          <Button
            type="button"
            variant="outline"
            className="gap-2"
            onClick={() => setInstallOpen(true)}
          >
            <Plus className="size-4" />
            Instalar trampa
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={
              filter === item
                ? "rounded-full bg-primary px-3.5 py-1.5 text-xs font-medium text-primary-foreground transition-colors"
                : "rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary/50 hover:text-foreground"
            }
          >
            {item === "todos" ? "Todas" : DEVICE_STATUS_LABEL[item]}
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-xl border border-border/70 bg-card">
        <table className="w-full text-sm">
          <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
            <tr>
              <th className="px-4 py-3 font-medium">Trampa</th>
              <th className="hidden px-4 py-3 font-medium md:table-cell">Sitio</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">Plaga</th>
              <th className="px-4 py-3 font-medium">Capturas</th>
              <th className="hidden px-4 py-3 font-medium lg:table-cell">
                Tendencia
              </th>
              <th className="hidden px-4 py-3 font-medium sm:table-cell">Cebo</th>
              <th className="px-4 py-3 font-medium">Estado</th>
              <th className="px-4 py-3 text-right font-medium">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/60">
            {filtered.map((device) => (
              <tr
                key={device._id}
                className="transition-colors hover:bg-muted/40"
              >
                <td className="px-4 py-3">
                  <p className="font-medium">{device.code}</p>
                  <p className="text-xs text-muted-foreground">
                    {DEVICE_KIND_LABEL[device.kind] ?? device.kind}
                  </p>
                </td>
                <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                  {siteName(device.siteId)}
                </td>
                <td className="hidden px-4 py-3 italic text-muted-foreground lg:table-cell">
                  {device.pest}
                </td>
                <td className="px-4 py-3">
                  <span className="font-semibold tabular-nums">
                    {device.count}
                  </span>
                  <p className="text-[11px] text-muted-foreground">
                    {formatDateTime(device.lastReadingAt)}
                  </p>
                </td>
                <td className="hidden px-4 py-3 sm:table-cell">
                  <div className="flex w-24 items-center gap-2">
                    <Progress
                      value={device.bait}
                      className={`h-1.5 ${
                        device.bait < 40
                          ? "[&>div]:bg-destructive"
                          : "[&>div]:bg-chart-5"
                      }`}
                    />
                    <span className="text-xs tabular-nums text-muted-foreground">
                      {device.bait}%
                    </span>
                  </div>
                </td>
                <td className="hidden px-4 py-3 lg:table-cell">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Sparkline values={trend(device._id)} />
                    <span className="text-[10px] text-muted-foreground">
                      6 sem.
                    </span>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <Badge
                    variant="outline"
                    className={DEVICE_STATUS_CLASS[device.status]}
                  >
                    {DEVICE_STATUS_LABEL[device.status]}
                  </Badge>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1.5">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title="Registrar lectura"
                      onClick={() => openReading(device)}
                    >
                      <ClipboardCheck className="size-4" />
                    </Button>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title="Rellenar cebo"
                      onClick={() => onRefill({ deviceId: device._id })}
                    >
                      <Droplet className="size-4" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="px-4 py-10 text-center text-sm text-muted-foreground"
                >
                  No hay trampas que coincidan con este filtro.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <Dialog open={thresholdsOpen} onOpenChange={setThresholdsOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Umbrales de acción</DialogTitle>
            <DialogDescription>
              Cuando una lectura supera el límite de la trampa, Vigía marca el
              dispositivo como crítico y abre la incidencia automáticamente.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-3 sm:grid-cols-2">
            {PESTS.map((pest) => (
              <div key={pest} className="flex flex-col gap-1.5">
                <Label htmlFor={`limit-${pest}`} className="text-xs">
                  {pest}
                </Label>
                <Input
                  id={`limit-${pest}`}
                  type="number"
                  min={1}
                  value={limits[pest] ?? ""}
                  onChange={(e) =>
                    setLimits({ ...limits, [pest]: e.target.value })
                  }
                />
              </div>
            ))}
          </div>
          <DialogFooter>
            <Button
              onClick={async () => {
                for (const pest of PESTS) {
                  const limit = Number(limits[pest]) || 0;
                  if (limit > 0) await onSetThreshold({ pest, limit });
                }
                setThresholdsOpen(false);
              }}
            >
              Guardar umbrales
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={installOpen} onOpenChange={setInstallOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Instalar trampa</DialogTitle>
            <DialogDescription>
              Vincula un dispositivo nuevo al sitio indicado por el técnico.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={install} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="device-site">Sitio</Label>
              <Select value={installSiteId} onValueChange={setInstallSite}>
                <SelectTrigger id="device-site">
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
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="device-code">Código</Label>
                <Input
                  id="device-code"
                  value={installCode}
                  onChange={(e) => setInstallCode(e.target.value)}
                  placeholder="R-04"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="device-kind">Tipo</Label>
                <Select
                  value={installKind}
                  onValueChange={(value) => setInstallKind(value as DeviceKind)}
                >
                  <SelectTrigger id="device-kind">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {DEVICE_KINDS.map((kind) => (
                      <SelectItem key={kind} value={kind}>
                        {DEVICE_KIND_LABEL[kind]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="device-pest">Plaga objetivo</Label>
              <Select value={installPest} onValueChange={setInstallPest}>
                <SelectTrigger id="device-pest">
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
              <Button
                type="submit"
                disabled={installing || !installSiteId || !installCode.trim()}
              >
                {installing ? "Guardando…" : "Instalar"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog
        open={editing !== null}
        onOpenChange={(open) => !open && setEditing(null)}
      >
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Lectura de trampa</DialogTitle>
            <DialogDescription>
              {editing
                ? `${editing.code} · ${siteName(editing.siteId)}`
                : ""}
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={saveReading} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="reading-count">Capturas en la trampa</Label>
              <Input
                id="reading-count"
                type="number"
                min={0}
                value={count}
                onChange={(e) => setCount(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="reading-status">Estado tras la lectura</Label>
              <Select
                value={status}
                onValueChange={(value) => setStatus(value as DeviceStatus)}
              >
                <SelectTrigger id="reading-status">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(["ok", "alerta", "critico", "inactivo"] as const).map(
                    (item) => (
                      <SelectItem key={item} value={item}>
                        {DEVICE_STATUS_LABEL[item]}
                      </SelectItem>
                    ),
                  )}
                </SelectContent>
              </Select>
            </div>
            <DialogFooter>
              <Button type="submit">Guardar lectura</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
