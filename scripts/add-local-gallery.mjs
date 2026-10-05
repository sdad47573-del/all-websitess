// Conecta a las paginas las fotos que `fetch-maps-photos.mjs` ya descargo en
// `src/assets/fotos/` y que hasta ahora no usaba nadie.
//
// El problema: decenas de apps tienen ahi entre 10 y 95 fotos de la ficha de
// Google Maps, pero ninguna linea de su codigo las menciona. El peso esta en el
// repo y el visitante sigue viendo un iframe de Maps o el arte SVG del hero.
//
// Lo que hace, por app:
//   1. escribe `src/components/Galeria.astro`, una seccion autonoma que resuelve
//      las fotos con `import.meta.glob` y las sirve con `<Image>` de astro:assets
//      (AVIF + srcset + sizes + lazy);
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
import { join } from 'node:path';

const argv = process.argv.slice(2);
const dry = argv.includes('--dry');
const all = argv.includes('--all');
const wanted = argv.filter((a) => !a.startsWith('--'));

const IMAGE_FILE = /\.(?:jpe?g|png)$/i;

/** Componente que se copia tal cual en cada app. */
const COMPONENT = `---
import { Image } from 'astro:assets';
import type { ImageMetadata } from 'astro';

interface Props {
	/** Nombre del negocio: va en el alt de cada foto. Obligatorio. */
	nombre: string;
	titulo?: string;
	intro?: string;
	nota?: string;
	/** Enlace a la ficha completa, si la pagina tiene uno. */
	mapsUrl?: string;
	/** Las paginas con version inglesa pasan su locale para traducir los textos. */
	locale?: 'es' | 'en';
	id?: string;
	limite?: number;
}

const {
	nombre,
	mapsUrl,
	locale = 'es',
	id = 'galeria',
	limite = 10,
} = Astro.props;

const TEXTOS = {
	es: {
		titulo: 'Fotos de la ficha de Google Maps',
		intro: (negocio: string) => \`Una selección de las fotografías publicadas en la ficha de Google Maps de \${negocio}. La ficha completa reúne muchas más.\`,
		nota: 'Fotografías de la ficha pública de Google Maps, alojadas aquí para servirlas optimizadas (AVIF y varios tamaños).',
		enlace: 'Ver la ficha completa en Google Maps',
		forma: { panoramica: 'panorámica', apaisada: 'horizontal', vertical: 'vertical', cuadrada: 'cuadrada' },
		general: 'general',
		alt: (forma: string, negocio: string) => \`Fotografía \${forma} de \${negocio}, publicada en su ficha de Google Maps\`,
	},
	en: {
		titulo: 'Photos from the Google Maps listing',
		intro: (negocio: string) => \`A selection of the photographs published on the Google Maps listing of \${negocio}. The full listing holds many more.\`,
		nota: 'Photographs from the public Google Maps listing, hosted here so they can be served optimised (AVIF and several sizes).',
		enlace: 'Open the full listing on Google Maps',
		forma: { panoramica: 'panoramic', apaisada: 'landscape', vertical: 'portrait', cuadrada: 'square' },
		general: 'general',
		alt: (forma: string, negocio: string) => \`\${forma} photograph of \${negocio}, published on its Google Maps listing\`,
	},
};

const t = TEXTOS[locale];
const titulo = Astro.props.titulo ?? t.titulo;
const intro = Astro.props.intro ?? t.intro(nombre);
const nota = Astro.props.nota ?? t.nota;

const fotos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{jpg,jpeg,png,JPG,JPEG,PNG}', {
	eager: true,
});

/** La forma viene en el nombre del archivo: \`<app>-apaisada-03.jpg\`. */
const galeria = Object.keys(fotos)
	.sort((a, b) => a.localeCompare(b))
	.slice(0, limite)
	.map((ruta) => {
		const archivo = ruta.split('/').pop() ?? '';
		const forma = t.forma[archivo.split('-').slice(1, -1).join('-') as keyof typeof t.forma] ?? t.general;
		return { src: fotos[ruta].default, alt: t.alt(forma, nombre) };
	});
---

{
	galeria.length > 0 && (
		<section class="galeria" id={id} aria-labelledby={\`\${id}-titulo\`}>
			<div class="galeria-head">
				<p class="galeria-kicker">Google Maps · {galeria.length} fotos</p>
				<h2 id={\`\${id}-titulo\`}>{titulo}</h2>
				<p class="galeria-intro">{intro}</p>
			</div>
			<ul class="galeria-grid">
				{galeria.map((foto) => (
					<li>
						<figure>
							<Image
								src={foto.src}
								alt={foto.alt}
								widths={[320, 480, 640, 960]}
								sizes="(max-width: 640px) 92vw, (max-width: 1100px) 45vw, 30vw"
								format="avif"
								quality={65}
								loading="lazy"
								decoding="async"
							/>
						</figure>
					</li>
				))}
			</ul>
			{mapsUrl ? (
				<p class="galeria-nota">
					<a href={mapsUrl} target="_blank" rel="noopener noreferrer">
						{t.enlace} <span aria-hidden="true">↗</span>
					</a>
					{nota}
				</p>
			) : (
				<p class="galeria-nota">{nota}</p>
			)}
		</section>
	)
}

<style>
	.galeria {
		--gal-bg: #f6f2ea;
		--gal-ink: #2c2622;
		--gal-line: rgba(44, 38, 34, 0.12);
		padding: clamp(3rem, 8vw, 5.5rem) clamp(1.25rem, 6vw, 6rem);
		background: var(--gal-bg);
		color: var(--gal-ink);
	}
	.galeria :global(.galeria-head) {
		max-width: 46rem;
		margin: 0 auto clamp(1.75rem, 4vw, 2.75rem);
		text-align: center;
	}
	.galeria :global(.galeria-kicker) {
		margin: 0 0 0.75rem;
		font-size: 0.6875rem;
		font-weight: 700;
		letter-spacing: 0.16em;
		text-transform: uppercase;
		opacity: 0.6;
	}
	.galeria :global(h2) {
		margin: 0;
		font-size: clamp(1.75rem, 4vw, 2.5rem);
		line-height: 1.15;
	}
	.galeria :global(.galeria-intro) {
		margin: 1rem 0 0;
		font-size: 0.9375rem;
		line-height: 1.8;
		opacity: 0.75;
	}
	.galeria :global(.galeria-grid) {
		display: grid;
		gap: clamp(0.6rem, 1.6vw, 1rem);
		padding: 0;
		margin: 0;
		list-style: none;
		grid-template-columns: repeat(auto-fit, minmax(min(100%, 15rem), 1fr));
	}
	.galeria :global(.galeria-grid figure) {
		margin: 0;
		overflow: hidden;
		border-radius: 14px;
		background: var(--gal-line);
	}
	.galeria :global(.galeria-grid img) {
		display: block;
		width: 100%;
		height: 100%;
		aspect-ratio: 4 / 3;
		object-fit: cover;
	}
	.galeria :global(.galeria-nota) {
		max-width: 46rem;
		margin: clamp(1.5rem, 3vw, 2rem) auto 0;
		font-size: 0.75rem;
		line-height: 1.7;
		text-align: center;
		opacity: 0.6;
	}
	.galeria :global(.galeria-nota a) {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 700;
		text-decoration: underline;
		opacity: 0.85;
	}
	@media (prefers-reduced-motion: no-preference) {
		.galeria :global(.galeria-grid img) {
			transition: transform 0.5s ease;
		}
		.galeria :global(.galeria-grid figure:hover img) {
			transform: scale(1.03);
		}
	}
</style>
`;

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
