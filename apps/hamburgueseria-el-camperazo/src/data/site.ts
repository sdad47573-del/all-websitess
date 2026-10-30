/**
 * Datos de Hamburguesería El Camperazo — C. Mora y Cabrera, 38 (esquina),
 * Puerto de la Torre, 29190 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Hamburguesería El Camperazo»,
 *   36.7349226,-4.4819735, feature 0xd72f1ee4f83fb5f:0xa9730901d5987061
 *   (nombre, dirección, categorías, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, entre ellas la
 *   pizarra de supercamperos, bocatas y hamburguesas, la carta de pizzas y
 *   varios, la tarjeta de pedidos y el cartel del Día del Camperazo.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia. Los precios son
 * los de las cartas fotografiadas en el perfil; el reparto a domicilio no está
 * publicado como servicio, solo los teléfonos de pedidos de la tarjeta.
 */

export const BUSINESS = {
	name: 'Hamburguesería El Camperazo',
	fullName: 'Hamburguesería El Camperazo',
	googleName: 'Hamburguesería El Camperazo',
	shortName: 'El Camperazo',
	mark: 'EC',
	street: 'C. Mora y Cabrera, 38',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Puerto de la Torre',
	postalCode: '29190',
	country: 'ES',
	phone: '+34 633 13 03 10',
	phoneHref: '+34633130310',
	ordersPhone: '+34 654 18 82 30',
	ordersPhoneHref: '+34654188230',
	rating: 3.8,
	reviewsCount: 485,
	siteUrl: 'https://hamburgueseria-el-camperazo.vercel.app',
	geo: { lat: 36.7349226, lng: -4.4819735 },
	featureId: '0xd72f1ee4f83fb5f:0xa9730901d5987061',
	placeId: 'ChIJX_uDT-7xcg0RYXCY1QEJc6k',
	cid: '12210112918214701153',
	category: 'Hamburguesería y camperos',
	categories: ['Restaurante', 'Hamburguesería'],
	tagline: 'Camperos, bocatas, hamburguesas y pizzas en Puerto de la Torre',
	description:
		'Hamburguesería El Camperazo, camperos, bocatas, hamburguesas y pizzas en la calle Mora y Cabrera 38, Puerto de la Torre, Málaga. Carta con precios: camperos desde 3,00 €, pizzas desde 9,00 €. Abre de jueves a domingo de 20:00 a 24:00. 3,8 sobre 5 en Google con 485 reseñas.',
	priceRange: '€',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Hamburgueser%C3%ADa+El+Camperazo/@36.7349226,-4.4819735,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f1ee4f83fb5f:0xa9730901d5987061!8m2!3d36.7349226!4d-4.4819735!16s%2Fg%2F11frp2clpc',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7349226%2C-4.4819735',
	embed: 'https://maps.google.com/maps?q=36.7349226,-4.4819735&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: jueves, viernes, sábado y domingo
 * de 20:00 a 24:00; de lunes a miércoles, cerrado.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '20:00–24:00' },
	{ day: 'Viernes', value: '20:00–24:00' },
	{ day: 'Sábado', value: '20:00–24:00' },
	{ day: 'Domingo', value: '20:00–24:00' },
];

export const SERVICIOS = [
	'Supercamperos',
	'Pizzas al horno',
	'Hamburguesas y bocatas',
	'Puerto de la Torre',
	'Jueves a domingo · 20:00–24:00',
	'Pedidos al 633 13 03 10',
];

/**
 * Carta copiada de las pizarras y carteles fotografiados en el perfil del local.
 * Precios en euros tal y como aparecen en esas cartas.
 */
