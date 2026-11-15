<script lang="ts">
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import ProjectCard from "$lib/components/project-card.svelte";
	import SectionHeading from "$lib/components/section-heading.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { projects } from "$lib/data/projects";
	import { site } from "$lib/data/site";
</script>

<section id="work" class="scroll-mt-24 py-20 sm:py-28">
	<div class="container-page">
		<SectionHeading
			eyebrow="Selected work"
			title="Things I've built, shipped, and maintained."
			description="Product engineering, developer tooling, and open source. Interfaces and systems that respect the people using them."
		>
			{#snippet action()}
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
			{/snippet}
		</SectionHeading>

		<div class="mt-10 grid gap-5 sm:mt-12 md:grid-cols-2">
			{#each projects as project (project.slug)}
				<ProjectCard {project} />
			{/each}
		</div>
	</div>
</section>
