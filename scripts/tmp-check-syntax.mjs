import { readFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

const { transform } = await import('@astrojs/compiler');

const changed = execSync('git diff --name-only', { encoding: 'utf8' })
	.split('\n')
	.map((l) => l.trim())
	.filter((l) => l.endsWith('.astro'));

console.log(`archivos .astro modificados: ${changed.length}`);

let ok = 0;
const errores = [];

for (const file of changed) {
	const src = readFileSync(file, 'utf8');
	try {
		const res = await transform(src, { sourcemap: false });
		if (res.diagnostics?.some((d) => d.severity === 1)) {
			errores.push(`${file}: ${res.diagnostics.filter((d) => d.severity === 1).map((d) => d.text).join('; ')}`);
		} else ok++;
	} catch (e) {
		errores.push(`${file}: ${e.message}`);
	}
}

console.log(`OK: ${ok}`);
console.log(`ERRORES: ${errores.length}`);
for (const e of errores.slice(0, 20)) console.log(e);
