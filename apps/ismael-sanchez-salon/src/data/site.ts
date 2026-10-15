/**
 * Datos de Ismael Sánchez Salón de Caballeros — C. Quasimodo, 18, local D4
 * (Teatinos-Universidad, 29006 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: Ismael Sánchez Salón de caballeros,
 *   36.7109257,-4.4650043, feature 0xd72f71cfbb00305:0xca0fca5428860fb2
 * - Booksy: https://booksy.com/es-es/50489_ismael-sanchez-salon-de-caballeros_barberia_29485_malaga
 *   (dirección, precios, equipo Carlos / Ismael Sánchez / Pedro Cortés,
 *   5.0 con 531 reseñas, horario publicado 09:30–13:30 y 15:30–20:00;
 *   solo efectivo, sin datáfono ni Bizum)
 * - Belliata: C. Quasimodo 18, local D4, 29006; tel. +34 647 71 13 58;
 *   L-V 09:30–20:00, Sáb 09:00–13:00, Dom cerrado
 * - Instagram @isanchezsalondecaballeros: C/ Quasimodo 18, local D4;
 *   cita a través de la app (Booksy)
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/ismael-sanchez-malaga.svg';
import fotoCentro from '../assets/fotos/ismael-sanchez-quasimodo.svg';
import fotoCorte from '../assets/fotos/ismael-sanchez-corte.svg';
import fotoBarba from '../assets/fotos/ismael-sanchez-barba.svg';
import logo from '../assets/fotos/ismael-sanchez-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'Ismael Sánchez Salón de Caballeros',
	shortName: 'Ismael Sánchez',
	tagline: 'Salón de caballeros en Teatinos, Málaga',
	claim: 'Tu salón de caballeros en Quasimodo',
	summary:
		'Ismael Sánchez Salón de Caballeros, en C. Quasimodo, 18, local D4 (Teatinos, 29006 Málaga). Corte de pelo 12 €, corte + barba 15 € y rapado 8 €, con reserva online en Booksy. Solo pago en efectivo.',
	street: 'C. Quasimodo, 18, local D4',
	district: 'Teatinos',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '647 71 13 58',
	phoneHref: 'tel:+34647711358',
	booksy:
		'https://booksy.com/es-es/50489_ismael-sanchez-salon-de-caballeros_barberia_29485_malaga',
	instagram: 'https://www.instagram.com/isanchezsalondecaballeros/',
	googleMaps:
		'https://www.google.com/maps/place/Ismael+S%C3%A1nchez+Sal%C3%B3n+de+caballeros/@36.7109257,-4.4650043,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f71cfbb00305:0xca0fca5428860fb2!8m2!3d36.7109257!4d-4.4650043!16s%2Fg%2F11tnmpcxx2?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Quasimodo%2C%2018%2C%2029006%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7109257, lng: -4.4650043 },
	featureId: '0xd72f71cfbb00305:0xca0fca5428860fb2',
	priceRange: '€',
	ratingBooksy: '5,0',
	reviewsBooksy: '531',
	categories: [
		'Salón de caballeros',
		'Corte de pelo',
		'Arreglo de barba',
		'Corte infantil',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '09:30–13:30 · 15:30–20:00' },
		{ days: 'Sábado', hours: '09:00–13:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en Booksy y Belliata (octubre 2026): L-V 09:30–13:30 y 15:30–20:00 (jornada continua hasta las 20:00 según Belliata), sábado 09:00–13:00, domingo cerrado. Confirma en Booksy antes de ir, puede variar en festivos.',
	siteUrl: 'https://ismael-sanchez-salon.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Ismael Sánchez Fernández (según Booksy)',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
	{ label: 'Servicios y precios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios y precios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-line',
		title: 'Salón de caballeros',
		text: 'Corte, barba, rapado y corte infantil en Quasimodo, 18.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '531 reseñas en Booksy (oct 2026), 522 de 5 estrellas.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o por teléfono 647 71 13 58.',
	},
	{
		icon: 'ri-cash-line',
		title: 'Solo efectivo',
		text: 'Sin datáfono ni Bizum: trae efectivo, por favor.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte de pelo',
		text: 'Corte de pelo, 30 min. 12 €.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte + barba',
		text: 'Corte de pelo + arreglo de barba, 30 min. 15 €.',
	},
	{
		icon: 'ri-ruler-line',
		title: 'Arreglo de barba',
		text: 'Arreglo de barba, 15 min. 8 €.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Rapado',
		text: 'Rapado básico, 15 min. 8 € (con barba 12 €).',
	},
	{
		icon: 'ri-child-line',
		title: 'Corte de niño',
		text: 'Corte de niño hasta 5 años, 30 min. 11 €.',
	},
	{
		icon: 'ri-cash-line',
		title: 'Pago en efectivo',
		text: 'Sin datáfono ni Bizum: el pago es solo en efectivo.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Corte de pelo (30 min)', precio: '12 €' },
			{ nombre: 'Corte de niño hasta 5 años (30 min)', precio: '11 €' },
			{ nombre: 'Rapado básico (15 min)', precio: '8 €' },
		],
	},
	{
		grupo: 'Corte + barba',
		items: [
			{ nombre: 'Corte de pelo + arreglo de barba (30 min)', precio: '15 €' },
			{ nombre: 'Rapado básico + arreglo de barba (30 min)', precio: '12 €' },
		],
	},
	{
		grupo: 'Barba',
		items: [
			{ nombre: 'Arreglo de barba (15 min)', precio: '8 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'C. Quasimodo, 18, local D4: Teatinos-Universidad.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'Carlos, Ismael Sánchez y Pedro Cortés, en las reseñas.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '522 de 531 reseñas son de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7, teléfono 647 71 13 58 o ficha de Google.',
	},
	{
		icon: 'ri-time-line',
		title: 'Puntualidad',
		text: 'Puntualidad y buen trato, lo más destacado.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Ismael Sánchez?',
		a: 'En C. Quasimodo, 18, local D4 (Teatinos, Teatinos-Universidad, 29006 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy, por teléfono en el 647 71 13 58 o desde la ficha de Google Maps. Equipo: Carlos, Ismael Sánchez y Pedro Cortés.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta de Booksy (oct 2026): corte 12 €, niño hasta 5 años 11 €, rapado 8 €, arreglo de barba 8 €, corte + barba 15 € y rapado + barba 12 €. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'No: avisan en Booksy de que no tienen datáfono ni Bizum y solo cobran en efectivo.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es L-V 09:30–13:30 y 15:30–20:00, sábado 09:00–13:00 y domingo cerrado. Confirma en Booksy, puede variar en festivos.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Salón de caballeros' },
	{ icon: 'ri-child-line', label: 'Corte infantil' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Ismael Sánchez en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Ismael Sánchez en Quasimodo, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte de pelo en Ismael Sánchez (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Arreglo de barba en Ismael Sánchez',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Ismael Sánchez Quasimodo Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
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
	telephone: BUSINESS.phoneHref,
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: '5.0',
		reviewCount: '531',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Ismael Sánchez',
		itemListElement: SERVICIOS_DETALLE.flatMap((seccion) =>
			seccion.items.map((item) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: item.nombre,
					description: `${item.nombre} en ${BUSINESS.name}`,
					areaServed: BUSINESS.city,
					provider: { '@type': 'BarberShop', name: BUSINESS.name },
				},
				priceSpecification: {
					'@type': 'PriceSpecification',
					priceCurrency: 'EUR',
					price: item.precio,
				},
			})),
		),
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
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '15:30',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:00',
			closes: '13:00',
		},
	],
};
