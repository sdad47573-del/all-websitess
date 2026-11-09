/**
 * Datos de Diamond Woman Belleza y Bienestar — Calle Haendel, 2 (La Paz,
 * Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Diamond Woman Belleza y Bienestar,
 *   36.6953161,-4.4498068, feature 0xd72f7688efbc541:0xb9d4a972be1ac7d0
 * - Reverse-geocode OSM (Nominatim): Calle Haendel 2, La Paz,
 *   Carretera de Cádiz, Málaga 29004.
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

import fotoPortada from '../assets/fotos/diamond-woman-malaga.svg';
import fotoCentro from '../assets/fotos/diamond-woman-la-paz.svg';
import fotoFacial from '../assets/fotos/diamond-woman-facial.svg';
import fotoCorporal from '../assets/fotos/diamond-woman-corporal.svg';
import logo from '../assets/fotos/diamond-woman-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

export const BUSINESS = {
	name: 'Diamond Woman Belleza y Bienestar',
	shortName: 'Diamond Woman',
	tagline: 'Belleza y bienestar en La Paz, Málaga',
	claim: 'Tu momento de belleza en La Paz',
	summary:
		'Diamond Woman Belleza y Bienestar es un centro de belleza y bienestar en la Calle Haendel, 2 (La Paz, Carretera de Cádiz, 29004 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Haendel, 2',
	district: 'La Paz',
	borough: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29004',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref:
		'https://www.google.com/maps/place/Diamond+Woman+Belleza+y+Bienestar/@36.6953161,-4.4498068,16z/data=!3m1!4b1!4m6!3m5!1s0xd72f7688efbc541:0xb9d4a972be1ac7d0!8m2!3d36.6953161!4d-4.4498068!16s%2Fg%2F12qh24fsj?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/Diamond+Woman+Belleza+y+Bienestar/@36.6953161,-4.4498068,16z/data=!3m1!4b1!4m6!3m5!1s0xd72f7688efbc541:0xb9d4a972be1ac7d0!8m2!3d36.6953161!4d-4.4498068!16s%2Fg%2F12qh24fsj?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Haendel%2C%202%2C%2029004%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6953161, lng: -4.4498068 },
	featureId: '0xd72f7688efbc541:0xb9d4a972be1ac7d0',
	priceRange: '€€',
	categories: [
		'Centro de belleza',
		'Bienestar',
		'Estética facial',
		'Estética corporal',
	],
	hours: [
		{ days: 'Horario', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del centro para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/diamond-woman-belleza-bienestar',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El centro', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/diamond-woman-belleza-bienestar/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/diamond-woman-belleza-bienestar/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-diamond-ring-line',
		title: 'Belleza y bienestar',
		text: 'Centro de belleza y bienestar en La Paz, Carretera de Cádiz.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Haendel, 2',
		text: 'Calle Haendel, 2 · 29004 Málaga. Barrio de La Paz.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Facial y corporal',
		text: 'Áreas habituales: facial, corporal y bienestar. Confirma tu caso en la ficha.',
	},
];

export const SERVICIOS = [
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
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Bienestar',
		text: 'Momentos de calma y cuidado personal en un centro de barrio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En La Paz (29004). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Bienestar',
		items: [
			{ nombre: 'Bienestar', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
			{ nombre: 'Cuidado personal', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En La Paz',
		text: 'Haendel, 2: barrio de La Paz, Carretera de Cádiz, ambiente local.',
	},
	{
		icon: 'ri-diamond-ring-line',
		title: 'Belleza y bienestar',
		text: 'Dos mundos en un mismo centro: estética y momentos de calma.',
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
		text: 'Ideal si vives o trabajas en La Paz o Carretera de Cádiz.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Pregunta siempre al centro por tu caso antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Diamond Woman Belleza y Bienestar?',
		a: 'En la Calle Haendel, 2 (La Paz, Carretera de Cádiz, 29004 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El centro no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, belleza y bienestar (facial, corporal). La ficha no publica una carta detallada, así que confirma el tratamiento y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha del centro para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales del centro (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-diamond-ring-line', label: 'Belleza y bienestar' },
	{ icon: 'ri-sparkling-2-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'La Paz, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Diamond Woman Belleza y Bienestar en La Paz, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Diamond Woman en Calle Haendel, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Diamond Woman (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Bienestar y cuidado corporal en Diamond Woman',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Diamond Woman La Paz Málaga',
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
		name: 'Servicios de Diamond Woman Belleza y Bienestar',
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
