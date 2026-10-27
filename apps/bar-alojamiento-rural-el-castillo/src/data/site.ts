/**
 * Datos de Bar Restaurante y Alojamiento Rural El Castillo — C. Carretera,
 * 82-70, 12123 Castillo de Villamalefa (Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Rte y ALOJAMIENTO RURAL el Castillo»,
 *   40,1288646 / -0,377998, feature 0xd5fdb5ecfc3648d:0x3589effd44aed77e
 *   (dirección, teléfonos, categorías, nota, reseñas, accesibilidad y fotos
 *   del perfil).
 * - Web del propio establecimiento (restauranteelcastillo.org): carta,
 *   alojamiento y teléfonos de contacto.
 * - Reseñas publicadas en la ficha de Google y en TripAdvisor.
 *
 * La ficha de Google no publica un horario fijo: se indica por teléfono.
 */

export const BUSINESS = {
	name: 'Bar Restaurante y Alojamiento Rural El Castillo',
	shortName: 'El Castillo',
	mark: 'EC',
	street: 'C. Carretera, 82-70',
	city: 'Castillo de Villamalefa',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12123',
	country: 'ES',
	phoneDisplay: '964 37 51 16',
	phoneHref: 'tel:+34964375116',
	reservationsDisplay: '625 28 71 09',
	reservationsHref: 'tel:+34625287109',
	rating: 4.5,
	reviewsCount: 692,
	siteUrl: 'https://bar-alojamiento-rural-el-castillo.vercel.app',
	geo: { lat: 40.1288646, lng: -0.377998 },
	featureId: '0xd5fdb5ecfc3648d:0x3589effd44aed77e',
	placeId: 'ChIJjWTDz17bXw0RfteuRP3viTU',
	cid: '3857878426877613950',
	website: 'https://restauranteelcastillo.org/',
	facebook: 'https://www.facebook.com/rteelcastillo/',
	/** Categorías con las que Google describe el local. */
	categories: ['Bar', 'Restaurante', 'Carnicería', 'Hotel', 'Alojamiento con servicio'],
	tagline: 'Carne a la brasa y habitaciones en el Alto Mijares',
	description:
		'Carne a la brasa, menú del día, carnicería y alojamiento rural en Castillo de Villamalefa (Castellón). 4,5 en Google y teléfono 964 37 51 16.',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Rte+y+ALOJAMIENTO+RURAL+el+Castillo/@40.1288646,-0.377998,17z/data=!3m1!4b1!4m6!3m5!1s0xd5fdb5ecfc3648d:0x3589effd44aed77e!8m2!3d40.1288646!4d-0.377998!16s%2Fg%2F11cmf_m53y',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.1288646%2C-0.377998',
	embed: 'https://maps.google.com/maps?q=40.1288646,-0.377998&z=17&hl=es&output=embed',
} as const;

/**
 * La ficha de Google no publica horario para este local. En la tabla se
 * recogen los servicios que sí constan en fuentes públicas (TripAdvisor marca
 * comidas y cenas) y se remite al teléfono.
 */
