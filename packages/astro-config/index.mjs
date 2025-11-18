// packages/config-astro/index.mjs
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export function createAstroConfig({ site }) {
	return defineConfig({
		site,
		integrations: [sitemap()],
		vite: {
			plugins: [tailwindcss()],
		},
		output: 'static',
		compressHTML: true,
		security: { checkOrigin: true },
	});
}
