import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de Corte 10 Peluqueros', () => {
	test('incluye dirección, teléfono oficial y foto específica de Maps', () => {
		expect(business.name).toBe('Peluquería | Corte 10 Peluqueros');
		expect(business.streetAddress).toBe('Calle Ibrahin, 18');
		expect(business.postalCode).toBe('29010');
		expect(phoneHrefs).toEqual(['tel:+34687651912']);
		expect(photoUrl).toContain(
			'lh3.googleusercontent.com/gps-cs-s/ANWiy9Q6Aw6o6cZ60K8cP1z1SElve4XNR3hp5BHn0uE2-ynZOY0Dg93nSpkXWteyoLrTyINGA78jVn9xcjsc63SV18WaJlW4ytkqQfl5wuzr-e3HIhV0F0zBe9aIxCoEc4APQLLjhM-0',
		);
		expect(mapsUrl).toContain('google.com/maps/place/Peluquer%C3%ADa+%7C+Corte+10+Peluqueros');
		expect(mapsUrl).toContain('0x332ba810990e2089');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7299865%2C-4.4414409');
		expect(mapEmbedUrl).toContain('q=36.7299865%2C-4.4414409');
		expect(structuredData.geo.latitude).toBe(36.7299865);
		expect(structuredData.geo.longitude).toBe(-4.4414409);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
