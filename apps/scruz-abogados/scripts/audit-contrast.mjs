/**
 * Auditoría de contraste de texto (WCAG 2.1 AA, criterio 1.4.3) sobre el build.
 *
 * Recorre todas las páginas de dist/ en varios anchos y, para cada nodo de
 * texto visible, mide el contraste REAL contra los píxeles que quedan detrás de
 * los glifos. No deduce el fondo del CSS: oculta la tinta con
 * `-webkit-text-fill-color: transparent`, captura la página completa y muestrea
 * los píxeles bajo cada rectángulo de texto. Así se resuelven bien los fondos
 * sólidos, semitransparentes, los degradados y las fotos — que un cálculo
 * estático (subir por los ancestros buscando un background-color opaco) no
 * puede cubrir.
 *
 * Umbrales aplicados (WCAG 2.1 AA):
 *   - texto normal .................... 4,5:1
 *   - texto grande (>= 24 px, o >= 18,66 px con peso >= 700) ... 3:1
 *
 * Del conjunto de píxeles de cada texto se descarta el 2 % peor antes de
 * decidir: un icono que se solape con la línea o un píxel de borde no debería
 * marcar un falso positivo, pero un fondo oscuro bajo toda la palabra sí.
 *
 * Uso:
 *   bun run build
 *   bun scripts/audit-contrast.mjs
 *   bun scripts/audit-contrast.mjs --viewport=escritorio
 *   bun scripts/audit-contrast.mjs --page=servicios --out=contrast-report.md
 *
 * Opciones:
 *   --viewport=escritorio|movil   limita a un ancho
 *   --page=<subcadena>            limita a las rutas que contengan la subcadena
 *   --theme=light|dark            audita el tema oscuro (fija la preferencia
 *                                 del interruptor antes de cargar cada página)
 *   --out=<archivo>               informe completo (por defecto contrast-report.md)
 *   --max-detail=<n>              filas de detalle en consola (por defecto 40)
 */

import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { chromium } from 'playwright';
import sharp from 'sharp';

const DIST = path.resolve('dist');
if (!fs.existsSync(DIST)) {
	console.error('No existe dist/. Ejecuta `bun run build` antes.');
	process.exit(1);
}

const args = process.argv.slice(2);
const opt = (name, def) => {
	const hit = args.find((a) => a.startsWith(`--${name}=`));
	return hit ? hit.slice(name.length + 3) : def;
};

const PAGE_FILTER = opt('page', '');
const VIEWPORT_FILTER = opt('viewport', '');
const THEME = opt('theme', 'light');
const OUT_FILE = opt('out', `contrast-report${THEME === 'dark' ? '-dark' : ''}.md`);
const MAX_DETAIL = Number(opt('max-detail', '40'));

const VIEWPORTS = [
	{ name: 'escritorio', width: 1280, height: 900 },
	{ name: 'movil', width: 390, height: 844 },
].filter((v) => !VIEWPORT_FILTER || v.name === VIEWPORT_FILTER);

if (!VIEWPORTS.length) {
	console.error(`--viewport debe ser "escritorio" o "movil" (recibido: ${VIEWPORT_FILTER})`);
	process.exit(1);
}

// ---------------------------------------------------------------- utilidades

const MIME = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.js': 'text/javascript; charset=utf-8',
	'.mjs': 'text/javascript; charset=utf-8',
	'.json': 'application/json; charset=utf-8',
	'.xml': 'application/xml; charset=utf-8',
	'.txt': 'text/plain; charset=utf-8',
	'.webmanifest': 'application/manifest+json',
	'.svg': 'image/svg+xml',
	'.webp': 'image/webp',
	'.avif': 'image/avif',
	'.png': 'image/png',
	'.jpg': 'image/jpeg',
	'.jpeg': 'image/jpeg',
	'.gif': 'image/gif',
	'.ico': 'image/x-icon',
	'.woff2': 'font/woff2',
};

/** Servidor estático mínimo sobre dist/ (resuelve /ruta/ -> dist/ruta/index.html). */
function startServer() {
	const server = http.createServer((req, res) => {
		const urlPath = decodeURIComponent((req.url ?? '/').split('?')[0]);
		let file = path.join(DIST, urlPath);
		if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
			const index = path.join(DIST, urlPath, 'index.html');
			file = fs.existsSync(index) ? index : '';
		}
		if (!file) {
			res.writeHead(404, { 'content-type': 'text/plain' });
			res.end('not found');
			return;
		}
		res.writeHead(200, {
			'content-type': MIME[path.extname(file)] ?? 'application/octet-stream',
			'cache-control': 'no-store',
		});
		fs.createReadStream(file).pipe(res);
	});
	return new Promise((resolve) => {
		server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port }));
	});
}

