/**
 * Datos de GOAT MÁLAGA — C. Héroe de Sostoa, 142, Carretera de Cádiz
 * (29003 Málaga).
 *
 * Fuentes públicas (consulta de octubre de 2026):
 * - Ficha de Google Maps aportada: 36.7042465,-4.4405426,
 *   feature 0xd72f79995497399:0x33f9381f5f7c58ac.
 * - Nombre, categorías, dirección, categoría, horario, valoración, reseñas y
 *   accesibilidad: ficha pública de Google.
 * - Fotos y carta: galería pública de la ficha (10 imágenes), descargadas con
 *   scripts/fetch-maps-photos.mjs. La carta se transcribe de la pizarra que
 *   aparece en una de esas fotos.
 *
 * LÍMITES: la ficha no publica teléfono, web propia ni descripción. Los precios
 * de la pizarra no se copian (cambian), solo los nombres de los platos y los
 * suplementos que anuncia la propia carta.
 */

export const BUSINESS = {
	name: 'GOAT MÁLAGA',
	shortName: 'GOAT',
	mark: 'G',
	street: 'C. Héroe de Sostoa, 142',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29003',
	country: 'ES',
	phone: '',
	phoneHref: '',
	rating: 4.3,
	reviewsCount: 528,
	siteUrl: 'https://goat-malaga.vercel.app',
	geo: { lat: 36.7042465, lng: -4.4405426 },
	featureId: '0xd72f79995497399:0x33f9381f5f7c58ac',
	placeId: 'ChIJmXNJlZn3cg0RrFh8Xx84-TM',
	googleCategory: 'Hamburguesería · Restaurante americano · Pollo frito',
	tagline: 'Hamburguesería y pollo frito en Carretera de Cádiz, Málaga',
	description:
		'GOAT Málaga, en C. Héroe de Sostoa, 142 (Carretera de Cádiz, 29003 Málaga). Hamburguesas, pollo frito y comida a domicilio. Abierto de 13:00 a 15:45 y de 20:00 a 23:45; cierra martes y miércoles. 4,3 sobre 5 con 528 reseñas en Google.',
	hoursSummary: '13:00–15:45 y 20:00–23:45 · cierra martes y miércoles',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/GOAT+M%C3%81LAGA/@36.7042465,-4.4405426,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f79995497399:0x33f9381f5f7c58ac!8m2!3d36.7042465!4d-4.4405426!16s%2Fg%2F11ptvgg6z0?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7042465%2C-4.4405426',
	embed: 'https://maps.google.com/maps?q=36.7042465,-4.4405426&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7042465,-4.4405426',
};

