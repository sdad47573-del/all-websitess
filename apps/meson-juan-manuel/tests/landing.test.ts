import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('landing del Mesón Juan Manuel', () => {
	test('presenta los datos NAP y enlaces de ubicación', () => {
		expect(page).toContain('{business.streetAddress}');
		expect(page).toContain('{business.postalCode}');
		expect(page).toContain('{business.city}');
		expect(page).toContain('src={mapEmbedUrl}');
		expect(page).toContain('href={directionsUrl}');
		expect(page).toContain('href={mapsUrl}');
	});

	test('no inventa una foto de Maps: la URL facilitada no incluía ninguna', () => {
		expect(page).not.toContain('googleusercontent');
		expect(page).not.toContain('photoUrl');
	});

	test('ofrece llamada con los teléfonos verificados', () => {
		expect(page).toContain('tel:');
		expect(page).toContain('{phoneHrefs[0]}');
		expect(page).toContain('{phoneHrefs[1]}');
		expect(styles).toContain('.phone-cta');
	});

	test('menciona la terraza y la cocina andaluza sin inventar redes', () => {
		expect(page).toContain('terraza');
		expect(page).toContain('porra antequerana');
		expect(page).not.toContain('instagram.com');
	});

	test('incluye metadatos SEO y una llamada fija en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('phone-cta');
	});
});
