/**
 * Datos de MI CENTRO DE ESTÉTICA BCN — Carrer de València, 160, Loc 4
 * (Antiga Esquerra de l'Eixample, Eixample, 08011 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: MI CENTRO DE ESTÉTICA BCN,
 *   41.3865136,2.155338, feature 0x12a4a34085c1fbdf:0x3c40e70a1c1aeb4c
 * - Ficha de Google (endpoint /maps/preview/place): Carrer de València 160
 *   Loc 4, Eixample, 08011 Barcelona; categoría Esteticista; 4,8 (46 reseñas);
 *   tel 680 74 57 89; L-V 11:00–21:00, Sáb 10:00–21:00, Dom cerrado.
 */

import fotoPortada from '../assets/fotos/mi-centro-de-estetica-bcn-cuadrada-01.jpg';
import fotoCentro from '../assets/fotos/mi-centro-de-estetica-bcn-vertical-02.jpg';
import fotoFacial from '../assets/fotos/mi-centro-de-estetica-bcn-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/mi-centro-de-estetica-bcn-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/mi-centro-de-estetica-bcn-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/mi-centro-de-estetica-bcn-panoramica-06.jpg';
import fotoExtra3 from '../assets/fotos/mi-centro-de-estetica-bcn-panoramica-07.jpg';
import fotoExtra4 from '../assets/fotos/mi-centro-de-estetica-bcn-vertical-08.jpg';
import logo from '../assets/fotos/mi-centro-de-estetica-bcn-logo.svg';

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
	'https://www.google.com/maps/place/MI+CENTRO+DE+EST%C3%89TICA+BCN/data=!4m7!3m6!1s0x12a4a34085c1fbdf:0x3c40e70a1c1aeb4c!8m2!3d41.3865136!4d2.155338!16s%2Fg%2F11kjg4yyvm!19sChIJ3_vBhUCjpBIRTOsaHArnQDw?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'MI CENTRO DE ESTÉTICA BCN',
	shortName: 'Mi Centro BCN',
	tagline: 'Estética en Eixample, Barcelona',
	claim: 'Tu estética en València 160',
	summary:
		'MI CENTRO DE ESTÉTICA BCN es un centro de estética en Carrer de València 160, Loc 4 (Antiga Esquerra de l’Eixample, Eixample, 08011 Barcelona): estética facial y corporal. Con un 4,8 en Google (46 reseñas). Llama al 680 74 57 89 para cita.',
	street: 'Carrer de València, 160, Loc 4',
	district: "Antiga Esquerra de l'Eixample",
	borough: 'Eixample',
	city: 'Barcelona',
	postalCode: '08011',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '680 74 57 89',
	phoneHref: 'tel:+34680745789',
	whatsapp:
		'https://wa.me/34680745789?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20MI%20CENTRO%20DE%20EST%C3%89TICA%20BCN.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3865136%2C2.155338&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3865136, lng: 2.155338 },
	featureId: '0x12a4a34085c1fbdf:0x3c40e70a1c1aeb4c',
	priceRange: '€€',
	rating: 4.8,
	reviewCount: 46,
	categories: [
		'Esteticista',
		'Centro de estética',
		'Estética facial',
		'Estética corporal',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '11:00–21:00' },
		{ days: 'Sábado', hours: '10:00–21:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro. Confirma llamando al 680 74 57 89, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/mi-centro-de-estetica-bcn',
};

export const LEGAL = {
	razonSocial: 'MI CENTRO DE ESTÉTICA BCN',
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
	{ label: 'Servicios', href: '/mi-centro-de-estetica-bcn/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/mi-centro-de-estetica-bcn/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética en Eixample',
		text: 'Centro de estética en València 160, Antiga Esquerra.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'València 160',
		text: 'Carrer de València 160, Loc 4 · 08011 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 con 46 reseñas',
		text: 'Valoración de 4,8 sobre 5 en Google con 46 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Pide cita en el 680 74 57 89.',
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
		text: 'Se recomienda pedir cita: llama al 680 74 57 89.',
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
		text: 'València 160, Loc 4, 08011 Barcelona, bien comunicada.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,8 en Google',
		text: '46 opiniones con muy buena valoración media.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario amplio',
		text: 'L-V 11:00–21:00 y sábados 10:00–21:00.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 680 74 57 89 o escribe por WhatsApp.',
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
		q: '¿Dónde está MI CENTRO DE ESTÉTICA BCN?',
		a: 'En Carrer de València 160, Loc 4 (Antiga Esquerra de l’Eixample, Eixample, 08011 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 680 74 57 89 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial y corporal como esteticista. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 680 74 57 89.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 11:00 a 21:00, sábados de 10:00 a 21:00 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Qué opinan las clientas?',
		a: 'Tiene un 4,8 sobre 5 con 46 opiniones en Google.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Esteticista' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-user-smile-line', label: 'Diagnóstico personalizado' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'MI CENTRO DE ESTÉTICA BCN en Eixample, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Mi Centro BCN en València 160, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Mi Centro de Estética BCN',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en Mi Centro BCN',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de MI CENTRO DE ESTÉTICA BCN',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de estética en Mi Centro BCN Eixample',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Bienestar en Carrer de València 160',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Estética en Mi Centro de Estética BCN Barcelona',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Mi Centro de Estética Eixample Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34680745789',
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
			opens: '11:00',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '21:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de MI CENTRO DE ESTÉTICA BCN',
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
