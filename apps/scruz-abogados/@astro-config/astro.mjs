// packages/config-astro/index.mjs

import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.resolve(__dirname, '../@assets');
const rootDir = path.resolve(__dirname, '../../');

export function createAstroConfig({ site, integrations = [], vite = {}, ...rest }) {
	return defineConfig({
		site,
		integrations: [sitemap(), ...integrations],
		vite: {
			...vite,
			plugins: [tailwindcss()],
			resolve: {
				alias: {
					'@assets': assetsDir,
				},
			},
			server: {
				fs: {
					strict: false,
					allow: [rootDir, assetsDir],
				},
			},
		},
		output: 'static',
		security: { checkOrigin: true },
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
		...rest,
	});
}
