// Repara las fotos ya descargadas que tienen extension .jpg pero contents PNG.
//
// scripts/fetch-maps-photos.mjs nombra los ficheros .jpg, pero la CDN de Maps
// devuelve PNG para algunas fotos. Esta pasada convierte esas imagenes a JPEG
// real en su sitio, sin cambiar el nombre, para que el resto del repo vea
// siempre JPEG con la extension que declara.
//
// Uso:
//   node scripts/normalize-fotos.mjs            convierte
//   node scripts/normalize-fotos.mjs --dry      solo informa

import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const require = createRequire(resolve('apps/bar-el-anzuelo/package.json'));
const sharp = require('sharp');

const dry = process.argv.includes('--dry');

const isJpeg = (b) => b[0] === 0xff && b[1] === 0xd8 && b[2] === 0xff;
const isPng = (b) => b[0] === 0x89 && b[1] === 0x50 && b[2] === 0x4e && b[3] === 0x47;

/** Recorre la carpeta de fotos de cada app sin entrar en node_modules ni dist. */
function findMismatched(dir, out = []) {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
		const p = join(dir, entry.name);
		if (entry.isDirectory()) findMismatched(p, out);
		else if (/\.(jpg|jpeg)$/i.test(entry.name)) {
			const fd = readFileSync(p).subarray(0, 4);
			if (!isJpeg(fd) && isPng(fd)) out.push(p);
		}
	}
	return out;
}

const targets = findMismatched('apps');
console.log(`${targets.length} ficheros .jpg que en realidad son PNG.`);

let converted = 0;
let savedBytes = 0;
for (const file of targets) {
	const before = statSync(file).size;
	const buffer = await sharp(file).jpeg({ quality: 82, mozjpeg: true }).toBuffer();
	if (!dry) writeFileSync(file, buffer);
	const after = dry ? before : buffer.length;
	converted++;
	savedBytes += before - after;
	console.log(`  ${file}  ${(before / 1024).toFixed(0)} kB -> ${(after / 1024).toFixed(0)} kB`);
}

console.log(
	`\n${dry ? 'A convertir' : 'Convertidas'}: ${converted} fotos` +
		` (${(savedBytes / 1048576).toFixed(1)} MB ${dry ? 'de ahorro' : 'ahorrados'}).`,
);