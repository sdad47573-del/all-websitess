import { createAstroConfig } from '@astro-config';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

export default createAstroConfig({
	site: 'https://vapps.vercel.app',
	integrations: [react()],
	adapter: vercel(),
	vite: {
		optimizeDeps: {
			include: ['zod'],
		},
		ssr: {
			noExternal: ['zod', '@react-components'],
		},
	},
});
