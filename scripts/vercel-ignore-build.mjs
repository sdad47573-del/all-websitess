/**
 * Ignored Build Step para los proyectos de Vercel de este monorepo.
 *
 * Cada app de `apps/` es su propio proyecto de Vercel conectado a este mismo repositorio, así
 * que un commit dispara un build en cada uno de los 188: 187 builds que no cambian de código.
 * Este script decide si el proyecto actual merece construirse y, cuando no, cancela el build
 * ANTES de pagar la instalación de dependencias y el `astro build`.
 *
 * ## OJO con los códigos de salida: están invertidos
 *
 * En el Ignored Build Step, `0` significa SALTAR el build y `>= 1` significa CONSTRUIR. Es lo
 * contrario de la convención de Unix, así que aquí `proceedWithBuild()` devuelve 1 y
 * `skipBuild()` devuelve 0. Un script escrito al revés se traga todos los commits en silencio.
 *
 * ## Qué considera "esta app ha cambiado"
 *
 * Se construye el caso, y solo se construye si el diff toca alguno de estos sitios:
 *
 * - `apps/<esta app>/`: su propio código.
 * - Los paquetes del workspace que importa (`workspace:*` en su `package.json`), resueltos a su
 *   carpeta real (`@app-server` → `packages/app-server`). Un cambio ahí es un cambio real.
 * - `package.json`, `turbo.json`, `tsconfig.base.json` y `.npmrc` en la raíz: la configuración
 *   global del repo (workspaces, `resolutions`, grafo de tareas).
 *
 * Todo lo demás (`README`, `docs/`, `scripts/`, otra app, etc.) no obliga a reconstruir esta.
 *
 * ## El lockfile NO se trata como un fichero global
 *
 * `bun.lock` vive en la raíz y lo comparten los 188 proyectos, así que tratarlo como "cambio
 * global" disparaba las 188 builds cada vez que se tocaba. Y se toca constantemente: añadir una
 * dependencia a una app, o incluso instalar en local con la app de trabajo, reescribe el fichero
 * entero. En el diff de un solo `bun install` hay cientos de entradas que cambian de versión por
 * *hoisting* (`strip-ansi`, `wrap-ansi` y compañía se mueven entre el nivel raíz y el anidado)
 * sin que ninguna app cambie de código.
 *
 * Por eso, cuando el diff toca el lockfile, se compara el lockfile publicado con el nuevo y solo
 * se construye si cambia algo que esta app usa de verdad:
 *
 * - El bloque de dependencias declaradas de esta app dentro del lockfile.
 * - La entrada resuelta de alguna dependencia DECLARADA por la app (o por los paquetes del
 *   workspace que la app importa). Se miran las declaradas y no todo el árbol: una dependencia
 *   transitiva que cambia de versión por reorganización del árbol no cambia el código que la app
 *   compila, y es justo el ruido que disparaba las 188 builds.
 * - `overrides` del lockfile (las `resolutions` de la raíz), que fuerzan versiones en todo el
 *   grafo.
 *
 * Un cambio REAL de dependencias siempre toca el `package.json` de la app, y eso ya la
 * reconstruye por la vía de arriba. Si el lockfile no se puede leer o comparar, se construye:
 * un fallo del filtro nunca debe dejar una web sin publicar.
 *
 * ## El diff: contra qué commit se compara
 *
 * Un `git diff HEAD^ HEAD` compara solo con el commit anterior, y ahí es donde se cuelan los
 * fallos: en un push con varios commits, o tras un merge, el commit anterior puede no tocar esta
 * app aunque el push sí lo haga. Por eso la base se elige en este orden:
 *
 * 1. `VERCEL_GIT_PREVIOUS_SHA`, el commit del último despliegue de ESTE proyecto. Es lo que hay
 *    publicado, y por tanto justo lo que hay que volver a compilar. Es el caso normal en Vercel.
 * 2. Si ese SHA no está en el clon, **se descarga** con `git fetch`. Este paso no es opcional:
 *    Vercel clona con poco historial, así que el commit anterior casi siempre falta en el clon.
 *    Sin traerlo, el filtro se queda sin base y cae al punto 3, que acaba construyendo las 188.
 * 3. Si no hay forma de saber qué está publicado (tampoco hay `VERCEL_GIT_PREVIOUS_SHA`, o el
 *    fetch falla), se usa el ancestro más antiguo de la ventana de historial, que cubre todos
 *    los commits del push. Sobredimensiona el diff y construye de más, pero nunca deja sin
 *    publicar.
 *
 * Si el diff falla, se construye: un error de git tratado como "sin cambios" desplegaría webs
 * desactualizadas en silencio, que es el peor fallo posible en un filtro de despliegue.
 *
 * ## También sirve para Netlify
 *
 * Netlify tiene el mismo problema (140 sitios sobre el mismo repo) y el mismo remedio: la
 * clave `ignore` de `netlify.toml` con la misma convención invertida (`0` salta, `1`
 * construye). El `ignore` corre desde el Base Directory con Node 18 fijo y expone
 * `CACHED_COMMIT_REF` en vez de `VERCEL_GIT_PREVIOUS_SHA`; ver `resolveNetlifyBase`.
 *
 * Tres cosas que impone Netlify y este script respeta:
 *
 * - Node 18 sin dependencias del `package.json` del sitio: solo se usa la librería estándar
 *   de Node (`child_process`, `fs`, `path`, `url`). Nada de `import.meta.dirname` (Node 20+).
 * - La ruta al fichero en el `ignore` debe empezar por `./`: en `netlify.toml` va
 *   `ignore = "node ./../../scripts/vercel-ignore-build.mjs"`, que resuelve igual que la de
 *   Vercel pero cumple la regla de Netlify.
 * - El `ignore` no cancela builds lanzados por build hook: esos siempre construyen.
 *
 * ## Notas de entorno
 *
 * - Vercel clona con poco historial (`--depth`), así que la ventana del push se limita a 10
 *   commits y, si el repo tiene menos, se compara contra el árbol vacío.
 * - El script corre en el Root Directory del proyecto, no en la raíz del repo. Por eso sube dos
 *   niveles con `path.resolve(rootDir, '../..')`.
 * - Si algo falla (repo sin git, `package.json` ilegible...), se construye. Un fallo del filtro
 *   nunca debe dejar una web sin publicar.
 * - Siempre se imprime la base usada (`comparando contra <sha>`). Si algún día vuelve a
 *   dispararse todo, el log dice en una línea por qué base se comparó.
 *
 * Uso manual (para depurar):
 *   node scripts/vercel-ignore-build.mjs            # imprime el veredicto y el código de salida
 *   node scripts/vercel-ignore-build.mjs --explain  # además, lista los ficheros que cambiaron
 */

