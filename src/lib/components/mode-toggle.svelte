<script lang="ts">
	import MoonIcon from "@lucide/svelte/icons/moon";
	import SunIcon from "@lucide/svelte/icons/sun";
	import SunMoonIcon from "@lucide/svelte/icons/sun-moon";
	import { setMode, userPrefersMode } from "mode-watcher";
	import { Button } from "$lib/components/ui/button/index.js";

	const modes = ["system", "light", "dark"] as const;

	const labels = {
		system: "System",
		light: "Light",
		dark: "Dark",
	};

	const icons = {
		system: SunMoonIcon,
		light: SunIcon,
		dark: MoonIcon,
	};

	let preference = $derived(userPrefersMode.current ?? "system");
	let label = $derived(labels[preference]);
	let Icon = $derived(icons[preference]);

	function cycleMode() {
		const index = modes.indexOf(preference);
		setMode(modes[(index + 1) % modes.length]);
	}
</script>

<Button
	variant="ghost"
	size="icon"
	class="text-muted-foreground hover:text-foreground"
	aria-label={`Color scheme: ${label}. Activate to change.`}
	title={`Color scheme: ${label} (click to change)`}
	onclick={cycleMode}
>
	<Icon class="size-4" />
</Button>
