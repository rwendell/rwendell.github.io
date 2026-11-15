<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import MailIcon from "@lucide/svelte/icons/mail";
	import BrandIcon from "$lib/components/brand-icon.svelte";
	import HexPattern from "$lib/components/hex-pattern.svelte";
	import { Button } from "$lib/components/ui/button/index.js";
	import { site } from "$lib/data/site";
</script>

<section id="contact" class="scroll-mt-24 py-16 sm:py-20">
	<div class="container-page">
		<div
			class="relative isolate overflow-hidden rounded-2xl border border-border/70 bg-card/55 px-6 py-8 shadow-paper sm:px-8 sm:py-10 lg:px-10"
		>
			<HexPattern id="contact-hex" class="hex-pattern opacity-30" />

			<div class="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start lg:gap-12">
				<div>
					<p class="eyebrow">Contact</p>
					<h2
						class="mt-3 max-w-xl text-balance text-2xl font-semibold tracking-[-0.02em] sm:text-3xl"
					>
						Email works best.
					</h2>

					<div class="mt-6 flex flex-wrap items-center gap-3">
						<Button
							size="lg"
							href={`mailto:${site.email}`}
							class="gap-2"
						>
							<MailIcon class="size-4" />
							{site.email}
						</Button>
						<Button
							variant="outline"
							size="lg"
							href={site.linkedin}
							target="_blank"
							rel="noreferrer"
							class="gap-2"
						>
							<BrandIcon name="linkedin" class="size-4" />
							Connect on LinkedIn
						</Button>
					</div>
				</div>

				<div
					class="rounded-xl border border-border/60 bg-background/45 p-4 backdrop-blur-sm sm:p-5"
				>
					<div class="flex items-center gap-2">
						<span class="relative flex size-2" aria-hidden="true">
							<span
								class="absolute inline-flex size-full animate-ping rounded-full bg-kissa-green opacity-60"
							></span>
							<span
								class="relative inline-flex size-2 rounded-full bg-kissa-green"
							></span>
						</span>
						<span
							class="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground"
							>Available for work</span
						>
					</div>
					<div class="mt-3 flex items-start gap-3 text-sm">
						<ArrowUpRightIcon class="mt-0.5 size-4 text-kissa-pink" />
						<div>
							<p class="font-medium">Focus</p>
							<p class="text-muted-foreground">
								Frontend platform, design systems, product engineering
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
