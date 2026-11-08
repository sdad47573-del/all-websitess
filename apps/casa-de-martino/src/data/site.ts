/**
 * Datos de Café Restaurante Casa de Martino — C/ Jussepe Martínez, 4
 * (Casco Antiguo, 50003 Zaragoza).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: Café Restaurante Casa de Martino,
 *   41.6544642,-0.8802692, feature 0xd5914ec44d8f287:0xe701971e438096a2
 * - Web propia (cafe-de-martino1.webnode.es/contacto): C/ Jussepe
 *   Martínez 4 (esquina Alfonso I), 50003 Zaragoza; tels 629 185 661,
 *   976 39 59 39, 687 464 325; Lun-Vie 09:00–16:00 y 19:00–cierre;
 *   Sáb desde 12:00; Dom 12:00–16:00.
 * - TripAdvisor (Café Bar Martino, misma dirección): 4,6 (47 opiniones);
 *   tapas y restaurante.
 * - Turismo de Zaragoza: De Martino, C/ Jussepe Martínez 4, 976 39 59 39.
 *
 * Lo que la web NO inventa:
 * - Sin carta ni precios publicados fuera de la ficha: no se publican
 *   platos ni importes concretos.
 * - La hora de cierre nocturna no está publicada ("hasta el cierre"):
 *   se muestra tal cual y no se inventa en el schema.
 */

import fotoPortada from '../assets/fotos/casa-de-martino-apaisada-01.jpg';
import fotoCentro from '../assets/fotos/casa-de-martino-vertical-02.jpg';
import fotoBarra from '../assets/fotos/casa-de-martino-vertical-03.jpg';
import fotoSala from '../assets/fotos/casa-de-martino-vertical-04.jpg';
import fotoExtra1 from '../assets/fotos/casa-de-martino-vertical-05.jpg';
import fotoExtra2 from '../assets/fotos/casa-de-martino-apaisada-06.jpg';
import fotoExtra3 from '../assets/fotos/casa-de-martino-apaisada-07.jpg';
import fotoExtra4 from '../assets/fotos/casa-de-martino-vertical-08.jpg';
import logo from '../assets/fotos/casa-de-martino-logo.svg';

export const IMAGES = {
	fotoFachada: fotoPortada,
	fotoInterior: fotoCentro,
	fotoCejas: fotoBarra,
	fotoCalle: fotoSala,
	fotoExtra1,
	fotoExtra2,
	fotoExtra3,
	fotoExtra4,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Caf%C3%A9+Restaurante+Casa+de+Martino/@41.6544642,-0.8802692,17z/data=!3m1!4b1!4m6!3m5!1s0xd5914ec44d8f287:0xe701971e438096a2!8m2!3d41.6544642!4d-0.8802692!16s%2Fg%2F11xs0bxkw?authuser=0&hl=es&entry=ttu&g_ep=EgoyMDI2MTAxMy4wIKXMDSoASAFQAw%3D%3D';

export const BUSINESS = {
	name: 'Café Restaurante Casa de Martino',
	shortName: 'Casa de Martino',
	tagline: 'Café restaurante en el Casco Antiguo, Zaragoza',
	claim: 'Tu café restaurante en Jussepe Martínez 4',
	summary:
		'Casa de Martino es un café restaurante en C/ Jussepe Martínez 4, esquina Alfonso I (Casco Antiguo, 50003 Zaragoza): platos caseros con ingredientes frescos, tapas y menú. Con un 4,6 en TripAdvisor (47 opiniones). Llama al 976 39 59 39 para reservar.',
	street: 'C/ Jussepe Martínez, 4',
	district: 'Casco Antiguo',
	borough: 'Zaragoza',
	city: 'Zaragoza',
	postalCode: '50003',
	region: 'Aragón',
	country: 'ES',
	phoneDisplay: '976 39 59 39',
	phoneHref: 'tel:+34976395939',
	whatsapp:
		'https://wa.me/34629185661?text=Hola%2C%20os%20escribo%20desde%20la%20web%20de%20Casa%20de%20Martino.%20%C2%BFMe%20confirm%C3%A1is%20mesa%3F',
	webPropia: 'https://cafe-de-martino1.webnode.es/',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=41.6544642%2C-0.8802692&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 41.6544642, lng: -0.8802692 },
	featureId: '0xd5914ec44d8f287:0xe701971e438096a2',
	categories: [
		'Café restaurante',
		'Cocina casera',
		'Tapas',
		'Menú del día',
	],
	hours: [
		{ days: 'Lunes a viernes', hours: '9:00–16:00 y 19:00–cierre' },
		{ days: 'Sábado', hours: 'Desde las 12:00' },
		{ days: 'Domingo', hours: '12:00–16:00' },
	],
	hoursNote:
		'Horario publicado en la web propia del local. La hora de cierre nocturna no está publicada: confirma llamando al 976 39 59 39, porque puede variar en festivos.',
	siteUrl: 'https://casa-de-martino.vercel.app',
};

