/**
 * Datos de Good Times.
 * Allende Particular Kalea, 10, 48004 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Good Times',
	fullName: 'Good Times',
	shortName: 'Good Times',
	mark: 'G',
	street: 'Allende Particular Kalea, 10',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48004',
	locality: 'Bilbao',
	country: 'ES',
	phone: '652 32 24 85',
	phoneHref: 'tel:+34652322485',
	siteUrl: 'https://good-times.vercel.app',
	googleCategory: 'Restaurante de comida rápida',
	tagline: 'Comida rápida en Bilbao',
	description:
		'Good Times, restaurante de comida rápida en Allende Particular Kalea, 10 (48004 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Good+Times/@43.2523202,-2.9134406,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f2138b550cb:0xa87eb01054330ca1!8m2!3d43.2523202!4d-2.9134406!16s%2Fg%2F11shffbl93?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2523202%2C-2.9134406',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
