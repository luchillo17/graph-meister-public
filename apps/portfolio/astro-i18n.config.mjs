import { defineAstroI18nConfig } from 'astro-i18n';

export default defineAstroI18nConfig({
  primaryLocale: 'en', // default app locale
  secondaryLocales: ['es'], // other supported locales
  fallbackLocale: 'en', // fallback locale (on missing translation)
  trailingSlash: 'never', // "never" or "always"
  run: 'client+server', // "client+server" or "server"
  showPrimaryLocale: false, // "/en/about" vs "/about"
  translationDirectory: {
    pages: '',
  }, // translation directory names
});
