/**
 * Pricing, re-exported from the server.
 *
 * The live calculator needs `calcularPresupuesto` to show a price as the visitor
 * drags the sliders, so the browser needs the function. But the *authoritative*
 * copy lives in `server/quote.ts`, because the server is what decides the price
 * it stores. Keeping one definition means the number on screen and the number
 * in the database cannot disagree.
 *
 * `server/quote.ts` is pure: no database, no secrets, no Node builtins. That is
 * what makes it safe for the bundler to pull into the client.
 */

export {
  calcularPresupuesto,
  emptyExtras,
  extrasFromList,
  EXTRA_META,
  EXTRAS,
  formatEuros,
  PRECIO_POR_KM,
  PRECIO_POR_M3,
  PRECIO_POR_PISO,
  RECARGO_FINDE,
  VIVIENDA_META,
  VIVIENDAS,
} from "../../server/quote.js";

export type {
  ExtraKey,
  Extras,
  QuoteInput,
  QuoteResult,
  Vivienda,
} from "../../server/quote.js";
