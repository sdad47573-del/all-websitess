import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-talega.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== INFO base ===');
console.log(JSON.stringify({
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
	badge: info[88]?.[0],
	desc: info[154],
}, null, 2));

console.log('\n=== telefono info[178] ===');
console.log(JSON.stringify(info[178]));

console.log('\n=== plus code info[183] ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== info[4] ===');
console.log(JSON.stringify(info[4]));

console.log('\n=== info[88] ===');
console.log(JSON.stringify(info[88]));

console.log('\n=== info[100] ===');
try {
	for (const g of info[100][1]) {
		console.log(' GRUPO:', g[0], '/', g[1]);
		for (const it of g[2]) {
			const v = it[3] === 1 ? 'NO' : it[2]?.[0] === 1 ? 'SI' : it[2]?.[0] === 0 ? 'NO' : JSON.stringify(it[2]?.[0]);
			console.log('   -', it[1], '=>', v);
		}
	}
} catch (e) { console.log('err', e.message, JSON.stringify(info[100]).slice(0, 400)); }

console.log('\n=== info[203] horario ===');
try {
	for (const day of info[203][0]) {
		console.log(day[0], JSON.stringify(day[3]), day[6] ? 'HOLIDAY:' + JSON.stringify(day[6][0]) : '');
	}
} catch (e) { console.log('err', e.message, '| raw:', JSON.stringify(info[203]).slice(0, 300)); }

console.log('\n=== info[31] reseñas destacadas ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '| texto:', r[1]);
} catch (e) { console.log('err', e.message); }
