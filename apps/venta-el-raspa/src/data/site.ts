/**
 * Datos de Venta El Raspa (C. Central, 50 · 11549 La Algaida, Sanlúcar de Barrameda, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: VENTA EL RASPA.
 *   Feature 0xd0de6ce100d654d:0xff95be87b575784.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Platos y carácter de la casa: reseñas publicadas en la ficha.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * El titular no ha publicado descripción ni carta: no se inventan textos ni precios.
 */

import fotoPortada from '../assets/fotos/venta-el-raspa-apaisada-01.jpg';
import fotoVertical2 from '../assets/fotos/venta-el-raspa-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/venta-el-raspa-vertical-03.jpg';
import fotoApaisada4 from '../assets/fotos/venta-el-raspa-apaisada-04.jpg';
import fotoApaisada5 from '../assets/fotos/venta-el-raspa-apaisada-05.jpg';
import fotoApaisada6 from '../assets/fotos/venta-el-raspa-apaisada-06.jpg';
import fotoVertical7 from '../assets/fotos/venta-el-raspa-vertical-07.jpg';
import fotoVertical8 from '../assets/fotos/venta-el-raspa-vertical-08.jpg';
import fotoApaisada9 from '../assets/fotos/venta-el-raspa-apaisada-09.jpg';
import fotoApaisada10 from '../assets/fotos/venta-el-raspa-apaisada-10.jpg';
import logo from '../assets/fotos/venta-el-raspa-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoVertical2,
	fotoVertical3,
	fotoApaisada4,
	fotoApaisada5,
	fotoApaisada6,
	fotoVertical7,
	fotoVertical8,
	fotoApaisada9,
	fotoApaisada10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/VENTA+EL+RASPA/@36.8409659,-6.3160304,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de6ce100d654d:0xff95be87b575784!8m2!3d36.8409659!4d-6.3160304!16s%2Fg%2F11bzt8xnp2?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Venta El Raspa',
	shortName: 'El Raspa',
	tagline: 'Venta y restaurante en La Algaida',
	claim: 'Cocina de siempre, raciones generosas y cerveza fría',
	summary:
		'Venta y restaurante en La Algaida, Sanlúcar de Barrameda. Cocina de siempre, producto de la zona, raciones generosas y cerveza bien fría, todos los días de 10:00 a 24:00.',
	street: 'C. Central, 50',
	district: 'La Algaida',
	borough: 'La Algaida',
	city: 'La Algaida',
	municipality: 'Sanlúcar de Barrameda',
	postalCode: '11549',
	region: 'Cádiz',
	country: 'ES',
	phone: '956 38 70 42',
	phoneHref: 'tel:+34956387042',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.8409659%2C-6.3160304&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.8409659, lng: -6.3160304 },
	featureId: '0xd0de6ce100d654d:0xff95be87b575784',
	placeId: 'ChIJTWUNEM7mDQ0RhFdXe-hb-Q8',
	rating: 4,
	reviewCount: 756,
	hours: [{ days: 'Lunes a domingo', hours: '10:00 – 24:00' }],
	hoursNote:
		'Horario publicado en la ficha de Google: abre todos los días de 10:00 a 24:00. En festivos o en verano puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '10:00',
			closes: '24:00',
		},
	],
	categories: ['Restaurante', 'Venta'],
	siteUrl: 'https://venta-el-raspa.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Venta El Raspa',
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
		icon: 'ri-sun-line',
		title: 'Todos los días',
		text: 'De 10:00 a 24:00, sin día de descanso, según su ficha de Google.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Raciones generosas',
		text: '«Buen producto, raciones generosas y buen ambiente», dicen sus clientes.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Camarones al ajillo',
		text: 'Con huevo frito, uno de los platos que más se repite en las reseñas.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Cerveza bien fría',
		text: '«Buena y variada cerveza y fresquita», otra de las cosas que destacan.',
	},
];

export const CASA_FACTS = [
	{ label: 'Tipo', value: 'Venta' },
	{ label: 'Valoración', value: '4,0 ★' },
	{ label: 'Reseñas', value: '756' },
	{ label: 'Horario', value: '10:00–24:00' },
];

export const PLATOS = [
	{
		icon: 'ri-fire-line',
		title: 'Camarones al ajillo',
		text: 'Con huevo frito, el plato que más nombran sus clientes en las reseñas.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Pato en salsa',
		text: 'Otra de las recetas que repiten quienes vienen a la venta.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Raciones para compartir',
		text: '«Raciones generosas», el detalle que más se repite en Google.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Producto de la zona',
		text: '«Buen producto», en una carta de cocina de siempre y comida variada.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Cocina de siempre',
		text: 'Comida casera y variada, sin artificios, para comer sin prisa.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Cerveza y barra',
		text: 'Cerveza variada y bien fría, buena compañía para una ración al mediodía.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'En La Algaida' },
	{ icon: 'ri-sun-line', title: 'Abierto todos los días' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		text: 'Comida muy rica, buena y variada cerveza y fresquita.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buen producto, raciones generosas y buen ambiente.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Muy buenos los camarones al ajillo con huevo frito y el pato en salsa.',
		rating: 4,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Venta El Raspa?',
		a: 'En la calle Central, 50, 11549 La Algaida (Sanlúcar de Barrameda, Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 10:00 a 24:00, según su ficha de Google. En festivos o en temporada alta conviene llamar antes.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 956 38 70 42 o consúltalo en la ficha de Google de la venta.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina de siempre y raciones para compartir. Sus clientes destacan los camarones al ajillo con huevo frito, el pato en salsa y el tamaño de las raciones.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas, asientos adaptados y aseo accesible.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Venta El Raspa en La Algaida' },
	{ src: IMAGES.fotoVertical2, alt: 'Interior de Venta El Raspa' },
	{ src: IMAGES.fotoVertical3, alt: 'Comedor de la venta' },
	{ src: IMAGES.fotoApaisada4, alt: 'Mesa de Venta El Raspa' },
	{ src: IMAGES.fotoApaisada5, alt: 'Raciones de El Raspa' },
	{ src: IMAGES.fotoApaisada6, alt: 'Ambiente en la venta' },
	{ src: IMAGES.fotoVertical7, alt: 'Detalle del local' },
	{ src: IMAGES.fotoVertical8, alt: 'Rincón de Venta El Raspa' },
	{ src: IMAGES.fotoApaisada9, alt: 'La venta por dentro' },
	{ src: IMAGES.fotoApaisada10, alt: 'Venta El Raspa, La Algaida' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34956387042',
	priceRange: '€€',
	servesCuisine: ['Cocina andaluza', 'Cocina casera'],
	areaServed: [{ '@type': 'City', name: BUSINESS.municipality }],
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
		{ '@type': 'LocationFeatureSpecification', name: 'Aseo accesible', value: true },
	],
};
