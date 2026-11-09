/**
 * Datos de La Steticista — Carrer de Provença, 292, 4t 1a
 * (La Dreta de l'Eixample, Eixample, 08008 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: La Steticista,
 *   41.3943515,2.1612773, feature 0x12a4a26539e61457:0xbc565b6dbdad9599
 * - Fresha (ficha del centro): Carrer de Provença, 292, 4to 1 A, Eixample,
 *   08008 Barcelona; L-V 9:30–20:30, Sáb 10:00–14:00, Dom cerrado;
 *   facial, corporal, depilación, masaje.
 * - Cylex: Carrer de Provença 292 4to 1, 08008 Barcelona; tel 644 80 64 04;
 *   salón de belleza, centro de estética.
 */

import fotoPortada from '../assets/fotos/la-steticista-vista-1-01.jpg';
import fotoCentro from '../assets/fotos/la-steticista-apaisada-02.jpg';
import fotoFacial from '../assets/fotos/la-steticista-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/la-steticista-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/la-steticista-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/la-steticista-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/la-steticista-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/la-steticista-apaisada-08.jpg';
import logo from '../assets/fotos/la-steticista-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/La+Steticista/@41.3943515,2.1612773,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a26539e61457:0xbc565b6dbdad9599!8m2!3d41.3943515!4d2.1612773!16s%2Fg%2F1q5bkj64x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'La Steticista',
	shortName: 'La Steticista',
	tagline: 'Estética avanzada en Eixample, Barcelona',
	claim: 'Tu centro de estética en Provença 292',
	summary:
		'La Steticista es un centro de estética avanzada en Carrer de Provença 292, 4t 1a (La Dreta de l’Eixample, Eixample, 08008 Barcelona): facial, corporal, depilación y masaje. Llama al 644 80 64 04 o reserva online para cita y servicios actuales.',
	street: 'Carrer de Provença, 292, 4t 1a',
	district: "La Dreta de l'Eixample",
	borough: 'Eixample',
	city: 'Barcelona',
	postalCode: '08008',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '644 80 64 04',
	phoneHref: 'tel:+34644806404',
	whatsapp:
		'https://wa.me/34644806404?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20La%20Steticista.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3943515%2C2.1612773&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3943515, lng: 2.1612773 },
	featureId: '0x12a4a26539e61457:0xbc565b6dbdad9599',
	priceRange: '€€',
	categories: [
		'Centro de estética',
		'Estética facial',
		'Estética corporal',
		'Depilación',
		'Masaje',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:30–20:30' },
		{ days: 'Sábado', hours: '10:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha del centro (Fresha). Confirma en la ficha de Google o llamando al 644 80 64 04, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/la-steticista',
};

export const LEGAL = {
	razonSocial: 'La Steticista',
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
	{ label: 'Servicios', href: '/la-steticista/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/la-steticista/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética avanzada',
		text: 'Centro de estética en Provença 292, Dreta de l’Eixample.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Provença 292',
		text: 'Carrer de Provença 292, 4t 1a · 08008 Barcelona.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Facial y corporal',
		text: 'Facial, corporal, depilación y masaje en un solo centro.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Pide cita en el 644 80 64 04 o reserva online.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza, extracciones, peeling químico y dermaplaning.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Facial hombre',
		text: 'Tratamientos faciales también para piel masculina.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Moldeado corporal y tratamiento anticelulítico.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación con hilo, incluido perfilado de cejas.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Masaje',
		text: 'Masaje de espalda y bienestar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 644 80 64 04.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial',
		items: [
			{ nombre: 'Limpieza facial', precio: 'A consultar' },
			{ nombre: 'Peeling químico', precio: 'A consultar' },
			{ nombre: 'Dermaplaning', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y bienestar',
		items: [
			{ nombre: 'Moldeado corporal', precio: 'A consultar' },
			{ nombre: 'Tratamiento anticelulítico', precio: 'A consultar' },
			{ nombre: 'Masaje de espalda', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Eixample',
		text: 'Provença 292, 4t 1a, Dreta de l’Eixample, bien comunicada.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética avanzada',
		text: 'Piel y cuerpo: del facial al moldeado corporal.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Perfilado de cejas con hilo y cuidado facial.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 644 80 64 04 o reserva online para tu cita.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario amplio',
		text: 'L-V 9:30–20:30 y sábados 10:00–14:00.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Steticista?',
		a: 'En Carrer de Provença 292, 4t 1a (La Dreta de l’Eixample, Eixample, 08008 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 644 80 64 04, escribe por WhatsApp o usa la reserva online. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial (limpieza, peeling, dermaplaning), corporal (moldeado, anticelulítico), depilación con hilo y masaje. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 644 80 64 04.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 9:30 a 20:30, sábados de 10:00 a 14:00 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Tienen reserva online?',
		a: 'Sí, el centro admite reserva online además del teléfono 644 80 64 04. Pregunta por disponibilidad al reservar.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-user-smile-line', label: 'Estética facial' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: "La Steticista en Eixample, Barcelona",
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'La Steticista en Provença 292, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en La Steticista (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en La Steticista',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de La Steticista',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de estética en La Steticista Eixample',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Estética facial en La Steticista',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Bienestar en Carrer de Provença 292',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'La Steticista Eixample Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34644806404',
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Saturday',
			opens: '10:00',
			closes: '14:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de La Steticista',
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
