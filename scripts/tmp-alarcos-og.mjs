import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/comidas-caseras-para-llevar-alarcos/package.json'));
const sharp = require('sharp');

const photo = 'apps/comidas-caseras-para-llevar-alarcos/src/assets/fotos/comidas-caseras-para-llevar-alarcos-apaisada-01.jpg';
const out = 'apps/comidas-caseras-para-llevar-alarcos/public/og.jpg';

const W = 430;
const H = 520;

const inner = await sharp(photo)
	.resize(W, H, { fit: 'cover', position: 'attention' })
	.png()
	.toBuffer();

const rounded = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" rx="18" fill="#fff"/></svg>`,
);

const masked = await sharp(inner)
	.composite([{ input: rounded, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#a9502f">COMIDA CASERA · CIUDAD REAL</text>
	<text x="70" y="248" font-family="Georgia, 'Times New Roman', serif" font-size="88" fill="#313a20">Alarcos</text>
	<text x="76" y="306" font-family="Georgia, 'Times New Roman', serif" font-size="31" font-style="italic" fill="#a9502f">Comida casera para llevar</text>
	<text x="76" y="368" font-family="Arial, sans-serif" font-size="21" fill="#5c5145">C. de Alarcos, 28 · 13001 Ciudad Real</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#5c5145">601 62 27 22 · Mar–Sáb 12:00–15:30</text>
	<text x="76" y="452" font-family="Arial, sans-serif" font-size="19" fill="#998c7c">4,5 sobre 5 · 184 reseñas en Google</text>
	<rect x="76" y="486" width="92" height="2" fill="#a9502f" />
	<rect x="0" y="616" width="1200" height="14" fill="#3f4a2a" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#d9a441" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f7efe1' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
