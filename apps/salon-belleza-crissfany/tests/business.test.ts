import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de CrissFany\'s', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe("Salón de belleza CrissFany's");
		expect(business.streetAddress).toBe('Av. de la Viñuela, 22');
		expect(business.postalCode).toBe('14010');
		expect(business.phone).toBe('+34 622 68 18 21');
		expect(phoneHref).toBe('tel:+34622681821');
		expect(mapsUrl).toContain('google.com/maps/place/Sal%C3%B3n+de+belleza+CrissFany');
		expect(mapsUrl).toContain('0xd6cdf8106113317:0x6e02c94cb931230a');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=37.888565%2C-4.762951');
		expect(mapEmbedUrl).toContain('q=37.888565%2C-4.762951');
		expect(structuredData.geo.latitude).toBe(37.888565);
		expect(structuredData.geo.longitude).toBe(-4.762951);
		expect(structuredData.aggregateRating.ratingValue).toBe(4.8);
		expect(structuredData.aggregateRating.reviewCount).toBe(6);
		expect(horario.map((h) => h.days)).toEqual(['Lunes', 'Martes y viernes', 'Miércoles y jueves', 'Sábado', 'Domingo']);
	});
});
