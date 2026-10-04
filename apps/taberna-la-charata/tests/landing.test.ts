import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('landing de Taberna La Charata', () => {
	test('presenta los datos NAP y enlaces de ubicación', () => {
		expect(page).toContain('{business.streetAddress}');
		expect(page).toContain('{business.postalCode}');
		expect(page).toContain('{business.city}');
		expect(page).toContain('src={mapEmbedUrl}');
		expect(page).toContain('href={directionsUrl}');
		expect(page).toContain('href={mapsUrl}');
	});

	test('muestra las fotos locales y enlaza con la ficha de Maps', () => {
		expect(page).toContain('galleryPhotos.map((photo, index)');
		expect(page).toContain('src={photo.src}');
		expect(page).toContain('alt={photo.alt}');
		expect(page).toContain('Ver todas las fotos en Google Maps');
		expect(page).toContain('href={mapsUrl}');
	});

	test('no inventa un teléfono: no hay número público verificado', () => {
		expect(page).not.toContain('tel:');
		expect(page).not.toContain('phoneHrefs');
	});

	test('incluye metadatos SEO y una llamada fija en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('action-cta');
		expect(styles).toContain('.action-cta');
	});
});
