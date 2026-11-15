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
	tagline: string;
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
		tagline: "Dinner decided. Groceries synced.",
		description:
			"A multi-user household meal planner that turns shared weekly decisions into a synchronized grocery workflow: a recipe cookbook, real-time weekly planning, leftovers, and shopping lists in one place.",
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
			"Mobile-first interface built with Svelte 5, Tailwind, and shadcn-svelte components.",
		],
		repo: "https://github.com/rwendell/meal-planner",
		live: "https://meal-planner-two-dun-14.vercel.app",
		accent: "green",
		dossierRank: 2,
	},
	{
		slug: "dossier",
		name: "Dossier",
		tagline: "Grounded resumes, generated from evidence.",
		description:
			"A local-first CLI that runs OpenCode agent prompts to turn a career fact bank into tailored resumes, proposals, and application answers — with an evidence trace behind every claim.",
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
			"Every generated claim carries an evidence id; outputs are verified before rendering.",
			"Published CLI with XDG paths, mode-aware caching, and Puppeteer PDF output.",
		],
		repo: "https://github.com/rwendell/dossier",
		accent: "purple",
		dossierRank: 1,
		textOnly: true,
	},
	{
		slug: "shadcn-add",
		name: "shadcn-add",
		tagline: "shadcn-svelte, without the package-manager prompt.",
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
		tagline: "Espresso, meet accessible color.",
		description:
			"A WCAG AA+ color scheme rooted in espresso, with Latte (light) and Macchiato (dark) variants. It ships as a Neovim colorscheme with ports for terminals, and this portfolio runs on its tokens.",
		category: "Design",
		tech: ["Lua", "Python", "Design tokens", "Accessibility", "Base16"],
		highlights: [
			"WCAG AA+ contrast checked across both light and dark variants.",
			"Ports for Neovim, Ghostty, Kitty, Alacritty, WezTerm, and more.",
			"Color decisions shipped as reusable tokens, not one-off hex values.",
		],
		repo: "https://github.com/rwendell/kissa",
		accent: "pink",
		dossierRank: 5,
	},
	{
		slug: "slippios",
		name: "SlippiOS",
		tagline: "A Melee console on a USB stick.",
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
		tagline: "Wallpapers, in your theme.",
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
