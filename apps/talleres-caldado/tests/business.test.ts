import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos públicos de Talleres Caldado', () => {
	test('expone datos de contacto y enlace de foto de Google Maps', () => {
		expect(phoneHref).toBe('tel:+34952306810');
		expect(business.streetAddress).toBe('Avda. Carlos Haya, 163');
		expect(business.email).toBe('tallerescaldado@eurotaller.com');
		expect(mapsUrl).toContain('google.com/maps/place/Talleres+Caldado');
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/');
	});

	test('centra mapa e información estructurada sin horario ni valoración', () => {
		expect(directionsUrl).toContain('destination=36.7250617%2C-4.4583111');
		expect(mapEmbedUrl).toContain('q=36.7250617%2C-4.4583111');
		expect(structuredData.geo.latitude).toBe(36.7250617);
		expect(structuredData.geo.longitude).toBe(-4.4583111);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('knowsAbout');
	});
});
