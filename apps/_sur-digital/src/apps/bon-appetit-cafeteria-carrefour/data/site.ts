/**
 * Datos de «Bon Appétit - Cafeteria Carrefour Andorra 2000» —
 * Carrer de la Sardana, 22, AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.5064585, 1.5300457, feature
 *   0x12a58b740d31a297:0x84f745fe7dbda7f8 (nombre, dirección, categorías,
 *   valoración, horario y atributos de accesibilidad).
 * - Fotografías del perfil del establecimiento en Google Maps, entre ellas los
 *   carteles de la vitrina con el menú y el precio.
 *
 * Avisos importantes:
 * - La ficha no publica teléfono, web, descripción, carta ni precios: el único
 *   precio que aparece en esta web es el del menú que se lee en la foto del
 *   cartel (12,50 €). No hay botón de llamada porque no hay número público.
 * - Google la clasifica como «Cafetería», «Restaurante de desayunos», «Comida a
 *   domicilio», «Bar de tapas» y «Restaurante vegano».
 */

export const BUSINESS = {
	name: 'Bon Appétit - Cafeteria Carrefour Andorra 2000',
	displayName: 'Bon Appétit',
	fullName: 'Bon Appétit · Cafeteria Carrefour Andorra 2000',
	shortName: 'Bon Appétit',
	mark: 'BA',
	street: 'Carrer de la Sardana, 22',
	district: 'Andorra la Vella',
	city: 'Andorra la Vella',
	region: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://www.sur-digital.com/bon-appetit-cafeteria-carrefour',
	geo: { lat: 42.5064585, lng: 1.5300457 },
	featureId: '0x12a58b740d31a297:0x84f745fe7dbda7f8',
	placeId: 'ChIJl6IxDXSLpRIR-Ke9ff5F94Q',
	channel: '/g/11hkc8hprk',
	googleCategory: 'Cafetería',
	googleCategories: [
		'Cafetería',
		'Restaurante de desayunos',
		'Comida a domicilio',
		'Bar de tapas',
		'Restaurante vegano',
	],
	tagline: 'Cafetería y desayunos en Andorra la Vella',
	description:
		'Bon Appétit, cafetería del centro comercial Carrefour Andorra 2000, en la calle Sardana, 22, de Andorra la Vella (AD500). Menú de 12,50 € con primero, segundo, postre y bebida, vitrina de pollo asado y tapas, y desayunos. Abre todos los días de 8:30 a 20:00, con acceso adaptado. La ficha de Google le da 3,5 sobre 5 con 129 reseñas.',
	hasPublicWebsite: false,
	hasPhone: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bon+App%C3%A9tit+-+Cafeteria+Carrefour+Andorra+2000/@42.5064585,1.5300457,17z/data=!3m1!4b1!4m6!3m5!1s0x12a58b740d31a297:0x84f745fe7dbda7f8!8m2!3d42.5064585!4d1.5300457!16s%2Fg%2F11hkc8hprk',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5064585%2C1.5300457',
	embed: 'https://maps.google.com/maps?q=42.5064585,1.5300457&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5064585,1.5300457',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 3.5,
	count: 129,
	label: '3,5',
};

