/**
 * Datos de El Rincón de las Brasas.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: El Rincón de las Brasas,
 *   39.4380363,-6.274437, feature 0xd15dcfc26b761fd:0xf3012e6a642cecfb
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Dirección exacta, código postal, teléfono, horario, carta, precios y valoración.
 *   La ciudad (Zaragoza) se deduce de las coordenadas, no de un dato confirmado.
 */


import fotoPortada from '../assets/fotos/el-rincon-de-las-brasas-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/el-rincon-de-las-brasas-vertical-02.jpg';
import fotoBarra from '../assets/fotos/el-rincon-de-las-brasas-apaisada-03.jpg';
import fotoSala from '../assets/fotos/el-rincon-de-las-brasas-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/el-rincon-de-las-brasas-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/el-rincon-de-las-brasas-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/el-rincon-de-las-brasas-vertical-08.jpg';
import fotoExtra4 from '../assets/fotos/el-rincon-de-las-brasas-vertical-07.jpg';
import logo from '../assets/fotos/el-rincon-de-las-brasas-logo.svg';

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
	'https://www.google.com/maps/place/La+El Rincón de las Brasas/data=!4m7!3m6!1s0xd5915a31350dec7:0xf54bb6be294b1f!8m2!3d41.6284124!4d-0.8880354!16s%2Fg%2F11jd6cd0wy!19sChIJc3k9UMMUWQ0RQaAyuUsIkEI?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'El Rincón de las Brasas',
	shortName: 'El Rincón de las Brasas',
	tagline: 'Restaurante en Zaragoza',
	claim: 'El Rincón de las Brasas en Zaragoza',
	summary:
		'El Rincón de las Brasas es un local en Zaragoza. Dirección, teléfono y horario se confirman en su ficha pública de Google Maps.',
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
	siteUrl: 'https://el-rincon-de-las-brasas.vercel.app',
};

export const LEGAL = {
	razonSocial: 'El Rincón de las Brasas',
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
		q: '¿Dónde está El Rincón de las Brasas?',
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
	{ src: IMAGES.fotoFachada, alt: 'El Rincón de las Brasas en Zaragoza' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de El Rincón de las Brasas' },
	{ src: IMAGES.fotoCejas, alt: 'El Rincón de las Brasas, Zaragoza' },
	{ src: IMAGES.fotoCalle, alt: 'El local de El Rincón de las Brasas' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en El Rincón de las Brasas' },
	{ src: IMAGES.fotoExtra2, alt: 'El Rincón de las Brasas, Zaragoza' },
	{ src: IMAGES.fotoExtra3, alt: 'El Rincón de las Brasas' },
	{ src: IMAGES.fotoExtra4, alt: 'El Rincón de las Brasas, Zaragoza' },
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
