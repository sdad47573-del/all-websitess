import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-orkidea.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log(
	JSON.stringify(
		{
			name: info[11],
			address: info[2],
			geo: info[9],
			fid: info[10],
			cats: info[13],
			placeId: info[78],
			rating: info[4]?.[7],
			reviewCount: info[4]?.[8],
			price: info[4]?.[2],
			desc: info[154],
		},
		null,
		2,
	),
);

console.log('\n=== phone info[178] ===');
console.log(JSON.stringify(info[178]));

console.log('\n=== plus code info[183] ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== attributes info[100] ===');
for (const g of info[100]?.[1] || []) {
	console.log('##', g[1]);
	for (const a of g[2] || []) {
		const val = a[2]?.[0];
		console.log('  -', a[1], '=>', val === 1 ? 'SI' : val === 0 ? 'NO' : '?');
	}
}

console.log('\n=== hours info[203] ===');
try {
	for (const day of info[203][0]) {
		console.log(day[0], JSON.stringify(day[3]));
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203]).slice(0, 2000));
}

console.log('\n=== reviews info[31] ===');
try {
	for (const r of info[31][1]) {
		console.log('--- rating', r[9], '| texto:', r[1]);
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[31]).slice(0, 2500));
}

console.log('\n=== web info[7] ===');
console.log(JSON.stringify(info[7]));

console.log('\n=== menu info[190]/[204] ===');
console.log(JSON.stringify(info[190]));
console.log(JSON.stringify(info[204]).slice(0, 800));

console.log('\n=== badges ===');
const set = new Set();
const re = /\["([^"]{2,45})","SearchResult\.TYPE_[A-Z_]+"/g;
let m;
while ((m = re.exec(raw))) set.add(m[1]);
console.log('badges:', [...set].join(' | ') || '(ninguno)');

console.log('\n=== photos present? ===');
console.log(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));
