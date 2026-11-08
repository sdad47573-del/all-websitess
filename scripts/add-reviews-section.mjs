#!/usr/bin/env node
/**
 * Añade a las landings que usan `LocalSecciones` el bloque de opiniones con las reseñas que
 * la propia app ya publica en `src/data/site.ts` (`REVIEWS`). No inventa reseñas ni totales:
 *
 *  1. Inserta una sección `opiniones` en `src/data/secciones.json`, antes de `visita`/`faq`
 *     si existen (es donde encaja en el orden de la página).
 *  2. Pasa `reviews={REVIEWS}` y `googleMaps={MAPS.place}` a `<LocalSecciones>`.
 *  3. Añade `REVIEWS` al import de `../data/site` si aún no estaba.
 *
 * Es idempotente: si la sección o las props ya existen, no toca la app. Sin `--apply` solo
 * informa.
 *
 *   node scripts/add-reviews-section.mjs            # dry-run
 *   node scripts/add-reviews-section.mjs --apply    # escribe
 *   node scripts/add-reviews-section.mjs --apply almirez bar-restaurante-7-vidas
 */

import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const APPS_DIR = 'apps';
const APPLY = process.argv.includes('--apply');
const ONLY = process.argv.slice(2).filter((arg) => !arg.startsWith('--'));

const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : null);
const write = (file, contents) => {
	if (APPLY) writeFileSync(file, contents, 'utf8');
};

const changes = [];
const skipped = [];

for (const app of readdirSync(APPS_DIR, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.sort()) {
	if (ONLY.length > 0 && !ONLY.includes(app)) continue;

	const root = join(APPS_DIR, app);
	const indexFile = join(root, 'src/pages/index.astro');
	const dataFile = join(root, 'src/data/site.ts');
	const sectionsFile = join(root, 'src/data/secciones.json');

	const index = read(indexFile);
	const data = read(dataFile);
	const sectionsRaw = read(sectionsFile);
	if (!index || !data || !sectionsRaw) continue;
	if (!index.includes('<LocalSecciones')) continue;
	if (!/export const REVIEWS\s*=/.test(data)) continue;

	let sections;
	try {
		sections = JSON.parse(sectionsRaw);
	} catch {
		skipped.push(`${app}: secciones.json ilegible`);
		continue;
	}
	if (!Array.isArray(sections.secciones)) continue;
	if (sections.secciones.some((section) => section.tipo === 'opiniones')) continue;

	// 1. Sección de opiniones en el orden de la página.
	const nextSections = [...sections.secciones];
	const before = nextSections.findIndex((section) => ['visita', 'faq'].includes(section.tipo));
	nextSections.splice(before === -1 ? nextSections.length : before, 0, {
		id: 'opiniones',
		tipo: 'opiniones',
		visible: true,
		etiqueta: 'Opiniones',
		titulo: 'Lo que dicen <em>en Google.</em>',
	});
	write(
		sectionsFile,
		`${JSON.stringify({ ...sections, secciones: nextSections }, null, '\t')}\n`,
	);

	// 2. Props nuevas en <LocalSecciones>.
	let nextIndex = index;
	const tag = /(^[\t ]*)<LocalSecciones\b([\s\S]*?)(\/>)/m.exec(nextIndex);
	if (!tag) {
		skipped.push(`${app}: no se localiza la etiqueta <LocalSecciones>`);
	} else {
		const indent = tag[1];
		const extras = [];
		if (!/\breviews=/.test(tag[2])) extras.push(`reviews={REVIEWS}`);
		if (!/\bgoogleMaps=/.test(tag[2])) extras.push(`googleMaps={MAPS.place}`);
		if (extras.length > 0) {
			const props = extras.map((prop) => `\n${indent}\t${prop}`).join('');
			nextIndex = nextIndex.replace(tag[0], `${indent}<LocalSecciones${tag[2]}${props}\n${indent}/>`);
		}
	}

	// 3. Import de REVIEWS si falta.
	const importMatch = /import\s*\{([\s\S]*?)\}\s*from\s*'\.\.\/data\/site';/.exec(nextIndex);
	if (importMatch) {
		const names = importMatch[1]
			.split(',')
			.map((name) => name.trim())
			.filter(Boolean);
		if (!names.includes('REVIEWS')) {
			names.push('REVIEWS');
			const block = importMatch[1].includes('\n')
				? `{\n${names.map((name) => `\t${name}`).join(',\n')}\n}`
				: `{ ${names.join(', ')} }`;
			nextIndex = nextIndex.replace(importMatch[0], `import ${block} from '../data/site';`);
		}
	} else if (!/\bREVIEWS\b/.test(nextIndex)) {
		nextIndex = nextIndex.replace(
			/^(---[\s\S]*?)(\n---)/m,
			`$1\nimport { REVIEWS } from '../data/site';$2`,
		);
	}

	if (nextIndex !== index) write(indexFile, nextIndex);

	changes.push(app);
}

console.log(`${APPLY ? 'APLICANDO' : 'dry-run'} · apps con opiniones: ${changes.length}`);
for (const app of changes) console.log(`  · ${app}`);
if (skipped.length > 0) {
	console.log(`\nsin tocar (${skipped.length}):`);
	for (const item of skipped) console.log(`  · ${item}`);
}
