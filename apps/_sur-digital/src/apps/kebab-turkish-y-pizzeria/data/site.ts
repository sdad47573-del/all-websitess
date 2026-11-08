/**
 * Datos de Kebab Turkish y Pizzeria — C. Lara Castañeda, 9, Puerto de la Torre,
 * 29190 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Kebab Turkish y Pizzeria»,
 *   36.7358703,-4.4799853, feature 0xd72f0d4ab52f9af:0xb4d14450aa30fdc7,
 *   place id ChIJr_lSq9Twcg0Rx_0wqlBE0bQ.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, atributos de
 *   accesibilidad y reseñas: ficha pública consultada en octubre de 2026.
 * - La carta, los precios, el segundo teléfono y el cartel de «Servicio a
 *   domicilio» salen de las fotos de la propia galería: la carta está impresa
 *   en las dos hojas de la puerta y el rótulo de la fachada.
 *
 * La carta es la fotografiada en la puerta, no un documento del local: los
 * precios pueden cambiar y la web lo advierte.
 */

export const BUSINESS = {
	name: 'Kebab Turkish y Pizzeria',
	fullName: 'Kebab Turkish y Pizzeria',
	shortName: 'Turkish',
	mark: 'T',
	street: 'C. Lara Castañeda, 9',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29190',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/kebab-turkish-y-pizzeria',
	geo: { lat: 36.7358703, lng: -4.4799853 },
	featureId: '0xd72f0d4ab52f9af:0xb4d14450aa30fdc7',
	placeId: 'ChIJr_lSq9Twcg0Rx_0wqlBE0bQ',
	category: 'Pizzería',
	phone: '951 50 35 34',
	phoneHref: 'tel:+34951503534',
	deliveryPhone: '617 584 066',
	deliveryPhoneHref: 'tel:+34617584066',
	tagline: 'Kebab turco y pizza en Puerto de la Torre',
	description:
		'Kebab Turkish y Pizzeria, en C. Lara Castañeda, 9 (Puerto de la Torre, 29190 Málaga). Kebab turco, pizzas de masa fresca y menús para llevar o a domicilio, con dos turnos de lunes a domingo salvo el viernes al mediodía. 3,5 sobre 5 con 209 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Kebab+Turkish+y+Pizzeria/@36.7358703,-4.4799853,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f0d4ab52f9af:0xb4d14450aa30fdc7!8m2!3d36.7358703!4d-4.4799853!16s%2Fg%2F11g8k4_hf4?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7358703%2C-4.4799853',
	embed: 'https://maps.google.com/maps?q=36.7358703,-4.4799853&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7358703,-4.4799853',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.5,
	count: 209,
	label: '3,5',
};

