/**
 * Comprueba en el HTML construido (`apps/<app>/dist/index.html`) los metadatos de SEO local
 * que no se ven en pantalla pero sí en los resultados de búsqueda y al compartir un enlace.
 *
 * Para cada app con `dist/`:
 *
 *  1. `geo.region`, si está, es un código ISO 3166-2 real y de la región que declara la propia
 *     web (provincia o comunidad), nunca de otra;
 *  2. `og:image:type` coincide con lo que dice el fichero que declara `og:image`;
 *  3. `og:image` y el favicon apuntan a ficheros que existen en el sitio construido;
 *  4. ningún metadato de Open Graph, Twitter o geolocalización aparece dos veces.
 *
 * Aparte, informa (sin fallar) de las webs que publican coordenadas y no llevan ningún meta
 * geográfico: es una convención del repositorio que algunas webs antiguas nunca siguieron.
 *
 * Las apps sin `dist/` se listan como pendientes de construir, no como fallo: el catálogo
 * entero no se compila en cada pasada.
 *
 *   node scripts/check-seo-meta.mjs
 *   node scripts/check-seo-meta.mjs <app> [<app> …]
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { provinceCommunities, regionCode, regionCodeTable, sameRegion, validRegionCodes } from './lib/geo-codes.mjs';

const wanted = process.argv.slice(2).filter((a) => !a.startsWith('-'));
const apps = wanted.length
	? wanted
	: readdirSync('apps', { withFileTypes: true })
			.filter((entry) => entry.isDirectory())
			.map((entry) => entry.name)
			.filter((app) => existsSync(join('apps', app, 'src/pages/index.astro')));

const table = regionCodeTable();
const valid = validRegionCodes();
const communities = provinceCommunities();
const MIME = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', webp: 'image/webp', avif: 'image/avif', gif: 'image/gif' };

const problems = [];
const warnings = [];
const pending = [];
let checked = 0;

/** Regiones que declara la web en su código (provincia y comunidad). */
function declaredRegions(app) {
	const dir = join('apps', app, 'src');
	let source = '';
	for (const file of readdirSync(dir, { recursive: true })) {
		if (!/\.(astro|ts)$/.test(String(file))) continue;
		source += readFileSync(join(dir, String(file)), 'utf8');
	}
	return [
		...new Set(
			[
				...source.matchAll(/\b(?:region|province|addressRegion|regionName):\s*'([^']+)'/g),
				...source.matchAll(/\b(?:region|province|addressRegion|regionName)="([^"]+)"/g),
				...source.matchAll(/region=\{?['"]([^'"]+)['"]\}?/g),
			]
				.map((match) => match[1])
				.filter((name) => !/^\$|^\{/.test(name)),
		),
	];
}

for (const app of apps) {
	const file = join('apps', app, 'dist/index.html');
	if (!existsSync(file)) {
		pending.push(app);
		continue;
	}
	checked++;
	const html = readFileSync(file, 'utf8');

	// 1. Metadatos geográficos.
	const region = html.match(/name="geo\.region"\s+content="([^"]*)"/)?.[1];
	const position = /name="geo\.position"/.test(html);
	const publishesCoords = position || /"GeoCoordinates"/.test(html);
	if (region) {
		if (!valid.has(region)) problems.push(`${app}: geo.region="${region}" no es un código ISO 3166-2`);
		else {
			const expected = declaredRegions(app).map((name) => regionCode(name, { table })).filter(Boolean);
			// Vale la provincia o su comunidad (`ES-CS` y `ES-VC`), pero no otra región.
			const compatible = expected.some((code) => sameRegion(code, region, { communities }));
			if (expected.length && !compatible)
				problems.push(`${app}: geo.region="${region}" no es la región que declara la web (${expected.join('/')})`);
		}
	} else if (publishesCoords) {
		warnings.push(app);
	}

	// 2 y 3. Open Graph y favicon.
	const ogImage = html.match(/property="og:image"\s+content="([^"]+)"/)?.[1];
	const ogType = html.match(/og:image:type"\s+content="([^"]+)"/)?.[1];
	if (ogImage) {
		const path = ogImage.replace(/^https?:\/\/[^/]+/, '').split('?')[0];
		const local = join('apps', app, 'dist', path.replace(/^\/+/, ''));
		if (path.startsWith('/') && !existsSync(local) && !ogImage.includes('googleusercontent'))
			problems.push(`${app}: og:image="${ogImage}" no existe en el sitio construido`);
		else if (ogType && path.startsWith('/') && existsSync(local)) {
			const ext = path.split('.').pop().toLowerCase();
			// El tipo declarado debe cuadrar con lo que dice el fichero, no con su extensión.
			const head = readFileSync(local).subarray(0, 4).toString('hex');
			const real = head.startsWith('89504e47') ? 'image/png' : head.startsWith('ffd8') ? 'image/jpeg' : head.startsWith('3c737667') || head.startsWith('3c3f786d') ? 'image/svg+xml' : MIME[ext];
			if (real && ogType !== real) problems.push(`${app}: og:image:type="${ogType}" pero el fichero ${path} es ${real}`);
		}
	}
	const icon = html.match(/rel="icon"[^>]*href="([^"]+)"/)?.[1];
	if (icon && icon.startsWith('/') && !existsSync(join('apps', app, 'dist', icon.replace(/^\/+/, ''))))
		problems.push(`${app}: el favicon ${icon} no existe en el sitio construido`);

	// 4. Metadatos repetidos: dos `og:image` distintos en la misma página son un dato ambiguo.
	for (const [tag, pattern] of Object.entries({
		'og:image': /property="og:image"/g,
		'og:image:type': /property="og:image:type"/g,
		'twitter:card': /name="twitter:card"/g,
		'geo.region': /name="geo\.region"/g,
		'geo.position': /name="geo\.position"/g,
		ICBM: /name="ICBM"/g,
	})) {
		const times = (html.match(pattern) ?? []).length;
		if (times > 1) problems.push(`${app}: ${tag} aparece ${times} veces en el mismo <head>`);
	}

	if (wanted.length && !problems.length) console.log(`${app}: correcto`);
}

console.log(`apps con dist comprobadas: ${checked}`);
console.log(`problemas: ${problems.length}`);
for (const line of problems) console.log(`  ✗ ${line}`);
console.log(`webs con coordenadas y sin ningún meta geográfico (no es un fallo): ${warnings.length}`);
if (warnings.length) console.log(`  ${warnings.slice(0, 8).join(', ')}${warnings.length > 8 ? ` … (+${warnings.length - 8})` : ''}`);
if (!wanted.length) console.log(`sin dist (pendientes de construir): ${pending.length}`);

process.exit(problems.length ? 1 : 0);