export const LEGAL = {
	razonSocial: 'Café Restaurante Casa de Martino',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El local', href: '#salon' },
	{ label: 'La casa', href: '#servicios' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'La casa', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-cup-line',
		title: 'Café restaurante',
		text: 'Café restaurante en Jussepe Martínez 4, junto a Alfonso I.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'Jussepe Martínez 4',
		text: 'C/ Jussepe Martínez 4 · 50003 Zaragoza.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,6 en TripAdvisor',
		text: 'Valoración de 4,6 sobre 5 en TripAdvisor con 47 opiniones.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'Reserva mesa en el 976 39 59 39.',
	},
];

export const SERVICIOS = [
	{
		icon: 'ri-restaurant-line',
		title: 'Platos caseros',
		text: 'Ingredientes frescos y platos caseros deliciosos.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Café y tapas',
		text: 'Café de mañana y tapas para compartir al mediodía.',
	},
	{
		icon: 'ri-file-list-line',
		title: 'Menú del día',
		text: 'Menú del día casero: pregunta por el de hoy al reservar.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Noches (lun-vie)',
		text: 'De lunes a viernes también abren por la noche.',
	},
	{
		icon: 'ri-team-line',
		title: 'En el centro',
		text: 'Esquina con Alfonso I: queda en pleno Casco Antiguo.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Reserva',
		text: 'Se recomienda reservar: llama al 976 39 59 39.',
	},
];

export const SERVICIOS_DETALLE = [
	{
		grupo: 'De la casa',
		items: [
			{ nombre: 'Platos caseros', precio: 'A consultar' },
			{ nombre: 'Tapas', precio: 'A consultar' },
			{ nombre: 'Menú del día', precio: 'A consultar' },
		],
	},
	{
		grupo: 'Momentos',
		items: [
			{ nombre: 'Café de mañana', precio: 'A consultar' },
			{ nombre: 'Comida de mediodía', precio: 'A consultar' },
			{ nombre: 'Cena (lunes a viernes)', precio: 'A consultar' },
		],
	},
];

export const VENTAJAS = [
	{
		icon: 'ri-map-pin-line',
		title: 'En el Casco',
		text: 'Jussepe Martínez 4, esquina Alfonso I, 50003.',
	},
	{
		icon: 'ri-star-fill',
		title: '4,6 en TripAdvisor',
		text: '47 opiniones con muy buena valoración media.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina de siempre',
		text: 'Platos caseros con ingredientes frescos.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva fácil',
		text: 'Llama al 976 39 59 39 o escribe por WhatsApp.',
	},
	{
		icon: 'ri-time-line',
		title: 'Mañana y noche',
		text: 'Lun-vie doble turno; fin de semana al mediodía.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Sin precios inventados',
		text: 'Sin carta publicada no se inventan importes: se confirman allí.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Casa de Martino?',
		a: 'En C/ Jussepe Martínez 4, esquina con Alfonso I (Casco Antiguo, 50003 Zaragoza). Abre “Cómo llegar” para navegar con Google Maps.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: 'Llama al 976 39 59 39 o al 629 185 661, o escribe por WhatsApp. También puedes usar el contacto de su ficha pública de Google.',
	},
	{
		q: '¿Qué se come allí?',
		a: 'Es un café restaurante de cocina casera: platos con ingredientes frescos, tapas y menú del día. La carta del día se confirma en el local o en su web.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'No publican carta online, y esta web no inventa importes. Los precios están en el local.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a viernes de 9:00 a 16:00 y de 19:00 hasta el cierre; sábados desde las 12:00; domingos de 12:00 a 16:00. Confirma festivos llamando al 976 39 59 39.',
	},
	{
		q: '¿Abren por la noche el fin de semana?',
		a: 'Según su web, las noches son de lunes a viernes; el fin de semana abren al mediodía (sábado desde las 12:00 y domingo de 12:00 a 16:00).',
	},
];

export const FEATURES = [
	{ icon: 'ri-cup-line', label: 'Café restaurante' },
	{ icon: 'ri-restaurant-line', label: 'Cocina casera' },
	{ icon: 'ri-file-list-line', label: 'Menú del día' },
	{ icon: 'ri-google-fill', label: 'Ficha en Google Maps' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Café Restaurante Casa de Martino en Zaragoza',
	},
	{
		src: IMAGES.fotoInterior,
		alt: 'Casa de Martino en Jussepe Martínez 4',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'El local de Casa de Martino (Zaragoza)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'El salón de Casa de Martino',
	},
	{
		src: IMAGES.fotoExtra1,
		alt: 'Interior de Casa de Martino',
	},
	{
		src: IMAGES.fotoExtra2,
		alt: 'Cocina casera en Casa de Martino Zaragoza',
	},
	{
		src: IMAGES.fotoExtra3,
		alt: 'Platos de Casa de Martino',
	},
	{
		src: IMAGES.fotoExtra4,
		alt: 'Ambiente en Casa de Martino',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Café de Martino Zaragoza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34976395939',
	servesCuisine: ['Casera', 'Mediterránea', 'Española'],
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
		ratingValue: 4.6,
		reviewCount: 47,
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '16:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '12:00',
			closes: '16:00',
		},
	],
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'La casa de Casa de Martino',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'Restaurant', name: BUSINESS.name },
			},
		})),
	},
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
};
