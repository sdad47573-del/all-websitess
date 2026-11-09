/**
 * Mueve a Sur Digital las landings que aún viven como proyecto propio.
 *
 * Para cada slug de `.tmp-pending-slugs.txt`:
 *
 * 1. Copia `apps/<slug>/src` a `apps/_sur-digital/src/apps/<slug>` (misma estructura, para que
 *    los imports relativos de cada web sigan resolviendo).
 * 2. Copia el contenido de `apps/<slug>/public` a `apps/_sur-digital/public/<slug>`.
 * 3. Reescribe en el código copiado lo que deja de ser cierto al servir la web bajo
 *    `/www.sur-digital.com/<slug>/`:
 *    - el origen propio (`https://<slug>.vercel.app`) por el nuevo,
 *    - las rutas absolutas de sus páginas, sus ficheros públicos y su portada (`/`),
 *      incluidas las que van en atributos, en `url()` de CSS y en literales de TS.
 *
 * Nada más se toca: las URLs externas, las rutas del sitio de Sur Digital que la app no tiene
 * (sitemap, blog…) y todo lo que no empieza por `/` se quedan como están.
 *
 * Uso:
 *   node .tmp-migrar-landings.mjs                  # simulación, informa de lo que haría
 *   node .tmp-migrar-landings.mjs --apply          # copia y reescribe
 *   node .tmp-migrar-landings.mjs --only=slug      # una sola web
 */

import fs from 'node:fs';
import path from 'node:path';

const APPLY = process.argv.includes('--apply');
const ONLY = process.argv
	.filter((arg) => arg.startsWith('--only='))
	.map((arg) => arg.slice('--only='.length));
const SUR = 'apps/_sur-digital';
const SITE = 'https://www.sur-digital.com';

/** Ficheros que se leen como texto para reescribir rutas. Los binarios se copian tal cual. */
const TEXT = new Set([
	'.astro',
	'.ts',
	'.js',
	'.mjs',
	'.cjs',
	'.css',
	'.json',
	'.html',
	'.txt',
	'.xml',
	'.md',
]);

/** Rutas propias de Sur Digital: si una app no las tiene, se dejan apuntando al sitio. */
const SITE_ROUTES = new Set([
	'blog',
	'precios',
	'prices',
	'preise',
	'tarifs',
	'precos',
	'ceny',
	'servicios',
	'contacto',
	'faq',
	'glosario',
	'clientes',
	'especialidades',
	'social-kit',
	'i18n',
	'og',
	'api',
	'_astro',
	'rss.xml',
	'sitemap-index.xml',
	'robots.txt',
]);

const escapeRegex = (text) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const walkFiles = (dir) => {
	const files = [];
	if (!fs.existsSync(dir)) return files;
	for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
		const file = path.join(dir, entry.name);
		if (entry.isDirectory()) files.push(...walkFiles(file));
		else if (entry.isFile()) files.push(file);
	}
	return files;
};

/** Rutas que sirve una app por sí misma: ficheros públicos y páginas estáticas. */
const appRoutes = (slug) => {
	const publicDir = `apps/${slug}/public`;
	const pagesDir = `apps/${slug}/src/pages`;

	const publicRoots = fs.existsSync(publicDir)
		? new Set(fs.readdirSync(publicDir))
		: new Set();

	const pageRoots = new Set();
	for (const file of walkFiles(pagesDir)) {
		const relative = path.relative(pagesDir, file).replaceAll('\\', '/');
		pageRoots.add(relative.split('/')[0].replace(/\.astro$/, ''));
	}

	return { publicRoots, pageRoots };
};

