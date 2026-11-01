/**
 * Datos de Asador de Pollos Nerea.
 * Juan de Garay Kalea, 57, Ibaiondo, 48003 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Asador de Pollos Nerea',
	fullName: 'Asador de Pollos Nerea',
	shortName: 'Nerea',
	mark: 'N',
	street: 'Juan de Garay Kalea, 57',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48003',
	locality: 'Ibaiondo',
	country: 'ES',
	phone: '944 43 53 36',
	phoneHref: 'tel:+34944435336',
	siteUrl: 'https://asador-de-pollos-nerea.vercel.app',
	googleCategory: 'Asador de pollos',
	tagline: 'Asador de pollos en Ibaiondo, Bilbao',
	description:
		'Asador de Pollos Nerea, asador de pollos en Juan de Garay Kalea, 57 (Ibaiondo, 48003 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+Pollos+Nerea/@43.2508502,-2.9339974,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4e2b1a7a3645:0x4336e85646f682ef!8m2!3d43.2508502!4d-2.9339974!16s%2Fg%2F1tgqkr4z?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2508502%2C-2.9339974',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
