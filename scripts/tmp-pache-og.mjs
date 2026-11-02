// Genera public/og.jpg de la web de Pache con la foto de la vitrina.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/pache-comidas-caseras-almoradi/package.json'));
const sharp = require('sharp');

const slug = 'pache-comidas-caseras-almoradi';
const photo = `apps/${slug}/src/assets/fotos/${slug}-cuadrada-02.jpg`;
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
	<text x="76" y="132" font-family="Arial, sans-serif" font-size="17" letter-spacing="6" fill="#d99b3d">COMIDAS CASERAS · ALMORADÍ</text>
	<text x="70" y="258" font-family="Georgia, 'Times New Roman', serif" font-size="94" fill="#33111a">Pache</text>
	<text x="74" y="336" font-family="Georgia, 'Times New Roman', serif" font-size="42" font-style="italic" fill="#7b2d3b">para llevar, recién hecho</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#61504a">C. Canalejas, 44 · 03160 Almoradí, Alicante</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#61504a">604 42 05 21 · Lunes a viernes, 10:00–15:00</text>
	<text x="76" y="500" font-family="Arial, sans-serif" font-size="19" fill="#a08e7e">4,5 sobre 5 · 31 reseñas en Google</text>
	<rect x="74" y="452" width="64" height="2" fill="#d99b3d" />
	<rect x="0" y="616" width="1200" height="14" fill="#7b2d3b" />
	${Array.from({ length: 25 }, (_, i) => `<rect x="${i * 48 + 24}" y="616" width="24" height="14" fill="#e6b75f" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f8f1e3' } })
	.composite([
		{ input: masked, left: 706, top: 140 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
