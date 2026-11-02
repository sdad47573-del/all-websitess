/**
 * Datos de «Burguer Cricket» — Av. Tablas de Daimiel, 7, 13004 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9787531, -3.9265699, feature
 *   0xd6bc33df0c5d28d:0x4e395a5e47368ed2 (nombre, dirección, categorías,
 *   teléfono, valoración, accesibilidad y Plus Code), consultada el 2 de
 *   noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - Google lo clasifica como hamburguesería, restaurante americano y restaurante
 *   de comida rápida. La ficha no publica horario, carta, precios ni web propia.
 * - La media es 3,9 sobre 5 con 669 reseñas y hay opiniones muy distintas: se
 *   recogen tanto la alabanza a la hamburguesa de buey como las quejas por la
 *   espera y por la salsa de las ensaladas.
 * - Los platos de esta página son los que se ven en las fotos del perfil y los
 *   que nombran las reseñas.
 */

export const BUSINESS = {
	name: 'Burguer Cricket',
	fullName: 'Burguer Cricket',
	mark: 'BC',
	street: 'Av. Tablas de Daimiel, 7',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://burguer-cricket.vercel.app',
	geo: { lat: 38.9787531, lng: -3.9265699 },
	featureId: '0xd6bc33df0c5d28d:0x4e395a5e47368ed2',
	placeId: 'ChIJjdLF8D3Daw0R0o42R15aOU4',
	channel: '/g/1ptyqpv0m',
	plusCode: '8CCRX3HF+G9 Ciudad Real',
	category: 'Hamburguesería',
	categories: ['Hamburguesería', 'Restaurante americano', 'Restaurante de comida rápida'],
	phone: '926 25 34 79',
	phoneHref: 'tel:+34926253479',
	tagline: 'Hamburguesas, platos combinados y terraza en la Avenida Tablas de Daimiel',
	description:
		'Burguer Cricket, hamburguesería y restaurante americano en la Avenida Tablas de Daimiel, 7, de Ciudad Real (13004). Hamburguesas de buey, platos combinados, nachos, ensaladas y terraza. 3,9 sobre 5 con 669 reseñas en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Burguer+Cricket/@38.9787531,-3.9265699,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc33df0c5d28d:0x4e395a5e47368ed2!8m2!3d38.9787531!4d-3.9265699!16s%2Fg%2F1ptyqpv0m',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9787531%2C-3.9265699',
	embed: 'https://maps.google.com/maps?q=38.9787531,-3.9265699&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9787531%2C-3.9265699',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.9,
	count: 669,
	label: '3,9',
};

/**
 * La ficha no publica horario, así que la tabla recoge lo que sí consta: el
 * teléfono y la accesibilidad.
 */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Teléfono', value: '926 25 34 79' },
	{ day: 'Entrada y aseo', value: 'Adaptados para sillas de ruedas' },
	{ day: 'Terraza', value: 'Mesas rojas en el porche, según las fotos' },
];

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura, así que esta web no puede confirmar cuándo abre. Lo que sí marca: entrada, aseo y asientos adaptados para sillas de ruedas. Para horario y mesa, llama al 926 25 34 79.';

export const SERVICIOS = [
	'Hamburguesería',
	'Restaurante americano',
	'Comida rápida',
	'Hamburguesa de buey',
	'Platos combinados',
	'Terraza',
	'Acceso adaptado',
	'Aseo adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Hamburguesa de buey',
		text: 'Es lo que más se repite en las reseñas: «Su hamburguesa de buey está buenísima». En la foto del perfil aparece montada en pan rústico, con cebolla morada, tomate, chutney y lechuga. La otra hamburguesa de las fotos lleva huevo frito, lechuga y tomate.',
	},
	{
		title: 'Platos combinados y terraza',
		text: 'En el cristal de la fachada se lee «platos combinados», y las fotos enseñan el formato: patatas fritas, zanahoria rallada, pepinillos, mayonesa y tomate. Fuera, bajo el porche, hay una fila de mesas y sillas rojas de plástico que por la noche se llena.',
	},
	{
		title: 'Abierto hasta la noche',
		text: 'Las fotos de la fachada son nocturnas, con el rótulo de «burguer cricket» encendido y gente esperando en la puerta. Es un local de avenida, con escaparate grande, pared de piedra negra y un panel de menú luminoso sobre la barra.',
	},
	{
		title: 'Una media de 3,9',
		text: '3,9 sobre 5 con 669 reseñas (2 de noviembre de 2026). Hay de todo: una reseña de cuatro estrellas alaba la hamburguesa de buey, otra de tres dice que las hamburguesas están buenas pero que las ensaladas llevan demasiada salsa, y otras se quejan de la espera. La web no escoge solo la buena.',
	},
];

