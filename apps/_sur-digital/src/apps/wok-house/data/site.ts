/**
 * Datos de Wok House.
 * Goienkale, 41, Ibaiondo, 48005 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Wok House',
	fullName: 'Wok House',
	shortName: 'Wok House',
	mark: 'W',
	street: 'Goienkale, 41',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48005',
	locality: 'Ibaiondo',
	country: 'ES',
	phone: '747 41 63 22',
	phoneHref: 'tel:+34747416322',
	siteUrl: 'https://www.sur-digital.com/wok-house',
	googleCategory: 'Restaurante de comida asiática',
	tagline: 'Cocina wok en Ibaiondo, Bilbao',
	description:
		'Wok House, restaurante de cocina wok en Goienkale, 41 (Ibaiondo, 48005 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Wok+House/@43.2570807,-2.9224962,16z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f1ced85cc5b:0x80a474c35c93c1e5!8m2!3d43.2570807!4d-2.9224962!16s%2Fg%2F11j10v1p2y?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2570807%2C-2.9224962',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
