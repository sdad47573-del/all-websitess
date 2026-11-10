// Al arrancar `astro dev`, Vite escanea todos los ficheros de
// `src/**/*.{ts,js,astro,…}` para descubrir y prebundlear las dependencias de
// los <script> del cliente. En este proyecto ese glob entra en `src/apps`: las
// ~1.270 webs de cliente (3,4 GB y ~5.000 páginas .astro). Recorrerlas y
// compilarlas con el compilador de Astro bloquea el hilo principal más de dos
// minutos, así que los `fetchModule` que el module runner lanza al crear la
// app del dev server agotan su timeout de 60 s y arranca con
// «Failed to create the dev server app: transport invoke timed out after
// 60000ms (… vite:invoke … virtual:astro:server-app)» y
// «[content] Content config not loaded».
//
// Excluir `src/apps` no pierde dependencias: sus páginas son documentos
// completos cuyos <script> son TypeScript de navegador sin imports (los
// paquetes que usan —@astro-components, astro:assets…— entran por el
// frontmatter, que el escáner de cliente no lee). El prebundleo del resto del
// sitio queda igual y el arranque vuelve a unos segundos.
import { fileURLToPath } from "node:url";
import type { Plugin } from "vite";

// Vite compara los patrones con barras; `fileURLToPath` devuelve barras
// invertidas en Windows.
const toGlob = (url: URL) => fileURLToPath(url).replace(/\\/g, "/");

const SRC_DIR = toGlob(new URL("../src", import.meta.url));
const APPS_DIR = toGlob(new URL("../src/apps", import.meta.url));

export const skipAppsDepScan = (): Plugin => ({
  name: "sur-digital:skip-apps-dep-scan",
  // Después de los plugins de Astro, que son los que declaran el glob de
  // escaneo del entorno cliente.
  enforce: "post",
  configEnvironment(name) {
    if (name !== "client") return;
    return {
      optimizeDeps: {
        // El patrón positivo repite el de Astro (con sus extensiones) para no
        // depender de si Vite concatena o sustituye la lista; el negativo,
        // que tinyglobby aplica al conjunto, deja fuera las webs de cliente.
        entries: [
          `${SRC_DIR}/**/*.{ts,js,mjs,mts,jsx,tsx,vue,svelte,html,astro,mdx}`,
          `!${APPS_DIR}/**`,
        ],
      },
    };
  },
});
