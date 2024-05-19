import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

// import adapter from '@sveltejs/adapter-static';
// import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		paths: {
			base: process.env.NODE_ENV === 'production' ? '/svelte_gh_pages' : ''
		}
	}
};

export default config;