/**
 * Horario publicado en la ficha: dos turnos de 13:00 a 16:00 y de 19:00 a
 * 24:00, salvo el viernes, que solo abre por la noche. Sin día de cierre.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–16:00 · 19:00–24:00', closed: false },
	{ dia: 'Martes', horas: '13:00–16:00 · 19:00–24:00', closed: false },
	{ dia: 'Miércoles', horas: '13:00–16:00 · 19:00–24:00', closed: false },
	{ dia: 'Jueves', horas: '13:00–16:00 · 19:00–24:00', closed: false },
	{ dia: 'Viernes', horas: '19:00–24:00', closed: false, note: 'sin mediodía' },
	{ dia: 'Sábado', horas: '13:00–16:00 · 19:00–24:00', closed: false },
	{ dia: 'Domingo', horas: '13:00–16:00 · 19:00–24:00', closed: false },
];

export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente. Llama al 951 50 35 34 antes de bajar en festivo.';

export const HIGHLIGHTS = [
	{
		title: 'Döner, rollo y pizza turca',
		text: 'La carta de la puerta abre con 24 pizzas de masa fresca y sigue con döner kebab, rollos, pizza turca, campero y hamburguesas. Todo se puede pedir suelto o como menú.',
	},
	{
		title: 'Pizza mediana por 5 €',
		text: 'Los tres tamaños están escritos a la vista: mediana 5,00 €, grande 6,00 € y familiar 9,99 €. El calzone cuesta 0,50 € más. No hay precios distintos por ingrediente.',
	},
	{
		title: 'Reparto a domicilio',
		text: 'En el rótulo pone «Servicio a domicilio» y hay un segundo número para pedidos, el 617 584 066. Una reseña de una estrella es, precisamente, por una espera larga en el reparto.',
	},
];

export const TAMANOS = [
	{ label: 'Mediana', price: '5,00 €' },
	{ label: 'Grande', price: '6,00 €' },
	{ label: 'Familiar', price: '9,99 €' },
];

export const NOTA_PIZZA = 'Masa fresca. Calzone: 0,50 € más.';

export type Pizza = { n: number; name: string; ingredients: string };

/** Las 24 pizzas de la carta impresa en la puerta, con sus ingredientes. */
export const PIZZAS: Pizza[] = [
	{ n: 1, name: 'Margarita', ingredients: 'Mozzarella y tomate' },
	{ n: 2, name: 'Atún', ingredients: 'Mozzarella, tomate y atún' },
	{ n: 3, name: 'Jamón', ingredients: 'Mozzarella, tomate y jamón' },
	{ n: 4, name: 'Malagueña', ingredients: 'Mozzarella, tomate, atún y cebolla' },
	{ n: 5, name: 'Hawaiana', ingredients: 'Mozzarella, tomate, jamón y piña' },
	{ n: 6, name: 'Bandito', ingredients: 'Mozzarella, tomate, jamón, bacon y carne de kebab' },
	{ n: 7, name: 'Napoli', ingredients: 'Mozzarella, atún, jamón, bacon y huevo' },
	{ n: 8, name: 'Halal Especial', ingredients: 'Salsa blanca, queso, carne de kebab y pollo' },
	{ n: 9, name: 'Classic', ingredients: 'Mozzarella, tomate y carne de pollo' },
	{
		n: 10,
		name: 'Completa',
		ingredients: 'Mozzarella, tomate, atún, jamón, champiñones, pimientos, cebolla y aceitunas',
	},
	{ n: 11, name: 'Champiñones', ingredients: 'Mozzarella, tomate, champiñones, jamón y huevo' },
	{
		n: 12,
		name: 'Boloñesa',
		ingredients: 'Mozzarella, tomate, carne picada, atún, pollo, aceitunas y pepperoni',
	},
	{ n: 13, name: 'Calzone doblado', ingredients: 'Mozzarella, tomate, atún, jamón y champiñones' },
	{ n: 14, name: 'Cuatro quesos', ingredients: 'Cuatro quesos y tomate' },
	{ n: 15, name: 'Luna 4 quesos', ingredients: 'Cuatro quesos, tomate, champiñones, jamón y huevo' },
	{ n: 16, name: 'Carbonara', ingredients: 'Mozzarella, tomate, nata, bacon y cebolla' },
	{
		n: 17,
		name: 'Carbonara 2',
		ingredients: 'Mozzarella, tomate, salsa carbonara, champiñones, bacon y huevo',
	},
	{ n: 18, name: 'Barbacoa', ingredients: 'Mozzarella, salsa barbacoa, bacon, pollo y carne picada' },
	{ n: 19, name: 'New York', ingredients: 'Mozzarella, tomate, jamón, bacon y patatas fritas' },
	{ n: 20, name: 'Burguer', ingredients: 'Mozzarella, tomate, salsa barbacoa y carne de hamburguesa de ternera' },
	{ n: 21, name: 'Especial', ingredients: 'Mozzarella, tomate, pollo, cebolla, pimientos y picante verde' },
	{ n: 22, name: 'Vegetal', ingredients: 'Mozzarella, tomate, champiñones, maíz, cebolla y pimientos' },
	{ n: 23, name: 'Frankfurt', ingredients: 'Mozzarella, tomate, huevo, salchichas y patatas fritas' },
	{ n: 24, name: 'Cuatro estaciones', ingredients: 'Mozzarella, tomate, jamón, bacon, carne y huevos' },
];

/**
 * Menús especiales de la segunda hoja. `price` es el precio suelto y `menu` el
 * que la carta marca con bebida o como menú; el impreso no detalla qué incluye
 * cada uno, así que la web lo dice y no lo interpreta.
 */
export type Especial = { n: number; name: string; price: string; menu?: string; note?: string };

