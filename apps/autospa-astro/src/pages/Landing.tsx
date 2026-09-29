import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { api, errorMessage, type Review } from "@/api";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import {
  Zap,
  Sparkles,
  Gem,
  Shield,
  CalendarCheck,
  Clock,
  Droplets,
  Brush,
  Sun,
  ChevronDown,
  Star,
  StarHalf,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Check,
  Loader2,
  Menu,
  X,
  CheckCircle2,
  Quote,
  Crown,
  Sparkle,
  User,
  BadgeCheck,
  Gift,
  Truck,
  ShieldCheck,
  ShieldX,
  MessageCircle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BrandMark } from "@/components/BrandMark";
import {
  SERVICES,
  VEHICLE_TYPES,
  EXTRA_SERVICES,
  PASS_OFFERS,
  PROMO,
  PICKUP_PRICE,
  WHATSAPP_URL,
  priceFor,
  REVIEWS,
  FAQS,
  type ServiceId,
  type VehicleType,
} from "@/lib/services";

const NAV = [
  { href: "#servicios", label: "Servicios" },
  { href: "#precios", label: "Precios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

const SERVICE_ICONS = {
  zap: Zap,
  sparkles: Sparkles,
  gem: Gem,
  shield: Shield,
};

const PROCESS = [
  {
    icon: CalendarCheck,
    title: "Reserva en 2 minutos",
    text: "Elige servicio, fecha y franja horaria desde tu área de cliente. Sin llamadas.",
  },
  {
    icon: Brush,
    title: "Pre-lavado y espuma",
    text: "Descontaminamos con espuma activa y pre-lavado a presión para no rayar la pintura.",
  },
  {
    icon: Droplets,
    title: "Lavado a dos cubos",
    text: "Método profesional a dos cubos con guantes de microfibra y secado suave.",
  },
  {
    icon: Sun,
    title: "Sellado y entrega",
    text: "Sellamos, repasamos detalles y te avisamos para recoger tu coche impecable.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, ease: "easeOut" as const },
};

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
        rating >= i + 1 ? (
          <Star key={i} className="size-4 fill-amber-400 text-amber-400" />
        ) : rating > i ? (
          <StarHalf key={i} className="size-4 fill-amber-400 text-amber-400" />
        ) : (
          <Star key={i} className="size-4 text-muted-foreground/50" />
        ),
      )}
    </div>
  );
}

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return { ref, inView };
}

