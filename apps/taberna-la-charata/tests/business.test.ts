import { describe, expect, test } from 'bun:test';
import { readFileSync } from 'node:fs';
import { business, directionsUrl, galleryPhotos, mapEmbedUrl, mapsUrl, instagramUrl, structuredData } from '../src/lib/business';

describe('datos locales de Taberna La Charata', () => {
	test('incluye la dirección oficial de la taberna', () => {
		expect(business.name).toBe('Taberna La Charata');
		expect(business.streetAddress).toBe('Calle Córdoba, Local 2');
		expect(business.postalCode).toBe('29730');
		expect(business.city).toBe('Rincón de la Victoria');
		expect(business.province).toBe('Málaga');
		expect(mapsUrl).toContain('google.com/maps/place/Taberna+La+Charata');
		expect(mapsUrl).toContain('0xb1da2e444feceb2e');
		expect(instagramUrl).toBe('https://www.instagram.com/tabernalacharata_/');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=36.7155529%2C-4.2850114');
		expect(mapEmbedUrl).toContain('q=36.7155529%2C-4.2850114');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(36.7155529);
		expect(structuredData.geo.longitude).toBe(-4.2850114);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
	});

	test('incluye las ocho fotos JPEG descargadas para la galería local', () => {
		expect(galleryPhotos).toHaveLength(8);
		for (const photo of galleryPhotos) {
			const image = readFileSync(new URL(`../public${photo.src}`, import.meta.url));
			expect(image.subarray(0, 3)).toEqual(Buffer.from([0xff, 0xd8, 0xff]));
			expect(image.byteLength).toBeGreaterThan(10_000);
		}
	});

	test('omite el teléfono al no haber un número público verificado', () => {
		expect(structuredData).not.toHaveProperty('telephone');
	});
});
