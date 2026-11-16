<script lang="ts">
	import ProjectPreview, {
		accentStyles,
	} from "$lib/components/project-preview.svelte";
	import { Badge } from "$lib/components/ui/badge/index.js";
	import type { Project } from "$lib/data/projects";
	import { cn } from "$lib/utils.js";

	interface Props {
		project: Project;
	}

	let { project }: Props = $props();

	let palette = $derived(accentStyles[project.accent]);
	let textOnly = $derived(Boolean(project.textOnly));
	let highlights = $derived(
		project.highlights.slice(0, textOnly ? 3 : 2)
	);
</script>

<article
	class="group paper-card card-lift flex h-full flex-col overflow-hidden rounded-2xl"
>
	<div class={cn("h-1 w-full shrink-0", palette.dot)} aria-hidden="true"></div>

	{#if !textOnly}
		<ProjectPreview slug={project.slug} />
	{/if}

	<div class="flex flex-1 flex-col p-5 sm:p-6">
		<div class="flex flex-wrap items-center gap-x-2.5 gap-y-1">
			<span class={cn("eyebrow", palette.text)}>{project.category}</span>
			{#if project.org && project.org.toLowerCase() !== project.name.toLowerCase()}
				<Badge variant="outline" class="ml-auto text-[10px]">
					{project.org}
				</Badge>
			{/if}
		</div>

		<h3 class="mt-3 text-xl font-semibold tracking-[-0.02em] text-foreground">
			{project.name}
		</h3>
		<p class="mt-3 text-sm leading-relaxed text-muted-foreground">
			{project.description}
		</p>

		<ul class="mt-4 flex flex-col gap-1.5">
			{#each highlights as highlight (highlight)}
				<li class="flex gap-2 text-sm leading-relaxed text-foreground/75">
					<span
						class={cn("mt-2 size-1.5 shrink-0 rounded-full", palette.dot)}
						aria-hidden="true"
					></span>
					<span>{highlight}</span>
				</li>
			{/each}
		</ul>

		<div class="mt-5 flex flex-wrap gap-1.5">
			{#each project.tech as tech (tech)}
				<Badge
					variant="outline"
					class="border-border/70 bg-background/40 font-mono text-[10px] font-normal text-muted-foreground"
				>
					{tech}
				</Badge>
			{/each}
		</div>

		<div class="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-6">
			{#if project.repo}
				<a
					class="link-arrow text-sm"
					href={project.repo}
					target="_blank"
					rel="noreferrer"
					aria-label={`${project.name} source on GitHub`}
				>
					Source
				</a>
			{/if}
			{#if project.live}
				<a
					class="link-arrow text-sm"
					href={project.live}
					target="_blank"
					rel="noreferrer"
					aria-label={`Open the ${project.name} live site`}
				>
					Live site
				</a>
			{/if}
			{#if project.npm}
				<a
					class="link-arrow text-sm"
					href={project.npm}
					target="_blank"
					rel="noreferrer"
					aria-label={`${project.name} on npm`}
				>
					npm
				</a>
			{/if}
		</div>
	</div>
</article>
