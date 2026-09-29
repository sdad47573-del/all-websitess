/**
 * Typed client for this app's API.
 *
 * `hc<AppType>` infers every route from the server, so a route that changes
 * shape breaks the build here rather than failing at runtime. The base URL is
 * relative: in development Vite proxies `/api` to the Hono server, and in
 * production both are served from the same origin.
 */

import { hc } from 'hono/client';

import type { AppType } from '../server/index.js';

export const api = hc<AppType>('/api');
