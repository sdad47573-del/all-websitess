/**
 * Datos de Nueva Esperanza · Panadería (C. Magistrado Salvador Barberá, 5,
 * local 3 · Bailén-Miraflores · 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: NUEVA ESPERANZA |Panadería,
 *   36.7235776,-4.4434685, feature 0xd72f70fd0e37545:0xd6ad0a252a43d6a8.
 * - Dirección, categorías, teléfono, valoración, reseñas, horario,
 *   accesibilidad y descripción del titular: ficha pública de Google
 *   (octubre de 2026).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   con scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: la ficha no publica carta, precios ni web propia.
 * Los productos citados son los que aparecen en la descripción del propio
 * establecimiento, en las reseñas y en las fotografías del perfil; no se
 * publican importes.
 */

export const BUSINESS = {
	name: 'Nueva Esperanza',
	fullName: 'NUEVA ESPERANZA |Panadería',
	shortName: 'Nueva Esperanza',
	mark: 'NE',
	street: 'C. Magistrado Salvador Barberá, 5, local 3',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '662 47 27 68',
	phoneHref: 'tel:+34662472768',
	rating: 4.1,
	reviewsCount: 23,
	siteUrl: 'https://nueva-esperanza-panaderia.vercel.app',
	geo: { lat: 36.7235776, lng: -4.4434685 },
	featureId: '0xd72f70fd0e37545:0xd6ad0a252a43d6a8',
	placeId: 'ChIJRXXj0A_3cg0RqNZDKiUKrdY',
	/** Cómo clasifica Google el local. */
	googleCategories: ['Panadería', 'Restaurante de comida rápida', 'Comida a domicilio'],
	tagline: 'Panadería y confitería en Bailén-Miraflores, Málaga',
	description:
		'Panadería Nueva Esperanza, en la calle Magistrado Salvador Barberá, 5, local 3 (Bailén-Miraflores, 29010 Málaga). Pan artesanal y pan cateto, empanadas caseras, dulces tradicionales y café. Teléfono 662 47 27 68.',
	/** Horario publicado en la ficha de Google. */
	hoursSummary: 'De lunes a jueves, de 7:00 a 21:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/NUEVA+ESPERANZA+%7CPanader%C3%ADa/@36.7235776,-4.4434685,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70fd0e37545:0xd6ad0a252a43d6a8!8m2!3d36.7235776!4d-4.4434685!16s%2Fg%2F11kj7dynd7?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7235776%2C-4.4434685',
	embed: 'https://maps.google.com/maps?q=36.7235776,-4.4434685&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–21:00' },
	{ day: 'Martes', value: '7:00–21:00' },
	{ day: 'Miércoles', value: '7:00–21:00' },
	{ day: 'Jueves', value: '7:00–21:00' },
	{ day: 'Viernes', value: '7:30–20:30' },
	{ day: 'Sábado', value: '8:00–20:30' },
	{ day: 'Domingo', value: '8:00–20:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Panes muy bien elaborados y super ricos los recomiendo',
	},
	{
		rating: 5,
		text: 'Gran atención y pasteles muy buenos.',
	},
	{
		rating: 5,
		text: 'Todo tiene una pinta buenísima',
	},
];

/** Lo que la ficha y la descripción del establecimiento indican que hay. */
export const SERVICIOS = [
	'Pan artesanal',
	'Pan cateto',
	'Empanadas caseras',
	'Dulces tradicionales',
	'Bollería',
	'Tartas',
	'Café',
	'Para llevar',
];

/**
 * Productos citados en la descripción del establecimiento, en las reseñas y en
 * las fotografías del perfil. La ficha no publica carta ni precios, así que no
 * se muestran importes.
 */
export const MENU = [
	{
		title: 'Del horno',
		items: [
			{
				name: 'Pan artesanal',
				note: 'la descripción del local habla de pan horneado cada día',
			},
			{
				name: 'Pan cateto',
				note: '«nuestro famoso pan cateto», en palabras del establecimiento',
			},
			{
				name: 'Bollería',
				note: 'bollos de cacao envasados en una de las fotos del perfil',
			},
		],
	},
	{
		title: 'Salado',
		items: [
			{
				name: 'Empanadas caseras',
				note: 'la descripción del local las presenta como favoritas del barrio',
			},
		],
	},
	{
		title: 'Dulce y café',
		items: [
			{
				name: 'Dulces tradicionales',
				note: 'citados en la descripción del establecimiento',
			},
			{
				name: 'Tartas',
				note: 'en las fotos del perfil aparece una tarta de cumpleaños encargada',
			},
			{
				name: 'Café',
				note: 'para el desayuno o la merienda, en la mesa del local',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la panadería Nueva Esperanza?',
		a: 'En la calle Magistrado Salvador Barberá, 5, local 3, en el barrio de Bailén-Miraflores (29010 Málaga), junto a la zona conocida como Nueva Málaga. El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica de lunes a jueves de 7:00 a 21:00, el viernes de 7:30 a 20:30 y el sábado y el domingo de 8:00 a 20:30. Abre todos los días, pero en festivos el horario puede cambiar: la propia ficha ya avisa de ello para el 1 de noviembre.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 662 47 27 68. La panadería no tiene web propia ni página de pedidos online en la ficha de Google.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'El establecimiento describe su obrador con pan artesanal horneado cada día, su «famoso pan cateto», dulces tradicionales y empanadas caseras. Las fotografías del perfil muestran además bollería envasada —bollos de cacao—, tartas y una mesa para tomar café. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede desayunar o merendar en el local?',
		a: 'Sí. En la foto de la fachada se ven una mesa y sillas dentro del local, y la descripción del establecimiento habla de «un café tranquilo, un desayuno con sabor de verdad o una merienda». Google la clasifica además como restaurante de comida rápida.',
	},
	{
		q: '¿Hacen reparto a domicilio?',
		a: 'Google la clasifica como «comida a domicilio», pero la ficha no detalla el servicio ni sus condiciones. Para confirmarlo, lo mejor es llamar al 662 47 27 68 o preguntar en el mostrador.',
	},
	{
		q: '¿Se pueden encargar tartas?',
		a: 'En las fotografías del perfil aparece una tarta de cumpleaños encargada, pero la ficha no publica un servicio de encargos ni plazos. Conviene preguntar por teléfono antes de contar con ella.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas y aseo adaptado, pero no asientos adaptados para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,1 sobre 5 con 23 reseñas en Google. Las reseñas de la ficha destacan el pan —«muy bien elaborados»—, los pasteles y la atención.',
	},
];
