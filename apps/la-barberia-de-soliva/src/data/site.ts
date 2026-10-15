/**
 * Datos de La Barbería de Soliva — C. Félix Gancedo, 1, portal 1, local 7
 * (Soliva Este, Puerto de la Torre, 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: La Barberia de Soliva,
 *   36.7243848,-4.4900346, feature 0xd72f0c8ab307885:0x7f0c93635731992c
 * - Booksy: https://booksy.com/es-es/10947_la-barberia-de-soliva_barberia_29485_malaga
 *   (dirección, precios, equipo Jose / Iván Palomo Sánchez /
 *   Cristian Sánchez Gaitán, 5.0 con 267 reseñas, horario publicado
 *   10:00–13:30 y 16:30–21:00)
 * - Instagram @labarberiadesoliva: C/ Félix Gancedo Nº1 local 7, Tlf 662290216,
 *   horario L-V 10:00–13:30 y 16:30–21:00
 * - Fresha: C. Félix Gancedo, 1, portal 1 local 7, Puerto de la Torre, 29010;
 *   L-V 10:00–13:30 (tardes según IG), Sáb 10:00–14:00, Dom cerrado
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/la-barberia-de-soliva-malaga.svg';
import fotoCentro from '../assets/fotos/la-barberia-de-soliva-gancedo.svg';
import fotoCorte from '../assets/fotos/la-barberia-de-soliva-corte.svg';
import fotoBarba from '../assets/fotos/la-barberia-de-soliva-barba.svg';
import logo from '../assets/fotos/la-barberia-de-soliva-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'La Barbería de Soliva',
	shortName: 'Soliva',
	tagline: 'Barbería en Soliva, Málaga',
	claim: 'Tu barbería en Félix Gancedo',
	summary:
		'La Barbería de Soliva es una barbería en C. Félix Gancedo, 1, local 7 (Soliva Este, Puerto de la Torre, 29010 Málaga). Corte desde 12 €, corte + barba 15 € y ritual a navaja 9 €, con reserva online en Booksy.',
	street: 'C. Félix Gancedo, 1, portal 1, local 7',
	district: 'Soliva Este',
	borough: 'Puerto de la Torre',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '662 29 02 16',
	phoneHref: 'tel:+34662290216',
	booksy:
		'https://booksy.com/es-es/10947_la-barberia-de-soliva_barberia_29485_malaga',
	instagram: 'https://www.instagram.com/labarberiadesoliva/',
	googleMaps:
		'https://www.google.com/maps/place/La+Barberia+de+Soliva/@36.7243848,-4.4900346,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f0c8ab307885:0x7f0c93635731992c!8m2!3d36.7243848!4d-4.4900346!16s%2Fg%2F11f3_f3tb7?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20F%C3%A9lix%20Gancedo%2C%201%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7243848, lng: -4.4900346 },
	featureId: '0xd72f0c8ab307885:0x7f0c93635731992c',
	priceRange: '€',
	ratingBooksy: '5,0',
	reviewsBooksy: '267',
	categories: [
		'Barbería',
		'Corte de pelo',
		'Corte infantil',
		'Arreglo de barba',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '10:00–13:30 · 16:30–21:00' },
		{ days: 'Sábado', hours: '10:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en Instagram y Booksy (octubre 2026): L-V 10:00–13:30 y 16:30–21:00, sábado 10:00–14:00 según Fresha, domingo cerrado. Confirma en Booksy o Google antes de ir, puede variar en festivos.',
	siteUrl: 'https://la-barberia-de-soliva.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La barbería', href: '#salon' },
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
		title: 'Barbería en Soliva',
		text: 'Corte, barba y ritual a navaja en Félix Gancedo, 1.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '267 reseñas en Booksy (oct 2026), casi todas de 5 estrellas.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o por teléfono 662 29 02 16.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precios claros',
		text: 'Corte 12 €, corte + barba 15 €, ritual a navaja 9 €.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte de pelo',
		text: 'Corte de pelo, 30 min. 12 € (con lavado 13 €).',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte + barba',
		text: 'Corte de pelo + barba, 30 min. 15 €.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Ritual navaja',
		text: 'Ritual a navaja, 30 min. 9 €.',
	},
	{
		icon: 'ri-ruler-line',
		title: 'Barba',
		text: 'Arreglo de barba larga 7 €; perfilado de barba 4 €.',
	},
	{
		icon: 'ri-child-line',
		title: 'Niños y jubilados',
		text: 'Corte de niño (0–8 años) 10 €; corte jubilado 10 €.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva en Booksy',
		text: 'Elige a Jose, Iván o Cristian al reservar online.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Corte de pelo (30 min)', precio: '12 €' },
			{ nombre: 'Corte de pelo + lavado (30 min)', precio: '13 €' },
			{ nombre: 'Corte de niño 0–8 años (30 min)', precio: '10 €' },
			{ nombre: 'Corte jubilado (30 min)', precio: '10 €' },
		],
	},
	{
		grupo: 'Corte + barba',
		items: [
			{ nombre: 'Corte de pelo + barba (30 min)', precio: '15 €' },
		],
	},
	{
		grupo: 'Barba y navaja',
		items: [
			{ nombre: 'Arreglo de barba larga (15 min)', precio: '7 €' },
			{ nombre: 'Perfilado de barba (5 min)', precio: '4 €' },
			{ nombre: 'Ritual navaja (30 min)', precio: '9 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Soliva',
		text: 'Félix Gancedo, 1, local 7: Soliva Este, Puerto de la Torre.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'Jose, Iván Palomo y Cristian Sánchez, nombrados en reseñas.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '264 de 267 reseñas son de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7, teléfono 662 29 02 16 o ficha de Google.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario amplio',
		text: 'Mañanas y tardes entre semana; sábado por la mañana.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Barbería de Soliva?',
		a: 'En C. Félix Gancedo, 1, portal 1, local 7 (Soliva Este, Puerto de la Torre, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy, por teléfono en el 662 29 02 16 o desde la ficha de Google Maps. Equipo: Jose, Iván Palomo Sánchez y Cristian Sánchez Gaitán.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta de Booksy (oct 2026): corte 12 €, corte + lavado 13 €, niño y jubilado 10 €, corte + barba 15 €, arreglo de barba larga 7 €, perfilado 4 € y ritual a navaja 9 €. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es L-V 10:00–13:30 y 16:30–21:00, sábado 10:00–14:00 y domingo cerrado. Confirma en Booksy o Google, puede variar en festivos.',
	},
	{
		q: '¿Qué opinan los clientes?',
		a: '5,0/5 con 267 reseñas en Booksy (oct 2026), 264 de ellas de 5 estrellas. Destacan la profesionalidad del equipo.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería' },
	{ icon: 'ri-sparkling-line', label: 'Ritual a navaja' },
	{ icon: 'ri-map-pin-line', label: 'Soliva, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'La Barbería de Soliva en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'La Barbería de Soliva en Félix Gancedo, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte de pelo en La Barbería de Soliva (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Arreglo de barba en La Barbería de Soliva',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Barbería Soliva Málaga',
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
		reviewCount: '267',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de La Barbería de Soliva',
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
			opens: '10:00',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:30',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '14:00',
		},
	],
};
