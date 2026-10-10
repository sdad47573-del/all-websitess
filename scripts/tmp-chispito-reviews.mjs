import { readFileSync } from 'node:fs';

const text = readFileSync('scripts/tmp-chispito.txt', 'utf8').replace(/^\)\]\}'\n/, '');
const data = JSON.parse(text);
const p = data[6];

const reviews = p[31]?.[1] ?? [];
console.log('reseñas destacadas:', reviews.length);
for (const [i, r] of reviews.entries()) {
	const autor = r?.[0]?.[1] ?? '(sin nombre)';
	const texto = r?.[1] ?? '';
	const nota = r?.[4] ?? null;
	const fecha = r?.[2] ?? null;
	const meta = r?.[3] ?? null;
	console.log(`\n[${i}] autor=${autor} nota=${JSON.stringify(nota)} fecha=${JSON.stringify(fecha)}`);
	console.log('    meta:', JSON.stringify(meta).slice(0, 200));
	console.log('    texto:', JSON.stringify(texto).slice(0, 400));
}

console.log('\n=== otros campos ===');
for (const [i, v] of p.entries()) {
	if (v === null || (Array.isArray(v) && v.length === 0)) continue;
	const s = JSON.stringify(v);
	if (/precio|price|€|menu|carta|reserva|terraza|domicilio|llevar|wifi/i.test(s) && s.length < 700)
		console.log(`[${i}]`, s.slice(0, 700), '\n');
}
