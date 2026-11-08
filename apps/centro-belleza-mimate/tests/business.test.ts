import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Mimate', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('Centro de Belleza Mimate');
		expect(business.streetAddress).toBe('C. José Dámaso "Pepete", 21');
		expect(business.postalCode).toBe('14005');
		expect(business.phone).toBe('+34 695 17 35 32');
		expect(phoneHref).toBe('tel:+34695173532');
		expect(mapsUrl).toContain('google.com/maps/place/Centro+de+Belleza+Mimate');
		expect(mapsUrl).toContain('0xd6d20a65c418827:0xdf4422364c5f5ceb');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=37.8759824%2C-4.7971771');
		expect(mapEmbedUrl).toContain('q=37.8759824%2C-4.7971771');
		expect(structuredData.geo.latitude).toBe(37.8759824);
		expect(structuredData.geo.longitude).toBe(-4.7971771);
		expect(structuredData.aggregateRating.ratingValue).toBe(4.7);
		expect(structuredData.aggregateRating.reviewCount).toBe(49);
		expect(horario.map((h) => h.days)).toEqual(['Lunes, martes, jueves y viernes', 'Miércoles y sábado', 'Domingo']);
	});
});
