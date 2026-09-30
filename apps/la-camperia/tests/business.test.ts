import { describe, expect, test } from 'bun:test';
import {
	business,
	directionsUrl,
	mapEmbedUrl,
	mapsUrl,
	phoneHrefs,
	structuredData,
} from '../src/lib/business';

describe('datos locales de La Campería', () => {
	test('incluye la dirección y el teléfono del bar de camperos', () => {
		expect(business.name).toBe('La Campería');
		expect(business.streetAddress).toBe('Calle Andrómeda, 15');
		expect(business.postalCode).toBe('29010');
		expect(business.city).toBe('Málaga');
		expect(business.district).toBe('Teatinos-Universidad');
		expect(business.province).toBe('Málaga');
		expect(mapsUrl).toContain('google.com/maps/place/La+Camperia');
		expect(mapsUrl).toContain('0x1bc2f2f2309b694e');
		expect(phoneHrefs[0]).toBe('+34952527784');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7229261%2C-4.4771974');
		expect(mapEmbedUrl).toContain('q=36.7229261%2C-4.4771974');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7229261);
		expect(structuredData.geo.longitude).toBe(-4.4771974);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('priceRange');
	});

	test('declara el teléfono, la especialidad y no inventa redes ni fotos', () => {
		expect(structuredData.telephone).toBe('+34 952 52 77 84');
		expect(structuredData.servesCuisine).toContain('Camperos malagueños');
		expect(structuredData).not.toHaveProperty('photoUrl');
		expect(structuredData).not.toHaveProperty('sameAs');
	});
});
