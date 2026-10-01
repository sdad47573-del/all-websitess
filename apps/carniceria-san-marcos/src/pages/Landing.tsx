import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import {
  ArrowRight,
  Bike,
  BookOpen,
  Building2,
  CalendarClock,
  Check,
  Clock,
  Flame,
  HandPlatter,
  MapPin,
  MessageCircle,
  Minus,
  Package,
  Phone,
  Plus,
  Repeat,
  ShieldCheck,
  ShoppingBasket,
  Snowflake,
  Sparkles,
  Star,
  Timer,
  Truck,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CutMap } from "@/components/CutMap";
import { JsonLd } from "@/components/JsonLd";
import { OrderDialog } from "@/components/OrderDialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  CATEGORIES,
  COMPARISON,
  FAQS,
  gramsFor,
  MEAT_TYPES,
  PACKS,
  PRODUCTS,
  RECIPES,
  SITE,
  TODAY_SPECIALS,
  SUBSCRIPTIONS,
  TESTIMONIALS,
  euro,
  loadLastOrder,
  openNow,
  postalCoverage,
  saveLastOrder,
  whatsappUrl,
  type Category,
  type LastOrder,
  type QuantityMap,
} from "@/lib/shop";

function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  id?: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-6xl px-4 py-16 sm:py-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-display text-lg tracking-[0.25em] text-primary uppercase">
          {eyebrow}
        </p>
        <h2 className="mt-2 max-w-2xl font-serif text-3xl font-semibold sm:text-4xl">
          {title}
        </h2>
        {intro && <p className="mt-3 max-w-2xl text-muted-foreground">{intro}</p>}
      </motion.div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.45 },
} as const;

