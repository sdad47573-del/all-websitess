import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const app = 'apps/restaurante-quinto-toro';
const manifestPath = `${app}/src/assets/fotos/.maps-manifest.json`;
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

// 1) Actualizar bytes reales de cada foto en el manifiesto.
for (const key of Object.keys(manifest)) {
	manifest[key].bytes = statSync(`${app}/src/assets/fotos/${manifest[key].file}`).size;
}
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const total = Object.values(manifest).reduce((sum, item) => sum + item.bytes, 0);
console.log('bytes actualizados. total:', (total / 1024 / 1024).toFixed(1), 'MB');

// 2) Generar public/og.jpg (1200x630) desde la foto apaisada 06.
const require = createRequire(resolve('apps/bar-el-anzuelo/package.json'));
const sharp = require('sharp');
const src = `${app}/src/assets/fotos/restaurante-quinto-toro-apaisada-06.jpg`;
await sharp(src)
	.resize(1200, 630, { fit: 'cover', position: 'centre' })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile(`${app}/public/og.jpg`);
const og = statSync(`${app}/public/og.jpg`);
console.log('og.jpg:', og.size, 'bytes');
