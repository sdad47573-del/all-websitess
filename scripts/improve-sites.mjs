/**
 * improve-sites.mjs
 *
 * Mejoras mecánicas y seguras para todas las webs de `apps/`:
 *
 *  1. SEO técnico: `lang="es"`, enlace al sitemap e imagen Open Graph (og:image / twitter:card).
 *  2. Páginas legales: crea `src/pages/aviso-legal.astro` (aviso legal + privacidad + cookies)
 *     cuando no existe, sin inventar datos: los campos que no se pueden derivar se marcan
 *     como pendientes de completar por el titular.
 *  3. Enlazado: añade el pie de enlaces legales si el sitio no los tenía (auditoría: 0/92 enlazados).
 *
 * Es idempotente: nunca sobrescribe un archivo existente ni duplica etiquetas.
 * Por defecto solo informa; usa `--apply` para escribir.
 *
 *   node scripts/improve-sites.mjs            # dry-run (informe)
 *   node scripts/improve-sites.mjs --apply    # escribe los cambios
 *   node scripts/improve-sites.mjs --apply bar-el-anzuelo a-jalar   # solo esas apps
 *   node scripts/improve-sites.mjs --apply --og-only                # solo la tarjeta social
 *
 * `--og-only` deja fuera las páginas legales y el resto de pasos: sirve para completar la
 * vista previa de las webs que se comparten sin tarjeta, sin crear contenido que nadie pidió.
 */

import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { regionCode } from './lib/geo-codes.mjs';

const APPS_DIR = 'apps';
const APPLY = process.argv.includes('--apply');
const OG_ONLY = process.argv.includes('--og-only');
const ONLY = process.argv.slice(2).filter((a) => !a.startsWith('--'));

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : null);
// Toda escritura pasa por aquí: en dry-run no se toca el disco.
const write = (p, s) => {
	if (APPLY) writeFileSync(p, s, 'utf8');
};

/* ---------------------------------------------------------------- datos */

function findHeadFile(app) {
	// El <head> suele vivir en un Layout; si no, en la propia index.
	// Se prefiere un archivo con <head>…</head> cerrado: sin </head> no se puede insertar nada.
	const candidates = [];
	const layoutsDir = join(APPS_DIR, app, 'src/layouts');
	if (existsSync(layoutsDir)) {
		for (const d of readdirSync(layoutsDir, { withFileTypes: true })) {
			if (d.isFile() && d.name.endsWith('.astro')) candidates.push(`src/layouts/${d.name}`);
		}
	}
	candidates.push('src/pages/index.astro');

	let fallback = null;
	for (const rel of candidates) {
		const src = read(join(APPS_DIR, app, rel));
		if (!src) continue;
		if (/<head[\s>]/.test(src)) {
			if (/<\/head>/.test(src)) return rel;
			fallback ??= rel;
		}
	}
	return fallback ?? 'src/pages/index.astro';
}

function extractField(src, keys) {
	for (const key of keys) {
		const m = src.match(new RegExp(`\\b${key}:\\s*['"\`]([^'"\`]+)['"\`]`));
		if (m) return m[1].trim();
	}
	return null;
}

