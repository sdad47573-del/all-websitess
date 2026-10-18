/**
 * Datos de Centre Estètica Nail Show — Carrer del General Álvarez
 * de Castro, 3 (Ciutat Vella, 08003 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centre Estètica Nail Show,
 *   41.3869212,2.1779266, feature 0x12a4a3105f4047c3:0x2774c325d0002ef1
 * - Ficha de Google (endpoint /maps/preview/place): Carrer del General
 *   Álvarez de Castro 3, Ciutat Vella, 08003 Barcelona; salón de manicura
 *   y pedicura; 4,5 (230 reseñas); tel 615 34 85 58; L-Sáb 9:30–21:00,
 *   Dom 10:00–21:00.
 */

import fotoPortada from '../assets/fotos/nail-show-estetica-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/nail-show-estetica-vertical-02.jpg';
import fotoFacial from '../assets/fotos/nail-show-estetica-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/nail-show-estetica-apaisada-04.jpg';
import fotoExtra1 from '../assets/fotos/nail-show-estetica-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/nail-show-estetica-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/nail-show-estetica-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/nail-show-estetica-vertical-08.jpg';
import logo from '../assets/fotos/nail-show-estetica-logo.svg';

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
	'https://www.google.com/maps/place/Centre+Est%C3%A8tica+Nail+Show/@41.3869212,2.1779266,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3105f4047c3:0x2774c325d0002ef1!8m2!3d41.3869212!4d2.1779266!16s%2Fg%2F11gjw1jncg?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Centre Estètica Nail Show',
	shortName: 'Nail Show',
	tagline: 'Uñas en Ciutat Vella, Barcelona',
	claim: 'Tus uñas en Álvarez de Castro 3',
	summary:
		'Centre Estètica Nail Show es un salón de manicura y pedicura en Carrer del General Álvarez de Castro 3 (Ciutat Vella, 08003 Barcelona). Con un 4,5 en Google (230 reseñas). Abre todos los días. Llama al 615 34 85 58 para cita.',
	street: 'Carrer del General Álvarez de Castro, 3',
	district: 'Ciutat Vella',
	borough: 'Ciutat Vella',
	city: 'Barcelona',
	postalCode: '08003',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '615 34 85 58',
	phoneHref: 'tel:+34615348558',
	whatsapp:
		'https://wa.me/34615348558?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Nail%20Show.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3869212%2C2.1779266&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3869212, lng: 2.1779266 },
	featureId: '0x12a4a3105f4047c3:0x2774c325d0002ef1',
	priceRange: '€€',
	rating: 4.5,
	reviewCount: 230,
	categories: [
		'Salón de manicura y pedicura',
		'Salón de uñas',
		'Centro de estética',
		'Belleza',
	],
	hours: [
		{ days: 'Lunes a sábado', hours: '9:30–21:00' },
		{ days: 'Domingo', hours: '10:00–21:00' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro: abre todos los días. Confirma llamando al 615 34 85 58, porque puede variar en festivos.',
	siteUrl: 'https://nail-show-estetica.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Centre Estètica Nail Show',
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
		icon: 'ri-hand-heart-line',
		title: 'Manicura y pedicura',
		text: 'Salón de uñas en Álvarez de Castro 3, Ciutat Vella.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Álvarez de Castro 3',
		text: 'General Álvarez de Castro 3 · 08003 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,5 con 230 reseñas',
		text: 'Valoración de 4,5 sobre 5 en Google con 230 opiniones.',
	},
	{
		icon: 'ri-time-line',
		title: 'Abre cada día',
		text: 'L-Sáb 9:30–21:00 y domingos 10:00–21:00.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura',
		text: 'Manicura cuidada y profesional en Ciutat Vella.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Pedicura',
		text: 'Pedicura completa para unos pies perfectos.',
	},
	{
		icon: 'ri-brush-line',
		title: 'Esmaltado',
		text: 'Esmaltado y acabado de color duradero.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Cuidado',
		text: 'Cuidado de manos y pies, hidratación y mimo.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 615 34 85 58.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Manos',
		items: [
			{ nombre: 'Manicura', precio: 'A consultar' },
			{ nombre: 'Esmaltado', precio: 'A consultar' },
			{ nombre: 'Cuidado de manos', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Pies y belleza',
		items: [
			{ nombre: 'Pedicura', precio: 'A consultar' },
			{ nombre: 'Cuidado de pies', precio: 'A consultar' },
			{ nombre: 'Belleza', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Ciutat Vella',
		text: 'Álvarez de Castro 3, 08003 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,5 en Google',
		text: '230 opiniones con buena valoración media.',
	},
	{
		icon: 'ri-time-line',
		title: 'Todos los días',
		text: 'Abre incluso los domingos, de 10:00 a 21:00.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 615 34 85 58 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Especialistas en uñas',
		text: 'Salón dedicado a manicura y pedicura.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Nail Show?',
		a: 'En Carrer del General Álvarez de Castro 3 (Ciutat Vella, 08003 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 615 34 85 58 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Manicura y pedicura como salón de uñas. Confirma tu servicio y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 615 34 85 58.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a sábado de 9:30 a 21:00 y domingos de 10:00 a 21:00. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Abren los domingos?',
		a: 'Sí, los domingos de 10:00 a 21:00. Es uno de los pocos salones que abre cada día.',
	},
];

export const FEATURES = [
	{ icon: 'ri-hand-heart-line', label: 'Salón de uñas' },
	{ icon: 'ri-sparkling-2-line', label: 'Manicura' },
	{ icon: 'ri-leaf-line', label: 'Pedicura' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Nail Show en Ciutat Vella, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Nail Show en Álvarez de Castro 3, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Manicura en Nail Show (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Pedicura en Nail Show',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Nail Show Barcelona',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Uñas en Nail Show Ciutat Vella',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Esmaltado en Nail Show Álvarez de Castro 3',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Belleza de manos en Nail Show Barcelona',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'NailSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Nail Show Ciutat Vella Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34615348558',
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
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '09:30',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '10:00',
			closes: '21:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Nail Show',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'NailSalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
