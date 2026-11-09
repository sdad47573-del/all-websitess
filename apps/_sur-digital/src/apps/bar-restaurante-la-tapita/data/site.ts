/**
 * Datos de Bar restaurante La Tapita (Sanlúcar de Barrameda).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar restaurante La Tapita,
 *   P.º Jardín Botánico, 10, 11540 Sanlúcar de Barrameda, Cádiz.
 *   Feature 0xd0dde374e05419d:0x51fd20f3f0bdea78.
 * - Dirección, teléfono, horario y valoración: ficha pública de Google (octubre de 2026).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La web no publica carta ni precios porque la ficha no los ofrece: se remite al local.
 */

import fotoPortada from '../assets/fotos/bar-restaurante-la-tapita-apaisada-06.jpg';
import fotoApaisada from '../assets/fotos/bar-restaurante-la-tapita-apaisada-07.jpg';
import fotoInterior from '../assets/fotos/bar-restaurante-la-tapita-vertical-01.jpg';
import fotoBarra from '../assets/fotos/bar-restaurante-la-tapita-vertical-02.jpg';
import fotoMesa from '../assets/fotos/bar-restaurante-la-tapita-vertical-03.jpg';
import fotoDetalle1 from '../assets/fotos/bar-restaurante-la-tapita-vertical-04.jpg';
import fotoDetalle2 from '../assets/fotos/bar-restaurante-la-tapita-vertical-05.jpg';
import fotoDetalle3 from '../assets/fotos/bar-restaurante-la-tapita-vertical-08.jpg';
import fotoDetalle4 from '../assets/fotos/bar-restaurante-la-tapita-vertical-09.jpg';
import logo from '../assets/fotos/bar-restaurante-la-tapita-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada,
	fotoInterior,
	fotoBarra,
	fotoMesa,
	fotoDetalle1,
	fotoDetalle2,
	fotoDetalle3,
	fotoDetalle4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Bar+restaurante+La+Tapita/@36.7681126,-6.3552193,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde374e05419d:0x51fd20f3f0bdea78!8m2!3d36.7681126!4d-6.3552193!16s%2Fg%2F11cmx_bh14?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Bar restaurante La Tapita',
	shortName: 'La Tapita',
	tagline: 'Bar restaurante en Sanlúcar de Barrameda',
	claim: 'Tapas, raciones y barra en Sanlúcar',
	summary:
		'Bar restaurante La Tapita es un local de Sanlúcar de Barrameda, en la provincia de Cádiz. Abre todos los días, desde primera hora de la mañana hasta la noche.',
	street: 'P.º Jardín Botánico, 10',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Cádiz',
	country: 'ES',
	phone: '677 03 13 17',
	phoneHref: 'tel:+34677031317',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7681126%2C-6.3552193&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7681126, lng: -6.3552193 },
	featureId: '0xd0dde374e05419d:0x51fd20f3f0bdea78',
	placeId: 'ChIJnUEFTjfeDQ0ReOq98PMg_VE',
	rating: 4.3,
	reviewCount: 118,
	hours: [
		{ days: 'Lunes a sábado', hours: '7:30 – 23:00' },
		{ days: 'Domingo', hours: '8:00 – 23:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google. Puede cambiar en festivos; conviene confirmar por teléfono.',
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], opens: '07:30', closes: '23:00' },
		{ days: ['Sunday'], opens: '08:00', closes: '23:00' },
	],
	categories: ['Bar restaurante', 'Tapas'],
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-la-tapita',
};

export const LEGAL = {
	razonSocial: 'Bar restaurante La Tapita',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La barra', href: '#barra' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Carta y precios', href: '/bar-restaurante-la-tapita/carta' },
	{ label: 'Aviso legal y privacidad', href: '/bar-restaurante-la-tapita/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-time-line',
		title: 'Todos los días',
		text: 'De lunes a sábado de 7:30 a 23:00 y los domingos desde las 8:00.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Desde el desayuno',
		text: 'Abre a primera hora: café, desayuno y después tapas y raciones.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Acceso adaptado',
		text: 'Entrada, asientos y aseo accesibles según su ficha de Google.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,3 en Google',
		text: '118 reseñas en la ficha pública del local.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Bar restaurante',
		text: 'Barra y mesas para tapear o comer con calma, a cualquier hora del día.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Tapas y raciones',
		text: 'Lo que más se repite en sus reseñas: boquerones, ensaladilla y flamenquín.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Arroces',
		text: 'Los clientes destacan el arroz en sus opiniones de Google.',
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Paseo Jardín Botánico',
		text: 'En el número 10, una zona tranquila de Sanlúcar de Barrameda.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Teléfono directo',
		text: 'Para reservar o preguntar por el menú del día, llama al 677 03 13 17.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Local accesible',
		text: 'Acceso, asientos y aseo adaptados para sillas de ruedas.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha actualizada',
		text: 'Horario y datos públicos en Google Maps, sin intermediarios.',
	},
];

export const REVIEWS = [
	{
		text: 'Boquerones, ensaladilla y flamenquín.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Impresionante, ahora abren los domingos y hacen un arroz espectacular.',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buenas tapas y económico.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar restaurante La Tapita?',
		a: 'En el Paseo Jardín Botánico, 10, 11540 Sanlúcar de Barrameda (Cádiz). Puedes abrir la ruta directamente en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a sábado abre de 7:30 a 23:00 y los domingos de 8:00 a 23:00, según su ficha de Google. En festivos conviene llamar antes.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'La web no gestiona reservas. Llama al 677 03 13 17 o consúltalo en la ficha de Google del local.',
	},
	{
		q: '¿Hay carta y precios publicados?',
		a: 'No. La carta y los precios se consultan en el local o por teléfono; esta web no publica importes que no estén confirmados.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, asientos y aseo adaptados para sillas de ruedas.',
	},
];

export const FEATURES = [
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
	{ icon: 'ri-wheelchair-line', label: 'Acceso adaptado' },
	{ icon: 'ri-time-line', label: 'Abierto todos los días' },
];

export const GALLERY = [
	{ src: IMAGES.fotoPortada, alt: 'Bar restaurante La Tapita en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Bar restaurante La Tapita' },
	{ src: IMAGES.fotoBarra, alt: 'La barra de La Tapita' },
	{ src: IMAGES.fotoMesa, alt: 'Mesa preparada en La Tapita' },
	{ src: IMAGES.fotoApaisada, alt: 'Ambiente en Bar restaurante La Tapita' },
	{ src: IMAGES.fotoDetalle1, alt: 'Detalle del local de La Tapita' },
	{ src: IMAGES.fotoDetalle2, alt: 'Rincón de Bar restaurante La Tapita' },
	{ src: IMAGES.fotoDetalle3, alt: 'La Tapita, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoDetalle4, alt: 'Bar restaurante La Tapita por dentro' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34677031317',
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
		{ '@type': 'LocationFeatureSpecification', name: 'Aseo adaptado', value: true },
	],
};
