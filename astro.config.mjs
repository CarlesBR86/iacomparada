import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeAffiliate from './src/lib/rehype-affiliate.mjs';
import { SITE } from './src/site.config.ts';

// Con dominio propio, base = '/'. Mientras se publica en <usuario>.github.io/iacomparada, el workflow pasa SITE_URL y SITE_BASE.
const site = process.env.SITE_URL || SITE.url;
const base = process.env.SITE_BASE || '/';

export default defineConfig({
  site,
  base,
  integrations: [sitemap({ filter: (page) => !page.includes('/ir/') })],
  markdown: {
    rehypePlugins: [[rehypeAffiliate, { amazonTag: SITE.amazonTag, base }]],
  },
});
