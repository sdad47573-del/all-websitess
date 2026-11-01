/**
 * Datos de Restaurante El chino misterioso.
 * Iturriza Kalea, 19, Abando, 48003 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Restaurante El chino misterioso',
	fullName: 'Restaurante El chino misterioso',
	shortName: 'El chino misterioso',
	mark: 'C',
	street: 'Iturriza Kalea, 19',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48003',
	locality: 'Abando',
	country: 'ES',
	phone: '944 43 48 48',
	phoneHref: 'tel:+34944434848',
	siteUrl: 'https://restaurante-el-chino-misterioso.vercel.app',
	googleCategory: 'Restaurante chino',
	tagline: 'Cocina china en Abando, Bilbao',
	description:
		'Restaurante El chino misterioso, restaurante de cocina china en Iturriza Kalea, 19 (Abando, 48003 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+El+chino+misterioso/@43.2573008,-2.9326525,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f3391ab97e1:0x93521c265aecffce!8m2!3d43.2573008!4d-2.9326525!16s%2Fg%2F11s61cnqmv?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2573008%2C-2.9326525',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
