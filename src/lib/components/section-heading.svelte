<script lang="ts">
	import type { Snippet } from "svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		eyebrow: string;
		title: string;
		description?: string;
		action?: Snippet;
		class?: string;
	}

	let {
		eyebrow,
		title,
		description,
		action,
		class: className,
	}: Props = $props();
</script>

<div
	class={cn(
		"flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between",
		className
	)}
>
	<div class="max-w-2xl">
		<p class="eyebrow">{eyebrow}</p>
		<h2
			class="mt-3 text-balance text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
		>
			{title}
		</h2>
		{#if description}
			<p class="mt-4 text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
				{description}
			</p>
		{/if}
	</div>
	{#if action}
		<div class="shrink-0">{@render action()}</div>
	{/if}
</div>
