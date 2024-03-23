import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: '../../dist/apps/portfolio',
  integrations: [tailwind(), vue()],
});
