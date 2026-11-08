/**
 * Datos de Restaurante Lucheng Nueva Málaga — C. Maestro Pablo Luna, 4,
 * Bailén-Miraflores, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Lucheng Nueva Málaga»,
 *   36.7249428,-4.4434575, feature 0xd72f70bedb884fd:0x378a17af2f6e5e9a,
 *   place id ChIJ_YS47Qv3cg0Rml5uL68Xijc.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, atributos de
 *   accesibilidad y reseñas: ficha pública de Google consultada en octubre de 2026.
 * - La carta y sus precios salen de la foto del menú impreso publicada en la
 *   propia galería del local. Es una selección, no la carta entera.
 */

export const BUSINESS = {
	name: 'Restaurante Lucheng Nueva Málaga',
	fullName: 'Restaurante Lucheng Nueva Málaga',
	shortName: 'Lucheng',
	mark: '鹿城',
	street: 'C. Maestro Pablo Luna, 4',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/restaurante-lucheng-nueva-malaga',
	geo: { lat: 36.7249428, lng: -4.4434575 },
	featureId: '0xd72f70bedb884fd:0x378a17af2f6e5e9a',
	placeId: 'ChIJ_YS47Qv3cg0Rml5uL68Xijc',
	category: 'Restaurante chino',
	phone: '952 28 55 74',
	phoneHref: 'tel:+34952285574',
	tagline: 'Cocina china de mediodía y de noche en Bailén-Miraflores',
	description:
		'Restaurante Lucheng Nueva Málaga, en C. Maestro Pablo Luna, 4 (Bailén-Miraflores, 29010 Málaga). Cocina china con dos turnos diarios: sopas, arroces y tallarines, pato y especiales de la casa. 3,9 sobre 5 con 210 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Lucheng+Nueva+M%C3%A1laga/@36.7249428,-4.4434575,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70bedb884fd:0x378a17af2f6e5e9a!8m2!3d36.7249428!4d-4.4434575!16s%2Fg%2F1tdqvw_y?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7249428%2C-4.4434575',
	embed: 'https://maps.google.com/maps?q=36.7249428,-4.4434575&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7249428,-4.4434575',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.9,
	count: 210,
	label: '3,9',
};

/**
 * Horario publicado en la ficha: dos turnos, mediodía y noche. Cierra el
 * miércoles. Google avisa de que el Día de Todos los Santos puede cambiar.
 */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–16:00 · 20:00–23:00', closed: false },
	{ dia: 'Martes', horas: '13:00–16:00 · 20:00–23:00', closed: false },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '13:00–16:00 · 20:00–23:00', closed: false },
	{ dia: 'Viernes', horas: '13:00–16:00 · 20:00–23:00', closed: false },
	{ dia: 'Sábado', horas: '13:00–16:00 · 20:00–23:00', closed: false },
	{ dia: 'Domingo', horas: '13:00–16:00 · 20:00–23:00', closed: false },
];

export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente. Llama al 952 28 55 74 si vienes en festivo.';

export const HIGHLIGHTS = [
	{
		title: 'Arroz con curry y ternera',
		text: 'El plato que destaca la primera reseña publicada: «especialmente el arroz con ternera y curry». En la carta aparece como arroz con curry y ternera (4,85 €).',
	},
	{
		title: 'Tallarines y fideos',
		text: 'La misma reseña añade «y los fideos chinos, muy sabrosos». La carta los ofrece con ternera, pollo, gambas o tres delicias, entre 4,80 y 6,15 €.',
	},
	{
		title: 'Dos turnos, seis días',
		text: 'Mediodía de 13:00 a 16:00 y noche de 20:00 a 23:00, de lunes a domingo salvo el miércoles. Conviene mirar la hora antes de bajar.',
	},
];

