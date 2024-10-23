import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from 'tailwindcss';  // Import Tailwind CSS
import autoprefixer from 'autoprefixer'; // Import Autoprefixer

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  css: {
    postcss: {
      plugins: [
        tailwindcss, // Use Tailwind CSS as a plugin
        autoprefixer, // Use Autoprefixer as a plugin
      ],
    },
  },
  server: {
    port: 3000, // Set the default port to 3000
  },
});
