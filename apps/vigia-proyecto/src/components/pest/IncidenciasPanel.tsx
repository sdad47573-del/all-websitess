import { useMemo, useState } from "react";

import type { Doc, Id } from "@/convex/_generated/dataModel";
import type { IncidentStatus } from "@/convex/schema";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Plus, Siren } from "lucide-react";
import {
  INCIDENT_STATUS_CLASS,
  INCIDENT_STATUS_LABEL,
  SEVERITY_CLASS,
  SEVERITY_LABEL,
  formatCountdown,
  formatDateTime,
} from "@/components/pest/domain";

const FILTERS = ["todas", "abierta", "en_curso", "resuelta"] as const;
type Filter = (typeof FILTERS)[number];

export function IncidenciasPanel({
  sites,
  incidents,
  onNew,
  onUpdate,
}: {
  sites: Doc<"sites">[];
  incidents: Doc<"incidents">[];
  onNew: (siteId?: Id<"sites">) => void;
  onUpdate: (args: {
    incidentId: Id<"incidents">;
    status: IncidentStatus;
    action?: string;
  }) => Promise<unknown>;
}) {
  const [filter, setFilter] = useState<Filter>("todas");
  const [draft, setDraft] = useState<Record<string, string>>({});

  const siteName = (siteId: Id<"sites">) =>
    sites.find((s) => s._id === siteId)?.name ?? "Sitio eliminado";

  const filtered = useMemo(
    () =>
      incidents
        .filter((i) => (filter === "todas" ? true : i.status === filter))
        .sort((a, b) => {
          const rank: Record<string, number> = {
            abierta: 0,
            en_curso: 1,
            resuelta: 2,
          };
          if (rank[a.status] !== rank[b.status]) return rank[a.status] - rank[b.status];
          return b.reportedAt - a.reportedAt;
        }),
    [incidents, filter],
  );

  const counts = {
    abierta: incidents.filter((i) => i.status === "abierta").length,
    en_curso: incidents.filter((i) => i.status === "en_curso").length,
    resuelta: incidents.filter((i) => i.status === "resuelta").length,
  };

  const addAction = async (incident: Doc<"incidents">) => {
    const text = (draft[incident._id] ?? "").trim();
    if (!text) return;
    await onUpdate({
      incidentId: incident._id,
      status: incident.status === "abierta" ? "en_curso" : incident.status,
      action: text,
    });
    setDraft({ ...draft, [incident._id]: "" });
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold tracking-tight">
            Incidencias de plaga
          </h2>
          <p className="text-sm text-muted-foreground">
            {counts.abierta} abiertas · {counts.en_curso} en curso ·{" "}
            {counts.resuelta} resueltas
          </p>
        </div>
        <Button type="button" className="gap-2" onClick={() => onNew()}>
          <Plus className="size-4" />
          Nueva incidencia
        </Button>
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
            {item === "todas" ? "Todas" : INCIDENT_STATUS_LABEL[item]}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((incident) => (
          <article
            key={incident._id}
            className="rounded-xl border border-border/70 bg-card p-5"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-base font-semibold tracking-tight">
                  {incident.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  {siteName(incident.siteId)} · <i>{incident.pest}</i> ·
                  reportada {formatDateTime(incident.reportedAt)}
                </p>
              </div>
              <div className="flex shrink-0 flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className={SEVERITY_CLASS[incident.severity]}
                >
                  Severidad {SEVERITY_LABEL[incident.severity]}
                </Badge>
                <Badge
                  variant="outline"
                  className={INCIDENT_STATUS_CLASS[incident.status]}
                >
                  {INCIDENT_STATUS_LABEL[incident.status]}
                </Badge>
              </div>
            </div>

            {incident.resolvedAt && (
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-md bg-primary/10 px-2.5 py-1 text-xs text-primary">
                <Check className="size-3.5" />
                Resuelta hace {formatCountdown(incident.resolvedAt).toLowerCase()}
              </p>
            )}

            <div className="mt-4 rounded-lg border border-border/60 bg-muted/40 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Acciones aplicadas
              </p>
              {incident.actions && incident.actions.length > 0 ? (
                <ul className="mt-2 flex flex-col gap-1.5">
                  {incident.actions.map((action, index) => (
                    <li
                      key={`${incident._id}-${index}`}
                      className="flex items-start gap-2 text-sm"
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                      {action}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">
                  Sin acciones registradas todavía.
                </p>
              )}

              {incident.status !== "resuelta" && (
                <form
                  className="mt-3 flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    addAction(incident);
                  }}
                >
                  <Input
                    value={draft[incident._id] ?? ""}
                    onChange={(e) =>
                      setDraft({ ...draft, [incident._id]: e.target.value })
                    }
                    placeholder="Anotar acción (ej. sellado de zócalos)"
                    className="h-9"
                  />
                  <Button type="submit" size="sm" variant="secondary">
                    Añadir
                  </Button>
                </form>
              )}
            </div>

            {incident.status !== "resuelta" && (
              <div className="mt-4 flex flex-wrap gap-2">
                {incident.status === "abierta" && (
                  <Button
                    type="button"
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      onUpdate({
                        incidentId: incident._id,
                        status: "en_curso",
                      })
                    }
                  >
                    Tomar incidencia
                  </Button>
                )}
                <Button
                  type="button"
                  size="sm"
                  onClick={() =>
                    onUpdate({
                      incidentId: incident._id,
                      status: "resuelta",
                    })
                  }
                >
                  Marcar resuelta
                </Button>
              </div>
            )}
          </article>
        ))}

        {filtered.length === 0 && (
          <div className="rounded-xl border border-dashed border-border p-10 text-center">
            <Siren className="mx-auto size-6 text-muted-foreground" />
            <p className="mt-3 text-sm font-medium">Sin incidencias</p>
            <p className="mt-1 text-sm text-muted-foreground">
              No hay incidencias con este estado. Puedes registrar una nueva
              cuando el cliente avise de una plaga.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
