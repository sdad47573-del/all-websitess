// Conecta a las paginas las fotos que `fetch-maps-photos.mjs` ya descargo en
// `src/assets/fotos/` y que hasta ahora no usaba nadie.
//
// El problema: decenas de apps tienen ahi entre 10 y 95 fotos de la ficha de
// Google Maps, pero ninguna linea de su codigo las menciona. El peso esta en el
// repo y el visitante sigue viendo un iframe de Maps o el arte SVG del hero.
//
// Lo que hace, por app:
//   1. escribe `src/components/Galeria.astro` (plantilla en
//      `scripts/templates/Galeria.astro`), una seccion autonoma que resuelve
//      las fotos con `import.meta.glob` y las sirve con `<Image>` de astro:assets
//      (AVIF + srcset + sizes + lazy), con visor a pantalla completa (dialog
//      nativo), maquetacion segun la orientacion de cada foto y limite 12;
//   2. anade `sharp` a las dependencias, sin el Astro no puede transformar en build;
//   3. inserta `<Galeria />` dentro del `<main>` de la pagina que de verdad pinta
//      la home (o del `Landing.astro` que la pinta por ella) y su import arriba.
//
// El componente es identico en todas las apps y no depende de sus estilos: se
// pinta con sus propios colores neutros, asi que encaja igual en un fondo crema
// que en uno oscuro.
//
// Uso (desde la raiz del monorepo):
//   node scripts/add-local-gallery.mjs --dry        informa, no escribe nada
//   node scripts/add-local-gallery.mjs <app> [...]   solo esas apps
//   node scripts/add-local-gallery.mjs --all         todas las candidatas

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const argv = process.argv.slice(2);
const dry = argv.includes('--dry');
const all = argv.includes('--all');
const wanted = argv.filter((a) => !a.startsWith('--'));

const IMAGE_FILE = /\.(?:jpe?g|png)$/i;

/**
 * Componente que se copia tal cual en cada app. Vive en
 * `scripts/templates/Galeria.astro` para no duplicarlo aqui: la misma
 * plantilla la usa el despliegue masivo y esta conexion de galerias nuevas.
 */
const COMPONENT = readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'templates', 'Galeria.astro'), 'utf8');


/** Ficheros donde puede estar el nombre del negocio, en orden de preferencia. */
const NAME_SOURCES = [
	'src/lib/business.ts',
	'src/lib/site.ts',
	'src/data/business.ts',
	'src/data/site.ts',
	'src/lib/content.ts',
	'src/components/Landing.astro',
	'src/pages/index.astro',
];

/** Paginas donde puede insertarse la seccion, en orden de preferencia. */
const PAGE_SOURCES = ['src/components/Landing.astro', 'src/pages/index.astro'];

const eol = (text) => (text.includes('\r\n') ? '\r\n' : '\n');

/** Todos los ficheros de codigo bajo un directorio. */
function walk(dir) {
	const out = [];
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		const path = join(dir, entry.name);
		if (entry.isDirectory()) {
			if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
			out.push(...walk(path));
		} else if (/\.(?:astro|tsx?|mjs)$/.test(entry.name)) {
			out.push(path);
		}
	}
	return out;
}

/**
 * Saca el nombre del negocio de la primera fuente que lo declare. Se acepta
 * tanto `name:` como `nombre:` y comillas simples o dobles. Cuando la app no
 * declara el nombre en ningun objeto, se recorta del `<title>`.
 */