export default function Landing() {
  const [cart, setCart] = useState<QuantityMap>({});
  const [packs, setPacks] = useState<Record<string, number>>({});
  const [category, setCategory] = useState<Category | "todos">("todos");
  const [orderOpen, setOrderOpen] = useState(false);
  const [zip, setZip] = useState("");
  const zipInfo = postalCoverage(zip);
  const [now, setNow] = useState(() => openNow());
  const [last, setLast] = useState<LastOrder | null>(() => loadLastOrder());
  const [people, setPeople] = useState(4);
  const [meatType, setMeatType] = useState<(typeof MEAT_TYPES)[number]["id"]>("vacuno");

  useEffect(() => {
    const t = setInterval(() => setNow(openNow()), 60_000);
    return () => clearInterval(t);
  }, []);

  function repeatLast() {
    if (!last) return;
    setCart(last.cart);
    setPacks(last.packs);
    toast.success("Último pedido cargado: revísalo y envíalo");
  }

  const visible = useMemo(
    () => (category === "todos" ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category],
  );
  const cartCount = Object.keys(cart).length;
  const packCount = Object.values(packs).reduce((a, b) => a + b, 0);
  const itemCount = cartCount + packCount;
  const subtotal =
    PRODUCTS.reduce((sum, p) => sum + p.pricePerKg * (cart[p.id] ?? 0), 0) +
    PACKS.reduce((sum, pk) => sum + pk.price * (packs[pk.id] ?? 0), 0);

  function add(id: string) {
    setCart((c) => ({ ...c, [id]: Math.min(((c[id] ?? 0) as number) + 0.5, 20) }));
  }
  function remove(id: string) {
    setCart((c) => {
      const next = Math.max(((c[id] ?? 0) as number) - 0.5, 0);
      const copy = { ...c };
      if (next === 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });
  }

  function addPack(id: string) {
    setPacks((p) => ({ ...p, [id]: (p[id] ?? 0) + 1 }));
  }

  function addRecipeItems(items: { productId: string; kg: number }[]) {
    setCart((c) => {
      const next = { ...c };
      for (const it of items) {
        next[it.productId] = Math.min((next[it.productId] ?? 0) + it.kg, 20);
      }
      return next;
    });
  }

  const nav = [
    { href: "#catalogo", label: "Catálogo" },
    { href: "#packs", label: "Packs" },
    { href: "#suscripciones", label: "Suscripciones" },
    { href: "#envio", label: "Envío" },
    { href: "#recetas", label: "Recetas" },
    { href: "#por-que-nosotros", label: "Por qué nosotros" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <div className="min-h-screen">
      {/* ── Top bar ─────────────────────────────────────────── */}
      <div className="bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-2 text-xs">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="size-3.5" /> {SITE.schedule.weekdays}
          </span>
          <span className={`inline-flex items-center gap-1.5 font-medium ${now.open ? "text-green-300" : "text-background/70"}`}>
            <span className={`size-2 rounded-full ${now.open ? "bg-green-400" : "bg-background/40"}`} />
            {now.text}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> {SITE.address}
          </span>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-1.5 hover:text-background/80"
          >
            <Phone className="size-3.5" /> {SITE.phone}
          </a>
        </div>
      </div>

      {/* ── Header ──────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <a href="#" className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center rounded-md bg-primary font-display text-xl text-primary-foreground">
              SM
            </span>
            <span className="leading-none">
              <span className="block font-serif text-lg font-bold">{SITE.name}</span>
              <span className="block text-[11px] tracking-wide text-muted-foreground">
                desde {SITE.established}
              </span>
            </span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition-colors hover:text-primary">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a href={whatsappUrl("¡Hola! Me gustaría preguntar por un corte.")} target="_blank" rel="noreferrer">
              <Button variant="outline" size="sm" className="hidden sm:inline-flex">
                <MessageCircle className="size-4" /> WhatsApp
              </Button>
            </a>
            <Button
              size="sm"
              onClick={() => {
                saveLastOrder({ cart, packs, at: Date.now() });
                setOrderOpen(true);
              }}
              className="relative"
            >
              <ShoppingBasket className="size-4" />
              Pedido
              {cartCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 flex size-5 items-center justify-center rounded-full bg-accent text-[10px] font-bold text-accent-foreground">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </header>

      {/* ── Hero ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b bg-card">
        <div className="pointer-events-none absolute -top-24 right-0 hidden select-none font-display text-[22rem] leading-none text-primary/5 lg:block">
          1974
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              <Flame className="size-3.5 text-primary" />
              Maduración en cámara seca · 45 días
            </Badge>
            <h1 className="font-display text-5xl leading-[0.95] tracking-wide sm:text-7xl lg:text-8xl">
              CARNE DE
              <br />
              VERDAD, CORTADA
              <br />
              <span className="text-primary">AL MOMENTO</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-muted-foreground">
              Carnicería de barrio desde 1974. Piezas enteras, picado del día y
              el consejo de siempre. Pide por WhatsApp y lo tienes el mismo día.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#catalogo">
                <Button size="lg">
                  Ver catálogo y precios <ArrowRight className="size-4" />
                </Button>
              </a>
              <a href={whatsappUrl("¡Hola! Quiero hacer un pedido.")} target="_blank" rel="noreferrer">
                <Button size="lg" variant="outline">
                  <MessageCircle className="size-4" /> Pedir por WhatsApp
                </Button>
              </a>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Envío gratis en el barrio desde 40 € · Recogida en tienda en 2 h
            </p>
            {last &&
              Object.keys(last.cart).length +
                Object.values(last.packs).reduce((a, b) => a + b, 0) >
                0 && (
                <button
                  type="button"
                  onClick={repeatLast}
                  className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <Repeat className="size-4" /> Repetir mi último pedido (
                  {new Date(last.at).toLocaleDateString("es-ES")})
                </button>
              )}
          </div>

          <div className="relative">
            <div className="relative rounded-2xl border-4 border-foreground/90 bg-paper p-5 shadow-[8px_8px_0_0_var(--foreground)]">
              <div className="absolute -top-3 left-6 -rotate-2 bg-primary px-3 py-1 font-display text-sm tracking-widest text-primary-foreground">
                ESTRELLA DE LA CASA
              </div>
              <p className="pt-2 font-serif text-xl font-semibold">Chuletón de vaca vieja</p>
              <p className="mt-1 text-sm text-paper-foreground/70">
                Raza Avileña · maduración propia · pieza entera o en filetes
              </p>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <p className="font-display text-6xl leading-none text-primary">
                    {euro(52)}
                    <span className="text-2xl text-foreground/60">/kg</span>
                  </p>
                  <p className="mt-1 text-xs text-paper-foreground/60">
                    Peso exacto al contarte · IVA incluido
                  </p>
                </div>
                <div className="text-right font-display text-lg text-paper-foreground/50">
                  <p>Nº 1</p>
                  <p>EN VENTAS</p>
                </div>
              </div>
              <div className="mt-5 border-t border-dashed border-foreground/20 pt-4">
                <a href="#catalogo" className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
                  Ver el corte en el catálogo <ArrowRight className="size-3.5" />
                </a>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-center gap-1.5 text-sm text-muted-foreground">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-accent text-accent" />
              ))}
              <span className="ml-1">4,9 · 312 reseñas de vecinos</span>
            </div>
          </div>
        </div>

        {/* marquee */}
        <div className="overflow-hidden border-t bg-primary py-2.5">
          <div className="animate-marquee flex w-max gap-8 font-display text-lg tracking-[0.2em] text-primary-foreground whitespace-nowrap">
            {[0, 1].map((n) => (
              <span key={n} className="flex gap-8">
                <span>CHULETÓN MADURADO</span><span>·</span>
                <span>PICADO DEL DÍA</span><span>·</span>
                <span>CORDERO LECHAL</span><span>·</span>
                <span>EMBUTIDO DE ELABORACIÓN PROPIA</span><span>·</span>
                <span>PEDIDO POR WHATSAPP</span><span>·</span>
                <span>ENVÍO EN EL BARRIO</span><span>·</span>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banda de compromisos ────────────────────────────── */}
      <div className="mx-auto grid max-w-6xl gap-4 px-4 py-10 sm:grid-cols-3">
        {[
          { icon: HandPlatter, t: "Corte a medida", d: "Filetes al grosor que pidas, troceado y picado delante de ti." },
          { icon: ShieldCheck, t: "Garantía de sabor", d: "Si algo no está en su punto, lo cambiamos sin preguntas." },
          { icon: Truck, t: "Reparto en el barrio", d: "El mismo día, gratis desde 40 € y en menos de 2 h si lo recoges." },
        ].map((c) => (
          <motion.div
            key={c.t}
            {...fadeUp}
            className="flex items-start gap-3 rounded-xl border bg-card p-5"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <c.icon className="size-5 text-primary" />
            </span>
            <div>
              <p className="font-semibold">{c.t}</p>
              <p className="mt-0.5 text-sm text-muted-foreground">{c.d}</p>
            </div>
          </motion.div>
        ))}
</div>

      {/* ── Catalogo + constructor de pedido ────────────────── */}
      <Section
        id="catalogo"
        eyebrow="Catálogo"
        title="Precios claros, elige y pide en un minuto"
        intro="Todos los precios son por kilo, IVA incluido. Añade medios kilos o kilos y te preparamos el mensaje de WhatsApp con el total aproximado."
      >
        <div className="mb-8 flex flex-wrap gap-2">
          {(
            [
              { id: "todos", label: "Todo" },
              ...CATEGORIES,
            ] as { id: Category | "todos"; label: string }[]
          ).map((c) => (
            <Button
              key={c.id}
              size="sm"
              variant={category === c.id ? "default" : "outline"}
              onClick={() => setCategory(c.id)}
            >
              {c.label}
            </Button>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border border-dashed bg-muted/30 px-4 py-3 text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium">
            <Flame className="size-4 text-primary" /> Hoy en el mostrador:
          </span>
          {TODAY_SPECIALS.map((s) => {
            const p = PRODUCTS.find((x) => x.id === s.productId);
            return (
              <span key={s.productId} className="text-muted-foreground">
                {p?.name} · {s.units}
              </span>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((p) => {
            const qty = cart[p.id] ?? 0;
            return (
              <motion.article
                key={p.id}
                {...fadeUp}
                className={`flex flex-col rounded-xl border bg-card p-5 shadow-sm transition-shadow hover:shadow-md ${
                  qty > 0 ? "ring-2 ring-primary" : ""
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-serif text-lg font-semibold">{p.name}</h3>
                    <p className="mt-0.5 text-xs text-muted-foreground">{p.origin}</p>
                  </div>
                  {p.badge && (
                    <Badge className="shrink-0 bg-accent text-accent-foreground">{p.badge}</Badge>
                  )}
                </div>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
                {p.bestFor && (
                  <p className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                    <HandPlatter className="size-3.5 text-primary" /> {p.bestFor}
                  </p>
                )}
                <div className="mt-4 flex items-center justify-between">
                  <p className="font-display text-3xl leading-none text-primary">
                    {euro(p.pricePerKg)}
                    <span className="text-base font-normal text-foreground/60"> /kg</span>
                  </p>
                  {qty === 0 ? (
                    <Button size="sm" onClick={() => add(p.id)}>
                      <Plus className="size-4" /> Añadir
                    </Button>
                  ) : (
                    <div className="flex items-center gap-1 rounded-full border p-1">
                      <Button size="icon-sm" variant="ghost" aria-label="Quitar" onClick={() => remove(p.id)}>
                        <Minus className="size-4" />
                      </Button>
                      <span className="min-w-16 text-center text-sm font-semibold tabular-nums">
                        {qty.toLocaleString("es-ES")} kg
                      </span>
                      <Button size="icon-sm" variant="ghost" aria-label="Añadir" onClick={() => add(p.id)}>
                        <Plus className="size-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* ── Packs ───────────────────────────────────────────── */}
      <Section
        id="packs"
        eyebrow="Packs con descuento"
        title="Lotes listos para cualquier plan"
        intro="Ahorra respecto al precio por kilo y resuélvelo de una vez. Cambian con la temporada: barbacoa en verano, cocido en invierno."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {PACKS.map((pk) => {
            const n = packs[pk.id] ?? 0;
            const savings = pk.compareAt - pk.price;
            return (
              <motion.article
                key={pk.id}
                {...fadeUp}
                className={`relative flex flex-col rounded-xl border bg-card p-6 ${n > 0 ? "ring-2 ring-primary" : ""}`}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Badge className="bg-forest text-white">
                      <Package className="size-3" /> {pk.tag}
                    </Badge>
                    <h3 className="mt-3 font-serif text-xl font-semibold">{pk.name}</h3>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-3xl leading-none text-primary">{euro(pk.price)}</p>
                    <p className="text-xs text-muted-foreground line-through">{euro(pk.compareAt)}</p>
                  </div>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{pk.description}</p>
                <ul className="mt-3 flex-1 space-y-1 text-sm">
                  {pk.items.map((it) => {
                    const prod = PRODUCTS.find((p) => p.id === it.productId);
                    return (
                      <li key={it.productId} className="flex justify-between gap-2 text-muted-foreground">
                        <span>{prod?.name}</span>
                        <span className="tabular-nums">{it.kg.toLocaleString("es-ES")} kg</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <span className="text-sm font-medium text-forest">
                    Ahorras {euro(savings)}
                  </span>
                  {n === 0 ? (
                    <Button size="sm" onClick={() => addPack(pk.id)}>
                      <Plus className="size-4" /> Añadir pack
                    </Button>
                  ) : (
                    <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm font-semibold text-primary">
                      <Sparkles className="size-4" /> {n} en tu pedido
                    </span>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </Section>

      {/* ── Suscripciones ──────────────────────────────────── */}
      <Section
        id="suscripciones"
        eyebrow="Lotes recurrentes"
        title="Suscríbete a tu carne y olvídate de pensar"
        intro="Elige tu lote, decide la frecuencia y nosotros nos acordamos. Pausa, cambia o cancela cuando quieras con un mensaje."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {SUBSCRIPTIONS.map((s) => (
            <motion.div
              key={s.id}
              {...fadeUp}
              className={`relative flex flex-col rounded-xl border bg-card p-6 ${
                s.id === "lote-semanal" ? "ring-2 ring-primary" : ""
              }`}
            >
              {s.id === "lote-semanal" && (
                <span className="absolute -top-3 left-6 bg-primary px-3 py-1 font-display text-xs tracking-widest text-primary-foreground">
                  LA MÁS PEDIDA
                </span>
              )}
              <p className="font-display text-sm tracking-widest text-muted-foreground uppercase">
                {s.cadence}
              </p>
              <h3 className="mt-1 font-serif text-xl font-semibold">{s.name}</h3>
              <p className="mt-3">
                <span className="font-display text-5xl leading-none text-primary">{euro(s.price)}</span>
                <span className="text-sm text-muted-foreground"> /lote</span>
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{s.description}</p>
              <ul className="mt-4 flex-1 space-y-1 text-sm text-muted-foreground">
                {s.items.map((it) => {
                  const prod = PRODUCTS.find((p) => p.id === it.productId);
                  return (
                    <li key={it.productId} className="flex justify-between gap-2">
                      <span>{prod?.name}</span>
                      <span className="tabular-nums">{it.kg.toLocaleString("es-ES")} kg</span>
                    </li>
                  );
                })}
              </ul>
              <a
                className="mt-6"
                href={whatsappUrl(
                  `¡Hola! Quiero suscribirme al ${s.name} (${s.cadence.toLowerCase()}, ${euro(s.price)} por lote).`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                <Button className="w-full">
                  <Repeat className="size-4" /> Empezar mi suscripción
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-muted-foreground">
          Sin pagos automáticos ni letras pequeñas: te recordamos cada lote por WhatsApp y
          lo preparamos cuando nos confirmas. Pausa o cancela cuando quieras.
        </p>
      </Section>

      {/* ── Cómo funciona ───────────────────────────────────── */}
      <Section
        id="como-funciona"
        eyebrow="Cómo funciona"
        title="De la web a tu mesa en tres pasos"
        intro="Sin registros, sin tarjetas: tu pedido llega por WhatsApp y lo confirmamos con el precio final."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShoppingBasket,
              title: "1 · Elige en el catálogo",
              text: "Marca los kilos que quieres. Verás el precio de cada corte al momento, sin sorpresas.",
            },
            {
              icon: MessageCircle,
              title: "2 · Envíalo por WhatsApp",
              text: "Pulsa «Enviar pedido» y se abre el WhatsApp con tu lista ya redactada. Solo falta darle a enviar.",
            },
            {
              icon: Bike,
              title: "3 · Recógelo o te lo llevamos",
              text: "Listo en 2 h para recoger, o reparto el mismo día en el barrio. Gratis desde 40 €.",
            },
          ].map((s) => (
            <motion.div key={s.title} {...fadeUp} className="rounded-xl border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="size-5 text-primary" />
              </span>
              <h3 className="mt-4 font-serif text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 rounded-xl border bg-muted/40 px-6 py-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="size-4 text-forest" /> Peso exacto delante de ti
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4 text-forest" /> Pedidos hasta 2 h antes del cierre
          </span>
          <span className="inline-flex items-center gap-2">
            <Bike className="size-4 text-forest" /> Reparto propio en el barrio
          </span>
        </div>
      </Section>

      {/* ── Comprobador de envío ────────────────────────────── */}
      <Section
        id="envio"
        eyebrow="Envío"
        title="¿Llegamos a tu puerta?"
        intro="Reparto propio en el barrio el mismo día y envío refrigerado en 24 h al resto de la península. Comprueba tu código postal."
      >
        <div className="mx-auto max-w-xl rounded-2xl border bg-card p-6">
          <Label htmlFor="zip">Código postal</Label>
          <Input
            id="zip"
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            placeholder="Ej. 28005"
            inputMode="numeric"
            className="mt-2 text-lg tracking-widest"
          />
          {zipInfo && (
            <motion.div
              key={zipInfo.title}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 rounded-lg border p-4 ${
                zipInfo.inNeighborhood
                  ? "border-forest/40 bg-forest/10"
                  : "border-accent-foreground/30 bg-accent/30"
              }`}
            >
              <p className="inline-flex items-center gap-2 font-semibold">
                {zipInfo.inNeighborhood ? (
                  <Check className="size-4 text-forest" />
                ) : (
                  <Snowflake className="size-4 text-primary" />
                )}
                {zipInfo.title}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{zipInfo.text}</p>
            </motion.div>
          )}
          <div className="mt-5 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            <span className="inline-flex items-center gap-2">
              <Truck className="size-4 text-primary" /> Barrio: mismo día
            </span>
            <span className="inline-flex items-center gap-2">
              <Snowflake className="size-4 text-primary" /> Península: 24 h refrigerado
            </span>
            <span className="inline-flex items-center gap-2">
              <CalendarClock className="size-4 text-primary" /> Reparto: 8:00–13:00
            </span>
          </div>
        </div>
      </Section>

      {/* ── Recetas ─────────────────────────────────────────── */}
      <Section
        id="recetas"
        eyebrow="Recetas de la casa"
        title="Cocínalo como te lo contaríamos en el mostrador"
        intro="Cada receta lleva su lista de la compra: un toque y los ingredientes entran en tu pedido con las cantidades justas."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {RECIPES.map((r) => (
            <motion.article key={r.id} {...fadeUp} className="flex flex-col rounded-xl border bg-card p-6">
              <div className="flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <Timer className="size-3.5" /> {r.minutes} min
                </span>
                <span className="inline-flex items-center gap-1">
                  <BookOpen className="size-3.5" /> {r.difficulty}
                </span>
              </div>
              <h3 className="mt-3 font-serif text-xl font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{r.description}</p>
              <ol className="mt-4 flex-1 space-y-2 text-sm">
                {r.steps.map((s, i) => (
                  <li key={i} className="flex gap-2">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[11px] font-bold text-secondary-foreground">
                      {i + 1}
                    </span>
                    <span className="text-muted-foreground">{s}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t pt-4">
                {r.items.map((it) => {
                  const prod = PRODUCTS.find((p) => p.id === it.productId);
                  return (
                    <Badge key={it.productId} variant="secondary" className="font-normal">
                      {prod?.name} · {it.kg.toLocaleString("es-ES")} kg
                    </Badge>
                  );
                })}
              </div>
              <Button
                className="mt-4 w-full"
                variant="outline"
                onClick={() => addRecipeItems(r.items)}
              >
                <ShoppingBasket className="size-4" /> Añadir ingredientes al pedido
              </Button>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* ── Mapa de cortes ──────────────────────────────────── */}
      <Section
        id="cortes"
        eyebrow="Mapa de cortes"
        title="¿Y este corte cómo se come?"
        intro="Toca los números del dibujo y te contamos para qué brilla cada pieza del vacuno."
        className="rounded-3xl bg-paper"
      >
        <CutMap />
      </Section>

      {/* ── Nosotros ────────────────────────────────────────── */}
      <Section
        id="nosotros"
        eyebrow="Nosotros"
        title="Tres generaciones detrás del mostrador"
        intro="Abrimos en 1974 con una sierra manual y la receta de chorizo de la abuela Pilar. Hoy seguimos comprando a los mismos ganaderos y madurando en nuestra propia cámara seca. Lo que ha cambiado es que ahora también puedes pedir desde el móvil."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "1974", v: "El año que abrimos" },
            { k: "45 días", v: "Maduración del chuletón" },
            { k: "2 h", v: "Tu pedido listo" },
            { k: "6 ganaderías", v: "De las que compramos" },
          ].map((s) => (
            <motion.div key={s.k} {...fadeUp} className="rounded-xl border bg-card p-6 text-center">
              <p className="font-display text-4xl text-primary">{s.k}</p>
              <p className="mt-1 text-sm text-muted-foreground">{s.v}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── Opiniones ───────────────────────────────────────── */}
      <Section
        eyebrow="Lo que dicen los vecinos"
        title="Clientes que llevan décadas con nosotros"
      >
        <div className="grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <motion.figure key={t.name} {...fadeUp} className="rounded-xl border bg-card p-6">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="size-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed">“{t.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-semibold">— {t.name}</figcaption>
            </motion.figure>
          ))}
        </div>
      </Section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      {/* ── Comparativa ─────────────────────────────────────── */}
      <Section
        id="por-que-nosotros"
        eyebrow="Por qué nosotros"
        title="San Marcos frente al resto"
        intro="Lo que no te da el lineal del súper ni la carnicería que solo abre por la mañana."
      >
        <div className="overflow-x-auto rounded-xl border bg-card">
          <table className="w-full min-w-[640px] text-sm">
            <thead>
              <tr className="border-b bg-muted/50 text-left">
                <th className="px-4 py-3 font-semibold" />
                <th className="px-4 py-3 font-medium text-muted-foreground">Súper</th>
                <th className="px-4 py-3 font-medium text-muted-foreground">Carnicería tradicional</th>
                <th className="px-4 py-3 font-semibold text-primary">San Marcos</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b last:border-0">
                  <td className="px-4 py-3 font-medium">{row.feature}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.supermarket}</td>
                  <td className="px-4 py-3 text-muted-foreground">{row.traditional}</td>
                  <td className="px-4 py-3 font-medium">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="size-4 shrink-0 text-forest" /> {row.ours}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section eyebrow="Dudas frecuentes" title="Lo que más nos preguntáis">
        <Accordion type="single" collapsible className="mx-auto max-w-3xl">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left font-semibold">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Section>

      {/* ── Calculadora de raciones ─────────────────────── */}
      <Section
        eyebrow="Calculadora"
        title="¿Cuánta carne necesitas?"
        intro="Dinos cuántos sois y qué vais a cocinar. Te decimos los kilos exactos y saltas al catálogo con la categoría ya filtrada."
      >
        <div className="mx-auto max-w-xl rounded-2xl border bg-card p-6">
          <Label>¿Cuántos comensales?</Label>
          <div className="mt-2 flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              aria-label="Un comensal menos"
              onClick={() => setPeople((p) => Math.max(1, p - 1))}
            >
              <Minus className="size-4" />
            </Button>
            <span className="min-w-14 text-center font-display text-4xl text-primary tabular-nums">
              {people}
            </span>
            <Button
              variant="outline"
              size="icon"
              aria-label="Un comensal más"
              onClick={() => setPeople((p) => Math.min(60, p + 1))}
            >
              <Plus className="size-4" />
            </Button>
          </div>
          <Label className="mt-5">¿Qué vais a comer?</Label>
          <div className="mt-2 flex flex-wrap gap-2">
            {MEAT_TYPES.map((m) => (
              <Button
                key={m.id}
                size="sm"
                variant={meatType === m.id ? "default" : "outline"}
                onClick={() => setMeatType(m.id)}
              >
                {m.label}
              </Button>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-lg bg-secondary px-4 py-3">
            <p className="font-serif text-xl font-semibold">
              {gramsFor(people, meatType).toLocaleString("es-ES")} kg
            </p>
            <Button
              size="sm"
              onClick={() => {
                setCategory(meatType);
                document.getElementById("catalogo")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Ver cortes recomendados <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </Section>

      {/* ── Contacto ────────────────────────────────────────── */}
      <Section
        id="contacto"
        eyebrow="Contacto"
        title="Ven a vernos o escríbenos"
        intro="Estamos en el barrio de La Latina. Si vienes a la hora del descanso, avisa y te lo dejamos preparado."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="flex flex-col gap-4 rounded-2xl border bg-card p-8">
            <div>
              <p className="text-sm text-muted-foreground">Dirección</p>
              <p className="mt-1 font-serif text-xl font-semibold">{SITE.address}</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground">Horario</p>
                <p className="mt-1 text-sm">{SITE.schedule.weekdays}</p>
                <p className="text-sm">{SITE.schedule.saturday}</p>
                <p className="text-sm">{SITE.schedule.closed}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Teléfono y email</p>
                <a className="mt-1 block text-sm hover:text-primary" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>
                  {SITE.phone}
                </a>
                <a className="block text-sm hover:text-primary" href={`mailto:${SITE.email}`}>
                  {SITE.email}
                </a>
              </div>
            </div>
            <div className="mt-2 flex flex-wrap gap-3">
              <a href={whatsappUrl("¡Hola! Quiero hacer un pedido.")} target="_blank" rel="noreferrer">
                <Button>
                  <MessageCircle className="size-4" /> WhatsApp directo
                </Button>
              </a>
              <a href={SITE.mapsUrl} target="_blank" rel="noreferrer">
                <Button variant="outline">
                  <MapPin className="size-4" /> Cómo llegar
                </Button>
              </a>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-foreground p-8 text-background">
            <div className="pointer-events-none absolute -right-6 -bottom-10 select-none font-display text-[10rem] leading-none text-background/10">
              SM
            </div>
            <p className="font-display text-3xl tracking-wide">¿QUÉ CORTAMOS HOY?</p>
            <p className="mt-3 max-w-xs text-sm text-background/70">
              Cuéntanos qué vas a cocinar y te sugerimos el corte, el punto de
              maduración y el truco de cocina. Sin compromiso.
            </p>
            <a
              href={whatsappUrl("¡Hola! Voy a cocinar… y quiero que me recomendéis un corte.")}
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="secondary" className="mt-6">
                Pedir consejo por WhatsApp <ArrowRight className="size-4" />
              </Button>
            </a>
          </div>
        </div>
      </Section>

      {/* ── B2B Hostelería ─────────────────────────────────── */}
      <section className="border-y bg-foreground text-background">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-4 py-12 md:flex-row md:items-center">
          <div className="max-w-xl">
            <p className="inline-flex items-center gap-2 font-display text-sm tracking-[0.25em] text-background/60 uppercase">
              <Building2 className="size-4" /> Hostelería y empresas
            </p>
            <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl">
              ¿Tienes un restaurante? Precios de canal Horeca
            </h2>
            <p className="mt-2 text-sm text-background/70">
              Tarifa mayorista para bares y restaurantes, pedido fijo semanal,
              facturación mensual y reparto a primera hora. Facturamos como
              autónomos, sin sorpresas de temporada.
            </p>
          </div>
          <a
            href={whatsappUrl(
              "¡Hola! Tengo un local de hostelería y quiero conocer la tarifa Horeca.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <Button variant="secondary" size="lg">
              Pedir tarifa Horeca <ArrowRight className="size-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="border-t bg-foreground text-background">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
          <div>
            <p className="font-serif text-lg font-bold">{SITE.name}</p>
            <p className="mt-2 text-sm text-background/60">{SITE.claim}</p>
            <p className="mt-4 text-xs text-background/40">
              © {new Date().getFullYear()} {SITE.name} · Desde {SITE.established}
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold">Secciones</p>
            <ul className="mt-3 space-y-2 text-sm text-background/60">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="hover:text-background">{n.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold">Contacto</p>
            <ul className="mt-3 space-y-2 text-sm text-background/60">
              <li>{SITE.address}</li>
              <li>{SITE.phone}</li>
              <li>{SITE.email}</li>
              <li>
                <a href={SITE.instagram} target="_blank" rel="noreferrer" className="hover:text-background">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      
			<p style="font-size: 0.75rem; opacity: 0.7; margin: 0.5rem 0 0;">
				<small>Web creada por <a href="https://sur-digital.vercel.app/" rel="noopener">Sur Digital</a></small>
			</p>
</footer>

      {/* ── Barra de pedido fija (móvil) ────────────────────── */}
      {itemCount > 0 && (
        <motion.div
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 p-3 shadow-lg backdrop-blur md:hidden"
        >
          <Button
            className="w-full"
            size="lg"
            onClick={() => {
              saveLastOrder({ cart, packs, at: Date.now() });
              setOrderOpen(true);
            }}
          >
            <ShoppingBasket className="size-4" />
            {itemCount} {itemCount === 1 ? "artículo" : "artículos"} · {euro(subtotal)} — Revisar pedido
          </Button>
        </motion.div>
      )}

      <JsonLd />
      <OrderDialog
        open={orderOpen}
        onOpenChange={setOrderOpen}
        cart={cart}
        packs={packs}
        onSubmit={() => {
          const snapshot = { cart, packs, at: Date.now() };
          saveLastOrder(snapshot);
          setLast(snapshot);
        }}
        onClear={() => {
          setCart({});
          setPacks({});
          setOrderOpen(false);
        }}
      />
    </div>
  );
}
