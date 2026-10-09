import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const appRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pagePath = resolve(appRoot, 'src/pages/index.astro');
const page = () => readFileSync(pagePath, 'utf8');

describe('landing de Restaurante Isla Cristina', () => {
	test('presenta una imagen real local en el hero con texto alternativo', () => {
		const source = page();
		expect(source).toContain('class="hero-photo"');
		expect(source).toContain('alt=');
		expect(source).toContain("from 'astro:assets'");
		expect(source).not.toContain('googleusercontent');
	});

	test('identifica el negocio y mantiene la dirección y coordenadas de Google Maps', () => {
		const source = page();
		expect(source).toContain('Restaurante Isla Cristina');
		expect(source).toContain('37.6507607');
		expect(source).toContain('-0.7184323');
		expect(source).toContain('Gran Vía de la Manga, 1');
	});

	test('los archivos de imagen importados existen dentro de assets/fotos', () => {
		const source = page();
		const imports = [...source.matchAll(/from ['"](\.\.\/assets\/fotos\/[^'"]+)['"]/g)];
		expect(imports.length).toBeGreaterThan(0);
		for (const [, relativePath] of imports) {
			expect(existsSync(resolve(appRoot, 'src/pages', relativePath))).toBe(true);
		}
	});
});
