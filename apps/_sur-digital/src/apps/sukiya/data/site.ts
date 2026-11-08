/**
 * Datos de Sukiya (C. Morería, 7, Bajo · 13002 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas y horario semanal.
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/sukiya',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Sukiya',
	category: 'Restaurante asiático',
	streetAddress: 'C. Morería, 7, Bajo',
	postalCode: '13002',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 926 27 35 55',
	latitude: 38.9852952,
	longitude: -3.931693,
	/** Número de reseñas publicado en la ficha. La valoración numérica no se pudo confirmar. */
	reviewCount: 127,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc3000a14aa57:0x2961cc3b1ed9eb45',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Sukiya/@38.9852952,-3.931693,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3000a14aa57:0x2961cc3b1ed9eb45!8m2!3d38.9852952!4d-3.931693!16s%2Fg%2F11yszn8nqy?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: mediodía de 12:00 a 16:30 todos los días; noche de 20:00 a 00:30
 * de lunes a viernes y de 20:00 a 24:00 sábado y domingo. La ficha avisa de que el horario podría
 * ser diferente por el Día de Todos los Santos.
 */
export const hours = [
	{ day: 'Lunes', service: '12:00 – 16:30 · 20:00 – 00:30', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '00:30' }], dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '12:00 – 16:30 · 20:00 – 00:30', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '00:30' }], dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '12:00 – 16:30 · 20:00 – 00:30', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '00:30' }], dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '12:00 – 16:30 · 20:00 – 00:30', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '00:30' }], dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '12:00 – 16:30 · 20:00 – 00:30', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '00:30' }], dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '12:00 – 16:30 · 20:00 – 24:00', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '24:00' }], dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '12:00 – 16:30 · 20:00 – 24:00', shifts: [{ open: '12:00', close: '16:30' }, { open: '20:00', close: '24:00' }], dayOfWeek: 'Sunday' },
] as const;

/** Accesibilidad que publica la ficha. No se leyó en esta ficha, así que va vacía. */
export const accesibilidad: readonly string[] = [];

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];