/** Rutas de todas las páginas construidas. */
function listPages() {
	const out = [];
	(function walk(dir) {
		for (const name of fs.readdirSync(dir)) {
			const full = path.join(dir, name);
			if (fs.statSync(full).isDirectory()) {
				walk(full);
				continue;
			}
			if (!name.endsWith('.html')) continue;
			let rel = path.relative(DIST, full).split(path.sep).join('/');
			if (/^(404|500)\.html$/.test(rel)) continue;
			if (rel === 'index.html') rel = '';
			else rel = rel.replace(/index\.html$/, '');
			out.push('/' + rel);
		}
	})(DIST);
	return out.sort();
}

/**
 * Lanza Chromium de la forma más tolerante posible: la build que espera la
 * versión instalada de Playwright puede no estar descargada, así que se cae a
 * `channel: 'chrome'` (navegador del sistema) y, si tampoco, a cualquier
 * Chromium que haya en la caché de ms-playwright.
 */
async function launchBrowser() {
	const attempts = [
		{ label: 'chromium de Playwright', options: {} },
		{ label: 'Chrome del sistema', options: { channel: 'chrome' } },
	];

	const cacheRoots = [
		process.env.PLAYWRIGHT_BROWSERS_PATH,
		process.platform === 'win32' ? path.join(process.env.LOCALAPPDATA ?? '', 'ms-playwright') : '',
		path.join(process.env.HOME ?? process.env.USERPROFILE ?? '', '.cache', 'ms-playwright'),
		path.join(process.env.HOME ?? process.env.USERPROFILE ?? '', 'Library', 'Caches', 'ms-playwright'),
	].filter(Boolean);

	for (const root of cacheRoots) {
		if (!fs.existsSync(root)) continue;
		const builds = fs
			.readdirSync(root)
			.filter((d) => /^(chromium|chromium_headless_shell)-\d+$/.test(d))
			.sort((a, b) => Number(b.split('-')[1]) - Number(a.split('-')[1]));
		for (const build of builds) {
			for (const rel of [
				['chrome-win64', 'chrome.exe'],
				['chrome-headless-shell-win64', 'chrome-headless-shell.exe'],
				['chrome-linux', 'chrome'],
				['chrome-headless-shell-linux64', 'chrome-headless-shell'],
				['chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium'],
			]) {
				const exe = path.join(root, build, ...rel);
				if (fs.existsSync(exe)) attempts.push({ label: `${build} en caché`, options: { executablePath: exe } });
			}
		}
	}

	const errors = [];
	for (const attempt of attempts) {
		try {
			const browser = await chromium.launch(attempt.options);
			console.log(`Navegador: ${attempt.label}\n`);
			return browser;
		} catch (error) {
			errors.push(`${attempt.label}: ${error.message.split('\n')[0]}`);
		}
	}
	console.error('No se pudo lanzar ningún navegador:');
	for (const e of errors) console.error(`  - ${e}`);
	console.error('\nSugerencia: `npx playwright install chromium` o instala Google Chrome.');
	process.exit(1);
}

const srgb = (v) => {
	v /= 255;
	return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
};
const luminance = ([r, g, b]) => 0.2126 * srgb(r) + 0.7152 * srgb(g) + 0.0722 * srgb(b);
const contrastRatio = (a, b) => {
	const l1 = luminance(a);
	const l2 = luminance(b);
	return (Math.max(l1, l2) + 0.05) / (Math.min(l1, l2) + 0.05);
};
/** Compone el color del texto (si tiene alfa) sobre el píxel de fondo. */
const over = (fg, bg) =>
	fg.a >= 1
		? [fg.r, fg.g, fg.b]
		: [
				fg.r * fg.a + bg[0] * (1 - fg.a),
				fg.g * fg.a + bg[1] * (1 - fg.a),
				fg.b * fg.a + bg[2] * (1 - fg.a),
			];
const hex = ([r, g, b]) =>
	'#' + [r, g, b].map((v) => Math.round(v).toString(16).padStart(2, '0')).join('');

