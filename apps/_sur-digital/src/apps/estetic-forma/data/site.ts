/**
 * Datos de Estètic Forma — Avinguda República Argentina, 279
 * (Sarrià-Sant Gervasi, 08023 Barcelona).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Estètic forma,
 *   41.413709,2.1381461, feature 0x12a49805ade71465:0x1d40078cc3204fff
 * - Cylex (actualizado 03-jul-2026): AVINGUDA REPÚBLICA ARGENTINA, 279,
 *   08023 Barcelona; tel 932 11 97 28 y 615 28 22 55;
 *   L-V 10:00–20:00, Sáb y Dom cerrado; Shellac CND, INDIBA, UVA,
 *   depilación cera y láser, masajes, presoterapia, vacuoterapia,
 *   higienes faciales.
 * - Fresha: Estètic forma, Av. de la República Argentina, 279,
 *   Sarrià-Sant Gervasi, 08023.
 */

import fotoPortada from '../assets/fotos/estetic-forma-vista-1-01.jpg';
import fotoCentro from '../assets/fotos/estetic-forma-vertical-02.jpg';
import fotoFacial from '../assets/fotos/estetic-forma-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/estetic-forma-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/estetic-forma-apaisada-05.jpg';
import fotoExtra2 from '../assets/fotos/estetic-forma-vertical-06.jpg';
import fotoExtra3 from '../assets/fotos/estetic-forma-vertical-07.jpg';
import fotoExtra4 from '../assets/fotos/estetic-forma-vertical-08.jpg';
import logo from '../assets/fotos/estetic-forma-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Est%C3%A8tic+forma/@41.413709,2.1381461,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49805ade71465:0x1d40078cc3204fff!8m2!3d41.413709!4d2.1381461!16s%2Fg%2F1tmg8kys?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Estètic Forma',
	shortName: 'Forma',
	tagline: 'Estética avanzada en Sant Gervasi, Barcelona',
	claim: 'Tu estética en República Argentina 279',
	summary:
		'Estètic Forma es un centro de estética en Avinguda República Argentina 279 (Sarrià-Sant Gervasi, 08023 Barcelona): Shellac CND, INDIBA, depilación cera y láser, masajes, presoterapia e higienes faciales. Llama al 932 11 97 28 o al 615 28 22 55 para cita.',
	street: 'Avinguda República Argentina, 279',
	district: 'Sant Gervasi',
	borough: 'Sarrià-Sant Gervasi',
	city: 'Barcelona',
	postalCode: '08023',
	region: 'Cataluña',
	country: 'ES',
	phoneDisplay: '932 11 97 28',
	phoneHref: 'tel:+34932119728',
	phoneMobile: '615 28 22 55',
	phoneMobileHref: 'tel:+34615282255',
	whatsapp:
		'https://wa.me/34615282255?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Est%C3%A8tic%20Forma.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.413709%2C2.1381461&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.413709, lng: 2.1381461 },
	featureId: '0x12a49805ade71465:0x1d40078cc3204fff',
	priceRange: '€€',
	categories: [
		'Centro de estética',
		'Manicura y pedicura',
		'Depilación láser',
		'Masaje',
		'Estética facial',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–20:00' },
		{ days: 'Sábado y domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario actualizado en julio de 2026 (Cylex). Confirma en la ficha de Google o llamando al 932 11 97 28, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/estetic-forma',
};

export const LEGAL = {
	razonSocial: 'Estètic Forma',
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
	{ label: 'Servicios', href: '/estetic-forma/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/estetic-forma/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética avanzada',
		text: 'Centro especializado con aparatología INDIBA y primeras marcas.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Rep. Argentina 279',
		text: 'Av. República Argentina 279 · 08023 Barcelona.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Shellac CND',
		text: 'Manicuras y pedicuras Shellac CND original.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Pide cita en el 932 11 97 28 o el 615 28 22 55.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-hand-heart-line',
		title: 'Uñas Shellac',
		text: 'Manicuras y pedicuras Shellac CND original, rechaza imitaciones.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Higienes faciales con marcas como Payot, Thalmer y Olos.',
	},
	{
		icon: 'ri-flashlight-line',
		title: 'Depilación láser',
		text: 'Depilación láser y depilación con cera tibia y caliente.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos INDIBA, presoterapia y vacuoterapia.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Rayos UVA',
		text: 'Cabina de rayos UVA en el propio centro.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: 932 11 97 28 o 615 28 22 55.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Manos, pies y mirada',
		items: [
			{ nombre: 'Manicura Shellac CND', precio: 'A consultar' },
			{ nombre: 'Pedicura Shellac CND', precio: 'A consultar' },
			{ nombre: 'Higiene facial', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y aparatología',
		items: [
			{ nombre: 'Tratamiento INDIBA', precio: 'A consultar' },
			{ nombre: 'Depilación láser', precio: 'A consultar' },
			{ nombre: 'Presoterapia', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Sant Gervasi',
		text: 'República Argentina 279, 08023 Barcelona.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Primeras marcas',
		text: 'Lamdors, Dibi, Shellac CND, Payot, Thalmer y Olos.',
	},
	{
		icon: 'ri-medal-line',
		title: 'Resultados',
		text: 'Resultados desde las primeras sesiones, calidad-precio.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Dos teléfonos',
		text: 'Fijo 932 11 97 28 y móvil 615 28 22 55.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario continuo',
		text: 'L-V 10:00–20:00, jornada continua entre semana.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Estètic Forma?',
		a: 'En Avinguda República Argentina 279 (Sant Gervasi, Sarrià-Sant Gervasi, 08023 Barcelona). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 932 11 97 28 o al 615 28 22 55, o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Manicura y pedicura Shellac CND, higienes faciales, depilación con cera y láser, INDIBA, presoterapia, vacuoterapia, masajes y cabina UVA. Confirma tu tratamiento y precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa online, y esta web no inventa importes. El precio se confirma con el centro.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 20:00; sábados y domingos cerrado. Confirma festivos en la ficha de Google.',
	},
	{
		q: '¿Qué es Shellac CND original?',
		a: 'Es el sistema original de manicura semipermanente CND que usa el centro — ellos mismos avisan: rechaza imitaciones. Pregunta por disponibilidad al reservar.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-hand-heart-line', label: 'Shellac CND' },
	{ icon: 'ri-flashlight-line', label: 'Depilación láser' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Estètic Forma en Sant Gervasi, Barcelona',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Estètic Forma en República Argentina 279, Barcelona',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Cuidado facial en Estètic Forma (Barcelona)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Estética corporal en Estètic Forma',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Estètic Forma',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Tratamientos de estética en Estètic Forma Sant Gervasi',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Bienestar en Av. República Argentina 279',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Manicura y estética en Estètic Forma Barcelona',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Estetic Forma Sant Gervasi Barcelona',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	telephone: '+34932119728',
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
			closes: '20:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Estètic Forma',
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
