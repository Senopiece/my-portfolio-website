import cloudflare from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [vitePreprocess()],

	kit: {
		adapter: cloudflare(),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '/my-portfolio-website' : ''
		}
	}
};

export default config;
