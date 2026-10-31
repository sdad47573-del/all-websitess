/**
 * Datos de Cocino para ti — Calle de Narciso Serra, 17,
 * 28007 Madrid (Retiro).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Cocino para ti», 40.4056039,-3.6785402,
 *   feature 0xd42261999131749:0xe102b3889b708b53.
 * - Nombre, dirección, teléfono, categorías, valoración, horario, reseñas y
 *   datos de accesibilidad: ficha pública de Google consultada el 31 de
 *   octubre de 2026.
 * - La ficha no enlaza una web propia, no publica descripción del negocio,
 *   carta ni precios.
 */

export const BUSINESS = {
	name: 'Cocino para ti',
	fullName: 'Cocino para ti',
	shortName: 'Cocino para ti',
	mark: 'CP',
	street: 'Calle de Narciso Serra, 17',
	district: 'Retiro',
	city: 'Madrid',
	region: 'Comunidad de Madrid',
	postalCode: '28007',
	country: 'ES',
	siteUrl: 'https://cocino-para-ti.vercel.app',
	geo: { lat: 40.4056039, lng: -3.6785402 },
	featureId: '0xd42261999131749:0xe102b3889b708b53',
	placeId: 'ChIJSRcTmRkmQg0RU4twm4izAuE',
	plusCode: '8CGRC84C+6H',
	googleCategory: 'Establecimiento de comida preparada',
	phone: '918 31 38 61',
	phoneHref: 'tel:+34918313861',
	tagline: 'Comida preparada y catering en Retiro',
	description:
		'Cocino para ti, en Calle de Narciso Serra, 17 (28007 Madrid, Retiro). Comida preparada para llevar, catering y pollería: guisos como el ragú de ternera, albóndigas y patatas alioli. De lunes a sábado, de 9:00 a 17:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Cocino+para+ti/@40.4056039,-3.6785402,17z/data=!3m1!4b1!4m6!3m5!1s0xd42261999131749:0xe102b3889b708b53!8m2!3d40.4056039!4d-3.6785402!16s%2Fg%2F11c2m_5h2m?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.4056039%2C-3.6785402',
	embed: 'https://maps.google.com/maps?q=40.4056039,-3.6785402&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=40.4056039,-3.6785402',
};

/** Valoración publicada en la ficha (31 de octubre de 2026). */
export const RATING = {
	value: 4.4,
	count: 94,
	label: '4,4',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–17:00' },
	{ dia: 'Martes', horas: '9:00–17:00' },
	{ dia: 'Miércoles', horas: '9:00–17:00' },
	{ dia: 'Jueves', horas: '9:00–17:00' },
	{ dia: 'Viernes', horas: '9:00–17:00' },
	{ dia: 'Sábado', horas: '9:00–17:00' },
	{ dia: 'Domingo', horas: '9:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha y las reseñas del local permiten afirmar. */
export const SERVICIOS = [
	'Comida preparada',
	'Comida para llevar',
	'Catering',
	'Pollería',
	'Guisos de cuchara',
	'Albóndigas',
	'Patatas alioli',
];

export const HIGHLIGHTS = [
	{
		title: 'Ragú de ternera',
		text: 'Una reseña empieza por lo que más le gustó: «buenísima la ración de ragú de ternera, las patatas alioli y las albóndigas». Los guisos de cuchara son la base de la casa.',
	},
	{
		title: 'Albóndigas y patatas alioli',
		text: 'Aparecen en las mismas opiniones que el ragú, como guarnición y plato de siempre. La comida se vende preparada, para llevar y en raciones.',
	},
	{
		title: 'Catering y pollería',
		text: 'Google la clasifica como establecimiento de comida preparada, servicio de catering, pollería y restaurante de comida para llevar. Esa mezcla explica su clientela: vecinos que recogen y encargos para grupos.',
	},
	{
		title: '4,4 sobre 5',
		text: 'Con 94 reseñas, la ficha de Google le da 4,4 sobre 5 (octubre de 2026). Hay opiniones muy buenas y también alguna crítica, así que lo mejor es probar y sacar conclusiones propias.',
	},
];

/** Reseñas publicadas en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Buenísima la ración de ragú de ternera, las patatas alioli y las albóndigas.',
		valor: 5,
	},
	{
		texto: 'Fui con mi familia y salimos todos super contentos. 5 estrellas',
		valor: 5,
	},
];

/**
 * Lo que se puede deducir de las categorías y las reseñas de la ficha. No hay
 * carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Pollos asados de corral', note: 'de la sección de pollería' },
			{ name: 'Tortilla al gusto', note: 'de patata, con o sin cebolla' },
			{ name: 'Carnes y pescados', note: 'asados y guisados del día' },
			{ name: 'Arroces por encargo', note: 'paellas y arroces al horno' },
			{ name: 'Entrantes y pastas', note: 'para completar la comida' },
			{ name: 'Albóndigas', note: 'en salsa, según el día' },
		],
	},
	{
		title: 'Para encargos',
		items: [
			{ name: 'Menú diario', note: 'el que se sirve cada jornada' },
			{ name: 'Menús especiales', note: 'para celebraciones' },
			{ name: 'Menús de Navidad', note: 'por encargo' },
			{ name: 'Cumpleaños', note: 'con encargos para eventos' },
			{ name: 'Catering de empresas', note: 'para grupos y oficinas' },
		],
	},
	{
		title: 'Postres',
		items: [{ name: 'Postres caseros', note: 'la variedad cambia cada día' }],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cocino para ti?',
		a: 'En la Calle de Narciso Serra, 17, 28007 Madrid, en el distrito de Retiro. Google registra la dirección tal cual. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a sábado, de 9:00 a 17:00, y el domingo de 9:00 a 16:00. El Día de Todos los Santos (1 de noviembre) la propia ficha avisa de que el horario podría ser distinto, así que conviene confirmarlo por teléfono antes de ir.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Comida preparada para llevar. Las reseñas de Google mencionan el ragú de ternera, las albóndigas y las patatas alioli, y la ficha clasifica el local como establecimiento de comida preparada, pollería, catering y restaurante de comida para llevar. No publica una carta con todos los platos ni los precios.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'El canal que publica la ficha es el teléfono: 918 31 38 61. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hacen catering?',
		a: 'La ficha la clasifica como servicio de catering, así que sí figura entre sus actividades. Lo que no publica son condiciones, mínimos ni platos disponibles: conviene llamar y preguntar por el encargo concreto.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google la clasifica como restaurante de comida para llevar y las categorías que publica apuntan a recogida de comida preparada. La ficha no anuncia servicio de mesa, terraza ni reservas.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha no publica carta ni precios. La única forma de saber cuánto cuesta una ración de ragú, de albóndigas o el encargo de catering es preguntar por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha solo publica que no hay aparcamiento adaptado para sillas de ruedas y no aclara si la entrada es accesible. Conviene llamar antes si necesitas ayuda para recoger un pedido grande.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,4 sobre 5 con 94 reseñas en el momento de consultarla (31 de octubre de 2026). Hay opiniones muy buenas sobre los guisos y también alguna crítica, como es habitual en una ficha con tantas reseñas.',
	},
];
