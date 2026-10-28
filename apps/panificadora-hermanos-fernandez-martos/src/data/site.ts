/**
 * Datos de Panificadora Hermanos Fernández Martos S.C. (Pl. Moreno Villa, 5 ·
 * Carretera de Cádiz · 29002 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panificadora Hermanos Fernández Martos S.C.,
 *   36.7064899,-4.4346517, feature 0xd72f783957683cb:0x263c8e87dadc0a05.
 * - Categoría, teléfono, valoración, reseñas, horario y accesibilidad: ficha
 *   pública de Google (octubre de 2026).
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas con
 *   scripts/fetch-maps-photos.mjs.
 *
 * Lo que la web NO inventa: la ficha no publica descripción, carta, precios ni
 * web propia. Los productos citados son los que aparecen en las reseñas y en
 * las fotografías del perfil; no se publican importes.
 */

export const BUSINESS = {
	name: 'Panificadora Hermanos Fernández Martos',
	shortName: 'Hermanos Fernández Martos',
	mark: 'FM',
	street: 'Pl. Moreno Villa, 5',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29002',
	country: 'ES',
	phone: '952 32 71 05',
	phoneHref: 'tel:+34952327105',
	rating: 4.6,
	reviewsCount: 109,
	siteUrl: 'https://panificadora-hermanos-fernandez-martos.vercel.app',
	geo: { lat: 36.7064899, lng: -4.4346517 },
	featureId: '0xd72f783957683cb:0x263c8e87dadc0a05',
	placeId: 'ChIJy4N2lYP3cg0RBQrc2oeOPCY',
	googleCategories: ['Panadería'],
	tagline: 'Panificadora con barra y café en Carretera de Cádiz, Málaga',
	description:
		'Panificadora Hermanos Fernández Martos, en la plaza Moreno Villa, 5 (Carretera de Cádiz, 29002 Málaga). Pan, dulces y pasteles, con bocadillos y café. Abre de lunes a sábado por la mañana; teléfono 952 32 71 05.',
	hoursSummary: 'De lunes a viernes, de 6:30 a 14:30',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panificadora+Hermanos+Fern%C3%A1ndez+Martos+S.C./@36.7064899,-4.4346517,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f783957683cb:0x263c8e87dadc0a05!8m2!3d36.7064899!4d-4.4346517!16s%2Fg%2F1thx9zz1?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7064899%2C-4.4346517',
	embed: 'https://maps.google.com/maps?q=36.7064899,-4.4346517&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google (octubre de 2026). */
export const HOURS = [
	{ day: 'Lunes', value: '6:30–14:30' },
	{ day: 'Martes', value: '6:30–14:30' },
	{ day: 'Miércoles', value: '6:30–14:30' },
	{ day: 'Jueves', value: '6:30–14:30' },
	{ day: 'Viernes', value: '6:30–14:30' },
	{ day: 'Sábado', value: '7:00–14:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'El mejor pan, los mejores dulces y sobre todo, un ambiente familiar muy guay.',
	},
	{
		rating: 5,
		text: 'Buena atención, buenos bocadillos, buen café.',
	},
	{
		rating: 5,
		text: 'Buenísimo el pan y pasteles.',
	},
];

/** Lo que la ficha y las reseñas indican que hay. */
export const SERVICIOS = [
	'Pan del día',
	'Pan integral',
	'Bollería',
	'Dulces',
	'Pasteles',
	'Bocadillos',
	'Café',
	'Terraza',
];

/**
 * Productos que citan las reseñas y las fotografías del perfil. La ficha no
 * publica carta ni precios.
 */
export const MENU = [
	{
		title: 'Del obrador',
		items: [
			{
				name: 'Pan',
				note: '«el mejor pan», en palabras de una de las reseñas',
			},
			{
				name: 'Pan integral',
				note: 'con su cartel de pizarra junto a las hogazas, en una foto',
			},
			{
				name: 'Barras y hogazas',
				note: 'las bandejas del obrador aparecen en el perfil',
			},
		],
	},
	{
		title: 'Bollería y dulces',
		items: [
			{
				name: 'Donuts y bollería',
				note: 'bandeja de donuts recién hechos en las fotos del perfil',
			},
			{
				name: 'Dulces',
				note: '«los mejores dulces», según las reseñas de Google',
			},
			{
				name: 'Pasteles',
				note: '«buenísimo el pan y pasteles», resume otra reseña',
			},
		],
	},
	{
		title: 'De barra',
		items: [
			{
				name: 'Bocadillos',
				note: '«buenos bocadillos», según una reseña de la ficha',
			},
			{
				name: 'Café',
				note: '«buen café», en la misma reseña',
			},
			{
				name: 'Churros',
				note: 'el toldo de la terraza anuncia «café-churros»',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está la Panificadora Hermanos Fernández Martos?',
		a: 'En la plaza Moreno Villa, 5, en la zona de Carretera de Cádiz (29002 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google indica de lunes a viernes de 6:30 a 14:30 y el sábado de 7:00 a 14:30. El domingo cierra. Es una panificadora de mañana: a media tarde ya no abre. En festivos el horario puede cambiar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono publicado en la ficha es el 952 32 71 05. La panificadora no tiene web propia ni página de pedidos online en Google.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Las reseñas de la ficha hablan del pan, de los dulces y pasteles, y también de bocadillos y café. Las fotografías del perfil muestran el obrador, el pan y la vitrina de pastelería. La ficha no publica carta ni precios.',
	},
	{
		q: '¿Se puede desayunar allí?',
		a: 'Sí, por lo que cuentan las reseñas: una de ellas menciona los bocadillos y el café, y otra el «ambiente familiar». La ficha no publica mesas ni horario de barra, así que conviene llamar antes si vas justo de tiempo.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google solo indica que no hay aparcamiento adaptado para sillas de ruedas. No publica datos sobre el acceso al local, así que no se puede afirmar que la entrada sea accesible.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 109 reseñas en Google. Las reseñas destacan el pan, los dulces y pasteles, los bocadillos, el café y el trato.',
	},
];
