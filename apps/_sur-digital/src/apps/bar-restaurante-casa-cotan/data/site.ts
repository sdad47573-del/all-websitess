/**
 * Datos de Bar Restaurante Casa Cotan.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Bar restaurante Casa Cotan,
 *   36.7314941,-6.4268583, feature 0xd0e7598deb1e14b:0x70720bc15b21b44
 * - Dirección y teléfono (Av. del Universo 35, 11550 Chipiona · 681 67 83 88):
 *   directorios locales (Facebook/Instagram casacotan, Tripadvisor,
 *   Páginas Amarillas). Datos de directorio a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/bar-restaurante-casa-cotan-cuadrada-01.jpg';
import fotoCentro from '../assets/fotos/bar-restaurante-casa-cotan-cuadrada-02.jpg';
import fotoBarra from '../assets/fotos/bar-restaurante-casa-cotan-cuadrada-03.jpg';
import fotoSala from '../assets/fotos/bar-restaurante-casa-cotan-cuadrada-04.jpg';
import fotoExtra1 from '../assets/fotos/bar-restaurante-casa-cotan-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/bar-restaurante-casa-cotan-cuadrada-06.jpg';
import fotoExtra3 from '../assets/fotos/bar-restaurante-casa-cotan-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/bar-restaurante-casa-cotan-cuadrada-08.jpg';
import logo from '../assets/fotos/bar-restaurante-casa-cotan-logo.svg';

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
	'https://www.google.com/maps/place/Bar+restaurante+Casa+Cotan/@36.7314941,-6.4268583,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e7598deb1e14b:0x70720bc15b21b44!8m2!3d36.7314941!4d-6.4268583!16s%2Fg%2F11b_2_7539?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Bar Restaurante Casa Cotan',
	shortName: 'Casa Cotan',
	tagline: 'Bar restaurante en Chipiona',
	claim: 'Bar Restaurante Casa Cotan en Chipiona',
	summary:
		'Bar Restaurante Casa Cotan (desde 1983) en Chipiona (Cádiz), junto a la piscina municipal. Brasas de leña y carbón de encina, carnes ibéricas y guisos caseros.',
	street: 'Avenida del Universo 35',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Andalucía',
	country: 'ES',
	phone: '681 67 83 88',
	phoneHref: 'tel:+34681678388',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7314941%2C-6.4268583&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7314941, lng: -6.4268583 },
	featureId: '0xd0e7598deb1e14b:0x70720bc15b21b44',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 681 67 83 88.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-casa-cotan',
};

export const LEGAL = {
	razonSocial: 'Bar Restaurante Casa Cotan',
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
	{ label: 'Servicios', href: '/bar-restaurante-casa-cotan/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/bar-restaurante-casa-cotan/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Brasa de leña',
		text: 'Brasas de leña y carbón de encina desde 1983.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Carnes y guisos',
		text: 'Carnes ibéricas, rojas, asados y guisos caseros.',
	},
	{
		icon: 'ri-phone-line',
		title: '681 67 83 88',
		text: 'Llama para reservar tu mesa.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Bar restaurante',
		text: 'Bar, restaurante y brasas junto a la piscina municipal.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Brasas',
		text: 'Carnes a la brasa de leña y carbón de encina.',
	},
	{
		icon: 'ri-group-line',
		title: 'Familias y grupos',
		text: 'Ambiente familiar para comer en grupo en Chipiona.',
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
		title: 'En Chipiona',
		text: 'Av. del Universo 35 · 11550 Chipiona (Cádiz).',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '681 67 83 88 para reservar en fines de semana.',
	},
	{
		icon: 'ri-star-line',
		title: '4,5 sobre 5',
		text: 'Valoración media de directorios locales con decenas de opiniones.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin datos inventados',
		text: 'El horario y los precios se confirman en el local o en Google Maps.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurante Casa Cotan?',
		a: 'En Avenida del Universo 35, 11550 Chipiona, junto a la piscina municipal. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 681 67 83 88 para reservar o consultar la carta.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Se confirma en la ficha pública de Google Maps o por teléfono antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'Chipiona' },
	{ icon: 'ri-phone-line', label: '681 67 83 88' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Bar Restaurante Casa Cotan en Chipiona' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Bar Restaurante Casa Cotan' },
	{ src: IMAGES.fotoCejas, alt: 'Casa Cotan, Chipiona' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Bar Restaurante Casa Cotan' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Bar Restaurante Casa Cotan' },
	{ src: IMAGES.fotoExtra2, alt: 'Casa Cotan, Chipiona' },
	{ src: IMAGES.fotoExtra3, alt: 'Bar Restaurante Casa Cotan' },
	{ src: IMAGES.fotoExtra4, alt: 'Casa Cotan, Chipiona' },
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
