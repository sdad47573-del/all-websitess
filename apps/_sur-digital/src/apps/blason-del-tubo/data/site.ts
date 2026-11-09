/**
 * Datos de Restaurante Blasón del Tubo — Calle Blasón Aragonés, s/n
 * (Casco Antiguo / El Tubo, 50003 Zaragoza).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Blasón del Tubo,
 *   41.6534085,-0.8812876, feature 0xd5914ec0e2397db:0x24e03da6a0dedc65
 * - Kitking (reservas): C. del Blasón Aragonés, s/n, 50003; tel 976 20 46 87.
 * - Plano Gastronómico de Zaragoza: teléfono 976 204 687; horario de
 *   mediodía y noche de miércoles a domingo y lunes al mediodía.
 * - TripAdvisor: 4,1 (166 opiniones); tapas y comida recién hecha.
 * - Heraldo de Aragón (2015): carta extensa y buenos fondos de cocina;
 *   cocina de tradición actualizada y sabores mediterráneos.
 * - Aragón Digital (2026): uno de los menús del día más completos del Tubo.
 *
 * Lo que la web NO inventa:
 * - Horario: las fuentes no coinciden del todo; se muestra el más citado
 *   y se pide confirmarlo por teléfono.
 * - Carta y precios: no publicados en fuentes verificables.
 */

import fotoPortada from '../assets/fotos/blason-del-tubo-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/blason-del-tubo-vertical-04.jpg';
import fotoBarra from '../assets/fotos/blason-del-tubo-vertical-07.jpg';
import fotoSala from '../assets/fotos/blason-del-tubo-apaisada-02.jpg';
import fotoExtra1 from '../assets/fotos/blason-del-tubo-apaisada-03.jpg';
import fotoExtra2 from '../assets/fotos/blason-del-tubo-apaisada-05.jpg';
import fotoExtra3 from '../assets/fotos/blason-del-tubo-cuadrada-06.jpg';
import fotoExtra4 from '../assets/fotos/blason-del-tubo-cuadrada-08.jpg';
import logo from '../assets/fotos/blason-del-tubo-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Blas%C3%B3n+del+Tubo/data=!4m7!3m6!1s0xd5914ec0e2397db:0x24e03da6a0dedc65!8m2!3d41.6534085!4d-0.8812876!16s%2Fg%2F1ts_7yf_!19sChIJ25cjDuwUWQ0RZdzeoKY94CQ?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Restaurante Blasón del Tubo',
	shortName: 'Blasón del Tubo',
	tagline: 'Tapas y cocina de tradición en El Tubo, Zaragoza',
	claim: 'Tu restaurante en el Tubo de Zaragoza',
	summary:
		'Blasón del Tubo es un restaurante de tapas y cocina de tradición actualizada en la calle Blasón Aragonés (El Tubo, 50003 Zaragoza). Carta extensa, buenos fondos de cocina y un menú del día muy valorado. Llama al 976 20 46 87 para reservar.',
	street: 'Calle Blasón Aragonés, s/n',
	district: 'Casco Antiguo',
	borough: 'El Tubo',
	city: 'Zaragoza',
	postalCode: '50003',
	region: 'Aragón',
	country: 'ES',
	phoneDisplay: '976 20 46 87',
	phoneHref: 'tel:+34976204687',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6534085%2C-0.8812876&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6534085, lng: -0.8812876 },
	featureId: '0xd5914ec0e2397db:0x24e03da6a0dedc65',
	categories: ['Restaurante', 'Tapas', 'Cocina de tradición', 'Menú del día'],
	hours: [
		{ days: 'Lunes', hours: '12:00 – 16:00' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles a domingo', hours: '12:00 – 16:00 y 20:00 – 23:00' },
	],
	hoursNote:
		'Horario según plano gastronómico y listados públicos; no coinciden del todo entre fuentes. Confirma antes de ir llamando al 976 20 46 87.',
	siteUrl: 'https://www.sur-digital.com/blason-del-tubo',
};

export const LEGAL = {
	razonSocial: 'Restaurante Blasón del Tubo',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El local', href: '#salon' },
	{ label: 'La carta', href: '#servicios' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'La carta', href: '/blason-del-tubo/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/blason-del-tubo/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-cup-line',
		title: 'Tapas',
		text: 'Tapas y raciones para compartir en el Tubo.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'El Tubo',
		text: 'Calle Blasón Aragonés, s/n · 50003 Zaragoza.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Menú del día',
		text: 'Uno de los menús del día más completos de Zaragoza.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Reserva mesa en el 976 20 46 87.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-cup-line',
		title: 'Tapas',
		text: 'Tapas de barra y raciones para compartir.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina de tradición',
		text: 'Platos de tradición actualizada, con sabores mediterráneos.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Menú del día',
		text: 'Menú del día de los más completos del Tubo, de lunes a domingo al mediodía.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Cenas',
		text: 'Servicio de noche de miércoles a domingo.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Producto fresco',
		text: 'Cocina creativa con ingredientes naturales.',
	},
	{
		icon: 'ri-team-line',
		title: 'Grupos',
		text: 'Mesas para grupos y celebraciones: pregunta por teléfono.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'De la casa',
		items: [
			{ nombre: 'Tapas', precio: 'A consultar' },
			{ nombre: 'Raciones para compartir', precio: 'A consultar' },
			{ nombre: 'Platos de tradición', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Momentos',
		items: [
			{ nombre: 'Menú del día (mediodía)', precio: 'A consultar' },
			{ nombre: 'Cena', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Tubo',
		text: 'Calle Blasón Aragonés, en el corazón del Casco Antiguo.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,1 en TripAdvisor',
		text: '166 opiniones que destacan las tapas y la comida recién hecha.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Tapas de verdad',
		text: 'Tapas y raciones para compartir, con carta extensa.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva fácil',
		text: 'Llama al 976 20 46 87 para reservar.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario a confirmar',
		text: 'Horario no unificado entre fuentes: confirma por teléfono.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Carta y precios no publicados: se confirman en el local.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Blasón del Tubo?',
		a: 'En la calle Blasón Aragonés, s/n (El Tubo, 50003 Zaragoza). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 976 20 46 87. También puedes consultar su ficha pública de Google.',
	},
	{
		q: '¿Qué se come allí?',
		a: 'Tapas, raciones para compartir y cocina de tradición actualizada. La carta se confirma en el local.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta online y esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Según las fuentes consultadas: de miércoles a domingo, 12:00–16:00 y 20:00–23:00, y los lunes al mediodía; los martes cerrado. No coinciden del todo: confírmalo llamando al 976 20 46 87.',
	},
];

export const FEATURES = [
	{ icon: 'ri-cup-line', label: 'Tapas' },
	{ icon: 'ri-restaurant-line', label: 'Cocina de tradición' },
	{ icon: 'ri-sun-line', label: 'Menú del día' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Restaurante Blasón del Tubo en Zaragoza',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Interior de Blasón del Tubo',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'El local de Blasón del Tubo (Zaragoza)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'El salón de Blasón del Tubo',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Ambiente en Blasón del Tubo',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Platos de Blasón del Tubo',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Tapas en Blasón del Tubo',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Restaurante en El Tubo, Zaragoza',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Blasón del Tubo Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34976204687',
	servesCuisine: ['Tapas', 'Española', 'Mediterránea'],
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
		ratingValue: 4.1,
		reviewCount: 166,
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La carta de Blasón del Tubo',
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
