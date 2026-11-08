import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Barbería Hair Cool', () => {
	test('incluye dirección, teléfono oficial y foto específica de Maps', () => {
		expect(business.name).toBe('Barbería Hair Cool');
		expect(business.streetAddress).toBe('Avenida Jorge Luis Borges, 19');
		expect(business.postalCode).toBe('29010');
		expect(phoneHrefs).toEqual(['tel:+34685572256']);
		expect(photoUrl).toContain(
			'lh3.googleusercontent.com/gps-cs-s/ANWiy9S3rnlvnrnHMuRqQ6THT3CR7g8pzeUTKKqF1bL5Lt0lvURqMbPjZR086R9XDAgfBsYiRMM1St_YX015BXclCIZhfFsrWJ8Dc6sdh4uH6GLgFC1D30M6Ef51YDrqotplb1ajO2nH',
		);
		expect(mapsUrl).toContain('google.com/maps/place/Barber%C3%ADa+Hair+Cool');
		expect(mapsUrl).toContain('0x2bc6bd6425ea3593');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.719796%2C-4.4629249');
		expect(mapEmbedUrl).toContain('q=36.719796%2C-4.4629249');
		expect(structuredData.geo.latitude).toBe(36.719796);
		expect(structuredData.geo.longitude).toBe(-4.4629249);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
