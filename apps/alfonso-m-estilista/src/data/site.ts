/**
 * Datos de Alfonso.M Estilista Salud, Bienestar Y Belleza —
 * C. los Olivos 6 (Norte-Sierra, 14006 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Alfonso.M Estilista Salud, Bienestar
 *   Y Belleza, 37.8977293,-4.7777424, feature
 *   0xd6cdf72270c8313:0xe1291c729b8675f8
 * - ENTIA: razón social Alfonso.M Estilista Salud, Bienestar Y Belleza;
 *   C. los Olivos, 6, Nte. Sierra, 14006 Córdoba; centro de estética con
 *   drenaje linfático, mechas y maquillaje profesional.
 * - Facebook (Alfonso.M.estilista): Calle los olivos local 6, 14006;
 *   +34 957 94 67 65; alfonso.m.estilista@gmail.com.
 * - Cylex: C. los Olivos, 6, 14006 Córdoba, Norte-Sierra.
 *
 * Lo que la web NO inventa:
 * - Sin horario publicado en ninguna fuente: se indica "con cita" y se
 *   pide confirmar por teléfono. No hay openingHoursSpecification.
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 */

import fotoPortada from '../assets/fotos/alfonso-m-estilista-malaga.svg';
import fotoEstudio from '../assets/fotos/alfonso-m-estilista-estudio.svg';
import fotoFacial from '../assets/fotos/alfonso-m-estilista-facial.svg';
import fotoCorporal from '../assets/fotos/alfonso-m-estilista-corporal.svg';
import fotoGaleria1 from '../assets/fotos/alfonso-m-estilista-malaga.svg';
import fotoGaleria2 from '../assets/fotos/alfonso-m-estilista-estudio.svg';
import fotoGaleria3 from '../assets/fotos/alfonso-m-estilista-facial.svg';
import fotoGaleria4 from '../assets/fotos/alfonso-m-estilista-corporal.svg';
import logo from '../assets/fotos/alfonso-m-estilista-logo.svg';

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
	'https://www.google.com/maps/place/Alfonso.M+Estilista+Salud,+Bienestar+Y+Belleza/@37.8977293,-4.7777424,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf72270c8313:0xe1291c729b8675f8!8m2!3d37.8977293!4d-4.7777424!16s%2Fg%2F11f2643qrq?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Alfonso.M Estilista',
	shortName: 'Alfonso.M',
	tagline: 'Salud, bienestar y belleza en Norte-Sierra, Córdoba',
	claim: 'Salud, bienestar y belleza en Los Olivos',
	summary:
		'Alfonso.M Estilista Salud, Bienestar Y Belleza es un centro de estética en C. los Olivos 6 (Norte-Sierra, 14006 Córdoba): mechas, maquillaje profesional y drenaje linfático. Llama al 957 94 67 65 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. los Olivos 6',
	district: 'Los Olivos',
	borough: 'Norte-Sierra',
	city: 'Córdoba',
	postalCode: '14006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 94 67 65',
	phoneHref: 'tel:+34957946765',
	whatsapp: 'https://wa.me/34957946765?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Alfonso.M.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	email: 'alfonso.m.estilista@gmail.com',
	facebook: 'https://www.facebook.com/Alfonso.M.estilista/',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8977293%2C-4.7777424&z=17&output=embed',
	geo: { lat: 37.8977293, lng: -4.7777424 },
	featureId: '0xd6cdf72270c8313:0xe1291c729b8675f8',
	priceRange: '€€',
	categories: ['Estética', 'Mechas', 'Maquillaje', 'Bienestar'],
	hours: [
		{ days: 'Horario', hours: 'Con cita — a convenir' },
	],
	hoursNote:
		'El centro no publica horario: confirma día y hora llamando al 957 94 67 65 o por su Facebook, porque puede variar.',
	siteUrl: 'https://alfonso-m-estilista.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Alfonso.M Estilista Salud, Bienestar Y Belleza',
	nif: '[pendiente de completar]',
	email: 'alfonso.m.estilista@gmail.com',
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
		title: 'Mechas y maquillaje',
		text: 'Mechas, maquillaje profesional y estética.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Los Olivos 6',
		text: 'C. los Olivos 6 · 14006 Córdoba, Norte-Sierra.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 94 67 65',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Salud y bienestar',
		text: 'Drenaje linfático, salud y bienestar.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Mechas',
		text: 'Mechas y color. Confirma en el 957 94 67 65.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Maquillaje',
		text: 'Maquillaje profesional para eventos y día a día.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Drenaje linfático',
		text: 'Drenaje linfático y bienestar. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética',
		text: 'Servicios de estética. Confirma técnica y precio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 94 67 65 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Los Olivos (14006). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Estilismo',
		items: [
			{ nombre: 'Mechas', precio: 'A consultar' },
			{ nombre: 'Maquillaje profesional', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Salud y belleza',
		items: [
			{ nombre: 'Drenaje linfático', precio: 'A consultar' },
			{ nombre: 'Estética', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Los Olivos',
		text: 'Los Olivos 6: Norte-Sierra, Córdoba.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Maquillaje pro',
		text: 'Maquillaje profesional con asesoramiento personalizado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 94 67 65 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Bienestar',
		text: 'Salud y bienestar además de imagen: drenaje linfático.',
	},
	{
		icon: 'ri-mail-line',
		title: 'También por email',
		text: 'Escríbeles a alfonso.m.estilista@gmail.com.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Alfonso.M Estilista?',
		a: 'En C. los Olivos 6 (Norte-Sierra, 14006 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 94 67 65, por WhatsApp o en alfonso.m.estilista@gmail.com. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Centro de estética con mechas, maquillaje profesional y drenaje linfático. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El centro no publica horario: funciona con cita. Confirma día y hora por teléfono o Facebook.',
	},
	{
		q: '¿Tienen Facebook?',
		a: 'Sí: Alfonso Estilista (facebook.com/Alfonso.M.estilista), con fotos y contacto directo.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Mechas' },
	{ icon: 'ri-magic-line', label: 'Maquillaje' },
	{ icon: 'ri-map-pin-line', label: 'Los Olivos, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 94 67 65' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Alfonso.M Estilista en Los Olivos (Córdoba)' },
	{ src: IMAGES.fotoInterior, alt: 'Alfonso.M en Los Olivos 6' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Alfonso.M Córdoba' },
	{ src: IMAGES.fotoCalle, alt: 'Alfonso.M Estilista Córdoba' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: 'Alfonso.M Estilista Salud, Bienestar Y Belleza',
	alternateName: 'Alfonso.M Estilista Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957946765',
	email: BUSINESS.email,
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
	sameAs: [BUSINESS.facebook],
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