/** Horario tal cual lo publica Google: dos servicios y dos días de cierre. */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–15:45 · 20:00–23:45' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '13:00–15:45 · 20:00–23:45' },
	{ day: 'Viernes', value: '13:00–15:45 · 20:00–23:45' },
	{ day: 'Sábado', value: '13:00–15:45 · 20:00–23:45' },
	{ day: 'Domingo', value: '13:00–15:45 · 20:00–23:45' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google: dos servicios al día, comida (13:00–15:45) y cena (20:00–23:45), de lunes y de jueves a domingo. Los martes y miércoles cierra. La ficha no publica teléfono, así que esta web no puede confirmar cambios de última hora.';

/** Lo que declaran las categorías de Google y la propia carta. */
export const SERVICIOS = [
	'Hamburguesería',
	'Pollo frito',
	'Comida a domicilio',
	'Menú +3 €',
	'Cierra martes y miércoles',
];

/** Carta transcrita de la pizarra de la ficha. Sin precios: cambian. */
export const MENU = [
	{
		title: 'Burgers',
		items: ['Classic', 'Goat Signature', 'Goat Classic', 'Royal Cheese', 'Truffle', 'La Bacon'],
		note: 'Con pan de masa madre, carne de vacuno, cheddar y salsas de la casa.',
	},
	{
		title: 'Pollo frito',
		items: ['Chicken Signature', 'Nashville', 'Chicken Mayo'],
		note: 'Pollo rebozado y frito, con salsas propias; también en versión picante.',
	},
	{
		title: 'Veggie',
		items: ['Veggie Truffle', 'Classic Vegan Burger', 'No Chicken', 'Vegan Nashville'],
		note: 'Opciones vegetarianas y veganas, con proteína vegetal y queso vegano.',
	},
	{
		title: 'Sides',
		items: ['Cheddar Fries', 'Hot Chicken Fries', 'French Fries', 'Spicy Fries', 'Chicken Tenders'],
		note: 'Patatas con queso, pollo o picante, además de las clásicas, y tenders de pollo.',
	},
];

export const MENU_NOTE =
	'Carta transcrita de la pizarra que aparece en la galería de Google Maps (consulta de octubre de 2026). Los precios no se copian porque cambian; la propia pizarra anuncia el menú con patatas y bebida por 3 € más, y suplementos de 1 € para salsas, queso o bacon y de 3 € para carne extra.';

export const HIGHLIGHTS = [
	{
		title: 'Smash y pollo frito',
		text: 'Google la clasifica como hamburguesería, restaurante americano y restaurante de pollo frito para llevar. La carta de la ficha lo confirma: burgers de vacuno con pan de masa madre, pollo rebozado, opciones veganas y patatas cargadas.',
	},
	{
		title: 'Dos servicios',
		text: 'Abre para comer de 13:00 a 15:45 y para cenar de 20:00 a 23:45, de lunes y de jueves a domingo. Los martes y miércoles cierra: conviene tenerlo en cuenta antes de bajar a la Carretera de Cádiz.',
	},
	{
		title: 'Para llevar',
		text: 'Una de las categorías de la ficha es «comida a domicilio», así que el local trabaja también pedidos fuera. La ficha no publica teléfono ni web propia para pedir: esta página no gestiona pedidos.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está GOAT Málaga?',
		a: 'En la calle Héroe de Sostoa, 142, en la Carretera de Cádiz (29003 Málaga). El mapa de esta página abre el punto exacto de la ficha y el botón «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Comida de 13:00 a 15:45 y cena de 20:00 a 23:45, de lunes y de jueves a domingo. Los martes y miércoles está cerrado. Es el horario que publica la ficha de Google.',
	},
	{
		q: '¿Se puede llamar o pedir por teléfono?',
		a: 'La ficha no publica teléfono ni web propia, así que esta web no ofrece ningún número. Google sí la etiqueta como «comida a domicilio», pero el canal para pedir habrá que buscarlo en la propia ficha o en el local.',
	},
	{
		q: '¿Qué hay en la carta?',
		a: 'De la pizarra de la ficha se leen burgers de vacuno (Classic, Goat Signature, Goat Classic, Royal Cheese, Truffle, La Bacon), pollo frito (Chicken Signature, Nashville, Chicken Mayo), opciones veganas (Veggie Truffle, Classic Vegan Burger, No Chicken, Vegan Nashville) y sides como Cheddar Fries, Hot Chicken Fries o Spicy Fries.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La pizarra de la ficha muestra precios, pero cambian y aquí no se copian. Sí se recogen los suplementos que anuncia la propia carta: menú con patatas y bebida por 3 € más, salsas, queso o bacon por 1 € y carne extra por 3 €.',
	},
	{
		q: '¿Tiene fotos la ficha de Google?',
		a: 'Sí, la galería tiene 10 fotos. En esta web se usan seis; las otras cuatro se han dejado fuera por tener personal o clientes identificables, marcas de agua de terceros o una fachada que no coincide con la dirección publicada.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,3 sobre 5 con 528 reseñas, según la ficha pública. Es una muestra amplia, con opiniones variadas. Esta web no reproduce sus textos: se leen enteros en el enlace a Google.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha indica acceso para sillas de ruedas y aseo adaptado, y que no hay aparcamiento adaptado, ni asientos para sillas de ruedas, ni bucle magnético. Es lo que consta; no publica más detalles del local.',
	},
];
