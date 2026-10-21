/**
 * Datos de Mesón La Posada (C. Alcalde Ginés Belda, 2 · 30620 Fortuna, Murcia).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mesón La Posada.
 *   Feature 0xd638f28e2f3ffff:0x2b51d5e978153422.
 * - Dirección, teléfono, categorías, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Especialidades y servicio: página de Facebook del restaurante
 *   (carne a la brasa, paellas, menú del día y almuerzos) y reseñas públicas.
 * - Reseñas: opiniones publicadas en la ficha de Google.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La carta y los precios no están publicados: no se inventan platos ni importes.
 */

import fotoSala from '../assets/fotos/meson-la-posada-vertical-01.jpg';
import fotoPulpo from '../assets/fotos/meson-la-posada-vertical-02.jpg';
import fotoPostre from '../assets/fotos/meson-la-posada-apaisada-03.jpg';
import fotoGambas from '../assets/fotos/meson-la-posada-vertical-04.jpg';
import fotoPaella from '../assets/fotos/meson-la-posada-apaisada-05.jpg';
import fotoPulpoSala from '../assets/fotos/meson-la-posada-apaisada-06.jpg';
import fotoLangostinos from '../assets/fotos/meson-la-posada-vertical-07.jpg';
import fotoTarta from '../assets/fotos/meson-la-posada-vertical-08.jpg';
import fotoCarne from '../assets/fotos/meson-la-posada-apaisada-09.jpg';
import fotoAlmejas from '../assets/fotos/meson-la-posada-vertical-10.jpg';
import logo from '../assets/fotos/meson-la-posada-logo.svg';

export const IMAGES = {
	fotoAlmejas,
	fotoCarne,
	fotoGambas,
	fotoLangostinos,
	fotoPaella,
	fotoPostre,
	fotoPulpo,
	fotoPulpoSala,
	fotoSala,
	fotoTarta,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Mes%C3%B3n+La+Posada/@38.1819725,-1.1278173,17z/data=!4m6!3m5!1s0xd638f28e2f3ffff:0x2b51d5e978153422!8m2!3d38.1819725!4d-1.1278173!16s%2Fg%2F11g03n5nw9?authuser=0&hl=es';

export const BUSINESS = {
	name: 'La Posada',
	fullName: 'Mesón La Posada',
	shortName: 'La Posada',
	tagline: 'Carne a la brasa · Fortuna, Murcia',
	claim: 'Tapas, brasa y mantel',
	summary:
		'Mesón de cocina española en Fortuna. Tapas en la barra, carne a la brasa, paellas y menú del día, con almuerzos y servicio de noche los viernes y sábados.',
	street: 'C. Alcalde Ginés Belda, 2',
	borough: 'Fortuna',
	city: 'Fortuna',
	postalCode: '30620',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '968 68 63 70',
	phoneHref: 'tel:+34968686370',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=38.1819725%2C-1.1278173&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 38.1819725, lng: -1.1278173 },
	featureId: '0xd638f28e2f3ffff:0x2b51d5e978153422',
	placeId: 'ChIJ___z4iiPYw0RIjQVeOnVUSs',
	rating: 4.6,
	reviewCount: 315,
	hours: [
		{ days: 'Lunes a jueves', hours: '9:00 – 16:00' },
		{ days: 'Viernes y sábado', hours: '9:00 – 16:00 · 19:30 – 0:30' },
		{ days: 'Domingo', hours: '9:00 – 16:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. El local abre de 9:00 a 16:00; las cenas son solo viernes y sábados, de 19:30 a 0:30. En festivos puede cambiar, así que conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Sunday'],
			opens: '09:00',
			closes: '16:00',
		},
		{ days: ['Friday', 'Saturday'], opens: '09:00', closes: '16:00' },
		{ days: ['Friday', 'Saturday'], opens: '19:30', closes: '00:30' },
	],
	categories: ['Restaurante de cocina española', 'Bar'],
	siteUrl: 'https://meson-la-posada.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Mesón La Posada',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La cocina', href: '#cocina' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Carne a la brasa',
		text: 'La especialidad que el propio mesón destaca en su presentación.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Paellas y arroces',
		text: 'Cocina española de mesa larga, también para grupos.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Almuerzos y menú',
		text: 'Menú del día y almuerzos, de 9:00 a 16:00.',
	},
	{
		icon: 'ri-moon-line',
		title: 'Cenas viernes y sábado',
		text: 'Segundo servicio de 19:30 a 0:30 al acabar la semana.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Española' },
	{ label: 'Valoración', value: '4,6 ★' },
	{ label: 'Reseñas', value: '315' },
	{ label: 'Especialidad', value: 'Brasa' },
];

