#!/usr/bin/env node
/**
 * Revisión del contenido de las webs de negocios (`apps/*`).
 *
 * Estas webs se rellenan a mano con los datos que publica Google Maps, y en el proceso
 * se cuelan con facilidad textos corruptos (letras de otro alfabeto, palabras en inglés,
 * mayúsculas dentro de una palabra). Este script las detecta antes de compilar.
 *
 * Para no arrastrar falsos positivos, **no** se analiza el código: solo el texto que ve
 * una persona, es decir, los nodos de texto de las plantillas, los atributos `alt`,
 * `title`, `aria-label`… y los valores de las claves de contenido de los ficheros de datos.
 *
 * Comprobaciones:
 *
 *  1. `foreign-script`  Letras de alfabetos no latinos (chino, cirílico, árabe…) dentro del
 *                       texto. Delata texto corrupto.
 *  2. `camel-in-word`   Mayúscula dentro de una palabra española (`esThompson`).
 *  3. `english-word`    Palabra en inglés dentro de una frase en español.
 *  4. `stray-quote`     Comilla triple sin cerrar o cadena vacía suelta en su propia línea.
 *  5. `double-space`    Doble espacio dentro de una frase.
 *  6. `site-url`        La URL canónica se repite en tres sitios y deben coincidir.
 *  7. `missing-icon`    Clase `ri-*` que no existe en el remixicon instalado.
 *  8. `missing-asset`   Imagen importada desde `@assets/*` que no existe en el disco.
 *  9. `legal-pending`   Aviso: los datos legales siguen sin completar.
 *
 * Metadatos y accesibilidad (revisión de la cabecera y del marcado de cada plantilla):
 *
 * 10. `missing-title` / `title-length`    `<title>` ausente o fuera de 25–65 caracteres.
 * 11. `missing-description` / `desc-length`  `meta description` ausente o fuera de 70–170.
 * 12. `missing-canonical` / `missing-robots`  Enlace canónico o directiva `robots` ausentes.
 * 13. `missing-og`       Falta alguna de las etiquetas Open Graph imprescindibles para que
 *                        WhatsApp, Facebook o X enseñen la vista previa al compartir el enlace.
 * 14. `html-no-lang`     El documento no declara el idioma, que es lo primero que necesita un
 *                        lector de pantalla para elegir la pronunciación.
 * 15. `img-no-alt`       Imagen sin `alt`.
 * 16. `link-no-name` / `button-no-name`   Enlace o botón cuyo único contenido es un icono y que
 *                        no tiene nombre accesible: no announce nada al usar un lector de pantalla.
 * 17. `iframe-no-title`  `iframe` sin `title`.
 * 18. `input-no-label`   Campo de formulario sin `label` ni `aria-label`.
 *
 * Rutas y ficheros (revisión del conjunto de ficheros de cada web):
 *
 * 19. `duplicate-page`   Dos rutas de la misma web con el mismo título y la misma descripción.
 *                        Google tiene que elegir una y con contenido duplicado no elige ninguna.
 * 20. `draft-file`       Fichero con nombre de copia o borrador (`algo copy.astro`, `test.astro`).
 *                        Los que están en `src/pages` se deployan como rutas públicas.
 *
 * Las reglas de texto se saltan en los README, donde es legítimo citar identificadores como
 * `className` o `TypeScript`. También se descartaron dos reglas que daban demasiados falsos
 * positivos: `prose-slash` («anterior/siguiente» es español correcto) y `empty-string`
 * (`label: ''` es un valor por defecto legítimo). Un linter que avisa de más acaba ignorándose.
 *
 * Uso:
 *   node scripts/check-site-content.mjs                      # todas las webs
 *   node scripts/check-site-content.mjs merci-nails a-style  # solo algunas
 *   node scripts/check-site-content.mjs --strict             # los avisos también fallan
 *
 * Sale con código 1 si hay errores (o avisos con `--strict`).
 */

import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, extname, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

// Por defecto el repositorio es el que contiene este script, pero `CHECK_SITES_ROOT` permite
// apuntar a otro sitio: es lo que usan los tests para montar webs de mentira en un temporal.
const ROOT = process.env.CHECK_SITES_ROOT
	? resolve(process.env.CHECK_SITES_ROOT)
	: resolve(dirname(fileURLToPath(import.meta.url)), '..');
const APPS_DIR = join(ROOT, 'apps');

