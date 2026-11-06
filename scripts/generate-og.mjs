// Genera public/og.jpg para las webs que no tienen ninguna imagen Open Graph.
//
// La tarjeta es original (no una foto del local): fondo con el color del favicon,
// nombre real del negocio, ciudad, lema y dominio. Se rasteriza con sharp, la misma
// dependencia que usa scripts/og-svg-to-png.mjs, porque Facebook, WhatsApp y X no
// interpretan SVG.
//
// La generación vive en scripts/lib/og-card.mjs, compartida con el CMS.
//
// Uso (desde la raíz del monorepo):
//   node scripts/generate-og.mjs             genera solo las que no tienen og.*
//   node scripts/generate-og.mjs --dry-run   enseña qué haría
//   node scripts/generate-og.mjs --only slug otra-web [--force]
//
// Es idempotente: si la app ya tiene og.jpg/png/webp/svg, no se toca salvo --force.

import { existsSync, readdirSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { findSharp, generateOgCard, hasAnyOg, readOgData } from './lib/og-card.mjs';

const APPS_DIR = resolve('apps');
const DRY = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');
const onlyIndex = process.argv.indexOf('--only');
const ONLY = onlyIndex > -1 ? process.argv.slice(onlyIndex + 1).filter((app) => !app.startsWith('--')) : [];

// Sobrescribir OG existentes solo tiene sentido sobre una lista explícita: si no,
// se pisarían fotos reales de webs que ya tenían su tarjeta.
if (FORCE && ONLY.length === 0) {
	console.error('--force requiere --only con las apps a regenerar.');
	process.exit(1);
}

const sharp = findSharp(APPS_DIR);
if (!sharp) {
	console.error('No se encuentra sharp en ninguna app. Ejecuta `pnpm install` y reintenta.');
	process.exit(1);
}

const apps = readdirSync(APPS_DIR, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((app) => existsSync(join(APPS_DIR, app, 'src/data/site.ts')))
	.filter((app) => ONLY.length === 0 || ONLY.includes(app));

const created = [];
const skipped = [];
const failed = [];

for (const app of apps) {
	const appRoot = join(APPS_DIR, app);
	if (hasAnyOg(appRoot) && !(FORCE && ONLY.includes(app))) {
		skipped.push(app);
		continue;
	}

	const data = readOgData(appRoot);
	if (!data.name) {
		failed.push(`${app}: sin nombre en src/data/site.ts`);
		continue;
	}

	if (DRY) {
		created.push({ app, name: data.name, kb: 0 });
		continue;
	}

	const info = await generateOgCard({ sharp, appRoot, data });
	created.push({ app, name: data.name, kb: info.size / 1024, width: info.width, height: info.height });
}

console.log(`${DRY ? 'DRY-RUN' : 'Generadas'}: ${created.length} · ya tenían og: ${skipped.length} · fallos: ${failed.length}`);
for (const item of created) {
	console.log(`  ${item.app.padEnd(42)} ${item.kb ? `${item.kb.toFixed(0)} kB  ${item.width}×${item.height}` : item.name}`);
}
for (const failure of failed) console.log(`  ! ${failure}`);
