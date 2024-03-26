import tailwind from '@astrojs/tailwind';
import vue from '@astrojs/vue';
import { defineConfig } from 'astro/config';
import { join } from 'node:path';

// https://astro.build/config
export default defineConfig({
  root: import.meta.dirname,
  outDir: '../../dist/apps/portfolio',
  integrations: [
    tailwind({
      configFile: join(import.meta.dirname, './tailwind.config.mjs'),
    }),
    vue(),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
  },
});
