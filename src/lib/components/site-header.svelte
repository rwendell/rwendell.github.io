<script lang="ts">
	import CoffeeIcon from "@lucide/svelte/icons/coffee";
	import MenuIcon from "@lucide/svelte/icons/menu";
	import { onMount } from "svelte";
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

		if (max > 0 && window.scrollY >= max - 2) {
			active = "contact";
			return;
		}

		const sections = document.querySelectorAll<HTMLElement>(
			"main section[id]"
		);
		let current: string | null = null;
		for (const section of sections) {
			if (section.getBoundingClientRect().top <= window.innerHeight * 0.4) {
				current = section.id;
			}
		}
		active = current;
	}

	onMount(updateProgress);
</script>

<svelte:window onscroll={updateProgress} onresize={updateProgress} />

<header
	class="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65"
>
	<div
		class="container-page grid h-16 grid-cols-[auto_1fr_auto] items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
	>
		<a
			href="/#top"
			class="group flex items-center gap-2.5 justify-self-start"
			aria-label={`${site.name} — back to top`}
		>
			<span
				class="grid size-8 place-items-center rounded-lg border border-border/70 bg-card/70 text-kissa-orange shadow-xs transition-colors group-hover:border-kissa-orange/45"
			>
				<CoffeeIcon class="size-4" />
			</span>
			<span class="flex flex-col leading-none">
				<span class="text-sm font-semibold tracking-tight">{site.name}</span>
				<span
					class="mt-1 font-mono text-[9px] uppercase tracking-[0.18em] text-muted-foreground"
					>frontend engineer</span
				>
			</span>
		</a>

		<nav
			class="hidden items-center gap-1 justify-self-center md:flex"
			aria-label="Primary"
		>
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

		<div class="flex items-center gap-1 justify-self-end">
			<ModeToggle />

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
								aria-current={active === item.id ? "location" : undefined}
								class={cn(
									"rounded-md px-3 py-3 text-base font-medium text-muted-foreground transition-colors hover:bg-muted/60 hover:text-foreground",
									active === item.id && "bg-muted/60 text-foreground"
								)}
							>
								{item.label}
							</a>
						{/each}
					</nav>
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
