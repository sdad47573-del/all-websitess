/**
 * Datos de Restaurante Mesón Casa Loren (C. de los Santos, 19 · 13170 Miguelturra).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas, horario semanal y accesibilidad.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://restaurante-meson-casa-loren.vercel.app',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Restaurante Mesón Casa Loren',
	category: 'Restaurante',
	streetAddress: 'Calle de los Santos, 19',
	postalCode: '13170',
	city: 'Miguelturra',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 608 53 63 68',
	latitude: 38.9602826,
	longitude: -3.8887829,
	/** Número de reseñas publicado en la ficha. La valoración de la ficha es 4,2. */
	reviewCount: 198,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bdd2170ae4c67:0x6de9600b27dbb12e',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Mes%C3%B3n+Casa+Loren/@38.9602826,-3.8887829,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bdd2170ae4c67:0x6de9600b27dbb12e!8m2!3d38.9602826!4d-3.8887829!16s%2Fg%2F1tdnglrw?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: lunes a viernes de 9:30 a 23:00 salvo el martes, que cierra a las
 * 20:00; sábado de 12:00 a 23:00 y domingo de 11:30 a 23:00. La ficha avisa de que el domingo
 * 1 de noviembre (Todos los Santos) el horario podría ser diferente.
 */
export const hours = [
	{ day: 'Lunes', service: '9:30 – 23:00', shifts: [{ open: '9:30', close: '23:00' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:30 – 20:00', shifts: [{ open: '9:30', close: '20:00' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:30 – 23:00', shifts: [{ open: '9:30', close: '23:00' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:30 – 23:00', shifts: [{ open: '9:30', close: '23:00' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:30 – 23:00', shifts: [{ open: '9:30', close: '23:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '12:00 – 23:00', shifts: [{ open: '12:00', close: '23:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '11:30 – 23:00', shifts: [{ open: '11:30', close: '23:00' }], dayOfWeek: 'Sunday' },
] as const;

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];

/** Accesibilidad que publica la ficha. */
export const accesibilidad = ['Acceso para sillas de ruedas'] as const;
