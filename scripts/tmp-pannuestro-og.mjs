import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/el-pan-nuestro-de-cada-dia/package.json'));
const sharp = require('sharp');

const photo = 'apps/el-pan-nuestro-de-cada-dia/src/assets/fotos/el-pan-nuestro-de-cada-dia-apaisada-02.jpg';
const out = 'apps/el-pan-nuestro-de-cada-dia/public/og.jpg';

const W = 460;
const H = 500;

const inner = await sharp(photo).resize(W, H, { fit: 'cover', position: 'attention' }).png().toBuffer();

const rounded = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" rx="10" fill="#fff"/></svg>`,
);

const masked = await sharp(inner)
	.composite([{ input: rounded, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<text x="76" y="128" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#6b7a52">PANADERÍA · NTE. SIERRA · CÓRDOBA</text>
	<text x="70" y="222" font-family="Georgia, 'Times New Roman', serif" font-size="64" font-weight="bold" fill="#2f2a22">El Pan Nuestro</text>
	<text x="76" y="286" font-family="Georgia, 'Times New Roman', serif" font-size="31" font-style="italic" fill="#6b7a52">de cada día</text>
	<rect x="76" y="326" width="64" height="2" fill="#c9a227" />
	<text x="76" y="384" font-family="Arial, sans-serif" font-size="21" fill="#746a59">C. Abén Mazarra, 37 · 14006 Córdoba</text>
	<text x="76" y="426" font-family="Arial, sans-serif" font-size="21" fill="#746a59">Pan, bollería, tortas y desayunos</text>
	<text x="76" y="468" font-family="Arial, sans-serif" font-size="21" fill="#4f5c3b">Todos los días · 8:30–14:00</text>
	<text x="76" y="516" font-family="Arial, sans-serif" font-size="19" fill="#8c8069">4,6 sobre 5 · 12 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#2f2a22" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#c9a227" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f7f1e3' } })
	.composite([
		{ input: masked, left: 672, top: 65 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
