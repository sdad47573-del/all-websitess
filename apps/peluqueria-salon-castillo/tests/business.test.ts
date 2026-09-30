import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, structuredData } from '../src/lib/business';

describe('ficha de Peluquería Salón Castillo', () => {
	test('usa el nombre, foto y URL de Maps de la ficha enviada', () => {
		expect(business.name).toBe('Peluquería Salón Castillo');
		expect(mapsUrl).toContain('google.com/maps/place/Peluquer%C3%ADa+Sal%C3%B3n+Castillo');
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/');
		expect(structuredData.image).toBe(photoUrl);
	});

	test('conserva las coordenadas de la ficha y omite NAP y campos comerciales no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7229506%2C-4.4528071');
		expect(mapEmbedUrl).toContain('q=36.7229506%2C-4.4528071');
		expect(structuredData.geo.latitude).toBe(36.7229506);
		expect(structuredData.geo.longitude).toBe(-4.4528071);
		expect(business).not.toHaveProperty('phone');
		expect(business).not.toHaveProperty('streetAddress');
		expect(structuredData).not.toHaveProperty('telephone');
		expect(structuredData).not.toHaveProperty('address');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
