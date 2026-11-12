/**
 * Datos de Centro de Belleza. Medicina & Estética MD — Calle Juan de Jaso, 3
 * (Ciudad Santa Inés, Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Centro de Belleza. Medicina & Estética MD.,
 *   36.7236611,-4.4690269, feature 0xd72f739c3331ed5:0xe21f98a3b072cc40
 * - Reverse-geocode OSM (Nominatim): Calle Juan de Jaso 3, Ciudad Santa Inés,
 *   Teatinos-Universidad, Málaga 29010.
 *
 * Lo que la web NO inventa:
 * - La ficha no aporta teléfono, horario, web propia, carta de servicios,
 *   precios ni recuento de reseñas verificable desde fuera, así que no se
 *   publican. Todo remite a "consultar la ficha de Google Maps".
 *
 * Nota sobre fotos: las imágenes de esta web proceden del perfil público del
 * centro en Google Maps (edificio, cabina, trabajos de manicura y resultado
 * labial). Se muestran como referencia y el titular puede pedir su retirada.
 */

import fotoPortada from '../assets/fotos/centro-medicina-estetica-md-vertical-04.jpg';
import fotoInterior from '../assets/fotos/centro-medicina-estetica-md-vertical-01.jpg';
import fotoManicura from '../assets/fotos/centro-medicina-estetica-md-vista-5-05.jpg';
import fotoLabios from '../assets/fotos/centro-medicina-estetica-md-vertical-07.jpg';
import fotoPedicura from '../assets/fotos/centro-medicina-estetica-md-apaisada-03.jpg';
import logo from '../assets/fotos/medicina-estetica-md-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior,
	fotoManicura,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Centro+de+Belleza.+Medicina+%26+Est%C3%A9tica+MD./@36.7236611,-4.4690269,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f739c3331ed5:0xe21f98a3b072cc40!8m2!3d36.7236611!4d-4.4690269!16s%2Fg%2F11ddwspt7x?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Centro de Belleza. Medicina & Estética MD',
	shortName: 'Medicina & Estética MD',
	tagline: 'Medicina estética en Teatinos, Málaga',
	claim: 'Belleza, medicina y estética en Teatinos',
	summary:
		'Centro de Belleza. Medicina & Estética MD es un centro de belleza y medicina estética en Calle Juan de Jaso, 3 (Ciudad Santa Inés, Teatinos-Universidad, 29010 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Juan de Jaso, 3',
	district: 'Ciudad Santa Inés',
	borough: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	// Sin teléfono verificado fuera de la ficha: se enlaza a Maps en vez de inventar uno.
	phoneDisplay: 'Ver ficha de Google',
	phoneHref: GOOGLE_MAPS,
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Juan%20de%20Jaso%2C%203%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7236611, lng: -4.4690269 },
	featureId: '0xd72f739c3331ed5:0xe21f98a3b072cc40',
	priceRange: '€€',
	categories: [
		'Medicina estética',
		'Centro de belleza',
		'Cuidado facial',
		'Cuidado corporal',
	],
	hours: [
		{ days: 'Horario', hours: 'Consultar ficha de Google Maps' },
	],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del centro para ver apertura actual y festivos.',
	siteUrl: 'https://www.sur-digital.com/centro-medicina-estetica-md',
};

export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El centro', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Servicios', href: '/centro-medicina-estetica-md/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/centro-medicina-estetica-md/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-heart-pulse-line',
		title: 'Medicina estética',
		text: 'Centro de belleza y medicina estética en Teatinos, Málaga.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Juan de Jaso, 3',
		text: 'Calle Juan de Jaso, 3 · 29010 Málaga. En Ciudad Santa Inés, Teatinos.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial y corporal',
		text: 'Áreas habituales: facial, corporal y bienestar. Confirma tu caso en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-heart-pulse-line',
		title: 'Medicina estética',
		text: 'Valoración y tratamientos médico-estéticos. Pide información y precio en la ficha de Google del centro.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Cuidado facial: limpieza, hidratación y luminosidad. Confirma protocolo disponible antes de ir.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad y contraindicaciones en la ficha.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Belleza',
		text: 'Servicios de belleza complementarios. La ficha no publica carta: pregunta antes de reservar.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita',
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Teatinos-Universidad (29010). Abre “Cómo llegar” para navegar con Google Maps.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'Medicina y estética',
		items: [
			{ nombre: 'Valoración médico-estética', precio: 'A consultar' },
			{ nombre: 'Tratamiento facial', precio: 'A consultar' },
			{ nombre: 'Tratamiento corporal', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Belleza y bienestar',
		items: [
			{ nombre: 'Cuidado de la piel', precio: 'A consultar' },
			{ nombre: 'Bienestar', precio: 'A consultar' },
			{ nombre: 'Diagnóstico personalizado', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En Teatinos',
		text: 'Juan de Jaso, 3: barrio de Ciudad Santa Inés, bien comunicado y con vida de barrio.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Enfoque médico',
		text: 'El nombre anuncia medicina y estética: valoración con criterio sanitario.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha verificable',
		text: 'Todo lo operativo (horario, teléfono, cita) enlaza a su ficha pública de Google.',
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
		text: 'Esta web no sustituye consejo médico: pregunta siempre al centro por tu caso.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Medicina & Estética MD?',
		a: 'En Calle Juan de Jaso, 3 (Ciudad Santa Inés, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El centro no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre, medicina estética, facial, corporal y belleza. La ficha no publica una carta detallada, así que confirma el tratamiento, la indicación para tu caso y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el centro según valoración.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha del centro para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Las fotos que aparecen son del centro?',
		a: 'Sí: son fotos del perfil público del centro en Google Maps (edificio, cabina de tratamiento y trabajos realizados). Se muestran como referencia; si eres el titular y prefieres retirarlas, escríbenos y las quitamos.',
	},
];

export const FEATURES = [
	{ icon: 'ri-heart-pulse-line', label: 'Medicina estética' },
	{ icon: 'ri-sparkling-2-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: fotoInterior,
		alt: 'Cabina de tratamiento del centro Medicina & Estética MD en Teatinos',
		caption: 'Cabina de tratamiento.',
	},
	{
		src: fotoManicura,
		alt: 'Manicura en rojo con decoración realizada en Medicina & Estética MD',
		caption: 'Manicura con decoración.',
	},
	{
		src: fotoLabios,
		alt: 'Antes y después de un tratamiento labial en Medicina & Estética MD',
		caption: 'Antes y después de un tratamiento labial.',
	},
	{
		src: fotoPedicura,
		alt: 'Pedicura realizada en el centro Medicina & Estética MD',
		caption: 'Pedicura.',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'MedicalClinic',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Medicina & Estética MD Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	knowsAbout: BUSINESS.categories,
	medicalSpecialty: 'Dermatology',
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
		name: `Servicios de ${BUSINESS.shortName}`,
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'MedicalClinic', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [],
};
