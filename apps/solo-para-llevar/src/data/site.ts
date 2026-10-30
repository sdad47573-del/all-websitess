/**
 * Datos de Solo para llevar — C. Atenas, 26 (41012 Sevilla).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica descripción del negocio, carta ni precios. La web no
 * inventa datos: cita la categoría de Google y lo que dicen las reseñas.
 */

export const BUSINESS = {
	name: 'Solo para llevar',
	shortName: 'Solo para llevar',
	mark: 'SL',
	street: 'C. Atenas, 26',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41012',
	country: 'ES',
	siteUrl: 'https://solo-para-llevar.vercel.app',
	geo: { lat: 37.3491323, lng: -5.9854806 },
	featureId: '0xd126d34c397000d:0x74bac932a7fcd074',
	placeId: 'ChIJDQCXwzRtEg0RdND8pzLJunQ',
	googleCategory: 'Restaurante',
	phone: '954 62 90 61',
	phoneHref: 'tel:+34954629061',
	tagline: 'Comida casera para llevar en Sevilla',
	description:
		'Solo para llevar, cocina casera para recoger en C. Atenas, 26 (41012 Sevilla). Platos como el solomillo al roquefort o la ensaladilla, según las reseñas de la ficha. Consulta la oferta del día por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Solo+para+llevar/@37.3491323,-5.9854806,17z/data=!3m1!4b1!4m6!3m5!1s0xd126d34c397000d:0x74bac932a7fcd074!8m2!3d37.3491323!4d-5.9854806!16s%2Fg%2F11fkt8gch4',
	cid: 'https://www.google.com/maps?cid=108048202322161338046',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3491323%2C-5.9854806',
	embed: 'https://maps.google.com/maps?q=37.3491323,-5.9854806&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3491323,-5.9854806',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.6, count: 90, label: '4,6' };

/** Horario publicado: servicio de mediodía de lunes a sábado. */
export const HORARIO = [
	{ day: 'Lunes a sábado', value: '10:00 – 15:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca servicio de 10:00 a 15:30 de lunes a sábado y cierre los domingos. En festivos el horario puede variar: conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida para llevar',
	'Cocina casera',
	'Ensaladilla',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Para recoger',
		text: 'El propio nombre del local lo deja claro: solo para llevar. Google lo clasifica como restaurante y el servicio es de mediodía, de 10:00 a 15:30.',
	},
	{
		title: 'Cocina casera',
		text: 'Las reseñas destacan el solomillo al roquefort y la ensaladilla, y hablan de «buena cocina y buen trato» en un local tranquilo y limpio.',
	},
	{
		title: 'Opciones sin gluten',
		text: 'Una de las opiniones de la ficha comenta que la comida está «buenísima y sin gluten». Confirma con el local las opciones y posibles alérgenos.',
	},
];

/** La ficha no publica carta: se citan los platos de las reseñas y de las fotos. */
export const MENU = [
	{
		title: 'Citado en reseñas',
		items: [
			{
				name: 'Solomillo al roquefort',
				note: 'una reseña de cinco estrellas lo califica de «espectacular»',
			},
			{
				name: 'Ensaladilla',
				note: 'mencionada en la misma opinión junto al solomillo',
			},
			{
				name: 'Platos sin gluten',
				note: 'una clienta destaca que la comida está «buenísima y sin gluten»; conviene confirmarlo antes de pedir',
			},
		],
	},
	{
		title: 'En la vitrina',
		items: [
			{
				name: 'Tortilla de patata',
				note: 'en las fotos aparece entera, en su caja para llevar',
			},
			{
				name: 'Calamares en salsa',
				note: 'uno de los guisos que se ven en el mostrador del local',
			},
			{
				name: 'Bandejas gratinadas y empanadas',
				note: 'las fotos muestran bandejas con queso gratinado y empanadas en la vitrina',
			},
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«Espectacular el solomillo al roquefort, ensaladilla y todo lo demás.»', valor: 5 },
	{ texto: '«Buena cocina y buen trato.»', valor: 5 },
	{
		texto: '«Un lugar tranquilo, limpio, buen trato y la comida buenísima y sin gluten.»',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Solo para llevar?',
		a: 'En la calle Atenas, 26, 41012 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 954 62 90 61. Llama para consultar los platos del día y encargar.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha marca de 10:00 a 15:30 de lunes a sábado, con cierre los domingos. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre y el servicio apuntan a comida para llevar. La ficha no describe servicio de mesa; pregunta al local si dispone de mesas antes de acercarte.',
	},
	{
		q: '¿Hay platos sin gluten?',
		a: 'Una reseña de la ficha comenta que la comida está «buenísima y sin gluten». No es una carta oficial, así que confirma con el establecimiento las opciones y los posibles alérgenos.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha no publica carta ni precios. Las opiniones citan el solomillo al roquefort y la ensaladilla. Lo mejor es llamar y preguntar por la oferta del día.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas. No publica más datos sobre el interior del local.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, con opiniones que destacan la cocina y el trato.`,
	},
];
