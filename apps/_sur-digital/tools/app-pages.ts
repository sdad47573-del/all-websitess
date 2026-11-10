// Registro de las webs de src/apps para las rutas dinámicas de src/pages.
//
// En build se resuelve con import.meta.glob: [slug].astro y
// [slug]/[...rest].astro enumeran las webs y prerenderizan cada URL con su
// componente dentro del bundle.
//
// En dev no puede existir ese glob. El plugin de CSS de Astro precarga todos
// los módulos del grafo de la página para inyectar los estilos de los
// componentes importados dinámicamente (ensureModulesLoaded) y, con el glob,
// al pedir una ruta dinámica se pone a compilar las ~2.800 páginas de
// src/apps una a una, hasta agotar el timeout de 60 s del module runner
// («transport invoke timed out», virtual:astro:dev-css). En dev cada web y
// cada subpágina tienen su propia ruta inyectada
// (integrations/app-routes.ts), así que estas dos rutas solo atienden las
// páginas traducidas y el registro llega vacío.
import type { Plugin } from "vite";

const MODULE_ID = "virtual:sur-digital/app-pages";
const RESOLVED_ID = "\0" + MODULE_ID;

export const appPages = (): Plugin => {
  let command: "serve" | "build" = "serve";

  return {
    name: "sur-digital:app-pages",
    configResolved(config) {
      command = config.command;
    },
    resolveId(id) {
      if (id === MODULE_ID) return RESOLVED_ID;
    },
    load(id) {
      if (id !== RESOLVED_ID) return;
      if (command === "serve") {
        return "export const APP_PAGES = {};\nexport const APP_SUBPAGES = {};";
      }
      return [
        'export const APP_PAGES = import.meta.glob("/src/apps/*/pages/index.astro");',
        'export const APP_SUBPAGES = import.meta.glob("/src/apps/*/pages/**/*.astro");',
      ].join("\n");
    },
  };
};
