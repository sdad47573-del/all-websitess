import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, openingHours, phoneHref, structuredData } from '../src/lib/business';

describe('datos de Auto Moto Miguel', () => {
	test('crea enlaces de teléfono y Maps con NAP conocido', () => {
		expect(phoneHref).toBe('tel:+34952309954');
		expect(business.streetAddress).toBe('Calle Antonio Raíz, 6');
		expect(business.postalCode).toBe('29010');
		expect(mapsUrl).toContain('google.com/maps/place/Auto+Moto+Miguel');
		expect(directionsUrl).toContain('destination=36.7243892%2C-4.4680198');
		expect(mapEmbedUrl).toContain('q=36.7243892%2C-4.4680198');
	});

	test('incluye horario laborable orientativo y excluye valoraciones', () => {
		expect(openingHours).toEqual({ weekdays: '09:00–14:00 y 16:00–20:00', note: 'Horario orientativo; confirma por teléfono antes de acudir.' });
		expect(structuredData['@type']).toBe('MotorcycleRepair');
		expect(structuredData.openingHoursSpecification).toHaveLength(2);
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('review');
	});
});
