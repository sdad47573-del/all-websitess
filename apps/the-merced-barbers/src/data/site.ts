/**
 * Datos de The Merced Barber's — Calle San Juan de Letrán, 2, Local 36
 * (Plaza de la Merced, Distrito Centro, 29012 Málaga).
 *
 * Fuentes públicas (octubre 2026):
 * - Enlace de Google Maps aportado: The merced barber's,
 *   36.7238737,-4.417914, feature 0xd72f79036ca3007:0x4e1bab3a671b078b
 * - TikTok @themercedbarbers: C/ San Juan de Letrán N2, Plaza de la Merced,
 *   Málaga, 642 72 82 55
 * - Instagram @themercedbarbers: barbería en Plaza de la Merced
 * - Bizoo: Calle San Juan de Letrán, 2, Local 36, 29012 Málaga;
 *   +34 642 72 82 55; L-S 10:00–20:00, D cerrado; valoración 4,9;
 *   cita por teléfono, WhatsApp u online; se habla ruso e inglés
 *
 * La ficha no publica carta de precios, así que no se inventan importes:
 * todo remite a llamar o escribir por WhatsApp.
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/the-merced-barbers-malaga.svg';
import fotoCentro from '../assets/fotos/the-merced-barbers-merced.svg';
import fotoCorte from '../assets/fotos/the-merced-barbers-corte.svg';
import fotoBarba from '../assets/fotos/the-merced-barbers-barba.svg';
import logo from '../assets/fotos/the-merced-barbers-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoCorte,
	fotoCalle: fotoBarba,
	logo,
};

export const BUSINESS = {
	name: "The Merced Barber's",
	shortName: 'The Merced',
	tagline: 'Barbería en La Merced, Málaga',
	claim: 'Tu barbería en Plaza de la Merced',
	summary:
		"The Merced Barber's es una barbería junto a Plaza de la Merced (Calle San Juan de Letrán, 2, Local 36, 29012 Málaga). Corte de caballero, arreglo de barba, afeitado clásico a navaja y corte infantil. Cita por teléfono o WhatsApp.",
	street: 'Calle San Juan de Letrán, 2, Local 36',
	district: 'La Merced',
	borough: 'Centro',
	city: 'Málaga',
	postalCode: '29012',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '642 72 82 55',
	phoneHref: 'tel:+34642728255',
	whatsapp: 'https://wa.me/34642728255',
	instagram: 'https://www.instagram.com/themercedbarbers/',
	tiktok: 'https://www.tiktok.com/@themercedbarbers',
	googleMaps:
		'https://www.google.com/maps/place/The+merced+barber%E2%80%99s/@36.7238737,-4.417914,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f79036ca3007:0x4e1bab3a671b078b!8m2!3d36.7238737!4d-4.417914!16s%2Fg%2F11nc8kshfy?authuser=0&hl=es&entry=ttu',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20San%20Juan%20de%20Letr%C3%A1n%2C%202%2C%2029012%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7238737, lng: -4.417914 },
	featureId: '0xd72f79036ca3007:0x4e1bab3a671b078b',
	priceRange: '€€',
	ratingBizoo: '4,9',
	categories: [
		'Barbería',
		'Corte de pelo',
		'Arreglo de barba',
		'Afeitado clásico',
	],
	hours: [
		{ days: 'Lunes – Sábado', hours: '10:00–20:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario publicado en el directorio Bizoo (octubre 2026): L-S 10:00–20:00, domingo cerrado. Confirma por teléfono o WhatsApp antes de ir, puede variar en festivos.',
	siteUrl: 'https://the-merced-barbers.vercel.app',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La barbería', href: '#salon' },
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
		icon: 'ri-scissors-line',
		title: 'Barbería en La Merced',
		text: 'Corte, barba y afeitado clásico junto a Plaza de la Merced.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,9 de valoración',
		text: 'Valoración de 4,9 publicada en el directorio Bizoo.',
	},
	{
		icon: 'ri-whatsapp-line',
		title: 'Cita por WhatsApp',
		text: 'Reserva por teléfono o WhatsApp en el 642 72 82 55.',
	},
	{
		icon: 'ri-translate-2',
		title: 'Ruso e inglés',
		text: 'Atención también en ruso e inglés, ideal en el centro.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Corte caballero',
		text: 'Corte de caballero de cualquier complejidad. Precio a consultar.',
	},
	{
		icon: 'ri-user-smile-line',
		title: 'Arreglo de barba',
		text: 'Recorte, forma y perfilado de barba y bigote. Precio a consultar.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Afeitado clásico',
		text: 'Afeitado a navaja, el ritual clásico de barbería. Precio a consultar.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Estilo y acabado',
		text: 'Peinado, styling y camuflaje de canas. Precio a consultar.',
	},
	{
		icon: 'ri-bear-smile-line',
		title: 'Corte infantil',
		text: 'Corte para los más pequeños, con paciencia. Precio a consultar.',
	},
	{
		icon: 'ri-whatsapp-line',
		title: 'Cita por WhatsApp',
		text: 'Escríbenos al 642 72 82 55 y te confirman servicio, precio y hora.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Barbería',
		items: [
			{ nombre: 'Corte caballero', precio: 'A consultar' },
			{ nombre: 'Arreglo de barba', precio: 'A consultar' },
			{ nombre: 'Afeitado clásico a navaja', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Estilo',
		items: [
			{ nombre: 'Perfilado de bigote', precio: 'A consultar' },
			{ nombre: 'Peinado y styling', precio: 'A consultar' },
			{ nombre: 'Camuflaje de canas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Familia',
		items: [
			{ nombre: 'Corte infantil', precio: 'A consultar' },
			{ nombre: 'Corte + barba', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En pleno centro',
		text: 'Junto a Plaza de la Merced: San Juan de Letrán, 2, Local 36.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Material estéril',
		text: 'Herramientas esterilizadas y atención al detalle.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,9 de valoración',
		text: 'Los clientes destacan rapidez, precisión y trato.',
	},
	{
		icon: 'ri-whatsapp-line',
		title: 'Reserva directa',
		text: 'Teléfono y WhatsApp 642 72 82 55, sin intermediarios.',
	},
	{
		icon: 'ri-translate-2',
		title: 'Ruso e inglés',
		text: 'Perfecto si prefieres comunicarte en otro idioma.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Precio claro',
		text: 'Sin carta publicada no se inventan importes: se confirma antes.',
	},
];

export const FAQ = [
	{
		q: "¿Dónde está The Merced Barber's?",
		a: 'En Calle San Juan de Letrán, 2, Local 36, junto a Plaza de la Merced (Distrito Centro, 29012 Málaga). Usa el botón “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Por teléfono o WhatsApp en el 642 72 82 55, o desde la ficha de Google Maps. Se recomienda reservar para no esperar.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Corte de caballero, arreglo y perfilado de barba y bigote, afeitado clásico a navaja, peinado y styling, camuflaje de canas y corte infantil.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta de precios, y esta web no inventa importes. Escríbeles por WhatsApp al 642 72 82 55 y te confirman el precio antes de empezar.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El horario publicado es de lunes a sábado 10:00–20:00 y domingo cerrado. Confirma por teléfono o WhatsApp, puede variar en festivos.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Barbería' },
	{ icon: 'ri-sparkling-line', label: 'Afeitado a navaja' },
	{ icon: 'ri-map-pin-line', label: 'La Merced, Málaga' },
	{ icon: 'ri-whatsapp-line', label: 'Cita por WhatsApp' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: "The Merced Barber's en Málaga",
	},
	{
		src: IMAGES.fotoInterior,
		alt: "The Merced Barber's en Plaza de la Merced, Málaga",
	},
	{
		src: IMAGES.fotoCejas,
		alt: "Corte de caballero en The Merced Barber's (Málaga)",
	},
	{
		src: IMAGES.fotoCalle,
		alt: "Arreglo de barba en The Merced Barber's",
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BarberShop',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'The Merced La Merced Málaga',
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
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: "Servicios de The Merced Barber's",
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
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '10:00',
			closes: '20:00',
		},
	],
};
