// packages/config-astro/index.mjs

import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../');

// Las imágenes optimizadas son la partida más cara de un build en frío: en una
// landing de 10 fotos, generar los 40 AVIF tarda ~30 s; reutilizarlos, ~0,05 s.
// Astro guarda esa caché en `node_modules/.astro` dentro de cada app, que se
// pierde en cada instalación limpia. Se mueve a `node_modules/.cache`, la ruta
// que las cachés de CI (Vercel incluido) conservan entre builds, con una
// subcarpeta por app: el estado incremental de Astro también vive aquí y no
// debe compartirse entre webs distintas. El nombre de la app sale del cwd, que
// en `turbo run build` es siempre el directorio de la app.
const appName = path.basename(process.cwd());
const cacheDir = path.resolve(rootDir, 'node_modules/.cache/astro', appName);

// Las landings simples (sin layout propio) sirven ~33 KB de CSS: incrustarlo
// ahorra una petición que bloquea el primer pintado. Las plantillas con layout
// propio pesan ~200 KB y ahí el inline sería peor, así que siguen externalizadas.
const hasCustomShell =
	existsSync(path.resolve(process.cwd(), 'src/layouts/Layout.astro')) ||
	existsSync(path.resolve(process.cwd(), 'src/components/Layout.astro'));

export function createAstroConfig({ site, integrations = [], vite = {}, ...rest }) {
	return defineConfig({
		// SITE_URL manda sobre el `site` que declara cada app. Las apps se despliegan en Vercel
		// (dominio .vercel.app) y en Netlify (.netlify.app) desde este mismo repo, y `site` es lo
		// que alimenta el sitemap y las URLs canonicas y og:url. Sin este override, publicar en
		// Netlify sacaria webs cuyo sitemap y canonical apuntan al dominio de Vercel, que es
		// SEO roto desde el dia uno. Se resuelve aqui y no en cada app porque el paquete es el
		// unico punto por el que pasan las 139: tocar las apps seria 139 ficheros que se
		// desincronizan en cuanto un dominio cambie.
		site: process.env.SITE_URL || site,
		integrations: [sitemap(), ...integrations],
		vite: {
			...vite,
			plugins: [tailwindcss()],
			server: {
				fs: {
					strict: false,
					allow: [rootDir],
				},
			},
		},
		output: 'static',
		cacheDir,
		build: { inlineStylesheets: hasCustomShell ? 'auto' : 'always' },
		// Minifica el HTML generado: menos peso y mejor tiempo de carga en móvil.
		compressHTML: true,
		security: { checkOrigin: true },
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
		...rest,
	});
}
