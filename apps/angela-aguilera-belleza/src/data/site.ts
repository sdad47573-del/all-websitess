/**
 * Datos de Ángela Aguilera Belleza — Calle José María Martorell 1
 * (Poniente Sur, 14005 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Ángela Aguilera Belleza,
 *   37.8781135,-4.7973138, feature 0xd6d212447796f59:0xa3a908549458e20b
 * - Instagram @angelaaguilera.belleza: estética especializada en uñas,
 *   lifting, cejas, faciales y masajes; Calle José María Martorell 1
 *   (al lado de BBVA), Poniente Sur (Córdoba); tel 636 51 02 13.
 * - TikTok @angelaaguilera.belleza: manicura, higiene facial +
 *   punta de diamante.
 *
 * Lo que la web NO inventa:
 * - Sin horario ni precios publicados, no se publican.
 */

import fotoPortada from '../assets/fotos/angela-aguilera-belleza-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/angela-aguilera-belleza-vertical-02.jpg';
import fotoFacial from '../assets/fotos/angela-aguilera-belleza-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/angela-aguilera-belleza-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/angela-aguilera-belleza-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/angela-aguilera-belleza-apaisada-06.jpg';
import fotoGaleria3 from '../assets/fotos/angela-aguilera-belleza-vertical-07.jpg';
import fotoGaleria4 from '../assets/fotos/angela-aguilera-belleza-vertical-08.jpg';
import logo from '../assets/fotos/angela-aguilera-logo.svg';

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
	'https://www.google.com/maps/place/%C3%81ngela+Aguilera+Belleza/@37.8781135,-4.7973138,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d212447796f59:0xa3a908549458e20b!8m2!3d37.8781135!4d-4.7973138!16s%2Fg%2F11xz17b6n7?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Ángela Aguilera Belleza',
	shortName: 'Ángela Aguilera',
	tagline: 'Uñas, lifting y facial en Poniente Sur, Córdoba',
	claim: 'Belleza cuidada al detalle',
	summary:
		'Ángela Aguilera Belleza es un centro de estética en Calle José María Martorell 1 (Poniente Sur, 14005 Córdoba): uñas, lifting, cejas, faciales y masajes. Llama al 636 51 02 13 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'Calle José María Martorell 1',
	district: 'Poniente Sur',
	borough: 'Distrito Poniente Sur',
	city: 'Córdoba',
	postalCode: '14005',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '636 51 02 13',
	phoneHref: 'tel:+34636510213',
	whatsapp: 'https://wa.me/34636510213?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20%C3%81ngela%20Aguilera.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	instagram: 'https://www.instagram.com/angelaaguilera.belleza/',
	tiktok: 'https://www.tiktok.com/@angelaaguilera.belleza',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8781135%2C-4.7973138&z=17&output=embed',
	geo: { lat: 37.8781135, lng: -4.7973138 },
	featureId: '0xd6d212447796f59:0xa3a908549458e20b',
	priceRange: '€€',
	categories: ['Centro de estética', 'Uñas', 'Lifting y cejas', 'Facial'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: llama al 636 51 02 13 o abre la ficha para ver apertura actual y festivos.',
	siteUrl: 'https://angela-aguilera-belleza.vercel.app',
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
		icon: 'ri-hand-heart-line',
		title: 'Uñas cuidadas',
		text: 'Diseños con sutileza y estilo para realzar tus manos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Martorell 1',
		text: 'Calle José María Martorell 1 · 14005 Córdoba, junto a BBVA.',
	},
	{
		icon: 'ri-phone-line',
		title: '636 51 02 13',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial y lifting',
		text: 'Higiene facial + punta de diamante, lifting y cejas.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas',
		text: 'Manicura con diseño paso a paso. Confirma técnica y precio en el 636 51 02 13.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Lifting y cejas',
		text: 'Lifting y diseño de cejas. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Higiene facial + punta de diamante para una piel limpia y luminosa.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Masajes',
		text: 'Masajes y bienestar. Consulta disponibilidad.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 636 51 02 13 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Poniente Sur (14005). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Uñas y mirada',
		items: [
			{ nombre: 'Manicura con diseño', precio: 'A consultar' },
			{ nombre: 'Lifting', precio: 'A consultar' },
			{ nombre: 'Cejas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Facial y bienestar',
		items: [
			{ nombre: 'Higiene facial + punta de diamante', precio: 'A consultar' },
			{ nombre: 'Masaje', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Poniente Sur',
		text: 'Martorell 1, junto a BBVA: zona Poniente Sur de Córdoba.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Detalle en uñas',
		text: 'Cada detalle cuidado para un acabado elegante.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 636 51 02 13 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial diamante',
		text: 'Combo higiene + punta de diamante para piel limpia y luminosa.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'En redes',
		text: 'Mira @angelaaguilera.belleza en Instagram y TikTok antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Ángela Aguilera Belleza?',
		a: 'En Calle José María Martorell 1, junto a BBVA (Poniente Sur, 14005 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 636 51 02 13 o por WhatsApp. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Estética especializada en uñas, lifting, cejas, faciales y masajes. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha o llama al 636 51 02 13, porque puede variar en festivos.',
	},
	{
		q: '¿Dónde veo sus trabajos?',
		a: 'En Instagram y TikTok (@angelaaguilera.belleza), con procesos de manicura y facial.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-hand-heart-line', label: 'Uñas y mirada' },
	{ icon: 'ri-map-pin-line', label: 'Poniente Sur, Córdoba' },
	{ icon: 'ri-phone-line', label: '636 51 02 13' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Ángela Aguilera Belleza en Poniente Sur (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Ángela Aguilera en Martorell 1 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamientos de estética en Ángela Aguilera Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Belleza en Ángela Aguilera Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Ángela Aguilera en Martorell — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Ángela Aguilera (14005 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Ángela Aguilera, Poniente Sur — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Ángela Aguilera Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Ángela Aguilera Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34636510213',
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
	sameAs: [BUSINESS.instagram, BUSINESS.tiktok],
	openingHoursSpecification: [],
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
