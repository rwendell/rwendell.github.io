<script lang="ts">
	import DatabaseIcon from "@lucide/svelte/icons/database";
	import LayoutIcon from "@lucide/svelte/icons/layout";
	import TerminalIcon from "@lucide/svelte/icons/terminal";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import HexPattern from "$lib/components/hex-pattern.svelte";
	import { site, skillGroups } from "$lib/data/site";

	const skillIcons = {
		layout: LayoutIcon,
		database: DatabaseIcon,
		terminal: TerminalIcon,
	};
</script>

<section id="top" class="relative overflow-hidden">
	<HexPattern id="hero-hex" class="hex-pattern" />

	<div class="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
		<div
			class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16"
		>
			<div>
				<div class="flex flex-col gap-6 sm:flex-row sm:items-end">
					<div
						class="mx-auto w-36 shrink-0 overflow-hidden rounded-2xl border border-border/70 bg-card shadow-paper sm:mx-0"
					>
						<img
							src="/ryan-wendell.jpg"
							alt="Ryan Wendell"
							width="1200"
							height="1200"
							class="aspect-[4/5] scale-125 w-full object-cover object-top"
							decoding="async"
						/>
					</div>
					<h1
						class="max-w-[14ch] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl"
					>
						I'm <span class="text-kissa-orange">Ryan</span>,
					</h1>
				</div>
				<p
					class="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
				>
					a frontend engineer in Chicago. I build interfaces that are
					part of the product, not a layer added at the end, and I
					make sure they work by keyboard as well as mouse. I care
					about clear types, components with clear boundaries, and
					docs that answer questions.
				</p>

				<div
					class="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm"
				>
					<a
						href={site.github}
						target="_blank"
						rel="noreferrer"
						class="link-arrow link-underline text-muted-foreground"
					>
						<BrandIcon name="github" class="size-3.5" />
						github.com/{site.githubHandle}
					</a>
					<a
						href={site.linkedin}
						target="_blank"
						rel="noreferrer"
						class="link-arrow link-underline text-muted-foreground"
					>
						<BrandIcon name="linkedin" class="size-3.5" />
						linkedin.com/in/{site.linkedinHandle}
					</a>
					<a
						href={site.upwork}
						target="_blank"
						rel="noreferrer"
						class="link-arrow link-underline text-muted-foreground"
					>
						<BrandIcon name="upwork" class="size-3.5" />
						Upwork
					</a>
				</div>
			</div>

			<div class="relative lg:pl-4">
				<div class="paper-card overflow-hidden rounded-2xl">
					<div
						class="h-1 bg-gradient-to-r from-kissa-orange via-kissa-yellow to-kissa-teal"
					></div>
					<div class="p-6 sm:p-7">
						<div class="mt-5 space-y-5">
							{#each skillGroups as group (group.name)}
								{@const Icon = skillIcons[group.icon]}
								<div>
									<div class="flex items-center gap-2">
										<Icon
											class="size-3.5 text-muted-foreground"
										/>
										<h2
											class="text-sm font-semibold tracking-tight"
										>
											{group.name}
										</h2>
									</div>
									<div class="mt-2 flex flex-wrap gap-1.5">
										{#each group.items as skill (skill)}
											<span
												class="rounded-md border border-border/60 bg-background/40 px-2 py-1 font-mono text-[10px] text-muted-foreground"
											>
												{skill}
											</span>
										{/each}
									</div>
								</div>
							{/each}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="kissa-rule container-page" aria-hidden="true"></div>
</section>
