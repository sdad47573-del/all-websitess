/**
 * Typed client for this app's API.
 *
 * `hc<AppType>` infers every route, its query parameters and its response type
 * from the server, so a route that changes shape breaks the build here instead
 * of failing at runtime. The base URL is a relative path: in development Vite
 * proxies it to the Hono server, and in production it is served from the same
 * origin as the app.
 */

import { hc } from 'hono/client';

import type { AppType } from '../server/index.js';

export const api = hc<AppType>('/api');

/**
 * The API's own types, re-exported from the server so the client cannot drift
 * from it. `import type` is erased at build time, so nothing from `server/`
 * ends up in the browser bundle.
 */
export type { Budget, Expense, Stats } from '../server/index.js';

/**
 * Pulls the message out of a failed response.
 *
 * Every error the API returns is `{ error: string }`, but a network failure or
 * a proxy returning HTML would not be, so the fallback keeps the UI from
 * rendering `undefined` at the user.
 */
export async function errorMessage(
	// Structural rather than `Response`: hono's `ClientResponse` is not a DOM
	// Response, but the only thing read here is the parsed body.
	response: { json: () => Promise<unknown> },
	fallback: string,
): Promise<string> {
	const body: unknown = await response.json().catch(() => null);
	if (body && typeof body === 'object' && 'error' in body) {
		const message = (body as { error: unknown }).error;
		if (typeof message === 'string' && message) return message;
	}
	return fallback;
}
