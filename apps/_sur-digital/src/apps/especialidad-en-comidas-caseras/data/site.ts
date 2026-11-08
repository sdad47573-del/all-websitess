/**
 * Datos de Especialidad en Comidas Caseras — Av. de la Paloma, 46,
 * Carretera de Cádiz, 29003 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «Especialidaden En Comidas Caseras»,
 *   36.7022276,-4.4450739, feature 0xd72f77c35d5afeb:0x158962b6801c1335
 *   (nombre, dirección, categoría, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica carta
 * con precios. No se dan cifras ni se prometen servicios que no consten.
 */

export const BUSINESS = {
	name: 'Especialidad en Comidas Caseras',
	fullName: 'Especialidad en Comidas Caseras',
	googleName: 'Especialidaden En Comidas Caseras',
	shortName: 'Comidas Caseras',
	mark: 'C',
	street: 'Av. de la Paloma, 46',
	city: 'Málaga',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Carretera de Cádiz',
	postalCode: '29003',
	country: 'ES',
	phone: '+34 685 21 69 46',
	phoneHref: '+34685216946',
	rating: 3.9,
	reviewsCount: 69,
	siteUrl: 'https://www.sur-digital.com/especialidad-en-comidas-caseras',
	geo: { lat: 36.7022276, lng: -4.4450739 },
	featureId: '0xd72f77c35d5afeb:0x158962b6801c1335',
	placeId: 'ChIJ66_VNXz3cg0RNRMcgLZiiRU',
	cid: '1551880082578740021',
	category: 'Comida casera y tapeo',
	categories: ['Restaurante'],
	tagline: 'Comidas caseras y tapeo en Carretera de Cádiz',
	description:
		'Especialidad en Comidas Caseras, cocina casera y tapeo en la avenida de la Paloma 46, Carretera de Cádiz, Málaga. Abre todos los días de 8:00 a 24:00. 3,9 sobre 5 en Google con 69 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Especialidaden+En+Comidas+Caseras/@36.7022276,-4.4450739,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77c35d5afeb:0x158962b6801c1335!8m2!3d36.7022276!4d-4.4450739!16s%2Fg%2F11bzz4ywjq',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7022276%2C-4.4450739',
	embed: 'https://maps.google.com/maps?q=36.7022276,-4.4450739&z=17&hl=es&output=embed',
};

/**
 * Horario publicado en la ficha de Google: todos los días, de 8:00 a 24:00.
 * La ficha avisa de que en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–24:00' },
	{ day: 'Martes', value: '8:00–24:00' },
	{ day: 'Miércoles', value: '8:00–24:00' },
	{ day: 'Jueves', value: '8:00–24:00' },
	{ day: 'Viernes', value: '8:00–24:00' },
	{ day: 'Sábado', value: '8:00–24:00' },
	{ day: 'Domingo', value: '8:00–24:00' },
];

/**
 * Señales de identidad que sí constan: la categoría de restaurante, la comida
 * casera que repiten las reseñas, el barrio, el horario largo y el teléfono.
 */
export const SERVICIOS = [
	'Comida casera',
	'Tapeo y raciones',
	'Carretera de Cádiz',
	'Abierto todos los días · 8:00–24:00',
	'Cocina de Ana',
	'+34 685 21 69 46',
];

export const MENU = [
	{
		title: 'Fritura y mar',
		items: [
			{
				name: 'Fritura de pescado',
				note: 'boquerones, calamares y pescado enharinado, con limón · la foto del hero',
			},
			{ name: 'Calamares a la andaluza', note: 'del mostrador de fritos' },
			{
				name: 'Mejillones al vapor',
				note: 'abiertos en corona con limón · foto del perfil',
			},
			{ name: 'Pescado del día', note: 'según lo que traiga la mañana; pregunta por teléfono' },
		],
	},
	{
		title: 'Guisos de cuchara',
		items: [
			{
				name: 'Albóndigas en salsa',
				note: 'en su salsa de tomate, con pan para mojar · foto del perfil',
			},
			{
				name: 'Carne guisada',
				note: 'con cebolla y pimientos rojos, de las bandejas del mostrador',
			},
			{ name: 'Paella', note: 'a la paellera, con pimiento rojo por encima · foto del perfil' },
			{ name: 'Salchichas y pimientos', note: 'del mostrador caliente, para compartir' },
		],
	},
	{
		title: 'Mostrador y tapas',
		items: [
			{
				name: 'Mollete con carne mechada',
				note: 'con ensaladilla rusa y café · foto del perfil',
			},
			{ name: 'Ensaladilla rusa', note: 'casera, de las que se sacan de la nevera' },
			{ name: 'Tapas y raciones', note: '«buen sitio para ir abriendo boca», dicen las reseñas' },
			{ name: 'Bocadillos y montaditos', note: 'de la barra, a cualquier hora' },
		],
	},
	{
		title: 'Desayunos y barra',
		items: [
			{ name: 'Café con leche', note: 'la casa abre a las 8:00' },
			{ name: 'Tostadas y molletes', note: 'para empezar el día' },
			{ name: 'Cervezas y refrescos', note: 'para el tapeo de mediodía o de noche' },
			{ name: 'Dulces del día', note: 'según lo que haya en el mostrador' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Especialidad en Comidas Caseras?',
		a: 'En la avenida de la Paloma 46, en Carretera de Cádiz, 29003 Málaga. El mapa de esta página lleva a la puerta y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre todos los días de 8:00 a 24:00, según la ficha de Google. La ficha avisa de que en festivos puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera, platos del día, guisos de cuchara y raciones, además de tapeo, montaditos y desayunos. Las reseñas destacan la cocina casera y a Ana, la cocinera.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha no publica carta ni precios, pero las reseñas hablan de platos caseros y menú. Para saber la propuesta y el precio del día, llama al restaurante.',
	},
	{
		q: '¿Se puede reservar?',
		a: `La ficha no publica un sistema de reservas ni una web propia. El canal que sí consta es el teléfono ${BUSINESS.phone}; llama para mesa o para encargar comida.`,
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'La casa trabaja comida casera y raciones, así que lo habitual es encargar por teléfono y recoger en el local. Confirma la disponibilidad antes de ir.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha solo publica un dato de accesibilidad: no hay aparcamiento adaptado. No marca el acceso ni los asientos, así que conviene llamar si necesitas una condición concreta.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,9 sobre 5 con 69 reseñas en Google, según la ficha consultada.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del restaurante y ofrece la opción de añadir una. Esta página es informativa y no es un canal oficial de reservas ni de pedidos.',
	},
];
