// Slugs localizados: cada idioma tiene su propia URL por página.
//
// El español conserva las suyas (/precios/, /contacto/, /faq/, /glosario/) y el
// resto de idiomas las traduce (/preise/, /kontakt/, /haeufige-fragen/,
// /glossar/): no hay prefijo de idioma, la propia URL dice en qué idioma está.
// Por eso los slugs tienen que ser únicos en todo el sitio; dos idiomas no
// pueden compartir ruta (de ahí /nous-contacter/ en vez de /contact/ para el
// francés, o /perguntas-frequentes/ en portugués).
//
// La home es la excepción: no tiene slug traducible, así que vive en / para
// todos los idiomas y el idioma se guarda en la cookie `lang`, que vercel.json
// usa para servir / → /i18n/<lang>/.
import { LOCALES } from "../data/i18n";

export const LANG_COOKIE = "lang";
export const DEFAULT_LANG = "es";

export const LANGS = [DEFAULT_LANG, ...LOCALES] as const;
export type Lang = (typeof LANGS)[number];
export type PageKey = "home" | "precios" | "contacto" | "faq" | "glosario";

export const LOCALIZED_PAGES: Record<PageKey, Record<Lang, string>> = {
  home: { es: "/", en: "/", de: "/", fr: "/", pt: "/", ru: "/" },
  precios: {
    es: "/precios/",
    en: "/prices/",
    de: "/preise/",
    fr: "/tarifs/",
    pt: "/precos/",
    ru: "/ceny/",
  },
  contacto: {
    es: "/contacto/",
    en: "/contact/",
    de: "/kontakt/",
    fr: "/nous-contacter/",
    pt: "/fale-connosco/",
    ru: "/kontakty/",
  },
  faq: {
    es: "/faq/",
    en: "/frequently-asked-questions/",
    de: "/haeufige-fragen/",
    fr: "/questions-frequentes/",
    pt: "/perguntas-frequentes/",
    ru: "/voprosy/",
  },
  glosario: {
    es: "/glosario/",
    en: "/glossary/",
    de: "/glossar/",
    fr: "/glossaire/",
    pt: "/glossario/",
    ru: "/slovar/",
  },
};

/** Páginas que se generan como ruta propia en cada idioma (la home no). */
export const SUBPAGES: readonly PageKey[] = [
  "precios",
  "contacto",
  "faq",
  "glosario",
];


/** Idioma válido a partir de la cookie; español si falta o no se reconoce. */
export const normalizeLang = (value?: string | null): Lang =>
  value && (LANGS as readonly string[]).includes(value)
    ? (value as Lang)
    : DEFAULT_LANG;

/** Página a la que corresponde una URL ya generada (null si no lo es). */
export const pageFromPath = (pathname: string): PageKey | null => {
  const path = pathname.endsWith("/") ? pathname : `${pathname}/`;
  // La home de cada idioma se compila en /i18n/<lang>/ (ver vercel.json).
  if (/^\/i18n\/[a-z]{2}\/$/.test(path)) return "home";
  for (const page of Object.keys(LOCALIZED_PAGES) as PageKey[]) {
    if (Object.values(LOCALIZED_PAGES[page]).includes(path)) return page;
  }
  return null;
};

/** Ruta pública de una página en un idioma. */
export const localizedPath = (page: PageKey, lang: string): string =>
  LOCALIZED_PAGES[page][lang as Lang] ?? LOCALIZED_PAGES[page].es;

/**
 * Traduce una ruta española a la del idioma pedido (/precios/ → /preise/).
 * Lo que no es una de las cinco páginas traducidas se queda igual.
 */
export const localize = (path: string, lang: string): string => {
  const page = pageFromPath(path);
  return page ? localizedPath(page, lang) : path;
};

/** Equivalentes de una página en los demás idiomas, para hreflang. */
export const alternatePaths = (page: PageKey, lang: string) =>
  LANGS.filter((code) => code !== lang).map((code) => ({
    lang: code,
    path: localizedPath(page, code),
  }));

/** true si esa página existe en ese idioma (si no, el enlace va a la española). */
export const isTranslated = (path: string, lang: string): boolean =>
  lang === DEFAULT_LANG || pageFromPath(path) !== null;
