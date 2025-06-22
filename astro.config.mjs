import { defineConfig } from 'astro/config';
import adapter from '@astrojs/adapter-static';

export default defineConfig({
  site: 'https://c0deone.github.io/thebutton',
  base: '/thebutton/',
  adapter: adapter(),
});
