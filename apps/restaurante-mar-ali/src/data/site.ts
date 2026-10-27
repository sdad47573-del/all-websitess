/**
 * Datos de Restaurante Mar Ali (C. Comandante Paz Varela, 1 · 11405 Jerez de la Frontera, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Mar Ali.
 *   Feature 0xd0dc6c13383693f:0x273542e35e2d1c0b.
 * - Dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Platos: reseñas publicadas en la ficha (sisig de pollo, tallarines, arroz con atún,
 *   ternera picante, pato, arroz pollo curry).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no ha publicado descripción ni carta: no se inventan textos ni precios.
 */

import fotoPortada from '../assets/fotos/restaurante-mar-ali-apaisada-01.jpg';
import fotoCuadrada2 from '../assets/fotos/restaurante-mar-ali-cuadrada-02.jpg';
import fotoCuadrada3 from '../assets/fotos/restaurante-mar-ali-cuadrada-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-mar-ali-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/restaurante-mar-ali-vertical-05.jpg';
import fotoApaisada6 from '../assets/fotos/restaurante-mar-ali-apaisada-06.jpg';
import fotoApaisada7 from '../assets/fotos/restaurante-mar-ali-apaisada-07.jpg';
import fotoCuadrada8 from '../assets/fotos/restaurante-mar-ali-cuadrada-08.jpg';
import fotoApaisada9 from '../assets/fotos/restaurante-mar-ali-apaisada-09.jpg';
import fotoVertical10 from '../assets/fotos/restaurante-mar-ali-vertical-10.jpg';
import logo from '../assets/fotos/restaurante-mar-ali-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoCuadrada2,
	fotoCuadrada3,
	fotoVertical4,
	fotoVertical5,
	fotoApaisada6,
	fotoApaisada7,
	fotoCuadrada8,
	fotoApaisada9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Mar+Ali/@36.6943074,-6.1276658,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc6c13383693f:0x273542e35e2d1c0b!8m2!3d36.6943074!4d-6.1276658!16s%2Fg%2F11bxfj3tnk?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante Mar Ali',
	shortName: 'Mar Ali',
	tagline: 'Cocina filipina, china y asiática en Jerez',
	claim: 'Sabores de Filipinas y Asia en el centro de Jerez',
	summary:
		'Restaurante de cocina filipina, china y asiática en Jerez de la Frontera. Platos de siempre, raciones generosas y la posibilidad de pedirlos sin picante.',
	street: 'C. Comandante Paz Varela, 1',
	district: 'Jerez de la Frontera',
	borough: 'Jerez de la Frontera',
	city: 'Jerez de la Frontera',
	postalCode: '11405',
	region: 'Cádiz',
	country: 'ES',
	phone: '956 31 03 44',
	phoneHref: 'tel:+34956310344',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.6943074%2C-6.1276658&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6943074, lng: -6.1276658 },
	featureId: '0xd0dc6c13383693f:0x273542e35e2d1c0b',
	placeId: 'ChIJP2mDM8HGDQ0RCxwtXuNCNSc',
	rating: 4.6,
	reviewCount: 242,
	hours: [
		{ days: 'Lunes', hours: '13:00 – 16:00' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles a domingo · mediodía', hours: '13:00 – 16:00' },
		{ days: 'Miércoles a domingo · noche', hours: '20:30 – 23:30' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google: lunes solo mediodía, martes cerrado y de miércoles a domingo, mediodía y noche. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday'], opens: '13:00', closes: '16:00' },
		{
			days: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '13:00',
			closes: '16:00',
		},
		{
			days: ['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '20:30',
			closes: '23:30',
		},
	],
	categories: ['Restaurante filipino', 'Restaurante asiático', 'Restaurante chino'],
	siteUrl: 'https://restaurante-mar-ali.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Mar Ali',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La cocina', href: '#cocina' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Filipina y asiática',
		text: 'Cocina filipina, china y asiática en el centro de Jerez.',
	},
	{
		icon: 'ri-scales-3-line',
		title: 'Raciones generosas',
		text: '«Raciones muy generosas», una de las cosas que más repiten sus clientes.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Al gusto de picante',
		text: 'Se puede pedir sin picante: en la cocina lo ajustan a lo que aguantes.',
	},
	{
		icon: 'ri-calendar-close-line',
		title: 'Martes cerrado',
		text: 'De miércoles a domingo, mediodía y noche; el lunes solo mediodía.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Filipina y china' },
	{ label: 'Valoración', value: '4,6 ★' },
	{ label: 'Reseñas', value: '242' },
	{ label: 'Martes', value: 'Cerrado' },
];

export const PLATOS = [
	{
		icon: 'ri-bowl-line',
		title: 'Sisig de pollo',
		text: 'Uno de los platos filipinos que piden sus clientes, junto al arroz con atún.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Arroz con atún',
		text: 'Arroz salteado con atún, de los más nombrados en las reseñas de Google.',
	},
	{
		icon: 'ri-takeaway-line',
		title: 'Tallarines',
		text: 'Tallarines de la casa, también en versión picante si te gusta el punto.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Ternera picante',
		text: 'Ternera con el toque de picante de la casa; se puede pedir suave.',
	},
	{
		icon: 'ri-knife-line',
		title: 'Pato',
		text: 'Pato asado, uno de los clásicos de la cocina china que sirven aquí.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Arroz pollo curry',
		text: 'Arroz con pollo y curry, del repertorio asiático de la carta.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'En Jerez de la Frontera' },
	{ icon: 'ri-leaf-line', title: 'Sin picante a petición' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		text: 'Comida sin ningún picante y raciones muy generosas (todo buenísimo).',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Tallarines picantes, arroz pollo curry, pato.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Pedimos el arroz con atún, la ternera picante y el sisig de pollo.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Mar Ali?',
		a: 'En la calle Comandante Paz Varela, 1, 11405 Jerez de la Frontera (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'El lunes abre solo de 13:00 a 16:00; de miércoles a domingo, de 13:00 a 16:00 y de 20:30 a 23:30. Los martes cierra.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 956 31 03 44 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Qué tipo de comida sirven?',
		a: 'Su ficha lo clasifica como restaurante filipino, asiático y chino. Entre lo que más se repite en las reseñas están el sisig de pollo, el arroz con atún, los tallarines, la ternera picante, el pato y el arroz pollo curry.',
	},
	{
		q: '¿Se puede pedir sin picante?',
		a: 'Sí. Sus clientes destacan que la comida se puede pedir sin picante y que en la cocina lo ajustan. Indícalo al pedir.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas y asientos adaptados.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Restaurante Mar Ali en Jerez de la Frontera' },
	{ src: IMAGES.fotoCuadrada2, alt: 'Plato de Mar Ali' },
	{ src: IMAGES.fotoCuadrada3, alt: 'Mesa del restaurante Mar Ali' },
	{ src: IMAGES.fotoVertical4, alt: 'Interior de Mar Ali' },
	{ src: IMAGES.fotoVertical5, alt: 'Comedor de Mar Ali' },
	{ src: IMAGES.fotoApaisada6, alt: 'Cocina de Mar Ali' },
	{ src: IMAGES.fotoApaisada7, alt: 'Ambiente en el restaurante' },
	{ src: IMAGES.fotoCuadrada8, alt: 'Detalle de un plato de Mar Ali' },
	{ src: IMAGES.fotoApaisada9, alt: 'Restaurante Mar Ali por dentro' },
	{ src: IMAGES.fotoVertical10, alt: 'Mar Ali, Jerez de la Frontera' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34956310344',
	priceRange: '€€',
	servesCuisine: ['Filipina', 'China', 'Asiática'],
	areaServed: [{ '@type': 'City', name: BUSINESS.city }],
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		addressRegion: BUSINESS.region,
		postalCode: BUSINESS.postalCode,
		addressCountry: BUSINESS.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: BUSINESS.geo.lat,
		longitude: BUSINESS.geo.lng,
	},
	hasMap: BUSINESS.googleMaps,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	amenityFeature: [
		{ '@type': 'LocationFeatureSpecification', name: 'Acceso adaptado para sillas de ruedas', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Asientos adaptados', value: true },
	],
};
