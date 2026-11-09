/**
 * Datos de Peluquería AV — Calle Margarita Xirgu, 4
 * (El Romeral, Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Peluquería AV,
 *   36.7218896,-4.4731652, feature 0xd72f7cff17ea2bf:0xd10a6931609ad5ad
 * - Reverse-geocode OSM (Nominatim): Calle Margarita Xirgu 4, El Romeral,
 *   Teatinos-Universidad, Málaga 29010.
 *
 * Lo que la web NO inventa:
 * - La ficha no publica web propia, carta de servicios ni precios, así que no
 *   se publican. Teléfono, horario y valoración sí se publican porque salen de
 *   la ficha leída el 16-10-2026 desde /maps/preview/place.
 *
 * Nota sobre fotos: 10 fotos descargadas de la ficha con
 * scripts/fetch-maps-photos.mjs (ver .maps-manifest.json). Se muestran
 * optimizadas con enlace a la ficha original. Ver README_IMAGENES.md.
 */

import fotoHero from '../assets/fotos/peluqueria-av-malaga-vertical-04.jpg';
import fotoLocal2 from '../assets/fotos/peluqueria-av-malaga-vertical-01.jpg';
import fotoLocal3 from '../assets/fotos/peluqueria-av-malaga-vertical-03.jpg';
import fotoLocal4 from '../assets/fotos/peluqueria-av-malaga-apaisada-02.jpg';
import fotoLocal5 from '../assets/fotos/peluqueria-av-malaga-vertical-05.jpg';
import fotoLocal6 from '../assets/fotos/peluqueria-av-malaga-vertical-07.jpg';
import logo from '../assets/fotos/peluqueria-av-logo.svg';

export const IMAGES = {
	fotoFachada: fotoHero,
	fotoInterior: fotoLocal2,
	fotoCejas: fotoLocal3,
	fotoCalle: fotoLocal4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Peluquer%C3%ADa+AV/@36.7218896,-4.4731652,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7cff17ea2bf:0xd10a6931609ad5ad!8m2!3d36.7218896!4d-4.4731652!16s%2Fg%2F11vy2f5gzk?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Peluquería AV',
	shortName: 'Peluquería AV',
	tagline: 'Peluquería en Teatinos, Málaga',
	claim: 'Tu peluquería de barrio en El Romeral',
	summary:
		'Peluquería AV es una peluquería en Calle Margarita Xirgu, 4 (El Romeral, Teatinos-Universidad, 29010 Málaga). 5,0 sobre 5 con 114 reseñas. Llama al 642 86 93 53.',
	street: 'Calle Margarita Xirgu, 4',
	district: 'El Romeral',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '+34 642 86 93 53',
	phoneHref: 'tel:+34642869353',
	reviewsUrl:
		'https://search.google.com/local/reviews?placeid=ChIJv6J-8c_3cg0RrdWaYDFpCtE&hl=es',
	placeId: 'ChIJv6J-8c_3cg0RrdWaYDFpCtE',
	rating: 5.0,
	reviewCount: 114,
	mapsHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Margarita%20Xirgu%2C%204%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7218896, lng: -4.4731652 },
	featureId: '0xd72f7cff17ea2bf:0xd10a6931609ad5ad',
	priceRange: '€€',
	categories: ['Peluquería', 'Corte de pelo', 'Color', 'Peinado'],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–14:00 y 16:00–20:00' },
		{ days: 'Sábado', hours: 'Cerrado' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google Maps (16-10-2026). Puede cambiar en festivos: ante la duda, llama al 642 86 93 53.',
	siteUrl: 'https://www.sur-digital.com/peluqueria-av-malaga',
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
	{ label: 'Servicios', href: '/peluqueria-av-malaga/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/peluqueria-av-malaga/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería de barrio en El Romeral, Teatinos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Margarita Xirgu, 4',
		text: 'Calle Margarita Xirgu, 4 · 29010 Málaga. En El Romeral, Teatinos.',
	},
	{
		icon: 'ri-phone-line',
		title: '642 86 93 53',
		text: 'Llama para pedir cita. 5,0 sobre 5 con 114 reseñas en Google.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Corte y color',
		text: 'Áreas habituales: corte, color y peinado. Confirma tu servicio en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Corte',
		text: 'Corte de mujer, hombre e infantil. Pide información y precio en la ficha de Google.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color',
		text: 'Tinte, mechas y matices. Confirma técnica y precio antes de reservar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Peinado',
		text: 'Peinados para el día a día y ocasiones. Consulta disponibilidad en la ficha.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Tratamientos',
		text: 'Cuidado e hidratación del cabello. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En El Romeral, Teatinos (29010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Corte y peinado',
		items: [
			{ nombre: 'Corte de mujer', precio: 'A consultar' },
			{ nombre: 'Corte de hombre', precio: 'A consultar' },
			{ nombre: 'Peinado / recogido', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Color y cuidado',
		items: [
			{ nombre: 'Tinte / color', precio: 'A consultar' },
			{ nombre: 'Mechas', precio: 'A consultar' },
			{ nombre: 'Tratamiento capilar', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En El Romeral',
		text: 'Margarita Xirgu, 4: barrio de El Romeral, Teatinos, con vida de barrio.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Trato de barrio',
		text: 'Peluquería cercana: te conocen y te asesoran según tu pelo y tu estilo.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha verificable',
		text: 'Horario, teléfono y valoración de su ficha pública de Google (16-10-2026).',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-walk-line',
		title: 'Barrio accesible',
		text: 'En Teatinos-Universidad: ideal si vives, estudias o trabajas en la zona oeste de Málaga.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias o un caso especial (embarazo, cuero cabelludo sensible), pregunta antes.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Peluquería AV?',
		a: 'En Calle Margarita Xirgu, 4 (El Romeral, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llama al 642 86 93 53, el teléfono publicado en su ficha de Google Maps. La peluquería no publica web propia, así que la vía fiable es ese teléfono o su ficha pública de Google.'
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre y el tipo de negocio, corte, color, peinado y cuidado del cabello. La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con la peluquería según servicio y largo del cabello.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Según su ficha de Google (16-10-2026): lunes a viernes 10:00–14:00 y 16:00–20:00, sábado y domingo cerrado. Puede cambiar en festivos: llama antes de salir.'
	},
	{
		q: '¿De dónde son las fotos?',
		a: 'Son 10 fotos de la ficha pública de Google Maps del propio negocio, descargadas con scripts/fetch-maps-photos.mjs y servidas aquí optimizadas, con enlace a la ficha original (ver README_IMAGENES.md).'
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-palette-line', label: 'Corte y color' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: fotoHero, alt: 'Peluquería AV en Teatinos (Málaga), foto de su ficha de Google Maps' },
	{ src: fotoLocal2, alt: 'Salón de Peluquería AV en Calle Margarita Xirgu' },
	{ src: fotoLocal3, alt: 'Corte en Peluquería AV (Málaga)' },
	{ src: fotoLocal4, alt: 'Color en Peluquería AV (Málaga)' },
	{ src: fotoLocal5, alt: 'Interior de Peluquería AV, El Romeral' },
	{ src: fotoLocal6, alt: 'Detalle de Peluquería AV en Teatinos-Universidad' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería AV Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: BUSINESS.phoneHref,
	image: `${BUSINESS.siteUrl}/og.jpg`,
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
	},
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '20:00',
		},
	],
};
