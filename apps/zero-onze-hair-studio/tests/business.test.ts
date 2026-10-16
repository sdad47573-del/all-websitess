import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Zero Onze hair studio', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('Zero Onze hair studio');
		expect(business.streetAddress).toBe('Av. Parménides, 17');
		expect(business.postalCode).toBe('29010');
		expect(business.phone).toBe('+34 624 22 19 15');
		expect(phoneHref).toBe('tel:+34624221915');
		expect(mapsUrl).toContain('google.com/maps/place/Zero+Onze+hair+studio');
		expect(mapsUrl).toContain('0xd72f7b4ba8841ad:0x64c2947cb043ff89');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=36.7207816%2C-4.4798433');
		expect(mapEmbedUrl).toContain('q=36.7207816%2C-4.4798433');
		expect(structuredData.geo.latitude).toBe(36.7207816);
		expect(structuredData.geo.longitude).toBe(-4.4798433);
		expect(structuredData.aggregateRating.ratingValue).toBe(5.0);
		expect(structuredData.aggregateRating.reviewCount).toBe(135);
		expect(horario.map((h) => h.days)).toEqual(['Lunes', 'Martes a viernes', 'Sábado', 'Domingo']);
	});
});
