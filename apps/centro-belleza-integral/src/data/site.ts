/**
 * Datos de Centro de Belleza Integral — C. Ingeniero Juan A. Vigueras
 * González 2 (Levante, 14014 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: CENTRO DE BELLEZA INTEGRAL,
 *   37.9010719,-4.7536495, feature 0xd6cdf084d8e952b:0x7b7d396cd058f365
 * - Instagram @belleza_integral_cordoba: C/Ingeniero Juan A. Vigueras
 *   González 2; servicio 360° (piel, cuerpo y mente).
 * - Directorios (Cylex/Yably): Calle Ingeniero Juan A. Vigueras González 2,
 *   14014 Córdoba (Levante), tel 686 64 16 85; 5,0 (14 Google + 12 Facebook).
 *
 * Lo que la web NO inventa:
 * - Sin horario ni carta de precios publicados, no se publican.
 */

import fotoPortada from '../assets/fotos/centro-belleza-integral-apaisada-01.jpg';
import fotoEstudio from '../assets/fotos/centro-belleza-integral-estudio.svg';
import fotoFacial from '../assets/fotos/centro-belleza-integral-facial.svg';
import fotoCorporal from '../assets/fotos/centro-belleza-integral-corporal.svg';
import logo from '../assets/fotos/centro-belleza-integral-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/CENTRO+DE+BELLEZA+INTEGRAL/@37.9010719,-4.7536495,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf084d8e952b:0x7b7d396cd058f365!8m2!3d37.9010719!4d-4.7536495!16s%2Fg%2F11wnzqqh6d?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Centro de Belleza Integral',
	shortName: 'Belleza Integral',
	tagline: 'Estética 360° en Levante, Córdoba',
	claim: 'Piel, cuerpo y mente en un mismo centro',
	summary:
		'Centro de Belleza Integral es un centro de estética en C. Ingeniero Juan A. Vigueras González 2 (Levante, 14014 Córdoba): servicio 360° de piel, cuerpo y mente. Llama al 686 64 16 85 o consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'C. Ingeniero Juan A. Vigueras González 2',
	district: 'Levante',
	borough: 'Distrito Levante',
	city: 'Córdoba',
	postalCode: '14014',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '686 64 16 85',
	phoneHref: 'tel:+34686641685',
	whatsapp: 'https://wa.me/34686641685?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Belleza%20Integral.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	instagram: 'https://www.instagram.com/belleza_integral_cordoba/',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.9010719%2C-4.7536495&z=17&output=embed',
	geo: { lat: 37.9010719, lng: -4.7536495 },
	featureId: '0xd6cdf084d8e952b:0x7b7d396cd058f365',
	priceRange: '€€',
	categories: ['Centro de estética', 'Cuidado facial', 'Cuidado corporal', 'Manicura y pedicura'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: llama al 686 64 16 85 o abre la ficha para ver apertura actual y festivos.',
	siteUrl: 'https://centro-belleza-integral.vercel.app',
	ratingValue: 5,
	reviewCount: 14,
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética 360°',
		text: 'Piel, cuerpo y mente en un mismo centro de Levante.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Vigueras González 2',
		text: 'C. Ingeniero Juan A. Vigueras González 2 · 14014 Córdoba.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en reseñas',
		text: '5,0 en Google (14) y Facebook (12). Llama al 686 64 16 85.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Facial y corporal',
		text: 'Facial, corporal, manicura y pedicura. Confirma tu servicio por teléfono.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado de la piel y luminosidad. Confirma protocolo en el 686 64 16 85.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura y pedicura',
		text: 'Cuidado de manos y pies. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 686 64 16 85 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Levante (14014). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial y mirada',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y manos',
		items: [
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Manicura / pedicura', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Levante, Córdoba',
		text: 'Vigueras González 2: zona Levante de Córdoba, bien comunicada.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 con 26 reseñas',
		text: 'Máxima nota agregada (14 Google + 12 Facebook). Trato personalizado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 686 64 16 85 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Servicio 360°',
		text: 'Piel, cuerpo y mente: propuesta integral del centro.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'En Instagram',
		text: 'Mira @belleza_integral_cordoba para ver el centro antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Centro de Belleza Integral?',
		a: 'En C. Ingeniero Juan A. Vigueras González 2 (Levante, 14014 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 686 64 16 85 o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética integral: facial, corporal y manicura/pedicura, con enfoque 360° (piel, cuerpo y mente). Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha o llama al 686 64 16 85, porque puede variar en festivos.',
	},
	{
		q: '¿Dónde veo sus trabajos?',
		a: 'En Instagram @belleza_integral_cordoba, además de las reseñas de Google y Facebook.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-heart-pulse-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Levante, Córdoba' },
	{ icon: 'ri-star-fill', label: '5,0 en Google (14 reseñas)' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Centro de Belleza Integral en Levante (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Belleza Integral en Vigueras González 2' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Belleza Integral Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Belleza Integral Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Belleza Integral Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34686641685',
	priceRange: BUSINESS.priceRange,
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
	sameAs: [BUSINESS.instagram],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.ratingValue,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: `Servicios de ${BUSINESS.shortName}`,
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
