import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-moli.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== INFO base ===');
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
			channel: info[89],
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

console.log('\n=== direccion/plus code info[183] ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== info[4] reseñas meta ===');
console.log(JSON.stringify(info[4]));

console.log('\n=== info[100] atributos (grupos) ===');
try {
	for (const grupo of info[100]?.[1] ?? []) {
		console.log('--- grupo:', grupo[0], '|', grupo[1]);
		for (const at of grupo[2] ?? []) console.log('    *', at[1], '| valor:', JSON.stringify(at[2]?.[0]));
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[100]).slice(0, 1200));
}

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

console.log('\n=== distintivos ===');
for (const match of raw.matchAll(/\["([^"]{2,40})","SearchResult\.TYPE_[A-Z_]+"/g)) {
	console.log('tipo:', match[1], '|', match[0]);
}

console.log('\n=== info[34] / [37] tipo de cocina ===');
console.log('info[34]:', JSON.stringify(info[34])?.slice(0, 400));
console.log('info[37]:', JSON.stringify(info[37])?.slice(0, 400));

console.log('\n=== photos present? ===');
console.log(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));
