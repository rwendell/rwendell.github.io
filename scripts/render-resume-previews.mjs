#!/usr/bin/env node
import { mkdtempSync, readFileSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import puppeteer from "puppeteer";

const [htmlPath, layoutPath, latteOut, macchiatoOut] = process.argv.slice(2);

if (!htmlPath || !layoutPath || !latteOut || !macchiatoOut) {
	console.error(
		"Usage: node render-resume-previews.mjs <resume.html> <layout.css> <latte.png> <macchiato.png>",
	);
	process.exit(1);
}

const layout = readFileSync(layoutPath, "utf8");

function block(selector) {
	const escaped = selector.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
	return (
		layout.match(new RegExp(`${escaped}\\s*\\{([\\s\\S]*?)\\}`))?.[1] ?? ""
	);
}

function variables(selector) {
	const vars = new Map();
	for (const match of block(selector).matchAll(/--([\w-]+):\s*([^;]+);/g)) {
		vars.set(`--${match[1]}`, match[2].trim());
	}
	return vars;
}

function resolveToken(name, vars) {
	let value = vars.get(name);
	for (let depth = 0; depth < 10 && value?.startsWith("var("); depth += 1) {
		const reference = value.match(/^var\((--[^)]+)\)$/)?.[1];
		if (!reference) break;
		value = vars.get(reference);
	}
	return value;
}

function tokens(selector) {
	const vars = variables(selector);
	return {
		bg: resolveToken("--background", vars),
		fg: resolveToken("--foreground", vars),
		muted: resolveToken("--muted-foreground", vars),
		accent: resolveToken("--ring", vars),
	};
}

const latte = tokens(":root");
const macchiato = tokens(".dark");

for (const [name, theme] of Object.entries({ latte, macchiato })) {
	for (const [key, value] of Object.entries(theme)) {
		if (!value) {
			throw new Error(`Missing ${name} token: ${key}`);
		}
	}
}

const html = readFileSync(htmlPath, "utf8");
const workDir = mkdtempSync(join(tmpdir(), "resume-preview-"));

function previewUrl(theme, name) {
	const css = `
		html, body { background: ${theme.bg}; color: ${theme.fg}; min-height: 100vh; }
		a { color: ${theme.fg}; }
		.section-name { color: ${theme.accent}; }
		.section-intro-line { border-color: ${theme.accent}; }
		.block-header .date,
		#work-block .block-header .organization,
		.job-meta { color: ${theme.muted}; }
	`;
	const path = join(workDir, `${name}.html`);
	writeFileSync(path, html.replace("</head>", `<style>${css}</style></head>`));
	return `file://${path}`;
}

const browser = await puppeteer.launch({ args: ["--no-sandbox"] });

try {
	const page = await browser.newPage();
	const width = 920;

	for (const [name, theme, out] of [
		["latte", latte, latteOut],
		["macchiato", macchiato, macchiatoOut],
	]) {
		await page.setViewport({ width, height: 1056, deviceScaleFactor: 2 });
		await page.goto(previewUrl(theme, name), { waitUntil: "load" });
		await page.evaluate(() => document.fonts.ready);

		const height = await page.evaluate(() =>
			Math.max(
				document.documentElement.scrollHeight,
				document.body.scrollHeight,
			),
		);
		await page.setViewport({ width, height, deviceScaleFactor: 2 });
		await page.evaluate(() => window.scrollTo(0, 0));

		await page.screenshot({
			path: resolve(out),
			type: "png",
		});
		console.log(`preview: ${out} (${width}x${height} @2x)`);
	}
} finally {
	await browser.close();
}
