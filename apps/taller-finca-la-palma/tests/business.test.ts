import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, phoneHref, whatsappUrl, structuredData } from '../src/lib/business';

describe('datos públicos de Taller Finca la Palma', () => {
	test('prepara enlaces correctos de llamada, WhatsApp y Maps', () => {
		expect(phoneHref).toBe('tel:+34952285540');
		expect(whatsappUrl).toBe('https://wa.me/34647004577');
		expect(business.streetAddress).toBe('Calle Francisco Barbin, 11');
		expect(business.email).toBe('tallerfincalapalma@hotmail.es');
		expect(mapsUrl).toContain('google.com/maps/place/Taller+Finca+la+Palma');
	});

	test('mantiene coordenadas y no expone horarios, valoraciones o reseñas', () => {
		expect(directionsUrl).toContain('destination=36.7212802%2C-4.4726736');
		expect(mapEmbedUrl).toContain('q=36.7212802%2C-4.4726736');
		expect(structuredData.geo.latitude).toBe(36.7212802);
		expect(structuredData.geo.longitude).toBe(-4.4726736);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('review');
	});
});
