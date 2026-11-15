<script lang="ts" module>
	import type { CarouselSlide } from "$lib/components/project-carousel.svelte";
	import type { ProjectAccent } from "$lib/data/projects";

	export const accentStyles: Record<
		ProjectAccent,
		{ text: string; soft: string; border: string; dot: string; gradient: string }
	> = {
		orange: {
			text: "text-kissa-orange",
			soft: "bg-kissa-orange/10",
			border: "border-kissa-orange/30",
			dot: "bg-kissa-orange",
			gradient: "from-kissa-orange/20 via-kissa-orange/5 to-transparent",
		},
		teal: {
			text: "text-kissa-teal",
			soft: "bg-kissa-teal/10",
			border: "border-kissa-teal/30",
			dot: "bg-kissa-teal",
			gradient: "from-kissa-teal/20 via-kissa-teal/5 to-transparent",
		},
		blue: {
			text: "text-kissa-blue",
			soft: "bg-kissa-blue/10",
			border: "border-kissa-blue/30",
			dot: "bg-kissa-blue",
			gradient: "from-kissa-blue/20 via-kissa-blue/5 to-transparent",
		},
		purple: {
			text: "text-kissa-purple",
			soft: "bg-kissa-purple/10",
			border: "border-kissa-purple/30",
			dot: "bg-kissa-purple",
			gradient: "from-kissa-purple/20 via-kissa-purple/5 to-transparent",
		},
		pink: {
			text: "text-kissa-pink",
			soft: "bg-kissa-pink/10",
			border: "border-kissa-pink/30",
			dot: "bg-kissa-pink",
			gradient: "from-kissa-pink/20 via-kissa-pink/5 to-transparent",
		},
		green: {
			text: "text-kissa-green",
			soft: "bg-kissa-green/10",
			border: "border-kissa-green/30",
			dot: "bg-kissa-green",
			gradient: "from-kissa-green/20 via-kissa-green/5 to-transparent",
		},
		yellow: {
			text: "text-kissa-yellow",
			soft: "bg-kissa-yellow/10",
			border: "border-kissa-yellow/30",
			dot: "bg-kissa-yellow",
			gradient: "from-kissa-yellow/20 via-kissa-yellow/5 to-transparent",
		},
		red: {
			text: "text-kissa-red",
			soft: "bg-kissa-red/10",
			border: "border-kissa-red/30",
			dot: "bg-kissa-red",
			gradient: "from-kissa-red/20 via-kissa-red/5 to-transparent",
		},
	};

	const mealPlannerSlides = [
		{
			src: "/projects/meal-planner/cookbook-card.png",
			label: "Cookbook",
			width: 880,
			height: 780,
		},
		{
			src: "/projects/meal-planner/planner-card.png",
			label: "Planner",
			width: 880,
			height: 780,
		},
	];

	const slippiosSlides: CarouselSlide[] = [
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
	];

	const kissaSlides = [
		{
			src: "/projects/kissa/logo.png",
			label: "Kissa",
			width: 1700,
			height: 706,
		},
		{
			src: "/projects/kissa/latte.png",
			label: "Latte",
			width: 1708,
			height: 1419,
		},
		{
			src: "/projects/kissa/macchiato.png",
			label: "Macchiato",
			width: 1703,
			height: 1419,
		},
	];

</script>

<script lang="ts">
	import ProjectCarousel from "$lib/components/project-carousel.svelte";
	import { cn } from "$lib/utils.js";

	interface Props {
		slug: string;
		accent: ProjectAccent;
		class?: string;
	}

	let { slug, accent, class: className }: Props = $props();

	let palette = $derived(accentStyles[accent]);
</script>

<div
	class={cn(
		"relative isolate min-h-[12.5rem] overflow-hidden rounded-xl bg-muted/30",
		className
	)}
>
	<div
		class={cn(
			"absolute inset-0 bg-gradient-to-br opacity-90",
			palette.gradient
		)}
	></div>
	<div
		class="absolute inset-0 opacity-[0.16]"
		style="background-image: radial-gradient(color-mix(in srgb, var(--foreground) 55%, transparent) 0.7px, transparent 0.7px); background-size: 12px 12px;"
	></div>

	<div class="relative flex h-full flex-col gap-2.5 p-4">
		{#if slug === "meal-planner"}
			<ProjectCarousel
				slides={mealPlannerSlides}
				class="min-h-[10.5rem] flex-1"
			/>
		{:else if slug === "slippios"}
			<ProjectCarousel
				slides={slippiosSlides}
				class="min-h-[10.5rem] flex-1"
			/>
		{:else if slug === "kissa"}
			<ProjectCarousel
				slides={kissaSlides}
				class="min-h-[10.5rem] flex-1"
			/>
		{:else}
			<div class="grid flex-1 place-items-center">
				<div
					class={cn(
						"grid size-14 place-items-center rounded-2xl border",
						palette.border,
						palette.soft
					)}
				>
					<span class={cn("size-3 rounded-full", palette.dot)}></span>
				</div>
			</div>
		{/if}
	</div>
</div>
