/**
 * Datos de CLAPIS COMIDA ITALIANA TEATINOS — C. Andrómeda, 15, Loc 3,
 * Teatinos-Universidad (29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «CLAPIS COMIDA ITALIANA TEATINOS»,
 *   36.7230851,-4.477041, feature 0xd72f7d4df1c1f59:0xa68ea6cf4bfa971d.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. Los platos que se citan son los que nombran la
 * descripción del negocio y las reseñas de la propia ficha.
 */

export const BUSINESS = {
	name: 'Clapis',
	fullName: 'CLAPIS COMIDA ITALIANA TEATINOS',
	shortName: 'Clapis',
	mark: 'C',
	street: 'C. Andrómeda, 15, Loc 3',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/clapis-comida-italiana-teatinos',
	geo: { lat: 36.7230851, lng: -4.477041 },
	featureId: '0xd72f7d4df1c1f59:0xa68ea6cf4bfa971d',
	placeId: 'ChIJWR8c39T3cg0RHZf6S8-mjqY',
	plusCode: '8C8QPGFF+65',
	googleCategory: 'Restaurante',
	phone: '614 46 41 15',
	phoneHref: 'tel:+34614464115',
	tagline: 'Pasta fresca y pizza italiana en Teatinos',
	description:
		'Clapis, en C. Andrómeda, 15, Loc 3 (Teatinos-Universidad, 29010 Málaga). Pasta fresca, auténtica pizza italiana y postres caseros, con servicio de mediodía y de noche.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/CLAPIS+COMIDA+ITALIANA+TEATINOS/@36.7230851,-4.477041,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7d4df1c1f59:0xa68ea6cf4bfa971d!8m2!3d36.7230851!4d-4.477041!16s%2Fg%2F11xvcmg8fr?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7230851%2C-4.477041',
	embed: 'https://maps.google.com/maps?q=36.7230851,-4.477041&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7230851,-4.477041',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.8,
	count: 476,
	label: '4,8',
};

/** Horario que publica la ficha: mediodía todos los días y cena cuatro días. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '13:00–17:00 · 20:00–23:30' },
	{ dia: 'Miércoles', horas: '13:00–17:00 · 20:00–23:30' },
	{ dia: 'Jueves', horas: '13:00–17:00' },
	{ dia: 'Viernes', horas: '13:00–17:00 · 20:00–23:30' },
	{ dia: 'Sábado', horas: '13:00–17:00 · 20:00–23:30' },
	{ dia: 'Domingo', horas: '13:00–17:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pasta fresca',
	'Pizza italiana',
	'Postres caseros',
	'Cocina italiana',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Pasta fresca',
		text: 'La descripción del negocio abre con ella: «Pasta fresca, auténtica pizza italiana y postres totalmente caseros e italianos». Una reseña la confirma con la cacio e pepe.',
	},
	{
		title: 'Pizza italiana',
		text: 'La ficha la anuncia como «auténtica pizza italiana». Las reseñas hablan de la pizza de quesos, la cuatro quesos con mermelada y la pinta de sus pizzas.',
	},
	{
		title: 'Postres caseros',
		text: 'La descripción termina en los postres: «totalmente caseros e italianos». La ficha no detalla cuáles ni publica precios.',
	},
	{
		title: 'Cacio e pepe y carbonara',
		text: 'Dos de las reseñas destacadas nombran los platos: «pasta cacio e pepe y pizza quesos» y «la carbonara que no puede faltar».',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Carpaccio de ternera',
				note: 'con rúcula, parmesano y salsa, en una de las fotos del local',
			},
			{
				name: 'Burrata con tomate',
				note: 'con albahaca y aceite de oliva, en la galería del perfil',
			},
			{
				name: 'Croquetas',
				note: 'fritas, en la mesa de las fotos; la ficha no publica precios',
			},
		],
	},
	{
		title: 'La pasta',
		items: [
			{
				name: 'Pasta fresca',
				note: 'la primera seña de identidad de la casa, según la descripción de la ficha',
			},
			{
				name: 'Cacio e pepe',
				note: '«pedimos pasta cacio e pepe», cuenta una de las reseñas',
			},
			{
				name: 'Carbonara',
				note: '«la carbonara que no puede faltar», en palabras de otra reseña',
			},
		],
	},
	{
		title: 'La pizza',
		items: [
			{
				name: 'Pizza italiana',
				note: 'la ficha la presenta como «auténtica pizza italiana»',
			},
			{
				name: 'Pizza de quesos',
				note: 'una de las reseñas destaca la pizza de quesos; otra, la cuatro quesos con mermelada',
			},
		],
	},
	{
		title: 'Los postres',
		items: [
			{
				name: 'Postres caseros italianos',
				note: 'la descripción de la ficha los describe como «totalmente caseros e italianos»; no detalla cuáles',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Pedimos pasta cacio e pepe y pizza quesos, y nos encantó todo.',
		valor: 5,
	},
	{
		texto: 'He probado la pizza 4 quesos con mermelada y la carbonara que no puede faltar.',
		valor: 5,
	},
	{
		texto: 'Volveremos próximamente a comer sus pizzas porque la pinta era alucinante.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Clapis?',
		a: 'En la calle Andrómeda, 15, local 3, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica el mediodía de martes a domingo, de 13:00 a 17:00, y cenas de 20:00 a 23:30 los martes, miércoles, viernes y sábados. El lunes cierra, y los jueves y domingos solo abre al mediodía. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo resume así: pasta fresca, auténtica pizza italiana y postres caseros. Las reseñas nombran la pasta cacio e pepe, la carbonara, la pizza de quesos y la pizza cuatro quesos con mermelada. La ficha no publica la carta completa.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Las reseñas hablan de los platos, pero no citan precios. La carta y la disponibilidad se consultan en el local o por teléfono.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'El canal que publica la ficha es el teléfono: 614 46 41 15. No consta página web propia ni sistema de reservas online.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca el acceso para sillas de ruedas y el aseo adaptado. No publica datos sobre aparcamiento adaptado ni asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,8 sobre 5 con 476 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian la pasta, las pizzas y los postres.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
