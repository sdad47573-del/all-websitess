/**
 * Núcleo de la tarjeta Open Graph, compartido por `scripts/generate-og.mjs` y el CMS.
 *
 * No depende del cwd: recibe rutas absolutas y la instancia de sharp, que se busca
 * en las apps porque no todos los paquetes la declaran.
 */
import { existsSync, mkdirSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, resolve } from 'node:path';

export const OG_WIDTH = 1200;
export const OG_HEIGHT = 630;
export const OG_FILE = 'og.jpg';

const OG_PATTERN = /^og\.(jpe?g|png|webp|svg)$/i;

/** sharp está declarado en muchas apps, pero no en todas: vale la primera instalada. */
export function findSharp(appsDir) {
	const packages = readdirSync(appsDir, { withFileTypes: true })
		.filter((entry) => entry.isDirectory())
		.map((entry) => join(appsDir, entry.name, 'package.json'))
		.filter((file) => existsSync(file) && readFileSync(file, 'utf8').includes('"sharp"'));

	for (const pkg of packages) {
		try {
			return createRequire(resolve(pkg))('sharp');
		} catch {
			// app sin node_modules instalado: se prueba la siguiente
		}
	}
	return null;
}

export function hasAnyOg(appRoot) {
	const dir = join(appRoot, 'public');
	return existsSync(dir) && readdirSync(dir).some((name) => OG_PATTERN.test(name));
}

const read = (file) => (existsSync(file) ? readFileSync(file, 'utf8') : '');

export const escapeXml = (value) =>
	String(value)
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');

function field(src, keys) {
	for (const key of keys) {
		// Los site.ts usan `name: '…'`, pero algunos declaran `SITE_NAME = '…'`.
		const match = src.match(new RegExp(`\\b${key}\\s*[:=]\\s*['"\`]([^'"\`]+)['"\`]`));
		if (match && match[1].trim()) return match[1].trim();
	}
	return '';
}

function hexToRgb(hex) {
	const clean = hex.replace('#', '');
	const full = clean.length === 3 ? clean.split('').map((c) => c + c).join('') : clean.slice(0, 6);
	return [0, 2, 4].map((i) => parseInt(full.slice(i, i + 2), 16));
}

const luminance = (hex) => {
	const [r, g, b] = hexToRgb(hex).map((value) => {
		const channel = value / 255;
		return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
	});
	return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

// Si el color de marca es claro, se oscurece para que el texto blanco se lea.
function readableBackground(hex) {
	if (luminance(hex) <= 0.45) return hex;
	const [r, g, b] = hexToRgb(hex).map((value) => Math.round(value * 0.42));
	return `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`;
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

export function readOgData(appRoot) {
	const src = read(join(appRoot, 'src/data/site.ts'));
	const favicon = read(join(appRoot, 'public/favicon.svg'));
	const colors = [...new Set((favicon.match(/#[0-9a-fA-F]{6}\b/g) ?? []).map((color) => color.toLowerCase()))];

	return {
		name: field(src, ['name', 'fullName', 'businessName', 'SITE_NAME']),
		tagline: field(src, ['tagline', 'claim', 'subtitle', 'SITE_TAGLINE']),
		city: field(src, ['city', 'locality', 'municipio']),
		url: field(src, ['siteUrl', 'url', 'canonical', 'SITE_URL']),
		color: colors[0] ?? '#24503f',
		accent: colors.find((color) => color !== colors[0]) ?? '#e2b34a',
	};
}

export function buildOgSvg({ name, tagline, city, url, color, accent }) {
	const background = readableBackground(color);
	const lines = wrapWords(name, name.length > 30 ? 26 : 22);
	const longest = Math.max(...lines.map((line) => line.length));
	const size = longest > 26 ? 60 : longest > 20 ? 70 : 82;
	const lineHeight = Math.round(size * 1.08);
	const firstY = lines.length > 1 ? 300 : 348;
	const afterName = firstY + (lines.length - 1) * lineHeight;

	const eyebrow = (city ?? '').toUpperCase();
	const domain = (url ?? '').replace(/^https?:\/\//, '').replace(/\/$/, '');

	return `<svg xmlns="http://www.w3.org/2000/svg" width="${OG_WIDTH}" height="${OG_HEIGHT}" viewBox="0 0 ${OG_WIDTH} ${OG_HEIGHT}">
	<rect width="${OG_WIDTH}" height="${OG_HEIGHT}" fill="${background}"/>
	<g opacity=".22" stroke="#ffffff" fill="none">
		<circle cx="1010" cy="250" r="210"/>
		<circle cx="1010" cy="250" r="150"/>
	</g>
	<path d="M0 472q300-84 600 6t600-16v168H0z" fill="#000" opacity=".2"/>
	<rect x="90" y="96" width="54" height="4" fill="${accent}"/>
	${eyebrow ? `<text x="90" y="150" fill="#ffffff" opacity=".78" font-family="Arial, sans-serif" font-size="20" letter-spacing="4">${escapeXml(eyebrow)}</text>` : ''}
	${lines
		.map(
			(line, index) =>
				`<text x="86" y="${firstY + index * lineHeight}" fill="#ffffff" font-family="Georgia, 'Times New Roman', serif" font-size="${size}">${escapeXml(line)}</text>`,
		)
		.join('')}
	<rect x="90" y="${afterName + 52}" width="92" height="3" fill="${accent}"/>
	${tagline ? `<text x="90" y="${afterName + 100}" fill="#ffffff" opacity=".82" font-family="Arial, sans-serif" font-size="22">${escapeXml(tagline)}</text>` : ''}
	<text x="90" y="566" fill="#ffffff" opacity=".62" font-family="Arial, sans-serif" font-size="15">Ilustración original · no es una fotografía del establecimiento</text>
	<text x="1110" y="566" text-anchor="end" fill="#ffffff" opacity=".72" font-family="Arial, sans-serif" font-size="15">${escapeXml(domain)}</text>
</svg>`;
}

/** Escribe public/og.jpg y devuelve sus dimensiones y tamaño. */
export async function generateOgCard({ sharp, appRoot, data }) {
	mkdirSync(join(appRoot, 'public'), { recursive: true });
	const file = join(appRoot, 'public', OG_FILE);
	const info = await sharp(Buffer.from(buildOgSvg(data)))
		.jpeg({ quality: 88 })
		.toFile(file);

	return { file, width: info.width, height: info.height, size: statSync(file).size };
}
