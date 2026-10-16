import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Nuevo Estilo', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('Salón de Belleza Nuevo Estilo');
		expect(business.streetAddress).toBe('Av de los Almogávares, 30');
		expect(business.postalCode).toBe('14006');
		expect(business.phone).toBe('+34 957 28 39 67');
		expect(phoneHref).toBe('tel:+34957283967');
		expect(mapsUrl).toContain('google.com/maps/place/Sal%C3%B3n+de+Belleza+Nuevo+Estilo');
		expect(mapsUrl).toContain('0xd6cdf71471f1eab:0x60c84ed51f7b57c1');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=37.8965843%2C-4.7752082');
		expect(mapEmbedUrl).toContain('q=37.8965843%2C-4.7752082');
		expect(structuredData.geo.latitude).toBe(37.8965843);
		expect(structuredData.geo.longitude).toBe(-4.7752082);
		expect(structuredData.aggregateRating.ratingValue).toBe(4);
		expect(structuredData.aggregateRating.reviewCount).toBe(1);
		expect(structuredData).not.toHaveProperty('openingHoursSpecification');
	});
});
