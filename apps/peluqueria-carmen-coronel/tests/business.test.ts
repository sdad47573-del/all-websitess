import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHref, structuredData } from '../src/lib/business';

describe('datos de Peluquería Carmen Coronel', () => {
	test('genera enlaces de contacto, Maps y foto a partir de la ficha', () => {
		expect(phoneHref).toBe('tel:+34637511264');
		expect(business.streetAddress).toBe('Av. de Carlos Haya, 186, bloque 1, local 2');
		expect(mapsUrl).toContain('google.com/maps/place/Peluquer%C3%ADa+Carmen+Coronel');
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/');
		expect(directionsUrl).toContain('destination=36.7244393%2C-4.4555305');
		expect(mapEmbedUrl).toContain('q=36.7244393%2C-4.4555305');
	});

	test('expone HairSalon y omite horario, ratings y servicios no verificados', () => {
		expect(structuredData['@type']).toBe('HairSalon');
		expect(structuredData.geo.latitude).toBe(36.7244393);
		expect(structuredData.geo.longitude).toBe(-4.4555305);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('makesOffer');
	});
});
