/**
 * Añade (o refresca) el `vercel.json` de cada app con el `ignoreCommand` que filtra los builds.
 *
 * Las apps son proyectos de Vercel independientes conectados al mismo repositorio, así que sin
 * este fichero cada commit dispara un build en las 144. `scripts/vercel-ignore-build.mjs` decide
 * si el proyecto afectado tiene cambios reales y cancela el resto.
 *
 * Solo se escribe `ignoreCommand`: cualquier otra clave que un proyecto tenga en el panel de
 * Vercel (build command, output directory, variables) sigue mandando, porque Vercel solo pisa
 * lo que aparece explícitamente en el fichero.
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
const build = (schema) => `${JSON.stringify(
	{
		$schema: schema,
		ignoreCommand: 'node ../../scripts/vercel-ignore-build.mjs',
	},
	null,
	'\t',
)}\n`;

const apps = globSync('apps/*/package.json', { cwd: repoRoot });
let created = 0;
let updated = 0;
let untouched = 0;

for (const manifest of apps) {
	const appDir = path.dirname(path.join(repoRoot, manifest));
	const target = path.join(appDir, 'vercel.json');
	const contents = build('https://openapi.vercel.sh/vercel.json');

	if (!existsSync(target)) {
		if (!dry) writeFileSync(target, contents);
		console.log(`+ ${path.relative(repoRoot, target)}`);
		created++;
		continue;
	}

	const current = readFileSync(target, 'utf8');
	if (current === contents) {
		untouched++;
		continue;
	}
	// Un `vercel.json` existente con otras claves (framework, rewrites, build command) se deja
	// como está: sobrescribirlo podría romper el despliegue de ese proyecto.
	console.log(`! ${path.relative(repoRoot, target)} ya existe y difiere: se deja intacto`);
	untouched++;
}

console.log(
	`\n${dry ? '[dry] ' : ''}${apps.length} apps: ${created} creados, ${untouched} sin tocar`,
);