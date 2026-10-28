/**
 * Datos de Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada:
 *   Carretera de Cádiz, 29004 Málaga · 36.695199,-4.4535083 ·
 *   feature 0xd72f9d93a1ffea3:0x4d6e9fbae5783d6d.
 * - Dirección, categoría, valoración, número de reseñas, horario y
 *   accesibilidad: ficha pública de Google, consultada el 28 de octubre de 2026.
 * - Imágenes: tres vistas de Google Street View del panorama asociado a la
 *   ficha (panoid lYMaVc1PIUGL5eSTckXYOw), capturadas en agosto de 2024.
 *
 * Lo que la web NO inventa: la ficha no publica número de portal, teléfono,
 * web, descripción, carta, precios, encargos ni fotografías del perfil. La
 * página se limita a lo que Google publica y a lo que se ve en Street View.
 */

export const BUSINESS = {
	name: 'Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan',
	displayName: 'Ntra. Sra. del Pilar',
	shortName: 'Boutique del Pan',
	mark: 'P',
	street: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	rating: 5,
	reviewsCount: 2,
	siteUrl: 'https://boutique-del-pan-ntra-sra-del-pilar.vercel.app',
	geo: { lat: 36.695199, lng: -4.4535083 },
	featureId: '0xd72f9d93a1ffea3:0x4d6e9fbae5783d6d',
	placeId: 'ChIJo_4fOtn5cg0RbT145bqfbk0',
	googleCategory: 'Panadería',
	tagline: 'Pastelería y boutique del pan en la Carretera de Cádiz',
	description:
		'Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan, en la Carretera de Cádiz, 29004 Málaga. Panadería y pastelería con 5,0 sobre 5 en Google. Horario, mapa y vistas de la calle.',
	hoursSummary: 'Lunes a viernes, 8:00–14:30 y 17:00–20:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Ntra.+Sra.+Del+Pilar+Pasteleria+-+Boutique+Del+Pan/@36.695199,-4.4535083,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9d93a1ffea3:0x4d6e9fbae5783d6d!8m2!3d36.695199!4d-4.4535083!16s%2Fg%2F11cmg1hgbn?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.695199%2C-4.4535083',
	embed: 'https://maps.google.com/maps?q=36.695199,-4.4535083&z=18&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.695199,-4.4535083&heading=266.13',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:00–14:30 · 17:00–20:00' },
	{ day: 'Sábado', value: '8:00–14:30' },
	{ day: 'Domingo', value: '10:30–14:00' },
];

/** Imagen de Google Street View usada en la web. */
export const STREET_VIEW = {
	panoid: 'lYMaVc1PIUGL5eSTckXYOw',
	date: 'agosto de 2024',
};

/** Lo que la ficha y el rótulo permiten afirmar, sin inventar catálogo. */
export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Boutique del pan',
	'Carretera de Cádiz',
	'Dos turnos',
];

export const HIGHLIGHTS = [
	{
		number: '01',
		title: 'Pan y pastelería',
		text: 'El nombre de la ficha anuncia pastelería y el rótulo del local, «Boutique del Pan». La ficha no publica carta ni precios.',
	},
	{
		number: '02',
		title: 'Mañana y tarde',
		text: 'De lunes a viernes abre en dos turnos: de 8:00 a 14:30 y de 17:00 a 20:00. El sábado solo tiene horario de mañana.',
	},
	{
		number: '03',
		title: 'Domingo hasta mediodía',
		text: 'El domingo la ficha marca de 10:30 a 14:00. El 1 de noviembre, Día de Todos los Santos, advierte de que el horario podría ser diferente.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Ntra. Sra. Del Pilar Pasteleria?',
		a: 'En la Carretera de Cádiz, 29004 Málaga. La ficha de Google no publica número de portal. El mapa de esta página abre las coordenadas exactas y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:00 a 14:30 y de 17:00 a 20:00. El sábado abre de 8:00 a 14:30 y el domingo de 10:30 a 14:00. Es el horario publicado en Google; conviene confirmarlo antes de ir, sobre todo en festivos.',
	},
	{
		q: '¿Cierra al mediodía?',
		a: 'Sí, de lunes a viernes cierra entre las 14:30 y las 17:00. El sábado solo abre por la mañana y el domingo cierra a las 14:00.',
	},
	{
		q: '¿Tiene teléfono o página web?',
		a: 'La ficha de Google no publica ni teléfono ni página web, y esta página no inventa ninguno. La forma de contacto es acudir al establecimiento o consultar la ficha pública de Google Maps.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El nombre de la ficha anuncia pastelería y el rótulo del local, «Boutique del Pan». La ficha no publica carta, catálogo ni precios, así que esta página no cita productos concretos ni importes.'
	},
	{
		q: '¿Hacen encargos o tartas por encargo?',
		a: 'No consta en la ficha ni en la información pública consultada. Al no haber teléfono ni web publicados, no se puede confirmar un canal de encargos. Esta página no lo da por hecho.',
	},
	{
		q: '¿Por qué las fotos son de Street View?',
		a: 'Porque la ficha de Google no tiene fotos del perfil. Las tres imágenes son vistas de Google Street View de agosto de 2024. En el rótulo de la esquina se lee «FUENTEMAR · Boutique del Pan», un nombre que puede ser anterior al de la ficha actual.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No publica información sobre aparcamiento adaptado, aseo adaptado ni asientos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 5,0 sobre 5 con 2 reseñas en Google. Aquí solo se reproduce la valoración publicada; el enlace abre la lista de opiniones en Google Maps.',
	},
	{
		q: '¿El negocio se llama Fuentemar o Ntra. Sra. Del Pilar?',
		a: 'La ficha de Google se llama Ntra. Sra. Del Pilar Pasteleria - Boutique Del Pan. En la vista de Street View de agosto de 2024 el rótulo de esa esquina dice «FUENTEMAR · Boutique del Pan». El rótulo puede ser anterior al nombre actual de la ficha; con los datos públicos no se puede confirmar el cambio.',
	},
];
