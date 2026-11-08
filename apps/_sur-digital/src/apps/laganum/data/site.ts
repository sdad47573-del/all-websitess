/**
 * Datos de LAGANUM — Carrer de la Sardana, 6, AD500 Andorra la Vella
 * (parroquia de Andorra la Vella, Principado de Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «LAGANUM», 42.50737,1.5288869,
 *   feature 0x12a58bafa31591d9:0x6b476ffbac8b75c1.
 * - Nombre, dirección, teléfono, categorías, valoración y horario: ficha pública
 *   de Google consultada el 1 de noviembre de 2026 (4,8 · 194 reseñas).
 * - La ficha no enlaza web propia («Añadir sitio web»).
 * - Precios y salsas: pizarra del local que aparece en las fotos del perfil
 *   («Menú Clàssic», «Menú Especial», bol de pasta, bol de gnocchi/ravioli).
 * - El rótulo de la fachada dice «Laganum — obrador de pasta», y la categoría
 *   de Google es «Restaurante italiano» y «Tienda de alimentación».
 */

export const BUSINESS = {
	name: 'Laganum',
	fullName: 'Laganum',
	shortName: 'Laganum',
	mark: 'LG',
	street: 'Carrer de la Sardana, 6',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/laganum',
	geo: { lat: 42.50737, lng: 1.5288869 },
	featureId: '0x12a58bafa31591d9:0x6b476ffbac8b75c1',
	placeId: 'ChIJ2ZEVo6-LpRIRwXWLrPtvR2s',
	plusCode: 'GG4H+WH Andorra la Vella',
	googleCategory: 'Restaurante italiano',
	phone: '+376 813 870',
	phoneHref: 'tel:+376813870',
	tagline: 'Obrador de pasta en Andorra la Vella',
	description:
		'Laganum, Carrer de la Sardana, 6 (AD500 Andorra la Vella). Obrador de pasta fresca con menús de 10,95 y 11,95 €, bol de pasta o de gnocchi y ravioli para llevar, nueve salsas y vitrina de platos preparados. 4,8 sobre 5 con 194 reseñas. De lunes a sábado, y domingo cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/LAGANUM/@42.50737,1.5288869,17z/data=!4m6!3m5!1s0x12a58bafa31591d9:0x6b476ffbac8b75c1!8m2!3d42.50737!4d1.5288869!16s%2Fg%2F11h927_zmy?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.50737%2C1.5288869',
	embed: 'https://maps.google.com/maps?q=42.50737,1.5288869&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.50737,1.5288869',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.8,
	count: 194,
	label: '4,8',
};

/** Horario que publica la ficha: de lunes a sábado, cerrado el domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:00–20:30' },
	{ dia: 'Martes', horas: '11:00–20:30' },
	{ dia: 'Miércoles', horas: '11:00–20:30' },
	{ dia: 'Jueves', horas: '11:00–20:30' },
	{ dia: 'Viernes', horas: '11:00–21:00' },
	{ dia: 'Sábado', horas: '11:00–21:00' },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advierte de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto; ese día aparece como cerrado. El domingo cierra todo el año.';

export const SERVICIOS = [
	'Pasta fresca',
	'Obrador',
	'Menús completos',
	'Para llevar',
	'Gnocchi y ravioli',
	'Nueve salsas',
	'Tienda de alimentación',
	'Postres',
];

export const HIGHLIGHTS = [
	{
		title: 'Pasta hecha en el obrador',
		text: 'La fachada lo dice sin rodeos: «Laganum, obrador de pasta». En las bandejas de madera del mostrador se ven rigatoni, radiatori y raviolis rellenos, algunos de masa verde y rosa, con su cartel de «Ravioli» delante.',
	},
	{
		title: 'Menús a 10,95 y 11,95 €',
		text: 'La pizarra del local anuncia dos: Menú Clàssic (pasta clàssica, bebida y postre) por 10,95 €, y Menú Especial (gnocchi o ravioli, bebida y postre) por 11,95 €. Son los precios que aparecen en las fotos del perfil.',
	},
	{
		title: 'Bol de pasta para llevar',
		text: 'El bol de pasta cuesta 6,90 € y el de gnocchi o ravioli, 7,90 €. Se elige la pasta y se elige la salsa, y sale en caja de cartón kraft con la bebida y el postre al lado, como en las fotos de las cajas.',
	},
	{
		title: 'También tienda',
		text: 'Google lo clasifica como «Restaurante italiano» y «Tienda de alimentación»: además de la pasta al peso hay vitrina con focaccias, empanadas, lasaña, canelones, tiramisú y panna cotta, cada uno con su etiqueta de precio.',
	},
];

/**
 * La pizarra del local, tal como se lee en las fotos del perfil. Los precios
 * son los de esa pizarra (noviembre de 2026) y pueden cambiar.
 */
