import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// Site ki settings yahan aati hain. Abhi ke liye khaali/default theek hai.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});