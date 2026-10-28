/**
 * Datos de Panadería - confitería Elepan — C. la Defensa, 4 (Palma-Palmilla,
 * 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería - confitería Elepan,
 *   36.7334241,-4.4359827, feature 0xd72f7a8f18282ad:0xf91e36da507b8e20.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, carta, precios,
 * web propia, correo ni redes sociales. El mostrador recoge solo lo que
 * muestran las fotos del perfil y lo que cuentan las reseñas, sin importes
 * (aunque algunos carteles de las fotos lleven precio, no se reproducen).
 */

export const BUSINESS = {
	name: 'Panadería - confitería Elepan',
	shortName: 'Elepan',
	mark: 'E',
	street: 'C. la Defensa, 4',
	district: 'Palma-Palmilla',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '627 84 42 51',
	phoneHref: 'tel:+34627844251',
	rating: 4.2,
	reviewsCount: 65,
	siteUrl: 'https://panaderia-confiteria-elepan.vercel.app',
	geo: { lat: 36.7334241, lng: -4.4359827 },
	featureId: '0xd72f7a8f18282ad:0xf91e36da507b8e20',
	placeId: 'ChIJrYKC8aj3cg0RII57UNo2Hvk',
	googleCategory: 'Panadería',
	tagline: 'Panadería, confitería y tienda en Palma-Palmilla',
	description:
		'Panadería - confitería Elepan, en la calle la Defensa, 4 (Palma-Palmilla, 29011 Málaga). Pan, dulces, helados y productos de tienda. Teléfono 627 84 42 51. 4,2 sobre 5 en Google.',
	hoursSummary: 'L–J 8:00–15:00 y 17:00–20:30 · V–D 8:00–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+-+confiter%C3%ADa+Elepan/@36.7334241,-4.4359827,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7a8f18282ad:0xf91e36da507b8e20!8m2!3d36.7334241!4d-4.4359827!16s%2Fg%2F11b6jbhzft?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=17950845476026420768',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7334241%2C-4.4359827',
	embed: 'https://maps.google.com/maps?q=36.7334241,-4.4359827&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7334241%2C-4.4359827',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '8:00–15:00 · 17:00–20:30' },
	{ day: 'Viernes', value: '8:00–15:00' },
	{ day: 'Sábado', value: '8:00–15:00' },
	{ day: 'Domingo', value: '8:00–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Confitería',
	'Roscones de Reyes',
	'Troncos de Navidad',
	'Helados',
	'Productos de tienda',
];

export const HIGHLIGHTS = [
	{
		title: 'Panadería y confitería',
		text: 'El rótulo rojo de la fachada anuncia «Panadería elepan Confitería», y la vitrina está llena de pasteles, napolitanas y brazos de gitano.',
	},
	{
		title: 'También tienda',
		text: 'Dentro hay estanterías con vinos, conservas, dulces y productos envasados, además de una nevera de helados. Una reseña lo resume: «además de pan y dulces tiene otras cosas».',
	},
	{
		title: 'Dulces de Navidad',
		text: 'En las fotos del perfil aparecen roscones de Reyes y troncos de Navidad decorados, además de tartas heladas de la campaña.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan y bollería',
		items: [
			{
				name: 'Pan del día',
				note: '«Muy buen pan, todo fresquito del día», según una de las reseñas de Google.',
			},
			{
				name: 'Napolitanas',
				note: 'En la vitrina, junto a los pasteles de nata y los brazos de gitano.',
			},
			{
				name: 'Roscones de Reyes',
				note: 'Con nata y fruta escarchada, en la bandeja del perfil.',
			},
		],
	},
	{
		title: 'Confitería',
		items: [
			{
				name: 'Brazos de gitano',
				note: 'De nata y de chocolate, en la vitrina del local.',
			},
			{
				name: 'Pasteles de nata',
				note: 'Con la masa dorada y el azúcar por encima.',
			},
			{
				name: 'Troncos de Navidad',
				note: 'Decorados con chocolate, árboles y Papá Noel, en las fotos del perfil.',
			},
		],
	},
	{
		title: 'La tienda',
		items: [
			{
				name: 'Helados',
				note: 'Nevera y carteles de helados en el escaparate, según las fotos.',
			},
			{
				name: 'Vinos y conservas',
				note: 'Estanterías con botellas, latas y productos envasados.',
			},
			{
				name: 'Dulces y aperitivos',
				note: 'La ficha no publica surtido ni precios; cambia a lo largo del día.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería - confitería Elepan?',
		a: 'En la calle la Defensa, 4, en el barrio de Palma-Palmilla (29011 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 8:00 a 15:00 y de 17:00 a 20:30. El viernes, el sábado y el domingo solo abre por la mañana, de 8:00 a 15:00. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 627 84 42 51. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bollería, pastelería y productos de tienda. En las fotos del perfil aparecen roscones de Reyes, napolitanas, pasteles de nata, brazos de gitano, troncos de Navidad, tartas heladas y estanterías con vinos, conservas, dulces y aperitivos. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Venden helados?',
		a: 'En las fotos del escaparate hay carteles de helados y dentro se ve una nevera. La ficha no detalla marcas, formatos ni precios.',
	},
	{
		q: '¿Hacen roscones y troncos de Navidad?',
		a: 'Sí. En la galería del perfil hay roscones de Reyes con nata y fruta escarchada, y troncos de Navidad decorados. La ficha no indica cómo se encargan; para eso, llama al 627 84 42 51.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,2 sobre 5 con 65 reseñas en Google, que la clasifica como panadería. Las reseñas hablan del buen trato, del pan fresco y de que, además de pan y dulces, hay otras cosas de tienda.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca aparcamiento adaptado para sillas de ruedas, pero no publica información sobre el acceso al local, el mostrador o el aseo, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
