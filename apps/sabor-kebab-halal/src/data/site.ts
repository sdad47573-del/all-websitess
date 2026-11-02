/**
 * Datos de Sabor Kebab Halal — Carrer Mossèn Cinto Verdaguer, 5,
 * AD500 Andorra la Vella.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 42.5083527, 1.522037, feature
 *   0x12a58ad33d5ad03f:0xd441b75a082b5af (nombre, dirección, categoría, horario,
 *   teléfono, valoración y descripción del negocio).
 * - Fotografías del perfil del establecimiento en Google Maps: el asador, la
 *   vitrina, el kebab, el durum, las hamburguesas, las patatas y el interior.
 *
 * La ficha no enlaza web propia ni publica carta con precios: esta web no
 * inventa importes. Los platos que se citan son los que describe la casa y los
 * que aparecen en las fotos.
 */

export const BUSINESS = {
	name: 'Sabor Kebab Halal',
	fullName: 'SABOR KEBAB HALAL',
	mark: 'SK',
	street: 'Carrer Mossèn Cinto Verdaguer, 5',
	city: 'Andorra la Vella',
	parish: 'Andorra la Vella',
	postalCode: 'AD500',
	country: 'AD',
	siteUrl: 'https://sabor-kebab-halal.vercel.app',
	geo: { lat: 42.5083527, lng: 1.522037 },
	featureId: '0x12a58ad33d5ad03f:0xd441b75a082b5af',
	placeId: 'ChIJP9BaPdOKpRIRr7WCoHUbRA0',
	channel: '/g/11csbtr7q2',
	category: 'Restaurante de comida rápida',
	categories: ['Restaurante de comida rápida'],
	phone: '+376 665 665',
	phoneHref: 'tel:+376665665',
	tagline: 'Kebab halal y comida rápida en el centro de Andorra la Vella',
	description:
		'Sabor Kebab Halal, restaurante de kebab y comida rápida en la calle Mossèn Cinto Verdaguer, 5, en el centro de Andorra la Vella. Kebabs, durums, hamburguesas, pizzas, platos combinados y ensaladas, con servicio para llevar y reparto a domicilio. Todos los días de 11:30 a 23:30.',
	hasPublicWebsite: false,
	ownerDescription:
		'Sabor Kebab és un restaurant situat al centre d’Andorra la Vella. Oferim kebabs, durums, hamburgueses, pizzes, plats combinats, amanides i opcions per a tota la família, sempre preparats amb ingredients frescos i de qualitat. Disposem de servei per emportar i lliurament a domicili principalment a Andorra la Vella i Escaldes-Engordany. El nostre objectiu és oferir un servei ràpid, un tracte amable i una excel·lent relació qualitat-preu.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Sabor+Kebab+Halal/@42.5083527,1.522037,17z/data=!4m6!3m5!1s0x12a58ad33d5ad03f:0xd441b75a082b5af!8m2!3d42.5083527!4d1.522037!16s%2Fg%2F11csbtr7q2',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5083527%2C1.522037',
	embed: 'https://maps.google.com/maps?q=42.5083527,1.522037&z=17&hl=es&output=embed',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 3.7,
	count: 140,
	label: '3,7',
};

/** Horario que publica la ficha: todos los días. */
export const HOURS = [
	{ day: 'Lunes', value: '11:30–23:30' },
	{ day: 'Martes', value: '11:30–23:30' },
	{ day: 'Miércoles', value: '11:30–23:30' },
	{ day: 'Jueves', value: '11:30–23:30' },
	{ day: 'Viernes', value: '11:30–23:30' },
	{ day: 'Sábado', value: '11:30–23:30' },
	{ day: 'Domingo', value: '11:30–23:30' },
];

/** Lo que sí consta en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Kebab halal',
	'Durums',
	'Hamburguesas y pizzas',
	'Para llevar',
	'Reparto a domicilio',
	'Centro de Andorra la Vella',
];

/** Platos que describe la casa y se ven en las fotos, sin precios. */
export const MENU: {
	title: string;
	items: { name: string; note: string; price?: string }[];
}[] = [
	{
		title: 'Kebab y durum',
		items: [
			{
				name: 'Kebab en pan',
				note: 'pan abierto con carne de pollo del asador, lechuga, tomate, cebolla morada y salsa blanca',
			},
			{
				name: 'Durum',
				note: 'tortilla de trigo a la plancha con carne, verduras y salsa, servido con salsa aparte',
			},
			{
				name: 'Plato de kebab',
				note: 'carne de pollo con alitas, nuggets, patatas y ensalada de col, zanahoria y tomate',
			},
		],
	},
	{
		title: 'Hamburguesas y pizzas',
		items: [
			{
				name: 'Hamburguesa de pollo crujiente',
				note: 'pan de sésamo con pollo rebozado, lechuga, cebolla roja, tomate y mayonesa',
			},
			{
				name: 'Hamburguesa con queso',
				note: 'pan de sésamo, carne, queso fundido, lechuga y tomate',
			},
			{
				name: 'Pizzas',
				note: 'la casa las anuncia en su carta, junto a los platos combinados',
			},
		],
	},
	{
		title: 'Para completar',
		items: [
			{
				name: 'Patatas fritas',
				note: 'ración servida en papel, como acompañamiento de los platos',
			},
			{
				name: 'Platos combinados y ensaladas',
				note: 'la ficha los incluye entre la oferta, con opciones para toda la familia',
			},
			{
				name: 'Para llevar y a domicilio',
				note: 'servicio para llevar y reparto en Andorra la Vella y Escaldes-Engordany',
			},
		],
	},
];

export const MENU_NOTE =
	'La ficha de Google no publica carta ni precios, y esta página no inventa importes. Los platos enumerados son los que describe el restaurante y los que aparecen en las fotografías del perfil. Para conocer la carta completa y los precios, llama al +376 665 665.';

export const FAQ = [
	{
		q: '¿Dónde está Sabor Kebab Halal?',
		a: 'En la calle Mossèn Cinto Verdaguer, 5, en el centro de Andorra la Vella (AD500). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de la semana, de 11:30 a 23:30, sin cerrar a mediodía y sin día de cierre.',
	},
	{
		q: '¿Es halal?',
		a: 'El propio nombre del establecimiento lo indica: «Sabor Kebab Halal». La ficha de Google no publica el certificado ni los detalles del proveedor, así que si necesitas confirmarlo, pregunta en el local.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Kebabs y durums, hamburguesas, pizzas, platos combinados, ensaladas y patatas. La casa lo resume así: «kebabs, durums, hamburgueses, pizzes, plats combinats, amanides i opcions per a tota la família».',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí. Según la descripción del restaurante, hacen reparto a domicilio principalmente en Andorra la Vella y Escaldes-Engordany, además de servicio para llevar. El pedido se hace por teléfono: +376 665 665.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha de Google no publica carta ni importes. La casa promete «una excel·lent relació qualitat-preu», pero los precios se consultan por teléfono o en el local.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Sí. En las fotos del perfil se ve el interior con barra naranja, mesas y sillas rojas, además del asador vertical con los pinchos de kebab.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica datos de accesibilidad de este establecimiento, así que esta página no los afirma. Conviene llamar antes si necesitas acceso adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 3,7 sobre 5 con 140 reseñas en el momento de consultarla (noviembre de 2026).',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza web propia ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
