/**
 * Datos de Venussa Salon De Belleza Unisex — C. El Avellano 16
 * (Levante, 14006 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Venussa Salon De Belleza Unisex,
 *   37.8965903,-4.7781236, feature 0xd6cdf7194afe9d5:0x9b36dbffce3eb5cc
 * - salondebellezaespana.com: El Avellano, 16, 14006 Córdoba; salón de
 *   belleza unisex ("gran profesional, atenta al detalle, precios
 *   asequibles"); sin teléfono listado.
 * - Directorio del centro comercial abierto (Mozello): VENUSSA, salón de
 *   belleza unisex, El Avellano 16, 14006 Córdoba, 650 21 53 58.
 *
 * Lo que la web NO inventa:
 * - Sin horario publicado en ninguna fuente: se indica "con cita" y se
 *   pide confirmar por teléfono. No hay openingHoursSpecification.
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 */

import fotoPortada from '../assets/fotos/venussa-salon-belleza-malaga.svg';
import fotoEstudio from '../assets/fotos/venussa-salon-belleza-estudio.svg';
import fotoFacial from '../assets/fotos/venussa-salon-belleza-facial.svg';
import fotoCorporal from '../assets/fotos/venussa-salon-belleza-corporal.svg';
import fotoGaleria1 from '../assets/fotos/venussa-salon-belleza-malaga.svg';
import fotoGaleria2 from '../assets/fotos/venussa-salon-belleza-estudio.svg';
import fotoGaleria3 from '../assets/fotos/venussa-salon-belleza-facial.svg';
import fotoGaleria4 from '../assets/fotos/venussa-salon-belleza-corporal.svg';
import logo from '../assets/fotos/venussa-salon-belleza-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoGaleria1,
	fotoGaleria2,
	fotoGaleria3,
	fotoGaleria4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Venussa+Salon+De+Belleza+Unisex/@37.8965903,-4.7781236,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf7194afe9d5:0x9b36dbffce3eb5cc!8m2!3d37.8965903!4d-4.7781236!16s%2Fg%2F11jm0pkvv8?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Venussa Salon De Belleza Unisex',
	shortName: 'Venussa',
	tagline: 'Salón de belleza unisex en Levante, Córdoba',
	claim: 'Tu salón de belleza unisex en El Avellano',
	summary:
		'Venussa Salon De Belleza Unisex es un salón de belleza unisex en C. El Avellano 16 (Levante, 14006 Córdoba): peluquería y belleza. Llama al 650 21 53 58 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. El Avellano 16',
	district: 'Levante',
	borough: 'Distrito Levante',
	city: 'Córdoba',
	postalCode: '14006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '650 21 53 58',
	phoneHref: 'tel:+34650215358',
	whatsapp: 'https://wa.me/34650215358?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Venussa.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8965903%2C-4.7781236&z=17&output=embed',
	geo: { lat: 37.8965903, lng: -4.7781236 },
	featureId: '0xd6cdf7194afe9d5:0x9b36dbffce3eb5cc',
	priceRange: '€€',
	categories: ['Peluquería', 'Belleza', 'Unisex'],
	hours: [
		{ days: 'Horario', hours: 'Con cita — a convenir' },
	],
	hoursNote:
		'El salón no publica horario: confirma día y hora llamando al 650 21 53 58, porque puede variar.',
	siteUrl: 'https://www.sur-digital.com/venussa-salon-belleza',
};

export const LEGAL = {
	razonSocial: 'Venussa Salon De Belleza Unisex',
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
		text: 'Peluquería y belleza para todos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'El Avellano 16',
		text: 'C. El Avellano 16 · 14006 Córdoba, Levante.',
	},
	{
		icon: 'ri-phone-line',
		title: '650 21 53 58',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita',
		text: 'Sin horario publicado: confirma día y hora.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería unisex. Confirma en el 650 21 53 58.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza',
		text: 'Servicios de belleza. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-user-line',
		title: 'Unisex',
		text: 'Atención unisex, trato atento al detalle.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Estética',
		text: 'Estética. Confirma técnica y precio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 650 21 53 58 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Levante (14006). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte', precio: 'A consultar' },
			{ nombre: 'Color', precio: 'A consultar' },
			{ nombre: 'Peinados', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza', precio: 'A consultar' },
			{ nombre: 'Estética', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En El Avellano',
		text: 'El Avellano 16: Levante, Córdoba.',
	},
	{
		icon: 'ri-user-line',
		title: 'Unisex',
		text: 'Salón unisex de barrio.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 650 21 53 58 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Trato atento',
		text: 'Profesional atenta a cada detalle, precios asequibles.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita',
		text: 'Sin horario publicado: confirma día y hora antes de ir.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Venussa Salon De Belleza Unisex?',
		a: 'En C. El Avellano 16 (Levante, 14006 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 650 21 53 58 o por WhatsApp. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Salón de belleza unisex: peluquería y belleza. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el salón no publica carta propia. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El salón no publica horario: funciona con cita. Confirma día y hora por teléfono.',
	},
	{
		q: '¿Atienden a hombres y mujeres?',
		a: 'Sí: es un salón unisex.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-user-line', label: 'Unisex' },
	{ icon: 'ri-map-pin-line', label: 'Levante, Córdoba' },
	{ icon: 'ri-phone-line', label: '650 21 53 58' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Venussa Salon De Belleza Unisex en Levante (Córdoba)' },
	{ src: IMAGES.fotoInterior, alt: 'Venussa en El Avellano 16' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Venussa Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Venussa Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Venussa Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34650215358',
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
