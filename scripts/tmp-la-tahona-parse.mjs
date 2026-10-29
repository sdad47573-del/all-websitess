import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-la-tahona.txt', 'utf8');
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
			fullAddress: info[147] ?? info[164],
		},
		null,
		2,
	),
);

console.log('\n=== telefono info[178] ===');
console.log(JSON.stringify(info[178]));
console.log('\n=== info[183] plus code ===');
console.log(JSON.stringify(info[183]));
console.log('\n=== info[4] ===');
console.log(JSON.stringify(info[4]));

console.log('\n=== info[100] atributos ===');
console.log(JSON.stringify(info[100], null, 1).slice(0, 6000));

console.log('\n=== horario (busca arrays tipo dia/hora) ===');
const s = JSON.stringify(info);
// localiza el bloque de horario por el patron de dias en ingles/espanol
const idx = s.indexOf('"Monday"');
console.log('Monday idx', idx);
if (idx > -1) console.log(s.slice(idx - 200, idx + 700));

console.log('\n=== reseñas info[31] ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '| texto:', String(r[1]).slice(0, 300));
} catch (e) {
	console.log('err', e.message);
}

console.log('\n=== website/social candidates ===');
for (const m of raw.matchAll(/https?:\\?\/\\?\/(www\.)?(instagram\.com|wa\.me|facebook\.com|uber eats)[^"\\] ]{0,80}/g)) {
	console.log(m[0]);
}

console.log('\n=== raw keys around 150-260 ===');
for (let i = 150; i < Math.min(info.length, 260); i++) {
	const v = info[i];
	if (v === null || v === undefined) continue;
	const str = JSON.stringify(v);
	if (str.length > 400) continue;
	console.log(i, str);
}
