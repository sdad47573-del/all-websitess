import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-bo.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

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

console.log('\n=== plus code info[183] ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== info[100] atributos ===');
console.log(JSON.stringify(info[100], null, 1).slice(0, 12000));

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

console.log('\n=== distintivo-like ===');
const set = new Set();
const re = /\["([^"]{2,45})","SearchResult\.TYPE_[A-Z_]+"/g;
let m;
while ((m = re.exec(raw))) set.add(m[1]);
console.log('badges:', [...set].join(' | ') || '(ninguno)');
