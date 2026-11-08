/**
 * Dev entry point: serves the API on its own port.
 *
 *   bun run api        # http://localhost:8787
 *
 * The Vite dev server proxies `/api` here (see `vite.config.ts`), so the
 * browser talks to a single origin and this is not exposed directly.
 */

import app from "./index.js";

const port = Number(process.env.PORT ?? 8787);

export default {
  port,
  fetch: app.fetch,
};
