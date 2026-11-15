<script lang="ts">
	import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { site } from "$lib/data/site";

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

<section id="top" class="relative overflow-hidden">
	<div class="hero-grid absolute inset-0 -z-10" aria-hidden="true"></div>
	<div
		class="pointer-events-none absolute -top-32 right-[-10%] -z-10 size-[34rem] rounded-full bg-kissa-orange/10 blur-3xl"
		aria-hidden="true"
	></div>
	<div
		class="pointer-events-none absolute -bottom-40 left-[-15%] -z-10 size-[30rem] rounded-full bg-kissa-teal/10 blur-3xl"
		aria-hidden="true"
	></div>

	<div class="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
		<div class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
			<div>
				<div
					class="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card/60 px-3 py-1.5 shadow-xs backdrop-blur-sm"
				>
					<span class="relative flex size-2" aria-hidden="true">
						<span
							class="absolute inline-flex size-full animate-ping rounded-full bg-kissa-green opacity-60"
						></span>
						<span
							class="relative inline-flex size-2 rounded-full bg-kissa-green"
						></span>
					</span>
					<span class="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
						{site.availability}
					</span>
				</div>

				<p class="eyebrow mt-8">
					{site.name} · {site.location}
				</p>
				<h1
					class="mt-4 max-w-[13ch] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl"
				>
					Interfaces with a little more
					<span class="font-mono font-medium text-kissa-orange">care</span>.
				</h1>
				<p
					class="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
				>
					I'm Ryan, a frontend-focused software engineer in Chicago. I spent
					four years building enterprise features at Northern Trust, and
					before that security tooling at BluBracket. Outside of work I build
					the things I wish existed, from a household meal planner to an
					espresso color scheme.
				</p>

				<div class="mt-8 flex flex-wrap items-center gap-3">
					<Button href="/#work" size="lg" class="group gap-2">
						Explore selected work
						<ArrowDownIcon
							class="size-4 transition-transform group-hover:translate-y-0.5"
						/>
					</Button>
					<Button href="/#resume" variant="outline" size="lg" class="gap-2">
						<FileTextIcon class="size-4" />
						View resume
					</Button>
				</div>

				<div class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
					<a
						href={site.github}
						target="_blank"
						rel="noreferrer"
						class="link-arrow text-muted-foreground"
					>
						<BrandIcon name="github" class="size-3.5" />
						github.com/{site.githubHandle}
						<ArrowUpRightIcon class="size-3" />
					</a>
					<a
						href={site.linkedin}
						target="_blank"
						rel="noreferrer"
						class="link-arrow text-muted-foreground"
					>
						<BrandIcon name="linkedin" class="size-3.5" />
						linkedin.com/in/{site.linkedinHandle}
						<ArrowUpRightIcon class="size-3" />
					</a>
				</div>
			</div>

			<div class="relative lg:pl-4">
				<div
					class="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-kissa-orange/20 via-kissa-pink/10 to-kissa-teal/20 opacity-70 blur-2xl"
					aria-hidden="true"
				></div>

				<div class="paper-card overflow-hidden rounded-2xl">
					<div
						class="h-1 bg-gradient-to-r from-kissa-orange via-kissa-yellow to-kissa-teal"
					></div>
					<div class="p-6 sm:p-7">
						<div class="flex items-center justify-between gap-4">
							<p class="eyebrow">Now</p>
							<span class="mono-label">Chicago, IL</span>
						</div>
						<p
							class="mt-5 text-balance text-2xl font-semibold leading-[1.15] tracking-[-0.025em] sm:text-[1.7rem]"
						>
							Building Kissa, this site, and a few local-first tools.
						</p>
					</div>
					<div
						class="grid grid-cols-2 gap-px border-y border-border/60 bg-border/60"
					>
						<div class="bg-card p-4">
							<p class="mono-label">Focus</p>
							<p class="mt-1.5 text-sm font-medium">Frontend + DX</p>
						</div>
						<div class="bg-card p-4">
							<p class="mono-label">Stack</p>
							<p class="mt-1.5 text-sm font-medium">SvelteKit + React</p>
						</div>
						<div class="bg-card p-4">
							<p class="mono-label">Reading</p>
							<p class="mt-1.5 text-sm font-medium">Design systems</p>
						</div>
						<div class="bg-card p-4">
							<p class="mono-label">Elsewhere</p>
							<p class="mt-1.5 text-sm font-medium">Open source</p>
						</div>
					</div>
					<div class="flex items-center justify-between gap-3 p-4">
						<span class="mono-label">4+ years shipping</span>
						<div class="flex items-center gap-1.5" aria-hidden="true">
							{#each palette as color (color)}
								<span
									class="size-2 rounded-full ring-1 ring-black/10 dark:ring-white/10"
									style:background={color}
								></span>
							{/each}
						</div>
					</div>
				</div>

			</div>
		</div>
	</div>

	<div class="kissa-rule container-page" aria-hidden="true"></div>
</section>
