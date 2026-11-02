/**
 * Datos de «Terraza La Candela» — Av. de los Reyes Católicos, 7, 13005 Ciudad Real.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps: 38.9722877, -3.9344196, feature
 *   0xd6bc30349ccd9d9:0x14fc5b2d0976e759 (nombre, dirección, categoría, teléfono,
 *   valoración y accesibilidad), consultada el 2 de noviembre de 2026.
 * - Reseñas destacadas y fotografías del perfil del establecimiento.
 *
 * Avisos importantes:
 * - La ficha NO publica horario semanal: la respuesta de Google solo trae el
 *   estado «abierto ahora», sin días ni franjas. Esta web no inventa un cuadro
 *   de horas y lo explica en su lugar.
 * - La ficha no publica carta, precios ni web propia. Los platos de esta web son
 *   los que nombran las reseñas y los que se ven en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Terraza La Candela',
	fullName: 'Terraza La Candela',
	mark: 'LC',
	street: 'Av. de los Reyes Católicos, 7',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	postalCode: '13005',
	country: 'ES',
	siteUrl: 'https://terraza-la-candela.vercel.app',
	geo: { lat: 38.9722877, lng: -3.9344196 },
	featureId: '0xd6bc30349ccd9d9:0x14fc5b2d0976e759',
	placeId: 'ChIJ2dnMSQPDaw0RWed2CS1b_BQ',
	channel: '/g/11lb_pz30l',
	plusCode: 'X3C8+W6 Ciudad Real',
	category: 'Restaurante de cocina española',
	categories: ['Restaurante de cocina española'],
	phone: '926 92 20 83',
	phoneHref: 'tel:+34926922083',
	tagline: 'Terraza y cocina española en la Avenida de los Reyes Católicos',
	description:
		'Terraza La Candela, restaurante de cocina española en la Avenida de los Reyes Católicos, 7, de Ciudad Real (13005). Carta variada, raciones, guisos, arroces y terraza, con la etiqueta de brunch en su ficha de Google, que le da 3,4 sobre 5 con 274 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Terraza+La+Candela/@38.9722877,-3.9344196,17z/data=!4m6!3m5!1s0xd6bc30349ccd9d9:0x14fc5b2d0976e759!8m2!3d38.9722877!4d-3.9344196!16s%2Fg%2F11lb_pz30l',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9722877%2C-3.9344196',
	embed: 'https://maps.google.com/maps?q=38.9722877,-3.9344196&z=17&hl=es&output=embed',
	streetView:
		'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=38.9722877,-3.9344196',
};

/** Valoración publicada en la ficha (2 de noviembre de 2026). */
export const RATING = {
	value: 3.4,
	count: 274,
	label: '3,4',
};

/**
 * La ficha no publica horario semanal: solo el estado «abierto ahora». En lugar
 * de inventar siete franjas, la tabla enseña una única fila con la verdad: el
 * horario no está publicado y se pregunta por teléfono.
 */
export const HOURS = [
	{ day: 'Horario semanal', value: 'No publicado · consultar por teléfono' },
];

export const HORARIO_NOTA =
	'La ficha de Google no publica el horario semanal de La Candela: solo indica si está abierta en el momento de la consulta. Por eso esta página no enseña un cuadro de horas que no existe. Para saber a qué hora abre o cierra un día concreto, llama al 926 92 20 83.';

export const SERVICIOS = [
	'Cocina española',
	'Terraza',
	'Raciones',
	'Carta variada',
	'Brunch',
	'Acceso adaptado',
	'Aseo adaptado',
	'Asientos adaptados',
];

export const HIGHLIGHTS = [
	{
		title: 'Terraza con toldo',
		text: 'El local se llama terraza y la foto de la entrada lo confirma: mesas y sillas bajo un gran toldo, con el rótulo «La Terraza de La Candela» sobre la puerta y las pizarras de la carta a los lados.',
	},
	{
		title: 'Cocina de casa',
		text: 'Las fotos del perfil enseñan guisos con patatas, huevos fritos con jamón, solomillo en salsa, pisto de verduras, ensalada mixta y arroces: la carta de siempre de un restaurante de cocina española.',
	},
	{
		title: 'Postres caseros',
		text: 'Dos de las fotos son de postre: un hojaldre con helado sobre crema y una tarta de chocolate con nata. Se sirven en plato de postre con el borde calado, como en las mesas de mantel blanco.',
	},
	{
		title: 'Sin horario publicado',
		text: 'La ficha de Google no da horario semanal, solo el estado «abierto ahora». Es el dato que más se echa en falta, así que la web no lo rellena a ojo: lo dice claro y remite al teléfono.',
	},
];

