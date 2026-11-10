// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import pagefind from "astro-pagefind";
import { socialCards } from "./integrations/social-cards.ts";
import { appRoutes } from "./integrations/app-routes.ts";
import { cleanUrls } from "./tools/clean-urls.ts";
import { skipAppsDepScan } from "./tools/skip-apps-dep-scan.ts";
import { appPages } from "./tools/app-pages.ts";
import { inlineFontCss } from "./tools/inline-font-css.ts";

// Dominio del sitio. También se usa para anunciar en el sitemap las rutas que
// no existen como archivo (las versiones por idioma viven en /i18n/<lang>/ y la
// URL limpia la sirve Vercel según la cookie).
const SITE = "https://www.sur-digital.com";

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
          pathname !== "/social-kit/" &&
          !pathname.endsWith(".json")
        );
      },
      // Solo la home: se compila en /i18n/<lang>/ y su URL pública es /, que
      // no existe como archivo. Las páginas traducidas y las webs de cliente
      // de src/apps/ son rutas reales del build, así que entran solas.
      customPages: [new URL("/", SITE).href],
    }),
    pagefind(),
    // Tarjetas cuadradas 1080×1080 para Instagram a partir de las OG
    socialCards(),
    // En dev, una ruta por página de src/apps para que Astro no precargue las
    // ~2.800 webs al inyectar el CSS de una ruta dinámica (ver el archivo).
    appRoutes(),
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
    // Duplicados de landing (9 nov 2026): el mismo negocio estaba publicado con
    // dos slugs. Se queda la ficha más completa y la otra pasa a 301, con sus
    // subpáginas, para que no compitan entre ellas en Google.
    "/la-estrella": "/asador-de-pollos-la-estrella/",
    "/la-estrella/aviso-legal": "/asador-de-pollos-la-estrella/aviso-legal/",
    "/la-tasca": "/la-tasca-moro/",
    "/la-tasca/aviso-legal": "/la-tasca-moro/aviso-legal/",
    "/almirez-comida-para-llevar": "/almirez/",
    "/almirez-comida-para-llevar/aviso-legal": "/almirez/aviso-legal/",
    "/cafeteria-restaurante-el-rincon-de-julio": "/el-rincon-de-julio/",
    "/cafeteria-restaurante-el-rincon-de-julio/aviso-legal": "/el-rincon-de-julio/aviso-legal/",
    "/cafeteria-restaurante-el-rincon-de-julio/servicios": "/el-rincon-de-julio/servicios/",
    "/la-isla-tacos-kebab": "/la-isla-tacos-kebab-grill/",
    "/la-isla-tacos-kebab/aviso-legal": "/la-isla-tacos-kebab-grill/aviso-legal/",
    "/floristerias-la-abadia": "/floristeria-la-abadia/",
    "/floristerias-la-abadia/aviso-legal": "/floristeria-la-abadia/aviso-legal/",
    "/restaurante-la-espada-centro": "/restaurante-la-espadana-centro/",
    "/restaurante-la-espada-centro/aviso-legal": "/restaurante-la-espadana-centro/aviso-legal/",
  },
  vite: {
    plugins: [tailwindcss(), cleanUrls(), skipAppsDepScan(), appPages(), inlineFontCss()],
    // Three.js y sus loaders entran por un import() dinámico en el hero. Si
    // Vite los descubre en caliente, reoptimiza y responde 504 a la URL que el
    // navegador ya tenía cacheada («Outdated Optimize Dep»): el hero se queda
    // en póster con el aviso de error y en dev parece que el modelo no carga,
    // porque el reintento pide la misma URL obsoleta. Declararlos aquí los
    // prebundlea al arrancar, antes de que ningún script los pida.
    optimizeDeps: {
      include: [
        "three",
        "three/examples/jsm/loaders/GLTFLoader.js",
        "three/examples/jsm/libs/meshopt_decoder.module.js",
      ],
    },
    server: {
      // El watcher recorre el proyecto entero y en Windows abre un `fs.watch`
      // por carpeta: las 7.831 de src/apps y las 1.337 de public costaban ~4
      // minutos de arranque, y mientras tanto los `fetchModule` del module
      // runner agotaban su timeout de 60 s («Failed to create the dev server
      // app: transport invoke timed out», «[content] Content config not
      // loaded»). Ninguna de las dos necesita HMR: las webs de src/apps se
      // sirven igual (son documentos completos; si se editan, hay que
      // reiniciar `astro dev`), public son assets estáticos que el navegador
      // recarga solo y dist es la salida del build. En .tmp viven los perfiles
      // de Chrome de las comprobaciones locales, que Windows bloquea mientras
      // Chrome está abierto (EBUSY en bucle).
      watch: {
        ignored: [
          "**/.tmp",
          "**/.tmp/**",
          "**/src/apps",
          "**/src/apps/**",
          "**/public",
          "**/public/**",
          "**/dist",
          "**/dist/**",
        ],
      },
    },
  },
});
