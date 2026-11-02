// Genera public/og.jpg de la web de Comidas para llevar El Brujo con la foto
// del pollo a la brasa del perfil de Google Maps.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/comidas-para-llevar-el-brujo/package.json'));
const sharp = require('sharp');

const slug = 'comidas-para-llevar-el-brujo';
const photo = `apps/${slug}/src/assets/fotos/${slug}-apaisada-09.jpg`;
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
	<text x="76" y="132" font-family="Arial, sans-serif" font-size="17" letter-spacing="6" fill="#c1531f">ASADOR · SAN JOSÉ DE LA MONTAÑA</text>
	<text x="70" y="252" font-family="Georgia, 'Times New Roman', serif" font-size="82" fill="#241c18">El Brujo</text>
	<text x="74" y="332" font-family="Georgia, 'Times New Roman', serif" font-size="46" font-style="italic" fill="#7d2f16">pollo, cordero y brasa</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#5f5148">Cam. San José, 127 · 30570 San José de la Montaña</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#5f5148">968 82 33 80 · Jue–Dom 9:00–16:00 · Lun 9:00–17:00</text>
	<text x="76" y="500" font-family="Arial, sans-serif" font-size="19" fill="#96857a">4,2 sobre 5 · 363 reseñas en Google</text>
	<rect x="74" y="452" width="64" height="2" fill="#c1531f" />
	<rect x="0" y="616" width="1200" height="14" fill="#2a120a" />
	${Array.from({ length: 25 }, (_, i) => `<rect x="${i * 48 + 24}" y="616" width="24" height="14" fill="#e0a13b" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f6efe0' } })
	.composite([
		{ input: masked, left: 706, top: 140 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
