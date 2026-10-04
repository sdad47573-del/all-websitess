// Descarga las fotos de la ficha de Google Maps de cada app.
//
// Google ya no sirve esas imagenes en el HTML de la ficha: todo es un shell de
// JavaScript. Las fotos llegan aparte, por el endpoint protobuf /maps/preview/place,
// asi que se pide ese endpoint y se leen las URLs de la CDN.
//
// Lo que se descarga es la portada de la galeria (10 fotos por ficha), no las
// cientos que aparecen al abrir la pestana "Fotos". Es el maximo que devuelve
// este endpoint sin sesion de navegador.
//
// La respuesta de Google es intermitente: a veces llega la ficha sin el bloque de
// fotos. Por eso se reintenta, y se da por buena la primera respuesta que trae
// alguna.
//
// Cada foto guarda su id en src/assets/fotos/.maps-manifest.json, de forma que
// volver a ejecutar el script no vuelve a descargar lo que ya esta.
//
// Uso (desde la raiz del monorepo):
//   node scripts/fetch-maps-photos.mjs --dry              informa, no descarga
//   node scripts/fetch-maps-photos.mjs <app> [<app>...]    solo esas apps
//   node scripts/fetch-maps-photos.mjs --all               todas

import { existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const argv = process.argv.slice(2);
const dry = argv.includes('--dry');
const all = argv.includes('--all');
const wanted = argv.filter((a) => !a.startsWith('--'));

// Ancho maximo util: por encima de 1600 px el peso sube sin ganancia visible.
const WIDTH = 1600;

const HEADERS = {
	'user-agent':
		'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
	'accept-language': 'es-ES,es;q=0.9',
	// Sin esta cookie Google responde con un 302 a la pagina de consentimiento.
	cookie: 'CONSENT=YES+cb.20210328-17-p0.en+FX+667;SOCS=CAI',
};

// El feature id va dentro del enlace de Maps que ya tiene cada web.
const FEATURE_ID = /0x[0-9a-f]{8,}:0x[0-9a-f]{8,}/;

const detailPb = (fid) =>
	`!1m14!1s${fid}!3m9!1m3!1d5000!2d0!3d0!2m0!3m2!1i1024!2i768!4f13.1!4m2!3d0!4d0!13m1!2m0!15m47!1m8!4e2!18m5!3b0!6b0!14b1!17b1!20b1!20e2!4b1!10m1!8e3!11m1!3e1!17b1!20m2!1e3!1e6!24b1!25b1!26b1!29b1!30m1!2b1!36b1!43b1!52b1!55b1!56m1!1b1!65m5!3m4!1m3!1m2!1i224!2i298!22m1!1e81!29m0!30m6!3b1!6m1!2b1!7m1!2b1!9b1!32b1!37i771`;

const CDN_URL = /https:\/\/lh\d\.googleusercontent\.com\/(?:gps-cs-s|grass-cs)\/[A-Za-z0-9_-]{40,}/g;

// Cada entrada de la galeria trae la URL de la miniatura con el "=" escapado por
// el JSON de Google, de ahi el patron alterno.
const URL_TAIL = /^(?:=|\\u003d)[^"]*","([^"]*)",\[(\d+),(\d+)\]/;

/**
 * Saca las fotos de una respuesta de /maps/preview/place.
 * Se recorre por indices en vez de con un unico regex: la respuesta es un array
 * anidado y sus posiciones cambian entre versiones.
 */
