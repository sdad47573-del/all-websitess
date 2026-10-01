// Convierte los `@import` remotos de Google Fonts en <link> declarados en el <head>.
//
// Un `@import url(...)` en CSS obliga al navegador a descargar la hoja principal,
// descubrir el import, pedir la hoja de Google y solo despues pedir la fuente:
// tres viajes encadenados antes de pintar texto. Declarando la fuente en el <head>
// el navegador resuelve la hoja y la fuente en paralelo.
//
// Solo toca apps cuyo CSS tenga un @import remoto; el resto no se ve afectado, asi
// que se puede volver a ejecutar sin miedo.
//
// Uso (desde la raiz del monorepo): node scripts/fix-remote-font-imports.mjs

import { existsSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const IMPORT_RE = /^@import\s+url\(\s*['"]?(https:\/\/fonts\.googleapis\.com[^'")]+)['"]?\s*\);\s*\r?\n/;
const VIEWPORT_RE = /^([ \t]*)<meta\s+name=["']viewport["'][^\r\n]*\r?\n/m;

const walk = (dir, out = []) => {
	for (const entry of readdirSync(dir, { withFileTypes: true })) {
		if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
		const p = join(dir, entry.name);
		if (entry.isDirectory()) walk(p, out);
		else out.push(p);
	}
	return out;
};

// Los ficheros de este repo mezclan CRLF y LF: se respeta el de cada uno.
const eolOf = (s) => (s.includes('\r\n') ? '\r\n' : '\n');

const appsDir = 'apps';
const apps = readdirSync(appsDir).filter((d) => existsSync(join(appsDir, d, 'astro.config.mjs')));

const moved = [];

for (const app of apps) {
	const appDir = join(appsDir, app);
	const files = walk(join(appDir, 'src'));
	const pages = files.filter((f) => f.endsWith('.astro'));

	for (const cssFile of files.filter((f) => f.endsWith('.css'))) {
		const css = readFileSync(cssFile, 'utf8');
		const m = css.match(IMPORT_RE);
		if (!m) continue;

		const url = m[1];
		// Se busca por nombre de fichero: las paginas lo importan con ruta relativa
		// ('../styles/global.css'), no con la ruta desde la app.
		const cssName = basename(cssFile);

		// Paginas que importan esta hoja y que aun no declaren la fuente.
		const targets = pages.filter((f) => {
			const src = readFileSync(f, 'utf8');
			return src.includes(cssName) && !src.includes('fonts.googleapis.com');
		});

		const linked = pages.filter((f) => {
			const src = readFileSync(f, 'utf8');
			return src.includes(cssName) && src.includes('fonts.googleapis.com');
		});

		// Si la pagina ya declara la fuente con <link>, el @import es redundancia
		// pura y se puede quitar sin riesgo.
		if (targets.length === 0) {
			if (linked.length) {
				writeFileSync(cssFile, css.replace(m[0], ''));
				moved.push({
					app,
					page: `${linked.length} pagina(s) ya con <link>`,
					status: '@import redundante eliminado',
				});
			} else {
				console.log(`  ${app}: ${cssName} tiene @import pero ninguna pagina lo carga; NO se toca.`);
			}
			continue;
		}

		writeFileSync(cssFile, css.replace(m[0], ''));

		for (const page of targets) {
			const src = readFileSync(page, 'utf8');
			const vp = src.match(VIEWPORT_RE);
			if (!vp) {
				console.log(`  ${app}: ${page} sin meta viewport; @import conservado.`);
				continue;
			}
			const eol = eolOf(src);
			// & se escribe como entidad HTML; el navegador la decodifica al pedir la hoja.
			const links = [
				`${vp[1]}<link rel="preconnect" href="https://fonts.googleapis.com" />`,
				`${vp[1]}<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />`,
				`${vp[1]}<link rel="stylesheet" href="${url.replace(/&/g, '&amp;')}" />`,
				'',
			].join(eol);
			writeFileSync(page, src.replace(vp[0], vp[0] + links));
			moved.push({ app, page: page.split(/[\\/]/).slice(-2).join('/'), status: 'movido a <link>' });
		}
	}
}

if (moved.length) {
	console.log(`\nFuentes movidas a <link> (${moved.length}):`);
	for (const r of moved) console.log(`  ${r.app.padEnd(28)} ${r.page.padEnd(30)} ${r.status}`);
} else {
	console.log('Ninguna app usa @import remoto de Google Fonts.');
}

// Comprobacion final: si alguna app declara DM Sans en su CSS, debe tener la hoja
// de Google en el head, o se quedaria renderizando con la fuente de sistema.
let broken = 0;
for (const app of apps) {
	for (const f of walk(join(appsDir, app, 'src'))) {
		if (!f.endsWith('.css')) continue;
		const css = readFileSync(f, 'utf8');
		if (!/font-family:\s*['"]DM Sans/.test(css)) continue;
		const name = basename(f);
		const pages = walk(join(appsDir, app, 'src')).filter((p) => p.endsWith('.astro'));
		const ok = pages.some(
			(p) => readFileSync(p, 'utf8').includes(name) && readFileSync(p, 'utf8').includes('fonts.googleapis.com'),
		);
		if (!ok) {
			console.log(`  INCONSISTENTE: ${app} usa DM Sans en ${name} pero no carga la hoja de Google.`);
			broken++;
		}
	}
}
console.log(broken ? `\n${broken} web(s) con fuentes sin cargar.` : '\nTodas las webs que usan DM Sans cargan su hoja.');
