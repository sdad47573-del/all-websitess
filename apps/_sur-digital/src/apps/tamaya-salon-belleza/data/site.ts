/**
 * Datos de Tamaya salón de belleza — C. Comandante Velázquez 3
 * (Santa Rosa, Norte-Sierra, 14006 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Tamaya salón de belleza,
 *   37.8973831,-4.7799044, feature 0xd6cdf6e06df607b:0xedcd6b6918374fe0
 * - Mispelus (verificado 9-sep-2026): C. Comandante Velázquez, 3,
 *   Nte. Sierra, 14006 Córdoba, barrio Santa Rosa; tel +34957391362;
 *   peluquería y estética (reseñas: tratamiento personalizado, peluquería
 *   y estética con buenos productos, ropa para ocasiones especiales);
 *   lun–vie 9:30–13:30 y 17:30–19:30, sáb 9:00–13:30, dom cerrado;
 *   se recomienda pedir cita; pagos con móvil NFC y tarjetas.
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Sin aggregateRating: muestra pequeña (6 reseñas).
 */

import fotoPortada from '../assets/fotos/tamaya-salon-belleza-cuadrada-01.jpg';
import fotoEstudio from '../assets/fotos/tamaya-salon-belleza-vertical-02.jpg';
import fotoFacial from '../assets/fotos/tamaya-salon-belleza-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/tamaya-salon-belleza-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/tamaya-salon-belleza-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/tamaya-salon-belleza-cuadrada-06.jpg';
import fotoGaleria3 from '../assets/fotos/tamaya-salon-belleza-apaisada-07.jpg';
import fotoGaleria4 from '../assets/fotos/tamaya-salon-belleza-vertical-08.jpg';
import logo from '../assets/fotos/tamaya-salon-belleza-logo.svg';

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
	'https://www.google.com/maps/place/Tamaya+sal%C3%B3n+de+belleza/@37.8973831,-4.7799044,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf6e06df607b:0xedcd6b6918374fe0!8m2!3d37.8973831!4d-4.7799044!16s%2Fg%2F12qfy2ngg?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Tamaya salón de belleza',
	shortName: 'Tamaya',
	tagline: 'Peluquería y estética en Santa Rosa, Córdoba',
	claim: 'Tu salón de peluquería y estética en Santa Rosa',
	summary:
		'Tamaya salón de belleza es una peluquería en C. Comandante Velázquez 3 (Santa Rosa, Norte-Sierra, 14006 Córdoba): peluquería y estética con tratamiento personalizado. Llama al 957 39 13 62 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Comandante Velázquez 3',
	district: 'Santa Rosa',
	borough: 'Norte-Sierra',
	city: 'Córdoba',
	postalCode: '14006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 39 13 62',
	phoneHref: 'tel:+34957391362',
	whatsapp: 'https://wa.me/34957391362?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Tamaya.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8973831%2C-4.7799044&z=17&output=embed',
	geo: { lat: 37.8973831, lng: -4.7799044 },
	featureId: '0xd6cdf6e06df607b:0xedcd6b6918374fe0',
	priceRange: '€€',
	categories: ['Peluquería', 'Estética', 'Belleza'],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:30–13:30 y 17:30–19:30' },
		{ days: 'Sábado', hours: '9:00–13:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario verificado en septiembre de 2026 (Mispelus). Confirma en la ficha de Google o llamando al 957 39 13 62, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/tamaya-salon-belleza',
};

export const LEGAL = {
	razonSocial: 'Tamaya salón de belleza',
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
		title: 'Peluquería y estética',
		text: 'Peluquería y estética con tratamiento personalizado.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Comandante Velázquez 3',
		text: 'C. Comandante Velázquez 3 · 14006 Córdoba, Santa Rosa.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 39 13 62',
		text: 'Cita por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita',
		text: 'Se recomienda pedir cita antes de ir.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Peluquería con asesoramiento. Confirma en el 957 39 13 62.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética',
		text: 'Servicios de estética. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Tratamiento personalizado',
		text: 'Trato personalizado según tu cabello y tu estilo.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma al reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 39 13 62 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Santa Rosa (14006). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte', precio: 'A consultar' },
			{ nombre: 'Color', precio: 'A consultar' },
			{ nombre: 'Peinados', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Estética y belleza',
		items: [
			{ nombre: 'Estética', precio: 'A consultar' },
			{ nombre: 'Belleza', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Santa Rosa',
		text: 'Comandante Velázquez 3: Norte-Sierra, Córdoba.',
	},
	{
		icon: 'ri-heart-line',
		title: 'Trato personal',
		text: 'Tratamiento personalizado y asesoramiento en todo.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 39 13 62 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun–vie partido',
		text: '9:30–13:30 y 17:30–19:30; sábados 9:00–13:30.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Tarjetas de crédito y débito, además de pago con móvil NFC.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tamaya salón de belleza?',
		a: 'En C. Comandante Velázquez 3 (Santa Rosa, Norte-Sierra, 14006 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 39 13 62 o por WhatsApp. Se recomienda pedir cita antes de ir.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y estética con tratamiento personalizado. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'Esta web no fija importes porque el centro no publica carta propia. El precio se confirma con el centro según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 9:30–13:30 y 17:30–19:30, sábado 9:00–13:30 y domingo cerrado.',
	},
	{
		q: '¿Atienden a niños?',
		a: 'Sí: el local está indicado como adecuado para niños.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-sparkling-2-line', label: 'Estética' },
	{ icon: 'ri-map-pin-line', label: 'Santa Rosa, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 39 13 62' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Tamaya salón de belleza en Santa Rosa (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Tamaya en Comandante Velázquez 3 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Servicios de belleza en Tamaya Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Peluquería Tamaya Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Tamaya en Santa Rosa — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Salón Tamaya (14006 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Tamaya, Norte-Sierra Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Tamaya Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería Tamaya Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957391362',
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
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '17:30',
			closes: '19:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:00',
			closes: '13:30',
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
