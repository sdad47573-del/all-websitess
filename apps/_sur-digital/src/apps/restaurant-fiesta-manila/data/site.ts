/**
 * Datos de Restaurant Fiesta Manila — Av. de Joan Martí, 98, AD200 Encamp
 * (parroquia de Encamp, Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Restaurant Fiesta Manila»,
 *   42.5323732,1.5741895, feature 0x12a58bdce638144d:0xdfb4adc93adf98bd.
 * - Nombre, dirección, teléfono, categoría, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,8 · 526 reseñas).
 * - Atributos: «Se admiten perros» y «Amigable con la comunidad LGBTQ+».
 * - Platos: fotos del perfil del local (platos filipinos de mesa, arroces,
 *   fideos, pollo, cerdo, marisco y postres).
 *
 * La ficha no publica carta ni precios: no se copian importes.
 */

export const BUSINESS = {
	name: 'Fiesta Manila',
	fullName: 'Restaurant Fiesta Manila',
	shortName: 'Fiesta Manila',
	mark: 'FM',
	street: 'Av. de Joan Martí, 98',
	district: 'Encamp',
	city: 'Encamp',
	region: 'Encamp',
	postalCode: 'AD200',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/restaurant-fiesta-manila',
	geo: { lat: 42.5323732, lng: 1.5741895 },
	featureId: '0x12a58bdce638144d:0xdfb4adc93adf98bd',
	placeId: 'ChIJTRQ45tyLpRIRvZjfOsmttN8',
	plusCode: 'GHJF+WM Encamp',
	googleCategory: 'Restaurante filipino',
	phone: '+376 851 129',
	phoneHref: 'tel:+376851129',
	tagline: 'Cocina filipina en Encamp',
	description:
		'Restaurant Fiesta Manila, en la Av. de Joan Martí, 98 (AD200 Encamp). Cocina filipina de mesa para compartir, con arroces, fideos, pollo y postres, en un comedor grande. 4,8 sobre 5 con 526 reseñas en Google. Martes cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+Fiesta+Manila/@42.5323732,1.5741895,17z/data=!4m6!3m5!1s0x12a58bdce638144d:0xdfb4adc93adf98bd!8m2!3d42.5323732!4d1.5741895!16s%2Fg%2F11h7b508j9?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5323732%2C1.5741895',
	embed: 'https://maps.google.com/maps?q=42.5323732,1.5741895&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5323732,1.5741895',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.8,
	count: 526,
	label: '4,8',
};