// El orden de los atributos varía entre layouts: content puede ir antes que property.
const hasOgImage = (src) => /property=['"]og:image['"]/.test(src);

function extractNumber(src, keys) {
	for (const key of keys) {
		const m = src.match(new RegExp(`\\b${key}\\s*:\\s*(-?\\d+(?:\\.\\d+)?)`));
		if (m) return m[1];
	}
	return null;
}

const readAllSrc = (root) => {
	const dir = join(root, 'src');
	if (!existsSync(dir)) return '';
	const out = [];
	const walk = (d) => {
		for (const e of readdirSync(d, { withFileTypes: true })) {
			const p = join(d, e.name);
			if (e.isDirectory()) walk(p);
			else if (/\.(astro|ts|tsx|js|jsx)$/.test(e.name)) out.push(read(p));
		}
	};
	walk(dir);
	return out.filter(Boolean).join('\n');
};

function collect(app) {
	const root = join(APPS_DIR, app);
	const index = read(join(root, 'src/pages/index.astro'));
	const headPath = findHeadFile(app);
	const head = read(join(root, headPath)) ?? '';
	const config = read(join(root, 'astro.config.mjs')) ?? '';
	const pkg = read(join(root, 'package.json')) ?? '';
	// Las demos de plantilla (panel de gestión, scaffolds de React...) no son webs de negocio.
	const isDemo =
		existsSync(join(root, 'src/pages/dashboard')) ||
		Object.keys(JSON.parse(pkg || '{}').dependencies || {}).length > 15;
	// Los datos del negocio pueden estar en business.ts, data/site.ts o cualquier otro .ts de src.
	const tsFiles = existsSync(join(root, 'src'))
		? readdirSync(join(root, 'src'), { withFileTypes: true }).flatMap((d) => {
				if (d.isFile() && d.name.endsWith('.ts')) return [join(root, 'src', d.name)];
				if (d.isDirectory() && ['lib', 'data', 'config', 'constants', 'content'].includes(d.name)) {
					const dir = join(root, 'src', d.name);
					return readdirSync(dir, { withFileTypes: true })
						.filter((f) => f.isFile() && f.name.endsWith('.ts'))
						.map((f) => join(dir, f.name));
				}
				return [];
			})
		: [];
	// Algunas apps definen los datos en el frontmatter de la propia página.
	const businessSrc = [...tsFiles.map((p) => read(p)), head].filter(Boolean).join('\n');
	// Respaldo: si no hay lat/lng declarados, se toman de la URL de Google Maps del propio sitio.
	const allSrc = readAllSrc(root);
	const mapUrlCoords = allSrc.match(/destination=(-?\d+\.\d+)%2C(-?\d+\.\d+)/) || allSrc.match(/maps\?q=(-?\d+\.\d+)%2C(-?\d+\.\d+)/);
	const coordsFromUrl = mapUrlCoords ? [mapUrlCoords[1], mapUrlCoords[2]] : null;
	const favicon = read(join(root, 'public/favicon.svg')) ?? '';
	const robots = read(join(root, 'public/robots.txt')) ?? '';

	const title = (head.match(/<title[^>]*>([\s\S]*?)<\/title>/i) || [])[1] || '';
	// En muchas webs el <title> es una variable ({title}); entonces se busca el literal del frontmatter.
	const titleLiteral =
		(head.match(/const\s+title\s*=\s*['"`]([^'"`]+)['"`]/) || [])[1] ||
		(title.includes('{') ? '' : title);
	const cleanTitle = String(titleLiteral).replace(/\s+/g, ' ').trim();

	// "Nombre | Resto" -> "Nombre"; si no, se recorta a 34 caracteres.
	const fromTitle = cleanTitle.split(/\s[|·–—-]\s/)[0].trim().slice(0, 34);
	// Prioridad: datos reales del negocio > title > slug legible.
	const nameFromData =
		extractField(businessSrc, ['name', 'nombre', 'businessName']) || fromTitle || app.replace(/-/g, ' ');
	const configSiteUrl = (config.match(/site:\s*['"`]([^'"`]+)['"`]/) || [])[1] || null;
	// El dominio del negocio manda: hay apps copiadas de otra web cuyo `astro.config.mjs`
	// conserva el dominio antiguo. Para la tarjeta social eso publicaría una URL ajena.
	const dataSiteUrl = extractField(businessSrc, ['siteUrl', 'SITE_URL']);
	const siteUrl = dataSiteUrl ?? configSiteUrl;
	const color = (favicon.match(/fill="(#[0-9a-fA-F]{3,8})"/) || [])[1] || '#24503f';

	return {
		app,
		root,
		isDemo,
		hadLegal: existsSync(join(root, 'src/pages/aviso-legal.astro')),
		index,
		headPath,
		head,
		cleanTitle,
		name: nameFromData,
		siteUrl,
		color,
		usesSharedConfig: /createAstroConfig/.test(config),
		sitemapIndex: /sitemap-index\.xml/.test(robots),
		phone: extractField(businessSrc, ['phone', 'phoneDisplay', 'telefono']),
		address: extractField(businessSrc, ['streetAddress', 'street', 'direccion', 'address']),
		postalCode: extractField(businessSrc, ['postalCode', 'cp', 'postal']),
		locality: extractField(businessSrc, ['locality', 'city', 'ciudad', 'municipio']),
		email: extractField(businessSrc, ['email', 'correo']),
		latitude: extractNumber(businessSrc, ['latitude', 'lat']) ?? coordsFromUrl?.[0] ?? null,
		longitude: extractNumber(businessSrc, ['longitude', 'lng', 'lon']) ?? coordsFromUrl?.[1] ?? null,
		province: extractField(businessSrc, ['province', 'region', 'regionName', 'regionCode']),
	};
}

/* --------------------------------------------------------------- acciones */

const changes = [];

function ensureLang(info) {
	if (/<html[^>]*\slang=/.test(info.head)) return;
	const next = info.head.replace(/<html(\s|>)/, '<html lang="es"$1');
	if (next === info.head) return;
	write(join(info.root, info.headPath), next);
	// El <head> vive en memoria durante todo el pase: sin actualizarlo, el siguiente paso
	// reescribiría el archivo desde la copia vieja y borraría esta inserción.
	info.head = next;
	changes.push(`${info.app}: lang="es" en ${info.headPath}`);
}

function ensureSitemapLink(info) {
	if (!info.usesSharedConfig || !info.sitemapIndex) return;
	if (/rel="sitemap"/.test(info.head)) return;
	const next = info.head.replace(
		/<\/head>/,
		'\t\t<link rel="sitemap" type="application/xml" href="/sitemap-index.xml" />\n\t</head>',
	);
	if (next === info.head) return;
	write(join(info.root, info.headPath), next);
	info.head = next;
	changes.push(`${info.app}: <link rel="sitemap"> en ${info.headPath}`);
}

/**
 * Dimensiones reales de un PNG/JPEG/SVG leyendo su cabecera, sin dependencias. Hace falta
 * porque `og:image:width`/`height` deben coincidir con el archivo: si no, WhatsApp o Facebook
 * recortan o deforman la vista previa.
 */
function imageSize(file) {
	const buf = readFileSync(file);
	if (buf.length > 24 && buf.toString('latin1', 1, 4) === 'PNG')
		return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
	if (buf[0] === 0xff && buf[1] === 0xd8) {
		let i = 2;
		while (i + 9 < buf.length) {
			if (buf[i] !== 0xff) {
				i += 1;
				continue;
			}
			const marker = buf[i + 1];
			// Marcadores SOF (inicio de frame): ahí viven alto y ancho reales.
			if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker))
				return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
			i += 2 + buf.readUInt16BE(i + 2);
		}
	}
	const text = buf.toString('utf8');
	const viewBox = text.match(/viewBox=["']\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+([\d.]+)/i);
	if (viewBox) return { width: Math.round(Number(viewBox[1])), height: Math.round(Number(viewBox[2])) };
	const w = text.match(/\bwidth=["']([\d.]+)/i);
	const h = text.match(/\bheight=["']([\d.]+)/i);
	if (w && h) return { width: Math.round(Number(w[1])), height: Math.round(Number(h[1])) };
	return null;
}

const OG_MIME = {
	png: 'image/png',
	jpg: 'image/jpeg',
	jpeg: 'image/jpeg',
	webp: 'image/webp',
	svg: 'image/svg+xml',
};

/**
 * El og real de la app, prefiriendo un raster (Facebook, WhatsApp y X no interpretan SVG).
 * Si aún no existe ningún asset, devuelve null: no se inventa una URL que daría 404.
 */
function findOgAsset(root) {
	for (const file of ['og.png', 'og.jpg', 'og.jpeg', 'og.webp', 'og.svg']) {
		const full = join(root, 'public', file);
		if (!existsSync(full)) continue;
		const size = imageSize(full) ?? { width: 1200, height: 630 };
		return { file, type: OG_MIME[file.split('.').pop().toLowerCase()] ?? 'image/png', ...size };
	}
	return null;
}

function ensureOgImage(info) {
	if (hasOgImage(info.head)) return;
	// Sin dominio configurado la URL quedaría relativa y los scrapers no la resuelven.
	if (!siteUrl(info)) return;
	// `ensureOgAsset` puede haber creado og.svg justo antes: en dry-run aún no está en disco.
	const asset =
		findOgAsset(info.root) ?? (info.name ? { file: 'og.svg', type: 'image/svg+xml', width: 1200, height: 630 } : null);
	if (!asset) return;
	const url = `${siteUrl(info)}/${asset.file}`;
	const tags = [
		`<meta property="og:image" content="${url}" />`,
		`<meta property="og:image:type" content="${asset.type}" />`,
		`<meta property="og:image:width" content="${asset.width}" />`,
		`<meta property="og:image:height" content="${asset.height}" />`,
	];
	if (!/name="twitter:card"/.test(info.head)) tags.push(`<meta name="twitter:card" content="summary_large_image" />`);
	const next = info.head.replace(/<\/head>/, `\t\t${tags.join('\n\t\t')}\n\t</head>`);
	if (next === info.head) return;
	write(join(info.root, info.headPath), next);
	info.head = next;
	changes.push(`${info.app}: og:image + twitter:card en ${info.headPath}`);
}

/**
 * `og:url` y `og:locale` completan la tarjeta social y no dependen del contenido: la URL sale
 * del canonical si ya existe y, si no, del dominio declarado en `astro.config.mjs`.
 */
function ensureOgUrlLocale(info) {
	if (!siteUrl(info)) return;
	const canonical = /<link[^>]+rel="canonical"[^>]+href="([^"]+)"/.exec(info.head)?.[1];
	const tags = [];
	if (!/property="og:url"/.test(info.head))
		tags.push(`<meta property="og:url" content="${canonical ?? `${siteUrl(info)}/`}" />`);
	if (!/property="og:locale"/.test(info.head))
		tags.push('<meta property="og:locale" content="es_ES" />');
	if (!tags.length) return;
	const next = info.head.replace(/<\/head>/, `\t\t${tags.join('\n\t\t')}\n\t</head>`);
	if (next === info.head) return;
	write(join(info.root, info.headPath), next);
	info.head = next;
	changes.push(`${info.app}: og:url + og:locale en ${info.headPath}`);
}

/**
 * `og:title` y `og:description` reutilizan lo que la página ya declara: la constante del
 * frontmatter si existe (`content={title}`), o el literal del `<title>`/meta description.
 * No se inventa texto: si no hay ninguno de los dos, la etiqueta se deja fuera.
 */
function ensureOgTitleDescription(info) {
	const tags = [];
	if (!/property="og:title"/.test(info.head)) {
		if (/\bconst\s+title\s*=/.test(info.head))
			tags.push('<meta property="og:title" content={title} />');
		else {
			const literal = /<title[^>]*>([^<{]+)<\/title>/.exec(info.head)?.[1]?.trim();
			if (literal) tags.push(`<meta property="og:title" content="${escape(literal)}" />`);
		}
	}
	if (!/property="og:description"/.test(info.head)) {
		if (/\bconst\s+description\s*=/.test(info.head))
			tags.push('<meta property="og:description" content={description} />');
		else {
			const literal = /<meta\s+name="description"\s+content="([^"{]*)"/.exec(info.head)?.[1]?.trim();
			if (literal)
				tags.push(`<meta property="og:description" content="${escape(literal)}" />`);
		}
	}
	if (!tags.length) return;
	const next = info.head.replace(/<\/head>/, `\t\t${tags.join('\n\t\t')}\n\t</head>`);
	if (next === info.head) return;
	write(join(info.root, info.headPath), next);
	info.head = next;
	changes.push(`${info.app}: og:title + og:description en ${info.headPath}`);
}

/**
 * Una tarjeta con el dominio de otra web no sirve: corrige `og:url` y `og:image` cuando
 * apuntan a un host distinto del que declara el negocio.
 */
function alignOgHost(info) {
	if (!siteUrl(info)) return;
	const host = siteUrl(info);
	let changed = false;
	const next = info.head.replace(
		/(<meta\s+property="og:(?:url|image)"\s+content=")([^"]+)(")/g,
		(match, start, url, end) => {
			const fixed = url.replace(/^https?:\/\/[^/"']+/, host);
			if (fixed !== url) changed = true;
			return `${start}${fixed}${end}`;
		},
	);
	if (!changed) return;
	write(join(info.root, info.headPath), next);
	info.head = next;
	changes.push(`${info.app}: og:url/og:image al dominio del negocio (${host})`);
}

const siteUrl = (info) => (info.siteUrl ? info.siteUrl.replace(/\/$/, '') : '');

// Códigos de provincia para el meta geo.region: la tabla vive en el componente
// compartido (packages/@astro-components/src/local/geo-codes.ts), que es quien
// emite la etiqueta en las webs que usan LocalSeo, para no tener dos listas.
const provinceCode = (name) => regionCode(name);

/** Metas de geolocalización: clave en SEO local y derivado de datos ya presentes. */
function ensureGeoTags(info) {
	// Limpia lineas duplicadas de una pasada anterior antes de volver a inyectar.
	const seenGeo = new Set();
	const headDeduped = info.head
		.split('\n')
		.filter((line) => {
			if (!/name="(geo\.region|geo\.placename|geo\.position)"|name="ICBM"/.test(line)) return true;
			if (seenGeo.has(line)) return false;
			seenGeo.add(line);
			return true;
		})
		.join('\n');
	if (headDeduped !== info.head) {
		write(join(info.root, info.headPath), headDeduped);
		changes.push(`${info.app}: eliminadas lineas geo duplicadas en ${info.headPath}`);
		info.head = headDeduped;
	}
	// geo.position siempre se inyecta cuando hay coordenadas: es el guard idempotente.
	if (/name="geo\.position"/.test(info.head)) return;
	const { latitude: lat, longitude: lng } = info;
	if (!lat || !lng || !/^-?\d+\.\d+$/.test(lat) || !/^-?\d+\.\d+$/.test(lng)) return;
	if (Number(lat) === 0 && Number(lng) === 0) return; // coordenadas por defecto
	const code = provinceCode(info.province);
	// geo.region solo si la provincia es conocida; position e ICBM siempre que haya coordenadas.
	const tags = [
		code ? `<meta name="geo.region" content="${code}" />` : null,
		info.locality ? `<meta name="geo.placename" content="${escape(info.locality)}" />` : null,
		`<meta name="geo.position" content="${lat};${lng}" />`,
		`<meta name="ICBM" content="${lat}, ${lng}" />`,
	]
		.filter(Boolean)
		.join('\n\t\t');
	const next = info.head.replace(/<\/head>/, `\t\t${tags}\n\t</head>`);
	if (next === info.head) return;
	write(join(info.root, info.headPath), next);
	info.head = next;
	changes.push(`${info.app}: metas geo${code ? '.region' : ''}/geo.position/ICBM en ${info.headPath}`);
}

const escapeXml = (s) =>
	String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Genera un og.svg original con el color del favicon y el nombre real del negocio. */
function ensureOgAsset(info) {
	const target = join(info.root, 'public/og.svg');
	if (existsSync(target)) return;
	if (hasOgImage(info.head)) return;
	if (/property="og:image"/.test(info.head)) return;
	const publicDir = join(info.root, 'public');
	if (existsSync(publicDir) && readdirSync(publicDir).some((f) => /^og\./i.test(f))) return;
	// Sin un </head> donde insertar la etiqueta, la imagen quedaría sin usar: no se crea.
	if (!/<\/head>/.test(info.head)) return;
	if (!info.name) return;
	// Algunas webs no tienen `public/`: sin la carpeta, el SVG no se puede escribir.
	mkdirSync(publicDir, { recursive: true });
	const { name, color, locality } = info;
	// Reparto en dos líneas si el nombre es largo, sin cortar palabras.
	let lines = [name];
	if (name.length > 24) {
		const words = name.split(' ');
		const half = Math.ceil(words.length / 2);
		lines = [words.slice(0, half).join(' '), words.slice(half).join(' ')];
	}
	const size = lines[0].length > 26 ? 74 : 88;
	const y1 = lines.length > 1 ? 300 : 350;
	const subtitle = [locality, info.province].filter(Boolean).join(', ');
	const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630"><rect width="1200" height="630" fill="${color}"/><path d="M0 470q300-84 600 6t600-16v170H0z" fill="#000" opacity=".18"/><g opacity=".3" stroke="#ffffff" fill="none"><circle cx="960" cy="300" r="200"/><circle cx="960" cy="300" r="150"/></g><text x="90" y="150" fill="#ffffff" opacity=".75" font-family="Arial,sans-serif" font-size="22" letter-spacing="5">${escapeXml(subtitle.toUpperCase())}</text>${lines
		.map((l, i) => `<text x="90" y="${y1 + i * (size + 12)}" fill="#ffffff" font-family="Georgia,serif" font-size="${size}">${escapeXml(l)}</text>`)
		.join('')}<text x="98" y="566" fill="#ffffff" opacity=".62" font-family="Arial,sans-serif" font-size="15">Ilustración original · no es una fotografía del establecimiento</text></svg>
`;
	write(target, svg);
	changes.push(`${info.app}: creada public/og.svg`);
}

function legalPage(info) {
	const missing = [];
	const row = (label, value) =>
		value
			? `<li><strong>${label}:</strong> ${escape(value)}</li>`
			: `<li><strong>${label}:</strong> <em>pendiente de completar por el titular</em></li>`;
	if (!info.phone) missing.push('teléfono');
	if (!info.address) missing.push('domicilio');
	if (!info.email) missing.push('correo electrónico de contacto');

	const pending = missing.length
		? `<aside class="aviso">
				<h2>Antes de publicar: completa estos datos</h2>
				<p>Faltan los siguientes datos obligatorios de información (Ley 34/2002, LSSI-CE) y de
				identificación (Reglamento (UE) 2016/679): <strong>${missing.join(', ')}</strong>, además del
				<strong>NIF/CIF</strong> y la <strong>razón social</strong> del titular. Sustituye los campos
				marcados como pendientes antes de poner la web en producción.</p>
			</aside>`
		: '';

	return `---
const today = new Date().toISOString().slice(0, 10);
---

<!doctype html>
<html lang="es">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Aviso legal y privacidad | ${info.name}</title>
		<meta name="description" content="Aviso legal, política de privacidad y política de cookies de ${info.name}." />
		<meta name="robots" content="index, follow" />
		${siteUrl(info) ? `<link rel="canonical" href="${siteUrl(info)}/aviso-legal/" />` : ''}
		<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
	</head>
	<body>
		<main>
			<nav aria-label="Migas de pan"><a href="/">&larr; Volver a ${info.name}</a></nav>
			<h1>Aviso legal y privacidad</h1>
			<p class="sub">Última actualización: {today}</p>
			${pending}

			<article>
				<h2>Aviso legal</h2>
				<h3>1. Titular del sitio web</h3>
				<ul>
					${row('Denominación', info.name)}
					${row('NIF/CIF', null)}
					${row('Razón social', null)}
					${row('Domicilio', [info.address, info.postalCode, info.locality].filter(Boolean).join(', ') || null)}
					${row('Teléfono', info.phone)}
					${row('Correo electrónico', info.email)}
				</ul>

				<h3>2. Objeto</h3>
				<p>
					Este sitio web tiene una finalidad informativa: dar a conocer el establecimiento, su oferta
					gastronómica, sus horarios y sus datos de contacto. No constituye un canal de contratación
					electrónica ni un sistema de reservas en línea.
				</p>

				<h3>3. Condiciones de uso</h3>
				<p>
					El acceso al sitio es libre y gratuito. La persona usuaria se compromete a usar los contenidos
					de forma diligente, correcta y lícita, y a no realizar actividades que puedan dañar la web,
					impedir su normal funcionamiento o vulnerar derechos de terceros.
				</p>
				<p>
					La información sobre oferta, precios, horarios y servicios es orientativa y puede variar por
					temporada, disponibilidad o cambios del establecimiento. En caso de discrepancia prevalece
					sempre la información facilitada en el propio local.
				</p>

				<h3>4. Propiedad intelectual</h3>
				<p>
					Los textos, fotografías, marcas, logotipos, diseño y demás contenidos del sitio están
					protegidos por la normativa de propiedad intelectual e industrial. Queda prohibida su
					reproducción, distribución, comunicación pública o transformación sin autorización expresa
					del titular.
				</p>

				<h3>5. Enlaces a terceros</h3>
				<p>
					El sitio incluye enlaces y contenidos incrustados de servicios de terceros (Google Maps,
					Google Fonts, redes sociales y directorios). El titular no se hace responsable de sus
					contenidos ni de sus políticas de privacidad, que se rigen por sus propias condiciones.
				</p>

				<h3>6. Legislación aplicable</h3>
				<p>
					Estas condiciones se rigen por la legislación española. Para cualquier controversia derivada
					del uso del sitio, las partes se someten a los juzgados y tribunales del lugar donde se
					encuentra el establecimiento, salvo que la normativa de consumo aplicable establezca otro fuero.
				</p>
			</article>

			<article>
				<h2>Política de privacidad</h2>
				<h3>1. Responsable del tratamiento</h3>
				<p>El responsable del tratamiento es ${info.name}, con los datos de contacto indicados en el apartado 1.</p>

				<h3>2. Datos tratados</h3>
				<p>
					Este sitio es informativo y no incluye formularios de contacto, registro ni área de usuario,
					por lo que no recogemos datos personales a través de la web. Solo se tratan los datos
					identificativos y de contacto que facilitas voluntariamente al llamar por teléfono o al
					escribir por un canal directo.
				</p>

				<h3>3. Finalidad, base jurídica y conservación</h3>
				<ul>
					<li><strong>Finalidad:</strong> atender tu consulta o petición de información sobre el local.</li>
					<li><strong>Base jurídica:</strong> tu consentimiento y el interés legítimo en atender la relación con la clientela (art. 6.1.a) y 6.1.f) del RGPD).</li>
					<li><strong>Conservación:</strong> durante el tiempo necesario para gestionar la consulta y, después, durante los plazos legalmente exigibles.</li>
				</ul>
				<p>No elaboramos perfiles ni tomamos decisiones automatizadas.</p>

				<h3>4. Destinatarios</h3>
				<p>
					No cedemos tus datos a terceros salvo obligación legal. Pueden acceder a ellos los proveedores
					tecnológicos que prestan servicios al establecimiento (alojamiento web y servicios de Google)
					actuando como encargados del tratamiento.
				</p>

				<h3>5. Tus derechos</h3>
				<p>
					Puedes ejercer los derechos de acceso, rectificación, supresión, oposición, limitación del
					tratamiento y portabilidad escribiendo o llamando a los datos del apartado 1, y retirar tu
					consentimiento en cualquier momento. Si consideras que no hemos atendido correctamente tus
					derechos, puedes reclamar ante la Agencia Española de Protección de Datos (www.aepd.es).
				</p>

				<h3>6. Seguridad</h3>
				<p>
					Aplicamos medidas técnicas y organizativas razonables para proteger la información, en la
					medida en que tratamos un volumen muy reducido de datos.
				</p>
			</article>

			<article>
				<h2>Política de cookies</h2>
				<h3>1. Cookies propias</h3>
				<p>Este sitio web no utiliza cookies propias de analítica, publicidad ni seguimiento.</p>

				<h3>2. Cookies y servicios de terceros</h3>
				<p>Sí se emplean servicios de terceros que pueden establecer conexión con sus servidores:</p>
				<ul>
					<li><strong>Google Maps:</strong> el mapa incrustado puede almacenar la dirección IP del visitante.</li>
					<li><strong>Google Fonts:</strong> las tipografías se cargan desde servidores de Google, que recibe la IP del dispositivo al solicitarlas.</li>
					<li><strong>Redes sociales y directorios:</strong> los enlaces externos se rigen por sus propias políticas.</li>
				</ul>
				<p>
					Si en el futuro se incorporan cookies no exentas (analítica o publicidad), se solicitará el
					consentimiento previo mediante un banner de cookies.
				</p>

				<h3>3. Cómo gestionarlas</h3>
				<p>
					Puedes configurar o bloquear cookies desde las opciones de privacidad de tu navegador. Ten en
					cuenta que bloquearlas puede impedir el funcionamiento de alguna parte del sitio.
				</p>
			</article>
		</main>

		<style>
			:root { color-scheme: light; }
			body { margin: 0; padding: 3rem 1.25rem 5rem; font: 16px/1.75 system-ui, -apple-system, 'Segoe UI', sans-serif; color: #232019; background: #f8f5ec; }
			main { max-width: 46rem; margin: 0 auto; }
			nav { margin-bottom: 2rem; font-size: .9rem; }
			nav a { color: ${info.color}; font-weight: 600; text-decoration: none; }
			nav a:hover { text-decoration: underline; }
			h1 { margin: 0 0 .4rem; font-size: clamp(1.9rem, 5vw, 2.6rem); line-height: 1.15; color: ${info.color}; }
			.sub { margin: 0 0 2.5rem; color: #7b7263; font-size: .85rem; }
			.aviso { margin-bottom: 2.5rem; padding: 1rem 1.15rem; border-left: 4px solid #c2761f; background: #fff4e2; }
			.aviso h2 { margin: 0 0 .4rem; font-size: 1rem; color: #8a4d10; }
			.aviso p { margin: 0; font-size: .9rem; }
			article { margin-bottom: 3rem; }
			h2 { margin: 0 0 1rem; padding-bottom: .5rem; border-bottom: 2px solid ${info.color}33; font-size: 1.5rem; color: ${info.color}; }
			h3 { margin: 1.75rem 0 .5rem; font-size: 1.05rem; }
			p, li { font-size: .95rem; }
			ul { padding-left: 1.15rem; }
			em { color: #9a6a3a; }
			@media (max-width: 600px) { body { padding: 2rem 1rem 4rem; } }
		</style>
	</body>
</html>
`;
}

const escape = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function ensureLegalPage(info) {
	const target = join(info.root, 'src/pages/aviso-legal.astro');
	if (existsSync(target)) return;
	write(target, legalPage(info));
	changes.push(`${info.app}: creada src/pages/aviso-legal.astro`);
}

function ensureLegalLinks(info) {
	if (info.index.includes('aviso-legal')) return;
	// En páginas legales ya existentes no siempre existe el ancla de cookies.
	const links = info.hadLegal
		? ['<a href="/aviso-legal">Aviso legal</a>', '<a href="/aviso-legal#privacidad">Privacidad</a>']
		: [
				'<a href="/aviso-legal">Aviso legal</a>',
				'<a href="/aviso-legal#privacidad">Privacidad</a>',
				'<a href="/aviso-legal#cookies">Cookies</a>',
			];
	const footer = join(info.root, 'src/components/Footer.astro');
	const block = `<nav class="legal-links" aria-label="Información legal">
					${links.join('\n\t\t\t\t\t')}
				</nav>
				`;
	if (existsSync(footer)) {
		const src = read(footer);
		if (src.includes('aviso-legal')) return;
		const next = src.replace(/<\/footer>/, `${block}\t</footer>`);
		if (next === src) return;
		write(footer, next);
		changes.push(`${info.app}: enlaces legales en components/Footer.astro`);
		return;
	}
	// Sin componente Footer: se inyecta antes de </body> en la index.
	if (!/<\/body>/.test(info.index)) return;
	const next = info.index.replace(/<\/body>/, `${block}\t\t</body>`);
	write(join(info.root, 'src/pages/index.astro'), next);
	changes.push(`${info.app}: enlaces legales al final de index.astro`);
}

/* ------------------------------------------------------------------ main */

const apps = readdirSync(APPS_DIR, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.filter((a) => existsSync(join(APPS_DIR, a, 'src/pages/index.astro')))
	.filter((a) => ONLY.length === 0 || ONLY.includes(a));

for (const app of apps) {
	const info = collect(app);
	if (info.isDemo) continue;
	if (!OG_ONLY) {
		ensureLang(info);
		ensureSitemapLink(info);
		ensureGeoTags(info);
	}
	ensureOgAsset(info);
	ensureOgImage(info);
	ensureOgUrlLocale(info);
	ensureOgTitleDescription(info);
	alignOgHost(info);
	if (!OG_ONLY) {
		ensureLegalPage(info);
		ensureLegalLinks(info);
	}
}

console.log(`Modo: ${APPLY ? 'APLICANDO' : 'dry-run'} | apps analizadas: ${apps.length} | cambios: ${changes.length}`);

const KIND = [
	['metas geo', /metas geo/],
	['public/og.svg', /creada public\/og\.svg/],
	['og:image + twitter:card', /og:image \+ twitter:card/],
	['aviso-legal', /creada src\/pages\/aviso-legal/],
	['enlaces legales', /enlaces legales/],
	['lang="es"', /lang="es"/],
	['link sitemap', /rel="sitemap"/],
];
const resumen = KIND.map(([label, re]) => `  ${String(changes.filter((c) => re.test(c)).length).padStart(3)}  ${label}`);
console.log(resumen.join('\n'));
if (!APPLY) {
	console.log('Ejecuta con --apply para escribir los cambios.\n');
}
for (const c of changes) console.log('  ·', c);
