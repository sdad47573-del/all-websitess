/**
 * Datos de Restaurante El Fogarache — C. de Jorge Jordana, 3
 * (Delicias, 50017 Zaragoza).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante El Fogarache,
 *   41.6527309,-0.9049263, feature 0xd5914cb59811ef1:0x2de9f373b1164835
 * - Vive Zaragoza: C. de Jorge Jordana 3, Delicias, 50017 Zaragoza;
 *   4,4 en Google (816 opiniones); Lun-Mié 9:00–17:00;
 *   Jue 9:00–17:00 y 20:30–23:15; Vie 9:00–17:00 y 20:30–24:00;
 *   Sáb 13:00–17:00 y 21:00–24:00; Dom 13:00–17:00;
 *   contacto 665 96 81 57; rango €; familiar; menú infantil.
 * - Guía Repsol/restaurantesenzaragoza: tel fijo 976 09 95 23.
 * - Instagram: especialistas en caracoles y menú diario, reservas 976 099523.
 *
 * Lo que la web NO inventa:
 * - Sin carta ni precios publicados fuera de la ficha: no se publican
 *   platos ni importes concretos.
 */

import fotoPortada from '../assets/fotos/el-fogarache-panoramica-01.jpg';
import fotoCentro from '../assets/fotos/el-fogarache-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/el-fogarache-apaisada-03.jpg';
import fotoSala from '../assets/fotos/el-fogarache-cuadrada-04.jpg';
import fotoExtra1 from '../assets/fotos/el-fogarache-vista-5-05.jpg';
import fotoExtra2 from '../assets/fotos/el-fogarache-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/el-fogarache-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/el-fogarache-vertical-08.jpg';
import logo from '../assets/fotos/el-fogarache-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+El+Fogarache/data=!4m7!3m6!1s0xd5914cb59811ef1:0x2de9f373b1164835!8m2!3d41.6527309!4d-0.9049263!16s%2Fg%2F1tdglld0!19sChIJ8R6BWcsUWQ0RNUgWsXPz6S0?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Restaurante El Fogarache',
	shortName: 'El Fogarache',
	tagline: 'Cocina casera en Delicias, Zaragoza',
	claim: 'Tu taberna de cocina casera en Jorge Jordana 3',
	summary:
		'El Fogarache es un restaurante de cocina casera en C. de Jorge Jordana 3 (Delicias, 50017 Zaragoza): caracoles, menú del día y brasa. Con un 4,4 en Google (816 opiniones). Llama al 976 09 95 23 para reservar.',
	street: 'C. de Jorge Jordana, 3',
	district: 'Delicias',
	borough: 'Zaragoza',
	city: 'Zaragoza',
	postalCode: '50017',
	region: 'Aragón',
	country: 'ES',
	phoneDisplay: '976 09 95 23',
	phoneHref: 'tel:+34976099523',
	whatsapp:
		'https://wa.me/34665968157?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20El%20Fogarache.%20%C2%BFMe%20confirm%C3%A1is%20mesa%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6527309%2C-0.9049263&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6527309, lng: -0.9049263 },
	featureId: '0xd5914cb59811ef1:0x2de9f373b1164835',
	priceRange: '€',
	rating: 4.4,
	reviewCount: 816,
	categories: [
		'Restaurante',
		'Cocina casera',
		'Menú del día',
		'Caracoles',
	],
	hours: [
		{ days: 'Lunes a miércoles', hours: '9:00–17:00' },
		{ days: 'Jueves', hours: '9:00–17:00 y 20:30–23:15' },
		{ days: 'Viernes', hours: '9:00–17:00 y 20:30–24:00' },
		{ days: 'Sábado', hours: '13:00–17:00 y 21:00–24:00' },
		{ days: 'Domingo', hours: '13:00–17:00' },
	],
	hoursNote:
		'Horario publicado en Vive Zaragoza. Confirma llamando al 976 09 95 23, porque puede variar en festivos.',
	siteUrl: 'https://el-fogarache.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante El Fogarache',
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
		icon: 'ri-restaurant-line',
		title: 'Cocina casera',
		text: 'Restaurante de cocina casera en Jorge Jordana 3, Delicias.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Jordana 3',
		text: 'C. de Jorge Jordana 3 · 50017 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,4 con 816 reseñas',
		text: 'Valoración de 4,4 sobre 5 en Google con 816 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Reserva mesa en el 976 09 95 23.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Menú del día',
		text: 'Menú del día casero, rico y asequible, con cantidades generosas.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Caracoles y brasa',
		text: 'Especialistas en caracoles y carnes a la brasa.',
	},
	{
		icon: 'ri-cake-line',
		title: 'Postres caseros',
		text: 'Postres de la casa como el flan de queso casero.',
	},
	{
		icon: 'ri-team-line',
		title: 'Familiar',
		text: 'Local familiar con menú infantil. Ven con los tuyos.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Noches de jue a sáb',
		text: 'Cenas de jueves a sábado por la noche.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva',
		text: 'Suele llenarse: reserva en el 976 09 95 23.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'De la casa',
		items: [
			{ nombre: 'Menú del día', precio: 'A consultar' },
			{ nombre: 'Caracoles', precio: 'A consultar' },
			{ nombre: 'Brasa', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Momentos',
		items: [
			{ nombre: 'Comida de mediodía', precio: 'A consultar' },
			{ nombre: 'Cena (jueves a sábado)', precio: 'A consultar' },
			{ nombre: 'Mesa familiar', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Delicias',
		text: 'Jorge Jordana 3, 50017, taberna clásica de barrio.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,4 en Google',
		text: '816 opiniones destacan el menú del día y el trato.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Caracoles y brasa',
		text: 'Cocina casera de siempre: caracoles, brasa y postres.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva fácil',
		text: 'Llama al 976 09 95 23 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Todos los días',
		text: 'Abren a diario; noches solo de jueves a sábado.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirman allí.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Fogarache?',
		a: 'En C. de Jorge Jordana 3 (Delicias, 50017 Zaragoza). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 976 09 95 23 o escribe por WhatsApp al 665 96 81 57. Suele llenarse, así que reserva con antelación.',
	},
	{
		q: '¿Qué se come allí?',
		a: 'Es un restaurante de cocina casera: especialistas en caracoles, menú del día, brasa y postres caseros. La carta del día se confirma en el local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta online, y esta web no inventa importes. Es rango € y el menú del día es asequible, según las opiniones.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a miércoles de 9:00 a 17:00; jueves de 9:00 a 17:00 y de 20:30 a 23:15; viernes de 9:00 a 17:00 y de 20:30 a 24:00; sábados de 13:00 a 17:00 y de 21:00 a 24:00; domingos de 13:00 a 17:00. Confirma festivos llamando al 976 09 95 23.',
	},
	{
		q: '¿Abren por la noche?',
		a: 'Sí, pero solo de jueves a sábado: jue hasta las 23:15 y vie-sáb hasta las 24:00. El resto de días cierran por la tarde.',
	},
];

export const FEATURES = [
	{ icon: 'ri-restaurant-line', label: 'Cocina casera' },
	{ icon: 'ri-fire-line', label: 'Caracoles y brasa' },
	{ icon: 'ri-team-line', label: 'Familiar' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Restaurante El Fogarache en Zaragoza',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'El Fogarache en Jorge Jordana 3',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'El local de El Fogarache (Zaragoza)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'El salón de El Fogarache',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de El Fogarache',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Cocina casera en El Fogarache Zaragoza',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Platos de El Fogarache',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Ambiente de taberna en El Fogarache',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'El Fogarache Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34976099523',
	servesCuisine: ['Casera', 'Aragonesa', 'Mediterránea'],
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
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday'],
			opens: '09:00',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Thursday', 'Friday'],
			opens: '09:00',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Thursday',
			opens: '20:30',
			closes: '23:15',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Friday',
			opens: '20:30',
			closes: '24:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '13:00',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '21:00',
			closes: '24:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '13:00',
			closes: '17:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La casa de El Fogarache',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'Restaurant', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
