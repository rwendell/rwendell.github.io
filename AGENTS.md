# Project instructions

## What this is

A single-page portfolio for Ryan Wendell, a frontend-focused software engineer. The site is statically prerendered with SvelteKit and deployed to GitHub Pages. Content is hand-authored in `src/lib/data/`.

## Commands

- Install: `aube install`
- Develop: `aube run dev`
- Check: `aube run check` (runs `svelte-kit sync` and `svelte-check`)
- Lint and format: `aube run lint`, `aube run lint:fix`, `aube run format` (Biome)
- Build: `aube run build`
- Preview: `aube run preview`
- Full verification: `aube run verify`

Use `aube` for package operations. Do not use npm, pnpm, yarn, or bun.

## Svelte

- Use Svelte 5 runes: `$state`, `$derived`, `$props`, `$effect`.
- Use `onclick` and other event properties, not `on:click`.
- Use snippets and `{@render ...}`, not slots.
- Keep components typed with TypeScript. Use the `svelte-check` result as the type gate.
- The Svelte MCP server is available through the `@sveltejs/opencode` plugin. When writing or editing Svelte code, use its documentation and autofixer tools, or delegate to the `svelte-file-editor` subagent.

## shadcn-svelte

- Components live in `src/lib/components/ui/` and track the shadcn-svelte registry.
- Add components with `aube exec shadcn-add <component> --no-check` while iterating, then run `aube run check` yourself.
- `shadcn-add` installs dependencies with aube and translates registry selectors to the installed bits-ui version. It is published on npm as `shadcn-add`. Do not hand-edit generated selectors unless the translation is wrong.
- Use semantic tokens (`bg-background`, `text-muted-foreground`) before raw colors. The site palette is exposed as `kissa-*` utilities for decorative accents.
- Verify interactive states (selected, disabled, focus, dialog animations) in the browser after adding or updating components. `svelte-check` cannot catch CSS selector mismatches.

## Design system

- `src/routes/layout.css` owns the Kissa tokens. Light mode is Latte; `.dark` is Macchiato.
- Do not add `dark:` overrides for color. Use semantic tokens so both variants stay in sync.
- Fonts: Instrument Sans for UI, Monaspace Neon for mono accents. The CSS stack includes MonoLisa first for local installations, but MonoLisa is commercial and must not be bundled or redistributed.
- Icons: use `@lucide/svelte` for interface icons. GitHub and LinkedIn brand marks come from `simple-icons` through `$lib/components/brand-icon.svelte`; do not hand-draw brand paths. `simple-icons` is pinned to 13.x because later releases no longer ship the LinkedIn mark.
- Keep the warm, paper-like surface treatment: `paper-card`, `card-lift`, `eyebrow`, `mono-label`, `hairline`, `kissa-rule`.
- Use the faded neutral hexagon pattern as the background motif. Do not add colored glow or bloom gradients.
- Respect `prefers-reduced-motion`. Avoid motion that is required to understand content.

## Content

- `src/lib/data/site.ts`: profile, summary, skills, principles, resume metadata.
- `src/lib/data/projects.ts`: project order, descriptions, highlights, links, and dossier ranks. Display order is frontend-weighted; preserve the `dossierRank` values when editing.
- Keep claims traceable. Do not add metrics, employers, dates, or project scope that is not supported by the dossier data, the resume, or a repository.
- Organization projects should describe the user's contribution, not imply sole authorship.
- All projects use the same two-column grid. Meal Planner leads the list.
- Project cards lead with the category, name, tagline, and content. Year and role were intentionally removed from both the cards and the project data.
- Every card has a top accent strip. Each project gets its own accent color; do not reuse one across cards.
- Tinted Gowall is its own project entry with its own repository link; the user is its lead developer and maintainer. Do not collapse it back into an organization-level Tinted Theming card.
- Dossier, shadcn-add, and Tinted Gowall are text-only cards. Do not add previews or mockups to them.
- SlippiOS uses its project mark at `static/projects/slippios/icon.png` and the real menu screenshot at `static/projects/slippios/menu.png`. The card carousel cycles through the menu, settings, and sign-in screens.
- The hero is the single about section: positioning, bio, toolbox, and principles. There is no separate About section; career history lives in the resume. Do not add a second bio or experience timeline.

## Project preview assets

`static/projects/` holds real project screenshots used by `project-preview.svelte`:

- `meal-planner/cookbook-card.png` and `planner-card.png`: live cookbook and planner screenshots for the card carousel. `cookbook.png` is the full source screenshot.
- `slippios/menu.png`, `settings.png`, and `sign-in.png`: the three screens in the card carousel. `icon.png` is the project mark.
- `kissa/logo.png`, `latte-card.png`, and `macchiato-card.png`: the wordmark and the two zoomed Neovim theme crops used in the carousel. `latte.png` and `macchiato.png` are the full source screenshots.

`ProjectCarousel` auto-advances every five seconds, pauses on hover or focus, and exposes manual dots. Respect `prefers-reduced-motion`: no auto-advance when reduced motion is requested. SlippiOS slides use `position: "top"` so the menu logo and screen titles stay visible. Preview images are full-bleed; do not wrap them in padding, borders, outlines, or tinted frames. When replacing a screenshot, keep the same path or update the `src` in `project-preview.svelte`. Preserve the project's own branding; do not replace a real screenshot with a generic mockup when a real one exists.

## Resume assets

`static/resume/` contains `resume.pdf` and `resume-preview.png`. The resume section shows a single `ResumeViewer` with the PDF preview and one download action. Keep the section centered and omit JSON previews and JSON download links.

Regenerate the PDF with `dossier tailor --generic --no-open --no-prompt --no-preflight --out <dir>`, copy the PDF, then render the preview with `pdftoppm` at 200 DPI.

## Deployment

- `svelte.config.js` uses `@sveltejs/adapter-static`, writes to `build/`, and emits `404.html` as the fallback.
- `src/routes/+layout.ts` prerenders the site.
- `.github/workflows/deploy.yml` publishes to GitHub Pages. The repository Pages source must be GitHub Actions.
- The site is a user site at the repository root, so no `paths.base` is needed.
