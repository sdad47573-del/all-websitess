/**
 * Comprueba que TODAS las apps de `apps/` tienen el `ignoreCommand` que filtra los builds de
 * Vercel. Falla (exit 1) si alguna se queda sin él, porque esa app volvería a construir en cada
 * push del monorepo.
 *
 * Sin dependencias a propósito: solo la librería estándar de Node. Así el CI no necesita
 * `bun install` y la comprobación tarda menos de un segundo.
 *
 * Uso:
 *   node scripts/check-vercel-ignore-command.mjs          # desde la raíz del repo
 *   node scripts/check-vercel-ignore-command.mjs <root>   # para probar con un fixture
 */

import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';

const EXPECTED = 'node ../../scripts/vercel-ignore-build.mjs';
const root = process.argv[2] ? path.resolve(process.argv[2]) : process.cwd();
const appsDir = path.join(root, 'apps');

if (!existsSync(appsDir)) {
	console.error(`✖ no existe ${path.relative(root, appsDir) || 'apps/'}: ejecútalo desde la raíz del repo.`);
	process.exit(2);
}

// Se considera "app" toda carpeta de apps/ con package.json, que es lo que Vercel necesita para
// construirla. Las demás carpetas (assets, capturas) no son proyectos y no se revisan.
const apps = readdirSync(appsDir, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.filter((entry) => existsSync(path.join(appsDir, entry.name, 'package.json')))
	.map((entry) => entry.name)
	.sort();

const problems = [];

for (const app of apps) {
	const rel = `apps/${app}/vercel.json`;
	const file = path.join(appsDir, app, 'vercel.json');

	if (!existsSync(file)) {
		problems.push(`${rel}: no existe`);
		continue;
	}

	let json;
	try {
		json = JSON.parse(readFileSync(file, 'utf8'));
	} catch {
		problems.push(`${rel}: JSON no válido`);
		continue;
	}

	if (json.ignoreCommand !== EXPECTED) {
		problems.push(
			json.ignoreCommand
				? `${rel}: ignoreCommand es "${json.ignoreCommand}"`
				: `${rel}: falta ignoreCommand`,
		);
	}
}

if (!existsSync(path.join(root, 'scripts', 'vercel-ignore-build.mjs'))) {
	problems.push('scripts/vercel-ignore-build.mjs: no existe');
}

if (problems.length > 0) {
	console.error(`✖ ${problems.length} problema(s) en ${apps.length} apps:`);
	for (const problem of problems.slice(0, 50)) console.error(`  - ${problem}`);
	if (problems.length > 50) console.error(`  … y ${problems.length - 50} más`);
	console.error('\nArréglalo con: node scripts/add-vercel-ignore-command.mjs');
	process.exit(1);
}

console.log(`✔ ${apps.length} apps con ignoreCommand`);
