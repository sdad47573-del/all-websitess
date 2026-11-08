/**
 * Datos de «A boca2 Ciudad Real» — C. de los Hidalgos, 3, 13004 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9848217, -3.9240706, feature
 *   0xd6bc3e21ec19f0f:0xba4087944ef7ad0f (nombre, dirección, categoría,
 *   valoración, atributos y Plus Code), consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - La ficha clasifica el negocio como «Bocatería». No publica teléfono, horario,
 *   carta, precios ni web propia: la web lo dice así en lugar de inventarlo.
 * - La media es 3,2 sobre 5 con 65 reseñas y las opiniones están divididas: hay
 *   reseñas de cinco estrellas y otras muy críticas. La página recoge ambas cosas.
 * - Los productos de la carta salen de las fotos del perfil y de las reseñas: no
 *   hay carta oficial que copiar.
 */

export const BUSINESS = {
	name: 'A boca2 Ciudad Real',
	fullName: 'A boca2 Ciudad Real',
	mark: 'AB',
	street: 'C. de los Hidalgos, 3',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/a-boca-2-ciudad-real',
	geo: { lat: 38.9848217, lng: -3.9240706 },
	featureId: '0xd6bc3e21ec19f0f:0xba4087944ef7ad0f',
	placeId: 'ChIJD5_BHuLDaw0RD633TpSHQLo',
	channel: '/g/11t2_z7gt6',
	plusCode: '8CCRX3MG+W9 Ciudad Real',
	category: 'Bocatería',
	categories: ['Bocatería'],
	phone: '',
	phoneHref: '',
	tagline: 'Bocadillos y patatas en la calle de los Hidalgos',
	description:
		'A boca2 Ciudad Real, bocatería en la calle de los Hidalgos, 3, de Ciudad Real (13004). Bocadillos de lomo, pollo y kebab, patatas y raciones, para llevar o comer en la barra. 3,2 sobre 5 con 65 reseñas en Google.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/A+boca2+Ciudad+Real/@38.9848217,-3.9240706,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3e21ec19f0f:0xba4087944ef7ad0f!8m2!3d38.9848217!4d-3.9240706!16s%2Fg%2F11t2_z7gt6',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9848217%2C-3.9240706',
	embed: 'https://maps.google.com/maps?q=38.9848217,-3.9240706&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9848217,-3.9240706',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.2,
	count: 65,
	label: '3,2',
};

/**
 * La ficha no publica horario ni teléfono. En vez de rellenar huecos a ojo, la
 * tabla dice lo que sí consta y lo que no.
 */
export const HOURS = [
	{ day: 'Horario', value: 'No publicado en Google Maps' },
	{ day: 'Teléfono', value: 'No publicado en la ficha' },
	{ day: 'Local', value: 'Barra naranja y taburetes, según las fotos' },
	{ day: 'Perros', value: 'Se admiten perros', closed: false },
];

export const HORARIO_AVISO =
	'La ficha de Google no publica horario de apertura ni teléfono de contacto, así que esta web no puede confirmar cuándo abre. Lo que sí marca es que se admiten perros y que la entrada es accesible para sillas de ruedas.';

export const SERVICIOS = [
	'Bocatería',
	'Bocadillos de lomo',
	'Pollo y kebab',
	'Patatas y raciones',
	'Para llevar',
	'Se admiten perros',
	'Acceso adaptado',
	'Sin teléfono publicado',
];

export const HIGHLIGHTS = [
	{
		title: 'Bocadillos de barra',
		text: 'Las fotos del perfil son de clientes y enseñan lo mismo: la barra de pan abierta a lo largo, con el lomo hecho a la plancha, queso fundido, lechuga, tomate y mayonesa. Es una bocatería de las de siempre, en la calle de los Hidalgos, junto al centro de Ciudad Real.',
	},
	{
		title: 'Kebab y patatas',
		text: 'Además del lomo y el pollo, la ficha y las reseñas hablan de carne de kebab y de patatas fritas. Una de las opiniones más duras de la ficha va justo por ahí, por las patatas con carne de kebab; otra de cinco estrellas destaca el trato y la amabilidad de la camarera.',
	},
	{
		title: 'Para llevar o en la barra',
		text: 'El bocadillo sale envuelto en papel de aluminio, así que se puede comer de camino. Dentro hay una barra naranja corrida y taburetes altos, con la nevera de refrescos y la tele al fondo, según la foto del interior.',
	},
	{
		title: 'Una nota con matices',
		text: '3,2 sobre 5 con 65 reseñas (2 de noviembre de 2026). No es una ficha de opiniones entusiastas en bloque: conviven las de cinco estrellas con otras de una. Aquí no se escoge solo la buena; si buscas una media alta, esta no lo es.',
	},
];

