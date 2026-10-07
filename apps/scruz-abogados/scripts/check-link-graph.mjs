// Auditoría del grafo de enlaces internos y del nombre de las rutas (dist/).
// Uso: `bun run build && bun scripts/check-link-graph.mjs` (o `bun run qa`).
// Exit code 1 si alguna invariante se rompe (útil en CI).
//
// Qué comprueba y por qué:
//   1. RUTAS NO CANÓNICAS — ninguna ruta con mayúsculas, guiones bajos ni
//      caracteres fuera de ASCII: las URL son sensibles a mayúsculas y una
//      variante (/FAQ/ vs /faq/) parte la autoridad en dos direcciones.
//   2. HUÉRFANAS — toda ruta debe recibir al menos un enlace desde el CONTENIDO
//      de otra página (los enlaces de header/footer no bastan: son site-wide y
//      no transmiten relevancia temática).
//   3. PROFUNDIDAD — ninguna ruta a más de 2 clics desde la home. Con la
//      estructura plana + hub /servicios/ esto se cumple; si una página nueva
//      solo se enlaza desde otra de tercer nivel, salta aquí.
//   4. BREADCRUMB — toda ruta indexable declara BreadcrumbList.
//   5. HUB DE SERVICIOS — cada servicio del catálogo (SERVICES.ts) está
//      enlazado desde /servicios/, que es el distribuidor de autoridad.
import fs from 'node:fs';
import path from 'node:path';

const DIST = 'dist';
if (!fs.existsSync(DIST)) {
	console.error(`✖ ${DIST}/ no existe — ejecuta primero \`bun run build\`.`);
	process.exit(1);
}

/** Rutas que legítimamente no reciben enlaces de contenido. */
const SIN_ENLACE_DE_CONTENIDO = new Set([
	'/', // la home: todo el mundo llega desde el logo, no desde un texto
	'/buscar/', // noindex: solo tiene sentido desde la lupa del topbar
	'/aviso-legal/', // páginas legales: viven en el footer, por diseño
	'/politica-de-privacidad/',
	'/declaracion-de-accesibilidad/',
]);

/** Rutas que no declaran breadcrumb a propósito. */
const SIN_BREADCRUMB = new Set(['/', '/buscar/']);

const files = [];
function walk(dir) {
	for (const entry of fs.readdirSync(dir)) {
		const p = path.join(dir, entry);
		if (fs.statSync(p).isDirectory()) walk(p);
		else if (entry === 'index.html') files.push(p.replace(/\\/g, '/'));
	}
}
walk(DIST);

