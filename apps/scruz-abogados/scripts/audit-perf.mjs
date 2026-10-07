// Auditoría de rendimiento del build (dist/)
import fs from 'node:fs';
import path from 'node:path';

const files = [];
function walk(dir) {
	for (const f of fs.readdirSync(dir)) {
		const p = path.join(dir, f);
		const st = fs.statSync(p);
		if (st.isDirectory()) walk(p);
		else files.push({ p: p.replace(/\\/g, '/'), size: st.size });
	}
}
walk('dist');

// Top 15 assets por tamaño
const sorted = [...files].sort((a, b) => b.size - a.size);
console.log('=== TOP 20 ASSETS MÁS PESADOS ===');
for (const f of sorted.slice(0, 20)) {
	console.log(`${(f.size / 1024).toFixed(0).padStart(6)} KB  ${f.p}`);
}

// Peso HTML por página (solo index.html)
const htmlPages = files.filter((f) => f.p.endsWith('/index.html')).sort((a, b) => b.size - a.size);
console.log('\n=== PESO HTML POR PÁGINA (top 10) ===');
for (const f of htmlPages.slice(0, 10)) {
	console.log(`${(f.size / 1024).toFixed(0).padStart(5)} KB  ${f.p}`);
}
console.log(`\nTotal archivos: ${files.length} · Peso total: ${(files.reduce((a, f) => a + f.size, 0) / 1024 / 1024).toFixed(1)} MB`);

// Conteo por extensión
const byExt = {};
for (const f of files) {
	const ext = path.extname(f.p) || '(sin ext)';
	byExt[ext] = (byExt[ext] ?? 0) + f.size;
}
console.log('\n=== PESO POR TIPO ===');
Object.entries(byExt)
	.sort((a, b) => b[1] - a[1])
	.slice(0, 10)
	.forEach(([ext, size]) => console.log(`${(size / 1024 / 1024).toFixed(2).padStart(7)} MB  ${ext || '(sin ext)'}`));

// ==== Análisis de imágenes en TODAS las páginas ====
// Detecta regresiones de rendimiento: imágenes sin width/height (CLS),
// eager sin fetchpriority (descarga innecesaria / LCP mal priorizado),
// y assets pesados que ningún HTML referencia (basura en el deploy).
const issues = [];
const eagerCount = new Map();

for (const f of htmlPages) {
	const html = fs.readFileSync(f.p, 'utf8');
	const imgs = [...html.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
	for (const img of imgs) {
		const src = img.match(/src="([^"]*)"/)?.[1] ?? '?';
		const hasW = /width="(\d+)"/.test(img);
		const hasH = /height="(\d+)"/.test(img);
		const eager = /loading="eager"/.test(img);
		const high = /fetchpriority="high"/.test(img);
		const inlineSvg = src.startsWith('data:') || src.endsWith('.svg');

		// 1. CLS: img sin width o height (excepto SVG inline, que no reserva layout)
		if ((!hasW || !hasH) && !inlineSvg) {
			issues.push(`${f.p}: <img> sin width/height → ${src.slice(0, 60)}`);
		}
		// 2. Eager sin fetchpriority en assets grandes: descarga innecesaria
		// (los logos/iconos pequeños son legítimos como eager)
		const assetPath = src.startsWith('/') ? `dist${src}` : null;
		const assetSize = assetPath && fs.existsSync(assetPath) ? fs.statSync(assetPath).size : 0;
		if (eager && !high && !inlineSvg && assetSize > 20 * 1024) {
			eagerCount.set(src, (eagerCount.get(src) ?? 0) + 1);
		}
	}
}

if (issues.length > 0) {
	console.log('\n=== ⚠️ IMÁGENES SIN width/height (riesgo CLS) ===');
	for (const i of issues) console.log(`  ${i}`);
}

if (eagerCount.size > 0) {
	console.log('\n=== ⚠️ IMÁGENES EAGER SIN fetchpriority ===');
	for (const [src, n] of eagerCount) console.log(`  (${n} páginas)  ${src}`);
}

// 3. Assets pesados (> 40 KB) que ningún HTML referencia → basura desplegada
// (p. ej. capturas de desarrollo en public/screenshots). Se buscan también en
// CSS/JS porque pueden ser fondos o imágenes referenciadas desde ahí.
const referenced = new Set();
for (const f of files) {
	if (/\.(html|css|js)$/.test(f.p)) {
		const content = fs.readFileSync(f.p, 'utf8');
		// El nombre puede contener puntos internos (hash de Astro: 319e...uTilN9ED.jpg)
		for (const m of content.matchAll(/[A-Za-z0-9._-]+\.(webp|avif|jpg|jpeg|png|svg|gif)/g)) {
			referenced.add(m[0]);
		}
	}
}
const orphanAssets = files
	.filter((f) => /\.(webp|avif|jpg|jpeg|png|gif)$/.test(f.p) && f.size > 40 * 1024)
	.filter((f) => !referenced.has(path.basename(f.p)))
	.sort((a, b) => b.size - a.size);

if (orphanAssets.length > 0) {
	console.log('\n=== ⚠️ ASSETS PESADOS SIN REFERENCIAR (candidatos a podar) ===');
	for (const f of orphanAssets) {
		console.log(`  ${(f.size / 1024).toFixed(0).padStart(5)} KB  ${f.p}`);
	}
}