import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const app = 'apps/restaurante-alentejo';
const manifestPath = `${app}/src/assets/fotos/.maps-manifest.json`;
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

for (const key of Object.keys(manifest)) {
	manifest[key].bytes = statSync(`${app}/src/assets/fotos/${manifest[key].file}`).size;
}
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const total = Object.values(manifest).reduce((sum, item) => sum + item.bytes, 0);
console.log('bytes actualizados. total:', (total / 1024 / 1024).toFixed(1), 'MB');

const require = createRequire(resolve('apps/bar-el-anzuelo/package.json'));
const sharp = require('sharp');
const src = `${app}/src/assets/fotos/restaurante-alentejo-panoramica-01.jpg`;
await sharp(src)
	.resize(1200, 630, { fit: 'cover', position: 'centre' })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile(`${app}/public/og.jpg`);
console.log('og.jpg:', statSync(`${app}/public/og.jpg`).size, 'bytes');

for (const [id, item] of Object.entries(manifest)) {
	const meta = await sharp(`${app}/src/assets/fotos/${item.file}`).metadata();
	console.log(item.file.padEnd(44), `${meta.width}x${meta.height}`.padEnd(11), Math.round(item.bytes / 1024) + ' KB');
}
