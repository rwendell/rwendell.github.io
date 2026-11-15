<script lang="ts">
	import AccessibilityIcon from "@lucide/svelte/icons/accessibility";
	import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import DatabaseIcon from "@lucide/svelte/icons/database";
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import LayoutIcon from "@lucide/svelte/icons/layout";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import TerminalIcon from "@lucide/svelte/icons/terminal";
	import WrenchIcon from "@lucide/svelte/icons/wrench";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import HexPattern from "$lib/components/hex-pattern.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { principles, site, skillGroups } from "$lib/data/site";

	const principleIcons = {
		sparkles: SparklesIcon,
		accessibility: AccessibilityIcon,
		wrench: WrenchIcon,
	};

	const skillIcons = {
		layout: LayoutIcon,
		database: DatabaseIcon,
		terminal: TerminalIcon,
	};
</script>

<section id="top" class="relative overflow-hidden">
	<HexPattern id="hero-hex" class="hex-pattern" />

	<div class="container-page pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-28 lg:pb-32">
		<div class="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
			<div>
				<p class="eyebrow">
					{site.name} · {site.location}
				</p>
				<h1
					class="mt-4 max-w-[17ch] text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl"
				>
					Interfaces with
					<span class="font-mono font-medium text-kissa-orange">intent</span>.
				</h1>
				<p
					class="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
				>
					I'm Ryan, a frontend-focused software engineer in Chicago. I like
					the seam between design and engineering: where a good interaction,
					a clean component API, and a reliable data model have to agree.
				</p>

				<div class="mt-8 flex flex-wrap items-center gap-3">
					<Button href="/#work" size="lg" class="group gap-2">
						See selected work
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
				<div class="paper-card overflow-hidden rounded-2xl">
					<div
						class="h-1 bg-gradient-to-r from-kissa-orange via-kissa-yellow to-kissa-teal"
					></div>
					<div class="p-6 sm:p-7">
						<p class="eyebrow">Toolbox</p>

						<div class="mt-5 space-y-5">
							{#each skillGroups as group (group.name)}
								{@const Icon = skillIcons[group.icon]}
								<div>
									<div class="flex items-center gap-2">
										<Icon class="size-3.5 text-muted-foreground" />
										<h2 class="text-sm font-semibold tracking-tight">
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

		<div class="mt-16">
			<p class="eyebrow">How I work</p>
			<div class="mt-4 grid gap-4 sm:grid-cols-3">
				{#each principles as principle (principle.title)}
					{@const Icon = principleIcons[principle.icon]}
					<div
						class="rounded-xl border border-border/60 bg-card/40 p-4 backdrop-blur-sm"
					>
						<span
							class="grid size-8 place-items-center rounded-lg bg-kissa-orange/10 text-kissa-orange"
						>
							<Icon class="size-4" />
						</span>
						<h2 class="mt-3 text-sm font-semibold tracking-tight">
							{principle.title}
						</h2>
						<p class="mt-1.5 text-xs leading-relaxed text-muted-foreground">
							{principle.body}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<div class="kissa-rule container-page" aria-hidden="true"></div>
</section>
