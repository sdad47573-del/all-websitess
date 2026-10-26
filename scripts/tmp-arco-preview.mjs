// Temporal: genera copias reducidas de las fotos de o-arco para revisarlas.
import { readdirSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { basename, resolve } from 'node:path';

const sharp = createRequire(resolve('apps/o-arco/package.json'))('sharp');
const dir = resolve('apps/o-arco/src/assets/fotos');

for (const f of readdirSync(dir).filter((f) => f.endsWith('.jpg'))) {
	const file = f.replace('o-arco-', 'ar-');
	const out = resolve(`.tmp-${file}`);
	await sharp(resolve(dir, f)).resize(700).jpeg({ quality: 55, mozjpeg: true }).toFile(out);
	console.log(basename(out), statSync(out).size);
}
