/**
 * Typed client for this app's API.
 *
 * `hc<AppType>` infers every route, its path parameters and its response type
 * from the server, so a route that changes shape breaks the build here instead
 * of failing at runtime. The base URL is a relative path: in development Vite
 * proxies it to the Hono server, and in production it is served from the same
 * origin as the app.
 */

import { hc } from "hono/client";

import type { AppType } from "../server/index.js";

export const api = hc<AppType>("/api");

/** A journal entry, as returned by the API. */
export type JournalEntry = {
  id: string;
  text: string;
  createdAt: number;
};
