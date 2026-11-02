/**
 * Datos de Bar Babylon CR (C. Palma, 9 · 13001 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, categoría, valoración con número de reseñas, horario semanal, accesibilidad
 * y una reseña destacada. La ficha no publica teléfono en la respuesta, así que no se inventa.
 */

export const site = {
	siteUrl: 'https://bar-babylon-cr.vercel.app',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Bar Babylon CR',
	category: 'Bar restaurante',
	streetAddress: 'Calle Palma, 9',
	postalCode: '13001',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	latitude: 38.983663,
	longitude: -3.924518,
	/** Valoración de la ficha en la fecha de consulta: 4,3 sobre 5 con 121 reseñas. */
	rating: 4.3,
	reviewCount: 121,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc346d3edf3bb:0x3756f48feedb8749',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Babylon+CR/@38.983663,-3.924518,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc346d3edf3bb:0x3756f48feedb8749!8m2!3d38.983663!4d-3.924518!16s%2Fg%2F11ny1krsg7?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha. El cierre a medianoche se escribe como 00:00 en los datos
 * estructurados.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', open: null, close: null, dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '12:00 – 00:30', open: '12:00', close: '00:30', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '12:00 – 23:30', open: '12:00', close: '23:30', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '12:00 – 23:30', open: '12:00', close: '23:30', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '12:00 – 23:30', open: '12:00', close: '23:30', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '12:00 – 23:30', open: '12:00', close: '23:30', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '12:00 – 24:00', open: '12:00', close: '00:00', dayOfWeek: 'Sunday' },
] as const;

/** Accesibilidad que publica la ficha: entrada y aparcamiento adaptados para sillas de ruedas. */
export const accesibilidad = ['Acceso para sillas de ruedas', 'Aparcamiento adaptado para sillas de ruedas'] as const;

/** Reseña destacada en la ficha, citada literal. */
export const resenas = [
	{ texto: 'Cerveza fresquita y Estrella Galicia, no se puede pedir más.' },
] as const;
