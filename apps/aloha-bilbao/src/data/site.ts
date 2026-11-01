/**
 * Datos de ALOHA Bilbao.
 * Colón de Larreátegui K., 15, Abando, 48001 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'ALOHA Bilbao',
	fullName: 'ALOHA Bilbao',
	shortName: 'ALOHA Bilbao',
	mark: 'A',
	street: 'Colón de Larreátegui K., 15',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48001',
	locality: 'Abando',
	country: 'ES',
	phone: '946 29 20 99',
	phoneHref: 'tel:+34946292099',
	siteUrl: 'https://aloha-bilbao.vercel.app',
	googleCategory: 'Restaurante de comida saludable',
	tagline: 'Poké, ensaladas, wraps y comida saludable en Abando, Bilbao',
	description:
		'ALOHA Bilbao, restaurante de poké, ensaladas, wraps y comida saludable en Colón de Larreátegui K., 15 (Abando, 48001 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/ALOHA+Bilbao+-+Pok%C3%A9,+ensaladas,+wraps+%26+comida+saludable/@43.2628218,-2.9297298,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f8271dd9925:0xaee874c7dc74a935!8m2!3d43.2628218!4d-2.9297298!16s%2Fg%2F11j3rz9y4w?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2628218%2C-2.9297298',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
