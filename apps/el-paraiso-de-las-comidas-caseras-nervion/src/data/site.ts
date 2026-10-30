/**
 * Datos de El Paraíso de las Comidas Caseras Nervion — C. Divino Redentor, 1,
 * 41005 Sevilla (Nervión).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps indicada: «El Paraíso de las Comidas Caseras Nervion»,
 *   37.3813848,-5.9713906, feature 0xd126f7253748ef5:0xb7444f52624464b1
 *   (nombre, dirección, categoría, horario, teléfono, nota, reseñas y
 *   accesibilidad).
 * - Carta expuesta en el propio local y fotografiada en el perfil de Google
 *   Maps (precios por cuarto de kilo y por kilo, WhatsApp y reparto a
 *   domicilio).
 * - Fotografías del perfil del establecimiento, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que el sitio NO inventa: la ficha no enlaza web propia ni publica pedidos
 * en línea. Los precios son los de la carta fotografiada y así se advierte.
 */

export const BUSINESS = {
	name: 'El Paraíso de las Comidas Caseras',
	fullName: 'El Paraíso de las Comidas Caseras Nervión',
	googleName: 'El Paraíso de las Comidas Caseras Nervion',
	shortName: 'El Paraíso',
	mark: 'P',
	street: 'C. Divino Redentor, 1',
	city: 'Sevilla',
	region: 'Andalucía',
	regionName: 'Andalucía',
	neighbourhood: 'Nervión',
	postalCode: '41005',
	country: 'ES',
	phone: '+34 954 08 25 51',
	phoneHref: '+34954082551',
	rating: 4.7,
	reviewsCount: 50,
	siteUrl: 'https://el-paraiso-de-las-comidas-caseras-nervion.vercel.app',
	geo: { lat: 37.3813848, lng: -5.9713906 },
	featureId: '0xd126f7253748ef5:0xb7444f52624464b1',
	placeId: 'ChIJ9Y50U3JvEg0RsWREYlJPRLc',
	cid: '13205528942681363633',
	category: 'Comida casera para llevar',
	categories: ['Tienda de alimentación'],
	tagline: 'Comida casera para llevar en Nervión',
	description:
		'Comida casera para llevar en Nervión, Sevilla: guisos, arroces, pastas y bandejas. C. Divino Redentor 1. 4,7 sobre 5 en Google con 50 reseñas.',
	hasPublicWebsite: false,
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Para%C3%ADso+de+las+Comidas+Caseras+Nervion/@37.3813848,-5.9713906,17z/data=!4m7!3m6!1s0xd126f7253748ef5:0xb7444f52624464b1!8m2!3d37.3813848!4d-5.9713906!16s%2Fg%2F11j24g679f',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3813848%2C-5.9713906',
	embed: 'https://maps.google.com/maps?q=37.3813848,-5.9713906&z=17&hl=es&output=embed',
};

/** WhatsApp que anuncia la carta del local, junto al teléfono fijo. */
export const WHATSAPP = {
	number: '636 565 520',
	href: 'https://wa.me/34636565520',
};

/** Reparto y pedido mínimo tal como aparecen impresos en la carta. */
export const DELIVERY = {
	note: 'Reparto a domicilio de 13:30 a 15:30, con pedido mínimo de 12 €, según la carta del local.',
};

/**
 * Horario publicado en la ficha de Google. De lunes a jueves hay dos turnos;
 * el viernes es continuo hasta las 18:00, el sábado solo mediodía y el domingo
 * abre a las 11:00. La ficha avisa de que en festivos puede cambiar.
 */
export const HOURS = [
	{ day: 'Lunes', value: '10:30–15:30 · 17:30–21:00' },
	{ day: 'Martes', value: '10:30–15:30 · 17:30–21:00' },
	{ day: 'Miércoles', value: '10:30–15:30 · 17:30–21:00' },
	{ day: 'Jueves', value: '10:30–15:30 · 17:30–21:00' },
	{ day: 'Viernes', value: '10:30–18:00' },
	{ day: 'Sábado', value: '10:30–15:30' },
	{ day: 'Domingo', value: '11:00–15:00' },
];

/**
 * Señales de identidad que sí constan: la categoría de la ficha, el formato de
 * comida para llevar, el barrio, el horario, la nota y el teléfono.
 */
export const SERVICIOS = [
	'Comida casera para llevar',
	'Nervión · Sevilla',
	'Carta por cuarto de kilo o kilo',
	'De lunes a domingo',
	'4,7 · 50 reseñas en Google',
	'+34 954 08 25 51',
];

/**
 * Carta expuesta en el local. El precio va en el orden de la carta: primero el
 * cuarto de kilo y después el kilo; los platos que se venden por unidad lo
 * indican en la nota.
 */
