import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-rocio/package.json'));
const sharp = require('sharp');

const photo = 'apps/panaderia-rocio/src/assets/fotos/panaderia-rocio-vertical-03.jpg';
const out = 'apps/panaderia-rocio/public/og.jpg';

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
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#a94f63">PANADERÍA · LEVANTE · CÓRDOBA</text>
	<text x="70" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="88" font-weight="bold" fill="#5c1730">Rocío</text>
	<text x="76" y="316" font-family="Georgia, 'Times New Roman', serif" font-size="31" font-style="italic" fill="#a94f63">Pan de barrio, también ultramarinos</text>
	<rect x="76" y="358" width="64" height="2" fill="#b9825a" />
	<text x="76" y="414" font-family="Arial, sans-serif" font-size="21" fill="#6f545c">Av. de Carlos III, 28 · 14014 Córdoba</text>
	<text x="76" y="456" font-family="Arial, sans-serif" font-size="21" fill="#6f545c">Pan, bollería, empanadas y tortas</text>
	<text x="76" y="518" font-family="Arial, sans-serif" font-size="19" fill="#8d7178">5,0 sobre 5 · 5 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#5c1730" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#b9825a" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fbf2ec' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
