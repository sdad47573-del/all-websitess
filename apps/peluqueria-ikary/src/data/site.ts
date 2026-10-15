/**
 * Datos de Peluquería Ikary — C. Libertador Hidalgo y Costilla 1,
 * Edificio Los Jardines I, Local 2 (Sur, 14013 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Peluquería Ikary - Salón de belleza,
 *   37.8617744,-4.7839098, feature 0xd6d209368c88877:0xbdf4abef4cf2e107
 * - Web propia (peluqueriaikary.com): C/Libertador Hidalgo y Costilla s/n,
 *   Edificio Los Jardines I Local 2, Córdoba 14013; tel +34 957 422 116;
 *   email info@peluqueriaikary.com; salón abierto desde septiembre de 1995;
 *   servicios de peluquería, estética, sala de rayos UVA y láser; horario
 *   lun–jue 09:30-13:30 y 17:30-20:30, vie intensivo 09:30-20:30,
 *   sáb 09:00-14:00.
 * - Cylex: C. Libertador Hidalgo y Costilla 1, 14013 Córdoba, Sur;
 *   957 42 21 16; peluquería y estética con láser.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 */

import fotoPortada from '../assets/fotos/peluqueria-ikary-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/peluqueria-ikary-vertical-02.jpg';
import fotoFacial from '../assets/fotos/peluqueria-ikary-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/peluqueria-ikary-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/peluqueria-ikary-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/peluqueria-ikary-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/peluqueria-ikary-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/peluqueria-ikary-vertical-08.jpg';
import logo from '../assets/fotos/peluqueria-ikary-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoGaleria1,
	fotoGaleria2,
	fotoGaleria3,
	fotoGaleria4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Peluquer%C3%ADa+Ikary+-+Sal%C3%B3n+de+belleza/@37.8617744,-4.7839098,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d209368c88877:0xbdf4abef4cf2e107!8m2!3d37.8617744!4d-4.7839098!16s%2Fg%2F11gbk308mg?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Peluquería Ikary',
	shortName: 'Ikary',
	tagline: 'Peluquería y estética en el Sur, Córdoba',
	claim: 'Tu salón de belleza en Córdoba desde 1995',
	summary:
		'Peluquería Ikary es un salón de peluquería y estética en C. Libertador Hidalgo y Costilla 1, Edificio Los Jardines I, Local 2 (Sur, 14013 Córdoba): peluquería, estética, láser y rayos UVA desde 1995. Llama al 957 42 21 16 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Libertador Hidalgo y Costilla 1, Local 2',
	district: 'Sur (Los Jardines)',
	borough: 'Distrito Sur',
	city: 'Córdoba',
	postalCode: '14013',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 42 21 16',
	phoneHref: 'tel:+34957422116',
	whatsapp: 'https://wa.me/34957422116?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Ikary.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	email: 'info@peluqueriaikary.com',
	website: 'https://peluqueriaikary.com/',
	facebook: 'https://www.facebook.com/peluqueria.ikary',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8617744%2C-4.7839098&z=17&output=embed',
	geo: { lat: 37.8617744, lng: -4.7839098 },
	featureId: '0xd6d209368c88877:0xbdf4abef4cf2e107',
	priceRange: '€€',
	categories: ['Peluquería', 'Estética', 'Depilación láser', 'Rayos UVA'],
	hours: [
		{ days: 'Lunes a jueves', hours: '9:30–13:30 y 17:30–20:30' },
		{ days: 'Viernes', hours: '9:30–20:30 (intensivo)' },
		{ days: 'Sábado', hours: '9:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en su web (peluqueriaikary.com). Confirma en la ficha de Google o llamando al 957 42 21 16, porque puede variar en festivos.',
	siteUrl: 'https://peluqueria-ikary.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Peluquería Ikary',
	nif: '[pendiente de completar]',
	email: 'info@peluqueriaikary.com',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y estética',
		text: 'Peluquería, estética, láser y rayos UVA en un mismo salón.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Libertador Hidalgo 1',
		text: 'Edificio Los Jardines I, Local 2 · 14013 Córdoba, Sur.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 42 21 16',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-award-line',
		title: 'Desde 1995',
		text: 'Primer salón de belleza e imagen de la zona, en evolución continua.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería técnica y profesional, últimas tendencias. Confirma en el 957 42 21 16.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética',
		text: 'Servicios de estética y asesoría de imagen personalizada.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Láser',
		text: 'Servicio láser. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Rayos UVA',
		text: 'Sala de rayos UVA. Confirma técnica y precio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 42 21 16 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Los Jardines (14013). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería y estética',
		items: [
			{ nombre: 'Peluquería', precio: 'A consultar' },
			{ nombre: 'Tratamientos capilares', precio: 'A consultar' },
			{ nombre: 'Estética', precio: 'A consultar' },
			{ nombre: 'Asesoría de imagen', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Láser y UVA',
		items: [
			{ nombre: 'Láser', precio: 'A consultar' },
			{ nombre: 'Rayos UVA', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Los Jardines',
		text: 'Libertador Hidalgo y Costilla 1: Sur, Córdoba.',
	},
	{
		icon: 'ri-award-line',
		title: 'Desde 1995',
		text: 'Más de 20 años de oficio con formación continua.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 42 21 16 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Viernes intensivo',
		text: 'Lun–jue partido, viernes 9:30–20:30 y sábados 9:00–14:00.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Trato personal',
		text: 'Asesoramiento sincero y personalizado, también para bodas y eventos.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Peluquería Ikary?',
		a: 'En C. Libertador Hidalgo y Costilla 1, Edificio Los Jardines I, Local 2 (Sur, 14013 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 42 21 16, por WhatsApp o en info@peluqueriaikary.com. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y estética con láser y sala de rayos UVA, además de asesoría de imagen. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a jueves 9:30–13:30 y 17:30–20:30, viernes 9:30–20:30 y sábado 9:00–14:00, según su web.',
	},
	{
		q: '¿Cuánta experiencia tienen?',
		a: 'El salón abrió en septiembre de 1995 como primer establecimiento de belleza e imagen de la zona.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-2-line', label: 'Estética' },
	{ icon: 'ri-map-pin-line', label: 'Sur, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 42 21 16' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Peluquería Ikary en el Sur (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Ikary en Libertador Hidalgo y Costilla 1 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Ikary Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Ikary Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Ikary en Los Jardines — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Peluquería Ikary (14013 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Ikary, Sur Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Peluquería Ikary Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Ikary Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957422116',
	email: BUSINESS.email,
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	knowsAbout: BUSINESS.categories,
	foundingDate: '1995-09',
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
	sameAs: [BUSINESS.website, BUSINESS.facebook],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
			opens: '17:30',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Friday'],
			opens: '09:30',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:00',
			closes: '14:00',
		},
	],
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
				provider: { '@type': 'HairSalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
