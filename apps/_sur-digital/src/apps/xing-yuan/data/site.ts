/**
 * Datos de Xing Yuan.
 * Fernández del Campo K., 6, Abando, 48010 Bilbao, Bizkaia.
 *
 * Fuente: ficha pública de Google Maps consultada en noviembre de 2026.
 */

export const BUSINESS = {
	name: 'Xing Yuan',
	fullName: 'Xing Yuan',
	shortName: 'Xing Yuan',
	mark: 'X',
	street: 'Fernández del Campo K., 6',
	city: 'Bilbao',
	region: 'Bizkaia',
	postalCode: '48010',
	locality: 'Abando',
	country: 'ES',
	phone: '944 71 95 17',
	phoneHref: 'tel:+34944719517',
	siteUrl: 'https://www.sur-digital.com/xing-yuan',
	googleCategory: 'Restaurante de cocina mandarina',
	tagline: 'Cocina mandarina en Abando, Bilbao',
	description:
		'Xing Yuan, restaurante de cocina mandarina en Fernández del Campo K., 6 (Abando, 48010 Bilbao, Bizkaia). Según su ficha de Google Maps.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Xing+Yuan/@43.2584583,-2.9331427,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e4f8289436973:0x29ea4d84911cc042!8m2!3d43.2584583!4d-2.9331427!16s%2Fg%2F11h8n0qyww?authuser=0&hl=es&entry=ttu',
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2584583%2C-2.9331427',
};

/** Valoración publicada en la ficha. No la leí en esta sesión: se deja vacía hasta confirmarla. */
export const RATING: { value: number | null; label: string } = {
	value: null,
	label: '',
};
