import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Medina Azahara', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('Salón de Belleza Medina Azahara');
		expect(business.streetAddress).toBe('Av. de Medina Azahara, 10');
		expect(business.postalCode).toBe('14005');
		expect(business.phone).toBe('+34 675 48 68 31');
		expect(phoneHref).toBe('tel:+34675486831');
		expect(mapsUrl).toContain('google.com/maps/place/Sal%C3%B3n+de+Belleza+Medina+Azahara');
		expect(mapsUrl).toContain('0xd6cdfe3d1500ec9:0x66c0c225631b6d5f');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=37.8854452%2C-4.7909253');
		expect(mapEmbedUrl).toContain('q=37.8854452%2C-4.7909253');
		expect(structuredData.geo.latitude).toBe(37.8854452);
		expect(structuredData.geo.longitude).toBe(-4.7909253);
		expect(structuredData.aggregateRating.ratingValue).toBe(4.3);
		expect(structuredData.aggregateRating.reviewCount).toBe(62);
		expect(horario.map((h) => h.days)).toEqual(['Lunes a miércoles', 'Jueves y viernes', 'Sábado', 'Domingo']);
	});
});
