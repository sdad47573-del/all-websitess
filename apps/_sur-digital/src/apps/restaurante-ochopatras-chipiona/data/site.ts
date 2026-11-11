/**
 * Datos de Restaurante OchoPatas Chipiona (P.º Costa de la Luz, 71 · 11550 Chipiona, Cádiz).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante OchoPatas Chipiona.
 *   Feature 0xd0e7542509f6cab:0x932511edb7d5adf3.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Descripción de la casa: «Restaurante, pulpería, tapería, freiduría y marisquería;
 *   comida para llevar a la playa, arroces y paellas, carnes guisadas y a la parrilla,
 *   guisos caseros, bocatería, empanadillas y sándwiches», publicada por el titular.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publica carta ni precios: la ficha no los ofrece.
 */

import fotoPortada from '../assets/fotos/restaurante-ochopatras-chipiona-vista-1-01.jpg';
import fotoApaisada2 from '../assets/fotos/restaurante-ochopatras-chipiona-apaisada-02.jpg';
import fotoVertical3 from '../assets/fotos/restaurante-ochopatras-chipiona-vertical-03.jpg';
import fotoApaisada4 from '../assets/fotos/restaurante-ochopatras-chipiona-apaisada-04.jpg';
import fotoApaisada5 from '../assets/fotos/restaurante-ochopatras-chipiona-apaisada-05.jpg';
import fotoVertical6 from '../assets/fotos/restaurante-ochopatras-chipiona-vertical-06.jpg';
import fotoApaisada7 from '../assets/fotos/restaurante-ochopatras-chipiona-apaisada-07.jpg';
import fotoVertical8 from '../assets/fotos/restaurante-ochopatras-chipiona-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/restaurante-ochopatras-chipiona-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/restaurante-ochopatras-chipiona-vertical-10.jpg';
import logo from '../assets/fotos/restaurante-ochopatras-chipiona-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada2,
	fotoVertical3,
	fotoApaisada4,
	fotoApaisada5,
	fotoVertical6,
	fotoApaisada7,
	fotoVertical8,
	fotoVertical9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+OchoPatas+Chipiona/@36.7315857,-6.4394442,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e7542509f6cab:0x932511edb7d5adf3!8m2!3d36.7315857!4d-6.4394442!16s%2Fg%2F11hzjgwtxy?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante OchoPatas Chipiona',
	shortName: 'OchoPatas',
	tagline: 'Pulpería, tapería y marisquería en Chipiona',
	claim: 'Pulpo a la brasa, arroces y fritura junto al Santuario de Regla',
	summary:
		'Restaurante, pulpería, tapería, freiduría y marisquería en el Paseo Costa de la Luz de Chipiona. Arroces y paellas, carnes guisadas y a la parrilla, guisos caseros, bocatería y comida para llevar a la playa.',
	street: 'P.º Costa de la Luz, 71',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Cádiz',
	country: 'ES',
	landmark: 'Cerca del Santuario de Regla',
	phone: '644 89 23 63',
	phoneHref: 'tel:+34644892363',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7315857%2C-6.4394442&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7315857, lng: -6.4394442 },
	featureId: '0xd0e7542509f6cab:0x932511edb7d5adf3',
	placeId: 'ChIJq2yfUEJ1Dg0R863Vt-0RJZM',
	rating: 4,
	reviewCount: 276,
	hours: [
		{ days: 'Todos los días · mediodía', hours: '12:00 – 18:00' },
		{ days: 'Todos los días · noche', hours: '20:30 – 24:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google: abre todos los días, de 12:00 a 18:00 y de 20:30 a 24:00. En festivos o temporada alta puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '12:00',
			closes: '18:00',
		},
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '20:30',
			closes: '24:00',
		},
	],
	categories: ['Restaurante', 'Pulpería', 'Marisquería'],
	siteUrl: 'https://www.sur-digital.com/restaurante-ochopatras-chipiona',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Restaurante OchoPatas Chipiona',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-anchor-line',
		title: 'Pulpería y marisquería',
		text: 'El pulpo y el marisco son la casa: pulpo a la brasa y mejillones entre lo más pedido.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Arroces y paellas',
		text: 'Arroces y paellas, guisos caseros y carnes a la parrilla, según su ficha.',
	},
	{
		icon: 'ri-shopping-bag-3-line',
		title: 'Para llevar a la playa',
		text: 'Comida para llevar, con el paseo marítimo y la playa a un paso.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Todos los días',
		text: 'Mediodía de 12:00 a 18:00 y cena de 20:30 a 24:00, sin día de descanso.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Pulpo y marisco' },
	{ label: 'Valoración', value: '4,0 ★' },
	{ label: 'Reseñas', value: '276' },
	{ label: 'Horario', value: '12:00–24:00' },
];

