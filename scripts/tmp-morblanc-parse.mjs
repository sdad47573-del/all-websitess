import { readFileSync } from 'node:fs';

const raw = readFileSync('scripts/tmp-morblanc.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('=== INFO base ===');
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
			desc: info[154],
		},
		null,
		2,
	),
);

console.log('\n=== telefono / web ===');
console.log(JSON.stringify(info[178])?.slice(0, 400));
console.log(JSON.stringify(info[7])?.slice(0, 400));

console.log('\n=== atributos ===');
const out = [];
const walk = (n, d = 0) => {
	if (n == null || d > 9) return;
	if (typeof n === 'string') {
		if (n.length > 2 && n.length < 70 && /[a-záéíóúñ]/i.test(n) && !/https?:|\\u|2ahUKE|ChIJ/.test(n))
			out.push(n);
		return;
	}
	if (Array.isArray(n)) for (const x of n) walk(x, d + 1);
};
walk(info[100]);
console.log([...new Set(out)].join('\n'));

console.log('\n=== horario ===');
try {
	for (const day of info[203][0]) console.log(day[0], JSON.stringify(day[3]));
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203]).slice(0, 1500));
}

console.log('\n=== reseñas destacadas ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '| texto:', r[1]);
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[31]).slice(0, 1500));
}

console.log('\n=== fotos ===');
console.log((raw.match(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//g) || []).length);

console.log('\n=== webs / carta ===');
console.log(raw.match(/https?:\\?\/\\?\/[^"\\ ]{4,110}/gi)?.slice(0, 10));
