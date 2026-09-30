import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos de Vulcanizado Teatinos', () => {
	test('expone teléfono, dirección, enlace de ficha y foto compartida', () => {
		expect(phoneHref).toBe('tel:+34646654837');
		expect(business.streetAddress).toBe('Av. de Carlos Haya, 169');
		expect(structuredData.address).not.toHaveProperty('postalCode');
		expect(mapsUrl).toContain('google.com/maps/place/Vulcanizado+Teatinos');
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/');
	});

	test('centra el mapa en las coordenadas confirmadas sin publicar datos no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7256508%2C-4.4601228');
		expect(mapEmbedUrl).toContain('q=36.7256508%2C-4.4601228');
		expect(structuredData.geo.latitude).toBe(36.7256508);
		expect(structuredData.geo.longitude).toBe(-4.4601228);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
