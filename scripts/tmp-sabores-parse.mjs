import { readFileSync, writeFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-sabores.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

const pick = (i) => JSON.stringify(info[i]);

console.log('NAME:', pick(11));
console.log('ADDRESS:', pick(2));
console.log('GEO:', pick(9));
console.log('FID:', pick(10));
console.log('CATS:', pick(13));
console.log('PLACEID:', pick(78));
console.log('RATING:', pick(4));
console.log('PHONE:', pick(178));
console.log('WEB:', pick(7));
console.log('PLUS:', pick(183));
console.log('DESC:', pick(154));

console.log('\nHOURS RAW:', JSON.stringify(info[203]).slice(0, 3000));

console.log('\nATTRIBUTES:', JSON.stringify(info[100]).slice(0, 4000));

console.log('\nREVIEWS:');
try {
	for (const r of info[31][1]) console.log('rating', r[9], '|', r[1]);
} catch (e) {
	console.log('err', e.message);
}

console.log('\nMENU:', JSON.stringify(info[164]).slice(0, 2000));

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
	website: info[7],
	plusCode: info[183],
	attributes: info[100],
	hours: info[203],
	reviews: info[31]?.[1]?.map((r) => ({ rating: r[9], text: r[1] })),
	menu: info[164],
};
writeFileSync('scripts/tmp-sabores.json', JSON.stringify(summary, null, 2));
