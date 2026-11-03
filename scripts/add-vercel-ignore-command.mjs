/**
 * Añade (o refresca) el `vercel.json` de cada app con el `ignoreCommand` que filtra los builds.
 *
 * Las apps son proyectos de Vercel independientes conectados al mismo repositorio, así que sin
 * este fichero cada commit dispara un build en todas. `scripts/vercel-ignore-build.mjs` decide si
 * el proyecto tiene cambios reales y cancela el resto.
 *
 * ## Por qué se fusiona y ya no se salta
 *
 * La versión anterior dejaba intacto cualquier `vercel.json` que no fuera exactamente el que este
 * script genera. Eso protegía configuraciones propias (redirects, headers, `trailingSlash`), pero
 * a cambio **nunca añadía el `ignoreCommand`** a esas apps: seguían construyendo en cada push,
 * que era justo lo que había que evitar. Ahora se hace `JSON.parse`, se conserva cada clave tal
 * como está y solo se escribe `ignoreCommand`.
 *
 * Uso: node scripts/add-vercel-ignore-command.mjs [--dry]
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { globSync } from 'tinyglobby';

const dry = process.argv.includes('--dry');
const repoRoot = path.resolve(import.meta.dirname, '..');

/**
 * El script vive en la raíz del repo y Vercel lo ejecuta desde el Root Directory del proyecto
 * (`apps/<nombre>`), de ahí los dos niveles.
 */
const IGNORE_COMMAND = 'node ../../scripts/vercel-ignore-build.mjs';
const SCHEMA = 'https://openapi.vercel.sh/vercel.json';

/** Respeta la indentación del fichero original para no reescribirlo entero con otro estilo. */
const indentOf = (text) => (text.includes('\n\t') ? '\t' : '  ');

const apps = globSync('apps/*/package.json', { cwd: repoRoot });
let created = 0;
let updated = 0;
let untouched = 0;
let skipped = 0;

for (const manifest of apps) {
	const appDir = path.dirname(path.join(repoRoot, manifest));
	const target = path.join(appDir, 'vercel.json');
	const rel = path.relative(repoRoot, target);

	if (!existsSync(target)) {
		const contents = `${JSON.stringify({ $schema: SCHEMA, ignoreCommand: IGNORE_COMMAND }, null, '\t')}\n`;
		if (!dry) writeFileSync(target, contents);
		console.log(`+ ${rel}`);
		created++;
		continue;
	}

	const text = readFileSync(target, 'utf8');
	let json;
	try {
		json = JSON.parse(text);
	} catch {
		// Un JSON inválido (comentarios o comas finales) no se toca: romper un vercel.json válido
		// para el resto de claves sería peor que reconstruir de más esa app.
		console.log(`! ${rel}: JSON no válido, se omite`);
		skipped++;
		continue;
	}

	if (json.ignoreCommand === IGNORE_COMMAND) {
		untouched++;
		continue;
	}

	json.$schema ??= SCHEMA;
	json.ignoreCommand = IGNORE_COMMAND;
	if (!dry) writeFileSync(target, `${JSON.stringify(json, null, indentOf(text))}\n`);
	console.log(`~ ${rel}`);
	updated++;
}

console.log(
	`\n${dry ? '[dry] ' : ''}${apps.length} apps: ${created} creados, ${updated} actualizados, ${untouched} sin cambios, ${skipped} omitidos`,
);