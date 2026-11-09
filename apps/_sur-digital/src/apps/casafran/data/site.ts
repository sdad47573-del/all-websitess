/**
 * Datos de Restaurante Casafran — Carretera de Cogullada 22, 50014 Zaragoza
 * (zona Mercazaragoza / Cogullada).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Casafran,
 *   41.680766,-0.8529977, feature 0xd59138bd63948f1:0x52b0a4819af7b8d0
 * - Mapquest y listados: Carretera Cogullada 22, 50014 Zaragoza.
 * - TripAdvisor (resumen de búsqueda): 4,2 con 19 opiniones.
 * - Reseña de blog (2014): en el camino de Cogullada, cerca de Mercazaragoza,
 *   caserón de fachadas amarillas con terraza.
 *
 * Lo que la web NO inventa:
 * - Teléfono: no encontrado en una fuente verificable para este local.
 * - Horario: no encontrado en una fuente verificable para este local.
 * - Carta y precios: no publicados en fuentes verificables.
 */

import fotoPortada from '../assets/fotos/casafran-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/casafran-apaisada-04.jpg';
import fotoBarra from '../assets/fotos/casafran-vertical-02.jpg';
import fotoSala from '../assets/fotos/casafran-apaisada-07.jpg';
import fotoExtra1 from '../assets/fotos/casafran-apaisada-03.jpg';
import fotoExtra2 from '../assets/fotos/casafran-apaisada-05.jpg';
import fotoExtra3 from '../assets/fotos/casafran-apaisada-06.jpg';
import fotoExtra4 from '../assets/fotos/casafran-apaisada-08.jpg';
import logo from '../assets/fotos/casafran-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Casafran/data=!4m7!3m6!1s0xd59138bd63948f1:0x52b0a4819af7b8d0!8m2!3d41.680766!4d-0.8529977!16s%2Fg%2F1tf7h_m0!19sChIJ8Ug51osTWQ0R0Lj3moGksFI?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Restaurante Casafran',
	shortName: 'Casafran',
	tagline: 'Restaurante en Cogullada, Zaragoza',
	claim: 'Tu restaurante en Cogullada, Zaragoza',
	summary:
		'Casafran es un restaurante en la Carretera de Cogullada 22 (50014 Zaragoza), junto a Mercazaragoza. Valorado con 4,2 en TripAdvisor. Consulta su ficha de Google para confirmar horario y reservas.',
	street: 'Carretera de Cogullada 22',
	district: 'Cogullada',
	borough: 'Mercazaragoza',
	city: 'Zaragoza',
	postalCode: '50014',
	region: 'Aragón',
	country: 'ES',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.680766%2C-0.8529977&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.680766, lng: -0.8529977 },
	featureId: '0xd59138bd63948f1:0x52b0a4819af7b8d0',
	categories: ['Restaurante', 'Cocina casera', 'Terraza'],
	siteUrl: 'https://www.sur-digital.com/casafran',
};

export const LEGAL = {
	razonSocial: 'Restaurante Casafran',
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
	{ label: 'Servicios', href: '/casafran/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/casafran/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-map-pin-2-line',
		title: 'Cogullada',
		text: 'Carretera de Cogullada 22, junto a Mercazaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,2 en TripAdvisor',
		text: 'Valoración de 19 opiniones.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, reservas y fotos en la ficha pública.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Comida y cena',
		text: 'Cocina de restaurante en el camino de Cogullada.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Terraza',
		text: 'Espacio de terraza, según reseñas del local.',
	},
	{
		icon: 'ri-team-line',
		title: 'Grupos',
		text: 'Para grupos y celebraciones: consulta antes en la ficha de Google.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'La carta',
		items: [
			{ nombre: 'Platos del día', precio: 'A consultar' },
			{ nombre: 'Terraza', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Cogullada',
		text: 'Carretera de Cogullada 22, 50014 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,2 en TripAdvisor',
		text: '19 opiniones de clientes.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Fotos, horario y contacto en la ficha pública.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario a confirmar',
		text: 'No hemos encontrado un horario verificable: revísalo en la ficha.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Carta y precios no publicados: se confirman en el local.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Casafran?',
		a: 'En la Carretera de Cogullada 22, 50014 Zaragoza, junto a Mercazaragoza. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Consulta el teléfono y el horario en su ficha pública de Google.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'No hemos encontrado un horario verificable. Confírmalo en la ficha de Google antes de ir.',
	},
];

export const FEATURES = [
	{ icon: 'ri-restaurant-line', label: 'Restaurante' },
	{ icon: 'ri-leaf-line', label: 'Terraza' },
	{ icon: 'ri-star-fill', label: '4,2 en TripAdvisor' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Casafran en Zaragoza' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Casafran' },
	{ src: IMAGES.fotoCejas, alt: 'El local de Casafran (Cogullada)' },
	{ src: IMAGES.fotoCalle, alt: 'El salón de Casafran' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Casafran' },
	{ src: IMAGES.fotoExtra2, alt: 'Platos de Casafran' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante en Cogullada, Zaragoza' },
	{ src: IMAGES.fotoExtra4, alt: 'Casafran, Zaragoza' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Casafran Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	areaServed: [{ '@type': 'City', name: BUSINESS.city }],
	currenciesAccepted: 'EUR',
	knowsAbout: BUSINESS.categories,
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
		ratingValue: 4.2,
		reviewCount: 19,
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La carta de Casafran',
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
