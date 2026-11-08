import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { galleryPhotosData } from '../src/lib/gallery';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const fotos = new URL('../src/assets/fotos/', import.meta.url);

describe('galería de AR Professional', () => {
	test('incluye las cinco fotos locales compartidas para el salón', () => {
		expect(galleryPhotosData).toHaveLength(5);
		expect(new Set(galleryPhotosData.map(({ file }) => file)).size).toBe(5);
		expect(galleryPhotosData.every(({ file }) => /^ar-professional-\d{2}\.jpg$/.test(file))).toBe(true);
		expect(galleryPhotosData.every(({ alt }) => alt.trim().length > 0)).toBe(true);
	});

	test('cada foto existe en el disco', () => {
		const missing = galleryPhotosData.filter(({ file }) => !existsSync(new URL(file, fotos)));
		expect(missing).toEqual([]);
	});

	test('la página resuelve las fotos con astro:assets dentro de la sección de galería', () => {
		expect(page).toContain('galleryPhotosData');
		expect(page).toContain('import.meta.glob');
		expect(page).toContain('galleryPhotos.map');
		expect(page).toContain('class="photo-gallery"');
	});
});