function businessName(app) {
	for (const relative of NAME_SOURCES) {
		const path = join('apps', app, relative);
		if (!existsSync(path)) continue;
		const match = readFileSync(path, 'utf8').match(/\b(?:name|nombre):\s*(['"])([^'"]{2,60})\1/);
		if (match) return { name: match[2], from: relative };
	}

	for (const relative of PAGE_SOURCES) {
		const path = join('apps', app, relative);
		if (!existsSync(path)) continue;
		const title = readFileSync(path, 'utf8').match(/<title>([^<{]{2,80})<\/title>/);
		if (title) return { name: title[1].split(/[·|–—]| - /)[0].trim(), from: `${relative} <title>` };
	}

	return null;
}

/**
 * Mete el import en la frontmatter y el tag justo antes del ultimo `</main>`,
 * que es donde acaba el contenido de la home en todos los formatos del repo.
 */
function withSection(source, importLine, tag) {
	const nl = eol(source);
	const closeFrontmatter = source.indexOf(`---`, 3);
	if (!source.startsWith('---') || closeFrontmatter === -1) return { error: 'frontmatter sin cerrar' };

	const head = source.slice(0, closeFrontmatter);
	const body = source.slice(closeFrontmatter);
	if (!body.includes('</main>')) return { error: 'sin </main> donde insertar' };

	const imports = [...head.matchAll(/^import [^\n]*;$/gm)];
	const at = imports.length ? imports[imports.length - 1].index + imports[imports.length - 1][0].length : head.length;
	const newHead = `${head.slice(0, at)}${nl}${importLine}${head.slice(at)}`;

	// Reemplaza el ULTIMO `</main>`: el body no lo lleva indentado de forma fiable.
	const lastMain = body.lastIndexOf('</main>');
	const beforeMain = body.slice(0, lastMain);
	const indent = beforeMain.match(/(?:^|\n)([ \t]*)$/)?.[1] ?? '';
	const newBody = `${beforeMain}\t${tag}${nl}${indent}${body.slice(lastMain)}`;

	return { content: newHead + newBody };
}

/** Anade sharp a dependencies si no esta ya. */
function addSharp(app) {
	const path = join('apps', app, 'package.json');
	const source = readFileSync(path, 'utf8');
	if (/"sharp"\s*:/.test(source)) return { changed: false };
	const nl = eol(source);
	const updated = source.replace(/("dependencies"\s*:\s*\{)([\s\S]*?)(\n\s*\})/, (_all, open, inner, close) => {
		const indent = inner.match(/\n([ \t]+)"/)?.[1] ?? '    ';
		const trimmed = inner.replace(/\s+$/, '');
		const comma = trimmed.endsWith(',') ? '' : ',';
		return `${open}${trimmed}${comma}${nl}${indent}"sharp": "^0.35.5"${close}`;
	});
	if (updated === source) return { error: 'sin bloque dependencies' };
	return { path, content: updated, changed: true };
}

const appsDir = 'apps';
const allApps = readdirSync(appsDir).filter((app) => existsSync(join(appsDir, app, 'src')));
const candidates = (all ? allApps : wanted.length ? wanted : allApps)
	.filter((app) => allApps.includes(app))
	.sort();

const built = { apps: 0, photos: 0, skipped: [] };

for (const app of candidates) {
	const fotosDir = join(appsDir, app, 'src', 'assets', 'fotos');
	if (!existsSync(fotosDir)) continue;

	const fotos = readdirSync(fotosDir).filter((file) => IMAGE_FILE.test(file));
	if (!fotos.length) continue;

	// Si la app ya resuelve `assets/fotos` desde su codigo, no se toca.
	const referenced = ['pages', 'components', 'layouts', 'lib', 'data'].some((dir) => {
		const base = join(appsDir, app, 'src', dir);
		if (!existsSync(base)) return false;
		return walk(base).some((file) => readFileSync(file, 'utf8').includes('assets/fotos'));
	});
	if (referenced) continue;

	if (fotos.length < 2) {
		built.skipped.push(`${app}: solo ${fotos.length} fotos`);
		continue;
	}

	const named = businessName(app);
	if (!named) {
		built.skipped.push(`${app}: sin nombre de negocio`);
		continue;
	}

	const page = PAGE_SOURCES.map((relative) => join(appsDir, app, relative)).find((path) => existsSync(path));
	if (!page) {
		built.skipped.push(`${app}: sin index.astro ni Landing.astro`);
		continue;
	}

	const pageRelative = page.slice(join(appsDir, app).length + 1).replace(/\\/g, '/');
	const componentPath = pageRelative === 'src/pages/index.astro' ? '../components/Galeria.astro' : './Galeria.astro';

	const pageSource = readFileSync(page, 'utf8');
	if (pageSource.includes('Galeria')) {
		built.skipped.push(`${app}: ya tiene una Galeria`);
		continue;
	}

	const mapsProp = /\bmapsUrl\b/.test(pageSource) ? ' mapsUrl={mapsUrl}' : '';
	const localeProp = /\bconst\s*\{[^}]*\blocale\b[^}]*\}/.test(pageSource) ? ' locale={locale}' : '';
	const tag = `<Galeria nombre=${JSON.stringify(named.name)}${mapsProp}${localeProp} />`;
	const edit = withSection(pageSource, `import Galeria from '${componentPath}';`, tag);
	if (edit.error) {
		built.skipped.push(`${app}: ${edit.error}`);
		continue;
	}

	const sharp = addSharp(app);
	if (sharp.error) {
		built.skipped.push(`${app}: ${sharp.error} en package.json`);
		continue;
	}

	if (!dry) {
		mkdirSync(join(appsDir, app, 'src', 'components'), { recursive: true });
		writeFileSync(join(appsDir, app, 'src', 'components', 'Galeria.astro'), COMPONENT);
		writeFileSync(page, edit.content);
		if (sharp.changed) writeFileSync(sharp.path, sharp.content);
	}

	built.apps++;
	built.photos += fotos.length;
	console.log(
		`  ${app.padEnd(44)} ${String(fotos.length).padStart(2)} fotos  ${named.name.padEnd(32)} ${pageRelative}${mapsProp ? ' +maps' : ''}${sharp.changed ? '' : ' (sharp ya estaba)'}`,
	);
}

console.log(`\n${dry ? 'Se conectarían' : 'Conectadas'}: ${built.apps} apps, ${built.photos} fotos.`);
if (built.skipped.length) {
	console.log(`\nSin tocar (${built.skipped.length}):`);
	for (const reason of built.skipped) console.log(`  ${reason}`);
}
