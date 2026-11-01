/**
 * Datos de SUKAI RAMEN.
 * Erripa Kalea, 24, Abando, 48001 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'SUKAI RAMEN',
	fullName: 'SUKAI RAMEN',
	shortName: 'SUKAI',
	mark: 'S',
	street: 'Erripa Kalea, 24',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48001',
	locality: 'Abando',
	country: 'ES',
	phone: '688 77 76 80',
	phoneHref: 'tel:+34688777680',
	siteUrl: 'https://sukai-ramen.vercel.app',
	googleCategory: 'Restaurante asiático',
	tagline: 'Ramen, rollitos y empanadillas en Abando, Bilbao',
	description:
		'SUKAI RAMEN, restaurante asiático en Erripa Kalea, 24 (Abando, 48001 Bilbao, Bizkaia). Según su ficha de Google Maps, sirve cuencos de ramen típicos, rollitos y empanadillas.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/SUKAI+RAMEN/@43.26247,-2.9244559,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f14c61a5745:0x999e123d366714a9!8m2!3d43.26247!4d-2.9244559!16s%2Fg%2F11fr56v032?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.26247%2C-2.9244559',
};

/** Valoración publicada en la ficha (4,5). */
export const RATING: { value: number | null; label: string } = {
	value: 4.5,
	label: '4,5',
};
