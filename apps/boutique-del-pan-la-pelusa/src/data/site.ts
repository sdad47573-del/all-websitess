/**
 * Datos de Boutique del Pan la Pelusa C.B. — Plaza Basconia, 1, 1ºE
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Boutique del Pan la Pelusa C.B.,
 *   36.7227785,-4.4371933, feature 0xd72f7a0428e59a5:0x3b6e75d15f271808.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   reseñas y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta ni precios. La web no inventa ninguno de esos datos; el surtido
 * que se cita es el que nombran las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Boutique del Pan la Pelusa C.B.',
	shortName: 'La Pelusa',
	mark: 'P',
	street: 'Plaza Basconia, 1, 1ºE',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://boutique-del-pan-la-pelusa.vercel.app',
	geo: { lat: 36.7227785, lng: -4.4371933 },
	featureId: '0xd72f7a0428e59a5:0x3b6e75d15f271808',
	placeId: 'ChIJpVmOQqD3cg0RCBgnX9F1bjs',
	plusCode: '8C8QPHF7+44',
	googleCategory: 'Panadería',
	phone: '952 61 45 99',
	phoneHref: 'tel:+34952614599',
	tagline: 'El pan de siempre en Bailén-Miraflores',
	description:
		'Boutique del Pan la Pelusa C.B., en la Plaza Basconia, 1 (Bailén-Miraflores, 29010 Málaga). Panadería de barrio con pan y empanadas, según las reseñas de su ficha de Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Boutique+del+Pan+la+Pelusa+C.B./@36.7227785,-4.4371933,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a0428e59a5:0x3b6e75d15f271808!8m2!3d36.7227785!4d-4.4371933!16s%2Fg%2F1tz77bb3?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4282489837780932616',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7227785%2C-4.4371933',
	embed: 'https://maps.google.com/maps?q=36.7227785,-4.4371933&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7227785,-4.4371933',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.3,
	count: 20,
	label: '4,3',
};

/**
 * Horario que publica la ficha. Abre solo por la mañana todos los días; el
 * domingo cierra media hora antes.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:30–14:30' },
	{ dia: 'Martes', horas: '8:30–14:30' },
	{ dia: 'Miércoles', horas: '8:30–14:30' },
	{ dia: 'Jueves', horas: '8:30–14:30' },
	{ dia: 'Viernes', horas: '8:30–14:30' },
	{ dia: 'Sábado', horas: '8:30–14:30' },
	{ dia: 'Domingo', horas: '8:30–14:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Panadería de barrio',
	'Pan del día',
	'Empanadas',
	'Abierta los 7 días',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan, lo primero',
		text: 'Las reseñas de la ficha repiten el pan: «pan exquisito y de buenísima calidad» y «el pan buenísimo». Es lo que más se valora del local.',
	},
	{
		title: 'Empanadas',
		text: 'Una de las opiniones publicadas recomienda probar «sus estupendas empanadas». La ficha no detalla el resto del surtido ni los precios.',
	},
	{
		title: 'Horario de mañanas',
		text: 'Abre todos los días de 8:30 a 14:30, y el domingo hasta las 14:00. No publica turno de tarde ni día de cierre.',
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'Probad sus estupendas empanadas.', valor: 4 },
	{ texto: 'Muy buen trato y el pan buenísimo.', valor: 5 },
	{ texto: 'Pan exquisito y de buenísima calidad.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Boutique del Pan la Pelusa?',
		a: 'En la Plaza Basconia, 1, 1ºE, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica: de lunes a sábado de 8:30 a 14:30, y el domingo de 8:30 a 14:00. No figura ningún día de cierre ni turno de tarde. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. Según el horario publicado en Google, el domingo abre de 8:30 a 14:00.',
	},
	{
		q: '¿Se puede llamar por teléfono?',
		a: 'Sí. El teléfono que publica la ficha es el 952 61 45 99, y esta página lo enlaza para llamar directamente desde el móvil.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería. Las reseñas hablan del pan y de las empanadas; no publica carta completa ni precios, así que esta página no los detalla.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene una valoración de 4,3 sobre 5 con 20 reseñas en el momento de consultarla (octubre de 2026). El estado actualizado y las reseñas completas se ven en Google Maps.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
