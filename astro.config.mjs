import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import node from '@astrojs/node';
import auth from 'auth-astro';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone', // ✅ correcto
  }),
  integrations: [
    react(),
    auth(),
  ],
  vite: {
    server: {
      port: 3000,
      open: true,
    },

    plugins: [tailwindcss()],
  },
});