/** Selección de la carta fotografiada en la ficha. Los precios pueden cambiar. */
export const MENU = [
	{
		title: 'Sopas',
		source: 'de la carta fotografiada en la ficha',
		items: [
			{ name: 'Sopa de huevos revueltos', price: '3,25 €' },
			{ name: 'Sopa de wan tun', price: '4,25 €' },
			{ name: 'Sopa agripicante', price: '3,85 €' },
			{ name: 'Sopa de aleta de tiburón', price: '3,95 €' },
			{ name: 'Sopa de maíz', price: '3,95 €' },
			{ name: 'Sopa de pollo con champiñones', price: '3,85 €' },
		],
	},
	{
		title: 'Entrantes',
		source: 'de la carta fotografiada en la ficha',
		items: [
			{ name: 'Ensalada de cangrejo', price: '5,45 €' },
			{ name: 'Ensalada china', price: '3,95 €' },
			{ name: 'Ensalada de brote de soja', price: '4,25 €' },
			{ name: 'Rollo de primavera', price: '1,90 €' },
			{ name: 'Wan-tun frito', price: '3,65 €' },
			{ name: 'Pan chino', price: '1,95 €' },
		],
	},
	{
		title: 'Arroces y tallarines',
		source: 'de la carta fotografiada en la ficha',
		items: [
			{ name: 'Tallarines fritos con ternera', price: '4,85 €' },
			{ name: 'Tallarines fritos con pollo', price: '4,80 €' },
			{ name: 'Tallarines fritos con gambas', price: '5,15 €' },
			{ name: 'Arroz frito con curry', price: '4,65 €' },
			{ name: 'Arroz con curry y ternera', price: '4,85 €', note: 'el plato que destaca una reseña' },
			{ name: 'Arroz frito de la casa', price: '5,65 €' },
			{ name: 'Udon frito', price: '5,65 €' },
		],
	},
	{
		title: 'Verduras y ternera',
		source: 'de la carta fotografiada en la ficha',
		items: [
			{ name: 'Verduras salteadas variadas', price: '4,25 €' },
			{ name: 'Bambú y seta china', price: '4,55 €' },
			{ name: 'Ternera con salsa de ostras', price: '7,25 €' },
			{ name: 'Ternera con salsa al curry', price: '7,25 €' },
			{ name: 'Ternera a la plancha estilo chino', price: '7,95 €' },
		],
	},
	{
		title: 'Cerdo y pollo',
		source: 'de la carta fotografiada en la ficha',
		items: [
			{ name: 'Cerdo agridulce', price: '6,85 €' },
			{ name: 'Costillas asadas', price: '8,95 €' },
			{ name: 'Pollo agridulce', price: '6,85 €' },
			{ name: 'Pollo con limón', price: '7,85 €' },
			{ name: 'Pollo con almendras', price: '6,95 €' },
			{ name: 'Pollo con piña', price: '7,95 €' },
		],
	},
	{
		title: 'Pescado, pato y especiales',
		source: 'de la carta fotografiada en la ficha',
		items: [
			{ name: 'Pescado agridulce', price: '7,25 €' },
			{ name: 'Langostinos con salsa de ostras', price: '7,95 €' },
			{ name: 'Pato a la naranja', price: '11,95 €' },
			{ name: 'Pato Pekín', price: '13,25 €' },
			{ name: 'Gyozas de pollo frito', price: '7,90 €' },
			{ name: 'Pollo al estilo gongbao', price: '8,55 €' },
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual, incluida la negativa. */
export const RESENAS = [
	{
		texto: 'Especialmente el arroz con ternera y curry y los fideos chinos, muy sabrosos.',
		valor: 5,
	},
	{
		texto: 'Comida deliciosa, muy buen ambiente y profesionalidad del personal.',
		valor: 5,
	},
	{
		texto: 'Si no llegamos a preguntar, todavía estamos esperando.',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Lucheng Nueva Málaga?',
		a: 'En la calle Maestro Pablo Luna, 4, en Bailén-Miraflores (29010 Málaga). El mapa de esta página abre las coordenadas exactas de la ficha y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a domingo, con dos turnos: 13:00–16:00 y 20:00–23:00. El miércoles cierra. La ficha advierte de que el Día de Todos los Santos el horario podría ser diferente.',
	},
	{
		q: '¿Hay carta?',
		a: 'Sí: la ficha tiene una foto del menú impreso, y de ahí salen los platos y precios de esta página (una selección). La carta completa, con todas las categorías, se ve en la foto de la galería. Los precios pueden cambiar.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'En la carta fotografiada, los entrantes van de 1,90 a 5,45 €, los arroces y tallarines de 4,15 a 6,15 €, y los platos de carne, pescado y pato de 6,55 a 13,25 €. Son precios del menú impreso, no una oferta cerrada.',
	},
	{
		q: '¿Qué recomiendan las reseñas?',
		a: 'El arroz con ternera y curry y los fideos chinos, citados por una reseña. Otra destaca el ambiente y la profesionalidad del personal. También hay una queja publicada por la espera.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica reservas online ni un teléfono específico para ellas. Si vais en grupo, lo prudente es llamar antes al 952 28 55 74.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'La ficha pública no enlaza ningún servicio de reparto. Si necesitas entrega, pregúntalo por teléfono antes de contar con ella.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados. No detalla aseo adaptado ni aparcamiento accesible, así que esta web no lo afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,9 sobre 5 con 210 reseñas en el momento de consultar la ficha (octubre de 2026). Las publicadas mezclan opiniones muy buenas con alguna queja por la espera.',
	},
];