/** Paquetes de componentes compartidos: su marcado acaba en muchas webs a la vez. */
const SHARED_PACKAGES = [
	join(ROOT, 'packages', '@astro-components', 'src'),
	join(ROOT, 'packages', '@astro-icons', 'src'),
];

// Las imágenes se recorren aunque no se analice su contenido: lo que interesa de ellas es
// el nombre del fichero, que es lo que aparece en los imports y en el repositorio.
const SCAN_EXTENSIONS = new Set([
	'.astro',
	'.ts',
	'.tsx',
	'.mjs',
	'.js',
	'.md',
	'.jpg',
	'.jpeg',
	'.png',
	'.webp',
	'.avif',
	'.gif',
	'.svg',
]);

/** De lo que se recorre, lo que se puede leer como texto. */
const TEXT_EXTENSIONS = new Set(['.astro', '.ts', '.tsx', '.mjs', '.js', '.md']);
const SKIP_DIRECTORIES = new Set(['node_modules', 'dist', '.astro', '.turbo', '.git']);

/** Alfabetos que no deberían aparecer nunca en el texto de estas webs. */
const FOREIGN_SCRIPTS = [
	['chino', /[\u{3400}-\u{4DBF}\u{4E00}-\u{9FFF}\u{F900}-\u{FAFF}]/u],
	['chino ext. B', /[\u{20000}-\u{2A6DF}]/u],
	['japonés', /[\u{3040}-\u{30FF}]/u],
	['coreano', /[\u{AC00}-\u{D7AF}\u{1100}-\u{11FF}]/u],
	['cirílico', /[\u{0400}-\u{04FF}]/u],
	['árabe', /[\u{0600}-\u{06FF}\u{0750}-\u{077F}]/u],
	['hebreo', /[\u{0590}-\u{05FF}]/u],
	['devanagari', /[\u{0900}-\u{097F}]/u],
	['tamil', /[\u{0B80}-\u{0BFF}]/u],
	['tailandés', /[\u{0E00}-\u{0E7F}]/u],
	['griego', /[\u{0370}-\u{03FF}]/u],
];

/**
 * Palabras en inglés que han aparecido como texto corrupto en este repositorio. La lista es
 * deliberadamente corta: un linter que se queja de más acaba ignorándose, así que solo están
 * términos que no son ni español ni nombres propios válidos en estas webs.
 */
const ENGLISH_WORDS = [
	'cringe',
	'faithfuls',
	'jawab',
	'estegersa',
	'stegersa',
	'trusting',
	'specifies',
];

/** Igual, pero solo si aparecen en mayúscula, para no chocar con identificadores del código. */
const ENGLISH_CAPITALIZED = ['Needed', 'Thompson'];

/** Claves cuyo valor sí es texto visible para la persona que visita la web. */
const CONTENT_KEYS = [
	'text',
	'title',
	'q',
	'a',
	'claim',
	'summary',
	'alt',
	'label',
	'description',
	'tagline',
	'caption',
	'heading',
	'keyword',
];

/** Atributos de las plantillas cuyo valor es texto visible. */
const PROSE_ATTRIBUTES = [
	'alt',
	'title',
	'aria-label',
	'content',
	'placeholder',
	'label',
	'summary',
];

/* ------------------------------------------------------------------ *
 * Utilidades
 * ------------------------------------------------------------------ */

/** Índice de principios de línea para convertir desplazamientos en números de línea. */
function lineIndex(source) {
	const starts = [0];
	for (let i = 0; i < source.length; i += 1) if (source[i] === '\n') starts.push(i + 1);
	return (index) => {
		let low = 0;
		let high = starts.length - 1;
		while (low < high) {
			const mid = (low + high + 1) >> 1;
			if (starts[mid] <= index) low = mid;
			else high = mid - 1;
		}
		return low + 1;
	};
}

function walk(dir, out = []) {
	if (!existsSync(dir)) return out;
	for (const entry of readdirSync(dir)) {
		if (SKIP_DIRECTORIES.has(entry)) continue;
		const full = join(dir, entry);
		if (statSync(full).isDirectory()) walk(full, out);
		else {
			const dot = entry.lastIndexOf('.');
			if (dot > 0 && SCAN_EXTENSIONS.has(entry.slice(dot))) out.push(full);
		}
	}
	return out;
}

/**
 * ¿El fragmento tiene aspecto de texto visible? Descarta de entrada lo que es código: las
 * expresiones de JavaScript entre etiquetas (`{business.city}`) también viven entre `>` y `<`,
 * y sin este filtro saldría como si fueran prosa.
 */
