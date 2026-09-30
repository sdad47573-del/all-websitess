import { describe, expect, test } from 'bun:test';
import {
	business,
	directionsUrl,
	mapEmbedUrl,
	mapsUrl,
	phoneHrefs,
	specialties,
	structuredData,
} from '../src/lib/business';

describe('datos locales del Mesón Juan Manuel', () => {
	test('incluye la dirección y los teléfonos del mesón', () => {
		expect(business.name).toBe('Restaurante Mesón Juan Manuel');
		expect(business.streetAddress).toBe('Calle San Agustín, 1, Local 2');
		expect(business.postalCode).toBe('29200');
		expect(business.city).toBe('Antequera');
		expect(business.province).toBe('Málaga');
		expect(mapsUrl).toContain('google.com/maps/place/Restaurante+Mes%C3%B3n+Juan+Manuel');
		expect(mapsUrl).toContain('0x1285990c2bb07d4');
		expect(phoneHrefs[0]).toBe('+34952843484');
		expect(phoneHrefs[1]).toBe('+34653083009');
	});

	test('centra la ficha en sus coordenadas y evita horarios o ratings no verificados', () => {
		expect(directionsUrl).toContain('destination=37.0171681%2C-4.5605175');
		expect(mapEmbedUrl).toContain('q=37.0171681%2C-4.5605175');
		expect(structuredData['@type']).toBe('Restaurant');
		expect(structuredData.geo.latitude).toBe(37.0171681);
		expect(structuredData.geo.longitude).toBe(-4.5605175);
		expect(structuredData).not.toHaveProperty('openingHours');
		expect(structuredData).not.toHaveProperty('aggregateRating');
		expect(structuredData).not.toHaveProperty('priceRange');
	});

	test('declara la cocina andaluza, el teléfono y la especialidad de la casa', () => {
		expect(structuredData.servesCuisine).toContain('Andaluza');
		expect(structuredData.telephone).toBe('+34 952 84 34 84');
		expect(structuredData.email).toBe('mesonjuanmanuel@hotmail.es');
		expect(structuredData).not.toHaveProperty('photoUrl');
		expect(structuredData).not.toHaveProperty('sameAs');
	});

	test('lista platos documentados y no inventa precios', () => {
		const names = specialties.map((dish) => dish.name);
		expect(names).toContain('Porra antequerana');
		expect(names).toContain('Pío antequerano');
		expect(names).toContain('Ensaladilla de pescada');
		expect(JSON.stringify(specialties)).not.toContain('€');
	});
});
