<script lang="ts">
	import CheckIcon from "@lucide/svelte/icons/check";
	import MonitorIcon from "@lucide/svelte/icons/monitor";
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import { mode, setMode, userPrefersMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { cn } from "$lib/utils.js";

	const options = [
		{ value: "light", label: "Light", icon: SunIcon },
		{ value: "dark", label: "Dark", icon: MoonIcon },
		{ value: "system", label: "System", icon: MonitorIcon },
	] as const;

	let resolvedMode = $derived(mode.current);
	let preference = $derived(userPrefersMode.current);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger>
		{#snippet child({ props })}
			<Button
				variant="ghost"
				size="icon"
				class="text-muted-foreground hover:text-foreground"
				aria-label="Change color theme"
				{...props}
			>
				{#if resolvedMode === "dark"}
					<MoonIcon class="size-4" />
				{:else}
					<SunIcon class="size-4" />
				{/if}
			</Button>
		{/snippet}
	</DropdownMenu.Trigger>
	<DropdownMenu.Content align="end" class="min-w-40">
		<DropdownMenu.Label class="font-mono text-[10px] uppercase tracking-[0.18em]">
			Appearance
		</DropdownMenu.Label>
		<DropdownMenu.Separator />
		{#each options as option (option.value)}
			{@const Icon = option.icon}
			<DropdownMenu.Item
				class="gap-2.5"
				onSelect={() => setMode(option.value)}
			>
				<Icon class="size-4 text-muted-foreground" />
				<span>{option.label}</span>
				{#if preference === option.value}
					<CheckIcon class={cn("ml-auto size-4 text-kissa-orange")} />
				{/if}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
