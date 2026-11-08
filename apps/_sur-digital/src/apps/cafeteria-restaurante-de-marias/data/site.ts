/**
 * Datos de Cafetería Restaurante de María's (Av. de los Reyes Católicos, 7 · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas, horario semanal y accesibilidad.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/cafeteria-restaurante-de-marias',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: "Cafetería Restaurante de María's",
	category: 'Cafetería',
	streetAddress: 'Av. de los Reyes Católicos, 7',
	postalCode: '13005',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 926 82 21 27',
	latitude: 38.972463,
	longitude: -3.934551,
	/** Número de reseñas publicado en la ficha. */
	reviewCount: '1.700',
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc31a8b0aa815:0x26ddcdaf887d8ebb',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Cafeter%C3%ADa+Restaurante+de+Mar%C3%ADa%27s/@38.972463,-3.934551,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc31a8b0aa815:0x26ddcdaf887d8ebb!8m2!3d38.972463!4d-3.934551!16s%2Fg%2F1tfv_hk7?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: lunes cerrado, de martes a viernes de 8:30 a 24:00, sábado de
 * 9:00 a 24:00 y domingo de 9:00 a 16:30. La ficha avisa de que el domingo 1 de noviembre
 * (Todos los Santos) el horario podría ser diferente.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '8:30 – 24:00', shifts: [{ open: '8:30', close: '24:00' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '8:30 – 24:00', shifts: [{ open: '8:30', close: '24:00' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '8:30 – 24:00', shifts: [{ open: '8:30', close: '24:00' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '8:30 – 24:00', shifts: [{ open: '8:30', close: '24:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:00 – 24:00', shifts: [{ open: '9:00', close: '24:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '9:00 – 16:30', shifts: [{ open: '9:00', close: '16:30' }], dayOfWeek: 'Sunday' },
] as const;

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];

/** Accesibilidad que publica la ficha. */
export const accesibilidad = ['Acceso para sillas de ruedas'] as const;
