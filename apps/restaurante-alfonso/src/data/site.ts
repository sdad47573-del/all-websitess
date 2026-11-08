/**
 * Datos de Restaurante Alfonso.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Alfonso,
 *   36.738977,-6.4319695, feature 0xd0e75d3808ea5b5:0xe21914c4ef6c2cc8
 * - Dirección y teléfono (Av. de la Diputación 16, 11550 Chipiona ·
 *   629 77 40 50): directorios locales (Kitking, Tripadvisor, Páginas
 *   Amarillas; Facebook cita también 956 37 08 05). Datos de directorio a
 *   confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/restaurante-alfonso-panoramica-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-alfonso-vertical-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-alfonso-apaisada-03.jpg';
import fotoSala from '../assets/fotos/restaurante-alfonso-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-alfonso-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-alfonso-panoramica-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-alfonso-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-alfonso-apaisada-08.jpg';
import logo from '../assets/fotos/restaurante-alfonso-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Alfonso/@36.738977,-6.4319695,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e75d3808ea5b5:0xe21914c4ef6c2cc8!8m2!3d36.738977!4d-6.4319695!16s%2Fg%2F11txt323tp?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Alfonso',
	shortName: 'Alfonso',
	tagline: 'Restaurante en Chipiona',
	claim: 'Restaurante Alfonso en Chipiona',
	summary:
		'Restaurante Alfonso es un bar restaurante en Chipiona (Cádiz), muy cerquita del centro. Cocina mediterránea y andaluza para tapear y comer.',
	street: 'Avenida de la Diputación 16',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Andalucía',
	country: 'ES',
	phone: '629 77 40 50',
	phoneHref: 'tel:+34629774050',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.738977%2C-6.4319695&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.738977, lng: -6.4319695 },
	featureId: '0xd0e75d3808ea5b5:0xe21914c4ef6c2cc8',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 629 77 40 50.',
	categories: ['Restaurante'],
	siteUrl: 'https://restaurante-alfonso.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante Alfonso',
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
		title: 'Chipiona',
		text: 'Muy cerquita del centro, en Av. de la Diputación.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina mediterránea',
		text: 'Tapas y platos andaluces para el día a día.',
	},
	{
		icon: 'ri-phone-line',
		title: '629 77 40 50',
		text: 'Llama para reservar o consultar la carta.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Bar restaurante',
		text: 'Bar amplio para tapear y comer en Chipiona.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Tapas',
		text: 'Ambiente de bar para el tapeo diario.',
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
		title: 'En Chipiona',
		text: 'Av. de la Diputación 16 · 11550 Chipiona (Cádiz).',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '629 77 40 50 para reservar en fines de semana.',
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
		q: '¿Dónde está Restaurante Alfonso?',
		a: 'En Avenida de la Diputación 16, 11550 Chipiona. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 629 77 40 50 para reservar o consultar la carta.',
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
	{ icon: 'ri-phone-line', label: '629 77 40 50' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Alfonso en Chipiona' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Alfonso' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Alfonso, Chipiona' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Alfonso' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Alfonso' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Alfonso, Chipiona' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Alfonso' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Alfonso, Chipiona' },
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
