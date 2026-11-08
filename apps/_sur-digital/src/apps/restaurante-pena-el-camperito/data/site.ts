/**
 * Datos de Restaurante Peña El Camperito.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Peña El Camperito,
 *   36.723255,-6.413198, feature 0xd0e75894c5a701d:0x6e686323d3167539
 * - Dirección (Av. Puerto de Chipiona, 11550 Chipiona): directorios locales
 *   (Tripadvisor, toppingsandsalads). Se muestra como dato de directorio a
 *   confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Teléfono, horario detallado, carta, precios y valoración.
 */

import fotoPortada from '../assets/fotos/restaurante-pena-el-camperito-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-pena-el-camperito-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-pena-el-camperito-apaisada-03.jpg';
import fotoSala from '../assets/fotos/restaurante-pena-el-camperito-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-pena-el-camperito-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-pena-el-camperito-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-pena-el-camperito-panoramica-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-pena-el-camperito-vertical-08.jpg';
import logo from '../assets/fotos/restaurante-pena-el-camperito-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Pe%C3%B1a+El+Camperito/@36.723255,-6.413198,17z/data=!3m1!4b1!4m6!3m5!1s0xd0e75894c5a701d:0x6e686323d3167539!8m2!3d36.723255!4d-6.413198!16s%2Fg%2F11c1wsssrg?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Peña El Camperito',
	shortName: 'Peña El Camperito',
	tagline: 'Restaurante en Chipiona',
	claim: 'Restaurante Peña El Camperito en Chipiona',
	summary:
		'Restaurante Peña El Camperito es un restaurante en Chipiona (Cádiz), junto al puerto. Cocina marinera y ambiente de peña para tapear y comer en familia.',
	street: 'Avenida Puerto de Chipiona',
	district: 'Chipiona',
	borough: 'Chipiona',
	city: 'Chipiona',
	postalCode: '11550',
	region: 'Andalucía',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.723255%2C-6.413198&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.723255, lng: -6.413198 },
	featureId: '0xd0e75894c5a701d:0x6e686323d3167539',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/restaurante-pena-el-camperito',
};

export const LEGAL = {
	razonSocial: 'Restaurante Peña El Camperito',
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
		text: 'Junto al puerto de Chipiona.',
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
		text: 'Cocina marinera y ambiente de peña en Chipiona.',
	},
	{
		icon: 'ri-group-line',
		title: 'Peña y familias',
		text: 'Ambiente familiar para tapear y comer en grupo.',
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
		text: 'Av. Puerto de Chipiona · 11550 Chipiona (Cádiz).',
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
		q: '¿Dónde está Restaurante Peña El Camperito?',
		a: 'En Avenida Puerto de Chipiona, 11550 Chipiona. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Chipiona' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Peña El Camperito en Chipiona' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Peña El Camperito' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Peña El Camperito, Chipiona' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Peña El Camperito' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Peña El Camperito' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Peña El Camperito, Chipiona' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Peña El Camperito' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Peña El Camperito, Chipiona' },
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
