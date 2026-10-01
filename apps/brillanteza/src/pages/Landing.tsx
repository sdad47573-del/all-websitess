import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useSearchParams } from "react-router";
import { motion } from "framer-motion";
import {
  BadgeCheck,
  Building2,
  CalendarCheck,
  Check,
  ChevronDown,
  Clock,
  CreditCard,
  MapPin,
  Moon,
  Sun,
  HeartHandshake,
  Hotel,
  Leaf,
  Minus,
  Quote,
  Recycle,
  ShieldCheck,
  Sparkles,
  Star,
  Store,
  Users,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BookingForm } from "@/components/BookingForm";
import { CustomQuoteForm } from "@/components/CustomQuoteForm";
import { JobApplicationForm } from "@/components/JobApplicationForm";
import { useAuth } from "@app-client";
import { COMPARISON, FAQS, STATS, TESTIMONIALS } from "@/lib/content";
import { LIFE_MOMENTS } from "@/lib/lifemoments";
import { calculateQuote, type ServiceKey } from "@/lib/pricing";
import { useQuery } from "@app-client";
import { api } from "@/lib/api";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.5 },
};

function ThemeToggle() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("brillanteza_theme", next ? "dark" : "light");
    } catch {
      /* ignore */
    }
  };
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Modo claro" : "Modo oscuro"}
      className="flex size-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}

