// Valida enlaces internos rotos + JSON-LD en el build (dist/).
// Uso: `bun run build && node scripts/check-links.mjs` o `bun run qa`.
// Exit code 1 si hay rotos o JSON-LD inválido (útil en CI).
import fs from 'node:fs';
import path from 'node:path';
import { BLOG_POSTS } from '../src/data/BLOG_POSTS.ts';

const DIST = 'dist';
if (!fs.existsSync(DIST)) {
	console.error(`✖ ${DIST}/ no existe — ejecuta primero \`bun run build\`.`);
	process.exit(1);
}

const pages = new Set();
function walk(dir) {
	for (const f of fs.readdirSync(dir)) {
		const p = path.join(dir, f);
		if (fs.statSync(p).isDirectory()) walk(p);
		else if (f.endsWith('.html')) pages.add(p);
	}
}
walk(DIST);

if (pages.size === 0) {
	console.error(`✖ No se encontraron .html en ${DIST}/`);
	process.exit(1);
}

const pageSet = new Set();
for (const p of pages) {
	const rel = p.replace(/\\/g, '/').replace(/^dist\//, '');
	const url = `/${rel.replace(/index\.html$/, '')}`;
	pageSet.add(url.endsWith('/') ? url : `${url}/`);
}

const fileSet = new Set();
for (const p of pages) fileSet.add(p.replace(/\\/g, '/'));
function walkAll(dir) {
	for (const f of fs.readdirSync(dir)) {
		const p = path.join(dir, f);
		if (fs.statSync(p).isDirectory()) walkAll(p);
		else fileSet.add(p.replace(/\\/g, '/'));
	}
}
walkAll(DIST);

const broken = [];
for (const p of pages) {
	const html = fs.readFileSync(p, 'utf8');
	const hrefs = [...html.matchAll(/href="(\/[^"]*)"/g)].map((m) => m[1]);
	for (const h of hrefs) {
		const clean = h.split('#')[0].split('?')[0];
		if (!clean || clean.startsWith('//') || clean.startsWith('/api') || clean.startsWith('mailto:') || clean.startsWith('tel:')) continue;
		const asFile = `dist${clean}`;
		const norm = clean.endsWith('/') ? clean : `${clean}/`;
		const ok =
			pageSet.has(norm) ||
			pageSet.has(clean) ||
			fileSet.has(asFile) ||
			fileSet.has(`${asFile}/index.html`) ||
			/\.[a-z0-9]+$/i.test(clean);
		if (!ok) broken.push(`${p} -> ${h}`);
	}
}

console.log('Páginas:', pageSet.size);
console.log('Enlaces rotos:', broken.length);
for (const b of [...new Set(broken)].slice(0, 40)) console.log(' ', b);

// ── Validación JSON-LD ──
let invalid = 0;
let totalBlocks = 0;
for (const p of pages) {
	const html = fs.readFileSync(p, 'utf8');
	const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
	totalBlocks += blocks.length;
	for (const [, raw] of blocks) {
		try {
			JSON.parse(raw);
		} catch {
			invalid++;
			console.log('  JSON-LD inválido:', p);
		}
	}
}
console.log(`JSON-LD: ${totalBlocks} bloques, ${invalid} inválidos`);

// ── JSON-LD visible ──
// El contenido marcado como preguntas frecuentes tiene que poder LEERSE en la
// página: marcar FAQ que el usuario no ve es el patrón que Google castiga como
// spam de datos estructurados. /quienes-somos/ declaraba 6 preguntas que solo
// existían en el JSON-LD, así que este check queda como red de seguridad.
const decode = (s) =>
	s.replace(/&quot;/g, '"')
		.replace(/&#39;|&apos;/g, "'")
		.replace(/&amp;/g, '&')
		.replace(/&lt;/g, '<')
		.replace(/&gt;/g, '>')
		.replace(/\s+/g, ' ')
		.trim();

const hiddenFaq = [];
for (const p of pages) {
	const html = fs.readFileSync(p, 'utf8');
	const visible = decode(
		html.replace(/<script[\s\S]*?<\/script>/g, ' ').replace(/<[^>]+>/g, ' '),
	);
	const blocks = [...html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
	for (const [, raw] of blocks) {
		let data;
		try {
			data = JSON.parse(raw);
		} catch {
			continue;
		}
		const stack = [data];
		while (stack.length) {
			const node = stack.pop();
			if (!node || typeof node !== 'object') continue;
			if (Array.isArray(node)) {
				stack.push(...node);
				continue;
			}
			if (node['@type'] === 'FAQPage') {
				const questions = (Array.isArray(node.mainEntity) ? node.mainEntity : []).map((q) =>
					decode(q?.name ?? ''),
				);
				const missing = questions.filter((q) => q && !visible.includes(q));
				if (missing.length) hiddenFaq.push(`${p}: ${missing.length}/${questions.length} preguntas no visibles`);
			}
			for (const value of Object.values(node)) {
				if (value && typeof value === 'object') stack.push(value);
			}
		}
	}
}
console.log(`FAQ no visible en la página: ${hiddenFaq.length}`);
for (const h of hiddenFaq) console.log(' ', h);

// ── Kicker del artículo alineado con la categoría ──
// Cada artículo lleva su categoría escrita a mano en el <p> que abre el
// <article>, mientras el índice, los chips y los hubs la leen de BLOG_POSTS. Si
// no coinciden, la página dice una cosa y la taxonomía otra (pasaba en 20 de 48:
// "Derecho de consumo" conviviendo con "Consumo y banca", "La Subbética
// cordobesa" en la categoría "El despacho"…). El primer segmento del kicker debe
// ser la categoría; detrás puede ir el matiz editorial que se quiera.
const normalize = (s) =>
	s
		.normalize('NFD')
		.replace(/[\u0300-\u036f]/g, '')
		.toLowerCase()
		.trim();

const kickerMismatch = [];
for (const post of BLOG_POSTS) {
	const slug = post.href.replace(/^\/blog\//, '').replace(/\/$/, '');
	const file = path.join(DIST, 'blog', slug, 'index.html');
	if (!fs.existsSync(file)) {
		kickerMismatch.push(`${post.href}: no se encontró ${file}`);
		continue;
	}
	const html = fs.readFileSync(file, 'utf8');
	const match = html.match(/tracking-wide">\s*([^<]+?)\s*</);
	const kicker = match ? match[1].split('·')[0] : '';
	if (normalize(kicker) !== normalize(post.category)) {
		kickerMismatch.push(`${post.href}: kicker "${kicker}" ≠ categoría "${post.category}"`);
	}
}
console.log(`Artículos con kicker desalineado de su categoría: ${kickerMismatch.length}`);
for (const k of kickerMismatch) console.log(' ', k);

// ── Enlaces internos con la barra final ──
// El sitio se sirve con `trailingSlash: 'always'`. Un enlace a `/foo` responde
// 308 hacia `/foo/`: Google lo registra como «página con redirección» y gasta
// rastreo en una URL que nunca es la canónica. Este check impide que vuelvan a
// colarse enlaces de directorio sin la barra.
const missingSlash = [];
for (const p of pages) {
	const html = fs.readFileSync(p, 'utf8');
	for (const m of html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
		const pathname = m[1];
		if (pathname.endsWith('/') || /\.[a-z0-9]+$/i.test(pathname)) continue;
		missingSlash.push(`${p} -> ${m[0].slice(6, -1)}`);
	}
}
console.log(`Enlaces internos sin barra final: ${missingSlash.length}`);
for (const m of [...new Set(missingSlash)].slice(0, 40)) console.log(' ', m);

if (
	broken.length > 0 ||
	invalid > 0 ||
	hiddenFaq.length > 0 ||
	kickerMismatch.length > 0 ||
	missingSlash.length > 0
) {
	console.error(
		`\n✖ QA falló: ${broken.length} enlaces rotos, ${invalid} JSON-LD inválidos, ${hiddenFaq.length} FAQ ocultas, ${kickerMismatch.length} kickers desalineados, ${missingSlash.length} enlaces sin barra final`,
	);
	process.exitCode = 1;
} else {
	console.log('\n✔ QA OK');
}
