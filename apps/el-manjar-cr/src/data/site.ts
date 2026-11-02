/**
 * Datos de El manjar Cr — C. de la Mata, 4, 13004 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc3bb61b95f91:0x30987071ce7342e0).
 *
 * La ficha incluye una descripción firmada por el propio negocio («Tienda de
 * comida casera para llevar a domicilio»), categoría «Comida a domicilio»,
 * teléfono, 4,1 sobre 5 con 25 reseñas, horario y tres reseñas destacadas.
 * No enlaza web propia ni redes sociales y no publica carta ni precios.
 */

export const BUSINESS = {
	name: 'El manjar Cr',
	fullName: 'El manjar Cr',
	shortName: 'El manjar',
	mark: 'm',
	street: 'C. de la Mata, 4',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://el-manjar-cr.vercel.app',
	geo: { lat: 38.9850891, lng: -3.9237401 },
	featureId: '0xd6bc3bb61b95f91:0x30987071ce7342e0',
	placeId: 'ChIJkV-5YbvDaw0R4EJzznFwmDA',
	plusCode: '8CCRX3PG+2G',
	googleCategory: 'Comida a domicilio',
	phone: '615 43 46 70',
	phoneHref: 'tel:+34615434670',
	tagline: 'Comida casera para llevar a domicilio en Ciudad Real',
	description:
		'El manjar Cr, en C. de la Mata, 4 (13004 Ciudad Real). Comida casera para llevar y a domicilio, con postres de casa. De 12:00 a 15:30, con el lunes cerrado.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/El+manjar+Cr/@38.9850891,-3.9237401,17z/data=!4m7!3m6!1s0xd6bc3bb61b95f91:0x30987071ce7342e0!8m2!3d38.9850891!4d-3.9237401!16s%2Fg%2F11pvmy17hj!19sChIJkV-5YbvDaw0R4EJzznFwmDA?authuser=0&hl=es',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9850891%2C-3.9237401',
	embed: 'https://maps.google.com/maps?q=38.9850891,-3.9237401&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9850891,-3.9237401',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 25,
	label: '4,1',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '12:00–15:30' },
	{ dia: 'Miércoles', horas: '12:00–15:30' },
	{ dia: 'Jueves', horas: '11:45–15:30' },
	{ dia: 'Viernes', horas: '12:00–15:30' },
	{ dia: 'Sábado', horas: '12:00–15:30' },
	{ dia: 'Domingo', horas: '12:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (domingo 1 de noviembre) el horario podría ser diferente. El jueves abre un cuarto de hora antes, a las 11:45. Confirma siempre por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Reparto a domicilio',
	'Postres caseros',
	'Menú del día',
	'Acceso adaptado',
];

/** Perfil de Instagram que aparece en el propio cartel del local. */
export const INSTAGRAM = {
	handle: '@elmanjarcr',
	href: 'https://www.instagram.com/elmanjarcr/',
};

/** Precio del menú diario impreso en el cartel del local. */
export const MENU_PRECIO = '7 €';

export const HIGHLIGHTS = [
	{
		title: 'Menú diario por 7 €',
		text: 'El cartel del local lo detalla: primer plato a elegir, segundo plato a elegir y pan y postre, todo por 7 €. En el cartel se ven una paella, una lasaña, albóndigas con guisantes, ensaladilla y una tarta de galletas.',
	},
	{
		title: 'Comida y derivados',
		text: 'El rótulo de la casa dice «El Manjar Cr · Comida y derivados para llevar», y la descripción de la ficha lo confirma: «Tienda de comida casera para llevar a domicilio». Guisos, asados, ensaladas y postres, todo en el mismo mostrador.',
	},
	{
		title: 'Postres de casa',
		text: 'La reseña de cinco estrellas lo dice sin rodeos: «La mejor tarta de galletas que he probado en mi vida». El menú diario incluye postre, y la tarta de galletas aparece también en el cartel de la casa.',
	},
	{
		title: 'A domicilio',
		text: 'La ficha la clasifica como «comida a domicilio» y el propio negocio se describe como tienda de comida casera para llevar a domicilio. No se publica zona de reparto, horario de entrega ni pedido mínimo: se pregunta al llamar.',
	},
];

