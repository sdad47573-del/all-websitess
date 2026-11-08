/**
 * Datos de El Fogón de Begoña S.L. — C. de Lucas Mallada, 3,
 * San Blas-Canillejas (28037 Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «El Fogón de Begoña S.L.»,
 *   40.4300222,-3.6150241, feature 0xd422f9bc43afe75:0xd53e86cac5c2d29f.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas,
 *   accesibilidad y fotografías: ficha pública de Google consultada en
 *   octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales ni condiciones del reparto a domicilio. Los platos y precios de
 * esta web son los de las pizarras y carteles que aparecen en las fotos del
 * perfil. El menú del día cambia; la web no inventa el menú de cada jornada.
 */

export const BUSINESS = {
	name: 'El Fogón de Begoña',
	fullName: 'El Fogón de Begoña S.L.',
	shortName: 'El Fogón de Begoña',
	mark: 'EB',
	street: 'C. de Lucas Mallada, 3',
	district: 'San Blas-Canillejas',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28037',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-fogon-de-begona',
	geo: { lat: 40.4300222, lng: -3.6150241 },
	featureId: '0xd422f9bc43afe75:0xd53e86cac5c2d29f',
	placeId: 'ChIJdf46xJsvQg0Rn9LCxcqGPtU',
	plusCode: '8CGRC9JM+2X',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '910 81 58 01',
	phoneHref: 'tel:+34910815801',
	tagline: 'Comida casera, pollo asado y menú del día en San Blas',
	description:
		'El Fogón de Begoña, en C. de Lucas Mallada, 3 (San Blas-Canillejas, 28037 Madrid). Comida casera, pollo asado y menú del día. De 10:00 a 16:30 y de 19:00 a 22:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Fog%C3%B3n+de+Bego%C3%B1a+S.L./@40.4300222,-3.6150241,17z/data=!3m1!4b1!4m6!3m5!1s0xd422f9bc43afe75:0xd53e86cac5c2d29f!8m2!3d40.4300222!4d-3.6150241!16s%2Fg%2F11cn67f919?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4300222%2C-3.6150241',
	embed: 'https://maps.google.com/maps?q=40.4300222,-3.6150241&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4300222,-3.6150241',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 220,
	label: '4,7',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–16:30 · 19:00–22:00' },
	{ dia: 'Martes', horas: '10:00–16:30 · 19:00–22:00' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '10:00–16:30 · 19:00–22:00' },
	{ dia: 'Viernes', horas: '10:00–16:30 · 19:00–22:00' },
	{ dia: 'Sábado', horas: '10:00–16:30 · 19:00–22:00' },
	{ dia: 'Domingo', horas: '10:00–16:30 · 19:00–22:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha, el rótulo y las pizarras permiten afirmar. */
export const SERVICIOS = [
	'Menú del día',
	'Pollo asado',
	'Paellas y arroces',
	'Tortillas rellenas',
	'Comida casera',
	'Para llevar y a domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'Menú del día a 8,50 €',
		text: 'La pizarra anuncia primer plato, segundo plato y postre por 8,50 €. Los platos cambian cada día: la web no inventa la lista, se consulta en el local o por teléfono.',
	},
	{
		title: 'Pollo asado',
		text: 'El rótulo de la fachada lo pone entre las especialidades. La pizarra marca 8,50 € el pollo entero y 5,30 € el medio; con patatas suma 1,50 € y con pimientos, 2,50 €.',
	},
	{
		title: 'Arroces y paellas',
		text: 'Las fotos del perfil muestran paellas de marisco, arroz negro y arroz mixto. Una de las reseñas lo resume: «Hemos probado pollos, croquetas y ahora arroces».',
	},
	{
		title: 'Tortillas rellenas',
		text: 'El cartel del local propone La Mixta (jamón york y queso), La Baconcheese, La Serranita, La Campesina, La Noruega (salmón y philadelphia), Las Italianas y La Tuya, con los ingredientes que elijas.',
	},
];

/** Platos y precios que aparecen en las pizarras y en la vitrina. */
export const MENU = [
	{
		title: 'Del asador y la vitrina',
		items: [
			{ name: 'Pollo asado', note: 'entero, según la pizarra del local', price: '8,50 €' },
			{ name: '1/2 pollo asado', note: 'media unidad', price: '5,30 €' },
			{
				name: 'Pollo asado con patatas',
				note: '8,50 € del pollo + 1,50 € de patatas',
				price: '10,00 €',
			},
			{
				name: 'Pollo asado con pimientos',
				note: '8,50 € del pollo + 2,50 € de pimientos',
				price: '11,00 €',
			},
			{ name: 'Codillo a la gallega', note: 'en la vitrina, a 5 €', price: '5,00 €' },
			{ name: 'Pollo a la gallega', note: 'en la vitrina, a 5 €', price: '5,00 €' },
			{ name: 'Jamón asado', note: 'en la vitrina, a 4,50 €', price: '4,50 €' },
		],
	},
	{
		title: 'Platos del día',
		items: [
			{ name: 'Lacón a la gallega', note: 'de la pizarra de platos del día', price: '5,00 €' },
			{ name: 'Bistec de ternera', note: 'de la pizarra de platos del día', price: '5,00 €' },
			{ name: 'Escalope de pollo', note: 'de la pizarra de platos del día', price: '4,50 €' },
			{ name: 'Croquetas (8 uds.)', note: 'ración de ocho unidades', price: '5,00 €' },
			{ name: 'Empanadillas caseras (6 uds.)', note: 'ración de seis unidades', price: '5,00 €' },
			{ name: 'Alitas (6 uds.)', note: 'ración de seis unidades', price: '4,50 €' },
			{ name: 'Tigres (8 uds.)', note: 'ración de ocho unidades', price: '4,50 €' },
			{ name: 'Huevos rotos', note: 'con chorizo, jamón o morcilla', price: '4,50 €' },
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{ name: 'Ensalada mixta', note: 'de la pizarra de ensaladas', price: '3,50 €' },
			{ name: 'Ensalada césar', note: 'de la pizarra de ensaladas', price: '4,00 €' },
			{ name: 'Ensalada rusa', note: 'de la pizarra de ensaladas', price: '3,50 €' },
			{
				name: 'Rulo de cabra con nueces',
				note: 'de la pizarra de ensaladas',
				price: '4,00 €',
			},
			{ name: 'Ensalada de pollo', note: 'de la pizarra de ensaladas', price: '3,50 €' },
			{ name: 'Ensalada italiana', note: 'de la pizarra de ensaladas', price: '3,50 €' },
			{ name: 'Ensalada campera', note: 'de la pizarra de ensaladas', price: '3,50 €' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Las raciones y el bocata muy abundantes.',
		valor: 5,
	},
	{
		texto: 'Hemos probado pollos, croquetas y ahora arroces.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Fogón de Begoña?',
		a: 'En la calle de Lucas Mallada, 3, en el distrito de San Blas-Canillejas (28037 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica dos turnos, de 10:00 a 16:30 y de 19:00 a 22:00, de lunes a martes y de jueves a domingo. El miércoles figura cerrado. El Día de Todos los Santos la ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Cuánto cuesta el menú del día?',
		a: 'La pizarra marca 8,50 € por primer plato, segundo plato y postre. El contenido cambia cada día y la ficha de Google no lo publica, así que conviene preguntar por teléfono o mirar la pizarra al llegar.',
	},
	{
		q: '¿Qué pollo asado tiene?',
		a: 'La pizarra marca 8,50 € el pollo entero y 5,30 € el medio. Con patatas suma 1,50 € y con pimientos, 2,50 €. También aparecen en la vitrina el codillo a la gallega y el pollo a la gallega a 5 €, y el jamón asado a 4,50 €.',
	},
	{
		q: '¿Qué son las tortillas rellenas?',
		a: 'El cartel del local las anuncia en varias versiones: La Mixta (jamón york y queso), La Baconcheese (bacon y queso), La Serranita (jamón serrano y tomate), La Campesina (verduras y chorizo), La Noruega (salmón y philadelphia), Las Italianas (boloñesa o carbonara) y La Tuya, con los ingredientes que elijas.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'El rótulo de la fachada anuncia «Comida para llevar y a domicilio». La ficha de Google no publica la zona de reparto, el pedido mínimo ni las condiciones, así que hay que confirmarlo en el teléfono 910 81 58 01.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 910 81 58 01. No consta página web propia, red social, aplicación ni sistema de pedidos online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca que el local tiene acceso para sillas de ruedas. No publica más detalles sobre el interior, los aseos o el aparcamiento, así que conviene llamar antes si necesitas alguna condición concreta.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 220 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian las raciones, los bocatas, el pollo, las croquetas y los arroces.',
	},
];
