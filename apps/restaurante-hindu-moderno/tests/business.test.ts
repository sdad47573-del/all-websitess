import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Restaurante Hindú Moderno', () => {
	test('incluye dirección y teléfono oficial del restaurante', () => {
		expect(business.name).toBe('Restaurante Hindú Moderno');
		expect(business.streetAddress).toBe('Plaza Nuestra Señora de la Victoria');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(phoneHrefs).toEqual(['tel:+34608138874']);
		expect(mapsUrl).toContain('google.com/maps/place/RESTAURANTE+HIND%C3%9A+MODERNO');
		expect(mapsUrl).toContain('0x58f1c990f47d9f48');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.71618%2C-4.2895898');
		expect(mapEmbedUrl).toContain('q=36.71618%2C-4.2895898');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.71618);
		expect(structuredData.geo.longitude).toBe(-4.2895898);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
