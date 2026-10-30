/**
 * Datos de Panadería Roldán García — Av. del Gran Capitán, 17, Centro, 14008 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Roldán García,
 *   37.8895144,-4.7830596, feature 0xd6cdf6442c6ffa5:0x30de6f2a4b5e074a.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 * - Dulces y calidad: lo que cuentan las reseñas de la propia ficha.
 *
 * La ficha no publica descripción del negocio, web, correo, redes, carta,
 * precios, métodos de pago ni reparto. Esta web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Panadería Roldán García',
	legalName: 'Panadería Roldán García',
	shortName: 'Roldán García',
	mark: 'RG',
	street: 'Av. del Gran Capitán, 17',
	district: 'Centro',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14008',
	country: 'ES',
	phone: '957 49 01 76',
	phoneHref: 'tel:+34957490176',
	rating: 4,
	reviewsCount: 70,
	siteUrl: 'https://panaderia-roldan-garcia.vercel.app',
	geo: { lat: 37.8895144, lng: -4.7830596 },
	featureId: '0xd6cdf6442c6ffa5:0x30de6f2a4b5e074a',
	placeId: 'ChIJpf_GQmTfbA0RSgdeSypv3jA',
	plusCode: '8C9QV6Q8+RQ',
	googleCategory: 'Panadería',
	tagline: 'Pan y dulces en el Gran Capitán',
	description:
		'Panadería Roldán García, en la avenida del Gran Capitán, 17 (Centro, 14008 Córdoba). Panadería de barrio con dulces muy valorados en las reseñas. Abierta de lunes a viernes de 9:00 a 14:30; sábado y domingo cerrado. 4 sobre 5 con 70 reseñas. Teléfono 957 49 01 76.',
	hoursSummary: 'L–V 9:00–14:30 · sábado y domingo cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Rold%C3%A1n+Garc%C3%ADa/@37.8895144,-4.7830596,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf6442c6ffa5:0x30de6f2a4b5e074a!8m2!3d37.8895144!4d-4.7830596!16s%2Fg%2F1z44bm5vb?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJpf_GQmTfbA0RSgdeSypv3jA',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8895144%2C-4.7830596',
	embed: 'https://maps.google.com/maps?q=37.8895144,-4.7830596&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8895144,-4.7830596',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '9:00–14:30' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026: de lunes a viernes de 9:00 a 14:30, solo por la mañana. Sábado y domingo cerrado. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = ['Panadería', 'Dulces', 'Pan del día', 'Centro de Córdoba', 'Solo mañanas'];

export const HIGHLIGHTS = [
	{
		title: 'En el Gran Capitán',
		text: 'La panadería está en el número 17 de la avenida del Gran Capitán, en el Centro de Córdoba, con acceso para sillas de ruedas según la ficha.',
	},
	{
		title: 'Los dulces',
		text: '«De los mejores dulces que he probado en Córdoba», dice una reseña de cinco estrellas. La ficha no publica catálogo ni precios.',
	},
	{
		title: 'Buenas y malas',
		text: 'Otra reseña habla de «buena atención y buena calidad»; una tercera cuenta que no les dijeron ni gracias ni adiós. Se reproducen las dos caras.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan',
				note: 'La ficha la clasifica como panadería. No detalla variedades de pan ni precios.',
			},
			{
				name: 'Dulces',
				note: 'Lo más elogiado en las reseñas: «de los mejores dulces que he probado en Córdoba».',
			},
			{
				name: 'Calidad',
				note: '«Buena atención y buena calidad», resume otra de las reseñas publicadas.',
			},
		],
	},
	{
		title: 'Cómo comprar',
		items: [
			{
				name: 'En el local',
				note: 'De lunes a viernes de 9:00 a 14:30. Sábado y domingo cerrado.',
			},
			{
				name: 'Sin carta publicada',
				note: 'La ficha no publica productos, precios ni métodos de pago; esta web no los inventa.',
			},
			{
				name: 'Sin reparto publicado',
				note: 'No consta servicio de entrega ni plataforma de reparto asociada.',
			},
		],
	},
];

export const RESENAS = [
	{ texto: 'De los mejores dulces que he probado en Córdoba.', valor: 5 },
	{ texto: 'Buena atención y buena calidad.', valor: 4 },
	{ texto: 'Ni gracias ni adiós nos dijeron, nos tiraron la vuelta.', valor: 1 },
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Roldán García?',
		a: 'En la avenida del Gran Capitán, 17, en el Centro de Córdoba (14008). El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 9:00 a 14:30. Sábado y domingo permanece cerrada, según la ficha de Google. El domingo 1 de noviembre (Día de Todos los Santos) la ficha advierte de que el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La ficha la clasifica como panadería y las reseñas destacan sobre todo los dulces. No publica carta, variedades ni precios, así que el surtido del día se consulta en el local.',
	},
	{
		q: '¿Por qué destacan los dulces?',
		a: 'Una reseña de cinco estrellas dice: «De los mejores dulces que he probado en Córdoba». Otra habla de «buena atención y buena calidad». La ficha no publica una lista de dulces.',
	},
	{
		q: '¿Abre los fines de semana?',
		a: 'No. La ficha publica de lunes a viernes de 9:00 a 14:30, con sábado y domingo cerrados.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 957 49 01 76. No consta página web propia, correo ni perfiles sociales, así que esta página no enlaza ninguno.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. También indica que no hay aparcamiento adaptado para sillas de ruedas. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4 sobre 5 con 70 reseñas en Google (octubre de 2026). Hay opiniones muy buenas sobre los dulces y la calidad, y también alguna crítica con el trato, como la que se reproduce en esta página.',
	},
	{
		q: '¿Se puede pagar con tarjeta o pedir a domicilio?',
		a: 'La ficha pública no indica métodos de pago ni servicio de reparto, así que esta web no los afirma. Se consulta en el local o por teléfono.',
	},
];
