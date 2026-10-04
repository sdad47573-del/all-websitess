/**
 * Ignored Build Step para los proyectos de Vercel de este monorepo.
 *
 * Cada app de `apps/` es su propio proyecto de Vercel conectado a este mismo repositorio, así
 * que un commit dispara un build en cada una de las 144: 143 builds que no cambian de código.
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
 * - `packages/@astro-config` y `packages/@astro-components`: los paquetes del workspace que
 *   importan casi todas las apps. Un cambio ahí es un cambio real para ellas.
 * - `package.json`, `bun.lock`, `turbo.json`, `tsconfig.base.json` y `.npmrc` en la raíz: la
 *   resolución de dependencias y el grafo de tareas son de todo el repo.
 *
 * Todo lo demás (`README`, `docs/`, `scripts/`, otra app, etc.) no obliga a reconstruir esta.
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
 *    Sin traerlo, el filtro se queda sin base y cae al punto 3, que acaba construyendo las 144.
 * 3. Si no hay forma de saber qué está publicado (tampoco hay `VERCEL_GIT_PREVIOUS_SHA`, o el
 *    fetch falla), se usa el ancestro más antiguo de la ventana de historial, que cubre todos
 *    los commits del push. Sobredimensiona el diff y construye de más, pero nunca deja sin
 *    publicar.
 *
 * Si el diff falla, se construye: un error de git tratado como "sin cambios" desplegaría webs
 * desactualizadas en silencio, que es el peor fallo posible en un filtro de despliegue.
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
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';

/** Ventana de commits que mira Vercel: clona con `--depth=10`. */
const MAX_DEPTH = 10;

/**
 * Rutas cuyo cambio obliga a reconstruir cualquier app. Son las dependencias del workspace y
 * los ficheros de resolución de dependencias, que afectan a todas por igual.
 */
const GLOBAL_PATHS = [
	'packages/@astro-config',
	'packages/@astro-components',
	'package.json',
	'bun.lock',
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

/** Nombres de los ficheros del workspace de los que esta app depende. */
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

/** Ficheros que cambiaron entre dos commits, o `null` si no se pudo comprobar. */
const changedFiles = (from, to, repoRoot) => {
	// Dos puntos, no tres: con tres git busca el ancestro común y la base vacía (un tree, no
	// un commit) provoca un error que se confunde con "no hay cambios".
	const diff = git(['diff', '--name-only', from, to], repoRoot);
	if (diff === null) return null;
	return diff.split('\n').map((line) => line.trim()).filter(Boolean);
};

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
 * filtro sin base contra la que comparar, y el recurso de seguridad de abajo construye las 144
 * apps en cada push. Por eso se pide ese commit concreto al remoto antes de renunciar.
 *
 * Se pide **por SHA**, no con `--deepen`: profundizar el historial del branch lo deja más ancho y,
 * si el SHA buscado no aparece, el recurso de seguridad acaba comparando contra un ancestro más
 * antiguo y construye todavía más. Es un caso medido: `--deepen` convertir un push de 1 app en
 * un push de 144.
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
 * Base contra la que comparar lo publicado, con una explicación de por qué se eligió esa.
 *
 * Se prioriza el SHA del despliegue anterior, que es lo que de verdad hay en producción. Si no
 * está en el clon se intenta traerlo (`fetchCommit`), y solo si eso tampoco vale se recurre a la
 * ventana del push.
 */
const resolveBase = (repoRoot) => {
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
 * Decide si hay que construir. Devuelve `{ build, reasons, files }` con la explicación, para
 * poder imprimirla en el log de Vercel y entender por qué un deploy sí o no ocurrió.
 */
export function shouldBuild({ repoRoot, appDir: app, explain = false } = {}) {
	const root = repoRoot ?? path.resolve(import.meta.dirname, '..');
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

	// Todo lo que, si cambia, obliga a reconstruir ESTA app.
	const watched = [path.relative(root, appPath).replaceAll('\\', '/'), ...workspaceDeps(appPath)];
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
		reasons: [`ningún cambio en ${watched.join(', ')} ni en las rutas globales`],
		files: explain ? files : [],
		base: { rev: base, source },
	};
}

/**
 * Punto de entrada para Vercel. `0` salta el build, `1` lo ejecuta (ver la nota de códigos
 * invertidos al principio del archivo).
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
if (process.argv[1] && path.resolve(process.argv[1]) === path.resolve(import.meta.filename)) {
	main();
}