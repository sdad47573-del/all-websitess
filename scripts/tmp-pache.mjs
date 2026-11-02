import { writeFileSync } from 'node:fs';

const FID = '0xd63a5db55c5495f:0xc6f8f6970ca7c6f6';
const SLUG = 'pache';

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
for (let i = 0; i < 8; i++) {
	const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(FID))}`;
	let res;
	try {
		res = await fetch(url, { headers: HEADERS });
	} catch (e) {
		console.log('err', i, e.message);
		await sleep(1500 + i * 1000);
		continue;
	}
	const text = await res.text();
	const ok = text.startsWith(")]}'");
	const hasName = /pache/i.test(text);
	console.log('attempt', i, 'status', res.status, 'len', text.length, 'ok', ok, 'name', hasName);
	if (ok && hasName && text.length > bestText.length) bestText = text;
	if (ok && hasName && text.length > 22000) break;
	await sleep(1200 + i * 800);
}

if (!bestText) {
	console.log('no valid response');
	process.exit(1);
}

writeFileSync(`scripts/tmp-${SLUG}.txt`, bestText);
console.log('SAVED bytes:', bestText.length);

const j = JSON.parse(bestText.slice(bestText.indexOf('[')));
const info = j[6];
const pick = (i) => JSON.stringify(info[i]);

console.log('\nNAME:', pick(11));
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
console.log('\nATTRIBUTES:', JSON.stringify(info[100]).slice(0, 3000));
console.log('\nREVIEWS:');
try {
	for (const r of info[31][1]) console.log('rating', r[9], '|', r[1]);
} catch (e) {
	console.log('err', e.message);
}
console.log('\nMENU:', JSON.stringify(info[164]).slice(0, 1500));

writeFileSync(
	`scripts/tmp-${SLUG}.json`,
	JSON.stringify(
		{
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
		},
		null,
		2,
	),
);
