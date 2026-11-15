<script lang="ts">
	import ArrowUpIcon from "@lucide/svelte/icons/arrow-up";
	import MailIcon from "@lucide/svelte/icons/mail";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import { site } from "$lib/data/site";

	const year = new Date().getFullYear();
	const palette = [
		"var(--kissa-red)",
		"var(--kissa-orange)",
		"var(--kissa-yellow)",
		"var(--kissa-green)",
		"var(--kissa-teal)",
		"var(--kissa-blue)",
		"var(--kissa-purple)",
		"var(--kissa-pink)",
	];
</script>

<footer class="mt-24 border-t border-border/60">
	<div class="container-page py-10 sm:py-12">
		<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
			<div class="max-w-sm">
				<a href="#top" class="text-sm font-semibold tracking-tight"
					>{site.name}</a
				>
				<div class="mt-4 flex items-center gap-1.5" aria-hidden="true">
					{#each palette as color (color)}
						<span
							class="size-2 rounded-full ring-1 ring-black/10 dark:ring-white/10"
							style:background={color}
						></span>
					{/each}
					<span class="ml-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-muted-foreground"
						>kissa</span
					>
				</div>
			</div>

			<div class="grid grid-cols-2 gap-x-10 gap-y-2 text-sm sm:gap-x-14">
				<div class="flex flex-col gap-2">
					<span class="eyebrow text-[10px]">Elsewhere</span>
					<a
						class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
						href={site.github}
						target="_blank"
						rel="noreferrer"
					>
						<BrandIcon name="github" class="size-3.5" /> GitHub
					</a>
					<a
						class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
						href={site.linkedin}
						target="_blank"
						rel="noreferrer"
					>
						<BrandIcon name="linkedin" class="size-3.5" /> LinkedIn
					</a>
					<a
						class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
						href={`mailto:${site.email}`}
					>
						<MailIcon class="size-3.5" /> Email
					</a>
				</div>
				<div class="flex flex-col gap-2">
					<span class="eyebrow text-[10px]">This site</span>
					<a
						class="text-muted-foreground transition-colors hover:text-foreground"
						href="/#work">Work</a
					>
					<a
						class="text-muted-foreground transition-colors hover:text-foreground"
						href="/#resume">Resume</a
					>
					<a
						class="text-muted-foreground transition-colors hover:text-foreground"
						href={site.resume.href}
						download={site.resume.filename}>Download PDF</a
					>
				</div>
			</div>
		</div>

		<div
			class="mt-10 flex flex-col gap-4 border-t border-border/50 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between"
		>
			<p>© {year} {site.name}. Built with SvelteKit, Tailwind CSS, and shadcn-svelte.</p>
			<div class="flex items-center gap-4">
				<p class="font-mono text-[10px]">
					Type: Instrument Sans + Monaspace Neon
				</p>
				<a
					href="/#top"
					class="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
				>
					Top <ArrowUpIcon class="size-3" />
				</a>
			</div>
		</div>
	</div>
</footer>