export const MENU = [
	{
		title: 'Menús completos',
		items: [
			{
				name: 'Menú Clàssic — 10,95 €',
				note: 'pasta clàssica + bebida + postre',
			},
			{
				name: 'Menú Especial — 11,95 €',
				note: 'gnocchi o ravioli + bebida + postre',
			},
		],
	},
	{
		title: 'Al peso, para llevar',
		items: [
			{
				name: 'Bol de pasta — 6,90 €',
				note: 'se elige la pasta del mostrador y la salsa',
			},
			{
				name: 'Bol de gnocchi o ravioli — 7,90 €',
				note: 'rellenos de la casa, con la salsa que se prefiera',
			},
		],
	},
	{
		title: 'Salsas',
		items: [
			{ name: 'Bolonyesa', note: 'la clásica de carne' },
			{ name: 'Carbonara', note: 'con huevo y queso' },
			{ name: 'Napolitana', note: 'tomate y albahaca' },
			{ name: 'Alfredo', note: 'crema y parmesano' },
			{ name: 'Gorgonzola y avellana', note: 'azul y fruto seco' },
			{ name: 'Bolets', note: 'setas' },
			{ name: "Pollastre all'arrabbiata", note: 'pollo y guindilla' },
			{ name: 'Pesto', note: 'albahaca, piñones y queso' },
			{ name: 'Curri y mango', note: 'la más aromática de la lista' },
		],
	},
	{
		title: 'Vitrina',
		items: [
			{
				name: 'Focaccia y empanadas',
				note: 'al horno, con su etiqueta de precio en el mostrador',
			},
			{
				name: 'Lasaña y canelones',
				note: 'raciones preparadas para calentar en casa',
			},
			{
				name: 'Tiramisú y panna cotta',
				note: 'en vasitos, también para llevar',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Laganum?',
		a: 'En el Carrer de la Sardana, número 6, AD500 Andorra la Vella (Principado de Andorra). La ficha de Google sitúa el local en las coordenadas 42.50737, 1.5288869, con el Plus Code GG4H+WH Andorra la Vella, y el rótulo de la fachada dice «Laganum obrador de pasta».',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves, de 11:00 a 20:30; viernes y sábado, de 11:00 a 21:00; domingo cerrado. La ficha advierte de que el 1 de noviembre (Día de Todos los Santos) el horario podría ser distinto y ese día aparece como cerrado.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el +376 813 870. Es el número para preguntar por los menús, encargar bols de pasta o reservar lo que haya en la vitrina.',
	},
	{
		q: '¿Qué es exactamente Laganum?',
		a: 'Un obrador de pasta con mostrador y tienda. Google lo clasifica como «Restaurante italiano» y «Tienda de alimentación»: pasta fresca hecha allí, menús con bebida y postre, bols de pasta para llevar y una vitrina con focaccias, empanadas, lasaña, canelones y postres.',
	},
	{
		q: '¿Cuánto cuestan los menús?',
		a: 'Según la pizarra del local que aparece en las fotos del perfil: Menú Clàssic 10,95 € (pasta clàssica, bebida y postre) y Menú Especial 11,95 € (gnocchi o ravioli, bebida y postre). Son precios de noviembre de 2026 y pueden cambiar.',
	},
	{
		q: '¿Qué salsas hay?',
		a: 'La pizarra lista nueve: bolonyesa, carbonara, napolitana, alfredo, gorgonzola y avellana, bolets (setas), pollastre all\'arrabbiata, pesto y curri con mango. Se eligen al pedir el bol de pasta o de gnocchi y ravioli.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Lo que se ve en las fotos es un mostrador con vitrina y una ventana a la calle, sin mesas. El servicio habitual es para llevar, en cajas de cartón kraft, como las de la foto con dos raciones al horno y dos tiramisús. Si hay que comer en el local, conviene preguntar por teléfono.',
	},
	{
		q: '¿Es también tienda de alimentación?',
		a: 'Sí, es una de las dos categorías que le pone Google. Además de la pasta fresca al peso y las salsas, la vitrina tiene focaccia, empanadas, lasaña, canelones, tiramisú y panna cotta con su etiqueta de precio.',
	},
	{
		q: '¿Tiene página web o carta online?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento; esta página es informativa y se ha hecho con los datos, la pizarra y las fotos públicos de esa ficha. Para pedidos y precios del día, el canal es el teléfono.',
	},
	{
		q: '¿Cómo se llega?',
		a: 'El local está en el Carrer de la Sardana, 6, en el centro de Andorra la Vella, a poca distancia de la avenida Meritxell. En el mapa de esta página hay un botón de «Cómo llegar» que abre la ruta en Google Maps.',
	},
];

export const LEGAL = {
	razonSocial: 'Laganum',
	actualizado: 'Noviembre de 2026',
};
