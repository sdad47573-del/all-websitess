/**
 * Datos de Cafetería El Rinconcito (C. Gregorio Marañón · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 1 de noviembre de 2026:
 * nombre, dirección, categoría, número de reseñas y accesibilidad. La respuesta leída no traía
 * teléfono ni horario, así que no se publican. La ficha no publica precios, así que no se
 * reproduce ninguno.
 */

export const site = {
	siteUrl: 'https://www.sur-digital.com/cafeteria-el-rinconcito',
	consultado: '1 de noviembre de 2026',
} as const;

export const business = {
	name: 'Cafetería El Rinconcito',
	category: 'Bar restaurante',
	streetAddress: 'Calle Gregorio Marañón',
	postalCode: '13005',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	latitude: 38.9916583,
	longitude: -3.9352201,
	/** Número de reseñas publicado en la ficha. La valoración numérica no se pudo confirmar. */
	reviewCount: 101,
	/** Feature id de la ficha de Google Maps. Lo lee `scripts/fetch-maps-photos.mjs`. */
	featureId: '0xd6bc3529dcaac63:0x8bf225fabbc144c5',
} as const;

export const mapsUrl =
	'https://www.google.com/maps/place/Cafeter%C3%ADa+El+Rinconcito/@38.9916583,-3.9352201,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3529dcaac63:0x8bf225fabbc144c5!8m2!3d38.9916583!4d-3.9352201!16s%2Fg%2F11h99lq_ls?hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/** La ficha leída no trae horario, así que la tabla queda vacía y la web no la muestra. */
export const hours: readonly {
	day: string;
	service: string;
	shifts: readonly { open: string; close: string }[];
	dayOfWeek: string;
}[] = [];

/** Accesibilidad que publica la ficha. */
export const accesibilidad = ['Acceso para sillas de ruedas'] as const;

/** Reseñas literales de la ficha. No se encontraron en la respuesta leída, así que va vacío. */
export const resenas: readonly { texto: string }[] = [];
