<script lang="ts">
	import { site } from "$lib/data/site";

	const year = new Date().getFullYear();
</script>

<footer class="mt-10 border-t border-border/60">
	<div class="container-page py-6">
		<p class="text-sm text-muted-foreground">© {site.name} {year}</p>
	</div>
</footer>
