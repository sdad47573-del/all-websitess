import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/la-cocina-del-hogar/package.json'));
const sharp = require('sharp');

const photo = 'apps/la-cocina-del-hogar/src/assets/fotos/la-cocina-del-hogar-vertical-01.jpg';
const out = 'apps/la-cocina-del-hogar/public/og.jpg';

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
	<rect x="74" y="548" width="92" height="2" fill="#b4552f" />
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#b4552f">COMIDA CASERA · CIUDAD REAL</text>
	<text x="70" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="#2e4634">La Cocina</text>
	<text x="70" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="#2e4634">Del Hogar</text>
	<text x="76" y="392" font-family="Georgia, 'Times New Roman', serif" font-size="30" font-style="italic" fill="#b4552f">Sabor y calidez en cada plato</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#5f5443">C. Morería, 19 · 13002 Ciudad Real</text>
	<text x="76" y="476" font-family="Arial, sans-serif" font-size="21" fill="#5f5443">926 72 16 60 · L–D 12:00–15:30</text>
	<text x="76" y="512" font-family="Arial, sans-serif" font-size="19" fill="#a08e75">4,8 sobre 5 · 65 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#3e5c46" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#e4b363" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fbf5e9' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
