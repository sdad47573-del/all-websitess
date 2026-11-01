/**
 * Datos de Melao de Caña (cocina colombiana).
 * Calle Gral. Concha, 46, Errekalde, 48012 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Melao de Caña',
	fullName: 'Melao de Caña',
	shortName: 'Melao de Caña',
	mark: 'M',
	street: 'Calle Gral. Concha, 46',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48012',
	locality: 'Errekalde',
	country: 'ES',
	phone: '946 57 93 94',
	phoneHref: 'tel:+34946579394',
	siteUrl: 'https://melao-de-cana.vercel.app',
	googleCategory: 'Restaurante de cocina colombiana',
	tagline: 'Cocina colombiana en Errekalde, Bilbao',
	description:
		'Melao de Caña, restaurante de cocina colombiana en Calle Gral. Concha, 46 (Errekalde, 48012 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Melao+de+Ca%C3%B1a/@43.2564999,-2.9363355,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4fd5c3bf02ef:0x81ac6ebb96dc416c!8m2!3d43.2564999!4d-2.9363355!16s%2Fg%2F1tfcvjtt?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2564999%2C-2.9363355',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
