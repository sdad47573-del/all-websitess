import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Taberna Lang', () => {
	test('incluye dirección y teléfono oficial de la taberna', () => {
		expect(business.name).toBe('Taberna Lang');
		expect(business.streetAddress).toBe('Calle Jaén, 3');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(phoneHrefs).toEqual(['tel:+34605979906']);
		expect(mapsUrl).toContain('google.com/maps/place/Taberna+Lang');
		expect(mapsUrl).toContain('0xb40a883c74aa5c86');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7160511%2C-4.2844404');
		expect(mapEmbedUrl).toContain('q=36.7160511%2C-4.2844404');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7160511);
		expect(structuredData.geo.longitude).toBe(-4.2844404);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
