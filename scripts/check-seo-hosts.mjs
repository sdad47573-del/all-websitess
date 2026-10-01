// Detecta hosts ajenos en cabeceras SEO (canonical, og:url, og:image, author)
// comparándolos con el `site` declarado en astro.config.mjs.
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

const apps = readdirSync('apps');
const rows = [];

for (const app of apps) {
	const cfg = join('apps', app, 'astro.config.mjs');
	if (!existsSync(cfg)) continue;
	const m = readFileSync(cfg, 'utf8').match(/site:\s*['"`]([^'"`]+)/);
	if (!m) continue;
	let siteHost;
	try {
		siteHost = new URL(m[1]).host;
	} catch {
		continue;
	}

	const stack = [join('apps', app, 'src')];
	const files = [];
	while (stack.length) {
		const dir = stack.pop();
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			const p = join(dir, entry.name);
			if (entry.isDirectory()) stack.push(p);
			else if (/\.(astro|tsx?|jsx?)$/.test(entry.name)) files.push(p);
		}
	}

	for (const file of files) {
		const rel = file.split(sep).join('/');
		readFileSync(file, 'utf8')
			.split('\n')
			.forEach((line, i) => {
				if (!/canonical|og:url|og:image|name=['"]author/.test(line)) return;
				for (const mm of line.matchAll(/https?:\/\/([a-z0-9.-]+\.[a-z]{2,})/gi)) {
					const host = mm[1].toLowerCase();
					if (host === siteHost) continue;
					rows.push({ app, host, rel, line: i + 1 });
				}
			});
	}
}

const byHost = {};
for (const r of rows) (byHost[r.host] ??= []).push(r);

for (const [host, list] of Object.entries(byHost)) {
	console.log(`${host}  (${list.length})`);
	for (const r of list.slice(0, 6)) console.log(`   ${r.app}  ${r.rel}:${r.line}`);
}

console.log(`\nTOTAL ${rows.length}`);