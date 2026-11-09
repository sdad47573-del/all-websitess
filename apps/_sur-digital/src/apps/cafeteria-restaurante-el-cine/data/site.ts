/**
 * Datos de Cafetería Restaurante El Cine (C. Santo Cristo, 34 · 10666 Santibáñez el Bajo,
 * Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Cafetería Restaurante El Cine.
 *   Feature 0xd3e6d7147a3128d:0xee88c68cbe72f75a.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: perfil público del restaurante (carta variada, parrilla de carbón de
 *   encina y terraza) y guía gastronómica Toppings & Salads (comida casera, menú del día y
 *   especialidades).
 * - Platos: reseñas destacadas de Google y cartas publicadas en directorios.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoPortada from '../assets/fotos/cafeteria-restaurante-el-cine-apaisada-01.jpg';
import fotoApaisada2 from '../assets/fotos/cafeteria-restaurante-el-cine-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/cafeteria-restaurante-el-cine-apaisada-03.jpg';
import fotoVertical4 from '../assets/fotos/cafeteria-restaurante-el-cine-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/cafeteria-restaurante-el-cine-vertical-05.jpg';
import fotoApaisada6 from '../assets/fotos/cafeteria-restaurante-el-cine-apaisada-06.jpg';
import fotoApaisada7 from '../assets/fotos/cafeteria-restaurante-el-cine-apaisada-07.jpg';
import fotoVertical8 from '../assets/fotos/cafeteria-restaurante-el-cine-vertical-08.jpg';
import fotoApaisada9 from '../assets/fotos/cafeteria-restaurante-el-cine-apaisada-09.jpg';
import fotoVertical10 from '../assets/fotos/cafeteria-restaurante-el-cine-vertical-10.jpg';
import logo from '../assets/fotos/cafeteria-restaurante-el-cine-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada2,
	fotoApaisada3,
	fotoVertical4,
	fotoVertical5,
	fotoApaisada6,
	fotoApaisada7,
	fotoVertical8,
	fotoApaisada9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Cafeter%C3%ADa+Restaurante+El+Cine/@40.1768346,-6.2228969,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e6d7147a3128d:0xee88c68cbe72f75a!8m2!3d40.1768346!4d-6.2228969!16s%2Fg%2F11gbzb3rqr?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Cafetería Restaurante El Cine',
	shortName: 'El Cine',
	tagline: 'Comida casera y brasa de encina',
	claim: 'Cafetería, restaurante y terraza en Santibáñez el Bajo',
	summary:
		'Cafetería y restaurante en Santibáñez el Bajo (Cáceres): comida casera, carnes a la brasa de encina, menú del día, tapas y terraza en el Valle del Alagón.',
	street: 'C. Santo Cristo, 34',
	district: 'Santibáñez el Bajo',
	borough: 'Santibáñez el Bajo',
	city: 'Santibáñez el Bajo',
	postalCode: '10666',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Alagón · Cáceres',
	phone: '645 05 06 54',
	phoneHref: 'tel:+34645050654',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.1768346%2C-6.2228969&t=&z=15&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.1768346, lng: -6.2228969 },
	featureId: '0xd3e6d7147a3128d:0xee88c68cbe72f75a',
	placeId: 'ChIJjRKjR3FtPg0RWvdyvozGiO4',
	plusCode: '5QGG+PR',
	rating: 4.7,
	reviewCount: 298,
	hours: [
		{ days: 'Lunes', hours: '8:00 – 17:30' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles', hours: '8:00 – 17:30' },
		{ days: 'Jueves', hours: '8:00 – 17:30' },
		{ days: 'Viernes', hours: '8:00 – 24:00' },
		{ days: 'Sábado', hours: '8:00 – 24:00' },
		{ days: 'Domingo', hours: '8:00 – 24:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google en octubre de 2026: de lunes a jueves de 8:00 a 17:30 (el martes cierra) y de viernes a domingo de 8:00 a 24:00. En festivos y temporada alta puede cambiar; conviene llamar antes de venir.',
	openingHours: [
		{ days: ['Monday', 'Wednesday', 'Thursday'], opens: '08:00', closes: '17:30' },
		{ days: ['Friday', 'Saturday', 'Sunday'], opens: '08:00', closes: '24:00' },
	],
	categories: ['Cafetería', 'Restaurante', 'Cocina casera', 'Carnes a la brasa'],
	social: {
		facebook: 'https://www.facebook.com/cafeteriarestauranteelcine/',
	},
	siteUrl: 'https://www.sur-digital.com/cafeteria-restaurante-el-cine',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Cafetería Restaurante El Cine',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#contacto' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Brasa de encina',
		text: 'Parrilla de carbón de encina: secreto, pulpo, pollo y carnes a la brasa.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Comida casera',
		text: 'Raciones abundantes y cocina de la tierra, lo que más repiten las reseñas.',
	},
	{
		icon: 'ri-coupon-3-line',
		title: 'Menú del día',
		text: 'Primero, segundo y postre, además de la carta y las tapas de la cafetería.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Cafetería y terraza',
		text: 'Desayunos, tapas y terraza para el buen tiempo en Santibáñez el Bajo.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Casera' },
	{ label: 'Brasa', value: 'Encina' },
	{ label: 'Valoración', value: '4,7 ★' },
	{ label: 'Reseñas', value: '298' },
];

export const CARTA = [
	{
		icon: 'ri-bread-line',
		kicker: 'Para picar',
		title: 'Entrantes de la casa',
		text: 'Berenjenas con miel, patatas con queso azul y nachos con carne: los entrantes que más se repiten en las reseñas.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'De la brasa',
		title: 'Pulpo a la brasa',
		text: 'Uno de los platos más elogiados de la parrilla, junto al secreto ibérico y el pollo a la brasa.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'De la brasa',
		title: 'Secreto ibérico',
		text: 'Secreto a la brasa de encina, el corte que las reseñas describen como insuperable.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'De la brasa',
		title: 'Pollo a la brasa',
		text: 'Pollo asado en la parrilla de carbón, para compartir o pedir como plato principal.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'Del horno',
		title: 'Cachopo',
		text: 'Cachopo empanado y relleno, una de las propuestas de la carta que aparece en las reseñas.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'De cuchara',
		title: 'Garbanzos con setas y guisos',
		text: 'Garbanzos con setas y carne en salsa con patatas, la parte más casera y de cuchara de la carta.',
	},
	{
		icon: 'ri-knife-line',
		kicker: 'Parrilla y plancha',
		title: 'Entrecot, abanico y hamburguesa de buey',
		text: 'Cortes a la brasa y hamburguesas de buey para completar la mesa, junto al bacalao y las tapas.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Torrija, flan y tarta de cerveza',
		text: 'Postres caseros: torrija, flan, tarta de cerveza y bizcocho, hechos en la cocina del restaurante.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-fire-line', title: 'Brasa de encina' },
	{ icon: 'ri-coupon-3-line', title: 'Menú del día' },
	{ icon: 'ri-sun-line', title: 'Terraza' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
];

export const REVIEWS = [
	{
		text: 'Comida casera, elaborada y raciones abundantes!!',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'El secreto a la brasa insuperable y qué decir de los entrantes, muy buenos.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Muy buenas las patatas con queso azul y el pulpo a la brasa.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cafetería Restaurante El Cine?',
		a: 'En la calle Santo Cristo, 34, 10666 Santibáñez el Bajo (Cáceres), en el Valle del Alagón. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre de lunes a jueves de 8:00 a 17:30 (el martes permanece cerrado) y de viernes a domingo de 8:00 a 24:00. En festivos y temporada alta puede cambiar, así que conviene confirmar por teléfono.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'Las reservas se gestionan por teléfono, en el 645 05 06 54. La web no tramita reservas. Los fines de semana y en temporada alta es recomendable llamar con antelación.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El restaurante ofrece menú del día con primero, segundo y postre, además de la carta y las tapas de la cafetería. Esta web no publica el precio porque cambia con la temporada; se consulta al reservar o en el local.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera y parrilla de carbón de encina: secreto ibérico, pulpo y pollo a la brasa, cachopo, entrecot, abanico, hamburguesa de buey, guisos como los garbanzos con setas y entrantes como las berenjenas con miel o las patatas con queso azul. De postre, torrija, flan o tarta de cerveza.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí. El local cuenta con comedor interior y terraza exterior, muy útil para el buen tiempo. La terraza puede depender de la temporada, así que confirma al llamar.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta en la mesa, avisa al reservar por teléfono.',
	},
	{
		q: '¿Se puede ir solo a tomar algo?',
		a: 'Sí. Funciona también como cafetería, con desayunos, tapas y raciones, así que puedes parar a tomar algo sin comer el menú completo.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoPortada,
		alt: 'Cafetería Restaurante El Cine en Santibáñez el Bajo',
	},
	{ src: IMAGES.fotoApaisada2, alt: 'Interior del restaurante El Cine, en Cáceres' },
	{ src: IMAGES.fotoApaisada3, alt: 'Comedor de El Cine en Santibáñez el Bajo' },
	{ src: IMAGES.fotoVertical4, alt: 'Detalle de la mesa en Cafetería Restaurante El Cine' },
	{ src: IMAGES.fotoVertical5, alt: 'Ambiente del restaurante El Cine' },
	{ src: IMAGES.fotoApaisada6, alt: 'Terraza de El Cine en el Valle del Alagón' },
	{ src: IMAGES.fotoApaisada7, alt: 'Fotografía de la ficha de Google Maps de El Cine' },
	{ src: IMAGES.fotoVertical8, alt: 'Platos de la cocina de El Cine' },
	{ src: IMAGES.fotoApaisada9, alt: 'Restaurante El Cine, en Santibáñez el Bajo' },
	{ src: IMAGES.fotoVertical10, alt: 'Otra imagen de Cafetería Restaurante El Cine' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34645050654',
	priceRange: '€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Cocina casera', 'Carnes a la brasa', 'Tapas'],
	areaServed: [
		{ '@type': 'City', name: 'Santibáñez el Bajo' },
		{ '@type': 'AdministrativeArea', name: 'Valle del Alagón' },
	],
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
	sameAs: [BUSINESS.social.facebook],
	acceptsReservations: 'True',
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Acceso para sillas de ruedas',
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
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewCount,
		bestRating: 5,
		worstRating: 1,
	},
};
