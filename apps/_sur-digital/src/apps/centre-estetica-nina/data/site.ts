/**
 * Datos de Centre D' Estética Nina — Carrer de la Diputació, 391
 * (Eixample, 08013 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centre D' Estética Nina,
 *   41.3975229,2.1762065, feature 0x12a4a2e644f997a3:0xf7909cef8fed622d
 * - Ficha de Google (endpoint /maps/preview/place): Carrer de la Diputació
 *   391, Eixample, 08013 Barcelona; esteticista facial; 4,8 (44 reseñas);
 *   tel 932 65 94 91; L-V 9:45–20:00, Sáb 9:30–13:30, Dom cerrado.
 */

import fotoPortada from '../assets/fotos/centre-estetica-nina-vertical-01.jpg';
import fotoCentro from '../assets/fotos/centre-estetica-nina-apaisada-02.jpg';
import fotoFacial from '../assets/fotos/centre-estetica-nina-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/centre-estetica-nina-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/centre-estetica-nina-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/centre-estetica-nina-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/centre-estetica-nina-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/centre-estetica-nina-apaisada-08.jpg';
import logo from '../assets/fotos/centre-estetica-nina-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Centre+D%27+Est%C3%A9tica+Nina/data=!4m7!3m6!1s0x12a4a2e644f997a3:0xf7909cef8fed622d!8m2!3d41.3975229!4d2.1762065!16s%2Fg%2F11crzfqh0c!19sChIJo5f5ROaipBIRLWLtj--ckPc?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: "Centre D' Estética Nina",
	shortName: 'Nina',
	tagline: 'Estética facial en Eixample, Barcelona',
	claim: 'Tu estética en Diputació 391',
	summary:
		"Centre D' Estética Nina es un centro de estética facial en Carrer de la Diputació 391 (Eixample, 08013 Barcelona). Con un 4,8 en Google (44 reseñas). Llama al 932 65 94 91 para cita.",
	street: 'Carrer de la Diputació, 391',
	district: 'Eixample',
	borough: 'Eixample',
	city: 'Barcelona',
	postalCode: '08013',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '932 65 94 91',
	phoneHref: 'tel:+34932659491',
	whatsapp:
		'https://wa.me/34932659491?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Nina.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3975229%2C2.1762065&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3975229, lng: 2.1762065 },
	featureId: '0x12a4a2e644f997a3:0xf7909cef8fed622d',
	priceRange: '€€',
	rating: 4.8,
	reviewCount: 44,
	categories: [
		'Esteticista facial',
		'Esteticista',
		'Centro de estética',
		'Estética corporal',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:45–20:00' },
		{ days: 'Sábado', hours: '9:30–13:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro. Confirma llamando al 932 65 94 91, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/centre-estetica-nina',
};

export const LEGAL = {
	razonSocial: "Centre D' Estética Nina",
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
	{ label: 'Servicios', href: '/centre-estetica-nina/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/centre-estetica-nina/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética facial',
		text: 'Centro de estética facial en Diputació 391, Eixample.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Diputació 391',
		text: 'Carrer de la Diputació 391 · 08013 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 con 44 reseñas',
		text: 'Valoración de 4,8 sobre 5 en Google con 44 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Pide cita en el 932 65 94 91.',
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
		title: 'Belleza',
		text: 'Servicios de belleza y cuidado personal.',
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
		text: 'Se recomienda pedir cita: llama al 932 65 94 91.',
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
		title: 'En Eixample',
		text: 'Diputació 391, 08013 Barcelona, bien comunicada.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '44 opiniones con muy buena valoración media.',
	},
	{
		icon: 'ri-time-line',
		title: 'Abre pronto',
		text: 'L-V desde las 9:45 y sábados por la mañana.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 932 65 94 91 o escribe por WhatsApp.',
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
		q: "¿Dónde está Centre D' Estética Nina?",
		a: 'En Carrer de la Diputació 391 (Eixample, 08013 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 932 65 94 91 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial y corporal como esteticista. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 932 65 94 91.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 9:45 a 20:00, sábados de 9:30 a 13:30 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Abren los sábados?',
		a: 'Sí, los sábados por la mañana de 9:30 a 13:30. Entre semana abren a las 9:45.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Esteticista facial' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-user-smile-line', label: 'Diagnóstico personalizado' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: "Centre D' Estética Nina en Eixample, Barcelona",
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Nina en Diputació 391, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: "Cuidado facial en Centre D' Estética Nina",
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en Nina Barcelona',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: "Interior de Centre D' Estética Nina",
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de estética en Nina Eixample',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Bienestar en Carrer de la Diputació 391',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: "Estética en Centre D' Estética Nina Barcelona",
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Estética Nina Eixample Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34932659491',
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
			opens: '09:45',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '09:30',
			closes: '13:30',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: "Servicios de Centre D' Estética Nina",
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
