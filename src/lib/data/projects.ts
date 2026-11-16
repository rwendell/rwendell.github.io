export type ProjectAccent =
	| "orange"
	| "teal"
	| "blue"
	| "purple"
	| "pink"
	| "green"
	| "yellow"
	| "red";

export type ProjectCategory =
	| "Frontend"
	| "Full-stack"
	| "Tooling"
	| "Design"
	| "Systems";

export interface Project {
	slug: string;
	name: string;
	description: string;
	category: ProjectCategory;
	tech: string[];
	highlights: string[];
	repo?: string;
	live?: string;
	npm?: string;
	org?: string;
	accent: ProjectAccent;
	/** Preserves the ranking from ~/.local/share/dossier/career.yml. */
	dossierRank: number | null;
	textOnly?: boolean;
}

/**
 * Display order is weighted toward frontend work; `dossierRank` keeps the
 * source-of-truth ordering from the dossier career fact bank.
 */
export const projects: Project[] = [
	{
		slug: "meal-planner",
		name: "Meal Planner",
		description:
			"A multi-user meal planner for households: a recipe cookbook, a shared week, leftovers, and one grocery list that stays in sync.",
		category: "Full-stack",
		tech: [
			"SvelteKit",
			"Svelte 5",
			"TypeScript",
			"Convex",
			"Tailwind CSS",
			"shadcn-svelte",
			"OAuth 2.0",
		],
		highlights: [
			"Real-time SvelteKit + Convex app with Google OAuth2, household onboarding, and shared planning.",
			"Weekly plans, leftover tracking, and shopping lists stay in sync across the household.",
			"Mobile-first interface using Svelte 5, Tailwind, and shadcn-svelte components.",
		],
		repo: "https://github.com/rwendell/meal-planner",
		live: "https://meal-planner-two-dun-14.vercel.app",
		accent: "green",
		dossierRank: 2,
	},
	{
		slug: "dossier",
		name: "Dossier",
		description:
			"A local-first CLI that turns a career fact bank into tailored resumes, proposals, and application answers. Every claim keeps an evidence trail.",
		category: "Tooling",
		tech: [
			"TypeScript",
			"Node.js",
			"OpenCode",
			"LLM orchestration",
			"Puppeteer",
			"CLI",
		],
		highlights: [
			"Agent pipeline generates resumes, proposals, and answers from a local career fact bank.",
			"Every generated claim carries an evidence id, and the pipeline verifies each output before rendering.",
			"Ships as a CLI with XDG paths, mode-aware caching, and Puppeteer PDF output.",
		],
		repo: "https://github.com/rwendell/dossier",
		accent: "purple",
		dossierRank: 1,
		textOnly: true,
	},
	{
		slug: "shadcn-add",
		name: "shadcn-add",
		description:
			"A small CLI wrapper that makes shadcn-svelte component installs deterministic in aube projects, published on npm.",
		category: "Tooling",
		tech: ["JavaScript", "Node.js", "CLI", "shadcn-svelte", "aube", "npm"],
		highlights: [
			"Closes the package-manager detection gap in shadcn-svelte's non-interactive add flow.",
			"Installs dependencies with aube, runs project checks, and translates UI selectors.",
			"Published on npm as shadcn-add.",
		],
		repo: "https://github.com/rwendell/shadcn-add",
		npm: "https://www.npmjs.com/package/shadcn-add",
		accent: "orange",
		dossierRank: 4,
		textOnly: true,
	},
	{
		slug: "kissa",
		name: "Kissa",
		description:
			"A WCAG AA+ color scheme rooted in espresso, with Latte (light) and Macchiato (dark) variants. It ships as a Neovim colorscheme with ports for terminals, and this portfolio runs on its tokens.",
		category: "Design",
		tech: ["Lua", "Python", "Design tokens", "Accessibility", "Base16"],
		highlights: [
			"Checks WCAG AA+ contrast in both light and dark variants.",
			"Ports for Neovim, Ghostty, Kitty, Alacritty, WezTerm, and more.",
			"Uses reusable tokens instead of one-off hex values.",
		],
		repo: "https://github.com/rwendell/kissa",
		accent: "pink",
		dossierRank: 5,
	},
	{
		slug: "slippios",
		name: "SlippiOS",
		description:
			"A bootable Linux image that turns a USB stick into a fullscreen Godot shell for Super Smash Bros. Melee, keeping games, settings, login, and replays on the stick.",
		category: "Systems",
		org: "SlippiOS",
		tech: ["Go", "Nix", "Linux", "UEFI", "Secure Boot", "GDScript"],
		highlights: [
			"A/B system updates, browser sign-in, Wi-Fi setup, and network ISO upload.",
			"Native GameCube-adapter input and signed Secure Boot images.",
			"Reproducible Nix builds with a nix-portable fallback that needs no Docker.",
		],
		repo: "https://github.com/SlippiOS/SlippiOS",
		accent: "blue",
		dossierRank: 3,
	},
	{
		slug: "tinted-gowall",
		name: "Tinted Gowall",
		description:
			"A Tinted Theming tool that converts wallpapers to a selected Base16/Base24 theme with gowall, so the desktop matches the rest of the theme.",
		category: "Design",
		tech: ["Base16", "Base24", "TOML", "Mustache", "Wallpapers"],
		highlights: [
			"Converts wallpapers to a selected Base16/Base24 theme with gowall.",
			"Lead developer and maintainer of the project.",
			"Ships theme files and a Tinty item config for one-command use.",
		],
		repo: "https://github.com/tinted-theming/tinted-gowall",
		accent: "teal",
		dossierRank: null,
		textOnly: true,
	},
];