function isProse(text) {
	const value = text.trim();
	if (value.length < 3) return false;
	if (!/\p{L}/u.test(value)) return false;
	if (value.replace(/\p{L}/gu, '').length < 2) return false;
	// Llaves, punto y coma, igual o barra vertical: eso es JavaScript, no texto.
	if (/[{};=|<>\\]/.test(value)) return false;
	return true;
}

/** Regiones de texto visible dentro de un fichero de plantillas o código. */
function extractProse(file, source) {
	const regions = [];
	const push = (text, index) => {
		if (isProse(text)) regions.push({ text, index });
	};

	if (file.endsWith('.astro')) {
		let body = source;
		let offset = 0;
		if (source.startsWith('---')) {
			const end = source.indexOf('\n---', 3);
			if (end !== -1) {
				regions.push(...contentValues(source.slice(0, end)));
				offset = end + 4;
				body = source.slice(offset);
			}
		}
		const attribute = new RegExp(`\\s(?:${PROSE_ATTRIBUTES.join('|')})="([^"]{2,})"`, 'g');
		for (const match of body.matchAll(attribute)) push(match[1], offset + match.index);
		// Nodos de texto: lo que hay entre `>` y `<`.
		for (const match of body.matchAll(/>([^<>]+)</g)) push(match[1], offset + match.index);
		return regions;
	}

	if (file.endsWith('.md')) {
		// El Markdown mezcla prosa, rutas y bloques de código: se limpia todo lo que no es
		// texto y además se normalizan los espacios que deja el propio limpiado.
		const cleaned = source
			.replace(/```[\s\S]*?```/g, ' ')
			.replace(/`[^`]*`/g, ' ')
			.replace(/!?\[[^\]]*\]\([^)]*\)/g, ' ')
			.replace(/<[^>]+>/g, ' ')
			.replace(/^\s{0,3}#{1,6}\s/gm, '')
			.replace(/^\s{0,3}[-*+]\s/gm, '')
			.replace(/^\s{0,3}\d+\.\s/gm, '')
			.replace(/[ \t]{2,}/g, ' ');
		for (const line of cleaned.split('\n')) {
			const index = cleaned.indexOf(line);
			push(line, index === -1 ? 0 : index);
		}
		return regions;
	}

	regions.push(...contentValues(source));
	return regions;
}

/** Valores de cadena asignados a claves de contenido (`text: '…'`). */
function contentValues(source) {
	const keys = CONTENT_KEYS.join('|');
	const out = [];
	const patterns = [
		new RegExp(`\\b(?:${keys})\\s*[:=]\\s*'([^'\\n]*)'`, 'g'),
		new RegExp(`\\b(?:${keys})\\s*[:=]\\s*"([^"\\n]*)"`, 'g'),
		new RegExp('\\b(?:' + keys + ')\\s*[:=]\\s*`([^`]*)`', 'g'),
	];
	for (const pattern of patterns) {
		for (const match of source.matchAll(pattern)) {
			if (isProse(match[1])) out.push({ text: match[1], index: match.index });
		}
	}
	return out;
}

/* ------------------------------------------------------------------ *
 * Reglas sobre el texto
 * ------------------------------------------------------------------ */

