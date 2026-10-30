/**
 * Datos de La Cocina de Cris — Calle Ntra. Sra. de las Candelas, 24, Loc 4
 * (Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Cocina de Cris,
 *   36.6883481,-4.4515288, feature 0xd72f9cffc33d19d:0x6fb21f6a1d2f1219.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas, página de Facebook y galería: ficha
 *   pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: carta ni precios. La web no inventa esos datos. El
 * surtido que se cita es el que nombran la descripción del negocio y las reseñas
 * de la propia ficha.
 */

export const BUSINESS = {
	name: 'La Cocina de Cris',
	shortName: 'La Cocina de Cris',
	mark: 'CC',
	street: 'Calle Ntra. Sra. de las Candelas, 24, Loc 4',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	siteUrl: 'https://la-cocina-de-cris.vercel.app',
	geo: { lat: 36.6883481, lng: -4.4515288 },
	featureId: '0xd72f9cffc33d19d:0x6fb21f6a1d2f1219',
	placeId: 'ChIJndEz_M_5cg0RGRIvHWofsm8',
	plusCode: '8C8QMGQX+89',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '951 08 09 18',
	phoneHref: 'tel:+34951080918',
	tagline: 'Comida casera para llevar y para eventos, en Carretera de Cádiz',
	description:
		'La Cocina de Cris, en C. Ntra. Sra. de las Candelas, 24 (Carretera de Cádiz, 29004 Málaga). Comida casera para llevar y encargos para eventos, de martes a domingo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cocina+de+Cris/@36.6883481,-4.4515288,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9cffc33d19d:0x6fb21f6a1d2f1219!8m2!3d36.6883481!4d-4.4515288!16s%2Fg%2F11h31wy9dj?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=8048530024681116185',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6883481%2C-4.4515288',
	embed: 'https://maps.google.com/maps?q=36.6883481,-4.4515288&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6883481,-4.4515288',
	/** Página de Facebook que enlaza la ficha. */
	facebook: 'https://www.facebook.com/lacocinadecrisfood/',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 163,
	label: '4,7',
};

/** Horario que publica la ficha: mediodía, con el lunes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '11:30–15:30' },
	{ dia: 'Miércoles', horas: '11:00–15:30' },
	{ dia: 'Jueves', horas: '11:00–15:30' },
	{ dia: 'Viernes', horas: '11:00–15:30' },
	{ dia: 'Sábado', horas: '11:00–16:00' },
	{ dia: 'Domingo', horas: '11:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Encargos para eventos',
	'Empanadas',
	'Paellas por encargo',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina de casa',
		text: 'El propio negocio describe «comida casera para llevar» y una «gran cantidad de recetas distintas». Las reseñas hablan de platos «muy elaborados y sabrosos».',
	},
	{
		title: 'Encargos a la carta',
		text: 'Si la receta que buscas no está entre las del día, la casa la prepara avisando con 48 horas. Todo se pide por teléfono.',
	},
	{
		title: 'Para eventos',
		text: 'La ficha presenta el servicio «para cualquier tipo de evento». Las paellas y las empanadas son las preparaciones que más citan las reseñas.',
	},
];

/**
 * Solo las familias de producto que nombran la descripción del negocio y las
 * reseñas. No hay carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del día',
		items: [
			{
				name: 'Comida casera del día',
				note: 'la base del negocio: recetas caseras preparadas para llevar',
			},
			{
				name: 'Platos elaborados',
				note: '«platos muy elaborados y sabrosos», según una reseña de la ficha',
			},
		],
	},
	{
		title: 'Por encargo',
		items: [
			{
				name: 'Paellas',
				note: '«tiene ricas empanadas y paellas por encargo», dice una reseña',
			},
			{
				name: 'Empanadas',
				note: 'la otra preparación que destaca la ficha',
			},
			{
				name: 'Hamburguesas',
				note: '«deliciosas», con la de trufa como recomendación de una reseña',
			},
			{
				name: 'Tu receta',
				note: 'si no está en la carta, se encarga por teléfono con 48 horas de antelación',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{ texto: 'Unas hamburguesas deliciosas, os recomiendo la de trufa', valor: 5 },
	{ texto: 'Tiene ricas empanadas y paellas por encargo.', valor: 5 },
	{
		texto: 'Gran servicio y variedad de buena comida, platos muy elaborados y sabrosos',
		valor: 5,
	},
];

/** Cómo se encarga, con lo que publica la ficha. */
export const ENCARGOS = [
	{
		title: 'Llama y elige',
		text: 'El teléfono de la ficha es el canal de encargo: 951 08 09 18. Allí se consulta la comida del día, los precios y la disponibilidad.',
	},
	{
		title: '48 horas si es tu receta',
		text: 'La casa prepara «una gran cantidad de recetas distintas»; si la tuya no está entre ellas, se pide con 48 horas de antelación.',
	},
	{
		title: 'Recoge en el local',
		text: 'Está en la calle Ntra. Sra. de las Candelas, 24, local 4, en Carretera de Cádiz. Google lo clasifica como restaurante de comida para llevar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cocina de Cris?',
		a: 'En la calle Ntra. Sra. de las Candelas, 24, local 4, en la zona de Carretera de Cádiz (29004 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica estos horarios: martes de 11:30 a 15:30; miércoles, jueves y viernes de 11:00 a 15:30; sábado y domingo de 11:00 a 16:00; lunes cerrado. En festivos puede cambiar.',
	},
	{
		q: '¿Cómo se hacen los encargos?',
		a: 'Por teléfono, en el 951 08 09 18. La casa prepara muchas recetas distintas y, si la que buscas no está entre ellas, la hace avisando con 48 horas de antelación.',
	},
	{
		q: '¿Preparan comida para eventos?',
		a: 'Sí. La descripción del negocio en Google ofrece comida casera para llevar «y para cualquier tipo de evento». El volumen, el menú y el precio se acuerdan por teléfono.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar y la ficha no detalla servicio de mesa. Si quieres sentarte o recoger un pedido, confírmalo al llamar.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha no incluye carta ni precios. Esta página solo cita las preparaciones que nombran la descripción del negocio y las reseñas, y no inventa valores.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 163 reseñas en el momento de consultarla (octubre de 2026). Las opiniones publicadas destacan las hamburguesas, las empanadas, las paellas por encargo y el trato.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'La ficha enlaza una página de Facebook, La Cocina de Cris Food. No consta página web propia; esta página solo enlaza lo que aparece en la ficha.',
	},
];
