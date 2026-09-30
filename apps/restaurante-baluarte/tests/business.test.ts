import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Restaurante Baluarte', () => {
	test('incluye dirección y teléfono oficial del restaurante', () => {
		expect(business.name).toBe('Restaurante Baluarte');
		expect(business.streetAddress).toBe('Calle Poeta Manuel Alcántara, 6');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(phoneHrefs).toEqual(['tel:+34679522733']);
		expect(mapsUrl).toContain('google.com/maps/place/Restaurante+Baluarte');
		expect(mapsUrl).toContain('0x8e6810590eb4ce6e');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7152567%2C-4.2794235');
		expect(mapEmbedUrl).toContain('q=36.7152567%2C-4.2794235');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7152567);
		expect(structuredData.geo.longitude).toBe(-4.2794235);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
