/**
 * Datos de Los Faroles.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Los Faroles,
 *   39.4380363,-6.274437, feature 0xd15dcfc26b761fd:0xf3012e6a642cecfb
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Zaragoza) se deduce de las coordenadas, no de un dato confirmado.
 */


import fotoPortada from '../assets/fotos/los-faroles-vertical-01.jpg';
import fotoCentro from '../assets/fotos/los-faroles-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/los-faroles-vertical-03.jpg';
import fotoSala from '../assets/fotos/los-faroles-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/los-faroles-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/los-faroles-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/los-faroles-vista-8-08.jpg';
import fotoExtra4 from '../assets/fotos/los-faroles-apaisada-07.jpg';
import logo from '../assets/fotos/los-faroles-logo.svg';

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
	'https://www.google.com/maps/place/La+Los Faroles/data=!4m7!3m6!1s0xd5914eafafc450d:0x7ff3b6d4eda7a2bf!8m2!3d41.6556449!4d-0.8846582!16s%2Fg%2F11cns7tj3n!19sChIJc3k9UMMUWQ0RQaAyuUsIkEI?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Los Faroles',
	shortName: 'Los Faroles',
	tagline: 'Restaurante en Zaragoza',
	claim: 'Los Faroles en Zaragoza',
	summary:
		'Los Faroles es un local en Zaragoza. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
	street: PENDIENTE,
	district: 'Zaragoza',
	borough: 'Zaragoza',
	city: 'Zaragoza',
	postalCode: PENDIENTE,
	region: 'Aragón',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.4380363%2C-6.274437&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.4380363, lng: -6.274437 },
	featureId: '0xd15dcfc26b761fd:0xf3012e6a642cecfb',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/los-faroles',
};

export const LEGAL = {
	razonSocial: 'Los Faroles',
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
	{ label: 'Servicios', href: '/los-faroles/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/los-faroles/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-map-pin-2-line',
		title: 'Zaragoza',
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
		title: 'En Zaragoza',
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
		q: '¿Dónde está Los Faroles?',
		a: 'En Zaragoza. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Zaragoza' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Los Faroles en Zaragoza' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Los Faroles' },
	{ src: IMAGES.fotoCejas, alt: 'Los Faroles, Zaragoza' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Los Faroles' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Los Faroles' },
	{ src: IMAGES.fotoExtra2, alt: 'Los Faroles, Zaragoza' },
	{ src: IMAGES.fotoExtra3, alt: 'Los Faroles' },
	{ src: IMAGES.fotoExtra4, alt: 'Los Faroles, Zaragoza' },
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
