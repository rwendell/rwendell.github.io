<script lang="ts">
	import MailIcon from "@lucide/svelte/icons/mail";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import { site } from "$lib/data/site";

	const year = new Date().getFullYear();
</script>

<footer class="mt-24 border-t border-border/60">
	<div class="container-page py-10 sm:py-12">
		<div class="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
			<a href="#top" class="text-sm font-semibold tracking-tight">
				{site.name}
			</a>

			<div class="flex flex-col gap-2 text-sm">
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
					href={site.upwork}
					target="_blank"
					rel="noreferrer"
				>
					<BrandIcon name="upwork" class="size-3.5" /> Upwork
				</a>
				<a
					class="inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
					href={`mailto:${site.email}`}
				>
					<MailIcon class="size-3.5" /> Email
				</a>
			</div>
		</div>

		<p class="mt-10 border-t border-border/50 pt-6 text-xs text-muted-foreground">
			© {year} {site.name}.
		</p>
	</div>
</footer>
