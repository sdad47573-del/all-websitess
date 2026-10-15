/**
 * Datos de Estética Alicia Toledo — Plaza Marina Española 16, local
 * (Parque Figueroa, 14011 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Estética Alicia Toledo,
 *   37.8912377,-4.8053837, feature 0xd6cdf51e350b693:0xfa54f90c7d0abc20
 * - QDQ: Calle Plaza Marina Española 16, LOCAL (Parque Figueroa),
 *   14011 Córdoba; BellezaOn: Pl. Marina Española 15, 957 946 727.
 * - Groupon: depilación láser diodo 800 W (zonas pequeña/mediana/
 *   grande/cuerpo entero); reserva con cita; horario lun–vie
 *   10:00-20:00, sáb 10:00-14:00.
 * - Facebook: Peluqueria Estetica Alicia Toledo — TU IMAGEN.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia (salvo ofertas puntuales de Groupon),
 *   no se publican importes fijos.
 */

import fotoPortada from '../assets/fotos/estetica-alicia-toledo-apaisada-01.jpg';
import fotoEstudio from '../assets/fotos/estetica-alicia-toledo-vertical-02.jpg';
import fotoFacial from '../assets/fotos/estetica-alicia-toledo-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/estetica-alicia-toledo-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/estetica-alicia-toledo-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/estetica-alicia-toledo-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/estetica-alicia-toledo-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/estetica-alicia-toledo-vertical-08.jpg';
import logo from '../assets/fotos/estetica-alicia-toledo-logo.svg';

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
	'https://www.google.com/maps/place/Est%C3%A9tica+Alicia+Toledo/@37.8912377,-4.8053837,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf51e350b693:0xfa54f90c7d0abc20!8m2!3d37.8912377!4d-4.8053837!16s%2Fg%2F11b6dg2btv?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Estética Alicia Toledo',
	shortName: 'Alicia Toledo',
	tagline: 'Peluquería, láser y estética en Figueroa, Córdoba',
	claim: 'Tu imagen, con las técnicas más novedosas',
	summary:
		'Estética Alicia Toledo es un centro de peluquería y estética en Plaza Marina Española 16, local (Parque Figueroa, 14011 Córdoba): depilación láser diodo, peluquería y estética. Llama al 957 94 67 27 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Plaza Marina Española 16, local',
	district: 'Parque Figueroa',
	borough: 'Distrito Noroeste',
	city: 'Córdoba',
	postalCode: '14011',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 94 67 27',
	phoneHref: 'tel:+34957946727',
	whatsapp: 'https://wa.me/34957946727?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Alicia%20Toledo.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	facebook: 'https://www.facebook.com/peluqueriaestetica.toledo/',
	groupon: 'https://www.groupon.es/deals/estetica-alicia-toledo-1',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8912377%2C-4.8053837&z=17&output=embed',
	geo: { lat: 37.8912377, lng: -4.8053837 },
	featureId: '0xd6cdf51e350b693:0xfa54f90c7d0abc20',
	priceRange: '€€',
	categories: ['Peluquería', 'Depilación láser', 'Estética', 'Belleza'],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–20:00' },
		{ days: 'Sábado', hours: '10:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según oferta agregada (Groupon). Confirma en la ficha de Google o llamando al 957 94 67 27, porque puede variar en festivos.',
	siteUrl: 'https://estetica-alicia-toledo.vercel.app',
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
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y estética',
		text: 'TU IMAGEN con las técnicas más novedosas.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Marina Española 16',
		text: 'Plaza Marina Española 16 · 14011 Córdoba, Parque Figueroa.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 94 67 27',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Láser diodo 800 W',
		text: 'Depilación láser por zonas y cuerpo entero.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería y asesoría de imagen. Confirma en el 957 94 67 27.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Láser diodo',
		text: 'Depilación láser diodo 800 W: zonas pequeña, mediana, grande y cuerpo entero.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética',
		text: 'Servicios de estética complementarios. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Cuidado integral de tu imagen. Confirma técnica y precio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Con cita: llama al 957 94 67 27 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Parque Figueroa (14011). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Láser',
		items: [
			{ nombre: 'Láser zona pequeña', precio: 'A consultar' },
			{ nombre: 'Láser zona mediana', precio: 'A consultar' },
			{ nombre: 'Láser cuerpo entero', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Peluquería y estética',
		items: [
			{ nombre: 'Peluquería', precio: 'A consultar' },
			{ nombre: 'Asesoría de imagen', precio: 'A consultar' },
			{ nombre: 'Estética', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Figueroa',
		text: 'Marina Española 16: Parque Figueroa, Córdoba.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Láser moderno',
		text: 'Diodo 800 W con plan personalizado según piel y vello.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 94 67 27 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun–vie 10:00–20:00',
		text: 'Sábados 10:00–14:00. Reserva siempre con antelación.',
	},
	{
		icon: 'ri-gift-line',
		title: 'Ideal para regalar',
		text: 'Bonos de sesiones: piel suave sin esfuerzo duradero.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Estética Alicia Toledo?',
		a: 'En Plaza Marina Española 16, local (Parque Figueroa, 14011 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 94 67 27 o por WhatsApp, con tu código si vienes con oferta. Se necesita reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y estética con depilación láser diodo 800 W por zonas y cuerpo entero. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta el láser?',
		a: 'Hay ofertas puntuales por zonas en Groupon; esta web no fija importes. El precio se confirma con el centro según zona.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 10:00–20:00 y sábado 10:00–14:00, según oferta agregada. Llega 10-15 minutos antes de tu cita.',
	},
	{
		q: '¿Necesito preparar la sesión de láser?',
		a: 'Afeita la zona 24 h antes, evita sol intenso y no uses cera ni pinzas 4 semanas antes. Después, evita sol y calor 48 h.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-flashlight-line', label: 'Láser diodo' },
	{ icon: 'ri-map-pin-line', label: 'Figueroa, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 94 67 27' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Estética Alicia Toledo en Figueroa (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Alicia Toledo en Marina Española 16 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Alicia Toledo Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Alicia Toledo Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Alicia Toledo en Marina Española — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Estética Alicia Toledo (14011 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Alicia Toledo, Figueroa Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Alicia Toledo Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Alicia Toledo Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957946727',
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
	sameAs: [BUSINESS.facebook, BUSINESS.groupon],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
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
