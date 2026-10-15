// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://giorgioblandano.github.io',
  output: 'static',
  outDir: './docs',
  build: { inlineStylesheets: 'auto' },
});
