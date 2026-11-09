/**
 * Datos de NM Aesthetics | Instituto de Estética Avanzada —
 * Carrer de Provença, 156, 2º 2ª (Eixample, 08036 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: NM Aesthetics | Instituto de
 *   Estética Avanzada, 41.3878039,2.1526024,
 *   feature 0x12a4a3d72b8f98dd:0xa80b8cba5c3414fe
 * - Ficha de Google (endpoint /maps/preview/place): Carrer de Provença
 *   156, Piso 2º Puerta 2ª, Eixample, 08036 Barcelona; centro de estética
 *   y academia de estética; 4,9 (28 reseñas); tel 619 89 47 47;
 *   L-V 10:00–20:00, Sáb 10:00–14:00, Dom cerrado.
 *
 * Nota sobre fotos: la ficha devuelve su bloque de información sin bloque
 * de fotos (respuesta corta y estable tras 15+ peticiones), así que no hay
 * fotos que descargar. La web trae 4 imágenes propias de marcador (SVG en
 * src/assets/fotos/). Ver README.md.
 */

import fotoPortada from '../assets/fotos/nm-aesthetics-hero.svg';
import fotoCentro from '../assets/fotos/nm-aesthetics-centro.svg';
import fotoFacial from '../assets/fotos/nm-aesthetics-facial.svg';
import fotoCorporal from '../assets/fotos/nm-aesthetics-corporal.svg';
import logo from '../assets/fotos/nm-aesthetics-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/NM+Aesthetics+%7C+Instituto+de+Est%C3%A9tica+Avanzada/@41.3878039,2.1526024,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4a3d72b8f98dd:0xa80b8cba5c3414fe!8m2!3d41.3878039!4d2.1526024!16s%2Fg%2F11rfqz7jcp?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'NM Aesthetics | Instituto de Estética Avanzada',
	shortName: 'NM Aesthetics',
	tagline: 'Estética avanzada en Eixample, Barcelona',
	claim: 'Tu instituto en Provença 156',
	summary:
		'NM Aesthetics | Instituto de Estética Avanzada es un centro de estética en Carrer de Provença 156, 2º 2ª (Eixample, 08036 Barcelona): estética facial y corporal avanzada, también academia. Con un 4,9 en Google (28 reseñas). Llama al 619 89 47 47 para cita.',
	street: 'Carrer de Provença, 156, 2º 2ª',
	district: "Nova Esquerra de l'Eixample",
	borough: 'Eixample',
	city: 'Barcelona',
	postalCode: '08036',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '619 89 47 47',
	phoneHref: 'tel:+34619894747',
	whatsapp:
		'https://wa.me/34619894747?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20NM%20Aesthetics.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.3878039%2C2.1526024&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.3878039, lng: 2.1526024 },
	featureId: '0x12a4a3d72b8f98dd:0xa80b8cba5c3414fe',
	priceRange: '€€',
	rating: 4.9,
	reviewCount: 28,
	categories: [
		'Centro de estética',
		'Estética avanzada',
		'Estética facial',
		'Estética corporal',
		'Academia de estética',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–20:00' },
		{ days: 'Sábado', hours: '10:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google del centro. Confirma llamando al 619 89 47 47, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/nm-aesthetics',
};

export const LEGAL = {
	razonSocial: 'NM Aesthetics | Instituto de Estética Avanzada',
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
	{ label: 'Servicios', href: '/nm-aesthetics/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/nm-aesthetics/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética avanzada',
		text: 'Instituto de estética avanzada en Provença 156, Eixample.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Provença 156',
		text: 'Carrer de Provença 156, 2º 2ª · 08036 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,9 con 28 reseñas',
		text: 'Valoración de 4,9 sobre 5 en Google con 28 opiniones.',
	},
	{
		icon: 'ri-graduation-cap-line',
		title: 'También academia',
		text: 'Centro y academia de estética: formación y tratamiento.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial avanzado',
		text: 'Estética facial avanzada: limpieza, hidratación y luminosidad.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y cuidado de la piel.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Bienestar',
		text: 'Bienestar y relajación en Eixample.',
	},
	{
		icon: 'ri-graduation-cap-line',
		title: 'Academia',
		text: 'Formación en estética: pregunta por sus cursos.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Asesoramiento',
		text: 'Diagnóstico personalizado antes de cada tratamiento.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 619 89 47 47.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Estética avanzada',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Bienestar y formación',
		items: [
			{ nombre: 'Bienestar', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
			{ nombre: 'Formación (academia)', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Eixample',
		text: 'Provença 156, 2º 2ª, 08036 Barcelona.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,9 en Google',
		text: '28 opiniones con una valoración casi perfecta.',
	},
	{
		icon: 'ri-graduation-cap-line',
		title: 'Instituto y academia',
		text: 'Tratan y forman: doble garantía de criterio.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita fácil',
		text: 'Llama al 619 89 47 47 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Sábados por la mañana',
		text: 'L-V 10:00–20:00 y sábados 10:00–14:00.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está NM Aesthetics?',
		a: 'En Carrer de Provença 156, 2º 2ª (Nova Esquerra de l’Eixample, Eixample, 08036 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 619 89 47 47 o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética facial y corporal avanzada, además de formación como academia de estética. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro en el 619 89 47 47.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 20:00, sábados de 10:00 a 14:00 y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Su ficha de Google no publica fotos descargables (la respuesta de Google llega sin bloque de fotos). Esta web usa imágenes propias de marcador hasta tener fotos originales del centro.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Estética avanzada' },
	{ icon: 'ri-graduation-cap-line', label: 'Academia de estética' },
	{ icon: 'ri-leaf-line', label: 'Estética corporal' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'NM Aesthetics en Eixample, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'NM Aesthetics en Provença 156, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Estética facial avanzada en NM Aesthetics',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en NM Aesthetics',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'NM Aesthetics Eixample Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34619894747',
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
			closes: '20:00',
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
		name: 'Servicios de NM Aesthetics',
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
