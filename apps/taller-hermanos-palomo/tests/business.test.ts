import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos públicos de Taller Hermanos Palomo', () => {
	test('genera enlaces telefónicos y de Maps desde la ubicación confirmada', () => {
		expect(phoneHref).toBe('tel:+34951251647');
		expect(mapsUrl).toContain('google.com/maps/place/Taller+mec');
		expect(directionsUrl).toContain('destination=36.7290797%2C-4.4507428');
		expect(mapEmbedUrl).toContain('q=36.7290797%2C-4.4507428');
	});

	test('publica NAP y coordenadas confirmadas sin inventar horario ni valoraciones', () => {
		expect(business.phone).toBe('+34 951 25 16 47');
		expect(business.streetAddress).toBe('C/ Padre Martín, 23');
		expect(structuredData.address.postalCode).toBe('29010');
		expect(structuredData.geo.latitude).toBe(36.7290797);
		expect(structuredData.geo.longitude).toBe(-4.4507428);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('servesCuisine');
	});
});
