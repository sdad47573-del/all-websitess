/**
 * Datos de Kebab Andrómeda — C. Andrómeda, 15, local 2
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Kebab Andrómeda,
 *   36.7231184,-4.4770152, feature 0xd72f7677b1d20ff:0x2b91c68e50a081ee.
 * - Nombre, dirección, categorías, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: teléfono, página web, redes sociales, carta ni
 * precios. La web no inventa esos datos ni un número de contacto. El surtido que
 * se cita es el que nombran la descripción y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Kebab Andrómeda',
	shortName: 'Andrómeda',
	mark: 'KA',
	street: 'C. Andrómeda, 15, local 2',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://kebab-andromeda.vercel.app',
	geo: { lat: 36.7231184, lng: -4.4770152 },
	featureId: '0xd72f7677b1d20ff:0x2b91c68e50a081ee',
	placeId: 'ChIJ_yAde2f3cg0R7oGgUI7GkSs',
	plusCode: '8C8QPGFF+65',
	googleCategory: 'Restaurante de comida rápida · Cocina turca',
	/** La ficha no publica teléfono. */
	phone: '',
	phoneHref: '',
	tagline: 'Comida turca, kebab y pizza turca en Teatinos',
	description:
		'Kebab Andrómeda, restaurante de comida rápida turca en C. Andrómeda, 15, local 2 (Teatinos-Universidad, 29010 Málaga). Kebab, pizza turca y salsas de yogur y picante, todos los días.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Kebab+Andr%C3%B3meda/@36.7231184,-4.4770152,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7677b1d20ff:0x2b91c68e50a081ee!8m2!3d36.7231184!4d-4.4770152!16s%2Fg%2F11g0sryxbv?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=3139508729794298350',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7231184%2C-4.4770152',
	embed: 'https://maps.google.com/maps?q=36.7231184,-4.4770152&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7231184,-4.4770152',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 669,
	label: '4,7',
};

/** Horario que publica la ficha: dos turnos, todos los días. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–16:00 · 20:00–1:00' },
	{ dia: 'Martes', horas: '13:00–16:00 · 20:00–1:00' },
	{ dia: 'Miércoles', horas: '13:00–16:00 · 20:00–1:00' },
	{ dia: 'Jueves', horas: '13:00–16:00 · 20:00–1:00' },
	{ dia: 'Viernes', horas: '13:00–16:00 · 20:00–1:00' },
	{ dia: 'Sábado', horas: '13:00–16:00 · 20:00–1:00' },
	{ dia: 'Domingo', horas: '13:00–16:00 · 20:00–1:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida turca',
	'Kebab',
	'Pizza turca',
	'Salsa de yogur',
	'Salsa picante',
	'Aseo adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina turca',
		text: 'La ficha se presenta con una frase: «la auténtica comida turca con un toque diferente». Google lo clasifica como restaurante de comida rápida y restaurante.',
	},
	{
		title: 'Kebab y pizza turca',
		text: 'Son los dos platos que nombran las reseñas. Una de ellas lo dice sin rodeos: «la comida buenísima, sobre todo la pizza turca».',
	},
	{
		title: 'Abierto hasta la 1:00',
		text: 'Trabaja dos turnos todos los días: de 13:00 a 16:00 y de 20:00 a 1:00. No publica día de cierre.',
	},
];

/**
 * Productos y precios del cartel que aparece en las fotos del local (panel del
 * interior y cartel iluminado de la fachada). La ficha no tiene carta propia, y
 * la pizza turca, que sí citan las reseñas, no figura en ese panel.
 */
