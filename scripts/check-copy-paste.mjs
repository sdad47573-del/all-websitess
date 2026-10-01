// Detecta componentes whose "h1/name" evidence points to a different business
// than the app slug (plantilla heredada de otro proyecto).
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, sep } from 'node:path';

const STOP = new Set([
	'astro', 'home', 'index', 'main', 'menu', 'contact', 'contacto', 'galeria', 'gallery',
	'carta', 'restaurante', 'bar', 'cafeteria', 'peluqueria', 'clinica', ' taller', 'taller',
]);

const apps = readdirSync('apps');
for (const app of apps) {
	const srcDir = join('apps', app, 'src');
	if (!existsSync(srcDir)) continue;

	const files = [];
	const stack = [srcDir];
	while (stack.length) {
		const dir = stack.pop();
		for (const e of readdirSync(dir, { withFileTypes: true })) {
			const p = join(dir, e.name);
			if (e.isDirectory()) stack.push(p);
			else if (e.name.endsWith('.astro')) files.push(p);
		}
	}

	const indexPath = join(srcDir, 'pages', 'index.astro');
	const indexName = existsSync(indexPath)
		? (readFileSync(indexPath, 'utf8').match(/<h1[^>]*>\s*([^<{\n]+)/)?.[1] ?? '').trim()
		: '';

	for (const file of files) {
		const rel = file.split(sep).join('/').replace('apps/', '');
		if (rel.endsWith('pages/index.astro')) continue;
		if (!/Footer|Layout|Hero|Topbar/.test(file)) continue;
		const content = readFileSync(file, 'utf8');
		// nombres propios en el componente
		const names = new Set();
		for (const m of content.matchAll(/<h[1-4][^>]*>\s*([A-ZÁÉÍÓÚÑ][^<{\n]{2,40}?)\s*<\/h[1-4]>/g)) {
			const t = m[1].trim();
			if (t.split(/\s+/).length > 5) continue;
			if (STOP.has(t.toLowerCase())) continue;
			names.add(t);
		}
		for (const n of names) {
			const first = n.split(/\s+/)[0].toLowerCase();
			if (indexName && !indexName.toLowerCase().includes(first) && !first.includes(indexName.toLowerCase().split(/\s+/)[0])) {
				console.log(`${app}\t"${indexName}"\tcomponente dice "${n}"\t${rel}`);
			}
		}
	}
}