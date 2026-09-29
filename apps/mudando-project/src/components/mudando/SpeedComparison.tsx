import { Reveal, SectionTag } from "@/components/mudando/shared";
import { CheckCircle2, Hourglass, Timer, XCircle } from "lucide-react";

const CHANNELS = [
  {
    icon: Timer,
    name: "Mudando",
    us: true,
    time: "2 minutos",
    detail:
      "La calculadora de la web. Precio cerrado, sin llamadas ni visitas.",
    steps: [
      "Abres la calculadora",
      "Mueves 5 controles",
      "Precio final en pantalla, guardable y compartible",
    ],
  },
  {
    icon: Hourglass,
    name: "Mudanza típica",
    us: false,
    time: "2–5 días",
    detail:
      'Formulario → comercial te llama → visita o fotos → presupuesto "estimado".',
    steps: [
      "Rellenas un formulario y esperas la llamada",
      "2–3 llamadas comerciales y visitas",
      'Presupuesto "desde…" que luego sube',
    ],
  },
];

export function SpeedComparison() {
  return (
    <section id="velocidad" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={Timer}>Velocidad de presupuesto</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Mientras otros te devuelven la llamada, ya te has mudado
          </h2>
          <p className="max-w-xl text-muted-foreground">
            El tiempo es la variable que nadie compara. Nosotros la ponemos
            primera: sin formularios eternos ni comerciales insistiendo.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {CHANNELS.map(({ icon: Icon, name, us, time, detail, steps }, i) => (
            <Reveal key={name} delay={i * 0.08}>
              <div
                className={`h-full rounded-2xl border p-6 sm:p-8 ${
                  us
                    ? "border-2 border-coral/40 bg-card shadow-lg shadow-coral/10"
                    : "border-ink/10 bg-card/70"
                }`}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex size-10 items-center justify-center rounded-xl ${
                        us
                          ? "bg-coral/15 text-coral-deep"
                          : "bg-ink/5 text-ink/50"
                      }`}
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3
                      className={`font-display text-lg font-bold ${
                        us ? "text-ink" : "text-ink/60"
                      }`}
                    >
                      {name}
                    </h3>
                  </div>
                  <p
                    className={`font-display text-2xl font-extrabold ${
                      us ? "text-coral" : "text-ink/40"
                    }`}
                  >
                    {time}
                  </p>
                </div>
                <p
                  className={`mt-3 text-sm ${
                    us ? "text-muted-foreground" : "text-muted-foreground/80"
                  }`}
                >
                  {detail}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {steps.map((step) => (
                    <li key={step} className="flex items-start gap-2.5 text-sm">
                      {us ? (
                        <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-leaf" />
                      ) : (
                        <XCircle className="mt-0.5 size-4 shrink-0 text-destructive/60" />
                      )}
                      <span
                        className={us ? "text-ink/85" : "text-muted-foreground"}
                      >
                        {step}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-8">
          <div className="rounded-2xl border border-ink/10 bg-card px-6 py-5 text-center shadow-sm">
            <p className="text-sm text-muted-foreground">
              <span className="font-display text-lg font-extrabold text-ink">
                72 h
              </span>{" "}
              tarda de media una cadena nacional en enviar un presupuesto por
              escrito.{" "}
              <span className="font-display text-lg font-extrabold text-coral-deep">
                120 segundos
              </span>{" "}
              tarda nuestra calculadora. Y el nuestro es cerrado.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
