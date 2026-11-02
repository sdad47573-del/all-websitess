/**
 * Datos de Pache comidas caseras para llevar almoradi — C. Canalejas, 44,
 * 03160 Almoradí (Alicante).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Pache comidas caseras para llevar
 *   almoradi», 38.1129398,-0.7904493, feature
 *   0xd63a5db55c5495f:0xc6f8f6970ca7c6f6.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, atributos de
 *   accesibilidad y reseñas: ficha pública de Google consultada en noviembre de
 *   2026.
 *
 * Lo que no se publica: la ficha no enlaza web propia ni redes sociales, no
 * tiene carta con precios, no publica reparto a domicilio ni formas de pago y
 * solo declara acceso adaptado. Los platos que aparecen aquí son los que citan
 * las reseñas destacadas; no hay importes que mostrar sin inventarlos.
 */

export const BUSINESS = {
	name: 'Pache comidas caseras para llevar almoradi',
	fullName: 'Pache comidas caseras para llevar almoradi',
	shortName: 'Pache',
	mark: 'P',
	street: 'C. Canalejas, 44',
	district: 'Almoradí',
	city: 'Almoradí',
	region: 'Comunidad Valenciana',
	postalCode: '03160',
	country: 'ES',
	siteUrl: 'https://pache-comidas-caseras-almoradi.vercel.app',
	geo: { lat: 38.1129398, lng: -0.7904493 },
	featureId: '0xd63a5db55c5495f:0xc6f8f6970ca7c6f6',
	placeId: 'ChIJX0nFVdulYw0R9sanDJf2-MY',
	plusCode: '8CCX4675+5R',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '604 42 05 21',
	phoneHref: 'tel:+34604420521',
	tagline: 'Comida casera para llevar en Almoradí',
	description:
		'Pache, comida casera para llevar en C. Canalejas, 44 (03160 Almoradí, Alicante). Menú de mediodía de lunes a viernes, de 10:00 a 15:00.',
};

export const MAPS = {
	place: 'https://www.google.com/maps/place/Pache+comidas+caseras+para+llevar+almoradi/@38.1129398,-0.7904493,17z/data=!3m1!4b1!4m6!3m5!1s0xd63a5db55c5495f:0xc6f8f6970ca7c6f6!8m2!3d38.1129398!4d-0.7904493!16s%2Fg%2F11tmn93rh9?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.1129398%2C-0.7904493',
	embed: 'https://maps.google.com/maps?q=38.1129398,-0.7904493&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.1129398,-0.7904493',
};

/** Valoración publicada en la ficha (noviembre de 2026). */
export const RATING = {
	value: 4.5,
	count: 31,
	label: '4,5',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '10:00–15:00' },
	{ dia: 'Martes', horas: '10:00–15:00' },
	{ dia: 'Miércoles', horas: '10:00–15:00' },
	{ dia: 'Jueves', horas: '10:00–15:00' },
	{ dia: 'Viernes', horas: '10:00–15:00' },
	{ dia: 'Sábado', horas: 'Cerrado', closed: true },
	{ dia: 'Domingo', horas: 'Cerrado', closed: true },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha marca el Día de Todos los Santos (domingo 1 de noviembre) como cerrado, con horario especial de festivo. El resto de festivos puede cambiar; confírmalo por teléfono antes de desplazarte.';

