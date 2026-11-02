// Genera public/og.jpg de la web de ServicePollos con la foto del pollo asado.
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/service-pollos/package.json'));
const sharp = require('sharp');

const slug = 'service-pollos';
const photo = `apps/${slug}/src/assets/fotos/${slug}-vertical-06.jpg`;
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
	<text x="76" y="132" font-family="Arial, sans-serif" font-size="17" letter-spacing="6" fill="#d98431">ASADOR DE POLLOS · MURCIA</text>
	<text x="70" y="246" font-family="Georgia, 'Times New Roman', serif" font-size="70" fill="#1b2417">ServicePollos</text>
	<text x="74" y="326" font-family="Georgia, 'Times New Roman', serif" font-size="44" font-style="italic" fill="#3f5136">pollo a la brasa y arroces</text>
	<text x="76" y="404" font-family="Arial, sans-serif" font-size="21" fill="#5f5749">C. del Carmen, 17 · 30110 Murcia</text>
	<text x="76" y="440" font-family="Arial, sans-serif" font-size="21" fill="#5f5749">868 97 32 76 · Martes a domingo, 9:30–16:30</text>
	<text x="76" y="500" font-family="Arial, sans-serif" font-size="19" fill="#9b8f7c">4,1 sobre 5 · 131 reseñas en Google</text>
	<rect x="74" y="452" width="64" height="2" fill="#d98431" />
	<rect x="0" y="616" width="1200" height="14" fill="#3f5136" />
	${Array.from({ length: 25 }, (_, i) => `<rect x="${i * 48 + 24}" y="616" width="24" height="14" fill="#e8bd5f" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#f7f1e3' } })
	.composite([
		{ input: masked, left: 706, top: 140 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
