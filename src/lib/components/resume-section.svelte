<script lang="ts">
	import DownloadIcon from "@lucide/svelte/icons/download";
	import ResumeViewer from "$lib/components/resume-viewer.svelte";
	import SectionHeading from "$lib/components/section-heading.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { site } from "$lib/data/site";
</script>

<section id="resume" class="scroll-mt-24 py-20 sm:py-28">
	<div class="container-page">
		<SectionHeading
			eyebrow="Resume"
			title="The short version."
			description="One page. Preview it here or take the PDF with you."
		/>

		<div class="mx-auto mt-10 max-w-2xl sm:mt-12">
			<ResumeViewer pdfSrc={site.resume.preview} />

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
