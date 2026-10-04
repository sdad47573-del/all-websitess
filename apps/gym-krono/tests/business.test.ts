import { describe, expect, test } from 'bun:test';
import {
	business,
	directionsUrl,
	mapEmbedUrl,
	mapsUrl,
	ogImage,
	phoneHrefs,
	structuredData,
} from '../src/lib/business';

describe('datos locales de Gym Krono', () => {
	test('incluye dirección, teléfono oficial y la ficha de Maps facilitada', () => {
		expect(business.name).toBe('Gym Krono');
		expect(business.streetAddress).toBe('Calle Juan Margarit, 4');
		expect(business.postalCode).toBe('29010');
		expect(phoneHrefs).toEqual(['tel:+34952272019']);
		expect(mapsUrl).toContain('google.com/maps/place/GYM+KRONO');
		expect(mapsUrl).toContain('0x7b3e668d6ed9bd73');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7241799%2C-4.4688237');
		expect(mapEmbedUrl).toContain('q=36.7241799%2C-4.4688237');
		expect(structuredData.geo.latitude).toBe(36.7241799);
		expect(structuredData.geo.longitude).toBe(-4.4688237);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});

	test('usa la tarjeta social generada como imagen estructurada', () => {
		expect(ogImage).toBe('https://gym-krono-malaga.vercel.app/og.png');
		expect(structuredData['@type']).toBe('ExerciseGym');
		expect(structuredData.image).toBe(ogImage);
	});
});
