// Migas de pan para el JSON-LD de las páginas internas. La última entrada no
// lleva `href` porque es la propia página: Google la trata como el elemento
// actual y no como un enlace más.
export type Crumb = { label: string; href?: string };

const INICIO: Crumb = { label: "Inicio", href: "/" };

export const CRUMB_SERVICIOS: Crumb[] = [
  INICIO,
  { label: "Servicios" },
];

export const CRUMB_PRECIOS: Crumb[] = [INICIO, { label: "Precios" }];

export const CRUMB_ESPECIALIDADES: Crumb[] = [
  INICIO,
  { label: "Especialidades" },
];

export const CRUMB_BLOG: Crumb[] = [INICIO, { label: "Blog" }];

export const CRUMB_GLOSARIO: Crumb[] = [INICIO, { label: "Glosario" }];

export const CRUMB_AVISO: Crumb[] = [INICIO, { label: "Aviso Legal" }];

export const CRUMB_PRIVACIDAD: Crumb[] = [
  INICIO,
  { label: "Política de Privacidad" },
];