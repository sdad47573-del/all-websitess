/**
 * Datos de Estetica Natalia - Córdoba — C. Úbeda, 12
 * (Sur, 14013 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Estetica Natalia - Córdoba,
 *   37.8664677,-4.7773698, feature 0xd6d208e67f17e7f:0xfdb04f82621f20bf
 * - Fresha: C. Úbeda, 12, Sur, 14013 Córdoba; horario lun–vie 9:00-14:00,
 *   sáb 10:00-13:30, dom cerrado; servicio: maquillaje.
 * - Instagram @esteticanataliaruiz: Calle Úbeda 12 Córdoba,
 *   teléfono 688248099, cosmética coreana, refuerzo de uñas.
 * - Facebook: Estetica Natalia Ruiz.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 */

import fotoPortada from '../assets/fotos/estetica-natalia-cuadrada-04.jpg';
import fotoEstudio from '../assets/fotos/estetica-natalia-vertical-03.jpg';
import fotoFacial from '../assets/fotos/estetica-natalia-cuadrada-02.jpg';
import fotoCorporal from '../assets/fotos/estetica-natalia-cuadrada-06.jpg';
import fotoGaleria1 from '../assets/fotos/estetica-natalia-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/estetica-natalia-vertical-07.jpg';
import fotoGaleria3 from '../assets/fotos/estetica-natalia-cuadrada-08.jpg';
import fotoGaleria4 from '../assets/fotos/estetica-natalia-vista-1-01.jpg';
import logo from '../assets/fotos/estetica-natalia-logo.svg';

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
	'https://www.google.com/maps/place/Estetica+Natalia+-+C%C3%B3rdoba/@37.8664677,-4.7773698,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d208e67f17e7f:0xfdb04f82621f20bf!8m2!3d37.8664677!4d-4.7773698!16s%2Fg%2F11gg9k2p1t?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Estetica Natalia - Córdoba',
	shortName: 'Estetica Natalia',
	tagline: 'Estética, uñas y maquillaje en Sur, Córdoba',
	claim: 'Cosmética coreana en Calle Úbeda',
	summary:
		'Estetica Natalia - Córdoba es un centro de estética en C. Úbeda, 12 (Sur, 14013 Córdoba): uñas, maquillaje y cosmética coreana. Llama al 688 24 80 99 o consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'C. Úbeda, 12',
	district: 'Sur',
	borough: 'Distrito Sur',
	city: 'Córdoba',
	postalCode: '14013',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '688 24 80 99',
	phoneHref: 'tel:+34688248099',
	whatsapp: 'https://wa.me/34688248099?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Estetica%20Natalia.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	instagram: 'https://www.instagram.com/esteticanataliaruiz/',
	facebook: 'https://www.facebook.com/p/Estetica-Natalia-Ruiz-100007556595541/',
	fresha: 'https://www.fresha.com/lvp/estetica-natalia-calle-ubeda-cordoba-wXElKA',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8664677%2C-4.7773698&z=17&output=embed',
	geo: { lat: 37.8664677, lng: -4.7773698 },
	featureId: '0xd6d208e67f17e7f:0xfdb04f82621f20bf',
	priceRange: '€€',
	categories: ['Centro de estética', 'Uñas', 'Maquillaje', 'Cosmética coreana'],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:00–14:00' },
		{ days: 'Sábado', hours: '10:00–13:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (Fresha). Confirma en la ficha de Google o llamando al 688 24 80 99, porque puede variar en festivos.',
	siteUrl: 'https://estetica-natalia.vercel.app',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética en Sur',
		text: 'Centro de estética en C. Úbeda, 12, Córdoba.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas y maquillaje',
		text: 'Refuerzo de uñas, maquillaje y cosmética coreana.',
	},
	{
		icon: 'ri-phone-line',
		title: '688 24 80 99',
		text: 'Cita por teléfono o WhatsApp. Domingos cerrado.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Mañanas',
		text: 'Lun–vie 9:00–14:00 y sáb 10:00–13:30.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas',
		text: 'Refuerzo y cuidado de uñas. Confirma técnica y precio en el 688 24 80 99.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Maquillaje',
		text: 'Servicio de maquillaje para eventos. Consulta disponibilidad.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Cosmética coreana',
		text: 'Rutinas y cuidado facial con cosmética coreana. Pregunta por el protocolo.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado facial personalizado. Confirma diagnóstico antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 688 24 80 99 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Distrito Sur (14013). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Uñas y maquillaje',
		items: [
			{ nombre: 'Refuerzo de uñas', precio: 'A consultar' },
			{ nombre: 'Maquillaje', precio: 'A consultar' },
			{ nombre: 'Manicura', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Facial',
		items: [
			{ nombre: 'Cosmética coreana', precio: 'A consultar' },
			{ nombre: 'Cuidado facial', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Distrito Sur',
		text: 'C. Úbeda, 12: zona Sur de Córdoba, bien comunicada.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas cuidadas',
		text: 'Refuerzo de uñas y manicura con acabado elegante.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 688 24 80 99 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Horario de mañanas',
		text: 'Lun–vie 9:00–14:00, sáb 10:00–13:30. Domingo cerrado.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'Trabajos en Instagram',
		text: 'Mira @esteticanataliaruiz para ver resultados recientes antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Estetica Natalia?',
		a: 'En C. Úbeda, 12 (Sur, 14013 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 688 24 80 99 o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética con foco en uñas (refuerzo), maquillaje y cosmética coreana. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 9:00–14:00, sábado 10:00–13:30 y domingo cerrado, según ficha agregada. Confirma festivos por teléfono.',
	},
	{
		q: '¿Dónde veo sus trabajos?',
		a: 'En Instagram @esteticanataliaruiz y Facebook (Estetica Natalia Ruiz), además de la ficha de Google.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-hand-heart-line', label: 'Uñas y maquillaje' },
	{ icon: 'ri-map-pin-line', label: 'Sur, Córdoba' },
	{ icon: 'ri-phone-line', label: '688 24 80 99' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Estetica Natalia en Sur (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Centro Estetica Natalia en C. Úbeda, 12 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Natalia Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Estética Natalia Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Natalia en C. Úbeda — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Estetica Natalia (14013 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Natalia, Sur Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Natalia Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Estetica Natalia Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34688248099',
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
	sameAs: [BUSINESS.instagram, BUSINESS.facebook, BUSINESS.fresha],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '13:30',
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
