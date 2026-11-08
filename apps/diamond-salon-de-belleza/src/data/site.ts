/**
 * Datos del Salon De Belleza Diamond — Av. Antonio Gaudí, 6
 * (La Luz / Carretera de Cádiz, 29004 Málaga).
 *
 * Fuentes públicas:
 * - Google Maps (enlace aportado): Salon De Belleza Diamond, 36.6967366,-4.457246
 * - Fresha: confirma Av. Antonio Gaudi, Ctra. de Cádiz 29004, «call to book»,
 *   depilación (brazilian wax, cejas con hilo) y horario Lun–Vie 10:00–19:30,
 *   Sáb–Dom cerrado.
 * - Directorio local: teléfono +34 690 63 56 51.
 * - Instagram @diamond_salon_de_belleza: studio de belleza.
 *
 * La ficha no publica carta de precios ni recuento de reseñas: la web no
 * inventa esos datos y remite al teléfono.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoSalon from '../assets/fotos/diamond-salon-antonio-gaudi-malaga.svg';
import fotoDepi from '../assets/fotos/diamond-depilacion-cejas-malaga.svg';
import fotoUnas from '../assets/fotos/diamond-unas-belleza-malaga.svg';
import fotoStudio from '../assets/fotos/diamond-studio-belleza-malaga.svg';
import logo from '../assets/fotos/diamond-salon-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior: fotoDepi,
	fotoCejas: fotoUnas,
	fotoCalle: fotoStudio,
	logo,
};

export const BUSINESS = {
	name: 'Salon De Belleza Diamond',
	shortName: 'Diamond',
	tagline: 'Studio de belleza en La Luz, Málaga',
	claim: 'Depilación, cejas y belleza en Av. Antonio Gaudí',
	summary:
		'Salon De Belleza Diamond, en la Avenida Antonio Gaudí, 6 (La Luz, Carretera de Cádiz, 29004 Málaga). Depilación corporal y de cejas con hilo, uñas y studio de belleza. Lun–Vie 10:00–19:30. Cita por teléfono al 690 63 56 51.',
	street: 'Avenida Antonio Gaudí, 6',
	district: 'La Luz · Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29004',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '690 63 56 51',
	phoneHref: 'tel:+34690635651',
	whatsapp: 'https://wa.me/34690635651?text=Hola%20Diamond%2C%20quiero%20pedir%20cita',
	fresha: 'https://www.fresha.com/lvp/salon-de-belleza-diamond-avenida-de-mijas-fuengirola-D1M0bG',
	instagram: 'https://www.instagram.com/diamond_salon_de_belleza/',
	googleMaps:
		'https://www.google.com/maps/place/Salon+De+Belleza+Diamond/@36.6967366,-4.457246,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f9df0cbdb409:0xa3381819d2ec413!8m2!3d36.6967366!4d-4.457246!16s%2Fg%2F11cnsfxttm?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20Antonio%20Gaud%C3%AD%2C%206%2C%2029004%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6967366, lng: -4.457246 },
	priceRange: '€€',
	categories: [
		'Salón de belleza',
		'Depilación',
		'Diseño de cejas',
		'Uñas',
		'Studio de belleza',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00 – 19:30' },
		{ days: 'Sábado', hours: 'Cerrado' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según Fresha; confirman por teléfono al 690 63 56 51. Puede variar en festivos.',
	siteUrl: 'https://diamond-salon-de-belleza.vercel.app',
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
		icon: 'ri-scissors-cut-line',
		title: 'Depilación experta',
		text: 'Brazilian wax y depilación con hilo, también en cejas: la especialidad de la casa.',
	},
	{
		icon: 'ri-time-line',
		title: 'Lun–Vie 10:00–19:30',
		text: 'Jornada continua entre semana. Fines de semana cerrado.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'Studio activo',
		text: '@diamond_salon_de_belleza con cientos de trabajos publicados.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'Llama o escribe al 690 63 56 51: confirman servicio y hora.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-cut-line',
		title: 'Depilación',
		text: 'Brazilian wax y depilación corporal por zonas. Precio a confirmar por teléfono.',
	},
	{
		icon: 'ri-quill-pen-line',
		title: 'Cejas con hilo',
		text: 'Depilación de cejas con hilo y diseño de mirada. Pide cita al 690 63 56 51.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Uñas',
		text: 'Manicura y cuidado de uñas en el studio. Consulta los acabados disponibles.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Belleza integral',
		text: 'Studio de belleza: tratamientos de cuidado personal en un solo sitio.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Cuidado facial',
		text: 'Tratamientos de belleza y cuidado de la piel. Pregunta disponibilidad.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Asesoramiento',
		text: 'Cuéntales tu caso por WhatsApp y te orientan sin compromiso.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Depilación',
		items: [
			{ nombre: 'Brazilian wax', precio: 'A consultar' },
			{ nombre: 'Depilación corporal por zonas', precio: 'A consultar' },
			{ nombre: 'Cejas con hilo y diseño', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Uñas y manicura', precio: 'A consultar' },
			{ nombre: 'Tratamientos de belleza', precio: 'A consultar' },
			{ nombre: 'Cuidado facial', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-scissors-cut-line',
		title: 'Hilo y cera dominados',
		text: 'Depilación con hilo en cejas y brazilian wax: técnica precisa.',
	},
	{
		icon: 'ri-time-line',
		title: 'Jornada continua',
		text: '10:00–19:30 de lunes a viernes: fácil encajar la cita.',
	},
	{
		icon: 'ri-instagram-line',
		title: 'Trabajos a la vista',
		text: 'Cientos de publicaciones en Instagram para ver el estilo del studio.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Precio claro al llamar',
		text: 'Sin carta publicada: precio cerrado al 690 63 56 51.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En La Luz',
		text: 'Av. Antonio Gaudí, 6: Carretera de Cádiz con buena conexión.',
	},
	{
		icon: 'ri-subway-line',
		title: 'Junto al metro',
		text: 'Zona La Luz – La Paz con parada de metro a minutos.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Diamond?',
		a: 'En la Avenida Antonio Gaudí, 6 (La Luz, Carretera de Cádiz, 29004 Málaga). Abre la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando o por WhatsApp al 690 63 56 51. Fresha indica «llamar para reservar».',
	},
	{
		q: '¿Qué servicios hace?',
		a: 'Depilación corporal y brazilian wax, depilación de cejas con hilo, uñas y tratamientos de belleza como studio integral.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'El salón no publica precios, así que esta web no inventa importes. Llama al 690 63 56 51 y te dan precio cerrado.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 19:30, sábado y domingo cerrado, según Fresha. Confírmalo por teléfono.',
	},
	{
		q: '¿Tienen Instagram?',
		a: 'Sí: @diamond_salon_de_belleza, con cientos de trabajos del studio.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-cut-line', label: 'Depilación con hilo y cera' },
	{ icon: 'ri-quill-pen-line', label: 'Diseño de cejas' },
	{ icon: 'ri-time-line', label: 'Lun–Vie 10:00–19:30' },
	{ icon: 'ri-phone-line', label: 'Cita por teléfono' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Salon De Belleza Diamond en Av. Antonio Gaudí, Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Depilación y cejas con hilo en Diamond, La Luz',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Uñas y belleza en el studio Diamond de Málaga',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Studio de belleza Diamond en Carretera de Cádiz',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Diamond',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 690 63 56 51',
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
	sameAs: [BUSINESS.instagram, BUSINESS.fresha],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Diamond',
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
			closes: '19:30',
		},
	],
};
