/**
 * Datos de Vértice Cafetería-Restaurante.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Vértice Cafetería-Restaurante,
 *   42.2958579,-3.7023749, feature 0xd45e3ff3d2217c1:0x8fb272f89b30da81
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Burgos) se deduce de las coordenadas, no de un dato confirmado.
 */

import fotoPortada from '../assets/fotos/vertice-cafeteria-restaurante-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/vertice-cafeteria-restaurante-apaisada-03.jpg';
import fotoBarra from '../assets/fotos/vertice-cafeteria-restaurante-vertical-08.jpg';
import fotoSala from '../assets/fotos/vertice-cafeteria-restaurante-apaisada-02.jpg';
import fotoExtra1 from '../assets/fotos/vertice-cafeteria-restaurante-vista-4-04.jpg';
import fotoExtra2 from '../assets/fotos/vertice-cafeteria-restaurante-vista-6-06.jpg';
import fotoExtra3 from '../assets/fotos/vertice-cafeteria-restaurante-vertical-09.jpg';
import fotoExtra4 from '../assets/fotos/vertice-cafeteria-restaurante-vertical-07.jpg';
import logo from '../assets/fotos/vertice-cafeteria-restaurante-logo.svg';

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
	'https://www.google.com/maps/place/V%C3%A9rtice+Cafeter%C3%ADa-Restaurante/@42.2958579,-3.7023749,17z/data=!3m1!4b1!4m6!3m5!1s0xd45e3ff3d2217c1:0x8fb272f89b30da81!8m2!3d42.2958579!4d-3.7023749!16s%2Fg%2F11rzjfq4gx?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Vértice Cafetería-Restaurante',
	shortName: 'Vértice Cafetería-Restaurante',
	tagline: 'Restaurante en Burgos',
	claim: 'Vértice Cafetería-Restaurante en Burgos',
	summary:
		'Vértice Cafetería-Restaurante es un local en Burgos. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
	street: PENDIENTE,
	district: 'Burgos',
	borough: 'Burgos',
	city: 'Burgos',
	postalCode: PENDIENTE,
	region: 'Castilla y León',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=42.2958579%2C-3.7023749&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 42.2958579, lng: -3.7023749 },
	featureId: '0xd45e3ff3d2217c1:0x8fb272f89b30da81',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://vertice-cafeteria-restaurante.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Vértice Cafetería-Restaurante',
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
		title: 'Burgos',
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
		title: 'En Burgos',
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
		q: '¿Dónde está Vértice Cafetería-Restaurante?',
		a: 'En Burgos. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Burgos' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Vértice Cafetería-Restaurante en Burgos' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Vértice Cafetería-Restaurante' },
	{ src: IMAGES.fotoCejas, alt: 'Vértice Cafetería-Restaurante, Burgos' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Vértice Cafetería-Restaurante' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Vértice Cafetería-Restaurante' },
	{ src: IMAGES.fotoExtra2, alt: 'Vértice Cafetería-Restaurante, Burgos' },
	{ src: IMAGES.fotoExtra3, alt: 'Vértice Cafetería-Restaurante' },
	{ src: IMAGES.fotoExtra4, alt: 'Vértice Cafetería-Restaurante, Burgos' },
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
