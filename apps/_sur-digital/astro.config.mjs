// @ts-check
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import pagefind from "astro-pagefind";
import { socialCards } from "./integrations/social-cards.ts";

// El hero pide Three.js en diferido, así que su chunk se descargaba solo cuando
// el script del hero ya estaba ejecutándose (0,5–1 s después del
// DOMContentLoaded). El chunk lleva hash en el nombre, así que se localiza al
// terminar el build y se escribe su URL en el hueco que deja el gate de red de
// la home: el navegador la pide al parsear el HTML, no al hidratar.
const PRELOAD_TOKEN = "/*PRELOAD_CHUNKS*/[]";

// Sustituye el hueco del gate en todas las páginas de un directorio.
function patchPages(dir, chunks) {
  let patched = 0;
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return patched; // el directorio puede no existir todavía
  }
  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      patched += patchPages(full, chunks);
      continue;
    }
    if (!entry.name.endsWith(".html")) continue;
    const html = readFileSync(full, "utf8");
    if (!html.includes(PRELOAD_TOKEN)) continue;
    writeFileSync(
      full,
      html.replace(PRELOAD_TOKEN, `/*PRELOAD_CHUNKS*/${JSON.stringify(chunks)}`)
    );
    patched++;
  }
  return patched;
}

function preloadHero3d() {
  return {
    name: "preload-hero-3d",
    hooks: {
      // Este hook corre cuando Astro ya ha escrito las páginas (closeBundle de
      // Vite va antes y no las ve).
      "astro:build:done": ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        let chunk;
        try {
          chunk = readdirSync(join(dist, "_astro")).find((name) =>
            name.startsWith("three.module.")
          );
        } catch {
          chunk = undefined;
        }
        if (!chunk) {
          logger.warn("no se ha encontrado el chunk de Three.js: el hero no se precarga");
          return;
        }
        const chunks = [`/_astro/${chunk}`];
        // dist/ es lo que sirve Astro en local; el adaptador de Vercel copia a
        // .vercel/output/static, que es lo que se publica. Se parchean los dos
        // para no depender del orden de los hooks de build.
        const patched =
          patchPages(dist, chunks) +
          patchPages(join(process.cwd(), ".vercel/output/static"), chunks);
        logger.info(`hero 3D precargado (${chunks[0]}) en ${patched} página(s)`);
      },
    },
  };
}

// https://astro.build/config
export default defineConfig({
  site: "https://sur-digital.vercel.app",
  integrations: [
    sitemap({
      // Páginas que no deben anunciarse como indexables
      filter: (page) => !page.endsWith("/404/") && !page.endsWith("/social-kit/"),
    }),
    pagefind(),
    // Tarjetas cuadradas 1080×1080 para Instagram a partir de las OG
    socialCards(),
    preloadHero3d(),
  ],
  // Sitio 100% estático: no hay endpoints de servidor (el contacto es un
  // enlace a LinkedIn). El adapter de Vercel solo se usa para el formato de
  // salida; si algún día se añade una ruta server, ya estará preparado.
  output: "static",
  adapter: vercel(),
  // Redirecciones permanentes. El artículo antiguo de precios se fusionó en
  // el actual para no competir por la misma búsqueda en Google: se deja 301.
  // Sin barra final en la clave a propósito: Astro genera así el 301 para
  // /blog/crear-pagina-web-malaga-2026 y además una página en el directorio
  // homónimo, que Vercel sirve para la variante con barra (la canónica).
  redirects: {
    "/blog/crear-pagina-web-malaga-2026":
      "/blog/cuanto-cuesta-una-web-malaga-2026/",
    // Duplicados consolidados (22 oct 2026): dos URLs competían por la misma
    // búsqueda y ninguna entraba en el top 10. Se conserva el slug con más
    // historial y el otro se redirige con 301 para no perder las señales.
    "/blog/kit-digital-merece-la-pena-2026":
      "/blog/kit-digital-merece-la-pena/",
    "/blog/diseno-web-marbella-costa-del-sol":
      "/blog/diseno-web-marbella/",
    "/blog/pagina-web-para-abogados-malaga":
      "/blog/web-abogados-conseguir-clientes/",
    // URLs fantasma (/1/ … /5/): rutas de una versión anterior que Google
    // sigue teniendo indexadas y que hoy dan 404, así que se llevan las
    // impresiones sin poder recibir clics. Se redirigen a la home (301) para
    // recuperar ese posicionamiento. Sin barra final en la clave, igual que
    // arriba: así se cubren las variantes con y sin barra.
    "/1": "/",
    "/2": "/",
    "/3": "/",
    "/4": "/",
    "/5": "/",
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      // En .tmp viven los perfiles de Chrome de las comprobaciones locales: son
      // miles de archivos que el watcher no necesita y que Windows bloquea
      // mientras Chrome está abierto (EBUSY en bucle).
      watch: { ignored: ["**/.tmp/**"] },
    },
  },
});
