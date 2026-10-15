/**
 * Datos de María Ruz Centro de Estética & Bienestar — Profesor Tierno
 * Galván 6 (Levante, 14014 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: María Ruz Centro de Estética &
 *   Bienestar, 37.9009463,-4.7582646,
 *   feature 0xd6cdf9778890e5b:0x8ded725e6d501e93
 * - Cylex: Profesor Tierno Galván 6, 14014 Córdoba (Levante),
 *   tel 957 43 92 65; horario lun–vie 10:00-13:30 y 17:00-20:30,
 *   sáb 10:00-13:00, dom cerrado.
 * - Web propia masajesruzbeauty.com (Maria Ruz Beauty): faciales
 *   (limpieza, rejuvenecimiento), corporales (masajes descontracturantes,
 *   aparatología, remodeladores), manos y pies (manicura/pedicura).
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 */

import fotoPortada from '../assets/fotos/maria-ruz-estetica-apaisada-02.jpg';
import fotoEstudio from '../assets/fotos/maria-ruz-estetica-vertical-01.jpg';
import fotoFacial from '../assets/fotos/maria-ruz-estetica-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/maria-ruz-corporal.svg';
import logo from '../assets/fotos/maria-ruz-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Mar%C3%ADa+Ruz+Centro+de+Est%C3%A9tica+%26+Bienestar/@37.9009463,-4.7582646,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf9778890e5b:0x8ded725e6d501e93!8m2!3d37.9009463!4d-4.7582646!16s%2Fg%2F11b6dh6w_q?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'María Ruz Centro de Estética & Bienestar',
	shortName: 'María Ruz',
	tagline: 'Estética y bienestar en Levante, Córdoba',
	claim: 'Cuida tu piel y tu bienestar',
	summary:
		'María Ruz Centro de Estética & Bienestar es un centro de estética en Profesor Tierno Galván 6 (Levante, 14014 Córdoba): faciales, corporales, manos y pies. Llama al 957 43 92 65 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Profesor Tierno Galván 6',
	district: 'Levante',
	borough: 'Distrito Levante',
	city: 'Córdoba',
	postalCode: '14014',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 43 92 65',
	phoneHref: 'tel:+34957439265',
	whatsapp: 'https://wa.me/34957439265?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Mar%C3%ADa%20Ruz.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	web: 'https://www.masajesruzbeauty.com/',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.9009463%2C-4.7582646&z=17&output=embed',
	geo: { lat: 37.9009463, lng: -4.7582646 },
	featureId: '0xd6cdf9778890e5b:0x8ded725e6d501e93',
	priceRange: '€€',
	categories: ['Centro de estética', 'Tratamientos faciales', 'Masajes', 'Manicura y pedicura'],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–13:30 y 17:00–20:30' },
		{ days: 'Sábado', hours: '10:00–13:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según directorio (Cylex). Confirma en la ficha de Google o llamando al 957 43 92 65, porque puede variar en festivos.',
	siteUrl: 'https://maria-ruz-estetica.vercel.app',
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
		title: 'Facial y corporal',
		text: 'Limpieza, rejuvenecimiento, masajes y aparatología.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Tierno Galván 6',
		text: 'Profesor Tierno Galván 6 · 14014 Córdoba. En Levante.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 43 92 65',
		text: 'Cita por teléfono o WhatsApp. Domingos cerrado.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manos y pies',
		text: 'Manicura y pedicura de larga duración.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza profunda y rejuvenecimiento. Confirma protocolo en el 957 43 92 65.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Masajes descontracturantes, aparatología y técnicas remodeladoras.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manos y pies',
		text: 'Manicura y pedicura de larga duración, diseños personalizados.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Bienestar',
		text: 'Espacio para relajarte y aliviar tensiones. Pregunta por la sesión.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 957 43 92 65 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-global-line',
		title: 'Web propia',
		text: 'Tienen web con detalle de tratamientos: masajesruzbeauty.com.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial y bienestar',
		items: [
			{ nombre: 'Limpieza facial', precio: 'A consultar' },
			{ nombre: 'Rejuvenecimiento facial', precio: 'A consultar' },
			{ nombre: 'Masaje descontracturante', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y manos',
		items: [
			{ nombre: 'Aparatología / remodeladores', precio: 'A consultar' },
			{ nombre: 'Manicura / pedicura', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Levante, Córdoba',
		text: 'Tierno Galván 6: zona Levante de Córdoba, bien comunicada.',
	},
	{
		icon: 'ri-user-heart-line',
		title: 'Trato humano',
		text: 'Centro de María Ruz: espacio para relajarte y descubrir tu mejor versión.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 43 92 65 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Mañana y tarde',
		text: 'Lun–vie 10:00–13:30 y 17:00–20:30, sáb 10:00–13:00. Dom cerrado.',
	},
	{
		icon: 'ri-global-line',
		title: 'Web con servicios',
		text: 'Detalle de tratamientos en masajesruzbeauty.com.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está María Ruz Centro de Estética & Bienestar?',
		a: 'En Profesor Tierno Galván 6 (Levante, 14014 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 43 92 65 o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Faciales (limpieza, rejuvenecimiento), corporales (masajes, aparatología, remodeladores) y manos/pies (manicura, pedicura), según su web propia. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 10:00–13:30 y 17:00–20:30, sábado 10:00–13:00 y domingo cerrado, según directorio. Confirma festivos por teléfono.',
	},
	{
		q: '¿Tienen web propia?',
		a: 'Sí: masajesruzbeauty.com (Maria Ruz Beauty), con el detalle de tratamientos faciales, corporales y de manos/pies.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-heart-pulse-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Levante, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 43 92 65' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'María Ruz Centro de Estética en Levante (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'María Ruz en Tierno Galván 6 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamientos en María Ruz Córdoba — foto de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'María Ruz Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957439265',
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
	sameAs: [BUSINESS.web],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '17:00',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '13:00',
		},
	],
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