export const MENU = [
	{
		title: 'Supercamperos',
		items: [
			{
				name: 'Campero normal',
				note: 'jamón cocido, tomate, lechuga, queso y mahonesa',
				price: '3,00 €',
			},
			{
				name: 'Campero de atún',
				note: 'atún, queso, lechuga, tomate y mahonesa',
				price: '4,00 €',
			},
			{
				name: 'Campero marinero',
				note: 'bocas de mar, atún, cebolla, salsa rosa y pimientos del piquillo',
				price: '4,50 €',
			},
			{
				name: 'Campero francés',
				note: 'tortilla francesa, jamón cocido, queso, gouda, tomate, lechuga y mahonesa',
				price: '4,00 €',
			},
			{
				name: 'Campero moruno',
				note: 'pinchitos morunos, queso, lechuga, tomate y mahonesa',
				price: '4,00 €',
			},
			{
				name: 'Campero montadito',
				note: 'montaditos de cerdo, lechuga, queso, tomate y mahonesa',
				price: '4,00 €',
			},
			{
				name: 'Camperazo',
				note: 'pollo, bacon, doble de queso, gouda, huevo, lechuga, tomate y mahonesa',
				price: '4,50 €',
			},
			{
				name: 'Campero César',
				note: 'pollo empanado, mezclum de lechugas, queso y salsa césar',
				price: '4,50 €',
			},
			{
				name: 'Campero bacon',
				note: 'bacon, queso, lechuga, tomate y mahonesa',
				price: '4,00 €',
			},
			{
				name: 'Campero de pollo',
				note: 'pechuga de pollo, queso, jamón cocido, lechuga, tomate y mahonesa',
				price: '4,00 €',
			},
		],
	},
	{
		title: 'Superbocatas',
		items: [
			{
				name: 'Bocata de cerdo',
				note: 'filetitos de cerdo, tomate, queso, lechuga y mahonesa',
				price: '3,50 €',
			},
			{
				name: 'Bocata de pollo',
				note: 'pechuga de pollo, tomate, lechuga, queso y mahonesa',
				price: '3,50 €',
			},
			{
				name: 'Montadito',
				note: 'montadito de cerdo, tomate, lechuga, queso y mahonesa',
				price: '3,50 €',
			},
			{
				name: 'Serranito',
				note: 'jamón serrano, pimientos fritos y mahonesa',
				price: '4,00 €',
			},
			{
				name: 'Bacon',
				note: 'bacon, queso, lechuga, tomate y mahonesa',
				price: '3,00 €',
			},
			{
				name: 'Vegetal de atún',
				note: 'atún, queso, cebolla, tomate, lechuga y mahonesa',
				price: '3,00 €',
			},
			{
				name: 'Tortilla',
				note: 'tortilla francesa, lechuga, queso, tomate, jamón cocido y mahonesa',
				price: '3,00 €',
			},
			{
				name: 'Bocata de calamares',
				note: 'anillas de calamar y mahonesa',
				price: '4,00 €',
			},
		],
	},
	{
		title: 'Superhamburguesas',
		items: [
			{
				name: 'Normal',
				note: 'hamburguesa de pollo o ternera, queso, ketchup y mahonesa',
				price: '2,50 €',
			},
			{
				name: 'Completa',
				note: 'pollo o ternera, queso, tomate, lechuga, cebolla, ketchup, mahonesa y mostaza',
				price: '3,00 €',
			},
			{
				name: 'Especial',
				note: 'hamburguesa de buey, queso de cabra y cebolla caramelizada',
				price: '4,00 €',
			},
			{
				name: 'Súper',
				note: 'ternera, bacon, huevo, lechuga, tomate, cebolla, mahonesa y ketchup',
				price: '4,00 €',
			},
		],
	},
	{
		title: 'Pizzas',
		items: [
			{ name: 'Básica', note: 'tomate, queso y jamón cocido', price: '9,00 €' },
			{ name: 'Catalana', note: 'tomate, queso, jamón serrano, tomate natural y mozzarella', price: '9,00 €' },
			{ name: '4 quesos', note: 'tomate, mozzarella, emmental, parmesano y gorgonzola', price: '9,00 €' },
			{ name: 'Tuna', note: 'tomate, queso, atún, cebolla, champiñones y pollo', price: '9,00 €' },
			{ name: 'Jazmín', note: 'tomate, queso, jamón cocido, pollo, pimiento rojo y maíz', price: '9,00 €' },
			{ name: 'Carbonara', note: 'nata, cebolla, champiñones, bacon y queso', price: '9,00 €' },
			{ name: 'Barbacoa', note: 'carne picada de ternera, cebolla y salsa barbacoa', price: '9,00 €' },
			{ name: 'Campera', note: 'cebolla, calabacín, pimiento rojo y verde, tomate y aceitunas', price: '9,00 €' },
			{ name: 'Frankfurta', note: 'salchichas, queso y cebolla', price: '9,00 €' },
			{ name: 'Hawaiana', note: 'piña, jamón cocido y aceitunas negras', price: '9,00 €' },
			{ name: 'Roquefort', note: '4 quesos y roquefort', price: '9,00 €' },
			{ name: 'Especial', note: 'cebolla, champiñones, atún, huevo, bacon y pollo', price: '9,00 €' },
			{ name: 'Showarma', note: 'cebolla, carne showarma y salsa de yogur', price: '10,00 €' },
			{ name: 'Cateta', note: 'tomate, queso, carne picada con chorizo, bacon y salsa rosa', price: '10,00 €' },
			{ name: 'Marinera', note: 'tomate, nata, queso, gambas, bocas de mar, atún y anchoas', price: '10,00 €' },
		],
	},
	{
		title: 'Para picar',
		items: [
			{ name: 'Patatas fritas finas', note: 'ración o media de la casa', price: '3,00 €' },
			{ name: 'Patatas deluxe', note: 'ración o media, más gruesas', price: '3,50 €' },
			{ name: 'Croquetas caseras', note: 'ración de la cocina', price: '4,00 €' },
			{ name: 'Nuggets de pollo', note: 'para compartir', price: '3,50 €' },
			{ name: 'Lagrimitas de pollo caseras', note: 'con mahonesa o alioli', price: '4,00 €' },
			{ name: 'Aros de cebolla', note: 'rebozados, para el centro', price: '3,50 €' },
			{ name: 'Patatas con bacon y 4 quesos', note: 'fritas finas con la salsa de la casa', price: '7,00 €' },
			{ name: 'Patatas con showarma de pollo', note: 'con salsa de yogur', price: '7,00 €' },
			{ name: 'Ensalada mixta', note: 'lechuga, cebolla, tomate y maíz con salsa rosa', price: '5,50 €' },
			{ name: 'Ensalada showarma', note: 'lechuga, cebolla, tomate, carne showarma, queso y yogur', price: '6,00 €' },
			{ name: 'Patatas especiales come showarma', note: 'salsa rosa, yogur, mozzarella y 4 quesos', price: '7,00 €' },
			{ name: 'Alitas de pollo', note: 'cuatro unidades', price: '6,00 €' },
			{ name: 'Patatas camperazo', note: 'patatas naturales, queso, bacon, huevo y mayonesa', price: '7,00 €' },
			{ name: 'Patatas arrieras', note: 'patatas naturales, alioli, dos huevos y gambas al pilpil', price: '8,00 €' },
		],
	},
	{
		title: 'Bebidas',
		items: [
			{ name: 'Refrescos', note: 'lata, bien fría', price: '1,50 €' },
			{ name: 'Cerveza', note: 'para acompañar el campero', price: '1,50 €' },
			{ name: 'Aquarius', note: 'lata', price: '1,50 €' },
			{ name: 'Nestea', note: 'lata', price: '1,50 €' },
			{ name: 'Agua', note: 'botella pequeña', price: '1,50 €' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Hamburguesería El Camperazo?',
		a: 'En la esquina de la calle Mora y Cabrera, 38, en Puerto de la Torre, 29190 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre de jueves a domingo de 20:00 a 24:00, según la ficha de Google. De lunes a miércoles está cerrado. En festivos puede cambiar; el día de Todos los Santos, por ejemplo, la ficha avisa de que el horario podría ser distinto, así que conviene llamar antes.',
	},
	{
		q: '¿Qué se puede comer y cuánto cuesta?',
		a: 'La casa es una hamburguesería de barrio y su especialidad son los camperos, que van de 3,00 € el normal a 4,50 € los más cargados. También hay bocatas desde 3,00 €, hamburguesas desde 2,50 €, pizzas desde 9,00 € y raciones para picar desde 3,00 €. La carta completa está en esta misma página.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'Sí. La carta de esta página está copiada de las pizarras y carteles fotografiados en el perfil del local en Google Maps, con sus precios. Si han cambiado, manda lo que digan en el bar o por teléfono.',
	},
	{
		q: '¿Se puede reservar?',
		a: `La ficha no publica un sistema de reservas ni una web propia. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para mesa o para preguntar por el servicio de esa noche.`,
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: `Sí, la casa trabaja con pedidos por teléfono: la tarjeta del local da dos números, ${BUSINESS.phone} y ${BUSINESS.ordersPhone}. Llama para encargar los camperos, las pizzas o las raciones y pregunta por la recogida. El reparto a domicilio no consta como servicio en la ficha de Google.`,
	},
	{
		q: '¿Qué es el Día del Camperazo?',
		a: 'Es una promoción de los jueves que anuncia el propio local en su cartel: «pide tu cena y te llevamos la bebida». Las condiciones pueden cambiar, así que confírmalas al hacer el pedido.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica que no hay aparcamiento adaptado, ni aseo adaptado, ni asientos adaptados para sillas de ruedas. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,8 sobre 5 con 485 reseñas en Google, según la ficha consultada. Las reseñas destacan las cantidades, la rapidez del servicio y la amabilidad.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del local. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
