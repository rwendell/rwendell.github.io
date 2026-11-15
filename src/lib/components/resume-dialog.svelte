<script lang="ts">
	import DownloadIcon from "@lucide/svelte/icons/download";
	import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
	import type { Snippet } from "svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Dialog from "$lib/components/ui/dialog/index.js";
	import { site } from "$lib/data/site";

	interface Props {
		trigger: Snippet<[() => void]>;
	}

	let { trigger }: Props = $props();
	let open = $state(false);
</script>

<Dialog.Root bind:open>
	{@render trigger(() => (open = true))}

	<Dialog.Content class="max-w-[min(96vw,64rem)] gap-0 p-0">
		<Dialog.Header class="border-b border-border/60 px-5 py-4">
			<Dialog.Title class="text-base font-semibold">
				Ryan Wendell — Resume
			</Dialog.Title>
			<Dialog.Description class="font-mono text-[10px] uppercase tracking-[0.16em]">
				PDF · {site.resume.pages} {site.resume.pages === 1 ? "page" : "pages"}
			</Dialog.Description>
		</Dialog.Header>

		<div
			{@attach (node: HTMLDivElement) => {
				// Start every preview at page one. The dialog can otherwise
				// inherit a scroll position while the preview images lazy-load
				// and change layout.
				if (open) node.scrollTop = 0;
			}}
			class="max-h-[70vh] overflow-y-auto bg-muted/40 p-2 sm:p-3"
		>
			<div class="mx-auto flex max-w-3xl flex-col gap-3">
				{#each site.resume.previewPages as page, index (page)}
					<img
						src={page}
						alt={`Resume page ${index + 1} of ${site.resume.pages}`}
						width="1190"
						height="1540"
						class="w-full rounded-md border border-border/60 bg-white shadow-sm"
						decoding="async"
					/>
				{/each}
			</div>
		</div>

		<Dialog.Footer class="border-t border-border/60 px-5 py-4">
			<Button
				variant="outline"
				href={site.resume.href}
				target="_blank"
				rel="noreferrer"
				class="gap-2"
			>
				<ExternalLinkIcon class="size-4" />
				Open in new tab
			</Button>
			<Button
				href={site.resume.href}
				download={site.resume.filename}
				class="gap-2"
			>
				<DownloadIcon class="size-4" />
				Download PDF
			</Button>
		</Dialog.Footer>
	</Dialog.Content>
</Dialog.Root>
