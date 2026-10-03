import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';

const component = readFileSync(new URL('../src/local/Visit.astro', import.meta.url), 'utf8');
const appsDirectory = new URL('../../../apps/', import.meta.url);
const landingPages = readdirSync(appsDirectory, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => new URL(`../../../apps/${entry.name}/src/pages/index.astro`, import.meta.url))
	.filter((url) => {
		try {
			return readFileSync(url, 'utf8').includes('<LocalVisit');
		} catch {
			return false;
		}
	});

describe('LocalVisit contact link', () => {
	test('uses the configured destination instead of the visible label as href', () => {
		expect(component).toContain('contactLink: { label: string; href: string; external?: boolean }');
		expect(component).toContain('href={contactLink.href}');
		expect(component).toMatch(/href=\{contactLink\.href\}[\s\S]*?\{contactLink\.label\}[\s\S]*?<\/a>/);
	});

	test('opens external contact destinations safely in a new tab', () => {
		expect(component).toContain("target={contactLink.external ? '_blank' : undefined}");
		expect(component).toContain("rel={contactLink.external ? 'noreferrer' : undefined}");
	});

	test('every landing page using LocalVisit supplies a separate contact destination', () => {
		expect(landingPages).toHaveLength(16);
		for (const page of landingPages) {
			const source = readFileSync(page, 'utf8');
			expect(source).toContain('contactLink=');
			expect(source).not.toContain('phoneLink=');
		}
	});
});
