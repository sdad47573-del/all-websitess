// Envía a IndexNow las URLs del sitemap construido (dist/sitemap-0.xml).
//
// IndexNow lo consumen Bing, Yandex, Seznam y Naver. GOOGLE NO PARTICIPA en
// IndexNow: para Google el camino es Search Console, que ya tienes en
// `bun run search-console:sitemaps -- submit --feed <url>` (subir el sitemap)
// y `bun run search-console:inspect -- <url>` (pedir indexación/ver estado).
//
// Uso:
//   bun run indexnow              → envía todas las URLs del sitemap
//   bun run indexnow --dry-run    → muestra qué enviaría, sin llamar a la API
//   bun run indexnow --sitemap dist/otro.xml
//   bun run indexnow --paths /blog/a/,/blog/b/   → solo esas rutas (envío de un lote)
//   bun run indexnow --if-live    → solo envía si la clave ya está publicada
//
// `--if-live` es el modo para automatizar: comprueba antes que la clave se
// descarga desde el host y, si no está, sale con código 0 diciendo que aún no
// toca. Sin él, conectar esto a un build es una forma de romper despliegues:
// IndexNow valida la clave descargando el fichero del host, y en un build las
// URLs nuevas todavía no están publicadas.
//
// La clave de IndexNow vive en `public/<clave>.txt` (requisito del protocolo: el
// fichero debe ser accesible en https://<host>/<clave>.txt y contener la clave),
// así que ese fichero es la ÚNICA fuente de verdad: este script la autodetecta
// y no hay que duplicarla aquí.
//
// Ejecútalo DESPUÉS de desplegar: IndexNow valida la clave descargando ese
// fichero del host, y en producción no existe hasta que el deploy está publicado.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
const DEFAULT_SITEMAP = path.join(DIST, 'sitemap-0.xml');
const DEFAULT_ENDPOINT = 'https://api.indexnow.org/indexnow';
const MAX_URLS_PER_REQUEST = 10_000;
const KEY_PATTERN = /^[A-Za-z0-9-]{8,128}$/;

/** Motivos de rechazo de la API, según la especificación de IndexNow. */
const REJECTION_HINTS = {
	400: 'petición mal formada (revisa host/key/urlList)',
	403: 'clave inválida: el fichero public/<clave>.txt no se descarga o no contiene la clave',
	422: 'alguna URL no pertenece al host declarado, o la clave no coincide',
	429: 'demasiadas peticiones: espera y reintenta',
};

function fail(message) {
	console.error(`✖ ${message}`);
	process.exit(1);
}

function parseArgs(argv) {
	const options = {
		dryRun: false,
		ifLive: false,
		sitemap: DEFAULT_SITEMAP,
		endpoint: DEFAULT_ENDPOINT,
		key: undefined,
		host: undefined,
		paths: undefined,
	};
	for (let i = 0; i < argv.length; i += 1) {
		const arg = argv[i];
		const next = () => {
			const value = argv[i + 1];
			if (!value || value.startsWith('--')) fail(`${arg} necesita un valor.`);
			i += 1;
			return value;
		};
		if (arg === '--dry-run') options.dryRun = true;
		else if (arg === '--if-live') options.ifLive = true;
		else if (arg === '--sitemap') options.sitemap = next();
		else if (arg === '--endpoint') options.endpoint = next();
		else if (arg === '--key') options.key = next();
		else if (arg === '--host') options.host = next();
		else if (arg === '--paths')
			options.paths = next()
				.split(',')
				.map((value) => value.trim())
				.filter(Boolean);
		else fail(`argumento no reconocido: ${arg}`);
	}
	return options;
}

/**
 * Autodetecta la clave IndexNow en public/: el protocolo exige un fichero
 * `<clave>.txt` cuyo contenido sea la propia clave. Buscarlo por esa
 * coincidencia descarta solo robots.txt, humans.txt y similares.
 */
function resolveKey(explicitKey) {
	if (explicitKey) {
		if (!KEY_PATTERN.test(explicitKey)) fail('la clave --key no tiene un formato válido.');
		return explicitKey;
	}
	const fromEnv = process.env.INDEXNOW_KEY;
	if (fromEnv) {
		if (!KEY_PATTERN.test(fromEnv)) fail('INDEXNOW_KEY no tiene un formato válido.');
		return fromEnv;
	}
	const publicDir = 'public';
	if (!fs.existsSync(publicDir)) fail('no existe public/: ejecútalo desde la raíz del proyecto.');
	for (const file of fs.readdirSync(publicDir)) {
		if (!file.endsWith('.txt')) continue;
		const key = path.basename(file, '.txt');
		if (!KEY_PATTERN.test(key)) continue;
		if (fs.readFileSync(path.join(publicDir, file), 'utf8').trim() === key) return key;
	}
	return fail(
		'no encuentro la clave IndexNow. Crea `public/<clave>.txt` con la clave dentro ' +
			'(el contenido debe ser exactamente la clave, sin espacios).',
	);
}

function readSitemap(sitemapPath) {
	if (!fs.existsSync(sitemapPath)) {
		fail(`${sitemapPath} no existe — ejecuta antes \`bun run build\`.`);
	}
	const xml = fs.readFileSync(sitemapPath, 'utf8');
	const urls = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((match) => match[1]);
	if (urls.length === 0) fail(`${sitemapPath} no contiene URLs (<loc>).`);
	return urls;
}

