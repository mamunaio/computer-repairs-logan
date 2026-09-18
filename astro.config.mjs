import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://cctvlogan.com.au',
  trailingSlash: 'never',
  integrations: [sitemap()],
});
