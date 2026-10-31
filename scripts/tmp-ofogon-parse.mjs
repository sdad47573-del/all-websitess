import { readFileSync, writeFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-ofogon.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

const summary = {
	name: info[11],
	address: info[2],
	geo: info[9],
	fid: info[10],
	categories: info[13],
	placeId: info[78],
	rating: info[4],
	desc: info[154],
	phone: info[178],
	plusCode: info[183],
	website: info[7],
	attributes: info[100],
	hours: info[203],
	reviews: info[31],
	menu: info[164],
};

writeFileSync('scripts/tmp-ofogon.json', JSON.stringify(summary, null, 2));

console.log('NAME:', info[11]);
console.log('ADDRESS:', JSON.stringify(info[2]));
console.log('GEO:', JSON.stringify(info[9]));
console.log('FID:', info[10]);
console.log('CATS:', JSON.stringify(info[13]));
console.log('PLACEID:', info[78]);
console.log('RATING:', JSON.stringify(info[4]?.slice?.(0, 12) ?? info[4]));
console.log('DESC:', JSON.stringify(info[154]));
console.log('PHONE:', JSON.stringify(info[178]));
console.log('WEB:', JSON.stringify(info[7]));
console.log('PLUS:', JSON.stringify(info[183]));

console.log('\nHOURS:');
try {
	for (const day of info[203][0]) {
		console.log(day[0], JSON.stringify(day[3]), day[6] ? JSON.stringify(day[6]) : '');
	}
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203]).slice(0, 2000));
}

console.log('\nREVIEWS:');
try {
	for (const r of info[31][1]) {
		console.log('rating', r[9], '|', r[1]);
	}
} catch (e) {
	console.log('err', e.message);
}

console.log('\nATTRIBUTES:');
console.log(JSON.stringify(info[100], null, 1).slice(0, 6000));

console.log('\nPHOTOS IN RESPONSE:', /googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));
