/**
 * Datos de Comida para llevar Mesoamerica — C. de Joaquín Turina, 23,
 * Carabanchel (28044 Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Comida para llevar Mesoamerica»,
 *   40.3726127,-3.7528003, feature 0xd418900011bc573:0xfa02c70454ea3486.
 * - Nombre, dirección, categoría, teléfono, valoración, reseñas, atributos y
 *   fotografías: ficha pública de Google consultada en octubre de 2026.
 * - Carta, precios y horario: cartel y pizarra del propio local que aparecen
 *   en las fotos del perfil de Google. La ficha no publica horario ni web.
 *
 * Lo que no se publica: página web, pedidos online, reparto a domicilio ni
 * datos de accesibilidad. La ficha solo marca que no hay aparcamiento adaptado.
 * Algunos productos (pollo con tajadas, tacos flauta, pupusas de pollo y
 * quesadilla de pollo) figuran en el cartel como «por encargo».
 */

export const BUSINESS = {
	name: 'Mesoamérica',
	fullName: 'Comida para llevar Mesoamerica',
	shortName: 'Mesoamérica',
	mark: 'M',
	street: 'C. de Joaquín Turina, 23',
	district: 'Carabanchel',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28044',
	country: 'ES',
	siteUrl: 'https://comida-para-llevar-mesoamerica.vercel.app',
	geo: { lat: 40.3726127, lng: -3.7528003 },
	featureId: '0xd418900011bc573:0xfa02c70454ea3486',
	placeId: 'ChIJc8UbAQCJQQ0RhjTqVATHAvo',
	plusCode: '8CGR96FW+2V',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '643 64 26 85',
	phoneHref: 'tel:+34643642685',
	facebook:
		'https://www.facebook.com/p/Mesoam%C3%A9rica-Comida-Para-Llevar-61558422064380/',
	tagline: 'Tacos, pupusas y baleadas para llevar en Carabanchel',
	description:
		'Mesoamérica, en C. de Joaquín Turina, 23 (Carabanchel, 28044 Madrid). Tacos, pupusas, baleadas y pollo con tajadas para llevar. Martes a domingo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Comida+para+llevar+Mesoamerica/@40.3726127,-3.7528003,17z/data=!3m1!4b1!4m6!3m5!1s0xd418900011bc573:0xfa02c70454ea3486!8m2!3d40.3726127!4d-3.7528003!16s%2Fg%2F11y41gjxk2?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.3726127%2C-3.7528003',
	embed: 'https://maps.google.com/maps?q=40.3726127,-3.7528003&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.3726127,-3.7528003',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 110,
	label: '4,7',
};

