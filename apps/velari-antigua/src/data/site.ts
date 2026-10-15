/**
 * Datos de Velari antigua — Calle Amarguillo, 2
 * (Cruz de Humilladero, 29006 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Velari antigua,
 *   36.7097005,-4.4427071, feature 0xd72f7fd57db4b6d:0x663d7451caa9239c
 * - Ficha agregada (Lindavia): Centro de estética, 5,0 (23 reseñas),
 *   C. Amarguillo, 2, 29006 Málaga, tel 624 82 72 83,
 *   lunes 10:00–20:30.
 *
 * Lo que la web NO inventa:
 * - La ficha no publica web propia, carta de servicios ni precios,
 *   así que no se publican. Todo remite a llamar o a la ficha de Google.
 *
 * Nota sobre fotos: las fotos de Google Maps tienen copyright y sus
 * condiciones prohíben reutilizarlas sin permiso. Esta web trae imágenes
 * propias de marcador (SVG en src/assets/fotos/) + las descargadas con
 * node scripts/fetch-maps-photos.mjs velari-antigua si el titular
 * autoriza su uso. Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/velari-antigua-apaisada-01.jpg';
import fotoEstudio from '../assets/fotos/velari-antigua-vertical-03.jpg';
import fotoFacial from '../assets/fotos/velari-antigua-vertical-02.jpg';
import fotoCorporal from '../assets/fotos/velari-antigua-cuadrada-05.jpg';
import fotoGaleria1 from '../assets/fotos/velari-antigua-vertical-06.jpg';
import fotoGaleria2 from '../assets/fotos/velari-antigua-vertical-07.jpg';
import fotoGaleria3 from '../assets/fotos/velari-antigua-vertical-09.jpg';
import fotoGaleria4 from '../assets/fotos/velari-antigua-vista-4-04.jpg';
import logo from '../assets/fotos/velari-antigua-logo.svg';

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
	'https://www.google.com/maps/place/Velari+antigua/@36.7097005,-4.4427071,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7fd57db4b6d:0x663d7451caa9239c!8m2!3d36.7097005!4d-4.4427071!16s%2Fg%2F11wqy4vm3n?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Velari antigua',
	shortName: 'Velari antigua',
	tagline: 'Centro de estética en Cruz de Humilladero, Málaga',
	claim: 'Belleza y estética en Calle Amarguillo',
	summary:
		'Velari antigua es un centro de estética en Calle Amarguillo, 2 (Cruz de Humilladero, 29006 Málaga). Valoración 5,0 en Google. Llama al 624 82 72 83 o consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Amarguillo, 2',
	district: 'Cruz de Humilladero',
	borough: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '624 82 72 83',
	phoneHref: 'tel:+34624827283',
	whatsapp: 'https://wa.me/34624827283?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Velari%20antigua.%20%C2%BFMe%20confirm%C3%A1is%20disponibilidad%3F',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=36.7097005%2C-4.4427071&z=17&output=embed',
	geo: { lat: 36.7097005, lng: -4.4427071 },
	featureId: '0xd72f7fd57db4b6d:0x663d7451caa9239c',
	priceRange: '€€',
	categories: ['Centro de estética', 'Cuidado facial', 'Cuidado corporal', 'Belleza'],
	hours: [
		{ days: 'Lunes', hours: '10:00–20:30' },
		{ days: 'Martes a viernes', hours: 'Consultar ficha de Google Maps' },
		{ days: 'Sábado y domingo', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario verificado solo el lunes (10:00–20:30 según ficha agregada). Confirma el resto de días en la ficha de Google o llamando al 624 82 72 83.',
	siteUrl: 'https://velari-antigua.vercel.app',
	ratingValue: 5,
	reviewCount: 23,
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El estudio', href: '#salon' },
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
		icon: 'ri-sparkling-2-line',
		title: 'Centro de estética',
		text: 'Estudio de belleza y estética en Cruz de Humilladero, Málaga.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'C. Amarguillo, 2',
		text: 'Calle Amarguillo, 2 · 29006 Málaga. En Cruz de Humilladero.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 en Google',
		text: '23 reseñas en Google con la máxima nota. Llama al 624 82 72 83.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Facial y corporal',
		text: 'Áreas habituales: facial, corporal y belleza. Confirma tu servicio por teléfono.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza, hidratación y luminosidad. Confirma protocolo y precio en el 624 82 72 83.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad por teléfono o WhatsApp.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Mirada',
		text: 'Cejas y pestañas. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. Confirma técnica y precio antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita: llama al 624 82 72 83 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Cruz de Humilladero (29006). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Facial y mirada',
		items: [
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Limpieza facial', precio: 'A consultar' },
			{ nombre: 'Cejas / pestañas', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Corporal y belleza',
		items: [
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Cruz de Humilladero',
		text: 'Calle Amarguillo, 2: barrio de Cruz de Humilladero, bien comunicado en Málaga.',
	},
	{
		icon: 'ri-star-fill',
		title: '5,0 con 23 reseñas',
		text: 'Máxima nota en Google según ficha agregada. Trato personalizado.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita directa',
		text: 'Teléfono 624 82 72 83 y WhatsApp para confirmar servicio, precio y hora.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirma antes de empezar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Lunes 10:00–20:30',
		text: 'Horario de lunes verificado. Resto de días, confirma en Google o por teléfono.',
	},
	{
		icon: 'ri-information-line',
		title: 'Información honesta',
		text: 'Si tienes alergias o un caso especial, pregunta al estudio antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Velari antigua?',
		a: 'En Calle Amarguillo, 2 (Cruz de Humilladero, 29006 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'Llamando al 624 82 72 83 o por WhatsApp. También puedes usar el teléfono o el botón de contacto de su ficha pública de Google Maps.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Es un centro de estética: facial, corporal y belleza (mirada incluida). La ficha no publica una carta detallada, así que confirma el servicio y el precio al reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el estudio según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El lunes abre de 10:00 a 20:30 según ficha agregada. Para el resto de días consulta la ficha de Google o llama al 624 82 72 83, porque puede variar en festivos.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas sin permiso del autor. Esta web usa imágenes propias de marcador hasta tener fotos originales del estudio (ver README_IMAGENES.md). Si el titular autoriza, se añaden las de la ficha.',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Centro de estética' },
	{ icon: 'ri-heart-pulse-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Cruz de Humilladero, Málaga' },
	{ icon: 'ri-star-fill', label: '5,0 en Google (23 reseñas)' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Velari antigua en Cruz de Humilladero (Málaga) — foto de su ficha de Google Maps' },
	{ src: IMAGES.fotoInterior, alt: 'Interior de Velari antigua en C. Amarguillo, 2 — foto de Google Maps' },
	{ src: IMAGES.fotoCejas, alt: 'Detalle de Velari antigua (Málaga) — foto de Google Maps' },
	{ src: IMAGES.fotoCalle, alt: 'Velari antigua, centro de estética en Málaga — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria1, alt: 'Velari antigua en Calle Amarguillo — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria2, alt: 'Centro de estética Velari antigua (29006 Málaga) — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria3, alt: 'Velari antigua, Cruz de Humilladero — foto de Google Maps' },
	{ src: IMAGES.fotoGaleria4, alt: 'Velari antigua Málaga — foto de su ficha de Google Maps' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Velari antigua Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34624827283',
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
		ratingValue: BUSINESS.ratingValue,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday'],
			opens: '10:00',
			closes: '20:30',
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
