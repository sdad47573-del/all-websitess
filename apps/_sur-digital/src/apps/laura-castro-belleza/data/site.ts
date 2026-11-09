/**
 * Datos de Laura Castro-Estudio de Belleza — Av. Arroyo del Moro 16
 * (Noroeste, 14011 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Laura Castro-Estudio de Belleza,
 *   37.8896107,-4.7971136, feature 0xd6cdfa932cefd69:0xa393a4925755c87f
 * - Lindavia: salón de manicura y pedicura, 4,8 en Google;
 *   Av. Arroyo del Moro, 16, 14011 Córdoba; tel 620 44 67 13;
 *   horario lunes 10:00–13:30 y 16:30–20:30.
 * - Belliata: Av. Arroyo del Moro, 16, Córdoba 14011; tel +34620446713;
 *   abierto lun–vie 10:00–13:30 y sáb 10:30–14:00, dom cerrado;
 *   pago en efectivo y tarjeta.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Las tardes (16:30–20:30) solo están confirmadas para el lunes:
 *   se presentan como orientativas y se pide confirmar por teléfono.
 */

import fotoPortada from '../assets/fotos/laura-castro-belleza-vista-1-01.jpg';
import fotoEstudio from '../assets/fotos/laura-castro-belleza-cuadrada-02.jpg';
import fotoFacial from '../assets/fotos/laura-castro-belleza-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/laura-castro-belleza-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/laura-castro-belleza-apaisada-05.jpg';
import fotoGaleria2 from '../assets/fotos/laura-castro-belleza-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/laura-castro-belleza-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/laura-castro-belleza-vertical-08.jpg';
import logo from '../assets/fotos/laura-castro-belleza-logo.svg';

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
	'https://www.google.com/maps/place/Laura+Castro-Estudio+de+Belleza/@37.8896107,-4.7971136,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdfa932cefd69:0xa393a4925755c87f!8m2!3d37.8896107!4d-4.7971136!16s%2Fg%2F11px8x8xnf?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Laura Castro-Estudio de Belleza',
	shortName: 'Laura Castro',
	tagline: 'Manicura, pedicura y belleza en Arroyo del Moro, Córdoba',
	claim: 'Tu estudio de belleza en Arroyo del Moro',
	summary:
		'Laura Castro-Estudio de Belleza es un salón de manicura, pedicura y belleza en Av. Arroyo del Moro 16 (Noroeste, 14011 Córdoba). Llama al 620 44 67 13 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Av. Arroyo del Moro 16',
	district: 'Arroyo del Moro',
	borough: 'Distrito Noroeste',
	city: 'Córdoba',
	postalCode: '14011',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '620 44 67 13',
	phoneHref: 'tel:+34620446713',
	whatsapp: 'https://wa.me/34620446713?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Laura%20Castro.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8896107%2C-4.7971136&z=17&output=embed',
	geo: { lat: 37.8896107, lng: -4.7971136 },
	featureId: '0xd6cdfa932cefd69:0xa393a4925755c87f',
	priceRange: '€€',
	categories: ['Manicura', 'Pedicura', 'Estética', 'Belleza'],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–13:30' },
		{ days: 'Tardes (a confirmar)', hours: '16:30–20:30' },
		{ days: 'Sábado', hours: '10:30–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Mañanas y sábado según fichas agregadas (Belliata/Lindavia); las tardes solo están confirmadas para el lunes. Confirma en la ficha de Google o llamando al 620 44 67 13, porque puede variar.',
	siteUrl: 'https://www.sur-digital.com/laura-castro-belleza',
};

export const LEGAL = {
	razonSocial: 'Laura Castro-Estudio de Belleza',
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
	{ label: 'Servicios', href: '/laura-castro-belleza/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/laura-castro-belleza/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura y pedicura',
		text: 'Salón de manicura y pedicura con servicios de belleza.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Arroyo del Moro 16',
		text: 'Av. Arroyo del Moro 16 · 14011 Córdoba, Noroeste.',
	},
	{
		icon: 'ri-phone-line',
		title: '620 44 67 13',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Efectivo y tarjeta',
		text: 'Pago en efectivo o con tarjeta de crédito.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura',
		text: 'Manicura y cuidado de uñas. Confirma en el 620 44 67 13.',
	},
	{
		icon: 'ri-footprint-line',
		title: 'Pedicura',
		text: 'Pedicura y cuidado de pies. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma técnica y precio.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. Confirma el servicio al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 620 44 67 13 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Arroyo del Moro (14011). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Uñas',
		items: [
			{ nombre: 'Manicura', precio: 'A consultar' },
			{ nombre: 'Pedicura', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza facial', precio: 'A consultar' },
			{ nombre: 'Belleza corporal', precio: 'A consultar' },
			{ nombre: 'Cejas y pestañas', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Arroyo del Moro',
		text: 'Arroyo del Moro 16: Noroeste, Córdoba.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Especialistas en uñas',
		text: 'Manicura y pedicura como servicio principal.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 620 44 67 13 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Sábados mañana',
		text: 'Lun–vie 10:00–13:30 y sábados 10:30–14:00. Reserva con antelación.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Efectivo o tarjeta de crédito.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Laura Castro-Estudio de Belleza?',
		a: 'En Av. Arroyo del Moro 16 (Noroeste, 14011 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 620 44 67 13 o por WhatsApp. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Salón de manicura y pedicura con servicios de belleza. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 10:00–13:30 y sábado 10:30–14:00, según fichas agregadas; pregunta por las tardes al 620 44 67 13.',
	},
	{
		q: '¿Cómo puedo pagar?',
		a: 'En efectivo o con tarjeta de crédito.',
	},
];

export const FEATURES = [
	{ icon: 'ri-hand-heart-line', label: 'Manicura' },
	{ icon: 'ri-footprint-line', label: 'Pedicura' },
	{ icon: 'ri-map-pin-line', label: 'Arroyo del Moro, Córdoba' },
	{ icon: 'ri-phone-line', label: '620 44 67 13' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Laura Castro-Estudio de Belleza en Arroyo del Moro (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Laura Castro en Arroyo del Moro 16 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Laura Castro Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Estudio de belleza Laura Castro Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Laura Castro en Arroyo del Moro — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Laura Castro (14011 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Laura Castro, Noroeste Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Laura Castro Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Laura Castro Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34620446713',
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
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:30',
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