/**
 * Carta construida con el cartel del menú diario y con los platos que aparecen
 * en las fotos del perfil y en las reseñas. Los precios son los del cartel
 * (7 € el menú completo); no se inventan importes por plato.
 */
export const MENU = [
	{
		title: 'Menú diario',
		items: [
			{ name: 'Primer plato a elegir', note: 'según el cartel del local' },
			{ name: 'Segundo plato a elegir', note: 'según el cartel del local' },
			{ name: 'Pan y postre', note: 'incluidos en el menú' },
			{ name: 'Menú completo', note: `${MENU_PRECIO}, precio impreso en el cartel de la casa` },
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{ name: 'Pollo asado', note: 'en las fotos del perfil, troceado y dorado' },
			{ name: 'Albóndigas con guisantes', note: 'en una cazuela del perfil, con salsa de tomate' },
			{ name: 'Ensaladilla rusa', note: 'con tiras de pimiento rojo asado' },
			{ name: 'Ensalada de pasta', note: 'tricolor, con maíz, aceitunas y huevo' },
			{ name: 'Paella', note: 'en el cartel del menú diario' },
			{ name: 'Lasaña', note: 'en el cartel del menú diario' },
			{ name: 'Sopa de picadillo', note: 'citada en una de las reseñas del local' },
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de galletas', note: 'elogiada en una reseña de cinco estrellas y en el cartel' },
			{ name: 'Postre del día', note: 'incluido en el menú diario' },
		],
	},
	{
		title: 'Cómo se pide',
		items: [
			{ name: 'Por teléfono', note: `llama al ${BUSINESS.phone} para el menú del día y los encargos` },
			{ name: 'A domicilio', note: 'el negocio se anuncia como comida casera para llevar a domicilio' },
			{ name: 'Recogida en el local', note: 'C. de la Mata, 4, de 12:00 a 15:30' },
			{ name: 'Al mediodía', note: 'el jueves abre a las 11:45; el resto de días, a las 12:00' },
		],
	},
];

/** Las reseñas que la ficha destaca, tal como aparecen publicadas. */
export const RESENAS = [
	{
		texto: 'La mejor tarta de galletas que he probado en mi vida',
		valor: 5,
	},
	{
		texto: 'Hemos ido tres veces y lo que hemos probado buenísimo.',
		valor: 4,
	},
	{
		texto: 'La sopa de picadillo mal, con exceso de jamón y sin sabor claro.',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El manjar Cr?',
		a: 'En la calle de la Mata, 4, en Ciudad Real (13004). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de 12:00 a 15:30 de martes a domingo; el jueves empieza un cuarto de hora antes, a las 11:45. El lunes figura cerrado. La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto: llama antes de desplazarte.',
	},
	{
		q: '¿Cuánto cuesta el menú?',
		a: 'El cartel del local anuncia el menú diario por 7 €: primer plato a elegir, segundo plato a elegir y pan y postre. Es el precio impreso en su cartel y puede cambiar; confírmalo al llamar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Comida casera: pollo asado, albóndigas con guisantes, ensaladilla rusa, ensalada de pasta, paella, lasaña y sopa de picadillo, entre otras cosas. De postre, la tarta de galletas que elogia una de las reseñas. El menú cambia cada día y se consulta en el 615 43 46 70.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'Sí consta como servicio: la ficha la clasifica como «comida a domicilio» y el propio negocio se describe como tienda de comida casera para llevar a domicilio. No publica zona de reparto, horario de entrega ni pedido mínimo, así que conviene preguntarlo al llamar. Esta página no tramita pedidos.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica que tiene acceso para sillas de ruedas. No publica datos sobre aseos adaptados, asientos ni aparcamiento. Si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El negocio se presenta como tienda de comida casera para llevar y a domicilio, y la ficha no detalla mesas ni servicio en sala. Si quieres comer allí, pregúntalo al llamar.',
	},
	{
		q: '¿Tiene redes sociales?',
		a: 'Sí: el propio cartel del local incluye el perfil de Instagram «elmanjarcr». No enlaza una web propia en Google Maps.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,1 sobre 5 con 25 reseñas en el momento de consultarla (noviembre de 2026). Las tres que destaca Google son muy dispares: una de cinco estrellas por la tarta de galletas, una de cuatro que dice que lo probado está «buenísimo» y una de una estrella que critica la sopa de picadillo.',
	},
];
