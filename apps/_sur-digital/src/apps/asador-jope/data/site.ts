/**
 * Datos de Asador Jope — Pl. de la Luz, 8 (Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Asador Jope,
 *   36.6963005,-4.4539107, feature 0xd72f9d8d676bf83:0x99fdb93c6768a622.
 * - Nombre, dirección, categoría, valoración, horario, teléfono, accesibilidad,
 *   reseñas y galería: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: descripción del negocio, página web, redes
 * sociales, carta ni precios. La web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Asador Jope',
	shortName: 'Jope',
	mark: 'AJ',
	street: 'Pl. de la Luz, 8',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29004',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-jope',
	geo: { lat: 36.6963005, lng: -4.4539107 },
	featureId: '0xd72f9d8d676bf83:0x99fdb93c6768a622',
	placeId: 'ChIJg7921tj5cg0RIqZoZzy5_Zk',
	plusCode: '8C8QMGWW+GC',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '951 15 50 25',
	phoneHref: 'tel:+34951155025',
	tagline: 'Asador de pollos y comida casera en Carretera de Cádiz',
	description:
		'Asador Jope, asador de pollos y comida casera en Pl. de la Luz, 8 (Carretera de Cádiz, 29004 Málaga). Cocina de casa, raciones y pollo asado, de miércoles a domingo.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+Jope/@36.6963005,-4.4539107,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9d8d676bf83:0x99fdb93c6768a622!8m2!3d36.6963005!4d-4.4539107!16s%2Fg%2F11cmg1j464?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=11096228725994858018',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.6963005%2C-4.4539107',
	embed: 'https://maps.google.com/maps?q=36.6963005,-4.4539107&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.6963005,-4.4539107',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.8,
	count: 217,
	label: '4,8',
};

/** Horario que publica la ficha: mediodía de miércoles a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '11:30–16:00' },
	{ dia: 'Jueves', horas: '11:30–16:00' },
	{ dia: 'Viernes', horas: '11:30–16:00' },
	{ dia: 'Sábado', horas: '11:30–16:00' },
	{ dia: 'Domingo', horas: '11:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Asador de pollos',
	'Comida casera',
	'Guisos del día',
	'Pescado rebozado',
	'Ensaladas y arroces',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Pollo de asador',
		text: 'Google lo clasifica como restaurante especializado en pollo. El asador es la razón de ser de la casa y lo primero que se ve al entrar.',
	},
	{
		title: 'Vitrina de guisos',
		text: 'Las fotos del local enseñan las bandejas del día: pollo guisado con champiñones, carne en salsa, salchichas, migas con pimientos y pescado rebozado.',
	},
	{
		title: 'Mediodía de barrio',
		text: 'Abre solo al mediodía, de miércoles a domingo, de 11:30 a 16:00. Lunes y martes cierra. Las reseñas hablan de rapidez, buen trato y precios bajos.',
	},
];

/**
 * Lo que se ve en la vitrina de las fotos del local, junto a la categoría y las
 * reseñas. La ficha no publica carta ni precios, así que no se inventan valores.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'la especialidad que da categoría a la casa en Google',
			},
			{
				name: 'Pollo guisado con champiñones',
				note: 'una de las bandejas de la vitrina, con la salsa y el perejil por encima',
			},
			{
				name: 'Carne guisada',
				note: 'guiso de carne en salsa, en bandeja grande, según las fotos del local',
			},
		],
	},
	{
		title: 'Cazuela y pescado',
		items: [
			{
				name: 'Bacalao rebozado',
				note: 'lomos rebozados apilados en bandeja, uno de los platos que se ven en la vitrina',
			},
			{
				name: 'Merluza con pimientos y guisantes',
				note: 'lomos de pescado con pimiento rojo, cebolla y guisantes, al horno',
			},
			{
				name: 'Migas con pimientos y chorizo',
				note: 'migas doradas con pimientos verdes fritos y tropezones de chorizo',
			},
			{
				name: 'Salchichas en salsa',
				note: 'bandeja de salchichas guisadas, junto al resto de guisos del día',
			},
		],
	},
	{
		title: 'De la vitrina',
		items: [
			{
				name: 'Ensaladilla rusa',
				note: 'con atún, patata, zanahoria y mayonesa, servida en bandeja',
			},
			{
				name: 'Arroz con surimi, huevo y aceitunas',
				note: 'arroz frío con palitos de cangrejo, maíz y huevo cocido',
			},
			{
				name: 'Macarrones con tomate',
				note: 'pasta corta con salsa de tomate, en la misma vitrina',
			},
			{
				name: 'Verduras con tomate y guisantes',
				note: 'judías verdes, zanahoria y guisantes guisados',
			},
			{
				name: 'Ensalada de tomate y cebolla',
				note: 'tomate, cebolla y pimiento en trozos, aliñada al momento',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Comida casera buenísima y muy económica, son rápidos atendiendo, recomendable.',
		valor: 5,
	},
	{ texto: 'Buena calidad, amplia variedad, buen servicio y precios inmejorables.', valor: 5 },
	{ texto: 'Buena comida, servicio rápido y económico.', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Jope?',
		a: 'En la plaza de la Luz, 8, en la zona de Carretera de Cádiz (29004 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre al mediodía de miércoles a domingo, de 11:30 a 16:00. Los lunes y los martes permanece cerrado. La propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no publica sistema de reservas online. Para asegurar mesa o encargar pollo conviene llamar al 951 15 50 25, el teléfono que aparece en Google.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Pollo de asador y comida casera de la vitrina: pollo guisado con champiñones, carne en salsa, bacalao rebozado, merluza con pimientos, migas, ensaladilla, arroz y ensaladas. Google lo clasifica como restaurante especializado en pollo y las reseñas destacan la calidad, la variedad y el precio. La ficha no publica una carta cerrada.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'La ficha no lo especifica. Al ser un asador de pollos y trabajar al mediodía, lo normal es preguntar por teléfono antes de acercarse; esta web no afirma un servicio que Google no publica.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni precios. Las reseñas hablan de «precios inmejorables» y de comida «muy económica», pero esta página no inventa valores.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas. Indica que no hay asientos adaptados y no publica datos sobre aparcamiento adaptado ni aseos.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública de Google no publica página web ni perfiles sociales, así que esta web solo enlaza el teléfono y la propia ficha.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,8 sobre 5 con 217 reseñas en el momento de consultar la ficha (octubre de 2026). Las tres opiniones publicadas dan cinco estrellas y hablan de comida casera, rapidez y buen precio.',
	},
	{
		q: '¿Hay aparcamiento?',
		a: 'La ficha no publica información sobre aparcamiento. La plaza de la Luz es una zona residencial de Carretera de Cádiz; conviene buscar estacionamiento en las calles cercanas.',
	},
];
