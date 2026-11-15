<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import CoffeeIcon from "@lucide/svelte/icons/coffee";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import { onMount } from "svelte";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import ModeToggle from "$lib/components/mode-toggle.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as Sheet from "$lib/components/ui/sheet/index.js";
	import { navItems, site } from "$lib/data/site";
	import { cn } from "$lib/utils.js";

	let open = $state(false);
	let progress = $state(0);
	let active = $state<string | null>(null);

	function updateProgress() {
		const root = document.documentElement;
		const max = root.scrollHeight - window.innerHeight;
		progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
	}

	onMount(() => {
		updateProgress();

		const sections = Array.from(
			document.querySelectorAll<HTMLElement>("main section[id]")
		);
		if (sections.length === 0) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: "-42% 0px -52% 0px", threshold: 0 }
		);

		for (const section of sections) observer.observe(section);
		return () => observer.disconnect();
	});
</script>

<svelte:window onscroll={updateProgress} onresize={updateProgress} />

<header
	class="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
>
	<div class="container-page flex h-16 items-center justify-between gap-4">
		<a
			href="/"
			class="group flex shrink-0 items-center gap-2.5"
			aria-label="Ryan Wendell — back to top"
		>
			<span
				class="grid size-8 place-items-center rounded-lg border border-border/70 bg-card/70 text-kissa-orange shadow-xs transition-colors group-hover:border-kissa-orange/45"
			>
				<CoffeeIcon class="size-4" />
			</span>
			<span class="flex flex-col leading-none">
				<span class="text-sm font-semibold tracking-tight">Ryan Wendell</span>
				<span
					class="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
					>frontend engineer</span
				>
			</span>
		</a>

		<nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					aria-current={active === item.id ? "location" : undefined}
					class={cn(
						"relative rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
						active === item.id && "bg-muted/60 text-foreground"
					)}
				>
					{item.label}
					{#if active === item.id}
						<span
							class="absolute inset-x-3 -bottom-[9px] h-px bg-kissa-orange"
							aria-hidden="true"
						></span>
					{/if}
				</a>
			{/each}
		</nav>

		<div class="flex items-center gap-1">
			<ModeToggle />
			<Button
				variant="ghost"
				size="icon"
				class="hidden text-muted-foreground hover:text-foreground sm:inline-flex"
				href={site.github}
				target="_blank"
				rel="noreferrer"
				aria-label="GitHub profile"
			>
				<BrandIcon name="github" class="size-4" />
			</Button>

			<Sheet.Root bind:open>
				<Sheet.Trigger>
					{#snippet child({ props })}
						<Button
							variant="ghost"
							size="icon"
							class="text-muted-foreground hover:text-foreground md:hidden"
							aria-label="Open navigation menu"
							{...props}
						>
							<MenuIcon class="size-4" />
						</Button>
					{/snippet}
				</Sheet.Trigger>
				<Sheet.Content side="right" class="w-72">
					<Sheet.Header>
						<Sheet.Title>Menu</Sheet.Title>
						<Sheet.Description>Portfolio sections.</Sheet.Description>
					</Sheet.Header>
					<nav class="flex flex-col gap-1 px-4" aria-label="Mobile">
						{#each navItems as item (item.href)}
							<a
								href={item.href}
								onclick={() => (open = false)}
								class="rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground"
							>
								{item.label}
							</a>
						{/each}
					</nav>
					<Sheet.Footer class="flex-col items-stretch gap-2">
						<Button
							variant="outline"
							href={site.github}
							target="_blank"
							rel="noreferrer"
							class="justify-between"
						>
							<span class="inline-flex items-center gap-2">
								<BrandIcon name="github" class="size-4" />
								GitHub
							</span>
							<ArrowUpRightIcon class="size-3.5" />
						</Button>
						<p class="mono-label px-1 text-center">
							{site.location}
						</p>
					</Sheet.Footer>
				</Sheet.Content>
			</Sheet.Root>
		</div>
	</div>

	<div class="absolute inset-x-0 bottom-0 h-px bg-border/40" aria-hidden="true">
		<div
			class="h-full origin-left bg-gradient-to-r from-kissa-orange via-kissa-yellow to-kissa-teal"
			style:transform={`scaleX(${progress})`}
		></div>
	</div>
</header>
