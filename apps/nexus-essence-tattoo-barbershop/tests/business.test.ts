import { describe, expect, test } from 'bun:test';
import { bookingUrl, business, directionsUrl, horario, mapEmbedUrl, mapsUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Nexus Essence', () => {
	test('expone el contacto verificado de la ficha de Maps', () => {
		expect(business.name).toBe('Nexus Essence Tattoo & Barbershop');
		expect(business.streetAddress).toBe('Av. Jorge Luis Borges, 46');
		expect(business.postalCode).toBe('29010');
		expect(business.phone).toBe('+34 722 38 84 27');
		expect(phoneHref).toBe('tel:+34722388427');
		expect(mapsUrl).toContain('google.com/maps/place/Nexus+Essence');
		expect(mapsUrl).toContain('0xd72f700387acbf5:0x1ba6e431b8c71747');
		expect(bookingUrl).toContain('booksy.com');
	});

	test('centra mapa y ficha y publica valoración y horario reales', () => {
		expect(directionsUrl).toContain('destination=36.7207307%2C-4.4715546');
		expect(mapEmbedUrl).toContain('q=36.7207307%2C-4.4715546');
		expect(structuredData.geo.latitude).toBe(36.7207307);
		expect(structuredData.geo.longitude).toBe(-4.4715546);
		expect(structuredData.aggregateRating.ratingValue).toBe(5);
		expect(structuredData.aggregateRating.reviewCount).toBe(73);
		expect(horario.map((h) => h.days)).toEqual(['Lunes a viernes', 'Sábado', 'Domingo']);
	});
});
