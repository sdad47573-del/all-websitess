import { writeFileSync } from 'node:fs';

const fid = '0xd5ff88043460ea3:0x94b3a16339c50b38';
const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9',
	cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
};

const detailPb = (f) =>
	`!1m14!1s${f}!3m9!1m3!1d5000!2d0!3d0!2m0!3m2!1i1024!2i768!4f13.1!4m2!3d0!4d0!13m1!2m0!15m47!1m8!4e2!18m5!3b0!6b0!14b1!17b1!20b1!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i771`;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

let text = '';
for (let i = 0; i < 6; i++) {
	const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(fid))}`;
	const res = await fetch(url, { headers: HEADERS });
	const body = await res.text();
	console.log('attempt', i, res.status, 'len', body.length, body.slice(0, 12).replace(/\n/g, ' '));
	if (body.startsWith(")]}'") && body.length > (text.length || 5000)) text = body;
	if (text.length > 20000) break;
	await sleep(1500 + i * 800);
}
if (!text) {
	console.log('sin respuesta valida');
	process.exit(1);
}
writeFileSync('scripts/tmp-herminia.txt', text);

const json = JSON.parse(text.slice(text.indexOf('\n') + 1).replace(/^\s*/, '').replace(/,\s*$/, ''));
const p = json[6];

console.log('nombre:', p[11]);
console.log('direccion:', p[18] ?? p[39]);
console.log('categorias:', JSON.stringify(p[13]));
console.log('nota/resenas:', JSON.stringify(p[4]?.[7]), JSON.stringify(p[4]?.[8]), '|', p[4]?.[3]?.[1]);
console.log('descripcion:', p[154]?.[0]?.[0]);
console.log('telefono:', JSON.stringify(p[178]?.[0]?.slice(0, 3)));
console.log('web:', (JSON.stringify(p).match(/https?:\/\/(?!.*google|.*gstatic|.*ggpht|.*youtube)[^"\\]+/g) ?? []).slice(0, 5));
console.log('horarios:');
for (const d of p[203]?.[0] ?? []) console.log(' ', d[0], '=>', d[3]?.[0]?.[0] ?? '?');
console.log('atributos:');
for (const g of p[100]?.[1] ?? []) console.log(' ', g[1], '=>', (g[2] ?? []).map((a) => a[1]).join(' / '));
console.log('reseñas:');
for (const r of p[31]?.[1] ?? []) console.log(' -', JSON.stringify(r[1]).slice(0, 240));
console.log('reviewsUrl:', p[4]?.[3]?.[0]);
