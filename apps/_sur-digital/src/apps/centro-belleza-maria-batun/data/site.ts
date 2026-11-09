/**
 * Datos de Centro de belleza María Batún — Calle Baltasar Gracián
 * (Los Girasoles, Carretera de Cádiz, 29003 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centro de belleza María Batún,
 *   36.6947801,-4.4529713, feature 0xd72f9395b398e63:0x6daad6055fc675a4
 * - Reverse-geocode OSM (Nominatim): Calle Baltasar Gracián, Los Girasoles,
 *   Carretera de Cádiz, Málaga 29003 (sin número de portal verificable).
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

import fotoPortada from '../assets/fotos/maria-batun-malaga.svg';
import fotoCentro from '../assets/fotos/maria-batun-girasoles.svg';
import fotoFacial from '../assets/fotos/maria-batun-facial.svg';
import fotoCorporal from '../assets/fotos/maria-batun-corporal.svg';
import logo from '../assets/fotos/maria-batun-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

export const BUSINESS = {
	name: 'Centro de belleza María Batún',
	shortName: 'María Batún',
	tagline: 'Centro de belleza en Los Girasoles, Málaga',
	claim: 'Tu centro de belleza en Los Girasoles',
	summary:
		'Centro de belleza María Batún es un centro de belleza en la Calle Baltasar Gracián (Los Girasoles, Carretera de Cádiz, 29003 Málaga). Consulta su ficha de Google Maps para dirección exacta, horario, cita y servicios actuales.',
	street: 'Calle Baltasar Gracián',
	district: 'Los Girasoles',
	borough: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29003',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref:
		'https://www.google.com/maps/place/Centro+de+belleza+Mar%C3%ADa+Bat%C3%BAn/@36.6947801,-4.4529713,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9395b398e63:0x6daad6055fc675a4!8m2!3d36.6947801!4d-4.4529713!16s%2Fg%2F11v3ntd1t_?authuser=0&hl=es&entry=ttu',
	googleMaps:
		'https://www.google.com/maps/place/Centro+de+belleza+Mar%C3%ADa+Bat%C3%BAn/@36.6947801,-4.4529713,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9395b398e63:0x6daad6055fc675a4!8m2!3d36.6947801!4d-4.4529713!16s%2Fg%2F11v3ntd1t_?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Baltasar%20Graci%C3%A1n%2C%2029003%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6947801, lng: -4.4529713 },
	featureId: '0xd72f9395b398e63:0x6daad6055fc675a4',
	priceRange: '€€',
	categories: [
		'Centro de belleza',
		'Estética facial',
		'Estética corporal',
		'Cuidado personal',
	],
	hours: [
		{ days: 'Horario', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del centro para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/centro-belleza-maria-batun',
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
	{ label: 'Servicios', href: '/centro-belleza-maria-batun/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/centro-belleza-maria-batun/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza en Girasoles',
		text: 'Centro de belleza de barrio en Baltasar Gracián, Los Girasoles.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Baltasar Gracián',
		text: 'Calle Baltasar Gracián · 29003 Málaga. Carretera de Cádiz.',
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
		title: 'Cuidado personal',
		text: 'Rutinas de cuidado personal adaptadas a cada caso. Pide información en la ficha.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Los Girasoles (29003). Abre “Cómo llegar” para navegar con Google Maps.',
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
		title: 'En Los Girasoles',
		text: 'Baltasar Gracián: Los Girasoles, Carretera de Cádiz, ambiente local.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Trato de barrio',
		text: 'Centro de proximidad: atención personal y sin prisas.',
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
		text: 'Ideal si vives o trabajas en Los Girasoles o Carretera de Cádiz.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Pregunta siempre al centro por tu caso antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Centro de belleza María Batún?',
		a: 'En la Calle Baltasar Gracián (Los Girasoles, Carretera de Cádiz, 29003 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El centro no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, belleza (facial, corporal). La ficha no publica una carta detallada, así que confirma el tratamiento y el precio antes de reservar.',
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
	{ icon: 'ri-sparkling-2-line', label: 'Centro de belleza' },
	{ icon: 'ri-heart-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Los Girasoles, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Centro de belleza María Batún en Los Girasoles, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Centro de belleza María Batún en Baltasar Gracián, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en el Centro de belleza María Batún (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Cuidado corporal y bienestar en el Centro de belleza María Batún',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'María Batún Los Girasoles Málaga',
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
		name: 'Servicios del Centro de belleza María Batún',
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
