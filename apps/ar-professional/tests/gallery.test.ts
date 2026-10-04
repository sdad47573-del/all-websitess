import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { galleryPhotos } from '../src/lib/gallery';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');

describe('galería de AR Professional', () => {
	test('incluye las cinco fotos locales compartidas para el salón', () => {
		expect(galleryPhotos).toHaveLength(5);
		expect(new Set(galleryPhotos.map(({ src }) => src)).size).toBe(5);
		expect(galleryPhotos.every(({ src }) => src.startsWith('/images/ar-professional-'))).toBe(true);
		expect(galleryPhotos.every(({ alt }) => alt.trim().length > 0)).toBe(true);
		expect(page).toContain('galleryPhotos.map');
		expect(page).toContain('class="photo-gallery"');
	});
});