const makeRewriter = (slug) => {
	const { publicRoots, pageRoots } = appRoutes(slug);

	/** ¿Esta ruta forma parte de la app y hay que servirla bajo `/slug/`? */
	const isAppRoute = (route) => {
		const clean = route.split('#')[0].split('?')[0];
		if (clean === '/' || clean === '') return true;
		const [first] = clean.split('/').filter(Boolean);
		if (!first) return true;
		if (first === slug) return false;
		if (publicRoots.has(first)) return true;
		if (pageRoots.has(first)) return true;
		return false;
	};

	const prefix = (route) => {
		if (isAppRoute(route)) return `/${slug}${route === '/' ? '/' : route}`;
		return null;
	};

	/** Rutas absolutas dentro de comillas: atributos, url() y literales de TS/CSS. */
	const rewriteQuoted = (text) => {
		// Atributos con la comilla de apertura, para no tocar `//externo`.
		let out = text.replace(
			/(\s(?:href|src|action|formaction|poster|data-src|content)=)(["'])\/(?!\/)([^"']*)\2/g,
			(match, attr, quote, rest) => {
				const next = prefix(`/${rest}`);
				return next === null ? match : `${attr}${quote}${next}${quote}`;
			},
		);

		// srcset y data-srcset: la primera candidata lleva el `<=` delante y las demás van tras coma.
		out = out.replace(
			/(\s(?:srcset|data-srcset)=)(["'])([^"']*)\2/g,
			(match, attr, quote, value) => {
				const next = value
					.split(',')
					.map((candidate) => {
						const leading = candidate.slice(0, candidate.length - candidate.trimStart().length);
						const trimmed = candidate.trimStart();
						if (!trimmed.startsWith('/') || trimmed.startsWith('//')) return candidate;
						const rewritten = prefix(trimmed);
						return rewritten === null ? candidate : `${leading}${rewritten}`;
					})
					.join(',');
				return `${attr}${quote}${next}${quote}`;
			},
		);

		// url(/x) de CSS.
		out = out.replace(/url\(([/"']?)\/(?!\/)([^)"']*)\1\)/g, (match, quote, rest) => {
			const next = prefix(`/${rest}`);
			return next === null ? match : `url(${quote}${next}${quote})`;
		});

		// Literales de TS/JS con una ruta interna (`'/aviso-legal'`, `"/#contacto"`, `'/'`).
		out = out.replace(/(["'])\/(?!\/)([^"'\n]*)\1/g, (match, quote, rest) => {
			const next = prefix(`/${rest}`);
			return next === null ? match : `${quote}${next}${quote}`;
		});

		return out;
	};

	return rewriteQuoted;
};

/** Origen propio de la web, sea cual sea la plataforma donde estuviera publicada. */
const rewriteOrigin = (text, slug) => {
	const host = escapeRegex(slug);
	return text.replace(
		new RegExp(`https?://${host}\\.(?:vercel|netlify)\\.app`, 'g'),
		`${SITE}/${slug}`,
	);
};

const copyFile = (from, to) => {
	fs.mkdirSync(path.dirname(to), { recursive: true });
	fs.copyFileSync(from, to);
};

const pending = fs
	.readFileSync('.tmp-pending-slugs.txt', 'utf8')
	.trim()
	.split(/\r?\n/)
	.filter(Boolean)
	.filter((slug) => ONLY.length === 0 || ONLY.includes(slug));

const summary = { apps: 0, files: 0, publicFiles: 0, skipped: 0, rewritten: 0, warnings: [] };

for (const slug of pending) {
	const source = `apps/${slug}`;
	const target = `${SUR}/src/apps/${slug}`;
	const publicSource = `${source}/public`;
	const publicTarget = `${SUR}/public/${slug}`;

	if (!fs.existsSync(`${source}/src/pages/index.astro`)) {
		summary.skipped += 1;
		continue;
	}
	if (fs.existsSync(target)) {
		summary.warnings.push(`${slug}: ya existe ${target}, no se sobrescribe`);
		summary.skipped += 1;
		continue;
	}

	const rewriter = makeRewriter(slug);
	const files = walkFiles(`${source}/src`);
	const publicFiles = walkFiles(publicSource);

	summary.apps += 1;
	summary.files += files.length;
	summary.publicFiles += publicFiles.length;

	for (const file of files) {
		const relative = path.relative(`${source}/src`, file);
		const destination = path.join(target, relative);
		const extension = path.extname(file).toLowerCase();

		if (APPLY) {
			fs.mkdirSync(path.dirname(destination), { recursive: true });
			if (!TEXT.has(extension)) {
				fs.copyFileSync(file, destination);
				continue;
			}
			const original = fs.readFileSync(file, 'utf8');
			const next = rewriter(rewriteOrigin(original, slug));
			if (next !== original) summary.rewritten += 1;
			fs.writeFileSync(destination, next, 'utf8');
			continue;
		}

		// Simulación: solo se comprueba que la reescritura no deje rutas raras.
		if (!TEXT.has(extension)) continue;
		const original = fs.readFileSync(file, 'utf8');
		const next = rewriter(rewriteOrigin(original, slug));
		if (next !== original) summary.rewritten += 1;
	}

	for (const file of publicFiles) {
		const relative = path.relative(publicSource, file);
		const destination = path.join(publicTarget, relative);
		const extension = path.extname(file).toLowerCase();

		if (APPLY) {
			copyFile(file, destination);
		}
		if (!TEXT.has(extension)) continue;
		const original = fs.readFileSync(file, 'utf8');
		const next = rewriteOrigin(original, slug);
		if (APPLY && next !== original) fs.writeFileSync(destination, next, 'utf8');
	}

	// Avisos: URLs absolutas en los datos que no son del propio slug ni de un servicio conocido.
	const siteFile = `${source}/src/data/site.ts`;
	if (fs.existsSync(siteFile)) {
		const site = fs.readFileSync(siteFile, 'utf8');
		const hosts = new Set(
			[...site.matchAll(/https?:\/\/([^/'"`\s)]+)/g)].map((match) => match[1]),
		);
		for (const host of hosts) {
			if (
				!host.includes('google') &&
				!host.includes('schema.org') &&
				!host.startsWith(slug) &&
				!host.includes('sur-digital') &&
				!host.includes('gstatic') &&
				!host.includes('whatsapp') &&
				!host.includes('instagram') &&
				!host.includes('facebook')
			) {
				summary.warnings.push(`${slug}: dominio propio en site.ts → ${host}`);
			}
		}
	}

	if (APPLY) console.log(`✓ ${slug} (${files.length} ficheros, ${publicFiles.length} públicos)`);
	else console.log(`· ${slug} (${files.length} ficheros, ${publicFiles.length} públicos)`);
}

console.log(
	`\n${APPLY ? 'migradas' : 'migrables'}: ${summary.apps} · ficheros: ${summary.files} · ` +
		`públicos: ${summary.publicFiles} · reescritos: ${summary.rewritten} · saltadas: ${summary.skipped}`,
);
for (const warning of summary.warnings.slice(0, 20)) console.log(`  ⚠ ${warning}`);
if (summary.warnings.length > 20) console.log(`  ⚠ … y ${summary.warnings.length - 20} avisos más`);
