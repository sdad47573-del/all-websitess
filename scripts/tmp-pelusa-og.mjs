import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-la-tahona/package.json'));
const sharp = require('sharp');

const photo = 'apps/boutique-del-pan-la-pelusa/src/assets/fotos/boutique-del-pan-la-pelusa-vertical-02.jpg';
const out = 'apps/boutique-del-pan-la-pelusa/public/og.jpg';

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
	<circle cx="880" cy="315" r="222" fill="none" stroke="#d9ae63" stroke-width="2" opacity="0.75" />
	<rect x="74" y="486" width="64" height="3" fill="#d9ae63" />
	<text x="76" y="130" font-family="Georgia, serif" font-size="22" letter-spacing="8" fill="#f0dfbd">PANADERÍA · PANIFICADORA</text>
	<text x="72" y="282" font-family="Georgia, serif" font-size="108" fill="#fbf5e8">LA PELUSA</text>
	<text x="76" y="350" font-family="Georgia, serif" font-size="34" fill="#f0dfbd">Boutique del Pan</text>
	<text x="76" y="528" font-family="Arial, sans-serif" font-size="22" letter-spacing="1.2" fill="#fbf5e8">Plaza Basconia, 1 · Bailén-Miraflores · 29010 Málaga</text>
	<text x="76" y="566" font-family="Arial, sans-serif" font-size="20" letter-spacing="1" fill="#f0dfbd">952 61 45 99 · Abierta todos los días</text>
	<rect x="0" y="616" width="1200" height="14" fill="#d9ae63" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#1f4d3a" />`).join('')}
</svg>`;

const info = await sharp({
	create: { width: 1200, height: 630, channels: 3, background: '#1f4d3a' },
})
	.composite([
		{ input: inner, left: 700, top: 100 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