export const MENU = [
	{
		title: 'Guisos y carnes',
		items: [
			{
				name: 'Albóndigas en salsa',
				note: 'en su salsa, de las bandejas del mostrador',
				price: '2,50 / 10,00 €',
			},
			{ name: 'Carrillada en salsa', note: 'guisada despacio, para llevar', price: '3,50 / 14,00 €' },
			{ name: 'Pollo al ajillo', note: 'con ajos y un fondo de vino', price: '2,75 / 11,00 €' },
			{ name: 'Solomillo al whisky', note: 'el clásico de la casa', price: '3,25 / 13,00 €' },
			{ name: 'Pisto casero', note: 'verduras a fuego lento', price: '2,50 / 10,00 €' },
		],
	},
	{
		title: 'Arroces, pastas y legumbres',
		items: [
			{ name: 'Arroz 3 delicias', note: 'con huevo, jamón y verduras', price: '2,50 / 10,00 €' },
			{ name: 'Arroz de paella mixta', note: 'solo los sábados', price: '3,75 / 15,00 €' },
			{ name: 'Arroz negro', note: 'solo los miércoles', price: '3,50 / 14,00 €' },
			{ name: 'Garbanzos con langostinos', note: 'de cuchara, según el día', price: '2,75 / 11,00 €' },
			{
				name: 'Lasaña de carne',
				note: 'la que destacan las reseñas: «estaba espectacular»',
				price: '2,75 / 11,00 €',
			},
			{ name: 'Canelones de atún', note: 'también de carne y de bechamel', price: '2,75 / 11,00 €' },
		],
	},
	{
		title: 'Fritos y empanados',
		items: [
			{ name: 'Croquetas de jamón', note: 'artesanales, para freír o ya fritas', price: '3,25 / 13,00 €' },
			{ name: 'Flamenquín de york y queso', note: 'empanado a mano', price: '2,25 / 9,00 €' },
			{ name: 'San jacobo de roque', note: 'con bechamel y pan rallado', price: '2,75 / 11,00 €' },
			{ name: 'Lagrimitas de pollo', note: 'para picar o completar la comida', price: '2,75 / 11,00 €' },
			{ name: 'Filete ruso', note: 'de la bandeja de empanados', price: '2,50 / 10,00 €' },
			{ name: 'Empanadilla de carne', note: 'por unidad, 1,50 €', price: '1,50 €' },
		],
	},
	{
		title: 'Fríos, tortillas y postres',
		items: [
			{ name: 'Ensaladilla rusa', note: 'casera, de nevera', price: '2,25 / 9,00 €' },
			{ name: 'Ensaladilla de marisco', note: 'con otras variedades según el día', price: '3,00 / 12,00 €' },
			{ name: 'Patatas aliñás con huevo y atún', note: 'al estilo de la casa', price: '2,50 / 10,00 €' },
			{ name: 'Salmorejo', note: 'para llevar en tarrina', price: '1,50 / 6,00 €' },
			{
				name: 'Tortilla de patatas',
				note: 'por encargo: mediana 3,50 €, grande 7,00 €',
				price: '3,50 €',
			},
			{ name: 'Arroz con leche', note: 'postre de la casa', price: '2,00 €' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Paraíso de las Comidas Caseras Nervión?',
		a: 'En la calle Divino Redentor 1, en el barrio de Nervión, 41005 Sevilla. El mapa de esta página lleva a la puerta y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a jueves abre de 10:30 a 15:30 y de 17:30 a 21:00; el viernes, de 10:30 a 18:00; el sábado, de 10:30 a 15:30, y el domingo, de 11:00 a 15:00. Es el horario que publica la ficha de Google, que avisa de que en festivos puede cambiar.',
	},
	{
		q: '¿Es un restaurante o es comida para llevar?',
		a: 'La ficha lo clasifica como tienda de alimentación y su descripción es «comida casera para llevar». Se compra la comida y se lleva a casa; no consta servicio de mesa.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Guisos, arroces, pastas, legumbres, carnes, pescados, empanadas, empanados fritos, ensaladillas, tortillas y postres. La carta se vende por cuarto de kilo o por kilo, y las reseñas de Google destacan la lasaña y el trato del personal.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La carta del local marca dos columnas: el cuarto de kilo y el kilo. Un cuarto de albóndigas en salsa son 2,50 € y el kilo, 10,00 €; la lasaña de carne va de 2,75 € el cuarto a 11,00 € el kilo. Los precios pueden variar según mercado.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'La carta del local anuncia reparto a domicilio de 13:30 a 15:30 con un pedido mínimo de 12 €. Confirma la zona y el pedido por teléfono antes de contar con ello.',
	},
	{
		q: '¿Se puede encargar por teléfono o WhatsApp?',
		a: `Sí. El teléfono del local es el ${BUSINESS.phone} y la carta anuncia un WhatsApp en el ${WHATSAPP.number}. Llama o escribe para preguntar qué hay, encargar una bandeja o reservar la comida de una hora concreta.`,
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha indica que hay acceso para sillas de ruedas, pero no aparcamiento adaptado. No detalla más, así que si necesitas una condición concreta, llama antes.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 50 reseñas en Google, según la ficha consultada. Las reseñas repiten la buena atención y el sabor de la comida casera.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del establecimiento. Esta página es informativa y no es un canal oficial de pedidos: el teléfono es el contacto directo.',
	},
];
