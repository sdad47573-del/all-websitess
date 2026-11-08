/**
 * Datos de Cafetería Flor de Tomillo (C. Paloma, 3, Loc 1 · 13001 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas, valoración, horario semanal y
 * accesibilidad. La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/cafeteria-flor-de-tomillo',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Cafetería Flor de Tomillo',
	category: 'Cafetería',
	streetAddress: 'C. Paloma, 3, Loc 1',
	postalCode: '13001',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 657 27 44 86',
	latitude: 38.9853479,
	longitude: -3.927276,
	/** Número de reseñas publicado en la ficha. La valoración de la ficha es 4,8. */
	reviewCount: 25,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc3cc99fb4379:0x607db30fbdeac580',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Cafeter%C3%ADa+Flor+de+Tomillo/@38.9853479,-3.927276,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3cc99fb4379:0x607db30fbdeac580!8m2!3d38.9853479!4d-3.927276!16s%2Fg%2F11y223435x?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: de lunes a viernes de 9:00 a 16:00, sábado de 9:30 a 16:00 y
 * domingo cerrado. La ficha avisa de que el domingo 1 de noviembre (Todos los Santos) el horario
 * podría ser diferente.
 */
export const hours = [
	{ day: 'Lunes', service: '9:00 – 16:00', shifts: [{ open: '9:00', close: '16:00' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:00 – 16:00', shifts: [{ open: '9:00', close: '16:00' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:00 – 16:00', shifts: [{ open: '9:00', close: '16:00' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:00 – 16:00', shifts: [{ open: '9:00', close: '16:00' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:00 – 16:00', shifts: [{ open: '9:00', close: '16:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:30 – 16:00', shifts: [{ open: '9:30', close: '16:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', shifts: [], dayOfWeek: 'Sunday' },
] as const;

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];

/** Accesibilidad que publica la ficha. */
export const accesibilidad = ['Acceso para sillas de ruedas'] as const;
