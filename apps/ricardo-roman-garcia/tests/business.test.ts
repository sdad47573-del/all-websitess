import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos públicos de Ricardo Román García', () => {
	test('genera datos de contacto y navegación con la información publicada', () => {
		expect(phoneHref).toBe('tel:+34952306535');
		expect(business.streetAddress).toBe('Calle Los Millones, 7');
		expect(business.postalCode).toBe('29010');
		expect(mapsUrl).toContain('google.com/maps/place/Ricardo+Rom%C3%A1n+Garc%C3%ADa');
		expect(directionsUrl).toContain('destination=36.7246234%2C-4.4445532');
		expect(mapEmbedUrl).toContain('q=36.7246234%2C-4.4445532');
	});

	test('publica schema de taller sin horarios, reseñas ni valoraciones', () => {
		expect(structuredData['@type']).toBe('AutoRepair');
		expect(structuredData.geo.latitude).toBe(36.7246234);
		expect(structuredData.geo.longitude).toBe(-4.4445532);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('review');
	});
});
