/**
 * Datos del Salon de Belleza AMBAR — Av. Virgen de Fátima 9
 * (Fátima, Levante, 14014 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salon De Belleza Ambar,
 *   37.89835,-4.759369, feature 0xd6cdf9a0298840f:0xb5d2fd301a9849d6
 * - Cylex (actualizado 19-jun-2026): Avenida Virgen de Fátima 9,
 *   14014 Córdoba, Levante; tel 957 07 74 30; salón de belleza y
 *   cuidado de la piel; lun–mar y jue–vie 9:30–13:30 y 17:00–20:00,
 *   mié 9:30–13:30, sáb 10:00–13:30, dom cerrado.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Sin aggregateRating: muestra pequeña (7 opiniones en 2 fuentes).
 */

import fotoPortada from '../assets/fotos/salon-belleza-ambar-malaga.svg';
import fotoEstudio from '../assets/fotos/salon-belleza-ambar-estudio.svg';
import fotoFacial from '../assets/fotos/salon-belleza-ambar-facial.svg';
import fotoCorporal from '../assets/fotos/salon-belleza-ambar-corporal.svg';
import fotoGaleria1 from '../assets/fotos/salon-belleza-ambar-malaga.svg';
import fotoGaleria2 from '../assets/fotos/salon-belleza-ambar-estudio.svg';
import fotoGaleria3 from '../assets/fotos/salon-belleza-ambar-facial.svg';
import fotoGaleria4 from '../assets/fotos/salon-belleza-ambar-corporal.svg';
import logo from '../assets/fotos/salon-belleza-ambar-logo.svg';

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
	'https://www.google.com/maps/place/Salon+De+Belleza+Ambar/@37.89835,-4.759369,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf9a0298840f:0xb5d2fd301a9849d6!8m2!3d37.89835!4d-4.759369!16s%2Fg%2F11j8lzzvsd?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salon de Belleza AMBAR',
	shortName: 'Ámbar',
	tagline: 'Belleza y cuidado de la piel en Fátima, Córdoba',
	claim: 'Tu salón de belleza en Fátima',
	summary:
		'Salon de Belleza AMBAR es un salón de belleza en Av. Virgen de Fátima 9 (Fátima, Levante, 14014 Córdoba): belleza y cuidado de la piel. Llama al 957 07 74 30 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Av. Virgen de Fátima 9',
	district: 'Fátima',
	borough: 'Levante',
	city: 'Córdoba',
	postalCode: '14014',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 07 74 30',
	phoneHref: 'tel:+34957077430',
	whatsapp: 'https://wa.me/34957077430?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20%C3%81mbar.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.89835%2C-4.759369&z=17&output=embed',
	geo: { lat: 37.89835, lng: -4.759369 },
	featureId: '0xd6cdf9a0298840f:0xb5d2fd301a9849d6',
	priceRange: '€€',
	categories: ['Belleza', 'Cuidado de la piel', 'Estética'],
	hours: [
		{ days: 'Lunes, martes, jueves y viernes', hours: '9:30–13:30 y 17:00–20:00' },
		{ days: 'Miércoles', hours: '9:30–13:30' },
		{ days: 'Sábado', hours: '10:00–13:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario actualizado en junio de 2026 (Cylex). Confirma en la ficha de Google o llamando al 957 07 74 30, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/salon-belleza-ambar',
};

export const LEGAL = {
	razonSocial: 'Salon de Belleza AMBAR',
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
		icon: 'ri-sparkling-2-line',
		title: 'Belleza y piel',
		text: 'Belleza y cuidado de la piel.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Virgen de Fátima 9',
		text: 'Av. Virgen de Fátima 9 · 14014 Córdoba, Fátima.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 07 74 30',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Sábados mañana',
		text: 'Sábados 10:00–13:30.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza',
		text: 'Servicios de belleza. Confirma en el 957 07 74 30.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Cuidado de la piel',
		text: 'Cuidado de la piel. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Estética',
		text: 'Estética. Confirma técnica y precio.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Servicios de peluquería. Confirma el servicio al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 07 74 30 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Fátima (14014). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza facial', precio: 'A consultar' },
			{ nombre: 'Belleza corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Estética',
		items: [
			{ nombre: 'Estética', precio: 'A consultar' },
			{ nombre: 'Peluquería', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Fátima',
		text: 'Virgen de Fátima 9: Levante, Córdoba.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Cuidado de la piel',
		text: 'Especial atención al cuidado de la piel.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 07 74 30 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Miércoles solo mañana',
		text: 'Miércoles 9:30–13:30; resto de diario partido; sábados 10:00–13:30.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Confirma formas de pago al reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salon de Belleza AMBAR?',
		a: 'En Av. Virgen de Fátima 9 (Fátima, Levante, 14014 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 07 74 30 o por WhatsApp. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Salón de belleza con cuidado de la piel y estética. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes, martes, jueves y viernes 9:30–13:30 y 17:00–20:00; miércoles 9:30–13:30; sábado 10:00–13:30; domingo cerrado.',
	},
	{
		q: '¿Abren los miércoles por la tarde?',
		a: 'No: los miércoles solo abren por la mañana (9:30–13:30).',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Belleza' },
	{ icon: 'ri-heart-line', label: 'Cuidado de la piel' },
	{ icon: 'ri-map-pin-line', label: 'Fátima, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 07 74 30' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salon de Belleza AMBAR en Fátima (Córdoba)' },
	{ src: IMAGES.fotoInterior, alt: 'Ámbar en Virgen de Fátima 9' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Ámbar Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Salón de belleza Ámbar Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Ámbar Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957077430',
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
			dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Thursday', 'Friday'],
			opens: '17:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday'],
			opens: '09:30',
			closes: '13:30',
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
