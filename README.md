# rwendell.github.io

Portfolio site for Ryan Wendell, a frontend-focused software engineer in Chicago. The site is fully static, built with SvelteKit, and themed with the Kissa color scheme.

Live at [rwendell.github.io](https://rwendell.github.io).

## Stack

- SvelteKit 2 with Svelte 5 runes
- Tailwind CSS 4
- shadcn-svelte components in the `vega` style
- `mode-watcher` for light, dark, and system appearance
- Kissa palette: Latte for light mode, Macchiato for dark mode
- Instrument Sans and Monaspace Neon from Fontsource
- Lucide for interface icons and Simple Icons for the GitHub, LinkedIn, and Upwork brand marks
- aube for package management

## Local development

```sh
aube install
aube run dev
```

Verification:

```sh
aube run check
aube run build
aube run preview
```

`aube run check` runs `svelte-kit sync` and `svelte-check`. The build output goes to `build/`. The site ships a `sitemap.xml` route, a web manifest, and a social preview image at `/og.png`.

## Content

- `src/lib/data/site.ts` owns the profile, skills, and resume metadata.
- `src/lib/data/projects.ts` owns the project cards. All six projects use the same two-column grid.
- Project facts came from the dossier career fact bank and public GitHub repositories and organization projects.
- The Projects section's "More on GitHub" button links to the public profile instead of listing low-signal repositories.
- shadcn-add is published on npm as `shadcn-add` and links to both the package and its GitHub repository.
- Tinted Gowall is listed as its own project with its own repository link; the user is its lead developer and maintainer.
- Project previews are used only where they add context: Meal Planner, Kissa, and SlippiOS. Dossier, shadcn-add, and Tinted Gowall are text-only cards.
- Preview assets live in `static/projects/`:
  - `meal-planner/` contains the live cookbook and planner screenshots used in the card carousel.
  - `slippios/` contains the main menu, settings, sign-in, and project mark. The card carousel cycles through all three screens.
  - `kissa/` contains the Kissa wordmark and the Latte and Macchiato Neovim screenshots. `latte-card.png` and `macchiato-card.png` are zoomed crops used in the carousel so the code stays legible. The card carousel cycles through all three.
- Project carousels auto-advance every five seconds, pause on hover or focus, and expose manual dots. Reduced-motion preferences disable auto-advance.
- The SlippiOS and Kissa screenshots were moved out of the old `preview photos` directory and renamed by project and screen.

## Resume

The downloadable resume lives in `static/resume/`:

- `resume.pdf`: the one-page PDF from `rwendell/json-resume`
- `resume-preview-latte.png`: Latte-themed preview, shown in dark mode
- `resume-preview-macchiato.png`: Macchiato-themed preview, shown in light mode

The resume section shows the opposite color scheme from the page; the downloaded PDF remains the normal light version. `site.ts` controls the paths and filename.

`.github/workflows/resume-sync.yml` refreshes the PDF and both previews when `rwendell/json-resume` changes `src/resume.json`. `.resume-source` stores the source blob hash so unchanged resumes are skipped. A changed resume is committed and the Pages deploy is dispatched explicitly, since pushes made with `GITHUB_TOKEN` do not trigger other workflows.

The previews are rendered from the json-resume HTML by `scripts/render-resume-previews.mjs`. The script reads the shadcn semantic tokens in `src/routes/layout.css` (`--background`, `--foreground`, `--muted-foreground`, `--ring`) rather than hardcoding colors. To force a refresh:

```sh
gh workflow run resume-sync.yml -f force=true
```

## Theme and fonts

Kissa tokens are mapped to shadcn semantic variables in `src/routes/layout.css`. Latte values live in `:root`; Macchiato values live in `.dark`. The custom `kissa-*` color utilities expose the palette to Tailwind.

MonoLisa is a commercial font and is not bundled. The font stack tries MonoLisa first, then Monaspace Neon, so a local MonoLisa installation is used when present. Visitors without MonoLisa see Monaspace Neon, which is distributed under the SIL Open Font License. Instrument Sans is also SIL OFL.

## MCP and skills

The project OpenCode config loads `@sveltejs/opencode`, which provides the Svelte MCP server, the `svelte-file-editor` subagent, and Svelte instruction files. `opencode.json` and `svelte.json` live in `.opencode/`.

Repo-local skills live in `.agents/skills/`:

- `svelte5-best-practices`
- `shadcn-svelte`
- `web-design-guidelines`
- `building-components`
- `agent-browser`

`shadcn-add` is the component installer. It wraps `shadcn-svelte add` for aube projects, installs the recorded dependencies, runs the project check, and translates registry selectors to the installed bits-ui version. It is published on npm as `shadcn-add`.

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages. The repository Pages source must be set to GitHub Actions. The site is a user site, so no base path is needed. `static/.nojekyll` keeps GitHub Pages from running Jekyll over the build. The static adapter emits `404.html`, so unknown paths get the branded error page.

`.github/workflows/ci.yml` runs the type check and build on pull requests and pushes to `main`. `.github/workflows/resume-sync.yml` updates the hosted resume from `rwendell/json-resume`.

## Project layout

```text
src/
  lib/
    components/      page sections, shared UI, shadcn components
    data/            site, project, and skill content
  routes/
    +layout.svelte   shell, SEO, theme watcher, header, footer
    +page.svelte     single-page portfolio
    layout.css       Kissa tokens and global styles
scripts/
  render-resume-previews.mjs  themed resume preview renderer
static/
  resume/            PDF and themed previews
  projects/          project screenshots and wordmarks
  og.png             social preview image
```

## Credits

- Color scheme: [Kissa](https://github.com/rwendell/kissa), MIT
- Components: [shadcn-svelte](https://shadcn-svelte.com), MIT
- Interface icons: [Lucide](https://lucide.dev), ISC
- Brand icons: [Simple Icons](https://simpleicons.org) 13.x, CC0
- Fonts: Instrument Sans and Monaspace Neon, SIL Open Font License
- Project data source: the local dossier career fact bank
