// Trae a local las imagenes de readdy.ai y las deja en AVIF.
//
// readdy.ai responde con un 302 a public.readdy.ai, sirve el JPEG con
// content-type binary/octet-stream y pesa ~380 kB por imagen. Eso son un salto de
// redireccion extra y una descarga enorme en el camino critico de la pagina.
//
// Aqui se descarga una sola vez, se convierte a AVIF y se sirve desde el propio
// dominio: sin redireccion, con content-type correcto y con el tamano ajustado al
// ancho maximo real de la web.
//
// Solo se migran URLs de imagen (/api/search-image). Los enlaces de credito
// (?origin=logo) y los action de formulario (/api/form/) no son imagenes y se
// dejan intactos a proposito.
//
// Uso (desde la raiz del monorepo):
//   node scripts/localize-readdy-images.mjs           migra
//   node scripts/localize-readdy-images.mjs --dry     solo informa

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';

const dry = process.argv.includes('--dry');

// createRequire exige ruta absoluta: se resuelve desde la raiz del monorepo.
const require = createRequire(resolve('apps/bar-el-anzuelo/package.json'));
const sharp = require('sharp');

const IMG_URL = /https:\/\/readdy\.ai\/api\/search-image\?[^"')\s]+/g;

const walk = (dir, out = []) => {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
		const p = join(dir, entry.name);
		if (entry.isDirectory()) walk(p, out);
		else out.push(p);
	}
	return out;
};

const appsDir = 'apps';
const apps = readdirSync(appsDir).filter((d) => existsSync(join(appsDir, d, 'src')));

// Cache por URL para no descargar dos veces la misma imagen.
const cache = new Map();

const fetchImage = async (url) => {
	if (cache.has(url)) return cache.get(url);
	const res = await fetch(url, { redirect: 'follow' });
	if (!res.ok) throw new Error(`HTTP ${res.status}`);
	const buf = Buffer.from(await res.arrayBuffer());

	// AVIF no siempre esta compilado en sharp; en ese caso se cae a WebP, que
	// los scrapers y navegadores de cliente tambien aceptan sin problema.
	let out;
	let ext = 'avif';
	try {
		out = await sharp(buf).avif({ quality: 55, effort: 6 }).toBuffer();
	} catch {
		out = await sharp(buf).webp({ quality: 72 }).toBuffer();
		ext = 'webp';
	}
	const meta = await sharp(out).metadata();
	const entry = { buf: out, ext, width: meta.width, height: meta.height, bytesIn: buf.length };
	cache.set(url, entry);
	return entry;
};

const report = [];
let totalIn = 0;
let totalOut = 0;
const failures = [];

for (const app of apps.sort()) {
	const files = walk(join(appsDir, app, 'src')).filter((f) => /\.(astro|tsx?)$/.test(f));
	let appHits = 0;

	for (const file of files) {
		const src = readFileSync(file, 'utf8');
		// A una app que ya no tenga readdy no se le toca nada.
		if (!/readdy\.ai\/api\/search-image/.test(src)) continue;

		const urls = [...new Set(src.match(IMG_URL) || [])];
		const map = new Map();

		for (const url of urls) {
			try {
				const img = await fetchImage(url);
				const name = `readdy-${Math.abs([...url].reduce((a, c) => (a * 31 + c.charCodeAt(0)) | 0, 7))
					.toString(36)
					.slice(0, 10)}.${img.ext}`;
				map.set(url, `/img/${name}`);
				totalIn += img.bytesIn;
				totalOut += img.buf.length;
				appHits++;

				if (!dry) {
					const dest = join(appsDir, app, 'public', 'img');
					mkdirSync(dest, { recursive: true });
					const outPath = join(dest, name);
					if (!existsSync(outPath)) writeFileSync(outPath, img.buf);
				}
				report.push({
					app,
					file: file.replace(/\\/g, '/').replace(`${appsDir}/`, ''),
					url,
					local: `/img/${name}`,
					kbIn: (img.bytesIn / 1024).toFixed(0),
					kbOut: (img.buf.length / 1024).toFixed(0),
					dims: `${img.width}x${img.height}`,
				});
			} catch (err) {
				failures.push({ app, file, url, err: err.message });
			}
		}

		if (!dry && map.size) {
			let out = src;
			for (const [remote, local] of map) out = out.split(remote).join(local);
			writeFileSync(file, out);
		}
	}

	if (appHits) console.log(`  ${app.padEnd(24)} ${appHits} imagenes`);
}

console.log(`\n${dry ? 'A migrar' : 'Migradas'}: ${report.length} referencias de imagen.`);
for (const r of report) {
	console.log(`  ${r.app.padEnd(20)} ${r.dims.padEnd(11)} ${String(r.kbIn).padStart(4)} kB -> ${String(r.kbOut).padStart(3)} kB  ${r.local}`);
}
if (totalIn) {
	console.log(
		`\nPeso de imagenes: ${(totalIn / 1024 / 1024).toFixed(1)} MB -> ${(totalOut / 1024 / 1024).toFixed(1)} MB ` +
			`(-${Math.round((1 - totalOut / totalIn) * 100)}%), mas sin el salto de redireccion.`,
	);
}
if (failures.length) {
	console.log(`\n${failures.length} descarga(s) fallida(s):`);
	for (const f of failures.slice(0, 10)) console.log(`  ${f.app}: ${f.err} ${f.url.slice(0, 70)}`);
}
