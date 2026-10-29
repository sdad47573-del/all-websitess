import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-y-confiteria-loli/package.json'));
const sharp = require('sharp');

const photo = 'apps/panaderia-y-confiteria-loli/src/assets/fotos/panaderia-y-confiteria-loli-vertical-01.jpg';
const out = 'apps/panaderia-y-confiteria-loli/public/og.jpg';

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
	<rect x="0" y="0" width="1200" height="630" fill="none" />
	<rect x="74" y="470" width="64" height="2" fill="#b06a2c" />
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#b06a2c">PANADERÍA · CONFITERÍA</text>
	<text x="70" y="272" font-family="Georgia, 'Times New Roman', serif" font-size="112" fill="#34251b">Loli</text>
	<text x="76" y="338" font-family="Georgia, 'Times New Roman', serif" font-size="33" font-style="italic" fill="#b06a2c">Dulces de siempre, tartas para celebrar</text>
	<text x="76" y="414" font-family="Arial, sans-serif" font-size="21" fill="#705c4b">Ctra. de Madrid, 28 · 14610 Córdoba</text>
	<text x="76" y="452" font-family="Arial, sans-serif" font-size="21" fill="#705c4b">625 41 07 43 · L–V 6:00–14:30 · S 7:00 · D 9:00</text>
	<text x="76" y="512" font-family="Arial, sans-serif" font-size="19" fill="#a5907a">4,5 sobre 5 · 80 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#34251b" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#f0cf8e" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fbf2df' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