import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/**
 * Carpeta de este script. Se resuelve con `fileURLToPath(import.meta.url)` y no con
 * `import.meta.dirname` porque Netlify ejecuta el `ignore` con Node 18 fijo (no se puede
 * cambiar) y `import.meta.dirname` solo existe desde Node 20.11: con el otro el script
 * reventaría al cargarlo, antes de decidir nada.
 */
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));

/** Ventana de commits que mira Vercel: clona con `--depth=10`. */
const MAX_DEPTH = 10;

/** Lockfile del workspace. Se evalúa aparte porque su cambio no afecta a todas las apps igual. */
const LOCKFILE = 'bun.lock';

/**
 * Rutas cuyo cambio obliga a reconstruir cualquier app. Son la configuración global del repo y
 * los paquetes compartidos que importan casi todas las apps, que afectan a todas por igual.
 *
 * El lockfile NO está aquí a propósito: ver el bloque "El lockfile NO se trata como un fichero
 * global" de la cabecera.
 */
const GLOBAL_PATHS = [
	'packages/@astro-config',
	'packages/@astro-components',
	'package.json',
	'turbo.json',
	'tsconfig.base.json',
	'.npmrc',
];

/** Árbol vacío de git: la base "no había nada" cuando el repo tiene menos commits que la ventana. */
const EMPTY_TREE = '4b825dc642cb6eb9a060e54bf8d69288fbee4904';

/** Si el comando de git falla, no se filtra nada: se construye. */
const git = (args, cwd) => {
	try {
		return execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] });
	} catch {
		return null;
	}
};

/** ¿Existe este commit en el clon? */
const hasCommit = (repoRoot, rev) => git(['cat-file', '-e', `${rev}^{commit}`], repoRoot) !== null;

/** Contenido de un fichero en un commit concreto, o `null` si ese commit o fichero no está. */
const fileAt = (rev, file, repoRoot) => git(['show', `${rev}:${file}`], repoRoot);

