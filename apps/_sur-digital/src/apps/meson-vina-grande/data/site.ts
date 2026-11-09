/**
 * Datos de Mesón Viña Grande — Cáceres.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Mesón Viña Grande,
 *   39.471503,-6.3787469, feature 0xd15dfdbd422ad45:0xf6cc13c06838d136
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   Las fuentes consultadas se contradicen o no se pudieron leer.
 */

import fotoPortada from '../assets/fotos/meson-vina-grande-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/meson-vina-grande-vertical-02.jpg';
import fotoBarra from '../assets/fotos/meson-vina-grande-vertical-03.jpg';
import fotoSala from '../assets/fotos/meson-vina-grande-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/meson-vina-grande-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/meson-vina-grande-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/meson-vina-grande-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/meson-vina-grande-apaisada-08.jpg';
import logo from '../assets/fotos/meson-vina-grande-logo.svg';

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
	'https://www.google.com/maps/place/Mes%C3%B3n+Vi%C3%B1a+Grande/@39.471503,-6.3787469,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfdbd422ad45:0xf6cc13c06838d136!8m2!3d39.471503!4d-6.3787469!16s%2Fg%2F1hm51y1f7?authuser=0&hl=es';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Mesón Viña Grande',
	shortName: 'Mesón Viña Grande',
	tagline: 'Restaurante en Cáceres',
	claim: 'Mesón Viña Grande en Cáceres',
	summary:
		'Mesón Viña Grande es un restaurante en Cáceres. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
	street: PENDIENTE,
	district: 'Cáceres',
	borough: 'Cáceres',
	city: 'Cáceres',
	postalCode: PENDIENTE,
	region: 'Extremadura',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.471503%2C-6.3787469&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.471503, lng: -6.3787469 },
	featureId: '0xd15dfdbd422ad45:0xf6cc13c06838d136',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/meson-vina-grande',
};

export const LEGAL = {
	razonSocial: 'Mesón Viña Grande',
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
	{ label: 'Servicios', href: '/meson-vina-grande/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/meson-vina-grande/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-map-pin-2-line',
		title: 'Cáceres',
		text: 'Consulta la ubicación exacta en Google Maps.',
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
		text: 'Carta y precios: consúltalos en el local o en la ficha de Google.',
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
		title: 'En Cáceres',
		text: 'Ubicación en la ficha de Google Maps.',
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
		q: '¿Dónde está Mesón Viña Grande?',
		a: 'En Cáceres. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Cáceres' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Mesón Viña Grande en Cáceres' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Mesón Viña Grande' },
	{ src: IMAGES.fotoCejas, alt: 'Mesón Viña Grande, Cáceres' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Mesón Viña Grande' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Mesón Viña Grande' },
	{ src: IMAGES.fotoExtra2, alt: 'Mesón Viña Grande, Cáceres' },
	{ src: IMAGES.fotoExtra3, alt: 'Mesón Viña Grande' },
	{ src: IMAGES.fotoExtra4, alt: 'Mesón Viña Grande, Cáceres' },
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
		addressLocality: BUSINESS.city,
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
