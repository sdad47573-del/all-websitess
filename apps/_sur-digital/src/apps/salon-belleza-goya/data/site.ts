/**
 * Datos de Salon de Belleza Goya — Calle Goya, 2 (Huelin,
 * Carretera de Cádiz, 29002 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salon de Belleza Goya,
 *   36.705377,-4.436806, feature 0xd72f782258bef07:0x1d1d6edfd7cf54a6
 * - Reverse-geocode OSM (Nominatim): Calle Goya 2, Huelin,
 *   Carretera de Cádiz, Málaga 29002.
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

import fotoPortada from '../assets/fotos/salon-belleza-goya-malaga.svg';
import fotoCentro from '../assets/fotos/salon-belleza-goya-huelin.svg';
import fotoFacial from '../assets/fotos/salon-belleza-goya-facial.svg';
import fotoCorporal from '../assets/fotos/salon-belleza-goya-corporal.svg';
import logo from '../assets/fotos/salon-belleza-goya-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

export const BUSINESS = {
	name: 'Salon de Belleza Goya',
	shortName: 'Goya',
	tagline: 'Salón de belleza en Huelin, Málaga',
	claim: 'Belleza de barrio en la calle Goya',
	summary:
		'Salon de Belleza Goya es un salón de belleza en la Calle Goya, 2 (Huelin, Carretera de Cádiz, 29002 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Goya, 2',
	district: 'Huelin',
	borough: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29002',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref:
		'https://www.google.com/maps/place/Salon+de+Belleza+Goya/@36.705377,-4.436806,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f782258bef07:0x1d1d6edfd7cf54a6!8m2!3d36.705377!4d-4.436806!16s%2Fg%2F1tlgz962?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/Salon+de+Belleza+Goya/@36.705377,-4.436806,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f782258bef07:0x1d1d6edfd7cf54a6!8m2!3d36.705377!4d-4.436806!16s%2Fg%2F1tlgz962?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Goya%2C%202%2C%2029002%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.705377, lng: -4.436806 },
	featureId: '0xd72f782258bef07:0x1d1d6edfd7cf54a6',
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
	siteUrl: 'https://www.sur-digital.com/salon-belleza-goya',
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
		title: 'Belleza en Huelin',
		text: 'Salón de belleza de barrio en la calle Goya, Huelin.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Goya, 2',
		text: 'Calle Goya, 2 · 29002 Málaga. Carretera de Cádiz.',
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
		text: 'En Huelin (29002). Abre “Cómo llegar” para navegar con Google Maps.',
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
		title: 'En Huelin',
		text: 'Goya, 2: barrio de Huelin, Carretera de Cádiz, con ambiente local.',
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
		text: 'Ideal si vives o trabajas en Huelin o Carretera de Cádiz.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Pregunta siempre al salón por tu caso antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salon de Belleza Goya?',
		a: 'En la Calle Goya, 2 (Huelin, Carretera de Cádiz, 29002 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
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
	{ icon: 'ri-map-pin-line', label: 'Huelin, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Salon de Belleza Goya en Huelin, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Salon de Belleza Goya en Calle Goya, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en el Salon de Belleza Goya (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Cuidado corporal y bienestar en el Salon de Belleza Goya',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Goya Huelin Málaga',
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
		name: 'Servicios del Salon de Belleza Goya',
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