export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Ensalada mixta',
				note: 'Con lechuga, tomate, cebolla, atún, huevo duro, maíz y zanahoria',
			},
			{
				name: 'Pisto de verduras',
				note: 'Berenjena, calabacín, judía verde, zanahoria y tomate, servido en su jugo',
			},
		],
	},
	{
		title: 'Guisos y plancha',
		items: [
			{
				name: 'Huevos fritos con jamón',
				note: 'Sobre patatas panadera, con lonchas de jamón curado',
			},
			{
				name: 'Solomillo en salsa',
				note: 'Medallones de carne con salsa cremosa y patatas panadera',
			},
			{
				name: 'Carne guisada con patatas',
				note: 'Guiso de la casa en salsa, con patatas en rodajas',
			},
			{
				name: 'Paella',
				note: 'Arroz en paellera, con tropezones de pollo y cerdo',
			},
		],
	},
	{
		title: 'Postres',
		items: [
			{
				name: 'Hojaldre con helado',
				note: 'Sobre crema pastelera, con canela y un helado de nata',
			},
			{
				name: 'Tarta de chocolate',
				note: 'Con nata montada y salsa de chocolate',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Terraza La Candela?',
		a: 'En la Avenida de los Reyes Católicos, 7, de Ciudad Real (13005), con Plus Code X3C8+W6 y coordenadas 38.9722877, -3.9344196. Está al sur del centro, en la avenida que sigue hacia Puertollano. En esta página tienes el mapa y el botón para abrir la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Google no publica el horario semanal de este local: su ficha solo muestra el estado «abierto ahora», sin días ni franjas. Por eso esta web no da horas que no puede confirmar. Para saber a qué hora abre o cierra un día concreto, llama al 926 92 20 83 o consúltalo en la ficha de Google, que se actualiza con el estado del momento.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'Al 926 92 20 83, el número fijo publicado en la ficha del establecimiento. Sirve para preguntar por el horario, reservar mesa o consultar la carta del día. Esta web no gestiona reservas ni pedidos.',
	},
	{
		q: '¿Qué tipo de comida sirve?',
		a: 'La ficha lo clasifica como restaurante de cocina española y le añade la etiqueta «Brunch». Las fotos del perfil enseñan guisos con patatas, huevos fritos con jamón, solomillo en salsa, pisto, ensalada mixta, paella y postres caseros. Una reseña lo resume así: «carta variada, raciones adecuadas, muy buen producto y bien elaborado».',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. El propio nombre del local lo dice y la foto de la entrada lo enseña: mesas y sillas bajo un gran toldo, con el rótulo «La Terraza de La Candela» y pizarras con la carta a ambos lados de la puerta. No hay una terraza aparte: es el espacio de la entrada.',
	},
	{
		q: '¿Se puede ver la carta o los precios?',
		a: 'La ficha no tiene carta publicada. Los platos que aparecen aquí son los que se ven en las fotos del perfil y los que nombran las reseñas, sin precios. En la foto de la entrada se ven pizarras con la carta escrita a mano, pero no se leen con nitidez, así que esta web no copia importes. Para el precio del día, llama al 926 92 20 83.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha marca acceso, aseo y asientos adaptados para sillas de ruedas. Es lo que publica el establecimiento; si necesitas un detalle concreto del local o de la terraza, lo mejor es llamar antes de ir.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni una web propia. El canal es el teléfono 926 92 20 83, donde también se confirma el horario y la disponibilidad de la terraza.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '3,4 sobre 5 con 274 reseñas (consultado el 2 de noviembre de 2026). Es una media de mucha gente y con opiniones muy repartidas: hay reseñas que alaban el producto y las raciones, y otras que se quejan del precio de algún bocadillo. Merece la pena leer las recientes antes de ir.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No. Es una página informativa creada con los datos públicos de la ficha de Google Maps y las fotos del perfil del establecimiento. No gestiona reservas ni pedidos y no está vinculada al local: para cualquier gestión, el canal es el teléfono o el propio local.',
	},
];

export const LEGAL = {
	razonSocial: 'Terraza La Candela',
	actualizado: 'Noviembre de 2026',
};
