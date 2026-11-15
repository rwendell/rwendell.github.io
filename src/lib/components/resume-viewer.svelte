<script lang="ts">
	import { cn } from "$lib/utils.js";

	interface Props {
		pdfSrc: string;
		class?: string;
	}

	let { pdfSrc, class: className }: Props = $props();
</script>

<div class={cn("mx-auto w-full max-w-4xl", className)}>
	<div
		class="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-paper"
	>
		<img
			src={pdfSrc}
			alt="Rendered one-page resume PDF"
			width="1700"
			height="2200"
			class="h-auto w-full"
			decoding="async"
		/>
	</div>
</div>
