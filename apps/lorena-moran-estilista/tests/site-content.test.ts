import { readFileSync } from 'node:fs';
import { describe, expect, test } from 'bun:test';

const siteData = readFileSync(new URL('../src/data/site.ts', import.meta.url), 'utf8');

describe('A-Style site content', () => {
	test('uses the correct Spanish label for a women-owned business', () => {
		expect(siteData).toContain("title: 'Negocio de mujeres'");
		expect(siteData).toContain("label: 'Negocio de mujeres'");
		expect(siteData).not.toContain('Negoio de mujeres');
	});
});
