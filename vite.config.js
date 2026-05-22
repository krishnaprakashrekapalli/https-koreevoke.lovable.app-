import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// When deployed to GitHub Pages at https://<user>.github.io/<repo>/,
// Vite needs the repo name as `base`. Override with VITE_BASE when
// deploying elsewhere (Vercel/Netlify/custom domain → set VITE_BASE=/).
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE ?? '/https-koreevoke.lovable.app-/',
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
