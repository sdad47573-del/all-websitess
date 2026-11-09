/**
 * Datos de Coco Gabana - Salón de Belleza y Estética Barcelona —
 * Carrer de Nàpols, 173 (Eixample, 08013 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Coco Gabana - Salón de Belleza
 *   y Estética Barcelona, 41.3977742,2.1758238,
 *   feature 0x12a4a39d68938b4f:0x7964394d3e4077ed
 * - Ficha de Google (endpoint /maps/preview/place): Carrer de Nàpols 173,
 *   Eixample, 08013 Barcelona; estética, pestañas, facial, maquillaje,
 *   manicura/pedicura, depilación cera, adelgazamiento; 4,5 (359 reseñas);
 *   tel 931 41 65 16; L-V 9:30–20:30, Sáb 9:00–15:00, Dom cerrado.
 */

import fotoPortada from '../assets/fotos/coco-gabana-belleza-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/coco-gabana-belleza-vertical-02.jpg';
import fotoFacial from '../assets/fotos/coco-gabana-belleza-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/coco-gabana-belleza-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/coco-gabana-belleza-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/coco-gabana-belleza-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/coco-gabana-belleza-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/coco-gabana-belleza-vertical-08.jpg';
import logo from '../assets/fotos/coco-gabana-belleza-logo.svg';

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
	'https://www.google.com/maps/place/Coco+Gabana+-+Sal%C3%B3n+de+Belleza+y+Est%C3%A9tica+Barcelona/data=!4m7!3m6!1s0x12a4a39d68938b4f:0x7964394d3e4077ed!8m2!3d41.3977742!4d2.1758238!16s%2Fg%2F11gy1l7ymv!19sChIJT4uTaJ2jpBIR7XdAPk05ZHk?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Coco Gabana - Salón de Belleza y Estética Barcelona',
	shortName: 'Coco Gabana',
	tagline: 'Belleza y estética en Eixample, Barcelona',
	claim: 'Tu salón en Nàpols 173',
	summary:
		'Coco Gabana - Salón de Belleza y Estética Barcelona es un salón en Carrer de Nàpols 173 (Eixample, 08013 Barcelona): pestañas, facial, maquillaje, manicura y pedicura, depilación con cera y adelgazamiento. Con un 4,5 en Google (359 reseñas). Llama al 931 41 65 16 para cita.',
	street: 'Carrer de Nàpols, 173',
	district: 'Eixample',
	borough: 'Eixample',
	city: 'Barcelona',
	postalCode: '08013',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '931 41 65 16',
	phoneHref: 'tel:+34931416516',
	whatsapp:
		'https://wa.me/34931416516?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Coco%20Gabana.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3977742%2C2.1758238&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3977742, lng: 2.1758238 },
	featureId: '0x12a4a39d68938b4f:0x7964394d3e4077ed',
	priceRange: '€€',
	rating: 4.5,
	reviewCount: 359,
	categories: [
		'Salón de belleza',
		'Salón de pestañas',
		'Estética facial',
		'Maquillaje',
		'Manicura y pedicura',
		'Depilación con cera',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:30–20:30' },
		{ days: 'Sábado', hours: '9:00–15:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro. Confirma llamando al 931 41 65 16, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/coco-gabana-belleza',
};

export const LEGAL = {
	razonSocial: 'Coco Gabana - Salón de Belleza y Estética Barcelona',
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
	{ label: 'Servicios', href: '/coco-gabana-belleza/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/coco-gabana-belleza/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza integral',
		text: 'Salón de belleza y estética en Nàpols 173, Eixample.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Nàpols 173',
		text: 'Carrer de Nàpols 173 · 08013 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,5 con 359 reseñas',
		text: 'Valoración de 4,5 sobre 5 en Google con 359 opiniones.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Pestañas y cejas',
		text: 'Salón de pestañas, facial, maquillaje y uñas.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-eye-line',
		title: 'Pestañas',
		text: 'Salón de pestañas: mirada cuidada y profesional.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Estética facial: limpieza, hidratación y luminosidad.',
	},
	{
		icon: 'ri-brush-line',
		title: 'Maquillaje',
		text: 'Maquillaje profesional para eventos y día a día.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas',
		text: 'Salón de manicura y pedicura.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación con cera. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 931 41 65 16.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Mirada y rostro',
		items: [
			{ nombre: 'Pestañas', precio: 'A consultar' },
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Maquillaje', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Manos, pies y cuerpo',
		items: [
			{ nombre: 'Manicura y pedicura', precio: 'A consultar' },
			{ nombre: 'Depilación con cera', precio: 'A consultar' },
			{ nombre: 'Adelgazamiento', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Eixample',
		text: 'Nàpols 173, 08013 Barcelona, bien comunicada.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,5 en Google',
		text: '359 opiniones con buena valoración media.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada experta',
		text: 'Pestañas, facial y maquillaje en un solo salón.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 931 41 65 16 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario amplio',
		text: 'L-V 9:30–20:30 y sábados 9:00–15:00.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Coco Gabana?',
		a: 'En Carrer de Nàpols 173 (Eixample, 08013 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 931 41 65 16 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Pestañas, facial, maquillaje, manicura y pedicura, depilación con cera y adelgazamiento. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 931 41 65 16.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 9:30 a 20:30, sábados de 9:00 a 15:00 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Qué opinan las clientas?',
		a: 'Tiene un 4,5 sobre 5 con 359 opiniones en Google.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Salón de belleza' },
	{ icon: 'ri-eye-line', label: 'Salón de pestañas' },
	{ icon: 'ri-brush-line', label: 'Maquillaje' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Coco Gabana en Eixample, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Coco Gabana en Nàpols 173, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Pestañas y mirada en Coco Gabana (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética facial en Coco Gabana',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Coco Gabana Barcelona',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Maquillaje en Coco Gabana Eixample',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Uñas en Coco Gabana Nàpols 173',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Belleza en Coco Gabana Barcelona',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Coco Gabana Eixample Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34931416516',
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
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '09:00',
			closes: '15:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Coco Gabana',
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