function chunk(list, size) {
	const chunks = [];
	for (let i = 0; i < list.length; i += size) chunks.push(list.slice(i, i + size));
	return chunks;
}

async function submit(endpoint, payload) {
	const response = await fetch(endpoint, {
		method: 'POST',
		headers: { 'content-type': 'application/json; charset=utf-8' },
		body: JSON.stringify(payload),
	});
	const body = await response.text();
	return { status: response.status, ok: response.ok, body: body.trim() };
}

/**
 * IndexNow valida la clave descargando `<clave>.txt` del host. Si las URLs del
 * sitemap aún no están desplegadas, ese fichero devuelve un 404 y la API
 * responde 403. Comprobarlo aquí permite usar el script en modo automático sin
 * que un build falle por culpa de un despliegue que aún no ha ocurrido.
 */
async function clavePublicada(url) {
	try {
		const response = await fetch(url, { redirect: 'follow' });
		if (!response.ok) return false;
		const esperada = url.split('/').pop()?.replace(/\.txt$/, '');
		return (await response.text()).trim() === esperada;
	} catch {
		return false;
	}
}

async function main() {
	const options = parseArgs(process.argv.slice(2));
	const all = readSitemap(options.sitemap);

	// El host y el esquema salen del propio sitemap: así lo que se envía es
	// exactamente el dominio al que el build canonicaliza, sin duplicar la
	// constante SITE_URL en otro sitio.
	let origin;
	try {
		origin = new URL(all[0]).origin;
	} catch {
		fail(`la primera URL del sitemap no es válida: ${all[0]}`);
	}
	const host = options.host ?? new URL(origin).host;
	const urls = all.filter((url) => {
		try {
			return new URL(url).host === host;
		} catch {
			return false;
		}
	});
	const descartadas = all.length - urls.length;

	// Envío dirigido (--paths): solo las rutas indicadas y solo si existen en el
	// sitemap. Sin esto, publicar tres guías obliga a reenviar el sitio entero o
	// a repetir URLs a mano, que es donde se cuelan las erratas.
	let selected = urls;
	if (options.paths?.length) {
		const normalizar = (ruta) => {
			// Git Bash en Windows reescribe `/blog/x/` como `C:/Program Files/Git/blog/x/`
			// al pasarlo como argumento (conversión MSYS de rutas). Si aparece un
			// segmento /blog/, se toma desde ahí para no rechazar una ruta válida.
			const msys = ruta.includes('/blog/') && !ruta.startsWith('/blog/')
				? ruta.slice(ruta.indexOf('/blog/'))
				: ruta;
			const conBarra = msys.startsWith('/') ? msys : `/${msys}`;
			return conBarra.replace(/\/+$/, '') + '/';
		};
		const pedidas = new Set(options.paths.map(normalizar));
		selected = urls.filter((url) => pedidas.has(new URL(url).pathname));
		const encontradas = new Set(selected.map((url) => new URL(url).pathname));
		const faltan = [...pedidas].filter((ruta) => !encontradas.has(ruta));
		if (faltan.length > 0) fail(`--paths: no están en el sitemap: ${faltan.join(', ')}`);
	}

	const key = resolveKey(options.key);

	console.log(`Sitemap:  ${options.sitemap}`);
	console.log(`Host:     ${host}`);
	console.log(`Clave:    ${key} (public/${key}.txt)`);
	console.log(
		`URLs:     ${selected.length}${options.paths ? ' (filtradas con --paths)' : ''}` +
			`${descartadas ? ` (${descartadas} descartadas por no ser del host)` : ''}`,
	);

	if (options.dryRun) {
		console.log('\n--dry-run: no se llama a la API. Se enviaría a ' + options.endpoint + ':');
		for (const url of selected) console.log(`   ${url}`);
		console.log(`\n✓ Dry-run OK — ${selected.length} URLs listas (quita --dry-run para enviarlas).`);
		return;
	}

	const keyLocation = `${origin}/${key}.txt`;

	if (options.ifLive) {
		const publicada = await clavePublicada(keyLocation);
		if (!publicada) {
			console.log(
				`
⏭ --if-live: ${keyLocation} todavía no devuelve la clave, así que las URLs ` +
					'aún no están publicadas. No se envía nada. Vuelve a lanzarlo tras el deploy.',
			);
			return;
		}
		console.log(`Clave pública: verificada en ${keyLocation}`);
	}

	const payloadBase = { host, key, keyLocation };
	let enviadas = 0;
	for (const group of chunk(selected, MAX_URLS_PER_REQUEST)) {
		const result = await submit(options.endpoint, { ...payloadBase, urlList: group });
		if (!result.ok) {
			const hint = REJECTION_HINTS[result.status] ?? 'revisa la respuesta de la API';
			fail(`IndexNow devolvió ${result.status}: ${hint}${result.body ? ` — ${result.body}` : ''}`);
		}
		enviadas += group.length;
		console.log(`   ${result.status} → ${group.length} URLs aceptadas`);
	}
	// Códigos de éxito: 200 (procesado) y 202 (aceptado, clave pendiente de validar).
	console.log(`\n✓ IndexNow OK — ${enviadas} URLs enviadas (Bing, Yandex, Seznam, Naver).`);
	console.log('  Google no usa IndexNow: súbele el sitemap con `bun run search-console:sitemaps -- submit`.');
}

main().catch((error) => fail(error instanceof Error ? error.message : String(error)));
