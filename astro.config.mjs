import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  site: 'https://helloadam.co',
  integrations: [mdx(), sitemap(), tailwind(), react()],

  markdown: {
    shikiConfig: {
      theme: 'material-theme-lighter',
      // Enable word wrap to prevent horizontal scrolling
      wrap: true,
    },
  },
})
