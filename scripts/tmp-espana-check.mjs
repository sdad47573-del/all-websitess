import { readFileSync } from 'node:fs';

const FID = '0xd6dd773b9644f91:0xb550f348015b8cd8';
const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9',
	cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
};
const detailPb = (fid) =>
	`!1m14!1s${fid}!3m9!1m3!1d5000!2d0!3d0!2m0!3m2!1i1024!2i768!4f13.1!4m2!3d0!4d0!13m1!2m0!15m47!1m8!4e2!18m5!3b0!6b0!14b1!17b1!20b1!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i771`;
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

for (let i = 0; i < 5; i++) {
	const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(FID))}`;
	const text = await (await fetch(url, { headers: HEADERS })).text();
	if (!text.startsWith(")]}'")) { await sleep(1500); continue; }
	const info = JSON.parse(text.slice(text.indexOf('[')))[6];
	if (!info?.[203]?.[0]) { await sleep(1200); continue; }
	console.log(`--- intento ${i + 1} ---`);
	for (const day of info[203][0]) {
		console.log(' ', day[0], JSON.stringify(day[3]), day[6] ? 'HOLIDAY:' + JSON.stringify(day[6][0]) : '');
	}
	await sleep(1200);
}

// atributos: buscar claves de grupo distintas de accessibility
const raw = readFileSync('scripts/tmp-espana.txt', 'utf8');
const j = JSON.parse(raw.slice(raw.indexOf('[')));
const info = j[6];
console.log('\n=== grupos de info[100] ===');
try {
	for (const g of info[100][1]) console.log(' -', g[0], '/', g[1], '->', g[2].length, 'items');
} catch (e) { console.log(e.message); }

console.log('\n=== busqueda de palabras clave de servicios ===');
const t = JSON.stringify(info);
for (const kw of ['Reservas', 'Terraza', 'Efectivo', 'Tarjeta', 'Aparcamiento', 'Para llevar', 'Entrega', 'Menu', 'Menú', 'Grupos', 'Niños', 'Servicio de mesa', 'Bar', 'Comedor']) {
	const idx = t.indexOf(kw);
	if (idx >= 0) console.log(' ', kw, '->', t.slice(Math.max(0, idx - 90), idx + 90).replace(/\s+/g, ' '));
}
