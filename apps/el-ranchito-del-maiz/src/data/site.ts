/**
 * Datos de El Ranchito del Maíz — C. Fernando Zóbel, 1, local 24 (41020 Sevilla).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios. La oferta que se describe son los
 * platos que aparecen en las fotografías del propio establecimiento y en su
 * descripción de Google (arepas y empanadas 100 % de maíz, pedidos por WhatsApp).
 */

export const BUSINESS = {
	name: 'El Ranchito del Maíz',
	shortName: 'El Ranchito',
	mark: 'RM',
	street: 'C. Fernando Zóbel, 1, local 24',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41020',
	country: 'ES',
	siteUrl: 'https://el-ranchito-del-maiz.vercel.app',
	geo: { lat: 37.4057723, lng: -5.9429381 },
	featureId: '0xd1269b1ab1a3245:0xaa284c5515d6bd83',
	placeId: 'ChIJRTIaq7FpEg0Rg73WFVVMKKo',
	googleCategory: 'Comida a domicilio',
	phone: '661 31 78 03',
	phoneHref: 'tel:+34661317803',
	whatsapp: 'https://wa.me/34661317803?text=Hola%2C%20quiero%20hacer%20un%20pedido',
	tagline: 'Arepas y empanadas 100 % de maíz en Sevilla',
	description:
		'El Ranchito del Maíz, arepas y empanadas 100 % de maíz en C. Fernando Zóbel, 1, local 24 (41020 Sevilla). Comida tradicional, rellenos generosos y pedidos por WhatsApp. Abre a mediodía y por la noche.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Ranchito+del+Maiz/@37.4057723,-5.9429381,17z/data=!3m1!4b1!4m6!3m5!1s0xd1269b1ab1a3245:0xaa284c5515d6bd83!8m2!3d37.4057723!4d-5.9429381!16s%2Fg%2F11zh95cyjn',
	cid: 'https://www.google.com/maps?cid=12264653917134621827',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.4057723%2C-5.9429381',
	embed: 'https://maps.google.com/maps?q=37.4057723,-5.9429381&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.4057723,-5.9429381',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 5, count: 14, label: '5,0' };

/** Horario publicado: dos turnos, con cierre de lunes. */
export const HORARIO = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: '10:00 – 16:00 · 20:00 – 24:00' },
	{ day: 'Miércoles', value: '10:00 – 16:00 · 20:00 – 24:00' },
	{ day: 'Jueves', value: '10:00 – 16:00 · 20:00 – 24:00' },
	{ day: 'Viernes', value: '10:00 – 16:00 · 20:00 – 2:00' },
	{ day: 'Sábado', value: '10:00 – 16:00 · 20:00 – 2:00' },
	{ day: 'Domingo', value: '10:00 – 16:00 · 20:00 – 24:00' },
];
export const HORARIO_AVISO =
	'La ficha marca dos turnos: de 10:00 a 16:00 y desde las 20:00. De martes a jueves y el domingo cierra a medianoche; los viernes y los sábados alarga la noche hasta las 2:00. Los lunes no abre. En festivos el horario puede variar, así que conviene confirmarlo por teléfono.';

export const SERVICIOS = [
	'Arepas 100 % de maíz',
	'Empanadas fritas',
	'Comida tradicional',
	'Para llevar',
	'Pedidos por WhatsApp',
	'Mesas en el local',
];

export const HIGHLIGHTS = [
	{
		title: 'Maíz, no trigo',
		text: 'El negocio lo anuncia así en su ficha: arepas y empanadas 100 % de maíz, «frescas y llenas de sabor». Masa de maíz, relleno generoso, queso rallado y aguacate en la mayoría de las combinaciones.',
	},
	{
		title: `Un ${RATING.label} con ${RATING.count} reseñas`,
		text: 'La ficha mantiene la máxima puntuación. Una clienta lo resume: «La comida exquisita y la limpieza de 10». Otra destaca el picante y el trato: «súper amables».',
	},
	{
		title: 'Pedidos por WhatsApp',
		text: `El propio negocio pide los pedidos por WhatsApp al ${BUSINESS.phone}. Abre a mediodía y vuelve por la noche, y los viernes y sábados sirve hasta las 2:00.`,
	},
];

/**
 * Selección basada en las fotografías del local: la ficha no publica carta ni
 * precios, así que aquí no se inventan importes.
 */
export const MENU = [
	{
		title: 'Arepas de maíz',
		items: [
			{ name: 'Arepa de pollo', note: 'pollo desmechado, queso rallado y aguacate' },
			{ name: 'Arepa de carne mechada', note: 'carne desmechada, queso rallado y aguacate' },
			{ name: 'Arepa de bacon y huevo', note: 'bacon, huevo, queso y aguacate' },
			{ name: 'Arepa de queso', note: 'queso rallado y aguacate, la opción sin carne' },
		],
	},
	{
		title: 'Empanadas',
		items: [
			{ name: 'Empanadas de maíz', note: 'fritas y crujientes, para compartir' },
			{ name: 'Empanadas con salsa', note: 'se sirven con las salsas de la casa' },
		],
	},
	{
		title: 'Platos',
		items: [
			{ name: 'Pescado frito con arroz', note: 'con ensalada de tomate y cebolla y lima' },
			{ name: 'Arepa con patatas fritas', note: 'el plato completo que aparece en las fotos' },
		],
	},
	{
		title: 'Salsas de la casa',
		items: [
			{ name: 'Salsa roja', note: 'la que las reseñas destacan por su picante' },
			{ name: 'Salsa blanca', note: 'suave, para acompañar la arepa' },
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«La comida exquisita y la limpieza de 10.»', valor: 5 },
	{ texto: '«Escelente rico picantes me encantó... súper amables.»', valor: 5 },
	{ texto: '«Así que volverán a tener pedidos.»', valor: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está El Ranchito del Maíz?',
		a: 'En la calle Fernando Zóbel, 1, local 24, 41020 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'El negocio pide los pedidos por WhatsApp al 661 31 78 03. También puedes llamar al mismo número o acercarte al local en la calle Fernando Zóbel.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de martes a domingo en dos turnos: de 10:00 a 16:00 y desde las 20:00. De martes a jueves y el domingo cierra a medianoche; viernes y sábados, a las 2:00. Los lunes no abre.',
	},
	{
		q: '¿Qué son las arepas?',
		a: 'Son discos de masa de maíz cocinados a la plancha y rellenos. En El Ranchito del Maíz se preparan con maíz, no con trigo, y llevan queso rallado y aguacate entre los ingredientes que aparecen en las fotos.',
	},
	{
		q: '¿Hay carta con precios?',
		a: 'La ficha pública no publica carta ni precios, y esta web no los inventa. Los platos que ves son los que aparecen en las fotografías del propio establecimiento; consulta precios y disponibilidad por WhatsApp o teléfono.',
	},
	{
		q: '¿Hay opciones sin carne?',
		a: 'En las fotos aparece la arepa de queso, con queso rallado y aguacate, como opción sin carne. Pregunta por los rellenos y las salsas del día al hacer el pedido.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Las fotografías del perfil muestran mesas y platos servidos en el establecimiento, y la ficha lo clasifica además como comida a domicilio. Si quieres pedir a casa, pregunta por las condiciones y la zona de reparto.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas, que destacan la comida, la limpieza y el trato.`,
	},
];
