/**
 * Reescribe las rutas absolutas de una web para servirla bajo `/<slug>/` en un dominio
 * compartido.
 *
 * Es la misma reescritura que hace `apps/_sur-digital/src/lib/proxy.ts` en tiempo de petición,
 * pero aplicada aquí al `dist/` ya construido: el proyecto único de Vercel no pide la web de otro
 * despliegue, así que no hay proxy y la reescritura se paga una vez, en el build.
 *
 * Tres cosas se reescriben:
 *
 * - El origen del sitio (`https://<app>.vercel.app`) por el dominio del proyecto único más el
 *   prefijo. Es lo que arregla canonical, `og:url`, el JSON-LD de `BUSINESS.siteUrl`, el sitemap
 *   y `robots.txt`, que son URLs absolutas.
 * - Las rutas que empiezan por `/` en atributos (`href`, `src`, `srcset`, `poster`…), en `url()`
 *   de CSS y en los literales de los scripts que referencian `/_astro/`.
 * - Nada más: las URLs externas y las que ya llevan el prefijo se quedan como están, para no
 *   entrar en un bucle de prefijos al reescribir dos veces el mismo fichero.
 */

/** El atributo y la comilla de apertura, para respetar el HTML tal cual viene. */
const ATTRIBUTE = /(\s(?:href|src|action|formaction|poster|data-src)=)(["'])\/(?!\/)/g;

const URL_FUNCTION = /url\((["']?)\/(?!\/)/g;

const SRCSET = /(\s(?:srcset|data-srcset)=)(["'])([^"']*)\2/g;

/** `ORIGIN` relativo al protocolo, para sustituir el origen sin depender de la barra final. */
const stripOrigin = (origin) => String(origin ?? '').replace(/\/+$/, '');

/**
 * Reescribe el cuerpo de un HTML.
 *
 * El lookbehind de `/_astro/` evita prefijar dos veces las referencias que ya han pasado por el
 * reemplazo de atributos; sin él, `src="/app/_astro/x.css"` acabaría en `/app/app/_astro/x.css`.
 */
export const rewriteHtml = (html, { origin, base, slug }) => {
	const source = stripOrigin(origin);
	let out = source ? html.split(source).join(base) : html;

	out = out.replace(ATTRIBUTE, (_, attr, quote) => `${attr}${quote}/${slug}/`);

	out = out.replace(URL_FUNCTION, (_, quote) => `url(${quote}/${slug}/`);

	// srcset: solo la primera candidata del valor lleva el `=` delante, el resto van tras coma.
	out = out.replace(SRCSET, (_, attr, quote, value) => {
		const rewritten = value
			.split(',')
			.map((candidate) => {
				const trimmed = candidate.trimStart();
				return trimmed.startsWith('/') && !trimmed.startsWith('//')
					? ` /${slug}${trimmed}`
					: candidate;
			})
			.join(',');
		return `${attr}${quote}${rewritten}${quote}`;
	});

	return out.replace(new RegExp(`(?<!\\/${slug})\\/_astro\\/`, 'g'), `/${slug}/_astro/`);
};

/** CSS: `url(/…)`, `@import "/…"` y las URLs absolutas del sitio. */
export const rewriteCss = (css, { origin, base, slug }) => {
	const source = stripOrigin(origin);
	return (source ? css.split(source).join(base) : css)
		.replace(URL_FUNCTION, (_, quote) => `url(${quote}/${slug}/`)
		.replace(/(@import\s+["'])\//g, (_, start) => `${start}/${slug}/`);
};

/**
 * Scripts e islas: el origen absoluto y las rutas `/_astro/` embebidas como cadena.
 *
 * No se prefijan todos los literales que empiezan por `/` porque en JS un `/algo/` puede ser el
 * argumento de un `fetch` a una API que no forma parte del `dist`; el proxy ya se limita a
 * `_astro` y eso cubre los assets que Astro genera.
 */
export const rewriteScript = (script, { origin, base, slug }) => {
	const source = stripOrigin(origin);
	return (source ? script.split(source).join(base) : script).replace(
		/(["'])\/_astro\//g,
		(_, quote) => `${quote}/${slug}/_astro/`,
	);
};

/** XML (sitemaps) y texto plano (`robots.txt`): solo URLs absolutas del origen. */
export const rewriteAbsolute = (text, { origin, base }) => {
	const source = stripOrigin(origin);
	return source ? text.split(source).join(base) : text;
};

/** Por extensión: lo que no está aquí es binario y se copia sin tocar. */
const REWRITERS = new Map([
	['.html', rewriteHtml],
	['.htm', rewriteHtml],
	['.css', rewriteCss],
	['.js', rewriteScript],
	['.mjs', rewriteScript],
	['.json', rewriteScript],
	['.xml', rewriteAbsolute],
	['.txt', rewriteAbsolute],
]);

/** Devuelve el texto reescrito, o `null` si esa extensión no se toca. */
export const rewriteFile = (file, contents, context) => {
	const rewrite = REWRITERS.get(file.slice(file.lastIndexOf('.')).toLowerCase());
	return rewrite ? rewrite(contents, context) : null;
};
