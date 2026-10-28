import sharp from 'sharp';
import { statSync, writeFileSync } from 'node:fs';
const app = 'apps/panaderia-ilustre';
const source = `${app}/src/assets/fotos/panaderia-ilustre-fachada.jpg`;
await sharp(source)
	.resize(1200, 630, { fit: 'cover', position: 'attention' })
	.jpeg({ quality: 84, mozjpeg: true })
	.toFile(`${app}/public/og.jpg`);
const photo = statSync(source).size;
const manifestPath = `${app}/src/assets/fotos/.maps-manifest.json`;
const manifest = JSON.parse(await (await import('node:fs/promises')).readFile(manifestPath, 'utf8'));
for (const entry of Object.values(manifest)) if (entry.file === 'panaderia-ilustre-fachada.jpg') entry.bytes = photo;
writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
console.log('og.jpg created; source bytes:', photo);
