import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/la-cosecha-panaderia/package.json'));
const sharp = require('sharp');

const illustration = 'apps/la-cosecha-panaderia/public/fotos/trigo.svg';
const out = 'apps/la-cosecha-panaderia/public/og.jpg';

const W = 420;
const H = 520;

const art = await sharp(illustration)
	.resize(W, H, { fit: 'cover', position: 'centre' })
	.png()
	.toBuffer();

const rounded = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" rx="18" fill="#fff"/></svg>`,
);

const masked = await sharp(art)
	.composite([{ input: rounded, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#b4552f">PANADERÍA · CÓRDOBA</text>
	<text x="70" y="272" font-family="Georgia, 'Times New Roman', serif" font-size="102" font-weight="bold" fill="#2c2a1f">La Cosecha</text>
	<text x="76" y="336" font-family="Georgia, 'Times New Roman', serif" font-size="32" font-style="italic" fill="#b4552f">Pan del día, dulces de siempre</text>
	<rect x="76" y="380" width="64" height="2" fill="#d9b26a" />
	<text x="76" y="434" font-family="Arial, sans-serif" font-size="21" fill="#665f4c">Av. de los Almogávares, 42 · 14006 Córdoba</text>
	<text x="76" y="476" font-family="Arial, sans-serif" font-size="21" fill="#665f4c">857 87 03 72 · Todos los días 8:00–21:00</text>
	<text x="76" y="538" font-family="Arial, sans-serif" font-size="19" fill="#9e937c">3,8 sobre 5 · 16 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#3f4d33" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#d9b26a" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f8f2e4' } })
	.composite([
		{ input: masked, left: 700, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
