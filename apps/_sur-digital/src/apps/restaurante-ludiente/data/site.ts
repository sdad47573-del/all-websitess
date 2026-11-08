/**
 * Datos de Restaurante Ludiente — Carretera de Argelita, 2, 12123 Ludiente
 * (Lludient), Castellón.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Ludiente», 40,0870544 /
 *   -0,369883, feature 0xd5fdd261f0a3c85:0x57446b40e73a64bb (categorías,
 *   horario, nota, reseñas, accesibilidad y fotos del perfil).
 * - Web del propio restaurante (sites.google.com/view/asadorludiente): teléfono,
 *   correo, dirección, instalaciones y otro horario.
 * - Reseñas publicadas en la ficha de Google.
 *
 * La ficha no publica una carta con precios: los platos se apoyan en las fotos
 * del perfil y en lo que citan las reseñas.
 */

export const BUSINESS = {
	name: 'Restaurante Ludiente',
	shortName: 'Restaurante Ludiente',
	mark: 'RL',
	street: 'Ctra. de Argelita, 2',
	city: 'Ludiente',
	region: 'Castellón',
	regionName: 'Comunitat Valenciana',
	postalCode: '12123',
	country: 'ES',
	phoneDisplay: '643 74 21 61',
	phoneHref: 'tel:+34643742161',
	email: 'barludiente2022@gmail.com',
	emailHref: 'mailto:barludiente2022@gmail.com',
	rating: 4,
	reviewsCount: 338,
	siteUrl: 'https://www.sur-digital.com/restaurante-ludiente',
	geo: { lat: 40.0870544, lng: -0.369883 },
	featureId: '0xd5fdd261f0a3c85:0x57446b40e73a64bb',
	placeId: 'ChIJhTwKHybdXw0Ru2Q650BrRFc',
	cid: '6288268906217497787',
	/** Categorías con las que Google describe el local. */
	categories: ['Parrilla', 'Bar'],
	ownWebsite: 'https://sites.google.com/view/asadorludiente',
	tagline: 'Asador y bar de pueblo en Ludiente',
	description:
		'Restaurante Ludiente, asador y bar en la Carretera de Argelita 2 de Ludiente (Castellón): carnes a la brasa, menú del día, bocadillos enormes y terraza con vistas a la montaña. 4,0 en Google con 338 reseñas. Tel. 643 74 21 61.',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Ludiente/@40.0870544,-0.369883,17z/data=!3m1!4b1!4m6!3m5!1s0xd5fdd261f0a3c85:0x57446b40e73a64bb!8m2!3d40.0870544!4d-0.369883!16s%2Fg%2F11ghdjx1rs',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0870544%2C-0.369883',
	embed: 'https://maps.google.com/maps?q=40.0870544,-0.369883&z=17&hl=es&output=embed',
} as const;

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '08:30–22:00' },
	{ day: 'Martes', value: '08:30–22:00' },
	{ day: 'Miércoles', value: '08:30–22:00' },
	{ day: 'Jueves', value: '08:30–22:00' },
	{ day: 'Viernes', value: '08:30–01:00' },
	{ day: 'Sábado', value: '08:30–01:00' },
	{ day: 'Domingo', value: '08:30–22:00' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Todo buenísimo y súper atentos, las raciones y los bocadillos son enormes!',
	'Buena comida ,buena atención,superamables los camareros y buenos precios',
];

/** Señas de identidad que constan en las fuentes públicas. */
export const SERVICIOS = [
	'Carnes a la brasa',
	'Menú del día',
	'Bocadillos',
	'Tapas',
	'Bar',
	'Terraza exterior',
	'Salón comedor',
	'Terraza interior',
	'Accesible',
];

export const MENU = [
	{
		title: 'De la brasa',
		items: [
			{ name: 'Chuletón', note: 'a la parrilla, con patatas y berenjena asada' },
			{ name: 'Chuletas de cordero', note: 'otra de las carnes que salen de la brasa' },
			{ name: 'Costillar', note: 'raciones generosas, como cuentan las reseñas' },
			{ name: 'Secreto ibérico', note: 'a la plancha, con guarnición' },
		],
	},
	{
		title: 'Para picar y compartir',
		items: [
			{ name: 'Calamares rellenos', note: 'con su salsa y vieiras, como los de las fotos' },
			{ name: 'Ensalada con jamón y queso', note: 'grande, para poner en el centro' },
			{ name: 'Patatas bravas', note: 'uno de los clásicos de la barra' },
			{ name: 'Sepia a la plancha', note: 'con limón, para el almuerzo' },
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{ name: 'Bocadillos enormes', note: 'el tamaño es lo primero que destaca una reseña' },
			{ name: 'De longaniza y pimientos', note: 'pan rústico y producto de la tierra' },
			{ name: 'De pollo a la parrilla', note: 'hecho al momento, no de envasado' },
			{ name: 'Para llevar', note: 'conviene avisar por teléfono antes de pasar' },
		],
	},
	{
		title: 'Del comedor',
		items: [
			{ name: 'Menú del día', note: 'con primero, segundo, bebida y postre' },
			{ name: 'Canelones caseros', note: 'gratinados, con langostino' },
			{ name: 'Guisos de cuchara', note: 'carne y pimientos en la sartén, para mojar pan' },
			{ name: 'Comidas de grupo', note: 'amplio comedor y salón para celebraciones' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Ludiente?',
		a: 'En la Carretera de Argelita, 2, en Ludiente (Lludient), 12123 Castellón. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google marca de 08:30 a 22:00 de lunes a jueves y domingo, y hasta la 01:00 los viernes y sábados. La web del restaurante publica otro horario más corto, así que conviene llamar al 643 74 21 61 antes de ir, sobre todo en festivos.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'No hay reserva online. Se reserva por teléfono, en el 643 74 21 61, o por correo en barludiente2022@gmail.com. Es recomendable hacerlo los fines de semana y en días festivos, cuando el comedor se llena.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina casera de pueblo con la brasa como protagonista: chuletón, chuletas de cordero, costillar y secreto ibérico, además de tapas, patatas bravas, sepia y bocadillos enormes de longaniza, pimientos o pollo a la parrilla. También hay menú del día y platos de cuchara.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha de Google no publica precios y esta web no los inventa. Las reseñas hablan de buenos precios y raciones grandes; el menú del día se sirve con primero, segundo, bebida y postre. Confirma la carta y el precio al llamar.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. La web del restaurante presenta una terraza exterior, otra interior, el bar y el salón comedor. La terraza trasera mira a las montañas de pinos que rodean Ludiente.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google marca acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas una mesa concreta o ayuda, avisa al reservar.',
	},
	{
		q: '¿Qué hay cerca?',
		a: 'Ludiente está en el Alto Mijares, entre Argelita y el río Mijares, con rutas de montaña y carreteras de curvas para moto. El restaurante es parada habitual de vecinos y viajeros que cruzan la comarca.',
	},
];
