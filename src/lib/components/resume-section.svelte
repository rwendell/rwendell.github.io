<script lang="ts">
	import DownloadIcon from "@lucide/svelte/icons/download";
	import ResumeViewer from "$lib/components/resume-viewer.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { site } from "$lib/data/site";
</script>

<section id="resume" class="scroll-mt-24 py-20 sm:py-28">
	<div class="container-page">
		<h2
			class="text-3xl font-semibold tracking-[-0.03em] text-foreground sm:text-4xl"
		>
			Resume
		</h2>

		<div class="mt-10 sm:mt-12">
			<ResumeViewer
				previewLatte={site.resume.previewLatte}
				previewMacchiato={site.resume.previewMacchiato}
			/>

			<div class="mt-6 flex justify-center">
				<Button
					size="lg"
					href={site.resume.href}
					download={site.resume.filename}
					class="gap-2"
				>
					<DownloadIcon class="size-4" />
					Download PDF
				</Button>
			</div>
		</div>
	</div>
</section>
