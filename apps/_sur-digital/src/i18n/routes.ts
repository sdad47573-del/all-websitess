// Páginas que existen en los seis idiomas.
//
// La URL pública ya NO lleva idioma: /precios/ es la misma para todos. Cada
// versión se compila en una carpeta privada (src/pages/i18n/<lang>/), y el
// idioma vive en la cookie `lang`: vercel.json reescribe /precios/ a
// /i18n/<lang>/precios/ según esa cookie (español si no hay ninguna). Las URLs
// /i18n/ no se enlazan, no van en el sitemap y están en robots.txt.
import { LOCALES } from "../data/i18n";

export const TRANSLATED_PATHS: readonly string[] = [
  "/",
  "/contacto/",
  "/glosario/",
  "/faq/",
  "/precios/",
];

export const LANG_COOKIE = "lang";
export const DEFAULT_LANG = "es";
export const ALL_LANGS: readonly string[] = [DEFAULT_LANG, ...LOCALES];

/** Idioma válido a partir de la cookie; español si falta o no se reconoce. */
export const normalizeLang = (value?: string | null): string =>
  value && ALL_LANGS.includes(value) ? value : DEFAULT_LANG;

/** Ruta privada en la que se compila una página en un idioma. */
export const languagePath = (path: string, lang: string): string =>
  `/i18n/${lang}${path}`;

/** true si esa página tiene versión en ese idioma. */
export const isTranslated = (path: string, lang: string): boolean =>
  lang === DEFAULT_LANG || TRANSLATED_PATHS.includes(path);

/**
 * Quita el prefijo /i18n/<lang> de la URL con la que se compila cada versión:
 * /i18n/de/precios/ → /precios/. Lo usan el canonical que llega a Layout y el
 * selector de idioma, que enlaza siempre a la ruta pública.
 */
export const publicPath = (pathname: string): string => {
  const match = pathname.match(/^\/i18n\/[a-z]{2}(?=\/|$)/);
  if (!match) return pathname;
  return pathname.slice(match[0].length) || "/";
};
