import { useQuery, slowPoll } from "@app-client";
import { api } from "@/lib/api";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SERVICES, PROMOS, SCHEDULE, DAY_NAMES, SALON, rangePrice, eur, minutesForService, durationLabel } from "@/lib/services";
import {
  Bath,
  BellRing,
  Brush,
  CalendarCheck,
  Camera,
  Clock,
  Gift,
  Heart,
  MapPin,
  MessageCircle,
  PawPrint,
  Phone,
  Scissors,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Users,
} from "lucide-react";
import type { Service } from "@/lib/services";

const SERVICE_ICONS: Record<Service["icon"], typeof Scissors> = {
  scissors: Scissors,
  bath: Bath,
  sparkles: Sparkles,
  brush: Brush,
  stethoscope: Stethoscope,
  paw: PawPrint,
};

const SIZE_COLS = [
  { key: "S", label: "Pequeño", hint: "< 10 kg" },
  { key: "M", label: "Mediano", hint: "10–20 kg" },
  { key: "L", label: "Grande", hint: "20–40 kg" },
  { key: "XL", label: "Gigante", hint: "+ 40 kg" },
] as const;

const SEED_REVIEWS = [
  {
    _id: "seed-1",
    authorName: "Marta G.",
    petName: "Nube",
    rating: 5,
    text: "Nube es nerviosa con los secadores y en Patitas la tratan con una calma increíble. Sale preciosa y sin estrés. La agenda online es comodísima.",
  },
  {
    _id: "seed-2",
    authorName: "Diego R.",
    petName: "Rocky",
    rating: 5,
    text: "Reservé un deshedding para mi husky desde el móvil en un minuto. Me mandaron fotos antes de recogerlo. Repetiré seguro.",
  },
  {
    _id: "seed-3",
    authorName: "Lucía P.",
    petName: "Coco",
    rating: 4,
    text: "Muy profesionales, explican qué champú usan según la piel de tu perro. El detalle de las fotos al terminar me encanta.",
  },
];

