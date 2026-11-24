// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  // Hosted on GitHub Pages; see .github/workflows/deploy.yml.
  site: 'https://suadalam.github.io',
  vite: {
    // three.js (for the birds) is one ~600 kB chunk, loaded after the page shows.
    build: { chunkSizeWarningLimit: 700 },
  },
});