/** Nombres de los paquetes del workspace que importa esta app (`workspace:*` en su manifiesto). */
const workspaceDeps = (appDir) => {
	const manifest = path.join(appDir, 'package.json');
	if (!existsSync(manifest)) return [];
	try {
		const { dependencies = {}, devDependencies = {} } = JSON.parse(readFileSync(manifest, 'utf8'));
		return [
			...Object.entries(dependencies),
			...Object.entries(devDependencies),
		]
			.filter(([, version]) => String(version).startsWith('workspace:'))
			.map(([name]) => name);
	} catch {
		return [];
	}
};

/** Nombres de paquete → carpeta, para todo lo que hay bajo `packages/`. */
const workspacePackages = (repoRoot) => {
	const map = new Map();
	let entries;
	try {
		entries = readdirSync(path.join(repoRoot, 'packages'), { withFileTypes: true });
	} catch {
		return map;
	}
	for (const entry of entries) {
		if (!entry.isDirectory()) continue;
		const dir = path.join(repoRoot, 'packages', entry.name);
		try {
			const { name } = JSON.parse(readFileSync(path.join(dir, 'package.json'), 'utf8'));
			if (name) map.set(name, dir);
		} catch {
			// Un paquete sin `package.json` legible no se puede resolver por nombre: se ignora.
		}
	}
	return map;
};

/**
 * Nombres declarados por un `package.json`: lo que ese paquete instala de verdad. No incluye
 * transitivas, que son justo las que cambian de sitio sin que la app cambie.
 */
const declaredNames = (manifestPath) => {
	if (!existsSync(manifestPath)) return [];
	try {
		const { dependencies = {}, devDependencies = {}, optionalDependencies = {} } = JSON.parse(
			readFileSync(manifestPath, 'utf8'),
		);
		return [
			...Object.keys(dependencies),
			...Object.keys(devDependencies),
			...Object.keys(optionalDependencies),
		];
	} catch {
		return [];
	}
};

/** Nombres declarados por la app más los de los paquetes del workspace que importa (recursivo). */
const declaredClosure = (repoRoot, appPath) => {
	const packages = workspacePackages(repoRoot);
	const names = new Set();
	const pending = [appPath];
	const visited = new Set();
	while (pending.length > 0) {
		const dir = pending.pop();
		if (visited.has(dir)) continue;
		visited.add(dir);
		for (const name of declaredNames(path.join(dir, 'package.json'))) {
			names.add(name);
			const workspaceDir = packages.get(name);
			if (workspaceDir) pending.push(workspaceDir);
		}
	}
	return names;
};

/** Ficheros que cambiaron entre dos commits, o `null` si no se pudo comprobar. */
const changedFiles = (from, to, repoRoot) => {
	// Dos puntos, no tres: con tres git busca el ancestro común y la base vacía (un tree, no
	// un commit) provoca un error que se confunde con "no hay cambios".
	const diff = git(['diff', '--name-only', from, to], repoRoot);
	if (diff === null) return null;
	return diff.split('\n').map((line) => line.trim()).filter(Boolean);
};

/**
 * El lockfile de bun es JSON con comas finales, que `JSON.parse` rechaza. Devuelve `null` si no
 * se puede leer: quien llama lo trata como "no se puede comparar", y entonces se construye.
 */
const parseLockfile = (text) => {
	if (typeof text !== 'string') return null;
	try {
		return JSON.parse(text.replace(/,(\s*[}\]])/g, '$1'));
	} catch {
		return null;
	}
};

/** Compara dos bloques del lockfile por su contenido exacto; `undefined` y ausente son lo mismo. */
const sameBlock = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

/**
 * Commit más antiguo dentro de la ventana de historial que Vercel clona. Comparar contra
 * `HEAD~10` a pelo falla cuando el repo tiene menos de 10 commits, y `git diff` devolviendo un
 * error se parece a un "no hay cambios": por eso se busca el ancestro que exista de verdad y, si
 * no hay ninguno dentro de la ventana, se compara contra el árbol vacío.
 */
const resolvePushBase = (repoRoot) => {
	let oldest = null;
	for (let depth = 1; depth <= MAX_DEPTH; depth++) {
		const base = `HEAD~${depth}`;
		if (git(['cat-file', '-e', `${base}^{commit}`], repoRoot) === null) break;
		// Se guarda el último que existió, no el primero: interesa el ancestro MÁS ANTIGUO de la
		// ventana, que es el que incluye todos los commits del push en el diff. Parar en el
		// primero hacía que un push de varios commits se leyera como un solo commit.
		oldest = base;
	}
	if (oldest) return oldest;
	// Menos commits que la ventana: se compara contra el árbol vacío, que representa "no había
	// nada publicado todavía", de modo que todo el contenido del repo cuente como cambio. Va sin
	// sufijo `^{tree}`: `git diff` no acepta esa anotación y fallaría como si no hubiera cambios.
	return EMPTY_TREE;
};

