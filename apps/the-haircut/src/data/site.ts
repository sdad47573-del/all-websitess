/**
 * Datos de The Haircut & Sunbody — Calle Flaubert, 3 (Teatinos,
 * Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: The Haircut,
 *   36.7238757,-4.4618764, feature 0xd72f73e5f16aa83:0xdee0796f6180324f
 * - Booksy: https://booksy.com/es-es/2103_thehaircut_barberia_29485_malaga
 *   (dirección Calle Flaubert 3, precios, equipo DILAN / MARIA,
 *   4.9 con 401 reseñas, horario publicado 09:30–13:30 y 16:00–20:30;
 *   negocio: Sunbody S.L.)
 * - Instagram @thehaircut.sunbody y Facebook thehaircut.sunbody:
 *   peluquería, barbería y bronceado; L-V 9:30–13:30 y 16:00–20:30,
 *   Sáb 9:30–14:00; tel. 951 40 59 60
 *
 * Nota sobre fotos: Google Maps no permite descargar ni reutilizar las fotos
 * de la ficha (copyright + condiciones de Google), tampoco incrustarlas con
 * hotlink. Esta web trae imágenes propias de marcador (SVG en
 * src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/the-haircut-malaga.svg';
import fotoCentro from '../assets/fotos/the-haircut-flaubert.svg';
import fotoCorte from '../assets/fotos/the-haircut-corte.svg';
import fotoBarba from '../assets/fotos/the-haircut-barba.svg';
import logo from '../assets/fotos/the-haircut-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'The Haircut',
	brandName: 'The Haircut & Sunbody',
	shortName: 'The Haircut',
	tagline: 'Peluquería, barbería y bronceado en Teatinos, Málaga',
	claim: 'Tu imagen habla por ti',
	summary:
		'The Haircut & Sunbody es peluquería, barbería y centro de bronceado en Calle Flaubert, 3 (Teatinos, 29010 Málaga). Corte desde 15 €, corte + barba 20 € y rapado 8 €, con reserva online en Booksy.',
	street: 'Calle Flaubert, 3',
	district: 'Teatinos',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '951 40 59 60',
	phoneHref: 'tel:+34951405960',
	booksy:
		'https://booksy.com/es-es/2103_thehaircut_barberia_29485_malaga',
	instagram: 'https://www.instagram.com/thehaircut.sunbody/',
	facebook: 'https://www.facebook.com/thehaircut.sunbody/',
	googleMaps:
		'https://www.google.com/maps/place/The+Haircut/@36.7238757,-4.4618764,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f73e5f16aa83:0xdee0796f6180324f!8m2!3d36.7238757!4d-4.4618764!16s%2Fg%2F11clszgbg6?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Flaubert%2C%203%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7238757, lng: -4.4618764 },
	featureId: '0xd72f73e5f16aa83:0xdee0796f6180324f',
	priceRange: '€€',
	ratingBooksy: '4,9',
	reviewsBooksy: '401',
	categories: [
		'Peluquería',
		'Barbería',
		'Centro de bronceado',
		'Corte infantil',
	],
	hours: [
		{ days: 'Lunes – Viernes', hours: '09:30–13:30 · 16:00–20:30' },
		{ days: 'Sábado', hours: '09:30–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en Instagram y Booksy (octubre 2026): L-V 09:30–13:30 y 16:00–20:30, sábado 09:30–14:00, domingo cerrado. Confirma en Booksy o Google antes de ir, puede variar en festivos.',
	siteUrl: 'https://the-haircut-malaga.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Sunbody S.L. (según Booksy)',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El estudio', href: '#salon' },
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
		title: 'Peluquería y barbería',
		text: 'Corte, barba, color y corte infantil en Flaubert, 3.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Centro de bronceado',
		text: 'Sunbody: peluquería, barbería y bronceado en un espacio.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,9 en Booksy',
		text: '401 reseñas en Booksy (oct 2026).',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o por teléfono 951 40 59 60.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte de caballero',
		text: 'Corte de caballero, 30 min. 15 €.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte + barba',
		text: 'Barba con forma, diseño y acabado (1 h) + corte. 20 €.',
	},
	{
		icon: 'ri-bear-smile-line',
		title: 'Corte de niño',
		text: 'Corte infantil hasta 10 años, 30 min. 13 €.',
	},
	{
		icon: 'ri-ruler-line',
		title: 'Arreglo de barba',
		text: 'Arreglo de barba, +30 min. 9,50 €. Rapado 8 €.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color',
		text: 'Decoloración 30 €; mechas de gorro desde 25 €.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Bronceado Sunbody',
		text: 'Centro de bronceado en el mismo local. Pregunta al reservar.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Corte de caballero (30 min)', precio: '15 €' },
			{ nombre: 'Corte de niño hasta 10 años (30 min)', precio: '13 €' },
			{ nombre: 'Rapado (30 min)', precio: '8 €' },
		],
	},
	{
		grupo: 'Barba',
		items: [
			{ nombre: 'Corte + barba con diseño y acabado (+1 h)', precio: '20 €' },
			{ nombre: 'Arreglo de barba (+30 min)', precio: '9,50 €' },
		],
	},
	{
		grupo: 'Color y bronceado',
		items: [
			{ nombre: 'Decoloración primera aplicación (+1 h 30 min)', precio: '30 €' },
			{ nombre: 'Mechas de gorro (desde, +1 h)', precio: 'desde 25 €' },
			{ nombre: 'Sesión de bronceado Sunbody', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Calle Flaubert, 3: Teatinos-Universidad, 29010 Málaga.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'Dilan y María, nombrados en las reseñas de Booksy.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,9 en Booksy',
		text: '387 de 401 reseñas son de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7, teléfono 951 40 59 60 o ficha de Google.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Con tarjeta y niños',
		text: 'Aceptan tarjeta de crédito; adaptado para niños.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está The Haircut?',
		a: 'En Calle Flaubert, 3 (Teatinos, Teatinos-Universidad, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy, por teléfono en el 951 40 59 60 o desde la ficha de Google Maps. Equipo: Dilan y María.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta de Booksy (oct 2026): corte de caballero 15 €, rapado 8 €, corte de niño 13 €, arreglo de barba 9,50 €, corte + barba 20 €, decoloración 30 € y mechas de gorro desde 25 €. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es L-V 09:30–13:30 y 16:00–20:30, sábado 09:30–14:00 y domingo cerrado. Confirma en Booksy o Google, puede variar en festivos.',
	},
	{
		q: '¿También hacen bronceado?',
		a: 'Sí: es peluquería, barbería y centro de bronceado (Sunbody). Pregunta por las sesiones al reservar.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas o incrustarlas en otra web. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Peluquería y barbería' },
	{ icon: 'ri-sun-line', label: 'Centro de bronceado' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'The Haircut en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'The Haircut en Calle Flaubert, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte de caballero en The Haircut (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Arreglo de barba en The Haircut',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'The Haircut & Sunbody Teatinos Málaga',
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
		ratingValue: '4.9',
		reviewCount: '401',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de The Haircut',
		itemListElement: SERVICIOS_DETALLE.flatMap((seccion) =>
			seccion.items.map((item) => ({
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: item.nombre,
					description: `${item.nombre} en ${BUSINESS.name}`,
					areaServed: BUSINESS.city,
					provider: { '@type': 'HairSalon', name: BUSINESS.name },
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
			opens: '16:00',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:30',
			closes: '14:00',
		},
	],
};
