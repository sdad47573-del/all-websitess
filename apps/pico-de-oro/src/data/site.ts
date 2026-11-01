/**
 * Datos de FREIDURÍA Y POLLOS AL CARBÓN PICO DE ORO — C. Pablo Coso Calero, 107,
 * 41930 Bormujos (Sevilla).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «FREIDURIA Y POLLOS AL CARBÓN PICO DE ORO»,
 *   37.3679994,-6.0805493, feature 0xd1213aef6313135:0x4807fbb20677de7c.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, reseñas,
 *   accesibilidad y galería: ficha pública de Google consultada en octubre de 2026.
 * - Lo que se vende: las categorías de la ficha, el rótulo de la fachada y las
 *   fotos del perfil (parrilla, mostrador, tortillas, cordero, migas).
 *
 * Lo que la ficha NO publica: carta, precios (salvo el cartel «Tapas varias a 2 €»
 * que se ve en el escaparate), página web propia, redes sociales ni pedidos online.
 * La web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Pico de Oro',
	fullName: 'FREIDURÍA Y POLLOS AL CARBÓN PICO DE ORO',
	shortName: 'Pico de Oro',
	mark: 'PO',
	street: 'C. Pablo Coso Calero, 107',
	district: 'Bormujos',
	city: 'Bormujos',
	region: 'Andalucía',
	postalCode: '41930',
	country: 'ES',
	siteUrl: 'https://pico-de-oro.vercel.app',
	geo: { lat: 37.3679994, lng: -6.0805493 },
	featureId: '0xd1213aef6313135:0x4807fbb20677de7c',
	placeId: 'ChIJNTEx9q4TEg0RfN53BrL7B0g',
	plusCode: '8C9M9W99+5Q',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '614 10 84 96',
	phoneHref: 'tel:+34614108496',
	tagline: 'Pollos al carbón, freiduría y churrería en Bormujos',
	description:
		'Pico de Oro, en C. Pablo Coso Calero, 107 (41930 Bormujos, Sevilla). Pollos al carbón, freiduría, churrería, tortillas y tapas, para llevar y a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/FREIDURIA+Y+POLLOS+AL+CARB%C3%93N+PICO+DE+ORO/@37.3679994,-6.0805493,17z/data=!4m6!3m5!1s0xd1213aef6313135:0x4807fbb20677de7c!8m2!3d37.3679994!4d-6.0805493!16s%2Fg%2F11qnd75smx?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3679994%2C-6.0805493',
	embed: 'https://maps.google.com/maps?q=37.3679994,-6.0805493&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3679994,-6.0805493',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4,
	count: 163,
	label: '4,0',
};

/** Horario de la ficha: mediodía y noche, con el miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:30–16:00 · 19:00–23:30' },
	{ dia: 'Martes', horas: '10:30–15:00' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '10:30–16:00 · 19:00–23:30' },
	{ dia: 'Viernes', horas: '10:30–16:00 · 19:00–24:00' },
	{ dia: 'Sábado', horas: '10:30–16:00 · 19:00–24:00' },
	{ dia: 'Domingo', horas: '10:30–16:00 · 19:00–23:30' },
];

export const HORARIO_AVISO =
	'El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos. Confirma antes de desplazarte: el horario puede cambiar sin previo aviso.';

/** Lo que anuncia el rótulo, las categorías y las fotos. */
export const SERVICIOS = [
	'Pollos al carbón',
	'Freiduría',
	'Churrería',
	'Tortillas',
	'Tapas',
	'Para llevar',
	'A domicilio',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo al carbón',
		text: 'La parrilla se enciende al mediodía y por la noche. Los pollos giran sobre las brasas y salen para llevar; en las fotos de la ficha se ven los cestos cargados y la brasa al rojo.',
	},
	{
		title: 'Freiduría y churrería',
		text: 'El rótulo de la fachada anuncia pollos, carnes, tapas, freiduría, churrería y bebidas. La ficha lo clasifica además como panadería, pastelería y pollería.',
	},
	{
		title: 'El mostrador',
		text: 'Tras el cristal se ven tortillas enteras, huevos rellenos, solomillo al whisky, albóndigas en salsa y flamenquín. La ficha lo clasifica como bar de tapas y tortillería.',
	},
	{
		title: 'Tapas a 2 €',
		text: 'En el escaparate cuelga el cartel «Tapas varias a 2 €». La ficha no publica carta ni el resto de precios, así que se confirman en el local o por teléfono.',
	},
];

