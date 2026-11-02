/**
 * Datos de «Panaria» — C. de Alarcos, 3, 13001 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.98343, -3.9299083, feature
 *   0xd6bc314c4e090f5:0xd5d23c295e36872d (nombre, dirección, categorías,
 *   valoración, accesibilidad y Plus Code), consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - Google lo clasifica como cafetería, panadería, bar, restaurante de desayunos,
 *   de brunch, servicio de catering, comida rápida, pastelería y bocatería. La
 *   ficha no publica teléfono, horario, carta, precios ni web propia.
 * - Es una página informativa de un local de la cadena Panaria, no la web de la
 *   marca.
 * - La media es 3,8 sobre 5 con 621 reseñas; las tres reseñas destacadas van de
 *   cinco a tres estrellas.
 */

export const BUSINESS = {
	name: 'Panaria',
	fullName: 'Panaria · C. de Alarcos, 3',
	mark: 'PA',
	street: 'C. de Alarcos, 3',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13001',
	country: 'ES',
	siteUrl: 'https://panaria-ciudad-real.vercel.app',
	geo: { lat: 38.98343, lng: -3.9299083 },
	featureId: '0xd6bc314c4e090f5:0xd5d23c295e36872d',
	placeId: 'ChIJ9ZDgxBTDaw0RLYc2Xik80tU',
	channel: '/g/11cnsfm2vc',
	plusCode: '8CCRX3MC+92 Ciudad Real',
	category: 'Panadería-cafetería',
	categories: [
		'Cafetería',
		'Panadería',
		'Bar',
		'Restaurante de desayunos',
		'Restaurante de brunch',
		'Servicio de catering',
		'Restaurante de comida rápida',
		'Pastelería',
		'Bocatería',
	],
	phone: '',
	phoneHref: '',
	tagline: 'Panadería-cafetería con tartas y zumos en la calle de Alarcos',
	description:
		'Panaria en la calle de Alarcos, 3, de Ciudad Real (13001): panadería-cafetería con bollería, tartas, bocadillos, ensaladas, zumos y desayunos. 3,8 sobre 5 con 621 reseñas en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panaria/@38.98343,-3.9299083,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc314c4e090f5:0xd5d23c295e36872d!8m2!3d38.98343!4d-3.9299083!16s%2Fg%2F11cnsfm2vc',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.98343%2C-3.9299083',
	embed: 'https://maps.google.com/maps?q=38.98343,-3.9299083&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.98343%2C-3.9299083',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.8,
	count: 621,
	label: '3,8',
};

/**
 * La ficha no publica horario ni teléfono. La tabla recoge lo que sí consta.
 */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Teléfono', value: 'No publicado en la ficha' },
	{ day: 'Entrada y aseo', value: 'Adaptados para sillas de ruedas' },
	{ day: 'Servicio', value: 'Panadería, cafetería y catering' },
];

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura ni teléfono, así que esta web no puede confirmar cuándo abre. Lo que sí marca: entrada, aseo y asientos adaptados para sillas de ruedas, y que el local es también servicio de catering. Para desayunar, lo más seguro es pasar por la calle de Alarcos y ver la puerta.';

export const SERVICIOS = [
	'Panadería-cafetería',
	'Desayunos',
	'Brunch',
	'Tartas y bollería',
	'Bocadillos y ensaladas',
	'Zumos naturales',
	'Catering',
	'Acceso adaptado',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Desayunos y brunch',
		text: 'Google lo clasifica como restaurante de desayunos y de brunch, además de cafetería y panadería. En las fotos del perfil se ven cafés con leche y con nata, zumo de naranja, tostadas de jamón y bowls de ensalada: el repertorio de una mañana larga.',
	},
	{
		title: 'Tartas en vitrina',
		text: 'La vitrina es lo primero que aparece al entrar: tarta de zanahoria, tarta de queso, crumble de manzana y brownie, cada una con su etiqueta de Panaria, y la bollería en la balda de abajo. También hay porciones para llevar en táper, como la tarta de queso de una de las fotos.',
	},
	{
		title: 'Alarcos, 3',
		text: 'El local está en la calle de Alarcos, 3, en el centro de Ciudad Real, con fachada gris, rótulo blanco de Panaria y puerta de cristal con vinilos. Al lado, en la acera, la pizarra anuncia los desayunos; el suelo es de losetas rojas y blancas.',
	},
	{
		title: 'Una media de 3,8',
		text: '3,8 sobre 5 con 621 reseñas (2 de noviembre de 2026). Las tres reseñas destacadas van de cinco a tres estrellas: una alaba la variedad de cafés, batidos, infusiones y bollería; otra destaca que atienden rápido; la tercera se limita a contar que fue a desayunar y merendar.',
	},
];

