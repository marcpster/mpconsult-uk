// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import remarkObsidianCallout from 'remark-obsidian-callout';

// https://astro.build/config
export default defineConfig({
  markdown: {
    remarkPlugins: [remarkObsidianCallout],
  },
  vite: {
    plugins: [tailwindcss()]
  }
});