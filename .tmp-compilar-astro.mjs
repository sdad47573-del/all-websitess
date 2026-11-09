/**
 * Compila con el compilador de Astro todas las plantillas de las landings (`src/apps/**\/*.astro`)
 * sin generar el sitio. Detecta los errores de sintaxis que rompen el build (el caso que loParó:
 * `[CompilerError] Unexpected token`) en segundos, en vez de esperar horas a que el build llegue a
 * cada página.
 *
 * Uso: node .tmp-compilar-astro.mjs
 */

import { createRequire } from 'node:module';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const require = createRequire(import.meta.url);

// El compilador es dependencia de `astro`, no del workspace: se resuelve desde la app, que es
// quien declara `astro` en este monorepo.
const astroDir = path.dirname(
	require.resolve('astro/package.json', { paths: [path.resolve('apps/_sur-digital')] }),
);
const compilerPath = require.resolve('@astrojs/compiler', { paths: [astroDir] });
const { transform } = await import(pathToFileURL(compilerPath).href);

const ROOT = 'apps/_sur-digital/src/apps';

const walk = (dir) => {
	const out = [];
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) out.push(...walk(file));
		else if (entry.isFile() && file.endsWith('.astro')) out.push(file);
	}
	return out;
};

const files = walk(ROOT);
const failures = [];

for (const file of files) {
	const source = fs.readFileSync(file, 'utf8');
	try {
		const result = await transform(source, { filename: file, sourcemap: false });
		const errors = (result.diagnostics ?? []).filter(
			(diagnostic) => diagnostic.severity === 1 || diagnostic.severity === 'error',
		);
		for (const error of errors) failures.push(`${file}: ${error.text}`);
	} catch (error) {
		failures.push(`${file}: ${error instanceof Error ? error.message : String(error)}`);
	}
}

console.log(`plantillas compiladas: ${files.length}`);
for (const failure of failures) console.log(`  ✖ ${failure}`);
console.log(`errores de compilación: ${failures.length}`);
