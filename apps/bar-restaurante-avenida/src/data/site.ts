/**
 * Datos de Bar Restaurante Avenida.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Bar Restaurante Avenida,
 *   36.7934622,-6.3371888, feature 0xd0de0a45f1f53e5:0xac80f2c229aacfae
 * - Dirección y teléfono (Av. de Huelva 108, 11540 Sanlúcar de Barrameda ·
 *   956 38 07 51): directorios locales (Cylex, Mapcarta, Sanlúcar Turismo,
 *   Instagram). Datos de directorio a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/bar-restaurante-avenida-panoramica-01.jpg';
import fotoCentro from '../assets/fotos/bar-restaurante-avenida-vertical-02.jpg';
import fotoBarra from '../assets/fotos/bar-restaurante-avenida-vertical-03.jpg';
import fotoSala from '../assets/fotos/bar-restaurante-avenida-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/bar-restaurante-avenida-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/bar-restaurante-avenida-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/bar-restaurante-avenida-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/bar-restaurante-avenida-vertical-08.jpg';
import logo from '../assets/fotos/bar-restaurante-avenida-logo.svg';

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
	'https://www.google.com/maps/place/Bar+Restaurante+Avenida/@36.7934622,-6.3371888,17z/data=!3m1!4b1!4m6!3m5!1s0xd0de0a45f1f53e5:0xac80f2c229aacfae!8m2!3d36.7934622!4d-6.3371888!16s%2Fg%2F11bw47cxvx?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Bar Restaurante Avenida',
	shortName: 'Avenida',
	tagline: 'Bar restaurante en Sanlúcar de Barrameda',
	claim: 'Bar Restaurante Avenida en Sanlúcar de Barrameda',
	summary:
		'Bar Restaurante Avenida en Sanlúcar de Barrameda (Cádiz), en Avenida de Huelva 108. Tapas y platos para comer a diario en la Dehesilla.',
	street: 'Avenida de Huelva 108',
	district: 'Sanlúcar de Barrameda',
	borough: 'Sanlúcar de Barrameda',
	city: 'Sanlúcar de Barrameda',
	postalCode: '11540',
	region: 'Andalucía',
	country: 'ES',
	phone: '956 38 07 51',
	phoneHref: 'tel:+34956380751',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7934622%2C-6.3371888&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7934622, lng: -6.3371888 },
	featureId: '0xd0de0a45f1f53e5:0xac80f2c229aacfae',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 956 38 07 51.',
	categories: ['Restaurante'],
	siteUrl: 'https://bar-restaurante-avenida.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Bar Restaurante Avenida',
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
		title: 'Av. de Huelva 108',
		text: 'En la zona de la Dehesilla, Sanlúcar.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Tapas y platos',
		text: 'Bar restaurante para comer a diario.',
	},
	{
		icon: 'ri-phone-line',
		title: '956 38 07 51',
		text: 'Llama para reservar o consultar la carta.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Bar restaurante',
		text: 'Tapas, raciones y platos del día en Sanlúcar.',
	},
	{
		icon: 'ri-group-line',
		title: 'Grupos',
		text: 'Capacidad para grupos (según guía local de restaurantes).',
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
		text: 'Av. de Huelva 108 · 11540 Sanlúcar de Barrameda.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '956 38 07 51 para reservar en fines de semana.',
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
		q: '¿Dónde está Bar Restaurante Avenida?',
		a: 'En Avenida de Huelva 108, 11540 Sanlúcar de Barrameda. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 956 38 07 51 para reservar o consultar la carta.',
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
	{ icon: 'ri-map-pin-line', label: 'Sanlúcar de Barrameda' },
	{ icon: 'ri-phone-line', label: '956 38 07 51' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Bar Restaurante Avenida en Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Bar Restaurante Avenida' },
	{ src: IMAGES.fotoCejas, alt: 'Bar Restaurante Avenida, Sanlúcar' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Bar Restaurante Avenida' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Bar Restaurante Avenida' },
	{ src: IMAGES.fotoExtra2, alt: 'Bar Restaurante Avenida, Sanlúcar de Barrameda' },
	{ src: IMAGES.fotoExtra3, alt: 'Bar Restaurante Avenida' },
	{ src: IMAGES.fotoExtra4, alt: 'Bar Restaurante Avenida, Sanlúcar' },
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
