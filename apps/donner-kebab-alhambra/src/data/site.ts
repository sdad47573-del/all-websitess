/**
 * Datos de Donner Kebab Alhambra (Rda. Ciruela, 2 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas y horario semanal.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://donner-kebab-alhambra.vercel.app',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Donner Kebab Alhambra',
	category: 'Tienda de kebabs',
	streetAddress: 'Rda. Ciruela, 2',
	postalCode: '13004',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 631 57 88 23',
	latitude: 38.9799974,
	longitude: -3.9276018,
	/** Número de reseñas publicado en la ficha. La valoración numérica no se pudo confirmar. */
	reviewCount: 411,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc3d72250c815:0x26d8cdec6323f2c1',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Donner+Kebab+Alhambra/@38.9799974,-3.9276018,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3d72250c815:0x26d8cdec6323f2c1!8m2!3d38.9799974!4d-3.9276018!16s%2Fg%2F11r6rjss5h?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: comidas desde las 12:30 todos los días; de lunes a jueves cierra
 * a las 0:30 y de viernes a domingo a la 1:00. Los cierres de madrugada se escriben como 00:30 y 01:00.
 */
export const hours = [
	{ day: 'Lunes', service: '12:30 – 00:30', shifts: [{ open: '12:30', close: '00:30' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '12:30 – 00:30', shifts: [{ open: '12:30', close: '00:30' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '12:30 – 00:30', shifts: [{ open: '12:30', close: '00:30' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '12:30 – 00:30', shifts: [{ open: '12:30', close: '00:30' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '12:30 – 01:00', shifts: [{ open: '12:30', close: '01:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '12:30 – 01:00', shifts: [{ open: '12:30', close: '01:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '12:30 – 01:00', shifts: [{ open: '12:30', close: '01:00' }], dayOfWeek: 'Sunday' },
] as const;

/** Accesibilidad que publica la ficha. No se leyó en esta ficha, así que va vacía. */
export const accesibilidad: readonly string[] = [];

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];
