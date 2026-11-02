/**
 * Datos de Rey Kebab El Atabal Málaga — C. Nuzas, 22, Loc 7,
 * Teatinos-Universidad, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: 36.7309051, -4.469115, feature
 *   0xd72f72ff2d7b739:0x8bbc3e0daf1ebd14 (nombre, dirección, categorías,
 *   horario, teléfono, nota, reseñas, accesibilidad y descripción del negocio).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/: la pizarra de la tienda y los carteles de menús junto a
 *   la puerta, de donde salen los platos y los precios.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni redes sociales.
 */

export const BUSINESS = {
	name: 'Rey Kebab El Atabal',
	fullName: 'REY KEBAB EL ATABAL MALAGA',
	shortName: 'Rey Kebab',
	mark: 'RK',
	street: 'C. Nuzas, 22, Loc 7',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://rey-kebab-el-atabal.vercel.app',
	geo: { lat: 36.7309051, lng: -4.469115 },
	featureId: '0xd72f72ff2d7b739:0x8bbc3e0daf1ebd14',
	placeId: 'ChIJObfX8i_3cg0RFL0erw0-vIs',
	category: 'Restaurante turco · Kebab',
	categories: ['Restaurante', 'Restaurante turco'],
	phone: '952 62 96 94',
	phoneHref: 'tel:+34952629694',
	deliveryPhones: [
		{ label: '952 629 694', href: 'tel:+34952629694' },
		{ label: '697 782 792', href: 'tel:+34697782792' },
	],
	tagline: 'Kebab turco, durum y pizzas en Teatinos',
	description:
		'Rey Kebab El Atabal, restaurante turco de kebab, durum y pizzas en la C. Nuzas 22, local 7, Teatinos-Universidad (29010 Málaga). Abre todos los días de 12:00 a 16:00 y de 19:00 a 24:00, con servicio a domicilio.',
	hasPublicWebsite: false,
	ownerDescription: 'kebabs y pizzas',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/REY+KEBAB+EL+ATABAL+MALAGA/@36.7309051,-4.469115,17z/data=!4m6!3m5!1s0xd72f72ff2d7b739:0x8bbc3e0daf1ebd14!8m2!3d36.7309051!4d-4.469115!16s%2Fg%2F11c0r5tfzc',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7309051%2C-4.469115',
	embed: 'https://maps.google.com/maps?q=36.7309051,-4.469115&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 3.3,
	count: 195,
	label: '3,3',
};

/** Horario que publica la ficha: dos turnos, todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '12:00–16:00 · 19:00–24:00' },
	{ day: 'Martes', value: '12:00–16:00 · 19:00–24:00' },
	{ day: 'Miércoles', value: '12:00–16:00 · 19:00–24:00' },
	{ day: 'Jueves', value: '12:00–16:00 · 19:00–24:00' },
	{ day: 'Viernes', value: '12:00–16:00 · 19:00–24:00' },
	{ day: 'Sábado', value: '12:00–16:00 · 19:00–24:00' },
	{ day: 'Domingo', value: '12:00–16:00 · 19:00–24:00' },
];

/** Lo que sí consta en la ficha y en los carteles del local. */
export const SERVICIOS = [
	'Kebab y durum',
	'Pizzas al horno',
	'Platos con patatas',
	'Servicio a domicilio',
	'Todos los días · mediodía y noche',
	'Acceso adaptado',
];

