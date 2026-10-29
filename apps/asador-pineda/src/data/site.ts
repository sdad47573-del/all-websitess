/**
 * Datos de Asador Pineda — C. Manrique, 19 (Distrito Centro, 29013 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Asador Pineda,
 *   36.7297689,-4.4155749, feature 0xd72f7c6ffcada2b:0x3f1a7252ecd3331f.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La web
 * no inventa esos datos. El surtido que se cita es el que nombran la descripción del
 * negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Asador Pineda',
	shortName: 'Pineda',
	mark: 'AP',
	street: 'C. Manrique, 19',
	district: 'Distrito Centro',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29013',
	country: 'ES',
	siteUrl: 'https://asador-pineda.vercel.app',
	geo: { lat: 36.7297689, lng: -4.4155749 },
	featureId: '0xd72f7c6ffcada2b:0x3f1a7252ecd3331f',
	placeId: 'ChIJK9rK_8b3cg0RHzPT7FJyGj8',
	plusCode: '8C8QPHHM+WQ',
	googleCategory: 'Restaurante y comida para llevar',
	phone: '952 65 40 16',
	phoneHref: 'tel:+34952654016',
	tagline: 'Pollos asados y comida casera en el centro de Málaga',
	description:
		'Asador Pineda, en la calle Manrique, 19 (Distrito Centro, 29013 Málaga). Pollos asados y comida casera para comer allí o para llevar, abierto todos los días.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+Pineda/@36.7297689,-4.4155749,20z/data=!4m6!3m5!1s0xd72f7c6ffcada2b:0x3f1a7252ecd3331f!8m2!3d36.7297689!4d-4.4155749!16s%2Fg%2F11bycl34bg?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=4547312865308701471',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7297689%2C-4.4155749',
	embed: 'https://maps.google.com/maps?q=36.7297689,-4.4155749&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7297689,-4.4155749',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 324,
	label: '4,5',
};

/** Horario que publica la ficha: todos los días, solo a mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–16:00' },
	{ dia: 'Martes', horas: '10:00–16:00' },
	{ dia: 'Miércoles', horas: '10:00–16:00' },
	{ dia: 'Jueves', horas: '10:00–16:00' },
	{ dia: 'Viernes', horas: '10:00–16:00' },
	{ dia: 'Sábado', horas: '10:00–16:00' },
	{ dia: 'Domingo', horas: '10:00–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser diferente. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollos asados',
	'Comida casera',
	'Platos preparados',
	'Para llevar',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo asado',
		text: 'El propio negocio se presenta en Google como «los mejores pollos asados de Málaga y comida casera». Una reseña lo resume: «muy buenos pollos asados y muchos platos preparados».',
	},
	{
		title: 'Comida casera',
		text: 'Las opiniones mencionan platos preparados «muy ricos y variados», la ensalada de salsa rosa y las patatas alioli. La ficha no publica carta completa ni precios.',
	},
	{
		title: 'Para llevar',
		text: 'Google lo clasifica como restaurante y restaurante de comida para llevar. Atiende todos los días de 10:00 a 16:00, así que el servicio es de mediodía.',
	},
];

/**
 * Solo las familias de producto que nombran la descripción del negocio y las
 * reseñas. No hay carta ni precios publicados.
 */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'lo que anuncia la descripción del negocio en Google',
			},
			{
				name: 'Pollo para llevar',
				note: 'la ficha lo clasifica como restaurante de comida para llevar',
			},
		],
	},
	{
		title: 'Casero',
		items: [
			{
				name: 'Platos preparados',
				note: '«muchos platos preparados muy ricos y variados», según una reseña',
			},
			{
				name: 'Ensalada de salsa rosa',
				note: '«buenísimas», junto a las patatas alioli, según una reseña',
			},
			{
				name: 'Patatas alioli',
				note: 'también destacadas en las opiniones de la ficha',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Muy buenos pollos asados y muchos platos preparados muy ricos y variados',
		valor: 5,
	},
	{ texto: 'Ensalada de salsa rosa y las patatas alioli buenísimas!!!', valor: 5 },
	{
		texto: 'He ido mas veces, los precios siguen subiendo y el pollo seco no, lo siguiente.',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Pineda?',
		a: 'En la calle Manrique, 19, en el Distrito Centro (29013 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica horario de lunes a domingo, de 10:00 a 16:00, sin ningún día de cierre. En el Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Google lo clasifica como restaurante de comida para llevar, además de restaurante. Para encargar, el teléfono publicado en la ficha es el 952 65 40 16.',
	},
	{
		q: '¿Se puede reservar por la web?',
		a: 'No. Esta página es informativa y no permite reservar ni hacer pedidos. La ficha no publica un sistema de reservas online ni página web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La descripción del negocio habla de pollos asados y comida casera. Las reseñas mencionan platos preparados, ensalada de salsa rosa y patatas alioli. No hay carta ni precios publicados, así que el surtido del día se consulta por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene una valoración de 4,5 sobre 5 con 324 reseñas en el momento de consultarla (octubre de 2026). Hay opiniones muy buenas sobre el pollo y los platos preparados, y también alguna crítica con los precios y el punto del pollo.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