/** Lo que muestran el rótulo y las fotos; sin inventar precios. */
export const MENU = [
	{
		title: 'De la parrilla',
		items: [
			{
				name: 'Pollo al carbón',
				note: 'la especialidad de la casa; se ve en la parrilla y en los cestos de las fotos de la ficha',
			},
			{
				name: 'Carnes',
				note: 'el rótulo de la fachada anuncia «Pollos, carnes, tapas»',
			},
		],
	},
	{
		title: 'Freiduría y churrería',
		items: [
			{
				name: 'Freiduría',
				note: 'la ficha clasifica el local como freiduría y bar de tapas',
			},
			{
				name: 'Churros',
				note: 'la churrería aparece en el rótulo de la fachada',
			},
			{
				name: 'Bebidas',
				note: 'también anunciadas en el rótulo',
			},
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Tortillas',
				note: 'se ven enteras en el mostrador y en una foto del perfil',
			},
			{
				name: 'Huevos rellenos',
				note: 'en la vitrina, junto al solomillo y las albóndigas',
			},
			{
				name: 'Solomillo al whisky',
				note: 'señalizado en el mostrador de la ficha',
			},
			{
				name: 'Albóndigas en salsa',
				note: 'señalizadas en el mostrador de la ficha',
			},
			{
				name: 'Tapas varias',
				note: '2 €, según el cartel del escaparate',
			},
		],
	},
];

/** Las tres reseñas que publica la ficha, tal cual, también la crítica. */
export const RESENAS = [
	{
		texto: 'El pollo riquisimo acompañado de una buena racion de patatas y pimientos.',
		valor: 4,
	},
	{
		texto: 'Está seco y la "salsa" que lo acompaña es aceite con pimentón.',
		valor: 1,
	},
	{
		texto: 'Pollos ricos y sabrosos Mejor trato Repetiremos',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pico de Oro?',
		a: 'En la calle Pablo Coso Calero, 107, 41930 Bormujos (Sevilla). El mapa de esta página abre las coordenadas exactas (37.3679994, -6.0805493) y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica dos turnos: de 10:30 a 16:00 y de 19:00 a 23:30, con el miércoles cerrado. El martes solo abre de 10:30 a 15:00 y viernes y sábado alargan la noche hasta las 24:00. El domingo 1 de noviembre la ficha avisa de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pollo al carbón, carnes, freiduría, churros, tortillas, huevos rellenos, solomillo al whisky, albóndigas en salsa y tapas. La ficha lo clasifica como restaurante de comida para llevar, panadería, pollería, hamburguesería, pastelería, bar de tapas y tortillería.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google lo clasifica como «Comida a domicilio». El canal que publica la ficha es el teléfono, el 614 10 84 96; no consta página web ni pedidos online, así que el reparto, la zona y el importe se confirman llamando.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios. Lo único que se lee es el cartel del escaparate «Tapas varias a 2 €». Para el resto hay que preguntar en el local o por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Sí. La ficha marca acceso para sillas de ruedas y aparcamiento adaptado. No publica más detalles sobre el interior, así que conviene llamar si necesitas algo concreto.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Google le da 4,0 sobre 5 con 163 reseñas en el momento de consultar la ficha (octubre de 2026). Entre las opiniones que muestra hay de todo: elogios al pollo con patatas y pimientos y una queja de que estaba seco.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella. Los pedidos y las consultas se hacen por teléfono.',
	},
];
