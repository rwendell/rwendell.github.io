<script lang="ts">
	import { siGithub, siLinkedin, siNpm } from "simple-icons";

	interface Props {
		name: "github" | "linkedin" | "npm";
		class?: string;
	}

	let { name, class: className }: Props = $props();

	const icons = {
		github: siGithub,
		linkedin: siLinkedin,
		npm: siNpm,
	};

	let icon = $derived(icons[name]);
</script>

<svg
	class={className}
	viewBox="0 0 24 24"
	fill="currentColor"
	aria-hidden="true"
	focusable="false"
>
	<path d={icon.path} />
</svg>
