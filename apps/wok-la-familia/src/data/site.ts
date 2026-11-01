/**
 * Datos de Wok La Familia.
 * Colón de Larreátegui K., 8, Abando, 48001 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Wok La Familia',
	fullName: 'Wok La Familia',
	shortName: 'Wok La Familia',
	mark: 'W',
	street: 'Colón de Larreátegui K., 8',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48001',
	locality: 'Abando',
	country: 'ES',
	phone: '688 77 93 76',
	phoneHref: 'tel:+34688779376',
	siteUrl: 'https://wok-la-familia.vercel.app',
	googleCategory: 'Restaurante de comida asiática',
	tagline: 'Cocina wok en Abando, Bilbao',
	description:
		'Wok La Familia, restaurante de cocina wok en Colón de Larreátegui K., 8 (Abando, 48001 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Wok+La+Familia/@43.2629646,-2.9293028,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f10753da581:0x4ccc01abed4c7224!8m2!3d43.2629646!4d-2.9293028!16s%2Fg%2F11ffw4dq5w?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2629646%2C-2.9293028',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
