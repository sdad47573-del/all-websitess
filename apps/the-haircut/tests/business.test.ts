import { describe, expect, test } from 'bun:test';
import { BUSINESS, IMAGES, SCHEMA } from '../src/data/site';

describe('datos locales de The Haircut', () => {
	test('prepara datos de contacto y ficha de Google Maps', () => {
		expect(BUSINESS.phoneHref).toBe('tel:+34951405960');
		expect(BUSINESS.street).toBe('Calle Flaubert, 3');
		expect(BUSINESS.googleMaps).toContain('google.com/maps/place/The+Haircut');
		expect(BUSINESS.booksy).toContain('booksy.com/es-es/2103_thehaircut_barberia_29485_malaga');
	});

	test('centra el mapa en las coordenadas confirmadas', () => {
		expect(BUSINESS.geo.lat).toBe(36.7238757);
		expect(BUSINESS.geo.lng).toBe(-4.4618764);
		expect(SCHEMA.geo.latitude).toBe(36.7238757);
		expect(SCHEMA.geo.longitude).toBe(-4.4618764);
		expect(BUSINESS.googleMapsEmbed).toContain('Flaubert');
	});

	test('usa imágenes propias y ninguna foto de Google Maps', () => {
		for (const image of Object.values(IMAGES)) {
			const src = typeof image === 'string' ? image : (image as { src: string }).src;
			expect(src).toContain('the-haircut-');
			expect(src).not.toContain('googleusercontent');
		}
	});
});