/**
 * Trae un commit que no está en el clon.
 *
 * Vercel hace un clon shallow: `VERCEL_GIT_PREVIOUS_SHA` llega siempre como variable de entorno,
 * pero su commit casi nunca está entre los pocos que Vercel descarga. Descartarlo sin más deja el
 * filtro sin base contra la que comparar, y el recurso de seguridad de abajo construye las 188
 * apps en cada push. Por eso se pide ese commit concreto al remoto antes de renunciar.
 *
 * Se pide **por SHA**, no con `--deepen`: profundizar el historial del branch lo deja más ancho y,
 * si el SHA buscado no aparece, el recurso de seguridad acaba comparando contra un ancestro más
 * antiguo y construye todavía más. Es un caso medido: `--deepen` convertir un push de 1 app en
 * un push de 188.
 *
 * Devuelve `true` solo si el commit está disponible después del fetch. Es best-effort: si no hay
 * red o el remoto no responde, se sigue con la base de la ventana.
 */
const fetchCommit = (repoRoot, sha) => {
	const remotes = (git(['remote'], repoRoot) ?? '')
		.split('\n')
		.map((line) => line.trim())
		.filter(Boolean);

	for (const remote of remotes) {
		const fetched = git(
			['fetch', '--quiet', '--no-tags', `--depth=${MAX_DEPTH}`, remote, sha],
			repoRoot,
		);
		if (fetched !== null && hasCommit(repoRoot, sha)) return true;
	}
	return false;
};

/**
 * Base contra la que comparar lo publicado en Netlify, con la misma explicación.
 *
 * Netlify expone `CACHED_COMMIT_REF` (el commit del último despliegue con éxito de ESTE sitio)
 * y `COMMIT_REF` (el que se está construyendo), y clona el repo completo, así que el commit
 * suele estar en el clon sin descargar nada. `fetchCommit` queda como recurso por si acaso.
 *
 * El caso que no existe en Vercel es el primer despliegue: `CACHED_COMMIT_REF` viene vacío
 * porque aún no hay nada publicado. Comparar entonces contra la ventana de commits sería
 * comparar 10 commits contra HEAD y, si ninguno toca esta app, saltarse el build y dejar el
 * sitio sin publicar para siempre. Por eso sin `CACHED_COMMIT_REF` se compara contra el árbol
 * vacío: todo el repo cuenta como cambio y el sitio se despliega sí o sí.
 */
const resolveNetlifyBase = (repoRoot) => {
	const cached = process.env.CACHED_COMMIT_REF;
	if (!cached) {
		return { rev: EMPTY_TREE, source: 'primer despliegue (sin CACHED_COMMIT_REF)' };
	}
	if (hasCommit(repoRoot, cached)) {
		return { rev: cached, source: 'CACHED_COMMIT_REF' };
	}
	if (fetchCommit(repoRoot, cached)) {
		return { rev: cached, source: 'CACHED_COMMIT_REF (descargado)' };
	}
	return {
		rev: resolvePushBase(repoRoot),
		source: `ventana de commits (CACHED_COMMIT_REF=${cached} no se pudo descargar)`,
	};
};

/**
 * Base contra la que comparar lo publicado, con una explicación de por qué se eligió esa.
 *
 * Se prioriza el SHA del despliegue anterior, que es lo que de verdad hay en producción. Si no
 * está en el clon se intenta traerlo (`fetchCommit`), y solo si eso tampoco vale se recurre a la
 * ventana del push.
 *
 * En Netlify (`NETLIFY=true`, que Netlify siempre define) manda `resolveNetlifyBase`: lee
 * `CACHED_COMMIT_REF` en vez de `VERCEL_GIT_PREVIOUS_SHA`. Fuera de Netlify el camino de
 * Vercel queda intacto.
 */
