import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-punto.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
console.log('top-level length', j.length);
const info = j[6];
console.log('info type', Array.isArray(info), 'len', info?.length);

const safe = (v, n = 2000) => {
	try {
		const s = JSON.stringify(v);
		return s && s.length > n ? `${s.slice(0, n)}…` : s;
	} catch {
		return String(v);
	}
};

if (info) {
	console.log('name info[11]:', info[11]);
	console.log('addr info[2]:', safe(info[2]));
	console.log('geo info[9]:', safe(info[9]));
	console.log('fid info[10]:', safe(info[10]));
	console.log('cats info[13]:', safe(info[13]));
	console.log('rating info[4]:', safe(info[4]));
	console.log('placeId info[78]:', safe(info[78]));
	console.log('desc info[154]:', safe(info[154]));
	console.log('phone info[178]:', safe(info[178]));
	console.log('plus info[183]:', safe(info[183]));
	console.log('hours info[203]:', safe(info[203], 4000));
	console.log('attributes info[100]:', safe(info[100], 6000));
	console.log('reviews info[31]:', safe(info[31], 6000));
}
console.log('photos present?', /googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(raw));
console.log('jpg?', /\/photos\//.test(raw));
