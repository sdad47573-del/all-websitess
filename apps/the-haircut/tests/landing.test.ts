import { describe, expect, test } from 'bun:test';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const srcDir = fileURLToPath(new URL('../src/', import.meta.url));

function walk(dir: string): string[] {
	const entries = readdirSync(dir);
	return entries.flatMap((entry) => {
		const full = join(dir, entry);
		return statSync(full).isDirectory() ? walk(full) : [full];
	});
}

const sources = walk(srcDir).filter((file) => /\.(astro|ts|css)$/.test(file));
const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

describe('landing de The Haircut', () => {
	test('presenta las secciones principales y el contacto directo', () => {
		for (const section of ['Hero', 'Salon', 'Servicios', 'Galeria', 'Contact', 'Faq']) {
			expect(page).toContain(section);
		}
		expect(page).toContain('breadcrumbs');
	});

	test('no incrusta ni enlaza fotos de Google Maps en ningún fuente', () => {
		for (const file of sources) {
			const content = readFileSync(file, 'utf8');
			expect(content).not.toContain('googleusercontent');
			expect(content).not.toContain('gps-cs-s');
		}
	});

	test('el aviso legal identifica al titular y la web enlaza la ficha', () => {
		const legal = readFileSync(new URL('../src/pages/aviso-legal.astro', import.meta.url), 'utf8');
		expect(legal).toContain('BUSINESS');
		expect(legal).toContain('googleMaps');
	});
});
