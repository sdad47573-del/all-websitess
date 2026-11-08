/**
 * Datos de Sonar Bangla — R. do Benformoso 262, 1100-084 Lisboa (Mouraria).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Sonar Bangla», 38.7198882,-9.1349153,
 *   feature 0xd193385f2218e11:0x62c35fdf5b0aa991 (dirección, teléfono, horario,
 *   categorías, nota, reseñas, accesibilidad y la nota del propio local).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 * - Los platos que se citan en la carta salen de los platos que recogen las
 *   reseñas publicadas en la ficha (samosas, polau, naan, bhuna beef, sheikh
 *   kabab, khala channa, fiyaji, aloo shingara, haleem, rogan josh, dopiaza…).
 *
 * La ficha no publica carta con precios ni web propia: solo el teléfono.
 */

export const BUSINESS = {
	name: 'Sonar Bangla',
	shortName: 'Sonar Bangla',
	mark: 'SB',
	street: 'R. do Benformoso, 262',
	city: 'Lisboa',
	region: 'Lisboa',
	regionName: 'Área Metropolitana de Lisboa',
	postalCode: '1100-084',
	country: 'PT',
	phoneDisplay: '920 374 334',
	phoneHref: 'tel:+351920374334',
	rating: 4.4,
	reviewsCount: 758,
	siteUrl: 'https://www.sur-digital.com/sonar-bangla',
	geo: { lat: 38.7198882, lng: -9.1349153 },
	featureId: '0xd193385f2218e11:0x62c35fdf5b0aa991',
	placeId: 'ChIJEY4h8oUzGQ0RkakKW99fw2I',
	cid: '7116637249085286801',
	/** Categorías con las que Google describe el local. */
	googleCats: ['Restaurante indio', 'Restaurante bangladesí'],
	/**
	 * Nota que el propio local ha escrito en su ficha de Google Maps. Está en
	 * inglés y avisa de un traslado, así que la web la recoge tal cual.
	 */
	ownDescription: 'RESTAURANT TRANSFER ON ANOTHER PLACE',
	tagline: 'Cocina de Bangladesh y de la India en la Mouraria',
	description:
		'Sonar Bangla, restaurante indio y bangladesí en la Rua do Benformoso 262 (1100-084 Lisboa, Mouraria): samosas, sheikh kabab, bhuna beef, haleem con paratha y curris como el rogan josh. 4,4 en Google con 758 reseñas. Tel. 920 374 334.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sonar+Bangla/@38.7198882,-9.1349153,17z/data=!3m1!4b1!4m6!3m5!1s0xd193385f2218e11:0x62c35fdf5b0aa991!8m2!3d38.7198882!4d-9.1349153!16s%2Fg%2F11c1ww5j86',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7198882%2C-9.1349153',
	embed: 'https://maps.google.com/maps?q=38.7198882,-9.1349153&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: todos los días, de la mañana a la noche. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–23:30' },
	{ day: 'Martes', value: '9:00–23:30' },
	{ day: 'Miércoles', value: '9:00–23:30' },
	{ day: 'Jueves', value: '9:00–23:30' },
	{ day: 'Viernes', value: '9:00–23:30' },
	{ day: 'Sábado', value: '9:00–23:30' },
	{ day: 'Domingo', value: '9:00–23:30' },
];

/** Señas de identidad que constan en la propia ficha del establecimiento. */
export const SERVICIOS = [
	'Cocina bangladesí',
	'Cocina india',
	'Curris y tandoor',
	'Chá desi',
	'Abierto todos los días',
	'Barrio de la Mouraria',
	'Acceso para sillas de ruedas',
];

/**
 * Carta. Los tres primeros grupos salen de la tarjeta de la casa que aparece
 * fotografiada en la galería de la ficha (vertical-04), con sus precios tal
 * como están impresos. El último grupo recoge los platos que citan las reseñas
 * y que no llevan precio publicado.
 */
