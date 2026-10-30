import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-la-paz-horno-de-lena/package.json'));
const sharp = require('sharp');

const photo = 'apps/panaderia-la-paz-horno-de-lena/src/assets/fotos/panaderia-la-paz-horno-de-lena-vertical-01.jpg';
const out = 'apps/panaderia-la-paz-horno-de-lena/public/og.jpg';

const W = 430;
const H = 520;

const inner = await sharp(photo).resize(W, H, { fit: 'cover', position: 'attention' }).png().toBuffer();

const rounded = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" rx="8" fill="#fff"/></svg>`,
);

const masked = await sharp(inner)
	.composite([{ input: rounded, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<text x="76" y="126" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#b9502a">PANADERÍA · HORNO DE LEÑA</text>
	<text x="70" y="250" font-family="Georgia, 'Times New Roman', serif" font-size="78" font-weight="bold" fill="#241d19">La Paz</text>
	<text x="76" y="312" font-family="Georgia, 'Times New Roman', serif" font-size="31" font-style="italic" fill="#b9502a">Pan de leña, en Alcolea</text>
	<rect x="76" y="352" width="64" height="2" fill="#b9502a" />
	<text x="76" y="406" font-family="Arial, sans-serif" font-size="21" fill="#6d5a4c">Ctra. de Madrid, 36 · 14610 Alcolea</text>
	<text x="76" y="448" font-family="Arial, sans-serif" font-size="21" fill="#6d5a4c">Todos los días · 10:15–14:30</text>
	<text x="76" y="490" font-family="Arial, sans-serif" font-size="21" fill="#b9502a">655 51 04 27</text>
	<text x="76" y="530" font-family="Arial, sans-serif" font-size="18" fill="#8b7766">5,0 sobre 5 · 4 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#241d19" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#b9502a" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f8f1e4' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
