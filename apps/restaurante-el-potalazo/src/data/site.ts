/**
 * Datos de Restaurante El Potalazo.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante El Potalazo,
 *   36.741266,-6.4366988, feature 0xd0e750918ad7f41:0xe69dfd86020e49c0
 * - Dirección y teléfono (Calle Isaac Peral 2, Paseo Cruz del Mar, 11550
 *   Chipiona · 609 43 07 67 / 956 37 26 68): directorios locales (Facebook,
 *   Tripadvisor, Cosasdecome, Páginas Amarillas). Datos de directorio a
 *   confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/restaurante-el-potalazo-panoramica-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-el-potalazo-vertical-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-el-potalazo-vertical-03.jpg';
import fotoSala from '../assets/fotos/restaurante-el-potalazo-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-el-potalazo-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-el-potalazo-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-el-potalazo-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-el-potalazo-vertical-08.jpg';
import logo from '../assets/fotos/restaurante-el-potalazo-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+El+Potalazo/@36.741266,-6.4366988,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e750918ad7f41:0xe69dfd86020e49c0!8m2!3d36.741266!4d-6.4366988!16s%2Fg%2F11c0q_dzt2?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante El Potalazo',
	shortName: 'El Potalazo',
	tagline: 'Restaurante en Chipiona',
	claim: 'Restaurante El Potalazo en Chipiona',
	summary:
		'Restaurante El Potalazo (desde 1984) en pleno paseo marítimo de Chipiona, junto a Cruz del Mar. Tapas de calidad con vistas a la vieja Chipiona.',
	street: 'Calle Isaac Peral 2, Paseo Cruz del Mar',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Andalucía',
	country: 'ES',
	phone: '609 43 07 67',
	phoneHref: 'tel:+34609430767',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.741266%2C-6.4366988&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.741266, lng: -6.4366988 },
	featureId: '0xd0e750918ad7f41:0xe69dfd86020e49c0',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario detallado se confirma en la ficha pública de Google Maps o llamando al 609 43 07 67.',
	categories: ['Restaurante'],
	siteUrl: 'https://restaurante-el-potalazo.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante El Potalazo',
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
		icon: 'ri-sailboat-line',
		title: 'Paseo marítimo',
		text: 'Junto a Cruz del Mar, donde desemboca Isaac Peral.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Desde 1984',
		text: 'Tapas de calidad con vistas a la vieja Chipiona.',
	},
	{
		icon: 'ri-phone-line',
		title: '609 43 07 67',
		text: 'Llama para reservar tu mesa.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante',
		text: 'Tapas y platos frente al mar en el paseo marítimo.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza al mar',
		text: 'Cenar en pleno paseo marítimo junto a Cruz del Mar.',
	},
	{
		icon: 'ri-group-line',
		title: 'Familias y grupos',
		text: 'Ambiente emblemático para comer en Chipiona.',
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
		text: 'Isaac Peral 2, Paseo Cruz del Mar · 11550 Chipiona.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '609 43 07 67 (también 956 37 26 68) para reservar.',
	},
	{
		icon: 'ri-star-line',
		title: '3,9 sobre 5',
		text: 'Valoración media de directorios con cientos de opiniones.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin datos inventados',
		text: 'El horario y los precios se confirman en el local o en Google Maps.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante El Potalazo?',
		a: 'En Calle Isaac Peral 2, Paseo Cruz del Mar, 11550 Chipiona. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 609 43 07 67 para reservar o consultar la carta.',
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
	{ icon: 'ri-map-pin-line', label: 'Paseo marítimo' },
	{ icon: 'ri-phone-line', label: '609 43 07 67' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante El Potalazo en Chipiona' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante El Potalazo' },
	{ src: IMAGES.fotoCejas, alt: 'El Potalazo, paseo marítimo de Chipiona' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante El Potalazo' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante El Potalazo' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante El Potalazo, Chipiona' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante El Potalazo' },
	{ src: IMAGES.fotoExtra4, alt: 'El Potalazo, Chipiona' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	servesCuisine: ['Tapas'],
	acceptsReservations: true,
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
