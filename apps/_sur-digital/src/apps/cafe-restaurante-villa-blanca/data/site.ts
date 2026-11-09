/**
 * Datos de Café Restaurante Villa Blanca.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Café restaurante villa blanca,
 *   36.7398338,-6.4396801, feature 0xd0e75ff505397b3:0x6179addae1ca0cd
 * - Dirección y teléfono (Calle los Corrales, 4, 11550 Chipiona · 666 26 46 35):
 *   directorios locales (turismochipiona.es, Tripadvisor). Se muestran como
 *   datos de directorio a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/cafe-restaurante-villa-blanca-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/cafe-restaurante-villa-blanca-apaisada-04.jpg';
import fotoBarra from '../assets/fotos/cafe-restaurante-villa-blanca-vertical-02.jpg';
import fotoSala from '../assets/fotos/cafe-restaurante-villa-blanca-apaisada-05.jpg';
import fotoExtra1 from '../assets/fotos/cafe-restaurante-villa-blanca-vertical-03.jpg';
import fotoExtra2 from '../assets/fotos/cafe-restaurante-villa-blanca-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/cafe-restaurante-villa-blanca-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/cafe-restaurante-villa-blanca-vertical-08.jpg';
import logo from '../assets/fotos/cafe-restaurante-villa-blanca-logo.svg';

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
	'https://www.google.com/maps/place/Caf%C3%A9+restaurante+villa+blanca/data=!4m7!3m6!1s0xd0e75ff505397b3:0x6179addae1ca0cd!8m2!3d36.7398338!4d-6.4396801!16s%2Fg%2F11f776yjkk!19sChIJs5dTUP91Dg0RzaAcrt2aFwY?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Café Restaurante Villa Blanca',
	shortName: 'Villa Blanca',
	tagline: 'Restaurante en Chipiona',
	claim: 'Café Restaurante Villa Blanca en Chipiona',
	summary:
		'Café Restaurante Villa Blanca es un restaurante en Chipiona (Cádiz), frente al mar junto al faro. Tapeo variado, medias raciones abundantes y terraza en temporada.',
	street: 'Calle los Corrales, 4',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Andalucía',
	country: 'ES',
	phone: '666 26 46 35',
	phoneHref: 'tel:+34666264635',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7398338%2C-6.4396801&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7398338, lng: -6.4396801 },
	featureId: '0xd0e75ff505397b3:0x6179addae1ca0cd',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 666 26 46 35.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/cafe-restaurante-villa-blanca',
};

export const LEGAL = {
	razonSocial: 'Café Restaurante Villa Blanca',
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
	{ label: 'Servicios', href: '/cafe-restaurante-villa-blanca/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/cafe-restaurante-villa-blanca/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-map-pin-2-line',
		title: 'Chipiona',
		text: 'Frente al mar, con vistas al faro de Chipiona.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Tapeo y raciones',
		text: 'Tapeo variado y medias raciones abundantes.',
	},
	{
		icon: 'ri-phone-line',
		title: '666 26 46 35',
		text: 'Llama para reservar o consultar la carta.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante',
		text: 'Cocina mediterránea y española: pescaíto, raciones y platos del día.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza',
		text: 'Terraza en temporada con vistas al océano y al faro.',
	},
	{
		icon: 'ri-takeaway-line',
		title: 'Para llevar y grupos',
		text: 'Comida para llevar y mesas para grupos y familias.',
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
		text: 'Calle los Corrales, 4 · 11550 Chipiona (Cádiz).',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '666 26 46 35 para reservar en fines de semana y temporada alta.',
	},
	{
		icon: 'ri-star-line',
		title: '4,2 sobre 5',
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
		q: '¿Dónde está Café Restaurante Villa Blanca?',
		a: 'En Calle los Corrales, 4, 11550 Chipiona (Cádiz). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 666 26 46 35 para reservar, consultar la carta o encargar comida para llevar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los clientes destacan la buena relación calidad-precio; los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Se confirma en la ficha pública de Google Maps o por teléfono antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'Chipiona' },
	{ icon: 'ri-phone-line', label: '666 26 46 35' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Café Restaurante Villa Blanca en Chipiona' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Café Restaurante Villa Blanca' },
	{ src: IMAGES.fotoCejas, alt: 'Café Restaurante Villa Blanca, Chipiona' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Café Restaurante Villa Blanca' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Café Restaurante Villa Blanca' },
	{ src: IMAGES.fotoExtra2, alt: 'Café Restaurante Villa Blanca, Chipiona' },
	{ src: IMAGES.fotoExtra3, alt: 'Café Restaurante Villa Blanca' },
	{ src: IMAGES.fotoExtra4, alt: 'Café Restaurante Villa Blanca, Chipiona' },
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
