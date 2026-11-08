/**
 * Datos de Bar Restaurante Las Campanas · Cantina de Quintanapalla.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Bar Restaurante Las Campanas · Cantina de Quintanapalla,
 *   42.4086059,-3.533353, feature 0xd45f17d18edfaa7:0x8a6244248c6320ba
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Quintanapalla) se deduce de las coordenadas, no de un dato confirmado.
 */

import fotoPortada from '../assets/fotos/bar-restaurante-las-campanas-vertical-01.jpg';
import fotoCentro from '../assets/fotos/bar-restaurante-las-campanas-vertical-02.jpg';
import fotoBarra from '../assets/fotos/bar-restaurante-las-campanas-vertical-03.jpg';
import fotoSala from '../assets/fotos/bar-restaurante-las-campanas-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/bar-restaurante-las-campanas-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/bar-restaurante-las-campanas-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/bar-restaurante-las-campanas-apaisada-08.jpg';
import fotoExtra4 from '../assets/fotos/bar-restaurante-las-campanas-vertical-09.jpg';
import logo from '../assets/fotos/bar-restaurante-las-campanas-logo.svg';

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
	'https://www.google.com/maps/place/Bar+Restaurante+Las+campanas+.+Cantina+de+Quintanapalla/data=!4m7!3m6!1s0xd45f17d18edfaa7:0x8a6244248c6320ba!8m2!3d42.4086059!4d-3.533353!16s%2Fg%2F11h6f79rd8!19sChIJp_rtGH3xRQ0RuiBjjCREYoo?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla',
	shortName: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla',
	tagline: 'Restaurante en Quintanapalla',
	claim: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla en Quintanapalla',
	summary:
		'Bar Restaurante Las Campanas · Cantina de Quintanapalla es un local en Quintanapalla. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
	street: PENDIENTE,
	district: 'Quintanapalla',
	borough: 'Quintanapalla',
	city: 'Quintanapalla',
	postalCode: PENDIENTE,
	region: 'Castilla y León',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=42.4086059%2C-3.533353&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 42.4086059, lng: -3.533353 },
	featureId: '0xd45f17d18edfaa7:0x8a6244248c6320ba',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://bar-restaurante-las-campanas.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla',
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
		title: 'Quintanapalla',
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
		title: 'En Quintanapalla',
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
		q: '¿Dónde está Bar Restaurante Las Campanas · Cantina de Quintanapalla?',
		a: 'En Quintanapalla. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Quintanapalla' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla en Quintanapalla' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Bar Restaurante Las Campanas · Cantina de Quintanapalla' },
	{ src: IMAGES.fotoCejas, alt: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla, Quintanapalla' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Bar Restaurante Las Campanas · Cantina de Quintanapalla' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Bar Restaurante Las Campanas · Cantina de Quintanapalla' },
	{ src: IMAGES.fotoExtra2, alt: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla, Quintanapalla' },
	{ src: IMAGES.fotoExtra3, alt: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla' },
	{ src: IMAGES.fotoExtra4, alt: 'Bar Restaurante Las Campanas · Cantina de Quintanapalla, Quintanapalla' },
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
