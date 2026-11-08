/**
 * Datos de Restaurante El Rincón Hispano.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante El Rincón Hispano,
 *   39.4675084,-6.3785565, feature 0xd15df000d6efcdb:0xc8406e69eb37154f
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Cáceres) se deduce de las coordenadas, no de un dato confirmado.
 */

import fotoPortada from '../assets/fotos/restaurante-el-rincon-hispano-vertical-02.jpg';
import fotoCentro from '../assets/fotos/restaurante-el-rincon-hispano-apaisada-01.jpg';
import fotoBarra from '../assets/fotos/restaurante-el-rincon-hispano-vista-4-04.jpg';
import fotoSala from '../assets/fotos/restaurante-el-rincon-hispano-apaisada-03.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-el-rincon-hispano-vertical-06.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-el-rincon-hispano-apaisada-05.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-el-rincon-hispano-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-el-rincon-hispano-apaisada-08.jpg';
import logo from '../assets/fotos/restaurante-el-rincon-hispano-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+El+Rinc%C3%B3n+Hispano/@39.4675084,-6.3785565,17z/data=!3m1!4b1!4m6!3m5!1s0xd15df000d6efcdb:0xc8406e69eb37154f!8m2!3d39.4675084!4d-6.3785565!16s%2Fg%2F11wc1td5gr?authuser=0&hl=es';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante El Rincón Hispano',
	shortName: 'Restaurante El Rincón Hispano',
	tagline: 'Restaurante en Cáceres',
	claim: 'Restaurante El Rincón Hispano en Cáceres',
	summary:
		'Restaurante El Rincón Hispano es un restaurante en Cáceres. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
	street: PENDIENTE,
	district: 'Cáceres',
	borough: 'Cáceres',
	city: 'Cáceres',
	postalCode: PENDIENTE,
	region: 'Extremadura',
	country: 'ES',
	phone: PENDIENTE,
	phoneHref: '',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.4675084%2C-6.3785565&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.4675084, lng: -6.3785565 },
	featureId: '0xd15df000d6efcdb:0xc8406e69eb37154f',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote: 'El horario y el teléfono se confirman en la ficha pública de Google Maps.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/restaurante-el-rincon-hispano',
};

export const LEGAL = {
	razonSocial: 'Restaurante El Rincón Hispano',
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
		title: 'Cáceres',
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
		title: 'En Cáceres',
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
		q: '¿Dónde está Restaurante El Rincón Hispano?',
		a: 'En Cáceres. Abre “Cómo llegar” para navegar con Google Maps.',
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
	{ icon: 'ri-map-pin-line', label: 'Cáceres' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante El Rincón Hispano en Cáceres' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante El Rincón Hispano' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante El Rincón Hispano, Cáceres' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante El Rincón Hispano' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante El Rincón Hispano' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante El Rincón Hispano, Cáceres' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante El Rincón Hispano' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante El Rincón Hispano, Cáceres' },
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