// ------------------------------------------------------- recogida en la página

/**
 * Se ejecuta DENTRO del navegador. Devuelve un registro por nodo de texto
 * visible: contenido, color ya normalizado a rgb, tamaño, peso y los
 * rectángulos de sus líneas (los de `getClientRects`, que ajustan a los glifos
 * y no al bloque contenedor).
 */
function collectTextItems() {
	const items = [];
	const canvas = document.createElement('canvas');
	const ctx = canvas.getContext('2d', { willReadFrequently: true });

	// Normaliza cualquier notación CSS de color (oklch, color-mix, rgba…) a rgb.
	const toRgb = (css) => {
		ctx.fillStyle = '#000';
		ctx.fillStyle = css;
		ctx.fillRect(0, 0, 1, 1);
		const d = ctx.getImageData(0, 0, 1, 1).data;
		return { r: d[0], g: d[1], b: d[2], a: d[3] / 255 };
	};

	const describe = (el) => {
		const parts = [];
		let cur = el;
		while (cur && cur !== document.body && parts.length < 3) {
			let s = cur.tagName.toLowerCase();
			if (cur.id) s += `#${cur.id}`;
			const cls = (cur.getAttribute('class') || '').trim().split(/\s+/).filter(Boolean).slice(0, 3);
			if (cls.length) s += `.${cls.join('.')}`;
			parts.unshift(s);
			cur = cur.parentElement;
		}
		return parts.join(' > ');
	};

	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
	let node;
	while ((node = walker.nextNode())) {
		const raw = node.nodeValue;
		if (!raw || !raw.trim()) continue;
		const el = node.parentElement;
		if (!el) continue;
		// <title>/<desc> dentro de SVG no se pintan; script/style tampoco.
		if (el.closest('script, style, noscript, template, svg, title, desc')) continue;

		const cs = getComputedStyle(el);
		if (cs.display === 'none' || cs.visibility === 'hidden') continue;
		if (parseFloat(cs.opacity) === 0) continue;
		// Color transparente = texto recortado (background-clip: text) o decorativo.
		const color = toRgb(cs.color);
		if (color.a === 0) continue;

		const range = document.createRange();
		range.selectNodeContents(node);
		const rects = [...range.getClientRects()]
			.filter((r) => r.width >= 1 && r.height >= 1)
			.slice(0, 12)
			.map((r) => ({ x: r.x, y: r.y, w: r.width, h: r.height }));
		if (!rects.length) continue;

		items.push({
			text: raw.replace(/\s+/g, ' ').trim().slice(0, 70),
			color,
			size: parseFloat(cs.fontSize),
			weight: parseInt(cs.fontWeight, 10) || 400,
			sel: describe(el),
			rects,
		});
	}
	return items;
}

// ------------------------------------------------------------------ muestreo

function sampleContrast(raw, info, items) {
	const { width: W, height: H, channels: C } = info;
	const results = [];

	for (const item of items) {
		const ratios = [];
		const bgs = [];
		for (const rect of item.rects) {
			const x0 = Math.max(0, Math.floor(rect.x));
			const y0 = Math.max(0, Math.floor(rect.y));
			const x1 = Math.min(W, Math.ceil(rect.x + rect.w));
			const y1 = Math.min(H, Math.ceil(rect.y + rect.h));
			if (x1 <= x0 || y1 <= y0) continue;
			const stepX = Math.max(1, Math.floor((x1 - x0) / 60));
			const stepY = Math.max(1, Math.floor((y1 - y0) / 20));
			for (let y = y0; y < y1; y += stepY) {
				for (let x = x0; x < x1; x += stepX) {
					const o = (y * W + x) * C;
					const bg = [raw[o], raw[o + 1], raw[o + 2]];
					ratios.push(contrastRatio(over(item.color, bg), bg));
					bgs.push(bg);
				}
			}
		}
		if (!ratios.length) continue;

		ratios.sort((a, b) => a - b);
		// Descartamos el 2 % peor de píxeles para no marcar iconos/bordes sueltos.
		const pick = Math.min(ratios.length - 1, Math.floor(ratios.length * 0.02));
		const worst = ratios[0];
		const robust = ratios[pick];

		bgs.sort((a, b) => luminance(a) - luminance(b));
		const bgMedian = bgs[Math.floor(bgs.length / 2)] ?? [255, 255, 255];
		const spread = luminance(bgs[bgs.length - 1]) - luminance(bgs[0]);

		const large = item.size >= 24 || (item.size >= 18.66 && item.weight >= 700);
		const required = large ? 3 : 4.5;

		results.push({
			text: item.text,
			sel: item.sel,
			size: item.size,
			weight: item.weight,
			large,
			required,
			ratio: robust,
			worstRatio: worst,
			color: hex([item.color.r, item.color.g, item.color.b]),
			bg: hex(bgMedian),
			// Un fondo con mucha variación de luminancia = imagen o degradado.
			busyBackground: spread > 0.08,
			pass: robust >= required,
		});
	}
	return results;
}

