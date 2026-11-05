// Entrada de FAQ traducida. `links` es opcional: apunta a páginas que siguen
// en español (landings de sector y guías del blog) y se marcan con hreflang.
export type FaqEntry = {
  q: string;
  a: string;
  links?: { href: string; label: string }[];
};