/** Horario que publica la ficha: mediodía y noche, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–16:00 · 20:00–22:30' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:30–16:00 · 20:00–22:30' },
	{ dia: 'Jueves', horas: '12:30–16:00 · 20:00–22:30' },
	{ dia: 'Viernes', horas: '12:30–16:00 · 20:00–22:30' },
	{ dia: 'Sábado', horas: '12:30–16:00 · 20:00–22:30' },
	{ dia: 'Domingo', horas: '12:30–16:00 · 20:00–22:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El martes cierra todo el día.';

export const SERVICIOS = [
	'Cocina filipina',
	'Para compartir',
	'Arroces',
	'Fideos',
	'Se admiten perros',
	'Grupos',
	'Comedor amplio',
	'Abierto por la noche',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina filipina',
		text: 'La ficha lo clasifica como restaurante filipino, y las fotos del perfil lo confirman: platos de pollo y cerdo guisados, fideos salteados, arroces y marisco, servidos en fuentes para poner en el centro de la mesa.',
	},
	{
		title: 'Mesa para compartir',
		text: 'El formato es el de una comida filipina: se piden varios platos y se comparten. Hay entrantes fritos, rollitos, fideos de arroz y arroces con carne, además de salsas para mojar y algún plato de pescado.',
	},
	{
		title: 'Comedor grande',
		text: 'El local tiene un comedor amplio, con mesas grandes y mantelería, y una barra al fondo. Es sitio para grupos y celebraciones familiares, algo poco habitual entre los restaurantes pequeños de Andorra.',
	},
	{
		title: 'En la avenida de Encamp',
		text: 'Está en el número 98 de la Avenida de Joan Martí, en Encamp, la carretera que sube hacia la parroquia. La ficha lo sitúa en la planta baja y admite perros y es amigable con la comunidad LGBTQ+, según sus atributos.',
	},
];

/**
 * Platos que se reconocen en las fotos del perfil. La ficha no publica carta
 * ni precios, así que no se ponen importes ni se inventan nombres exactos.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Rollitos de primavera', note: 'fritos, para picar antes de los platos' },
			{ name: 'Empanadillas', note: 'rellenas de carne, también fritas' },
			{ name: 'Entrantes de marisco', note: 'rebozados y fritos, para compartir' },
			{ name: 'Salsas de la casa', note: 'para mojar, con vinagre y soja' },
		],
	},
	{
		title: 'Arroces',
		items: [
			{ name: 'Arroz con pollo', note: 'el arroz de la casa, en fuente grande' },
			{ name: 'Arroz con marisco', note: 'con gambas y verduras' },
			{ name: 'Arroz frito', note: 'salteado con huevo y verduras' },
		],
	},
	{
		title: 'Fideos y guisos',
		items: [
			{ name: 'Fideos salteados', note: 'con verduras y carne, al estilo filipino' },
			{ name: 'Cerdo guisado', note: 'con salsa de soja y especias' },
			{ name: 'Pollo guisado', note: 'con patata y zanahoria' },
			{ name: 'Pescado', note: 'según el día, frito o en salsa' },
		],
	},
	{
		title: 'Postres y bebidas',
		items: [
			{ name: 'Postres filipinos', note: 'de la casa; se preguntan en la mesa' },
			{ name: 'Café', note: 'para cerrar la comida' },
			{ name: 'Cervezas y refrescos', note: 'también hay barra' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Fiesta Manila?',
		a: 'En la Avinguda de Joan Martí, 98, AD200 Encamp (Principado de Andorra), en la planta baja, en la carretera que sube hacia la parroquia de Encamp. La ficha de Google sitúa el local en las coordenadas 42.5323732, 1.5741895.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 12:30 a 16:00 y de 20:00 a 22:30, salvo el martes, que cierra todo el día. La ficha advierte de que el 1 de noviembre el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 851 129. El local no tiene web propia ni reservas online, así que el teléfono es la vía para reservar mesa o preguntar por la carta.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'Cocina filipina. En el perfil aparecen platos de pollo y cerdo guisados, fideos salteados, arroces con carne y marisco, entrantes fritos como rollitos y empanadillas, y postres de la casa. Se sirve en fuentes para compartir.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha no publica menú ni precios, y en las fotos del perfil no aparece una carta con menú diario. Conviene llamar al +376 851 129 para saber si lo tienen y a qué precio.',
	},
	{
		q: '¿Se puede ir con perro?',
		a: 'La ficha de Google incluye el atributo «Se admiten perros», así que el local acepta perros. Para saber si pueden estar en el comedor o solo en una zona concreta, lo mejor es preguntar al llamar.',
	},
	{
		q: '¿Es un sitio para grupos?',
		a: 'El comedor es amplio y las mesas son grandes, con platos para compartir en el centro, así que funciona bien para grupos y celebraciones. Para mesas grandes conviene reservar por teléfono.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'La ficha no da datos de aparcamiento propio. El restaurante está en la Avenida de Joan Martí de Encamp, así que lo habitual es aparcar en la calle o en los aparcamientos del pueblo.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios ni hay carta en el perfil. Los importes se consultan en el local o por teléfono, en el +376 851 129.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha no enlaza ninguna página del local. Esta web es informativa: reúne los datos y las fotos públicas del establecimiento y no gestiona reservas ni pedidos.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurant Fiesta Manila',
	actualizado: 'Noviembre de 2026',
};
