// Ejecuta `astro check` en las apps indicadas (o en todas) y resume el resultado.
import { execSync } from 'node:child_process';
import { readdirSync, existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const args = process.argv.slice(2);
const all = args.length === 0 || args.includes('--all');
const targets = all
	? readdirSync('apps').filter((a) => existsSync(join('apps', a, 'astro.config.mjs')))
	: args;

let failed = 0;
for (const app of targets) {
	const dir = join('apps', app);
	if (!existsSync(join(dir, 'astro.config.mjs'))) continue;
	let out;
	try {
		out = execSync('npx astro check', { cwd: dir, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
	} catch (e) {
		out = `${e.stdout ?? ''}${e.stderr ?? ''}`;
		failed++;
	}
	const files = out.match(/Result \((\d+) files?\)/)?.[1] ?? '?';
	const errors = out.match(/- (\d+) errors?/)?.[1] ?? '?';
	const hints = out.match(/- (\d+) hints?/)?.[1] ?? '?';
	const status = Number(files) === 0 ? 'SIN COMPROBAR' : errors === '0' ? 'ok' : 'ERROR';
	console.log(`${status.padEnd(12)} ${app.padEnd(38)} files=${String(files).padStart(4)} errors=${errors} hints=${hints}`);
	if (status === 'ERROR') {
		for (const m of out.matchAll(/^(.+?)\n\s*(\d+)(\d+)\s+(error|warning)\s+(.+)$/gm)) {
			console.log(`             ${m[1]}:${m[2]}${m[3]} ${m[4]}: ${m[5]}`);
		}
		for (const m of out.matchAll(/^\s*(\d+:\d+)\s+-\s+(.+)$/gm)) console.log(`             ${m[1]} ${m[2]}`);
	}
}
console.log(`\napps con fallo de check: ${failed}/${targets.length}`);