import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de The Boss Restaurante', () => {
	test('incluye dirección y teléfono oficial del restaurante', () => {
		expect(business.name).toBe('The Boss Restaurante');
		expect(business.streetAddress).toBe('Plaza Gloria Fuertes, 6');
		expect(business.postalCode).toBe('29720');
		expect(business.city).toBe('La Cala del Moral');
		expect(business.province).toBe('Málaga');
		expect(phoneHrefs).toEqual(['tel:+34656404030']);
		expect(mapsUrl).toContain('google.com/maps/place/The+Boss+Restaurante');
		expect(mapsUrl).toContain('0xec436afb6a35d7e2');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7153676%2C-4.3116902');
		expect(mapEmbedUrl).toContain('q=36.7153676%2C-4.3116902');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7153676);
		expect(structuredData.geo.longitude).toBe(-4.3116902);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