const resolveBase = (repoRoot) => {
	if (process.env.NETLIFY === 'true') return resolveNetlifyBase(repoRoot);
	const previousSha = process.env.VERCEL_GIT_PREVIOUS_SHA;
	if (previousSha) {
		if (hasCommit(repoRoot, previousSha)) {
			return { rev: previousSha, source: 'VERCEL_GIT_PREVIOUS_SHA' };
		}
		if (fetchCommit(repoRoot, previousSha)) {
			return { rev: previousSha, source: 'VERCEL_GIT_PREVIOUS_SHA (descargado)' };
		}
		return {
			rev: resolvePushBase(repoRoot),
			source: `ventana de commits (VERCEL_GIT_PREVIOUS_SHA=${previousSha} no se pudo descargar)`,
		};
	}
	return { rev: resolvePushBase(repoRoot), source: 'ventana de commits (sin VERCEL_GIT_PREVIOUS_SHA)' };
};

/**
 * El proyecto de Vercel es `apps/<nombre>`. Se lee de su `package.json`, no de la ruta del
 * proceso, para que el script funcione igual si alguien lo ejecuta desde otro sitio.
 */
const appDir = (repoRoot) => {
	const fromEnv = process.env.VERCEL_PROJECT_ROOT_DIRECTORY;
	const candidate = fromEnv
		? path.resolve(repoRoot, fromEnv)
		: path.resolve(process.cwd());
	return existsSync(path.join(candidate, 'package.json')) ? candidate : null;
};

/**
 * Veredicto sobre el lockfile para ESTA app.
 *
 * Se compara el lockfile publicado (el commit base) con el que se va a construir, y solo se
 * construye si cambia algo que la app usa de verdad. Ver el bloque "El lockfile NO se trata como
 * un fichero global" de la cabecera: el ruido de *hoisting* de un `bun install` no debe
 * reconstruir apps cuyo código y cuyas dependencias declaradas no han cambiado.
 *
 * Ante la duda (lockfile ilegible, por ejemplo) se construye: el filtro puede construir de más,
 * nunca dejar una web sin publicar.
 */
function lockfileVerdict({ repoRoot, appDir: app, base }) {
	const after = parseLockfile(
		existsSync(path.join(repoRoot, LOCKFILE))
			? readFileSync(path.join(repoRoot, LOCKFILE), 'utf8')
			: null,
	);
	const before = parseLockfile(fileAt(base, LOCKFILE, repoRoot));
	if (!after || !before) {
		return {
			build: true,
			reasons: [`no se pudo leer o comparar ${LOCKFILE}`],
			files: [],
		};
	}

	// `overrides` son las `resolutions` de la raíz: fuerzan versiones en todo el grafo, así que
	// afectan a cualquier app por igual, igual que un cambio en el `package.json` de la raíz.
	if (!sameBlock(after.overrides, before.overrides)) {
		return {
			build: true,
			reasons: [`${LOCKFILE} cambió las overrides (resolutions) de la raíz`],
			files: [],
		};
	}

	// El bloque del propio workspace: si cambia, las dependencias declaradas de la app cambiaron.
	const appRelative = path.relative(repoRoot, app).replaceAll('\\', '/');
	if (!sameBlock(after.workspaces?.[appRelative], before.workspaces?.[appRelative])) {
		return {
			build: true,
			reasons: [`${LOCKFILE} cambió el bloque de dependencias de este workspace`],
			files: [],
		};
	}

	// Dependencias declaradas por la app (y por los paquetes del workspace que importa): si la
	// entrada resuelta de alguna cambia, el build puede compilar otro código y hay que rehacerlo.
	const changed = [...declaredClosure(repoRoot, app)].filter(
		(name) => !sameBlock(after.packages?.[name], before.packages?.[name]),
	);
	if (changed.length > 0) {
		return {
			build: true,
			reasons: [`${LOCKFILE} cambió la resolución de dependencias declaradas: ${changed.join(', ')}`],
			files: [],
		};
	}

	return {
		build: false,
		reasons: [
			`${LOCKFILE} cambió, pero ninguna dependencia declarada por esta app cambia de resolución`,
		],
		files: [],
	};
}

/**
 * Decide si hay que construir. Devuelve `{ build, reasons, files }` con la explicación, para
 * poder imprimirla en el log de Vercel y entender por qué un deploy sí o no ocurrió.
 */
