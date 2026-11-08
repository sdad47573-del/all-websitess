/**
 * Datos de Restaurante El Limonero — Carrer les Argelagues, 15 (07817 Sant Josep
 * de sa Talaia, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante El Limonero»,
 *   38.892673,1.4063963, feature 0x1299442b102c7ed1:0x5243f6247bc1b729
 *   (dirección, teléfono, categorías, nota, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. En ellas se ven la fachada con el toldo «Café · Bar El
 *   Limonero Restaurante», la terraza de la piscina y los platos.
 *
 * La ficha NO publica horario ni descripción del negocio, y tampoco carta ni
 * precios. La web no los inventa: el horario se remite a Google Maps y «La
 * carta» recoge solo lo que se ve en las fotos del perfil y lo que citan las
 * reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante El Limonero',
	shortName: 'El Limonero',
	mark: 'EL',
	street: 'Carrer les Argelagues, 15',
	city: 'Sant Josep de sa Talaia',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07817',
	country: 'ES',
	phoneDisplay: '971 30 04 66',
	phoneHref: 'tel:+34971300466',
	rating: 4.4,
	reviewsCount: 351,
	siteUrl: 'https://www.sur-digital.com/restaurante-el-limonero',
	geo: { lat: 38.892673, lng: 1.4063963 },
	featureId: '0x1299442b102c7ed1:0x5243f6247bc1b729',
	placeId: 'ChIJ0X4sECtEmRIRKbfBeyT2Q1I',
	cid: '5927852171105253161',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+El+Limonero/@38.892673,1.4063963,17z/data=!3m1!4b1!4m6!3m5!1s0x1299442b102c7ed1:0x5243f6247bc1b729!8m2!3d38.892673!4d1.4063963!16s%2Fg%2F1vf54nqn',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.892673%2C1.4063963',
	embed: 'https://maps.google.com/maps?q=38.892673,1.4063963&z=17&hl=es&output=embed',
};

/**
 * La ficha de Google no publica horario. Se dice claramente en cada fila en vez
 * de rellenarlo con una estimación.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Consultar en Google Maps' },
	{ day: 'Martes', value: 'Consultar en Google Maps' },
	{ day: 'Miércoles', value: 'Consultar en Google Maps' },
	{ day: 'Jueves', value: 'Consultar en Google Maps' },
	{ day: 'Viernes', value: 'Consultar en Google Maps' },
	{ day: 'Sábado', value: 'Consultar en Google Maps' },
	{ day: 'Domingo', value: 'Consultar en Google Maps' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'De postre, pedimos tarta de queso que hizo las delicias de nuestro paladar.',
	'Comida casera, precios asequibles y buen trato por parte del personal.',
	'Nos atendieron con muchísima calidez y nos hicieron sentir como en casa.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que se ve en las fotos del perfil, lo que citan sus reseñas y lo
 * que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Café · bar · restaurante',
	'Cocina mediterránea',
	'Arroces y marisco',
	'Desayunos y brunch',
	'Terraza junto a la piscina',
	'Cócteles y sangría',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Desayunos y brunch',
		items: [
			{
				name: 'Desayuno completo',
				note: 'en las fotos del perfil: huevos fritos, bacon, salchicha, alubias, hash brown y tostadas',
			},
			{ name: 'Tortitas', note: 'en las fotos del perfil, con fruta y sirope' },
			{
				name: 'Bagel con salmón y aguacate',
				note: 'en las fotos del perfil, con rúcula y tomate',
			},
			{ name: 'Crepes', note: 'en las fotos del perfil' },
			{
				name: 'Huevos con salmón ahumado',
				note: 'en las fotos del perfil, con salsa y reducción',
			},
		],
	},
	{
		title: 'Arroces y marisco',
		items: [
			{
				name: 'Paella de marisco',
				note: 'en las fotos del perfil, con mejillones, langostinos y limón',
			},
			{
				name: 'Arroz de marisco',
				note: 'en las fotos del perfil, con almejas, mejillones y langostinos',
			},
			{ name: 'Fideuá', note: 'en las fotos del perfil, junto a la piscina' },
			{
				name: 'Bogavante con patatas y huevos',
				note: 'en las fotos del perfil, con pimiento y perejil',
			},
		],
	},
	{
		title: 'Postres y bebidas',
		items: [
			{
				name: 'Tarta de queso',
				note: '«hizo las delicias de nuestro paladar», según una reseña',
			},
			{ name: 'Sangría', note: 'en las fotos del perfil' },
			{ name: 'Café y zumos naturales', note: 'en las fotos del desayuno' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante El Limonero?',
		a: 'En Carrer les Argelagues, 15, en Sant Josep de sa Talaia (07817, Ibiza), en un complejo con piscina y terraza. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Su ficha de Google no publica horario, así que no lo inventamos: consulta el horario actualizado en Google Maps antes de ir. En esta página el horario aparece como «consultar en Google Maps» en todos los días.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa o preguntar por el servicio del día hay que llamar al 971 30 04 66.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina mediterránea y española, según las categorías de su ficha de Google. Las fotos del perfil muestran desayunos completos, tortitas, bagels, crepes, paellas y arroces de marisco, fideuá y bogavante, además de sangría y café.',
	},
	{
		q: '¿Tiene terraza y piscina?',
		a: 'Sí. Las fotos del perfil muestran la terraza junto a una piscina con sombrillas y tumbonas, mesas de exterior y el toldo blanco con el rótulo «Café · Bar El Limonero Restaurante». La ficha lo clasifica también como hotel y pista de tenis, dentro del mismo complejo.',
	},
	{
		q: '¿Sirve desayunos?',
		a: 'Sí. En las fotos del perfil aparecen desayunos completos con huevos, bacon, salchicha, alubias y tostadas, además de tortitas, crepes, bagels y huevos con salmón.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,4 sobre 5 con 351 reseñas. Las publicadas destacan la comida casera, los precios, el trato y la tarta de queso.',
	},
];
