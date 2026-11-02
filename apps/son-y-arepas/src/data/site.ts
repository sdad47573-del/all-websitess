/**
 * Datos de Son y Arepas (C. de Las Cañas, 31 · 13003 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, número de reseñas, horario semanal y una reseña destacada.
 * La ficha no publica datos de accesibilidad en la lectura de esta fecha, así que no se inventan.
 */

export const site = {
	siteUrl: 'https://son-y-arepas.vercel.app',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Son y Arepas',
	category: 'Snack bar',
	streetAddress: 'Calle de Las Cañas, 31',
	postalCode: '13003',
	city: 'Ciudad Real',
	phone: '+34 614 05 21 98',
	region: 'Castilla-La Mancha',
	country: 'ES',
	latitude: 38.988952,
	longitude: -3.923731,
	/** Número de reseñas que muestra la ficha en la fecha de consulta. */
	reviewCount: 46,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc3182c082529:0xb8953f3621a35c22',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Son+y+Arepas/@38.988952,-3.923731,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3182c082529:0xb8953f3621a35c22!8m2!3d38.988952!4d-3.923731!16s%2Fg%2F11yy16yvqc?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha. Lunes a viernes con dos turnos, sábado solo mañana y domingo cerrado.
 * La ficha añade un aviso para el Día de Todos los Santos.
 */
export const hours = [
	{ day: 'Lunes', service: '9:00 – 15:00 · 19:30 – 22:30', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '9:00 – 15:00 · 19:30 – 22:30', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '9:00 – 15:00 · 19:30 – 22:30', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '9:00 – 15:00 · 19:30 – 22:30', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '9:00 – 15:00 · 19:30 – 22:30', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '9:00 – 15:00', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: 'Cerrado', dayOfWeek: 'Sunday' },
] as const;

/** Reseña literal de la ficha. */
export const resenas = [{ texto: 'Hemos estado varias veces y las arepas son espectaculares.' }] as const;

/** La ficha no publica accesibilidad en la lectura de esta fecha. */
export const accesibilidad: string[] = [];
