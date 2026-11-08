/**
 * Datos de Restaurante Santa María (C. Sodales, 18 · Polígono Industrial · 30620 Fortuna).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Santa Maria.
 *   Feature 0xd638f5ac450aa49:0x671c042f3371e0c9.
 * - Dirección, categoría, valoración, horario y accesibilidad: ficha de Google
 *   (octubre de 2026). Google sitúa el local en la RM-423, 30620 Fortuna.
 * - Teléfono, especialidades y salón: La Guía W y Cheque Restaurante, que
 *   coinciden en C/ Sodales, 18 y en el 968 68 61 22.
 * - Reseñas: opiniones publicadas en la ficha de Google.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * La carta y los precios no están publicados de forma oficial: no se inventan
 * importes. Los platos que se citan son los que recogen las guías locales.
 */

import fotoComedor from '../assets/fotos/santa-maria-apaisada-01.jpg';
import fotoChuleta from '../assets/fotos/santa-maria-apaisada-03.jpg';
import fotoEnsalada from '../assets/fotos/santa-maria-apaisada-04.jpg';
import fotoPasta from '../assets/fotos/santa-maria-apaisada-07.jpg';
import fotoHamburguesas from '../assets/fotos/santa-maria-apaisada-08.jpg';
import fotoDesayuno from '../assets/fotos/santa-maria-apaisada-09.jpg';
import fotoMesa from '../assets/fotos/santa-maria-vertical-02.jpg';
import fotoEntrecot from '../assets/fotos/santa-maria-vertical-05.jpg';
import fotoSala from '../assets/fotos/santa-maria-vertical-06.jpg';
import fotoArroz from '../assets/fotos/santa-maria-vertical-10.jpg';
import logo from '../assets/fotos/santa-maria-logo.svg';

export const IMAGES = {
	fotoArroz,
	fotoChuleta,
	fotoComedor,
	fotoDesayuno,
	fotoEnsalada,
	fotoEntrecot,
	fotoHamburguesas,
	fotoMesa,
	fotoPasta,
	fotoSala,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Santa+Maria/@38.1517461,-1.1242462,17z/data=!3m1!4b1!4m6!3m5!1s0xd638f5ac450aa49:0x671c042f3371e0c9!8m2!3d38.1517461!4d-1.1242462!16s%2Fg%2F11hbqv3wsn?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Santa María',
	fullName: 'Restaurante Santa María',
	shortName: 'Santa María',
	tagline: 'Cocina española · Fortuna, Murcia',
	claim: 'Cocina de siempre junto a la RM-423',
	summary:
		'Restaurante de cocina española en el polígono de Fortuna. Desayunos desde primera hora, comidas de mediodía y salón para celebraciones, con la carne a la piedra y los guisos de la casa.',
	street: 'C. Sodales, 18',
	borough: 'Polígono Industrial de Fortuna',
	city: 'Fortuna',
	postalCode: '30620',
	region: 'Murcia',
	province: 'Murcia',
	country: 'ES',
	phone: '968 68 61 22',
	phoneHref: 'tel:+34968686122',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=38.1517461%2C-1.1242462&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 38.1517461, lng: -1.1242462 },
	featureId: '0xd638f5ac450aa49:0x671c042f3371e0c9',
	placeId: 'ChIJSapQxFqPYw0RyeBxMy8EHGc',
	rating: 4.5,
	reviewCount: 127,
	hours: [
		{ days: 'Lunes a viernes', hours: '7:15 – 17:00' },
		{ days: 'Sábado', hours: '8:00 – 13:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. Es una casa de mañana y mediodía: abre a las 7:15 y cierra a las 17:00. En festivos puede cambiar, así que conviene confirmar por teléfono.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '07:15',
			closes: '17:00',
		},
		{ days: ['Saturday'], opens: '08:00', closes: '13:00' },
	],
	categories: ['Restaurante de cocina española', 'Restaurante'],
	siteUrl: 'https://www.sur-digital.com/santa-maria',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Restaurante Santa María',
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
		icon: 'ri-sun-line',
		title: 'Desde las 7:15',
		text: 'Desayunos y primeros cafés en el polígono, de lunes a viernes.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina española',
		text: 'La categoría de la casa en Google y la cocina de siempre en la mesa.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Carne a la piedra',
		text: 'Una de las especialidades que recogen las guías locales.',
	},
	{
		icon: 'ri-group-line',
		title: 'Salón para grupos',
		text: 'Celebraciones y comidas de empresa, con reserva previa.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Española' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '127' },
	{ label: 'Apertura', value: '7:15' },
];

