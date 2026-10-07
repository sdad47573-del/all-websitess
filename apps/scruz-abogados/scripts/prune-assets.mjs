// Recorte post-build: elimina los formatos de fuente legacy de remixicon
// (eot/ttf/svg/woff) y deja solo woff2, soportado por todos los navegadores
// desde 2016 (incluido el Chrome de Googlebot). Ahorra ~4 MB del deploy y
// evita que un motor antiguo descargue el SVG de 2,9 MB.
// Además: elimina contenido de desarrollo de public/ (screenshots, fuentes
// descartadas) y optimiza los favicons PNG del deploy sin tocar los fuentes.
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const dist = 'dist/_astro';
if (!fs.existsSync(dist)) {
	console.log('(skip) dist/_astro no existe — nada que podar');
	process.exit(0);
}
const KEEP = ['.woff2'];

let removed = 0;
const cssChanged = [];

// Contenido de public/ que no debe llegar al deploy:
//  - public/screenshots/: capturas de desarrollo (~0,5 MB), sin referencias.
//  - public/fonts/figtree/: fuentes descartadas (no referenciadas en ningún CSS).
// Se eliminan del build sin tocar los fuentes (siguen en el repo/git).
for (const dir of ['dist/screenshots', 'dist/fonts/figtree']) {
	if (fs.existsSync(dir)) {
		const files = fs.readdirSync(dir);
		fs.rmSync(dir, { recursive: true, force: true });
		console.log(`Directorio de desarrollo eliminado del build: ${dir} (${files.length} archivos)`);
	}
}

// Favicons: los PNG son el logo plano del despacho (pocos colores), así que la
// cuantización a paleta los reduce ~75% sin pérdida perceptible
// (~400 KB → ~120 KB en el deploy). Los .ico no los toca sharp.
async function optimizeFavicons() {
	const faviconDir = 'dist/favicon';
	if (!fs.existsSync(faviconDir)) return;
	const files = [];
	(function walk(dir) {
		for (const f of fs.readdirSync(dir)) {
			const full = path.join(dir, f);
			if (fs.statSync(full).isDirectory()) walk(full);
			else if (f.endsWith('.png')) files.push(full);
		}
	})(faviconDir);
	for (const full of files) {
		try {
			const before = fs.statSync(full).size;
			const out = await sharp(full).png({ palette: true, quality: 90 }).toBuffer();
			if (out.length < before) {
				fs.writeFileSync(full, out);
				console.log(
					`Favicon optimizado: ${full.replace(/\\/g, '/').replace('dist/', '')} (${(before / 1024).toFixed(0)} → ${(out.length / 1024).toFixed(0)} KB)`,
				);
			}
		} catch (e) {
			console.log(`(skip) ${path.basename(full)}: ${e.message}`);
		}
	}
}

await optimizeFavicons();

for (const f of fs.readdirSync(dist)) {
	const full = path.join(dist, f);
	if (!fs.statSync(full).isFile()) continue;
	const ext = path.extname(f).toLowerCase();

	if (f.startsWith('remixicon.') && !KEEP.includes(ext)) {
		fs.unlinkSync(full);
		removed++;
		continue;
	}

	if (f.endsWith('.css')) {
		const css = fs.readFileSync(full, 'utf8');
		const pruned = css.replace(
			/@font-face\{[^}]*font-family:remixicon[^}]*\}/g,
			(match) => {
				const woff2 = match.match(/url\([^)]*\.woff2[^)]*\)/)?.[0];
				if (!woff2) return match;
				return `@font-face{font-family:remixicon;src:${woff2} format("woff2");font-display:swap}`;
			},
		);
		if (pruned !== css) {
			fs.writeFileSync(full, pruned);
			cssChanged.push(f);
		}
	}
}

console.log(`Fuentes legacy eliminadas: ${removed}`);
console.log(`CSS actualizados: ${cssChanged.join(', ') || '(ninguno)'}`);