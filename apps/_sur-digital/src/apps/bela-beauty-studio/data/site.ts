/**
 * Datos de Belä Beauty Studio | Centro de Estética — Avenida de los Guindos
 * (Santa Paula, Carretera de Cádiz, 29003 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Belä Beauty Studio | Centro de Estética,
 *   36.6912945,-4.4481831, feature 0xd72f93c07a40d45:0xc346a1af90b7b6b3
 * - Reverse-geocode OSM (Nominatim): Avenida de los Guindos, Santa Paula,
 *   Carretera de Cádiz, Málaga 29003.
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

import fotoPortada from '../assets/fotos/bela-beauty-malaga.svg';
import fotoEstudio from '../assets/fotos/bela-beauty-studio.svg';
import fotoFacial from '../assets/fotos/bela-beauty-facial.svg';
import fotoCorporal from '../assets/fotos/bela-beauty-corporal.svg';
import logo from '../assets/fotos/bela-beauty-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Bel%C3%A4+Beauty+Studio+I+Centro+de+Est%C3%A9tica/@36.6912945,-4.4481831,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f93c07a40d45:0xc346a1af90b7b6b3!8m2!3d36.6912945!4d-4.4481831!16s%2Fg%2F11z3w1dv13?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Belä Beauty Studio | Centro de Estética',
	shortName: 'Belä Beauty Studio',
	tagline: 'Centro de estética en Los Guindos, Málaga',
	claim: 'Belleza y estética en Carretera de Cádiz',
	summary:
		'Belä Beauty Studio | Centro de Estética es un centro de estética en Avenida de los Guindos (Santa Paula, Carretera de Cádiz, 29003 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Avenida de los Guindos',
	district: 'Santa Paula',
	borough: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29003',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20de%20los%20Guindos%2C%2029003%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6912945, lng: -4.4481831 },
	featureId: '0xd72f93c07a40d45:0xc346a1af90b7b6b3',
	priceRange: '€€',
	categories: ['Centro de estética', 'Cuidado facial', 'Cuidado corporal', 'Belleza'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del estudio para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/bela-beauty-studio',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El estudio', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/bela-beauty-studio/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/bela-beauty-studio/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Centro de estética',
		text: 'Estudio de belleza y estética en Los Guindos, Málaga.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Av. de los Guindos',
		text: 'Avenida de los Guindos · 29003 Málaga. En Santa Paula, Ctra. de Cádiz.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Facial y corporal',
		text: 'Áreas habituales: facial, corporal y belleza. Confirma tu servicio en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza, hidratación y luminosidad. Confirma protocolo y precio en la ficha de Google.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma técnica y precio antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Santa Paula, Ctra. de Cádiz (29003). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial y mirada',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Limpieza facial', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y belleza',
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
		title: 'En Los Guindos',
		text: 'Av. de los Guindos: zona de Santa Paula, Carretera de Cádiz, bien comunicada.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estudio especializado',
		text: 'Centro dedicado a estética: trato personalizado y diagnóstico previo.',
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
		icon: 'ri-car-line',
		title: 'Zona accesible',
		text: 'En Ctra. de Cádiz: ideal si vives o trabajas en la zona oeste de Málaga.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias o un caso especial, pregunta al estudio antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Belä Beauty Studio?',
		a: 'En Avenida de los Guindos (Santa Paula, Carretera de Cádiz, 29003 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El estudio no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre y el tipo de negocio, estética facial, corporal y belleza (mirada incluida). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el estudio según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales del estudio (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-heart-pulse-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Los Guindos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Belä Beauty Studio en Los Guindos (Málaga)' },
	{ src: IMAGES.fotoInterior, alt: 'Estudio Belä Beauty en Av. de los Guindos' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamiento facial en Belä Beauty Studio' },
	{ src: IMAGES.fotoCalle, alt: 'Tratamiento corporal en Belä Beauty Studio' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Belä Beauty Studio Málaga',
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
		name: `Servicios de ${BUSINESS.shortName}`,
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
