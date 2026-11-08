import { describe, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';

import { galleryPhotos } from '../src/lib/business';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('landing de AM Industria del Estilo', () => {
	test('presenta los datos NAP y permite llamar por teléfono', () => {
		expect(page).toContain('{business.streetAddress}');
		expect(page).toContain('{business.postalCode}');
		expect(page).toContain('href={phoneHrefs[0]}');
		expect(page).toContain('{business.phones[0]}');
	});

	test('usa la imagen única de Maps e incluye enlaces de ubicación', () => {
		expect(page).toContain('src={photoUrl}');
		expect(page).toContain('src={mapEmbedUrl}');
		expect(page).toContain('href={directionsUrl}');
		expect(page).toContain('href={mapsUrl}');
	});

	test('muestra la galería con las fotos locales descargadas de Maps', () => {
		expect(page).toContain('{galleryPhotos.map');
		expect(styles).toContain('.gallery-grid');
		for (const photo of galleryPhotos) {
			expect(existsSync(new URL(`../public${photo.src}`, import.meta.url))).toBe(true);
		}
	});

	test('incluye metadatos SEO y una llamada fija en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('phone-cta');
		expect(styles).toContain('.phone-cta');
	});
});
