import { describe, expect, test } from 'bun:test';
import {
	business,
	directionsUrl,
	mapEmbedUrl,
	mapsUrl,
	instagramUrl,
	phoneHrefs,
	structuredData,
} from '../src/lib/business';

describe('datos locales de El Pollito Lio', () => {
	test('incluye la dirección y el teléfono oficiales del asador', () => {
		expect(business.name).toBe('El Pollito Lio');
		expect(business.streetAddress).toBe('Avenida del Mediterráneo, 16');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(mapsUrl).toContain('google.com/maps/place/El+Pollito+Lio');
		expect(mapsUrl).toContain('0x31af32f9b8d83835');
		expect(instagramUrl).toBe('https://www.instagram.com/elpollitolio_rincon/');
		expect(phoneHrefs[0]).toBe('+34605919812');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7158711%2C-4.2902975');
		expect(mapEmbedUrl).toContain('q=36.7158711%2C-4.2902975');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7158711);
		expect(structuredData.geo.longitude).toBe(-4.2902975);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('priceRange');
	});

	test('declara la cocina argentina y el teléfono en el JSON-LD', () => {
		expect(structuredData.servesCuisine).toContain('Argentina');
		expect(structuredData.telephone).toBe('+34 605 91 98 12');
		expect(structuredData).not.toHaveProperty('photoUrl');
	});
});
