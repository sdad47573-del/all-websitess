/**
 * Datos de Mona Lisa — C. Periodista José Luis de Córdoba 10
 * (El Arenal, 14010 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Mona Lisa,
 *   37.8765741,-4.7635852, feature 0xd6cdf7e156ea2f7:0xbf4eb5bbe75a39ce
 * - Fresha: C. Periodista José Luis de Córdoba, 10, Sureste, 14010 Córdoba;
 *   depilación, facial/cuidado de la piel, depilación de cejas con hilo;
 *   lun 10:00-20:00, mar 10:00-13:30, mié–vie 10:00-20:00, sáb 10:00-14:00,
 *   dom cerrado; tel +34 957 07 38 18.
 * - Cylex: Calle PERIODISTA JOSE LUIS DE CORDOBA, 10, 14010 Córdoba;
 *   tel 957 07 38 18.
 * - Facebook: Centro de Estética Mona Lisa (peluquería + estética,
 *   alisados de keratina); Instagram @centroesteticamonalisa.
 * - AUCORSA: la calle pertenece a la zona de El Arenal.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 */

import fotoPortada from '../assets/fotos/mona-lisa-estetica-apaisada-01.jpg';
import fotoEstudio from '../assets/fotos/mona-lisa-estetica-apaisada-02.jpg';
import fotoFacial from '../assets/fotos/mona-lisa-estetica-apaisada-03.jpg';
import fotoCorporal from '../assets/fotos/mona-lisa-estetica-apaisada-04.jpg';
import fotoGaleria1 from '../assets/fotos/mona-lisa-estetica-apaisada-05.jpg';
import fotoGaleria2 from '../assets/fotos/mona-lisa-estetica-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/mona-lisa-estetica-apaisada-07.jpg';
import fotoGaleria4 from '../assets/fotos/mona-lisa-estetica-apaisada-08.jpg';
import logo from '../assets/fotos/mona-lisa-estetica-logo.svg';

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
	'https://www.google.com/maps/place/Mona+Lisa/@37.8765741,-4.7635852,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf7e156ea2f7:0xbf4eb5bbe75a39ce!8m2!3d37.8765741!4d-4.7635852!16s%2Fg%2F11j1cchrdh?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Mona Lisa',
	shortName: 'Mona Lisa',
	tagline: 'Peluquería y estética en El Arenal, Córdoba',
	claim: 'Tu centro de peluquería y estética en El Arenal',
	summary:
		'Mona Lisa es un centro de peluquería y estética en C. Periodista José Luis de Córdoba 10 (El Arenal, 14010 Córdoba): depilación (incluida depilación de cejas con hilo), facial y peluquería. Llama al 957 07 38 18 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Periodista José Luis de Córdoba 10',
	district: 'El Arenal',
	borough: 'Distrito Sureste',
	city: 'Córdoba',
	postalCode: '14010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 07 38 18',
	phoneHref: 'tel:+34957073818',
	whatsapp: 'https://wa.me/34957073818?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Mona%20Lisa.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	facebook: 'https://www.facebook.com/Centroesteticamonalisa/',
	instagram: 'https://www.instagram.com/centroesteticamonalisa/',
	fresha: 'https://www.fresha.com/lvp/mona-lisa-calle-periodista-jose-luis-de-cordoba-cordoba-5zLDvv',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8765741%2C-4.7635852&z=17&output=embed',
	geo: { lat: 37.8765741, lng: -4.7635852 },
	featureId: '0xd6cdf7e156ea2f7:0xbf4eb5bbe75a39ce',
	priceRange: '€€',
	categories: ['Peluquería', 'Depilación', 'Estética', 'Cuidado facial'],
	hours: [
		{ days: 'Lunes, miércoles a viernes', hours: '10:00–20:00' },
		{ days: 'Martes', hours: '10:00–13:30' },
		{ days: 'Sábado', hours: '10:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (Fresha). Confirma en la ficha de Google o llamando al 957 07 38 18, porque puede variar en festivos.',
	siteUrl: 'https://mona-lisa-estetica.vercel.app',
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
		text: 'Peluquería, depilación y cuidado facial en un mismo centro.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Periodista José Luis 10',
		text: 'C. Periodista José Luis de Córdoba 10 · 14010 Córdoba, El Arenal.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 07 38 18',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Cejas con hilo',
		text: 'Depilación de cejas con hilo, facial y peluquería.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería y alisados. Confirma en el 957 07 38 18.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Cejas con hilo',
		text: 'Depilación de cejas con hilo (threading).',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Facial y cuidado de la piel. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Depilación',
		text: 'Servicios de depilación. Confirma técnica y precio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 07 38 18 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En El Arenal (14010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Depilación',
		items: [
			{ nombre: 'Depilación de cejas con hilo', precio: 'A consultar' },
			{ nombre: 'Depilación', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Peluquería y estética',
		items: [
			{ nombre: 'Peluquería', precio: 'A consultar' },
			{ nombre: 'Facial y cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Estética', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En El Arenal',
		text: 'Periodista José Luis de Córdoba 10: El Arenal, Córdoba.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Especialistas en cejas',
		text: 'Depilación de cejas con hilo con plan personalizado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 07 38 18 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun, mié–vie 10:00–20:00',
		text: 'Martes 10:00–13:30 y sábados 10:00–14:00. Reserva con antelación.',
	},
	{
		icon: 'ri-gift-line',
		title: 'Ideal para regalar',
		text: 'Bonos de sesiones: cuidado integral sin esfuerzo duradero.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mona Lisa?',
		a: 'En C. Periodista José Luis de Córdoba 10 (El Arenal, 14010 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 07 38 18 o por WhatsApp. Se recomienda reserva previa.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y estética con depilación (incluidas cejas con hilo) y facial. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes, miércoles a viernes 10:00–20:00; martes 10:00–13:30; sábado 10:00–14:00; domingo cerrado, según ficha agregada.',
	},
	{
		q: '¿Hacen depilación de cejas con hilo?',
		a: 'Sí, es uno de sus servicios destacados. Llama al 957 07 38 18 para confirmar disponibilidad.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-eye-line', label: 'Cejas con hilo' },
	{ icon: 'ri-map-pin-line', label: 'El Arenal, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 07 38 18' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Mona Lisa en El Arenal (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Mona Lisa en Periodista José Luis 10 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de estética en Mona Lisa Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Mona Lisa Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Mona Lisa en El Arenal — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Mona Lisa (14010 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Mona Lisa, El Arenal Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Mona Lisa Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Centro de Estética Mona Lisa Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957073818',
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
	sameAs: [BUSINESS.facebook, BUSINESS.instagram, BUSINESS.fresha],
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday'],
			opens: '10:00',
			closes: '13:30',
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
