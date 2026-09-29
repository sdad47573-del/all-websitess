import { Reveal, SectionTag } from "@/components/mudando/shared";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Check,
  KeyRound,
  Package,
  PackageOpen,
} from "lucide-react";

const PACKS = [
  {
    icon: PackageOpen,
    name: "Esencial",
    price: "desde 290 €",
    desc: "Cargamos, transportamos y descargamos. Perfecta si ya lo has empacado todo.",
    features: [
      "Equipo de 2 operarios",
      "Protección de muebles y suelos",
      "Ventana horaria ±30 min",
      "Seguro de cero daño",
    ],
    featured: false,
  },
  {
    icon: Package,
    name: "Completa",
    price: "desde 490 €",
    desc: "La favorita: no tocas una sola caja. Nosotros nos ocupamos de todo el proceso.",
    features: [
      "Todo lo de Esencial",
      "Embalaje completo incluido",
      "Desmontaje y montaje de muebles",
      "Electrodomésticos y pantallas protegidos",
      "Equipo de 3 operarios",
    ],
    featured: true,
  },
  {
    icon: KeyRound,
    name: "Llave en mano",
    price: "desde 790 €",
    desc: "Dejas las llaves viejas y estrenas la casa hecha. Ideal para agendas imposibles.",
    features: [
      "Todo lo de Completa",
      "Guardamuebles 1 mes incluido",
      "Limpieza de la vivienda de salida",
      "Montaje final habitación por habitación",
      "Gestor personal dedicado",
    ],
    featured: false,
  },
];

export function Packs() {
  return (
    <section id="servicios" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={Package}>Packs de servicio</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Elige cuánto hacemos por ti
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Tres niveles del mismo estándar —precio cerrado y equipo propio—. La
            diferencia es cuánto trabajo te quitamos de encima.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {PACKS.map((pack, i) => (
            <Reveal key={pack.name} delay={i * 0.08}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-7 ${
                  pack.featured
                    ? "border-ink bg-ink text-cream shadow-xl shadow-ink/25 lg:-translate-y-2"
                    : "border-ink/10 bg-card shadow-sm"
                }`}
              >
                {pack.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-3 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                    La más elegida
                  </span>
                )}
                <span
                  className={`flex size-11 items-center justify-center rounded-xl ${
                    pack.featured
                      ? "bg-coral/20 text-coral"
                      : "bg-coral/15 text-coral-deep"
                  }`}
                >
                  <pack.icon className="size-5" />
                </span>
                <h3
                  className={`mt-4 font-display text-xl font-bold ${
                    pack.featured ? "text-cream" : "text-ink"
                  }`}
                >
                  {pack.name}
                </h3>
                <p
                  className={`mt-1 text-sm leading-relaxed ${
                    pack.featured ? "text-cream/75" : "text-muted-foreground"
                  }`}
                >
                  {pack.desc}
                </p>
                <p
                  className={`mt-4 font-display text-2xl font-extrabold ${
                    pack.featured ? "text-coral" : "text-ink"
                  }`}
                >
                  {pack.price}
                </p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {pack.features.map((feature) => (
                    <li
                      key={feature}
                      className={`flex items-start gap-2 text-sm ${
                        pack.featured ? "text-cream/85" : "text-ink/80"
                      }`}
                    >
                      <Check
                        className={`mt-0.5 size-4 shrink-0 ${
                          pack.featured ? "text-coral" : "text-leaf"
                        }`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  variant={pack.featured ? "default" : "outline"}
                  className={`mt-6 w-full ${
                    pack.featured
                      ? "bg-coral text-primary-foreground hover:bg-coral-deep"
                      : ""
                  }`}
                >
                  <a href="#calculadora">
                    Calcular este pack
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
