import { readFileSync, writeFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const app = 'apps/mamma-p';
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
const src = `${app}/src/assets/fotos/mamma-p-apaisada-01.jpg`;
await sharp(src)
	.resize(1200, 630, { fit: 'cover', position: 'centre' })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile(`${app}/public/og.jpg`);
console.log('og.jpg:', statSync(`${app}/public/og.jpg`).size, 'bytes');
