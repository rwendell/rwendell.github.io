<script lang="ts">
	import AccessibilityIcon from "@lucide/svelte/icons/accessibility";
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import DatabaseIcon from "@lucide/svelte/icons/database";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import GraduationCapIcon from "@lucide/svelte/icons/graduation-cap";
	import LayoutIcon from "@lucide/svelte/icons/layout";
	import SparklesIcon from "@lucide/svelte/icons/sparkles";
	import TerminalIcon from "@lucide/svelte/icons/terminal";
	import WrenchIcon from "@lucide/svelte/icons/wrench";
	import SectionHeading from "$lib/components/section-heading.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import {
		education,
		experience,
		principles,
		site,
		skillGroups,
	} from "$lib/data/site";

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

<section id="about" class="scroll-mt-24 py-20 sm:py-28">
	<div class="container-page">
		<SectionHeading
			eyebrow="About"
			title="Design-minded, delivery-focused."
			description="I care about accessibility, honest UI states, and tools that make the next person's job easier."
		>
			{#snippet action()}
				<Button
					variant="outline"
					href={site.resume.href}
					download={site.resume.filename}
					class="gap-2"
				>
					<DownloadIcon class="size-4" />
					Download resume
				</Button>
			{/snippet}
		</SectionHeading>

		<div class="mt-12 grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
			<div>
				<div class="grid gap-4 sm:grid-cols-3">
					{#each principles as principle (principle.title)}
						{@const Icon = principleIcons[principle.icon]}
						<div class="rounded-xl border border-border/60 bg-card/40 p-4">
							<span
								class="grid size-8 place-items-center rounded-lg bg-kissa-orange/10 text-kissa-orange"
							>
								<Icon class="size-4" />
							</span>
							<h3 class="mt-3 text-sm font-semibold tracking-tight">
								{principle.title}
							</h3>
							<p class="mt-1.5 text-xs leading-relaxed text-muted-foreground">
								{principle.body}
							</p>
						</div>
					{/each}
				</div>
			</div>

			<div class="paper-card rounded-2xl p-6 sm:p-7">
				<p class="eyebrow">Toolbox</p>

				<div class="mt-6 space-y-6">
					{#each skillGroups as group (group.name)}
						{@const Icon = skillIcons[group.icon]}
						<div>
							<div class="flex items-center gap-2">
								<Icon class="size-3.5 text-muted-foreground" />
								<h3 class="text-sm font-semibold tracking-tight">
									{group.name}
								</h3>
							</div>
							<div class="mt-2.5 flex flex-wrap gap-1.5">
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

		<div class="mt-20">
			<div class="flex items-end justify-between gap-4">
				<div>
					<p class="eyebrow">Experience</p>
					<h3
						class="mt-2 text-2xl font-semibold tracking-[-0.02em] sm:text-3xl"
					>
						Where I've shipped
					</h3>
				</div>
				<a
					class="link-arrow hidden text-sm sm:inline-flex"
					href={site.resume.href}
					target="_blank"
					rel="noreferrer"
				>
					Full resume <ArrowUpRightIcon class="size-3.5" />
				</a>
			</div>

			<ol class="mt-8 space-y-0">
				{#each experience as job, index (job.company)}
					<li class="grid grid-cols-[auto_1fr] gap-4 sm:gap-6">
						<div class="flex flex-col items-center">
							<span
								class="mt-2 size-2.5 shrink-0 rounded-full bg-kissa-orange ring-4 ring-background"
							></span>
							{#if index < experience.length - 1}
								<span class="mt-2 w-px flex-1 bg-border/70"></span>
							{/if}
						</div>
						<div class={index < experience.length - 1 ? "pb-10" : ""}>
							<div
								class="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
							>
								<h4 class="text-base font-semibold tracking-tight sm:text-lg">
									{job.company}
									{#if "subtitle" in job}
										<span class="font-normal text-muted-foreground"
											>({job.subtitle})</span
										>
									{/if}
									<span class="block text-sm font-normal text-muted-foreground sm:inline">
										· {job.role}
									</span>
								</h4>
								<span class="mono-label shrink-0">
									{job.start} — {job.end}
								</span>
							</div>
							<p class="mt-2 text-sm leading-relaxed text-muted-foreground">
								{job.summary}
							</p>
							<ul class="mt-3 flex flex-col gap-1.5">
								{#each job.highlights.slice(0, 2) as highlight (highlight)}
									<li
										class="flex gap-2 text-sm leading-relaxed text-foreground/75"
									>
										<span
											class="mt-2 size-1 shrink-0 rounded-full bg-kissa-orange"
											aria-hidden="true"
										></span>
										<span>{highlight}</span>
									</li>
								{/each}
							</ul>
						</div>
					</li>
				{/each}
			</ol>

			<div
				class="mt-10 flex flex-wrap items-center gap-4 rounded-xl border border-border/60 bg-card/40 p-4 sm:px-5"
			>
				<span
					class="grid size-9 place-items-center rounded-lg bg-kissa-blue/10 text-kissa-blue"
				>
					<GraduationCapIcon class="size-4" />
				</span>
				<div>
					<p class="text-sm font-medium">{education.institution}</p>
					<p class="text-sm text-muted-foreground">
						{education.degree} · {education.years}
					</p>
				</div>
				<a
					class="link-arrow ml-auto text-sm"
					href={site.resume.href}
					target="_blank"
					rel="noreferrer"
				>
					Details <ArrowUpRightIcon class="size-3.5" />
				</a>
			</div>
		</div>
	</div>
</section>
