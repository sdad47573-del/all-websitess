import { readFileSync } from 'node:fs';

const raw = readFileSync(new URL('./.tmp-kebab.txt', import.meta.url), 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== base ===');
console.log(
	JSON.stringify(
		{
			name: info[11],
			addr: info[2],
			cats: info[13],
			rating: info[4]?.[7],
			reviews: info[4]?.[8],
			geo: info[9],
			fid: info[10],
			placeId: info[78],
			desc: info[154],
			plusCode: info[183],
			phone: info[178],
			website: info[7],
		},
		null,
		2,
	),
);

console.log('\n=== horario ===');
info.forEach((v, i) => {
	const t = JSON.stringify(v);
	if (t && (t.includes('"lunes"') || t.includes('"Monday"'))) console.log('idx', i, t.slice(0, 2800));
});

console.log('\n=== atributos / accesibilidad ===');
const s = JSON.stringify(info);
const ai = s.indexOf('accessible');
console.log(s.slice(Math.max(0, ai - 1400), ai + 2600));

console.log('\n=== reseñas ===');
try {
	for (const r of info[31]?.[1] || []) console.log('--- rating', r[9], '|', String(r[1]).slice(0, 400));
} catch (e) {
	console.log('err', e.message);
}

console.log('\n=== web y redes ===');
for (const m of raw.matchAll(/https?:\\?\/\\?\/(www\.)?(instagram\.com|wa\.me|facebook\.com|tripadvisor|thefork|glovo|just-eat|ubereats)[^"\\] ]{0,90}/g)) {
	console.log(m[0]);
}

console.log('\n=== keys cortas 150-280 ===');
for (let i = 150; i < Math.min(info.length, 280); i++) {
	const v = info[i];
	if (v === null || v === undefined) continue;
	const str = JSON.stringify(v);
	if (str.length > 450) continue;
	console.log(i, str);
}
