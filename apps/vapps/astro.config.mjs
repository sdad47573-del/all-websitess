import { createAstroConfig } from '@astro-config';
import react from '@astrojs/react';

export default createAstroConfig({
	site: 'https://vapps.vercel.app',
	integrations: [react()],
});
