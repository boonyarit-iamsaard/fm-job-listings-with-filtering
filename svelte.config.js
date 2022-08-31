import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      assets: 'build',
      fallback: null,
      pages: 'build',
      precompress: false,
    }),
    prerender: {
      default: true,
    },
  },
};

export default config;