export const MENU = [
	{
		title: 'Rollos',
		items: [
			{
				name: 'Rollo Kebab',
				price: '5,50 €',
				note: 'el clásico de la casa; en el cartel va con patatas y bebida',
			},
			{
				name: 'Superdürüm',
				price: '7,50 €',
				note: 'la versión grande del rollo, también con patatas y bebida',
			},
			{
				name: 'Rollo con huevo y queso',
				price: '5,50 €',
				note: 'con patatas y bebida, según el cartel',
			},
			{
				name: 'Rollo Nuggets',
				price: '7,50 €',
				note: 'relleno de nuggets de pollo, con patatas y bebida',
			},
			{
				name: 'Rollo Cheddar Burger',
				price: '8,50 €',
				note: 'carne de hamburguesa y cheddar, con patatas y bebida',
			},
			{
				name: 'Rollo Falafel Vegetal',
				price: '5,50 €',
				note: 'la opción vegetal del cartel, con patatas y bebida',
			},
		],
	},
	{
		title: 'Hamburguesas y hot dog',
		items: [
			{
				name: 'Big Burger',
				price: '7,50 €',
				note: 'con patatas y bebida',
			},
			{
				name: 'Chicken Burger',
				price: '7,50 €',
				note: 'de pollo, con patatas y bebida',
			},
			{
				name: 'Big Double',
				price: '8,50 €',
				note: 'doble carne, con patatas y bebida',
			},
			{
				name: 'Hot Dog',
				price: '7,00 €',
				note: 'con patatas y bebida',
			},
		],
	},
	{
		title: 'Para compartir',
		items: [
			{
				name: 'Sultán',
				price: '9,50 €',
				note: 'carne de kebab sobre pan con salsa de yogur y picante, en bandeja',
			},
			{
				name: 'Eskender',
				note: 'carne de kebab con pan y salsa de tomate, el otro plato grande del cartel',
			},
			{
				name: 'Pizza turca',
				note: 'no está en el panel de precios, pero es la que destacan las reseñas de la ficha',
			},
		],
	},
	{
		title: 'Salsas',
		items: [
			{
				name: 'Salsa de yogur',
				note: 'una de las dos que se añaden al pedido, según una reseña',
			},
			{
				name: 'Salsa picante',
				note: 'la otra salsa que citan las opiniones de la ficha',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'Limpios, rápidos, buen trato, muy buenos kebab y precios', valor: 5 },
	{
		texto: 'La comida buenísima, sobre todo la pizza turca, y el servicio perfecto y rápido.',
		valor: 5,
	},
	{
		texto: 'Te traen la comida con guantes y añaden salsas tanto de yogur como picante.',
		valor: 4,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Kebab Andrómeda?',
		a: 'En la calle Andrómeda, 15, local 2, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica dos turnos todos los días de la semana: de 13:00 a 16:00 y de 20:00 a 1:00. No aparece ningún día de cierre. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Rollos de kebab y dürüm, hamburguesas, hot dog, sultán, eskender y pizza turca, con salsa de yogur y salsa picante. Los nombres salen del cartel que aparece en las fotos del local y de la descripción y las reseñas de la ficha.'
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica reservas ni sistema de pedidos online. Tampoco incluye teléfono ni página web, así que esta página no ofrece un canal de contacto que no exista en Google.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha no lo indica. No publica teléfono, web ni enlaces a plataformas de reparto, así que no se puede afirmar que haya reparto; conviene comprobarlo en el propio local.',
	},
	{
		q: '¿Tiene teléfono o página web?',
		a: 'No consta. La ficha pública de Google no incluye teléfono ni página web, y esta web no inventa ninguno de los dos.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye una carta, pero en sus fotos se ve el cartel de precios del local: rollo kebab desde 5,50 €, hamburguesas a 7,50 €, sultán a 9,50 €. Esta página copia esos productos y precios tal como aparecen; pueden cambiar, así que conviene confirmarlos en el local.'
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas y un aseo adaptado. Indica que no hay aparcamiento adaptado. No publica más datos sobre el interior.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 669 reseñas en el momento de consultarla (octubre de 2026). Las opiniones publicadas destacan la limpieza, la rapidez, el trato, el kebab y la pizza turca.',
	},
	{
		q: '¿Tiene redes sociales?',
		a: 'La ficha no enlaza ningún perfil social. Esta página solo enlaza lo que aparece en Google Maps.',
	},
];
