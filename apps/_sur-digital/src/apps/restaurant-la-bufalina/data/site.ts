/**
 * Datos de Restaurant la Bufalina — Passeig de Vara de Rey, 13 (07800 Eivissa,
 * Ibiza).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurant la Bufalina»,
 *   38.908794,1.433187, feature 0x129946ba64c8f403:0x6e9f3748f8a91da7
 *   (dirección, teléfono, horario, categorías, nota, reseñas, accesibilidad y
 *   descripción del propio negocio).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/. En ellas se ven la terraza, la fachada, el cartel de la
 *   carta y las pizzas.
 *
 * La ficha no publica carta cerrada ni precios utilizables: «La carta» recoge
 * solo los platos que se ven en las fotos del perfil, lo que anuncia el cartel
 * de la puerta y lo que cita la descripción del negocio.
 */

export const BUSINESS = {
	name: 'Restaurant la Bufalina',
	shortName: 'La Bufalina',
	mark: 'LB',
	street: 'Passeig de Vara de Rey, 13',
	city: 'Eivissa',
	region: 'Illes Balears',
	regionName: 'Islas Baleares',
	postalCode: '07800',
	country: 'ES',
	phoneDisplay: '971 30 28 94',
	phoneHref: 'tel:+34971302894',
	rating: 4.5,
	reviewsCount: 2905,
	siteUrl: 'https://www.sur-digital.com/restaurant-la-bufalina',
	geo: { lat: 38.908794, lng: 1.433187 },
	featureId: '0x129946ba64c8f403:0x6e9f3748f8a91da7',
	placeId: 'ChIJA_TIZLpGmRIRpx2p-Eg3n24',
	cid: '7971150652018072999',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+la+Bufalina/@38.908794,1.433187,17z/data=!3m1!4b1!4m6!3m5!1s0x129946ba64c8f403:0x6e9f3748f8a91da7!8m2!3d38.908794!4d1.433187!16s%2Fg%2F1tg_69xh',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.908794%2C1.433187',
	embed: 'https://maps.google.com/maps?q=38.908794,1.433187&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: todos los días de 11:00 a 01:00. */
export const HOURS = [
	{ day: 'Lunes', value: '11:00–01:00' },
	{ day: 'Martes', value: '11:00–01:00' },
	{ day: 'Miércoles', value: '11:00–01:00' },
	{ day: 'Jueves', value: '11:00–01:00' },
	{ day: 'Viernes', value: '11:00–01:00' },
	{ day: 'Sábado', value: '11:00–01:00' },
	{ day: 'Domingo', value: '11:00–01:00' },
];

/** Frases literales de las reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	'La pizza de setas y bacon buenísima y el trato de Marta inmejorable, volveremos.',
];

/**
 * Señas de identidad que sí constan: las categorías con las que Google clasifica
 * el local, lo que cuenta la descripción del negocio, lo que se ve en las fotos
 * del perfil, lo que anuncia el cartel de la puerta y lo que marca su ficha de
 * accesibilidad.
 */
export const SERVICIOS = [
	'Pizzería italiana',
	'Comida a domicilio',
	'Para llevar',
	'Terraza en Vara de Rey',
	'Ensaladas y bowls',
	'Producto fresco',
	'Premio Eccellenze Italiane 2021-2022',
	'Acceso para sillas de ruedas',
];

/**
 * Carta: la ficha no publica precios. Los platos salen de las fotos del perfil,
 * del cartel de la puerta y de la descripción del negocio.
 */
export const MENU = [
	{
		title: 'Pizzas',
		items: [
			{ name: 'Margherita', note: 'en las fotos del perfil, con tomate, mozzarella y albahaca' },
			{
				name: 'Pizza con burrata, prosciutto y rúcula',
				note: 'en las fotos del perfil, con tomate cherry y aceite de oliva',
			},
			{
				name: 'Pizza con prosciutto, tomate seco y albahaca',
				note: 'en las fotos del perfil, con burrata en el centro',
			},
			{
				name: 'Pizza de jamón, champiñones y alcachofas',
				note: 'en las fotos del perfil',
			},
			{ name: 'Pizza de setas y bacon', note: '«buenísima», según una reseña' },
		],
	},
	{
		title: 'Ensaladas y bowls',
		items: [
			{ name: 'Las Maxi Ensaladas', note: 'anunciadas en el cartel de la puerta' },
			{ name: 'Las Maxi Bowls', note: 'anunciadas en el cartel de la puerta' },
		],
	},
	{
		title: 'Fresh food',
		items: [
			{
				name: 'Piadina de fiambre y ensalada',
				note: 'en las fotos del perfil, servida con cerveza',
			},
			{
				name: 'Pizza para llevar o a domicilio',
				note: 'la ficha lo clasifica como comida para llevar y a domicilio',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurant la Bufalina?',
		a: 'En Passeig de Vara de Rey, 13, en el centro de Eivissa (07800, Ibiza). El mapa de esta página lleva directo al restaurante y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días de 11:00 a 01:00, sin día de cierre. Es el horario publicado, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha de Google no ofrece reserva online. Para reservar mesa, pedir para llevar o encargar a domicilio hay que llamar al 971 30 28 94.',
	},
	{
		q: '¿Qué tipo de cocina se sirve?',
		a: 'Cocina italiana, según las categorías de su ficha de Google: restaurante, restaurante italiano, pizzería, restaurante mediterráneo, comida a domicilio y comida para llevar. El propio negocio se presenta como «la mejor pizzería de Ibiza, ganadora del premio Eccellenze Italiane 2021-2022».',
	},
	{
		q: '¿Se puede pedir a domicilio o para llevar?',
		a: 'Sí. Google lo clasifica como restaurante de comida a domicilio y de comida para llevar, y las fotos del perfil incluyen una pizza en su caja de cartón. Los pedidos se hacen por teléfono, en el 971 30 28 94.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'En las fotos del perfil aparecen pizzas margherita, con burrata, prosciutto y rúcula, con prosciutto y tomate seco, y con jamón, champiñones y alcachofas; además de una piadina de fiambre y ensalada. El cartel de la puerta anuncia las Maxi Ensaladas y las Maxi Bowls, y una reseña cita la pizza de setas y bacon. La ficha no publica precios.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. Las fotos del perfil muestran una terraza amplia con sombrillas blancas, farolillos de bambú y sillas de mimbre en Passeig de Vara de Rey, delante de la fachada amarilla con el rótulo «La Bufalina · Pizza & Fresh Food».',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'Su ficha de Google marca acceso para sillas de ruedas, aparcamiento adaptado, aseo adaptado, asientos adaptados y bucle magnético asistencial.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: '4,5 sobre 5 con 2.905 reseñas. Las publicadas destacan la pizza de setas y bacon y el trato del equipo.',
	},
];
