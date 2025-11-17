// @ts-check

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://franciscoaguilarforja.vercel.app',
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
		server: {
			fs: {
				allow: ['..'], // permite acceder a /packages/
			},
		},
		optimizeDeps: {
			exclude: [], // no excluyas tus packages compartidos
		},
		ssr: {
			noExternal: [
				// 👇 obligamos a Vite a procesar este package
				'@repo/ui',
			],
		},
	},
});