// ------------------------------------------------------------------ ejecución

const { server, port } = await startServer();
const baseUrl = `http://127.0.0.1:${port}`;
const pages = listPages().filter((p) => !PAGE_FILTER || p.includes(PAGE_FILTER));

console.log('=== AUDITORÍA DE CONTRASTE — WCAG 2.1 AA (1.4.3) ===');
console.log(`Tema: ${THEME}`);
console.log(`Páginas: ${pages.length} · anchos: ${VIEWPORTS.map((v) => `${v.name} ${v.width}px`).join(', ')}`);
console.log('Midiendo…\n');

const browser = await launchBrowser();
const failures = [];
let measured = 0;
let skippedPages = 0;

for (const viewport of VIEWPORTS) {
	const context = await browser.newContext({
		viewport: { width: viewport.width, height: viewport.height },
		deviceScaleFactor: 1,
		reducedMotion: 'reduce',
	});
	// Tema oscuro: se escribe la preferencia del interruptor (la misma clave que
	// lee el script del layout) antes de cargar cada página, igual que un usuario
	// que ya la tiene guardada.
	if (THEME === 'dark') {
		await context.addInitScript(() => {
			try {
				localStorage.setItem('scruz-theme', 'dark');
			} catch {
				/* almacenamiento bloqueado: no se puede forzar el tema */
			}
		});
	}
	// Sin red externa: las fuentes son propias y los mapas de terceros solo
	// emborronarían la muestra. Acelera el recorrido y evita dependencias.
	await context.route('**', (route) => {
		if (route.request().url().startsWith(baseUrl)) route.continue();
		else route.abort();
	});
	const page = await context.newPage();

	for (const routePath of pages) {
		try {
			await page.goto(baseUrl + routePath, { waitUntil: 'load', timeout: 20000 });
			await page.evaluate(() => document.fonts.ready);
			// Forzamos la carga de las imágenes diferidas para que la captura
			// muestre el fondo real y no un hueco.
			await page.evaluate(() => {
				for (const img of document.querySelectorAll('img[loading="lazy"]')) img.loading = 'eager';
			});
			await page.waitForTimeout(250);
			await page.evaluate(() => {
				window.scrollTo(0, 0);
				const style = document.createElement('style');
				style.textContent = '*,*::before,*::after{animation:none!important;transition:none!important}';
				document.head.append(style);
			});
			await page.waitForTimeout(100);

			const items = await page.evaluate(collectTextItems);
			if (!items.length) continue;

			// Ocultamos solo la tinta: fondos, bordes e iconos se mantienen.
			await page.addStyleTag({
				content: '*, *::before, *::after { -webkit-text-fill-color: transparent !important; }',
			});
			const shot = await page.screenshot({ fullPage: true, animations: 'disabled' });
			const { data, info } = await sharp(shot).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

			const results = sampleContrast(data, info, items);
			measured += results.length;
			for (const r of results) {
				if (!r.pass) failures.push({ ...r, page: routePath, viewport: viewport.name });
			}
		} catch (error) {
			skippedPages++;
			console.log(`  (omitida) ${routePath} @ ${viewport.name}: ${error.message.split('\n')[0]}`);
		}
	}
	await context.close();
}

await browser.close();
server.close();

// -------------------------------------------------------------------- informe

const byRatio = [...failures].sort((a, b) => a.ratio - b.ratio);
const normalFails = failures.filter((f) => !f.large);
const largeFails = failures.filter((f) => f.large);

