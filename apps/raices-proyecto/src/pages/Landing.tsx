import { api } from "@/convex/_generated/api";
import {
  CATEGORY_LABELS,
  MONTH_NAMES,
  formatPrice,
  scaleBlurb,
} from "@/lib/coop";
import { useAuth } from "@/hooks/use-auth";
import { useMutation, useQuery } from "convex/react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Gift,
  Leaf,
  MapPin,
  Quote,
  Scale,
  Search,
  Sprout,
  Truck,
  Users,
  Vote,
} from "lucide-react";
import { Link, useNavigate } from "react-router";
import { useEffect, useMemo, useState, type ReactNode } from "react";
import { PROPOSALS } from "@/convex/coopData";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-20 sm:px-8 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
      {children}
    </p>
  );
}

export default function Landing() {
  const seed = useMutation(api.coop.seedCatalog);
  const castVote = useMutation(api.coop.castVote);
  const tallies = useQuery(api.coop.voteTallies);
  const catalog = useQuery(api.coop.catalog);
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  // The catalog is authored in code; copy it into Convex on first load.
  useEffect(() => {
    seed();
  }, [seed]);

  const requireAuth = (returnTo: string) => {
    if (isAuthenticated) {
      navigate(returnTo);
      return;
    }
    // Send signed-out visitors through /auth with their intended destination.
    navigate(`/auth?returnTo=${encodeURIComponent(returnTo)}`);
  };

  const inSeason = catalog?.inSeason ?? [];
  const currentMonth = catalog?.month ?? new Date().getMonth() + 1;

  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Todas");

  const allProduce = catalog?.allProduce ?? [];
  const categories = useMemo(
    () => ["Todas", ...new Set(allProduce.map((p) => p.category))],
    [allProduce],
  );
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allProduce.filter((p) => {
      const matchesCategory = category === "Todas" || p.category === category;
      const matchesQuery =
        q === "" ||
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        (p.farmer?.name.toLowerCase().includes(q) ?? false);
      return matchesCategory && matchesQuery;
    });
  }, [allProduce, query, category]);

  return (
    <div className="min-h-screen bg-background">
      {/* ---------- header ---------- */}
      <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Sprout className="size-5" />
            </span>
            <span className="leading-tight">
              <span className="block text-base font-semibold tracking-tight">
                Raices
              </span>
              <span className="block text-[11px] text-muted-foreground">
                Cooperativa de huerteros
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#temporada" className="hover:text-foreground">
              Temporada
            </a>
            <a href="#cajas" className="hover:text-foreground">
              Cajas
            </a>
            <a href="#fincas" className="hover:text-foreground">
              Fincas
            </a>
            <a href="#recogida" className="hover:text-foreground">
              Recogida
            </a>
            <a href="#asamblea" className="hover:text-foreground">
              Asamblea
            </a>
          </nav>

          <div className="flex items-center gap-2">
            <Button2 onClick={() => requireAuth("/panel")} variant="ghost">
              Mi panel
            </Button2>
            <Button2 onClick={() => requireAuth("/panel")}>
              Apuntarme
            </Button2>
          </div>
        </div>
      </header>

      {/* ---------- hero ---------- */}
      <Section>
        <motion.div
          initial="hidden"
          animate="show"
          variants={fadeUp}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <Eyebrow>
              <Leaf className="size-3.5" />
              Cinco fincas, una cooperativa
            </Eyebrow>
            <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
              La verdura de esta semana,
              <span className="block text-primary">sabiendo quien la ha cultivado.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              No somos un intermediario. Somos cinco fincas de la comarca que
              compartimos camion, almacen y caja. Te hablamos de la cosecha, no
              del codigo de barras.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button2 onClick={() => requireAuth("/panel")} className="px-6 py-3 text-base">
                Quiero una cesta
                <ArrowRight className="size-4" />
              </Button2>
              <a
                href="#temporada"
                className="rounded-lg border border-border px-6 py-3 text-base font-medium hover:bg-secondary"
              >
                Ver que hay ahora
              </a>
            </div>

            <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
              {[
                { k: "5", v: "fincas socias" },
                { k: `${inSeason.length || 0}`, v: "cultivos ahora" },
                { k: "4", v: "puntos de recogida" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-3xl font-semibold tracking-tight text-primary">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* crate visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="grain relative overflow-hidden rounded-2xl bg-barn p-8 text-cream"
          >
            <div className="absolute -right-10 -top-10 size-40 rounded-full bg-terracotta/30 blur-2xl" />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
                Cesta de esta semana
              </p>
              <h2 className="mt-2 text-2xl font-semibold">
                {inSeason.length} cultivos de temporada
              </h2>
              <div className="mt-7 grid grid-cols-4 gap-3">
                {(inSeason.length ? inSeason : []).slice(0, 12).map((p) => (
                  <div
                    key={p._id}
                    className="flex aspect-square flex-col items-center justify-center gap-1 rounded-xl bg-cream/10 text-center"
                    title={p.name}
                  >
                    <span className="text-2xl">{p.emoji}</span>
                    <span className="px-1 text-[10px] leading-tight text-cream/70">
                      {p.name}
                    </span>
                  </div>
                ))}
                {inSeason.length === 0 && (
                  <p className="col-span-4 py-10 text-center text-sm text-cream/60">
                    Preparando la temporada...
                  </p>
                )}
              </div>
              <p className="mt-7 flex items-center gap-2 text-sm text-cream/70">
                <CalendarDays className="size-4" />
                {MONTH_NAMES[currentMonth - 1]} de 2026
              </p>
            </div>
          </motion.div>
        </motion.div>
      </Section>

      {/* ---------- season ---------- */}
      <Section id="temporada" className="bg-secondary/50 border-y border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <Sprout className="size-3.5" />
            Ahora mismo
          </Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Lo que se esta cosechando en {MONTH_NAMES[currentMonth - 1]}
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Cada ficha lleva la finca que lo ha cultivado. Es la diferencia
            entre comprar verdura y saber quien la ha cultivado.
          </p>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {inSeason.map((p) => (
              <div
                key={p._id}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-md"
              >
                <span className="text-3xl">{p.emoji}</span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-medium">{p.name}</h3>
                    <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] uppercase tracking-wide text-muted-foreground">
                      {CATEGORY_LABELS[p.category] ?? p.category}
                    </span>
                    <span className="rounded-full border border-border px-2 py-0.5 text-[10px] font-medium text-primary">
                      {p.portion}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.description}
                  </p>
                  {p.farmer && (
                    <p
                      className="mt-2 flex items-center gap-1.5 text-xs font-medium"
                      style={{ color: p.farmer.accent }}
                    >
                      <span
                        className="size-2 rounded-full"
                        style={{ background: p.farmer.accent }}
                      />
                      {p.farmer.name}
                    </p>
                  )}
                  <p className="mt-1 flex flex-wrap items-baseline gap-x-2 text-xs">
                    <span className="font-semibold text-foreground">
                      {formatPrice(p.priceCents)}
                    </span>
                    <span className="text-muted-foreground">
                      / {p.unit} · en el super{" "}
                      <span className="line-through">
                        {formatPrice(p.supermarketPriceCents)}
                      </span>
                    </span>
                  </p>
                  <p className="mt-1.5 text-xs text-muted-foreground">
                    En tu caja: {p.portion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------- full catalog ---------- */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <Search className="size-3.5" />
            Todo lo que cultivamos
          </Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            El catalogo completo, con su finca
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Las {allProduce.length} referencias de la cooperativa. Busca por
            nombre, por descripcion o por la finca que la cultiva.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Buscar tomate, acelga, La Retamilla..."
                className="w-full rounded-lg border border-border bg-card py-2.5 pl-9 pr-3 text-sm outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <div className="flex flex-wrap gap-1.5">
              {categories.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
                    category === c
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:bg-secondary"
                  }`}
                >
                  {CATEGORY_LABELS[c] ?? c}
                </button>
              ))}
            </div>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            {filtered.length} de {allProduce.length} cultivos
          </p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((p) => {
              const inNow = catalog?.inSeason.some((s) => s._id === p._id);
              return (
                <div
                  key={p._id}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="text-2xl">{p.emoji}</span>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5">
                      <h3 className="text-sm font-medium">{p.name}</h3>
                      {inNow ? (
                        <span className="rounded-full bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">
                          Ahora
                        </span>
                      ) : (
                        <span className="rounded-full bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                          Fuera de temporada
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {p.portion} · {formatPrice(p.priceCents)} / {p.unit}
                    </p>
                    {p.farmer && (
                      <p
                        className="mt-1 text-xs font-medium"
                        style={{ color: p.farmer.accent }}
                      >
                        {p.farmer.name}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
          {filtered.length === 0 && (
            <p className="mt-8 text-sm text-muted-foreground">
              No hay nada con ese nombre. Prueba con tomate, calabaza o el
              nombre de una finca.
            </p>
          )}
        </motion.div>
      </Section>

      {/* ---------- farm visits ---------- */}
      {(catalog?.visits.length ?? 0) > 0 && (
        <Section className="border-y border-border bg-secondary/50">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>
              <CalendarDays className="size-3.5" />
              Visitas a las fincas
            </Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Ve a ver donde crece tu comida
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Las fincas son de los socios, asi que quien te recibe es quien
              cultiva. Plazas limitadas y se llenan rapido.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {(catalog?.visits ?? []).map((v) => {
                const full = (v.spotsLeft ?? 0) <= 0;
                return (
                  <div
                    key={v._id}
                    className="flex flex-col rounded-xl border border-border bg-card p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                      {new Intl.DateTimeFormat("es-ES", {
                        weekday: "long",
                        day: "numeric",
                        month: "long",
                      }).format(new Date(v.startsAt))}{" "}
                      · {v.startsAt ? new Date(v.startsAt).getHours() : ""}h
                    </p>
                    <h3 className="mt-2 font-semibold">{v.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {v.farmer?.name} · {v.durationHours} h
                    </p>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground">
                      {v.blurb}
                    </p>
                    <div className="mt-5 flex items-center justify-between gap-3">
                      <span className="text-sm font-medium">
                        {v.priceCents > 0 ? formatPrice(v.priceCents) : "Gratis"}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          full ? "text-muted-foreground" : "text-primary"
                        }`}
                      >
                        {full ? "Completo" : `${v.spotsLeft} plazas`}
                      </span>
                    </div>
                    <Button2
                      onClick={() => requireAuth("/panel")}
                      variant={full ? "outline" : "default"}
                      className="mt-4 w-full"
                      disabled={full}
                    >
                      {full ? "Sin plazas" : "Reservar plaza"}
                    </Button2>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ---------- where the money goes ---------- */}
      {(catalog?.costBreakdown.length ?? 0) > 0 && (
        <Section className="border-y border-border bg-secondary/50">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>
              <Scale className="size-3.5" />
              Cuentas abiertas
            </Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Donde va cada euro de tu cesta
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              La partida mas grande va a las cinco fincas, que son de los socios.
              No hay intermediario que se quede un margen por el camino, y las
              cuentas se votan en la asamblea.
            </p>
            <div className="mt-10 space-y-6">
              {(catalog?.costBreakdown ?? []).map((c) => (
                <div key={c._id}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium">
                      {c.label}
                      {c.farmerPayout && (
                        <span className="ml-2 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-medium text-primary">
                          pago a socios
                        </span>
                      )}
                    </span>
                    <span className="text-lg font-semibold">
                      {c.sharePercent}%
                    </span>
                  </div>
                  <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-muted">
                    <div
                      className={`h-full rounded-full ${
                        c.farmerPayout ? "bg-primary" : "bg-terracotta"
                      } transition-[width] duration-700`}
                      style={{ width: `${c.sharePercent}%` }}
                    />
                  </div>
                  <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                    {c.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ---------- testimonials ---------- */}
      {(catalog?.testimonials.length ?? 0) > 0 && (
        <Section>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>
              <Quote className="size-3.5" />
              Lo que dicen
            </Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              De quien ya recibe su caja
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {(catalog?.testimonials ?? []).map((t) => (
                <figure
                  key={t._id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <div
                    className="flex gap-0.5"
                    aria-label={`${t.rating} de 5`}
                  >
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-sm text-accent">
                        ★
                      </span>
                    ))}
                  </div>
                  <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border pt-4">
                    <span className="block text-sm font-medium">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.neighborhood} · {t.plan}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ---------- how it works ---------- */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <CalendarDays className="size-3.5" />
            Como funciona
          </Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Tres pasos y ya esta
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Scale,
                title: "Eliges tu tarifa",
                body: "El mismo contenido para todas las tarifas. Lo unico que cambia es cuanto pagas. Nadie se queda fuera por precio.",
              },
              {
                icon: Sprout,
                title: "La huerta decide la caja",
                body: "El equipo de huerta compone cada caja segun lo que mejor esta esa semana. Es la cosecha la que manda, no el almacen.",
              },
              {
                icon: MapPin,
                title: "Recoges cuando quieras",
                body: "Cuatro puntos, jueves y sabado. Y si no puedes ir, puedes saltar esa semana sin perder tu sitio.",
              },
            ].map((s, i) => (
              <div key={s.title} className="relative">
                <div className="flex size-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <s.icon className="size-5" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">
                  <span className="mr-2 text-muted-foreground">0{i + 1}</span>
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------- plans ---------- */}
      <Section id="cajas" className="bg-secondary/50 border-y border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <Scale className="size-3.5" />
            Las cajas
          </Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Tres tamaños, el mismo contenido de temporada
          </h2>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {(catalog?.plans ?? []).map((plan) => (
              <div
                key={plan._id}
                className={`relative flex flex-col rounded-2xl border p-6 ${
                  plan.recommended
                    ? "border-primary bg-card shadow-lg"
                    : "border-border bg-card"
                }`}
              >
                {plan.recommended && (
                  <span className="absolute -top-3 left-6 rounded-full bg-primary px-3 py-1 text-[11px] font-semibold text-primary-foreground">
                    La mas elegida
                  </span>
                )}
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                <p className="mt-5 flex items-baseline gap-1.5">
                  <span className="text-4xl font-semibold tracking-tight">
                    {formatPrice(plan.weeklyPriceCents)}
                  </span>
                  <span className="text-sm text-muted-foreground">/ semana</span>
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {plan.sizeLabel}
                </p>
                {plan.boxCents > 0 && (
                  <p className="mt-3 rounded-lg bg-secondary/70 px-3 py-2 text-xs text-muted-foreground">
                    Una caja de este tamaño cuesta{" "}
                    <span className="font-semibold text-foreground">
                      {formatPrice(plan.boxCents)}
                    </span>{" "}
                    aqui. Comprando las mismas piezas en el supermercado serian{" "}
                    <span className="line-through">
                      {formatPrice(plan.marketCents)}
                    </span>
                    . Te ahorras{" "}
                    <span className="font-semibold text-primary">
                      {formatPrice(plan.savedCents)}
                    </span>
                    .
                  </p>
                )}
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {plan.description}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {plan.perks.map((perk) => (
                    <li key={perk} className="flex gap-2.5 text-sm">
                      <Leaf className="mt-0.5 size-4 shrink-0 text-primary" />
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
                <Button2
                  onClick={() => requireAuth("/panel")}
                  variant={plan.recommended ? "default" : "outline"}
                  className="mt-6 w-full"
                >
                  Elegir esta
                </Button2>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-xl border border-border bg-card p-6">
            <h3 className="flex items-center gap-2 font-semibold">
              <Scale className="size-4 text-primary" />
              La tarifa solidaria
            </h3>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {scaleBlurb(100)} Puedes mover tu tarifa cuando quieras desde tu
              panel, sin pedir permiso a nadie. Las tarifas de apoyo son las
              que financian las cestas que repartimos gratis en Barrio
              Universidad.
            </p>
          </div>
        </motion.div>
      </Section>

      {/* ---------- farms ---------- */}
      <Section id="fincas">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <Users className="size-3.5" />
            Las fincas
          </Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Quien cultiva, y desde cuando
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Las cinco son socias de la cooperativa. No hay proveedores externos:
            lo que sale de aqui es de aqui.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {(catalog?.farmers ?? []).map((f) => (
              <div
                key={f._id}
                className="overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div
                  className="h-1.5 w-full"
                  style={{ background: f.accent }}
                />
                <div className="p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-semibold">{f.name}</h3>
                    <span className="text-xs text-muted-foreground">
                      desde {f.since}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {f.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {f.bio}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {f.practices.map((pr) => (
                      <span
                        key={pr}
                        className="rounded-full px-2.5 py-1 text-[11px] font-medium"
                        style={{
                          background: `color-mix(in oklab, ${f.accent} 12%, transparent)`,
                          color: f.accent,
                        }}
                      >
                        {pr}
                      </span>
                    ))}
                  </div>
                  <p className="mt-5 text-xs font-medium text-muted-foreground">
                    CULTIVOS:{" "}
                    <span className="font-normal">
                      {f.produce.map((p) => p.name).join(" · ")}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------- pickup ---------- */}
      <Section id="recogida" className="bg-secondary/50 border-y border-border">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <MapPin className="size-3.5" />
            Recogida
          </Eyebrow>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Cuatro puntos, dos dias
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {(catalog?.pickupPoints ?? []).map((pt) => (
              <div
                key={pt._id}
                className="rounded-xl border border-border bg-card p-5"
              >
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {pt.day} · {pt.window}
                </p>
                <h3 className="mt-2 font-semibold">{pt.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{pt.address}</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  {pt.neighborhood}
                </p>
                {pt.notes && (
                  <p className="mt-3 border-t border-border pt-3 text-xs text-muted-foreground">
                    {pt.notes}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* ---------- delivery ---------- */}
      {(catalog?.deliveryZones.length ?? 0) > 0 && (
        <Section className="border-y border-border bg-secondary/50">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={fadeUp}
            transition={{ duration: 0.5 }}
          >
            <Eyebrow>
              <Truck className="size-3.5" />
              Reparto a casa
            </Eyebrow>
            <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
              Si no puedes recoger, te la llevamos
            </h2>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Con el precio del reparto y el minimo para que salga gratis
              publicados. Los miembros de otros servicios se quejan de
              descubrirlo al pagar; aqui esta a la vista desde el principio.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {(catalog?.deliveryZones ?? []).map((z) => (
                <div
                  key={z._id}
                  className="rounded-xl border border-border bg-card p-5"
                >
                  <h3 className="font-semibold">{z.name}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {z.neighborhoods.join(", ")}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {z.blurb}
                  </p>
                  <div className="mt-4 border-t border-border pt-4">
                    <p className="text-lg font-semibold">
                      {formatPrice(z.feeCents)}
                      <span className="text-xs font-normal text-muted-foreground">
                        {" "}
                        de reparto
                      </span>
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Gratis a partir de {formatPrice(z.freeAboveCents)} ·{" "}
                      {z.day}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </Section>
      )}

      {/* ---------- gifting ---------- */}
      <Section>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-10 lg:grid-cols-2"
        >
          <div>
            <Eyebrow>
              <Gift className="size-3.5" />
              Regalo
            </Eyebrow>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Regala semanas de huerta
            </h2>
            <p className="mt-4 text-muted-foreground">
              Quien la recibe no tiene que crear una cuenta ni entrar en nada.
              Tu le das un codigo, lo introduce y ve que lleva y donde
              recogerlo. Asi funciona: el regalo no le pide nada a la otra
              persona.
            </p>
            <ul className="mt-6 space-y-2.5">
              {[
                "Elige el tamanho y cuantas semanas",
                "Recibe un codigo de recogida, facil de recordar",
                "Quien la recibe solo mira su codigo: sin registro",
                "Puedes añadir una nota con tu nombre",
              ].map((perk) => (
                <li key={perk} className="flex gap-2.5 text-sm">
                  <Leaf className="mt-0.5 size-4 shrink-0 text-primary" />
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
            <Button2
              onClick={() => requireAuth("/panel")}
              className="mt-7 px-6 py-3 text-base"
            >
              Regalar una cesta
              <ArrowRight className="size-4" />
            </Button2>
          </div>
          <div className="grain relative overflow-hidden rounded-2xl bg-barn p-8 text-cream">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cream/60">
              Ejemplo de codigo
            </p>
            <p className="mt-3 font-mono text-3xl font-semibold tracking-wider">
              RAIZ-K7P-4WQ
            </p>
            <div className="mt-6 space-y-2 text-sm text-cream/75">
              <p>Cesta familiar · 4 semanas</p>
              <p>Recogida: jueves, 17:00 - 20:00</p>
              <p className="border-t border-cream/20 pt-2">
                Nota: "de parte de Marta, feliz cumpleanos"
              </p>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ---------- governance ---------- */}
      <Section id="asamblea">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <Eyebrow>
            <Vote className="size-3.5" />
            La asamblea
          </Eyebrow>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            Los socios deciden que se cultiva
          </h2>
          <p className="mt-4 max-w-2xl text-muted-foreground">
            Esto no es una tienda con una foto de una granja. Las decisiones de
            la proxima temporada se voted entre los socios, y cualquier miembro
            puede votar.
          </p>

          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {PROPOSALS.map((p) => {
              const tally = tallies?.[p.id] ?? {};
              const total = Object.values(tally).reduce((a, b) => a + b, 0);
              return (
                <div
                  key={p.id}
                  className="flex flex-col rounded-2xl border border-border bg-card p-6"
                >
                  <h3 className="text-lg font-semibold">{p.question}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {p.subtitle}
                  </p>
                  <div className="mt-5 space-y-3">
                    {p.options.map((o) => {
                      const votes = tally[o.id] ?? 0;
                      const pct = total > 0 ? Math.round((votes / total) * 100) : 0;
                      return (
                        <div key={o.id}>
                          <div className="flex items-center justify-between text-sm">
                            <span className="font-medium">{o.label}</span>
                            <span className="text-muted-foreground">
                              {pct}%
                            </span>
                          </div>
                          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                            <div
                              className="h-full rounded-full bg-primary transition-[width] duration-500"
                              style={{ width: `${pct}%` }}
                            />
                          </div>
                          <p className="mt-1.5 text-xs text-muted-foreground">
                            {o.detail}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                  <Button2
                    onClick={() => requireAuth("/panel")}
                    variant="outline"
                    className="mt-6 w-full"
                  >
                    <Vote className="size-4" />
                    Votar en el panel
                  </Button2>
                  <p className="mt-2 text-center text-xs text-muted-foreground">
                    {total} {total === 1 ? "voto emitido" : "votos emitidos"}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </Section>

      {/* ---------- cta ---------- */}
      <Section>
        <div className="grain relative overflow-hidden rounded-3xl bg-barn px-8 py-16 text-center text-cream sm:px-16">
          <div className="absolute -left-16 -bottom-16 size-56 rounded-full bg-terracotta/25 blur-3xl" />
          <div className="relative">
            <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-5xl">
              La temporada empieza cuando tu quieras
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-cream/75">
              Apuntate a una caja y el primer jueves tienes verdura en la mesa.
              Puedes cambiar de tarifa, saltar semanas o dejarlo cuando quieras.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Button2
                onClick={() => requireAuth("/panel")}
                className="bg-cream px-6 py-3 text-base text-barn hover:bg-cream/90"
              >
                Crear mi cuenta
                <ArrowRight className="size-4" />
              </Button2>
              <a
                href="#fincas"
                className="rounded-lg border border-cream/30 px-6 py-3 text-base font-medium hover:bg-cream/10"
              >
                Conocer las fincas
              </a>
            </div>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border px-5 py-10 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Raices Cooperativa de Huerteros · Inscrita en el registro de
            cooperativas agrarias.
          </p>
          <p className="text-sm text-muted-foreground">
            Hecho por las personas que lo cultivan.
          </p>
        </div>
      </footer>
    </div>
  );
}

/** Local button so the page can pass onClick without importing the ui barrel. */
function Button2({
  children,
  className = "",
  variant = "default",
  onClick,
  disabled,
}: {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  onClick?: () => void;
  disabled?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50";
  const styles = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-border bg-transparent hover:bg-secondary",
    ghost: "hover:bg-secondary",
  }[variant];
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </button>
  );
}
