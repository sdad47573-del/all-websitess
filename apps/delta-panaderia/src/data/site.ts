/**
 * Datos de Delta Panadería — C. Blas de Lezo, 3, Loc 1 (Bailén-Miraflores,
 * 29011 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Delta Panadería, 36.727455,-4.4350511,
 *   feature 0xd72f7bd47c57b3f:0xb39d17c46683a51e.
 * - Dirección, teléfono, valoración, reseñas, horario, accesibilidad, descripción
 *   del negocio y fotos: ficha pública de Google (octubre de 2026).
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios. El mostrador
 * recoge solo lo que enumera la descripción del negocio y lo que se ve en las
 * fotos del perfil, sin importes. «La tarta de la madre de Cris» aparece en el
 * cartel de la vitrina como producto «de venta aquí»; no se atribuye a Delta.
 */

export const BUSINESS = {
	name: 'Delta Panadería',
	shortName: 'Delta',
	mark: 'D',
	street: 'C. Blas de Lezo, 3, Loc 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	phone: '641 52 64 04',
	phoneHref: 'tel:+34641526404',
	rating: 4.9,
	reviewsCount: 42,
	siteUrl: 'https://delta-panaderia.vercel.app',
	geo: { lat: 36.727455, lng: -4.4350511 },
	featureId: '0xd72f7bd47c57b3f:0xb39d17c46683a51e',
	placeId: 'ChIJP3vFR733cg0RHqWDZsQXnbM',
	cid: '12942527036433605918',
	googleCategory: 'Panadería',
	tagline: 'Panadería de barrio con obrador, tartas y despensa en Bailén-Miraflores',
	description:
		'Delta Panadería, en C. Blas de Lezo, 3, Loc 1 (Bailén-Miraflores, 29011 Málaga). Pan tradicional, especialidades integrales, tartas y despensa. 4,9 sobre 5 en Google con 42 reseñas. Teléfono 641 52 64 04.',
	hoursSummary: 'L–V 6:30–22:00 · S y D 8:00–22:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Delta+Panader%C3%ADa/@36.727455,-4.4350511,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7bd47c57b3f:0xb39d17c46683a51e!8m2!3d36.727455!4d-4.4350511!16s%2Fg%2F11wxjpv8tz?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=1294168631946965846',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.727455%2C-4.4350511',
	embed: 'https://maps.google.com/maps?q=36.727455,-4.4350511&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.727455,-4.4350511',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '6:30–22:00' },
	{ day: 'Sábado', value: '8:00–22:00' },
	{ day: 'Domingo', value: '8:00–22:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) el horario podría variar; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Muy buen sitio para comprar y comer dulces.',
	},
	{
		rating: 5,
		text: 'Se nota el esfuerzo y la dedicación.',
	},
	{
		rating: 5,
		text: 'En resumen, un acierto total que el barrio agradece.',
	},
];

/** Lo que la descripción del negocio y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Pan tradicional',
	'Especialidades integrales',
	'Productos de temporada',
	'Tartas',
	'Despensa y bebidas',
];

export const HIGHLIGHTS = [
	{
		title: 'El horno',
		text: 'Una de las fotos del perfil enseña el obrador: un horno Nerone con bandejas de barras y bolas de pan recién hechas.',
	},
	{
		title: 'El mostrador de tartas',
		text: 'La vitrina tiene quesadas, tartas de queso, tartas de fruta y el cartel de «La tarta de la madre de Cris», que se vende aquí.',
	},
	{
		title: 'La despensa',
		text: 'Nevera de refrescos y zumos, y estanterías con galletas, cacao, conservas, aceite y productos de uso diario. La panadería también hace de tienda.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan tradicional',
				note: 'La descripción de la ficha lo cita como la base de la casa; en el obrador se ven barras y bolas.',
			},
			{
				name: 'Especialidades integrales',
				note: 'También anunciadas en la ficha del negocio.',
			},
			{
				name: 'Productos de temporada',
				note: 'La ficha habla de panes y productos que cambian con la temporada.',
			},
		],
	},
	{
		title: 'El mostrador de tartas',
		items: [
			{
				name: 'Tarta de queso',
				note: 'En la vitrina, en formato redondo y con la superficie dorada.',
			},
			{
				name: 'Tartas de fruta',
				note: 'Individuales de fresa, kiwi y melocotón, junto a las tartaletas.',
			},
			{
				name: 'La tarta de la madre de Cris',
				note: 'El cartel de la vitrina dice «de venta aquí»; se vende en el local.',
			},
		],
	},
	{
		title: 'La despensa',
		items: [
			{
				name: 'Refrescos y zumos',
				note: 'Nevera vertical con latas, botellas y zumos en el interior del local.',
			},
			{
				name: 'Galletas y cacao',
				note: 'Estanterías con galletas, cacao soluble y dulces envasados.',
			},
			{
				name: 'Conservas y aceite',
				note: 'Productos de despensa y de uso diario, en las fotos del perfil.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Delta Panadería?',
		a: 'En la calle Blas de Lezo, 3, local 1, en el barrio de Bailén-Miraflores (29011 Málaga). El local está en un pasaje cubierto. El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 6:30 a 22:00. El sábado y el domingo, de 8:00 a 22:00. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono, en el 641 52 64 04. La ficha de Google no publica página web, correo ni redes sociales.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan tradicional, especialidades integrales y productos de temporada, además de tartas y una despensa con refrescos, zumos, galletas, conservas y aceite, según la descripción del negocio y las fotos del perfil. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Venden la tarta de la madre de Cris?',
		a: 'En la vitrina hay un cartel que dice «La tarta de la madre de Cris, de venta aquí». Es un producto que se vende en el local; la ficha no indica precio ni disponibilidad, así que conviene llamar antes.',
	},
	{
		q: '¿Se puede desayunar o comer allí?',
		a: 'La ficha describe una panadería con despensa y bebidas, pero no publica mesas, terraza ni servicio de cafeteria, así que esta página no lo afirma. Para salir de dudas, llama al 641 52 64 04.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso para sillas de ruedas y aseo adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,9 sobre 5 con 42 reseñas en Google. Las tres que se citan en esta página son las destacadas de la ficha y todas son de cinco estrellas.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
];
