/**
 * Datos de Luba Belleza & Bienestar — C/ Antonio Chacón, 7, local 11
 * (Carretera de Cádiz, Málaga).
 *
 * Fuentes públicas:
 * - Google Maps (enlace aportado): Luba Belleza & Bienestar, 36.6988386,-4.4481597
 * - Koibox (reserva online): confirma dirección, horario Lun–Vie 10–14 y 16–19,
 *   Sab–Dom cerrado, y profesionales Luis B y Susana López.
 * - Instagram @lubamalaga / Facebook Luba Málaga: reservas 633 055 469,
 *   consultas 951 531 551.
 *
 * La ficha no publica carta de precios ni recuento de reseñas: la web no
 * inventa esos datos y remite al teléfono / reserva online.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoSalon from '../assets/fotos/luba-belleza-bienestar-malaga.svg';
import fotoPeluqueria from '../assets/fotos/luba-peluqueria-consciente-malaga.svg';
import fotoBienestar from '../assets/fotos/luba-bienestar-terapias-malaga.svg';
import fotoColor from '../assets/fotos/luba-color-corte-malaga.svg';
import logo from '../assets/fotos/luba-belleza-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior: fotoPeluqueria,
	fotoCejas: fotoBienestar,
	fotoCalle: fotoColor,
	logo,
};

export const BUSINESS = {
	name: 'Luba Belleza & Bienestar',
	shortName: 'Luba',
	tagline: 'Belleza consciente en Carretera de Cádiz, Málaga',
	claim: 'De la belleza interior a la exterior',
	summary:
		'Luba Belleza & Bienestar es un espacio de peluquería y bienestar en la Calle Antonio Chacón, 7, local 11 (Málaga). Belleza consciente, terapias y comunidad, con reserva online. Lun–Vie 10:00–14:00 y 16:00–19:00. Reservas: 633 055 469.',
	street: 'Calle Antonio Chacón, 7, local 11',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	postalCode: '29004',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '633 055 469',
	phoneHref: 'tel:+34633055469',
	phone2Display: '951 531 551',
	phone2Href: 'tel:+34951531551',
	whatsapp: 'https://wa.me/34633055469?text=Hola%20Luba%2C%20quiero%20pedir%20cita',
	reservas: 'https://reservas.koibox.cloud/luba-peluquerias',
	googleMaps:
		'https://www.google.com/maps/place/Luba+Belleza+%26+Bienestar/@36.6988386,-4.4481597,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7b6271f2621:0x99cbc919b63ac61!8m2!3d36.6988386!4d-4.4481597!16s%2Fg%2F11rhwps82t?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Antonio%20Chac%C3%B3n%2C%207%2C%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.6988386, lng: -4.4481597 },
	priceRange: '€€',
	categories: [
		'Peluquería',
		'Salón de belleza',
		'Bienestar',
		'Terapias',
		'Coloración',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00 – 14:00 · 16:00 – 19:00' },
		{ days: 'Sábado', hours: 'Cerrado' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según la reserva online (Koibox). Confirma disponibilidad al reservar: 633 055 469.',
	siteUrl: 'https://www.sur-digital.com/luba-belleza-bienestar',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El espacio', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/luba-belleza-bienestar/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/luba-belleza-bienestar/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-leaf-line',
		title: 'Belleza consciente',
		text: 'De la belleza interior a la exterior: pelo, terapias y comunidad en un mismo espacio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Cita en Koibox 24/7 o por WhatsApp al 633 055 469.',
	},
	{
		icon: 'ri-time-line',
		title: 'Lun–Vie partido',
		text: '10:00–14:00 y 16:00–19:00. Sábado y domingo cerrado.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Ctra. de Cádiz',
		text: 'C. Antonio Chacón, 7, local 11: fácil acceso y barrio de verdad.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Corte, peinado y cuidado del cabello con enfoque saludable. Reserva online o al 633 055 469.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color',
		text: 'Color y mechas adaptados a tu pelo. Confirma diagnóstico y precio al reservar.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Bienestar',
		text: 'Terapias y procesos personales en un espacio que crece más allá de la peluquería.',
	},
	{
		icon: 'ri-team-line',
		title: 'Comunidad',
		text: 'Encuentros y profesionales que acompañan: Luba es también un lugar de encuentro.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Cuidado personal',
		text: 'Belleza exterior desde el bienestar interior: trato cercano y sin prisas.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva fácil',
		text: 'Elige profesional (Luis B, Susana López) y hora en Koibox, o escribe por WhatsApp.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería y belleza',
		items: [
			{ nombre: 'Corte y peinado', precio: 'A consultar' },
			{ nombre: 'Color y mechas', precio: 'A consultar' },
			{ nombre: 'Tratamientos del cabello', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Bienestar y comunidad',
		items: [
			{ nombre: 'Terapias y acompañamiento', precio: 'A consultar' },
			{ nombre: 'Encuentros y actividades', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-leaf-line',
		title: 'Más que una peluquería',
		text: 'Belleza, terapias y encuentros conviven en el mismo espacio.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online real',
		text: 'Koibox con profesionales y horarios visibles: sin llamadas perdidas.',
	},
	{
		icon: 'ri-team-line',
		title: 'Equipo conocido',
		text: 'Luis B y Susana López: eliges quién te atiende al reservar.',
	},
	{
		icon: 'ri-time-line',
		title: 'Horario claro',
		text: 'Lun–Vie 10–14 y 16–19 publicado: sabes cuándo ir.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Ctra. de Cádiz',
		text: 'Antonio Chacón, 7, local 11: barrio, acceso fácil y ambiente local.',
	},
	{
		icon: 'ri-whatsapp-line',
		title: 'WhatsApp directo',
		text: '633 055 469 para reservas y 951 531 551 para consultas.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Luba Belleza & Bienestar?',
		a: 'En la Calle Antonio Chacón, 7, local 11 (Carretera de Cádiz, Málaga). Abre la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Online en Koibox (elige servicio, profesional y hora) o por WhatsApp al 633 055 469. Para consultas llama al 951 531 551 en horario de apertura.',
	},
	{
		q: '¿Qué hacen además de peluquería?',
		a: 'Es un espacio de belleza y bienestar: peluquería, terapias, procesos personales y encuentros. Pregunta por las actividades actuales al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta de precios, así que esta web no inventa importes. El precio se confirma al reservar online o por WhatsApp.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes de 10:00 a 14:00 y de 16:00 a 19:00. Sábado y domingo cerrado, según su reserva online.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Reservas por WhatsApp al 633 055 469 y consultas al 951 531 551.',
	},
];

export const FEATURES = [
	{ icon: 'ri-leaf-line', label: 'Belleza y bienestar' },
	{ icon: 'ri-scissors-line', label: 'Peluquería consciente' },
	{ icon: 'ri-calendar-check-line', label: 'Reserva online en Koibox' },
	{ icon: 'ri-time-line', label: 'Lun–Vie 10–14 y 16–19' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Espacio Luba Belleza y Bienestar en Málaga',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Peluquería consciente en Luba, Carretera de Cádiz',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Bienestar y terapias en Luba Belleza',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Color y corte en Luba Belleza & Bienestar',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Luba Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 633 05 54 69',
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
		name: 'Servicios de Luba Belleza & Bienestar',
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
			closes: '14:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '16:00',
			closes: '19:00',
		},
	],
};
