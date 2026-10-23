import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import rehypeAffiliate from './src/lib/rehype-affiliate.mjs';
import { SITE } from './src/site.config.ts';

export default defineConfig({
  site: SITE.url,
  integrations: [sitemap({ filter: (page) => !page.includes('/ir/') })],
  markdown: {
    rehypePlugins: [[rehypeAffiliate, { amazonTag: SITE.amazonTag }]],
  },
});
