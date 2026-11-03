/**
 * Audita el Root Directory de los proyectos de Vercel de este monorepo.
 *
 * El `ignoreCommand` solo funciona si el proyecto construye desde `apps/<nombre>`: Vercel lo
 * ejecuta en el Root Directory y el script sube dos niveles hasta la raíz del repo. Si un
 * proyecto apunta a la raíz del repositorio (o a otra carpeta), el filtro no encuentra su
 * `package.json`, cae al camino seguro y construye siempre. Eso no se ve en el repo: vive en la
 * configuración del proyecto, así que hay que preguntárselo a la API.
 *
 * Requiere un token con acceso de lectura a los proyectos:
 *   VERCEL_TOKEN=xxx node scripts/check-vercel-root-directory.mjs
 *   VERCEL_TOKEN=xxx node scripts/check-vercel-root-directory.mjs --team team_xxx
 *
 * Sale con 0 si todo está correcto, 1 si hay problemas y 2 si falta el token o falla la API.
 * Sin token no inventa un veredicto: avisa y sale con 2.
 */

import { existsSync } from 'node:fs';
import path from 'node:path';

const token = process.env.VERCEL_TOKEN;
const teamArg = process.argv.indexOf('--team');
const team = teamArg > -1 ? process.argv[teamArg + 1] : process.env.VERCEL_TEAM_ID;
const root = process.cwd();
const API = 'https://api.vercel.com/v9/projects';

if (!token) {
	console.error('✖ falta VERCEL_TOKEN (o `vercel login` y exportar el token).');
	console.error('  Créalo en https://vercel.com/account/tokens y ejecútalo de nuevo.');
	process.exit(2);
}

const normalizar = (value) =>
	String(value ?? '')
		.replace(/^\.\//, '')
		.replace(/^\/+|\/+$/g, '');

/** Trae todos los proyectos, paginando con `from`. */
const proyectos = async () => {
	const todos = [];
	let from;
	for (let page = 0; page < 100; page += 1) {
		const url = new URL(API);
		url.searchParams.set('limit', '100');
		if (team) url.searchParams.set('teamId', team);
		if (from) url.searchParams.set('from', from);

		const response = await fetch(url, { headers: { authorization: `Bearer ${token}` } });
		if (!response.ok) {
			const body = await response.text();
			throw new Error(`API ${response.status}: ${body.slice(0, 200)}`);
		}
		const data = await response.json();
		todos.push(...(data.projects ?? []));
		from = data.pagination?.next;
		if (!from) break;
	}
	return todos;
};

const main = async () => {
	const lista = await proyectos();
	const problemas = [];
	const avisos = [];
	const raices = new Map();

	for (const proyecto of lista) {
		const nombre = proyecto.name;
		const raiz = normalizar(proyecto.rootDirectory);
		const etiqueta = `proyecto ${nombre}`;

		if (!raiz) {
			problemas.push(`${etiqueta}: rootDirectory vacío (construye desde la raíz del repo)`);
			continue;
		}
		if (!raiz.startsWith('apps/')) {
			problemas.push(`${etiqueta}: rootDirectory "${raiz}" no está bajo apps/`);
		} else if (!existsSync(path.join(root, raiz, 'package.json'))) {
			problemas.push(`${etiqueta}: rootDirectory "${raiz}" no existe en el repo`);
		}

		raices.set(raiz, [...(raices.get(raiz) ?? []), nombre]);

		const esperado = `apps/${nombre}`;
		if (raiz !== esperado) {
			avisos.push(`${etiqueta}: rootDirectory "${raiz}" (la carpeta con su nombre sería "${esperado}")`);
		}
	}

	for (const [raiz, nombres] of raices) {
		if (nombres.length > 1) {
			problemas.push(`rootDirectory "${raiz}" compartido por ${nombres.length} proyectos: ${nombres.join(', ')}`);
		}
	}

	console.log(`Proyectos: ${lista.length}`);
	if (avisos.length > 0) {
		console.log('\n=== AVISOS (nombre y carpeta no coinciden) ===');
		for (const aviso of avisos) console.log(`  - ${aviso}`);
	}
	if (problemas.length > 0) {
		console.error(`\n=== PROBLEMAS (${problemas.length}) ===`);
		for (const problema of problemas) console.error(`  - ${problema}`);
		process.exit(1);
	}
	console.log('\n✔ Todos los proyectos construyen desde una carpeta apps/ existente y única');
};

main().catch((error) => {
	console.error(`✖ ${error instanceof Error ? error.message : String(error)}`);
	process.exit(2);
});