export const CARTA = [
	{
		icon: 'ri-fire-line',
		title: 'Pulpo a la brasa',
		text: 'El plato que más se repite en las reseñas: «impresionante, buena calidad y buen hacer».',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Arroces y paellas',
		text: 'Arroces y paellas de la casa, con el marisco y el caldo como protagonistas.',
	},
	{
		icon: 'ri-drop-line',
		title: 'Mejillones',
		text: 'Una de las recomendaciones de los clientes: «la salsa es espectacular».',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Freiduría y fritura',
		text: 'Pescado frito y fritura de la costa, para compartir o para llevar a la playa.',
	},
	{
		icon: 'ri-knife-line',
		title: 'Carnes a la parrilla',
		text: 'Carnes guisadas y a la parrilla, además de los guisos caseros del día.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Bocatería y empanadillas',
		text: 'Bocadillos, empanadillas y sándwiches: la parte más informal de la carta.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Junto al Santuario de Regla' },
	{ icon: 'ri-shopping-bag-3-line', title: 'Comida para llevar' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-calendar-check-line', title: 'Abierto todos los días' },
];

export const REVIEWS = [
	{
		text: 'Las raciones buenísimas, la paella extraordinaria pero son lentos sirviendo.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Os recomiendo pedir arroz o los mejillones (la salsa es espectacular).',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Todo muy rico, el pulpo a la brasa impresionante, buena calidad y buen hacer.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante OchoPatas?',
		a: 'En el P.º Costa de la Luz, 71, 11550 Chipiona (Cádiz), cerca del Santuario de Regla. Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días de 12:00 a 18:00 y de 20:30 a 24:00, según su ficha de Google. En festivos o en temporada alta conviene llamar antes.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 644 89 23 63 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Es restaurante, pulpería, tapería, freiduría y marisquería: pulpo a la brasa, arroces y paellas, mejillones, fritura, carnes guisadas y a la parrilla, guisos caseros, bocatería y empanadillas.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. El propio restaurante anuncia comida para llevar a la playa. Llama al 644 89 23 63 para encargarlo.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú del día se consultan en el local o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas, aparcamiento adaptado y aseo accesible.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Restaurante OchoPatas Chipiona' },
	{ src: IMAGES.fotoApaisada2, alt: 'Mesa de OchoPatas Chipiona' },
	{ src: IMAGES.fotoVertical3, alt: 'Interior de OchoPatas' },
	{ src: IMAGES.fotoApaisada4, alt: 'Comedor del restaurante' },
	{ src: IMAGES.fotoApaisada5, alt: 'Plato de OchoPatas' },
	{ src: IMAGES.fotoVertical6, alt: 'Detalle del local' },
	{ src: IMAGES.fotoApaisada7, alt: 'Ambiente en OchoPatas Chipiona' },
	{ src: IMAGES.fotoVertical8, alt: 'Rincón del restaurante' },
	{ src: IMAGES.fotoVertical9, alt: 'OchoPatas por dentro' },
	{ src: IMAGES.fotoVertical10, alt: 'Restaurante OchoPatas en Chipiona' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34644892363',
	priceRange: '€€',
	servesCuisine: ['Pulpo y marisco', 'Arroces y paellas', 'Cocina andaluza'],
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
		{ '@type': 'LocationFeatureSpecification', name: 'Aparcamiento adaptado', value: true },
		{ '@type': 'LocationFeatureSpecification', name: 'Aseo accesible', value: true },
	],
};
