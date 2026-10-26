// Temporal: genera copias reducidas de las fotos de maki-magic para revisarlas.
import { readdirSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, resolve } from 'node:path';

const sharp = createRequire(resolve('apps/maki-magic/package.json'))('sharp');
const dir = resolve('apps/maki-magic/src/assets/fotos');

for (const f of readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
	const out = resolve(`.tmp-${f.replace('maki-magic-', 'mk-')}`);
	await sharp(resolve(dir, f)).resize(700).jpeg({ quality: 55, mozjpeg: true }).toFile(out);
	console.log(basename(out), statSync(out).size);
}
