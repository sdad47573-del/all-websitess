/**
 * Datos de Restaurante Takara (C. Pozo Concejo, 4 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, horario semanal,
 * accesibilidad y reseñas destacadas. La ficha no publica precios, así que no se reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-takara',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Restaurante Takara',
	category: 'Restaurante chino',
	streetAddress: 'Calle Pozo Concejo, 4',
	postalCode: '13004',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	phone: '+34 926 25 11 57',
	latitude: 38.9849624,
	longitude: -3.9217331,
	/** Valoración de la ficha en la fecha de consulta: 4,4 sobre 5 con 995 reseñas. */
	rating: 4.4,
	reviewCount: 995,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc340acf5a4e1:0x3b9475310e5e4067',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Takara/@38.9849624,-3.9217331,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc340acf5a4e1:0x3b9475310e5e4067!8m2!3d38.9849624!4d-3.9217331!16s%2Fg%2F1tq8kx4g?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario que publica la ficha: los mismos dos turnos todos los días, lunes incluido.
 * La ficha añade un aviso para el Día de Todos los Santos.
 */
export const hours = [
	{ day: 'Lunes', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Monday' },
	{ day: 'Martes', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Tuesday' },
	{ day: 'Miércoles', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Wednesday' },
	{ day: 'Jueves', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Thursday' },
	{ day: 'Viernes', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Friday' },
	{ day: 'Sábado', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Saturday' },
	{ day: 'Domingo', service: '11:30 – 16:30 · 19:30 – 23:30', dayOfWeek: 'Sunday' },
] as const;

/** Accesibilidad que publica la ficha. */
export const accesibilidad = ['Acceso para sillas de ruedas'] as const;

/** Reseñas literales de la ficha. */
export const resenas = [
	{ texto: 'Muy bien, menú barato y cantidades generosas, muy atentos los camareros.' },
	{ texto: 'Casi todos los platos que pedimos tenían el típico hielo seco que echa humo.' },
] as const;
