/**
 * Datos de Montse Duran. Estètica i Teràpies — Felip II, 213
 * (Sant Andreu, 08027 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Montse Duran. Estètica i Teràpies,
 *   41.426651,2.1784869, feature 0x12a4bd2ebebca7d9:0x467efc378692ef65
 * - Cylex: Felip II, 213, 08027 Barcelona; tel 933 52 12 15 y 685 51 01 33;
 *   L-V 10:00–19:30, Sáb y Dom cerrado; centro de estética, salón de belleza.
 * - Zokko: Carrer de Felip II, 213, Barcelona; tel +34685510133.
 */

import fotoPortada from '../assets/fotos/montse-duran-estetica-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/montse-duran-estetica-vertical-02.jpg';
import fotoFacial from '../assets/fotos/montse-duran-estetica-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/montse-duran-estetica-vista-4-04.jpg';
import fotoExtra1 from '../assets/fotos/montse-duran-estetica-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/montse-duran-estetica-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/montse-duran-estetica-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/montse-duran-estetica-apaisada-08.jpg';
import logo from '../assets/fotos/montse-duran-estetica-logo.svg';

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
	'https://www.google.com/maps/place/Montse+Duran.+Est%C3%A8tica+i+Ter%C3%A0pies/@41.426651,2.1784869,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4bd2ebebca7d9:0x467efc378692ef65!8m2!3d41.426651!4d2.1784869!16s%2Fg%2F1s04cztb3?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Montse Duran. Estètica i Teràpies',
	shortName: 'Montse Duran',
	tagline: 'Estètica i teràpies a Sant Andreu, Barcelona',
	claim: 'La teva estètica a Felip II, 213',
	summary:
		'Montse Duran. Estètica i Teràpies és un centre d’estètica al Carrer de Felip II 213 (Sant Andreu, 08027 Barcelona): estètica facial i corporal i teràpies. Truca al 933 52 12 15 o al 685 51 01 33 per demanar cita.',
	street: 'Carrer de Felip II, 213',
	district: 'Sant Andreu',
	borough: 'Sant Andreu',
	city: 'Barcelona',
	postalCode: '08027',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '933 52 12 15',
	phoneHref: 'tel:+34933521215',
	phoneMobile: '685 51 01 33',
	phoneMobileHref: 'tel:+34685510133',
	whatsapp:
		'https://wa.me/34685510133?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Montse%20Duran.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.426651%2C2.1784869&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.426651, lng: 2.1784869 },
	featureId: '0x12a4bd2ebebca7d9:0x467efc378692ef65',
	priceRange: '€€',
	categories: [
		'Centro de estética',
		'Salón de belleza',
		'Estética facial',
		'Estética corporal',
		'Terapias',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–19:30' },
		{ days: 'Sábado y domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en el directorio del centro (Cylex). Confirma en la ficha de Google o llamando al 933 52 12 15, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/montse-duran-estetica',
};

export const LEGAL = {
	razonSocial: 'Montse Duran. Estètica i Teràpies',
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
	{ label: 'Servicios', href: '/montse-duran-estetica/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/montse-duran-estetica/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estètica i teràpies',
		text: 'Centre d’estètica a Felip II 213, Sant Andreu.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Felip II, 213',
		text: 'Carrer de Felip II 213 · 08027 Barcelona.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Facial y corporal',
		text: 'Estética facial y corporal más terapias de bienestar.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Pide cita en el 933 52 12 15 o el 685 51 01 33.',
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
		title: 'Terapias',
		text: 'Terapias de bienestar y relajación.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Belleza',
		text: 'Servicios de belleza y cuidado personal.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación y cuidado corporal. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: 933 52 12 15 o 685 51 01 33.',
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
		grupo: 'Terapias y bienestar',
		items: [
			{ nombre: 'Terapia de bienestar', precio: 'A consultar' },
			{ nombre: 'Relajación', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sant Andreu',
		text: 'Felip II 213, 08027 Barcelona, trato de barrio.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estètica i teràpies',
		text: 'Piel y bienestar en un mismo centro.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Dos teléfonos',
		text: 'Fijo 933 52 12 15 y móvil 685 51 01 33.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario continuo',
		text: 'L-V 10:00–19:30, jornada continua entre semana.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Trato personal',
		text: 'Centro de proximidad: atención personal y sin prisas.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Montse Duran. Estètica i Teràpies?',
		a: 'En Carrer de Felip II 213 (Sant Andreu, 08027 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 933 52 12 15 o al 685 51 01 33, o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial y corporal más terapias de bienestar. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 19:30; sábados y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Tienen teléfono móvil?',
		a: 'Sí: además del fijo 933 52 12 15, atienden en el móvil 685 51 01 33, también por WhatsApp.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-hand-heart-line', label: 'Terapias' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Montse Duran. Estètica i Teràpies en Sant Andreu, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Montse Duran en Felip II 213, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Montse Duran (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en Montse Duran',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Montse Duran. Estètica i Teràpies',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de estética en Montse Duran Sant Andreu',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Bienestar en Carrer de Felip II 213',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Terapias en Montse Duran Barcelona',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Montse Duran Sant Andreu Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34933521215',
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
			opens: '10:00',
			closes: '19:30',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Montse Duran',
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
