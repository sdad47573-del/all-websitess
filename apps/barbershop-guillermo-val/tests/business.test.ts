import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos locales de Barbershop Guillermo Val', () => {
	test('expone el contacto y la imagen concreta de la ficha de Maps', () => {
		expect(business.name).toBe('Barbershop Guillermo Val');
		expect(business.streetAddress).toBe('C. Castilla, 19');
		expect(business.postalCode).toBe('29007');
		expect(business.phone).toBe('+34 600 24 13 83');
		expect(phoneHref).toBe('tel:+34600241383');
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/ANWiy9QMoQ8tfXiW1UnZ_rjSA3X5gpK003dFA08U8nEXHu8x0se0mzsmqtqv77cIgZ8_TXKKEBeBE0tky7R16utxE-W-6n5bRbbIL92XNGHlEoWJuRi63zvX_LqMna0Fma_z5_iEDZnS');
		expect(mapsUrl).toContain('google.com/maps/place/Barbershop+Guillermo+Val');
	});

	test('centra mapa y ficha y no inventa horarios ni reseñas', () => {
		expect(directionsUrl).toContain('destination=36.7211362%2C-4.4537981');
		expect(mapEmbedUrl).toContain('q=36.7211362%2C-4.4537981');
		expect(structuredData.geo.latitude).toBe(36.7211362);
		expect(structuredData.geo.longitude).toBe(-4.4537981);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
