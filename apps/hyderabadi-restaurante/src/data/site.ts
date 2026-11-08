/**
 * Datos de Hyderabadi Restaurante — R. Nampula 2, 2675-411 Odivelas (Lisboa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Hyderabadi Restaurante»,
 *   38.7885343,-9.1822696, feature 0xd1933b811370925:0x376d46117375fb61
 *   (nombre, dirección, teléfono, categoría, horario, nota, reseñas,
 *   accesibilidad y la descripción que publica el propio local).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que esta web NO inventa: la ficha no publica sitio web propio ni carta
 * con precios. El menú que aparece aquí sale de la descripción del propio
 * restaurante (dum biryani, kebab y pizza) y de las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Hyderabadi Restaurante',
	shortName: 'Hyderabadi',
	mark: 'HY',
	street: 'R. Nampula, 2',
	city: 'Odivelas',
	region: 'Lisboa',
	regionName: 'Portugal',
	postalCode: '2675-411',
	country: 'PT',
	phoneDisplay: '960 444 222',
	phoneHref: 'tel:+351960444222',
	rating: 4.6,
	reviewsCount: 226,
	siteUrl: 'https://hyderabadi-restaurante.vercel.app',
	geo: { lat: 38.7885343, lng: -9.1822696 },
	featureId: '0xd1933b811370925:0x376d46117375fb61',
	placeId: 'ChIJJQk3EbgzGQ0RYft1cxFGbTc',
	cid: '3993925485312998241',
	/** Categoría con la que Google describe el local. */
	googleBlurb: 'Restaurante hyderabadí',
	/** Descripción que publica el propio restaurante en su ficha. */
	ownDescription:
		'Cocina auténtica de Hyderabad en un comedor íntimo: dum biryani, kebab y pizza. También servicio de catering para fiestas, con opciones vegetarianas y no vegetarianas.',
	tagline: 'Cocina hyderabadí · dum biryani, kebab y pizza en Odivelas',
	description:
		'Hyderabadi Restaurante, cocina hyderabadí en la R. Nampula 2, 2675-411 Odivelas (Lisboa): dum biryani, kebab y pizza, con opciones vegetarianas y servicio de catering. 4,6 sobre 5 en Google con 226 reseñas. Tel. 960 444 222.',
	/** La ficha no publica sitio web propio. */
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Hyderabadi+Restaurante/@38.7885343,-9.1822696,17z/data=!3m1!4b1!4m6!3m5!1s0xd1933b811370925:0x376d46117375fb61!8m2!3d38.7885343!4d-9.1822696!16s%2Fg%2F11v9vsvqrq',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=PT`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.7885343%2C-9.1822696',
	embed: 'https://maps.google.com/maps?q=38.7885343,-9.1822696&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–23:00' },
	{ day: 'Martes', value: '11:00–23:00' },
	{ day: 'Miércoles', value: '11:00–23:00' },
	{ day: 'Jueves', value: '11:00–23:00' },
	{ day: 'Viernes', value: '11:00–24:00' },
	{ day: 'Sábado', value: '11:00–24:00' },
	{ day: 'Domingo', value: '11:00–23:00' },
];

/** Señas de identidad que constan en la ficha y en la descripción del local. */
export const SERVICIOS = [
	'Cocina hyderabadí',
	'Dum biryani',
	'Kebab',
	'Pizza',
	'Opciones vegetarianas',
	'Catering',
	'Comedor para grupos',
];

/**
 * La ficha no publica carta ni precios. Estos platos salen de la descripción
 * que el propio restaurante escribe en Google y de las fotos del perfil.
 */
export const MENU = [
	{
		title: 'Biryani y arroces',
		items: [
			{
				name: 'Dum biryani',
				note: 'el plato que el propio local destaca en su descripción de Google',
			},
			{
				name: 'Biryani de verduras',
				note: 'el restaurante anuncia opciones vegetarianas en su ficha',
			},
			{
				name: 'Arroz basmati especiado',
				note: 'base de la cocina hyderabadí, con especias enteras',
			},
		],
	},
	{
		title: 'De la parrilla',
		items: [
			{ name: 'Kebab', note: 'citado junto al biryani en la descripción del restaurante' },
			{
				name: 'Pollo tandoori',
				note: 'parrilla india, la otra mitad de una mesa hyderabadí',
			},
			{
				name: 'Platos no vegetarianos',
				note: 'el local menciona expresamente opciones con y sin carne',
			},
		],
	},
	{
		title: 'También en la ficha',
		items: [
			{ name: 'Pizza', note: 'el propio restaurante la anuncia en su descripción' },
			{
				name: 'Menú para grupos y fiestas',
				note: 'ofrecen catering vegetariano y no vegetariano',
			},
			{
				name: 'Especias de Hyderabad',
				note: '«spicy food», avisa el restaurante: la casa va de sabores intensos',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Hyderabadi Restaurante?',
		a: 'En la R. Nampula 2, 2675-411 Odivelas, en el distrito de Lisboa. El mapa de esta página lleva directo al restaurante y el botón «Cómo llegar» abre la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días. De domingo a jueves sirve de 11:00 a 23:00, y los viernes y sábados alarga hasta las 24:00. Es el horario publicado en su ficha de Google, que avisa de que puede cambiar en festivos.',
	},
	{
		q: '¿Qué se come?',
		a: 'Cocina hyderabadí: dum biryani, kebab y pizza, según la descripción que el propio restaurante publica en Google. Se anuncia como comida especiada y con opciones vegetarianas y no vegetarianas.',
	},
	{
		q: '¿Se puede reservar o pedir por teléfono?',
		a: 'La ficha de Google no ofrece reserva ni pedido online, y esta web no tiene formulario. El teléfono del restaurante es el 960 444 222, así que lo más rápido es llamar para reservar mesa o preguntar por el servicio de catering.',
	},
	{
		q: '¿Hacen catering para fiestas?',
		a: 'Sí. El propio local indica en su ficha que ofrece servicio de catering para eventos, con menús vegetarianos y no vegetarianos para los invitados.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
		a: 'El restaurante menciona expresamente opciones vegetarianas y no vegetarianas en su descripción. Como no publica carta completa, conviene confirmar los platos del día al llamar.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso y asientos adaptados para personas en sillas de ruedas. No confirma aseo ni estacionamiento adaptados: para eso, llama antes.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,6 sobre 5 con 226 reseñas. Es una nota alta para un restaurante de barrio en Odivelas y se mantiene estable en el tiempo.',
	},
];
