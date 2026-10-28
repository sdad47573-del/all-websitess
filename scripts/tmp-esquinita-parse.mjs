import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-esquinita.txt', 'utf8');
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
			rating: info[4]?.[7],
			reviewCount: info[4]?.[8],
			desc: info[154],
			address: info[18],
		},
		null,
		2,
	),
);

console.log('\n=== telefono info[178] ===');
console.log(JSON.stringify(info[178]));

console.log('\n=== plus code info[183] ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== info[4] reseñas meta ===');
console.log(JSON.stringify(info[4]));

console.log('\n=== atributos ===');
for (const g of info[100]?.[1] || []) {
	console.log('[' + g[1] + ']');
	for (const a of g[2] || []) console.log('  ', a[1], '=>', a[2]?.[0]?.[0], JSON.stringify(a[2]?.[1]?.[0]?.[1]));
}

console.log('\n=== horario ===');
try {
	for (const d of info[203][0]) {
		console.log(
			d[0],
			d[2]?.join('-'),
			JSON.stringify(d[3]),
			'flag=' + d[4],
			'holiday=' + JSON.stringify(d[6] || null),
		);
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203]).slice(0, 1500));
}

console.log('\n=== reseñas destacadas ===');
try {
	for (const r of info[31][1]) {
		console.log('--- rating', r[9], '| texto:', r[1]);
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[31]).slice(0, 1500));
}

console.log('\n=== photos present? ===');
console.log(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));

console.log('\n=== extras ===');
for (const k of [46, 50, 52, 64, 80, 101, 133, 153, 155, 168, 175, 176, 177, 179, 180, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 204, 205, 206]) {
	const v = info[k];
	if (v != null) console.log(k, JSON.stringify(v).slice(0, 300));
}
