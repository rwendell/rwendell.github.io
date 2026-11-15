<script lang="ts" module>
	import type { CarouselSlide } from "$lib/components/project-carousel.svelte";
	import type { ProjectAccent } from "$lib/data/projects";

	export const accentStyles: Record<
		ProjectAccent,
		{ text: string; dot: string }
	> = {
		orange: { text: "text-kissa-orange", dot: "bg-kissa-orange" },
		teal: { text: "text-kissa-teal", dot: "bg-kissa-teal" },
		blue: { text: "text-kissa-blue", dot: "bg-kissa-blue" },
		purple: { text: "text-kissa-purple", dot: "bg-kissa-purple" },
		pink: { text: "text-kissa-pink", dot: "bg-kissa-pink" },
		green: { text: "text-kissa-green", dot: "bg-kissa-green" },
		yellow: { text: "text-kissa-yellow", dot: "bg-kissa-yellow" },
		red: { text: "text-kissa-red", dot: "bg-kissa-red" },
	};

	const slidesBySlug: Record<string, CarouselSlide[]> = {
		"meal-planner": [
			{
				src: "/projects/meal-planner/cookbook-card.png",
				label: "Cookbook",
				width: 1200,
				height: 500,
			},
			{
				src: "/projects/meal-planner/planner-card.png",
				label: "Planner",
				width: 1200,
				height: 500,
			},
		],
		slippios: [
			{
				src: "/projects/slippios/menu.png",
				label: "Menu",
				width: 1269,
				height: 786,
				position: "top",
			},
			{
				src: "/projects/slippios/settings.png",
				label: "Settings",
				width: 1261,
				height: 780,
				position: "top",
			},
			{
				src: "/projects/slippios/sign-in.png",
				label: "Sign in",
				width: 1071,
				height: 596,
				position: "top",
			},
		],
		kissa: [
			{
				src: "/projects/kissa/logo.png",
				label: "Kissa",
				width: 1700,
				height: 706,
			},
			{
				src: "/projects/kissa/latte-card.png",
				label: "Latte",
				width: 1110,
				height: 369,
			},
			{
				src: "/projects/kissa/macchiato-card.png",
				label: "Macchiato",
				width: 1110,
				height: 369,
			},
		],
	};
</script>

<script lang="ts">
	import ProjectCarousel from "$lib/components/project-carousel.svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		slug: string;
		class?: string;
	}

	let { slug, class: className }: Props = $props();

	let slides = $derived(slidesBySlug[slug] ?? []);
</script>

<div class={cn("h-[12.5rem] w-full overflow-hidden", className)}>
	<ProjectCarousel {slides} class="h-full" />
</div>