/** Horario que publica la ficha: todos los días, de 8:30 a 20:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '8:30–20:00' },
	{ dia: 'Martes', horas: '8:30–20:00' },
	{ dia: 'Miércoles', horas: '8:30–20:00' },
	{ dia: 'Jueves', horas: '8:30–20:00' },
	{ dia: 'Viernes', horas: '8:30–20:00' },
	{ dia: 'Sábado', horas: '8:30–20:00' },
	{ dia: 'Domingo', horas: '8:30–20:00' },
];

export const SERVICIOS = [
	'Cafetería',
	'Desayunos',
	'Bar de tapas',
	'Comida a domicilio',
	'Opción vegana',
	'Acceso adaptado',
];

/** Menú y platos que se ven en la vitrina, con el único precio publicado. */
export const CARTA: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'El menú',
		items: [
			{
				name: 'Menú completo',
				note: 'primer plato, segundo plato, postre y bebida, según el cartel de la vitrina',
				price: '12,50 €',
			},
			{
				name: 'Plats únics',
				note: 'el cartel anuncia platos únicos, sin precio publicado en la foto',
			},
			{
				name: 'Desayunos',
				note: 'la ficha la clasifica como «Restaurante de desayunos»; abre a las 8:30',
			},
		],
	},
	{
		title: 'De la vitrina',
		items: [
			{
				name: 'Pollo asado con patatas',
				note: 'cuartos de pollo dorados con patatas panadera y pan, servidos en la línea de autoservicio',
			},
			{
				name: 'Salchicha a la plancha con verduras',
				note: 'salchicha con pimiento rojo, berenjena y calabacín asados, con guarnición',
			},
			{
				name: 'Pizzas y ensaladas',
				note: 'pizzas en la vitrina y ensaladas servidas en bol de cartón, con tomate, pepino y aceitunas',
			},
		],
	},
	{
		title: 'Postres y barra',
		items: [
			{
				name: 'Vasitos de postre',
				note: 'chocolate, fresas, arándanos y nata, en vasos de plástico en la vitrina',
			},
			{
				name: 'Bollería y pasteles',
				note: 'brownies, cupcakes, tartas de fruta y napolitanas en la bandeja de la vitrina',
			},
			{
				name: 'Café y bebidas',
				note: 'cafetería con café, refrescos y agua en la nevera junto a la caja',
			},
		],
	},
];

export const CARTA_NOTE =
	'La ficha de Google no publica la carta ni los precios. El único importe que aparece aquí es el del cartel del menú que se ve en las fotos del perfil (12,50 €); el resto de platos se describen tal como se ven en la vitrina y en las bandejas, sin inventar precios.';

export const FAQ = [
	{
		q: '¿Dónde está Bon Appétit?',
		a: 'En la calle Sardana, 22, de Andorra la Vella (AD500), en el centro comercial Carrefour Andorra 2000. La fachada verde da a la acera de la calle Sardana y el local está dentro del centro. El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 8:30 a 20:00, sin día de cierre en la ficha de Google. La ficha no añade avisos de festivos, así que en una fecha señalada conviene comprobar el horario del centro comercial.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El cartel de la vitrina anuncia un menú con primer plato, segundo plato, postre y bebida por 12,50 €. También hay un cartel de «Plats únics», pero ese no lleva precio en la foto: los importes pueden cambiar, así que confírmalos en la caja.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen pollo asado con patatas, salchichas a la plancha con pimiento, berenjena y calabacín, pizzas, ensaladas en bol, empanadas y postres en vaso (chocolate, fresas, arándanos con nata), además de bollería y café. La ficha no publica la carta completa.',
	},
	{
		q: '¿Es un sitio vegano?',
		a: 'La ficha de Google la incluye en la categoría «Restaurante vegano», junto a «Cafetería» y «Bar de tapas», pero no publica qué platos son veganos. En la vitrina se ven ensaladas y verduras asadas; para una opción concreta, lo mejor es preguntar en el propio local al pedir.',
	},
	{
		q: '¿Hacen comida a domicilio?',
		a: '«Comida a domicilio» es una de las categorías que publica la ficha, así que el reparto aparece en su perfil. Lo que no publica es un teléfono ni una plataforma de pedidos, así que desde esta web no se puede encargar: hay que hacerlo en el local.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'La ficha de Google no publica ningún teléfono, así que esta web no ofrece número ni botón de llamada. El único canal que figura en el perfil es la propia ficha de Google Maps.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas. No publica datos sobre aseos adaptados ni aparcamiento, así que esta página no los afirma. Si necesitas una condición concreta, consúltalo en el centro comercial.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No consta un sistema de reservas ni una web propia. Es una cafetería de autoservicio dentro de un centro comercial: se pide en la línea de la vitrina y se paga en caja.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,5 sobre 5 con 129 reseñas (consultado el 2 de noviembre de 2026). Es una media con bastantes opiniones y de un local muy transitado, así que hay valoraciones de todo tipo; merece la pena leerlas en la ficha.',
	},
];
