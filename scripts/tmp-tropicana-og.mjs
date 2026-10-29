import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-la-tahona/package.json'));
const sharp = require('sharp');

const photo = 'apps/tropicana-pasteleria/src/assets/fotos/tropicana-pasteleria-panoramica-01.jpg';
const out = 'apps/tropicana-pasteleria/public/og.jpg';

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
	<circle cx="880" cy="315" r="222" fill="none" stroke="#c3a05c" stroke-width="2" opacity="0.7" />
	<rect x="74" y="486" width="64" height="3" fill="#c3a05c" />
	<text x="76" y="130" font-family="Georgia, serif" font-size="22" letter-spacing="9" fill="#f2dcdd">PASTELERÍA · PANADERÍA</text>
	<text x="70" y="280" font-family="Georgia, serif" font-size="104" fill="#fdf7ef">TROPICANA</text>
	<text x="76" y="348" font-family="Georgia, serif" font-size="34" fill="#f2dcdd">Boutique de la panadería</text>
	<text x="76" y="528" font-family="Arial, sans-serif" font-size="23" letter-spacing="1.5" fill="#fdf7ef">C. Nuzas, 22 · Teatinos · 29010 Málaga</text>
	<text x="76" y="566" font-family="Arial, sans-serif" font-size="20" letter-spacing="1" fill="#f2dcdd">697 56 30 66 · Abierta todos los días</text>
	<rect x="0" y="616" width="1200" height="14" fill="#a8402f" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#f2dcdd" />`).join('')}
</svg>`;

const info = await sharp({
	create: { width: 1200, height: 630, channels: 3, background: '#4a1f28' },
})
	.composite([
		{ input: inner, left: 700, top: 100 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
