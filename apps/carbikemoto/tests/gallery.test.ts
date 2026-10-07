import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { galleryPhotosData } from '../src/lib/gallery';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const fotos = new URL('../src/assets/fotos/', import.meta.url);

describe('galería de Carbikemoto', () => {
	test('incluye las seis fotos locales compartidas para el taller', () => {
		expect(galleryPhotosData).toHaveLength(6);
		expect(new Set(galleryPhotosData.map(({ file }) => file)).size).toBe(6);
		expect(galleryPhotosData.every(({ file }) => /^carbikemoto-\d{2}\.jpg$/.test(file))).toBe(true);
		expect(galleryPhotosData.every(({ alt }) => alt.trim().length > 0)).toBe(true);
	});

	test('cada foto existe en el disco', () => {
		const missing = galleryPhotosData.filter(({ file }) => !existsSync(new URL(file, fotos)));
		expect(missing).toEqual([]);
	});

	test('la página resuelve las fotos con astro:assets dentro de la galería', () => {
		expect(page).toContain('galleryPhotosData');
		expect(page).toContain('import.meta.glob');
		expect(page).toContain('galleryPhotos.map');
		expect(page).toContain('class="gallery-grid"');
	});

	test('la foto principal y la galería se sirven con `<Image>`, no con un `<img>` crudo', () => {
		// Un `<img>` normal con un módulo de imagen acababa en `src="[object Object]"` en producción.
		expect(page).not.toMatch(/<img\s[^>]*src=\{(?:galleryPhotos|fotos)\[/);
		expect(page).toMatch(/<Image\s[^>]*src=\{galleryPhotos\[0\]\.src\}/);
	});
});
