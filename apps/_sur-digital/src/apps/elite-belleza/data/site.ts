/**
 * Datos de Élite Belleza — C. Pintor Cuenca Muñoz
 * (Centro, 14008 Córdoba).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Élite Belleza,
 *   37.8858992,-4.783931, feature 0xd6cdf8ea4114187:0x29ceae430d79d0e4
 * - Mispelus (datos verificados 09/09/2026 de fuentes públicas):
 *   C. Pintor Cuenca Muñoz, Centro, 14008 Córdoba,
 *   tel +34957391801; horario lun–vie 9:00-20:00,
 *   sáb 9:00-14:00, dom cerrado; peluquería.
 * - Registro mercantil: ELITE BELLEZA 2049 SL — salón de peluquería
 *   y estética (manicura, pedicura, facial, corporal).
 *
 * Lo que la web NO inventa:
 * - Sin carta de precios publicada, no se publican importes.
 * - Sin recuento de reseñas consolidado, no se publica aggregateRating
 *   (la muestra agregada es pequeña y dispar).
 * - Fotografías: la ficha de Google de este salón no publica fotos, así que la
 *   web usa imágenes de ambiente de Pexels (no son del local). Ids: 10318038
 *   (salón), 28743778 (facial), 10318040 (rizador), 10028673 (secado),
 *   28994396 (corte), 10182680 (manicura), 12115040 (mascarilla),
 *   2301842 (recogido) y 28994563 (espejo).
 */

import fotoSalon from '../assets/fotos/elite-belleza-salon.jpg';
import fotoInterior from '../assets/fotos/elite-belleza-interior.jpg';
import fotoFacial from '../assets/fotos/elite-belleza-facial.jpg';
import fotoManicura from '../assets/fotos/elite-belleza-manicura.jpg';
import fotoPeinado from '../assets/fotos/elite-belleza-peinado.jpg';
import fotoCorte from '../assets/fotos/elite-belleza-corte.jpg';
import fotoTratamiento from '../assets/fotos/elite-belleza-tratamiento.jpg';
import fotoNovia from '../assets/fotos/elite-belleza-novia.jpg';
import fotoEspejo from '../assets/fotos/elite-belleza-espejo.jpg';
import logo from '../assets/fotos/elite-belleza-logo.svg';

