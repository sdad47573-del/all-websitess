/**
 * Datos de Restaurante Las Habazas (EX-208, Km 8,5 · 10680 Malpartida de Plasencia, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Las Habazas.
 *   Feature 0xd3e18604b4ea7ab:0x1e0569db65688574.
 * - Dirección, teléfono, categoría, valoración, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa: «cocina casera y todas nuestras carnes hechas a la brasa», a las
 *   puertas del Parque Nacional de Monfragüe, según el perfil público del restaurante.
 * - Platos: reseñas destacadas de la ficha, cartas publicadas en directorios gastronómicos
 *   (Toppings & Salads, Bayadoliz) y reseñas de TripAdvisor.
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: la oferta cambia con la temporada y el titular
 * no los ha confirmado. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoPortada from '../assets/fotos/restaurante-las-habazas-apaisada-01.jpg';
import fotoApaisada2 from '../assets/fotos/restaurante-las-habazas-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/restaurante-las-habazas-apaisada-03.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-las-habazas-vertical-04.jpg';
import fotoApaisada5 from '../assets/fotos/restaurante-las-habazas-apaisada-05.jpg';
import fotoVertical6 from '../assets/fotos/restaurante-las-habazas-vertical-06.jpg';
import fotoApaisada7 from '../assets/fotos/restaurante-las-habazas-apaisada-07.jpg';
import fotoVertical8 from '../assets/fotos/restaurante-las-habazas-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/restaurante-las-habazas-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/restaurante-las-habazas-vertical-10.jpg';
import logo from '../assets/fotos/restaurante-las-habazas-logo.svg';

export const IMAGES = {
	fotoPortada,
	fotoApaisada2,
	fotoApaisada3,
	fotoVertical4,
	fotoApaisada5,
	fotoVertical6,
	fotoApaisada7,
	fotoVertical8,
	fotoVertical9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Restaurante+Las+Habazas/@39.9461861,-6.0863758,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e18604b4ea7ab:0x1e0569db65688574!8m2!3d39.9461861!4d-6.0863758!16s%2Fg%2F11bzq3_phv?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Restaurante Las Habazas',
	shortName: 'Las Habazas',
	tagline: 'Cocina extremeña y brasas de encina',
	claim: 'A las puertas de Monfragüe',
	summary:
		'Restaurante de carretera en la EX-208, km 8,5, entre Plasencia y Trujillo: cocina extremeña, carnes a la brasa de encina y postres caseros, a las puertas del Parque Nacional de Monfragüe.',
	street: 'EX-208, Km 8,5',
	district: 'Malpartida de Plasencia',
	borough: 'Malpartida de Plasencia',
	city: 'Malpartida de Plasencia',
	postalCode: '10680',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'A las puertas del Parque Nacional de Monfragüe',
	phone: '666 42 24 53',
	phoneHref: 'tel:+34666422453',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.9461861%2C-6.0863758&t=&z=15&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.9461861, lng: -6.0863758 },
	featureId: '0xd3e18604b4ea7ab:0x1e0569db65688574',
	placeId: 'ChIJq6dOS2AYPg0RdIVoZdtpBR4',
	plusCode: 'WWW7+FC',
	rating: 4.5,
	reviewCount: 761,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles', hours: '10:30 – 16:00' },
		{ days: 'Jueves', hours: '10:30 – 16:30' },
		{ days: 'Viernes', hours: '10:30 – 16:00' },
		{ days: 'Sábado', hours: '10:30 – 18:00' },
		{ days: 'Domingo', hours: '10:30 – 16:00' },
	],
	hoursNote:
		'Horario publicado en la ficha de Google en octubre de 2026: servicio de comidas de miércoles a domingo, con el sábado hasta las 18:00. En festivos, puentes y temporada alta puede cambiar; conviene llamar antes de venir.',
	openingHours: [
		{ days: ['Wednesday'], opens: '10:30', closes: '16:00' },
		{ days: ['Thursday'], opens: '10:30', closes: '16:30' },
		{ days: ['Friday'], opens: '10:30', closes: '16:00' },
		{ days: ['Saturday'], opens: '10:30', closes: '18:00' },
		{ days: ['Sunday'], opens: '10:30', closes: '16:00' },
	],
	categories: ['Restaurante', 'Cocina extremeña', 'Carnes a la brasa'],
	social: {
		instagram: 'https://www.instagram.com/habazas/',
		facebook: 'https://www.facebook.com/habazas/',
	},
	siteUrl: 'https://www.sur-digital.com/restaurante-las-habazas',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Restaurante Las Habazas',
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
		text: 'Carnes a la parrilla sobre brasa de encina, la base de la cocina de la casa.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina extremeña',
		text: 'Pluma ibérica, secreto, costilla de vaca, guisos y recetas de la dehesa.',
	},
	{
		icon: 'ri-landscape-line',
		title: 'Puertas de Monfragüe',
		text: 'En la EX-208, a pocos minutos del Parque Nacional de Monfragüe.',
	},
	{
		icon: 'ri-time-line',
		title: 'Miércoles a domingo',
		text: 'Comidas de 10:30 a 16:00; el sábado, hasta las 18:00. Lunes y martes, cerrado.',
	},
];

export const CASA_FACTS = [
	{ label: 'Cocina', value: 'Extremeña' },
	{ label: 'Brasa', value: 'Encina' },
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '761' },
];

export const CARTA = [
	{
		icon: 'ri-bowl-line',
		kicker: 'Para empezar',
		title: 'Entrantes de la casa',
		text: 'Alcachofas en tempura, huevos rotos con papada ibérica, torreznos y migas extremeñas: lo que más se pide para abrir la mesa.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'De la brasa',
		title: 'Pluma ibérica de bellota',
		text: 'El corte que más se repite en las reseñas: ibérico de bellota pasado por la parrilla, jugoso por dentro y marcado por fuera.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'De la brasa',
		title: 'Secreto ibérico',
		text: 'Secreto a la brasa de encina, uno de los platos que la casa anuncia en su perfil y que aparece en las cartas publicadas.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'De la brasa',
		title: 'Costilla de vaca',
		text: 'Costilla de vaca a la parrilla, para los que buscan un corte grande y para compartir en el centro de la mesa.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'A la parrilla',
		title: 'Entrecot y hamburguesas',
		text: 'Entrecot a la parrilla y hamburguesas de secreto ibérico o de ternera en pan de cristal, según la carta de la casa.',
	},
	{
		icon: 'ri-leaf-line',
		kicker: 'De cuchara',
		title: 'Arroz meloso con chipirones',
		text: 'Un arroz de cuchara para cambiar de tercio entre tanta brasa, junto a las setas y la ensalada de perdiz de la temporada.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Tarta de queso y dulces caseros',
		text: 'La tarta de queso es la debilidad de la casa. También tarta al whisky, coulant de chocolate blanco, helado de cereza y revolconas.',
	},
	{
		icon: 'ri-price-tag-3-line',
		kicker: 'Menú',
		title: 'Menú del día y de fin de semana',
		text: 'El restaurante ofrece menú diario y menú de fin de semana, además de la carta. Consulta el menú vigente al reservar.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-map-pin-line', title: 'Junto a Monfragüe' },
	{ icon: 'ri-wheelchair-line', title: 'Acceso adaptado' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento' },
	{ icon: 'ri-phone-line', title: 'Reservas por teléfono' },
];

export const REVIEWS = [
	{
		text: 'Hemos comido unas raciones: foie gras micuit, calamares y boquerones en tempura.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Buena cocina, menús exquisitos y trato amable.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Local aceptable y buen servicio, con raciones abundantes.',
		rating: 4,
		author: 'Reseña en TripAdvisor',
		source: 'TripAdvisor',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Las Habazas?',
		a: 'En la EX-208, Km 8,5, 10680 Malpartida de Plasencia (Cáceres), en la carretera entre Plasencia y Trujillo y a las puertas del Parque Nacional de Monfragüe. Puedes abrir la ruta directamente en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre de miércoles a domingo para el servicio de comidas: de 10:30 a 16:00 (el jueves hasta las 16:30 y el sábado hasta las 18:00). Lunes y martes permanece cerrado. En festivos y puentes conviene confirmar por teléfono.',
	},
	{
		q: '¿Cómo reservo una mesa?',
		a: 'Las reservas se gestionan por teléfono, en el 666 42 24 53. La web no tramita reservas. Los fines de semana el comedor suele llenarse, así que es recomendable llamar con antelación.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina extremeña y carnes a la brasa de encina: pluma ibérica de bellota, secreto ibérico, costilla de vaca, entrecot y hamburguesas, además de entrantes como alcachofas en tempura, huevos rotos con papada, torreznos y migas, arroces y postres caseros como la tarta de queso.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El restaurante ofrece menú diario y menú de fin de semana, además de la carta. Esta web no publica precios porque cambian con la temporada; se consultan al reservar o en el propio local.',
	},
	{
		q: '¿Se puede aparcar?',
		a: 'Sí. El restaurante tiene aparcamiento junto al local, y su ficha de Google indica plazas adaptadas para sillas de ruedas. Está en plena carretera EX-208, así que el acceso en coche es directo.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas y aparcamiento adaptado. Si necesitas alguna condición concreta en la mesa, avisa al reservar por teléfono.',
	},
	{
		q: '¿Está cerca del Parque Nacional de Monfragüe?',
		a: 'Sí. El restaurante se presenta como una parada a las puertas de Monfragüe, en el término de Malpartida de Plasencia. Es una opción habitual para comer antes o después de una ruta por el parque.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoPortada,
		alt: 'Restaurante Las Habazas, en la EX-208 de Malpartida de Plasencia',
	},
	{ src: IMAGES.fotoApaisada2, alt: 'Interior del restaurante Las Habazas, en Cáceres' },
	{ src: IMAGES.fotoApaisada3, alt: 'Comedor de Las Habazas en Malpartida de Plasencia' },
	{ src: IMAGES.fotoVertical4, alt: 'Detalle de la mesa en Restaurante Las Habazas' },
	{ src: IMAGES.fotoApaisada5, alt: 'Ambiente del restaurante Las Habazas' },
	{ src: IMAGES.fotoVertical6, alt: 'Rincón del comedor de Las Habazas' },
	{ src: IMAGES.fotoApaisada7, alt: 'Fotografía de la ficha de Google Maps de Las Habazas' },
	{ src: IMAGES.fotoVertical8, alt: 'Platos de la cocina de Las Habazas' },
	{ src: IMAGES.fotoVertical9, alt: 'Las Habazas, restaurante junto a Monfragüe' },
	{ src: IMAGES.fotoVertical10, alt: 'Otra imagen de Restaurante Las Habazas en Cáceres' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34666422453',
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Carnes a la brasa', 'Cocina tradicional', 'Asador'],
	areaServed: [
		{ '@type': 'City', name: 'Malpartida de Plasencia' },
		{ '@type': 'City', name: 'Plasencia' },
		{ '@type': 'TouristAttraction', name: 'Parque Nacional de Monfragüe' },
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
	sameAs: [BUSINESS.social.instagram, BUSINESS.social.facebook],
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
			name: 'Aparcamiento adaptado para sillas de ruedas',
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