const routeOf = (file) => {
	const rel = file.replace(/^dist\//, '').replace(/index\.html$/, '').replace(/\/$/, '');
	return rel === '' ? '/' : `/${rel}/`;
};

const routes = new Map(files.map((file) => [routeOf(file), file]));

const toRoute = (href) => {
	const clean = href.split('#')[0].split('?')[0];
	if (!clean.startsWith('/')) return null;
	if (clean.startsWith('/_astro/') || clean.startsWith('/api/')) return null;
	if (/\.(png|jpe?g|svg|webp|avif|ico|xml|txt|json|pdf|css|js|html)$/i.test(clean)) return null;
	const normalized = clean.endsWith('/') ? clean : `${clean}/`;
	return routes.has(normalized) ? normalized : null;
};

const linksIn = (html, route) =>
	new Set(
		[...html.matchAll(/<a\s[^>]*?href="([^"]+)"/g)]
			.map((m) => toRoute(m[1]))
			.filter((target) => target && target !== route),
	);

const contentInbound = new Map([...routes.keys()].map((route) => [route, []]));
const missingBreadcrumb = [];
const nonCanonical = [];

for (const [route, file] of routes) {
	const html = fs.readFileSync(file, 'utf8');

	// Enlaces de contenido = los que NO vienen del header ni del footer, que son
	// site-wide y no dicen nada sobre la relevancia de la página enlazada.
	const withoutChrome = html
		.replace(/<header[\s\S]*?<\/header>/g, '')
		.replace(/<footer[\s\S]*?<\/footer>/g, '');
	for (const target of linksIn(withoutChrome, route)) contentInbound.get(target).push(route);

	if (!SIN_BREADCRUMB.has(route) && !/"@type":"BreadcrumbList"/.test(html)) {
		missingBreadcrumb.push(route);
	}
	// Mayúsculas o guion bajo (Google indexa /FAQ y /faq por separado) y
	// cualquier carácter fuera del ASCII imprimible.
	if (/[A-Z_]/.test(route) || /[^\x20-\x7E]/.test(route)) nonCanonical.push(route);
}

// Profundidad de clic: BFS real sobre el grafo completo (con TODOS los enlaces,
// como un crawler), para no depender del orden de lectura de los ficheros.
const outbound = new Map();
for (const [route, file] of routes) {
	outbound.set(route, linksIn(fs.readFileSync(file, 'utf8'), route));
}
const depth = new Map([['/', 0]]);
const queue = ['/'];
while (queue.length) {
	const current = queue.shift();
	for (const target of outbound.get(current) ?? []) {
		if (depth.has(target)) continue;
		depth.set(target, depth.get(current) + 1);
		queue.push(target);
	}
}

const orphans = [...routes.keys()].filter(
	(route) => !SIN_ENLACE_DE_CONTENIDO.has(route) && contentInbound.get(route).length === 0,
);
const tooDeep = [...routes.keys()].filter((route) => (depth.get(route) ?? Infinity) > 2);
const unreachable = [...routes.keys()].filter((route) => !depth.has(route));
const thin = [...routes.keys()].filter(
	(route) => !SIN_ENLACE_DE_CONTENIDO.has(route) && contentInbound.get(route).length < 3,
);

// ── Hub de servicios: todo el catálogo debe estar enlazado desde /servicios/ ──
let missingFromHub = [];
const serviciosHtml = fs.readFileSync(path.join(DIST, 'servicios/index.html'), 'utf8');
const servicesSource = fs.readFileSync('src/data/SERVICES.ts', 'utf8');
const servicePaths = [...servicesSource.matchAll(/path:\s*'([^']+)'/g)].map((m) => `${m[1]}/`);
for (const service of servicePaths) {
	if (!new RegExp(`href="${service}"`).test(serviciosHtml)) missingFromHub.push(service);
}

// ── Informe ──
const report = (title, list, detail) => {
	console.log(`\n=== ${title} ===`);
	if (list.length === 0) console.log('  OK ✅');
	else for (const item of list) console.log(`  ✖ ${item}${detail ? `  ${detail(item)}` : ''}`);
	return list.length;
};

console.log(`Rutas: ${routes.size} · enlaces de contenido: ${[...contentInbound.values()].flat().length}`);
let failures = 0;
failures += report('RUTAS NO CANÓNICAS (mayúsculas, guion bajo, no ASCII)', nonCanonical);
failures += report('HUÉRFANAS (sin enlace entrante de contenido)', orphans);
failures += report('NO ALCANZABLES', unreachable);
failures += report('PROFUNDIDAD DE CLIC > 2', tooDeep, (r) => `(${depth.get(r)} clics)`);
failures += report('SIN BREADCRUMB', missingBreadcrumb);
failures += report('SERVICIOS NO ENLAZADOS DESDE /servicios/', missingFromHub);

console.log('\n=== SALUD (informativo, no falla el build) ===');
console.log(`  Páginas con <3 enlaces de contenido entrantes: ${thin.length}`);
if (thin.length) console.log(`    ${thin.join(' ')}`);
console.log(`  Profundidad máxima de clic: ${Math.max(...[...routes.keys()].map((r) => depth.get(r) ?? 0))}`);

if (failures > 0) {
	console.error(`\n✖ Grafo de enlaces: ${failures} problema(s)`);
	process.exitCode = 1;
} else {
	console.log('\n✔ Grafo de enlaces OK');
}