/** Solo lo que se lee en la pizarra de la tienda y en los carteles de menús. */
export const MENU: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'Kebab, durum y falafel',
		items: [
			{
				name: 'Pita shawarma',
				price: '5,00 €',
				note: 'pan de pita con carne de shawarma, verduras y salsa',
			},
			{
				name: 'Durum kebab',
				price: '5,00 €',
				note: 'tortilla de trigo enrollada con carne, verduras y salsa; también en tamaño XL, el que destaca una reseña',
			},
			{
				name: 'Lahmacun de pollo',
				price: '6,00 €',
				note: 'masa fina turca con pollo, verduras y especias',
			},
			{
				name: 'Falafel',
				price: '6,00 €',
				note: 'con patatas y ensalada',
			},
			{
				name: 'Calzone con bebida',
				price: '9,00 €',
				note: 'la oferta de la pizarra: calzone al horno con refresco',
			},
		],
	},
	{
		title: 'Pizzas · tamaños',
		items: [
			{
				name: 'Mediana',
				price: '7,00 €',
				note: '30 cm · cualquier variedad de la carta',
			},
			{
				name: 'Grande',
				price: '8,00 €',
				note: '40 cm · cualquier variedad de la carta',
			},
			{
				name: 'Familiar',
				price: '12,00 €',
				note: '50 cm · cualquier variedad de la carta',
			},
		],
	},
	{
		title: 'Pizzas clásicas',
		items: [
			{ name: 'Margarita', note: 'salsa de tomate y queso', price: '7 / 8 / 12 €' },
			{ name: 'Salami', note: 'salsa de tomate, queso y salami', price: '7 / 8 / 12 €' },
			{ name: 'Jamón', note: 'salsa de tomate, queso y jamón', price: '7 / 8 / 12 €' },
			{ name: 'Fungi', note: 'salsa de tomate, queso y champiñones', price: '7 / 8 / 12 €' },
			{ name: 'Cuatro quesos', note: 'salsa de tomate y cuatro quesos', price: '7 / 8 / 12 €' },
			{ name: 'Atún', note: 'salsa de tomate, queso, cebolla y atún', price: '7 / 8 / 12 €' },
			{ name: 'Hawaiana', note: 'salsa de tomate, queso, jamón y piña', price: '7 / 8 / 12 €' },
		],
	},
	{
		title: 'Pizzas de la casa',
		items: [
			{
				name: 'Döner',
				note: 'salsa de tomate, queso, carne asada de pollo o ternera y cebolla',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'Parsto',
				note: 'salsa de tomate, queso, champiñones y jamón',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'India',
				note: 'queso, tomate, cebolla, pimiento, pollo y salsa picante',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'Frutti',
				note: 'salsa de tomate, queso, atún y gambas',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'Vegetal',
				note: 'queso, tomate, espinacas, pimientos, cebolla, piña y champiñones',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'Barbacoa',
				note: 'salsa barbacoa, queso y carne asada de pollo o ternera',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'Napoli',
				note: 'salsa de tomate, queso, jamón y carne de kebab',
				price: '7 / 8 / 12 €',
			},
			{
				name: 'San Marco',
				note: 'mozzarella, tomate, jamón, champiñones y carne de kebab',
				price: '7 / 8 / 12 €',
			},
		],
	},
	{
		title: 'Platos Rey',
		items: [
			{ name: 'Alitas de pollo', note: 'con patatas', price: '6,00 €' },
			{ name: 'Nuggets de pollo', note: 'con patatas', price: '5,00 €' },
			{
				name: 'Parsto',
				note: 'carne con patatas, jamón y queso gratinado',
				price: '8,00 €',
			},
			{
				name: 'Al horno',
				note: 'carne con patatas y queso gratinado',
				price: '8,00 €',
			},
			{
				name: 'Especial',
				note: 'carne, patatas, arroz y ensalada',
				price: '8,00 €',
			},
		],
	},
	{
		title: 'Hamburguesas y camperos',
		items: [
			{
				name: 'Hamburguesa de pollo o ternera',
				note: 'lechuga, tomate, cebolla, queso, mayonesa y kétchup',
				price: '4,50 €',
			},
			{
				name: 'Camperos',
				note: 'normal, atún, pollo, kebab de pollo o kebab de ternera',
				price: '4,50 €',
			},
			{
				name: 'Falafel en pita',
				note: 'falafel, verduras y salsa en pan de pita',
				price: '4,50 €',
			},
		],
	},
	{
		title: 'Ensaladas',
		items: [
			{
				name: 'Mixta',
				note: 'lechuga, tomate, cebolla, atún, aceitunas, zanahoria, maíz y aceite de oliva',
				price: '6,00 €',
			},
			{
				name: 'Tropical',
				note: 'lechuga, tomate, cebolla, piña, jamón y salsa rosa',
				price: '6,00 €',
			},
			{
				name: 'Mediterránea',
				note: 'lechuga, tomate, cebolla, carne de ternera y salsa de yogur',
				price: '7,00 €',
			},
		],
	},
	{
		title: 'Patatas y bebidas',
		items: [
			{ name: 'Patatas fritas', note: 'ración', price: '3,50 €' },
			{ name: 'Patatas bravas', note: 'con salsa brava', price: '4,00 €' },
			{ name: 'Patatas deluxe', note: 'con queso y salsa', price: '4,00 €' },
			{ name: 'Refresco en lata', note: 'Pepsi, Pepsi Max y Coca-Cola', price: '1,50 €' },
			{ name: 'Botella de 2 litros', note: 'Pepsi o Coca-Cola', price: '2,50 €' },
		],
	},
	{
		title: 'Menús',
		items: [
			{
				name: 'Dos pizzas medianas',
				note: 'con 2 latas o botella de 2 litros',
				price: '16,00 €',
			},
			{
				name: 'Dos pizzas familiares',
				note: 'con 2 latas o botella de 2 litros',
				price: '19,00 €',
			},
			{
				name: 'Menú 1',
				note: 'hamburguesa + patatas + 1 lata',
				price: '5,00 €',
			},
			{
				name: 'Menú 2',
				note: '2 pitas o durum + patatas + 2 latas o 2 litros',
				price: '14,00 €',
			},
			{
				name: 'Menú 3',
				note: 'pizza mediana + 2 hamburguesas + patatas + 2 latas o 2 litros',
				price: '13,00 €',
			},
			{
				name: 'Menú 4',
				note: 'pizza grande + 2 latas o botella de 2 litros',
				price: '12,00 €',
			},
		],
	},
];