/** Horario del cartel del local; la ficha de Google no lo publica. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '13:00–16:00 · 18:30–22:30' },
	{ dia: 'Miércoles', horas: '13:00–16:00 · 18:30–22:30' },
	{ dia: 'Jueves', horas: '13:00–16:00 · 18:30–22:30' },
	{ dia: 'Viernes', horas: '13:00–16:00 · 19:00–23:00' },
	{ dia: 'Sábado', horas: '13:00–16:00 · 19:00–23:00' },
	{ dia: 'Domingo', horas: '13:00–16:00 · 19:00–23:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha de Google no publica horario: este es el del cartel del local que aparece en las fotos del perfil. La propia ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. Confírmalo por teléfono antes de ir.';

/** Lo que la ficha, el cartel y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Tacos',
	'Pupusas',
	'Baleadas',
	'Pollo con tajadas',
	'Por encargo',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Tacos',
		text: 'Seis rellenos en el cartel: al pastor, pollo, tinga de pollo, cochinita pibil, arrachera y birria. Los precios van de 1,40 € a 2,00 € según el relleno, y se pueden pedir sueltos.',
	},
	{
		title: 'Pupusas',
		text: 'Frijol con queso, revueltas, chicharrón con queso, espinaca con queso, queso con loroco y queso. El cartel no muestra precios para las pupusas: se preguntan al pedir.',
	},
	{
		title: 'Baleadas',
		text: 'Sencillas por 2,00 €, de pollo o huevo y aguacate por 2,30 €, de chorizo por 2,50 € y con todo por 3,50 €. Es la otra especialidad hondureña de la casa, junto al pollo con tajadas.',
	},
	{
		title: 'Por encargo',
		text: 'El cartel anuncia pollo con tajadas, tacos flauta por orden de cinco, pupusas de pollo y quesadilla de pollo como platos por encargo. El teléfono 643 64 26 85 es el canal para pedirlos.',
	},
];

/** Platos y precios del cartel y de la pizarra del local. */
export const MENU = [
	{
		title: 'Tacos',
		items: [
			{ name: 'Al pastor', note: 'taco suelto', price: '1,50 €' },
			{ name: 'De pollo', note: 'taco suelto', price: '1,40 €' },
			{ name: 'Tinga de pollo', note: 'taco suelto', price: '1,40 €' },
			{ name: 'Cochinita pibil', note: 'taco suelto', price: '1,40 €' },
			{ name: 'De arrachera', note: 'taco suelto', price: '2,00 €' },
			{ name: 'De birria', note: 'en la pizarra; el precio no aparece' },
		],
	},
	{
		title: 'Pupusas',
		items: [
			{ name: 'Frijol con queso', note: 'el cartel no muestra precio' },
			{ name: 'Revueltas', note: 'el cartel no muestra precio' },
			{ name: 'Chicharrón con queso', note: 'el cartel no muestra precio' },
			{ name: 'Espinaca con queso', note: 'el cartel no muestra precio' },
			{ name: 'Queso con loroco', note: 'el cartel no muestra precio' },
			{ name: 'Queso', note: 'el cartel no muestra precio' },
		],
	},
	{
		title: 'Baleadas',
		items: [
			{ name: 'Sencillas', note: 'baleada de la casa', price: '2,00 €' },
			{ name: 'Pollo', note: 'baleada de pollo', price: '2,30 €' },
			{ name: 'Huevo y aguacate', note: 'baleada de huevo y aguacate', price: '2,30 €' },
			{ name: 'Chorizo', note: 'baleada de chorizo', price: '2,50 €' },
			{ name: 'Con todo', note: 'la completa', price: '3,50 €' },
		],
	},
	{
		title: 'Por encargo',
		items: [
			{ name: 'Pollo con tajadas', note: 'por encargo; precio no publicado' },
			{ name: 'Tacos flauta', note: 'orden de 5; precio no publicado' },
			{ name: 'Pupusas de pollo', note: 'por encargo; precio no publicado' },
			{ name: 'Quesadilla de pollo', note: 'por encargo; precio no publicado' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'He probado los tacos flautas muy ricos y las pupusas revuelta también muy ricas',
		valor: 5,
	},
	{
		texto: 'La comida super buena, buenos precios, puntuales y las empleadas super amables!!',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesoamérica?',
		a: 'En la calle de Joaquín Turina, 23, en el distrito de Carabanchel (28044 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'El cartel del local marca de martes a jueves de 13:00 a 16:00 y de 18:30 a 22:30, y de viernes a domingo de 13:00 a 16:00 y de 19:00 a 23:00. El lunes cierra. La ficha de Google no publica horario y avisa de que el Día de Todos los Santos podría ser distinto.',
	},
	{
		q: '¿Qué tipo de comida se puede pedir?',
		a: 'Tacos mexicanos, pupusas hondureñas, baleadas y platos por encargo como el pollo con tajadas, los tacos flauta, las pupusas de pollo o la quesadilla de pollo. Todo está pensado para llevar.',
	},
	{
		q: '¿Cuánto cuestan los tacos?',
		a: 'Según el cartel: al pastor 1,50 €, de pollo 1,40 €, tinga de pollo 1,40 €, cochinita pibil 1,40 € y de arrachera 2,00 €. El taco de birria aparece sin precio. Los importes pueden cambiar; confírmalos al pedir.',
	},
	{
		q: '¿Qué rellenos de pupusas hay?',
		a: 'Frijol con queso, revueltas, chicharrón con queso, espinaca con queso, queso con loroco y queso. El cartel no indica el precio de las pupusas, así que hay que preguntarlo por teléfono o en el local.',
	},
	{
		q: '¿Cuánto cuestan las baleadas?',
		a: 'Las sencillas cuestan 2,00 €; las de pollo o de huevo y aguacate, 2,30 €; las de chorizo, 2,50 €; y la de «con todo», 3,50 €. Son los precios de la pizarra del local fotografiada en octubre de 2026.',
	},
	{
		q: '¿Qué platos hay por encargo?',
		a: 'El cartel anuncia pollo con tajadas, tacos flauta por orden de cinco unidades, pupusas de pollo y quesadilla de pollo. No publica precios para estos encargos; se consultan en el teléfono 643 64 26 85.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono en el 643 64 26 85 o en el propio local. La ficha también enlaza a la página de Facebook de Mesoamérica. No consta página web propia, pedido online ni una carta con todos los precios.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni el cartel del local publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es la comida para llevar y el teléfono para encargar. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo marca que no hay aparcamiento adaptado para sillas de ruedas. No publica datos sobre el acceso, el interior o los aseos, así que no se puede confirmar la accesibilidad del local. Si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 110 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian los tacos flautas, las pupusas, los precios y la atención.',
	},
];
