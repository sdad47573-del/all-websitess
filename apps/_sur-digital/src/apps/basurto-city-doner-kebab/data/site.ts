/**
 * Datos de Basurto city doner kebab.
 * Autonomia Kalea, 61, 48012 Bilbao (Basurtu-Zorrotza), Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Basurto city doner kebab',
	fullName: 'Basurto city doner kebab',
	shortName: 'Basurto city doner kebab',
	mark: 'B',
	street: 'Autonomia Kalea, 61',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48012',
	locality: 'Basurtu-Zorrotza',
	country: 'ES',
	phone: '946 12 88 70',
	phoneHref: 'tel:+34946128870',
	siteUrl: 'https://www.sur-digital.com/basurto-city-doner-kebab',
	googleCategory: 'Tienda de kebabs',
	tagline: 'Döner kebab en Basurtu-Zorrotza, Bilbao',
	description:
		'Basurto city doner kebab, tienda de kebabs en Autonomia Kalea, 61 (Basurtu-Zorrotza, 48012 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Basurto+city+doner+kebab/@43.2578015,-2.9476749,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e5031ff6e6d5b:0xad6020dd69ce1dab!8m2!3d43.2578015!4d-2.9476749!16s%2Fg%2F11cn82kt12?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2578015%2C-2.9476749',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
