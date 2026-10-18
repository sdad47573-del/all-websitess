/**
 * Datos de Estética Esencia (Juli-Ofe) — Passatge de Casamitjana, 23
 * (Sant Martí, 08005 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Estética Esencia (Juli-Ofe),
 *   41.4033099,2.2059291, feature 0x12a4a340e5310de3:0x4b7fb34575bb642f
 * - Ficha de Google (endpoint /maps/preview/place): Passatge de
 *   Casamitjana 23, Sant Martí, 08005 Barcelona; centro de estética;
 *   5,0 (70 reseñas); tel 933 08 87 79; L-V 10:00–19:00, Sáb y Dom cerrado.
 */

import fotoPortada from '../assets/fotos/estetica-esencia-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/estetica-esencia-vista-2-02.jpg';
import fotoFacial from '../assets/fotos/estetica-esencia-vista-3-03.jpg';
import fotoCorporal from '../assets/fotos/estetica-esencia-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/estetica-esencia-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/estetica-esencia-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/estetica-esencia-cuadrada-07.jpg';
import fotoExtra4 from '../assets/fotos/estetica-esencia-vista-8-08.jpg';
import logo from '../assets/fotos/estetica-esencia-logo.svg';

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
	'https://www.google.com/maps/place/Est%C3%A9tica+Esencia+%28Juli-Ofe%29/data=!4m7!3m6!1s0x12a4a340e5310de3:0x4b7fb34575bb642f!8m2!3d41.4033099!4d2.2059291!16s%2Fg%2F11c54_5ph7!19sChIJ4w0x5UCjpBIRL2S7dUWzf0s?authuser=0&hl=es&g_ep=EgoyMDI2MTAxMy4wIJJjKgBIAVAD&rclk=1';

export const BUSINESS = {
	name: 'Estética Esencia (Juli-Ofe)',
	shortName: 'Esencia',
	tagline: 'Estética en Sant Martí, Barcelona',
	claim: 'Tu estética en Casamitjana 23',
	summary:
		'Estética Esencia (Juli-Ofe) es un centro de estética en Passatge de Casamitjana 23 (Sant Martí, 08005 Barcelona): estética facial y corporal. Con un 5,0 en Google (70 reseñas). Llama al 933 08 87 79 para cita.',
	street: 'Passatge de Casamitjana, 23',
	district: 'Sant Martí',
	borough: 'Sant Martí',
	city: 'Barcelona',
	postalCode: '08005',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '933 08 87 79',
	phoneHref: 'tel:+34933088779',
	whatsapp:
		'https://wa.me/34933088779?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Esencia.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.4033099%2C2.2059291&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.4033099, lng: 2.2059291 },
	featureId: '0x12a4a340e5310de3:0x4b7fb34575bb642f',
	priceRange: '€€',
	rating: 5.0,
	reviewCount: 70,
	categories: [
		'Centro de estética',
		'Estética facial',
		'Estética corporal',
		'Bienestar',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–19:00' },
		{ days: 'Sábado y domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro. Confirma llamando al 933 08 87 79, porque puede variar en festivos.',
	siteUrl: 'https://estetica-esencia.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Estética Esencia (Juli-Ofe)',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética en Sant Martí',
		text: 'Centro de estética en Casamitjana 23, Sant Martí.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Casamitjana 23',
		text: 'Passatge de Casamitjana 23 · 08005 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 con 70 reseñas',
		text: 'Valoración perfecta de 5,0 sobre 5 en Google con 70 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Pide cita en el 933 08 87 79.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado facial: limpieza, hidratación y luminosidad.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y cuidado de la piel.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Bienestar',
		text: 'Bienestar y relajación en Sant Martí.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Asesoramiento',
		text: 'Diagnóstico personalizado antes de cada tratamiento.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación y cuidado corporal. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 933 08 87 79.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Estética',
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
			{ nombre: 'Relajación', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sant Martí',
		text: 'Casamitjana 23, 08005 Barcelona, trato de barrio.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Google',
		text: '70 opiniones con la máxima valoración media.',
	},
	{
		icon: 'ri-team-line',
		title: 'Juli-Ofe',
		text: 'El equipo cercano que da nombre al centro.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 933 08 87 79 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Entre semana',
		text: 'L-V 10:00–19:00, jornada continua.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Estética Esencia?',
		a: 'En Passatge de Casamitjana 23 (Sant Martí, 08005 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 933 08 87 79 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial y corporal y bienestar. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 933 08 87 79.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 19:00; sábados y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Qué opinan las clientas?',
		a: 'Tiene un 5,0 sobre 5 con 70 opiniones en Google: la máxima valoración.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-user-smile-line', label: 'Diagnóstico personalizado' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Estética Esencia en Sant Martí, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Esencia en Casamitjana 23, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Estética Esencia (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en Esencia',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Estética Esencia Juli-Ofe',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de estética en Esencia Sant Martí',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Bienestar en Passatge de Casamitjana 23',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Estética en Esencia Barcelona',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Esencia Sant Martí Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34933088779',
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '19:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Estética Esencia',
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
