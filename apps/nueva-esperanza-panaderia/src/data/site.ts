/**
 * Datos de NUEVA ESPERANZA | Panadería — C. Magistrado Salvador Barbera, 5,
 * Loc 3 (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: NUEVA ESPERANZA |Panadería,
 *   36.7235776,-4.4434685, feature 0xd72f70fd0e37545:0xd6ad0a252a43d6a8.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Perfil de Instagram (@nuevaesperanzapanaderia): panadería artesanal de
 *   barrio, dulces caseros para eventos, empanadas, café y bollería, encargos
 *   por WhatsApp.
 * - Menú y precios de Uber Eats del establecimiento, consultados en octubre
 *   de 2026.
 * - Ficha de la casa en «Yo compro en Málaga»: negocio desde 1988, pan de
 *   obrador, dulces, bollería y catering para eventos.
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: no hay carta propia publicada, así que la carta
 * reproduce el menú de Uber Eats con su aviso, y no se afirma nada sobre el
 * local que la ficha no publique.
 */

export const BUSINESS = {
	name: 'NUEVA ESPERANZA | Panadería',
	shortName: 'Nueva Esperanza',
	mark: 'N',
	street: 'C. Magistrado Salvador Barbera, 5, Loc 3',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '662 47 27 68',
	phoneHref: 'tel:+34662472768',
	whatsapp: 'https://wa.me/34662472768',
	rating: 4.1,
	reviewsCount: 23,
	siteUrl: 'https://nueva-esperanza-panaderia.vercel.app',
	geo: { lat: 36.7235776, lng: -4.4434685 },
	featureId: '0xd72f70fd0e37545:0xd6ad0a252a43d6a8',
	placeId: 'ChIJRXXj0A_3cg0RqNZDKiUKrdY',
	googleCategory: 'Panadería, comida rápida y comida a domicilio',
	tagline: 'Panadería artesanal de barrio en Nueva Málaga',
	description:
		'Nueva Esperanza, panadería y confitería en C. Magistrado Salvador Barbera, 5 (Nueva Málaga, 29010 Málaga). Pan de obrador, dulces, bollería y empanadas. Encargos por WhatsApp. Teléfono 662 47 27 68.',
	hoursSummary: 'L–J 7:00–21:00 · V 7:30–20:30 · S–D 8:00–20:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/NUEVA+ESPERANZA+%7CPanader%C3%ADa/@36.7235776,-4.4434685,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70fd0e37545:0xd6ad0a252a43d6a8!8m2!3d36.7235776!4d-4.4434685!16s%2Fg%2F11kj7dynd7?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=15469031449826678440',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7235776%2C-4.4434685',
	embed: 'https://maps.google.com/maps?q=36.7235776,-4.4434685&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7235776,-4.4434685',
	instagram: 'https://www.instagram.com/nuevaesperanzapanaderia/',
	ubereats:
		'https://www.ubereats.com/es/store/panaderia-y-confiteria-nueva-esperanza/8nT_cxPVWDiGuIqMHejYtQ',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a jueves', value: '7:00–21:00' },
	{ day: 'Viernes', value: '7:30–20:30' },
	{ day: 'Sábado y domingo', value: '8:00–20:30' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) podría ser diferente; conviene llamar antes de ir.';

/** Lo que la casa anuncia en su perfil y en su carta de reparto. */
export const SERVICIOS = [
	'Pan de obrador',
	'Pan sin gluten',
	'Dulces',
	'Bollería',
	'Empanadas',
	'Café',
	'Encargos por WhatsApp',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan de obrador',
		text: 'La casa se presenta como panadería artesanal de barrio y elabora pan desde 1988. En la pizarra de la puerta anuncia pan de soja, olívica y sin gluten.',
	},
	{
		title: 'Las empanadas',
		text: 'Empanadas de jamón y queso, chorizo, cebolla, pollo y criolla, entre las que anuncia su carta de reparto.',
	},
	{
		title: 'Los encargos',
		text: 'Dulces caseros para eventos y encargos por WhatsApp, además del servicio de catering que anuncia la casa.',
	},
];

