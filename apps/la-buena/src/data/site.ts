/**
 * Datos de La Buena — Passatge Antònia Font Caminal, 7, AD700 Escaldes-Engordany.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.5091605, 1.536608, feature
 *   0x12a58b007fb7bfc3:0x13f72bf5c7718644 (nombre, dirección, categoría, horario,
 *   teléfono, valoración, accesibilidad y descripción del negocio).
 * - Fotografías del perfil del establecimiento en Google Maps: tostas, bowls,
 *   carnes, batatas con salsas, interior y mesa con el QR de pedido.
 *
 * La ficha no enlaza web propia ni publica carta con precios: esta web no
 * inventa importes. Los platos que se citan son los que muestran las fotos.
 */

export const BUSINESS = {
	name: 'La Buena',
	fullName: 'LA BUENA',
	mark: 'LB',
	street: 'Passatge Antònia Font Caminal, 7',
	city: 'Escaldes-Engordany',
	parish: 'Escaldes-Engordany',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://la-buena.vercel.app',
	geo: { lat: 42.5091605, lng: 1.536608 },
	featureId: '0x12a58b007fb7bfc3:0x13f72bf5c7718644',
	placeId: 'ChIJw7-3fwCLpRIRRIZxx_Ur9xM',
	channel: '/g/11xh6qg61z',
	category: 'Restaurante de brunch',
	categories: ['Restaurante de brunch'],
	phone: '+376 770 001',
	phoneHref: 'tel:+376770001',
	tagline: 'Brunch y cocina non stop en Escaldes-Engordany',
	description:
		'La Buena, restaurante de brunch y cocina non stop en el Passatge Antònia Font Caminal, 7, de Escaldes-Engordany (AD700 Andorra). Desayunos, brunch, comidas, meriendas, tardeo y cenas todos los días de 9:00 a 23:00.',
	hasPublicWebsite: false,
	ownerDescription:
		'LaBuena, restaurante de cocina non stop, donde puedes disfrutar de servicio de desayunos, brunch, comidas, meriendas, tardeo y cenas, saludable equilibrado pero también con caprichos dulces que hacen que nada sea aburrido, proponemos un menú diseñado para poder cuidarte sin renunciar al sabor, nuestra carta de bebidas es amplia, con vinos ecológicos, cervezas, zumos naturales, limonadas, también contamos con platos para compartir para una cena entre amigos, para grupos o disfrutar en familia, servicio ágil y moderno donde podrás pedir desde tú mesa las veces que quieras, utilizando un código QR, servicio de terraza con ambiente inmejorable',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Buena/@42.5091605,1.536608,17z/data=!4m6!3m5!1s0x12a58b007fb7bfc3:0x13f72bf5c7718644!8m2!3d42.5091605!4d1.536608!16s%2Fg%2F11xh6qg61z',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5091605%2C1.536608',
	embed: 'https://maps.google.com/maps?q=42.5091605,1.536608&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.3,
	count: 288,
	label: '4,3',
};

/** Horario que publica la ficha: un solo turno, todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '9:00–23:00' },
	{ day: 'Martes', value: '9:00–23:00' },
	{ day: 'Miércoles', value: '9:00–23:00' },
	{ day: 'Jueves', value: '9:00–23:00' },
	{ day: 'Viernes', value: '9:00–23:00' },
	{ day: 'Sábado', value: '9:00–23:00' },
	{ day: 'Domingo', value: '9:00–23:00' },
];

/** Lo que sí consta en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Brunch todo el día',
	'Cocina non stop',
	'Pedido por QR en la mesa',
	'Terraza',
	'Platos para compartir',
	'Acceso y asientos adaptados',
];

/** Platos que se ven en las fotos del perfil, sin precios. */
export const MENU: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'Tostas y bocadillos',
		items: [
			{
				name: 'Tosta de jamón con aguacate',
				note: 'pan tostado con aguacate, jamón curado, rúcula y un hilo de aceite',
			},
			{
				name: 'Tosta de salmón ahumado',
				note: 'aguacate, queso crema, salmón y pipas de calabaza sobre pan tostado',
			},
			{
				name: 'Bocadillo tostado de jamón y queso',
				note: 'pan dorado a la plancha con jamón, queso y espinacas, servido en papel',
			},
			{
				name: 'Pan de masa madre',
				note: 'la base de las tostas: corteza crujiente y miga aireada',
			},
		],
	},
	{
		title: 'Platos y bowls',
		items: [
			{
				name: 'Bowl verde',
				note: 'aguacate, queso a la plancha, espinacas, champiñones, cebolla pochada, zanahoria y remolacha',
			},
			{
				name: 'Carne a la plancha',
				note: 'con arroz, ensalada de hojas y pan; en la foto, con salsa verde por encima',
			},
			{
				name: 'Pollo con verduras',
				note: 'pollo a la plancha con calabacín, espárragos y ensalada, servido con pan',
			},
			{
				name: 'Huevos y brunch',
				note: 'la ficha anuncia desayunos y brunch toda la mañana; en las fotos, huevo con carne y ensalada',
			},
		],
	},
	{
		title: 'Para picar y beber',
		items: [
			{
				name: 'Batatas fritas con salsas',
				note: 'cesta de boniato frito con tres salsas para mojar',
			},
			{
				name: 'Platos para compartir',
				note: 'la casa los ofrece para una cena entre amigos, para grupos o en familia',
			},
			{
				name: 'Zumos y limonadas',
				note: 'bebidas naturales de la carta, servidas en vasos con pajita de papel',
			},
			{
				name: 'Vinos y cervezas',
				note: 'la ficha anuncia vinos ecológicos y cervezas, también de grifo',
			},
		],
	},
];

export const MENU_NOTE =
	'La ficha de Google no publica carta ni precios, y esta página no inventa importes. Los platos enumerados son los que aparecen en las fotografías del perfil y los que describe el propio restaurante (desayunos, brunch, comidas, meriendas, tardeo y cenas). Para la carta completa y los precios, llama al +376 770 001.';

export const FAQ = [
	{
		q: '¿Dónde está La Buena?',
		a: 'En el Passatge Antònia Font Caminal, 7, en Escaldes-Engordany (AD700 Andorra). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 9:00 a 23:00, sin cerrar a mediodía. La casa lo llama cocina non stop: desayunos, brunch, comidas, meriendas, tardeo y cenas en el mismo horario.',
	},
	{
		q: '¿Cómo se pide?',
		a: 'Desde la mesa, con un código QR: la ficha explica que se puede pedir «desde tu mesa las veces que quieras». No hay pedidos en línea en esta página.',
	},
	{
		q: '¿Hay terraza?',
		a: 'Sí. La descripción del restaurante habla de servicio de terraza, y el local la presenta como un espacio con «ambiente inmejorable».',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Tostas y bocadillos de pan tostado, bowls con aguacate y verduras, carnes y pollo a la plancha con arroz o ensalada, huevos, batatas con salsas y platos para compartir. En las fotos del perfil aparecen todos ellos.',
	},
	{
		q: '¿Es cocina saludable?',
		a: 'La casa se define como «saludable equilibrado, pero también con caprichos dulces». En su descripción habla de un menú pensado para cuidarse sin renunciar al sabor.',
	},
	{
		q: '¿Se puede ir en grupo?',
		a: 'Sí. La ficha ofrece platos para compartir para una cena entre amigos, para grupos o en familia. Para reservar, el teléfono publicado es el +376 770 001.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,3 sobre 5 con 288 reseñas en el momento de consultarla (noviembre de 2026).',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza web propia ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