export const HOURS = [
	{ day: 'Comidas', value: 'A mediodía' },
	{ day: 'Cenas', value: 'Con reserva' },
	{ day: 'Horario', value: 'Se confirma por teléfono' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Servicio rápido, las brasas geniales, los camarer@s muy atentos.',
	'Bocadillos y carne a la brasa muy buenos.',
	'Simplemente espectacular. La comida es más que copiosa, hecha a la parrilla y un precio más que asequible.',
];

/** Señas de identidad que constan en las fuentes públicas. */
export const SERVICIOS = [
	'Carne a la brasa',
	'Embutido casero',
	'Menú del día',
	'Comidas y cenas',
	'Carnicería',
	'Productos de la zona',
	'Alojamiento rural',
	'Terraza con vistas',
	'Reservas',
];

export const MENU = [
	{
		title: 'Para empezar',
		items: [
			{ name: 'Ensalada mixta', note: 'la que abre las mesas de la terraza' },
			{ name: 'Jamón y queso', note: 'en ración grande o pequeña, según el hambre' },
			{ name: 'Espárragos blancos', note: 'de la despensa de la comarca' },
			{ name: 'Entremeses', note: 'surtido de embutido casero para compartir' },
			{ name: 'Albóndigas en salsa de almendra', note: 'de las recetas de cuchara de la casa' },
			{ name: 'Caracoles', note: 'cuando es temporada' },
			{ name: 'Manitas de cerdo en salsa', note: 'guiso lento, de los que se repiten' },
			{ name: 'Sopa, ollas y gazpacho', note: 'según el día y la estación' },
			{ name: 'Calamares', note: 'a la romana o a la plancha' },
		],
	},
	{
		title: 'De la brasa',
		items: [
			{ name: 'Chuletón de ternera', note: 'de unos 800 g, para dos o para compartir' },
			{ name: 'Chuletas de cordero a la brasa', note: 'ración de cuatro unidades' },
			{ name: 'Embutido casero a la brasa', note: 'elaborado en la carnicería de la casa' },
			{ name: 'Parrillada de montaña', note: 'surtido de carnes para la mesa' },
			{ name: 'Cuarto de conejo a la brasa', note: 'de los clásicos del Alto Mijares' },
			{ name: 'Secreto y lomo de cerdo a la brasa', note: 'hechos al punto, jugosos' },
			{ name: 'Churrasco y galtas de cerdo a la brasa', note: 'para quien busca sabor fuerte' },
			{ name: 'Pechuga y muslo de pollo a la brasa', note: 'la opción más sencilla' },
			{ name: 'Solomillo de cerdo a la brasa', note: 'con guarnición de la casa' },
			{ name: 'Huevos rotos', note: 'ración pensada para cuatro personas' },
			{ name: 'Perdiz y codorniz en escabeche', note: 'frías, de caza de la zona' },
			{ name: 'Emperador a la plancha', note: 'para quien prefiere pescado' },
		],
	},
	{
		title: 'La mesa',
		items: [
			{ name: 'Pan de pueblo', note: 'encargado a una panadería de la comarca' },
			{ name: 'Tomate y ajoaceite', note: 'para acompañar la brasa' },
			{ name: 'Menú del día', note: 'variado y abundante, según lo que haya ese día' },
			{ name: 'Productos de la zona', note: 'embutido y conservas para llevar a casa' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Castillo?',
		a: 'En la C. Carretera, 82-70, de Castillo de Villamalefa (12123 Castellón), a la salida del pueblo, en la comarca del Alto Mijares. Se llega por la CV-190 y el mapa de esta página abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google no publica un horario fijo. El local sirve comidas y cenas, así que lo más rápido es llamar al 964 37 51 16 y confirmar la hora y si hay mesa, sobre todo en fin de semana.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'En temporada alta y los fines de semana es muy recomendable. Se reserva por teléfono, en el 964 37 51 16 o en el 625 28 71 09, y el local admite grupos y comidas especiales.',
	},
	{
		q: '¿Qué se come?',
		a: 'La especialidad es la carne a la brasa: chuletón de ternera de unos 800 g, chuletas de cordero, secreto, churrasco, galtas, conejo y embutido casero, además de entrantes como el jamón y queso, las albóndigas en salsa de almendra o el gazpacho. También hay menú del día, variado y abundante.',
	},
	{
		q: '¿Es carnicería?',
		a: 'Sí. El Castillo funciona como restaurante y carnicería al mismo tiempo: el embutido y la carne que se ponen a la brasa salen de su propia elaboración, y hay productos de la zona para comprar y llevar.',
	},
	{
		q: '¿Se puede comer fuera?',
		a: 'Sí. La terraza mira al valle y a la sierra, con vistas abiertas del Alto Mijares, y en los días de frío el local enciende estufas de leña para poder comer fuera sin pasar frío. Conviene avisar al reservar si vais con perro o queréis mesa exterior.',
	},
	{
		q: '¿Se puede dormir allí?',
		a: 'Sí. El alojamiento rural cuenta con un apartamento de unos 40 m² con cocina, lavadora, lavavajillas, nevera, cafetera y menaje, además de habitaciones dobles de unos 10 m². Todas disponen de calefacción, ropa de cama y toallas.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso y aseo adaptados para sillas de ruedas. Si necesitas una mesa concreta o alguna ayuda al llegar, avisa al reservar por teléfono.'
	},
];