export function shouldBuild({ repoRoot, appDir: app, explain = false } = {}) {
	const root = repoRoot ?? path.resolve(SCRIPT_DIR, '..');
	const appPath = app ?? appDir(root);
	if (!appPath) {
		return { build: true, reasons: ['no se encontró el package.json de la app'], files: [], base: null };
	}

	const { rev: base, source } = resolveBase(root);
	if (!base) {
		return { build: true, reasons: ['no se pudo resolver el commit base'], files: [], base: null };
	}

	// Qué diff manda:
	//
	// - Con `VERCEL_GIT_PREVIOUS_SHA` (lo normal en Vercel) se compara solo contra el
	//   despliegue anterior: es exactamente lo que aún no está publicado. Añadir además la
	//   ventana de 10 commits reintroduciría cambios ya desplegados y construiría de más.
	// - Sin ese SHA no hay forma de saber qué está publicado, así que se usa la ventana del
	//   push, que sobreconstruye antes que dejar una web sin publicar.
	//
	// Si el diff falla NO se puede afirmar que no haya cambios: se construye. Tratar un error de
	// git como "sin cambios" publicaría websites desactualizadas en silencio, que es el peor
	// fallo posible en un filtro de despliegue.
	const beforeDeploy = changedFiles(base, 'HEAD', root);
	if (beforeDeploy === null) {
		return {
			build: true,
			reasons: ['no se pudo calcular el diff de cambios'],
			files: [],
			base: { rev: base, source },
		};
	}
	const files = beforeDeploy;

	// Todo lo que, si cambia, obliga a reconstruir ESTA app. Los paquetes del workspace se
	// resuelven por nombre a su carpeta real: `@app-server` vive en `packages/app-server`, y
	// comparar contra el nombre del paquete no encontraría nunca sus ficheros.
	const packages = workspacePackages(root);
	const watched = [
		path.relative(root, appPath).replaceAll('\\', '/'),
		...workspaceDeps(appPath).map((name) =>
			packages.has(name)
				? path.relative(root, packages.get(name)).replaceAll('\\', '/')
				: name,
		),
	];
	const hits = files.filter((file) =>
		watched.some((prefix) => file === prefix || file.startsWith(`${prefix}/`)),
	);
	if (hits.length > 0) {
		return {
			build: true,
			reasons: [`cambió ${hits.length} fichero(s) de la app o de sus dependencias`],
			files: explain ? hits : [],
			base: { rev: base, source },
		};
	}

	// El lockfile se evalúa aparte y por app: ver `lockfileVerdict`.
	const notes = [];
	if (files.includes(LOCKFILE)) {
		const verdict = lockfileVerdict({ repoRoot: root, appDir: appPath, base });
		if (verdict.build) {
			return {
				build: true,
				reasons: verdict.reasons,
				files: explain ? verdict.files : [],
				base: { rev: base, source },
			};
		}
		notes.push(...verdict.reasons);
	}

	// Cambios globales que afectan a todas las apps del workspace.
	const globalHits = files.filter((file) =>
		GLOBAL_PATHS.some((prefix) => file === prefix || file.startsWith(`${prefix}/`)),
	);
	if (globalHits.length > 0) {
		return {
			build: true,
			reasons: [`cambiaron dependencias o configuración global: ${globalHits.join(', ')}`],
			files: explain ? globalHits : [],
			base: { rev: base, source },
		};
	}

	return {
		build: false,
		reasons: [...notes, `ningún cambio en ${watched.join(', ')} ni en las rutas globales`],
		files: explain ? files : [],
		base: { rev: base, source },
	};
}

/**
 * Punto de entrada para Vercel (`ignoreCommand`) y Netlify (`ignore`). `0` salta el build,
 * `1` lo ejecuta en las dos plataformas (ver la nota de códigos invertidos al principio del
 * archivo): Netlify usa la misma convención que Vercel.
 */
const main = () => {
	const explain = process.argv.includes('--explain');
	const { build, reasons, files, base } = shouldBuild({ explain });

	// La base se imprime siempre: si algún día vuelve a dispararse todo, el log dice en una línea
	// contra qué se comparó y por qué se eligió esa, que es justo lo que faltaba para diagnosticarlo.
	if (base) console.log(`  base: ${base.rev} (${base.source})`);
	for (const file of files) console.log(`  - ${file}`);
	if (build) {
		console.log(`▶ Build: sí. ${reasons.join('; ')}`);
		process.exit(1);
	}
	console.log(`⏭ Build: no. ${reasons.join('; ')}`);
	process.exit(0);
};

// Solo cuando se ejecuta directamente, para que `shouldBuild` se pueda importar en tests.
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url))) {
	main();
}
