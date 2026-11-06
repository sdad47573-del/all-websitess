// Genera public/og.jpg para las webs que no tienen ninguna imagen Open Graph.
//
// La tarjeta es original (no una foto del local): fondo con el color del favicon,
// nombre real del negocio, ciudad, lema y dominio. Se rasteriza con sharp, la misma
// dependencia que usa scripts/og-svg-to-png.mjs, porque Facebook, WhatsApp y X no
// interpretan SVG.
//
// Uso (desde la raíz del monorepo):
//   node scripts/generate-og.mjs             genera solo las que no tienen og.*
//   node scripts/generate-og.mjs --dry-run   enseña qué haría
//   node scripts/generate-og.mjs --only slug otra-web
//
// Es idempotente: si la app ya tiene og.jpg/png/webp/svg, no se toca.

import { existsSync, mkdirSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';

const APPS_DIR = 'apps';
const WIDTH = 1200;
const HEIGHT = 630;
const DRY = process.argv.includes('--dry-run');
const FORCE = process.argv.includes('--force');
const onlyIndex = process.argv.indexOf('--only');
const ONLY = onlyIndex > -1 ? process.argv.slice(onlyIndex + 1).filter((a) => !a.startsWith('--')) : [];

// Sobrescribir OG existentes solo tiene sentido sobre una lista explícita: si no,
// se pisarían fotos reales de webs que ya tenían su tarjeta.
if (FORCE && ONLY.length === 0) {
	console.error('--force requiere --only con las apps a regenerar.');
	process.exit(1);
}

// sharp está declarado en muchas apps, pero no en todas: se toma la primera que lo
// tenga instalado en lugar de fijar una ruta que puede cambiar.
function loadSharp() {
	const packages = readdirSync(APPS_DIR, { withFileTypes: true })
		.filter((d) => d.isDirectory())
		.map((d) => join(APPS_DIR, d.name, 'package.json'))
		.filter((p) => existsSync(p) && readFileSync(p, 'utf8').includes('"sharp"'));
	for (const pkg of packages) {
		try {
			return createRequire(resolve(pkg))('sharp');
		} catch {
			// app sin node_modules instalado: se prueba la siguiente
		}
	}
	return null;
}

const sharp = loadSharp();
if (!sharp) {
	console.error('No se encuentra sharp en ninguna app. Ejecuta `pnpm install` y reintenta.');
	process.exit(1);
}

const read = (p) => (existsSync(p) ? readFileSync(p, 'utf8') : '');
const escapeXml = (s) =>
	String(s)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

function field(src, keys) {
	for (const key of keys) {
		// Los site.ts usan `name: '…'`, pero algunos declaran `SITE_NAME = '…'`.
		const m = src.match(new RegExp(`\\b${key}\\s*[:=]\\s*['"\`]([^'"\`]+)['"\`]`));
		if (m && m[1].trim()) return m[1].trim();
	}
	return '';
}

function hexToRgb(hex) {
	const clean = hex.replace('#', '');
	const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean.slice(0, 6);
	return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
}

const luminance = (hex) => {
	const [r, g, b] = hexToRgb(hex).map((v) => {
		const c = v / 255;
		return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Si el color de marca es claro, se oscurece para que el texto blanco se lea.
function readableBackground(hex) {
	if (luminance(hex) <= 0.45) return hex;
	const [r, g, b] = hexToRgb(hex).map((v) => Math.round(v * 0.42));
	return `#${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('')}`;
}

function wrapWords(text, maxChars, maxLines = 2) {
	const words = text.split(/\s+/).filter(Boolean);
	const lines = [];
	let line = '';
	for (const word of words) {
		const next = line ? `${line} ${word}` : word;
		if (next.length <= maxChars || !line) line = next;
		else {
			lines.push(line);
			line = word;
		}
	}
	if (line) lines.push(line);
	if (lines.length <= maxLines) return lines;
	const kept = lines.slice(0, maxLines);
	kept[maxLines - 1] = `${kept[maxLines - 1].replace(/[,;:.]+$/, '')}…`;
	return kept;
}

function cardSvg({ name, tagline, city, url, color, accent }) {
	const background = readableBackground(color);
	const lines = wrapWords(name, name.length > 30 ? 26 : 22);
	const longest = Math.max(...lines.map((l) => l.length));
	const size = longest > 26 ? 60 : longest > 20 ? 70 : 82;
	const lineHeight = Math.round(size * 1.08);
	const firstY = lines.length > 1 ? 300 : 348;
	const afterName = firstY + (lines.length - 1) * lineHeight;

	const eyebrow = city.toUpperCase();
	const domain = url.replace(/^https?:\/\//, '').replace(/\/$/, '');

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
	<rect width="${WIDTH}" height="${HEIGHT}" fill="${background}"/>
	<g opacity=".22" stroke="#ffffff" fill="none">
		<circle cx="1010" cy="250" r="210"/>
		<circle cx="1010" cy="250" r="150"/>
	</g>
	<path d="M0 472q300-84 600 6t600-16v168H0z" fill="#000" opacity=".2"/>
	<rect x="90" y="96" width="54" height="4" fill="${accent}"/>
	${eyebrow ? `<text x="90" y="150" fill="#ffffff" opacity=".78" font-family="Arial, sans-serif" font-size="20" letter-spacing="4">${escapeXml(eyebrow)}</text>` : ''}
	${lines
		.map(
			(line, i) =>
				`<text x="86" y="${firstY + i * lineHeight}" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="${size}">${escapeXml(line)}</text>`,
		)
		.join('')}
	<rect x="90" y="${afterName + 52}" width="92" height="3" fill="${accent}"/>
	${tagline ? `<text x="90" y="${afterName + 100}" fill="#ffffff" opacity=".82" font-family="Arial, sans-serif" font-size="22">${escapeXml(tagline)}</text>` : ''}
	<text x="90" y="566" fill="#ffffff" opacity=".62" font-family="Arial, sans-serif" font-size="15">Ilustración original · no es una fotografía del establecimiento</text>
	<text x="1110" y="566" text-anchor="end" fill="#ffffff" opacity=".72" font-family="Arial, sans-serif" font-size="15">${escapeXml(domain)}</text>
</svg>`;
}

const hasAnyOg = (dir) =>
	existsSync(join(dir, 'public')) &&
	readdirSync(join(dir, 'public')).some((f) => /^og\.(jpe?g|png|webp|svg)$/i.test(f));

const apps = readdirSync(APPS_DIR, { withFileTypes: true })
	.filter((d) => d.isDirectory())
	.map((d) => d.name)
	.filter((a) => existsSync(join(APPS_DIR, a, 'src/data/site.ts')))
	.filter((a) => ONLY.length === 0 || ONLY.includes(a));

const created = [];
const skipped = [];
const failed = [];

for (const app of apps) {
	const root = join(APPS_DIR, app);
	if (hasAnyOg(root) && !(FORCE && ONLY.includes(app))) {
		skipped.push(app);
		continue;
	}

	const src = read(join(root, 'src/data/site.ts'));
	const name = field(src, ['name', 'fullName', 'businessName', 'SITE_NAME']);
	const tagline = field(src, ['tagline', 'claim', 'subtitle', 'SITE_TAGLINE']);
	const city = field(src, ['city', 'locality', 'municipio']);
	const url = field(src, ['siteUrl', 'url', 'canonical', 'SITE_URL']);
	const favicon = read(join(root, 'public/favicon.svg'));
	const colors = [...new Set((favicon.match(/#[0-9a-fA-F]{6}\b/g) ?? []).map((c) => c.toLowerCase()))];
	const color = colors[0] ?? '#24503f';
	const accent = colors.find((c) => c !== color) ?? '#e2b34a';

	if (!name) {
		failed.push(`${app}: sin nombre en src/data/site.ts`);
		continue;
	}

	if (DRY) {
		created.push({ app, name, kb: 0 });
		continue;
	}

	mkdirSync(join(root, 'public'), { recursive: true });
	const svg = cardSvg({ name, tagline, city, url: url || `${app}.vercel.app`, color, accent });
	const out = join(root, 'public/og.jpg');
	const info = await sharp(Buffer.from(svg))
		.jpeg({ quality: 88 })
		.toFile(out);
	created.push({ app, name, kb: statSync(out).size / 1024, width: info.width, height: info.height });
}

console.log(`${DRY ? 'DRY-RUN' : 'Generadas'}: ${created.length} · ya tenían og: ${skipped.length} · fallos: ${failed.length}`);
for (const c of created) console.log(`  ${c.app.padEnd(42)} ${c.kb ? `${c.kb.toFixed(0)} kB  ${c.width}×${c.height}` : c.name}`);
for (const f of failed) console.log(`  ! ${f}`);
