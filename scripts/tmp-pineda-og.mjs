import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-la-tahona/package.json'));
const sharp = require('sharp');

const photo = 'apps/asador-pineda/src/assets/fotos/asador-pineda-vertical-09.jpg';
const out = 'apps/asador-pineda/public/og.jpg';

const SIZE = 430;
const circle = Buffer.from(
	`<svg width="${SIZE}" height="${SIZE}" xmlns="http://www.w3.org/2000/svg"><circle cx="${SIZE / 2}" cy="${SIZE / 2}" r="${SIZE / 2}" fill="#fff"/></svg>`,
);

const inner = await sharp(photo)
	.resize(SIZE, SIZE, { fit: 'cover', position: 'attention' })
	.composite([{ input: circle, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<circle cx="880" cy="315" r="222" fill="none" stroke="#e8702a" stroke-width="2" opacity="0.85" />
	<rect x="74" y="486" width="64" height="3" fill="#e8702a" />
	<text x="76" y="130" font-family="Arial, sans-serif" font-size="21" letter-spacing="8" fill="#f3c9a9">ASADOR · COMIDA CASERA</text>
	<text x="70" y="278" font-family="Georgia, serif" font-size="88" font-weight="bold" fill="#f7eddc">ASADOR</text>
	<text x="70" y="366" font-family="Georgia, serif" font-size="88" font-weight="bold" fill="#e8702a">PINEDA</text>
	<text x="76" y="432" font-family="Arial, sans-serif" font-size="27" letter-spacing="1" fill="#f3c9a9">Pollos asados y comida para llevar</text>
	<text x="76" y="528" font-family="Arial, sans-serif" font-size="22" letter-spacing="1.2" fill="#f7eddc">C. Manrique, 19 · Distrito Centro · 29013 Málaga</text>
	<text x="76" y="566" font-family="Arial, sans-serif" font-size="20" letter-spacing="1" fill="#f3c9a9">952 65 40 16 · Abierto todos los días</text>
	<rect x="0" y="616" width="1200" height="14" fill="#e8702a" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#191612" />`).join('')}
</svg>`;

const info = await sharp({
	create: { width: 1200, height: 630, channels: 3, background: '#191612' },
})
	.composite([
		{ input: inner, left: 700, top: 100 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
