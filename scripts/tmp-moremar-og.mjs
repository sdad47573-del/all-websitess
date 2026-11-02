// Genera public/og.jpg de la web de Moremar con la foto del asado del perfil.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/moremar-comidas-para-llevar/package.json'));
const sharp = require('sharp');

const slug = 'moremar-comidas-para-llevar';
const photo = `apps/${slug}/src/assets/fotos/${slug}-apaisada-02.jpg`;
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
	<text x="76" y="132" font-family="Arial, sans-serif" font-size="17" letter-spacing="6" fill="#d1603d">COMIDAS CASERAS · FUENTE ÁLAMO</text>
	<text x="70" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="82" fill="#0c2229">Moremar</text>
	<text x="74" y="332" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-style="italic" fill="#1f5566">cocina de casa y asados</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#5c5249">Ronda de Levante · 30320 Fuente Álamo, Murcia</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#5c5249">669 23 26 05 · L–D 7:00–17:00 · martes cerrado</text>
	<text x="76" y="500" font-family="Arial, sans-serif" font-size="19" fill="#9a8b7c">4,4 sobre 5 · 185 reseñas en Google</text>
	<rect x="74" y="452" width="64" height="2" fill="#d1603d" />
	<rect x="0" y="616" width="1200" height="14" fill="#0c2229" />
	${Array.from({ length: 25 }, (_, i) => `<rect x="${i * 48 + 24}" y="616" width="24" height="14" fill="#e3b23c" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f5f1e6' } })
	.composite([
		{ input: masked, left: 706, top: 140 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