/** Lo que la ficha, su categoría y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida casera',
	'Comida para llevar',
	'Menú de mediodía',
	'Postres caseros',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera de cada día',
		text: 'La ficha la clasifica como restaurante de comida para llevar y el nombre lo dice todo: «comidas caseras para llevar». Una reseña lo confirma: «Llevo yendo mucho tiempo ya comida casera muy rica y muy buen precio».',
	},
	{
		title: 'Menú de mediodía',
		text: 'Abre solo de 10:00 a 15:00, de lunes a viernes, y cierra sábados y domingos: es una casa de menú y comida para llevar, pensada para el almuerzo laborable.',
	},
	{
		title: 'La tarta de tres chocolates',
		text: '«Por cierto la tarta de tres chocolates espectacular», dice una de las reseñas. Los postres son parte de la casa, aunque la ficha no publica la lista completa.',
	},
	{
		title: 'Almoradí, Canalejas 44',
		text: 'Está en la calle Canalejas, 44, en Almoradí, con acceso para sillas de ruedas según la ficha. No declara asientos adaptados porque no es un local de mesa.',
	},
];

/** Platos de la vitrina y de las cazuelas del perfil, sin precios inventados. */
export const MENU = [
	{
		title: 'De la vitrina',
		items: [
			{ name: 'Caracoles en salsa', note: 'bandeja de la vitrina, en las fotos del perfil' },
			{ name: 'Albóndigas en salsa', note: 'bandeja de la vitrina' },
			{ name: 'Garbanzos con espinacas', note: 'bandeja de la vitrina' },
			{ name: 'Ensaladilla', note: 'bandeja de la vitrina' },
			{ name: 'Berenjenas gratinadas', note: 'bandeja de la vitrina' },
			{ name: 'Pasta', note: 'fideos y pasta con tomate y con salsa, en la vitrina' },
			{ name: 'Ensalada de atún', note: 'con aceitunas, huevo, patata, tomate y cebolla' },
		],
	},
	{
		title: 'De la cocina',
		items: [
			{ name: 'Arroz de conejo', note: 'paella amarilla con tiras de pimiento, en las fotos del perfil' },
			{ name: 'Arroz con guisantes y maíz', note: 'con filete empanado, en las fotos del perfil' },
			{ name: 'Guiso de carne con patatas', note: 'en la cazuela, en las fotos del perfil' },
			{ name: 'Pescado rebozado con tomate', note: 'merluza empanada en salsa de tomate' },
			{ name: 'Pimientos y cebollas asadas', note: 'bandeja del perfil, también con huevos fritos encima' },
			{ name: 'Tortilla con chorizo', note: 'en la sartén, en las fotos del perfil' },
		],
	},
	{
		title: 'Para terminar',
		items: [
			{ name: 'Tarta de tres chocolates', note: '«espectacular», según una reseña destacada' },
			{ name: 'Postres caseros', note: 'la ficha no publica la lista completa' },
		],
	},
	{
		title: 'Cómo se pide',
		items: [
			{
				name: 'Por teléfono',
				note: `llama al ${BUSINESS.phone} para preguntar el menú y encargar`,
			},
			{
				name: 'Recogida en el local',
				note: 'en C. Canalejas, 44, Almoradí, de 10:00 a 15:00',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Llevo yendo mucho tiempo ya comida casera muy rica y muy buen precio.',
		valor: 5,
	},
	{
		texto: 'Raciones bastante pequeñas que intentan disimular con patatas',
		valor: 2,
	},
	{
		texto: 'Por cierto la tarta de tres chocolates espectacular.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Pache?',
		a: 'En la calle Canalejas, 44, en Almoradí (03160 Alicante). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes, de 10:00 a 15:00. Sábados y domingos figura cerrado. En festivos puede cambiar: llama antes de desplazarte.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha no publica una carta con precios. Las reseñas destacadas hablan de comida casera del día, platos con patatas y una tarta de tres chocolates. Para saber el menú de cada jornada, llama al 604 42 05 21.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'El horario —solo mediodía, de lunes a viernes— y la categoría de comida para llevar apuntan a un menú de almuerzo, pero la ficha no publica su contenido ni su precio. Se consulta por teléfono.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'El nombre y la ficha lo presentan como comida para llevar, y la ficha declara acceso adaptado pero no asientos adaptados. No publica si hay mesas: si quieres sentarte, confírmalo al llamar.',
	},
	{
		q: '¿Cómo se hace un pedido?',
		a: 'Por teléfono, en el 604 42 05 21, y se recoge en el local. La ficha no enlaza ninguna tienda online ni plataforma de reparto, así que esta página no tramita pedidos.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Ni la ficha de Google ni las fotos del perfil publican reparto a domicilio, zona de reparto ni pedido mínimo. Lo que sí aparece es el teléfono y la dirección. Pregunta al llamar si necesitas entrega.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha no publica las formas de pago del local. Pregúntalo al hacer el pedido por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha declara acceso para sillas de ruedas, pero no asientos adaptados. No publica más datos de accesibilidad; si necesitas una condición concreta, llama antes de ir.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,5 sobre 5 con 31 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian la comida casera, el precio y la tarta de tres chocolates; otra, de dos estrellas, se queja de que las raciones son pequeñas.',
	},
	{
		q: '¿Tiene web o redes sociales?',
		a: 'La ficha de Google no enlaza ninguna web propia ni perfiles sociales del negocio. Toda la información de esta página procede de esa ficha pública y de las fotos de su perfil.',
	},
];
