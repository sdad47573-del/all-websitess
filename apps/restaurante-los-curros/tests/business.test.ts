import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Restaurante Los Curros', () => {
	test('incluye dirección y teléfono oficial del restaurante', () => {
		expect(business.name).toBe('Restaurante Los Curros');
		expect(business.streetAddress).toBe('Avenida del Mediterráneo, 122');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(phoneHrefs).toEqual(['tel:+34952970372']);
		expect(mapsUrl).toContain('google.com/maps/place/Restaurante+Los+Curros+Rinc%C3%B3n+de+la+Victoria');
		expect(mapsUrl).toContain('0xe0c888895ad5f821');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7148475%2C-4.2843291');
		expect(mapEmbedUrl).toContain('q=36.7148475%2C-4.2843291');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7148475);
		expect(structuredData.geo.longitude).toBe(-4.2843291);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
