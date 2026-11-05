// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import pagefind from "astro-pagefind";
import { socialCards } from "./integrations/social-cards.ts";
import { cleanUrls } from "./tools/clean-urls.ts";

// Dominio del sitio. También se usa para anunciar en el sitemap las rutas que
// no existen como archivo (las versiones por idioma viven en /i18n/<lang>/ y la
// URL limpia la sirve Vercel según la cookie).
const SITE = "https://sur-digital.vercel.app";

// https://astro.build/config
export default defineConfig({
  site: SITE,
  integrations: [
    sitemap({
      // Páginas que no deben anunciarse como indexables. Tampoco las versiones
      // por idioma: se compilan en /i18n/<lang>/ (carpeta privada, la resuelve
      // vercel.json según la cookie). La URL pública es la misma para los seis
      // idiomas y, como no existe como archivo, se añade a mano más abajo.
      filter: (page) => {
        const { pathname } = new URL(page);
        return (
          !pathname.startsWith("/i18n/") &&
          pathname !== "/404/" &&
          pathname !== "/social-kit/"
        );
      },
      // Solo la home: se compila en /i18n/<lang>/ y su URL pública es /, que
      // no existe como archivo. Las demás páginas traducidas tienen archivo
      // propio en su slug (/precios/, /preise/, /prices/…).
      customPages: [new URL("/", SITE).href],
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
  // La hoja de estilos del sitio (Tailwind + daisyUI, ~26 KB) se incrusta en
  // el HTML: era la única petición que bloqueaba el primer pintado y en móvil
  // costaba ~110 ms de render. Al ser un sitio de páginas estáticas que se
  // visitan de una en una, se gana más de lo que se pierde por caché entre
  // páginas.
  build: { inlineStylesheets: "always" },
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
    plugins: [tailwindcss(), cleanUrls()],
    server: {
      // En .tmp viven los perfiles de Chrome de las comprobaciones locales: son
      // miles de archivos que el watcher no necesita y que Windows bloquea
      // mientras Chrome está abierto (EBUSY en bucle).
      watch: { ignored: ["**/.tmp/**"] },
    },
  },
});
