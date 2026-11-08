/**
 * Datos de Panadería Rocío — Av. de Carlos III, 28, Levante, 14014 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panaderia Rocío,
 *   37.8963752,-4.7590902, feature 0xd6cdf9a77549231:0x184b8e0597171034.
 * - Nombre, dirección, categoría, valoración, reseñas, atributos de accesibilidad
 *   y fotos: ficha pública de Google (octubre de 2026).
 * - Panes, bollería y precios: rótulos del escaparate visibles en las fotos de
 *   la galería del mismo perfil.
 *
 * La ficha no publica horario, teléfono, web, correo, redes, descripción, carta,
 * precios, métodos de pago ni reparto; tampoco tiene el perfil reclamado. Esta
 * web no inventa esos datos.
 */

export const BUSINESS = {
	name: 'Panadería Rocío',
	legalName: 'Panadería Rocío',
	shortName: 'Rocío',
	mark: 'PR',
	street: 'Av. de Carlos III, 28',
	district: 'Levante',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14014',
	country: 'ES',
	rating: 5,
	reviewsCount: 5,
	siteUrl: 'https://www.sur-digital.com/panaderia-rocio',
	geo: { lat: 37.8963752, lng: -4.7590902 },
	featureId: '0xd6cdf9a77549231:0x184b8e0597171034',
	placeId: 'ChIJMZJUd5rfbA0RNBAXlwWOSxg',
	plusCode: '8C9QV6WR+H9',
	googleCategory: 'Panadería',
	tagline: 'Pan de barrio en Levante',
	description:
		'Panadería Rocío, en la avenida de Carlos III, 28 (Levante, 14014 Córdoba). Panadería y tienda de barrio: pan, bollería, empanadas y tortas, además de aperitivos y bebidas. 5 sobre 5 con 5 reseñas en Google. La ficha no publica horario, teléfono ni web.',
	hoursSummary: 'Horario no publicado en la ficha',
	photoCount: 9,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaderia+Roc%C3%ADo/@37.8963752,-4.7590902,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf9a77549231:0x184b8e0597171034!8m2!3d37.8963752!4d-4.7590902!16s%2Fg%2F11kjmh86hw?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJMZJUd5rfbA0RNBAXlwWOSxg',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8963752%2C-4.7590902',
	embed: 'https://maps.google.com/maps?q=37.8963752,-4.7590902&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8963752,-4.7590902',
};

export const SERVICIOS = ['Pan del día', 'Bollería', 'Empanadas y tortas', 'Aperitivos y bebidas', 'Levante'];

export const HIGHLIGHTS = [
	{
		title: 'En la avenida de Carlos III',
		text: 'La panadería está en el número 28 de la avenida de Carlos III, en el barrio de Levante (14014 Córdoba), al este del centro histórico y con parada de autobús en la misma avenida.',
	},
	{
		title: 'Panadería y tienda',
		text: 'Junto al pan y la bollería, el local tiene estanterías de aperitivos, snacks y bebidas, y una vitrina con bollería y dulces. Se ve en las fotos de la galería.',
	},
	{
		title: 'Cinco sobre cinco',
		text: 'La ficha tiene 5 sobre 5 con 5 reseñas en Google (octubre de 2026). Es una nota alta, pero con muy pocas opiniones: se toma como lo que es.',
	},
];

export const FICHA = [
	{
		title: 'Lo que sí publica',
		items: [
			{ name: 'Categoría', note: 'Google la clasifica como panadería.' },
			{ name: 'Dirección', note: 'Av. de Carlos III, 28 · Levante · 14014 Córdoba.' },
			{ name: 'Valoración', note: '5 sobre 5 con 5 reseñas publicadas.' },
			{ name: 'Fotos', note: '9 fotos en la galería del perfil de Google.' },
		],
	},
	{
		title: 'Lo que no publica',
		items: [
			{ name: 'Horario', note: 'No hay días ni horas de apertura en la ficha.' },
			{ name: 'Teléfono', note: 'No consta número de contacto del establecimiento.' },
			{ name: 'Web y redes', note: 'No hay página propia, correo ni perfiles sociales enlazados.' },
			{ name: 'Carta y pagos', note: 'No hay carta, precios oficiales ni métodos de pago publicados.' },
		],
	},
];

/** Precios que se leen en los rótulos del escaparate, en las fotos de la galería. */
export const PRECIOS = [
	{
		title: 'Panes',
		items: [
			{ name: 'Barra', price: '0,85 €' },
			{ name: 'Barra viena', price: '0,70 €' },
			{ name: 'Viena', price: '0,80 €' },
			{ name: 'Telera', price: '1,40 €' },
			{ name: 'Pan 1/2 kilo', price: '1,60 €' },
			{ name: 'Molete', price: '0,75 €' },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Bandejas', price: '3,00 €' },
			{ name: 'Empanadas', price: '1,80 €' },
			{ name: 'Tortas', price: '1,60 €' },
		],
	},
];

export const PRECIOS_NOTE =
	'Precios leídos en los rótulos del escaparate en una foto de la galería (octubre de 2026). No son una carta oficial ni los publica la ficha de Google: pueden haber cambiado y el surtido varía cada día.';

export const RESENAS_NOTE =
	'La ficha muestra una valoración media de 5 sobre 5 con 5 reseñas, pero no devuelve el texto de ninguna de ellas. Por eso esta página no reproduce opiniones: solo el número que Google muestra.';

export const FAQ = [
	{
		q: '¿Dónde está Panadería Rocío?',
		a: 'En la avenida de Carlos III, 28, en el barrio de Levante de Córdoba (14014). El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica horario de apertura, así que esta web no puede indicarlo. Tampoco consta qué día descansa ni si cierra al mediodía. Consulta la ficha actualizada o acércate al local antes de ir.',
	},
	{
		q: '¿Cómo se puede llamar?',
		a: 'La ficha no publica teléfono del establecimiento. No hay número que esta página pueda ofrecer sin inventarlo, así que el contacto es presencial.',
	},
	{
		q: '¿Qué venden?',
		a: 'Es una panadería: pan, bollería, empanadas y tortas, según los rótulos del escaparate. En el local también hay estanterías de aperitivos, snacks y bebidas, como se ve en las fotos de la galería.',
	},
	{
		q: '¿Cuánto cuesta el pan?',
		a: 'En el escaparate se leen precios como barra 0,85 €, barra viena 0,70 €, telera 1,40 €, pan de medio kilo 1,60 €, empanadas 1,80 € o tortas 1,60 €. Son los rótulos de una foto de la galería: pueden haber cambiado y no son una carta oficial.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '5 sobre 5 con 5 reseñas en Google (octubre de 2026). Es una puntuación muy alta, pero con un número bajo de opiniones, así que conviene leerla con prudencia.',
	},
	{
		q: '¿Se puede ver el texto de las reseñas?',
		a: 'Esta página no las reproduce porque la ficha consultada no las devuelve. El enlace «Ver las reseñas en Google» abre la lista pública de opiniones del establecimiento.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'No consta página web, correo ni perfiles sociales asociados a la ficha. Tampoco aparece reclamada por el negocio, por lo que los datos pueden estar incompletos.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas e indica que no hay aparcamiento adaptado para sillas de ruedas. No publica más detalles del interior ni de los aseos.',
	},
	{
		q: '¿Hay reparto o se puede pagar con tarjeta?',
		a: 'La ficha no indica servicio de reparto ni métodos de pago, así que esta web no los afirma. Se consulta en el local.',
	},
];
