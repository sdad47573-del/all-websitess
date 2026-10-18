/**
 * Datos de La Tabernita — Calle Antonio Cánovas, 2, 50004 Zaragoza.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: La Tabernita,
 *   41.6481691,-0.8908018, feature 0xd5914c3503d7973:0x4290084bb932a041
 * - Páginas Amarillas: Calle Antonio Cánovas, 2, 50004 Zaragoza; teléfono 654 253 112;
 *   cocina de tapas y raciones; horario de lunes a sábado (domingo cerrado).
 * - TripAdvisor (resumen de búsqueda): 4,2 con 48 opiniones.
 *
 * Lo que la web NO inventa:
 * - Carta y precios: no publicados en fuentes verificables.
 * - Otra fuente (Eatbu) da un horario distinto: se indica que hay que confirmarlo.
 */

import fotoPortada from '../assets/fotos/la-tabernita-vertical-01.jpg';
import fotoCentro from '../assets/fotos/la-tabernita-vertical-02.jpg';
import fotoBarra from '../assets/fotos/la-tabernita-vertical-03.jpg';
import fotoSala from '../assets/fotos/la-tabernita-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/la-tabernita-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/la-tabernita-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/la-tabernita-vertical-08.jpg';
import fotoExtra4 from '../assets/fotos/la-tabernita-vertical-09.jpg';
import logo from '../assets/fotos/la-tabernita-logo.svg';

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
	'https://www.google.com/maps/place/La+Tabernita/data=!4m7!3m6!1s0xd5914c3503d7973:0x4290084bb932a041!8m2!3d41.6481691!4d-0.8908018!16s%2Fg%2F11c2pmlcxg!19sChIJc3k9UMMUWQ0RQaAyuUsIkEI?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'La Tabernita',
	shortName: 'La Tabernita',
	tagline: 'Tapas y raciones en Zaragoza',
	claim: 'Tapas y raciones en Calle Antonio Cánovas, Zaragoza',
	summary:
		'La Tabernita es un bar restaurante de tapas y raciones en la Calle Antonio Cánovas, 2 (50004 Zaragoza). Valorado con 4,2 en TripAdvisor. Horario y teléfono según Páginas Amarillas: confírmalos antes de ir.',
	street: 'Calle Antonio Cánovas, 2',
	district: 'Centro',
	borough: 'Centro',
	city: 'Zaragoza',
	postalCode: '50004',
	region: 'Aragón',
	country: 'ES',
	phone: '654 253 112',
	phoneHref: '+34654253112',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6481691%2C-0.8908018&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6481691, lng: -0.8908018 },
	featureId: '0xd5914c3503d7973:0x4290084bb932a041',
	hours: [
		{ days: 'Lunes a jueves', hours: '09:00–16:00 y 20:00–23:00' },
		{ days: 'Viernes y sábado', hours: '09:00–16:00 y 20:00–00:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según Páginas Amarillas. Otra fuente (Eatbu) indica un horario distinto: confírmalo por teléfono.',
	categories: ['Restaurante', 'Tapas', 'Raciones'],
	siteUrl: 'https://la-tabernita.vercel.app',
};

export const LEGAL = {
	razonSocial: 'La Tabernita',
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
		title: 'Centro de Zaragoza',
		text: 'Calle Antonio Cánovas, 2, 50004 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,2 en TripAdvisor',
		text: 'Valoración de 48 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Teléfono',
		text: 'Llama al 654 253 112 para consultar mesa.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-cup-line',
		title: 'Tapas',
		text: 'Tapas y raciones para compartir, en el bar.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Raciones',
		text: 'Cocina de tapas y raciones según la carta del día.',
	},
	{
		icon: 'ri-team-line',
		title: 'Grupos',
		text: 'Para grupos: consulta antes por teléfono.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'La carta',
		items: [
			{ nombre: 'Tapas', precio: 'A consultar' },
			{ nombre: 'Raciones para compartir', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el centro',
		text: 'Calle Antonio Cánovas, 2, 50004 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,2 en TripAdvisor',
		text: '48 opiniones de clientes.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Teléfono',
		text: 'Llama al 654 253 112 para consultar mesa.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario a confirmar',
		text: 'Según Páginas Amarillas; confírmalo por teléfono.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Carta y precios no publicados: se confirman en el local.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Tabernita?',
		a: 'En la Calle Antonio Cánovas, 2, 50004 Zaragoza. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 654 253 112.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Según Páginas Amarillas: de lunes a jueves, 09:00–16:00 y 20:00–23:00; viernes y sábado hasta medianoche; domingo cerrado. Confírmalo por teléfono antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-cup-line', label: 'Tapas y raciones' },
	{ icon: 'ri-star-fill', label: '4,2 en TripAdvisor' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'La Tabernita en Zaragoza' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de La Tabernita' },
	{ src: IMAGES.fotoCejas, alt: 'La barra de La Tabernita' },
	{ src: IMAGES.fotoCalle, alt: 'El local de La Tabernita' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en La Tabernita' },
	{ src: IMAGES.fotoExtra2, alt: 'Tapas en La Tabernita' },
	{ src: IMAGES.fotoExtra3, alt: 'Platos de La Tabernita' },
	{ src: IMAGES.fotoExtra4, alt: 'La Tabernita, Zaragoza' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'La Tabernita Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34654253112',
	servesCuisine: ['Tapas', 'Española'],
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: 4.2,
		reviewCount: 48,
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La carta de La Tabernita',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'Restaurant', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