function parsePhotos(text) {
	const seen = new Map();
	for (const match of text.matchAll(CDN_URL)) {
		const base = match[0];
		const tail = text
			.slice(match.index + base.length, match.index + base.length + 200)
			.match(URL_TAIL);
		if (!tail) continue;
		// El id de foto va justo antes de la URL: ["<id>",10,12,<campo>,null,null,["<url>",...].
		// Es estable entre peticiones, a diferencia de la URL de la CDN, que Google
		// rota (gps-cs-s / grass-cs y base64 distinto en cada respuesta). Sin esto el
		// manifiesto no reconocería las fotos ya descargadas y las bajaría otra vez.
		// Google alterna además dos formas de respuesta según el cuarto campo sea ""
		// o null, así que se admiten las dos.
		const before = text.slice(Math.max(0, match.index - 200), match.index);
		const idMatch = before.match(/\["([A-Za-z0-9_-]{15,})",\d+,\d+,(?:"[^"]*"|null),null,null,\["$/);
		const id = idMatch ? idMatch[1] : base.slice(-40);
		if (seen.has(id)) continue;
		seen.set(id, {
			id,
			base,
			author: tail[1],
			width: Number(tail[2]),
			height: Number(tail[3]),
		});
	}
	return [...seen.values()];
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

/** Reintenta hasta que Google devuelva la ficha con su bloque de fotos. */
async function fetchPhotos(fid, attempts = 6) {
	let lastLength = 0;
	for (let i = 0; i < attempts; i++) {
		const url = `https://www.google.com/maps/preview/place?authuser=0&hl=es&gl=es&pb=${encodeURIComponent(detailPb(fid))}`;
		const text = await (await fetch(url, { headers: HEADERS })).text();
		lastLength = text.length;
		if (!text.startsWith(")]}'")) {
			// Google devuelve un HTML de error cuando le sobra la peticion.
			await sleep(1500 + i * 1000);
			continue;
		}
		const photos = parsePhotos(text);
		if (photos.length) return { photos };
		await sleep(800 + i * 600);
	}
	return { photos: [] };
}

/** El feature id sale del enlace de Maps que la web ya tiene en su codigo. */
function featureIdOf(srcDir) {
	const walk = (dir, out = []) => {
		for (const entry of readdirSync(dir, { withFileTypes: true })) {
			if (['node_modules', 'dist', '.astro'].includes(entry.name)) continue;
			const path = join(dir, entry.name);
			if (entry.isDirectory()) walk(path, out);
			else if (/\.(astro|tsx?|md)$/.test(entry.name)) out.push(path);
		}
		return out;
	};
	for (const file of walk(srcDir)) {
		// Basta con que el archivo hable de Maps: el feature id suele estar en una
		// constante aparte (cid, mapsUrl), no en la linea del enlace.
		const source = readFileSync(file, 'utf8');
		if (!/google\.[a-z.]+\/maps/.test(source)) continue;
		const found = source.match(FEATURE_ID);
		if (found) return found[0];
	}
	return null;
}

/** Nombre de archivo legible a partir de la forma de la foto. */
function descriptorFor(photo, index) {
	const ratio = photo.width / photo.height;
	if (ratio > 1.8) return 'panoramica';
	if (ratio > 1.15) return 'apaisada';
	if (ratio < 0.85) return 'vertical';
	if (photo.width === photo.height) return 'cuadrada';
	return `vista-${index + 1}`;
}

const appsDir = 'apps';
const allApps = readdirSync(appsDir).filter((app) => existsSync(join(appsDir, app, 'src')));
const apps = (all ? allApps : wanted.length ? wanted : allApps)
	.filter((app) => allApps.includes(app))
	.sort();

if (!apps.length) {
	console.log('Ninguna app coincide. Ejemplos:');
	console.log(`  ${allApps.slice(0, 3).join('\n  ')}`);
	process.exit(1);
}

const totals = { apps: 0, photos: 0, skipped: 0, withoutId: 0, failed: 0 };
const details = [];

for (const app of apps) {
	const srcDir = join(appsDir, app, 'src');
	const fid = featureIdOf(srcDir);
	if (!fid) {
		totals.withoutId++;
		console.log(`  ${app.padEnd(42)} sin feature id de Maps`);
		continue;
	}

	const { photos } = await fetchPhotos(fid);
	if (!photos.length) {
		totals.failed++;
		console.log(`  ${app.padEnd(42)} sin fotos en la respuesta`);
		continue;
	}

	totals.apps++;
	totals.photos += photos.length;

	const destDir = join(srcDir, 'assets', 'fotos');
	const manifestPath = join(destDir, '.maps-manifest.json');
	let manifest = {};
	if (existsSync(manifestPath)) manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));

	let downloaded = 0;
	let skipped = 0;
	for (const [index, photo] of photos.entries()) {
		if (manifest[photo.id]) {
			skipped++;
			continue;
		}
		const name = `${app}-${descriptorFor(photo, index)}-${String(index + 1).padStart(2, '0')}.jpg`;
		const target = join(destDir, name);

		if (dry) {
			manifest[photo.id] = { file: name, width: photo.width, height: photo.height, author: photo.author };
			downloaded++;
			continue;
		}

		mkdirSync(destDir, { recursive: true });
		const url = `${photo.base}=w${WIDTH}-h${Math.round((WIDTH * photo.height) / photo.width)}-k-no`;
		const res = await fetch(url, { headers: HEADERS });
		if (!res.ok) {
			console.log(`  ${app}: HTTP ${res.status} al descargar ${name}`);
			continue;
		}
		const buffer = Buffer.from(await res.arrayBuffer());
		writeFileSync(target, buffer);
		manifest[photo.id] = {
			file: name,
			width: photo.width,
			height: photo.height,
			author: photo.author,
			bytes: buffer.length,
		};
		downloaded++;
		await sleep(150);
	}

	if (!dry) {
		mkdirSync(destDir, { recursive: true });
		writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);
	}

	totals.skipped += skipped;
	details.push({ app, photos: photos.length, downloaded, skipped });
	const authors = new Set(photos.map((p) => p.author).filter(Boolean));
	const autor = authors.size === 1 ? [...authors][0] : authors.size ? 'varios' : 'sin autor';
	console.log(
		`  ${app.padEnd(42)} ${String(photos.length).padStart(2)} fotos` +
			` (${dry ? 'a descargar' : `nuevas ${downloaded}`}${skipped ? `, ya ${skipped}` : ''}) autor=${autor}`,
	);
	await sleep(400);
}

console.log(
	`\n${dry ? 'A descargar' : 'Descargadas'}: ${totals.photos} fotos en ${totals.apps} de ${apps.length} apps ` +
		`(${totals.skipped} ya estaban).`,
);
if (totals.withoutId) console.log(`${totals.withoutId} apps sin feature id de Maps en su codigo.`);
if (totals.failed) console.log(`${totals.failed} apps sin fotos en la respuesta de Google.`);

if (details.length) {
	const con = details.reduce((a, d) => a + d.photos, 0);
	console.log(`\nPromedio: ${(con / details.length).toFixed(1)} fotos por ficha con contenido.`);
}