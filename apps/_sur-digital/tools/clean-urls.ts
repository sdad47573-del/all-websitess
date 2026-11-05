// En `astro dev` y `astro preview` no hay Vercel que aplique los rewrites de
// vercel.json, así que las URLs limpias (/precios/) no existen como archivo y
// darían 404. Este plugin de Vite las resuelve a /i18n/<idioma>/ con el mismo
// criterio que el despliegue: la cookie `lang` y, si no hay, español.
//
// Los rewrites del despliegue están en vercel.json; esto solo cubre el entorno
// local.
import type { IncomingMessage } from "node:http";
import type { Plugin } from "vite";
import { LANG_COOKIE, normalizeLang } from "../src/i18n/routes";

const cookieLang = (header?: string): string | undefined => {
  const match = header?.match(new RegExp(`(?:^|;\\s*)${LANG_COOKIE}=([^;]+)`));
  return match?.[1];
};

const rewrite = (req: IncomingMessage) => {
  const url = new URL(req.url ?? "/", "http://localhost");
  // Las páginas traducidas tienen archivo propio en su slug; solo la home se
  // compila por idioma en /i18n/<lang>/ y hay que resolverla con la cookie.
  if (url.pathname !== "/") return;
  const lang = normalizeLang(cookieLang(req.headers.cookie));
  req.url = `/i18n/${lang}/${url.search}`;
};

export const cleanUrls = (): Plugin => ({
  name: "sur-digital:clean-urls",
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      rewrite(req);
      next();
    });
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      rewrite(req);
      next();
    });
  },
});
