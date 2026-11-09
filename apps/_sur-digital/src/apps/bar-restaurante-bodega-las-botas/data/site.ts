/**
 * Datos de Bar-Restaurante Bodega «Las Botas»
 * (C. Santo Domingo, 13 · 11402 Jerez de la Frontera, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar-Restaurante Bodega «Las Botas».
 *   Feature 0xd0dc6bf8531da7b:0x576bf4af1235ef85.
 * - Dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Platos: reseñas publicadas en la ficha (tortillas, papas con cabrales,
 *   queso curado, raciones y tapeo).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no ha publicado descripción ni carta: no se inventan textos ni precios.
 */

import fotoCuadrada1 from '../assets/fotos/bar-restaurante-bodega-las-botas-cuadrada-01.jpg';
import fotoApaisada2 from '../assets/fotos/bar-restaurante-bodega-las-botas-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/bar-restaurante-bodega-las-botas-apaisada-03.jpg';
import fotoVertical4 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/bar-restaurante-bodega-las-botas-vertical-10.jpg';
import logo from '../assets/fotos/bar-restaurante-bodega-las-botas-logo.svg';

export const IMAGES = {
	fotoCuadrada1,
	fotoApaisada2,
	fotoApaisada3,
	fotoVertical4,
	fotoVertical5,
	fotoVertical6,
	fotoVertical7,
	fotoVertical8,
	fotoVertical9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Bar-Restaurante+Bodega+%22Las+Botas%22/@36.6912038,-6.1320414,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc6bf8531da7b:0x576bf4af1235ef85!8m2!3d36.6912038!4d-6.1320414!16s%2Fg%2F1hhxshmqc?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Bar-Restaurante Bodega «Las Botas»',
	shortName: 'Las Botas',
	tagline: 'Bodega y tapeo en Jerez de la Frontera',
	claim: 'Tapeo, raciones y bodega en Santo Domingo',
	summary:
		'Bar restaurante y bodega de tapas en la calle Santo Domingo de Jerez de la Frontera. Tapeo, raciones, tortillas y papas con cabrales, con trato cercano y ambiente de bodega.',
	street: 'C. Santo Domingo, 13',
	district: 'Jerez de la Frontera',
	borough: 'Jerez de la Frontera',
	city: 'Jerez de la Frontera',
	postalCode: '11402',
	region: 'Cádiz',
	country: 'ES',
	phone: '665 21 63 42',
	phoneHref: 'tel:+34665216342',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.6912038%2C-6.1320414&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6912038, lng: -6.1320414 },
	featureId: '0xd0dc6bf8531da7b:0x576bf4af1235ef85',
	placeId: 'ChIJe9oxhb_GDQ0Rhe81Eq_0a1c',
	rating: 4.3,
	reviewCount: 411,
	hours: [
		{ days: 'Lunes a jueves · mediodía', hours: '12:30 – 16:30' },
		{ days: 'Lunes a jueves · noche', hours: '20:00 – 23:30' },
		{ days: 'Viernes', hours: '13:00 – 23:30' },
		{ days: 'Sábado', hours: '12:00 – 23:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google. El viernes y el sábado abre en horario continuo y el domingo cierra. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '12:30', closes: '16:30' },
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '20:00', closes: '23:30' },
		{ days: ['Friday'], opens: '13:00', closes: '23:30' },
		{ days: ['Saturday'], opens: '12:00', closes: '23:30' },
	],
	categories: ['Restaurante andaluz', 'Bar', 'Bar de tapas'],
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-bodega-las-botas',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Bar-Restaurante Bodega «Las Botas»',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La barra', href: '#cocina' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Tapeo y raciones',
		text: 'Bar de tapas y restaurante andaluz: para picar o comer sentado.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Tortillas y cabrales',
		text: 'Sus tortillas y las papas con cabrales son lo más recomendado.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Bodega en Santo Domingo',
		text: 'Ambiente de bodega en pleno centro de Jerez de la Frontera.',
	},
	{
		icon: 'ri-calendar-close-line',
		title: 'Domingo cerrado',
		text: 'De lunes a sábado, mediodía y noche; viernes y sábado en continuo.',
	},
];

export const CASA_FACTS = [
	{ label: 'Tipo', value: 'Bodega y tapas' },
	{ label: 'Valoración', value: '4,3 ★' },
	{ label: 'Reseñas', value: '411' },
	{ label: 'Domingo', value: 'Cerrado' },
];

export const PLATOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Tortillas',
		text: 'Una de las cosas que más recomiendan sus clientes en las reseñas.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Papas con cabrales',
		text: 'Junto a las tortillas, lo más nombrado de la barra de Las Botas.',
	},
	{
		icon: 'ri-archive-line',
		title: 'Queso curado',
		text: 'Buen queso curado para empezar, según las opiniones de Google.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Raciones',
		text: 'Raciones de bar de siempre, para compartir al centro de la mesa.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Tapeo',
		text: 'Bar de tapas: la barra como punto de partida de la tarde.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Buen trato',
		text: '«Buena atención por parte de los camareros», destacan sus clientes.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'C. Santo Domingo, 13' },
	{ icon: 'ri-restaurant-2-line', title: 'Tapas y raciones' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		text: 'Buen sitio para tapear y comer, buena atención por parte de los camareros.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Recomendable sus tortillas, papas con cabrales y un buen queso curado.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Buen lugar para comer raciones y tapeo.',
		rating: 4,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bodega Las Botas?',
		a: 'En la calle Santo Domingo, 13, 11402 Jerez de la Frontera (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 12:30 a 16:30 y de 20:00 a 23:30; el viernes, de 13:00 a 23:30; el sábado, de 12:00 a 23:30. El domingo cierra.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 665 21 63 42 o consúltalo en la ficha de Google del bar.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es bar de tapas y restaurante andaluz. Entre lo más recomendado en las reseñas están las tortillas, las papas con cabrales y el queso curado, además de raciones para compartir.',
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
	{ src: IMAGES.fotoCuadrada1, alt: 'Bodega Las Botas en Jerez de la Frontera' },
	{ src: IMAGES.fotoApaisada2, alt: 'Barra de Las Botas' },
	{ src: IMAGES.fotoApaisada3, alt: 'Mesa de la bodega' },
	{ src: IMAGES.fotoVertical4, alt: 'Interior de Las Botas' },
	{ src: IMAGES.fotoVertical5, alt: 'Comedor de la bodega' },
	{ src: IMAGES.fotoVertical6, alt: 'Rincón de Las Botas' },
	{ src: IMAGES.fotoVertical7, alt: 'Ambiente en la bodega' },
	{ src: IMAGES.fotoVertical8, alt: 'Detalle del local' },
	{ src: IMAGES.fotoVertical9, alt: 'Las Botas por dentro' },
	{ src: IMAGES.fotoVertical10, alt: 'Bodega Las Botas, Jerez' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34665216342',
	priceRange: '€€',
	servesCuisine: ['Cocina andaluza', 'Tapas'],
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
