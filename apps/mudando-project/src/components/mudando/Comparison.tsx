import { Reveal, SectionTag } from "@/components/mudando/shared";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { formatEuros } from "@/lib/quote";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronDown,
  Map,
  MessageCircle,
  Scale,
  Truck,
  Users,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";

type ColKey = "mudando" | "marketplace" | "nacional" | "economica";

type CellValue = boolean | string;

const COLS: {
  key: ColKey;
  name: string;
  sub: string;
  icon: typeof Truck;
  us?: boolean;
}[] = [
  {
    key: "mudando",
    name: "Mudando",
    sub: "Precio cerrado",
    icon: Truck,
    us: true,
  },
  {
    key: "marketplace",
    name: "Marketplaces de mudanzas",
    sub: "Te venden tu contacto",
    icon: Users,
  },
  {
    key: "nacional",
    name: "Grandes cadenas nacionales",
    sub: "Oficina comercial",
    icon: Building2,
  },
  {
    key: "economica",
    name: "Mudanzas low cost",
    sub: "El precio más bajo",
    icon: Map,
  },
];

const ROWS: { feature: string; values: Record<ColKey, CellValue> }[] = [
  {
    feature: "Presupuesto cerrado por escrito",
    values: {
      mudando: true,
      marketplace: false,
      nacional: true,
      economica: false,
    },
  },
  {
    feature: "Precio final real",
    values: {
      mudando: "Firmado antes de cargar",
      marketplace: '"Desde…" que luego sube',
      nacional: "Visita comercial previa",
      economica: "Se recalcula el día de la carga",
    },
  },
  {
    feature: "Equipo propio en nómina",
    values: {
      mudando: true,
      marketplace: "Subcontrata anónima",
      nacional: "Mixto por ciudad",
      economica: false,
    },
  },
  {
    feature: "Embalaje y materiales",
    values: {
      mudando: "Opcional en 1 clic",
      marketplace: "Cotización aparte",
      nacional: "Coste elevado",
      economica: "Trae lo mínimo",
    },
  },
  {
    feature: "Desmontaje y montaje de muebles",
    values: {
      mudando: true,
      marketplace: "Negociado por teléfono",
      nacional: "Servicio extra",
      economica: false,
    },
  },
  {
    feature: "Seguro y daños",
    values: {
      mudando: "Cero daño o devolución íntegra",
      marketplace: '"Habla con tu transportista"',
      nacional: "Franquicia elevada",
      economica: "Seguro básico legal",
    },
  },
  {
    feature: "Ventana horaria garantizada",
    values: {
      mudando: "±30 minutos",
      marketplace: false,
      nacional: "Mañana o tarde",
      economica: '"Le llamamos el mismo día"',
    },
  },
  {
    feature: "Seguimiento online de tu mudanza",
    values: {
      mudando: "Panel de cliente",
      marketplace: false,
      nacional: false,
      economica: false,
    },
  },
  {
    feature: "Respuesta al pedir presupuesto",
    values: {
      mudando: "Inmediata (calculadora)",
      marketplace: "3–5 llamadas comerciales",
      nacional: "1–3 días",
      economica: "A veces ninguna",
    },
  },
];

const SUMMARY = [
  {
    icon: Scale,
    stat: "+38 %",
    text: "de clientes que nos comparan terminan reservando con nosotros",
  },
  {
    icon: Map,
    stat: "4,9/5",
    text: "de media en más de 1.100 reseñas verificadas este año",
  },
];

function Cell({ value, us }: { value: CellValue; us: boolean }) {
  if (value === true) {
    return (
      <span
        className={`inline-flex size-7 items-center justify-center rounded-full ${
          us ? "bg-leaf/20 text-leaf" : "bg-ink/5 text-ink/60"
        }`}
      >
        <Check className="size-4" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex size-7 items-center justify-center rounded-full bg-destructive/10 text-destructive/70">
        <X className="size-4" />
      </span>
    );
  }
  return (
    <span
      className={`text-xs leading-snug sm:text-sm ${
        us ? "font-semibold text-ink" : "text-muted-foreground"
      }`}
    >
      {value}
    </span>
  );
}