export const IMAGES = {
	fotoFachada: fotoSalon,
	fotoInterior,
	fotoCejas: fotoFacial,
	fotoManicura,
	fotoPeinado,
	fotoCorte,
	fotoTratamiento,
	fotoNovia,
	fotoEspejo,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/%C3%89lite+Belleza/@37.8858992,-4.783931,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf8ea4114187:0x29ceae430d79d0e4!8m2!3d37.8858992!4d-4.783931!16s%2Fg%2F11xcqk_x7q?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMi4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Élite Belleza',
	shortName: 'Élite',
	tagline: 'Peluquería y estética en el Centro, Córdoba',
	claim: 'Tu peluquería de confianza en el Centro',
	summary:
		'Élite Belleza es una peluquería y salón de estética en C. Pintor Cuenca Muñoz (Centro, 14008 Córdoba): peluquería, manicura, pedicura y tratamientos faciales y corporales. Llama al 957 39 18 01 o consulta su ficha de Google Maps para cita y servicios actuales.',
	street: 'C. Pintor Cuenca Muñoz',
	district: 'Centro',
	borough: 'Distrito Centro',
	city: 'Córdoba',
	postalCode: '14008',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '957 39 18 01',
	phoneHref: 'tel:+34957391801',
	whatsapp: 'https://wa.me/34957391801?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20%C3%89lite.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=37.8858992%2C-4.783931&z=17&output=embed',
	geo: { lat: 37.8858992, lng: -4.783931 },
	featureId: '0xd6cdf8ea4114187:0x29ceae430d79d0e4',
	priceRange: '€€',
	categories: ['Peluquería', 'Manicura', 'Pedicura', 'Estética'],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:00–20:00' },
		{ days: 'Sábado', hours: '9:00–14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según ficha agregada (verificada 09/09/2026). Confirma en la ficha de Google o llamando al 957 39 18 01, porque puede variar en festivos.',
	siteUrl: 'https://www.sur-digital.com/elite-belleza',
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
	{ label: 'Servicios', href: '/elite-belleza/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/elite-belleza/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería en el Centro',
		text: 'Peluquería y estética en Pintor Cuenca Muñoz.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Cuenca Muñoz',
		text: 'C. Pintor Cuenca Muñoz · 14008 Córdoba.',
	},
	{
		icon: 'ri-phone-line',
		title: '957 39 18 01',
		text: 'Cita por teléfono o WhatsApp. Domingos cerrado.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura y facial',
		text: 'Manicura, pedicura y tratamientos faciales y corporales.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería',
		text: 'Corte, peinado e hidratación. Confirma servicio y precio en el 957 39 18 01.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Manicura',
		text: 'Manicura cuidada al detalle. Pregunta antes de reservar.',
	},
	{
		icon: 'ri-footprint-line',
		title: 'Pedicura',
		text: 'Pedicura completa. Consulta disponibilidad.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial y corporal',
		text: 'Tratamientos faciales y corporales. Confirma protocolo.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se recomienda pedir cita: llama al 957 39 18 01 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En el Centro (14008). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Peluquería',
		items: [
			{ nombre: 'Corte y peinado', precio: 'A consultar' },
			{ nombre: 'Hidratación', precio: 'A consultar' },
			{ nombre: 'Color', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Uñas y estética',
		items: [
			{ nombre: 'Manicura', precio: 'A consultar' },
			{ nombre: 'Pedicura', precio: 'A consultar' },
			{ nombre: 'Facial / corporal', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Centro',
		text: 'Pintor Cuenca Muñoz: pleno centro de Córdoba.',
	},
	{
		icon: 'ri-scissors-2-line',
		title: 'Peluquería y estética',
		text: 'Salón completo: pelo, uñas y tratamientos.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 957 39 18 01 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin tarifa publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lun–vie 9:00–20:00',
		text: 'Sábados 9:00–14:00. Domingo cerrado.',
	},
	{
		icon: 'ri-wheelchair-line',
		title: 'Acceso adaptado',
		text: 'Local con acceso para sillas de ruedas, según ficha.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Élite Belleza?',
		a: 'En C. Pintor Cuenca Muñoz (Centro, 14008 Córdoba). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 957 39 18 01 o por WhatsApp. Se recomienda pedir cita. También puedes usar el teléfono de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Peluquería y estética: corte y peinado, manicura, pedicura y tratamientos faciales y corporales. Confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Lunes a viernes 9:00–20:00, sábado 9:00–14:00 y domingo cerrado, según ficha agregada. Confirma festivos por teléfono.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Según la ficha, dispone de acceso para sillas de ruedas.',
	},
];

export const FEATURES = [
	{ icon: 'ri-scissors-2-line', label: 'Peluquería' },
	{ icon: 'ri-hand-heart-line', label: 'Manicura y pedicura' },
	{ icon: 'ri-map-pin-line', label: 'Centro, Córdoba' },
	{ icon: 'ri-phone-line', label: '957 39 18 01' },
];

export const GALLERY = [
	{ src: IMAGES.fotoPeinado, alt: 'Estilista secando y peinando el pelo con secador y cepillo redondo' },
	{ src: IMAGES.fotoCorte, alt: 'Peluquera cortando las puntas de una clienta con tijeras y peine' },
	{ src: IMAGES.fotoManicura, alt: 'Manicura en tono nude con las manos sobre una mesa blanca' },
	{ src: IMAGES.fotoTratamiento, alt: 'Esteticista aplicando una mascarilla facial a una clienta' },
	{ src: IMAGES.fotoNovia, alt: 'Recogido de novia con flores y perlas' },
	{ src: IMAGES.fotoEspejo, alt: 'Clienta cepillándose el pelo frente a un espejo de mano' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'HairSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Élite Córdoba',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34957391801',
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
			opens: '09:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '09:00',
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
