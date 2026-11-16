export const site = {
	name: "Ryan Wendell",
	role: "Frontend Engineer",
	url: "https://rwendell.github.io",
	location: "Chicago, Illinois",
	email: "ryanjwendell@gmail.com",
	summary:
		"Frontend engineer with 4+ years building accessible, data-heavy interfaces and the systems behind them. I work in TypeScript, React, and SvelteKit, with a soft spot for design systems, developer tooling, and open source.",
	shortSummary:
		"I build accessible, data-heavy web apps with TypeScript, React, and SvelteKit.",
	github: "https://github.com/rwendell",
	githubHandle: "rwendell",
	linkedin: "https://www.linkedin.com/in/rjwendell/",
	linkedinHandle: "rjwendell",
	upwork: "https://www.upwork.com/freelancers/~01fbe3cf033cea5004",
	resume: {
		href: "/resume/RyanWendell-Resume.pdf",
		previewLatte: "/resume/RyanWendell-Resume-Latte.png",
		previewMacchiato: "/resume/RyanWendell-Resume-Macchiato.png",
		filename: "RyanWendell-Resume.pdf",
	},
} as const;

export const navItems = [
	{ id: "projects", href: "/#projects", label: "Projects" },
	{ id: "resume", href: "/#resume", label: "Resume" },
	{ id: "contact", href: "/#contact", label: "Contact" },
] as const;

export const skillGroups = [
	{
		name: "Frontend",
		icon: "layout",
		items: [
			"TypeScript",
			"React",
			"Redux",
			"SvelteKit",
			"Svelte 5",
			"Tailwind CSS",
			"shadcn-svelte",
			"Bits UI",
			"Accessibility",
			"Design systems",
		],
	},
	{
		name: "Backend & data",
		icon: "database",
		items: [
			"Node.js",
			"Java",
			"Spring Boot",
			"Convex",
			"REST APIs",
			"OAuth 2.0",
			"Oracle SQL",
			"Kafka",
			"Snowflake",
			"Azure",
		],
	},
	{
		name: "Tooling & systems",
		icon: "terminal",
		items: [
			"Git",
			"Jest",
			"Cypress",
			"Biome",
			"Vite",
			"Nix",
			"Linux",
			"Go",
			"Python",
			"AI agents",
		],
	},
] as const;
