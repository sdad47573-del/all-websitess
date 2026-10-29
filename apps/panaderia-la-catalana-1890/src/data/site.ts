/**
 * Datos de Panadería La Catalana, 1890 — Noroeste, 14011 Córdoba.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería La Catalana, 1890,
 *   37.8902409,-4.7987261, feature 0xd6cdfb1cd50bb9f:0x3142d9c1b4d18f0d.
 * - Categoría, valoración, reseñas, teléfono y horario: ficha pública de Google
 *   (octubre de 2026). La ficha no tiene atributos de accesibilidad.
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica web propia, correo, redes,
 * carta, precios, métodos de pago, reparto ni accesibilidad. El surtido se
 * describe con las fotos del perfil y lo que cuentan las reseñas.
 */

export const BUSINESS = {
	name: 'Panadería La Catalana, 1890',
	shortName: 'La Catalana',
	mark: 'L',
	street: 'C. Atlántico, 11',
	district: 'Noroeste',
	city: 'Córdoba',
	region: 'Andalucía',
	postalCode: '14011',
	country: 'ES',
	phone: '957 02 33 45',
	phoneHref: 'tel:+34957023345',
	rating: 4.6,
	reviewsCount: 35,
	siteUrl: 'https://panaderia-la-catalana-1890.vercel.app',
	geo: { lat: 37.8902409, lng: -4.7987261 },
	featureId: '0xd6cdfb1cd50bb9f:0x3142d9c1b4d18f0d',
	placeId: 'ChIJn7tQzbHfbA0RDY_RtMHZQjE',
	googleCategory: 'Panadería',
	tagline: 'Pan y bizcochos en el barrio Noroeste',
	description:
		'Panadería La Catalana, 1890, en la calle Atlántico, 11 (Noroeste, 14011 Córdoba). Pan, bizcochos y bollería. Abierta de lunes a sábado de 8:30 a 14:30. 4,6 sobre 5 en Google.',
	hoursSummary: 'Lunes a sábado 8:30–14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+La+Catalana,+1890/@37.8902409,-4.7987261,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdfb1cd50bb9f:0x3142d9c1b4d18f0d!8m2!3d37.8902409!4d-4.7987261!16s%2Fg%2F11fhympq8h?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=3548992141059157773',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.8902409%2C-4.7987261',
	embed: 'https://maps.google.com/maps?q=37.8902409,-4.7987261&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.8902409,-4.7987261',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a sábado', value: '8:30–14:30' },
	{ day: 'Domingo', value: 'Cerrado' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google, consultada en octubre de 2026. Abre solo por la mañana y cierra los domingos. El domingo 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar: conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pan del día',
	'Bizcochos',
	'Bollería',
	'Dulces',
	'Recogida en tienda',
];

export const HIGHLIGHTS = [
	{
		title: 'Pan y bizcochos',
		text: '«Pan buenísimo» y «bizcochos muy regaditos y deliciosos», cuentan dos reseñas de Google. La ficha la clasifica como panadería.',
	},
	{
		title: 'Trato de barrio',
		text: '«Servicio excelente, amable, educada y muy simpática», resume otra reseña del perfil, que destaca a la señora que atiende.',
	},
	{
		title: 'Solo por la mañana',
		text: 'Abre de lunes a sábado de 8:30 a 14:30 y cierra los domingos, así que el pan se compra antes de mediodía.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Pan',
		items: [
			{
				name: 'Pan del día',
				note: '«Pan buenísimo», según una de las reseñas de Google.',
			},
			{
				name: 'Barras y piezas de horno',
				note: 'En las bandejas del mostrador, según las fotos del perfil.',
			},
			{
				name: 'Pan para llevar',
				note: 'La ficha no publica formatos ni precios: el surtido cambia a lo largo de la mañana.',
			},
		],
	},
	{
		title: 'Bollería y dulces',
		items: [
			{
				name: 'Magdalenas, cañas y palmeras',
				note: 'En la carta del local y en las bandejas de la vitrina.',
			},
			{
				name: 'Bizcochos',
				note: '«Muy regaditos y deliciosos», según una reseña del perfil.',
			},
			{
				name: 'Roscos fritos y medias noches',
				note: 'Dulces que aparecen en la carta del obrador, junto a las magdalenas.',
			},
		],
	},
	{
		title: 'Pastelería y empanadas',
		items: [
			{
				name: 'Tartas',
				note: 'De queso, zanahoria o Alcázar, entre otras, en la carta del local.',
			},
			{
				name: 'Pastel cordobés y pestiños',
				note: 'Dulces de siempre que aparecen en la carta del obrador.',
			},
			{
				name: 'Empanadas',
				note: 'Grandes, medianas y pequeñas, y empanadillas, en la carta del local.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería La Catalana, 1890?',
		a: 'En la calle Atlántico, 11, en el barrio Noroeste (14011 Córdoba). El mapa de esta página abre el punto exacto y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:30 a 14:30 y cierra los domingos. El 1 de noviembre (Día de Todos los Santos) Google advierte de que el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'La ficha de Google publica el teléfono 957 02 33 45. No tiene página web propia, correo ni redes sociales asociadas, así que el contacto es por teléfono o en el propio local.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Pan, bizcochos, bollería y dulces, según la ficha, las fotos del perfil y las reseñas de Google. La ficha no publica carta ni precios, así que esta web no los indica.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información de accesibilidad, así que esta página no la afirma. Para una duda concreta, lo mejor es llamar al 957 02 33 45.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 35 reseñas en Google, que la clasifica como panadería.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Se pregunta en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Se pueden hacer encargos?',
		a: 'La ficha no publica catálogo ni plazos de encargo. Lo mejor es llamar al 957 02 33 45 y preguntar.',
	},
	{
		q: '¿Es la misma que La Catalana del centro?',
		a: 'No necesariamente. Esta ficha corresponde a «Panadería La Catalana, 1890» en la calle Atlántico, 11 (Noroeste). La ficha no menciona otros locales, así que aquí solo se describe este.',
	},
];
