// packages/config-astro/index.mjs
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import path from 'node:path';

export function createAstroConfig({ site }) {
	return defineConfig({
		site,
		integrations: [sitemap()],
		vite: {
			plugins: [tailwindcss()],
		},
		output: 'static',
		security: { checkOrigin: true },
		resolve: {
			alias: {
				'@': path.resolve('./src'),
			},
		},
	});
}
