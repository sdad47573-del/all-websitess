import type { APIRoute } from 'astro';
import { proxy } from '../../../lib/proxy';

/**
 * Variante de depuración: `/api/proxy/<slug>/…` sirve la misma web que la ruta
 * pública `/<slug>/…` (ver src/pages/[...path].ts y src/lib/proxy.ts).
 *
 * Se conserva porque permite comprobar una web concreta sin que el enrutado
 * público la tape con otra página del sitio, y porque el proxy ya estaba
 * documentado con esta URL en docs/subdominios-clientes.md.
 */
export const prerender = false;

export const GET: APIRoute = async ({ params, request }) => {
	const segments = String(params.path ?? '')
		.split('/')
		.filter(Boolean);

	return proxy(segments.shift() ?? '', segments, request);
};

export const HEAD: APIRoute = async (context) => {
	const response = await GET(context);
	return new Response(null, { status: response.status, headers: response.headers });
};
