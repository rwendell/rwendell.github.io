<script lang="ts">
	import JsonCode from "$lib/components/json-code.svelte";
	import { resumeJson } from "$lib/data/resume-json";
	import { cn } from "$lib/utils.js";

	interface Props {
		pdfSrc: string;
		class?: string;
	}

	let { pdfSrc, class: className }: Props = $props();

	type View = "json" | "pdf";

	const views = [
		{ value: "json", label: "JSON" },
		{ value: "pdf", label: "PDF" },
	] as const;

	let view = $state<View>("pdf");
</script>

<div class={cn("relative min-w-0", className)}>
	<div class="mb-3 flex justify-center">
		<div
			class="inline-flex rounded-full border border-border/60 bg-card/60 p-0.5 shadow-xs"
		>
			{#each views as item (item.value)}
				<button
					type="button"
					class={cn(
						"rounded-full px-3 py-1 font-mono text-[9px] tracking-[0.14em] transition-colors",
						view === item.value
							? "bg-foreground text-background"
							: "text-muted-foreground hover:text-foreground"
					)}
					aria-pressed={view === item.value}
					onclick={() => (view = item.value)}
				>
					{item.label}
				</button>
			{/each}
		</div>
	</div>

	<div
		class="relative aspect-[8.5/11] overflow-hidden rounded-2xl border border-border/60 bg-card shadow-paper"
	>
		{#if view === "pdf"}
			<img
				src={pdfSrc}
				alt="Rendered one-page resume PDF"
				width="1190"
				height="1540"
				class="h-full w-full object-cover object-top"
				decoding="async"
			/>
		{:else}
			<JsonCode code={resumeJson} class="h-full rounded-none border-0 shadow-none" />
		{/if}
	</div>
</div>
