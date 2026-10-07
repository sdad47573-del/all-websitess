// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import pagefind from "astro-pagefind";
import { socialCards } from "./integrations/social-cards.ts";

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
  },
});