export const MENU = [
	{
		title: 'Bocadillos',
		items: [
			{
				name: 'Lomo con queso',
				note: 'Con lechuga, tomate y mayonesa; es el que aparece en las fotos del perfil',
			},
			{
				name: 'Pollo',
				note: 'Pollo a la plancha con lechuga y salsa, en barra de pan',
			},
			{
				name: 'Kebab',
				note: 'Carne de kebab; la ficha y las reseñas la nombran junto a las patatas',
			},
			{
				name: 'Bocadillo de la casa',
				note: 'La ficha no publica la carta completa: se pregunta en el mostrador',
			},
		],
	},
	{
		title: 'Para picar',
		items: [
			{
				name: 'Patatas fritas',
				note: 'Ración para acompañar el bocadillo',
			},
			{
				name: 'Patatas con carne de kebab',
				note: 'El plato que más se repite en las reseñas, para bien y para mal',
			},
		],
	},
	{
		title: 'Para beber',
		items: [
			{
				name: 'Refrescos',
				note: 'Nevera junto a la barra, según la foto del interior',
			},
			{
				name: 'Cerveza',
				note: 'Botellín frío, para comer en la barra o llevar',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está A boca2 Ciudad Real?',
		a: 'En la calle de los Hidalgos, 3, de Ciudad Real (13004), con Plus Code 8CCRX3MG+W9 y coordenadas 38.9848217, -3.9240706. Está en la zona del centro, a un paso de la calle Toledo y del Paseo de Alarcos. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Hay teléfono para pedir?',
		a: 'La ficha de Google no publica ningún teléfono, y esta web no va a inventarlo. Si quieres encargar por adelantado, lo más directo es acercarte al local en la calle de los Hidalgos, 3.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha tampoco publica horario de apertura: no hay ni una franja con horas. Como los datos públicos no lo dicen, esta página no lo afirma. La forma de saberlo es pasar por el local.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es una bocatería. Las fotos del perfil enseñan bocadillos de barra con lomo, queso, lechuga, tomate y mayonesa, y bocadillos de pollo. Las reseñas nombran también el kebab, las patatas fritas y las patatas con carne de kebab.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. Ni la ficha de Google ni esta web publican la carta ni los importes: el local no tiene carta colgada en su perfil. Los productos que aparecen aquí son los que se ven en las fotos y los que nombran las reseñas, sin precios.',
	},
	{
		q: '¿Se puede comer dentro?',
		a: 'Sí, según la foto del interior del perfil: hay una barra naranja corrida con taburetes altos, nevera de refrescos y una tele al fondo. Es un local pequeño de bocatería, no un restaurante con mesas de mantel.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. Los bocadillos de las fotos salen envueltos en papel de aluminio, listos para comer fuera. No hay pedidos en línea ni reparto propio publicado en la ficha.',
	},
	{
		q: '¿Es accesible y se admiten perros?',
		a: 'La ficha marca entrada accesible para sillas de ruedas y añade la etiqueta «Se admiten perros». No publica información sobre aseos o aparcamiento adaptado, así que no se puede confirmar desde aquí.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '3,2 sobre 5 con 65 reseñas (consultado el 2 de noviembre de 2026). Es una media con opiniones muy divididas: hay reseñas de cinco estrellas que alaban el trato y la amabilidad del personal, y otras de una estrella, muy críticas con las patatas con carne de kebab o con el punto del pan.',
	},
	{
		q: '¿Esta web es de la bocatería?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona pedidos ni reservas y no está vinculada al local.',
	},
];

export const LEGAL = {
	razonSocial: 'A boca2 Ciudad Real',
	actualizado: 'Noviembre de 2026',
};
