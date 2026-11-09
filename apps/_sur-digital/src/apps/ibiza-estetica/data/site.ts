/**
 * Datos de IBIZA centro de estética — C. Isla Ibiza 4
 * (Noroeste / Arroyo del Moro, 14011 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: IBIZA centro de estética,
 *   37.89074,-4.799004, feature 0xd6cdf5ab814c91b:0x42908036c4ccb4e8
 * - Fresha: C. Isla Ibiza, 4, Noroeste, 14011 Córdoba; servicio
 *   Lash Lift; horario lun,mar,jue,vie,sáb 10:00-13:30,
 *   mié 10:00-18:30, dom cerrado.
 * - Facebook: Ibiza centro de estética, Calle Isla Ibiza 14011,
 *   +34 957 08 88 18.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 */

import fotoPortada from '../assets/fotos/ibiza-estetica-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/ibiza-estetica-estudio.svg';
import fotoFacial from '../assets/fotos/ibiza-estetica-facial.svg';
import fotoCorporal from '../assets/fotos/ibiza-estetica-corporal.svg';
import logo from '../assets/fotos/ibiza-estetica-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoEstudio,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/IBIZA+centro+de+est%C3%A9tica/@37.89074,-4.799004,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf5ab814c91b:0x42908036c4ccb4e8!8m2!3d37.89074!4d-4.799004!16s%2Fg%2F11bbrp6tzb?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'IBIZA centro de estética',
	shortName: 'IBIZA',
	tagline: 'Estética y nutrición en Arroyo del Moro, Córdoba',
	claim: 'Belleza y bienestar en Isla Ibiza',
	summary:
		'IBIZA centro de estética es un centro de estética, nutrición y dietética en C. Isla Ibiza 4 (Noroeste, 14011 Córdoba). Llama al 957 08 88 18 o consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'C. Isla Ibiza 4',
	district: 'Noroeste',
	borough: 'Arroyo del Moro',
	city: 'Córdoba',
	postalCode: '14011',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 08 88 18',
	phoneHref: 'tel:+34957088818',
	whatsapp: 'https://wa.me/34957088818?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20IBIZA.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	facebook: 'https://www.facebook.com/p/Ibiza-centro-de-est%C3%A9tica-100063791970512/',
	fresha: 'https://www.fresha.com/lvp/ibiza-centro-de-estetica-nutricion-y-dietetica-calle-isla-ibiza-cordoba-A7G60Z',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.89074%2C-4.799004&z=17&output=embed',
	geo: { lat: 37.89074, lng: -4.799004 },
	featureId: '0xd6cdf5ab814c91b:0x42908036c4ccb4e8',
	priceRange: '€€',
	categories: ['Centro de estética', 'Lash Lift', 'Nutrición y dietética', 'Belleza'],
	hours: [
		{ days: 'Lunes, martes, jueves, viernes y sábado', hours: '10:00–13:30' },
		{ days: 'Miércoles', hours: '10:00–18:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (Fresha). Confirma en la ficha de Google o llamando al 957 08 88 18, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/ibiza-estetica',
	ratingValue: 4.9,
	reviewCount: 45,
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
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
	{ label: 'Servicios', href: '/ibiza-estetica/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/ibiza-estetica/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética y nutrición',
		text: 'Centro de estética, nutrición y dietética en Noroeste.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Isla Ibiza 4',
		text: 'C. Isla Ibiza 4 · 14011 Córdoba. En Arroyo del Moro.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 08 88 18',
		text: 'Cita por teléfono o WhatsApp. Domingos cerrado.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Lash Lift',
		text: 'Mirada: servicio destacado de pestañas.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-eye-line',
		title: 'Lash Lift',
		text: 'Lifting de pestañas. Confirma técnica y precio en el 957 08 88 18.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado facial personalizado. Consulta diagnóstico.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Nutrición',
		text: 'Nutrición y dietética. Pregunta por el programa.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 957 08 88 18 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Arroyo del Moro (14011). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Mirada y facial',
		items: [
			{ nombre: 'Lash Lift', precio: 'A consultar' },
			{ nombre: 'Cuidado facial', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Bienestar',
		items: [
			{ nombre: 'Nutrición / dietética', precio: 'A consultar' },
			{ nombre: 'Cuidado corporal', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Arroyo del Moro',
		text: 'Isla Ibiza 4: zona Noroeste de Córdoba, bien comunicada.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Lash Lift',
		text: 'Servicio de mirada destacado en la ficha.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 08 88 18 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Miércoles tarde',
		text: 'Miércoles 10:00–18:30; resto de días 10:00–13:30. Dom cerrado.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Más que estética',
		text: 'Combinan estética con nutrición y dietética.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está IBIZA centro de estética?',
		a: 'En C. Isla Ibiza 4 (Noroeste / Arroyo del Moro, 14011 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 08 88 18 o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética con Lash Lift como servicio destacado, además de nutrición y dietética. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes, martes, jueves, viernes y sábado 10:00–13:30, miércoles 10:00–18:30 y domingo cerrado, según ficha agregada. Confirma festivos por teléfono.',
	},
	{
		q: '¿Tienen redes?',
		a: 'Tienen página de Facebook (Ibiza centro de estética) y ficha en Fresha.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-eye-line', label: 'Lash Lift' },
	{ icon: 'ri-map-pin-line', label: 'Noroeste, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 08 88 18' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'IBIZA centro de estética en Noroeste (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'IBIZA en Isla Ibiza 4' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en IBIZA Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Estética IBIZA Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'IBIZA Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957088818',
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
			dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday'],
			opens: '10:00',
			closes: '18:30',
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
