// Rasteriza public/og.svg a public/og.png en todas las apps.
//
// Los scrapers de Facebook, WhatsApp, LinkedIn y X no interpretan SVG, así que una
// web que publica og.svg como og:image comparte el enlace sin tarjeta. El SVG se
// conserva intacto como fuente editable; el PNG es lo que va en los metadatos.
//
// Uso (desde la raiz del monorepo):
//   node scripts/og-svg-to-png.mjs          convierte las que faltan
//   node scripts/og-svg-to-png.mjs --force  regenera todas
//   node scripts/og-svg-to-png.mjs --refs   además repointa og:image/twitter:image
//                                           de og.svg a og.png en el código
//
// Es idempotente: sin --force no toca apps que ya tengan og.png.

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { readdir } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createRequire } from 'node:module';

const force = process.argv.includes('--force');
const withRefs = process.argv.includes('--refs');

// sharp solo es dependencia de algunas apps, asi que lo resolvemos desde una que lo
// tenga declarada. Rasterizar un SVG no necesita nada mas del arbol de cada web.
const require = createRequire(resolve('apps/bar-el-anzuelo/package.json'));
let sharp;
try {
	sharp = require('sharp');
} catch {
	console.error(
		'No se encuentra sharp. Instala sus dependencias con `pnpm install` y reintenta.',
	);
	process.exit(1);
}

const OG_WIDTH = 1200;
const OG_HEIGHT = 630;

// Solo se repointan las referencias de apps donde este script ha dejado un PNG
// real: si la web no tiene og.svg, cambiar su URL por og.png la dejaria peor.
const REF_PATTERN = /og\.svg/g;
const REF_CONTEXT = /og:image|twitter:image|\bimage:|ogImage/;

const apps = await readdir('apps');
const converted = [];
const skipped = [];
const noSource = [];

for (const app of apps.sort()) {
	const appDir = join('apps', app);
	if (!existsSync(join(appDir, 'astro.config.mjs'))) continue;

	const svgPath = join(appDir, 'public', 'og.svg');
	const pngPath = join(appDir, 'public', 'og.png');

	if (!existsSync(svgPath)) {
		noSource.push(app);
		continue;
	}
	if (existsSync(pngPath) && !force) {
		skipped.push(app);
		continue;
	}

	const png = await sharp(readFileSync(svgPath), { density: 96 })
		.resize(OG_WIDTH, OG_HEIGHT)
		.png({ compressionLevel: 9 })
		.toBuffer();
	writeFileSync(pngPath, png);
	converted.push({ app, kb: png.length / 1024 });
}

let refFiles = 0;
let refLines = 0;
if (withRefs) {
	for (const { app } of [...converted, ...skipped.map((app) => ({ app }))]) {
		// Sin PNG no se toca la referencia: quedaria apuntando a un 404.
		if (!existsSync(join('apps', app, 'public', 'og.png'))) continue;

		const srcDir = join('apps', app, 'src');
		if (!existsSync(srcDir)) continue;

		const stack = [srcDir];
		while (stack.length) {
			const dir = stack.pop();
			for (const entry of await readdir(dir, { withFileTypes: true })) {
				const p = join(dir, entry.name);
				if (entry.isDirectory()) stack.push(p);
				if (!/\.(astro|tsx?|jsx?)$/.test(entry.name)) continue;

				const original = readFileSync(p, 'utf8');
				const lines = original.split('\n');
				let touched = false;
				for (let i = 0; i < lines.length; i++) {
					if (!lines[i].includes('og.svg')) continue;
					if (!REF_CONTEXT.test(lines[i])) continue;
					lines[i] = lines[i].replace(REF_PATTERN, 'og.png');
					touched = true;
					refLines++;
				}
				if (touched) {
					writeFileSync(p, lines.join('\n'));
					refFiles++;
				}
			}
		}
	}
}

const totalKb = converted.reduce((s, c) => s + c.kb, 0);
console.log(`SVG -> PNG: ${converted.length} convertidas, ${skipped.length} ya existentes.`);
if (converted.length) {
	console.log(`  ${totalKb.toFixed(0)} kB de PNG generados en total.`);
	for (const c of converted) console.log(`  ${c.app.padEnd(34)} ${c.kb.toFixed(1)} kB`);
}
if (withRefs) console.log(`Referencias repuntadas: ${refLines} lineas en ${refFiles} ficheros.`);

// Apps sin og.svg: su tarjeta depende de otra imagen, no de este script.
const realNoSource = noSource.filter((app) => existsSync(join('apps', app, 'src')));
if (realNoSource.length) {
	console.log(`\nSin og.svg (no affected por este script): ${realNoSource.length} apps.`);
}
