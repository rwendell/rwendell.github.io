<script lang="ts">
	import ArrowUpRightIcon from "@lucide/svelte/icons/arrow-up-right";
	import CheckIcon from "@lucide/svelte/icons/check";
	import CopyIcon from "@lucide/svelte/icons/copy";
	import MailIcon from "@lucide/svelte/icons/mail";
	import MapPinIcon from "@lucide/svelte/icons/map-pin";
	import { toast } from "svelte-sonner";
	import { Button } from "$lib/components/ui/button/index.js";
	import { site } from "$lib/data/site";

	let copied = $state(false);

	async function copyEmail() {
		try {
			await navigator.clipboard.writeText(site.email);
			copied = true;
			toast.success("Email copied to clipboard");
			setTimeout(() => {
				copied = false;
			}, 2000);
		} catch {
			window.location.href = `mailto:${site.email}`;
		}
	}
</script>

<section id="contact" class="scroll-mt-24 py-20 sm:py-28">
	<div class="container-page">
		<div
			class="relative isolate overflow-hidden rounded-3xl border border-border/70 bg-card/55 px-6 py-10 shadow-paper sm:px-10 sm:py-14 lg:px-14"
		>
			<div
				class="pointer-events-none absolute -top-32 right-[-10%] -z-10 size-[28rem] rounded-full bg-kissa-orange/15 blur-3xl"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute -bottom-40 left-[-10%] -z-10 size-[26rem] rounded-full bg-kissa-teal/12 blur-3xl"
				aria-hidden="true"
			></div>
			<div
				class="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
				style="background-image: linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px); background-size: 3rem 3rem; mask-image: radial-gradient(ellipse 60% 60% at 70% 40%, black, transparent);"
				aria-hidden="true"
			></div>

			<div class="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
				<div>
					<p class="eyebrow">Contact</p>
					<h2
						class="mt-3 max-w-[15ch] text-balance text-4xl font-semibold leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-6xl"
					>
						Let's build something that feels finished.
					</h2>
					<p
						class="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg"
					>
						Have a role or project in mind? Email is the fastest way to
						reach me.
					</p>

					<div class="mt-8 flex flex-wrap items-center gap-3">
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
							class="gap-2"
							onclick={copyEmail}
						>
							{#if copied}
								<CheckIcon class="size-4 text-kissa-green" />
								Copied
							{:else}
								<CopyIcon class="size-4" />
								Copy
							{/if}
						</Button>
					</div>
				</div>

				<div
					class="self-start rounded-2xl border border-border/60 bg-background/45 p-5 backdrop-blur-sm sm:p-6"
				>
					<div
						class="flex items-center gap-2 border-b border-border/60 pb-4"
					>
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

					<dl class="mt-4 space-y-4 text-sm">
						<div class="flex items-start gap-3">
							<MapPinIcon class="mt-0.5 size-4 text-kissa-orange" />
							<div>
								<dt class="font-medium">Chicago, Illinois</dt>
								<dd class="text-muted-foreground">
									Open to remote and Chicago-based roles
								</dd>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<ArrowUpRightIcon class="mt-0.5 size-4 text-kissa-pink" />
							<div>
								<dt class="font-medium">Good fit</dt>
								<dd class="text-muted-foreground">
									Frontend platform, design systems, product engineering
								</dd>
							</div>
						</div>
					</dl>

				</div>
			</div>
		</div>
	</div>
</section>
