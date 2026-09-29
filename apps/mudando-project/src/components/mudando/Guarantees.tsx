import { Reveal, SectionTag } from "@/components/mudando/shared";
import {
  BadgeEuro,
  CalendarClock,
  FileCheck,
  ShieldCheck,
  Users,
} from "lucide-react";

const GUARANTEES = [
  {
    icon: BadgeEuro,
    title: "Precio cerrado",
    promise: "El precio que firmas es el que pagas.",
    penalty: "Si sube por causas nuestras, el 5 % corre de nuestra cuenta.",
  },
  {
    icon: ShieldCheck,
    title: "Cero daño",
    promise: "Todo llega como estaba o te lo devolvemos.",
    penalty: "Reposición o devolución íntegra en un máximo de 7 días.",
  },
  {
    icon: CalendarClock,
    title: "Puntualidad ±30 min",
    promise: "Llegamos en la ventana acordada.",
    penalty: "Cada hora de retraso descuenta 40 € de tu factura.",
    note: "Hasta 200 €",
  },
  {
    icon: Users,
    title: "Equipo propio",
    promise: "Operarios en nómina, no subcontratas.",
    penalty:
      "Si aparece alguien ajeno a Mudando, la mudanza cuesta un 10 % menos.",
  },
];

export function Guarantees() {
  return (
    <section id="garantias" className="bg-cream py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={FileCheck}>Garantías por escrito</SectionTag>
          <h2 className="max-w-2xl font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            No lo prometemos: lo firmamos
          </h2>
          <p className="max-w-xl text-muted-foreground">
            Cada garantía lleva su sanción si fallamos. Está en el contrato, no
            en un folleto. Es nuestra forma de ganarle a la competencia.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {GUARANTEES.map(
            ({ icon: Icon, title, promise, penalty, note }, i) => (
              <Reveal key={title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-ink/10 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-ink/10">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-ink text-cream">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-ink">
                      {title}
                    </h3>
                    {note && (
                      <span className="ml-auto rounded-full bg-coral/10 px-2.5 py-1 text-xs font-semibold text-coral-deep">
                        {note}
                      </span>
                    )}
                  </div>
                  <p className="mt-4 text-sm font-medium text-ink/85">
                    {promise}
                  </p>
                  <p className="mt-2 flex items-start gap-2 rounded-xl border border-leaf/25 bg-leaf/10 px-3.5 py-2.5 text-xs leading-relaxed text-ink/80">
                    <ShieldCheck className="mt-0.5 size-3.5 shrink-0 text-leaf" />
                    {penalty}
                  </p>
                </div>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
