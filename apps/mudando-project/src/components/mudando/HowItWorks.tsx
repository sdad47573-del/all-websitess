import { SectionTag, Reveal } from "@/components/mudando/shared";
import { BadgeEuro, CalendarCheck, Boxes, PackageCheck } from "lucide-react";

const STEPS = [
  {
    icon: BadgeEuro,
    step: "01",
    title: "Calcula tu precio",
    text: 'Usa la calculadora o cuéntanoslo por WhatsApp. En minutos tienes una cifra real, no una estimación "desde".',
  },
  {
    icon: CalendarCheck,
    step: "02",
    title: "Reserva tu fecha",
    text: "Elige día y ventana horaria. Confirmamos con 48 h de antelación y te presentamos al equipo por nombre y foto.",
  },
  {
    icon: Boxes,
    step: "03",
    title: "Empacamos y protegemos",
    text: "Si contratas embalaje, llegamos con materiales el día antes. Colchones, sofás y pantallas viajan fundidos y señalados.",
  },
  {
    icon: PackageCheck,
    step: "04",
    title: "Mudanza y montaje",
    text: "Desmontamos, trasladamos y montamos en destino. Revisamos habitación por habitación contigo y firmamos la entrega.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={PackageCheck}>Así de fácil</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Cuatro pasos, cero improvisación
          </h2>
          <p className="max-w-xl text-muted-foreground">
            La mayoría de las malas experiencias con mudanzas vienen de planes
            vagos. El nuestro no lo es: cada fase tiene responsable, fecha y
            precio.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map(({ icon: Icon, step, title, text }, i) => (
            <Reveal key={step} delay={i * 0.08}>
              <div className="group relative h-full rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
                <div className="flex items-center justify-between">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-ink text-cream">
                    <Icon className="size-5" />
                  </span>
                  <span className="font-display text-3xl font-extrabold text-ink/10 transition-colors group-hover:text-coral/30">
                    {step}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
