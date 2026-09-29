import { Reveal, SectionTag } from "@/components/mudando/shared";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CircleHelp } from "lucide-react";

const FAQS = [
  {
    q: "¿El precio de la calculadora es vinculante?",
    a: "Sí. La calculadora usa la misma tarifa que aplica nuestro equipo comercial. Si las condiciones que introduces coinciden con la realidad, ese es el precio que firmas. Si al revisar cambia algo (un sótano sin ascensor, un volumen mayor), te lo decimos antes de mover nada y decides tú.",
  },
  {
    q: "¿Qué significa exactamente el seguro de cero daño?",
    a: "Que si algo se rompe o se daña durante la mudanza, lo reponemos o te devolvemos el importe íntegro en un máximo de 7 días. Sin peritajes eternos ni letra pequeña: nuestro seguro cubre el transporte y el manipulado, y asumimos la gestión nosotros.",
  },
  {
    q: "¿Trabajáis con subcontratas?",
    a: "No. Todos los equipos de Mudando están en nómina, con formación propia y uniformes. Es la única forma de garantizar la ventana horaria de ±30 minutos y el trato que prometemos.",
  },
  {
    q: "¿Cuánto se tarda en mudar un piso de 3 habitaciones?",
    a: "Entre 6 y 8 horas con equipo de 3 operarios si no hay embalaje contratado. Con embalaje completo solemos dividirlo en dos días: embalaje el día antes y traslado al día siguiente.",
  },
  {
    q: "¿Puedo cambiar la fecha una vez reservado?",
    a: "Sí, sin coste hasta 5 días antes. Dentro de las 72 h previas aplicamos un pequeño suplemento logístico solo si el equipo ya estaba asignado, y te lo decimos antes de confirmar el cambio.",
  },
  {
    q: "¿Hacéis mudanzas a otras provincias o islas?",
    a: "Península completa sin problema. A Baleares y Canarias también operamos con salidas semanales consolidadas; la calculadora te da el precio base y cerramos el tramo marítimo por escrito.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="bg-sand py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal className="flex flex-col items-center gap-4 text-center">
          <SectionTag icon={CircleHelp}>Preguntas frecuentes</SectionTag>
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Todo lo que sueles preguntarnos
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="mt-10">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map(({ q, a }, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="border-ink/10"
              >
                <AccordionTrigger className="text-left font-display text-base font-semibold text-ink hover:text-coral-deep hover:no-underline">
                  {q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
