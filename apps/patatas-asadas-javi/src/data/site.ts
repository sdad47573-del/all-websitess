/**
 * Datos de Patatas Asadas Javi (Pl. Pradillo de Clavería · 13170 Miguelturra).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas y horario semanal.
 * La ficha no publica precios ni datos de accesibilidad, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://patatas-asadas-javi.vercel.app',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Patatas Asadas Javi',
	category: 'Restaurante de comida rápida',
	streetAddress: 'Pl. Pradillo de Clavería',
	postalCode: '13170',
	city: 'Miguelturra',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 615 35 24 04',
	latitude: 38.9632561,
	longitude: -3.8894414,
	/** Número de reseñas publicado en la ficha. La valoración numérica no se pudo confirmar. */
	reviewCount: 25,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bdd2095acf1b7:0xfe87b85bc4f2c5f',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Patatas+Asadas+Javi/@38.9632561,-3.8894414,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bdd2095acf1b7:0xfe87b85bc4f2c5f!8m2!3d38.9632561!4d-3.8894414!16s%2Fg%2F11c0rm5cn5?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: viernes y sábado de 20:00 a 23:00, domingo de 19:30 a 23:00 y
 * lunes a jueves cerrado. La ficha avisa de que el domingo 1 de noviembre (Todos los Santos)
 * el horario podría ser diferente.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: 'Cerrado', shifts: [], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: 'Cerrado', shifts: [], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: 'Cerrado', shifts: [], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '20:00 – 23:00', shifts: [{ open: '20:00', close: '23:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '20:00 – 23:00', shifts: [{ open: '20:00', close: '23:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '19:30 – 23:00', shifts: [{ open: '19:30', close: '23:00' }], dayOfWeek: 'Sunday' },
] as const;

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];

/** Accesibilidad que publica la ficha. La respuesta leída no la trae. */
export const accesibilidad: readonly string[] = [];
