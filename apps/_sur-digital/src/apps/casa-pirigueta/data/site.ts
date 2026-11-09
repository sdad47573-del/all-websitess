/**
 * Datos de Casa Pirigüeta.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Casa Pirigüeta,
 *   36.7895816,-6.3509637, feature 0xd0de122a8bf1fa3:0x5bb6bde8d0488da5
 * - Dirección y teléfono (Pórtico de Bajo de Guía 24, 11540 Sanlúcar de
 *   Barrameda · 601 64 01 83): Instagram/Facebook del local, Tripadvisor,
 *   Cosasdecome. Datos de directorio a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/casa-pirigueta-vertical-01.jpg';
import fotoCentro from '../assets/fotos/casa-pirigueta-vertical-02.jpg';
import fotoBarra from '../assets/fotos/casa-pirigueta-vertical-03.jpg';
import fotoSala from '../assets/fotos/casa-pirigueta-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/casa-pirigueta-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/casa-pirigueta-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/casa-pirigueta-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/casa-pirigueta-vertical-08.jpg';
import logo from '../assets/fotos/casa-pirigueta-logo.svg';

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
	'https://www.google.com/maps/place/Casa+Pirig%C3%BCeta/@36.7895816,-6.3509637,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de122a8bf1fa3:0x5bb6bde8d0488da5!8m2!3d36.7895816!4d-6.3509637!16s%2Fg%2F11f781whcp?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Casa Pirigüeta',
	shortName: 'Pirigüeta',
	tagline: 'Restaurante marinero en Sanlúcar de Barrameda',
	claim: 'Casa Pirigüeta en Sanlúcar de Barrameda',
	summary:
		'Casa Pirigüeta es un restaurante marinero en Bajo de Guía, Sanlúcar de Barrameda. Sabor tradicional sanluqueño, mariscos frescos y vistas al Coto de Doñana.',
	street: 'Pórtico de Bajo de Guía 24',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Andalucía',
	country: 'ES',
	phone: '601 64 01 83',
	phoneHref: 'tel:+34601640183',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7895816%2C-6.3509637&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7895816, lng: -6.3509637 },
	featureId: '0xd0de122a8bf1fa3:0x5bb6bde8d0488da5',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 601 64 01 83.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/casa-pirigueta',
};

export const LEGAL = {
	razonSocial: 'Casa Pirigüeta',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El local', href: '#salon' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/casa-pirigueta/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/casa-pirigueta/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-anchor-line',
		title: 'Bajo de Guía',
		text: 'Sabor marinero con vistas al Coto de Doñana.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina gaditana',
		text: 'Pescado, marisco y recetas tradicionales sanluqueñas.',
	},
	{
		icon: 'ri-phone-line',
		title: '601 64 01 83',
		text: 'Reserva tu mesa por teléfono.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante marinero',
		text: 'Mariscos frescos y platos de la cocina gaditana.',
	},
	{
		icon: 'ri-landscape-line',
		title: 'Vistas a Doñana',
		text: 'Terraza y vistas frente al Coto de Doñana.',
	},
	{
		icon: 'ri-group-line',
		title: 'Familias y grupos',
		text: 'Ambiente familiar en Bajo de Guía.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'La carta',
		items: [{ nombre: 'Carta del local', precio: 'A consultar' }],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sanlúcar',
		text: 'Pórtico de Bajo de Guía 24 · 11540 Sanlúcar de Barrameda.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '601 64 01 83 para reservar en fines de semana.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Fotos y datos actualizados por el local.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin datos inventados',
		text: 'El horario y los precios se confirman en el local o en Google Maps.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Casa Pirigüeta?',
		a: 'En Pórtico de Bajo de Guía 24, 11540 Sanlúcar de Barrameda. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 601 64 01 83 para reservar o consultar la carta.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abre en horario de comidas y cenas; se confirma en la ficha pública de Google Maps antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'Bajo de Guía' },
	{ icon: 'ri-phone-line', label: '601 64 01 83' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Casa Pirigüeta en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Casa Pirigüeta' },
	{ src: IMAGES.fotoCejas, alt: 'Casa Pirigüeta, Bajo de Guía' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Casa Pirigüeta' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Casa Pirigüeta' },
	{ src: IMAGES.fotoExtra2, alt: 'Casa Pirigüeta, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoExtra3, alt: 'Casa Pirigüeta' },
	{ src: IMAGES.fotoExtra4, alt: 'Casa Pirigüeta, Sanlúcar de Barrameda' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: BUSINESS.phoneHref,
	areaServed: [{ '@type': 'City', name: BUSINESS.city }],
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		postalCode: BUSINESS.postalCode,
		addressRegion: BUSINESS.region,
		addressCountry: BUSINESS.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: BUSINESS.geo.lat,
		longitude: BUSINESS.geo.lng,
	},
	hasMap: BUSINESS.googleMaps,
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
