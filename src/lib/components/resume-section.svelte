<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import CodeIcon from "@lucide/svelte/icons/code";
	import DownloadIcon from "@lucide/svelte/icons/download";
	import FileTextIcon from "@lucide/svelte/icons/file-text";
	import MailIcon from "@lucide/svelte/icons/mail";
	import ShieldCheckIcon from "@lucide/svelte/icons/shield-check";
	import ResumeDialog from "$lib/components/resume-dialog.svelte";
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

		<div class="mt-12 grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
			<div>
				<div class="flex flex-wrap gap-3">
					<ResumeDialog>
						{#snippet trigger(onclick)}
							<Button size="lg" class="gap-2" {onclick}>
								<FileTextIcon class="size-4" />
								Preview resume
							</Button>
						{/snippet}
					</ResumeDialog>

					<Button
						variant="outline"
						size="lg"
						href={site.resume.href}
						download={site.resume.filename}
						class="gap-2"
					>
						<DownloadIcon class="size-4" />
						Download PDF
					</Button>
				</div>

				<p class="mt-5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
					PDF · {site.resume.pages} {site.resume.pages === 1 ? "page" : "pages"} · {site.resume.updated}
				</p>

				<a
					class="link-arrow mt-3 text-xs"
					href={site.resume.json}
					download
				>
					<CodeIcon class="size-3.5" />
					resume.json
				</a>

				<p class="mt-6 text-sm leading-relaxed text-muted-foreground">
					Need a deeper version or a reference?
					<a class="link-arrow text-foreground" href={`mailto:${site.email}`}>
						<MailIcon class="size-3.5" />
						Email me
					</a>
				</p>

				<div class="mt-8 rounded-xl border border-border/60 bg-card/40 p-4">
					<div class="flex items-center justify-between gap-3">
						<p class="eyebrow">Built with dossier</p>
						<a
							class="link-arrow text-[10px]"
							href="https://github.com/rwendell/dossier"
							target="_blank"
							rel="noreferrer"
						>
							Source
							<ArrowUpRightIcon class="size-3" />
						</a>
					</div>
					<ol class="mt-3 space-y-2 text-sm text-muted-foreground">
						<li class="flex items-center gap-2">
							<CodeIcon class="size-3.5 text-kissa-blue" />
							JSON Resume source
						</li>
						<li class="flex items-center gap-2">
							<ShieldCheckIcon class="size-3.5 text-kissa-green" />
							Evidence-checked claims
						</li>
						<li class="flex items-center gap-2">
							<FileTextIcon class="size-3.5 text-kissa-orange" />
							One-page PDF
						</li>
					</ol>
				</div>
			</div>

			<div class="min-w-0">
				<ResumeViewer pdfSrc={site.resume.preview} />

				<div class="mt-5 flex justify-center">
					<ResumeDialog>
						{#snippet trigger(onclick)}
							<Button variant="outline" size="sm" class="gap-2" {onclick}>
								<FileTextIcon class="size-3.5" />
								Open full preview
							</Button>
						{/snippet}
					</ResumeDialog>
				</div>
			</div>
		</div>
	</div>
</section>
