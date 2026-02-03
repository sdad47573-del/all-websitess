import { createAstroConfig } from '@astro-config';
import sitemap from '@astrojs/sitemap';

export default createAstroConfig({
	site: 'https://sergiocruzchacon.vercel.app',
	integrations: [
		sitemap({
			changefreq: 'weekly',
			priority: 0.7,
			lastmod: new Date(),
			customPages: [
				'https://sergiocruzchacon.vercel.app/',
				'https://sergiocruzchacon.vercel.app/quienes-somos',
				'https://sergiocruzchacon.vercel.app/servicios',
				'https://sergiocruzchacon.vercel.app/empresas',
				'https://sergiocruzchacon.vercel.app/FAQ',
			],
		}),
	],
});
