export const MONTH_NAMES = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
] as const;

export const CATEGORY_LABELS: Record<string, string> = {
  Hoja: "Hoja",
  Fruto: "Fruto",
  Raiz: "Raiz",
  Legumbre: "Legumbre",
  Brasica: "Brasica",
  Setas: "Setas",
  Aromatica: "Aromatica",
};

/**
 * cents -> "22,00 EUR".
 *
 * Returns an em dash for anything non-finite. Intl formats NaN as a literal
 * "NaN €", which is how a missing price field ends up rendered on a public
 * page, so it is worth failing visibly-but-quietly here instead.
 */
export function formatPrice(cents: number | undefined | null): string {
  if (typeof cents !== "number" || !Number.isFinite(cents)) return "—";
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
  }).format(cents / 100);
}

export function formatDate(ts: number): string {
  return new Intl.DateTimeFormat("es-ES", {
    day: "numeric",
    month: "long",
  }).format(new Date(ts));
}

/**
 * Delivery fee for a basket subtotal in a zone.
 *
 * Mirrors the server-side rule in `src/convex/coop.ts` so the figure shown
 * before saving matches the one that would actually be charged. Both sides
 * must stay in step.
 *
 * Members on a solidarity rate never pay delivery. A flat fee is
 * proportionally far heavier on a basket already discounted to half price,
 * which would quietly undo the whole point of the solidarity scale.
 */
export function deliveryFeeForZone(
  zone: { feeCents: number; freeAboveCents: number },
  subtotalCents: number,
  isSolidarity = false,
): number {
  if (isSolidarity) return 0;
  return subtotalCents >= zone.freeAboveCents ? 0 : zone.feeCents;
}

/**
 * Sliding-scale label. This is the fairness mechanism a cooperative has and a
 * commercial CSA tool does not, so it is worth explaining rather than hiding
 * behind a discount field.
 */
export function scaleLabel(percent: number): string {
  if (percent <= 60) return "Tarifa solidaria";
  if (percent < 100) return "Tarifa reducida";
  if (percent === 100) return "Tarifa estandar";
  return "Tarifa de apoyo";
}

export function scaleBlurb(percent: number): string {
  if (percent <= 60)
    return "Cubre menos del coste real. Nadie se queda fuera por precio: hay cestas solidarias financiadas por las tarifas de apoyo.";
  if (percent < 100)
    return "Cubres parte del coste. Ayudas a que la cooperativa siga abra para quien lo necesita.";
  if (percent === 100)
    return "Lo que cuesta de verdad cultivar y recoger cada semana.";
  return "Pagas un 20% mas. Ese margen sostiene las cestas solidarias y el banco de semillas.";
}
