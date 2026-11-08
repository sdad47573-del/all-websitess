import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Felipe Barber', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('Felipe Barber');
		expect(business.streetAddress).toBe('C. Nuzas, 2A');
		expect(business.postalCode).toBe('29010');
		expect(business.phone).toBe('+34 693 32 59 59');
		expect(phoneHref).toBe('tel:+34693325959');
		expect(mapsUrl).toContain('google.com/maps/place/Felipe+Barber');
		expect(mapsUrl).toContain('0xd72f7d9f04b4337:0xffe64db45585bf5');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=36.7275167%2C-4.4674271');
		expect(mapEmbedUrl).toContain('q=36.7275167%2C-4.4674271');
		expect(structuredData.geo.latitude).toBe(36.7275167);
		expect(structuredData.geo.longitude).toBe(-4.4674271);
		expect(structuredData.aggregateRating.ratingValue).toBe(4.9);
		expect(structuredData.aggregateRating.reviewCount).toBe(36);
		expect(horario.map((h) => h.days)).toEqual(['Lunes', 'Martes a viernes', 'Sábado', 'Domingo']);
	});
});
