import { Button } from "@/components/ui/button";
import {
  BadgeCheck,
  Calculator,
  MapPin,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { Link } from "react-router";

const QUICK_STATS = [
  { icon: BadgeCheck, label: "Precio cerrado", sub: "sin sorpresas" },
  { icon: Truck, label: "Equipo propio", sub: "sin subcontratas" },
  { icon: ShieldCheck, label: "Cero daño", sub: "o te lo devolvemos" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink text-cream">
      {/* Capa decorativa: rejilla técnica + halo cálido */}
      <div
        className="absolute inset-0 bg-blueprint opacity-40"
        aria-hidden="true"
      />
      <div
        className="absolute -right-24 -top-24 size-[420px] rounded-full bg-coral/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-24 size-[380px] rounded-full bg-petrol/60 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 pb-20 pt-32 text-center sm:px-6 lg:pt-40">
        <span className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/10 px-4 py-1.5 text-sm font-medium text-cream/90">
          <span className="size-2 rounded-full bg-coral" />
          Mudanzas en toda España · 2.400 mudanzas al año
        </span>

        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
          La mudanza que no te va a estresar:{" "}
          <span className="relative whitespace-nowrap text-coral">
            precio cerrado
            {/* subrayado tipo cinta */}
            <svg
              className="absolute -bottom-2 left-0 w-full text-coral/60"
              viewBox="0 0 220 10"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M2 7c40-5 90-6 216-2"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
          , cero sorpresas.
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-cream/80 sm:text-lg">
          Otros te dan un número que luego sube. Nosotros visitamos, medimos y
          firmamos un precio final. Si algo se rompe, lo devolvemos: así de
          simple.
        </p>

        <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row">
          <Button
            asChild
            size="lg"
            className="h-12 px-7 text-base font-semibold shadow-lg shadow-coral/25"
          >
            <a href="#calculadora">
              <Calculator className="size-5" />
              Calcula tu precio en 2 min
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 border-cream/30 bg-transparent px-7 text-base font-semibold text-cream hover:bg-cream/10 hover:text-cream"
          >
            <Link to="/dashboard">
              <Truck className="size-5" />
              Ya tengo mudanza reservada
            </Link>
          </Button>
        </div>

        <p className="flex items-center gap-1.5 text-sm text-cream/70">
          <MapPin className="size-4 text-coral" />
          Madrid, Barcelona, Valencia y Sevilla · resto de península con
          suplemento
        </p>
      </div>

      {/* Tarjetas de ventajas */}
      <div className="relative mx-auto grid w-full max-w-4xl grid-cols-1 gap-4 px-4 pb-4 sm:grid-cols-3">
        {QUICK_STATS.map(({ icon: Icon, label, sub }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-xl border border-cream/15 bg-cream/5 px-4 py-3.5 text-left backdrop-blur-sm"
          >
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-coral/20 text-coral">
              <Icon className="size-5" />
            </span>
            <div>
              <p className="text-sm font-semibold text-cream">{label}</p>
              <p className="text-xs text-cream/70">{sub}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Franja de cinta de embalaje */}
      <div
        className="relative h-8 w-full bg-tape bg-coral/10"
        aria-hidden="true"
      />
    </section>
  );
}