function checkProse(file, source, findings) {
	const toLine = lineIndex(source);
	const add = (index, level, rule, message) =>
		findings.push({ file, line: toLine(index), level, rule, message });

	// En los README es legítimo citar identificadores (`className`, `aggregateRating`,
	// `TypeScript`), así que las reglas que buscan texto corrupto en prosa se saltan ahí.
	const isMarkdown = file.endsWith('.md');

	for (const region of extractProse(file, source)) {
		const { text, index } = region;

		for (const [name, pattern] of FOREIGN_SCRIPTS) {
			const match = pattern.exec(text);
			if (match)
				add(index, 'error', 'foreign-script', `letras de ${name} en el texto: "${match[0]}"`);
		}

		if (!isMarkdown) {
			// `esThompson`: minúsculas seguidas de una palabra en camelCase dentro del texto.
			const camel = /\b[a-záéíóúñ]{2,}(?:[A-Z][a-záéíóúñ]{2,})\b/.exec(text);
			if (camel)
				add(index, 'error', 'camel-in-word', `mayúscula dentro de una palabra: "${camel[0]}"`);

			for (const word of ENGLISH_WORDS) {
				if (new RegExp(`\\b${word}\\b`).test(text))
					add(index, 'error', 'english-word', `palabra en inglés: "${word}"`);
			}
			for (const word of ENGLISH_CAPITALIZED) {
				if (new RegExp(`\\b${word}\\b`).test(text))
					add(index, 'error', 'english-word', `palabra en inglés: "${word}"`);
			}
		}

		if (/\p{L}[ \t]{2,}\p{L}/u.test(text))
			add(index, 'warn', 'double-space', 'doble espacio en el texto');
	}

	// Estas dos sí se buscan en el fichero entero, porque son bugs de sintaxis.
	for (const match of source.matchAll(/'''/g))
		add(match.index, 'error', 'stray-quote', 'comilla triple sin cerrar');
	for (const match of source.matchAll(/^\s*,\s*(?:''|"")[ \t]*$/gm))
		add(match.index, 'error', 'stray-quote', 'cadena vacía suelta en su propia línea');
}

/* ------------------------------------------------------------------ *
 * Comprobaciones por web
 * ------------------------------------------------------------------ */

function checkSiteUrl(app, dir, findings) {
	const add = (message) => findings.push({ file: app, level: 'error', rule: 'site-url', message });
	const read = (file) => {
		const full = join(dir, file);
		return existsSync(full) ? readFileSync(full, 'utf8') : null;
	};

	const site = read('src/data/site.ts');
	const config = read('astro.config.mjs');
	const robots = read('public/robots.txt');
	if (!site || !config || !robots) return;

	const siteUrl = /siteUrl:\s*'([^']+)'/.exec(site)?.[1];
	if (!siteUrl) {
		// No todas las webs usan el mismo objeto de datos: solo se avisa.
		findings.push({
			file: app,
			level: 'warn',
			rule: 'site-url',
			message: 'no se encuentra `siteUrl` en src/data/site.ts: no se puede comprobar que coincida',
		});
		return;
	}
	const configSite = /site:\s*'([^']+)'/.exec(config)?.[1];
	const robotsSite = /Sitemap:\s*(\S+)/.exec(robots)?.[1];

	if (configSite && configSite !== siteUrl)
		add(`astro.config.mjs usa "${configSite}" y site.ts usa "${siteUrl}"`);
	if (robotsSite && !robotsSite.startsWith(siteUrl))
		add(`public/robots.txt apunta a "${robotsSite}" y site.ts usa "${siteUrl}"`);
}

function checkIcons(app, dir, findings) {
	const css = join(dir, 'node_modules', 'remixicon', 'fonts', 'remixicon.css');
	if (!existsSync(css)) return;
	const styles = readFileSync(css, 'utf8');
	const used = new Set();
	for (const file of walk(join(dir, 'src'))) {
		// Solo el código declara clases de icono: leer una imagen como texto produce bytes que
		// casan con `ri-w` e inventan un icono que nadie ha usado nunca.
		if (!TEXT_EXTENSIONS.has(extname(file))) continue;
		for (const match of readFileSync(file, 'utf8').matchAll(/\bri-[a-z0-9-]+/g)) used.add(match[0]);
	}
	for (const icon of [...used].sort()) {
		if (!styles.includes(`.${icon}:before`))
			findings.push({
				file: app,
				level: 'error',
				rule: 'missing-icon',
				message: `"${icon}" no existe en la versión instalada de remixicon`,
			});
	}
}

function checkAssets(app, dir, findings) {
	const data = join(dir, 'src', 'data', 'site.ts');
	if (!existsSync(data)) return;
	const source = readFileSync(data, 'utf8');
	for (const match of source.matchAll(/from\s+'@assets\/([^']+)'/g)) {
		const file = join(ROOT, 'packages', '@assets', ...match[1].split('/'));
		if (!existsSync(file))
			findings.push({
				file: app,
				level: 'error',
				rule: 'missing-asset',
				message: `no existe la imagen importada: @assets/${match[1]}`,
			});
	}
}

function checkLegal(app, dir, findings) {
	const data = join(dir, 'src', 'data', 'site.ts');
	if (!existsSync(data)) return;
	if (/\[pendiente de completar\]/.test(readFileSync(data, 'utf8')))
		findings.push({
			file: app,
			level: 'warn',
			rule: 'legal-pending',
			message: 'los datos legales (LEGAL) siguen como «[pendiente de completar]»',
		});
}

/* ------------------------------------------------------------------ *
 * Rutas y ficheros sobrantes
 * ------------------------------------------------------------------ */

/**
 * El título y la descripción que Google lee de una ruta. Casi todas las webs los escriben
 * como etiquetas `<title>` y `<meta description>`; otras se los pasan como props al componente
 * `Layout`, que es donde acaban. Se busca en los dos sitios, saltando espacios y saltos de línea
 * entre el nombre del atributo y su valor, porque en las props multilínea hay un salto de línea.
 */
function attrValue(source, name) {
	const match = new RegExp(`\\b${name}\\s*=\\s*["'\`]([\\s\\S]*?)["'\`]`).exec(source);
	return match ? match[1].replace(/\\s+/g, ' ').trim() : null;
}

function seoOf(source) {
	const title = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(source)?.[1] ?? attrValue(source, 'title');
	const description =
		/<meta\s+name="description"\s+content="([^"]*)"/i.exec(source)?.[1] ??
		attrValue(source, 'description');
	const clean = (value) => (value ? value.replace(/\s+/g, ' ').trim() : null);
	return { title: clean(title), description: clean(description) };
}

/**
 * `duplicate-page`: dos rutas de la misma web que se presentan igual. Google tiene que
 * elegir cuál de las dos mostrar, y con contenido duplicado suele no elegir ninguna.
 */
function checkDuplicatePages(app, dir, findings) {
	const pages = walk(join(dir, 'src', 'pages')).filter((file) => file.endsWith('.astro'));
	const bySeo = new Map();
	for (const file of pages) {
		const { title, description } = seoOf(readFileSync(file, 'utf8'));
		// Sin las dos cosas a la vez no se puede afirmar que dos rutas sean la misma: un
		// panel de administracion no declara metadatos propios y su `title="Editar"` de
		// un boton no es el titulo de la pagina.
		if (!title || !description) continue;
		const key = `${title} ${description}`;
		bySeo.set(key, [...(bySeo.get(key) ?? []), file]);
	}
	for (const group of bySeo.values()) {
		if (group.length < 2) continue;
		// La ruta se nombra respecto a `src/pages` para que el aviso se lea como en el
		// parte de rutas de Astro: `index2.astro` es la ruta `/index2/`.
		const names = group.map((file) =>
			relative(join(dir, 'src', 'pages'), file).replaceAll(sep, '/'),
		);
		for (const [position] of group.entries()) {
			const others = names.filter((_, other) => other !== position);
			findings.push({
				file: `${app}/src/pages/${names[position]}`,
				level: 'warn',
				rule: 'duplicate-page',
				message: `contenido idéntico al de ${others.join(', ')}: las compiten entre sí y Google no posiciona ninguna. Deja una sola ruta`,
			});
		}
	}
}

/**
 * `draft-file`: ficheros que se quedaron por el camino con nombre de copia o de borrador.
 * Los que están en `src/pages` son peor, porque Astro los convierte en rutas públicas
 * (`/test/`, `/copia/`) que se deployan junto a la web.
 */
const DRAFT_NAME = /\b(?:copy|copia|duplicado|borrador|draft|old|aux|prueba|test|temp|tmp)\b|\s-\s|\s\(\d+\)/i;

/**
 * Nombres que no dicen nada del contenido que guardan: `unnamed (4).jpg`, `imagen.png`,
 * `img_1.jpg`. Mira el nombre entero con su extensión para no marcar de más un
 * `a-fuego-braseria-cordoba-foto-01.jpg`, que sí explica de dónde sale la foto.
 */
const MEANINGLESS_ASSET =
	/^(?:unnamed|imagen|image|img|foto|photo|picture|sin[-_ ]?nombre|captura|screenshot)[\s_-]*(?:\(\d+\)|\d+)?\.\w+$/i;

/** Imágenes: se recorren por su nombre, no por su contenido. */
const IMAGE_EXTENSIONS = new Set(['.jpg', '.jpeg', '.png', '.webp', '.avif', '.gif', '.svg']);

function checkDraftFiles(app, dir, findings) {
	for (const file of walk(join(dir, 'src'))) {
		const name = file.split(sep).pop();
		const isRoute = file.includes(`${sep}pages${sep}`) && name.endsWith('.astro');
		const isImage = IMAGE_EXTENSIONS.has(extname(file).toLowerCase());
		const report = (message) =>
			findings.push({
				file: relative(ROOT, file).replaceAll('\\', '/'),
				level: 'warn',
				rule: 'draft-file',
				message,
			});
		if (MEANINGLESS_ASSET.test(name)) {
			report(
				`«${name}» no dice qué contiene: renómbralo según lo que se ve en la foto, como el resto de assets de la web`,
			);
			continue;
		}
		// En un asset el nombre describe su contenido, no su origen: `duplicado.jpg` es la foto
		// de duplicar llaves de la cerrajería, no un fichero duplicado.
		if (isImage) continue;
		if (!DRAFT_NAME.test(name)) continue;
		report(
			isRoute
				? `«${name}» está en src/pages, así que Astro publica una ruta más con este contenido: bórralo o muévelo fuera de pages`
				: `«${name}» parece un resto de una versión anterior: bórralo si ya no se usa`,
		);
	}
}

/* ------------------------------------------------------------------ *
 * Metadatos (cabecera)
 * ------------------------------------------------------------------ */

/**
 * Atributos Open Graph imprescindibles. Sin ellos, al compartir el enlace en WhatsApp,
 * Facebook o X no sale ninguna vista previa: se ve el dominio y poco más.
 */
const REQUIRED_OG = [
	['og:title', /property="og:title"/],
	['og:description', /property="og:description"/],
	['og:image', /property="og:image"/],
	['og:url', /property="og:url"/],
	['og:locale', /property="og:locale"/],
];

/** Localiza el `<meta>` que declara un atributo con un valor dado (`name`, `property`…). */
function findMeta(source, attribute, value) {
	const pattern = new RegExp(`\\b${attribute}="${value}"`);
	for (const match of source.matchAll(/<meta\b[^>]*>/gi)) {
		if (pattern.test(match[0])) return match;
	}
	return null;
}

/**
 * Valor de un atributo `content`. Puede venir escrito en la plantilla (`content="…"`) o
 * compuesto con una expresión de Astro (`content={…}`); en el segundo caso no se puede
 * medir su longitud, pero la etiqueta sí cuenta como presente.
 */
function contentOf(tag) {
	return /content="([^"]*)"/.exec(tag)?.[1] ?? null;
}

function checkHead(file, source, findings) {
	// Solo los ficheros que abren el documento; los componentes no llevan `<head>`.
	if (!/<head[\s>]/.test(source)) return;
	// `LocalSeo` es el componente compartido que ya emite la descripción, el canónico, la
	// directiva robots y las etiquetas Open Graph: quien lo usa no tiene que repetirlas.
	const sharedSeo = /<LocalSeo[\s/>]/.test(source);
	const toLine = lineIndex(source);
	const add = (index, level, rule, message) =>
		findings.push({ file, line: toLine(index), level, rule, message });

	const indexOf = (pattern) => {
		const found = pattern.exec(source);
		return found ? found.index : 0;
	};

	if (!/<title[\s>]/.test(source)) add(0, 'error', 'missing-title', 'no hay <title>');
	const description = findMeta(source, 'name', 'description');
	if (!description && !sharedSeo) add(0, 'error', 'missing-description', 'no hay meta description');
	// La longitud solo se puede medir si la descripción está escrita en la plantilla; si la
	// compone una expresión, el valor real no se ve desde aquí.
	else if (description) {
		const literal = contentOf(description[0]);
		if (literal !== null && !literal.includes('{')) {
			const length = literal.length;
			if (length < 70 || length > 170)
				add(description.index, 'warn', 'desc-length', `la descripción tiene ${length} caracteres (ideal 70-170)`);
		}
	}

	if (!/<link[^>]+rel="canonical"/.test(source) && !sharedSeo)
		add(0, 'warn', 'missing-canonical', 'no hay enlace canónico');

	if (!findMeta(source, 'name', 'robots') && !sharedSeo)
		add(0, 'warn', 'missing-robots', 'no hay directiva robots');

	if (!sharedSeo) {
		for (const [name, pattern] of REQUIRED_OG) {
			if (!pattern.test(source))
				add(0, 'warn', 'missing-og', `falta ${name} (no habrá vista previa al compartir)`);
		}
	}

	const title = /<title[^>]*>([\s\S]*?)<\/title>/.exec(source);
	if (title && !title[1].includes('{')) {
		const length = title[1].trim().length;
		if (length < 25 || length > 65)
			add(title.index, 'warn', 'title-length', `el título tiene ${length} caracteres (ideal 25-65)`);
	}
}

/* ------------------------------------------------------------------ *
 * Accesibilidad del marcado
 * ------------------------------------------------------------------ */

/** Etiquetas queObligatorio a un control para que un lector de pantalla lo anuncie. */
const NAMEABLE = /\b(?:aria-label|aria-labelledby|title)\s*=/i;

/**
 * Una etiqueta con sus atributos. Los valores van entre comillas para no cortar la etiqueta
 * antes de tiempo: una clase de Tailwind puede llevar un `>` dentro, como en `[&>svg]:h-4`.
 */
const ATTRS = `((?:"[^"]*"|'[^']*'|[^>"'])*)`;

function openTags(source, name) {
	const found = [];
	for (const match of source.matchAll(new RegExp(`<${name}\\b${ATTRS}>`, 'gi')))
		found.push({ attrs: match[1], index: match.index, end: match.index + match[0].length });
	return found;
}

/** Contenido de un elemento: desde el final de su etiqueta de apertura hasta la de cierre. */
function innerOf(source, name, from) {
	const rest = source.slice(from);
	const close = new RegExp(`</${name}\\s*>`, 'i').exec(rest);
	return close ? rest.slice(0, close.index) : null;
}

/**
 * ¿Tiene el elemento un nombre accesible? Se mira el contenido visible (nodos de texto) y,
 * como alternativa, los atributos `aria-label`, `aria-labelledby` o `title`.
 */
function hasAccessibleName(attrs, inner) {
	if (NAMEABLE.test(attrs)) return true;
	// Un componente de Astro (`<Icon />`) puede trazer su propio texto o su propio `aria-label`,
	// así que no se puede juzgar desde fuera: se deja pasar.
	if (/<[A-Z]/.test(inner)) return true;
	// Una imagen con `alt` también nombra al enlace que la contiene.
	if (/<img\b[^>]*\balt="[^"]+"/i.test(inner)) return true;
	// Una expresión de Astro (`{item.label}`) puede contener texto: no se puede saber aquí.
	if (/\{[\s\S]*?\}/.test(inner)) return true;
	// Las etiquetas vacías no aportan texto por sí solas.
	const text = inner.replace(/<[^>]*>/g, ' ');
	return /\p{L}|\p{N}/u.test(text);
}

function checkAccessibility(file, source, findings) {
	const toLine = lineIndex(source);
	const add = (index, level, rule, message) =>
		findings.push({ file, line: toLine(index), level, rule, message });

	for (const match of source.matchAll(/<html\b([^>]*)>/g)) {
		if (!/\blang\s*=/.test(match[1]))
			add(match.index, 'error', 'html-no-lang', 'el documento no declara el idioma con el atributo lang');
	}

	for (const { attrs, index } of openTags(source, 'img')) {
		// Un `<Image … {...props} />` de Astro puede traer el `alt` dentro del objeto que se
		// reparte: desde fuera no se ve, así que no se juzga.
		if (/\{[\s\S]*?\.\.\./.test(attrs)) continue;
		if (!/\balt\s*=/.test(attrs))
			add(index, 'error', 'img-no-alt', 'imagen sin alt');
	}

	for (const name of ['a', 'button']) {
		for (const { attrs, index, end } of openTags(source, name)) {
			const inner = innerOf(source, name, end);
			if (inner === null || hasAccessibleName(attrs, inner)) continue;
			add(
				index,
				'error',
				name === 'a' ? 'link-no-name' : 'button-no-name',
				`este ${name} solo contiene un icono: sin texto ni aria-label un lector de pantalla no anuncia nada`,
			);
		}
	}

	for (const { attrs, index } of openTags(source, 'iframe')) {
		if (!/\btitle\s*=/.test(attrs))
			add(index, 'error', 'iframe-no-title', 'iframe sin title');
	}

	for (const name of ['input', 'select', 'textarea']) {
		for (const { attrs, index } of openTags(source, name)) {
			// Los campos escondidos (`type="hidden"`) no se anuncian, así que no necesitan nombre.
			if (/type="hidden"/.test(attrs)) continue;
			const id = /\bid="([^"]+)"/.exec(attrs)?.[1];
			const labelled =
				/\baria-label(?:ledby)?\s*=/.test(attrs) ||
				(id !== undefined && new RegExp(`for="${id}"`).test(source));
			if (!labelled) add(index, 'warn', 'input-no-label', `campo ${name} sin label ni aria-label`);
		}
	}
}

/* ------------------------------------------------------------------ *
 * Ejecución
 * ------------------------------------------------------------------ */

function listApps() {
	if (!existsSync(APPS_DIR)) return [];
	return readdirSync(APPS_DIR)
		.map((name) => join(APPS_DIR, name))
		.filter((dir) => statSync(dir).isDirectory() && existsSync(join(dir, 'src')))
		.sort();
}

const args = process.argv.slice(2);
const strict = args.includes('--strict');
const requested = args.filter((arg) => !arg.startsWith('--'));

const missing = requested.filter((name) => !existsSync(join(APPS_DIR, name)));
if (missing.length) {
	console.error(`No se han encontrado estas webs: ${missing.join(', ')}`);
	process.exit(1);
}

const apps = requested.length ? requested.map((name) => join(APPS_DIR, name)) : listApps();

const findings = [];
for (const dir of apps) {
	const app = relative(ROOT, dir).replaceAll('\\', '/');
	const sources = walk(join(dir, 'src'));
	if (existsSync(join(dir, 'README.md'))) sources.push(join(dir, 'README.md'));
	for (const file of sources) {
		const relativeFile = relative(ROOT, file).replaceAll('\\', '/');
		// El binario de una imagen no es texto que se pueda revisar, aunque su nombre sí importa.
		if (TEXT_EXTENSIONS.has(extname(file))) {
			const source = readFileSync(file, 'utf8');
			checkProse(relativeFile, source, findings);
			// Las reglas de metadatos y accesibilidad se limitan a las plantillas Astro de las
			// webs de negocios. En los productos de React los campos de formulario y los botones
			// con icono reciben su nombre accesible por props, que desde aquí no se puede comprobar.
			if (file.endsWith('.astro')) {
				checkHead(relativeFile, source, findings);
				checkAccessibility(relativeFile, source, findings);
			}
		}
	}
	checkSiteUrl(app, dir, findings);
	checkIcons(app, dir, findings);
	checkAssets(app, dir, findings);
	checkLegal(app, dir, findings);
	checkDuplicatePages(app, dir, findings);
	checkDraftFiles(app, dir, findings);
}

	// Los componentes compartidos los usan muchas webs a la vez: un fallo de accesibilidad
	// aquí se multiplica por todas ellas, así que también se revisan.
	for (const shared of SHARED_PACKAGES) {
		if (!existsSync(shared)) continue;
		for (const file of walk(shared)) {
			if (!file.endsWith('.astro')) continue;
			const relativeFile = relative(ROOT, file).replaceAll('\\', '/');
			const source = readFileSync(file, 'utf8');
			checkAccessibility(relativeFile, source, findings);
		}
	}

const byApp = new Map();
for (const finding of findings) {
	const app = finding.file.split('/').slice(0, 2).join('/');
	if (!byApp.has(app)) byApp.set(app, []);
	byApp.get(app).push(finding);
}

const symbol = { error: '✖', warn: '⚠' };
const color = { error: 31, warn: 33 };
const noisyApps = 0;

const scanned = new Set(apps.map((dir) => relative(ROOT, dir).replaceAll('\\', '/')));
const report = (name, list) => {
	if (list.length === 0) {
		if (scanned.has(name)) console.log(`\x1b[32m✓\x1b[0m ${name}`);
		return;
	}
	console.log(`\x1b[1m${name}\x1b[0m`);
	for (const finding of list) {
		const where = finding.file === name ? '' : `${finding.file.replace(`${name}/`, '')}:`;
		const line = finding.line ? `${where}${finding.line}` : where.replace(/:$/, '');
		console.log(
			`  \x1b[${color[finding.level]}m${symbol[finding.level]}\x1b[0m ` +
				`${line} \x1b[90m[${finding.rule}]\x1b[0m ${finding.message}`,
		);
	}
};

for (const app of apps) report(relative(ROOT, app).replaceAll('\\', '/'), byApp.get(relative(ROOT, app).replaceAll('\\', '/')) ?? []);
// Los paquetes compartidos se agrupan por su carpeta de primer nivel (`packages/@astro-components`).
for (const [name, list] of byApp) if (!scanned.has(name)) report(name, list);

const errors = findings.filter((finding) => finding.level === 'error').length;
const warnings = findings.length - errors;
console.log(
	`\n${apps.length} web(s) revisadas · \x1b[31m${errors} error(es)\x1b[0m · ` +
		`\x1b[33m${warnings} aviso(s)\x1b[0m`,
);
console.log('Para revisar solo algunas: node scripts/check-site-content.mjs <web> [<web> …]');

process.exit(errors > 0 || (strict && warnings > 0) ? 1 : 0);
