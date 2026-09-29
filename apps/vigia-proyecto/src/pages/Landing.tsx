import { motion } from "framer-motion";
import {
  ArrowRight,
  Beaker,
  Boxes,
  Bug,
  Building2,
  ChartNoAxesColumn,
  Check,
  ClipboardCheck,
  FileText,
  Gauge,
  Handshake,
  Link2,
  Navigation,
  Radar,
  Receipt,
  ShieldCheck,
  Siren,
  Sparkles,
  Star,
  Waves,
} from "lucide-react";
import { Link } from "react-router";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const STATS = [
  { value: "1.240", label: "trampas monitorizadas" },
  { value: "96 %", label: "incidencias resueltas en 24 h" },
  { value: "2 días", label: "de factura ahorrados por visita" },
  { value: "0", label: "informes en papel" },
];

const PILLARS = [
  {
    icon: Navigation,
    title: "Rutas que se optimizan solas",
    body: "Ordena las paradas por cercanía real, calcula kilómetros y hora estimada de llegada, y reparte la carga entre técnicos.",
  },
  {
    icon: ClipboardCheck,
    title: "Órdenes de trabajo con cumplimiento",
    body: "Producto aplicado, dosis, número de registro y firma del cliente quedan guardados en la visita, listos para auditoría.",
  },
  {
    icon: Receipt,
    title: "Facturación al cerrar el trabajo",
    body: "La factura se emite en el mismo clic que cierras la visita. Nada de colas de administración ni cobros que se olvidan.",
  },
  {
    icon: Radar,
    title: "Trampas con histórico y tendencia",
    body: "Cada lectura queda guardada: verás la curva de capturas de las últimas semanas y sabrás cuándo reponer cebo.",
  },
  {
    icon: Link2,
    title: "Portal de cliente en un enlace",
    body: "Historial de visitas, trampas, facturas y valoración. Sin instalar nada y sin exposing datos de tu cuenta.",
  },
  {
    icon: Star,
    title: "Reputación que se gestiona",
    body: "Pide valoración tras cada visita desde el portal y responde a las reseñas para construir tu presencia local.",
  },
  {
    icon: FileText,
    title: "Informes que se entregan en el acto",
    body: "Imprime o guarda en PDF el informe de servicio con planilla, trampas, producto aplicado y firma. El cliente se lleva la prueba del trabajo.",
  },
  {
    icon: Gauge,
    title: "Umbrales de acción automáticos",
    body: "Define cuántas capturas toleras por plaga. Al superarse, la trampa pasa a crítico y se abre la incidencia sin que nadie la publique.",
  },
  {
    icon: Boxes,
    title: "Almacén que se descuenta solo",
    body: "Registra el material con su número de registro, controla mínimos y descuenta el consumo al cerrar cada visita.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Rendimiento del equipo",
    body: "Facturación, ticket medio y cumplimiento de ruta por técnico, con exportación a CSV para tu equipo.",
  },
  {
    icon: Handshake,
    title: "El cliente acepta y paga solo",
    body: "Comparte el enlace de la propuesta y el cliente la acepta o la rechaza. En el portal registra el pago de sus facturas sin llamar a la oficina.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Da de alta clientes y contratos",
    body: "Ficha, sector, riesgo, cadencia de visita y tarifa mensual: el resto se deriva solo.",
  },
  {
    step: "02",
    title: "Instala trampas y abre rutas",
    body: "Cada trampa se asocia a un sitio y a una plaga. El calendario de visitas se genera con un clic.",
  },
  {
    step: "03",
    title: "Cierra, factura y cobra",
    body: "Al registrar el tratamiento, la factura sale al instante y la próxima visita ya está programada.",
  },
];

const COMPARISON = [
  {
    feature: "Cadencias por contrato",
    vigia: true,
    generic: "Parcial",
  },
  { feature: "Registro de producto y nº de registro", vigia: true, generic: false },
  { feature: "Facturación automática al cerrar visita", vigia: true, generic: false },
  { feature: "Monitorización de trampas y cebo", vigia: true, generic: false },
  { feature: "Histórico y tendencia de capturas", vigia: true, generic: false },
  { feature: "Umbrales de acción con incidencia automática", vigia: true, generic: false },
  { feature: "Inventario y consumo de material", vigia: true, generic: false },
  { feature: "Rendimiento por técnico", vigia: true, generic: "Añadir extra" },
  { feature: "Informe de servicio imprimible", vigia: true, generic: "Plantillas Word" },
  { feature: "Planilla de inspección IPM", vigia: true, generic: false },
  { feature: "Control de vencimientos del equipo", vigia: true, generic: false },
  { feature: "Presupuestos que se aceptan en un clic", vigia: true, generic: "Plantilla" },
  { feature: "QR verificable en el certificado", vigia: true, generic: false },
  { feature: "Aceptación de presupuesto por el cliente", vigia: true, generic: "Manual" },
  { feature: "Pago de facturas desde el portal", vigia: true, generic: "Manual" },
  { feature: "Portal de cliente con informes", vigia: true, generic: "Extra" },
  { feature: "Petición y gestión de valoraciones", vigia: true, generic: "Extra" },
  { feature: "CRM de leads integrado", vigia: true, generic: "Añadir extra" },
  { feature: "Curva de aprendizaje para el técnico", vigia: "1 tarde", generic: "Semanas" },
];

