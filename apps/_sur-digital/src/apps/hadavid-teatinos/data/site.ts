/**
 * Datos de Hadavid Teatinos — C. Franz Kafka, 15 (Teatinos-Universidad,
 * 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Hadavid Teatinos, 36.7162716,-4.4649092,
 *   feature 0xd72f73eec18521b:0x57baf005d7a13ddb.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario y
 *   accesibilidad: ficha pública de Google (octubre de 2026).
 * - Descripción del negocio: «Panadería Pastelería especializada en diferentes
 *   tipos de harinas» (la propia ficha).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios, web propia,
 * correo ni redes sociales. El mostrador recoge solo lo que muestran las fotos
 * del perfil (incluidos los carteles de las harinas) y las reseñas, sin precios.
 */

export const BUSINESS = {
	name: 'Hadavid Teatinos',
	shortName: 'Hadavid',
	mark: 'H',
	street: 'C. Franz Kafka, 15',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '672 53 37 79',
	phoneHref: 'tel:+34672533779',
	rating: 4.8,
	reviewsCount: 453,
	siteUrl: 'https://www.sur-digital.com/hadavid-teatinos',
	geo: { lat: 36.7162716, lng: -4.4649092 },
	featureId: '0xd72f73eec18521b:0x57baf005d7a13ddb',
	placeId: 'ChIJG1IY7D73cg0R2z2h1wXwulc',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería de harinas en Teatinos',
	description:
		'Hadavid Teatinos, en la calle Franz Kafka, 15 (Teatinos-Universidad, 29010 Málaga). Panadería y pastelería especializada en diferentes tipos de harinas. Teléfono 672 53 37 79. 4,8 sobre 5 en Google.',
	hoursSummary: 'L–V 8:30–21:00 · S 8:30–15:00 · D cerrado',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Hadavid+Teatinos/@36.7162716,-4.4649092,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73eec18521b:0x57baf005d7a13ddb!8m2!3d36.7162716!4d-4.4649092!16s%2Fg%2F11x6p_0v1t?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAyMC4wIKXMDSoASAFQAw%3D%3D',
	cid: 'https://www.google.com/maps?cid=6321628934851083739',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7162716%2C-4.4649092',
	embed: 'https://maps.google.com/maps?q=36.7162716,-4.4649092&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7162716,-4.4649092',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '8:30–21:00' },
	{ day: 'Sábado', value: '8:30–15:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) Google advierte de que podría variar; conviene llamar antes de ir.';

export const SERVICIOS = [
	'Panadería',
	'Pastelería',
	'Masas madre',
	'Harinas de sarraceno',
	'Centeno y malta',
	'Bollería',
];

export const HIGHLIGHTS = [
	{
		title: 'Harinas con nombre propio',
		text: 'Los carteles del obrador no esconden la receta: malta con centeno y linaza, sarraceno con jengibre y cúrcuma, sarraceno con calabaza hervida, sarraceno y arroz.',
	},
	{
		title: 'Panadería y pastelería',
		text: 'La ficha se define como «panadería pastelería especializada en diferentes tipos de harinas». En la vitrina conviven el pan, las tartas y la bollería.',
	},
	{
		title: '4,8 sobre 5',
		text: 'Con 453 reseñas en Google, las más repetidas hablan de la calidad del pan, la variedad y un servicio rápido.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panes de harinas',
		items: [
			{
				name: 'Malta, centeno y linaza',
				note: 'Así lo etiqueta el cartel del mostrador, en las fotos del perfil.',
			},
			{
				name: 'Sarraceno, jengibre y cúrcuma',
				note: 'Hogaza de trigo sarraceno con jengibre y cúrcuma, según el cartel.',
			},
			{
				name: 'Sarraceno y calabaza hervida',
				note: 'Pan de sarraceno con calabaza, con la miga amarilla.',
			},
			{
				name: 'Sarraceno y arroz',
				note: 'La cuarta harina que aparece etiquetada en la vitrina.',
			},
		],
	},
	{
		title: 'Pastelería',
		items: [
			{
				name: 'Tartas de vitrina',
				note: 'De chocolate, de zanahoria y con nata y fresa, en las fotos del perfil.',
			},
			{
				name: 'Tartaletas',
				note: 'De frutos rojos, de limón y de crema, en la vitrina.',
			},
			{
				name: 'Rosca glaseada',
				note: 'Con chocolate blanco por encima, sobre papel de horno.',
			},
		],
	},
	{
		title: 'Bollería y dulces',
		items: [
			{
				name: 'Donuts y napolitanas',
				note: 'Con glaseado rosa y chocolate, en la bandeja de la vitrina.',
			},
			{
				name: 'Cruasanes y cookies',
				note: 'Junto a las napolitanas y las tartas, en las fotos del local.',
			},
			{
				name: 'Brownies y dulces de chocolate',
				note: 'Cuadrados con nueces y cobertura de chocolate.',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Hadavid Teatinos?',
		a: 'En la calle Franz Kafka, 15, en Teatinos-Universidad (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 8:30 a 21:00; el sábado, de 8:30 a 15:00, y el domingo cierra. El 1 de noviembre (Día de Todos los Santos) el horario podría variar, según advierte Google, así que conviene llamar antes de ir.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'Por teléfono en el 672 53 37 79. La ficha de Google no publica página web propia, correo electrónico ni redes sociales, así que el contacto es en el local o por teléfono.',
	},
	{
		q: '¿Qué panes hacen?',
		a: 'La ficha define el obrador como panadería y pastelería especializada en diferentes tipos de harinas. En las fotos del perfil aparecen panes etiquetados como malta con centeno y linaza, sarraceno con jengibre y cúrcuma, sarraceno con calabaza hervida, y sarraceno con arroz.',
	},
	{
		q: '¿Qué hay en la vitrina?',
		a: 'Tartas (de chocolate, de zanahoria y con nata y fresa), tartaletas de frutos rojos, limón y crema, roscas glaseadas, donuts, napolitanas, cruasanes, cookies y brownies, según las fotos del perfil. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,8 sobre 5 con 453 reseñas en Google, que la clasifica como panadería. Las reseñas destacan la calidad del pan, la variedad y el servicio rápido.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica acceso para sillas de ruedas. No publica información sobre aparcamiento adaptado, el mostrador o el aseo, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el mostrador.',
	},
	{
		q: '¿Hay entrega a domicilio?',
		a: 'La ficha de Google no publica servicio de entrega ni ninguna plataforma de reparto asociada. La compra se hace en el local.',
	},
	{
		q: '¿Tienen otros locales?',
		a: 'Esta ficha corresponde a Hadavid Teatinos, en la calle Franz Kafka, 15. La ficha no menciona otros locales, así que aquí solo se describe este.',
	},
];
