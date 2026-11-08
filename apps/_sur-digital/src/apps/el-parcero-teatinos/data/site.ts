/**
 * Datos de El Parcero Teatinos — Carril del Capitán, 9
 * (Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «El Parcero Teatinos»,
 *   36.7247586,-4.4618363, feature 0xd72f77f6fc81a43:0x9e8823844ea174ae.
 * - Nombre, dirección, categoría, teléfono, web, valoración, horario,
 *   accesibilidad, descripción del negocio y reseñas: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * La ficha enlaza un Linktree (linktr.ee/ELPARCERO1), pero no publica carta ni
 * precios. La web no inventa esos datos: los platos que se citan son los que
 * aparecen en la galería del local y los que nombran las reseñas.
 */

export const BUSINESS = {
	name: 'El Parcero Teatinos',
	fullName: 'El Parcero Teatinos',
	shortName: 'El Parcero',
	mark: 'EP',
	street: 'Carril del Capitán, 9',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-parcero-teatinos',
	geo: { lat: 36.7247586, lng: -4.4618363 },
	featureId: '0xd72f77f6fc81a43:0x9e8823844ea174ae',
	placeId: 'ChIJQxrIb3_3cg0RrnShToQjiJ4',
	plusCode: '8C8QPGFQ+W7',
	googleCategory: 'Restaurante colombiano',
	website: 'https://linktr.ee/ELPARCERO1',
	phone: '627 62 16 96',
	phoneHref: 'tel:+34627621696',
	tagline: 'Restaurante 100% colombiano en Teatinos',
	description:
		'El Parcero Teatinos, en Carril del Capitán, 9 (Teatinos-Universidad, 29010 Málaga). Restaurante 100% colombiano, con hamburguesas Angus y cocina de la casa, de miércoles a domingo de 20:00 a 23:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Parcero+Teatinos/@36.7247586,-4.4618363,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77f6fc81a43:0x9e8823844ea174ae!8m2!3d36.7247586!4d-4.4618363!16s%2Fg%2F11tf0_drc6?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7247586%2C-4.4618363',
	embed: 'https://maps.google.com/maps?q=36.7247586,-4.4618363&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7247586,-4.4618363',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 244,
	label: '4,6',
};

/** Horario que publica la ficha: cena de miércoles a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '20:00–23:00' },
	{ dia: 'Jueves', horas: '20:00–23:00' },
	{ dia: 'Viernes', horas: '20:00–23:00' },
	{ dia: 'Sábado', horas: '20:00–23:00' },
	{ dia: 'Domingo', horas: '20:00–23:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Cocina colombiana',
	'Hamburguesas Angus',
	'Chicharrón',
	'Papas cargadas',
	'Domicilios',
	'Bebidas colombianas',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: '100% colombiano',
		text: 'La descripción de la ficha lo dice sin rodeos: «Restaurante 100% Colombiano». La cocina de la casa es colombiana de principio a fin, y la bandera aparece en la propia descripción de Google.',
	},
	{
		title: 'Papas con chicharrón',
		text: 'En la galería del local aparecen las papas cargadas con chicharrón, queso rallado y salsas, y el chicharrón en tiras sobre patatas. Son parte de lo que se sirve en la casa, junto a las arepas.',
	},
	{
		title: 'Hamburguesas Angus',
		text: '«Pedimos unas hamburguesas angus que estaban deliciosas», cuenta una de las reseñas de la ficha. Son parte de la carta, junto a los platos colombianos de la casa.',
	},
	{
		title: 'Atención y precios',
		text: '«Excelente servicio, comida deliciosa, la atención super» y «precios muy asequibles» son dos de las frases que repiten las reseñas. La ficha no publica la carta ni los importes.',
	},
];

/** Solo lo que nombran las reseñas y la categoría de la ficha. */
export const MENU = [
	{
		title: 'Del Parcero',
		items: [
			{
				name: 'Papas con chicharrón',
				note: 'patatas cargadas con chicharrón, queso rallado y salsas, en varias fotos de la galería',
			},
			{
				name: 'Chicharrón',
				note: 'tiras de chicharrón sobre patatas y bañadas en salsa, en las fotos del local',
			},
			{
				name: 'Arepa de la casa',
				note: 'arepa con guacamole, queso rallado y carne desmechada, en la galería del perfil',
			},
		],
	},
	{
		title: 'Hamburguesas',
		items: [
			{
				name: 'Hamburguesa Angus',
				note: '«pedimos unas hamburguesas angus que estaban deliciosas», dice una de las reseñas',
			},
			{
				name: 'Hamburguesa con guacamole',
				note: 'en la galería aparece una hamburguesa con guacamole, queso y salsa en un plato de papel',
			},
		],
	},
	{
		title: 'Bebidas',
		items: [
			{
				name: 'Bebidas colombianas',
				note: 'la nevera del local muestra Postobón, Hit y otras bebidas; la ficha no publica la lista ni los precios',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Nos encantó, pedimos unas hamburguesas angus que estaban deliciosas.',
		valor: 5,
	},
	{
		texto: 'Excelente servicio, comida deliciosa, la atención super, muy satisfecha.',
		valor: 5,
	},
	{
		texto: 'Comida exquisita, servicio excelente, precios muy asequibles.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Parcero Teatinos?',
		a: 'En Carril del Capitán, 9, en el barrio de Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de miércoles a domingo, de 20:00 a 23:00, y marca el lunes y el martes como cerrados. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante colombiano y lo describe como «100% Colombiano». En la galería aparecen papas con chicharrón, arepas con guacamole y queso, hamburguesas y bebidas colombianas. Las reseñas nombran además las hamburguesas Angus. La carta completa no está publicada en Google.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca los «precios muy asequibles». Para conocer la carta y los precios, lo mejor es llamar al 627 62 16 96.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni un teléfono específico para ellas. El único canal que aparece es el teléfono del local, el 627 62 16 96.',
	},
	{
		q: '¿Hacen domicilios?',
		a: 'Sí. El cartel de la fachada anuncia «Domicilios» con el teléfono 627 62 16 96. La ficha de Google no detalla las zonas de reparto, el horario de pedidos ni si se pueden hacer online.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca el acceso para sillas de ruedas. No publica más datos sobre asientos, aseos ni aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 244 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian la comida, el servicio, la atención y los precios.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'La ficha enlaza un Linktree del local, linktr.ee/ELPARCERO1, que reúne sus enlaces. No publica una página web propia.',
	},
];
