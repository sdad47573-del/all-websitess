import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('landing de The Haircut', () => {
	test('presenta contacto directo y los datos NAP confirmados', () => {
		expect(page).toContain('href={phoneHref}');
		expect(page).toContain('{business.phone}');
		expect(page).toContain('{business.streetAddress}');
		expect(page).toContain('{business.postalCode}');
	});

	test('usa la foto identificada en Maps y proporciona mapa e indicaciones', () => {
		expect(page).toContain('src={photoUrl}');
		expect(page).toContain('src={mapEmbedUrl}');
		expect(page).toContain('href={directionsUrl}');
		expect(page).toContain('href={mapsUrl}');
	});

	test('incluye metadatos locales y una llamada fija usable en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('phone-cta');
		expect(styles).toContain('.phone-cta');
		expect(styles).toContain('@media (max-width: 700px)');
	});
});
