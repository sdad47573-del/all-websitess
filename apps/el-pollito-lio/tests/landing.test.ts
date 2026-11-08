import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { whatsappUrl } from '../src/lib/business';

const page = readFileSync(new URL('../src/pages/index.astro', import.meta.url), 'utf8');
const styles = readFileSync(new URL('../src/styles/global.css', import.meta.url), 'utf8');

describe('landing de El Pollito Lio', () => {
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

	test('ofrece llamada y WhatsApp con el teléfono verificado', () => {
		expect(page).toContain('tel:');
		expect(page).toContain('{phoneHrefs[0]}');
		expect(page).toContain('href={whatsappUrl}');
		expect(whatsappUrl).toContain('wa.me');
		expect(styles).toContain('.phone-cta');
	});

	test('incluye metadatos SEO y una llamada fija en móvil', () => {
		expect(page).toContain('rel="canonical"');
		expect(page).toContain('application/ld+json');
		expect(page).toContain('phone-cta');
	});
});