/**
 * Carta del menú de Uber Eats del establecimiento (octubre de 2026). Los
 * precios son los de la plataforma de reparto y pueden no coincidir con los
 * de tienda; se indica en la nota del mostrador.
 */
export const MENU_GROUPS = [
	{
		title: 'Panadería',
		items: [
			{
				name: 'Malagueña',
				note: 'Pan de obrador, en la carta de reparto de la casa.',
				price: '0,80 €',
			},
			{
				name: 'Malagueña integral',
				note: 'La versión integral de la malagueña.',
				price: '0,80 €',
			},
			{ name: 'Cateto', note: 'Pan de obrador tradicional.', price: '2,50 €' },
			{ name: 'Integral', note: 'Pan integral de la casa.', price: '1,60 €' },
			{ name: 'Centeno', note: 'Pan de centeno.', price: '1,00 €' },
			{
				name: 'Pan de soja, olívica y sin gluten',
				note: 'Anunciados en la pizarra de la puerta del local.',
			},
		],
	},
	{
		title: 'Empanadas',
		items: [
			{
				name: 'Empanada de jamón y queso',
				note: 'De la carta de reparto de la casa.',
				price: '3,50 €',
			},
			{
				name: 'Empanada de chorizo y queso',
				note: 'De la carta de reparto de la casa.',
				price: '3,50 €',
			},
			{
				name: 'Empanada de cebolla y queso',
				note: 'De la carta de reparto de la casa.',
				price: '3,50 €',
			},
			{ name: 'Empanada criolla', note: 'De la carta de reparto de la casa.', price: '2,50 €' },
			{ name: 'Empanada de pollo', note: 'De la carta de reparto de la casa.', price: '3,50 €' },
		],
	},
	{
		title: 'Bollería y dulces',
		items: [
			{ name: 'Croissant', note: 'Bollería de la casa.', price: '1,30 €' },
			{ name: 'Caña', note: 'Bollería de la casa.', price: '2,10 €' },
			{ name: 'Napolitana', note: 'Bollería de la casa.', price: '1,50 €' },
			{
				name: 'Dulces para eventos',
				note: 'La casa anuncia dulces caseros para eventos y encargos por WhatsApp.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Nueva Esperanza?',
		a: 'En la calle Magistrado Salvador Barbera, 5, local 3, en el barrio de Bailén-Miraflores (Nueva Málaga, 29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 7:00 a 21:00. El viernes, de 7:30 a 20:30, y el sábado y el domingo, de 8:00 a 20:30. El 1 de noviembre (Día de Todos los Santos) el horario podría variar.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'La casa se presenta como panadería artesanal de barrio: pan de obrador, dulces caseros, bollería, empanadas y café. La carta de reparto publica panes como la malagueña, el cateto, el integral o el de centeno, además de empanadas y bollería. En la pizarra de la puerta anuncia pan de soja, olívica y sin gluten.',
	},
	{
		q: '¿Hay pan sin gluten?',
		a: 'La pizarra de la entrada anuncia pan de soja, olívica y sin gluten. La ficha de Google no detalla ingredientes ni precios de esas variedades, así que conviene preguntar en el mostrador o llamar al 662 47 27 68.',
	},
	{
		q: '¿Se pueden encargar dulces para un evento?',
		a: 'Sí. La casa anuncia dulces caseros para eventos y encargos por WhatsApp en su perfil público. El número de pedidos es el 662 47 27 68.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'Sí. La ficha de Google incluye comida a domicilio y el local tiene carta en Uber Eats, donde se piden los productos con reparto en Málaga.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono o WhatsApp en el 662 47 27 68, y por el perfil de Instagram @nuevaesperanzapanaderia. La ficha de Google no publica página web propia.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas y aseo adaptado, pero no asientos adaptados. No publica información sobre el mostrador, así que esta página no la afirma.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,1 sobre 5 con 23 reseñas en Google, que la clasifica como panadería, restaurante de comida rápida y comida a domicilio.',
	},
	{
		q: '¿Desde cuándo existe la panadería?',
		a: 'La casa indica en su ficha pública que elabora dulces desde 1988, con pan de obrador, dulces y bollería de elaboración artesanal.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago en tienda, así que esta página no los afirma. En Uber Eats el pago se hace a través de la cuenta de Uber.',
	},
];
