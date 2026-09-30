import { describe, expect, test } from 'bun:test';
import { business, directionsUrl, mapEmbedUrl, mapsUrl, photoUrl, phoneHrefs, structuredData } from '../src/lib/business';

describe('datos locales de AR Professional', () => {
	test('incluye dirección, teléfonos oficiales y foto específica de Maps', () => {
		expect(business.name).toBe('AR Professional');
		expect(business.streetAddress).toBe('Carril del Capitán, 3');
		expect(business.postalCode).toBe('29010');
		expect(phoneHrefs).toEqual(['tel:+34952629578', 'tel:+34626028412']);
		expect(photoUrl).toContain('lh3.googleusercontent.com/gps-cs-s/AHRPTWnlqXaitKx0LyYPYa7xIO3oxnc80gYYWqPxlpCJF3u8VUsfPDR8P0L-SExzzOBDyQCzR4KdfynMn7ZFg5IYsRNPC5Kd5aapc0bsx-fk4IDcIChX6c6Ns9QCijdNIwIy0YwgyNXH');
		expect(mapsUrl).toContain('google.com/maps/place/AR+Professional');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.725138%2C-4.461815');
		expect(mapEmbedUrl).toContain('q=36.725138%2C-4.461815');
		expect(structuredData.geo.latitude).toBe(36.725138);
		expect(structuredData.geo.longitude).toBe(-4.461815);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});
});
