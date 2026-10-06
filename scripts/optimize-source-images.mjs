/**
 * Reduce el peso de las fotos fuente de las apps.
 *
 * Las fotos de `apps/<app>/src/assets/` son las que importa Astro y de las que salen las
 * variantes AVIF/WebP del sitio. Casi todas vienen de fichas de Google Maps a resolucion de
 * movil (1080x1920) o de camara (4000x3000, hasta 7723x5151 y 15 MB), cuando el ancho mayor
 * que la web pide nunca pasa de ~1280 px. El resultado: un repo de cientos de MB y un build
 * que dedica segundos a decodificar fotos que luego encoge.
 *
 * Este script recorta el lado largo a `--max` (2048 por defecto, deja margen de sobra para
 * pantallas 2x) y recomprime: JPEG en mozjpeg progresivo con calidad `--quality` (82) y PNG
 * con compresion maxima conservando el alfa. No toca:
 *
 * - SVG (no es raster y no se puede recomprimir).
 * - WebP/AVIF (ya vienen comprimidos; recomprimirlos solo anade perdida).
 * - `public/` (los ficheros de ahi se sirven tal cual y hay codigo con `width`/`height`
 *   escritos a mano que dejaria de cuadrar con la imagen real; su peso es del orden de MB,
 *   no de cientos).
 *
 * Es idempotente: si el reencode no baja el peso al menos un 5% ni cambia las dimensiones,
 * no escribe nada. Los ficheros que se tocan son los originales, asi que conviene hacerlo en
 * un commit propio y revisar el diff de tamano.
 *
 * Uso (desde la raiz del monorepo):
 *   node scripts/optimize-source-images.mjs --dry          ver que haria
 *   node scripts/optimize-source-images.mjs                aplicarlo
 *   node scripts/optimize-source-images.mjs --max=1600     ajustar el lado largo
 *   node scripts/optimize-source-images.mjs bar-el-anzuelo solo una app
 */

import { existsSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import path from 'node:path';
import { globSync } from 'tinyglobby';

// sharp es dependencia de algunas apps, no de la raiz; se resuelve desde una que lo tiene
// declarado (mismo patron que scripts/og-svg-to-png.mjs).
const require = createRequire(path.resolve(import.meta.dirname, '..', 'apps/bar-el-anzuelo/package.json'));
let sharp;
try {
	sharp = require('sharp');
} catch {
	console.error('No se encuentra sharp. Instala las dependencias con `bun install` y reintenta.');
	process.exit(1);
}

const argv = process.argv.slice(2);
const dry = argv.includes('--dry');
const maxArg = argv.find((a) => a.startsWith('--max='));
const qualityArg = argv.find((a) => a.startsWith('--quality='));
const MAX_EDGE = Number(maxArg?.split('=')[1] || 2048);
const JPEG_QUALITY = Number(qualityArg?.split('=')[1] || 82);
/** Por debajo de esta mejora no merece la pena reescribir el fichero. */
const MIN_GAIN = 0.05;
const only = argv.filter((a) => !a.startsWith('--'));

const repoRoot = path.resolve(import.meta.dirname, '..');

const files = globSync('apps/*/src/assets/**/*.{jpg,jpeg,JPG,JPEG,png,PNG}', {
	cwd: repoRoot,
	absolute: true,
	onlyFiles: true,
})
	// tinyglobby devuelve rutas con "/" aunque se ejecute en Windows, asi que se normaliza antes de
	// comparar. Con `path.sep` el filtro por app no coincidia nunca en Windows y no revisaba nada.
	.filter((f) => !only.length || only.some((app) => f.replaceAll('\\', '/').includes(`/${app}/`)))
	.sort();

const encode = async (file, buffer, metadata) => {
	const isJpeg = /\.jpe?g$/i.test(file);
	const long = Math.max(metadata.width || 0, metadata.height || 0);
	const needsResize = long > MAX_EDGE;
	// `withoutEnlargement` para no escalar hacia arriba fotos ya pequenas.
	let pipeline = sharp(buffer).rotate();
	if (needsResize) {
		pipeline = pipeline.resize({
			width: MAX_EDGE,
			height: MAX_EDGE,
			fit: 'inside',
			withoutEnlargement: true,
		});
	}
	pipeline = isJpeg
		? pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true, progressive: true })
		: pipeline.png({ compressionLevel: 9, effort: 7 });
	return { out: await pipeline.toBuffer(), needsResize };
};

const perApp = new Map();
let before = 0;
let after = 0;
let changed = 0;

for (const file of files) {
	const original = readFileSync(file);
	const sizeBefore = statSync(file).size;
	const metadata = await sharp(original).metadata();
	const { out, needsResize } = await encode(file, original, metadata);
	if (!out.length || out.length >= sizeBefore) continue;

	const gain = 1 - out.length / sizeBefore;
	if (!needsResize && gain < MIN_GAIN) continue;

	const key = path.relative(repoRoot, file).split(path.sep).slice(0, 2).join('/');
	const acc = perApp.get(key) || { before: 0, after: 0, n: 0 };
	acc.before += sizeBefore;
	acc.after += out.length;
	acc.n += 1;
	perApp.set(key, acc);

	before += sizeBefore;
	after += out.length;
	changed += 1;

	if (!dry) writeFileSync(file, out);
}

const fmt = (b) => `${(b / 1048576).toFixed(1)} MB`;
console.log(
	`\n${dry ? '[dry] ' : ''}${changed} imagenes ${dry ? 'a reducir' : 'reducidas'} de ${files.length} revisadas.`,
);
if (changed) {
	console.log(`Peso: ${fmt(before)} -> ${fmt(after)} (-${Math.round((1 - after / before) * 100)}%).`);
	const top = [...perApp.entries()].sort((a, b) => b[1].before - b[1].after - (a[1].before - a[1].after));
	for (const [app, acc] of top.slice(0, 15)) {
		console.log(
			`  ${app.padEnd(38)} ${acc.n.toString().padStart(3)} fotos  ${fmt(acc.before)} -> ${fmt(acc.after)}`,
		);
	}
}
