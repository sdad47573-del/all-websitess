// Qué páginas existen ya en cada idioma. Se amplía por fases: cuando una
// página se traduce, se añade aquí y todos los enlaces del sitio (Topbar,
// footer, CTAs) empiezan a apuntar a su versión localizada sin tocar más
// código. Lo que no está en la lista sigue enlazando a la versión española.
export const TRANSLATED_PATHS: readonly string[] = [
  "/",
  "/contacto/",
  "/glosario/",
  "/faq/",
  "/precios/",
];

/**
 * Devuelve la ruta en el idioma pedido si esa página está traducida; si no,
 * devuelve la ruta española (el enlace se marca con hreflang="es").
 */
export const localize = (path: string, lang: string): string =>
  lang !== "es" && TRANSLATED_PATHS.includes(path) ? `/${lang}${path}` : path;

/** true si la página tiene versión en ese idioma. */
export const isTranslated = (path: string, lang: string): boolean =>
  lang === "es" || TRANSLATED_PATHS.includes(path);
