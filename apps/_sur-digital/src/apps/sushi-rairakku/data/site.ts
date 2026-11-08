/**
 * Datos de Restaurante Sushi Rairakku — Praceta Serra de Baixo, 1 R/C,
 * 2725-144 Algueirão-Mem Martins (Sintra).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Sushi Rairakku»,
 *   38.7982589,-9.340078, feature 0xd1ed03ed7a86783:0x73c5b10241700d3c
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   la descripción del propio local: «All YOU CAN EAT À LA CARTE»).
 * - Página de Facebook e Instagram del restaurante (bufé à la carte con más de
 *   cien variedades: sushi, sashimi, tempura; precios del rodízio anunciados en
 *   sus propias redes).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * El local no tiene web propia ni publica carta con precios en Google.
 */

export const BUSINESS = {
	name: 'Sushi Rairakku',
	fullName: 'Restaurante Sushi Rairakku',
	shortName: 'Sushi Rairakku',
	mark: 'SR',
	street: 'Praceta Serra de Baixo, 1 R/C',
	city: 'Algueirão-Mem Martins',
	municipality: 'Sintra',
	region: 'Lisboa',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '2725-144',
	country: 'PT',
	phoneDisplay: '21 155 4222',
	phoneHref: 'tel:+351211554222',
	rating: 4.4,
	reviewsCount: 1427,
	siteUrl: 'https://www.sur-digital.com/sushi-rairakku',
	geo: { lat: 38.7982589, lng: -9.340078 },
	featureId: '0xd1ed03ed7a86783:0x73c5b10241700d3c',
	placeId: 'ChIJg2eo1z7QHg0RPA1wQQKxxXM',
	cid: '8342268508019625276',
	/** Categorías con las que Google describe el local. */
	googleCats: ['Restaurante japonés', 'Restaurante chino'],
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription: 'All YOU CAN EAT À LA CARTE',
	/** Precios del rodízio que el local anuncia en sus redes (orientativos). */
	priceHint: 'unos 13 € al mediodía y 16 € por la noche',
	tagline: 'Rodízio de sushi à la carte en Algueirão-Mem Martins',
	description:
		'Sushi Rairakku, restaurante japonés y chino de Algueirão-Mem Martins (Sintra): rodízio à la carte con más de cien variedades de sushi, sashimi, tempura y platos chinos. 4,4 en Google con 1.427 reseñas. Tel. 21 155 4222.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Sushi+Rairakku/@38.7982589,-9.340078,17z/data=!3m1!4b1!4m6!3m5!1s0xd1ed03ed7a86783:0x73c5b10241700d3c!8m2!3d38.7982589!4d-9.340078!16s%2Fg%2F11c1w0fz39',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7982589%2C-9.340078',
	embed: 'https://maps.google.com/maps?q=38.7982589,-9.340078&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: dos turnos, todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Martes', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Miércoles', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Jueves', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Viernes', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Sábado', value: '12:00–15:00 · 19:00–23:00' },
	{ day: 'Domingo', value: '12:00–15:00 · 19:00–23:00' },
];

/** Señas de identidad que constan en la ficha y en sus redes. */
export const SERVICIOS = [
	'Rodízio à la carte',
	'Más de 100 variedades',
	'Sushi y sashimi',
	'Tempura',
	'Cocina china',
	'Comer en el local',
	'Acceso para sillas de ruedas',
	'Aparcamiento adaptado',
];

/**
 * Carta. No hay carta con precios publicada en Google: los apartados salen de la
 * descripción del local y de las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Sushi y sashimi',
		items: [
			{ name: 'Sashimi de salmón y atún', note: 'cortado al momento, en láminas gruesas' },
			{ name: 'Nigiri', note: 'arroz templado con el pescado por encima' },
			{ name: 'Uramaki y maki', note: 'rolls con arroz por fuera, sésamo y aguacate' },
			{ name: 'Hot rolls', note: 'rebozados y fritos, con salsa por encima' },
		],
	},
	{
		title: 'Del wok y la freidora',
		items: [
			{ name: 'Tempura', note: 'langostino y verduras rebozadas en fino' },
			{
				name: 'Camarão na chapa',
				note: 'gambas a la plancha con pimiento verde y cebolla, servidas en la chapa',
			},
			{ name: 'Pratos chineses', note: 'la parte china de la carta: arroces y salteados' },
		],
	},
	{
		title: 'Para empezar',
		items: [
			{ name: 'Sopa miso', note: 'caldo de soja con tofu y algas' },
			{ name: 'Gyozas', note: 'empanadillas de carne o verdura a la plancha' },
			{ name: 'Wakame', note: 'ensalada de algas con sésamo' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Tempura de helado', note: 'postre frito, para compartir' },
			{ name: 'Mochi', note: 'helado en pasta de arroz' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sushi Rairakku?',
		a: 'En la Praceta Serra de Baixo, 1 R/C (2725-144 Algueirão-Mem Martins), en el municipio de Sintra, en plena zona urbana de Algueirão, a pocos minutos de la estación de tren. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué es eso de «all you can eat à la carte»?',
		a: 'Es el formato del local, que describe así su propia ficha: un rodízio que se pide a la carta, plato a plato y tantas veces como quieras, en lugar del bufé de bandejas. Su página de Facebook habla de una lista con más de cien variedades entre sushi, sashimi y tempura, además de los platos de cocina china.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días en dos turnos: comida de 12:00 a 15:00 y cena de 19:00 a 23:00. Es el horario de su ficha de Google; en festivos puede cambiar, así que si vas en una fecha señalada conviene llamar antes al 21 155 4222.',
	},
	{
		q: '¿Cuánto cuesta el rodízio?',
		a: 'La ficha de Google no publica precios. En sus redes el local ha anunciado el rodízio en torno a 13 € al mediodía y 16 € por la noche entre semana, con un precio algo mayor los fines de semana; son tarifas orientativas y conviene confirmarlas al llamar al 21 155 4222.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay reserva online, solo teléfono: el 21 155 4222. Con 1.427 reseñas y un comedor que se llena a los dos turnos, si vais en grupo o un fin de semana merece la pena avisar antes.',
	},
	{
		q: '¿Hay opciones para quien no come sushi?',
		a: 'Sí. El restaurante se anuncia como japonés y chino, y en la carta hay tempura, gyozas, gambas, sopas y platos chinos salteados, además de los postres. Es un sitio cómodo para ir en grupo con gustos distintos.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Sí, y de forma completa: su ficha de Google marca acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 1.427 reseñas, una nota alta y con muchísimas opiniones para un restaurante de barrio en Algueirão-Mem Martins.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. El restaurante no tiene página web activa: publica sus novedades en Facebook e Instagram y atiende por teléfono. Esta web es informativa y no gestiona reservas ni pedidos.',
	},
];
