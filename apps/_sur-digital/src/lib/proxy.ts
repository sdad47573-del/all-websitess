import { ORIGINS } from '../data/proxy-origins';

/**
 * Sirve la web de un cliente bajo `https://www.sur-digital.com/<slug>/`.
 *
 * No es una redirección: se pide el despliegue original, se reescribe su HTML
 * (rutas absolutas de la raíz, `srcset`, CSS en línea y su propio dominio) y se
 * devuelve con 200. Las peticiones de assets que el navegador hace después
 * (`/<slug>/_astro/...`) vuelven a entrar por la misma ruta y se piden al mismo
 * origen, así que cada web conserva sus ficheros sin reconstruirla ni tocar su
 * proyecto.
 *
 * Vive aquí y no en el endpoint porque hay dos puertas de entrada: la ruta
 * pública `/<slug>/…` (src/pages/[...path].ts) y el endpoint
 * `/api/proxy/<slug>/…`, que se mantiene para depurar una web concreta sin
 * pasar por el enrutado público.
 */
export const PUBLIC_HOST = 'https://www.sur-digital.com';

/**
 * Cabeceras del despliegue original que no sirven al reescribir el cuerpo:
 * el contenido cambia, la longitud y el ETag ya no valen, y una CSP o un
 * `X-Frame-Options` del cliente no deben aplicarse al dominio principal.
 */
const DROP = new Set([
	'content-length',
	'content-encoding',
	'etag',
	'last-modified',
	'set-cookie',
	'content-security-policy',
	'content-security-policy-report-only',
	'x-frame-options',
	'strict-transport-security',
	'access-control-allow-origin',
]);

const withPrefix = (path: string, slug: string) => `/${slug}${path}`;

/** Reescribe las URLs del HTML original al prefijo del proxy. */
const rewriteHtml = (html: string, origin: string, base: string, slug: string) => {
	let out = html.split(origin).join(base);

	// Atributos que empiezan por la raíz: href="/#carta", src="/_astro/x.webp".
	out = out.replace(/(\s(?:href|src|action|formaction|poster)=\")\/(?!\/)/g, (_, attr: string) => {
		return `${attr}/${slug}/`;
	});

	// Backgrounds y fuentes dentro de estilos en línea o bloques <style>.
	out = out.replace(/url\((["\']?)\/(?!\/)/g, (_, quote: string) => `url(${quote}/${slug}/`);

	// srcset: solo la primera candidata lleva el `=`, las demás van tras coma.
	out = out.replace(
		/(\s(?:srcset|data-srcset)=\")([^\"]*)\"/g,
		(_, attr: string, value: string) => {
			const rewritten = value
				.split(',')
				.map((candidate) => {
					const trimmed = candidate.trimStart();
					return trimmed.startsWith('/') && !trimmed.startsWith('//')
						? ` /${slug}${trimmed}`
						: candidate;
				})
				.join(',');
			return `${attr}${rewritten}"`;
		},
	);

	// Rutas `/_astro/` que no viven en un atributo (JSON de islas, props de
	// componentes, scripts en línea). El lookbehind evita duplicar el prefijo
	// de las que ya se reescribieron arriba.
	return out.replace(new RegExp(`(?<!\\/${slug})\\/_astro\\/`, 'g'), `/${slug}/_astro/`);
};

const rewriteCss = (css: string, origin: string, base: string, slug: string) =>
	css
		.split(origin)
		.join(base)
		.replace(/url\((["\']?)\/(?!\/)/g, (_, quote: string) => `url(${quote}/${slug}/`)
		.replace(/(@import\s+["\'])\//g, (_, start: string) => `${start}/${slug}/`);

const rewriteJs = (js: string, origin: string, base: string, slug: string) =>
	js
		.split(origin)
		.join(base)
		.replace(/(["'])\/_astro\//g, (_, quote: string) => `${quote}/${slug}/_astro/`);

/** Devuelve la respuesta de la web del cliente, con sus rutas ya reescritas. */
export const proxy = async (
	slug: string,
	segments: string[],
	request: Request,
): Promise<Response> => {
	const origin = ORIGINS[slug];

	if (!origin) return new Response('Not found', { status: 404 });
	if (segments.some((segment) => segment === '.' || segment === '..')) {
		return new Response('Bad request', { status: 400 });
	}

	// La barra final se conserva al pedir el origen: muchos despliegues (Netlify,
	// Vercel) canonicalizan `/pagina` → `/pagina/` con un 301. Pidiendo siempre
	// sin barra, ese 301 se reescribía justo a la URL pública que acababa de
	// entrar y el navegador quedaba en un bucle de redirecciones.
	const url = new URL(request.url);
	const path = segments.join('/');
	const trailingSlash = path && url.pathname.endsWith('/') ? '/' : '';
	const target = `${origin}/${path}${trailingSlash}${url.search}`;

	let upstream: Response;
	try {
		upstream = await fetch(target, {
			headers: { accept: request.headers.get('accept') ?? '*/*' },
			redirect: 'manual',
		});
	} catch {
		return new Response('Upstream unavailable', { status: 502 });
	}

	const headers = new Headers();
	upstream.headers.forEach((value, key) => {
		if (!DROP.has(key)) headers.set(key, value);
	});

	const base = `${PUBLIC_HOST}/${slug}`;

	// El despliegue original puede redirigir (barra final, etc.): se reescribe
	// el destino para que el navegador no salga del dominio principal.
	if (upstream.status >= 300 && upstream.status < 400) {
		const location = upstream.headers.get('location');
		if (location) {
			const rewritten = location.startsWith(origin)
				? `${base}${location.slice(origin.length)}`
				: location.startsWith('/') && !location.startsWith('//')
					? withPrefix(location, slug)
					: location;
			headers.set('location', rewritten);
		}
		headers.set('cache-control', 'no-store');
		return new Response(null, { status: upstream.status, headers });
	}

	const type = (upstream.headers.get('content-type') ?? '').toLowerCase();
	const isAsset = segments[0] === '_astro' || segments[0] === 'fonts';

	if (type.includes('text/html')) {
		const body = rewriteHtml(await upstream.text(), origin, base, slug);
		headers.set('content-type', 'text/html; charset=utf-8');
		// Espejo de la web del cliente bajo nuestro dominio: no debe indexarse ni
		// competir con su web real, que conserva su propio canonical (y que en 80
		// clientes no se puede corregir desde este repo). `follow` mantiene el
		// rastreo de los enlaces internos de la página.
		headers.set('x-robots-tag', 'noindex, follow');
		headers.set('cache-control', 'public, max-age=0, s-maxage=60, stale-while-revalidate=600');
		return new Response(body, { status: upstream.status, headers });
	}

	if (type.includes('text/css')) {
		const body = rewriteCss(await upstream.text(), origin, base, slug);
		headers.set('content-type', 'text/css; charset=utf-8');
		headers.set('cache-control', 'public, max-age=31536000, immutable');
		return new Response(body, { status: upstream.status, headers });
	}

	if (type.includes('javascript') || type.includes('ecmascript')) {
		const body = rewriteJs(await upstream.text(), origin, base, slug);
		headers.set('content-type', type);
		headers.set('cache-control', 'public, max-age=31536000, immutable');
		return new Response(body, { status: upstream.status, headers });
	}

	if (isAsset) headers.set('cache-control', 'public, max-age=31536000, immutable');
	return new Response(await upstream.arrayBuffer(), { status: upstream.status, headers });
};
