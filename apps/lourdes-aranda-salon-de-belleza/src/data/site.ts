/**
 * Datos de Lourdes & Aranda Salon de Belleza — C. Lope de Rueda, 112, bajo
 * (Puerto de la Torre, 29190 Málaga).
 *
 * Fuentes públicas:
 * - Google Maps (enlace aportado): Lourdes & Aranda Salon De Belleza,
 *   36.7387789,-4.4809557
 * - Costa Guest / directorios: confirman dirección y teléfono +34 952 10 09 51.
 * - Facebook: Salon De Belleza Lourdes Aranda, mismo teléfono.
 *
 * La ficha no publica carta de servicios, precios, horario detallado ni
 * recuento de reseñas: la web no inventa esos datos y remite al teléfono.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoSalon from '../assets/fotos/lourdes-aranda-salon-puerto-torre-malaga.svg';
import fotoPeluqueria from '../assets/fotos/lourdes-aranda-peluqueria-color-malaga.svg';
import fotoEstetica from '../assets/fotos/lourdes-aranda-estetica-facial-malaga.svg';
import fotoUnas from '../assets/fotos/lourdes-aranda-unas-manicura-malaga.svg';
import logo from '../assets/fotos/lourdes-aranda-salon-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior: fotoPeluqueria,
	fotoCejas: fotoEstetica,
	fotoCalle: fotoUnas,
	logo,
};

export const BUSINESS = {
	name: 'Lourdes & Aranda Salon de Belleza',
	shortName: 'Lourdes & Aranda',
	tagline: 'Salón de belleza en Puerto de la Torre, Málaga',
	claim: 'Peluquería y estética de barrio en Lope de Rueda',
	summary:
		'Lourdes & Aranda Salon de Belleza es un salón de belleza en la Calle Lope de Rueda, 112, bajo (Puerto de la Torre, 29190 Málaga). Peluquería, estética y cuidado personal con trato cercano. Cita por teléfono al 952 10 09 51.',
	street: 'Calle Lope de Rueda, 112, bajo',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	postalCode: '29190',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 10 09 51',
	phoneHref: 'tel:+34952100951',
	whatsapp: 'https://wa.me/34952100951?text=Hola%2C%20quiero%20pedir%20cita%20en%20Lourdes%20%26%20Aranda',
	googleMaps:
		'https://www.google.com/maps/place/Lourdes+%26+Aranda+Salon+De+Belleza/@36.7387789,-4.4809557,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f0d524831205:0xcfa7ca98c4f4f086!8m2!3d36.7387789!4d-4.4809557!16s%2Fg%2F11cnsdfcnv?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Lope%20de%20Rueda%2C%20112%2C%2029190%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7387789, lng: -4.4809557 },
	priceRange: '€€',
	categories: [
		'Salón de belleza',
		'Peluquería',
		'Estética',
		'Manicura',
		'Tratamientos de belleza',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: 'A confirmar por teléfono' },
		{ days: 'Sábado', hours: 'A confirmar por teléfono' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'La ficha pública no detalla el horario: llama al 952 10 09 51 para confirmar apertura y pedir cita.',
	siteUrl: 'https://lourdes-aranda-salon-de-belleza.vercel.app',
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
		icon: 'ri-map-pin-2-line',
		title: 'En Puerto de la Torre',
		text: 'C. Lope de Rueda, 112, bajo: salón de barrio, fácil de llegar y aparcar.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería y estética',
		text: 'Corte, color, estética facial y uñas en un mismo salón.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Llama al 952 10 09 51: te confirman servicio, precio y hora.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato de barrio',
		text: 'Atención cercana y sin prisas, de las de toda la vida.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Corte, peinado y recogidos para el día a día y ocasiones. Confirma precio por teléfono.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color',
		text: 'Tinte, mechas y matices adaptados a tu pelo. Pide presupuesto al reservar.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Estética facial',
		text: 'Higiene, hidratación y cuidado de la piel. Consulta los tratamientos disponibles.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Manicura y uñas',
		text: 'Manicura, esmaltado y cuidado de uñas. Pregunta por el acabado que prefieras.',
	},
	{
		icon: 'ri-scissors-cut-line',
		title: 'Depilación',
		text: 'Depilación por zonas según tu piel. Llama y te indican la opción adecuada.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Tratamientos',
		text: 'Tratamientos de belleza y bienestar para completar tu cuidado personal.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte y peinado', precio: 'A consultar' },
			{ nombre: 'Color, mechas y matiz', precio: 'A consultar' },
			{ nombre: 'Recogidos y ocasiones', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Estética',
		items: [
			{ nombre: 'Higiene e hidratación facial', precio: 'A consultar' },
			{ nombre: 'Depilación', precio: 'A consultar' },
			{ nombre: 'Manicura y cuidado de uñas', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'De barrio, sin desplazarte',
		text: 'En Lope de Rueda, 112: ideal si vives en Puerto de la Torre.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería y estética juntas',
		text: 'No tienes que ir a dos sitios: pelo y estética en la misma cita.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Precio claro por teléfono',
		text: 'Sin carta publicada, el salón te da precio cerrado al llamar al 952 10 09 51.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato cercano',
		text: 'Salón pequeño con atención personalizada, no una cadena.',
	},
	{
		icon: 'ri-parking-line',
		title: 'Fácil de llegar',
		text: 'Zona de Puerto de la Torre con mejor acceso y aparcamiento que el centro.',
	},
	{
		icon: 'ri-time-line',
		title: 'Cita flexible',
		text: 'Llama y busca el hueco que te venga bien entre semana.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Lourdes & Aranda?',
		a: 'En la Calle Lope de Rueda, 112, bajo (Puerto de la Torre, 29190 Málaga). Abre la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 952 10 09 51 o por WhatsApp al mismo número. Te confirman servicio, precio y hora.',
	},
	{
		q: '¿Qué servicios hace?',
		a: 'Es un salón de belleza: peluquería (corte, color, peinado), estética facial, depilación y manicura. Como no publica carta cerrada, confirma por teléfono lo que necesites.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'El salón no publica precios, así que esta web no inventa importes. Llama al 952 10 09 51 y te dan precio cerrado antes de empezar.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha pública no detalla el horario. Llama al 952 10 09 51 para confirmar apertura; el domingo habitualmente cerrado.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 952 10 09 51 (llamada y WhatsApp). Es la vía para reservar y preguntar precios.',
	},
];

export const FEATURES = [
	{ icon: 'ri-map-pin-line', label: 'En Puerto de la Torre, Málaga' },
	{ icon: 'ri-scissors-line', label: 'Peluquería y color' },
	{ icon: 'ri-emotion-happy-line', label: 'Estética facial' },
	{ icon: 'ri-phone-line', label: 'Cita por teléfono' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Salón Lourdes & Aranda en Puerto de la Torre, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Peluquería y color en Lourdes & Aranda, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Estética facial en el salón de Lope de Rueda',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Manicura y cuidado de uñas en Puerto de la Torre',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Lourdes & Aranda',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 952 10 09 51',
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
		name: 'Servicios de Lourdes & Aranda',
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
};
