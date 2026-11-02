// Genera public/og.jpg de la web de Comidas Para Llevar Como en casa a partir
// de la foto de la fachada del perfil de Google Maps.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/comidas-para-llevar-como-en-casa/package.json'));
const sharp = require('sharp');

const slug = 'comidas-para-llevar-como-en-casa';
const photo = `apps/${slug}/src/assets/fotos/${slug}-apaisada-06.jpg`;
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
	<text x="76" y="132" font-family="Arial, sans-serif" font-size="17" letter-spacing="6" fill="#8c3b1f">COMO EN CASA · LORCA</text>
	<text x="70" y="248" font-family="Georgia, 'Times New Roman', serif" font-size="76" fill="#3a160c">Pollos asados</text>
	<text x="74" y="330" font-family="Georgia, 'Times New Roman', serif" font-size="52" font-style="italic" fill="#c96a2b">y comida para llevar</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#6b5546">C. Asilo de San Diego, 1 · 30800 Lorca</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#6b5546">618 59 33 34 · Martes a sábado, 8:00–18:00</text>
	<text x="76" y="500" font-family="Arial, sans-serif" font-size="19" fill="#9c8574">4,6 sobre 5 · 178 reseñas en Google</text>
	<rect x="74" y="452" width="64" height="2" fill="#8c3b1f" />
	<rect x="76" y="576" width="380" height="3" fill="#e0a63c" />
	<rect x="0" y="616" width="1200" height="14" fill="#8c3b1f" />
	${Array.from({ length: 25 }, (_, i) => `<rect x="${i * 48 + 24}" y="616" width="24" height="14" fill="#e0a63c" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#faf3e4' } })
	.composite([
		{ input: masked, left: 706, top: 140 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
