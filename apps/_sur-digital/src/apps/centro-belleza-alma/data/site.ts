/**
 * Datos de Centro de Belleza Alma — C. Pintor Arbasia 12
 * (Nte. Sierra, 14006 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centro de Belleza Alma,
 *   37.8983708,-4.7738382, feature 0xd6cdf234d2c947d:0xafe6a5a06659be61
 * - WaiCita: C. Pintor Arbasia, 12, Nte. Sierra, 14006 Córdoba,
 *   +34663797014; faciales personalizados, manicura/pedicura,
 *   depilación profesional; horario lun cerrado,
 *   mar 9:30-13:30 y 16:30-20:00, mié–vie 9:30-19:00,
 *   sáb 9:00-14:00, dom cerrado.
 * - Instagram @almacentrodebelleza (Guadalupe Serena), 663 797 014.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 *   Sin recuento de reseñas verificable, no se publica aggregateRating.
 */

import fotoPortada from '../assets/fotos/centro-belleza-alma-apaisada-03.jpg';
import fotoEstudio from '../assets/fotos/centro-belleza-alma-vertical-01.jpg';
import fotoFacial from '../assets/fotos/centro-belleza-alma-vertical-02.jpg';
import fotoCorporal from '../assets/fotos/centro-belleza-alma-cuadrada-05.jpg';
import fotoGaleria1 from '../assets/fotos/centro-belleza-alma-vertical-04.jpg';
import fotoGaleria2 from '../assets/fotos/centro-belleza-alma-cuadrada-06.jpg';
import fotoGaleria3 from '../assets/fotos/centro-belleza-alma-cuadrada-07.jpg';
import fotoGaleria4 from '../assets/fotos/centro-belleza-alma-vertical-09.jpg';
import logo from '../assets/fotos/centro-belleza-alma-logo.svg';

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
	'https://www.google.com/maps/place/Centro+de+Belleza+Alma/@37.8983708,-4.7738382,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf234d2c947d:0xafe6a5a06659be61!8m2!3d37.8983708!4d-4.7738382!16s%2Fg%2F11plvxzkj4?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Centro de Belleza Alma',
	shortName: 'Alma',
	tagline: 'Facial, uñas y depilación en Sierra, Córdoba',
	claim: 'Estética personalizada en Pintor Arbasia',
	summary:
		'Centro de Belleza Alma es un centro de estética en C. Pintor Arbasia 12 (Nte. Sierra, 14006 Córdoba): faciales personalizados, manicura y pedicura, depilación profesional. Llama al 663 79 70 14 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Pintor Arbasia 12',
	district: 'Nte. Sierra',
	borough: 'Distrito Sierra',
	city: 'Córdoba',
	postalCode: '14006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '663 79 70 14',
	phoneHref: 'tel:+34663797014',
	whatsapp: 'https://wa.me/34663797014?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Alma.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	instagram: 'https://www.instagram.com/almacentrodebelleza/',
	waicita: 'https://waicita.com/d/perfil/centro-de-belleza-alma',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8983708%2C-4.7738382&z=17&output=embed',
	geo: { lat: 37.8983708, lng: -4.7738382 },
	featureId: '0xd6cdf234d2c947d:0xafe6a5a06659be61',
	priceRange: '€€',
	categories: ['Centro de estética', 'Tratamientos faciales', 'Manicura y pedicura', 'Depilación'],
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: '9:30–13:30 y 16:30–20:00' },
		{ days: 'Miércoles a viernes', hours: '9:30–19:00' },
		{ days: 'Sábado', hours: '9:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (WaiCita). Confirma en la ficha de Google o llamando al 663 79 70 14, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/centro-belleza-alma',
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
	{ label: 'Servicios', href: '/centro-belleza-alma/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/centro-belleza-alma/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial personalizado',
		text: 'Tratamientos faciales adaptados a cada piel.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Pintor Arbasia 12',
		text: 'C. Pintor Arbasia 12 · 14006 Córdoba. En la Sierra.',
	},
	{
		icon: 'ri-phone-line',
		title: '663 79 70 14',
		text: 'Cita por teléfono o WhatsApp. Lun y dom cerrado.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas y depilación',
		text: 'Manicura, pedicura y depilación profesional.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Tratamientos faciales personalizados. Confirma protocolo en el 663 79 70 14.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura y pedicura',
		text: 'Manicura y pedicura de alta calidad. Reserva con antelación.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación profesional. Pregunta por zonas y técnica.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Bienestar',
		text: 'Ambiente tranquilo y acogedor en la zona de la Sierra.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 663 79 70 14 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Nte. Sierra (14006). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial y depilación',
		items: [
			{ nombre: 'Tratamiento facial personalizado', precio: 'A consultar' },
			{ nombre: 'Depilación profesional', precio: 'A consultar' },
			{ nombre: 'Diagnóstico de piel', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Manos y pies',
		items: [
			{ nombre: 'Manicura', precio: 'A consultar' },
			{ nombre: 'Pedicura', precio: 'A consultar' },
			{ nombre: 'Diseño de uñas', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En la Sierra',
		text: 'Pintor Arbasia 12: zona Norte-Sierra de Córdoba.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Atención al detalle',
		text: 'Estética profesional y personalizada, ambiente relajado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 663 79 70 14 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Sábado abierto',
		text: 'Sábados 9:00–14:00 con horario partido. Lun y dom cerrado.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'En Instagram',
		text: 'Mira @almacentrodebelleza para ver trabajos recientes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Centro de Belleza Alma?',
		a: 'En C. Pintor Arbasia 12 (Nte. Sierra, 14006 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 663 79 70 14 o por WhatsApp. Para manicuras y faciales conviene reservar con unos días de antelación.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Tratamientos faciales personalizados, manicura y pedicura de alta calidad y depilación profesional. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Precios competitivos dentro del rango habitual, según ficha agregada; esta web no inventa importes. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes cerrado, martes 9:30–13:30 y 16:30–20:00, miércoles a viernes 9:30–19:00, sábado 9:00–14:00 y domingo cerrado, según ficha agregada. Confirma festivos por teléfono.',
	},
	{
		q: '¿Dónde veo sus trabajos?',
		a: 'En Instagram @almacentrodebelleza, además de la ficha de Google.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-hand-heart-line', label: 'Facial y uñas' },
	{ icon: 'ri-map-pin-line', label: 'Sierra, Córdoba' },
	{ icon: 'ri-phone-line', label: '663 79 70 14' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Centro de Belleza Alma en Sierra (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Alma en Pintor Arbasia 12 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamientos faciales en Alma Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Estética Alma Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Alma en Pintor Arbasia — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Centro de Belleza Alma (14006 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Alma, Sierra Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Alma Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Alma Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34663797014',
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
	sameAs: [BUSINESS.instagram, BUSINESS.waicita],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday'],
			opens: '16:30',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Wednesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '19:00',
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
