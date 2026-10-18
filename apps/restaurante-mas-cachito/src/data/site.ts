/**
 * Datos de Restaurante Más Cachito.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Más Cachito,
 *   39.4557222,-6.3814867, feature 0xd15dfd9523710a3:0x118fd2061743339c
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Cáceres) se deduce de las coordenadas, no de un dato confirmado.
 */

import fotoPortada from '../assets/fotos/restaurante-mas-cachito-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-mas-cachito-panoramica-04.jpg';
import fotoBarra from '../assets/fotos/restaurante-mas-cachito-vertical-07.jpg';
import fotoSala from '../assets/fotos/restaurante-mas-cachito-apaisada-02.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-mas-cachito-apaisada-03.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-mas-cachito-panoramica-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-mas-cachito-apaisada-05.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-mas-cachito-apaisada-08.jpg';
import logo from '../assets/fotos/restaurante-mas-cachito-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+M%C3%A1s+Cachito/@39.4557222,-6.3814867,17z/data=!3m1!4b1!4m6!3m5!1s0xd15dfd9523710a3:0x118fd2061743339c!8m2!3d39.4557222!4d-6.3814867!16s%2Fg%2F11bbrm1v7d?authuser=0&hl=es';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Más Cachito',
	shortName: 'Restaurante Más Cachito',
	tagline: 'Restaurante en Cáceres',
	claim: 'Restaurante Más Cachito en Cáceres',
	summary:
		'Restaurante Más Cachito es un restaurante en Cáceres. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
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
		'https://maps.google.com/maps?q=39.4557222%2C-6.3814867&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.4557222, lng: -6.3814867 },
	featureId: '0xd15dfd9523710a3:0x118fd2061743339c',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://restaurante-mas-cachito.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante Más Cachito',
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
		q: '¿Dónde está Restaurante Más Cachito?',
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
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Más Cachito en Cáceres' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Más Cachito' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Más Cachito, Cáceres' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Más Cachito' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Más Cachito' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Más Cachito, Cáceres' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Más Cachito' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Más Cachito, Cáceres' },
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
