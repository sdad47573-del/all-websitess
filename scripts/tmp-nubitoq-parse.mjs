import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-nubitoq.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== INFO ===');
console.log(
	JSON.stringify(
		{
			name: info[11],
			street: info[2]?.[0],
			city: info[2]?.[1],
			geo: info[9],
			fid: info[10],
			cats: info[13],
			placeId: info[78],
			rating: info[4]?.[7],
			reviewCount: info[4]?.[8],
			desc: info[154],
			website: info[7]?.[0],
			priceLevel: info[4]?.[2],
			badge: info[88]?.[0],
		},
		null,
		2,
	),
);
console.log('\n=== telefono ===');
console.log(JSON.stringify(info[178]));
console.log('\n=== atributos ===');
console.log(JSON.stringify(info[100]).slice(0, 6000));
console.log('\n=== horario ===');
try {
	for (const day of info[203][0]) console.log(day[0], JSON.stringify(day[3]));
} catch (e) {
	console.log('sin horario:', e.message);
}
console.log('\n=== reseñas ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '|', r[0]?.[0], '|', r[1]);
} catch (e) {
	console.log('sin reseñas:', e.message);
}
console.log('\n=== fotos? ===', /googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));
