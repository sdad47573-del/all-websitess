import type { APIRoute } from "astro";
import { PORTFOLIO } from "../data/portfolio";

// El listado de /clientes/ no viaja en el HTML: se sirve como JSON generado en
// el build y el navegador lo pide solo cuando carga la página. La ruta queda
// prerenderizada, así que el sitio sigue siendo 100% estático.
export const prerender = true;

interface DirectoryClient {
  title: string;
  sector: string;
  city: string;
  category: string;
  tags: readonly string[];
  accent: string;
  url: string;
  image: string;
  thumb: string;
}

// Las portadas y sus miniaturas se generan en public/clientes/ con
// tools/gen-portfolio-previews.mjs; aquí solo se resuelven las URLs públicas.
const slugFor = (url: string) => url.match(/^\/([^/]+)\/$/)?.[1] ?? "";
const imageFor = (url: string) => {
  const slug = slugFor(url);
  return slug ? `/clientes/${slug}.jpg` : "";
};
const thumbFor = (url: string) => {
  const slug = slugFor(url);
  return slug ? `/clientes/thumbs/${slug}.jpg` : "";
};

export const GET: APIRoute = () => {
  const clients: DirectoryClient[] = PORTFOLIO.filter(
    (project) => !project.preview,
  ).map(({ title, sector, city, category, tags, accent, url }) => ({
    title,
    sector,
    city: city ?? "",
    category,
    tags,
    accent,
    url,
    image: imageFor(url),
    thumb: thumbFor(url),
  }));

  return new Response(JSON.stringify(clients), {
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
};
