/**
 * Datos de Limos Asador de Pollos y Comidas Caseras — C. Frigiliana, 15,
 * Carretera de Cádiz (29003 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Limos Asador de Pollos y Comidas Caseras»,
 *   36.6974343,-4.4470931, feature 0xd72f93b56df1fd9:0x3082c231b88782e8.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. El surtido que se cita es el que nombran la
 * descripción del negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Limos Asador de Pollos y Comidas Caseras',
	fullName: 'Limos Asador de Pollos y Comidas Caseras',
	shortName: 'Limos',
	mark: 'LI',
	street: 'C. Frigiliana, 15',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29003',
	country: 'ES',
	siteUrl: 'https://limos-asador-de-pollos.vercel.app',
	geo: { lat: 36.6974343, lng: -4.4470931 },
	featureId: '0xd72f93b56df1fd9:0x3082c231b88782e8',
	placeId: 'ChIJ2R_fVjv5cg0R6IKHuDHCgjA',
	plusCode: '8C8QMHW3+X5',
	googleCategory: 'Pollería · Restaurante de comida para llevar',
	phone: '687 02 84 44',
	phoneHref: 'tel:+34687028444',
	tagline: 'Pollos asados y comida casera en Carretera de Cádiz',
	description:
		'Limos Asador de Pollos y Comidas Caseras, en C. Frigiliana, 15 (Carretera de Cádiz, Málaga). Pollos asados, patatas, croquetas, ensaladillas y postres, todos los días.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Limos+Asador+de+Pollos+y+Comidas+Caseras/@36.6974343,-4.4470931,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f93b56df1fd9:0x3082c231b88782e8!8m2!3d36.6974343!4d-4.4470931!16s%2Fg%2F11ldvy727v?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6974343%2C-4.4470931',
	embed: 'https://maps.google.com/maps?q=36.6974343,-4.4470931&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6974343,-4.4470931',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 83,
	label: '4,7',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–17:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:30–16:00' },
	{ dia: 'Jueves', horas: '12:30–16:00' },
	{ dia: 'Viernes', horas: '12:30–16:00' },
	{ dia: 'Sábado', horas: '12:30–16:00' },
	{ dia: 'Domingo', horas: '12:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollos asados',
	'Comida casera',
	'Para llevar',
	'Croquetas',
	'Ensaladillas',
	'Postres',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'Es la primera categoría de la ficha, «Pollería», y el plato que abre la descripción del negocio: «pollos asados, patatas, croquetas…». Una reseña lo confirma: «El pollo, la pastela todo buenisimo».',
	},
	{
		title: 'Los tres menús',
		text: 'El cartel del local anuncia tres: el Menú 1 por 8 € (medio pollo, viena, media de patatas y bebida), el Menú 2 por 15,50 € (pollo entero, pan, patatas y bebidas) y el Menú 3 por 32 € (dos pollos, dos barras, dos patatas, ensalada y bebidas).',
	},
	{
		title: 'La vitrina',
		text: 'En el mostrador se alinean la ensaladilla, la ensalada campera a 3,50 €, las albóndigas en salsa a 4,50 €, las salchichas y la empanada. En la pizarra aparecen además la tortilla de patatas, la pastela de pollo y la ensalada mixta.',
	},
	{
		title: 'Baratito y bien valorado',
		text: 'Una de las reseñas destacadas lo resume así: «El pollo, la pastela todo buenisimo y baratito». La ficha le da 4,7 sobre 5 con 83 opiniones.',
	},
];

/** Solo las familias de producto que nombran la descripción y las reseñas. */
export const MENU = [
	{
		title: 'Los menús del cartel',
		items: [
			{
				name: 'Menú 1',
				price: '8,00 €',
				note: 'medio pollo, una viena pequeña, media ración de patatas Limos y una lata de refresco o cerveza',
			},
			{
				name: 'Menú 2',
				price: '15,50 €',
				note: 'un pollo, una barra de pan, una ración de patatas Limos y dos latas de refresco o un litro de cerveza',
			},
			{
				name: 'Menú 3',
				price: '32,00 €',
				note: 'dos pollos, dos barras de pan, dos raciones de patatas Limos, una ensalada a elegir y dos latas de refresco o un litro de cerveza',
			},
		],
	},
	{
		title: 'Del asador y la vitrina',
		items: [
			{
				name: 'Pollo asado',
				note: 'la categoría de pollería y el plato que da nombre a la casa',
			},
			{
				name: 'Patatas Limos',
				note: 'la guarnición que la casa nombra en la descripción y en todos sus menús',
			},
			{
				name: 'Ensalada campera',
				price: '3,50 €',
				note: 'el precio que marca la pizarra de la vitrina',
			},
			{
				name: 'Albóndigas en salsa',
				price: '4,50 €',
				note: 'con almendra, según la pizarra de la vitrina',
			},
			{
				name: 'Natillas',
				price: '1,30 €',
				note: 'el postre con precio visible en la vitrina',
			},
		],
	},
	{
		title: 'La pizarra de la puerta',
		items: [
			{
				name: 'Pastela de pollo Limos',
				note: 'la especialidad de la casa que anuncia la pizarra; la ficha no publica su precio',
			},
			{
				name: 'Tortilla de patatas',
				note: 'anunciada en la pizarra de la puerta, sin precio visible en las fotos',
			},
			{
				name: 'Ensalada mixta',
				note: 'anunciada en la pizarra de la puerta, sin precio visible en las fotos',
			},
			{
				name: 'Croquetas, ensaladillas y postres',
				note: 'la variedad que nombra la descripción del negocio; la ficha no detalla más',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'El pollo, la pastela todo buenisimo y baratito',
		valor: 5,
	},
	{
		texto: 'Lo aconsejo, y volveremos a repetir sin duda.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Limos?',
		a: 'En la calle Frigiliana, 15, en Carretera de Cádiz (29003 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica el lunes de 9:00 a 17:00, de miércoles a domingo de 12:30 a 16:00 y el martes como día de cierre. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La descripción del negocio nombra «variedad de comidas, pollos asados, patatas, croquetas, ensaladillas, postres...». La ficha no publica la carta completa ni los precios, así que lo mejor es llamar y preguntar por el día.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como pollería y como restaurante de comida para llevar. La ficha no detalla servicio de mesa ni terraza; conviene preguntar por teléfono antes de ir a sentarse.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 687 02 84 44. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca que está «baratito». La variedad del día se consulta por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas y el aparcamiento adaptado para sillas de ruedas. No publica datos sobre asientos adaptados, interior ni aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 83 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo, la pastela y el precio.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
