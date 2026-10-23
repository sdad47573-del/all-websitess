/**
 * Datos de Bquarters — Calle Píndaro, 7 interior del pasaje (Teatinos,
 * Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: Bquarters,
 *   36.7199706,-4.4830372, feature 0xd72f197a7815ffd:0xc228c50984dae793
 * - Booksy: https://booksy.com/es-es/129721_bquarters_barberia_29485_malaga
 *   (dirección Calle Píndaro 7 interior del pasaje, precios, equipo
 *   Daniel Carnero / Rubén Muñoz, 5.0 con 241 reseñas, horario publicado
 *   09:00–14:00 y 16:00–20:30)
 * - Instagram: @bquarters.co — reserva en Booksy, Tlf 951 01 84 22, C/ Píndaro 7
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/bquarters-malaga.svg';
import fotoCentro from '../assets/fotos/bquarters-pindaro.svg';
import fotoCorte from '../assets/fotos/bquarters-corte.svg';
import fotoBarba from '../assets/fotos/bquarters-barba.svg';
import logo from '../assets/fotos/bquarters-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: 'Bquarters',
	shortName: 'Bquarters',
	tagline: 'Barbería en Teatinos, Málaga',
	claim: 'Tu barbería en Calle Píndaro',
	summary:
		'Bquarters es una barbería en Calle Píndaro, 7 interior del pasaje (Teatinos, 29010 Málaga). Corte caballero, ritual de barba a navaja con toalla caliente y depilación de cejas, con reserva online en Booksy.',
	street: 'Calle Píndaro, 7 (interior del pasaje)',
	district: 'Teatinos',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '951 01 84 22',
	phoneHref: 'tel:+34951018422',
	booksy:
		'https://booksy.com/es-es/129721_bquarters_barberia_29485_malaga',
	instagram: 'https://www.instagram.com/bquarters.co/',
	googleMaps:
		'https://www.google.com/maps/place/Bquarters/@36.7199706,-4.4830372,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f197a7815ffd:0xc228c50984dae793!8m2!3d36.7199706!4d-4.4830372!16s%2Fg%2F11w__93gm5?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20P%C3%ADndaro%2C%207%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7199706, lng: -4.4830372 },
	featureId: '0xd72f197a7815ffd:0xc228c50984dae793',
	priceRange: '€€',
	ratingBooksy: '5,0',
	reviewsBooksy: '241',
	categories: [
		'Barbería',
		'Corte de pelo',
		'Ritual de barba',
		'Depilación de cejas',
	],
	hours: [
		{ days: 'Horario publicado', hours: '09:00–14:00 · 16:00–20:30' },
	],
	hoursNote:
		'Horario visto en Booksy (octubre 2026): 09:00–14:00 y 16:00–20:30. Confirma el día exacto en Booksy o Google antes de ir, puede variar en festivos y fines de semana.',
	siteUrl: 'https://bquarters.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
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
		title: 'Barbería en Teatinos',
		text: 'Corte, ritual de barba y cejas en Calle Píndaro, 7.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '241 reseñas en Booksy (oct 2026), casi todas de 5 estrellas.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita 24/7 en Booksy o por teléfono 951 01 84 22.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precios claros',
		text: 'Corte 15 €, ritual de barba 15 €, corte + barba 27 €.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte caballero',
		text: 'Corte caballero, 30 min. 15 € (estudiante 14 €).',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Ritual de barba',
		text: 'Forma, navaja con toalla caliente y masaje facial, 30 min. 15 €.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Corte + barba',
		text: 'Corte y barba completa, 1 h. 27 € (con repaso de barba 22 €).',
	},
	{
		icon: 'ri-ruler-line',
		title: 'Repaso de barba',
		text: 'Definir forma y contornos sin afeitar, 15 min. 8 €.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Depilación de cejas',
		text: 'Depilación de cejas, 15 min. 4 €; combinada con corte o barba.',
	},
	{
		icon: 'ri-graduation-cap-line',
		title: 'Precio estudiante',
		text: 'Corte 14 €, ritual de barba 14 €, corte + barba 26 €.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte',
		items: [
			{ nombre: 'Corte caballero (30 min)', precio: '15 €' },
			{ nombre: 'Corte estudiante (30 min)', precio: '14 €' },
			{ nombre: 'Corte y repaso de barba (45 min)', precio: '22 €' },
			{ nombre: 'Corte y repaso de barba estudiante', precio: '21 €' },
			{ nombre: 'Corte y barba (1 h)', precio: '27 €' },
			{ nombre: 'Corte y barba estudiante', precio: '26 €' },
		],
	},
	{
		grupo: 'Barba',
		items: [
			{ nombre: 'Ritual barba: forma + navaja + toalla caliente (30 min)', precio: '15 €' },
			{ nombre: 'Ritual barba estudiante', precio: '14 €' },
			{ nombre: 'Repaso barba: forma y contornos (15 min)', precio: '8 €' },
		],
	},
	{
		grupo: 'Cejas y combinados',
		items: [
			{ nombre: 'Depilación cejas (15 min)', precio: '4 €' },
			{ nombre: 'Corte y depilación cejas (45 min)', precio: '19 €' },
			{ nombre: 'Ritual barba y depilación cejas', precio: '19 €' },
			{ nombre: 'Repaso barba y depilación cejas', precio: '12 €' },
			{ nombre: 'Corte, repaso barba y depilación cejas (1 h)', precio: '26 €' },
			{ nombre: 'Corte, ritual barba y depilación cejas (1 h 15 min)', precio: '31 €' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Calle Píndaro, 7 interior del pasaje: Teatinos-Universidad.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'Daniel Carnero y Rubén Muñoz, nombrados en las reseñas.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Booksy',
		text: '239 de 241 reseñas son de 5 estrellas (oct 2026).',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio antes de empezar',
		text: 'Carta publicada en Booksy: sin sorpresas en caja.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita fácil',
		text: 'Booksy 24/7, teléfono 951 01 84 22 o ficha de Google.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Ritual de barba',
		text: 'Navaja con toalla caliente y masaje facial: momento de relax.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bquarters?',
		a: 'En Calle Píndaro, 7 interior del pasaje (Teatinos, Teatinos-Universidad, 29010 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online 24/7 en Booksy, por teléfono en el 951 01 84 22 o desde la ficha de Google Maps. Equipo: Daniel Carnero y Rubén Muñoz.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Según la carta de Booksy (oct 2026): corte caballero 15 €, ritual de barba 15 €, repaso de barba 8 €, corte y barba 27 €, depilación de cejas 4 €, con precio reducido para estudiantes. Confirma antes de reservar por si cambia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado en Booksy es 09:00–14:00 y 16:00–20:30. Confirma el día exacto en Booksy o Google, puede variar en festivos y fines de semana.',
	},
	{
		q: '¿Qué opinan los clientes?',
		a: '5,0/5 con 241 reseñas en Booksy (oct 2026), 239 de ellas de 5 estrellas. Destacan la atención y el ritual de barba.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería' },
	{ icon: 'ri-sparkling-line', label: 'Ritual de barba' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva en Booksy' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Bquarters, barbería en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Bquarters en Calle Píndaro, Málaga',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Corte caballero en Bquarters (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Ritual de barba en Bquarters',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Bquarters Teatinos Málaga',
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
		reviewCount: '241',
	},
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Bquarters',
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
	openingHoursSpecification: [],
};