// Agrupamos por causa (color + fondo + tamaño/peso): es lo accionable, porque
// un mismo par de colores suele repetirse en muchas páginas.
const groups = new Map();
for (const f of failures) {
	const key = `${f.color} sobre ${f.bg} · ${f.size}px/${f.weight}${f.busyBackground ? ' · fondo con imagen' : ''}`;
	if (!groups.has(key)) groups.set(key, { key, items: [] });
	groups.get(key).items.push(f);
}
const grouped = [...groups.values()].sort((a, b) => b.items.length - a.items.length);

const lines = [];
lines.push(`# Auditoría de contraste — WCAG 2.1 AA (1.4.3)`);
lines.push('');
lines.push(`- Páginas auditadas: **${pages.length}** en ${VIEWPORTS.map((v) => `${v.name} (${v.width}px)`).join(' y ')}`);
lines.push(`- Textos medidos: **${measured}**`);
lines.push(`- Incumplimientos: **${failures.length}** (texto normal: ${normalFails.length} · texto grande: ${largeFails.length})`);
if (skippedPages) lines.push(`- Páginas omitidas por error de carga: ${skippedPages}`);
lines.push('');
lines.push('El contraste se mide sobre los píxeles reales detrás de cada texto, descartando el 2 % peor (iconos, bordes).');
lines.push('');
lines.push('## Causas agrupadas (lo accionable)');
lines.push('');
lines.push('| Apariciones | Color | Fondo | Tamaño/peso | Ratio mín. | Necesita | Ejemplo |');
lines.push('|---|---|---|---|---|---|---|');
for (const g of grouped) {
	const worst = g.items.reduce((a, b) => (a.ratio < b.ratio ? a : b));
	lines.push(
		`| ${g.items.length} | \`${worst.color}\` | \`${worst.bg}\`${worst.busyBackground ? ' (imagen)' : ''} | ${worst.size}px/${worst.weight} | ${worst.ratio.toFixed(2)}:1 | ${worst.required}:1 | \`${worst.page}\` |`,
	);
}
lines.push('');
lines.push('## Detalle por página');
lines.push('');
let currentPage = '';
for (const f of byRatio) {
	const id = `${f.page} @ ${f.viewport}`;
	if (id !== currentPage) {
		currentPage = id;
		lines.push('');
		lines.push(`### \`${f.page}\` — ${f.viewport}`);
		lines.push('');
		lines.push('| Ratio | Necesita | Texto | Color | Fondo | Tamaño/peso | Selector |');
		lines.push('|---|---|---|---|---|---|---|');
	}
	lines.push(
		`| ${f.ratio.toFixed(2)}:1 | ${f.required}:1 | ${f.text.replace(/\|/g, '\\|')} | \`${f.color}\` | \`${f.bg}\`${f.busyBackground ? ' (imagen)' : ''} | ${f.size}px/${f.weight} | \`${f.sel}\` |`,
	);
}
if (!failures.length) lines.push('Sin incumplimientos. 🎉');

fs.writeFileSync(OUT_FILE, lines.join('\n') + '\n', 'utf8');

// ------------------------------------------------------------------ consola

console.log(`Textos medidos: ${measured}`);
console.log(`Incumplimientos: ${failures.length} (texto normal: ${normalFails.length} · texto grande: ${largeFails.length})`);
if (skippedPages) console.log(`(páginas omitidas: ${skippedPages})`);
console.log('');

console.log('=== CAUSAS AGRUPADAS ===');
for (const g of grouped) {
	const worst = g.items.reduce((a, b) => (a.ratio < b.ratio ? a : b));
	console.log(
		`  ${String(g.items.length).padStart(4)}×  ${worst.color} sobre ${worst.bg}${worst.busyBackground ? ' (imagen)' : ''}` +
			`  ${worst.size}px/${worst.weight}  ${worst.ratio.toFixed(2)}:1 (necesita ${worst.required}:1)`,
	);
}

if (byRatio.length) {
	console.log('');
	console.log(`=== PEORES CASOS (top ${Math.min(MAX_DETAIL, byRatio.length)}) ===`);
	for (const f of byRatio.slice(0, MAX_DETAIL)) {
		console.log(`  ${f.ratio.toFixed(2)}:1  "${f.text}"`);
		console.log(
			`         ${f.color} sobre ${f.bg} · ${f.size}px/${f.weight} · ${f.page} @ ${f.viewport}`,
		);
	}
}

console.log('');
console.log(`Informe completo: ${OUT_FILE}`);
