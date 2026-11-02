// Genera public/og.jpg de la web de San Clemente con la foto de la paella.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/comidas-para-llevar-san-clemente/package.json'));
const sharp = require('sharp');

const slug = 'comidas-para-llevar-san-clemente';
const photo = `apps/${slug}/src/assets/fotos/${slug}-apaisada-05.jpg`;
const out = `apps/${slug}/public/og.jpg`;

const W = 430;
const H = 340;

const inner = await sharp(photo)
	.resize(W, H, { fit: 'cover', position: 'attention' })
	.png()
	.toBuffer();

const rounded = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><rect width="${W}" height="${H}" rx="16" fill="#fff"/></svg>`,
);

const masked = await sharp(inner)
	.composite([{ input: rounded, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<text x="76" y="132" font-family="Arial, sans-serif" font-size="17" letter-spacing="6" fill="#c8452f">COMIDAS Y ASADOR · LORCA</text>
	<text x="70" y="240" font-family="Georgia, 'Times New Roman', serif" font-size="68" fill="#0f1c29">San Clemente</text>
	<text x="74" y="322" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-style="italic" fill="#243b53">guisos calientes para llevar</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#5b5348">C. Galicia, bajo 2 · 30800 Lorca, Murcia</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#5b5348">623 22 80 65 · L–M y X–D, 11:00–15:15</text>
	<text x="76" y="500" font-family="Arial, sans-serif" font-size="19" fill="#9a8c7c">4,6 sobre 5 · 34 reseñas en Google</text>
	<rect x="74" y="452" width="64" height="2" fill="#c8452f" />
	<rect x="0" y="616" width="1200" height="14" fill="#243b53" />
	${Array.from({ length: 25 }, (_, i) => `<rect x="${i * 48 + 24}" y="616" width="24" height="14" fill="#e8b64c" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f9f2e2' } })
	.composite([
		{ input: masked, left: 706, top: 140 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
