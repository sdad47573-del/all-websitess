/**
 * Datos de Restaurante Rasca Lobos — Avinguda de Vicent Serra, 25 (07817 Sant
 * Jordi de ses Salines, Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurante Rasca Lobos»,
 *   38.8910102,1.3945414, feature 0x129945d9fc493479:0x90b8250ddbef2522
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. El cartel de la entrada y el rótulo de neón indican
 *   «Mesón Restaurante Rasca Lobos · Cocina Tradicional de Calidad».
 *
 * La ficha no publica carta ni precios: «La carta» recoge solo lo que se ve en
 * las fotos del perfil y lo que citan las reseñas. No se inventan platos,
 * precios ni servicios.
 */

export const BUSINESS = {
	name: 'Restaurante Rasca Lobos',
	shortName: 'Rasca Lobos',
	mark: 'RL',
	street: 'Avinguda de Vicent Serra, 25',
	city: 'Sant Jordi de ses Salines',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07817',
	country: 'ES',
	phoneDisplay: '971 39 58 60',
	phoneHref: 'tel:+34971395860',
	rating: 4.6,
	reviewsCount: 527,
	siteUrl: 'https://restaurante-rasca-lobos.vercel.app',
	geo: { lat: 38.8910102, lng: 1.3945414 },
	featureId: '0x129945d9fc493479:0x90b8250ddbef2522',
	placeId: 'ChIJeTRJ_NlFmRIRIiXv2w0luJA',
	cid: '10428125678631068962',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Rasca+Lobos/@38.8910102,1.3945414,17z/data=!3m1!4b1!4m6!3m5!1s0x129945d9fc493479:0x90b8250ddbef2522!8m2!3d38.8910102!4d1.3945414!16s%2Fg%2F11xbtk1zg',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.8910102%2C1.3945414',
	embed: 'https://maps.google.com/maps?q=38.8910102,1.3945414&z=17&hl=es&output=embed',
};

/**
 * Horario de la ficha de Google: comidas de 13:00 a 16:00 y cenas de 20:00 a
 * 23:00, de miércoles a domingo. Lunes y martes cierra.
 */
export const HOURS = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Jueves', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Viernes', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Sábado', value: '13:00–16:00 · 20:00–23:00' },
	{ day: 'Domingo', value: '13:00–16:00 · 20:00–23:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'Las patatas Oviedo, los champis, el queso.........todo muy rico volveremos',
	'Entrantes muy buenos y la fabada y el arroz de matanza.',
	'Pedimos el pollo payés y la milanesa de pollo.',
];

/**
 * Señas de identidad que sí constan: la categoría con la que Google clasifica el
 * local, lo que cuenta la descripción del negocio, lo que se ve en las fotos del
 * perfil, lo que citan sus reseñas y lo que marca su ficha de accesibilidad.
 */
export const SERVICIOS = [
	'Cocina tradicional',
	'Mesón con jardín',
	'Terraza entre árboles',
	'Salón climatizado',
	'Carnes a la brasa',
	'Postres caseros',
	'Comidas y cenas',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica carta ni precios. Los platos salen de las fotos del
 * perfil y de lo que citan las reseñas.
 */
export const MENU = [
	{
		title: 'Entrantes de la casa',
		items: [
			{
				name: 'Patatas Oviedo',
				note: '«las patatas Oviedo… todo muy rico», según una reseña, y en las fotos del perfil',
			},
			{ name: 'Champis', note: '«los champis… todo muy rico», según una reseña' },
			{ name: 'Queso', note: '«el queso… todo muy rico», según una reseña' },
			{
				name: 'Salteado de verduras con jamón',
				note: 'en las fotos del perfil, con pimiento y cebolla',
			},
			{
				name: 'Ensalada con langostinos y aguacate',
				note: 'en las fotos del perfil, con tomate y brotes verdes',
			},
		],
	},
	{
		title: 'Cuchara y arroces',
		items: [
			{ name: 'Fabada', note: '«entrantes muy buenos y la fabada», según una reseña' },
			{ name: 'Arroz de matanza', note: 'citado en una reseña de la ficha' },
		],
	},
	{
		title: 'Carnes y brasa',
		items: [
			{ name: 'Pollo payés', note: '«pedimos el pollo payés», según una reseña' },
			{
				name: 'Milanesa de pollo con patatas',
				note: '«la milanesa de pollo», según una reseña, y en las fotos del perfil',
			},
			{
				name: 'Entrecot a la brasa con pimientos de Padrón',
				note: 'en las fotos del perfil, con patatas y champiñones',
			},
		],
	},
	{
		title: 'Postres',
		items: [
			{ name: 'Tarta de queso', note: 'en las fotos del perfil, con helado y salsa de frutos rojos' },
			{ name: 'Plátano frito con helado', note: 'en las fotos del perfil, con nata y miel' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Rasca Lobos?',
		a: 'En Avinguda de Vicent Serra, 25, en Sant Jordi de ses Salines (07817, Ibiza), a pocos minutos del aeropuerto y de Platja d’en Bossa. El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, sirve comidas de 13:00 a 16:00 y cenas de 20:00 a 23:00 de miércoles a domingo. Lunes y martes cierra. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa hay que llamar al 971 39 58 60.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina tradicional española, según la categoría de su ficha de Google, con recetas de mesón. Su propio cartel lo anuncia como «Mesón Restaurante Rasca Lobos · Cocina Tradicional de Calidad», y entre sus platos aparecen fabada, patatas Oviedo, arroz de matanza o pollo payés.',
	},
	{
		q: '¿Tiene terraza o jardín?',
		a: 'Sí. Las fotos del perfil muestran un jardín con suelo de guijarros, árboles y mesas blancas, además de un salón interior con paredes color terracota. La ficha destaca que el restaurante está climatizado con aire acondicionado en todas las zonas interiores.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas citan las patatas Oviedo, los champis, el queso, la fabada, el arroz de matanza, el pollo payés y la milanesa de pollo. En las fotos del perfil aparecen además un salteado de verduras con jamón, una ensalada con langostinos y aguacate, entrecot con pimientos de Padrón, tarta de queso y plátano frito con helado. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas y asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,6 sobre 5 con 527 reseñas. Las publicadas destacan los entrantes, la fabada, el arroz de matanza, el pollo payés y la milanesa.',
	},
];
