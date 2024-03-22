import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/portfolio',
  integrations: [tailwind(), vue()],
});
