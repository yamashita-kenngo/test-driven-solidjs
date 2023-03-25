import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import md from 'vite-plugin-solid-markdown';
import { macaronVitePlugin } from '@macaron-css/vite';

export default defineConfig({
  plugins: [
    macaronVitePlugin(),
    md(),
    solidPlugin(
      {
        extensions: ['.mdx', '.md'],
      }
    )],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
