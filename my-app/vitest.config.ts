import { defineConfig } from 'vitest/config';
import solidPlugin from 'vite-plugin-solid';
export default defineConfig({
  plugins: [solidPlugin()],
  test: {
    deps: {
      registerNodeLoader: true,
      inline: [/solid-js/],
    },
    environment: 'jsdom',
    globals: true,
    transformMode: { web: [/\.[jt]sx?$/] },
  },
  resolve: {
    conditions: ['development', 'browser'],
  },
});