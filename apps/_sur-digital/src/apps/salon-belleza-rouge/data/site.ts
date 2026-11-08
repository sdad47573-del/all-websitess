/**
 * Datos del Salón de Belleza Rouge — C. de Damasco 11
 * (Ciudad Jardín, Poniente Sur, 14004 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Salón de Belleza Rouge,
 *   37.8803241,-4.7897898, feature 0xd6d209ff5d936db:0xe55774cb08fc28f0
 * - Mispelus (verificado 9-sep-2026): C. de Damasco, 11, Poniente Sur,
 *   14004 Córdoba, barrio Ciudad Jardín; tel +34664526977; peluquería;
 *   lun–vie 9:30–14:00 y 16:00–19:00, sáb 9:30–14:00, dom cerrado;
 *   se necesita cita y se recomienda pedirla; pagos con móvil NFC y
 *   tarjetas; wifi y acceso para sillas de ruedas.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Sin aggregateRating: muestra pequeña (8 reseñas) y dispar.
 */

import fotoPortada from '../assets/fotos/salon-belleza-rouge-vertical-01.jpg';
import fotoEstudio from '../assets/fotos/salon-belleza-rouge-vertical-02.jpg';
import fotoFacial from '../assets/fotos/salon-belleza-rouge-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/salon-belleza-rouge-vertical-01.jpg';
import fotoGaleria1 from '../assets/fotos/salon-belleza-rouge-vertical-02.jpg';
import fotoGaleria2 from '../assets/fotos/salon-belleza-rouge-vertical-03.jpg';
import fotoGaleria3 from '../assets/fotos/salon-belleza-rouge-vertical-01.jpg';
import fotoGaleria4 from '../assets/fotos/salon-belleza-rouge-vertical-02.jpg';
import logo from '../assets/fotos/salon-belleza-rouge-logo.svg';

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
	'https://www.google.com/maps/place/Sal%C3%B3n+de+Belleza+Rouge/@37.8803241,-4.7897898,17z/data=!3m1!4b1!4m6!3m5!1s0xd6d209ff5d936db:0xe55774cb08fc28f0!8m2!3d37.8803241!4d-4.7897898!16s%2Fg%2F11hc_2frh3?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Salón de Belleza Rouge',
	shortName: 'Rouge',
	tagline: 'Peluquería en Ciudad Jardín, Córdoba',
	claim: 'Tu peluquería en Ciudad Jardín',
	summary:
		'Salón de Belleza Rouge es una peluquería en C. de Damasco 11 (Ciudad Jardín, Poniente Sur, 14004 Córdoba): cortes, mechas y peinados. Llama al 664 52 69 77 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. de Damasco 11',
	district: 'Ciudad Jardín',
	borough: 'Poniente Sur',
	city: 'Córdoba',
	postalCode: '14004',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '664 52 69 77',
	phoneHref: 'tel:+34664526977',
	whatsapp: 'https://wa.me/34664526977?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Rouge.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8803241%2C-4.7897898&z=17&output=embed',
	geo: { lat: 37.8803241, lng: -4.7897898 },
	featureId: '0xd6d209ff5d936db:0xe55774cb08fc28f0',
	priceRange: '€€',
	categories: ['Peluquería', 'Corte', 'Mechas', 'Peinados'],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:30–14:00 y 16:00–19:00' },
		{ days: 'Sábado', hours: '9:30–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario verificado en septiembre de 2026 (Mispelus). Confirma en la ficha de Google o llamando al 664 52 69 77, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/salon-belleza-rouge',
};

export const LEGAL = {
	razonSocial: 'Salón de Belleza Rouge',
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
		icon: 'ri-scissors-2-line',
		title: 'Cortes y mechas',
		text: 'Cortes, mechas naturales y peinados.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Damasco 11',
		text: 'C. de Damasco 11 · 14004 Córdoba, Ciudad Jardín.',
	},
	{
		icon: 'ri-phone-line',
		title: '664 52 69 77',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita',
		text: 'Se necesita cita: se recomienda pedirla antes de ir.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Corte',
		text: 'Cortes a tu medida. Confirma en el 664 52 69 77.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Mechas y color',
		text: 'Mechas naturales y color. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Peinados',
		text: 'Peinados para eventos y día a día.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 664 52 69 77 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Ciudad Jardín (14004). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte', precio: 'A consultar' },
			{ nombre: 'Mechas', precio: 'A consultar' },
			{ nombre: 'Peinados', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza',
		items: [
			{ nombre: 'Belleza', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Ciudad Jardín',
		text: 'Damasco 11: Poniente Sur, Córdoba.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Trato cercano',
		text: 'Atención rápida y personalizada, clientela fija de barrio.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 664 52 69 77 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun–vie partido',
		text: '9:30–14:00 y 16:00–19:00; sábados 9:30–14:00.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Tarjetas de crédito y débito, además de pago con móvil NFC.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está el Salón de Belleza Rouge?',
		a: 'En C. de Damasco 11 (Ciudad Jardín, Poniente Sur, 14004 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 664 52 69 77 o por WhatsApp. Se necesita cita y se recomienda pedirla antes de ir.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería: cortes, mechas y peinados, con servicios de belleza. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 9:30–14:00 y 16:00–19:00, sábado 9:30–14:00 y domingo cerrado.',
	},
	{
		q: '¿Cómo puedo pagar?',
		a: 'Con tarjetas de crédito y débito o con el móvil vía NFC.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-palette-line', label: 'Mechas y color' },
	{ icon: 'ri-map-pin-line', label: 'Ciudad Jardín, Córdoba' },
	{ icon: 'ri-phone-line', label: '664 52 69 77' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Salón de Belleza Rouge en Ciudad Jardín (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Rouge en Damasco 11 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Peluquería Rouge Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Rouge Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34664526977',
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
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:30',
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '19:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:30',
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
