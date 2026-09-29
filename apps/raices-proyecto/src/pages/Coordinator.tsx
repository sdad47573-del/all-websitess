import { api } from "@/convex/_generated/api";
import { formatPrice, scaleLabel } from "@/lib/coop";
import { useMutationAction } from "@/hooks/use-mutation-action";
import { useMutation, useQuery } from "convex/react";
import {
  ArrowLeft,
  Scale,
  Sprout,
  Truck,
  Users,
  Wheat,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

function Stat({
  value,
  label,
  sub,
}: {
  value: string;
  label: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5">
      <p className="text-3xl font-semibold tracking-tight text-primary">
        {value}
      </p>
      <p className="mt-1 text-sm font-medium">{label}</p>
      {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
    </div>
  );
}

export default function Coordinator() {
  const seed = useMutation(api.coop.seedCatalog);
  const logHarvest = useMutation(api.coop.logHarvest);
  const overview = useQuery(api.coop.coordinatorOverview);
  const catalog = useQuery(api.coop.catalog);

  const [farmerId, setFarmerId] = useState("");
  const [produceId, setProduceId] = useState("");
  const [kg, setKg] = useState("");
  const run = useMutationAction();

  useEffect(() => {
    seed();
  }, [seed]);

  useEffect(() => {
    if (!catalog || farmerId) return;
    if (catalog.farmers[0]) setFarmerId(catalog.farmers[0]._id);
  }, [catalog, farmerId]);

  const handleLog = async () => {
    const parsed = Number(kg);
    if (!farmerId || !produceId || !parsed || parsed <= 0) return;
    const ok = await run(
      "No se pudo anotar",
      () =>
        logHarvest({
          farmerId: farmerId as never,
          produceId: produceId as never,
          kg: parsed,
        }),
      { success: "Entrada anotada." },
    );
    if (ok) setKg("");
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-terracotta text-primary-foreground">
              <Wheat className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight">
                Coordinacion
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Vista de la cooperativa
              </span>
            </span>
          </div>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="size-4" />
            Volver
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          Esta semana en la cooperativa
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Cuantos miembros hay, que hay que preparar y cuanto han entrado las
          fincas. Esta vista es de coordinacion: los miembros ven su panel.
        </p>

        {/* ---- stats ---- */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <Stat
            value={String(overview?.activeMembers ?? 0)}
            label="Miembros activos"
            sub={`${overview?.members ?? 0} en total`}
          />
          <Stat
            value={formatPrice(overview?.weeklyCents ?? 0)}
            label="Facturado por semana"
            sub="tras aplicar la tarifa"
          />
          <Stat
            value={String(overview?.solidarityMembers ?? 0)}
            label="En tarifa solidaria"
            sub={`${
              (overview?.scaleCounts?.[50] ?? 0) +
              (overview?.scaleCounts?.[75] ?? 0)
            } por debajo del coste`}
          />
          <Stat
            value={formatPrice(overview?.capitalTotalCents ?? 0)}
            label="Capital social"
            sub="aportado por socios"
          />
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {/* ---- what to pack ---- */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold">
              <Truck className="size-5 text-primary" />
              Que hay que preparar
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {overview?.upcomingBoxes ?? 0} cajas por preparar. Estas son las
              piezas que mas se repiten, para que las fincas sepan cuanto
              necesitan.
            </p>
            <div className="mt-5 max-h-80 space-y-1.5 overflow-y-auto pr-1">
              {(overview?.demand ?? []).map((d) => {
                const max = overview?.demand[0]?.qty ?? 1;
                return (
                  <div key={d.name} className="flex items-center gap-3">
                    <span className="w-40 shrink-0 truncate text-sm">
                      {d.name}
                    </span>
                    <span className="h-2 flex-1 overflow-hidden rounded-full bg-muted">
                      <span
                        className="block h-full rounded-full bg-primary"
                        style={{ width: `${(d.qty / max) * 100}%` }}
                      />
                    </span>
                    <span className="w-8 shrink-0 text-right text-sm font-medium">
                      {d.qty}
                    </span>
                  </div>
                );
              })}
              {(overview?.demand.length ?? 0) === 0 && (
                <p className="text-sm text-muted-foreground">
                  Todavia no hay cajas activas que preparar.
                </p>
              )}
            </div>
          </section>

          {/* ---- harvest intake ---- */}
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold">
              <Sprout className="size-5 text-primary" />
              Entrada de cosecha
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Lo que va entrando de cada finca esta semana.
            </p>

            <div className="mt-5 space-y-3">
              <div className="grid gap-2 sm:grid-cols-3">
                <select
                  value={farmerId}
                  onChange={(e) => setFarmerId(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {(catalog?.farmers ?? []).map((f) => (
                    <option key={f._id} value={f._id}>
                      {f.name}
                    </option>
                  ))}
                </select>
                <select
                  value={produceId}
                  onChange={(e) => setProduceId(e.target.value)}
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <option value="">Elige cultivo</option>
                  {(catalog?.allProduce ?? []).map((p) => (
                    <option key={p._id} value={p._id}>
                      {p.name}
                    </option>
                  ))}
                </select>
                <input
                  value={kg}
                  onChange={(e) => setKg(e.target.value)}
                  inputMode="decimal"
                  placeholder="Kilos"
                  className="rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <button
                type="button"
                onClick={handleLog}
                disabled={!farmerId || !produceId || !kg}
                className="w-full rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              >
                Anotar entrada
              </button>
            </div>

            <div className="mt-5 space-y-2">
              {(overview?.harvest ?? []).slice(0, 8).map((h) => (
                <div
                  key={h._id}
                  className="flex items-center justify-between gap-3 rounded-lg border border-border p-3"
                >
                  <span className="min-w-0">
                    <span className="block text-sm font-medium">
                      {h.produce?.emoji} {h.produce?.name}
                    </span>
                    <span className="block text-xs text-muted-foreground">
                      {h.farmer?.name}
                    </span>
                  </span>
                  <span className="shrink-0 text-sm font-medium">
                    {h.kg} kg
                  </span>
                </div>
              ))}
              {(overview?.harvest.length ?? 0) === 0 && (
                <p className="text-sm text-muted-foreground">
                  Aun no se ha anotado ninguna cosecha.
                </p>
              )}
            </div>
          </section>
        </div>

        {/* ---- plan mix + money flow ---- */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold">
              <Users className="size-5 text-primary" />
              Reparto de miembros
            </h2>
            <div className="mt-5 space-y-3">
              {(overview?.planMix ?? []).map((p) => (
                <div key={p.name}>
                  <div className="flex justify-between text-sm">
                    <span>{p.name}</span>
                    <span className="text-muted-foreground">
                      {p.members}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{
                        width: `${
                          overview && overview.activeMembers > 0
                            ? (p.members / overview.activeMembers) * 100
                            : 0
                        }%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-border pt-5">
              <p className="text-xs font-medium text-muted-foreground">
                POR TARIFA SOLIDARIA
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {Object.entries(overview?.scaleCounts ?? {}).map(([pct, n]) => (
                  <span
                    key={pct}
                    className="rounded-full bg-secondary px-2.5 py-1 text-xs"
                  >
                    {scaleLabel(Number(pct))}: {n}
                  </span>
                ))}
                {Object.keys(overview?.scaleCounts ?? {}).length === 0 && (
                  <span className="text-sm text-muted-foreground">Sin datos.</span>
                )}
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-border bg-card p-6">
            <h2 className="flex items-center gap-2.5 text-lg font-semibold">
              <Scale className="size-5 text-primary" />
              Donde va cada euro
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              El mismo reparto que se publica en la web. Las cuentas se votan en
              la asamblea.
            </p>
            <div className="mt-5 space-y-4">
              {(catalog?.costBreakdown ?? []).map((c) => (
                <div key={c._id}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{c.label}</span>
                    <span className="text-muted-foreground">
                      {c.sharePercent}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${
                        c.farmerPayout ? "bg-primary" : "bg-terracotta"
                      }`}
                      style={{ width: `${c.sharePercent}%` }}
                    />
                  </div>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
