<script lang="ts">
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import ProjectCard from "$lib/components/project-card.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { projects } from "$lib/data/projects";
	import { site } from "$lib/data/site";
</script>

<section id="projects" class="scroll-mt-24 py-20 sm:py-28">
	<div class="container-page">
		<div class="flex flex-wrap items-end justify-between gap-4">
			<h2
				class="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
			>
				Projects
			</h2>
			<Button
				variant="outline"
				href={site.github}
				target="_blank"
				rel="noreferrer"
				class="gap-2"
			>
				<BrandIcon name="github" class="size-4" />
				More on GitHub
			</Button>
		</div>

		<div class="mt-6 grid gap-5 md:grid-cols-2">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
