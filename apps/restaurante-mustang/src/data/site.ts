/**
 * Datos de Restaurante Mustang — C. Juan Francés Bosca, 39,
 * Teatinos-Universidad, 29010 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Mustang»,
 *   36.7261948,-4.4703808, feature 0xd72f73a47ddc2cf:0xfa486a6bdddbeb90.
 * - Nombre, categorías, dirección, teléfono, valoración, horario,
 *   accesibilidad y reseñas: ficha pública de Google consultada en octubre
 *   de 2026.
 *
 * La ficha no publica página web, carta ni precios. La web no inventa esos
 * datos: los platos que se citan son los que nombran las reseñas del propio
 * perfil (camperos, bocatas, solomillos, patatas y salsas).
 */

export const BUSINESS = {
	name: 'Restaurante Mustang',
	fullName: 'Restaurante Mustang',
	shortName: 'Mustang',
	mark: 'M',
	street: 'C. Juan Francés Bosca, 39',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://restaurante-mustang.vercel.app',
	geo: { lat: 36.7261948, lng: -4.4703808 },
	featureId: '0xd72f73a47ddc2cf:0xfa486a6bdddbeb90',
	placeId: 'ChIJz8LdRzr3cg0RkOvb3WtqSPo',
	googleCategory: 'Restaurante americano',
	phone: '952 10 97 17',
	phoneHref: 'tel:+34952109717',
	tagline: 'Cocina americana, bocatas y carnes en Teatinos',
	description:
		'Restaurante Mustang, en C. Juan Francés Bosca, 39 (Teatinos-Universidad, 29010 Málaga). Cocina americana, camperos, bocadillos y solomillos, abierto hasta las 23:30. 3,5 sobre 5 con 610 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Mustang/@36.7261948,-4.4703808,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73a47ddc2cf:0xfa486a6bdddbeb90!8m2!3d36.7261948!4d-4.4703808!16s%2Fg%2F12qg_9mtm?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7261948%2C-4.4703808',
	embed: 'https://maps.google.com/maps?q=36.7261948,-4.4703808&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7261948,-4.4703808',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 3.5,
	count: 610,
	label: '3,5',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '19:30–23:30' },
	{ dia: 'Martes', horas: '19:30–23:30' },
	{ dia: 'Miércoles', horas: '19:30–23:30' },
	{ dia: 'Jueves', horas: '19:30–23:30' },
	{ dia: 'Viernes', horas: '12:30–23:30' },
	{ dia: 'Sábado', horas: '12:00–23:30' },
	{ dia: 'Domingo', horas: '19:30–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. Confirma la apertura en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Restaurante americano',
	'Bocadillos y camperos',
	'Carnes a la plancha',
	'Para llevar',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
	'Amigable con la comunidad LGBTQ+',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina americana',
		text: 'Es la categoría con la que Google clasifica el local: «Restaurante americano». Bocatas, camperos y carnes a la plancha, con servicio de mediodía y de noche.',
	},
	{
		title: 'Abierto hasta las 23:30',
		text: 'La ficha publica cierre a las 23:30 todos los días. De lunes a jueves y el domingo solo abre por la noche; el viernes desde las 12:30 y el sábado desde las 12:00.',
	},
	{
		title: 'Un clásico de Teatinos',
		text: '610 reseñas en Google lo convierten en uno de los locales más comentados de la zona universitaria. La nota es 3,5: hay opiniones para todos los gustos y conviene leerlas.',
	},
];

/** Solo lo que nombran las reseñas de la ficha. No hay carta publicada. */
export const MENU = [
	{
		title: 'Bocadillos y camperos',
		items: [
			{
				name: 'Camperos',
				note: 'el bocadillo que más se repite en las reseñas de la ficha, con queso entre los ingredientes',
			},
			{
				name: 'Bocatas',
				note: 'la otra forma de pedir el bocadillo que nombran las opiniones del local',
			},
		],
	},
	{
		title: 'A la plancha',
		items: [
			{
				name: 'Solomillos',
				note: 'citados en las reseñas; se sirven con patatas y salsas',
			},
			{
				name: 'Patatas y salsas',
				note: 'las guarniciones que aparecen en las opiniones publicadas',
			},
		],
	},
];

/** Frases textuales publicadas en la ficha (las dos que expone Google). */
export const RESENAS = [
	'El queso que le ponen a los camperos y bocatas es muy malo.',
	'Los solomillos eran muy pequeños, las patatas de paquete y las salsas escasas.',
];

export const RESENAS_NOTA =
	'La ficha muestra opiniones muy distintas entre sus 610 reseñas. Estas son las dos que Google expone en el perfil; hay muchas más, mejores y peores, en el enlace de abajo.';

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Mustang?',
		a: 'En la calle Juan Francés Bosca, 39, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de lunes a jueves y el domingo de 19:30 a 23:30; el viernes de 12:30 a 23:30 y el sábado de 12:00 a 23:30. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Google lo clasifica como restaurante americano. Las reseñas hablan de camperos, bocatas, solomillos, patatas y salsas. La ficha no publica la carta completa.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni importes. Para saber qué hay y cuánto cuesta, lo más rápido es llamar al 952 10 97 17.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'La ficha lo clasifica como restaurante y no detalla el servicio para llevar. Conviene preguntarlo por teléfono antes de acercarse.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online. El único canal que aparece es el teléfono del local, el 952 10 97 17.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados. Indica que no hay aparcamiento accesible.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '3,5 sobre 5 con 610 reseñas en el momento de consultar la ficha (octubre de 2026). Es una nota de local muy frecuentado: hay opiniones muy buenas y también quejas puntuales sobre el queso de los bocadillos o el tamaño de los solomillos.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
