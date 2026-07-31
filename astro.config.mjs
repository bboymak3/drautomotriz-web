import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: 'https://drautomotriz.pages.dev',
  integrations: [tailwind()],
  build: {
    inlineStylesheets: 'auto',
  },
});
