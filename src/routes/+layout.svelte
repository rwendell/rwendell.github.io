<script lang="ts">
	import "@fontsource-variable/instrument-sans";
	import "@fontsource/monaspace-neon/400.css";
	import "@fontsource/monaspace-neon/500.css";
	import "@fontsource/monaspace-neon/600.css";
	import { ModeWatcher } from "mode-watcher";
	import SiteFooter from "$lib/components/site-footer.svelte";
	import SiteHeader from "$lib/components/site-header.svelte";
	import { Toaster } from "$lib/components/ui/sonner/index.js";
	import { site } from "$lib/data/site";
	import "./layout.css";

	let { children } = $props();
</script>

<svelte:head>
	<title>{site.name} — {site.role}</title>
	<meta name="description" content={site.summary} />
	<meta name="author" content={site.name} />
	<link rel="icon" href="/favicon.svg" type="image/svg+xml" />
	<link rel="apple-touch-icon" href="/apple-touch-icon.png" />
	<link rel="manifest" href="/site.webmanifest" />
	<link rel="canonical" href={site.url} />

	<meta property="og:type" content="website" />
	<meta property="og:title" content={`${site.name} — ${site.role}`} />
	<meta property="og:description" content={site.shortSummary} />
	<meta property="og:url" content={site.url} />
	<meta property="og:image" content={`${site.url}/og.png`} />
	<meta property="og:image:alt" content={`${site.name} — ${site.role}`} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:site_name" content={site.name} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={`${site.name} — ${site.role}`} />
	<meta name="twitter:description" content={site.shortSummary} />
	<meta name="twitter:image" content={`${site.url}/og.png`} />
	<meta name="twitter:image:alt" content={`${site.name} — ${site.role}`} />

	<script type="application/ld+json">{"@context":"https://schema.org","@type":"Person","name":"Ryan Wendell","jobTitle":"Frontend Engineer","url":"https://rwendell.github.io","email":"mailto:ryanjwendell@gmail.com","address":{"@type":"PostalAddress","addressLocality":"Chicago","addressRegion":"IL","addressCountry":"US"},"sameAs":["https://github.com/rwendell","https://www.linkedin.com/in/rjwendell/","https://www.upwork.com/freelancers/~01fbe3cf033cea5004"],"knowsAbout":["TypeScript","React","SvelteKit","Tailwind CSS","Accessibility","Design systems","Backend engineering"]}</script>
</svelte:head>

<ModeWatcher
	defaultMode="system"
	themeColors={{ light: "#f5f4f0", dark: "#1f1c16" }}
/>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
>
	Skip to content
</a>

<div class="noise-overlay" aria-hidden="true"></div>

<SiteHeader />

<main id="main-content">{@render children()}</main>

<SiteFooter />

<Toaster position="bottom-right" />
