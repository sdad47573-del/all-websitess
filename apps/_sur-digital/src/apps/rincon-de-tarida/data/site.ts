/**
 * Datos de Bar-Restaurante Rincón de Tarida — Plaza del Mar, 1 (Edif.
 * Montercarlos), 07829 Cala Tarida, Sant Josep de sa Talaia, Ibiza.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar-Restaurante RINCÓN DE TARIDA»,
 *   38.9423248,1.2364636, feature 0x12994ae3d6b086a1:0x5a159d770c5377e2
 *   (dirección, teléfono, horario, categorías, nota, reseñas y accesibilidad).
 * - Descripción del propio negocio en la ficha: «Restaurante familiar y
 *   acogedor».
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/: la fachada blanca con los arcos y el rótulo
 *   «RESTAURANTE Rincón de Tarida», la terraza, la paella, el arroz negro, el
 *   calamar, el pescado al horno, la ensalada y la carne a la plancha.
 *
 * La ficha no publica carta ni precios: «La carta» recoge solo lo que se ve en
 * las fotos del perfil y lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Bar-Restaurante Rincón de Tarida',
	shortName: 'Rincón de Tarida',
	mark: 'RT',
	street: 'Plaza del Mar, 1 · Edif. Montercarlos',
	city: 'Cala Tarida',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07829',
	country: 'ES',
	phoneDisplay: '971 80 64 45',
	phoneHref: 'tel:+34971806445',
	rating: 4.1,
	reviewsCount: 683,
	siteUrl: 'https://www.sur-digital.com/rincon-de-tarida',
	geo: { lat: 38.9423248, lng: 1.2364636 },
	featureId: '0x12994ae3d6b086a1:0x5a159d770c5377e2',
	placeId: 'ChIJoYaw1uNKmRIR4ndTDHedFVo',
	cid: '6491267572557903842',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar-Restaurante+RINC%C3%93N+DE+TARIDA/@38.9423248,1.2364636,17z/data=!3m1!4b1!4m6!3m5!1s0x12994ae3d6b086a1:0x5a159d770c5377e2!8m2!3d38.9423248!4d1.2364636!16s%2Fg%2F1hc3mqj0h',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9423248%2C1.2364636',
	embed: 'https://maps.google.com/maps?q=38.9423248,1.2364636&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 8:00 a 23:00. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–23:00' },
	{ day: 'Martes', value: '8:00–23:00' },
	{ day: 'Miércoles', value: '8:00–23:00' },
	{ day: 'Jueves', value: '8:00–23:00' },
	{ day: 'Viernes', value: '8:00–23:00' },
	{ day: 'Sábado', value: '8:00–23:00' },
	{ day: 'Domingo', value: '8:00–23:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'La paella de pescado y marisco deliciosa',
	'Pedimos de entrante las croquetas de pollo',
	'Buen café y tostadas... y por la noche unas cervezas',
];

/**
 * Lo que consta: las categorías con las que Google clasifica el local, la
 * descripción del propio negocio, los rótulos de la fachada y lo que marca su
 * ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Bar restaurante',
	'Cocina mediterránea',
	'Arroces y pescado',
	'Desayunos y café',
	'Terraza con arcos',
	'Comidas familiares',
	'Asientos adaptados',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Arroces',
		items: [
			{
				name: 'Paella de pescado y marisco',
				note: '«deliciosa», según una reseña; en las fotos, con langostinos y mejillones',
			},
			{
				name: 'Arroz negro con calamares',
				note: 'en las fotos del perfil, con alioli y gajos de limón',
			},
		],
	},
	{
		title: 'Del mar',
		items: [
			{
				name: 'Calamar a la plancha',
				note: 'en las fotos del perfil, relleno y con patatas panadera',
			},
			{
				name: 'Calamar con queso gratinado',
				note: 'en las fotos del perfil, con tomate y calabacín a la brasa',
			},
			{
				name: 'Pescado al horno',
				note: 'en las fotos del perfil, con limón y verduras asadas',
			},
		],
	},
	{
		title: 'Para empezar',
		items: [
			{
				name: 'Croquetas de pollo',
				note: 'citadas en una reseña como entrante',
			},
			{
				name: 'Ensalada de queso de cabra a la plancha',
				note: 'en las fotos del perfil, con lechuga, tomate e hinojo',
			},
			{
				name: 'Carne a la plancha con patatas y ensalada',
				note: 'en las fotos del perfil, con patatas paja y ensalada',
			},
		],
	},
	{
		title: 'Bar y desayunos',
		items: [
			{
				name: 'Café y tostadas',
				note: '«buen café y tostadas», según una reseña',
			},
			{
				name: 'Cervezas',
				note: '«y por la noche unas cervezas», según una reseña',
			},
			{
				name: 'Sangría',
				note: 'en las fotos del perfil, en jarra sobre la mesa',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Rincón de Tarida?',
		a: 'En Plaza del Mar, 1 (Edif. Montercarlos), en Cala Tarida, 07829 Sant Josep de sa Talaia (Ibiza). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 8:00 a 23:00, sin día de cierre. Al abrir tan temprano sirve desayunos y café, y por la noche funciona como bar. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 80 64 45.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina mediterránea de bar restaurante, según las categorías de su ficha de Google. El propio negocio se define como «restaurante familiar y acogedor».',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen la paella de pescado y marisco, el arroz negro con calamares, el calamar a la plancha, el pescado al horno con verduras, la ensalada de queso de cabra y la carne a la plancha con patatas y ensalada. Las reseñas citan las croquetas de pollo como entrante. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede desayunar o tomar algo?',
		a: 'Sí. Es un bar restaurante y abre a las 8:00: una de las reseñas habla de «buen café y tostadas... y por la noche unas cervezas». Además del comedor, las fotos del perfil muestran la terraza del porche y la acera.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran la fachada blanca de dos plantas con arcos en la planta baja, mesas y sillas en el porche y toldos en la acera, junto a la plaza y a pocos metros de la playa de Cala Tarida.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,1 sobre 5 con 683 reseñas. Las publicadas destacan la paella de pescado y marisco, las croquetas de pollo, el café y las tostadas.',
	},
];
