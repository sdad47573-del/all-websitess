// Temporal: genera og.jpg y actualiza los bytes del manifiesto de maki-magic.
import { readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { resolve } from 'node:path';

const app = 'apps/maki-magic';
const dir = `${app}/src/assets/fotos`;
const manifestPath = `${dir}/.maps-manifest.json`;
const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

for (const key of Object.keys(manifest)) {
	manifest[key].bytes = statSync(`${dir}/${manifest[key].file}`).size;
}
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

const total = Object.values(manifest).reduce((sum, item) => sum + item.bytes, 0);
console.log('fotos:', Object.keys(manifest).length, '| total:', (total / 1024 / 1024).toFixed(1), 'MB');

const sharp = createRequire(resolve(`${app}/package.json`))('sharp');
const src = `${dir}/maki-magic-apaisada-10.jpg`;
const meta = await sharp(src).metadata();
console.log('origen:', meta.width + 'x' + meta.height);

const info = await sharp(src)
	.resize(1200, 630, { fit: 'cover', position: 'centre' })
	.jpeg({ quality: 82, mozjpeg: true })
	.toFile(`${app}/public/og.jpg`);
console.log('og.jpg:', info.width + 'x' + info.height, info.size, 'bytes');
