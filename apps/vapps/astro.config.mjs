import { createAstroConfig } from '@astro-config';

import preact from '@astrojs/preact';

export default createAstroConfig({
  site: 'https://vapps.vercel.app',
  integrations: [preact()],
});