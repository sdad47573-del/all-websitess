// Volcado temporal de una ficha de Google Maps.
import { writeFileSync } from 'node:fs';

const FID = process.argv[2];
if (!FID) {
	console.log('falta el feature id');
	process.exit(1);
}

const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9',
	cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
};

const detailPb = (fid) =>
	`!1m14!1s${fid}!3m9!1m3!1d5000!2d0!3d0!2m0!3m2!1i1024!2i768!4f13.1!4m2!3d0!4d0!13m1!2m0!15m47!1m8!4e2!18m5!3b0!6b0!14b1!17b1!20b1!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i771`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let bestText = '';
for (let i = 0; i < 10; i++) {
	const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(FID))}`;
	let text = '';
	try {
		text = await (await fetch(url, { headers: HEADERS })).text();
	} catch (e) {
		console.log('err', i, e.message);
		await sleep(1500 + i * 1000);
		continue;
	}
	const full = /lunes/.test(text) && /reseñas/.test(text);
	const ok = text.startsWith(")]}'");
	console.log('attempt', i, 'len', text.length, 'ok', ok, 'full', full);
	if (ok && full && text.length > bestText.length) bestText = text;
	if (full && text.length > 25000) break;
	await sleep(1500 + i * 900);
}

if (!bestText) {
	console.log('no valid response');
	process.exit(1);
}

writeFileSync('scripts/tmp-luisa.txt', bestText);

const raw = bestText;
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];

console.log('\n=== INFO base ===');
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
			phone: info[178],
			web: info[7],
		},
		null,
		2,
	),
);

console.log('\n=== plus code ===');
console.log(JSON.stringify(info[183]));

console.log('\n=== atributos ===');
console.log(JSON.stringify(info[100])?.slice(0, 9000));

console.log('\n=== horario ===');
try {
	for (const day of info[203][0]) console.log(day[0], JSON.stringify(day[3]));
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203])?.slice(0, 1200));
}

console.log('\n=== reseñas destacadas ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '|', JSON.stringify(r[1])?.slice(0, 400));
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[31])?.slice(0, 800));
}

console.log('\n=== fotos ===');
const cdn = [...new Set(raw.match(/https:\/\/lh\d\.googleusercontent\.com\/[A-Za-z0-9_\-\/]+/g) ?? [])];
console.log('urls cdn:', cdn.length);

console.log('\n=== cadenas ===');
const strings = [...new Set(raw.match(/"[^"]{20,90}"/g) ?? [])].sort();
console.log(strings.filter((s) => /[a-záéíóúñ]{4}/i.test(s) && !s.includes('/geo/type')).join('\n'));
