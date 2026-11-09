/**
 * Datos de Centro de Estética y Bienestar Anabel Vegara —
 * Carrer de Santa Engràcia, 88 (Nou Barris, 08016 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centro de Estética y Bienestar
 *   Anabel Vegara, 41.4420661,2.1798508,
 *   feature 0x12a4bd1f3661deff:0xef0a6d6edb26bf2f
 * - Ficha de Google (endpoint /maps/preview/place): Carrer de Santa
 *   Engràcia 88, Nou Barris, 08016 Barcelona; centro de estética;
 *   4,8 (64 reseñas); tel 933 54 20 10; L-V 9:30–20:00, Sáb 8:30–13:30,
 *   Dom cerrado.
 */

import fotoPortada from '../assets/fotos/anabel-vegara-estetica-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/anabel-vegara-estetica-apaisada-02.jpg';
import fotoFacial from '../assets/fotos/anabel-vegara-estetica-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/anabel-vegara-estetica-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/anabel-vegara-estetica-vertical-05.jpg';
import logo from '../assets/fotos/anabel-vegara-estetica-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoExtra1,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Centro+de+Est%C3%A9tica+y+Bienestar+Anabel+Vegara/data=!4m7!3m6!1s0x12a4bd1f3661deff:0xef0a6d6edb26bf2f!8m2!3d41.4420661!4d2.1798508!16s%2Fg%2F1vp17234!19sChIJ_95hNh-9pBIRL78m225tCu8?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Centro de Estética y Bienestar Anabel Vegara',
	shortName: 'Anabel Vegara',
	tagline: 'Estética y bienestar en Nou Barris, Barcelona',
	claim: 'Tu estética en Santa Engràcia 88',
	summary:
		'Centro de Estética y Bienestar Anabel Vegara es un centro de estética en Carrer de Santa Engràcia 88 (Nou Barris, 08016 Barcelona): estética facial y corporal y bienestar. Con un 4,8 en Google (64 reseñas). Llama al 933 54 20 10 para cita.',
	street: 'Carrer de Santa Engràcia, 88',
	district: 'Nou Barris',
	borough: 'Nou Barris',
	city: 'Barcelona',
	postalCode: '08016',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '933 54 20 10',
	phoneHref: 'tel:+34933542010',
	whatsapp:
		'https://wa.me/34933542010?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Anabel%20Vegara.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.4420661%2C2.1798508&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.4420661, lng: 2.1798508 },
	featureId: '0x12a4bd1f3661deff:0xef0a6d6edb26bf2f',
	priceRange: '€€',
	rating: 4.8,
	reviewCount: 64,
	categories: [
		'Centro de estética',
		'Estética facial',
		'Estética corporal',
		'Bienestar',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:30–20:00' },
		{ days: 'Sábado', hours: '8:30–13:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro. Confirma llamando al 933 54 20 10, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/anabel-vegara-estetica',
};

export const LEGAL = {
	razonSocial: 'Centro de Estética y Bienestar Anabel Vegara',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El centro', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/anabel-vegara-estetica/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/anabel-vegara-estetica/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética y bienestar',
		text: 'Centro de estética en Santa Engràcia 88, Nou Barris.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Santa Engràcia 88',
		text: 'Carrer de Santa Engràcia 88 · 08016 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 con 64 reseñas',
		text: 'Valoración de 4,8 sobre 5 en Google con 64 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Pide cita en el 933 54 20 10.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado facial: limpieza, hidratación y luminosidad.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y cuidado de la piel.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Bienestar',
		text: 'Bienestar y relajación en Nou Barris.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Asesoramiento',
		text: 'Diagnóstico personalizado antes de cada tratamiento.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación y cuidado corporal. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 933 54 20 10.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Estética',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Bienestar',
		items: [
			{ nombre: 'Bienestar', precio: 'A consultar' },
			{ nombre: 'Relajación', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Nou Barris',
		text: 'Santa Engràcia 88, 08016 Barcelona, trato de barrio.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '64 opiniones con muy buena valoración media.',
	},
	{
		icon: 'ri-time-line',
		title: 'Sábados por la mañana',
		text: 'L-V 9:30–20:00 y sábados 8:30–13:30.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 933 54 20 10 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Trato personal',
		text: 'Centro de proximidad: atención personal y sin prisas.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Anabel Vegara?',
		a: 'En Carrer de Santa Engràcia 88 (Nou Barris, 08016 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 933 54 20 10 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial y corporal y bienestar. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 933 54 20 10.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 9:30 a 20:00, sábados de 8:30 a 13:30 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Abren los sábados?',
		a: 'Sí, los sábados por la mañana de 8:30 a 13:30. Entre semana abren de 9:30 a 20:00.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-user-smile-line', label: 'Diagnóstico personalizado' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Anabel Vegara en Nou Barris, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Anabel Vegara en Santa Engràcia 88, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Anabel Vegara (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en Anabel Vegara',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Bienestar en Anabel Vegara Barcelona',
	},
	{
		src: IMAGES.fotoFachada,
		alt: 'Centro de estética Anabel Vegara',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Tratamientos de estética en Anabel Vegara Nou Barris',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Estética y bienestar en Santa Engràcia 88',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Anabel Vegara Nou Barris Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34933542010',
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
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '08:30',
			closes: '13:30',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Anabel Vegara',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'BeautySalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
