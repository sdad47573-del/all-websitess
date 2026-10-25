/**
 * Datos de Namaste Ibiza Restaurante — Passatge de Castaví, 1 (07800 Eivissa,
 * Illes Balears).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Namaste Ibiza Restaurante»,
 *   38.9098759,1.4285094, feature 0x1299472704073dfd:0x52bbd63f0eb927c8
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que
 * «La carta» solo recoge lo que se ve en las fotos del perfil y lo que citan la
 * descripción del negocio y sus reseñas. No hay precios ni platos atribuidos a
 * la casa que no aparezcan en esas fuentes.
 */

export const BUSINESS = {
	name: 'Namaste Ibiza Restaurante',
	shortName: 'Namaste',
	mark: 'N',
	street: 'Passatge de Castaví, 1',
	city: 'Eivissa',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07800',
	country: 'ES',
	phoneDisplay: '871 51 85 02',
	phoneHref: 'tel:+34871518502',
	rating: 4.9,
	reviewsCount: 666,
	siteUrl: 'https://namaste-ibiza-restaurante.vercel.app',
	geo: { lat: 38.9098759, lng: 1.4285094 },
	featureId: '0x1299472704073dfd:0x52bbd63f0eb927c8',
	placeId: 'ChIJ_T0HBCdHmRIRyCe5Dj_Wu1I',
	cid: '5961594098073282504',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Namaste+Ibiza+Restaurante/@38.9098759,1.4285094,17z/data=!3m1!4b1!4m6!3m5!1s0x1299472704073dfd:0x52bbd63f0eb927c8!8m2!3d38.9098759!4d1.4285094!16s%2Fg%2F11k9rncttn',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9098759%2C1.4285094',
	embed: 'https://maps.google.com/maps?q=38.9098759,1.4285094&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: comidas de 13:00 a 15:45 y cenas de 19:00 a
 * 23:00, de domingo a martes y de jueves a sábado. El miércoles cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: '13:00–15:45 · 19:00–23:00' },
	{ day: 'Martes', value: '13:00–15:45 · 19:00–23:00' },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '13:00–15:45 · 19:00–23:00' },
	{ day: 'Viernes', value: '13:00–15:45 · 19:00–23:00' },
	{ day: 'Sábado', value: '13:00–15:45 · 19:00–23:00' },
	{ day: 'Domingo', value: '13:00–15:45 · 19:00–23:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Me hicieron una variedad de vegetales veganos con arroz.',
	'Hemos ido varias veces y volveremos a repetir.',
	'Buena comida Buenos precios y buen servicio... volveré.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que cuenta su descripción, lo que citan sus reseñas, lo que se ve
 * en las fotos del perfil y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Restaurante indio',
	'Restaurante nepalí',
	'Cocina casera del Himalaya',
	'Recetas de Nepal, India y Tíbet',
	'Curries y tandoor',
	'Naan y arroces basmati',
	'Opciones vegetarianas y veganas',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil, de la descripción del negocio y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Samosas', note: 'en las fotos del perfil, con salsa de tamarindo' },
			{
				name: 'Bolitas crujientes con yogur y tamarindo',
				note: 'en las fotos del perfil, con hierbas frescas por encima',
			},
			{ name: 'Poppadoms con chutneys', note: 'en las fotos del perfil' },
			{ name: 'Raita de verduras', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Del tandoor',
		items: [
			{ name: 'Pollo tandoori', note: 'en las fotos del perfil, con ensalada de col y limón' },
			{ name: 'Chicken tikka', note: 'en las fotos del perfil, con salsas de yogur y tamarindo' },
		],
	},
	{
		title: 'Curries y guisos',
		items: [
			{
				name: 'Curry de pollo estilo mantequilla',
				note: 'en las fotos del perfil: salsa cremosa y anaranjada',
			},
			{ name: 'Curry de carne especiado', note: 'en las fotos del perfil: salsa oscura y especiada' },
			{
				name: 'Curry de verduras con judías y pimiento',
				note: 'en las fotos del perfil, con hierbas frescas',
			},
			{ name: 'Arroz basmati con azafrán', note: 'en las fotos del perfil' },
		],
	},
	{
		title: 'Pan y arroces',
		items: [
			{ name: 'Naan de mantequilla', note: 'en las fotos del perfil' },
			{ name: 'Naan con ajo y cilantro', note: 'en las fotos del perfil' },
			{ name: 'Naan relleno', note: 'en las fotos del perfil, en capas' },
			{ name: 'Arroz basmati blanco', note: 'en las fotos del perfil' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Namaste Ibiza Restaurante?',
		a: 'En Passatge de Castaví, 1, en el centro de Eivissa (07800, Illes Balears), a un paso del puerto y de Dalt Vila. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, sirve comidas de 13:00 a 15:45 y cenas de 19:00 a 23:00 de domingo a martes y de jueves a sábado. El miércoles cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 871 51 85 02.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina casera nepalí e india, según la describe el propio negocio: «la más sana, natural y auténtica». Sus platos tienen origen en la fusión con la gastronomía de Tíbet, India, Tailandia y China.',
	},
	{
		q: '¿Hay platos vegetarianos o veganos?',
		a: 'Sí. Una de sus reseñas cuenta que le prepararon «una variedad de vegetales veganos con arroz», y en la descripción del negocio la cocina se presenta como sana y natural. Llama al 871 51 85 02 para consultar las opciones del día.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen samosas, bolitas crujientes con yogur y tamarindo, poppadoms, pollo tandoori, chicken tikka, curries de pollo, de carne y de verduras, raita, arroz basmati con azafrán y naan recién hecho. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,9 sobre 5 con 666 reseñas. Las publicadas destacan la comida, los precios, el servicio y la repetición: «hemos ido varias veces y volveremos a repetir».',
	},
];
