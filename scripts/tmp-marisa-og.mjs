import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const require = createRequire(resolve('apps/panaderia-la-tahona/package.json'));
const sharp = require('sharp');

const photo = 'apps/panaderia-marisa/src/assets/fotos/panaderia-marisa-apaisada-02.jpg';
const out = 'apps/panaderia-marisa/public/og.jpg';

const overlay = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="veil" x1="0" y1="0" x2="1" y2="0">
			<stop offset="0" stop-color="#1c150c" stop-opacity="0.92" />
			<stop offset="0.62" stop-color="#1c150c" stop-opacity="0.62" />
			<stop offset="1" stop-color="#1c150c" stop-opacity="0.18" />
		</linearGradient>
	</defs>
	<rect width="1200" height="630" fill="url(#veil)" />
	<rect x="74" y="486" width="64" height="3" fill="#c99245" />
	<text x="74" y="150" font-family="Georgia, serif" font-size="23" letter-spacing="9" fill="#e8cbaa">PANADERÍA · CHARCUTERÍA</text>
	<text x="70" y="342" font-family="Georgia, serif" font-size="138" fill="#fbf4e6">MARISA</text>
	<text x="76" y="418" font-family="Georgia, serif" font-size="35" fill="#e8cbaa">Pan de masa madre, quesos y despensa</text>
	<text x="76" y="540" font-family="Arial, sans-serif" font-size="23" letter-spacing="2" fill="#fbf4e6">C. Frigiliana, 10 · Carretera de Cádiz · 29004 Málaga</text>
	<text x="76" y="576" font-family="Arial, sans-serif" font-size="20" letter-spacing="1" fill="#e8cbaa">624 39 15 11 · Abierta todos los días</text>
</svg>`;

const image = sharp(photo)
	.resize(1200, 630, { fit: 'cover', position: 'attention' })
	.modulate({ brightness: 0.94 })
	.composite([{ input: Buffer.from(overlay) }])
	.jpeg({ quality: 86, mozjpeg: true });

const info = await image.toFile(out);
console.log(out, info.width, info.height, Math.round(info.size / 1024) + ' KB');
