import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-roldan-garcia/package.json'));
const sharp = require('sharp');

const photo = 'apps/panaderia-roldan-garcia/src/assets/fotos/panaderia-roldan-garcia-vertical-03.jpg';
const out = 'apps/panaderia-roldan-garcia/public/og.jpg';

const W = 430;
const H = 520;

const inner = await sharp(photo).resize(W, H, { fit: 'cover', position: 'attention' }).png().toBuffer();

const rounded = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" rx="10" fill="#fff"/></svg>`,
);

const masked = await sharp(inner)
	.composite([{ input: rounded, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#a9552f">PANADERÍA · CÓRDOBA</text>
	<text x="70" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="72" font-weight="bold" fill="#1d2430">Roldán García</text>
	<text x="76" y="316" font-family="Georgia, 'Times New Roman', serif" font-size="33" font-style="italic" fill="#a9552f">Dulces de siempre, en el Gran Capitán</text>
	<rect x="76" y="358" width="64" height="2" fill="#a9552f" />
	<text x="76" y="414" font-family="Arial, sans-serif" font-size="21" fill="#5f6270">Av. del Gran Capitán, 17 · 14008 Córdoba</text>
	<text x="76" y="456" font-family="Arial, sans-serif" font-size="21" fill="#5f6270">957 49 01 76 · L–V 9:00–14:30</text>
	<text x="76" y="518" font-family="Arial, sans-serif" font-size="19" fill="#979aa4">4 sobre 5 · 70 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#1d2430" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#a9552f" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f6f1e6' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
