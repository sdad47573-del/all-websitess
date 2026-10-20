/**
 * Datos de Restaurante Dos Caridad (Cjón. Alto de las Cuevas, 2 · 11540 Sanlúcar de Barrameda).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Dos Caridad.
 *   Feature 0xd0dde20191c751b:0xa76c79f92682da3d.
 * - Dirección, teléfono, valoración, horario, accesibilidad y reseñas: ficha pública de
 *   Google (octubre de 2026).
 * - Especialidades: descripción del propio titular en su ficha de Google.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publica carta ni precios: la ficha no los ofrece.
 */

import fotoPortada from '../assets/fotos/restaurante-dos-caridad-vertical-01.jpg';
import fotoInterior from '../assets/fotos/restaurante-dos-caridad-vertical-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-dos-caridad-vertical-03.jpg';
import fotoApaisada from '../assets/fotos/restaurante-dos-caridad-apaisada-04.jpg';
import fotoMesa from '../assets/fotos/restaurante-dos-caridad-vertical-05.jpg';
import fotoDetalle1 from '../assets/fotos/restaurante-dos-caridad-apaisada-06.jpg';
import fotoDetalle2 from '../assets/fotos/restaurante-dos-caridad-apaisada-07.jpg';
import fotoDetalle3 from '../assets/fotos/restaurante-dos-caridad-vertical-08.jpg';
import fotoDetalle4 from '../assets/fotos/restaurante-dos-caridad-vertical-09.jpg';
import fotoAmplia from '../assets/fotos/restaurante-dos-caridad-apaisada-10.jpg';
import logo from '../assets/fotos/restaurante-dos-caridad-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoInterior,
	fotoBarra,
	fotoApaisada,
	fotoMesa,
	fotoDetalle1,
	fotoDetalle2,
	fotoDetalle3,
	fotoDetalle4,
	fotoAmplia,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Dos+Caridad/@36.7839347,-6.344297,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde20191c751b:0xa76c79f92682da3d!8m2!3d36.7839347!4d-6.344297!16s%2Fg%2F11c75pvp0p?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante Dos Caridad',
	shortName: 'Dos Caridad',
	tagline: 'Frituras, guisos y pescados en Sanlúcar de Barrameda',
	claim: 'La fritura de siempre, el retinto y la cocina propia',
	summary:
		'Restaurante en Sanlúcar de Barrameda con frituras, guisos de pescado y pescados de piedra a la pancha, además de retinto D.O. y elaboraciones propias como la hamburguesa de corvina.',
	street: 'Cjón. Alto de las Cuevas, 2',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Cádiz',
	country: 'ES',
	phone: '651 56 08 35',
	phoneHref: 'tel:+34651560835',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7839347%2C-6.344297&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7839347, lng: -6.344297 },
	featureId: '0xd0dde20191c751b:0xa76c79f92682da3d',
	placeId: 'ChIJG3UcGSDeDQ0RPdqCJvl5bKc',
	rating: 3.9,
	reviewCount: 196,
	hours: [
		{ days: 'Martes a sábado', hours: '11:30 – 16:30 · 19:30 – 23:30' },
		{ days: 'Domingo', hours: '11:30 – 16:30 · 20:00 – 24:00' },
		{ days: 'Lunes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google. Los lunes cierra. En festivos puede cambiar; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '11:30', closes: '16:30' },
		{ days: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '19:30', closes: '23:30' },
		{ days: ['Sunday'], opens: '11:30', closes: '16:30' },
		{ days: ['Sunday'], opens: '20:00', closes: '24:00' },
	],
	categories: ['Restaurante'],
	siteUrl: 'https://restaurante-dos-caridad.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante Dos Caridad',
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

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-oil-line',
		title: 'Fritura en su punto',
		text: 'Pescado frito, langostinos y rebozados, recién hechos.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'A la pancha',
		text: 'Pescados de piedra y guisos de pescado de la zona.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Retinto y bellota',
		text: 'Carne de retinto D.O. y presa de bellota en la carta.',
	},
	{
		icon: 'ri-calendar-close-line',
		title: 'Lunes cerrado',
		text: 'De martes a domingo, mediodía y noche.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-oil-line',
		title: 'Frituras',
		text: 'Pescado frito, langostinos tigres y rebozados en su punto, como destaca la clientela.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Guisos y pescados',
		text: 'Guisos de pescado y pescados de piedra a la pancha, cocina de la zona.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Carnes',
		text: 'Carne de retinto D.O. y presa de bellota, añadidas a la oferta de la casa.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Elaboración propia',
		text: 'Hamburguesa de corvina y langostinos, albóndigas de choco y gambas hechas en casa.',
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sanlúcar',
		text: 'En el Callejón Alto de las Cuevas, 2, en el barrio alto.',
	},
	{
		icon: 'ri-oil-line',
		title: 'Cocina propia',
		text: 'Frituras, guisos y elaboraciones caseras, sin intermediarios.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Acceso adaptado',
		text: 'Entrada y asientos accesibles para sillas de ruedas.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Trato directo',
		text: 'Sin reservas por internet: se llama al 651 56 08 35.',
	},
];

export const REVIEWS = [
	{
		text: 'Langostinos Tigres exquisitos, buena ensaladilla y pescadito frito en su punto.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Magnifica Fritura y sobre todo una hamburguesa de Corvina extraordinaria...',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Excelente la calidad, el rebozado y la fritura del pescado.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Dos Caridad?',
		a: 'En el Callejón Alto de las Cuevas, 2, 11540 Sanlúcar de Barrameda (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De martes a sábado abre de 11:30 a 16:30 y de 19:30 a 23:30. El domingo, de 11:30 a 16:30 y de 20:00 a 24:00. Los lunes cierra.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 651 56 08 35 o consúltalo en la ficha de Google del restaurante.',
	},
	{
		q: '¿Qué especialidades tiene?',
		a: 'El local destaca sus frituras, los guisos de pescado, los pescados de piedra a la pancha, la carne de retinto D.O. y la presa de bellota, además de la hamburguesa de corvina y langostinos y las albóndigas de choco y gambas.',
	},
	{
		q: '¿Publicáis la carta y los precios?',
		a: 'No. La carta, los precios y el menú del día se consultan en el restaurante o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso y asientos adaptados para sillas de ruedas.',
	},
];

export const FEATURES = [
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
	{ icon: 'ri-wheelchair-line', label: 'Acceso adaptado' },
	{ icon: 'ri-oil-line', label: 'Frituras y cocina propia' },
];

export const GALLERY = [
	{ src: IMAGES.fotoAmplia, alt: 'Restaurante Dos Caridad en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoPortada, alt: 'Fachada de Restaurante Dos Caridad' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Dos Caridad' },
	{ src: IMAGES.fotoBarra, alt: 'La barra de Restaurante Dos Caridad' },
	{ src: IMAGES.fotoMesa, alt: 'Mesa de Dos Caridad' },
	{ src: IMAGES.fotoApaisada, alt: 'Comedor de Restaurante Dos Caridad' },
	{ src: IMAGES.fotoDetalle1, alt: 'Detalle del local de Dos Caridad' },
	{ src: IMAGES.fotoDetalle2, alt: 'Rincón de Restaurante Dos Caridad' },
	{ src: IMAGES.fotoDetalle3, alt: 'Dos Caridad, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoDetalle4, alt: 'Ambiente en Restaurante Dos Caridad' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34651560835',
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
