// Higiene SEO: títulos y descripciones duplicados o ausentes en el build
import fs from 'node:fs';
import path from 'node:path';

const pages = [];
function walk(dir) {
	for (const f of fs.readdirSync(dir)) {
		const p = path.join(dir, f);
		if (fs.statSync(p).isDirectory()) walk(p);
		else if (f === 'index.html') pages.push(p);
	}
}
walk('dist');

const titles = new Map();
const descs = new Map();
let missingDesc = 0;

for (const p of pages) {
	const html = fs.readFileSync(p, 'utf8');
	const title = html.match(/<title>([^<]*)<\/title>/)?.[1] ?? '(SIN TÍTULO)';
	const desc = html.match(/name="description" content="([^"]*)"/)?.[1];
	if (!desc) missingDesc++;

	const url = '/' + p.replace(/\\/g, '/').replace(/^dist\//, '').replace(/index\.html$/, '');
	if (!titles.has(title)) titles.set(title, []);
	titles.get(title).push(url);
	if (!desc) continue;
	if (!descs.has(desc)) descs.set(desc, []);
	descs.get(desc).push(url);
}

console.log('Páginas:', pages.length);
console.log('\n=== TÍTULOS DUPLICADOS ===');
let dupTitles = 0;
for (const [t, urls] of titles) {
	if (urls.length > 1) {
		dupTitles++;
		console.log(`  "${t.slice(0, 70)}..." x${urls.length}`);
		for (const u of urls) console.log(`    - ${u}`);
	}
}
console.log(dupTitles === 0 ? '  Ninguno ✅' : `  ${dupTitles} grupos duplicados`);

console.log('\n=== DESCRIPCIONES DUPLICADAS ===');
let dupDescs = 0;
for (const [d, urls] of descs) {
	if (urls.length > 1) {
		dupDescs++;
		console.log(`  "${d.slice(0, 70)}..." x${urls.length}`);
		for (const u of urls.slice(0, 5)) console.log(`    - ${u}`);
	}
}
console.log(dupDescs === 0 ? '  Ninguna ✅' : `  ${dupDescs} grupos duplicados`);
console.log(`\nPáginas sin meta description: ${missingDesc}`);

console.log('\n=== LONGITUD DE TÍTULOS (top 5 más largos / más cortos) ===');
const len = [...titles].map(([t, urls]) => ({ t, n: urls[0], len: t.length })).sort((a, b) => b.len - a.len);
for (const x of len.slice(0, 5)) console.log(`  ${x.len} chars  ${x.t.slice(0, 60)}...  (${x.n})`);
console.log('  ...');
for (const x of len.slice(-3)) console.log(`  ${x.len} chars  ${x.t.slice(0, 60)}  (${x.n})`);