function PawLogo({ className = "size-8" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-sm ${className}`}>
      <PawPrint className="size-3/5" />
    </span>
  );
}

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`size-4 ${i <= rating ? "fill-amber-400 text-amber-400" : "text-muted-foreground/30"}`}
        />
      ))}
    </div>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5 },
};

export default function Landing() {
  const publicReviews = useQuery(api.reviews.listPublicReviews, {}, slowPoll);
  const reviews = publicReviews && publicReviews.length > 0 ? publicReviews : SEED_REVIEWS;

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2.5">
            <PawLogo className="size-9" />
            <span className="font-display text-xl font-semibold tracking-tight">Patitas</span>
            <span className="hidden text-xs text-muted-foreground sm:inline">· peluquería canina</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground md:flex">
            <a href="#servicios" className="transition-colors hover:text-foreground">Servicios</a>
            <a href="#tarifas" className="transition-colors hover:text-foreground">Tarifas</a>
            <a href="#opiniones" className="transition-colors hover:text-foreground">Opiniones</a>
            <a href="#contacto" className="transition-colors hover:text-foreground">Contacto</a>
          </nav>
          <Button asChild className="rounded-full">
            <a href="/reservar">
              <CalendarCheck className="size-4" />
              Reservar cita
            </a>
          </Button>
        </div>
      </header>

      {/* ---------- Hero ---------- */}
      <section className="relative overflow-hidden">
        <div className="paw-pattern-soft absolute inset-0" aria-hidden />
        <div className="absolute -top-24 right-[-10%] size-96 rounded-full bg-accent/60 blur-3xl" aria-hidden />
        <div className="absolute bottom-[-30%] left-[-8%] size-80 rounded-full bg-secondary blur-3xl" aria-hidden />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 lg:grid-cols-2 lg:pb-28 lg:pt-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-5 gap-1.5 rounded-full px-3 py-1 text-xs">
              <Heart className="size-3.5 text-primary" />
              Método sin jaulas · trato calmado
            </Badge>
            <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
              Tu perro sale{" "}
              <span className="relative inline-block text-primary">
                guapo
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 120 12" fill="none" aria-hidden>
                  <path d="M3 9C30 3 70 3 117 8" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-primary/40" />
                </svg>
              </span>
              .<br />Tú sales relajado.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Peluquería canina boutique en Chamberí. Reserva online en un minuto,
              elige servicio y hora, y recibe fotos de tu peludo recién arreglado.
              Sin esperas ni llamadas.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild size="lg" className="rounded-full text-base shadow-lg shadow-primary/25">
                <a href="/reservar">
                  <CalendarCheck className="size-5" />
                  Reservar ahora
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                <a href="#tarifas">Ver tarifas</a>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
              <span className="flex items-center gap-2">
                <Star className="size-4 fill-amber-400 text-amber-400" />
                <strong className="text-foreground">4,9</strong> · 300+ reseñas
              </span>
              <span className="flex items-center gap-2">
                <PawPrint className="size-4 text-primary" />
                <strong className="text-foreground">1.200+</strong> peludos felices
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="size-4 text-primary" />
                Peluqueras certificadas
              </span>
            </div>
          </motion.div>

          {/* Tarjeta de cita — preview del producto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md"
          >
            <div className="absolute inset-0 -rotate-3 rounded-3xl bg-secondary" aria-hidden />
            <div className="relative rounded-3xl border border-border/70 bg-card p-6 shadow-xl shadow-primary/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-accent text-xl">🐶</span>
                  <div>
                    <p className="font-semibold leading-tight">Nube · Caniche M</p>
                    <p className="text-xs text-muted-foreground">Baño + corte completo</p>
                  </div>
                </div>
                <Badge className="rounded-full">Confirmada</Badge>
              </div>
              <div className="mt-5 space-y-3 rounded-2xl bg-muted/60 p-4 text-sm">
                <p className="flex items-center justify-between">
                  <span className="text-muted-foreground">Cuándo</span>
                  <span className="font-medium">sábado 10:00 – 11:35</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-muted-foreground">Peluquera</span>
                  <span className="font-medium">Elena</span>
                </p>
                <p className="flex items-center justify-between">
                  <span className="text-muted-foreground">Extras</span>
                  <span className="font-medium">Uñas · Higiene dental</span>
                </p>
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-2xl border border-dashed border-primary/40 bg-primary/5 p-3 text-xs text-muted-foreground">
                <Camera className="size-4 shrink-0 text-primary" />
                Te enviamos 3 fotos del resultado antes de venir a recogerlo.
              </div>
              <div className="mt-4 flex -space-x-2">
                {["🛁", "✂️", "🐾", "💖"].map((e, i) => (
                  <span key={i} className="flex size-9 items-center justify-center rounded-full border-2 border-card bg-secondary text-sm">
                    {e}
                  </span>
                ))}
                <span className="ml-4 flex items-center text-xs font-medium text-muted-foreground">
                  5ª visita · baños gratis a la 6ª
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Diferenciales ---------- */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <motion.div {...fadeUp} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: CalendarCheck,
              title: "Reserva 24/7 online",
              text: "Elige servicio, hora y peludo desde el móvil. Confirmación al instante.",
            },
            {
              icon: BellRing,
              title: "Recordatorios y avisos",
              text: "Email e historial de notificaciones: confirmación, recordatorio el día antes y huecos liberados.",
            },
            {
              icon: Camera,
              title: "Fotos del resultado",
              text: "Antes de recogerlo recibes el antes/después en tu panel de cliente.",
            },
            {
              icon: Gift,
              title: "Fidelidad + bonos",
              text: "Sellos hacia el baño gratis y bonos de 4 sesiones con 15% de descuento.",
            },
          ].map((f) => (
            <div key={f.title} className="group rounded-2xl border border-border/70 bg-card p-5 transition-shadow hover:shadow-md">
              <span className="mb-4 flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground transition-transform group-hover:scale-105">
                <f.icon className="size-5" />
              </span>
              <h3 className="font-semibold">{f.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ---------- Servicios ---------- */}
      <section id="servicios" className="scroll-mt-20 bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/40 text-primary">Servicios</Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Todo lo que tu peludo necesita
            </h2>
            <p className="mt-3 text-muted-foreground">
              Productos dermatológicos, tiempo suficiente por perro y ninguna prisa.
              Precios según tamaño, sin sorpresas.
            </p>
          </motion.div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => {
              const Icon = SERVICE_ICONS[s.icon];
              return (
                <motion.div
                  key={s.key}
                  {...fadeUp}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <div className="flex items-start justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-accent text-accent-foreground">
                      <Icon className="size-6" />
                    </span>
                    {s.popular && (
                      <Badge className="rounded-full bg-primary/90">Más pedido</Badge>
                    )}
                  </div>
                  <h3 className="mt-4 font-display text-lg font-semibold">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{s.tagline}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-4">
                    <div>
                      <p className="text-lg font-bold">{rangePrice(s)}</p>
                      <p className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Clock className="size-3" /> {durationLabel(minutesForService(s))}
                      </p>
                    </div>
                    <Button asChild size="sm" variant="outline" className="rounded-full">
                      <a href={`/reservar?service=${s.key}`}>Reservar</a>
                    </Button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Tarifas por tamaño + promos ---------- */}
      <section id="tarifas" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/40 text-primary">Tarifas claras</Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Precio cerrado según tamaño
            </h2>
            <p className="mt-3 text-muted-foreground">
              Sin sorpresas: el precio depende del servicio y del tamaño de tu perro.
              Los extras se suman antes de confirmar la reserva.
            </p>
          </motion.div>

          <motion.div {...fadeUp} className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border/70 bg-card">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border/70 bg-muted/50 text-left">
                    <th className="px-5 py-3.5 font-semibold">Servicio</th>
                    {SIZE_COLS.map((c) => (
                      <th key={c.key} className="px-4 py-3.5 text-center font-semibold">
                        {c.label}
                        <span className="block text-xs font-normal text-muted-foreground">{c.hint}</span>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SERVICES.map((s) => {
                    const mult = { S: 1, M: 1.25, L: 1.55, XL: 1.95 };
                    return (
                      <tr key={s.key} className="border-b border-border/50 last:border-0">
                        <td className="px-5 py-3.5 font-medium">{s.name}</td>
                        {SIZE_COLS.map((c) => (
                          <td key={c.key} className="px-4 py-3.5 text-center tabular-nums">
                            {eur(Math.round(s.basePrice * mult[c.key] * 100) / 100)}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </motion.div>

          <div className="mx-auto mt-8 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROMOS.map((p) => (
              <div key={p.key} className="rounded-2xl border border-primary/25 bg-primary/5 p-5">
                <p className="font-display text-2xl font-semibold text-primary">−{p.discountPct}%</p>
                <p className="mt-1 font-semibold">{p.name}</p>
                <p className="mt-1 text-sm text-muted-foreground">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cómo funciona ---------- */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Reservar lleva menos de un minuto
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { n: "1", title: "Registra a tu peludo", text: "Nombre, raza y tamaño. Solo la primera vez: lo recordamos para siempre." },
              { n: "2", title: "Elige servicio y hora", text: "Ves los huecos libres en tiempo real y el precio cerrado antes de confirmar." },
              { n: "3", title: "Recoge a un peludo guapo", text: "Te avisamos cuando esté listo y con fotos del resultado en tu panel." },
            ].map((step, i) => (
              <motion.div key={step.n} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative text-center">
                <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary font-display text-xl font-semibold text-primary-foreground shadow-lg shadow-primary/25">
                  {step.n}
                </span>
                <h3 className="mt-4 font-semibold">{step.title}</h3>
                <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Opiniones ---------- */}
      <section id="opiniones" className="scroll-mt-20 py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="mb-4 rounded-full border-primary/40 text-primary">Opiniones</Badge>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Lo que dicen sus humanos
            </h2>
          </motion.div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {reviews.slice(0, 6).map((r, i) => (
              <motion.figure
                key={r._id}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex flex-col rounded-2xl border border-border/70 bg-card p-6"
              >
                <StarRow rating={r.rating} />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 flex items-center gap-3 border-t border-border/60 pt-4 text-sm">
                  <span className="flex size-9 items-center justify-center rounded-full bg-secondary font-semibold">
                    {r.authorName.charAt(0)}
                  </span>
                  <div>
                    <p className="font-medium leading-tight">{r.authorName}</p>
                    <p className="text-xs text-muted-foreground">humano de {r.petName ?? "un peludo"}</p>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="bg-secondary/50 py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.h2 {...fadeUp} className="text-center font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Preguntas frecuentes
          </motion.h2>
          <motion.div {...fadeUp} className="mt-8">
            <Accordion type="single" collapsible className="rounded-2xl border border-border/70 bg-card px-5">
              {[
                {
                  q: "¿Cuánto tarda un baño y corte?",
                  a: "Entre 60 y 150 minutos según tamaño, tipo de manto y extras. Te mostramos la duración exacta al reservar y te avisamos cuando esté listo.",
                },
                {
                  q: "Mi perro es nervioso, ¿podéis atenderlo?",
                  a: "Sí, es nuestra especialidad. Trabajamos sin jaulas, con secado de baja intensidad, pausas y refuerzo positivo. Los peludos sénior tienen protocolo propio con bañera de acceso fácil.",
                },
                {
                  q: "¿Qué pasa si llego tarde o quiero cancelar?",
                  a: "Puedes cancelar o reprogramar gratis desde tu panel hasta 4 horas antes de la cita. Si tu perro está enfermo (vómitos, tosse…), reagenda sin coste: no atendemos peludos con procesos activos.",
                },
                {
                  q: "¿Usáis mi champú o productos concretos?",
                  a: "Trabajamos con gammadermatológicos (Dermoscent y CeraVe Pet). Si tu veterinario ha pautado uno concreto, traes el tuyo y no te cobramos recargo.",
                },
                {
                  q: "¿Cómo funciona la tarjeta fidelidad?",
                  a: "Cada visita completada suma un sello. Al llegar a 6, el siguiente baño e higiene es gratis. Los sellos se acumulan automáticamente en tu panel, sin tarjetas físicas.",
                },
              ].map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base font-semibold">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* ---------- Contacto ---------- */}
      <section id="contacto" className="scroll-mt-20 py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2">
          <motion.div {...fadeUp}>
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Ven a vernos o escríbenos
            </h2>
            <p className="mt-3 text-muted-foreground">
              Estamos en Chamberí, con entrada a pie de calle. La primera visita
              incluye valoración gratuita del manto y la piel.
            </p>
            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center gap-3">
                <MapPin className="size-4 shrink-0 text-primary" /> {SALON.address}
              </p>
              <p className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={SALON.phoneHref} className="hover:underline">{SALON.phone}</a>
              </p>
              <p className="flex items-center gap-3">
                <MessageCircle className="size-4 shrink-0 text-primary" />
                <a href={SALON.whatsappHref} target="_blank" rel="noreferrer" className="hover:underline">WhatsApp directo</a>
              </p>
              <p className="flex items-center gap-3">
                <Users className="size-4 shrink-0 text-primary" /> <a href={SALON.instagram} target="_blank" rel="noreferrer" className="hover:underline">@patitas.grooming</a>
              </p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <a href="/reservar">Reservar cita</a>
              </Button>
              <Button asChild variant="outline" className="rounded-full">
                <a href={SALON.whatsappHref} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border/70 bg-card p-6">
              <h3 className="mb-4 flex items-center gap-2 font-semibold">
                <Clock className="size-4 text-primary" /> Horario
              </h3>
              <ul className="space-y-1.5 text-sm">
                {[1, 2, 3, 4, 5, 6, 0].map((d) => {
                  const sched = SCHEDULE[d];
                  const closed = !sched;
                  return (
                    <li key={d} className="flex items-center justify-between border-b border-border/40 pb-1.5 last:border-0">
                      <span className={closed ? "text-muted-foreground" : ""}>{DAY_NAMES[d]}</span>
                      <span className={closed ? "text-xs font-medium text-muted-foreground" : "font-medium"}>
                        {closed ? "Cerrado" : `${sched.open} – ${sched.close}`}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="paw-pattern relative flex h-44 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-secondary/60">
              <div className="relative z-10 text-center">
                <MapPin className="mx-auto size-8 text-primary" />
                <p className="mt-2 font-medium">{SALON.address}</p>
                <p className="text-xs text-muted-foreground">Metro Iglesia · Bus 12, 40</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- CTA final ---------- */}
      <section className="px-4 pb-20 sm:px-6">
        <motion.div
          {...fadeUp}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center text-primary-foreground sm:px-12"
        >
          <div className="paw-pattern absolute inset-0 opacity-20" aria-hidden />
          <div className="relative">
            <PawPrint className="mx-auto size-10 opacity-90" />
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              ¿Le toca baño?
            </h2>
            <p className="mx-auto mt-3 max-w-md text-primary-foreground/85">
              Reserva en un minuto y llévate 15% en tu primera visita.
            </p>
            <Button asChild size="lg" variant="secondary" className="mt-7 rounded-full text-base font-semibold shadow-lg">
              <a href="/reservar">
                <CalendarCheck className="size-5" />
                Quiero reservar
              </a>
            </Button>
          </div>
        </motion.div>
      </section>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-border/60 bg-card/60">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row">
          <div className="flex items-center gap-2.5">
            <PawLogo className="size-8" />
            <div>
              <p className="font-display font-semibold leading-tight">Patitas</p>
              <p className="text-xs text-muted-foreground">{SALON.address}</p>
            </div>
          </div>
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-foreground">Servicios</a>
            <a href="#tarifas" className="hover:text-foreground">Tarifas</a>
            <a href="#opiniones" className="hover:text-foreground">Opiniones</a>
            <a href="#contacto" className="hover:text-foreground">Contacto</a>
            <a href="/dashboard" className="hover:text-foreground">Mi área</a>
          </nav>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Patitas · Hecho con mimo</p>
        </div>
      </footer>
    </div>
  );
}
