/**
 * Tests del Ignored Build Step.
 *
 * El escenario que motivó este fichero es real y costó 145 builds: Vercel clona el repo con poco
 * historial, así que el commit del despliegue anterior (`VERCEL_GIT_PREVIOUS_SHA`) llega como
 * variable de entorno pero **no está en el clon**. El script lo descartaba y comparaba contra la
 * ventana de commits, que incluía el commit que creó los 144 `vercel.json`; como cada
 * `vercel.json` vive dentro de su app, cada proyecto se veía "modificado" y construía.
 *
 * Estos tests reconstruyen un repo git de verdad y clonan en profundidad limitada, que es lo
 * único que reproduce el fallo: con el clon completo del repo local todo pasa y el filtro parece
 * correcto mientras en Vercel construye las 191.
 *
 * El otro grupo de tests cubre el lockfile, que es el que disparaba todos los builds sin que
 * ninguna app cambiara: un `bun install` reescribe cientos de entradas por *hoisting* y eso no
 * puede reconstruir webs cuyo código y cuyas dependencias declaradas siguen igual.
 */

import { execFileSync, spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { afterAll, beforeAll, describe, expect, test } from 'bun:test';
import { shouldBuild } from '../vercel-ignore-build.mjs';

/** Contenido del script real del monorepo: los tests lo ejecutan tal cual se despliega en Vercel. */
const SCRIPT_SOURCE = readFileSync(
	path.resolve(import.meta.dirname, '../vercel-ignore-build.mjs'),
	'utf8',
);

const git = (args: string[], cwd: string) =>
	execFileSync('git', args, { cwd, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });

/** ¿Tiene el clon este commit? Es la comprobación que en Vercel falla con `--depth=1`. */
const hasCommit = (repo: string, sha: string) => {
	if (!sha) return false;
	try {
		execFileSync('git', ['cat-file', '-e', `${sha}^{commit}`], { cwd: repo, stdio: 'ignore' });
		return true;
	} catch {
		return false;
	}
};

let workspace: string;
let origin: string;
/** SHA del commit que estaba desplegado antes del push actual: el `VERCEL_GIT_PREVIOUS_SHA`. */
let deployed = '';

/**
 * Lockfile mínimo con la misma forma que el de bun: `workspaces` (una entrada por proyecto) +
 * `packages` (la resolución de cada paquete). Es lo que el filtro parsea para decidir si el
 * lockfile afecta a esta app.
 */
const lockfile = ({
	workspaces = {},
	packages = {},
	overrides,
}: {
	workspaces?: Record<string, unknown>;
	packages?: Record<string, unknown>;
	overrides?: unknown;
}) =>
	`${JSON.stringify(
		{
			lockfileVersion: 1,
			configVersion: 1,
			...(overrides ? { overrides } : {}),
			workspaces,
			packages,
		},
		null,
		2,
	)}\n`;

/**
 * Estado del lockfile del fixture. Cada test de lockfile parte de aquí para que el diff que ve el
 * filtro (`VERCEL_GIT_PREVIOUS_SHA` → HEAD) solo contenga la variante de ese test.
 */
const baseLockfile = lockfile({
	workspaces: {
		'': { name: 'root', devDependencies: { turbo: '2.11.7' } },
		'apps/app-a': {
			name: 'app-a',
			dependencies: { '@astro-config': 'workspace:*', astro: '7.3.5' },
		},
		'apps/app-b': { name: 'app-b', dependencies: { '@astro-config': 'workspace:*' } },
		'packages/@astro-config': { name: '@astro-config', dependencies: { tailwindcss: '4.3.3' } },
	},
	packages: {
		astro: ['astro@7.3.5', '', { dependencies: { 'strip-ansi': '^7.0.1' } }, 'sha512-astro-7.3.5'],
		'strip-ansi': ['strip-ansi@7.2.0', '', {}, 'sha512-strip-ansi-7.2.0'],
		tailwindcss: ['tailwindcss@4.3.3', '', {}, 'sha512-tailwindcss-4.3.3'],
		'@astro-config': [
			'@astro-config@0.0.1',
			'workspace:packages/@astro-config',
			{},
			'sha512-astro-config',
		],
	},
});

let lockState: string = baseLockfile;

const commit = (files: Record<string, string>) => {
	for (const [relative, contents] of Object.entries(files)) {
		const target = path.join(origin, relative);
		mkdirSync(path.dirname(target), { recursive: true });
		writeFileSync(target, contents);
	}
	git(['add', '-A'], origin);
	git(['commit', '--quiet', '-m', 'cambio'], origin);
	return git(['rev-parse', 'HEAD'], origin).trim();
};

beforeAll(() => {
	workspace = mkdtempSync(path.join(tmpdir(), 'vercel-ignore-'));
	origin = path.join(workspace, 'origin');
	mkdirSync(origin, { recursive: true });
	mkdirSync(path.join(origin, 'apps', 'app-a'), { recursive: true });
	mkdirSync(path.join(origin, 'apps', 'app-b'), { recursive: true });
	mkdirSync(path.join(origin, 'packages', '@astro-config'), { recursive: true });

	git(['init', '--quiet', '--initial-branch=main'], origin);
	git(['config', 'user.email', 'tests@example.com'], origin);
	git(['config', 'user.name', 'tests'], origin);

	writeFileSync(path.join(origin, 'package.json'), JSON.stringify({ name: 'root', private: true }));
	writeFileSync(
		path.join(origin, 'packages', '@astro-config', 'package.json'),
		JSON.stringify({ name: '@astro-config', dependencies: { tailwindcss: '4.3.3' } }),
	);

	// 1. El commit que creó los `vercel.json` de todas las apps a la vez.
	const vercelJson = '{ "ignoreCommand": "node ../../scripts/x.mjs" }\n';
	const base: Record<string, string> = {
		'apps/app-a/vercel.json': vercelJson,
		'apps/app-b/vercel.json': vercelJson,
		'bun.lock': baseLockfile,
	};
	base['apps/app-a/package.json'] = JSON.stringify({
		name: 'app-a',
		type: 'module',
		dependencies: { '@astro-config': 'workspace:*', astro: '7.3.5' },
	});
	base['apps/app-b/package.json'] = JSON.stringify({
		name: 'app-b',
		type: 'module',
		dependencies: { '@astro-config': 'workspace:*' },
	});
	commit(base);

	// 2. Un push ya desplegado, y 3. el push nuevo que solo toca app-b.
	deployed = commit({ 'apps/app-a/src.txt': 'a1\n' });
	commit({ 'apps/app-b/src.txt': 'b1\n' });
});

afterAll(() => {
	if (workspace) rmSync(workspace, { recursive: true, force: true });
});

/** Clona como Vercel: `--depth=1`, sin el commit del despliegue anterior. */
const cloneLikeVercel = () => {
	const dir = path.join(workspace, `clone-${Math.random().toString(36).slice(2)}`);
	execFileSync('git', ['clone', '--quiet', '--depth=1', '--no-local', `file://${origin}`, dir], {
		stdio: ['ignore', 'pipe', 'pipe'],
	});
	mkdirSync(path.join(dir, 'scripts'), { recursive: true });
	writeFileSync(path.join(dir, 'scripts', 'vercel-ignore-build.mjs'), SCRIPT_SOURCE);
	return dir;
};

/**
 * Añade un commit al remoto, como un push nuevo, y devuelve el SHA que estaba desplegado justo
 * antes: el `VERCEL_GIT_PREVIOUS_SHA` que verá Vercel.
 *
 * El previous se toma del HEAD actual del remoto, que es de donde parte cualquier push. Usar el
 * `deployed` inicial arrastraría en el diff los commits intermedios y el test mediría otra cosa.
 */
const push = (files: Record<string, string>) => {
	const previous = git(['rev-parse', 'HEAD'], origin).trim();
	commit(files);
	return previous;
};

/**
 * Publica una variante del lockfile y devuelve el SHA contra el que comparará Vercel.
 *
 * Antes deja el lockfile en su estado base (en un commit aparte) para que el diff que ve el
 * filtro sea exactamente `base → variante`, sin arrastrar la variante del test anterior.
 */
const pushLockfile = (variant: Parameters<typeof lockfile>[0] | string) => {
	const next = typeof variant === 'string' ? variant : lockfile(variant);
	if (lockState !== baseLockfile) push({ 'bun.lock': baseLockfile });
	const previous = push({ 'bun.lock': next });
	lockState = next;
	return previous;
};

/** El entorno que Vercel inyecta en el Ignored Build Step. */
const vercelEnv = (previousSha: string) => ({
	VERCEL_GIT_PREVIOUS_SHA: previousSha,
	VERCEL_GIT_COMMIT_REF: 'main',
});

/** Ejecuta el script como lo haría Vercel: `0` salta el build, `1` lo construye. */
const runAsVercel = (repoRoot: string, app: string, env: NodeJS.ProcessEnv) => {
	const result = spawnSync('node', ['../../scripts/vercel-ignore-build.mjs'], {
		cwd: path.join(repoRoot, 'apps', app),
		env: { ...process.env, ...env },
		encoding: 'utf8',
	});
	if (result.status === null || result.status === undefined) {
		throw new Error(`el script no llegó a ejecutarse: ${result.stderr}`);
	}
	if (result.stderr) throw new Error(`el script falló: ${result.stderr}`);
	return result.status;
};

describe('el Ignored Build Step filtra los proyectos que no han cambiado', () => {
	test('el clon de Vercel no trae el commit del despliegue anterior', () => {
		const repo = cloneLikeVercel();
		expect(hasCommit(repo, deployed)).toBe(false);
	});

	test('solo construye la app que cambió en el push actual', () => {
		const previous = push({ 'apps/app-b/src.txt': 'b2\n' });
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-b', env)).toBe(1); // app-b es la que toca el commit
		expect(runAsVercel(repo, 'app-a', env)).toBe(0); // app-a no ha cambiado
	});

	test('sin SHA de Vercel se usa la ventana de commits y se construye (nunca deja sin publicar)', () => {
		const repo = cloneLikeVercel();
		expect(runAsVercel(repo, 'app-a', vercelEnv(''))).toBe(1);
	});

	test('cambiar el vercel.json de UNA app no dispara las demás', () => {
		const previous = push({
			'apps/app-a/vercel.json': '{ "ignoreCommand": "node ../../scripts/x.mjs", "framework": "astro" }\n',
		});
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(1);
		expect(runAsVercel(repo, 'app-b', env)).toBe(0);
	});

	test('cambiar un paquete del workspace reconstruye la app que lo consume', () => {
		const previous = push({ 'packages/@astro-config/index.mjs': 'export const x = 1;\n' });
		const repo = cloneLikeVercel();
		expect(runAsVercel(repo, 'app-a', vercelEnv(previous))).toBe(1);
	});

	test('un cambio en otra parte del repo no reconstruye ninguna app', () => {
		const previous = push({ 'docs/deploy.md': `# Documentación\n\n${'texto '.repeat(50)}\n` });
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(0);
		expect(runAsVercel(repo, 'app-b', env)).toBe(0);
	});
});

describe('el lockfile se evalúa por app, no como un cambio global', () => {
	test('un `bun install` que solo reordena el árbol (hoisting) no reconstruye ninguna app', () => {
		// El caso real: `strip-ansi` cambia de versión en el nivel raíz porque otra app trajo sus
		// dependencias, y aparecen paquetes nuevos de esa app. Ninguna de las dos apps declara
		// `strip-ansi` ni `@astrojs/rss`, así que su build no puede cambiar.
		const previous = pushLockfile({
			workspaces: {
				'': { name: 'root', devDependencies: { turbo: '2.11.7' } },
				'apps/app-a': {
					name: 'app-a',
					dependencies: { '@astro-config': 'workspace:*', astro: '7.3.5' },
				},
				'apps/app-b': { name: 'app-b', dependencies: { '@astro-config': 'workspace:*' } },
				'apps/app-c': { name: 'app-c', dependencies: { '@astrojs/rss': '4.0.19' } },
				'packages/@astro-config': {
					name: '@astro-config',
					dependencies: { tailwindcss: '4.3.3' },
				},
			},
			packages: {
				// `astro` (declarada por app-a) se queda igual: el ruido de hoisting mueve solo
				// paquetes transitivos que ninguna app declara.
				astro: [
					'astro@7.3.5',
					'',
					{ dependencies: { 'strip-ansi': '^7.0.1' } },
					'sha512-astro-7.3.5',
				],
				'strip-ansi': ['strip-ansi@6.0.1', '', {}, 'sha512-strip-ansi-6.0.1'],
				'@astrojs/rss': ['@astrojs/rss@4.0.19', '', {}, 'sha512-rss'],
				tailwindcss: ['tailwindcss@4.3.3', '', {}, 'sha512-tailwindcss-4.3.3'],
				'@astro-config': [
					'@astro-config@0.0.1',
					'workspace:packages/@astro-config',
					{},
					'sha512-astro-config',
				],
			},
		});
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(0);
		expect(runAsVercel(repo, 'app-b', env)).toBe(0);
	});

	test('una dependencia declarada que cambia de versión solo reconstruye la app que la declara', () => {
		// app-a declara `astro`; app-b no. Las entradas de `workspaces` no se tocan, así que el
		// único motivo para construir app-a es la resolución de su dependencia declarada.
		const previous = pushLockfile({
			workspaces: {
				'': { name: 'root', devDependencies: { turbo: '2.11.7' } },
				'apps/app-a': {
					name: 'app-a',
					dependencies: { '@astro-config': 'workspace:*', astro: '7.3.5' },
				},
				'apps/app-b': { name: 'app-b', dependencies: { '@astro-config': 'workspace:*' } },
				'packages/@astro-config': {
					name: '@astro-config',
					dependencies: { tailwindcss: '4.3.3' },
				},
			},
			packages: {
				astro: ['astro@7.3.6', '', { dependencies: { 'strip-ansi': '^7.0.1' } }, 'sha512-astro-7.3.6'],
				'strip-ansi': ['strip-ansi@7.2.0', '', {}, 'sha512-strip-ansi-7.2.0'],
				tailwindcss: ['tailwindcss@4.3.3', '', {}, 'sha512-tailwindcss-4.3.3'],
				'@astro-config': [
					'@astro-config@0.0.1',
					'workspace:packages/@astro-config',
					{},
					'sha512-astro-config',
				],
			},
		});
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(1);
		expect(runAsVercel(repo, 'app-b', env)).toBe(0);
	});

	test('una dependencia declarada por un paquete del workspace reconstruye a quien lo importa', () => {
		// Las dos apps importan `@astro-config`, que declara `tailwindcss`: la subida de ese paquete
		// cambia el build de las dos aunque no lo declaren ellas.
		const previous = pushLockfile({
			workspaces: {
				'': { name: 'root', devDependencies: { turbo: '2.11.7' } },
				'apps/app-a': {
					name: 'app-a',
					dependencies: { '@astro-config': 'workspace:*', astro: '7.3.5' },
				},
				'apps/app-b': { name: 'app-b', dependencies: { '@astro-config': 'workspace:*' } },
				'packages/@astro-config': {
					name: '@astro-config',
					dependencies: { tailwindcss: '4.3.3' },
				},
			},
			packages: {
				astro: ['astro@7.3.5', '', { dependencies: { 'strip-ansi': '^7.0.1' } }, 'sha512-astro-7.3.5'],
				'strip-ansi': ['strip-ansi@7.2.0', '', {}, 'sha512-strip-ansi-7.2.0'],
				tailwindcss: ['tailwindcss@4.3.4', '', {}, 'sha512-tailwindcss-4.3.4'],
				'@astro-config': [
					'@astro-config@0.0.1',
					'workspace:packages/@astro-config',
					{},
					'sha512-astro-config',
				],
			},
		});
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(1);
		expect(runAsVercel(repo, 'app-b', env)).toBe(1);
	});

	test('cambiar el bloque de dependencias de una app solo reconstruye esa app', () => {
		const previous = pushLockfile({
			workspaces: {
				'': { name: 'root', devDependencies: { turbo: '2.11.7' } },
				'apps/app-a': {
					name: 'app-a',
					dependencies: { '@astro-config': 'workspace:*' },
				},
				'apps/app-b': { name: 'app-b', dependencies: { '@astro-config': 'workspace:*' } },
				'packages/@astro-config': {
					name: '@astro-config',
					dependencies: { tailwindcss: '4.3.3' },
				},
			},
			packages: {
				astro: ['astro@7.3.5', '', { dependencies: { 'strip-ansi': '^7.0.1' } }, 'sha512-astro-7.3.5'],
				'strip-ansi': ['strip-ansi@7.2.0', '', {}, 'sha512-strip-ansi-7.2.0'],
				tailwindcss: ['tailwindcss@4.3.3', '', {}, 'sha512-tailwindcss-4.3.3'],
				'@astro-config': [
					'@astro-config@0.0.1',
					'workspace:packages/@astro-config',
					{},
					'sha512-astro-config',
				],
			},
		});
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(1);
		expect(runAsVercel(repo, 'app-b', env)).toBe(0);
	});

	test('cambiar las overrides del lockfile reconstruye todas las apps', () => {
		// Las `resolutions` de la raíz fuerzan versiones en todo el grafo: sí afectan a cualquiera.
		const previous = pushLockfile({
			overrides: { zod: '^4.6.5' },
			workspaces: {
				'': { name: 'root', devDependencies: { turbo: '2.11.7' } },
				'apps/app-a': {
					name: 'app-a',
					dependencies: { '@astro-config': 'workspace:*', astro: '7.3.5' },
				},
				'apps/app-b': { name: 'app-b', dependencies: { '@astro-config': 'workspace:*' } },
				'packages/@astro-config': {
					name: '@astro-config',
					dependencies: { tailwindcss: '4.3.3' },
				},
			},
			packages: {
				astro: ['astro@7.3.5', '', { dependencies: { 'strip-ansi': '^7.0.1' } }, 'sha512-astro-7.3.5'],
				'strip-ansi': ['strip-ansi@7.2.0', '', {}, 'sha512-strip-ansi-7.2.0'],
				tailwindcss: ['tailwindcss@4.3.3', '', {}, 'sha512-tailwindcss-4.3.3'],
				'@astro-config': [
					'@astro-config@0.0.1',
					'workspace:packages/@astro-config',
					{},
					'sha512-astro-config',
				],
			},
		});
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(1);
		expect(runAsVercel(repo, 'app-b', env)).toBe(1);
	});

	test('un lockfile que no se puede leer construye (ante la duda, publicar)', () => {
		// Si el formato del lockfile cambia o el fichero llega roto, no se puede afirmar que no
		// haya cambios: se construye. Saltarse el build aquí dejaría webs sin publicar en silencio.
		const previous = pushLockfile('esto no es un lockfile\n');
		const repo = cloneLikeVercel();
		const env = vercelEnv(previous);

		expect(runAsVercel(repo, 'app-a', env)).toBe(1);
		expect(runAsVercel(repo, 'app-b', env)).toBe(1);
	});
});

describe('el ignore de Netlify filtra con CACHED_COMMIT_REF', () => {
	/** Clona como Netlify: historial completo, así que el commit desplegado sí está en el clon. */
	const cloneLikeNetlify = () => {
		const dir = path.join(workspace, `netlify-${Math.random().toString(36).slice(2)}`);
		execFileSync('git', ['clone', '--quiet', '--no-local', `file://${origin}`, dir], {
			stdio: ['ignore', 'pipe', 'pipe'],
		});
		mkdirSync(path.join(dir, 'scripts'), { recursive: true });
		writeFileSync(path.join(dir, 'scripts', 'vercel-ignore-build.mjs'), SCRIPT_SOURCE);
		return dir;
	};

	/** El entorno que Netlify inyecta al ejecutar el `ignore`. Sin `cached`, primer despliegue. */
	const netlifyEnv = (cached?: string) => ({
		NETLIFY: 'true',
		...(cached ? { CACHED_COMMIT_REF: cached } : {}),
	});

	/**
	 * Ejecuta el script como lo haría Netlify: `0` salta el build, `1` lo construye. La ruta
	 * lleva el prefijo `./` que exige Netlify para ficheros referenciados desde el `ignore`.
	 */
	const runAsNetlify = (repoRoot: string, app: string, env: NodeJS.ProcessEnv) => {
		const result = spawnSync('node', ['./../../scripts/vercel-ignore-build.mjs'], {
			cwd: path.join(repoRoot, 'apps', app),
			env: { ...process.env, ...env },
			encoding: 'utf8',
		});
		if (result.status === null || result.status === undefined) {
			throw new Error(`el script no llegó a ejecutarse: ${result.stderr}`);
		}
		if (result.stderr) throw new Error(`el script falló: ${result.stderr}`);
		return result.status;
	};

	test('solo construye la app que cambió desde el último despliegue', () => {
		const cached = push({ 'apps/app-b/netlify.txt': 'b2\n' });
		const repo = cloneLikeNetlify();
		const env = netlifyEnv(cached);

		expect(runAsNetlify(repo, 'app-b', env)).toBe(1);
		expect(runAsNetlify(repo, 'app-a', env)).toBe(0);
	});

	test('un cambio fuera de las apps no reconstruye ninguna', () => {
		const cached = push({ 'docs/netlify.md': '# Netlify\n' });
		const repo = cloneLikeNetlify();
		const env = netlifyEnv(cached);

		expect(runAsNetlify(repo, 'app-a', env)).toBe(0);
		expect(runAsNetlify(repo, 'app-b', env)).toBe(0);
	});

	test('el primer despliegue construye (sin CACHED_COMMIT_REF no hay con qué comparar)', () => {
		const repo = cloneLikeNetlify();
		expect(runAsNetlify(repo, 'app-a', netlifyEnv())).toBe(1);
		expect(runAsNetlify(repo, 'app-b', netlifyEnv())).toBe(1);
	});
});

describe('shouldBuild explica siempre contra qué base comparó', () => {
	const withPreviousSha = <T>(sha: string, run: () => T): T => {
		const previous = process.env.VERCEL_GIT_PREVIOUS_SHA;
		process.env.VERCEL_GIT_PREVIOUS_SHA = sha;
		try {
			return run();
		} finally {
			if (previous === undefined) delete process.env.VERCEL_GIT_PREVIOUS_SHA;
			else process.env.VERCEL_GIT_PREVIOUS_SHA = previous;
		}
	};

	test('informa del SHA usado y de que vino de VERCEL_GIT_PREVIOUS_SHA', () => {
		// Push que no toca ninguna app: el único cambio es un fichero de docs.
		const previous = push({ 'docs/otro.md': '# Otro\n' });
		const repo = cloneLikeVercel();
		const verdict = withPreviousSha(previous, () =>
			shouldBuild({ repoRoot: repo, appDir: path.join(repo, 'apps', 'app-a') }),
		);

		expect(verdict.build).toBe(false);
		expect(verdict.base?.rev).toBe(previous);
		expect(verdict.base?.source).toContain('VERCEL_GIT_PREVIOUS_SHA');
	});

	test('informa del fallback cuando no hay SHA de Vercel', () => {
		const repo = cloneLikeVercel();
		const previous = process.env.VERCEL_GIT_PREVIOUS_SHA;
		delete process.env.VERCEL_GIT_PREVIOUS_SHA;
		try {
			const verdict = shouldBuild({ repoRoot: repo, appDir: path.join(repo, 'apps', 'app-a') });
			expect(verdict.base?.source).toContain('ventana de commits');
		} finally {
			if (previous !== undefined) process.env.VERCEL_GIT_PREVIOUS_SHA = previous;
		}
	});
});