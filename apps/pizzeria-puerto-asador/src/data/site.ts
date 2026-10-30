export const BUSINESS = {
	name: 'Pizzeria Puerto Asador',
	shortName: 'Puerto Asador',
	mark: 'PA',
	street: 'Callejón Pajarillo Verde',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29190',
	country: 'ES',
	siteUrl: 'https://pizzeria-puerto-asador.vercel.app',
	geo: { lat: 36.7390068, lng: -4.4809627 },
	featureId: '0xd72f0d53c850781:0xa3aa63758d82d3ac',
	placeId: 'ChIJgQeFPNXwcg0RrNOCjXVjqqM',
	plusCode: '8C8QPGQ9+JJ',
	phone: '952 10 71 01',
	phoneHref: 'tel:+34952107101',
	tagline: 'Pizzas, camperos y asador en Puerto de la Torre',
	description:
		'Pizzeria Puerto Asador, hamburguesería, parrilla y restaurante de comida rápida en Callejón Pajarillo Verde, Puerto de la Torre, Málaga. Pizzas, camperos y asados.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Pizzeria+Puerto+Asador/@36.7390068,-4.4809627,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f0d53c850781:0xa3aa63758d82d3ac!8m2!3d36.7390068!4d-4.4809627!16s%2Fg%2F11byx8s6jk?authuser=0&hl=es',
	cid: 'https://www.google.com/maps?cid=11793347930759549868',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7390068%2C-4.4809627',
	embed: 'https://maps.google.com/maps?q=36.7390068,-4.4809627&z=17&hl=es&output=embed',
};

export const RATING = { value: 4.1, count: 415, label: '4,1' };

/** Horario semanal que muestra la ficha pública, consultada en octubre de 2026. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '20:00–24:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '20:00–24:00' },
	{ dia: 'Jueves', horas: '20:00–24:00' },
	{ dia: 'Viernes', horas: '20:00–24:00' },
	{ dia: 'Sábado', horas: '13:00–24:00' },
	{ dia: 'Domingo', horas: '13:00–24:00' },
];

export const SERVICIOS = [
	'Hamburguesería',
	'Parrilla',
	'Comida rápida',
	'Pedir online',
	'Abierto por la noche',
];

export const MENU = [
	{
		title: 'De la casa',
		items: [
			{ name: 'Camperos', note: 'La última publicación del local anuncia sus camperos.' },
			{ name: 'Pizzas', note: 'Pizzería y asador, según el nombre y la categoría del establecimiento.' },
			{ name: 'Asados', note: 'El asador forma parte de la propuesta del local.' },
		],
	},
	{
		title: 'Hamburguesería y parrilla',
		items: [
			{ name: 'Hamburguesas', note: 'Google clasifica el establecimiento como hamburguesería.' },
			{ name: 'Parrilla', note: 'La parrilla es una de las categorías publicadas en Google Maps.' },
		],
	},
	{
		title: 'Opciones de pedido',
		items: [
			{ name: 'Pedir online', note: 'Google Maps ofrece acceso a la opción de pedido online del establecimiento.' },
		],
	},
];

export const RESENAS: { texto: string; valor: number }[] = [];

export const FAQ = [
	{
		q: '¿Dónde está Pizzeria Puerto Asador?',
		a: 'En Callejón Pajarillo Verde, en Puerto de la Torre, 29190 Málaga. El mapa y el botón de indicaciones abren la ubicación publicada en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha consultada en octubre de 2026 muestra horario de 20:00 a 24:00 los lunes y de miércoles a viernes; sábados y domingos, de 13:00 a 24:00. Los martes figura cerrado. Puede variar en festivos; confirma el horario en Google antes de ir.',
	},
	{
		q: '¿Se puede pedir online?',
		a: 'Google Maps muestra la opción «Pedir online». Consulta la ficha del establecimiento para acceder a las opciones de pedido vigentes.',
	},
	{
		q: '¿Qué tipo de comida ofrece?',
		a: 'Google clasifica el local como hamburguesería, parrilla y restaurante de comida rápida. Una publicación del establecimiento menciona camperos, pizzas y asados. La ficha no detalla una carta completa ni precios.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El número que publica la ficha de Google es 952 10 71 01.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha muestra una valoración de 4,1 sobre 5 con 415 reseñas en el momento de la consulta (octubre de 2026). La puntuación y el número de opiniones pueden cambiar.',
	},
];
