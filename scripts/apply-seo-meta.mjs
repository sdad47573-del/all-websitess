// scripts/apply-seo-meta.mjs
//
// Corrige los metadatos que hoy están mal en las webs y que se pueden arreglar
// sin inventar información:
//
//  1. `geo.region` con un código que no existe en ISO 3166-2 (por ejemplo
//     `ES-JA`, que debería ser `ES-J`) o que apunta a otra región de la que
//     declara la web (un negocio de Cáceres anunciando `ES-AR`, Aragón). El
//     código correcto se deriva de la región de la propia web con la tabla
//     compartida del componente LocalSeo.
//  2. `og:image:type` que no coincide con el fichero declarado en `og:image`
//     (decía `image/svg+xml` sirviendo un `og.png`): se escribe el MIME real.
//  3. Metadatos duplicados: en las webs que ya usan `LocalSeo`, el componente emite
//     Open Graph, Twitter y geolocalización, así que las etiquetas sueltas que se
//     añadieron después (con otro `og:image`, por ejemplo) sobran.
//
// Es idempotente. Uso: node scripts/apply-seo-meta.mjs [--dry]

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { provinceCommunities, regionCode, regionCodeTable, sameRegion } from './lib/geo-codes.mjs';

const DRY = process.argv.includes('--dry');
const APPS = 'apps';
const MIME = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', webp: 'image/webp', avif: 'image/avif' };

const table = regionCodeTable();
const communities = provinceCommunities();
const apps = readdirSync(APPS, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((app) => existsSync(join(APPS, app, 'src/pages/index.astro')));

/** Regiones (provincia y comunidad) que declara la web, en el orden en que aparecen. */
function declaredRegions(app) {
	const dir = join(APPS, app, 'src');
	const files = readdirSync(dir, { recursive: true }).filter((f) => /\.(astro|ts)$/.test(String(f)));
	const source = files.map((f) => readFileSync(join(dir, String(f)), 'utf8')).join('\n');
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

/** Primer código válido de la lista de regiones declaradas. */
function expectedCode(names) {
	for (const name of names) {
		const code = regionCode(name, { table });
		if (code) return code;
	}
	return null;
}

/** Ficheros donde puede vivir el <head>: la portada y los layouts de la app. */
function headFiles(app) {
	const dir = join(APPS, app, 'src');
	return readdirSync(dir, { recursive: true })
		.filter((file) => /\.astro$/.test(String(file)))
		.map((file) => join(dir, String(file)))
		.filter((file) => /name="geo\.region"|property="og:image"|property="og:image:type"/.test(readFileSync(file, 'utf8')));
}

/** Etiquetas que LocalSeo ya emite: repetirlas a mano duplica el dato en el <head>. */
const DUPLICATED = [
	/<meta\s+property="og:(image|image:type|image:width|image:height|image:alt|title|description|url|type|locale|site_name)"[^>]*\/?>/,
	/<meta\s+name="twitter:(card|title|description|image|image:alt)"[^>]*\/?>/,
	/<meta\s+name="geo\.(region|placename|position)"[^>]*\/?>/,
	/<meta\s+name="ICBM"[^>]*\/?>/,
	/<meta\s+property="place:location:(latitude|longitude)"[^>]*\/?>/,
];

const changes = [];
const pending = [];

for (const app of apps) {
	const declared = declaredRegions(app);
	const expected = expectedCode(declared);
	const publicDir = join(APPS, app, 'public');
	const publicFiles = existsSync(publicDir) ? readdirSync(publicDir) : [];

	for (const file of headFiles(app)) {
		let head = readFileSync(file, 'utf8');
		const before = head;

		// 1. geo.region a mano con un código inválido o de otra región -> el derivado.
		for (const match of head.matchAll(/<meta\s+name="geo\.region"\s+content="([^"]*)"\s*\/>/g)) {
			const code = match[1];
			const valid = regionCode(code, { table });
			const compatible = declared.some((name) => {
				const declaredCode = regionCode(name, { table });
				return declaredCode && sameRegion(declaredCode, code, { communities });
			});
			if (valid && (!expected || compatible)) continue;
			if (!expected) {
				pending.push(`${app}: geo.region="${code}" y la web no declara de qué región es`);
				continue;
			}
			head = head.replace(match[0], match[0].replace(`content="${code}"`, `content="${expected}"`));
			changes.push(`${app}: geo.region ${code} → ${expected}`);
		}

		// 2. og:image:type que no corresponde al fichero declarado en og:image.
		const ogImage = head.match(/property="og:image"\s+content=(?:\{`([^`]*)`\}|"([^"]*)")/);
		const ogType = head.match(/<meta\s+property="og:image:type"\s+content="([^"]*)"\s*\/>/);
		if (ogImage && ogType) {
			const name = (ogImage[1] ?? ogImage[2] ?? '').split('/').pop().split('?')[0];
			const want = MIME[name.split('.').pop().toLowerCase()];
			if (want && publicFiles.includes(name) && ogType[1] !== want) {
				head = head.replace(ogType[0], ogType[0].replace(`content="${ogType[1]}"`, `content="${want}"`));
				changes.push(`${app}: og:image:type ${ogType[1]} → ${want} (${name})`);
			}
		}

		// 3. Metadatos duplicados: en las webs que usan LocalSeo, el componente ya los emite.
		if (/<LocalSeo/.test(head)) {
			const lines = head.split('\n');
			const kept = lines.filter((line) => !DUPLICATED.some((pattern) => pattern.test(line.trim())));
			if (kept.length !== lines.length) {
				head = kept.join('\n');
				changes.push(`${app}: ${lines.length - kept.length} etiquetas duplicadas de LocalSeo eliminadas`);
			}
		}

		if (head !== before) {
			if (!DRY) writeFileSync(file, head);
			changes.push('');
		}
	}
}

const files = new Set(changes.filter(Boolean).map((line) => line.split(':')[0]));
console.log(`${DRY ? '[dry-run] ' : ''}cambios: ${changes.filter(Boolean).length} en ${files.size} ficheros`);
for (const line of changes) if (line) console.log(`  ${line}`);
if (pending.length) {
	console.log(`\nsin tocar (falta el dato): ${pending.length}`);
	for (const line of pending) console.log(`  ${line}`);
}
