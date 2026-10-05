// packages/config-astro/index.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '../../');

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
