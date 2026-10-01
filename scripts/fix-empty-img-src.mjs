// Sustituye los <img src=""> por un marcador neutro.
//
// Un src vacio no es inofensivo: el navegador interpreta "" como la URL actual y
// vuelve a pedir la pagina completa como si fuera una imagen. En una galeria de
// cuatro huecos eso son cuatro descargas desperdiciadas y un icono de imagen
// rota en pantalla.
//
// Cuando la foto todavia no existe, lo correcto es un hueco con la proporcion ya
// fijada por el contenedor, no una etiqueta <img> apuntando a nada.
//
// Uso (desde la raiz del monorepo): node scripts/fix-empty-img-src.mjs [--dry]

import { readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const dry = process.argv.includes('--dry');

const walk = (dir, out = []) => {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
		const p = join(dir, entry.name);
		if (entry.isDirectory()) walk(p, out);
		else out.push(p);
	}
	return out;
};

// Admite la etiqueta partida en varias lineas, que es como las formatea el repo.
// La g es imprescindible: hay galerias con varios img vacios.
const EMPTY_IMG = /<img\s+([^>]*?)src\s*=\s*(["'])\s*\2\s*([^>]*?)\/>/gs;

const placeholder = (indent, dataAttrs = []) =>
	[
		`${indent}<div`,
		`${indent}\tclass="flex h-full w-full items-center justify-center bg-gradient-to-br from-blue-100 to-blue-50"`,
		...dataAttrs.map((a) => `${indent}\t${a}`),
		`${indent}\taria-hidden="true"`,
		`${indent}>`,
		`${indent}\t<i class="ri-restaurant-2-line text-4xl text-blue-300"></i>`,
		`${indent}</div>`,
	].join('\n');

const appsDir = 'apps';
const apps = readdirSync(appsDir);
let total = 0;
const skipped = [];

for (const app of apps) {
	const srcDir = join(appsDir, app, 'src');
	for (const file of walk(srcDir).filter((f) => f.endsWith('.astro'))) {
		const src = readFileSync(file, 'utf8');
		if (!src.includes('src=""') && !src.includes("src=''")) continue;

		let count = 0;
		const out = src.replace(EMPTY_IMG, (match, before, _q, after) => {
			// Si el src lo rellena un script, la etiqueta debe seguir siendo un <img>:
			// sustituirla por un div romperia el lightbox o la galeria dinamica.
			if (/data-lightbox/i.test(`${before} ${after}`)) {
				skipped.push(`${app}/${file.replace(/\\/g, '/')}`);
				return match;
			}
			// La sangria la da su propia linea de apertura.
			const lineStart = match.lastIndexOf('\n', match.indexOf('<img')) + 1;
			const indent = match.slice(lineStart, match.indexOf('<img'));
			count++;
			// Las clases del <img> (object-cover, h-full, transiciones) no aplican a un
			// marcador; solo se arrastran los data-*, que si tienen comportamiento.
			const dataAttrs = [...`${before} ${after}`.matchAll(/(data-[\w-]+="[^"]*")/g)].map((m) => m[1]);
			return placeholder(indent, dataAttrs);
		});

		if (count) {
			total += count;
			console.log(`  ${app}/${file.replace(/\\/g, '/')}: ${count} img con src vacio`);
			if (!dry) writeFileSync(file, out);
		}
	}
}

console.log(total ? `\n${dry ? 'Se detectaron' : 'Corregidos'} ${total} <img src="">.` : 'Ningun <img src=""> encontrado.');

if (skipped.length) {
	console.log('\nSe dejan como estan porque su src lo rellena JavaScript:');
	for (const s of [...new Set(skipped)]) console.log(`  ${s}`);
}