export const ESPECIALES: Especial[] = [
	{ n: 1, name: 'Döner kebab', price: '3,50 €' },
	{ n: 2, name: 'Menú kebab', price: '5,00 €' },
	{ n: 3, name: 'Rollo pequeño', price: '2,50 €', menu: '4,50 €' },
	{ n: 4, name: 'Rollo grande', price: '4,00 €' },
	{ n: 5, name: 'Menú rollo grande', price: '5,50 €' },
	{ n: 6, name: 'Pizza turca', price: '4,50 €', menu: '5,00 €' },
	{ n: 7, name: 'Menú pizza turca', price: '6,00 €', menu: '6,50 €' },
	{ n: 8, name: 'Plato salchipapa', price: '5,50 €', menu: '6,00 €' },
	{
		n: 9,
		name: 'Menú 2 personas',
		price: '10,00 €',
		note: 'Pollo, ternera o mixto con ensalada, patatas, arroz, salsas y dos bebidas',
	},
	{ n: 10, name: 'Kebab o rollo de falafel', price: '3,00 €' },
	{ n: 11, name: 'Menú falafel', price: '4,50 €', note: 'Croquetas de garbanzos, ensalada y salsas' },
	{ n: 12, name: 'Carne con patatas', price: '2,50 €', menu: '4,50 €' },
	{ n: 13, name: 'Patatas fritas', price: '1,20 €', menu: '2,50 €' },
	{ n: 14, name: 'Hot dog', price: '3,00 €', menu: '4,50 €' },
	{ n: 15, name: 'Ensalada especial', price: '3,20 €' },
	{ n: 16, name: 'Bebidas', price: '1,00 €' },
	{ n: 17, name: 'Hamburguesa', price: '3,00 €', menu: '4,50 €' },
	{ n: 18, name: 'Menú hamburguesa', price: '4,50 €', menu: '6,00 €' },
	{ n: 19, name: 'Aros de cebolla', price: '2,20 €', menu: '4,00 €' },
	{ n: 20, name: 'Nuggets de pollo', price: '3,00 €', menu: '5,50 €' },
	{ n: 21, name: 'Patatas deluxe', price: '1,60 €', menu: '3,00 €' },
	{ n: 22, name: 'Menú alitas', price: '4,00 €', menu: '5,50 €' },
	{ n: 23, name: 'Campero de kebab', price: '3,80 €' },
	{ n: 24, name: 'Menú campero', price: '5,30 €' },
];

export const NOTA_ESPECIALES =
	'Cuando la carta marca dos precios, el segundo es el del menú. El impreso no dice qué bebida o guarnición incluye: pregúntalo al pedir.';

/** Reseñas publicadas en la ficha, tal cual, incluida la negativa. */
export const RESENAS = [
	{
		texto: 'Unas pizzas buenísimas y un trato amable buen servicio',
		valor: 5,
	},
	{
		texto: 'Buena comida, lo único que no venden cervezas con alcochol',
		valor: 4,
	},
	{
		texto: 'Tardan una barbaridad llevamos esperando 1 hora y 20 minutos y no vienen',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Kebab Turkish y Pizzeria?',
		a: 'En la calle Lara Castañeda, 9, en Puerto de la Torre (29190 Málaga). El mapa de esta página abre las coordenadas exactas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Dos turnos, de 13:00 a 16:00 y de 19:00 a 24:00, de lunes a domingo, con una excepción: el viernes solo abre por la noche, de 19:00 a 24:00. La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente.',
	},
	{
		q: '¿Cuánto cuesta una pizza?',
		a: 'La carta de la puerta marca un precio único por tamaño: mediana 5,00 €, grande 6,00 € y familiar 9,99 €, sea cual sea la pizza. El calzone cuesta 0,50 € más. Los precios son los del impreso y pueden cambiar.',
	},
	{
		q: '¿Qué pizzas tienen?',
		a: 'Veinticuatro, de la margarita a la cuatro estaciones, pasando por la malagueña, la halal especial, la carbonara, la barbacoa o la New York con patatas fritas. Los ingredientes de cada una están en la sección de la carta.',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'En la carta aparecen la margarita, la cuatro quesos, la vegetal (champiñones, maíz, cebolla y pimientos) y el falafel, con versión en menú. No consta que la cocina sea halal certificada: la pizza «Halal Especial» es un nombre de la carta, no una certificación.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'Sí: el rótulo anuncia «Servicio a domicilio» y junto al teléfono fijo aparece el 617 584 066 para pedidos. La ficha no publica plataformas ni importe mínimo, así que conviene llamar antes. Una de las reseñas publicadas se queja de una espera de más de una hora en el reparto.',
	},
	{
		q: '¿Sirven alcohol?',
		a: 'Según una reseña de cuatro estrellas, no hay cerveza con alcohol. La carta impresa solo lista bebidas a 1,00 € sin especificar marcas, así que esta web no puede confirmar qué más se sirve.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no ofrece reservas online ni un teléfono específico para ellas. Si vais en grupo, lo prudente es llamar antes al 951 50 35 34.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. Es uno de los datos que Google detalla con claridad sobre este local.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'La ficha no indica aparcamiento propio ni accesible. Es una calle de Puerto de la Torre, así que hay que buscar sitio en la zona.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,5 sobre 5 con 209 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones publicadas mezclan elogios a la pizza y al trato con quejas por la espera en el reparto.',
	},
];
