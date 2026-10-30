import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-pasteleria-suarez/package.json'));
const sharp = require('sharp');

const photo = 'apps/panaderia-pasteleria-suarez/src/assets/fotos/panaderia-pasteleria-suarez-vertical-01.jpg';
const out = 'apps/panaderia-pasteleria-suarez/public/og.jpg';

const W = 440;
const H = 540;

const arch = Buffer.from(
	`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg"><path d="M0 ${W / 2} A ${W / 2} ${W / 2} 0 0 1 ${W} ${W / 2} L ${W} ${H} L 0 ${H} Z" fill="#fff"/></svg>`,
);

const inner = await sharp(photo)
	.resize(W, H, { fit: 'cover', position: 'attention' })
	.composite([{ input: arch, blend: 'dest-in' }])
	.png()
	.toBuffer();

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<circle cx="965" cy="300" r="252" fill="none" stroke="#c9a24b" stroke-width="1.5" opacity="0.9" />
	<text x="80" y="126" font-family="Arial, sans-serif" font-size="17" letter-spacing="7" fill="#7d2b34">PANADERÍA · PASTELERÍA · CAFETERÍA</text>
	<text x="74" y="272" font-family="Georgia, 'Times New Roman', serif" font-size="106" font-weight="bold" fill="#2a1f1a">Suárez</text>
	<text x="80" y="342" font-family="Georgia, 'Times New Roman', serif" font-size="34" font-style="italic" fill="#7d2b34">Pan, dulces y bocadillos en la Trinidad</text>
	<rect x="80" y="382" width="70" height="2" fill="#c9a24b" />
	<text x="80" y="436" font-family="Arial, sans-serif" font-size="21" fill="#6b5b4e">Pl. de la Trinidad · Centro · 14003 Córdoba</text>
	<text x="80" y="478" font-family="Arial, sans-serif" font-size="21" fill="#6b5b4e">664 80 87 51 · L–V 8:30–14:30 y 17:30–19:30</text>
	<text x="80" y="540" font-family="Arial, sans-serif" font-size="19" fill="#a2907f">3,8 sobre 5 · 20 reseñas en Google</text>
	<rect x="0" y="616" width="1200" height="14" fill="#7d2b34" />
	${Array.from({ length: 24 }, (_, i) => `<rect x="${i * 50 + 25}" y="616" width="25" height="14" fill="#fbf5ea" />`).join('')}
</svg>`;

const info = await sharp({ create: { width: 1200, height: 630, channels: 3, background: '#fbf5ea' } })
	.composite([
		{ input: inner, left: 690, top: 60 },
		{ input: Buffer.from(overlay) },
	])
	.jpeg({ quality: 88, mozjpeg: true })
	.toFile(out);

console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
