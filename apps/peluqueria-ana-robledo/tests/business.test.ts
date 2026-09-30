import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Peluquería Ana Robledo', () => {
	test('incluye dirección, teléfono oficial y foto específica de Maps', () => {
		expect(business.name).toBe('Peluquería Ana Robledo. Estilismo');
		expect(business.streetAddress).toBe('Avenida de Carlos Haya, 192');
		expect(business.postalCode).toBe('29010');
		expect(phoneHrefs).toEqual(['tel:+34675203884']);
		expect(photoUrl).toContain(
			'lh3.googleusercontent.com/gps-cs-s/ANWiy9T0t087d2t7pmy_UzPR7NBhwVmxfIjoxi7VAwGkJhlQ-cAxwA7y3qcgN5wSNnf7hK61sQJOuWIMN7qaz24H6UhVJUv9hpEqtRi15kbrzyCk3iNDjXAIBYiCNA20Sg1wqV45mtK0',
		);
		expect(mapsUrl).toContain('google.com/maps/place/Peluqueria+Ana+Robledo.+Estilismo');
		expect(mapsUrl).toContain('0xca6494c4ba34dc1');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7248447%2C-4.4566318');
		expect(mapEmbedUrl).toContain('q=36.7248447%2C-4.4566318');
		expect(structuredData.geo.latitude).toBe(36.7248447);
		expect(structuredData.geo.longitude).toBe(-4.4566318);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
