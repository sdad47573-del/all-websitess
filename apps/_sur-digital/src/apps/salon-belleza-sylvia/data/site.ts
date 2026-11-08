/**
 * Datos de Salón de Belleza Sylvia — C. Pintor Monroy 6
 * (Nte. Sierra, 14012 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón de Belleza Sylvia,
 *   37.9090705,-4.7791103, feature 0xd6cdf0e10a27169:0x554bed62b708a429
 * - Fresha: C. Pintor Monroy, 6, Nte. Sierra, 14012 Córdoba;
 *   servicios Facial / Facial Extractions.
 * - Directorios (peluqueriasyestetica/QDQ/páginas amarillas):
 *   Calle Pintor Monroy 6, 14012 Córdoba, tel 957 405 144;
 *   peluquería unisex + estética.
 * - Facebook: Salón de belleza Sylvia — uñas de gel y esmalte permanente.
 *
 * Lo que la web NO inventa:
 * - Sin horario ni precios publicados, no se publican.
 */

import fotoPortada from '../assets/fotos/salon-belleza-sylvia-malaga.svg';
import fotoEstudio from '../assets/fotos/salon-belleza-sylvia-estudio.svg';
import fotoFacial from '../assets/fotos/salon-belleza-sylvia-facial.svg';
import fotoCorporal from '../assets/fotos/salon-belleza-sylvia-corporal.svg';
import logo from '../assets/fotos/salon-belleza-sylvia-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Sal%C3%B3n+de+Belleza+Sylvia/@37.9090705,-4.7791103,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf0e10a27169:0x554bed62b708a429!8m2!3d37.9090705!4d-4.7791103!16s%2Fg%2F1thgjcnx?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón de Belleza Sylvia',
	shortName: 'Sylvia',
	tagline: 'Peluquería y estética en Sierra, Córdoba',
	claim: 'Belleza integral en Pintor Monroy',
	summary:
		'Salón de Belleza Sylvia es una peluquería unisex y centro de estética en C. Pintor Monroy 6 (Nte. Sierra, 14012 Córdoba): facial con extracciones y uñas de gel/permanente. Llama al 957 40 51 44 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Pintor Monroy 6',
	district: 'Nte. Sierra',
	borough: 'Distrito Sierra',
	city: 'Córdoba',
	postalCode: '14012',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 40 51 44',
	phoneHref: 'tel:+34957405144',
	whatsapp: 'https://wa.me/34957405144?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Sylvia.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	facebook: 'https://www.facebook.com/p/Sal%C3%B3n-de-belleza-Sylvia-100065730455311/',
	fresha: 'https://www.fresha.com/lvp/salon-de-belleza-sylvia-calle-pintor-monroy-cordoba-MVGq0w',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.9090705%2C-4.7791103&z=17&output=embed',
	geo: { lat: 37.9090705, lng: -4.7791103 },
	featureId: '0xd6cdf0e10a27169:0x554bed62b708a429',
	priceRange: '€€',
	categories: ['Peluquería', 'Centro de estética', 'Facial', 'Uñas de gel'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: llama al 957 40 51 44 o abre la ficha para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/salon-belleza-sylvia',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
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
		icon: 'ri-scissors-2-line',
		title: 'Peluquería unisex',
		text: 'Peluquería de hombre y mujer en Nte. Sierra.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Pintor Monroy 6',
		text: 'C. Pintor Monroy 6 · 14012 Córdoba. En la Sierra.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 40 51 44',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial y uñas',
		text: 'Facial con extracciones y gel/permanente.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería unisex. Confirma servicio y precio en el 957 40 51 44.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Facial con extracciones. Consulta diagnóstico.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas de gel',
		text: 'Uñas de gel y esmalte permanente. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 957 40 51 44 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Nte. Sierra (14012). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería y facial',
		items: [
			{ nombre: 'Peluquería unisex', precio: 'A consultar' },
			{ nombre: 'Facial con extracciones', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Uñas',
		items: [
			{ nombre: 'Uñas de gel', precio: 'A consultar' },
			{ nombre: 'Esmalte permanente', precio: 'A consultar' },
			{ nombre: 'Manicura', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En la Sierra',
		text: 'Pintor Monroy 6: zona Norte-Sierra de Córdoba.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Unisex',
		text: 'Peluquería de hombre y mujer más estética.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 40 51 44 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial extracciones',
		text: 'Limpieza facial con extracciones, servicio destacado en ficha.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Gel y permanente',
		text: 'Uñas de gel y esmalte permanente con nueva tecnología.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Salón de Belleza Sylvia?',
		a: 'En C. Pintor Monroy 6 (Nte. Sierra, 14012 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 40 51 44 o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería unisex y estética: facial con extracciones y uñas de gel/permanente. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha o llama al 957 40 51 44, porque puede variar en festivos.',
	},
	{
		q: '¿Tienen redes?',
		a: 'Tienen página de Facebook (Salón de belleza Sylvia) y ficha en Fresha.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería unisex' },
	{ icon: 'ri-sparkling-2-line', label: 'Facial y uñas' },
	{ icon: 'ri-map-pin-line', label: 'Sierra, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 40 51 44' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón de Belleza Sylvia en Sierra (Córdoba)' },
	{ src: IMAGES.fotoInterior, alt: 'Sylvia en Pintor Monroy 6' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Sylvia Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Sylvia Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Sylvia Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957405144',
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
	sameAs: [BUSINESS.facebook, BUSINESS.fresha],
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
				provider: { '@type': 'HairSalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
