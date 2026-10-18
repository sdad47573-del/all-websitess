/**
 * Datos de El Paladar — Calle Pilar Lorengar, 28
 * (50009 Zaragoza).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: El Paladar,
 *   41.6437892,-0.8966196, feature 0xd5914d0a29117a9:0xb3124a2440d7780b
 * - Guía Repsol / Kitking: Calle Pilar Lorengar, 28, 50009 Zaragoza;
 *   tel 976 07 39 51; Instagram @elpaladar.es.
 * - El Callejero de Zaragoza: Pilar Lorengar nº 28; tel 976073951;
 *   Lun cerrado; Mar-Jue 13:30–17 y 20:00–23:00; Vie 13:00–17 y
 *   20:00–23:00; Sáb 13:30–17 y 20:00–23:00; Dom 13:30–17.
 * - TripAdvisor: cocina caribeña/latina/cubana, comidas y cenas,
 *   4,5 (125 opiniones).
 *
 * Lo que la web NO inventa:
 * - Sin carta ni precios publicados fuera de la ficha: no se publican
 *   platos ni importes concretos.
 * - Sin valoración de Google verificada: no se publica nota de Google;
 *   solo se cita la de TripAdvisor con su fuente.
 */

import fotoPortada from '../assets/fotos/el-paladar-apaisada-04.jpg';
import fotoCentro from '../assets/fotos/el-paladar-apaisada-05.jpg';
import fotoBarra from '../assets/fotos/el-paladar-vertical-01.jpg';
import fotoSala from '../assets/fotos/el-paladar-vertical-02.jpg';
import fotoExtra1 from '../assets/fotos/el-paladar-vertical-03.jpg';
import fotoExtra2 from '../assets/fotos/el-paladar-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/el-paladar-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/el-paladar-vertical-08.jpg';
import logo from '../assets/fotos/el-paladar-logo.svg';

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
	'https://www.google.com/maps/place/El+Paladar/data=!4m7!3m6!1s0xd5914d0a29117a9:0xb3124a2440d7780b!8m2!3d41.6437892!4d-0.8966196!16s%2Fg%2F11c3k575yv!19sChIJqReRotAUWQ0RC3jXQCRKErM?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'El Paladar',
	shortName: 'El Paladar',
	tagline: 'Restaurante cubano en Zaragoza',
	claim: 'Tu restaurante cubano en Pilar Lorengar 28',
	summary:
		'El Paladar es un restaurante cubano en Calle Pilar Lorengar 28 (50009 Zaragoza): sazón caribeña, comidas y cenas. Con un 4,5 en TripAdvisor (125 opiniones). Llama al 976 07 39 51 para reservar.',
	street: 'Calle Pilar Lorengar, 28',
	district: 'Universidad',
	borough: 'Zaragoza',
	city: 'Zaragoza',
	postalCode: '50009',
	region: 'Aragón',
	country: 'ES',
	phoneDisplay: '976 07 39 51',
	phoneHref: 'tel:+34976073951',
	whatsapp:
		'https://wa.me/34976073951?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20El%20Paladar.%20%C2%BFMe%20confirm%C3%A1is%20mesa%3F',
	instagram: 'https://www.instagram.com/elpaladar.es/',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6437892%2C-0.8966196&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6437892, lng: -0.8966196 },
	featureId: '0xd5914d0a29117a9:0xb3124a2440d7780b',
	priceRange: '€€',
	categories: [
		'Restaurante cubano',
		'Cocina caribeña',
		'Comidas',
		'Cenas',
	],
	hours: [
		{ days: 'Martes a jueves', hours: '13:30–17:00 y 20:00–23:00' },
		{ days: 'Viernes', hours: '13:00–17:00 y 20:00–23:00' },
		{ days: 'Sábado', hours: '13:30–17:00 y 20:00–23:00' },
		{ days: 'Domingo', hours: '13:30–17:00' },
		{ days: 'Lunes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en El Callejero de Zaragoza. Confirma llamando al 976 07 39 51, porque puede variar en festivos.',
	siteUrl: 'https://el-paladar.vercel.app',
};

export const LEGAL = {
	razonSocial: 'El Paladar',
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
		title: 'Cocina cubana',
		text: 'Restaurante cubano en Pilar Lorengar 28, Zaragoza.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Pilar Lorengar 28',
		text: 'Calle Pilar Lorengar 28 · 50009 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,5 en TripAdvisor',
		text: 'Valoración de 4,5 sobre 5 en TripAdvisor con 125 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Reserva mesa en el 976 07 39 51.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Comidas',
		text: 'Comidas con sazón caribeña, de martes a domingo al mediodía.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Cenas',
		text: 'Cenas cubanas de martes a sábado, de 20:00 a 23:00.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Cocina cubana',
		text: 'Platos típicos cubanos: viajar a Cuba sin salir de Zaragoza.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Opciones sin gluten',
		text: 'Con opciones sin gluten, según TripAdvisor. Confírmalo al reservar.',
	},
	{
		icon: 'ri-team-line',
		title: 'Para compartir',
		text: 'Planes de mesa larga: ven con hambre y con gente.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva',
		text: 'Se recomienda reservar: llama al 976 07 39 51.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'De la casa',
		items: [
			{ nombre: 'Comidas', precio: 'A consultar' },
			{ nombre: 'Cenas', precio: 'A consultar' },
			{ nombre: 'Platos típicos cubanos', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Momentos',
		items: [
			{ nombre: 'Comida de mediodía', precio: 'A consultar' },
			{ nombre: 'Cena caribeña', precio: 'A consultar' },
			{ nombre: 'Mesa para compartir', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Zaragoza',
		text: 'Pilar Lorengar 28, 50009, sabor cubano de barrio.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,5 en TripAdvisor',
		text: '125 opiniones con muy buena valoración media.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cubano de verdad',
		text: 'Sazón caribeña con rasmia aragonesa.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva fácil',
		text: 'Llama al 976 07 39 51 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Mediodía y noche',
		text: 'Doble turno de mar a sáb; domingo al mediodía; lunes cerrado.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirman allí.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Paladar?',
		a: 'En Calle Pilar Lorengar 28 (50009 Zaragoza). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 976 07 39 51 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué se come allí?',
		a: 'Es un restaurante cubano: cocina caribeña y latina, comidas y cenas. La carta del día se confirma en el local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta online, y esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes cerrado; de martes a jueves de 13:30 a 17:00 y de 20:00 a 23:00; viernes de 13:00 a 17:00 y de 20:00 a 23:00; sábados de 13:30 a 17:00 y de 20:00 a 23:00; domingos de 13:30 a 17:00. Confirma festivos llamando al 976 07 39 51.',
	},
	{
		q: '¿Abren los lunes?',
		a: 'No, los lunes cierran. El domingo abren solo al mediodía, de 13:30 a 17:00.',
	},
];

export const FEATURES = [
	{ icon: 'ri-restaurant-line', label: 'Restaurante cubano' },
	{ icon: 'ri-leaf-line', label: 'Cocina caribeña' },
	{ icon: 'ri-moon-line', label: 'Comidas y cenas' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'El Paladar en Zaragoza',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'El Paladar en Pilar Lorengar 28',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'El local de El Paladar (Zaragoza)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'El salón de El Paladar',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de El Paladar',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Comida cubana en El Paladar Zaragoza',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Platos de El Paladar',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Ambiente caribeño en El Paladar',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'El Paladar Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34976073951',
	servesCuisine: ['Cubana', 'Caribeña', 'Latina'],
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
		ratingValue: 4.5,
		reviewCount: 125,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
			opens: '13:30',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
			opens: '20:00',
			closes: '23:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Friday',
			opens: '13:00',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Friday',
			opens: '20:00',
			closes: '23:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '13:30',
			closes: '17:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '13:30',
			closes: '17:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La casa de El Paladar',
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