function ComparisonMark({ value }: { value: boolean | string }) {
  if (value === true) {
    return (
      <span className="inline-flex items-center gap-1.5 text-primary">
        <Check className="size-4" />
        Incluido
      </span>
    );
  }
  if (value === false) {
    return <span className="text-muted-foreground">No</span>;
  }
  return <span className="text-muted-foreground">{value}</span>;
}

const SECTORS = [
  { icon: Waves, name: "Restaurantes", note: "Cockroaches y roedores en cocina" },
  { icon: Building2, name: "Almacenes", note: "Polillas, roedores y trampas de luz" },
  { icon: Sparkles, name: "Hoteles", note: "Chinches y ratones por habitación" },
  { icon: ShieldCheck, name: "Viviendas", note: "Cebo antibanana y control perimetral" },
  { icon: ClipboardCheck, name: "Oficinas", note: "Zonas de descanso y despensa" },
  { icon: Beaker, name: "Industria", note: "Muelles y naves de gran volumen" },
];

const TESTIMONIAL = {
  quote:
    "Antes llevaba un Excel y dos libretas de campo por técnico. Ahora sé qué trampa está en alerta antes de que el cliente llame.",
  name: "Marta Quintela",
  role: "Responsable de operaciones, Plagaspyr",
};

function PanelPreview() {
  const bars = [
    { label: "Rattus norvegicus", value: 88, color: "bg-chart-1" },
    { label: "Blattella germanica", value: 64, color: "bg-chart-2" },
    { label: "Plodia interpuncta", value: 42, color: "bg-chart-3" },
    { label: "Mus musculus", value: 26, color: "bg-chart-5" },
  ];
  const kpis = [
    { label: "Trampas en alerta", value: "5" },
    { label: "Incidencias abiertas", value: "4" },
    { label: "Cebo medio", value: "68 %" },
  ];

  return (
    <div className="rounded-2xl border border-sidebar-border bg-sidebar/95 p-4 shadow-2xl shadow-black/40 sm:p-5">
      <div className="flex items-center gap-1.5">
        <span className="size-2.5 rounded-full bg-destructive/70" />
        <span className="size-2.5 rounded-full bg-chart-3/70" />
        <span className="size-2.5 rounded-full bg-sidebar-primary/70" />
        <span className="ml-2 text-[11px] uppercase tracking-[0.18em] text-sidebar-foreground/45">
          Panel de control
        </span>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 px-3 py-2.5"
          >
            <p className="text-[10px] uppercase tracking-wider text-sidebar-foreground/50">
              {kpi.label}
            </p>
            <p className="mt-1 text-lg font-semibold text-sidebar-foreground">
              {kpi.value}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 rounded-lg border border-sidebar-border bg-sidebar-accent/25 p-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-sidebar-foreground/55">
          Capturas por plaga
        </p>
        <div className="mt-3 flex flex-col gap-2.5">
          {bars.map((bar) => (
            <div key={bar.label} className="flex flex-col gap-1">
              <div className="flex items-center justify-between text-[11px] text-sidebar-foreground/70">
                <span>{bar.label}</span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-sidebar-foreground/10">
                <div
                  className={`h-full rounded-full ${bar.color}`}
                  style={{ width: `${bar.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-col gap-2">
        {[
          { code: "H-04", site: "Hotel Miramar", state: "Crítico", tone: "text-destructive" },
          { code: "R-02", site: "La Abuela", state: "En alerta", tone: "text-chart-3" },
          { code: "A-11", site: "Almacén Sur", state: "En alerta", tone: "text-chart-3" },
        ].map((row) => (
          <div
            key={row.code}
            className="flex items-center justify-between rounded-lg border border-sidebar-border px-3 py-2 text-[11px] text-sidebar-foreground/80"
          >
            <span className="font-medium">{row.code}</span>
            <span className="truncate px-2 text-sidebar-foreground/55">
              {row.site}
            </span>
            <span className={row.tone}>{row.state}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navegación */}
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3.5 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-5" />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold tracking-tight">Vigía</p>
              <p className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                Control de plagas
              </p>
            </div>
          </div>
          <nav className="ml-auto hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#pilares" className="transition-colors hover:text-foreground">
              Cómo funciona
            </a>
            <a href="#sectores" className="transition-colors hover:text-foreground">
              Sectores
            </a>
            <a href="#historias" className="transition-colors hover:text-foreground">
              Clientes
            </a>
          </nav>
          <div className="ml-auto flex items-center gap-2 md:ml-4">
            <Button asChild variant="ghost" size="sm">
              <Link to="/auth">Iniciar sesión</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/auth">
                Empezar
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-sidebar text-sidebar-foreground">
        <div className="grid-field absolute inset-0" />
        <div className="absolute -left-32 top-10 size-96 rounded-full bg-chart-2/20 blur-3xl" />
        <div className="absolute -right-20 bottom-0 size-80 rounded-full bg-chart-1/25 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <Badge className="border-sidebar-primary/40 bg-sidebar-primary/15 text-sidebar-primary">
              <Bug className="size-3.5" />
              Routas de plaga bajo control
            </Badge>

            <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
              Detecta la plaga
              <br />
              <span className="text-sidebar-primary">antes</span> de que sea una
              queja.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-sidebar-foreground/75">
              Vigía organiza toda tu operación de control de plagas: contratos
              recurrentes, rutas por técnico, trampas con su lectura de cebo,
              registro de producto aplicado y factura emitida al cerrar la
              visita. Un solo panel para el campo y para la oficina.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="gap-2">
                <Link to="/auth">
                  Crear cuenta gratis
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2 border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground"
              >
                <Link to="/dashboard">Ver el panel</Link>
              </Button>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <dt className="text-2xl font-semibold tracking-tight text-sidebar-primary">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-sidebar-foreground/60">
                    {stat.label}
                  </dd>
                </div>
              ))}
            </dl>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <PanelPreview />
          </motion.div>
        </div>
      </section>

      {/* Pilares */}
      <section id="pilares" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Qué resuelve
          </p>            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              El trabajo de campo, sin trabajo administrativo
            </h2>
            <p className="mt-4 text-muted-foreground">
              Piezas que hoy viven en libretas, hojas de cálculo y llamadas
              perdidas, unificadas en un solo sistema.
            </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {PILLARS.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group rounded-xl border border-border/70 bg-card p-6 transition-colors hover:border-primary/50"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <pillar.icon className="size-5" />
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
                Puesta en marcha
              </p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                De la cartera al panel en una tarde
              </h2>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <Link to="/auth">
                Probar con datos de ejemplo
                <ArrowRight className="size-4" />
              </Link>
            </Button>
          </div>

          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {STEPS.map((item) => (
              <li key={item.step} className="relative">
                <span className="text-5xl font-semibold tracking-tight text-primary/20">
                  {item.step}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Comparativa */}
      <section className="border-y border-border/60 bg-muted/40">
        <div className="mx-auto max-w-5xl px-4 py-20 sm:px-6">
          <div className="max-w-2xl">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
              Frente al software genérico
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Lo que se pierde cuando usas una herramienta que no es de plagas
            </h2>
            <p className="mt-4 text-muted-foreground">
              Las plataformas de campo genéricas tratan cada visita como una cita.
              El control de plagas necesita contratos recurrentes, trampas,
              trazabilidad de producto y un informe que el cliente se lleva
              firmado.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-xl border border-border/70 bg-card">
            <table className="w-full text-sm">
              <thead className="bg-muted/60 text-left text-xs uppercase tracking-[0.1em] text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 font-medium">Capacidad</th>
                  <th className="px-4 py-3 font-medium">Vigía</th>
                  <th className="px-4 py-3 font-medium">Software genérico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60">
                {COMPARISON.map((row) => (
                  <tr key={row.feature}>
                    <td className="px-4 py-3 font-medium">{row.feature}</td>
                    <td className="px-4 py-3">
                      <ComparisonMark value={row.vigia} />
                    </td>
                    <td className="px-4 py-3">
                      <ComparisonMark value={row.generic} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Sectores */}
      <section id="sectores" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary">
            Sectores
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Cada sector tiene su plaga crítica
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SECTORS.map((sector) => (
            <div
              key={sector.name}
              className="flex items-center gap-4 rounded-xl border border-border/70 bg-card p-4 transition-colors hover:border-primary/50"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
                <sector.icon className="size-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold">{sector.name}</p>
                <p className="truncate text-xs text-muted-foreground">
                  {sector.note}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonio */}
      <section id="historias" className="bg-sidebar text-sidebar-foreground">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6">
          <Siren className="mx-auto size-7 text-sidebar-primary" />
          <blockquote className="mt-6 text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
            “{TESTIMONIAL.quote}”
          </blockquote>
          <p className="mt-6 text-sm text-sidebar-foreground/70">
            {TESTIMONIAL.name} · {TESTIMONIAL.role}
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border/70 bg-card px-6 py-14 text-center sm:px-12">
          <div className="absolute -right-16 -top-16 size-56 rounded-full bg-accent/25 blur-3xl" />
          <h2 className="relative text-3xl font-semibold tracking-tight sm:text-4xl">
            Empieza a controlar tu cartera esta semana
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">
            Crea tu cuenta, carga tus clientes y empieza a documentar trampas y
            rutas. Sin permanencia y sin tarjeta.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" className="gap-2">
              <Link to="/auth">
                Crear cuenta
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/auth">Iniciar sesión</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:px-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="size-4" />
            </div>
            <span className="text-sm font-medium">Vigía · Control de plagas</span>
          </div>
          <p className="text-xs text-muted-foreground">
            Software de gestión para empresas de control de plagas.
          </p>
        </div>
      </footer>
    </div>
  );
}
