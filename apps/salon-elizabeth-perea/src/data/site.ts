/**
 * Datos del Salón de belleza Elizabeth Perea — C. Asturias 6
 * (Sur, 14009 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón de belleza Elizabeth Perea,
 *   37.8717941,-4.7772476, feature 0xd6d21e9122e15ab:0x257a8bf710088630
 * - Mispelus (verificado 27-ago-2026): C. Asturias, 6, Sur, 14009 Córdoba;
 *   tel +34957298226; peluquería (mechas, color, cortes, recogidos);
 *   mar–vie 9:30–13:30 y 16:00–19:00, sáb 9:30–14:00,
 *   dom y lun cerrado; se recomienda pedir cita.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Sin aggregateRating: muestra pequeña (13 reseñas).
 */

import fotoPortada from '../assets/fotos/salon-elizabeth-perea-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/salon-elizabeth-perea-vertical-02.jpg';
import fotoFacial from '../assets/fotos/salon-elizabeth-perea-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/salon-elizabeth-perea-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/salon-elizabeth-perea-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/salon-elizabeth-perea-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/salon-elizabeth-perea-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/salon-elizabeth-perea-vertical-08.jpg';
import logo from '../assets/fotos/salon-elizabeth-perea-logo.svg';

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
	'https://www.google.com/maps/place/Sal%C3%B3n+de+belleza+Elizabeth+Perea/@37.8717941,-4.7772476,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d21e9122e15ab:0x257a8bf710088630!8m2!3d37.8717941!4d-4.7772476!16s%2Fg%2F11tmn3cqwp?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón de belleza Elizabeth Perea',
	shortName: 'Elizabeth Perea',
	tagline: 'Peluquería en el Sur, Córdoba',
	claim: 'Tu peluquería de confianza en el Sur',
	summary:
		'Salón de belleza Elizabeth Perea es una peluquería en C. Asturias 6 (Sur, 14009 Córdoba): mechas, color, cortes y recogidos. Llama al 957 29 82 26 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Asturias 6',
	district: 'Sur',
	borough: 'Distrito Sur',
	city: 'Córdoba',
	postalCode: '14009',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 29 82 26',
	phoneHref: 'tel:+34957298226',
	whatsapp: 'https://wa.me/34957298226?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Elizabeth%20Perea.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8717941%2C-4.7772476&z=17&output=embed',
	geo: { lat: 37.8717941, lng: -4.7772476 },
	featureId: '0xd6d21e9122e15ab:0x257a8bf710088630',
	priceRange: '€€',
	categories: ['Peluquería', 'Mechas', 'Color', 'Recogidos'],
	hours: [
		{ days: 'Martes a viernes', hours: '9:30–13:30 y 16:00–19:00' },
		{ days: 'Sábado', hours: '9:30–14:00' },
		{ days: 'Domingo y lunes', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario verificado en agosto de 2026 (Mispelus). Confirma en la ficha de Google o llamando al 957 29 82 26, porque puede variar en festivos.',
	siteUrl: 'https://salon-elizabeth-perea.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Salón de belleza Elizabeth Perea',
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
		title: 'Mechas y color',
		text: 'Mechas, color, cortes y recogidos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Asturias 6',
		text: 'C. Asturias 6 · 14009 Córdoba, Sur.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 29 82 26',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita',
		text: 'Se recomienda pedir cita antes de ir.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Corte',
		text: 'Cortes con estilo. Confirma en el 957 29 82 26.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Mechas y color',
		text: 'Mechas y combinación de color. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Recogidos',
		text: 'Recogidos y peinados para eventos.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 29 82 26 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En el Sur (14009). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte', precio: 'A consultar' },
			{ nombre: 'Mechas y color', precio: 'A consultar' },
			{ nombre: 'Recogidos y peinados', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Sur',
		text: 'Asturias 6: Sur, Córdoba.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Confianza',
		text: 'Peluquería de barrio con clientela fija de años.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 29 82 26 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Mar–vie partido',
		text: '9:30–13:30 y 16:00–19:00; sábados 9:30–14:00; dom y lun cerrado.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Confirma formas de pago al reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salón de belleza Elizabeth Perea?',
		a: 'En C. Asturias 6 (Sur, 14009 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 29 82 26 o por WhatsApp. Se recomienda pedir cita antes de ir.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería: mechas, color, cortes y recogidos, con servicios de belleza. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Martes a viernes 9:30–13:30 y 16:00–19:00, sábado 9:30–14:00; domingo y lunes cerrado.',
	},
	{
		q: '¿Abren los lunes?',
		a: 'No: domingo y lunes cerrado. De martes a sábado, con cita.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-palette-line', label: 'Mechas y color' },
	{ icon: 'ri-map-pin-line', label: 'Sur, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 29 82 26' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón de belleza Elizabeth Perea en el Sur (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Elizabeth Perea en Asturias 6 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Elizabeth Perea Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Elizabeth Perea Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Elizabeth Perea en el Sur — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Salón Elizabeth Perea (14009 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Elizabeth Perea, Sur Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Elizabeth Perea Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Elizabeth Perea Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957298226',
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
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '19:00',
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
