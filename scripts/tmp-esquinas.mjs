import { existsSync, readFileSync, writeFileSync } from 'node:fs';

const FID = '0xd6dd77511757b2f:0x80611ae924e97a98';

const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9',
	cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
};

const detailPb = (fid) =>
	`!1m14!1s${fid}!3m9!1m3!1d5000!2d0!3d0!2m0!3m2!1i1024!2i768!4f13.1!4m2!3d0!4d0!13m1!2m0!15m47!1m8!4e2!18m5!3b0!6b0!14b1!17b1!20b1!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i771`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// Puntua la respuesta: interesan fotos y el recuento de reseñas, no solo el tamaño.
function score(text) {
	let s = text.length;
	if (/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(text)) s += 200000;
	if (/"\d+ reseñas"/.test(text)) s += 50000;
	return s;
}

let bestText = existsSync('scripts/tmp-esquinas.txt')
	? readFileSync('scripts/tmp-esquinas.txt', 'utf8')
	: '';
let bestScore = bestText ? score(bestText) : 0;

for (let i = 0; i < 15; i++) {
	const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(FID))}`;
	let text = '';
	try {
		text = await (await fetch(url, { headers: HEADERS })).text();
	} catch (e) {
		console.log('err', i, e.message);
		await sleep(1500 + i * 1000);
		continue;
	}
	if (text.startsWith(")]}'")) {
		const s = score(text);
		const hasPhotos = /googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(text);
		const hasCount = /"\d+ reseñas"/.test(text);
		console.log('attempt', i, 'len', text.length, 'photos', hasPhotos, 'count', hasCount, 'score', s);
		if (s > bestScore) {
			bestScore = s;
			bestText = text;
		}
		if (hasPhotos && hasCount) break;
	} else {
		console.log('attempt', i, 'len', text.length, '(not payload)');
	}
	await sleep(1200 + i * 700);
}

if (bestText) {
	writeFileSync('scripts/tmp-esquinas.txt', bestText);
	console.log('SAVED score', bestScore, 'bytes', bestText.length);
} else {
	console.log('no valid response');
	process.exit(1);
}
