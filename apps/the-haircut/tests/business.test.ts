import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de The Haircut', () => {
	test('prepara datos de contacto, ficha y foto concreta de Google Maps', () => {
		expect(phoneHref).toBe('tel:+34951405960');
		expect(business.streetAddress).toBe('Calle Flaubert, 3');
		expect(mapsUrl).toContain('google.com/maps/place/The+Haircut');
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/');
	});

	test('centra el mapa en las coordenadas confirmadas sin datos comerciales no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7238757%2C-4.4618764');
		expect(mapEmbedUrl).toContain('q=36.7238757%2C-4.4618764');
		expect(structuredData.geo.latitude).toBe(36.7238757);
		expect(structuredData.geo.longitude).toBe(-4.4618764);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