function PriceCalculator() {
  const [service, setService] = useState<ServiceId>("complete");
  const [vehicle, setVehicle] = useState<VehicleType>("sedan");
  const navigate = useNavigate();
  const price = priceFor(service, vehicle);

  return (
    <div className="glass rounded-2xl border border-border/70 p-6 shadow-xl">
      <div className="mb-5 flex items-center gap-2">
        <Sparkle className="size-5 text-primary" />
        <h3 className="font-display text-lg font-semibold">
          Calcula tu presupuesto
        </h3>
      </div>

      <div className="space-y-5">
        <div>
          <Label className="mb-2 block text-muted-foreground">Servicio</Label>
          <div className="grid grid-cols-2 gap-2">
            {SERVICES.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setService(s.id)}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-all ${
                  service === s.id
                    ? "border-primary bg-primary/10 text-foreground glow-brand"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/40"
                }`}
              >
                {s.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <Label className="mb-2 block text-muted-foreground">Vehículo</Label>
          <div className="grid grid-cols-2 gap-2">
            {VEHICLE_TYPES.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setVehicle(v.id)}
                className={`rounded-lg border px-3 py-2 text-left text-sm transition-all ${
                  vehicle === v.id
                    ? "border-primary bg-primary/10 text-foreground glow-brand"
                    : "border-border bg-card/50 text-muted-foreground hover:border-primary/40"
                }`}
              >
                {v.label}
                <span className="block text-xs text-muted-foreground/70">
                  {v.example}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl bg-primary/10 border border-primary/25 p-4 flex items-center justify-between">
          <div>
            <p className="text-xs text-muted-foreground">Precio estimado</p>
            <p className="font-display text-3xl font-bold text-primary">
              {price}€
            </p>
          </div>
          <Button
            onClick={() => navigate("/dashboard")}
            className="gap-2 shine relative overflow-hidden"
          >
            <CalendarCheck className="size-4" />
            Reservar
          </Button>
        </div>
        <p className="text-xs text-muted-foreground">
          Precio orientativo según estado del vehículo. Confirma el precio
          exacto en el taller.
        </p>
      </div>
    </div>
  );
}

function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const { ref, inView } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border shadow-2xl select-none">
        <div className="relative aspect-[16/9] bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
          {/* mitad "antes" */}
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-800 to-black" />
          <div className="absolute inset-0 grid-lines opacity-40" />
          <div className="absolute left-6 top-6 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-zinc-300 backdrop-blur">
            ANTES
          </div>
          {/* mitad "después" */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-cyan-900/60 via-cyan-700/40 to-slate-900"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          />
          <div
            className="absolute inset-0"
            style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
          >
            <div className="absolute right-6 top-6 rounded-full bg-primary/90 px-3 py-1 text-xs font-semibold text-primary-foreground backdrop-blur">
              DESPUÉS ✨
            </div>
            <div className="absolute bottom-8 right-8 h-24 w-40 rounded-full bg-primary/25 blur-2xl" />
          </div>
          {/* divisor */}
          <div
            className="absolute inset-y-0 w-0.5 bg-white/80"
            style={{ left: `${pos}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex size-10 items-center justify-center rounded-full bg-white text-slate-900 shadow-lg">
              <Menu className="size-4 rotate-90" />
            </div>
          </div>
          <input
            type="range"
            min={5}
            max={95}
            value={pos}
            onChange={(e) => setPos(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
            aria-label="Comparar antes y después"
          />
        </div>
      </div>
      <p className="mt-3 text-center text-sm text-muted-foreground">
        Desliza para comparar un detailing premium antes y después.
      </p>
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [body, setBody] = useState("");
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("sending");
    setError(null);
    try {
      const response = await api.api.messages.$post({
        json: { name, email, phone: phone || undefined, body },
      });
      if (!response.ok) {
        setError(await errorMessage(response, "Error al enviar"));
        setState("idle");
        return;
      }

      setState("sent");
      setName("");
      setEmail("");
      setPhone("");
      setBody("");
    } catch {
      setError("No se pudo enviar el mensaje.");
      setState("idle");
    }
  };

  if (state === "sent") {
    return (
      <div className="glass rounded-2xl border border-border p-8 text-center">
        <CheckCircle2 className="mx-auto size-12 text-emerald-400" />
        <h3 className="mt-4 font-display text-xl font-semibold">
          ¡Mensaje enviado!
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Te responderemos en menos de 24 horas laborables.
        </p>
        <Button
          variant="outline"
          className="mt-6"
          onClick={() => setState("idle")}
        >
          Enviar otro mensaje
        </Button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="glass rounded-2xl border border-border p-6 space-y-4"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="c-name">Nombre *</Label>
          <Input
            id="c-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="c-email">Email *</Label>
          <Input
            id="c-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="c-phone">Teléfono (opcional)</Label>
        <Input
          id="c-phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="+34 600 000 000"
        />
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="c-body">Mensaje *</Label>
        <Textarea
          id="c-body"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          placeholder="Cuéntanos qué necesita tu coche..."
        />
      </div>
      {error && <p className="text-sm text-red-400">{error}</p>}
      <Button
        type="submit"
        disabled={state === "sending"}
        className="w-full gap-2 shine relative overflow-hidden"
      >
        {state === "sending" ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          <Mail className="size-4" />
        )}
        {state === "sending" ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
}

function FloatingCTA() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const unsub = scrollY.on("change", (v) => setVisible(v > 600));
    return unsub;
  }, [scrollY]);
  if (!visible) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5"
    >
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noreferrer"
        aria-label="Escríbenos por WhatsApp"
        className="flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-110"
      >
        <MessageCircle className="size-6" />
      </a>
      <Button
        size="lg"
        className="rounded-full shadow-2xl glow-brand md:hidden"
        onClick={() =>
          document
            .querySelector("#precios")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <CalendarCheck className="size-5" />
        Reservar cita
      </Button>
    </motion.div>
  );
}

export default function Landing() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const heroOpacity = useSpring(scrollY, { stiffness: 60, damping: 20 });

  // Reseñas verificadas reales (clientes con servicio finalizado). There is no
  // query cache to lean on, so this is a plain fetch on mount.
  const [verifiedReviews, setVerifiedReviews] = useState<Review[] | null>(null);

  useEffect(() => {
    let cancelled = false;
    void api.api.reviews
      .$get()
      .then((response) => (response.ok ? response.json() : []))
      .then((loaded: Review[]) => {
        if (!cancelled) setVerifiedReviews(loaded);
      })
      .catch(() => {
        if (!cancelled) setVerifiedReviews([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const hasVerified = verifiedReviews !== null && verifiedReviews.length > 0;

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground"
    >
      {/* NAVBAR */}
      <header className="fixed top-0 z-40 w-full glass border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <button onClick={() => scrollTo("#top")} aria-label="Ir arriba">
            <BrandMark />
          </button>
          <nav className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollTo(item.href)}
                className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-primary/10 hover:text-foreground"
              >
                {item.label}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="hidden sm:inline-flex gap-1.5"
              onClick={() => navigate("/dashboard")}
            >
              <User className="size-4" />
              Mi área
            </Button>
            <Button
              size="sm"
              className="gap-1.5"
              onClick={() => navigate("/dashboard")}
            >
              <CalendarCheck className="size-4" />
              Reservar
            </Button>
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menú"
            >
              {menuOpen ? (
                <X className="size-5" />
              ) : (
                <Menu className="size-5" />
              )}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="glass border-t border-border/60 lg:hidden">
            <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col">
              {NAV.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollTo(item.href)}
                  className="rounded-md px-3 py-2.5 text-left text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="top"
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 pt-24 pb-16"
      >
        <div className="absolute inset-0 grid-lines" />
        <div className="absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/15 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 h-72 w-72 rounded-full bg-amber-500/10 blur-[100px]" />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto mb-6 flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-medium text-primary"
          >
            <Sparkles className="size-3.5" />
            Detailing profesional en Madrid centro
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl font-extrabold leading-[1.05] sm:text-6xl lg:text-7xl"
          >
            Tu coche como <span className="text-gradient">recién salido</span>{" "}
            del concesionario
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground"
          >
            Lavado express, detailing premium y tratamientos cerámicos con
            reserva online en 2 minutos. Métodos profesionales, productos de
            gama alta y un acabado obsesivo.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.44 }}
            className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button
              size="lg"
              className="gap-2 text-base shine relative overflow-hidden glow-brand"
              onClick={() => navigate("/dashboard")}
            >
              <CalendarCheck className="size-5" />
              Reserva tu cita online
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base"
              onClick={() => scrollTo("#servicios")}
            >
              Ver servicios y precios
              <ChevronDown className="size-4" />
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="size-4 text-emerald-400" /> +2.500 coches
              tratados
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="size-4 fill-amber-400 text-amber-400" /> 4,9/5 en
              Google (312 reseñas)
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="size-4 text-primary" /> Express sin cita en 30
              min
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.75 }}
            className="mx-auto mt-6 flex w-fit items-center gap-2 rounded-full border border-amber-500/40 bg-amber-500/10 px-4 py-1.5 text-xs font-medium text-amber-400"
          >
            <ShieldCheck className="size-3.5" />
            Cerámico 9H con garantía de 24 meses y mantenimiento incluido
          </motion.div>
        </motion.div>

        <div className="pointer-events-none absolute bottom-8 flex animate-bounce text-muted-foreground">
          <ChevronDown className="size-5" />
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Servicios
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Elige cómo tratamos tu coche
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Desde un lavado rápido hasta protección cerámica de larga duración.
            Precios transparentes, sin sorpresas.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => {
            const Icon = SERVICE_ICONS[s.icon];
            return (
              <motion.div
                key={s.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className={`group relative rounded-2xl border p-6 transition-all hover:-translate-y-1.5 ${
                  s.highlight
                    ? "border-primary/50 bg-primary/[0.07] shadow-[0_0_40px_-10px] shadow-primary/30"
                    : "border-border bg-card/60 hover:border-primary/40"
                }`}
              >
                {s.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                    MÁS PEDIDO
                  </span>
                )}
                <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform group-hover:scale-110">
                  <Icon className="size-5.5" />
                </div>
                <h3 className="font-display text-xl font-bold">{s.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  {s.tagline}
                </p>
                <ul className="mt-4 space-y-2">
                  {s.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Clock className="size-3.5" />{" "}
                    {s.durationMin < 60
                      ? `${s.durationMin} min`
                      : `${s.durationMin / 60} h`}
                  </span>
                  <span className="font-display text-lg font-bold text-primary">
                    desde {priceFor(s.id, "small")}€
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* PRECIOS + CALCULADORA */}
      <section
        id="precios"
        className="border-y border-border/60 bg-card/30 py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            {...fadeUp}
            className="mx-auto mb-10 max-w-2xl rounded-2xl border border-primary/40 bg-primary/[0.08] p-5 text-center"
          >
            <p className="font-display text-lg font-bold text-primary">
              🎉 Promo de estreno: código{" "}
              <span className="rounded-md bg-primary px-2 py-0.5 text-primary-foreground">
                {PROMO.code}
              </span>
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {PROMO.label} · reservando desde la web
            </p>
          </motion.div>

          <div className="grid items-start gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Precios claros
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                Paga según tu coche, no según tu suerte
              </h2>
              <p className="mt-4 text-muted-foreground">
                La tarifa depende del tamaño del vehículo. Usa la calculadora y
                reserva en el mismo flujo: sin llamadas ni esperas.
              </p>
              <div className="mt-8 overflow-hidden rounded-2xl border border-border">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/50 text-left">
                      <th className="px-4 py-3 font-semibold">Servicio</th>
                      <th className="px-4 py-3 font-semibold text-right">
                        Compacto
                      </th>
                      <th className="px-4 py-3 font-semibold text-right">
                        SUV
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {SERVICES.map((s) => (
                      <tr
                        key={s.id}
                        className="border-b border-border/50 last:border-0"
                      >
                        <td className="px-4 py-3">{s.name}</td>
                        <td className="px-4 py-3 text-right font-medium text-primary">
                          {priceFor(s.id, "small")}€
                        </td>
                        <td className="px-4 py-3 text-right font-medium text-primary">
                          {priceFor(s.id, "suv")}€
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-primary" /> {PROMO.label}{" "}
                  con el código {PROMO.code}
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-primary" /> 1 punto de
                  fidelidad por cada 10€ — cada 100 puntos, un Express gratis
                </li>
                <li className="flex gap-2">
                  <Check className="mt-0.5 size-4 text-primary" /> Tarifas
                  especiales para flotas y empresas
                </li>
              </ul>
            </motion.div>
            <motion.div {...fadeUp}>
              <PriceCalculator />
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section id="proceso" className="mx-auto max-w-7xl px-4 py-24 sm:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Proceso
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Método de detailing en 4 pasos
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card/60 p-6"
            >
              <span className="absolute -top-4 right-5 font-display text-6xl font-extrabold text-primary/15">
                {i + 1}
              </span>
              <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <p.icon className="size-5" />
              </div>
              <h3 className="font-display text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BONOS Y EXTRAS */}
      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Ahorra
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Bonos y extras
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Los bonos no caducan y puedes usarlos directamente al reservar
              online. Personaliza cualquier servicio con nuestros extras.
            </p>
          </motion.div>

          <div className="grid gap-5 lg:grid-cols-2">
            {PASS_OFFERS.map((offer, i) => (
              <motion.div
                key={offer.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.1 }}
                className="relative rounded-2xl border border-primary/40 bg-primary/[0.06] p-6 sm:p-8"
              >
                <span className="absolute -top-3 left-6 rounded-full bg-amber-400 px-3 py-0.5 text-xs font-bold text-amber-950">
                  AHORRA {offer.savingPct}%
                </span>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold">
                      {offer.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {offer.washes} lavados de{" "}
                      {SERVICES.find((s) => s.id === offer.serviceId)?.name} ·
                      sin caducidad
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-4xl font-extrabold text-primary">
                      {offer.price}€
                    </p>
                    <p className="text-sm text-muted-foreground line-through">
                      {offer.normalPrice}€
                    </p>
                  </div>
                </div>
                <Button
                  className="mt-6 gap-2 shine relative overflow-hidden"
                  onClick={() => navigate("/dashboard")}
                >
                  <CalendarCheck className="size-4" />
                  Comprar bono
                </Button>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {EXTRA_SERVICES.map((e, i) => (
              <motion.div
                key={e.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-card/60 p-5"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-display font-bold">{e.name}</h3>
                  <span className="font-display font-bold text-primary">
                    +{e.price}€
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {e.description}
                </p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Añade los extras en el paso 3 del proceso de reserva online.
          </p>
        </div>
      </section>

      {/* NOSOTROS VS TÚNEL */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">
            Comparativa
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
            Nosotros vs. túnel automático
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            No es lo mismo un lavado en cadena que un detailing hecho a mano por
            profesionales obsesionados con el detalle.
          </p>
        </motion.div>

        <motion.div
          {...fadeUp}
          className="overflow-hidden rounded-2xl border border-border"
        >
          <div className="grid sm:grid-cols-2">
            <div className="bg-card/60 p-6 sm:p-8">
              <p className="flex items-center gap-2 font-display text-lg font-bold text-muted-foreground">
                <ShieldX className="size-5" /> Túnel automático
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Cepillos que rayan la pintura",
                  "Agua reciclada sin filtrar",
                  "Interior sin tratar",
                  "Sin control de calidad",
                  "Mismo tratamiento para todo",
                ].map((t) => (
                  <li
                    key={t}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <X className="mt-0.5 size-4 shrink-0 text-red-400" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative border-t border-primary/30 bg-primary/[0.07] p-6 sm:border-t-0 sm:border-l sm:p-8">
              <span className="absolute right-5 top-5 rounded-full bg-primary px-3 py-0.5 text-xs font-bold text-primary-foreground">
                AQUÍ
              </span>
              <p className="flex items-center gap-2 font-display text-lg font-bold">
                <ShieldCheck className="size-5 text-primary" /> AutoSpa Astro
              </p>
              <ul className="mt-5 space-y-3">
                {[
                  "Lavado a mano, método dos cubos",
                  "Microfibras y pH neutro premium",
                  "Interior detallado a fondo",
                  "Checklist de 30 puntos",
                  "Tratamiento según tu tipo de coche",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ANTES / DESPUÉS */}
      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Resultados
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Antes / Después
            </h2>
          </motion.div>
          <BeforeAfter />
        </div>
      </section>

      {/* RESEÑAS + MARQUEE */}
      <section id="resenas" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-14 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              Reseñas
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Lo que dicen nuestros clientes
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2">
              <Stars rating={5} />
              <span className="text-sm text-muted-foreground">
                4,9 · 312 valoraciones en Google
              </span>
            </div>
          </motion.div>

          {hasVerified && (
            <div className="mb-10">
              <p className="mb-4 flex items-center justify-center gap-2 text-sm font-semibold text-primary">
                <BadgeCheck className="size-4" /> Reseñas verificadas de
                clientes con servicio completado
              </p>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {verifiedReviews.map((r) => (
                  <motion.div
                    key={r.id}
                    {...fadeUp}
                    className="rounded-2xl border border-primary/30 bg-primary/[0.05] p-6"
                  >
                    <div className="flex items-center justify-between">
                      <Stars rating={r.rating} />
                      <Badge
                        variant="outline"
                        className="gap-1 border-primary/40 text-primary"
                      >
                        <BadgeCheck className="size-3" /> Verificada
                      </Badge>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      "{r.comment}"
                    </p>
                    <div className="mt-5 flex items-center gap-3 border-t border-border/70 pt-4">
                      <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                        {r.author[0]}
                      </div>
                      <div>
                        <p className="text-sm font-semibold">{r.author}</p>
                        <p className="text-xs text-muted-foreground">
                          Cliente AutoSpa Astro
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r, i) => (
              <motion.div
                key={r.name}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="relative rounded-2xl border border-border bg-card/60 p-6"
              >
                <Quote className="absolute right-5 top-5 size-6 text-primary/20" />
                <Stars rating={r.rating} />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  "{r.text}"
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-border/70 pt-4">
                  <div className="flex size-9 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                    {r.name[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">{r.name}</p>
                    <p className="text-xs text-muted-foreground">{r.car}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16 overflow-hidden border-y border-border/60 py-4 [mask-image:linear-gradient(90deg,transparent,black_15%,black_85%,transparent)]">
          <div className="flex w-max animate-marquee gap-12">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex shrink-0 items-center gap-12">
                {[
                  "CERÁMICO 9H",
                  "•",
                  "PULIDO FAROS",
                  "•",
                  "TRATAMIENTO CUERO",
                  "•",
                  "DESCONTAMINACIÓN",
                  "•",
                  "SELLADO 2 MANOS",
                  "•",
                  "LAVADO MOTOR",
                  "•",
                  "HIDRATACIÓN PINTURA",
                  "•",
                ].map((t, i) => (
                  <span
                    key={i}
                    className={`whitespace-nowrap ${t === "•" ? "text-primary" : "font-display text-sm font-bold tracking-[0.25em] text-muted-foreground"}`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <motion.div {...fadeUp} className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-primary">
              FAQ
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
              Preguntas frecuentes
            </h2>
          </motion.div>
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left font-display text-base font-semibold">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CONTACTO + FOOTER */}
      <section id="contacto" className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <motion.div {...fadeUp}>
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contacto
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold sm:text-5xl">
                ¿Hablamos de tu coche?
              </h2>
              <p className="mt-4 max-w-md text-muted-foreground">
                Escríbenos para presupuestos de flotas, tratamientos especiales
                o cualquier duda. También por WhatsApp.
              </p>
              <div className="mt-8 space-y-4">
                <a
                  href="https://maps.google.com/?q=Calle+del+Detailing+12+Madrid"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <MapPin className="size-5" />
                  </span>
                  Calle del Detailing 12, 28004 Madrid
                </a>
                <a
                  href="tel:+34910000000"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Phone className="size-5" />
                  </span>
                  +34 910 000 000
                </a>
                <a
                  href="mailto:hola@autospaastro.es"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                    <Mail className="size-5" />
                  </span>
                  hola@autospaastro.es
                </a>
                <div className="flex items-center gap-3 pt-2">
                  <a
                    href="#"
                    aria-label="Instagram"
                    className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform hover:scale-110"
                  >
                    <Instagram className="size-5" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook"
                    className="flex size-10 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform hover:scale-110"
                  >
                    <Facebook className="size-5" />
                  </a>
                </div>
              </div>
              <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/[0.07] p-5">
                <p className="flex items-center gap-2 font-display font-bold">
                  <Crown className="size-4 text-amber-400" /> Programa fidelidad
                </p>
                <p className="mt-1.5 text-sm text-muted-foreground">
                  Gana 1 punto por cada 10€. Con 100 puntos te regalamos un
                  Express 30'. Acumula automáticamente con cada reserva online.
                </p>
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-amber-500/40 bg-amber-500/[0.06] p-5">
                  <p className="flex items-center gap-2 font-display font-bold">
                    <Gift className="size-4 text-amber-400" /> Bono regalo
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    De 25€ a 100€ con código único. Se compra en tu área de
                    cliente y se canjea al reservar.
                  </p>
                </div>
                <div className="rounded-2xl border border-primary/30 bg-primary/[0.06] p-5">
                  <p className="flex items-center gap-2 font-display font-bold">
                    <Truck className="size-4 text-primary" /> Recogida a
                    domicilio
                  </p>
                  <p className="mt-1.5 text-sm text-muted-foreground">
                    Por {PICKUP_PRICE}€ recogemos tu coche, lo tratamos y te lo
                    devolvemos el mismo día en Madrid capital.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div {...fadeUp}>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 md:flex-row">
          <BrandMark />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AutoSpa Astro · Lavadero & Detailing ·
            Madrid
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 text-sm text-muted-foreground">
            <button
              onClick={() => scrollTo("#faq")}
              className="hover:text-foreground"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollTo("#contacto")}
              className="hover:text-foreground"
            >
              Contacto
            </button>
            <a
              href="/autospa-astro.zip"
              download="autospa-astro.zip"
              className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 font-medium text-primary transition-colors hover:bg-primary/20"
            >
              <Download className="size-4" />
              Descargar el proyecto
            </a>
          </div>
        </div>
      </footer>

      <FloatingCTA />
    </motion.div>
  );
}
