/**
 * Genera `public/og.jpg` (1200×630) a partir de la foto de perfil de Google Maps.
 *
 * Ejecutar desde la raíz del monorepo:  bun run scripts/generate-og.mjs
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';

const here = path.dirname(fileURLToPath(import.meta.url));
const assets = path.resolve(here, '../src/assets/fotos/maps-portada.jpg');
const output = path.resolve(here, '../public/og.jpg');

const WIDTH = 1200;
const HEIGHT = 630;

/** Capa con degradado inferior y el texto de marca, en SVG. */
const overlay = Buffer.from(`<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
	<defs>
		<linearGradient id="fade" x1="0" y1="0" x2="0" y2="1">
			<stop offset="0%" stop-color="#06211b" stop-opacity="0.42" />
			<stop offset="52%" stop-color="#06211b" stop-opacity="0.55" />
			<stop offset="100%" stop-color="#04150f" stop-opacity="0.97" />
		</linearGradient>
	</defs>
	<rect width="${WIDTH}" height="${HEIGHT}" fill="url(#fade)" />
	<text x="70" y="${HEIGHT - 128}" font-family="Georgia, serif" font-size="34"
		letter-spacing="4" fill="#f6d79a">L’OASIS</text>
	<text x="70" y="${HEIGHT - 74}" font-family="Georgia, serif" font-size="52"
		font-weight="700" fill="#ffffff">Restaurante &#38; Cafetería</text>
	<text x="70" y="${HEIGHT - 34}" font-family="Helvetica, Arial, sans-serif" font-size="24"
		fill="#e8e2d4">Cocina halal · Desayunos, comida y cena · Málaga</text>
	<rect x="70" y="${HEIGHT - 108}" width="76" height="5" fill="#e0a03c" />
</svg>`);

const base = sharp(readFileSync(assets)).resize(WIDTH, HEIGHT, {
	fit: 'cover',
	position: 'attention',
});

await base
	.composite([{ input: overlay }])
	.jpeg({ quality: 86, progressive: true, mozjpeg: true })
	.toFile(output);

writeFileSync(output, await readFileSync(output));
console.log(`og.jpg generado en ${output}`);
