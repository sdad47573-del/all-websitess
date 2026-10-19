/**
 * Datos de Restaurante Casa Tanín.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Casa Tanín,
 *   42.3382422,-3.696122, feature 0xd45fd888d7cef29:0x14a92027d8fa9dc8
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Burgos) se deduce de las coordenadas, no de un dato confirmado.
 */

import fotoPortada from '../assets/fotos/restaurante-casa-tanin-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-casa-tanin-vertical-03.jpg';
import fotoBarra from '../assets/fotos/restaurante-casa-tanin-vertical-05.jpg';
import fotoSala from '../assets/fotos/restaurante-casa-tanin-apaisada-02.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-casa-tanin-apaisada-04.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-casa-tanin-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-casa-tanin-vertical-09.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-casa-tanin-vertical-07.jpg';
import logo from '../assets/fotos/restaurante-casa-tanin-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Casa+Tan%C3%ADn/data=!4m7!3m6!1s0xd45fd888d7cef29:0x14a92027d8fa9dc8!8m2!3d42.3382422!4d-3.696122!16s%2Fg%2F11l351crhm!19sChIJKe98jYj9RQ0RyJ362CcgqRQ?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Casa Tanín',
	shortName: 'Restaurante Casa Tanín',
	tagline: 'Restaurante en Burgos',
	claim: 'Restaurante Casa Tanín en Burgos',
	summary:
		'Restaurante Casa Tanín es un local en Burgos. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
	street: PENDIENTE,
	district: 'Burgos',
	borough: 'Burgos',
	city: 'Burgos',
	postalCode: PENDIENTE,
	region: 'Castilla y León',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=42.3382422%2C-3.696122&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 42.3382422, lng: -3.696122 },
	featureId: '0xd45fd888d7cef29:0x14a92027d8fa9dc8',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://restaurante-casa-tanin.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante Casa Tanín',
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
		title: 'Burgos',
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
		title: 'En Burgos',
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
		q: '¿Dónde está Restaurante Casa Tanín?',
		a: 'En Burgos. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Burgos' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Casa Tanín en Burgos' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Casa Tanín' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Casa Tanín, Burgos' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Casa Tanín' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Casa Tanín' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Casa Tanín, Burgos' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Casa Tanín' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Casa Tanín, Burgos' },
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
