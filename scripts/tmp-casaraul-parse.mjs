import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-casaraul.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== INFO base ===');
console.log(
	JSON.stringify(
		{
			name: info[11],
			street: info[2]?.[0],
			city: info[2]?.[1],
			region: info[2]?.[2],
			postal: info[2]?.[3],
			country: info[2]?.[4],
			geo: info[9],
			fid: info[10],
			cats: info[13],
			placeId: info[78],
			rating: info[4]?.[7],
			reviewCount: info[4]?.[8],
			desc: info[154],
			web: info[7],
			priceLevel: info[4]?.[2],
		},
		null,
		2,
	),
);

console.log('\n=== telefono ===');
console.log(JSON.stringify(info[178]));
console.log('\n=== plus code ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== atributos info[100] ===');
console.log(JSON.stringify(info[100], null, 1).slice(0, 14000));

console.log('\n=== horario info[203] ===');
try {
	for (const day of info[203][0]) console.log(day[0], JSON.stringify(day[3]));
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203]).slice(0, 1500));
}

console.log('\n=== reseñas destacadas info[31] ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '| texto:', r[1]);
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[31]).slice(0, 1500));
}

const CDN_URL = /https:\/\/lh\d\.googleusercontent\.com\/(?:gps-cs-s|grass-cs)\/[A-Za-z0-9_-]{40,}/g;
const urls = [...raw.matchAll(CDN_URL)].map((m) => m[0]);
console.log('\nfotos (urls):', urls.length, 'unicas:', new Set(urls).size);
