import { describe, expect, test } from 'bun:test';
import { bookingUrl, business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de LE BARBIERE TEATINOS', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('PELUQUERÍA LE BARBIERE TEATINOS');
		expect(business.streetAddress).toBe('C. Hermes, 5, Loc 2');
		expect(business.postalCode).toBe('29010');
		expect(business.phone).toBe('+34 640 17 50 44');
		expect(phoneHref).toBe('tel:+34640175044');
		expect(mapsUrl).toContain('google.com/maps/place/PELUQUER');
		expect(mapsUrl).toContain('0xd72f7ade71fc967:0xd395a9d0bd9c98f2');
		expect(bookingUrl).toContain('booksy.com');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=36.7218951%2C-4.475792');
		expect(mapEmbedUrl).toContain('q=36.7218951%2C-4.475792');
		expect(structuredData.geo.latitude).toBe(36.7218951);
		expect(structuredData.geo.longitude).toBe(-4.475792);
		expect(structuredData.aggregateRating.ratingValue).toBe(4.8);
		expect(structuredData.aggregateRating.reviewCount).toBe(221);
		expect(horario.map((h) => h.days)).toEqual(['Lunes a viernes', 'Sábado', 'Domingo']);
	});
});
