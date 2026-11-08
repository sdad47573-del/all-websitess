/**
 * Datos de Tiempo de Comer — C. del Padre Jesús Ordóñez, 16, Chamartín
 * (28002 Madrid).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Tiempo de Comer»,
 *   40.4414231,-3.6775185, feature 0xd42290f7707f5ad:0x2ddb9488f9350744.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, reseñas y
 *   fotografías: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta oficial, precio del menú del día ni datos de accesibilidad.
 * Los platos y precios de esta web son los que aparecen en la pizarra de la
 * vitrina en la foto del perfil.
 */

export const BUSINESS = {
	name: 'Tiempo de Comer',
	fullName: 'Tiempo de Comer',
	shortName: 'Tiempo de Comer',
	mark: 'TC',
	street: 'C. del Padre Jesús Ordóñez, 16',
	district: 'Chamartín',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28002',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/tiempo-de-comer',
	geo: { lat: 40.4414231, lng: -3.6775185 },
	featureId: '0xd42290f7707f5ad:0x2ddb9488f9350744',
	placeId: 'ChIJrfUHdw8pQg0RRAc1-YiU2y0',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '911 66 30 47',
	phoneHref: 'tel:+34911663047',
	tagline: 'Comida casera para llevar en Chamartín',
	description:
		'Tiempo de Comer, en C. del Padre Jesús Ordóñez, 16 (Chamartín, 28002 Madrid). Comida casera y menú del día para llevar, de lunes a sábado, de 12:15 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tiempo+de+Comer/@40.4414231,-3.6775185,17z/data=!3m1!4b1!4m6!3m5!1s0xd42290f7707f5ad:0x2ddb9488f9350744!8m2!3d40.4414231!4d-3.6775185!16s%2Fg%2F11sbhpqw_w?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4414231%2C-3.6775185',
	embed: 'https://maps.google.com/maps?q=40.4414231,-3.6775185&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4414231,-3.6775185',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.3,
	count: 23,
	label: '4,3',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:15–16:00' },
	{ dia: 'Martes', horas: '12:15–16:00' },
	{ dia: 'Miércoles', horas: '12:15–16:00' },
	{ dia: 'Jueves', horas: '12:15–16:00' },
	{ dia: 'Viernes', horas: '12:15–16:00' },
	{ dia: 'Sábado', horas: '12:15–16:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y la foto de la vitrina permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Menú del día',
	'Para llevar',
	'Guisos',
	'Pasta y arroces',
	'Ensaladas',
];

export const HIGHLIGHTS = [
	{
		title: 'Menú del día',
		text: 'Una de las reseñas lo confirma: «Menú del día y platos de comida casera elaborados cada día». La ficha de Google no publica el contenido ni el precio del menú, así que se consulta en el local o por teléfono.',
	},
	{
		title: 'La vitrina, cada día',
		text: 'Las bandejas y las pizarras de la vitrina cambian con el día: albóndigas de ternera, lomo asado con naranja, pechuga con setas, espaguetis al ajillo, ensalada capresse, lentejas y berenjena rellena, entre otros.',
	},
	{
		title: 'Raciones para llevar',
		text: 'Los platos se sirven en envases para llevar. La ficha lo clasifica como restaurante de comida para llevar y las reseñas destacan la variedad: «comida variada y de muy buena calidad con un trato inmejorable».',
	},
	{
		title: 'Precios a la vista',
		text: 'Cada bandeja lleva su pizarra con el nombre y el precio: desde 2,50 € del arroz blanco o 3,50 € de las patatas al ajillo hasta 6,75 € del estufado de ternera. Son los precios vistos en la foto del perfil.',
	},
];

/** Platos y precios que aparecen en la pizarra de la vitrina. */
export const MENU = [
	{
		title: 'Verduras y ensaladas',
		items: [
			{ name: 'Ensalada capresse', note: 'en la pizarra de la vitrina', price: '5,25 €' },
			{ name: 'Ensalada de lentejas', note: 'en la pizarra de la vitrina', price: '5,00 €' },
			{ name: 'Pimientos rellenos', note: 'ración preparada para llevar', price: '5,25 €' },
			{ name: 'Berenjena rellena', note: 'en la pizarra de la vitrina', price: '5,00 €' },
			{ name: 'Champiñones al ajillo', note: 'en la pizarra de la vitrina', price: '5,00 €' },
			{ name: 'Patatas al ajillo', note: 'en la pizarra de la vitrina', price: '3,50 €' },
			{ name: 'Arroz blanco', note: 'como guarnición, en la vitrina', price: '2,50 €' },
		],
	},
	{
		title: 'Pasta y arroz',
		items: [
			{ name: 'Espaguetis al ajillo', note: 'el plato que una reseña llama «impresionante»', price: '4,75 €' },
			{ name: 'Espaguetis boloñesa', note: 'en la pizarra de la vitrina', price: '5,00 €' },
			{ name: 'Tiburones carbonara', note: 'en la pizarra de la vitrina', price: '6,25 €' },
			{ name: 'Lasaña de carne', note: 'en la pizarra de la vitrina', price: '6,50 €' },
			{ name: 'Cuscús', note: 'en la pizarra de la vitrina', price: '4,60 €' },
		],
	},
	{
		title: 'Carnes y guisos',
		items: [
			{ name: 'Albóndigas de ternera', note: 'en la pizarra de la vitrina', price: '5,25 €' },
			{ name: 'Lomo asado con naranja', note: 'en la pizarra de la vitrina', price: '5,75 €' },
			{ name: 'Estufado de ternera', note: 'el plato más caro de la pizarra', price: '6,75 €' },
			{ name: 'Pechuga con setas', note: 'en la pizarra de la vitrina', price: '6,50 €' },
			{ name: 'Pechuga al curry', note: 'en la pizarra de la vitrina', price: '5,50 €' },
			{ name: 'Wok de pollo', note: 'en la pizarra de la vitrina', price: '5,75 €' },
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Increíble, los espaguetis al ajillo impresionantes, volveré seguro',
		valor: 5,
	},
	{
		texto: 'Menú del día y platos de comida casera elaborados cada día.',
		valor: 5,
	},
	{
		texto: '¡Comida variada y de muy buena calidad con un trato inmejorable!',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tiempo de Comer?',
		a: 'En la calle del Padre Jesús Ordóñez, 16, en el distrito de Chamartín (28002 Madrid). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a sábado, de 12:15 a 16:00, con el domingo cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Comida casera para llevar. La ficha lo clasifica como restaurante de comida para llevar y las reseñas hablan de platos elaborados cada día, menú del día y comida variada. La ficha de Google no publica una carta oficial.',
	},
	{
		q: '¿Tiene menú del día?',
		a: 'Sí, según una de las reseñas: «Menú del día y platos de comida casera elaborados cada día». La ficha no publica el contenido, el precio ni los horarios del menú, así que hay que consultarlo en el local o por teléfono.',
	},
	{
		q: '¿Qué platos y precios hay?',
		a: 'En la pizarra de la vitrina aparecen, entre otros, arroz blanco (2,50 €), patatas al ajillo (3,50 €), espaguetis al ajillo (4,75 €), albóndigas de ternera (5,25 €), lomo asado con naranja (5,75 €) y estufado de ternera (6,75 €). La disponibilidad cambia cada día.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre y la categoría de la ficha hablan de comida para llevar; no publica mesas, terraza ni reservas. Esta página no puede confirmar servicio de mesa, así que lo previsible es pedir para llevar.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 911 66 30 47. No consta página web propia, red social, aplicación ni sistema de pedidos online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad: no marca acceso, asientos ni aparcamiento adaptados. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,3 sobre 5 con 23 reseñas en el momento de consultarla (octubre de 2026). Las tres opiniones destacadas son de cinco estrellas y elogian la comida casera, la variedad y el trato.',
	},
];
