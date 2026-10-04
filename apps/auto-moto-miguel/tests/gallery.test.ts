import { describe, expect, test } from 'bun:test';
import { galleryPhotos } from '../src/lib/gallery';

describe('galería de Auto Moto Miguel', () => {
	test('incluye las seis fotos locales compartidas para el taller', () => {
		expect(galleryPhotos).toHaveLength(6);
		expect(new Set(galleryPhotos.map(({ src }) => src)).size).toBe(6);
		expect(galleryPhotos.every(({ src }) => src.startsWith('/images/auto-moto-miguel-'))).toBe(true);
		expect(galleryPhotos.every(({ alt }) => alt.trim().length > 0)).toBe(true);
	});
});
