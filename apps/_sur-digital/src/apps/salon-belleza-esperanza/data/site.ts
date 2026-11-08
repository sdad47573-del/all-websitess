/**
 * Datos de Salón De Belleza Esperanza — Av. Obispo Ángel Herrera Oria, 20
 * (Arroyo del Cuarto, Cruz de Humilladero, 29007 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón De Belleza Esperanza,
 *   36.7185004,-4.4399478, feature 0xd72f77574dd887b:0x7cc1cdfa09f3e306
 * - Reverse-geocode OSM (Nominatim): Av. Obispo Ángel Herrera Oria 20,
 *   Arroyo del Cuarto, Cruz de Humilladero, Málaga 29007.
 *
 * Lo que la web NO inventa:
 * - La ficha no aporta teléfono, horario, web propia, carta de servicios,
 *   precios ni recuento de reseñas verificable desde fuera, así que no se
 *   publican. Todo remite a "consultar la ficha de Google Maps".
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/salon-belleza-esperanza-malaga.svg';
import fotoCentro from '../assets/fotos/salon-belleza-esperanza-humilladero.svg';
import fotoFacial from '../assets/fotos/salon-belleza-esperanza-facial.svg';
import fotoCorporal from '../assets/fotos/salon-belleza-esperanza-corporal.svg';
import logo from '../assets/fotos/salon-belleza-esperanza-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

export const BUSINESS = {
	name: 'Salón De Belleza Esperanza',
	shortName: 'Esperanza',
	tagline: 'Salón de belleza en Cruz de Humilladero, Málaga',
	claim: 'Belleza de barrio en Herrera Oria',
	summary:
		'Salón De Belleza Esperanza es un salón de belleza en la Av. Obispo Ángel Herrera Oria, 20 (Arroyo del Cuarto, Cruz de Humilladero, 29007 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Av. Obispo Ángel Herrera Oria, 20',
	district: 'Arroyo del Cuarto',
	borough: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29007',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref:
		'https://www.google.com/maps/place/Sal%C3%B3n+De+Belleza+Esperanza/@36.7185004,-4.4399478,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77574dd887b:0x7cc1cdfa09f3e306!8m2!3d36.7185004!4d-4.4399478!16s%2Fg%2F11n6zvm9r9?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/Sal%C3%B3n+De+Belleza+Esperanza/@36.7185004,-4.4399478,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77574dd887b:0x7cc1cdfa09f3e306!8m2!3d36.7185004!4d-4.4399478!16s%2Fg%2F11n6zvm9r9?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Av.%20Obispo%20%C3%81ngel%20Herrera%20Oria%2C%2020%2C%2029007%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7185004, lng: -4.4399478 },
	featureId: '0xd72f77574dd887b:0x7cc1cdfa09f3e306',
	priceRange: '€€',
	categories: [
		'Salón de belleza',
		'Peluquería',
		'Estética facial',
		'Estética corporal',
	],
	hours: [
		{ days: 'Horario', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del salón para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/salon-belleza-esperanza',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Belleza en Humilladero',
		text: 'Salón de belleza de barrio en Herrera Oria, Cruz de Humilladero.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Herrera Oria, 20',
		text: 'Av. Obispo Ángel Herrera Oria, 20 · 29007 Málaga.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Pelo y estética',
		text: 'Áreas habituales: peluquería, facial y corporal. Confirma tu caso en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Corte, peinado y cuidado del cabello. Confirma servicio y precio en la ficha de Google.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color',
		text: 'Color y mechas adaptados a tu pelo. Confirma diagnóstico y precio antes de ir.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado facial: limpieza, hidratación y luminosidad. Confirma protocolo disponible.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Cruz de Humilladero (29007). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería y belleza',
		items: [
			{ nombre: 'Corte y peinado', precio: 'A consultar' },
			{ nombre: 'Color y mechas', precio: 'A consultar' },
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Bienestar',
		items: [
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Humilladero',
		text: 'Herrera Oria, 20: Cruz de Humilladero, Arroyo del Cuarto, ambiente local.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Salón de barrio',
		text: 'Atención personal, sin prisas y con precio claro antes de empezar.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha verificable',
		text: 'Todo lo operativo (horario, teléfono, cita) enlaza a su ficha pública de Google.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-walk-line',
		title: 'Accesible',
		text: 'Ideal si vives o trabajas en Cruz de Humilladero.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Pregunta siempre al salón por tu caso antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salón De Belleza Esperanza?',
		a: 'En la Av. Obispo Ángel Herrera Oria, 20 (Arroyo del Cuarto, Cruz de Humilladero, 29007 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El salón no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, peluquería y belleza (corte, color, facial, corporal). La ficha no publica una carta detallada, así que confirma el tratamiento y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha del salón para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales del salón (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Salón de belleza' },
	{ icon: 'ri-sparkling-2-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Cruz de Humilladero, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Salón De Belleza Esperanza en Cruz de Humilladero, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Salón De Belleza Esperanza en Herrera Oria, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en el Salón De Belleza Esperanza (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Cuidado corporal y bienestar en el Salón De Belleza Esperanza',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Esperanza Cruz de Humilladero Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
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
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios del Salón De Belleza Esperanza',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'BeautySalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [],
};
