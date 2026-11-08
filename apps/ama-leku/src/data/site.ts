/**
 * Datos de Restaurante Ama Leku — Paseo Sagasta, 37
 * (Centro, 50007 Zaragoza).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Ama Leku,
 *   41.6412018,-0.886121, feature 0xd5914e593a76d53:0xba26e2fc214f1abe
 * - TripAdvisor: Paseo Sagasta 37, 50007 Zaragoza (Centro); 4,4
 *   (101 opiniones); marisco y española.
 * - Zaragoza Guía: Paseo Sagasta 37; tel 976 215 366; cocina vasca de
 *   autor con pescado salvaje del Cantábrico (sargo, besugo, lubina,
 *   rodaballo, pargo, rape); entrantes como ceviche de langostino;
 *   Gloria en sala y su marido en cocina; antiguo Amalur.
 * - Facebook: reservas en el 976215366; tapas.
 * - El Paladar Crítico (2017): reservas 976 21 53 66 y 607 482 121.
 *
 * Lo que la web NO inventa:
 * - Sin horario completo publicado en fuentes verificables: no se
 *   publica horario inventado; se remite al teléfono y a la ficha.
 * - Sin carta ni precios publicados: no se publican platos ni importes.
 */

import fotoPortada from '../assets/fotos/ama-leku-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/ama-leku-vertical-02.jpg';
import fotoBarra from '../assets/fotos/ama-leku-vertical-03.jpg';
import fotoSala from '../assets/fotos/ama-leku-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/ama-leku-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/ama-leku-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/ama-leku-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/ama-leku-vertical-08.jpg';
import logo from '../assets/fotos/ama-leku-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Ama+Leku/data=!4m7!3m6!1s0xd5914e593a76d53:0xba26e2fc214f1abe!8m2!3d41.6412018!4d-0.886121!16s%2Fg%2F1hm2fpr97!19sChIJU22nk-UUWQ0RvhpPIfziJro?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Restaurante Ama Leku',
	shortName: 'Ama Leku',
	tagline: 'Cocina vasca en el Centro, Zaragoza',
	claim: 'Tu restaurante vasco en Sagasta 37',
	summary:
		'Ama Leku es un restaurante de cocina vasca en Paseo Sagasta 37 (Centro, 50007 Zaragoza): pescado salvaje del Cantábrico, cocina de autor y tapas. Con un 4,4 en TripAdvisor (101 opiniones). Llama al 976 21 53 66 para reservar.',
	street: 'Paseo Sagasta, 37',
	district: 'Centro',
	borough: 'Zaragoza',
	city: 'Zaragoza',
	postalCode: '50007',
	region: 'Aragón',
	country: 'ES',
	phoneDisplay: '976 21 53 66',
	phoneHref: 'tel:+34976215366',
	whatsapp:
		'https://wa.me/34607482121?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Ama%20Leku.%20%C2%BFMe%20confirm%C3%A1is%20mesa%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6412018%2C-0.886121&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6412018, lng: -0.886121 },
	featureId: '0xd5914e593a76d53:0xba26e2fc214f1abe',
	categories: [
		'Restaurante vasco',
		'Pescado y marisco',
		'Cocina de autor',
		'Tapas',
	],
	hours: [
		{ days: 'Horario', hours: 'Consultar por teléfono' },
	],
	hoursNote:
		'El local no publica un horario fijo en fuentes verificables: confirma el horario llamando al 976 21 53 66 o consultando su ficha de Google.',
	siteUrl: 'https://ama-leku.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Restaurante Ama Leku',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El local', href: '#salon' },
	{ label: 'La casa', href: '#servicios' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'La casa', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-anchor-line',
		title: 'Cocina vasca',
		text: 'Restaurante vasco en Sagasta 37, pleno Centro.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Sagasta 37',
		text: 'Paseo Sagasta 37 · 50007 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,4 en TripAdvisor',
		text: 'Valoración de 4,4 sobre 5 en TripAdvisor con 101 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Reserva mesa en el 976 21 53 66.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-anchor-line',
		title: 'Pescado del Cantábrico',
		text: 'Pescado salvaje: sargo, besugo, lubina, rodaballo, pargo o rape.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina vasca de autor',
		text: 'Producto de temporada, próximo y de calidad.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Entrantes',
		text: 'Entrantes sencillos como el ceviche de langostino.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Tapas',
		text: 'Tapas para disfrutar en la barra o en mesa.',
	},
	{
		icon: 'ri-team-line',
		title: 'Trato familiar',
		text: 'Gloria en sala y su marido en cocina.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva',
		text: 'Se recomienda reservar: llama al 976 21 53 66.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'De la casa',
		items: [
			{ nombre: 'Pescado del día', precio: 'A consultar' },
			{ nombre: 'Entrantes', precio: 'A consultar' },
			{ nombre: 'Tapas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Momentos',
		items: [
			{ nombre: 'Comida', precio: 'A consultar' },
			{ nombre: 'Cena', precio: 'A consultar' },
			{ nombre: 'Mesa para compartir', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Centro',
		text: 'Paseo Sagasta 37, 50007, a un paso de San Miguel.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,4 en TripAdvisor',
		text: '101 opiniones destacan el pescado y el servicio.',
	},
	{
		icon: 'ri-anchor-line',
		title: 'Pescado de verdad',
		text: 'Salvaje del Cantábrico, servido entero y troceado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva fácil',
		text: 'Llama al 976 21 53 66 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario a confirmar',
		text: 'Sin horario publicado: confirma por teléfono.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirman allí.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Ama Leku?',
		a: 'En Paseo Sagasta 37 (Centro, 50007 Zaragoza). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 976 21 53 66 o al 607 482 121, o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué se come allí?',
		a: 'Es un restaurante de cocina vasca de autor: pescado salvaje del Cantábrico del día, entrantes de temporada y tapas. La carta se confirma en el local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta online, y esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El local no publica un horario fijo en fuentes verificables. Confirma el horario llamando al 976 21 53 66 o consultando su ficha de Google.',
	},
	{
		q: '¿Quién lleva el local?',
		a: 'Según Zaragoza Guía, Gloria atiende las mesas y su marido está en la cocina. El local fue antes el Amalur.',
	},
];

export const FEATURES = [
	{ icon: 'ri-anchor-line', label: 'Cocina vasca' },
	{ icon: 'ri-anchor-line', label: 'Pescado del Cantábrico' },
	{ icon: 'ri-cup-line', label: 'Tapas' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Restaurante Ama Leku en Zaragoza',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Ama Leku en Sagasta 37',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'El local de Ama Leku (Zaragoza)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'El salón de Ama Leku',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Ama Leku',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Pescado en Ama Leku Zaragoza',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Platos de Ama Leku',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Ambiente en Ama Leku',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Ama Leku Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34976215366',
	servesCuisine: ['Vasca', 'Pescado y marisco', 'Española'],
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
		ratingValue: 4.4,
		reviewCount: 101,
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La casa de Ama Leku',
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
