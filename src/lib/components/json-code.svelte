<script lang="ts">
	import { cn } from "$lib/utils.js";

	interface Props {
		code: string;
		class?: string;
		maxLines?: number;
	}

	let { code, class: className, maxLines }: Props = $props();

	interface Token {
		text: string;
		class: string;
	}

	const tokenPattern =
		/("(?:\\.|[^"\\])*")(\s*:)?|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|(true|false|null)|([{}[\],:])/g;

	function highlight(line: string): Token[] {
		const tokens: Token[] = [];
		let position = 0;
		tokenPattern.lastIndex = 0;

		for (const match of line.matchAll(tokenPattern)) {
			const index = match.index ?? 0;
			if (index > position) {
				tokens.push({ text: line.slice(position, index), class: "" });
			}
			if (match[1]) {
				tokens.push({
					text: match[1],
					class: match[2] ? "text-kissa-blue" : "text-kissa-green",
				});
				if (match[2]) {
					tokens.push({
						text: match[2],
						class: "text-muted-foreground",
					});
				}
			} else if (match[3]) {
				tokens.push({ text: match[3], class: "text-kissa-orange" });
			} else if (match[4]) {
				tokens.push({ text: match[4], class: "text-kissa-purple" });
			} else if (match[5]) {
				tokens.push({
					text: match[5],
					class: "text-muted-foreground",
				});
			}
			position = index + match[0].length;
		}

		if (position < line.length) {
			tokens.push({ text: line.slice(position), class: "" });
		}
		return tokens;
	}

	let allLines = $derived(code.split("\n"));
	let lines = $derived(
		allLines.slice(0, maxLines ?? allLines.length).map((line, index) => ({
			number: index + 1,
			tokens: highlight(line),
		}))
	);
	let truncated = $derived(Boolean(maxLines && allLines.length > maxLines));
</script>

<div
	class={cn(
		"flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden rounded-xl border border-border/60 bg-card shadow-paper",
		className
	)}
>
	<div
		class="flex items-center justify-between border-b border-border/60 px-3 py-2"
	>
		<span class="font-mono text-[10px] text-muted-foreground">resume.json</span>
		<span class="font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
			JSON
		</span>
	</div>
	<div class="relative min-h-0 min-w-0 flex-1 overflow-auto">
		<div class="min-w-max p-3 font-mono text-[10px] leading-[1.7] sm:text-[11px]">
			{#each lines as line (line.number)}
				<div class="flex gap-3">
					<span
						class="w-6 shrink-0 select-none text-right text-muted-foreground/50"
						>{line.number}</span
					>
					<span class="whitespace-pre"
						>{#each line.tokens as token, index (index)}<span
								class={token.class}>{token.text}</span
							>{/each}</span
					>
				</div>
			{/each}
			{#if truncated}
				<div class="flex gap-3 text-muted-foreground/60">
					<span class="w-6 shrink-0"></span>
					<span>…</span>
				</div>
			{/if}
		</div>
		{#if truncated}
			<div
				class="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-card to-transparent"
			></div>
		{/if}
	</div>
</div>
