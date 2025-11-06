import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://mackenziedev.site',
  integrations: [mdx(), tailwind()],

  redirects: {
    '/github': 'https://github.com/mackenzie',
    '/linkedin': 'https://linkedin.com/in/mackenzie',
  },

  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  },

  adapter: vercel()
});