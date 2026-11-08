import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de El Gallu', () => {
	test('incluye dirección y teléfono oficial del restaurante', () => {
		expect(business.name).toBe('El Gallu');
		expect(business.streetAddress).toBe('Calle Jaén, 11');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(phoneHrefs).toEqual(['tel:+34618792962']);
		expect(mapsUrl).toContain('google.com/maps/place/El+Gallu');
		expect(mapsUrl).toContain('0xb85fef418669b6df');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7164174%2C-4.2844113');
		expect(mapEmbedUrl).toContain('q=36.7164174%2C-4.2844113');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7164174);
		expect(structuredData.geo.longitude).toBe(-4.2844113);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
