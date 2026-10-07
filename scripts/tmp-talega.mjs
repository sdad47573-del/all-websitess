import { writeFileSync } from 'node:fs';

const FID = '0xd6dd77514b95b1f:0xe240e866e39c3852';

const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9',
	cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
};

const detailPb = (fid) =>
	`!1m14!1s${fid}!3m9!1m3!1d5000!2d0!3d0!2m0!3m2!1i1024!2i768!4f13.1!4m2!3d0!4d0!13m1!2m0!15m47!1m8!4e2!18m5!3b0!6b0!14b1!17b1!20b1!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i771`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let best = '';
for (let i = 0; i < 8; i++) {
	const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(FID))}`;
	const res = await fetch(url, { headers: HEADERS });
	const text = await res.text();
	if (!text.startsWith(")]}'")) {
		console.log(`intento ${i + 1}: respuesta no PB (len=${text.length}), reintento`);
		await sleep(1500 + i * 900);
		continue;
	}
	const days = (text.match(/"lunes"|"martes"|"miércoles"|"jueves"|"viernes"|"sábado"|"domingo"/gi) || []).length;
	console.log(`intento ${i + 1}: len=${text.length} days=${days}`);
	if (text.length > best.length) best = text;
	if (days >= 5 && text.length > 20000) break;
	await sleep(800 + i * 700);
}

writeFileSync('scripts/tmp-talega.txt', best, 'utf8');
console.log(`\nGuardado scripts/tmp-talega.txt (${best.length} bytes)`);
