import { Reveal, SectionTag } from "@/components/mudando/shared";
import { CheckCircle2, Clock, XCircle } from "lucide-react";

const MUDANDO_DAY = [
  {
    time: "08:00",
    text: "El equipo llega en la ventana ±30 min. 3 operarios, 1 coordinador.",
  },
  {
    time: "08:15",
    text: "Protegen suelos, escalera y ascensor. Foto-inventario de cada habitación.",
  },
  {
    time: "08:30",
    text: "Desmontaje de camas y armarios con herramientas propias.",
  },
  {
    time: "11:30",
    text: "Carga completa. Te envían foto del camión sellado y en ruta.",
  },
  {
    time: "14:00",
    text: "Descarga y montaje en destino. Muebles montados, no aparcados.",
  },
  {
    time: "17:00",
    text: "Revisión habitación por habitación contigo. Firma de entrega.",
  },
];

const TIPICAL_DAY = [
  { time: "¿¿??", text: '"Le llamamos cuando salgamos". Nadie sabe la hora.' },
  {
    time: "11:40",
    text: "Llegan 3 horas tarde. El ascensor del edificio ya está ocupado.",
  },
  {
    time: "12:00",
    text: 'El presupuesto "desde" empieza a crecer: plantas, volumen, "materiales".',
  },
  {
    time: "16:00",
    text: "Caja rotura: la lavadora viajaba suelta. Nadie se hace responsable.",
  },
  {
    time: "19:30",
    text: "Te dejan los muebles donde caben, no donde van. Medio montado.",
  },
  {
    time: "22:00",
    text: 'Duermes entre cajas. Reclamación imposible: "era una subcontrata".',
  },
];

export function DayComparison() {
  return (
    <section id="dia-d" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={Clock}>El día D, hora a hora</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            El mismo día, contado de dos formas
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Dos mudanzas idénticas de un piso 3 habitaciones a 25 km. La
            diferencia no es suerte: es el proceso.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Mudando */}
          <Reveal>
            <div className="h-full rounded-2xl border-2 border-coral/40 bg-card p-6 shadow-lg shadow-coral/10 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-coral/15 text-coral-deep">
                  <CheckCircle2 className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink">
                  Con Mudando
                </h3>
              </div>
              <ol className="mt-6 space-y-0">
                {MUDANDO_DAY.map(({ time, text }, i) => (
                  <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < MUDANDO_DAY.length - 1 && (
                      <span
                        className="absolute left-[27px] top-9 h-[calc(100%-2rem)] w-px bg-coral/30"
                        aria-hidden="true"
                      />
                    )}
                    <span className="z-10 flex size-14 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-sm font-bold text-coral">
                      {time}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-ink/85">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          {/* Mudanza típica */}
          <Reveal delay={0.08}>
            <div className="h-full rounded-2xl border border-ink/10 bg-card/70 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex size-10 items-center justify-center rounded-xl bg-ink/5 text-ink/50">
                  <XCircle className="size-5" />
                </span>
                <h3 className="font-display text-xl font-bold text-ink/60">
                  Con una mudanza típica
                </h3>
              </div>
              <ol className="mt-6">
                {TIPICAL_DAY.map(({ time, text }, i) => (
                  <li key={i} className="relative flex gap-4 pb-6 last:pb-0">
                    {i < TIPICAL_DAY.length - 1 && (
                      <span
                        className="absolute left-[27px] top-9 h-[calc(100%-2rem)] w-px bg-ink/10"
                        aria-hidden="true"
                      />
                    )}
                    <span className="z-10 flex size-14 shrink-0 items-center justify-center rounded-xl bg-ink/5 font-display text-sm font-bold text-ink/50">
                      {time}
                    </span>
                    <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
                      {text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
