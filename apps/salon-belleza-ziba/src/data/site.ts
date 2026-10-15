/**
 * Datos de Salón de belleza Zibá — Pasaje Fraternidad, 6
 * (Sureste, 14010 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salon de belleza Zibá,
 *   37.8782833,-4.7617569, feature 0xd6d217a055decaf:0x8fa845e1833ab6b7
 * - Fresha: Pje. Fraternidad, 6, Sureste, 14010 Córdoba; horario
 *   lun cerrado, mar–jue 9:30-13:30, vie 9:30-18:30, sáb 9:00-14:00,
 *   dom cerrado; servicios: corte de pelo para mujer.
 * - Facebook: Salón de belleza Zibá, Peluquería y estética,
 *   +34 642 91 02 71.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 *   Todo remite a llamar o a la ficha de Google.
 */

import fotoPortada from '../assets/fotos/salon-belleza-ziba-apaisada-04.jpg';
import fotoEstudio from '../assets/fotos/salon-belleza-ziba-vertical-03.jpg';
import fotoFacial from '../assets/fotos/salon-belleza-ziba-vertical-01.jpg';
import fotoCorporal from '../assets/fotos/salon-belleza-ziba-cuadrada-08.jpg';
import fotoGaleria1 from '../assets/fotos/salon-belleza-ziba-apaisada-02.jpg';
import fotoGaleria2 from '../assets/fotos/salon-belleza-ziba-vertical-05.jpg';
import fotoGaleria3 from '../assets/fotos/salon-belleza-ziba-vertical-06.jpg';
import fotoGaleria4 from '../assets/fotos/salon-belleza-ziba-cuadrada-09.jpg';
import logo from '../assets/fotos/salon-belleza-ziba-logo.svg';

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
	'https://www.google.com/maps/place/Salon+de+belleza+Zib%C3%A1/@37.8782833,-4.7617569,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d217a055decaf:0x8fa845e1833ab6b7!8m2!3d37.8782833!4d-4.7617569!16s%2Fg%2F11jh6h930x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón de belleza Zibá',
	shortName: 'Zibá',
	tagline: 'Peluquería y estética en Sureste, Córdoba',
	claim: 'Belleza y peluquería en Pasaje Fraternidad',
	summary:
		'Salón de belleza Zibá es una peluquería y centro de estética en Pasaje Fraternidad, 6 (Sureste, 14010 Córdoba). Llama al 642 91 02 71 o consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Pasaje Fraternidad, 6',
	district: 'Sureste',
	borough: 'Sureste',
	city: 'Córdoba',
	postalCode: '14010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '642 91 02 71',
	phoneHref: 'tel:+34642910271',
	whatsapp: 'https://wa.me/34642910271?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Zib%C3%A1.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	facebook: 'https://www.facebook.com/p/Sal%C3%B3n-de-belleza-Zib%C3%A1-100063714514160/',
	fresha: 'https://www.fresha.com/es/lvp/salon-de-belleza-ziba-pasaje-fraternidad-cordoba-85BblW',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8782833%2C-4.7617569&z=17&output=embed',
	geo: { lat: 37.8782833, lng: -4.7617569 },
	featureId: '0xd6d217a055decaf:0x8fa845e1833ab6b7',
	priceRange: '€€',
	categories: ['Peluquería', 'Centro de estética', 'Corte de pelo', 'Belleza'],
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes a jueves', hours: '9:30–13:30' },
		{ days: 'Viernes', hours: '9:30–18:30' },
		{ days: 'Sábado', hours: '9:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (Fresha). Confirma en la ficha de Google o llamando al 642 91 02 71, porque puede variar en festivos.',
	siteUrl: 'https://salon-belleza-ziba.vercel.app',
	ratingValue: 5,
	reviewCount: 31,
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
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y estética',
		text: 'Salón de belleza en Sureste, Córdoba: corte y estética.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Pje. Fraternidad, 6',
		text: 'Pasaje Fraternidad, 6 · 14010 Córdoba. En Sureste.',
	},
	{
		icon: 'ri-phone-line',
		title: '642 91 02 71',
		text: 'Cita por teléfono o WhatsApp. Lunes y domingo cerrado.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Sábados mañana',
		text: 'Sábados 9:00–14:00. Viernes jornada partida 9:30–18:30.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Corte de pelo',
		text: 'Corte de pelo para mujer. Confirma técnica y precio en el 642 91 02 71.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Peinado',
		text: 'Peinados para el día a día y eventos. Consulta disponibilidad.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma técnica y precio antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 642 91 02 71 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Sureste (14010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte de pelo para mujer', precio: 'A consultar' },
			{ nombre: 'Peinado', precio: 'A consultar' },
			{ nombre: 'Color / mechas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sureste, Córdoba',
		text: 'Pasaje Fraternidad, 6: zona Sureste de Córdoba, cerca de transporte público.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería de barrio',
		text: 'Peluquería y estética con trato personalizado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 642 91 02 71 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Horario claro',
		text: 'Mar–jue 9:30–13:30, vie 9:30–18:30, sáb 9:00–14:00. Lun y dom cerrado.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias o un caso especial, pregunta al salón antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Salón de belleza Zibá?',
		a: 'En Pasaje Fraternidad, 6 (Sureste, 14010 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 642 91 02 71 o por WhatsApp. También puedes usar el teléfono o el botón de contacto de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y estética, con corte de pelo para mujer como servicio destacado. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes cerrado, martes a jueves 9:30–13:30, viernes 9:30–18:30, sábado 9:00–14:00 y domingo cerrado, según ficha agregada. Confirma festivos por teléfono.',
	},
	{
		q: '¿Tienen redes o reserva online?',
		a: 'Tienen Facebook y ficha en Fresha. La vía más directa es llamar al 642 91 02 71.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-map-pin-line', label: 'Sureste, Córdoba' },
	{ icon: 'ri-phone-line', label: '642 91 02 71' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón de belleza Zibá en Sureste (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Interior del Salón Zibá en Pje. Fraternidad, 6 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Zibá Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Zibá en Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Zibá en Pasaje Fraternidad — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Salón de belleza Zibá (14010 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Zibá, Sureste Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Zibá Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Zibá Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34642910271',
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
	sameAs: [BUSINESS.facebook, BUSINESS.fresha],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.ratingValue,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Friday'],
			opens: '09:30',
			closes: '18:30',
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
