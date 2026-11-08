/**
 * Datos de Yves Rocher - Cruz Conde — C. Cruz Conde 18
 * (Centro, 14003 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Yves Rocher - Cruz Conde,
 *   37.8868787,-4.7805326, feature 0xd6cdf635b682fd1:0xff875516466cfff2
 * - Cylex (actualizado 8-jun-2026): C/ Cruz Conde, 18, 14003 Córdoba,
 *   Centro; tel 957 47 03 29; tienda de cosmética vegetal y centro de
 *   estética; lun–vie 10:00–13:30 y 17:30–20:30, sáb 10:00–13:30,
 *   dom cerrado; pago en efectivo, Visa, MasterCard y PayPal.
 * - Web oficial: yves-rocher.es (tienda Córdoba Cruz Conde con
 *   tratamientos de belleza y reserva de cita online).
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios propia publicada: no se publican importes fijos.
 * - Sin aggregateRating: se enlaza la ficha y la web oficial.
 */

import fotoPortada from '../assets/fotos/yves-rocher-cruz-conde-apaisada-01.jpg';
import fotoEstudio from '../assets/fotos/yves-rocher-cruz-conde-apaisada-02.jpg';
import fotoFacial from '../assets/fotos/yves-rocher-cruz-conde-vertical-03.jpg';
import fotoCorporal from '../assets/fotos/yves-rocher-cruz-conde-vertical-04.jpg';
import fotoGaleria1 from '../assets/fotos/yves-rocher-cruz-conde-vertical-05.jpg';
import fotoGaleria2 from '../assets/fotos/yves-rocher-cruz-conde-vertical-06.jpg';
import fotoGaleria3 from '../assets/fotos/yves-rocher-cruz-conde-apaisada-07.jpg';
import fotoGaleria4 from '../assets/fotos/yves-rocher-cruz-conde-vertical-08.jpg';
import logo from '../assets/fotos/yves-rocher-cruz-conde-logo.svg';

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
	'https://www.google.com/maps/place/Yves+Rocher+-+Cruz+Conde/@37.8868787,-4.7805326,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf635b682fd1:0xff875516466cfff2!8m2!3d37.8868787!4d-4.7805326!16s%2Fg%2F1tdvfxx9?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Yves Rocher - Cruz Conde',
	shortName: 'Yves Rocher',
	tagline: 'Cosmética vegetal y estética en el Centro, Córdoba',
	claim: 'Tu tienda y centro de estética en Cruz Conde',
	summary:
		'Yves Rocher - Cruz Conde es la tienda y centro de estética de cosmética vegetal en C. Cruz Conde 18 (Centro, 14003 Córdoba): tratamientos faciales, maquillaje y perfumería. Llama al 957 47 03 29 o reserva en yves-rocher.es.',
	street: 'C. Cruz Conde 18',
	district: 'Centro',
	borough: 'Distrito Centro',
	city: 'Córdoba',
	postalCode: '14003',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 47 03 29',
	phoneHref: 'tel:+34957470329',
	whatsapp: 'https://wa.me/34957470329?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Yves%20Rocher%20Cruz%20Conde.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	website: 'https://www.yves-rocher.es/',
	reserva: 'https://www.yves-rocher.es/reserva-tu-cita',
	tienda: 'https://www.yves-rocher.es/encuentra-tu-tienda/cordoba-cruz-conde/S-ESYROC227',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8868787%2C-4.7805326&z=17&output=embed',
	geo: { lat: 37.8868787, lng: -4.7805326 },
	featureId: '0xd6cdf635b682fd1:0xff875516466cfff2',
	priceRange: '€€',
	categories: ['Cosmética vegetal', 'Estética', 'Maquillaje', 'Perfumería'],
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00–13:30 y 17:30–20:30' },
		{ days: 'Sábado', hours: '10:00–13:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario actualizado en junio de 2026 (Cylex). Confirma en la ficha de Google o llamando al 957 47 03 29, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/yves-rocher-cruz-conde',
};

export const LEGAL = {
	razonSocial: 'Yves Rocher - Cruz Conde',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La tienda', href: '#salon' },
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
		icon: 'ri-leaf-line',
		title: 'Cosmética vegetal',
		text: 'La marca de cosmética vegetal, con tratamientos de belleza.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Cruz Conde 18',
		text: 'C. Cruz Conde 18 · 14003 Córdoba, Centro.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 47 03 29',
		text: 'Cita por teléfono o reserva online.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva online',
		text: 'Reserva tu tratamiento en yves-rocher.es.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Tratamientos faciales',
		text: 'Tratamientos de cosmética vegetal. Reserva en el 957 47 03 29.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Maquillaje',
		text: 'Maquillaje: fondos, labiales, coloretes y más.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Cuidado corporal',
		text: 'Hidratantes, reductores y cuidado de piernas y pies.',
	},
	{
		icon: 'ri-drop-line',
		title: 'Perfumería',
		text: 'Perfumes de mujer y hombre, fragancias.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Llama al 957 47 03 29 o reserva online.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En el Centro (14003). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Estética',
		items: [
			{ nombre: 'Tratamientos faciales', precio: 'A consultar' },
			{ nombre: 'Tratamientos hidratantes', precio: 'A consultar' },
			{ nombre: 'Peeling y mascarillas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Tienda',
		items: [
			{ nombre: 'Maquillaje', precio: 'A consultar' },
			{ nombre: 'Perfumería', precio: 'A consultar' },
			{ nombre: 'Cuidado corporal', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Cruz Conde',
		text: 'Cruz Conde 18: Centro, Córdoba.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Cosmética vegetal',
		text: 'Productos de origen vegetal y natural.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 47 03 29 y reserva online para confirmar servicio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa propia no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun–vie partido',
		text: '10:00–13:30 y 17:30–20:30; sábados 10:00–13:30.',
	},
	{
		icon: 'ri-bank-card-line',
		title: 'Pago flexible',
		text: 'Efectivo, Visa, MasterCard y PayPal.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Yves Rocher - Cruz Conde?',
		a: 'En C. Cruz Conde 18 (Centro, 14003 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 47 03 29 o con la reserva online de yves-rocher.es.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Tienda de cosmética vegetal y centro de estética: tratamientos faciales, maquillaje, cuidado corporal y perfumería.',
	},
	{
		q: '¿Cuánto cuestan los tratamientos?',
		a: 'Esta web no fija importes. Consulta precios y promociones en yves-rocher.es o en tienda.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 10:00–13:30 y 17:30–20:30, sábado 10:00–13:30 y domingo cerrado.',
	},
	{
		q: '¿Cómo puedo pagar?',
		a: 'En efectivo, con Visa o MasterCard, y con PayPal.',
	},
];

export const FEATURES = [
	{ icon: 'ri-leaf-line', label: 'Cosmética vegetal' },
	{ icon: 'ri-sparkling-2-line', label: 'Estética' },
	{ icon: 'ri-map-pin-line', label: 'Centro, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 47 03 29' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Yves Rocher - Cruz Conde en el Centro (Córdoba) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Yves Rocher en Cruz Conde 18 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Cosmética y estética en Yves Rocher Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Tienda Yves Rocher Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Yves Rocher en el Centro — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Yves Rocher (14003 Córdoba) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Yves Rocher, Centro Córdoba — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Yves Rocher Córdoba — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Yves Rocher Córdoba Cruz Conde',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957470329',
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
	sameAs: [BUSINESS.website, BUSINESS.reserva, BUSINESS.tienda],
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
			opens: '17:30',
			closes: '20:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
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
				provider: { '@type': 'BeautySalon', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