function Header() {
  const { isAuthenticated, user } = useAuth();
  const [open, setOpen] = useState(false);


  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <Sparkles className="size-5" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">
            Brillanteza
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
          <a href="#servicios" className="hover:text-foreground">Servicios</a>
          <a href="#momentos" className="hover:text-foreground">Momentos</a>
          <a href="#calculadora" className="hover:text-foreground">Calculadora</a>
          <a href="#comparativa" className="hover:text-foreground">Por qué nosotros</a>
          <a href="#empresas" className="hover:text-foreground">Empresas</a>
          <a href="#opiniones" className="hover:text-foreground">Opiniones</a>
          <a href="#unete" className="hover:text-foreground">Únete</a>
          <a href="#faq" className="hover:text-foreground">FAQ</a>
        </nav>

        <div className="flex items-center gap-2">
          {isAuthenticated ? (
            <Button asChild className="rounded-full">
              <Link to="/dashboard">
                Hola, {user?.name?.split(" ")[0] ?? "de nuevo"}
              </Link>
            </Button>
          ) : (
            <>
              <Button asChild variant="ghost" className="hidden rounded-full sm:inline-flex">
                <Link to="/auth">Entrar</Link>
              </Button>
              <Button asChild className="rounded-full">
                <Link to="/auth?returnTo=%2Fdashboard">Reservar ahora</Link>
              </Button>
            </>
          )}
          <ThemeToggle />
          <button
            type="button"
            aria-label="Abrir menú"
            className="flex size-9 items-center justify-center rounded-full hover:bg-muted md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <ChevronDown className="size-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-border/60 bg-background px-4 py-3 md:hidden">
          {["servicios", "zonas", "momentos", "calculadora", "comparativa", "empresas", "opiniones", "unete", "faq"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2 text-sm font-medium capitalize hover:bg-muted"
            >
              {id === "comparativa" ? "Por qué nosotros" : id}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Fondos decorativos */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(600px 300px at 15% 0%, oklch(0.93 0.08 175 / 0.55), transparent 70%), radial-gradient(700px 350px at 90% 10%, oklch(0.95 0.09 230 / 0.5), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-16 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex size-40 items-center justify-center rounded-3xl border border-border/60 bg-card/80 shadow-lg backdrop-blur"
        >
          <Sparkles className="size-16 text-primary" />
        </motion.div>
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 pb-20 pt-16 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:pt-24">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="gap-1.5 rounded-full border-primary/40 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
              <BadgeCheck className="size-3.5" />
              Garantía de re-servicio en 48 h
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08 }}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Tu casa impecable,{" "}
            <span className="bg-gradient-to-r from-primary to-cyan-600 bg-clip-text text-transparent">
              sin mover un dedo
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            Limpieza profesional para hogares, oficinas y pisos turísticos.
            Precio cerrado en 30 segundos con nuestra calculadora y reserva
            confirmada el mismo día. <strong className="text-foreground">Sin llamadas, sin presupuestos a bote.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.24 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="h-12 rounded-full px-7 text-base font-semibold shadow-lg shadow-primary/25">
              <Link to="/auth?returnTo=%2Fdashboard">
                <CalendarCheck className="mr-2 size-5" />
                Reserva tu limpieza
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full px-7 text-base">
              <a href="#calculadora">Calcula tu precio</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="size-4 text-primary" /> Profesionales asegurados
            </span>
            <span className="flex items-center gap-1.5">
              <CreditCard className="size-4 text-primary" /> Pago online seguro
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" /> Confirmación en 24 h
            </span>
          </motion.div>
        </div>

        {/* Tarjeta flotante con prueba social */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <Card className="border-border/70 bg-card/90 shadow-xl shadow-primary/10 backdrop-blur">
            <CardContent className="flex flex-col gap-4 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Próxima limpieza</p>
                  <p className="text-xl font-bold">Sábado, 10:00</p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Sparkles className="size-6" />
                </span>
              </div>
              <div className="h-px bg-border" />
              {[
                { label: "Limpieza de mantenimiento · 2 hab.", value: "45 min – 2 h" },
                { label: "Equipo asignado", value: "Elena & Rocío" },
                { label: "Productos ecológicos", value: "Incluidos" },
              ].map((row) => (
                <div key={row.label} className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{row.label}</span>
                  <span className="font-semibold">{row.value}</span>
                </div>
              ))}
              <div className="h-px bg-border" />
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4,9 · 2.318 reseñas</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBar() {
  // Estadísticas reales de la plataforma; fallback a datos de catálogo
  const globalStats = useQuery(api.referrals.globalStats, {});
  const completed = globalStats?.completed ?? 0;
  const avg = globalStats?.averageRating ?? null;

  const stats = [
    { value: completed > 0 ? completed.toLocaleString("es-ES") : STATS[0].value, label: "limpiezas completadas" },
    { value: avg !== null ? `${avg.toFixed(1).replace(".", ",")}/5` : STATS[1].value, label: "valoración media" },
    STATS[2],
    STATS[3],
  ];

  return (
    <section className="border-y border-border/60 bg-muted/40">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="flex flex-col items-center text-center"
          >
            <span className="text-3xl font-extrabold tracking-tight text-primary">
              {stat.value}
            </span>
            <span className="mt-1 text-sm text-muted-foreground">{stat.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicios" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Un equipo para cada tipo de limpieza
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Desde el mantenimiento semanal hasta la puesta a punto de tu piso
          turístico. Elige, calcula y reserva.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Mantenimiento periódico",
            description:
              "Suelos, polvo, baños y cocina siempre listos. Mismo equipo y mismo día cada semana.",
            features: ["Productos incluidos", "Equipo fijo asignado", "Checklist digital"],
          },
          {
            title: "Limpieza a fondo",
            description:
              "El detalle que tu casa necesitaba: hornallas, azulejos, interiores de armarios y ventanas.",
            features: ["Desengrase intensivo", "Ventanas interiores", "Nevera y horno opcional"],
          },
          {
            title: "Fines de obra y mudanzas",
            description:
              "Restos de pintura, polvo de yeso y pegatinas fuera. Entra en tu casa como nueva.",
            features: ["Maquinaria profesional", "Retirada de residuos ligeros", "Ideal para entregas"],
          },
          {
            title: "Oficinas y locales",
            description:
              "Turnos de mañana, tarde y noche para que tu equipo trabaje en un espacio impecable.",
            features: ["Fuera de horario laboral", "Facturación mensual", "Supervisión con checklist"],
          },
          {
            title: "Pisos turísticos",
            description:
              "Cambio de sábanas, toallas y amenities. Tu Airbnb listo para el check-in en una mañana.",
            features: ["Lencería incluida", "Reposición de amenities", "Fotos de cierre"],
          },
          {
            title: "Extras a la carta",
            description:
              "Planchado, ventanas, nevera, horno, pack ecológico o cuidado especial con mascotas.",
            features: ["Se añaden al reservar", "Precio cerrado por extra", "Sin permanencia"],
          },
        ].map((service, i) => (
          <motion.div
            key={service.title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Card className="h-full border-border/70 shadow-none transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5">
              <CardContent className="flex h-full flex-col gap-3 p-6">
                <span className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Sparkles className="size-5" />
                </span>
                <h3 className="text-lg font-bold">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-1.5 pt-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="size-3.5 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function LifeMoments() {
  const navigate = useNavigate();
  const location = useLocation();

  const applyMoment = (momentKey: string) => {
    const params = new URLSearchParams(location.search);
    params.set("moment", momentKey);
    navigate(`/?${params.toString()}#calculadora`, { replace: false });
  };

  return (
    <section id="momentos" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          ¿Qué está pasando en tu vida?
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Configuramos la limpieza perfecta para tu momento. Elige y la
          calculadora se ajusta sola.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {LIFE_MOMENTS.map((moment, i) => (
          <motion.button
            key={moment.key}
            type="button"
            {...fadeUp}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
            onClick={() => applyMoment(moment.key)}
            className="group flex flex-col items-center gap-2 rounded-2xl border border-border/70 bg-card p-5 text-center shadow-none transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
          >
            <span className="text-3xl transition-transform group-hover:scale-110">
              {moment.emoji}
            </span>
            <span className="font-bold">{moment.title}</span>
            <span className="text-xs leading-snug text-muted-foreground">
              {moment.description}
            </span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function CalculatorSection() {
  return (
    <section id="calculadora" className="scroll-mt-20 border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div {...fadeUp} className="lg:sticky lg:top-24">
          <Badge variant="outline" className="rounded-full border-primary/40 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Presupuesto en 30 segundos
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Calculadora de precio instantáneo
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Ajusta los detalles de tu limpieza y mira el precio final al
            momento. Sin formularios eternos ni llamadas comerciales:{" "}
            <strong className="text-foreground">el precio que ves es el que pagas</strong>.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Precio cerrado antes de reservar",
              "Descuentos automáticos por recurrencia",
              "Extras opcionales con precio fijo",
              "Disponibilidad real por franja horaria",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-3 text-primary" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="border-border/70 shadow-xl shadow-primary/5">
            <CardContent className="p-6 sm:p-8">
              <BookingForm mode="quote" />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function Comparison() {
  return (
    <section id="comparativa" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Por qué elegirnos frente a otras opciones
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Analizamos las alternativas del mercado para quedarnos con lo mejor y
          arreglar lo que falla.
        </p>
      </motion.div>

      <motion.div {...fadeUp} className="mt-10 overflow-x-auto rounded-2xl border border-border/70">
        <table className="w-full min-w-[640px] text-sm">
          <thead>
            <tr className="border-b bg-muted/50 text-left">
              <th className="px-4 py-3 font-semibold">Característica</th>
              {COMPARISON.columns.map((col, i) => (
                <th
                  key={col}
                  className={cnTh(i)}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPARISON.rows.map((row) => (
              <tr key={row.feature} className="border-b last:border-0">
                <td className="px-4 py-3 font-medium">{row.feature}</td>
                <td className="bg-primary/5 px-4 py-3 text-center">
                  <YesNo value={true} />
                </td>
                <td className="px-4 py-3 text-center text-muted-foreground">
                  <YesNo value={row.others} />
                </td>
                <td className="px-4 py-3 text-center text-muted-foreground">
                  <YesNo value={row.traditional} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}

function cnTh(i: number) {
  return i === 0
    ? "bg-primary/5 px-4 py-3 text-center font-bold text-primary"
    : "px-4 py-3 text-center font-semibold";
}

function YesNo({ value }: { value: boolean | readonly (string | boolean)[] }) {
  if (value === true) {
    return <Check className="mx-auto size-5 text-emerald-600" />;
  }
  if (value === false) {
    return <X className="mx-auto size-5 text-muted-foreground/50" />;
  }
  if (Array.isArray(value)) {
    if (value.includes(true)) {
      return (
        <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-semibold text-amber-700 dark:bg-amber-950 dark:text-amber-300">
          Parcial
        </span>
      );
    }
    return <X className="mx-auto size-5 text-muted-foreground/50" />;
  }
  return <span className="text-xs text-muted-foreground">{value}</span>;
}

function PublicPricing() {
  // Tarifas orientativas calculadas con el motor real (2ª ronda de precios)
  const examples = [
    { service: "Mantenimiento", rooms: 2, baths: 1, freq: "biweekly" as const },
    { service: "A fondo", rooms: 3, baths: 2, freq: "weekly" as const },
    { service: "Fin de obra", rooms: 3, baths: 2, freq: "once" as const },
    { service: "Airbnb", rooms: 2, baths: 1, freq: "weekly" as const },
  ];
  const rows = examples.map((ex) => {
    const serviceMap: Record<string, ServiceKey> = {
      Mantenimiento: "regular",
      "A fondo": "deep",
      "Fin de obra": "move",
      Airbnb: "airbnb",
    };
    const quote = calculateQuote({
      serviceType: serviceMap[ex.service],
      frequency: ex.freq,
      bedrooms: ex.rooms,
      bathrooms: ex.baths,
      extras: [],
    });
    return { ...ex, price: quote.price, hours: quote.durationHours };
  });

  return (
    <section id="precios" className="scroll-mt-20 border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Precios claros, sin letra pequeña
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Tarifas orientativas reales de nuestra calculadora. Ajusta los tuyos
            exactos arriba, en 30 segundos.
            <a href="#calculadora" className="ml-1 font-semibold text-primary hover:underline">
              Calcular el mío →
            </a>
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="mt-10 overflow-x-auto rounded-2xl border border-border/70">
          <table className="w-full min-w-[560px] text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left">
                <th className="px-4 py-3 font-semibold">Servicio</th>
                <th className="px-4 py-3 font-semibold">Vivienda</th>
                <th className="px-4 py-3 font-semibold">Frecuencia</th>
                <th className="px-4 py-3 text-right font-semibold">Precio/visita</th>
                <th className="px-4 py-3 text-right font-semibold">Duración</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.service} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium">{row.service}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.rooms} hab. · {row.baths} baños
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {row.freq === "once" ? "Puntual" : row.freq === "weekly" ? "Semanal" : "Quincenal"}
                  </td>
                  <td className="px-4 py-3 text-right font-extrabold tabular-nums text-primary">
                    {row.price.toFixed(2).replace(".", ",")} €
                  </td>
                  <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                    ≈{row.hours} h
                  </td>
                </tr>
          ))}
            </tbody>
          </table>
        </motion.div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          IVA incluido. Extras y productos ecológicos se añaden en la calculadora.
        </p>
      </div>
    </section>
  );
}

function Testimonials() {
  // Reseñas reales y verificadas desde la BD (completadas + valoradas)
  const verified = useQuery(api.referrals.recentVerifiedReviews, { limit: 6 });
  const hasVerified = (verified?.length ?? 0) > 0;
  const reviews = hasVerified && verified
    ? verified.map((r) => ({
        name: r.name,
        city: r.city,
        rating: r.rating,
        text: r.comment,
        service: r.serviceType,
      }))
    : TESTIMONIALS.map((t) => ({ ...t, text: t.text, service: t.service }));

  return (
    <section id="opiniones" className="scroll-mt-20 border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <p className="mt-3 flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <span className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="size-5 fill-amber-400 text-amber-400" />
              ))}
            </span>
            4,9 sobre 5 · más de 2.300 reseñas verificadas
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((t, i) => (
            <motion.div
              key={t.name}
              {...fadeUp}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            >
              <Card className="h-full border-border/70 bg-card shadow-none">
                <CardContent className="flex h-full flex-col gap-4 p-6">
                  <Quote className="size-6 text-primary/40" />
                  <p className="text-sm leading-relaxed">{t.text}</p>
                  <div className="mt-auto flex items-center justify-between pt-2">
                    <div>
                      <p className="text-sm font-bold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.city}</p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <Star
                            key={s}
                            className={s < t.rating ? "size-3.5 fill-amber-400 text-amber-400" : "size-3.5 text-muted-foreground/30"}
                          />
                        ))}
                      </div>
                      <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                        {t.service}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function B2BSection() {
  return (
    <section id="empresas" className="scroll-mt-20 border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div {...fadeUp} className="lg:sticky lg:top-24">
          <Badge variant="outline" className="rounded-full border-primary/40 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Empresas y comunidades
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            Limpieza profesional para tu negocio
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Oficinas, comunidades de vecinos, comercios y hoteles. Contratos a
            medida, facturación mensual y supervisor asignado. Lo que las
            grandes service companies ofrecen, con la agilidad de una empresa
            que responde en horas, no en semanas.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Supervisor de cuenta y checklist auditables",
              "Facturación mensual con IVA desglosado",
              "Turnos de mañana, tarde y noche",
              "Personal dado de alta y sustituciones garantizadas",
              "Máquinas profesionales y productos certificados",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-3 text-primary" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: Building2, label: "Oficinas" },
              { icon: Users, label: "Comunidades" },
              { icon: Store, label: "Comercios" },
              { icon: Hotel, label: "Hoteles" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/70 bg-background p-4 text-center"
              >
                <item.icon className="size-5 text-primary" />
                <span className="text-xs font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="border-border/70 shadow-xl shadow-primary/5">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold">Presupuesto a medida en 24 h</h3>
              <p className="mb-6 mt-1 text-sm text-muted-foreground">
                Cuéntanos qué necesitas y te enviamos propuesta cerrada. Sin
                llamadas comerciales insistentes.
              </p>
              <CustomQuoteForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function JoinTeam() {
  return (
    <section id="unete" className="scroll-mt-20 border-y border-border/60 bg-muted/30">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 lg:grid-cols-[1fr_1.1fr] lg:items-start">
        <motion.div {...fadeUp} className="lg:sticky lg:top-24">
          <Badge variant="outline" className="rounded-full border-primary/40 bg-primary/5 px-3 py-1 text-xs font-semibold text-primary">
            Trabaja con nosotros
          </Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Profesional de la limpieza? Únete al equipo
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">
            Somos más de 200 personas que hacen posible que cientos de hogares
            brillen cada semana. Alta en la Seguridad Social, contrato estable,
            MATERIAL y formación a cargo de la empresa.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Contrato y alta desde el primer día",
              "Horarios estables cerca de tu zona",
              "Materiales y productos proporcionados",
              "Formación continua y línea de carrera",
              "Clientes valoran tu trabajo: tu nota importa",
            ].map((point) => (
              <li key={point} className="flex items-start gap-2.5 text-sm">
                <span className="mt-0.5 flex size-5 items-center justify-center rounded-full bg-primary/10">
                  <Check className="size-3 text-primary" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.1 }}>
          <Card className="border-border/70 shadow-xl shadow-primary/5">
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl font-bold">Envía tu candidatura</h3>
              <p className="mb-6 mt-1 text-sm text-muted-foreground">
                Sin registrarte en portales de empleo: dos minutos y listo.
              </p>
              <JobApplicationForm />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

function SustainabilityBand() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <motion.div {...fadeUp}>
        <div className="grid gap-6 rounded-3xl border border-emerald-200/70 bg-emerald-50/60 p-8 sm:grid-cols-3 dark:border-emerald-900/60 dark:bg-emerald-950/20">
          {[
            {
              icon: Leaf,
              title: "Productos ecológicos certificados",
              text: "Línea eco con reducción de químicos agresivos y microfibras reutilizables en todos los servicios.",
            },
            {
              icon: HeartHandshake,
              title: "Empleo inclusivo",
              text: "Plantilla con alta y seguro. Priorizamos la inserción laboral de colectivos con más dificultades.",
            },
            {
              icon: Recycle,
              title: "Residuos y agua responsables",
              text: "Dosificación controlada de producto, agua a presión y separación de residuos en cada servicio.",
            },
          ].map((item) => (
            <div key={item.title} className="flex flex-col gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                <item.icon className="size-5" />
              </span>
              <h3 className="font-bold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ServiceAreas() {
  const areas = [
    { city: "Madrid", provinces: "28xxx", note: "Capital y corona" },
    { city: "Barcelona", provinces: "08xxx · 17xxx", note: "Ciudad y área" },
    { city: "Valencia", provinces: "46xxx · 12xxx", note: "Ciudad y costa" },
    { city: "Sevilla", provinces: "41xxx", note: "Capital y aljarafe" },
    { city: "Zaragoza", provinces: "50xxx", note: "Capital" },
    { city: "Málaga", provinces: "29xxx", note: "Costa del Sol" },
    { city: "Bilbao", provinces: "48xxx", note: "Gran Bilbao" },
    { city: "Murcia", provinces: "30xxx", note: "Huerta y campo" },
  ];
  return (
    <section id="zonas" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-20">
      <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Zonas donde ya damos servicio
        </h2>
        <p className="mt-3 text-lg text-muted-foreground">
          Comprueba tu código postal en la calculadora y te confirmamos la
          cobertura al instante. Abrimos nuevas provincias cada mes.
        </p>
      </motion.div>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {areas.map((area, i) => (
          <motion.div
            key={area.city}
            {...fadeUp}
            transition={{ duration: 0.4, delay: (i % 4) * 0.05 }}
            className="rounded-2xl border border-border/70 bg-card p-5"
          >
            <p className="flex items-center gap-2 font-bold">
              <MapPin className="size-4 text-primary" /> {area.city}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{area.note}</p>
            <p className="mt-2 text-xs font-semibold tracking-wide text-primary/80">
              CP {area.provinces}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl scroll-mt-20 px-4 py-20">
      <motion.div {...fadeUp} className="text-center">
        <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
          Preguntas frecuentes
        </h2>
      </motion.div>
      <motion.div {...fadeUp} className="mt-10">
        <Accordion type="single" collapsible className="w-full">
          {FAQS.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-semibold">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-24">
      <motion.div {...fadeUp}>
        <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              background:
                "radial-gradient(400px 200px at 20% 20%, white, transparent), radial-gradient(400px 200px at 80% 80%, white, transparent)",
            }}
          />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
            ¿Lista tu casa para brillar?
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-lg text-primary-foreground/85">
            Crea tu cuenta en un minuto, calcula tu precio y ten tu primera
            limpieza confirmada esta misma semana.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <Button asChild size="lg" variant="secondary" className="h-12 rounded-full px-8 text-base font-semibold">
              <Link to="/auth?returnTo=%2Fdashboard">Empezar ahora</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-12 rounded-full border-primary-foreground/40 bg-transparent px-8 text-base text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="#calculadora">Ver precios</a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/34600000000?text=Hola%2C%20quiero%20info%20sobre%20limpiezas%20de%20Brillanteza"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl shadow-emerald-900/20 transition-transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="size-7">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.074-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
      </svg>
    </a>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="size-4" />
          </span>
          <span className="font-extrabold tracking-tight">Brillanteza</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Brillanteza · Limpieza profesional en toda España · hola@brillanteza.es
        </p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="size-3.5 text-primary" /> Seguro RC 300.000 €
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="size-3.5 text-primary" /> +200 profesionales
          </span>
        </div>
      </div>
    
			<p style="font-size: 0.75rem; opacity: 0.7; margin: 0.5rem 0 0;">
				<small>Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a></small>
			</p>
</footer>
  );
}

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <ServiceAreas />
        <LifeMoments />
        <CalculatorSection />
        <Comparison />
        <Testimonials />
        <JoinTeam />
        <B2BSection />
        <SustainabilityBand />
        <Faq />
        <FinalCta />
        <WhatsAppFloat />
      </main>
      <Footer />
    </div>
  );
}
