/**
 * Datos de Restaurante Alhambra Doner Kebab (C. de la Mata, 8 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas, horario semanal y accesibilidad.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-alhambra-doner-kebab',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Restaurante Alhambra Doner Kebab',
	category: 'Restaurante',
	streetAddress: 'Calle de la Mata, 8',
	postalCode: '13004',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 624 65 41 16',
	latitude: 38.985492,
	longitude: -3.921948,
	/** Número de reseñas publicado en la ficha. La valoración numérica no se pudo confirmar. */
	reviewCount: 158,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc3c48c8ce991:0x952dda1f9341e214',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Alhambra+Doner+Kebab/@38.985492,-3.921948,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3c48c8ce991:0x952dda1f9341e214!8m2!3d38.985492!4d-3.921948!16s%2Fg%2F11tcwlffwq?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: comidas desde las 12:30 todos los días; de lunes a jueves cierra
 * a las 24:00 y de viernes a domingo a la 1:00. El cierre de medianoche se escribe como 00:00.
 */
export const hours = [
	{ day: 'Lunes', service: '12:30 – 00:00', shifts: [{ open: '12:30', close: '00:00' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '12:30 – 00:00', shifts: [{ open: '12:30', close: '00:00' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '12:30 – 00:00', shifts: [{ open: '12:30', close: '00:00' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '12:30 – 00:00', shifts: [{ open: '12:30', close: '00:00' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '12:30 – 01:00', shifts: [{ open: '12:30', close: '01:00' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '12:30 – 01:00', shifts: [{ open: '12:30', close: '01:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '12:30 – 01:00', shifts: [{ open: '12:30', close: '01:00' }], dayOfWeek: 'Sunday' },
] as const;

/** Accesibilidad que publica la ficha. */
export const accesibilidad = ['Acceso para sillas de ruedas'] as const;

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];
