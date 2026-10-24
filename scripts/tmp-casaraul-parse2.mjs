import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-casaraul.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('info length', info.length);

for (const idx of [25, 32, 34, 37, 51, 52, 60, 67, 73, 75, 88, 89, 117, 133, 153, 155, 156, 159, 171, 181, 191, 201, 202, 204, 206, 208]) {
	const v = info[idx];
	const s = JSON.stringify(v);
	if (!s || s === 'null') continue;
	console.log(`\n--- info[${idx}] (${s.length} chars) ---`);
	console.log(s.slice(0, 700));
}

console.log('\n=== menciones ===');
for (const term of ['instagram', 'facebook', 'menu', 'carta', 'terraza', 'wifi', 'reserva', 'trastero', 'grupo', 'domicilio', 'llevar', 'pago', 'parking', 'jardin', 'cochinillo']) {
	const re = new RegExp(`.{0,70}${term}.{0,90}`, 'gi');
	const found = [...raw.matchAll(re)].slice(0, 3).map((m) => m[0]);
	if (found.length) console.log(`[${term}]`, JSON.stringify(found));
}