export const MENU = [
	{
		title: 'Desayunos',
		items: [
			{
				name: 'Café con leche',
				note: 'En taza grande o en vaso, como el de las fotos del perfil',
			},
			{
				name: 'Café con nata',
				note: 'Con nata montada y canela por encima, en vaso de cristal',
			},
			{
				name: 'Zumo de naranja',
				note: 'Natural, servido en vaso junto al desayuno',
			},
			{
				name: 'Tostada de jamón con tomate',
				note: 'Con tomate cherry, mayonesa y un bol de ensalada de aguacate',
			},
		],
	},
	{
		title: 'Bollería',
		items: [
			{
				name: 'Donuts',
				note: 'Glaseados y de chocolate, también con virutas encima',
			},
			{
				name: 'Croissant de jamón',
				note: 'Con jamón cocido y sésamo, servido en plato blanco',
			},
			{
				name: 'Bollería de la balda',
				note: 'Napolitanas, palmeras y piezas de hojaldre según el día',
			},
		],
	},
	{
		title: 'Tartas',
		items: [
			{
				name: 'Tarta de zanahoria',
				note: 'En la vitrina, con la etiqueta de Panaria',
			},
			{
				name: 'Tarta de queso',
				note: 'También por porciones para llevar en táper, como en la foto del perfil',
			},
			{
				name: 'Crumble de manzana',
				note: 'Con la cobertura crujiente, cortado en porciones grandes',
			},
			{
				name: 'Brownie',
				note: 'De chocolate, en porción gruesa',
			},
		],
	},
	{
		title: 'Salado',
		items: [
			{
				name: 'Bocadillo de jamón',
				note: 'Con patatas fritas de bolsa al lado',
			},
			{
				name: 'Bol de aguacate y pollo',
				note: 'Ensalada con aguacate, pollo, tomate y hojas verdes',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panaria en Ciudad Real?',
		a: 'En la calle de Alarcos, 3, de Ciudad Real (13001), con Plus Code 8CCRX3MC+92 y coordenadas 38.98343, -3.9299083. Está en el centro, con fachada gris y el rótulo blanco de Panaria. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Hay teléfono para llamar?',
		a: 'La ficha de Google de este local no publica ningún teléfono, y esta web no va a inventarlo. Para encargar una tarta o preguntar por el desayuno, lo directo es pasarse por la calle de Alarcos, 3.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha tampoco publica horario de apertura: no hay ninguna franja con horas. Como los datos públicos no lo dicen, esta página no lo afirma. La ficha sí la clasifica como restaurante de desayunos y de brunch, pero eso no fija una hora de cierre.',
	},
	{
		q: '¿Qué se puede tomar?',
		a: 'Es panadería-cafetería. En las fotos del perfil hay cafés con leche y con nata, zumo de naranja, donuts glaseados y de chocolate, croissant de jamón, tostada de jamón con tomate cherry, un bol de aguacate y pollo, bocadillo de jamón con patatas y una vitrina con tartas de zanahoria, queso, crumble y brownie.',
	},
	{
		q: '¿Hay tartas para llevar?',
		a: 'Sí. Una de las fotos del perfil es una porción de tarta de queso dentro de un táper de plástico, así que se puede pedir para llevar. La ficha no publica precios ni catálogo de encargos: eso se pregunta en el mostrador.',
	},
	{
		q: '¿Sirven brunch y catering?',
		a: 'Google le pone las etiquetas de restaurante de brunch y de servicio de catering, además de cafetería, panadería, pastelería y bocatería. Ni la ficha ni esta web detallan el contenido, el precio ni las condiciones de esos servicios: se consultan en el local.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. Este local no tiene carta colgada en su ficha de Google ni web propia, así que esta página no publica importes. Los productos que aparecen son los de las fotos del perfil y los que nombran las reseñas, sin precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica información sobre aparcamiento adaptado; el local está en una calle céntrica con acera estrecha.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,8 sobre 5 con 621 reseñas (consultado el 2 de noviembre de 2026). Las reseñas destacadas hablan de la variedad de cafés, batidos, infusiones y bollería («Muy buena cafetería»), de la rapidez del servicio y de que es un «local agradable para desayunar».',
	},
	{
		q: '¿Esta web es la oficial de Panaria?',
		a: 'No. Es una página informativa de este local de la calle de Alarcos, creada con los datos públicos de su ficha de Google Maps y las fotos del perfil. No representa a la cadena Panaria, no gestiona pedidos ni reservas y no está vinculada al establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'Panaria · C. de Alarcos, 3',
	actualizado: 'Noviembre de 2026',
};