export const MENU = [
	{
		title: 'Hamburguesas',
		items: [
			{
				name: 'Hamburguesa de buey',
				note: 'En pan rústico, con cebolla morada, tomate, chutney y lechuga',
			},
			{
				name: 'Hamburguesa con huevo',
				note: 'Con huevo frito, lechuga y tomate, en pan con sésamo',
			},
			{
				name: 'Hamburguesa de la casa',
				note: 'La ficha no publica la carta completa: se pregunta en la barra',
			},
		],
	},
	{
		title: 'Platos combinados',
		items: [
			{
				name: 'Combinado con patatas',
				note: 'Con patatas fritas, zanahoria rallada, pepinillos y mayonesa',
			},
			{
				name: 'Combinado de la pizarra',
				note: 'El cartel de la fachada anuncia platos combinados; cambian a diario',
			},
		],
	},
	{
		title: 'Para compartir',
		items: [
			{
				name: 'Nachos con queso',
				note: 'Con queso fundido por encima y tres salsas al lado',
			},
			{
				name: 'Patatas fritas',
				note: 'Ración para acompañar la hamburguesa o el combinado',
			},
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{
				name: 'Ensalada de atún',
				note: 'Con aceitunas, tomate, cebolla y atún; una reseña le pone pega a la salsa',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Burguer Cricket?',
		a: 'En la Avenida Tablas de Daimiel, 7, de Ciudad Real (13004), con Plus Code 8CCRX3HF+G9 y coordenadas 38.9787531, -3.9265699. Es un local de avenida, con escaparate grande y terraza bajo el porche. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 926 25 34 79, el número publicado en la ficha del establecimiento. Sirve para preguntar horario, encargar para llevar o reservar mesa. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google no publica horario de apertura: no hay ninguna franja con horas. Como los datos públicos no lo dicen, esta página no lo inventa. Las fotos del perfil son nocturnas, con el rótulo encendido, pero eso no confirma un horario. Para saberlo, llama al 926 25 34 79.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Google lo clasifica como hamburguesería, restaurante americano y restaurante de comida rápida. Las fotos del perfil enseñan hamburguesa de buey en pan rústico, hamburguesa con huevo frito, platos combinados con patatas y zanahoria rallada, nachos con queso, ensalada de atún y patatas fritas.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. El local no tiene carta colgada en su ficha de Google ni web propia, así que esta página no publica importes. Los platos que aparecen son los de las fotos y los que nombran las reseñas, sin precios. Para el precio del día, llama al 926 25 34 79.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La foto del perfil enseña una fila de mesas y sillas rojas de plástico bajo el porche del edificio, junto a la fachada de piedra negra. Es terraza cubierta, a pie de avenida.',
	},
	{
		q: '¿Se puede comer dentro?',
		a: 'Sí. El interior aparece en las fotos: mesas de madera con sillas marrones, barra larga del mismo tono, nevera de refrescos, panel de menú luminoso sobre la barra y paredes blancas con láminas enmarcadas.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica información sobre aparcamiento adaptado. Si necesitas un detalle concreto, llama antes al 926 25 34 79.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,9 sobre 5 con 669 reseñas (consultado el 2 de noviembre de 2026). Las opiniones están repartidas: una reseña de cuatro estrellas dice «Su hamburguesa de buey está buenísima», otra de tres apunta que las hamburguesas están buenas pero las ensaladas llevan demasiada salsa, y hay quejas por la espera en el servicio.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio local.',
	},
];

export const LEGAL = {
	razonSocial: 'Burguer Cricket',
	actualizado: 'Noviembre de 2026',
};
