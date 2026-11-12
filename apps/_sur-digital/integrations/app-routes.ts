// Cada página de src/apps se registra como ruta propia, en dev y en build.
//
// Con las dos rutas dinámicas que había antes en src/pages, el glob que
// enumeraba las webs metía todas en el grafo de la misma ruta: Astro asocia a
// una ruta el CSS de todos sus componentes, así que las ~1.250 hojas de
// src/apps acababan en TODAS las páginas. Con inlineStylesheets: "always" eso
// eran 26 MB de CSS por página y mergeInlineCss se llevaba el 93 % del tiempo
// de build (36 s por página). El CSS de cada web solo se recoge si su página es
// el componente de la ruta que se pide; de ahí una ruta inyectada por página,
// con las mismas URLs y los mismos filtros que aplicaban [slug].astro y
// [slug]/[...rest].astro. En dev, además, evita que Astro precargue las ~2.800
// páginas al inyectar el CSS de una ruta dinámica (tardaba más de 60 s y la
// petición moría con «transport invoke timed out»).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import { LOCALIZED_PAGES } from "../src/i18n/routes";

const APPS_DIR = fileURLToPath(new URL("../src/apps", import.meta.url));
const PAGES_DIR = fileURLToPath(new URL("../src/pages", import.meta.url));

// Un slug de app no puede pisar una página traducida ni una ruta estática del
// sitio. En las rutas de archivo la estática gana por prioridad; con rutas
// inyectadas habría dos patrones idénticos, así que se quedan fuera.
function reservedSlugs(): Set<string> {
  const reserved = new Set<string>();
  for (const pages of Object.values(LOCALIZED_PAGES)) {
    for (const route of Object.values(pages)) {
      const slug = route.replace(/\//g, "");
      if (slug) reserved.add(slug);
    }
  }
  for (const entry of fs.readdirSync(PAGES_DIR, { withFileTypes: true })) {
    const name = entry.isFile() ? entry.name.replace(/\.[^.]+$/, "") : entry.name;
    if (!name.includes("[")) reserved.add(name);
  }
  return reserved;
}

// Rutas de página de una app, sin la extensión y con barras, como las devuelve
// el glob de build (/src/apps/<slug>/pages/<page>.astro).
function appPageFiles(dir: string, base = ""): string[] {
  const pages: string[] = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const relative = base ? `${base}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      pages.push(...appPageFiles(path.join(dir, entry.name), relative));
    } else if (entry.name.endsWith(".astro")) {
      pages.push(relative.slice(0, -".astro".length));
    }
  }
  return pages;
}

export function appRoutes(): AstroIntegration {
  return {
    name: "sur-digital:app-routes",
    hooks: {
      "astro:config:setup": ({ injectRoute }) => {
        const reserved = reservedSlugs();
        for (const slug of fs.readdirSync(APPS_DIR)) {
          if (reserved.has(slug)) continue;
          const pagesDir = path.join(APPS_DIR, slug, "pages");
          if (!fs.existsSync(pagesDir)) continue;

          for (const page of appPageFiles(pagesDir)) {
            // Las rutas dinámicas de una app (`blog/[slug].astro`,
            // `[sector].astro`) y sus endpoints (`api/`) se quedan fuera, igual
            // que en [slug]/[...rest].astro.
            if (page.includes("[")) continue;
            if (page.startsWith("api/") || page.includes("/api/")) continue;
            if (page === "404") continue;

            // La portada vive en /<slug>/; el resto, en /<slug>/<page>/ con el
            // index final recortado (`blog/index.astro` → /<slug>/blog/).
            const rest = page === "index" ? "" : page.replace(/\/index$/, "");
            injectRoute({
              pattern: `/${slug}${rest ? `/${rest}` : ""}`,
              entrypoint: `./src/apps/${slug}/pages/${page}.astro`,
            });
          }
        }
      },
    },
  };
}
