import { readFileSync } from 'node:fs';

const raw = readFileSync(new URL('./tmp-pelusa.txt', import.meta.url), 'utf8');
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
			plusCode: info[183],
			phone: info[178],
		},
		null,
		2,
	),
);

console.log('\n=== info[4] ===');
console.log(JSON.stringify(info[4]));

console.log('\n=== info[100] atributos ===');
console.log(JSON.stringify(info[100], null, 1).slice(0, 7000));

console.log('\n=== horario ===');
const s = JSON.stringify(info);
const idx = s.indexOf('"Monday"');
console.log('monday idx', idx);
if (idx > -1) console.log(s.slice(idx - 300, idx + 1500));

info.forEach((v, i) => {
	const t = JSON.stringify(v);
	if (t && t.includes('"lunes"')) console.log('HORAS idx', i, t.slice(0, 2600));
});

console.log('\n=== reseñas info[31] ===');
try {
	for (const r of info[31][1]) {
		console.log('--- rating', r[9], '| texto:', String(r[1]).slice(0, 400));
	}
} catch (e) {
	console.log('err', e.message);
}

console.log('\n=== website/social ===');
for (const m of raw.matchAll(/https?:\\?\/\\?\/(www\.)?(instagram\.com|wa\.me|facebook\.com|tripadvisor)[^"\\] ]{0,80}/g)) {
	console.log(m[0]);
}

console.log('\n=== keys 150-260 ===');
for (let i = 150; i < Math.min(info.length, 260); i++) {
	const v = info[i];
	if (v === null || v === undefined) continue;
	const str = JSON.stringify(v);
	if (str.length > 500) continue;
	console.log(i, str);
}