/** Coste real estimado de la competencia vs. Mudando para el mismo ejemplo. */
function RealCostComparator() {
  const [volumen, setVolumen] = useState(25);
  const [km, setKm] = useState(25);
  const [pisoInput, setPisoInput] = useState<string>("2");
  const piso = Number(pisoInput) || 1;

  // Coste real típico (precio de gancho + extras que aparecen después)
  const comparacion = useMemo(() => {
    const mudando = 260 + km * 1.2 + Math.max(0, piso - 1) * 18 + volumen * 6;
    const ganchoMarketplace = 140 + km * 0.8 + volumen * 4.5;
    const marketplace =
      ganchoMarketplace + volumen * 2.4 + (piso > 1 ? 70 : 0) + 60 + 45;
    const nacional =
      380 + km * 1.5 + Math.max(0, piso - 1) * 25 + volumen * 7.5;
    const economica = 170 + km * 0.7 + volumen * 4;
    const extraEconomica = economica + volumen * 3 + (piso > 1 ? 80 : 0) + 120;
    return {
      mudando: Math.round(mudando / 5) * 5,
      marketplace: Math.round(marketplace / 5) * 5,
      nacional: Math.round(nacional / 5) * 5,
      economica: Math.round(extraEconomica / 5) * 5,
      gancho: Math.round(ganchoMarketplace / 5) * 5,
    };
  }, [volumen, km, piso]);

  const rows: {
    name: string;
    final: number;
    hook?: number;
    us?: boolean;
    note: string;
  }[] = [
    {
      name: "Mudando",
      final: comparacion.mudando,
      us: true,
      note: "Es el precio final: se firma antes de cargar",
    },
    {
      name: "Marketplace de mudanzas",
      final: comparacion.marketplace,
      hook: comparacion.gancho,
      note: "Gancho de venta… + extras de plantas, muebles y materiales",
    },
    {
      name: "Gran cadena nacional",
      final: comparacion.nacional,
      note: "Precio serio pero elevado: oficina comercial y estructura",
    },
    {
      name: "Mudanza low cost",
      final: comparacion.economica,
      hook: comparacion.economica,
      note: "El presupuesto más bajo… con sorpresas al llegar el camión",
    },
  ];
  const max = Math.max(...rows.map((r) => r.final));

  return (
    <Reveal delay={0.1} className="mt-10">
      <div className="rounded-2xl border border-ink/10 bg-card p-6 shadow-sm sm:p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h3 className="font-display text-xl font-bold text-ink">
              ¿Cuánto cuesta de verdad la mudanza «barata»?
            </h3>
            <p className="mt-1 max-w-xl text-sm text-muted-foreground">
              Mueve los controles y compara el precio de gancho con el coste
              final típico que acaba pagando cada opción para el mismo ejemplo.
            </p>
          </div>
          <div className="flex gap-3">
            <label className="text-xs font-medium text-muted-foreground">
              Volumen:{" "}
              <span className="font-semibold text-ink">{volumen} m³</span>
              <Slider
                value={[volumen]}
                onValueChange={(v) => setVolumen(v[0] ?? 25)}
                min={10}
                max={80}
                step={5}
                className="mt-2 w-36"
              />
            </label>
            <label className="text-xs font-medium text-muted-foreground">
              Distancia: <span className="font-semibold text-ink">{km} km</span>
              <Slider
                value={[km]}
                onValueChange={(v) => setKm(v[0] ?? 25)}
                min={5}
                max={600}
                step={5}
                className="mt-2 w-36"
              />
            </label>
            <label className="text-xs font-medium text-muted-foreground">
              Planta
              <Input
                type="number"
                min={1}
                max={10}
                value={pisoInput}
                onChange={(e) => setPisoInput(e.target.value)}
                className="mt-2 h-9 w-16"
              />
            </label>
          </div>
        </div>

        <div className="mt-6 space-y-4">
          {rows.map((r) => (
            <div key={r.name}>
              <div className="flex items-baseline justify-between gap-3 text-sm">
                <span
                  className={`font-semibold ${r.us ? "text-coral-deep" : "text-ink/80"}`}
                >
                  {r.name}
                  {r.hook !== undefined && (
                    <span className="ml-2 text-xs font-medium text-muted-foreground line-through">
                      parecía {formatEuros(r.hook)}
                    </span>
                  )}
                </span>
                <span
                  className={`font-display text-base font-bold ${r.us ? "text-coral-deep" : "text-ink"}`}
                >
                  {formatEuros(r.final)}
                </span>
              </div>
              <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-ink/10">
                <div
                  className={`h-full rounded-full transition-all duration-500 ${
                    r.us ? "bg-coral" : "bg-ink/35"
                  }`}
                  style={{ width: `${Math.round((r.final / max) * 100)}%` }}
                />
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{r.note}</p>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}

export function Comparison() {
  const [expanded, setExpanded] = useState(false);
  const visibleRows = expanded ? ROWS : ROWS.slice(0, 4);

  return (
    <section id="comparativa" className="relative bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={Scale}>Nosotros vs. el resto</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Te enseñamos exactamente en qué ganamos
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Comparamos con los tres modelos con los que te vas a encontrar al
            buscar mudanza. Tú decides con qué te quedas.
          </p>
        </Reveal>

        {/* Tarjetas resumen */}
        <div className="mx-auto mt-10 grid max-w-3xl gap-4 sm:grid-cols-2">
          {SUMMARY.map(({ icon: Icon, stat, text }, i) => (
            <Reveal key={stat} delay={i * 0.08}>
              <div className="flex items-center gap-4 rounded-2xl border border-coral/25 bg-card p-5 shadow-sm">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-coral/15 text-coral-deep">
                  <Icon className="size-6" />
                </span>
                <div>
                  <p className="font-display text-2xl font-extrabold text-ink">
                    {stat}
                  </p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Tabla comparativa */}
        <Reveal delay={0.1} className="mt-10">
          <div className="overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-md shadow-ink/5">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] border-collapse text-left">
                <thead>
                  <tr className="border-b border-ink/10">
                    <th className="w-1/3 px-5 py-4 text-sm font-medium text-muted-foreground">
                      Qué incluye
                    </th>
                    {COLS.map((col) => (
                      <th
                        key={col.key}
                        className={`w-[16.5%] px-3 py-4 text-center ${
                          col.us ? "bg-coral/10" : ""
                        }`}
                      >
                        <span
                          className={`flex items-center justify-center gap-1.5 font-display text-sm font-bold ${
                            col.us ? "text-ink" : "text-ink/60"
                          }`}
                        >
                          {col.us && (
                            <Truck className="size-4 text-coral-deep" />
                          )}
                          <span className="text-left">{col.name}</span>
                        </span>
                        <span className="mt-0.5 block text-left text-[11px] font-medium text-muted-foreground">
                          {col.sub}
                        </span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {visibleRows.map(({ feature, values }) => (
                    <tr
                      key={feature}
                      className="border-b border-ink/5 transition-colors last:border-0 hover:bg-sand/40"
                    >
                      <td className="px-5 py-3.5 text-sm font-medium text-ink/90">
                        {feature}
                      </td>
                      {COLS.map((col) => (
                        <td
                          key={col.key}
                          className={`px-3 py-3.5 text-center ${
                            col.us ? "bg-coral/[0.06]" : ""
                          }`}
                        >
                          <Cell value={values[col.key]} us={!!col.us} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="border-t border-ink/10 px-5 py-3 text-center">
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="inline-flex cursor-pointer items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-semibold text-coral-deep transition-colors hover:bg-coral/10"
              >
                {expanded
                  ? "Ver menos"
                  : `Ver las ${ROWS.length - visibleRows.length} diferencias más`}
                <ChevronDown
                  className={`size-4 transition-transform ${expanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>
          </div>
        </Reveal>

        <RealCostComparator />

        {/* Reto directo: demuestra tu presupuesto de la competencia */}
        <Reveal delay={0.15} className="mt-6">
          <div className="overflow-hidden rounded-2xl border border-ink bg-ink shadow-xl shadow-ink/20">
            <div className="grid gap-6 px-6 py-8 sm:px-10 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <p className="text-xs font-bold uppercase tracking-wider text-coral">
                  Reta a tu presupuesto
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold text-cream">
                  ¿Otra empresa te ha presupuestado más caro?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cream/75">
                  Enséñanos el presupuesto y lo batimos con un precio cerrado
                  comparable. Si lo igualamos, te añadimos el embalaje sin
                  coste. Esa es nuestra guerra contra las sorpresas.
                </p>
              </div>
              <div className="lg:col-span-2">
                <div className="rounded-xl bg-cream/10 p-4 backdrop-blur-sm">
                  <p className="text-sm font-semibold text-cream">
                    1. Escanea o haz una foto del presupuesto
                  </p>
                  <p className="mt-1 text-xs text-cream/70">
                    2. Envíanoslo por WhatsApp · 3. Recibe el nuestro en menos
                    de 1 hora laborable.
                  </p>
                  <a
                    href="https://wa.me/34910000000?text=Hola%20Mudando%2C%20os%20env%C3%ADo%20un%20presupuesto%20de%20la%20competencia%20para%20que%20lo%20bat%C3%A1is"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-bold text-white transition-transform hover:scale-[1.02]"
                  >
                    <MessageCircle className="size-4" />
                    Batir mi presupuesto
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="mt-8 text-center">
          <Button
            asChild
            size="lg"
            className="h-12 px-7 text-base font-semibold"
          >
            <a href="#calculadora">
              Calcula tu precio cerrado
              <ArrowRight className="size-5" />
            </a>
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
