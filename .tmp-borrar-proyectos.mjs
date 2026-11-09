/**
 * Elimina los proyectos de las landings que ya viven dentro de Sur Digital.
 *
 * Borra las carpetas de `apps/` cuya web está en `apps/_sur-digital/src/apps/<slug>` (o que
 * todavía tienen `src/pages/index.astro` sin migrar). No toca `_sur-digital` ni los proyectos que
 * no son landings (cms, vigia-proyecto, las apps de React…).
 *
 * Uso:
 *   node .tmp-borrar-proyectos.mjs            # solo informa
 *   node .tmp-borrar-proyectos.mjs --apply     # borra
 */

import fs from 'node:fs';
import path from 'node:path';

const APPLY = process.argv.includes('--apply');
const SUR = 'apps/_sur-digital';

const migrated = new Set(
	fs
		.readdirSync(`${SUR}/src/apps`, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => entry.name),
);

const all = fs
	.readdirSync('apps', { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => entry.name)
	.filter((name) => name !== '_sur-digital');

const remove = all.filter(
	(name) => migrated.has(name) || fs.existsSync(`apps/${name}/src/pages/index.astro`),
);
const keep = all.filter((name) => !remove.includes(name));

console.log(`proyectos de landings a borrar: ${remove.length}`);
console.log(`proyectos que se quedan: ${keep.length} → ${keep.join(', ')}`);

if (!APPLY) process.exit(0);

let done = 0;
for (const name of remove) {
	try {
		fs.rmSync(path.join('apps', name), { recursive: true, force: true, maxRetries: 3 });
		done += 1;
	} catch (error) {
		console.error(`✖ ${name}: ${error instanceof Error ? error.message : String(error)}`);
	}
	if (done % 100 === 0) console.log(`  … ${done}/${remove.length}`);
}

console.log(`\nborradas: ${done}/${remove.length}`);
console.log(`quedan en apps/: ${fs.readdirSync('apps').join(', ')}`);
