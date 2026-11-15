<script lang="ts">
	import { cn } from "$lib/utils.js";

	export interface CarouselSlide {
		src: string;
		label: string;
		width?: number;
		height?: number;
	}

	interface Props {
		slides: CarouselSlide[];
		class?: string;
	}

	let { slides, class: className }: Props = $props();

	let index = $state(0);
	let paused = $state(false);
	let reducedMotion = $state(false);

	$effect(() => {
		const media = window.matchMedia("(prefers-reduced-motion: reduce)");
		reducedMotion = media.matches;
		const onChange = () => {
			reducedMotion = media.matches;
		};
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	});

	$effect(() => {
		const current = index;
		if (paused || reducedMotion || slides.length < 2) return;

		const interval = setInterval(() => {
			index = (current + 1) % slides.length;
		}, 5000);
		return () => clearInterval(interval);
	});
</script>

<section
	class={cn(
		"relative h-full min-h-0 overflow-hidden rounded-lg border border-border/60 bg-card",
		className
	)}
	aria-label="Project preview"
	onmouseenter={() => (paused = true)}
	onmouseleave={() => (paused = false)}
	onfocusin={() => (paused = true)}
	onfocusout={() => (paused = false)}
>
	{#each slides as slide, slideIndex (slide.src)}
		<img
			src={slide.src}
			alt=""
			width={slide.width}
			height={slide.height}
			class={cn(
				"absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500",
				slideIndex === index ? "opacity-100" : "opacity-0"
			)}
			loading="lazy"
			decoding="async"
		/>
	{/each}

	<div
		class="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 bg-gradient-to-t from-black/45 via-black/10 to-transparent p-2"
	>
		<span
			class="rounded-full border border-white/15 bg-black/55 px-2 py-0.5 font-mono text-[8px] uppercase tracking-wider text-white/85 backdrop-blur"
		>
			{slides[index]?.label ?? ""}
		</span>

		{#if slides.length > 1}
			<div
				class="flex items-center gap-1 rounded-full border border-white/15 bg-black/45 px-1.5 py-1 backdrop-blur"
			>
				{#each slides as slide, slideIndex (slide.src)}
					<button
						type="button"
						class="grid size-5 place-items-center rounded-full"
						aria-label={`Show ${slide.label}`}
						aria-current={slideIndex === index ? "true" : undefined}
						onclick={() => {
							index = slideIndex;
						}}
					>
						<span
							class={cn(
								"size-1.5 rounded-full transition-colors",
								slideIndex === index ? "bg-white" : "bg-white/40"
							)}
						></span>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</section>
