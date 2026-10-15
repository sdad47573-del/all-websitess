/**
 * Datos de Vanity Belleza — Calle Doctor Miguel Díaz Recio, 38
 * (Las Morillas, Teatinos-Universidad, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Vanity Belleza,
 *   36.7206166,-4.4646459, feature 0xd72f7fa9c1db629:0xb2c9e1d5c4524840
 * - Reverse-geocode OSM (Nominatim): Calle Doctor Miguel Díaz Recio 38,
 *   Las Morillas, Teatinos-Universidad, Málaga 29010.
 *
 * Lo que la web NO inventa:
 * - La ficha no aporta teléfono, horario, web propia, carta de servicios,
 *   precios ni recuento de reseñas verificable desde fuera, así que no se
 *   publican. Todo remite a "consultar la ficha de Google Maps".
 *
 * Nota sobre fotos: Google Maps no permite descargar y reutilizar las fotos de
 * la ficha (copyright + condiciones de Google). Esta web trae imágenes propias
 * de marcador (SVG en src/assets/fotos/). Ver README_IMAGENES.md.
 */

import fotoPortada from '../assets/fotos/vanity-belleza-malaga.svg';
import fotoSalon from '../assets/fotos/vanity-belleza-salon.svg';
import fotoFacial from '../assets/fotos/vanity-belleza-facial.svg';
import fotoCorporal from '../assets/fotos/vanity-belleza-corporal.svg';
import logo from '../assets/fotos/vanity-belleza-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoSalon,
	fotoCejas: fotoFacial,
	fotoCalle: fotoCorporal,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Vanity+Belleza/@36.7206166,-4.4646459,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7fa9c1db629:0xb2c9e1d5c4524840!8m2!3d36.7206166!4d-4.4646459!16s%2Fg%2F11sg31rs1m?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMS4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Vanity Belleza',
	shortName: 'Vanity',
	tagline: 'Salón de belleza en Teatinos, Málaga',
	claim: 'Belleza y cuidado en Las Morillas',
	summary:
		'Vanity Belleza es un salón de belleza en Calle Doctor Miguel Díaz Recio, 38 (Las Morillas, Teatinos-Universidad, 29010 Málaga). Consulta su ficha de Google Maps para horario, cita y servicios actuales.',
	street: 'Calle Doctor Miguel Díaz Recio, 38',
	district: 'Las Morillas',
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
		'https://maps.google.com/maps?q=Calle%20Doctor%20Miguel%20D%C3%ADaz%20Recio%2C%2038%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7206166, lng: -4.4646459 },
	featureId: '0xd72f7fa9c1db629:0xb2c9e1d5c4524840',
	priceRange: '€€',
	categories: ['Salón de belleza', 'Cuidado facial', 'Cuidado corporal', 'Belleza'],
	hours: [{ days: 'Horario', hours: 'Consultar ficha de Google Maps' }],
	hoursNote:
		'Horario sin verificar fuera de Google Maps: abre la ficha del salón para ver apertura actual y festivos.',
	siteUrl: 'https://vanity-belleza.vercel.app',
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
	{ label: 'Servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Salón de belleza',
		text: 'Salón de belleza en Las Morillas, Teatinos.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Díaz Recio, 38',
		text: 'Calle Doctor Miguel Díaz Recio, 38 · 29010 Málaga. En Las Morillas.',
	},
	{
		icon: 'ri-google-fill',
		title: 'Ficha de Google',
		text: 'Horario, cita y contacto actualizados en su ficha pública de Google Maps.',
	},
	{
		icon: 'ri-heart-pulse-line',
		title: 'Facial y corporal',
		text: 'Áreas habituales: facial, corporal y belleza. Confirma tu servicio en la ficha.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-sparkling-2-line',
		title: 'Facial',
		text: 'Limpieza, hidratación y luminosidad. Confirma protocolo y precio en la ficha de Google.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Corporal',
		text: 'Tratamientos corporales y bienestar. Consulta disponibilidad en la ficha.',
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
		text: 'Se atiende con cita. El canal de reserva es el que indique la ficha de Google Maps.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'Primera visita',
		text: 'En Las Morillas (29010). Abre “Cómo llegar” para navegar con Google Maps.',
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
		title: 'En Las Morillas',
		text: 'Díaz Recio, 38: barrio de Las Morillas, Teatinos, con vida de barrio.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Trato personalizado',
		text: 'Salón de belleza cercano: diagnóstico previo y asesoramiento según tu piel.',
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
		text: 'Si tienes alergias o un caso especial, pregunta al salón antes de reservar.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Vanity Belleza?',
		a: 'En Calle Doctor Miguel Díaz Recio, 38 (Las Morillas, Teatinos-Universidad, 29010 Málaga). Abre la ubicación exacta en Google Maps desde el botón “Cómo llegar” de esta página.',
	},
	{
		q: '¿Cómo pido cita?',
		a: 'El salón no publica web propia ni teléfono verificado fuera de Google Maps, así que la vía fiable es su ficha pública de Google: abre “Ver ficha de Google” y usa el teléfono o el botón de contacto que indique allí.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Por el nombre y el tipo de negocio, belleza facial, corporal y cuidado de la piel (mirada incluida). La ficha no publica una carta detallada, así que confirma el servicio y el precio antes de reservar.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican tarifa, y esta web no inventa importes. El precio se confirma con el salón según servicio.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Sin horario verificado fuera de Google Maps. Consulta la ficha para ver apertura actual, festivos y cambios.',
	},
	{
		q: '¿Por qué esta web no muestra fotos del local?',
		a: 'Las fotos de Google Maps tienen derechos de autor y sus condiciones prohíben descargarlas para reutilizarlas. Esta web usa imágenes propias de marcador hasta tener fotos originales del salón (ver README_IMAGENES.md).',
	},
];

export const FEATURES = [
	{ icon: 'ri-sparkling-2-line', label: 'Salón de belleza' },
	{ icon: 'ri-heart-pulse-line', label: 'Facial y corporal' },
	{ icon: 'ri-map-pin-line', label: 'Teatinos, Málaga' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{ src: IMAGES.fotoFachada, alt: 'Vanity Belleza en Teatinos (Málaga)' },
	{ src: IMAGES.fotoInterior, alt: 'Salón Vanity Belleza en Calle Díaz Recio' },
	{ src: IMAGES.fotoCejas, alt: 'Tratamiento facial en Vanity Belleza' },
	{ src: IMAGES.fotoCalle, alt: 'Tratamiento corporal en Vanity Belleza' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Vanity Teatinos Málaga',
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
	openingHoursSpecification: [],
};
