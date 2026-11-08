/**
 * Datos de Woodhouse Grill.
 * C. Bruno Mauricio Zabala Kalea, Ibaiondo, 48003 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Woodhouse Grill',
	fullName: 'Woodhouse Grill',
	shortName: 'Woodhouse',
	mark: 'W',
	street: 'C. Bruno Mauricio Zabala Kalea',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48003',
	locality: 'Ibaiondo',
	country: 'ES',
	phone: '643 01 10 03',
	phoneHref: 'tel:+34643011003',
	siteUrl: 'https://www.sur-digital.com/woodhouse-grill',
	googleCategory: 'Restaurante',
	tagline: 'Grill en Ibaiondo, Bilbao',
	description:
		'Woodhouse Grill, restaurante en C. Bruno Mauricio Zabala Kalea (Ibaiondo, 48003 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/WOODHOUSE+GRILL/@43.2568921,-2.9315968,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f97e3e5cee9:0xa792223eb1d8f1d2!8m2!3d43.2568921!4d-2.9315968!16s%2Fg%2F11js2thyjp?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2568921%2C-2.9315968',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
