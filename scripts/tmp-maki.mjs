import { writeFileSync } from 'node:fs';

const FID = '0xd19494b5382b5a9:0x364a4d7232e23ae7';
const OUT = 'scripts/tmp-maki.txt';

const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9,pt;q=0.8,en;q=0.7',
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
	let hasReviews = false;
	try {
		hasReviews = Boolean(JSON.parse(text.slice(text.indexOf('[')))[6][31]);
	} catch {
		hasReviews = false;
	}
	const full = /lunes|Monday/.test(text) && /googleusercontent/.test(text);
	console.log('attempt', i, 'len', text.length, 'full', full, 'reviews', hasReviews);
	if (text.startsWith(")]}'") && (hasReviews || text.length > bestText.length)) bestText = text;
	if (hasReviews) break;
	await sleep(1200 + i * 700);
}

if (!bestText) {
	console.log('no valid response');
	process.exit(1);
}
writeFileSync(OUT, bestText);

const info = JSON.parse(bestText.slice(bestText.indexOf('[')))[6];
const cid = BigInt(FID.split(':')[1]).toString();

console.log('\n=== base ===');
console.log(
	JSON.stringify(
		{
			name: info[11],
			street: info[2]?.[0],
			city: info[2]?.[1],
			country: info[2]?.[2],
			geo: [info[9]?.[2], info[9]?.[3]],
			cats: info[13],
			placeId: info[78],
			rating: info[4]?.[7],
			reviewsCount: info[4]?.[8],
			website: info[7]?.[0],
			price: info[4]?.[2],
			desc: info[154]?.[0]?.[0],
			cid,
			more: info[89],
		},
		null,
		2,
	),
);

console.log('\n=== teléfono ===');
console.log(JSON.stringify(info[178]?.[0]?.[0] ?? info[178]));

console.log('\n=== horario ===');
try {
	for (const day of info[203][0]) console.log(day[0], JSON.stringify(day[3]), day[6] ? JSON.stringify(day[6]) : '');
} catch (e) {
	console.log('err', e.message, JSON.stringify(info[203])?.slice(0, 1500));
}

const walk = (n, out = []) => {
	if (!n || typeof n !== 'object') return out;
	if (Array.isArray(n)) {
		if (typeof n[0] === 'string' && typeof n[1] === 'string' && n[0].startsWith('/')) out.push(n[1]);
		n.forEach((x) => walk(x, out));
	}
	return out;
};
console.log('\n=== atributos ===');
console.log(JSON.stringify([...new Set(walk(info[100]))]));

console.log('\n=== reseñas ===');
try {
	for (const r of info[31][1]) console.log('--- rating', r[9], '| autor:', r[0]?.[0] ?? r[0], '| texto:', r[1]);
} catch (e) {
	console.log('sin reseñas en la respuesta');
}

console.log('\n=== fotos presentes ===');
console.log(/googleusercontent\.com\/(?:gps-cs-s|grass-cs)\//.test(bestText));
