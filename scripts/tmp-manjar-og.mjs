import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/el-manjar-cr/package.json'));
const sharp = require('sharp');

const photo = 'apps/el-manjar-cr/src/assets/fotos/el-manjar-cr-apaisada-02.jpg';
const out = 'apps/el-manjar-cr/public/og.jpg';

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
	<text x="76" y="126" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#b0475f">COMIDA CASERA · CIUDAD REAL</text>
	<text x="70" y="214" font-family="Georgia, 'Times New Roman', serif" font-size="62" fill="#35182c">El manjar Cr</text>
	<text x="76" y="272" font-family="Georgia, 'Times New Roman', serif" font-size="28" font-style="italic" fill="#b0475f">Comida y derivados para llevar</text>
	<text x="76" y="334" font-family="Arial, sans-serif" font-size="21" fill="#5d4b52">Menú diario: primero, segundo, pan y postre</text>
	<text x="76" y="378" font-family="Arial, sans-serif" font-size="30" font-weight="bold" fill="#46263c">7 €</text>
	<text x="76" y="432" font-family="Arial, sans-serif" font-size="21" fill="#5d4b52">C. de la Mata, 4 · 13004 Ciudad Real</text>
	<text x="76" y="468" font-family="Arial, sans-serif" font-size="21" fill="#5d4b52">615 43 46 70 · Mar–Dom 12:00–15:30</text>
	<text x="76" y="504" font-family="Arial, sans-serif" font-size="19" fill="#9c8a90">4,1 sobre 5 · 25 reseñas en Google</text>
	<rect x="76" y="536" width="92" height="2" fill="#b0475f" />
	<rect x="0" y="616" width="1200" height="14" fill="#46263c" />
	${Array.from({ length: 24 }, (_, i) => `<circle cx="${i * 50 + 37}" cy="623" r="5" fill="#e6a95e" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fbf3ea' } })
	.composite([
		{ input: masked, left: 690, top: 55 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