export const PLATOS = [
	{
		icon: 'ri-fire-line',
		title: 'Carne a la brasa',
		text: 'El plato que define la casa, según su propia presentación.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Paellas y arroces',
		text: 'Arroces para compartir, con el punto de la cocina murciana.',
	},
	{
		icon: 'ri-anchor-line',
		title: 'Pulpo',
		text: 'Uno de los platos que destacan las reseñas del restaurante.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Tartar de atún',
		text: 'Entrada fresca para abrir la mesa, junto a la ensaladilla.',
	},
	{
		icon: 'ri-file-list-3-line',
		title: 'Menú del día',
		text: 'Menú y almuerzos; composición y precio se consultan en el local.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Tapas y barra',
		text: 'El mesón también es bar: tapas, raciones y aperitivos.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Fortuna, Murcia' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-calendar-check-line', title: 'Reserva de mesa' },
	{ icon: 'ri-moon-line', title: 'Cenas fin de semana' },
];

export const REVIEWS = [
	{
		text: 'Muy buen sitio buen trato buena comida y buenos precios',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'El servicio de los camareros tb buenísimo y súper atentos, volveré sin duda.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón La Posada?',
		a: 'En la calle Alcalde Ginés Belda, 2, 30620 Fortuna (Murcia). Puedes abrir la ruta exacta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves y el domingo abre de 9:00 a 16:00. Los viernes y sábados mantiene ese horario de mediodía y vuelve a abrir para cenar de 19:30 a 0:30.',
	},
	{
		q: '¿Se puede cenar?',
		a: 'Solo viernes y sábado, de 19:30 a 0:30. El resto de días el servicio termina a las 16:00.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El mesón anuncia menú del día y almuerzos. La composición y el precio se consultan en el local o llamando al 968 68 63 70; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿Cuáles son las especialidades?',
		a: 'Carne a la brasa, paellas y arroces, pulpo y tartar de atún, según la presentación del mesón y las reseñas. La carta puede cambiar, así que confirma la disponibilidad al reservar.',
	},
	{
		q: '¿Se puede reservar para un grupo?',
		a: 'La web no gestiona reservas. Llama al 968 68 63 70 para consultar disponibilidad, menú de grupo o una celebración.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. No figura aparcamiento adaptado.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoCarne, alt: 'Chuletón a la brasa con patatas y pimientos' },
	{ src: IMAGES.fotoPaella, alt: 'Paella de marisco con gambas y limón' },
	{ src: IMAGES.fotoPulpo, alt: 'Pulpo a la brasa con patatas' },
	{ src: IMAGES.fotoPulpoSala, alt: 'Pulpo asado con aceite de oliva' },
	{ src: IMAGES.fotoLangostinos, alt: 'Langostinos salteados con ajo' },
	{ src: IMAGES.fotoGambas, alt: 'Gambas rebozadas con alioli' },
	{ src: IMAGES.fotoAlmejas, alt: 'Almejas a la marinera' },
	{ src: IMAGES.fotoTarta, alt: 'Postre de la casa con nata y caramelo' },
	{ src: IMAGES.fotoPostre, alt: 'Postre de la casa con almendras' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.fullName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34968686370',
	servesCuisine: ['Española', 'Mediterránea'],
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
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	acceptsReservations: true,
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Acceso adaptado para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Aseo adaptado para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Asientos adaptados para sillas de ruedas',
			value: true,
		},
	],
};
