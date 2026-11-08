/**
 * Datos de Momen Pizza.
 * San Frantzisko Kalea, 35, Ibaiondo, 48003 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Momen Pizza',
	fullName: 'Momen Pizza',
	shortName: 'Momen Pizza',
	mark: 'M',
	street: 'San Frantzisko Kalea, 35',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48003',
	locality: 'Ibaiondo',
	country: 'ES',
	phone: '946 29 30 81',
	phoneHref: 'tel:+34946293081',
	siteUrl: 'https://www.sur-digital.com/momen-pizza',
	googleCategory: 'Pizzería',
	tagline: 'Pizza en Ibaiondo, Bilbao',
	description:
		'Momen Pizza, pizzería en San Frantzisko Kalea, 35 (Ibaiondo, 48003 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Momen+Pizza/@43.255812,-2.928378,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4fd289cbbfcb:0x8fca916f2177c3dd!8m2!3d43.255812!4d-2.928378!16s%2Fg%2F11bwf7mv02?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.255812%2C-2.928378',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
