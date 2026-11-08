/**
 * Datos de La Bodega de Jesús — C. de Rodrigo Díaz de Vivar, 4
 * (50006 Zaragoza).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: La Bodega de Jesús,
 *   41.6366099,-0.8920359, feature 0xd5915beaed3269d:0xd343d4268b09ac11
 * - Ficha de Google (endpoint /maps/preview/place): C. de Rodrigo Díaz
 *   de Vivar 4, 50006 Zaragoza; taberna; 4,8 (359 reseñas);
 *   tel 633 42 48 19; Dom 12:00–16:30, Lun-Mar cerrado,
 *   Mié-Sáb 12:30–16:30 y 20:00–23:00.
 *
 * Lo que la web NO inventa:
 * - Sin carta ni precios publicados fuera de la ficha: no se publican
 *   platos ni importes concretos.
 */

import fotoPortada from '../assets/fotos/la-bodega-de-jesus-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/la-bodega-de-jesus-vertical-02.jpg';
import fotoBarra from '../assets/fotos/la-bodega-de-jesus-vertical-03.jpg';
import fotoSala from '../assets/fotos/la-bodega-de-jesus-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/la-bodega-de-jesus-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/la-bodega-de-jesus-panoramica-06.jpg';
import fotoExtra3 from '../assets/fotos/la-bodega-de-jesus-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/la-bodega-de-jesus-vertical-08.jpg';
import logo from '../assets/fotos/la-bodega-de-jesus-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoBarra,
	fotoCalle: fotoSala,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/La+Bodega+de+Jes%C3%BAs/data=!4m7!3m6!1s0xd5915beaed3269d:0xd343d4268b09ac11!8m2!3d41.6366099!4d-0.8920359!16s%2Fg%2F11lfclwg83!19sChIJnSbTrr4VWQ0REawJiybUQ9M?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'La Bodega de Jesús',
	shortName: 'Bodega de Jesús',
	tagline: 'Taberna en Zaragoza',
	claim: 'Tu taberna en Rodrigo Díaz de Vivar 4',
	summary:
		'La Bodega de Jesús es una taberna en C. de Rodrigo Díaz de Vivar 4 (50006 Zaragoza): tapas, raciones y buen vino. Con un 4,8 en Google (359 reseñas). Llama al 633 42 48 19 para reservar.',
	street: 'C. de Rodrigo Díaz de Vivar, 4',
	district: 'Centro',
	borough: 'Zaragoza',
	city: 'Zaragoza',
	postalCode: '50006',
	region: 'Aragón',
	country: 'ES',
	phoneDisplay: '633 42 48 19',
	phoneHref: 'tel:+34633424819',
	whatsapp:
		'https://wa.me/34633424819?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20La%20Bodega%20de%20Jes%C3%BAs.%20%C2%BFMe%20confirm%C3%A1is%20mesa%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6366099%2C-0.8920359&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6366099, lng: -0.8920359 },
	featureId: '0xd5915beaed3269d:0xd343d4268b09ac11',
	priceRange: '€€',
	rating: 4.8,
	reviewCount: 359,
	categories: [
		'Taberna',
		'Tapas',
		'Raciones',
		'Vino',
	],
	hours: [
		{ days: 'Miércoles a sábado', hours: '12:30–16:30 y 20:00–23:00' },
		{ days: 'Domingo', hours: '12:00–16:30' },
		{ days: 'Lunes y martes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del local. Confirma llamando al 633 42 48 19, porque puede variar en festivos.',
	siteUrl: 'https://la-bodega-de-jesus.vercel.app',
};

export const LEGAL = {
	razonSocial: 'La Bodega de Jesús',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El local', href: '#salon' },
	{ label: 'La casa', href: '#servicios' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'La casa', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-goblet-line',
		title: 'Taberna de barrio',
		text: 'Taberna en Rodrigo Díaz de Vivar 4, Zaragoza.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Rodrigo Díaz 4',
		text: 'C. de Rodrigo Díaz de Vivar 4 · 50006 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 con 359 reseñas',
		text: 'Valoración de 4,8 sobre 5 en Google con 359 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Reserva mesa en el 633 42 48 19.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-goblet-line',
		title: 'Tapas',
		text: 'Tapas de la casa para compartir en la barra o en mesa.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Raciones',
		text: 'Raciones generosas, cocina honesta de taberna.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Vino',
		text: 'Buen vino para acompañar: pregunta por la carta.',
	},
	{
		icon: 'ri-beer-line',
		title: 'Cañas y vermut',
		text: 'El vermut del domingo: 12:00–16:30.',
	},
	{
		icon: 'ri-team-line',
		title: 'Para compartir',
		text: 'Planes de mesa larga: ven con hambre y con gente.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva',
		text: 'Se recomienda reservar: llama al 633 42 48 19.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'De la casa',
		items: [
			{ nombre: 'Tapas', precio: 'A consultar' },
			{ nombre: 'Raciones', precio: 'A consultar' },
			{ nombre: 'Vino de la casa', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Momentos',
		items: [
			{ nombre: 'Vermut del domingo', precio: 'A consultar' },
			{ nombre: 'Cena de taberna', precio: 'A consultar' },
			{ nombre: 'Mesa para compartir', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Zaragoza',
		text: 'Rodrigo Díaz de Vivar 4, 50006, trato de barrio.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '359 opiniones con muy buena valoración media.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'Taberna de verdad',
		text: 'Tapas, raciones y vino sin postureo.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva fácil',
		text: 'Llama al 633 42 48 19 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Mediodía y noche',
		text: 'Mié-Sáb doble turno; domingo al mediodía.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirman allí.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Bodega de Jesús?',
		a: 'En C. de Rodrigo Díaz de Vivar 4 (50006 Zaragoza). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 633 42 48 19 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué se come allí?',
		a: 'Es una taberna: tapas, raciones y buen vino. La carta del día se confirma en el local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta online, y esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Miércoles a sábado de 12:30 a 16:30 y de 20:00 a 23:00; domingos de 12:00 a 16:30; lunes y martes cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Abren los domingos?',
		a: 'Sí, los domingos al mediodía de 12:00 a 16:30: hora del vermut. Lunes y martes cierran.',
	},
];

export const FEATURES = [
	{ icon: 'ri-goblet-line', label: 'Taberna' },
	{ icon: 'ri-restaurant-line', label: 'Tapas y raciones' },
	{ icon: 'ri-goblet-line', label: 'Vino' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'La Bodega de Jesús en Zaragoza',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'La Bodega de Jesús en Rodrigo Díaz de Vivar 4',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'La barra de La Bodega de Jesús (Zaragoza)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'El salón de La Bodega de Jesús',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de La Bodega de Jesús',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tapas en La Bodega de Jesús Zaragoza',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Vino en La Bodega de Jesús',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Ambiente de taberna en La Bodega de Jesús',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarOrPub',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Bodega de Jesús Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34633424819',
	currenciesAccepted: 'EUR',
	knowsAbout: BUSINESS.categories,
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
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '12:30',
			closes: '16:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '20:00',
			closes: '23:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '12:00',
			closes: '16:30',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La casa de La Bodega de Jesús',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'BarOrPub', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
