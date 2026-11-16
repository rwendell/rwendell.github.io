<script lang="ts">
	interface Props {
		previewLatte: string;
		previewMacchiato: string;
	}

	let { previewLatte, previewMacchiato }: Props = $props();
</script>

<div class="mx-auto w-full max-w-4xl">
	<div
		class="overflow-hidden rounded-2xl border border-border/60 bg-card shadow-paper"
	>
		<img
			src={previewMacchiato}
			alt="Rendered one-page resume preview"
			class="h-auto w-full dark:hidden"
			loading="lazy"
			decoding="async"
		/>
		<img
			src={previewLatte}
			alt="Rendered one-page resume preview"
			class="hidden h-auto w-full dark:block"
			loading="lazy"
			decoding="async"
		/>
	</div>
</div>
