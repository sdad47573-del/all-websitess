import { readdirSync, readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';

const component = readFileSync(new URL('../src/local/Topbar.astro', import.meta.url), 'utf8');
const appsDirectory = new URL('../../../apps/', import.meta.url);
const landingPages = readdirSync(appsDirectory, { withFileTypes: true })
	.filter((entry) => entry.isDirectory())
	.map((entry) => new URL(`../../../apps/${entry.name}/src/pages/index.astro`, import.meta.url))
	.filter((url) => {
		try {
			return readFileSync(url, 'utf8').includes('<LocalTopbar');
		} catch {
			return false;
		}
	});

describe('LocalTopbar mobile navigation', () => {
	test('provides a labeled, horizontally scrollable mobile navigation', () => {
		expect(component).toContain('class="local-mobile-nav wrap"');
		expect(component).toContain('aria-label="Navegación móvil"');
		expect(component).toContain('overflow-x: auto');
		expect(component).toContain('min-height: 44px');
	});

	test('keeps navigation available on all landing pages that use the shared topbar', () => {
		expect(landingPages).toHaveLength(16);
		for (const page of landingPages) {
			expect(readFileSync(page, 'utf8')).toContain('<LocalTopbar');
		}
	});
});
