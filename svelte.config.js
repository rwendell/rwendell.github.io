import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		// The site is fully static so it can live on GitHub Pages.
		adapter: adapter({
			pages: "build",
			assets: "build",
			fallback: "404.html",
			precompress: true,
			strict: true,
		}),
	},
};

export default config;