export const MENU = [
	{
		title: 'Biryani',
		items: [
			{ name: 'Chicken biryani', note: 'arroz basmati con pollo y especias', price: '7,95 €' },
			{ name: 'Beef biryani', note: 'con ternera guisada', price: '8,50 €' },
			{ name: 'Mutton biryani', note: 'con cordero', price: '8,95 €' },
			{ name: 'Mix biryani', note: 'mezcla de carnes y marisco', price: '12,95 €' },
			{ name: 'Vegetables biryani', note: 'solo verduras', price: '7,50 €' },
			{ name: 'Prawn biryani', note: 'con gambas', price: '9,95 €' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Simple white rice', note: 'arroz blanco', price: '2,00 €' },
			{ name: 'Vegetables rice', note: 'arroz con verduras', price: '3,95 €' },
			{ name: 'Egg fried rice', note: 'arroz frito con huevo', price: '3,50 €' },
			{
				name: 'Egg and vegetables rice',
				note: 'arroz frito con huevo y verduras',
				price: '4,50 €',
			},
			{ name: 'Pilau rice', note: 'arroz pilau con especias', price: '3,50 €' },
			{ name: 'Coconut rice', note: 'arroz con leche de coco', price: '3,00 €' },
		],
	},
	{
		title: 'Pescado con arroz',
		items: [
			{
				name: 'Dorada curry with rice',
				note: 'dorada en salsa de curry, con arroz',
				price: '12,50 €',
			},
			{
				name: 'Salmon curry with rice',
				note: 'salmón en salsa de curry, con arroz',
				price: '12,95 €',
			},
			{
				name: 'Prawn curry with rice',
				note: 'gambas en salsa de curry, con arroz',
				price: '8,95 €',
			},
			{
				name: 'Ruhi curry with rice',
				note: 'carpa rohu, el pescado de río más común en Bangladesh',
				price: '7,95 €',
			},
			{
				name: 'Rupchada curry with rice',
				note: 'pez rupchanda, muy apreciado en las mesas de Dhaka',
				price: '11,95 €',
			},
		],
	},
	{
		title: 'De las reseñas, sin precio en la ficha',
		items: [
			{ name: 'Samosas de carne', note: 'el entrante que más se repite en las reseñas' },
			{ name: 'Aloo shingara', note: 'empanadilla triangular rellena de patata especiada' },
			{ name: 'Fiyaji', note: 'cebolla rebozada y frita, para empezar' },
			{ name: 'Khala channa', note: 'garbanzos especiados' },
			{ name: 'Sheikh kabab', note: 'kebab de carne picada con especias, a la parrilla' },
			{ name: 'Bhuna beef', note: 'ternera guisada hasta que la salsa espesa' },
			{ name: 'Haleem con paratha', note: 'guiso lento de lentejas y carne, con pan para mojar' },
			{ name: 'Naan de ajo y cilantro', note: 'recién salido del tandoor' },
			{ name: 'Chá desi', note: 'té negro con especias, al estilo de Bangladesh' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Sonar Bangla?',
		a: 'En la Rua do Benformoso, 262, en la Mouraria de Lisboa (código postal 1100-084), a un paso del Intendente y de Alfama. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 9:00 a 23:30, de lunes a domingo, según su ficha de Google. Al ser un horario continuo, sirve tanto para comer como para cenar. En festivos la propia ficha avisa de que el horario podría cambiar, así que llama antes si vas en una fecha señalada.',
	},
	{
		q: '¿Es un restaurante indio o bangladesí?',
		a: 'Las dos cosas: Google lo clasifica como restaurante indio y bangladesí. La cocina que se ve en las fotos y en las reseñas es la de Bangladesh, con los curris, el tandoor y el arroz especiado que comparten buena parte del recetario indio.',
	},
	{
		q: '¿Qué se come?',
		a: 'La carta de la casa se organiza en biryani (pollo, ternera, cordero, verduras, gambas o mixto), arroces (blanco, con verduras, frito con huevo, pilau o con coco) y pescado con arroz (dorada, salmón, gambas, carpa ruhi o rupchada). A eso se suman los platos que citan las reseñas: samosas de carne, aloo shingara, fiyaji, khala channa, sheikh kabab, bhuna beef, haleem con paratha, naan de ajo y cilantro y chá desi.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reserva online. El teléfono del restaurante es el 920 374 334, así que lo más sencillo es llamar, sobre todo si vais en grupo.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'En la tarjeta de la casa que aparece fotografiada en su ficha, el biryani de pollo cuesta 7,95 €, el de ternera 8,50 €, el de cordero 8,95 € y el de verduras 7,50 €; el arroz blanco, 2,00 €, y el arroz con coco, 3,00 €. El pescado con arroz va de los 7,95 € del ruhi a los 12,95 € del salmón. Son los precios impresos en esa tarjeta: confirma los del día al llamar al 920 374 334.',
	},
	{
		q: 'La ficha avisa de un traslado, ¿está en el mismo sitio?',
		a: 'En su ficha de Google, el propio local ha escrito la nota «RESTAURANT TRANSFER ON ANOTHER PLACE» (restaurante trasladado a otro lugar). Se mantiene la dirección y el teléfono que publica la ficha, pero por si acaso conviene llamar al 920 374 334 y confirmar la dirección antes de ir.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas. No confirma aseo adaptado ni asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 758 reseñas. El reparto de notas muestra muchísimas de cinco estrellas y también algunas de una, con la comida muy bien valorada y el servicio con opiniones dispares.',
	},
	{
		q: '¿Tiene web propia o servicio a domicilio?',
		a: 'La ficha no publica web propia: solo el teléfono. Sobre el reparto a domicilio no hay datos en la ficha, así que si lo necesitas pregunta al llamar al 920 374 334.',
	},
];
