import type { APIContext, APIRoute } from 'astro';
import { ORIGINS } from '../data/proxy-origins';
import { proxy } from '../lib/proxy';

/**
 * Sirve la web de cada cliente en `https://www.sur-digital.com/<slug>/…`.
 *
 * Tiene que vivir en Astro, no en un `rewrite` de vercel.json: con Astro esos
 * rewrites solo funcionan para ficheros estáticos (los demás se los come la
 * ruta del 404 del adaptador). Al ser una ruta del propio proyecto, entra en el
 * routing que genera el build y se evalúa antes del 404.
 *
 * Las páginas estáticas del sitio (/precios/, /blog/…) siguen ganando: el
 * adaptador comprueba primero el sistema de ficheros.
 */
export const prerender = false;

/** Muestra el 404 del sitio, con su diseño y con el código correcto. */
const notFound = async (context: APIContext) => {
	const response = await context.rewrite('/404');
	return new Response(response.body, { status: 404, headers: response.headers });
};

const handler = async (context: APIContext) => {
	const segments = String(context.params.path ?? '')
		.split('/')
		.filter(Boolean);
	const slug = segments.shift();

	if (!slug || !ORIGINS[slug]) return notFound(context);

	return proxy(slug, segments, context.request);
};

export const GET: APIRoute = handler;

export const HEAD: APIRoute = async (context) => {
	const response = await handler(context);
	return new Response(null, { status: response.status, headers: response.headers });
};
