/**
 * Mudando's pricing.
 *
 * This used to live in `src/lib/quote.ts` with a comment saying the backend
 * shared it. It did not: the Convex action stored whatever `total` the browser
 * sent, so the price was whatever the client felt like asking for. It now lives
 * here and `src/lib/quote.ts` re-exports it, so there is one definition and the
 * server is the side that decides the number.
 *
 * `POST /api/quotes` therefore does not accept a `total` at all. It takes the
 * inputs, computes the price and stores that.
 */

export const VIVIENDAS = ["estudio", "piso", "casa", "oficina"] as const;
export type Vivienda = (typeof VIVIENDAS)[number];

export const EXTRAS = [
  "embalaje",
  "muebles",
  "electrodomesticos",
  "guardamuebles",
] as const;
export type ExtraKey = (typeof EXTRAS)[number];

export type Extras = Record<ExtraKey, boolean>;

export type QuoteInput = {
  vivienda: Vivienda;
  distanciaKm: number;
  pisoOrigen: number;
  pisoDestino: number;
  volumen: number;
  finesDeSemana: number;
  extras: Extras;
};

export type QuoteResult = {
  base: number;
  distancia: number;
  pisos: number;
  volumen: number;
  extras: number;
  finDeSemana: number;
  total: number;
};

export const VIVIENDA_META: Record<
  Vivienda,
  { label: string; volumen: number; base: number }
> = {
  estudio: { label: "Estudio", volumen: 12, base: 210 },
  piso: { label: "Piso", volumen: 25, base: 320 },
  casa: { label: "Casa", volumen: 45, base: 480 },
  oficina: { label: "Oficina", volumen: 35, base: 520 },
};

export const EXTRA_META: Record<
  ExtraKey,
  { label: string; price: number; hint: string }
> = {
  embalaje: {
    label: "Embalaje completo",
    price: 110,
    hint: "Cajas, plástico de burbuja y cinta: lo dejamos todo listo",
  },
  muebles: {
    label: "Desmontaje y montaje de muebles",
    price: 90,
    hint: "Armarios, camas y sofás desmontados y montados en destino",
  },
  electrodomesticos: {
    label: "Electrodomésticos y pantallas",
    price: 60,
    hint: "Embalaje y manipulación especial de frigorífico, lavadora y TV",
  },
  guardamuebles: {
    label: "Guardamuebles 1 mes",
    price: 85,
    hint: "Almacén vigilado 24/7 con inventario fotografíado",
  },
};

export const PRECIO_POR_KM = 1.2;
export const PRECIO_POR_PISO = 18;
export const PRECIO_POR_M3 = 6;
export const RECARGO_FINDE = 0.08;

/** Closed price, no small print. The calculator and the API share this function. */
export function calcularPresupuesto(input: QuoteInput): QuoteResult {
  const meta = VIVIENDA_META[input.vivienda];
  const base = meta.base;
  const distancia = Math.max(0, input.distanciaKm) * PRECIO_POR_KM;
  const pisos =
    Math.max(0, input.pisoOrigen - 1) * PRECIO_POR_PISO +
    Math.max(0, input.pisoDestino - 1) * PRECIO_POR_PISO;
  const volumen = Math.max(0, input.volumen) * PRECIO_POR_M3;
  const extras = EXTRAS.reduce(
    (acc, key) => acc + (input.extras[key] ? EXTRA_META[key].price : 0),
    0,
  );
  const subtotal = base + distancia + pisos + volumen + extras;
  const finDeSemana = input.finesDeSemana > 0 ? subtotal * RECARGO_FINDE : 0;
  // Rounded to the nearest 5 so the advertised price is a round number.
  const total = Math.round((subtotal + finDeSemana) / 5) * 5;

  return {
    base,
    distancia: Math.round(distancia),
    pisos: Math.round(pisos),
    volumen: Math.round(volumen),
    extras: Math.round(extras),
    finDeSemana: Math.round(finDeSemana),
    total,
  };
}

/** Every extra off, the shape a quote request carries before the flags are read. */
export function emptyExtras(): Extras {
  return {
    embalaje: false,
    muebles: false,
    electrodomesticos: false,
    guardamuebles: false,
  };
}

/** Expands the flat `extras` array on a request into the flags the pricing takes. */
export function extrasFromList(list: readonly ExtraKey[]): Extras {
  const extras = emptyExtras();
  for (const key of list) extras[key] = true;
  return extras;
}

export function formatEuros(value: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(value);
}
