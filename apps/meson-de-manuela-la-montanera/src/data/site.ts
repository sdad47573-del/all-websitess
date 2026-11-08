/**
 * Datos de Mesón de Manuela, La Montanera.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Mesón de Manuela, La Montanera,
 *   36.7797295,-6.3535882, feature 0xd0dde260e95b9fd:0xc8d11143ab6c62f6
 * - Dirección (Calle Bolsa 10, 11540 Sanlúcar de Barrameda): directorios
 *   locales (Tripadvisor, toppingsandsalads). Dato de directorio a confirmar
 *   en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Teléfono, horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/meson-de-manuela-la-montanera-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/meson-de-manuela-la-montanera-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/meson-de-manuela-la-montanera-apaisada-03.jpg';
import fotoSala from '../assets/fotos/meson-de-manuela-la-montanera-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/meson-de-manuela-la-montanera-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/meson-de-manuela-la-montanera-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/meson-de-manuela-la-montanera-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/meson-de-manuela-la-montanera-vertical-08.jpg';
import logo from '../assets/fotos/meson-de-manuela-la-montanera-logo.svg';

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
	'https://www.google.com/maps/place/Mes%C3%B3n+de+Manuela,+La+Montanera/@36.7797295,-6.3535882,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dde260e95b9fd:0xc8d11143ab6c62f6!8m2!3d36.7797295!4d-6.3535882!16s%2Fg%2F11df6k8jgz?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Mesón de Manuela, La Montanera',
	shortName: 'Mesón de Manuela',
	tagline: 'Mesón en Sanlúcar de Barrameda',
	claim: 'Mesón de Manuela, La Montanera en Sanlúcar de Barrameda',
	summary:
		'Mesón de Manuela, La Montanera es un mesón en pleno centro de Sanlúcar de Barrameda. Carnes, chacinas, revueltos y montaditos en ambiente familiar.',
	street: 'Calle Bolsa 10',
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
		'https://maps.google.com/maps?q=36.7797295%2C-6.3535882&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7797295, lng: -6.3535882 },
	featureId: '0xd0dde260e95b9fd:0xc8d11143ab6c62f6',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://meson-de-manuela-la-montanera.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Mesón de Manuela, La Montanera',
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
		title: 'Sanlúcar de Barrameda',
		text: 'En pleno centro, en Calle Bolsa 10.',
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
		title: 'Mesón',
		text: 'Carnes a la parrilla, chacinas, revueltos y montaditos.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Desayunos y tapeo',
		text: 'Recomendado también para desayunar y tapear en el centro.',
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
		text: 'Calle Bolsa 10 · 11540 Sanlúcar de Barrameda (Cádiz).',
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
		q: '¿Dónde está Mesón de Manuela, La Montanera?',
		a: 'En Calle Bolsa 10, 11540 Sanlúcar de Barrameda. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Sanlúcar de Barrameda' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Mesón de Manuela, La Montanera en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Mesón de Manuela, La Montanera' },
	{ src: IMAGES.fotoCejas, alt: 'Mesón de Manuela, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Mesón de Manuela, La Montanera' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Mesón de Manuela, La Montanera' },
	{ src: IMAGES.fotoExtra2, alt: 'Mesón de Manuela, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoExtra3, alt: 'Mesón de Manuela, La Montanera' },
	{ src: IMAGES.fotoExtra4, alt: 'Mesón de Manuela, Sanlúcar de Barrameda' },
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
