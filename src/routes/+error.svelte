<script lang="ts">
	import ArrowLeftIcon from "@lucide/svelte/icons/arrow-left";
	import { page } from "$app/state";
	import { Button } from "$lib/components/ui/button/index.js";
</script>

<svelte:head>
	<title>Page not found — Ryan Wendell</title>
</svelte:head>

<section class="container-page flex min-h-[70vh] flex-col justify-center py-24">
	<p class="eyebrow">{page.status}</p>
	<h1
		class="mt-4 max-w-2xl text-balance text-5xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-6xl"
	>
		This page wandered off.
	</h1>
	<p class="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground">
		{page.status === 404
			? "The link may be stale, or the page moved. Head back to the portfolio and pick up where you left off."
			: (page.error?.message ??
				"Something went wrong while loading this page. Try again from the portfolio.")}
	</p>
	<div class="mt-8">
		<Button href="/" class="gap-2">
			<ArrowLeftIcon class="size-4" />
			Back to the portfolio
		</Button>
	</div>
</section>
