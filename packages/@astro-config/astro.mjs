// packages/config-astro/index.mjs

import path from 'node:path';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export function createAstroConfig({ site }) {
	return defineConfig({
		site,
		integrations: [sitemap()],
		vite: {
			plugins: [tailwindcss()],
			resolve: {
				alias: {
					'@assets': path.resolve('../../packages/@assets'),
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
	});
}
