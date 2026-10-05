/**
 * Genera el `netlify.toml` de cada app desplegable.
 *
 * Cada app es un proyecto de Netlify independiente conectado al mismo repositorio, igual
 * que en Vercel. El sitio se configura con la layout recomendada de Netlify para
 * monorepos: la **Base Directory se deja en la raiz** (el valor por defecto, que es donde
 * Netlify instala las dependencias) y el **Package Directory** apunta a `apps/<app>`, que
 * es el directorio desde el que Netlify lee este `netlify.toml`.
 *
 * Por eso el comando corre en la raiz del repo y NO hace `cd ../..`: con Base Directory en
 * `apps/<app>` (la configuracion anterior) el `cd ../..` salia del repositorio y `bun
 * install` fallaba con "Bun could not find a package.json file to install from". Ver
 * `docs/deploy.md`.
 *
 * El `bun install` es de la raiz porque casi todas las apps dependen de paquetes del
 * workspace (`@astro-config`, `@astro-components`) declarados como `workspace:*`, que
 * solo se resuelven desde la raiz. El build pasa por turbo y no por `astro build` directo
 * porque turbo es quien respeta `dependsOn: ["^build"]` de `turbo.json` y construye los
 * paquetes compartidos antes que la app. `--filter` por nombre de paquete (no por ruta)
 * porque es lo que resuelve turbo.
 *
 * El `publish` es relativo a la Base Directory (la raiz), asi que apunta a
 * `apps/<app>/dist`; con el `dist` a secas Netlify publicaria la carpeta `dist` de la
 * raiz, que no existe.
 *
 * Un `netlify.toml` que no haya generado este script (cabecera distinta) NO se pisa: puede
 * tener `headers`, `redirects` o funciones propias, y sobrescribirlo romperia ese sitio.
 * Se avisa y se deja intacto. Los que si llevan la cabecera se regeneran, para que un
 * cambio de comando (como este) llegue a las 140 apps.
 *
 * Las apps con `server/` no entran: son front + API en un servidor Bun propio
 * (`bun server/index.ts`) con rutas, cron y base de datos. Publicar solo el `dist`
 * dejaria la API sin publicar, y portarla a Netlify Functions es un trabajo aparte, no un
 * cambio de configuracion. Se listan al final para que se decida que hacer con ellas.
 *
 * Uso: node scripts/add-netlify-config.mjs [--dry] [<app> ...]
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { globSync } from 'tinyglobby';

const argv = process.argv.slice(2);
const dry = argv.includes('--dry');
const only = argv.filter((a) => !a.startsWith('--'));

const repoRoot = path.resolve(import.meta.dirname, '..');

/** Netlify corre sobre Node; la version se fija para que el build no dependa del runtime. */
const NODE_VERSION = '22';

/** Cabecera que marca los ficheros generados (y que se pueden regenerar). */
const GENERATED_HEADER = '# Generado por scripts/add-netlify-config.mjs -- no editar a mano.';

const toml = (app, pkgName) =>
	`${GENERATED_HEADER}
#
# Sitio de Netlify (monorepo):
#   Base Directory:    la raiz del repositorio (sin tocar, es el valor por defecto).
#   Package Directory: apps/${app} (Netlify lee este netlify.toml de ahi).
#
# El comando corre en la raiz, instala el workspace y compila solo esta app con turbo.
# \`publish\` es relativo a la raiz.

[build]
\tcommand = "bun install --frozen-lockfile && bunx turbo run build --filter=${pkgName}"
\tpublish = "apps/${app}/dist"

[build.environment]
\tNODE_VERSION = "${NODE_VERSION}"
`;

// Se listan todas las carpetas de apps/, no solo las que tienen package.json: una app sin
// manifest no se puede desplegar, y si se filtra por el glob desaparece del informe sin
// dejar rastro, que es peor que un error visible.
const appDirs = globSync('apps/*', { cwd: repoRoot, onlyDirectories: true })
	.map((d) => path.join(repoRoot, d))
	// El filtro por nombre se aplica aqui y no en el bucle: aplicado mas tarde, el resumen
	// contaria las 147 carpetas y listaria como "fuera" apps que el usuario no pidio, que es
	// un informe que no describe lo que el comando ha hecho.
	.filter((d) => !only.length || only.includes(path.basename(d)))
	.sort();

const skipped = [];
for (const dir of appDirs) {
	if (!existsSync(path.join(dir, 'package.json'))) {
		skipped.push(`${path.basename(dir)} — sin package.json`);
	}
}

const apps = appDirs.filter((d) => existsSync(path.join(d, 'package.json')));
let created = 0;
let updated = 0;
let untouched = 0;

for (const appDir of apps) {
	const app = path.basename(appDir);

	const pkg = JSON.parse(readFileSync(path.join(appDir, 'package.json'), 'utf8'));

	// Sin `src` no hay nada que publicar: son carpetas vacias.
	if (!existsSync(path.join(appDir, 'src'))) {
		skipped.push(`${app} — sin src/`);
		continue;
	}

	// API propia en un servidor Bun: publicar solo el front dejaria la API sin deploying.
	if (existsSync(path.join(appDir, 'server'))) {
		skipped.push(`${app} — API propia en server/, requiere portar a Netlify Functions`);
		continue;
	}

	if (!pkg.scripts?.build) {
		skipped.push(`${app} — sin script "build"`);
		continue;
	}

	const target = path.join(appDir, 'netlify.toml');
	const contents = toml(app, pkg.name);

	if (!existsSync(target)) {
		if (!dry) writeFileSync(target, contents);
		console.log(`+ apps/${app}/netlify.toml  (${pkg.name})`);
		created++;
		continue;
	}

	const current = readFileSync(target, 'utf8');
	if (current === contents) {
		untouched++;
		continue;
	}

	// Solo se pisan los ficheros que genero este script. Un netlify.toml con otra cabecera
	// puede tener headers/redirects/funciones propias: se avisa y se deja intacto.
	if (!current.startsWith(GENERATED_HEADER)) {
		console.log(`! apps/${app}/netlify.toml ya existe y difiere: se deja intacto`);
		untouched++;
		continue;
	}

	if (!dry) writeFileSync(target, contents);
	console.log(`~ apps/${app}/netlify.toml  (${pkg.name})`);
	updated++;
}

console.log(
	`\n${dry ? '[dry] ' : ''}${appDirs.length} apps en total: ` +
		`${created} ${dry ? 'a crear' : 'creados'}, ${updated} ${dry ? 'a actualizar' : 'actualizados'}, ` +
		`${untouched} sin tocar, ${skipped.length} fuera`,
);

if (skipped.length) {
	console.log(`\n${skipped.length} apps fuera de Netlify:`);
	for (const s of skipped) console.log(`  ${s}`);
}
