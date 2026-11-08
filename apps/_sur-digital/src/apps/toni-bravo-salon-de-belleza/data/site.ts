/**
 * Datos del Salón de belleza Toñi Bravo — C. Alberche, 3
 * (Carretera de Cádiz / Santa Marta, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Google Maps (enlace aportado): Salón de belleza Toñi Bravo, 36.710715,-4.441613
 * - Fresha: confirma dirección C. Alberche, 3 y «Call to book».
 * - Tapeandonos: teléfono 952 328 865, valoración 4,4, especialidades
 *   (cavitación, mesoterapia, presoterapia, uñas) y horario
 *   Lun–Vie 10:00–13:30 + 17:30–20:30, Sáb 10:00–14:00, Dom cerrado.
 * - Facebook / Instagram @tonibgarcia72: uñas acrílicas y gel, estética natural.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoSalon from '../assets/fotos/toni-bravo-salon-alberche-malaga.svg';
import fotoCorporal from '../assets/fotos/toni-bravo-estetica-corporal-malaga.svg';
import fotoUnas from '../assets/fotos/toni-bravo-unas-acrilicas-malaga.svg';
import fotoDepi from '../assets/fotos/toni-bravo-depilacion-masaje-malaga.svg';
import logo from '../assets/fotos/toni-bravo-salon-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior: fotoCorporal,
	fotoCejas: fotoUnas,
	fotoCalle: fotoDepi,
	logo,
};

export const BUSINESS = {
	name: 'Salón de belleza Toñi Bravo',
	shortName: 'Toñi Bravo',
	tagline: 'Estética y uñas en C. Alberche, Málaga',
	claim: 'Estética corporal, facial y uñas de barrio',
	summary:
		'Salón de belleza Toñi Bravo, en la Calle Alberche, 3 (Carretera de Cádiz, 29006 Málaga). Cavitación, mesoterapia, presoterapia, estética natural, masajes, depilación y uñas acrílicas y en gel. Cita por teléfono al 952 328 865.',
	street: 'Calle Alberche, 3',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 328 865',
	phoneHref: 'tel:+34952328865',
	whatsapp: 'https://wa.me/34952328865?text=Hola%2C%20quiero%20pedir%20cita%20en%20To%C3%B1i%20Bravo',
	fresha: 'https://www.fresha.com/lvp/salon-de-belleza-toni-bravo-calle-alberche-malaga-2M1NxE',
	googleMaps:
		'https://www.google.com/maps/place/Sal%C3%B3n+de+belleza+To%C3%B1i+Bravo/@36.710715,-4.441613,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f77779e98461:0x213c94234f2396a7!8m2!3d36.710715!4d-4.441613!16s%2Fg%2F11c5qmlzr0?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Alberche%2C%203%2C%2029006%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.710715, lng: -4.441613 },
	ratingDisplay: '4,4',
	priceRange: '€€',
	categories: [
		'Salón de belleza',
		'Centro de estética',
		'Estética corporal',
		'Uñas acrílicas y gel',
		'Depilación',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00 – 13:30 · 17:30 – 20:30' },
		{ days: 'Sábado', hours: '10:00 – 14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según directorio local; Fresha indica «llamar para reservar». Confirma por teléfono al 952 328 865, puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/toni-bravo-salon-de-belleza',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
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
		title: 'Estética corporal',
		text: 'Cavitación, mesoterapia y presoterapia: tratamientos reductores y de cuidado corporal.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Uñas acrílicas y gel',
		text: 'Manicura, acrílicas y gel con diseños como el efecto nácar.',
	},
	{
		icon: 'ri-time-line',
		title: 'Mañana y tarde',
		text: 'Lun–Vie 10:00–13:30 y 17:30–20:30, sáb 10:00–14:00.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Llama al 952 328 865: confirman servicio, precio y hora.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética corporal',
		text: 'Cavitación, mesoterapia y presoterapia. Diagnóstico y precio por teléfono.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Estética facial y natural',
		text: 'Tratamientos de estética natural y cuidado facial. Consulta disponibilidad.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Uñas acrílicas y gel',
		text: 'Acrílicas, gel y esmaltados con acabado cuidado. Pregunta por diseños.',
	},
	{
		icon: 'ri-scissors-cut-line',
		title: 'Depilación',
		text: 'Depilación por zonas (también cera de brazos según Fresha). Precio a confirmar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Masajes',
		text: 'Masajes de bienestar y cuidado personal. Reserva por teléfono.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Asesoramiento',
		text: 'Cuéntales tu caso al 952 328 865 y te orientan sin compromiso.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Estética',
		items: [
			{ nombre: 'Cavitación', precio: 'A consultar' },
			{ nombre: 'Mesoterapia', precio: 'A consultar' },
			{ nombre: 'Presoterapia', precio: 'A consultar' },
			{ nombre: 'Estética facial y natural', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Uñas, depilación y masaje',
		items: [
			{ nombre: 'Uñas acrílicas y gel', precio: 'A consultar' },
			{ nombre: 'Depilación por zonas', precio: 'A consultar' },
			{ nombre: 'Masajes', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Aparatología + trato',
		text: 'Cavitación, meso y presoterapia en un salón de barrio, sin clínica fría.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Uñas cuidadas',
		text: 'Acrílicas y gel con diseños actuales que se ven en su Instagram.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario partido útil',
		text: 'Mañana y tarde entre semana más sábado por la mañana.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Precio claro al llamar',
		text: 'Sin carta publicada: precio cerrado al 952 328 865 antes de empezar.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En Alberche, 3',
		text: 'Carretera de Cádiz: barrio, acceso fácil y clientela de siempre.',
	},
	{
		icon: 'ri-star-line',
		title: '4,4 de valoración',
		text: 'Nota pública del directorio local: salón conocido en la zona.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el salón Toñi Bravo?',
		a: 'En la Calle Alberche, 3 (Carretera de Cádiz, 29006 Málaga). Abre la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 952 328 865 o por WhatsApp al mismo número. Fresha también indica «llamar para reservar».',
	},
	{
		q: '¿Qué servicios hace?',
		a: 'Cavitación, mesoterapia, presoterapia, estética natural y facial, masajes, depilación y uñas acrílicas y en gel.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'El salón no publica precios, así que esta web no inventa importes. Llama al 952 328 865 y te dan precio cerrado.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 13:30 y de 17:30 a 20:30, sábado de 10:00 a 14:00 y domingo cerrado, según el directorio local. Confírmalo por teléfono.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El 952 328 865 (llamada y WhatsApp).',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Cavitación y presoterapia' },
	{ icon: 'ri-hand-2', label: 'Uñas acrílicas y gel' },
	{ icon: 'ri-time-line', label: 'Lun–Vie mañana y tarde' },
	{ icon: 'ri-phone-line', label: 'Cita por teléfono' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Salón de belleza Toñi Bravo en Calle Alberche, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Estética corporal en Toñi Bravo: cavitación y presoterapia',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Uñas acrílicas y en gel en el salón de Alberche',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Depilación y masajes en Carretera de Cádiz, Málaga',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Toñi Bravo',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 952 32 88 65',
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
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios del Salón Toñi Bravo',
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '17:30',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '14:00',
		},
	],
};
