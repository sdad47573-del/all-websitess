/**
 * Datos de Restaurante Nuevo Piti.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Nuevo Piti,
 *   36.8200289,-6.3318002, feature 0xd0de0d043257187:0x920dff9623d4d18e
 * - Dirección (Carretera CA-624 156, La Algaida, Sanlúcar de Barrameda):
 *   directorio local (toppingsandsalads). Dato de directorio a confirmar en
 *   la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Teléfono, horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/restaurante-nuevo-piti-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-nuevo-piti-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-nuevo-piti-apaisada-03.jpg';
import fotoSala from '../assets/fotos/restaurante-nuevo-piti-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-nuevo-piti-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-nuevo-piti-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-nuevo-piti-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-nuevo-piti-vertical-08.jpg';
import logo from '../assets/fotos/restaurante-nuevo-piti-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Nuevo+Piti/@36.8200289,-6.3318002,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de0d043257187:0x920dff9623d4d18e!8m2!3d36.8200289!4d-6.3318002!16s%2Fg%2F11b8v8bjqq?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Nuevo Piti',
	shortName: 'Nuevo Piti',
	tagline: 'Restaurante en Sanlúcar de Barrameda',
	claim: 'Restaurante Nuevo Piti en Sanlúcar de Barrameda',
	summary:
		'Restaurante Nuevo Piti es un restaurante en La Algaida, Sanlúcar de Barrameda (Cádiz). Cocina tradicional para almuerzos y cenas en carretera.',
	street: 'Carretera CA-624 156, La Algaida',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Andalucía',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.8200289%2C-6.3318002&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.8200289, lng: -6.3318002 },
	featureId: '0xd0de0d043257187:0x920dff9623d4d18e',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/restaurante-nuevo-piti',
};

export const LEGAL = {
	razonSocial: 'Restaurante Nuevo Piti',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-map-pin-2-line',
		title: 'La Algaida, Sanlúcar',
		text: 'En carretera CA-624, zona de La Algaida.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Fotos, horario y contacto en la ficha pública.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario a confirmar',
		text: 'Consúltalo en la ficha antes de ir.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante',
		text: 'Cocina tradicional para almuerzos y cenas en carretera.',
	},
	{
		icon: 'ri-car-line',
		title: 'En ruta',
		text: 'Parada cómoda en La Algaida con fácil aparcamiento.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Carta y precios: consúltalos en el local o en la ficha.',
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
		text: 'Ctra. CA-624 156, La Algaida · Sanlúcar de Barrameda.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Fotos y datos actualizados por el local.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario a confirmar',
		text: 'Consúltalo en la ficha antes de ir.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin datos inventados',
		text: 'Los datos que no están verificados se marcan como pendientes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Nuevo Piti?',
		a: 'En Carretera CA-624 156, La Algaida, Sanlúcar de Barrameda. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Consulta el teléfono y el horario en la ficha pública de Google Maps.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Se confirma en la ficha pública de Google Maps antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'La Algaida' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Nuevo Piti en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Nuevo Piti' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Nuevo Piti, La Algaida' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Nuevo Piti' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Nuevo Piti' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Nuevo Piti, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Nuevo Piti' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Nuevo Piti, Sanlúcar de Barrameda' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
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
