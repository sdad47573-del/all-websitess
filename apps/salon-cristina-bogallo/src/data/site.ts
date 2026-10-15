/**
 * Datos del Salón De Belleza Cristina Bogallo — C. Alfonso XIII 6
 * (Centro, 14002 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón De Belleza Cristina Bogallo,
 *   37.885418,-4.7771482, feature 0xd6cdf7cf69e77d7:0x779d1b2f72014443
 * - salondebellezaespana.com: C. Alfonso XIII, 6, 14002 Córdoba;
 *   peluquería (recogidos de boda/madrina, mechas); sin teléfono listado.
 * - Instagram (@cristinabogallo): Teléfono 687129505.
 *
 * Lo que la web NO inventa:
 * - Sin horario publicado en ninguna fuente: se indica "con cita" y se
 *   pide confirmar por teléfono. No hay openingHoursSpecification.
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 */

import fotoPortada from '../assets/fotos/salon-cristina-bogallo-malaga.svg';
import fotoEstudio from '../assets/fotos/salon-cristina-bogallo-estudio.svg';
import fotoFacial from '../assets/fotos/salon-cristina-bogallo-facial.svg';
import fotoCorporal from '../assets/fotos/salon-cristina-bogallo-corporal.svg';
import fotoGaleria1 from '../assets/fotos/salon-cristina-bogallo-malaga.svg';
import fotoGaleria2 from '../assets/fotos/salon-cristina-bogallo-estudio.svg';
import fotoGaleria3 from '../assets/fotos/salon-cristina-bogallo-facial.svg';
import fotoGaleria4 from '../assets/fotos/salon-cristina-bogallo-corporal.svg';
import logo from '../assets/fotos/salon-cristina-bogallo-logo.svg';

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
	'https://www.google.com/maps/place/Sal%C3%B3n+De+Belleza+Cristina+Bogallo/@37.885418,-4.7771482,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf7cf69e77d7:0x779d1b2f72014443!8m2!3d37.885418!4d-4.7771482!16s%2Fg%2F11k5t57hkv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón De Belleza Cristina Bogallo',
	shortName: 'Cristina Bogallo',
	tagline: 'Peluquería en el Centro, Córdoba',
	claim: 'Tu peluquería en el Centro de Córdoba',
	summary:
		'Salón De Belleza Cristina Bogallo es una peluquería en C. Alfonso XIII 6 (Centro, 14002 Córdoba): recogidos de boda, mechas y peluquería. Llama al 687 12 95 05 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Alfonso XIII 6',
	district: 'Centro',
	borough: 'Distrito Centro',
	city: 'Córdoba',
	postalCode: '14002',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '687 12 95 05',
	phoneHref: 'tel:+34687129505',
	whatsapp: 'https://wa.me/34687129505?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Cristina%20Bogallo.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	instagram: 'https://www.instagram.com/cristinabogallo/',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.885418%2C-4.7771482&z=17&output=embed',
	geo: { lat: 37.885418, lng: -4.7771482 },
	featureId: '0xd6cdf7cf69e77d7:0x779d1b2f72014443',
	priceRange: '€€',
	categories: ['Peluquería', 'Recogidos', 'Mechas', 'Belleza'],
	hours: [
		{ days: 'Horario', hours: 'Con cita — a convenir' },
	],
	hoursNote:
		'El salón no publica horario: confirma día y hora llamando al 687 12 95 05 o por su Instagram, porque puede variar.',
	siteUrl: 'https://salon-cristina-bogallo.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Salón De Belleza Cristina Bogallo',
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
		title: 'Recogidos y mechas',
		text: 'Recogidos de boda, mechas y peluquería.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Alfonso XIII 6',
		text: 'C. Alfonso XIII 6 · 14002 Córdoba, Centro.',
	},
	{
		icon: 'ri-phone-line',
		title: '687 12 95 05',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Bodas y eventos',
		text: 'Recogidos para madrinas e invitadas.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería y cuidado del cabello. Confirma en el 687 12 95 05.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Recogidos',
		text: 'Recogidos de boda y eventos, con mantilla si lo necesitas.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Mechas y color',
		text: 'Mechas y color. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 687 12 95 05 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En el Centro (14002). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Peluquería', precio: 'A consultar' },
			{ nombre: 'Recogidos de boda y eventos', precio: 'A consultar' },
			{ nombre: 'Mechas y color', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Centro',
		text: 'Alfonso XIII 6: Centro, Córdoba.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Bodas',
		text: 'Recogidos para madrinas, familiares e invitadas.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 687 12 95 05 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita',
		text: 'Sin horario publicado: confirma día y hora antes de ir.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'En Instagram',
		text: 'Sigue sus trabajos en @cristinabogallo.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salón De Belleza Cristina Bogallo?',
		a: 'En C. Alfonso XIII 6 (Centro, 14002 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 687 12 95 05, por WhatsApp o por su Instagram. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería con recogidos de boda y eventos, mechas y color. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el salón no publica carta propia. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El salón no publica horario: funciona con cita. Confirma día y hora por teléfono o Instagram.',
	},
	{
		q: '¿Hacen recogidos para bodas?',
		a: 'Sí: recogidos para madrinas e invitadas, con sujeción de mantilla. Reserva con antelación.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-line', label: 'Recogidos' },
	{ icon: 'ri-map-pin-line', label: 'Centro, Córdoba' },
	{ icon: 'ri-phone-line', label: '687 12 95 05' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón De Belleza Cristina Bogallo en el Centro (Córdoba)' },
	{ src: IMAGES.fotoInterior, alt: 'Cristina Bogallo en Alfonso XIII 6' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Cristina Bogallo Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Cristina Bogallo Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Cristina Bogallo Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34687129505',
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
