/**
 * Datos de Restaurante Zoobotánico Jerez.
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Restaurante Zoobotánico Jerez,
 *   36.6907296,-6.1490929, feature 0xd0dc763580b044b:0xe59407e897fe3c
 * - Dirección y teléfono (Madreselva s/n, 11408 Jerez de la Frontera ·
 *   reservas 722 74 32 43): web oficial zoobotanicojerez.com y directorios.
 *   Datos a confirmar en la ficha oficial.
 * - Fotos: ficha de Google Maps (scripts/fetch-maps-photos.mjs).
 *
 * Lo que la web NO inventa (quedan como "pendiente" hasta confirmarlo):
 * - Horario detallado, carta completa, precios y valoración.
 */

import fotoPortada from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-02.jpg';
import fotoBarra from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-03.jpg';
import fotoSala from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/restaurante-zoobotanico-jerez-apaisada-08.jpg';
import logo from '../assets/fotos/restaurante-zoobotanico-jerez-logo.svg';

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
	'https://www.google.com/maps/place/Restaurante+Zoobot%C3%A1nico+Jerez/@36.6907296,-6.1490929,17z/data=!3m1!4b1!4m6!3m5!1s0xd0dc763580b044b:0xe59407e897fe3c!8m2!3d36.6907296!4d-6.1490929!16s%2Fg%2F11rc76_124?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

const PENDIENTE = 'Pendiente de confirmar';

export const BUSINESS = {
	name: 'Restaurante Zoobotánico Jerez',
	shortName: 'Zoobotánico Jerez',
	tagline: 'Restaurante en Jerez de la Frontera',
	claim: 'Restaurante Zoobotánico Jerez en Jerez de la Frontera',
	summary:
		'Restaurante Zoobotánico Jerez (Mandíbula) dentro del Zoo de Jerez. Hamburguesas, menús y menús para grupos en Calle Madreselva s/n.',
	street: 'Calle Madreselva s/n (Zoobotánico)',
	district: 'Jerez de la Frontera',
	borough: 'Jerez de la Frontera',
	city: 'Jerez de la Frontera',
	postalCode: '11408',
	region: 'Andalucía',
	country: 'ES',
	phone: '722 74 32 43',
	phoneHref: 'tel:+34722743243',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.6907296%2C-6.1490929&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6907296, lng: -6.1490929 },
	featureId: '0xd0dc763580b044b:0xe59407e897fe3c',
	hours: [{ days: 'Horario', hours: PENDIENTE }],
	hoursNote:
		'El horario va ligado al del parque; se confirma en la web oficial o llamando al 722 74 32 43.',
	categories: ['Restaurante'],
	siteUrl: 'https://www.sur-digital.com/restaurante-zoobotanico-jerez',
};

export const LEGAL = {
	razonSocial: 'Restaurante Zoobotánico Jerez',
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
		icon: 'ri-leaf-line',
		title: 'Dentro del Zoo',
		text: 'El bar restaurante del Zoobotánico de Jerez.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Hamburguesas y menús',
		text: 'Carta con hamburguesas y menús para grupos.',
	},
	{
		icon: 'ri-phone-line',
		title: '722 74 32 43',
		text: 'Teléfono de información y reservas.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Restaurante Mandíbula',
		text: 'Hamburguesas y platos para reponer fuerzas en la visita.',
	},
	{
		icon: 'ri-group-line',
		title: 'Grupos',
		text: 'Menús para grupos a partir de 10 personas entre semana.',
	},
	{
		icon: 'ri-ticket-line',
		title: 'Visita al Zoo',
		text: 'Acceso ligado a la visita al parque zoobotánico.',
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
		title: 'En Jerez',
		text: 'Madreselva s/n · 11408 Jerez de la Frontera (Cádiz).',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: '722 74 32 43 para información y reservas.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Plan en familia',
		text: 'Ideal para comer durante la visita al Zoo.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin datos inventados',
		text: 'Horario y precios: web oficial o ficha de Google Maps.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Zoobotánico Jerez?',
		a: 'Dentro del Zoobotánico de Jerez, Calle Madreselva s/n, 11408 Jerez de la Frontera. Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 722 74 32 43 (información y reservas) o consulta la web oficial del parque.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Esta web no inventa importes. La carta oficial está en la web del zoobotánico.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Va ligado al horario del parque; se confirma en la web oficial o en la ficha de Google Maps.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'Zoobotánico de Jerez' },
	{ icon: 'ri-phone-line', label: '722 74 32 43' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Restaurante Zoobotánico Jerez en Jerez de la Frontera' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Restaurante Zoobotánico Jerez' },
	{ src: IMAGES.fotoCejas, alt: 'Restaurante Mandíbula, Zoo de Jerez' },
	{ src: IMAGES.fotoCalle, alt: 'El local de Restaurante Zoobotánico Jerez' },
	{ src: IMAGES.fotoExtra1, alt: 'Ambiente en Restaurante Zoobotánico Jerez' },
	{ src: IMAGES.fotoExtra2, alt: 'Restaurante Zoobotánico Jerez' },
	{ src: IMAGES.fotoExtra3, alt: 'Restaurante Zoobotánico Jerez, Jerez' },
	{ src: IMAGES.fotoExtra4, alt: 'Restaurante Zoobotánico Jerez' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	acceptsReservations: true,
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: BUSINESS.phoneHref,
	areaServed: [{ '@type': 'City', name: BUSINESS.city }],
	address: {
		'@type': 'PostalAddress',
		streetAddress: BUSINESS.street,
		addressLocality: BUSINESS.city,
		postalCode: BUSINESS.postalCode,
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