export const MENU_NOTE =
	'Precios copiados de la pizarra de la tienda y de los carteles de menús de la puerta, fotografiados en el perfil de Google Maps. El local puede cambiarlos sin aviso: confírmalos al pedir. El cartel anuncia además los menús 5 y 6, pero sus precios no se leen en la foto, así que no se incluyen.';

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Me parece los kebab muy buenos y el servicio rápido, me gustó volveré.',
		valor: 5,
	},
	{
		texto: 'Buena calidad, buenos precios y mucha cantidad, sobre todo el Durum XL!',
		valor: 4,
	},
	{
		texto: 'Pedimos dos kebabs unas papas bravas y una pizza.',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Rey Kebab El Atabal?',
		a: 'En la calle Nuzas, 22, local 7, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días en dos turnos: de 12:00 a 16:00 y de 19:00 a 24:00, de lunes a domingo. La ficha no marca ningún día de cierre semanal.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí. El cartel de la fachada anuncia «Servicio a domicilio» con dos números: 952 629 694 y 697 782 792. Esta web no tiene pedidos en línea; el pedido se hace por teléfono.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Kebab en pita y en durum, lahmacun, falafel, pizzas de 30, 40 y 50 cm en quince variedades, los Platos Rey con patatas, hamburguesas, camperos, ensaladas y patatas. La carta completa está en esta misma página.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'Los precios de la pizarra van de 1,50 € de una lata a 19,00 € del menú de dos pizzas familiares. Una pizza mediana cuesta 7,00 €, una grande 8,00 € y una familiar 12,00 €; una pita o un durum, 5,00 €.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Sí. Dentro hay mesas con sillas verdes y una barra con la pizarra de precios, y en la acera hay una fila de mesas y sillas rojas. También se puede pedir para llevar.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No publica datos sobre aseos adaptados, aparcamiento adaptado ni otros servicios.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 3,3 sobre 5 con 195 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones publicadas destacan el sabor, el servicio rápido, la cantidad —sobre todo el Durum XL— y la relación calidad-precio.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza web propia ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
	{
		q: '¿La carne es halal?',
		a: 'La ficha y los carteles del local no lo indican, así que esta página no lo afirma. Si necesitas confirmarlo, pregunta por teléfono antes de pedir.',
	},
];
