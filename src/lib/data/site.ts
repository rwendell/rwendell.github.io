export const site = {
	name: "Ryan Wendell",
	role: "Frontend Software Engineer",
	url: "https://rwendell.github.io",
	location: "Chicago, Illinois",
	email: "ryanjwendell@gmail.com",
	summary:
		"Frontend-focused software engineer with 4+ years building accessible, data-heavy interfaces and the systems behind them. I work in TypeScript, React, and SvelteKit, with a soft spot for design systems, developer tooling, and open source.",
	shortSummary:
		"I build accessible, data-heavy web apps with TypeScript, React, and SvelteKit — and the tools that make them nicer to ship.",
	availability: "Open to frontend and full-stack roles",
	github: "https://github.com/rwendell",
	githubHandle: "rwendell",
	linkedin: "https://www.linkedin.com/in/rjwendell/",
	linkedinHandle: "rjwendell",
	resume: {
		href: "/resume/resume.pdf",
		preview: "/resume/resume-preview.png",
		filename: "resume.pdf",
	},
} as const;

export const navItems = [
	{ id: "work", href: "/#work", label: "Work" },
	{ id: "about", href: "/#about", label: "About" },
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
		name: "Full-stack & data",
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

export const experience = [
	{
		company: "Northern Trust",
		role: "Senior Associate — Software Engineer",
		start: "Aug 2022",
		end: "Feb 2026",
		summary:
			"Full-stack engineer on enterprise financial platforms, leading feature delivery and cross-functional collaboration across international teams.",
		highlights: [
			"Built full-stack features with TypeScript, React, and Redux on the frontend and Spring Boot on Java 21 behind it.",
			"Optimized Oracle SQL, JPA/Hibernate mappings, and Kafka pipelines processing 2.5M daily transactions.",
			"Consolidated historical storage into Snowflake on Azure, cutting storage cost while keeping high availability.",
		],
	},
	{
		company: "BluBracket",
		subtitle: "acquired by HashiCorp",
		role: "Software Engineer Consultant",
		start: "Dec 2021",
		end: "Jun 2022",
		summary:
			"Built security tooling for automated vulnerability detection and remediation across source code, developer environments, and CI/CD pipelines.",
		highlights: [
			"Built a React/Redux security dashboard for vulnerability detection and remediation.",
			"Fixed risk-scoring logic that reduced false-positive alerts for enterprise clients.",
			"Implemented Jest and Cypress suites, and keyboard/ARIA accessibility across the app.",
		],
	},
	{
		company: "Impact Networking",
		role: "BPA Developer",
		start: "Mar 2021",
		end: "Dec 2021",
		summary:
			"Developed full-stack automation solutions to streamline enterprise business processes.",
		highlights: [
			"Orchestrated C#/.NET and SQL automation across OCR, HR, and fundraising workflows.",
			"Delivered client-specific automation for a non-profit medical organization with strict compliance needs.",
		],
	},
] as const;

export const education = {
	institution: "Iowa State University",
	degree: "BS — Computer Science",
	years: "2016 — 2020",
} as const;

export const principles = [
	{
		icon: "sparkles",
		title: "Interfaces with intent",
		body: "I treat UI as a product surface, not a skin. Clear hierarchy, honest states, and interactions that explain themselves.",
	},
	{
		icon: "accessibility",
		title: "Accessible by default",
		body: "Keyboard paths, focus management, contrast, and semantics are part of the build — not a cleanup pass at the end.",
	},
	{
		icon: "wrench",
		title: "Good tools, good teams",
		body: "I like removing friction: typed boundaries, reliable components, fast feedback loops, and docs that answer the next question.",
	},
] as const;
