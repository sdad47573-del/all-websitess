import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de AM Industria del Estilo', () => {
	test('incluye dirección, teléfono oficial y foto específica de Maps', () => {
		expect(business.name).toBe('AM Industria del Estilo');
		expect(business.streetAddress).toBe('Avenida de Gregorio Prieto, 3, Portal 5, Local 11');
		expect(business.postalCode).toBe('29010');
		expect(phoneHrefs).toEqual(['tel:+34744610881']);
		expect(photoUrl).toContain(
			'lh3.googleusercontent.com/gps-cs-s/ANWiy9S-QF19-I-YYKHobO8jh3oPBUBgMiJV2XQxw67rME89-QFqWJpUwQFGUKiJJe2n2Q2MDXYVUSSBmOWctgnAKQ7LXogirKLxJV_txoPwZUU-3DKg4TRYhSbbTE4OeSkxgNBvgBQ6Cg',
		);
		expect(mapsUrl).toContain('google.com/maps/place/AM+Industria+del+estilo');
		expect(mapsUrl).toContain('0x44ce559748963482');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7191462%2C-4.4634219');
		expect(mapEmbedUrl).toContain('q=36.7191462%2C-4.4634219');
		expect(structuredData.geo.latitude).toBe(36.7191462);
		expect(structuredData.geo.longitude).toBe(-4.4634219);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
