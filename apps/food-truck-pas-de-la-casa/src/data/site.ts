/**
 * Datos de «Food Truck» — GPRM+F63, AD200 Pas de la Casa (Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Food Truck»,
 *   42.5411874,1.7331251, feature 0x12af7d0c05c6458d:0x89c56a8d240732e1.
 * - Nombre, dirección, categoría, valoración, horario y Plus Code: respuesta
 *   pública de la ficha de Google consultada el 2 de noviembre de 2026
 *   (3,4 · 12 reseñas).
 *
 * Avisos importantes:
 * - La ficha es mínima: no publica teléfono, web, descripción, carta, precios
 *   ni ningún atributo de servicio o accesibilidad. Esta web no inventa nada de
 *   eso y no ofrece un botón de llamada porque no hay número que marcar.
 * - La dirección que publica Google es el Plus Code (GPRM+F63) con el código
 *   postal y la localidad, no una calle con número.
 * - Abre todos los días de 9:00 a 19:00.
 */

export const BUSINESS = {
	name: 'Food Truck',
	fullName: 'Food Truck',
	shortName: 'Food Truck',
	mark: 'FT',
	street: 'GPRM+F63 (Plus Code)',
	district: 'Pas de la Casa',
	city: 'Pas de la Casa',
	region: 'Andorra',
	postalCode: 'AD200',
	country: 'AD',
	siteUrl: 'https://food-truck-pas-de-la-casa.vercel.app',
	geo: { lat: 42.5411874, lng: 1.7331251 },
	featureId: '0x12af7d0c05c6458d:0x89c56a8d240732e1',
	placeId: 'ChIJjUXGBQx9rxIR4TIHJI1qxYk',
	plusCode: 'GPRM+F63 Pas de la Casa',
	googleCategory: 'Restaurante de comida rápida',
	tagline: 'Comida rápida en Pas de la Casa',
	description:
		'Food Truck, en Pas de la Casa (AD200), junto a la frontera con Francia. Restaurante de comida rápida abierto todos los días de 9:00 a 19:00, con 3,4 sobre 5 y 12 reseñas en Google. La ficha no publica teléfono ni carta.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Food+Truck/@42.5411874,1.7331251,17z/data=!3m1!4b1!4m6!3m5!1s0x12af7d0c05c6458d:0x89c56a8d240732e1!8m2!3d42.5411874!4d1.7331251!16s%2Fg%2F11sf8n_m1p?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5411874%2C1.7331251',
	embed: 'https://maps.google.com/maps?q=42.5411874,1.7331251&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5411874,1.7331251',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.4,
	count: 12,
	label: '3,4',
};

/** Horario que publica la ficha: todos los días, de 9:00 a 19:00. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '9:00–19:00' },
	{ dia: 'Martes', horas: '9:00–19:00' },
	{ dia: 'Miércoles', horas: '9:00–19:00' },
	{ dia: 'Jueves', horas: '9:00–19:00' },
	{ dia: 'Viernes', horas: '9:00–19:00' },
	{ dia: 'Sábado', horas: '9:00–19:00' },
	{ dia: 'Domingo', horas: '9:00–19:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha no añade avisos de festivos para este local. En Pas de la Casa el tiempo cambia mucho en invierno, así que conviene confirmar antes de subir.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida rápida',
	'Pas de la Casa',
	'Todos los días',
	'9:00–19:00',
	'Plus Code GPRM+F63',
	'3,4 en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida rápida',
		text: 'Google la clasifica como «Restaurante de comida rápida» y no le añade ninguna otra categoría. La ficha no publica qué se sirve exactamente: ni carta, ni precios, ni fotos de platos.',
	},
	{
		title: 'Todos los días, de 9 a 19',
		text: 'El horario es el mismo los siete días: de 9:00 a 19:00. Cubre desayuno, comida y merienda, y deja fuera la cena, algo a tener en cuenta en una localidad de montaña donde mucha gente cena tarde.',
	},
	{
		title: 'En Pas de la Casa',
		text: 'Está en Pas de la Casa (AD200), en la parroquia de Encamp, a pie de la frontera con Francia y de las pistas de Grandvalira. La dirección que publica Google es el Plus Code GPRM+F63, no una calle con número.',
	},
	{
		title: '12 opiniones',
		text: 'La ficha reúne 12 reseñas con una media de 3,4 sobre 5 (noviembre de 2026). Es una muestra pequeña: con tan pocas opiniones, la media se mueve mucho con cada reseña nueva.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Food Truck?',
		a: 'En Pas de la Casa (AD200), en la parroquia de Encamp, en las coordenadas 42.5411874, 1.7331251 y Plus Code GPRM+F63. Google no publica una dirección con calle y número: da el Plus Code, el código postal y la localidad. El mapa de esta página abre el punto exacto y el botón «Cómo llegar» lanza la ruta.',
	},
	{
		q: '¿Cómo se llega y dónde se aparca?',
		a: 'Pas de la Casa se cruza por la CG-2 desde Encamp o por la carretera que baja del puerto de Envalira, y está a un paso de la frontera francesa. La ficha no publica datos de aparcamiento ni de accesibilidad, así que esta web no puede indicarlos: lo razonable es guiarse por la señalización de la localidad.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 9:00 a 19:00, sin día de cierre. La ficha no añade avisos de festivos para este local, pero en una zona de montaña conviene confirmar el horario antes de subir.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'La ficha de Google no publica ningún teléfono, así que esta web no ofrece un número ni un botón de llamada. El único canal que figura en el perfil es la propia ficha de Google Maps, con su mapa y sus indicaciones.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Google solo indica la categoría: «Restaurante de comida rápida». No hay carta, ni platos, ni precios publicados en la ficha, y esta web no los inventa. Para saber qué sirven hay que ir al local o consultar la ficha por si el propietario añade información.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'La ficha no publica ni el servicio de comida para llevar ni el de reparto, así que no se puede dar por hecho. Al no haber teléfono publicado, tampoco hay forma de encargar por adelantado desde aquí.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,4 sobre 5 con 12 reseñas (consultado el 2 de noviembre de 2026). Son pocas opiniones: cada reseña nueva mueve la media, así que conviene leerlas en la ficha antes de sacar conclusiones.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica ningún dato de accesibilidad: ni acceso para sillas de ruedas, ni aparcamiento adaptado, ni información del interior. No hay nada que esta web pueda afirmar al respecto.',
	},
	{
		q: '¿Esta web es del food truck?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona pedidos ni reservas y no está vinculada al negocio. Cualquier gestión pasa por acudir al local o por la ficha de Google.',
	},
];

export const LEGAL = {
	razonSocial: 'Food Truck',
	actualizado: 'Noviembre de 2026',
};
