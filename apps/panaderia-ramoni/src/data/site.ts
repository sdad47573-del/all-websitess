/**
 * Datos de Panadería Ramoni — Sureste, 14010 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Ramoni,
 *   37.8828572,-4.7558145, feature 0xd6cdf89d692a665:0x23858ed6a14be9f.
 * - Nombre, dirección, teléfono, categoría, valoración, reseñas y horario:
 *   ficha pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, web propia,
 * correo, redes, carta, precios, métodos de pago ni reparto. El surtido se
 * describe solo con lo que muestran las fotos del perfil: una tienda de barrio
 * con fruta, verdura, charcutería y despensa, además de pan y bollería.
 */

export const BUSINESS = {
	name: 'Panadería Ramoni',
	shortName: 'Ramoni',
	mark: 'R',
	street: 'San Martín de Porres, 4',
	district: 'Sureste',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14010',
	country: 'ES',
	phone: '957 25 35 96',
	phoneHref: 'tel:+34957253596',
	rating: 4.7,
	reviewsCount: 23,
	siteUrl: 'https://panaderia-ramoni.vercel.app',
	geo: { lat: 37.8828572, lng: -4.7558145 },
	featureId: '0xd6cdf89d692a665:0x23858ed6a14be9f',
	placeId: 'ChIJZaaS1onfbA0Rn74Uau1YOAI',
	googleCategory: 'Panadería',
	tagline: 'Pan, fruta y despensa en el Sureste',
	description:
		'Panadería Ramoni, en San Martín de Porres, 4 (Sureste, 14010 Córdoba). Tienda de barrio con pan y bollería, fruta y verdura, charcutería y productos de despensa. De lunes a jueves de 8:00 a 15:00 y de 18:00 a 20:00; de viernes a domingo de 9:00 a 14:00. 4,7 sobre 5 con 23 reseñas. Teléfono 957 25 35 96.',
	hoursSummary: 'L–J 8:00–15:00 y 18:00–20:00 · V–D 9:00–14:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Ramoni/@37.8828572,-4.7558145,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf89d692a665:0x23858ed6a14be9f!8m2!3d37.8828572!4d-4.7558145!16s%2Fg%2F11cns93g06?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps/place/?q=place_id:ChIJZaaS1onfbA0Rn74Uau1YOAI',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8828572%2C-4.7558145',
	embed: 'https://maps.google.com/maps?q=37.8828572,-4.7558145&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8828572,-4.7558145',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '8:00–15:00 · 18:00–20:00' },
	{ day: 'Viernes a domingo', value: '9:00–14:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. De lunes a jueves abre en dos turnos (8:00–15:00 y 18:00–20:00); de viernes a domingo, solo por la mañana (9:00–14:00). El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.';

export const SERVICIOS = [
	'Pan y bollería',
	'Fruta y verdura',
	'Charcutería',
	'Refrigerados',
	'Despensa',
	'Bebidas',
	'Limpieza',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan y bollería',
		text: 'Google la clasifica como panadería. En las estanterías de las fotos del perfil se ven bolsas de pan y bollería empaquetada.',
	},
	{
		title: 'Fruta y verdura',
		text: 'Los cajones de la entrada, con tomates, naranjas, manzanas, plátanos, pimientos, cebollas y patatas, con sus carteles de precio.',
	},
	{
		title: 'Despensa y mostrador',
		text: 'Un mostrador acristalado de charcutería y refrigerados, y estanterías de conservas, bebidas y productos de limpieza.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Fruta y verdura',
		items: [
			{
				name: 'Tomates, pimientos y berenjenas',
				note: 'En los cajones de la entrada, junto a calabacines y alcachofas, según las fotos del perfil.',
			},
			{
				name: 'Naranjas, manzanas y plátanos',
				note: 'En las estanterías de fruta, con carteles de precio en las fotos.',
			},
			{
				name: 'Patatas, cebollas y ajos',
				note: 'En cajas y bolsas al pie de las estanterías.',
			},
		],
	},
	{
		title: 'Mostrador y refrigerados',
		items: [
			{
				name: 'Charcutería y embutidos',
				note: 'En el mostrador acristalado que aparece en varias fotos del perfil.',
			},
			{
				name: 'Quesos, lácteos y refrigerados',
				note: 'En el mismo mostrador y en la nevera del fondo.',
			},
			{
				name: 'Conservas y latas',
				note: 'En las estanterías altas, detrás del mostrador.',
			},
		],
	},
	{
		title: 'Despensa y hogar',
		items: [
			{
				name: 'Pan y bollería',
				note: 'En la estantería de la derecha se ven bolsas de pan, bollería y snacks.',
			},
			{
				name: 'Bebidas y refrescos',
				note: 'En las baldas del fondo, junto a las conservas y los licores.',
			},
			{
				name: 'Limpieza y droguería',
				note: 'Una pared entera de productos de limpieza en una de las fotos.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Ramoni?',
		a: 'En San Martín de Porres, 4, en el distrito Sureste de Córdoba (14010). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, de lunes a jueves abre de 8:00 a 15:00 y de 18:00 a 20:00; de viernes a domingo, de 9:00 a 14:00. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono que publica la ficha de Google es el 957 25 35 96. No figuran web propia, correo ni redes sociales.',
	},
	{
		q: '¿Es una panadería o una tienda?',
		a: 'Google la clasifica como panadería y en las fotos del perfil se ven bolsas de pan y bollería. Esas mismas fotos muestran una tienda de barrio: fruta y verdura en cajones, un mostrador de charcutería y refrigerados, y estanterías de conservas, bebidas y limpieza.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Lo que muestran las fotos del perfil: pan y bollería empaquetada, fruta y verdura, charcutería y refrigerados, conservas, bebidas y productos de limpieza. La ficha no publica carta ni catálogo, así que esta página no detalla precios ni variedades.',
	},
	{
		q: '¿Abre los domingos?',
		a: 'Sí. La ficha de Google marca de viernes a domingo un horario de 9:00 a 14:00; de lunes a jueves abre también por la tarde, de 18:00 a 20:00.',
	},
	{
		q: '¿Tiene aparcamiento adaptado?',
		a: 'La ficha de Google indica expresamente que no hay aparcamiento accesible para sillas de ruedas. No publica datos sobre el acceso al local ni sobre el aseo.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,7 sobre 5 con 23 reseñas en Google, que la clasifica como panadería. Las reseñas destacan el trato, los productos y los precios económicos.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
];
