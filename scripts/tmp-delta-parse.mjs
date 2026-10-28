import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-delta.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== INFO base ===');
console.log(
	JSON.stringify(
		{
			name: info[11],
			street: info[2]?.[0],
			city: info[2]?.[1],
			pc: info[2]?.[2],
			geo: info[9],
			fid: info[10],
			cats: info[13],
			placeId: info[78],
			rating: info[4]?.[7],
			reviewCount: info[4]?.[8],
			desc: info[154],
		},
		null,
		2,
	),
);

console.log('\n=== telefono info[178] ===');
console.log(JSON.stringify(info[178]));

console.log('\n=== info[4] reseñas meta ===');
console.log(JSON.stringify(info[4]));

console.log('\n=== info[100] atributos ===');
console.log(JSON.stringify(info[100], null, 1).slice(0, 9000));

console.log('\n=== info[203] horario ===');
try {
	for (const day of info[203][0]) {
		console.log(day[0], JSON.stringify(day[3]), day[6] ? JSON.stringify(day[6]) : '');
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203]).slice(0, 1500));
}

console.log('\n=== info[31] reseñas destacadas ===');
try {
	for (const r of info[31][1]) {
		console.log('--- rating', r[9], '| texto:', r[1]);
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[31]).slice(0, 1500));
}

console.log('\n=== photos present? ===');
console.log(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));

console.log('\n=== streetview ref ===');
console.log((raw.match(/IMAGE_ALLEYCAT\|[A-Za-z0-9_-]+/) || [])[0] || 'ninguna');

for (const k of ['29010', '29011', 'silla', 'Acceso', 'Aparcamiento', 'Terraza', 'Para llevar', 'Tarjeta', 'Efectivo', 'Wi-Fi', 'Accesible']) {
	if (raw.includes(k)) console.log('hit:', k);
}
