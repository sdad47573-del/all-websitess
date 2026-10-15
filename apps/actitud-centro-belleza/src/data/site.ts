/**
 * Datos de Actitud Centro de Belleza — C. María Zambrano 2
 * (Noroeste, 14011 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Actitud Centro de Belleza,
 *   37.894494,-4.7958823, feature 0xd6cdf1f799e1ebd:0xac0cc8a0a11667f1
 * - Cylex (actualizado 18-jun-2026): María Zambrano, 2, 14011 Córdoba,
 *   Noroeste; tel 627 31 18 71; peluquería; mar–mié y jue 9:30–13:30 y
 *   17:00–20:00, vie 9:30–20:00, sáb 9:30–14:00, dom y lun cerrado.
 * - Fresha: Actitud Centro de Belleza, C/ María Zambrano, 2; salón de
 *   belleza con depilación.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Sin aggregateRating: sin muestra suficiente de reseñas.
 */

import fotoPortada from '../assets/fotos/actitud-centro-belleza-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/actitud-centro-belleza-apaisada-02.jpg';
import fotoFacial from '../assets/fotos/actitud-centro-belleza-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/actitud-centro-belleza-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/actitud-centro-belleza-apaisada-05.jpg';
import fotoGaleria2 from '../assets/fotos/actitud-centro-belleza-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/actitud-centro-belleza-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/actitud-centro-belleza-vertical-08.jpg';
import logo from '../assets/fotos/actitud-centro-belleza-logo.svg';

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
	'https://www.google.com/maps/place/Actitud+Centro+de+Belleza/@37.894494,-4.7958823,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf1f799e1ebd:0xac0cc8a0a11667f1!8m2!3d37.894494!4d-4.7958823!16s%2Fg%2F11mv0m_l1h?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Actitud Centro de Belleza',
	shortName: 'Actitud',
	tagline: 'Peluquería y belleza en el Noroeste, Córdoba',
	claim: 'Tu centro de peluquería y belleza en María Zambrano',
	summary:
		'Actitud Centro de Belleza es una peluquería en C. María Zambrano 2 (Noroeste, 14011 Córdoba): peluquería y belleza. Llama al 627 31 18 71 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. María Zambrano 2',
	district: 'Noroeste',
	borough: 'Distrito Noroeste',
	city: 'Córdoba',
	postalCode: '14011',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '627 31 18 71',
	phoneHref: 'tel:+34627311871',
	whatsapp: 'https://wa.me/34627311871?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Actitud.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.894494%2C-4.7958823&z=17&output=embed',
	geo: { lat: 37.894494, lng: -4.7958823 },
	featureId: '0xd6cdf1f799e1ebd:0xac0cc8a0a11667f1',
	priceRange: '€€',
	categories: ['Peluquería', 'Belleza', 'Depilación'],
	hours: [
		{ days: 'Martes a jueves', hours: '9:30–13:30 y 17:00–20:00' },
		{ days: 'Viernes', hours: '9:30–20:00' },
		{ days: 'Sábado', hours: '9:30–14:00' },
		{ days: 'Domingo y lunes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario actualizado en junio de 2026 (Cylex). Confirma en la ficha de Google o llamando al 627 31 18 71, porque puede variar en festivos.',
	siteUrl: 'https://actitud-centro-belleza.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Actitud Centro de Belleza',
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
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y belleza',
		text: 'Peluquería y belleza en un mismo centro.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'María Zambrano 2',
		text: 'C. María Zambrano 2 · 14011 Córdoba, Noroeste.',
	},
	{
		icon: 'ri-phone-line',
		title: '627 31 18 71',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Viernes intensivo',
		text: 'Viernes 9:30–20:00; sábados 9:30–14:00.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería y cuidado del cabello. Confirma en el 627 31 18 71.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza',
		text: 'Servicios de belleza. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Depilación',
		text: 'Depilación. Confirma técnica y precio.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Imagen',
		text: 'Asesoría de imagen. Confirma el servicio al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 627 31 18 71 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En el Noroeste (14011). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte', precio: 'A consultar' },
			{ nombre: 'Color', precio: 'A consultar' },
			{ nombre: 'Peinados', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza', precio: 'A consultar' },
			{ nombre: 'Depilación', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En María Zambrano',
		text: 'María Zambrano 2: Noroeste, Córdoba.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería de barrio con trato cercano.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 627 31 18 71 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Mar–jue partido',
		text: '9:30–13:30 y 17:00–20:00; viernes intensivo y sábados mañana.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Confirma formas de pago al reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Actitud Centro de Belleza?',
		a: 'En C. María Zambrano 2 (Noroeste, 14011 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 627 31 18 71 o por WhatsApp. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y belleza, con depilación. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Martes a jueves 9:30–13:30 y 17:00–20:00, viernes 9:30–20:00 y sábado 9:30–14:00; domingo y lunes cerrado.',
	},
	{
		q: '¿Abren los lunes?',
		a: 'No: domingo y lunes cerrado. De martes a sábado, con cita.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-2-line', label: 'Belleza' },
	{ icon: 'ri-map-pin-line', label: 'Noroeste, Córdoba' },
	{ icon: 'ri-phone-line', label: '627 31 18 71' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Actitud Centro de Belleza en el Noroeste (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Actitud en María Zambrano 2 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Actitud Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Actitud Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Actitud en el Noroeste — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Actitud (14011 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Actitud, Noroeste Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Actitud Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Actitud Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34627311871',
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
			opens: '17:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Friday'],
			opens: '09:30',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:30',
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