export const PLATOS = [
	{
		icon: 'ri-fire-line',
		title: 'Carne a la piedra',
		text: 'La especialidad que destacan las guías locales de la comarca.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Solomillo a la pimienta verde',
		text: 'Un clásico de la casa, recogido en la ficha de La Guía W.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Pata de cordero',
		text: 'Guiso de cuchara para las comidas de mediodía.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cabrito a la murciana',
		text: 'Receta de la tierra, junto al resto de platos tradicionales.',
	},
	{
		icon: 'ri-file-list-3-line',
		title: 'Menú del día',
		text: 'Las guías locales lo mencionan; composición y precio se consultan en el local.',
	},
	{
		icon: 'ri-group-line',
		title: 'Salón de celebraciones',
		text: 'Comidas de grupo, bodas, bautizos y comuniones con reserva.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Fortuna, Murcia' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento adaptado' },
	{ icon: 'ri-calendar-check-line', title: 'Reserva de mesa' },
	{ icon: 'ri-snowflake-line', title: 'Aire acondicionado' },
];

export const REVIEWS = [
	{
		text: 'Buenas tapas y buenos bocadillos variados',
		rating: 5,
		author: 'Reseña en Google',
	},
	{
		text: 'Buena comida, buen ambiente con el personal, muy bien',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Menu 13€ con postre y cafe, buen trato y todo muy rico',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Santa María?',
		a: 'En la calle Sodales, 18, Polígono Industrial de Fortuna, 30620 Fortuna (Murcia). Google sitúa el local junto a la RM-423; puedes abrir la ruta exacta desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:15 a 17:00. El sábado sirve de 8:00 a 13:00 y el domingo permanece cerrado. En festivos conviene llamar antes.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. La casa abre a las 7:15 de lunes a viernes, con cafés, tapas y bocadillos. El sábado abre a las 8:00 y cierra a las 13:00.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Las guías locales mencionan un menú del día. Su composición y su precio se consultan en el restaurante o por teléfono: esta web no publica importes sin confirmar.',
	},
	{
		q: '¿Cuáles son las especialidades?',
		a: 'Carne a la piedra, solomillo a la pimienta verde, pata de cordero y cabrito a la murciana, según La Guía W. La carta puede cambiar, así que confirma la disponibilidad al reservar.',
	},
	{
		q: '¿Se puede reservar para un grupo?',
		a: 'La casa cuenta con salón para celebraciones y comidas de grupo. Llama al 968 68 61 22 para consultar disponibilidad y condiciones.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha de Google indica acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
];

export const GALLERY = [
	{ src: IMAGES.fotoChuleta, alt: 'Chuleta a la parrilla con patatas y limón en Santa María' },
	{ src: IMAGES.fotoEnsalada, alt: 'Ensalada de la casa con col lombarda y tomate' },
	{ src: IMAGES.fotoPasta, alt: 'Plato de pasta con ensalada' },
	{ src: IMAGES.fotoHamburguesas, alt: 'Dos hamburguesas con patatas fritas' },
	{ src: IMAGES.fotoMesa, alt: 'Aceiteras, salero y botella de aceite en la mesa' },
	{ src: IMAGES.fotoArroz, alt: 'Arroz con pollo y verduras' },
	{ src: IMAGES.fotoDesayuno, alt: 'Tortilla y zumo de naranja en el desayuno' },
	{ src: IMAGES.fotoSala, alt: 'Segundo comedor de Santa María' },
	{ src: IMAGES.fotoEntrecot, alt: 'Entrecot a la parrilla con patatas' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.fullName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34968686122',
	servesCuisine: ['Española'],
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
			name: 'Aparcamiento adaptado para sillas de ruedas',
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
