/**
 * Datos de Mesón Emigrante (C. Pedro Ávila, 45 · 10710 Zarza de Granadilla, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Mesón emigrante.
 *   Feature 0xd3e421f5b4f84b5:0x474a186227b77f77.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Descripción de la casa: «Restaurante con cocina mediterránea, menús diarios y raciones»
 *   (descripción del titular en Google).
 * - Platos: reseñas de Google y TripAdvisor recogidas en carta.menu (menús, carnes a la parrilla,
 *   ensalada de burra, arroz caldoso, albóndigas, patatas revolconas con pulpo, postres caseros).
 * - Fotos: galería de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian con la temporada y el titular no los
 * ha confirmado. Los platos citados son los que más se repiten en las fuentes públicas.
 */

import fotoApaisada1 from '../assets/fotos/meson-emigrante-apaisada-01.jpg';
import fotoCuadrada2 from '../assets/fotos/meson-emigrante-cuadrada-02.jpg';
import fotoApaisada3 from '../assets/fotos/meson-emigrante-apaisada-03.jpg';
import fotoVertical4 from '../assets/fotos/meson-emigrante-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/meson-emigrante-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/meson-emigrante-vertical-06.jpg';
import fotoVertical7 from '../assets/fotos/meson-emigrante-vertical-07.jpg';
import fotoApaisada8 from '../assets/fotos/meson-emigrante-apaisada-08.jpg';
import fotoVertical9 from '../assets/fotos/meson-emigrante-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/meson-emigrante-vertical-10.jpg';
import logo from '../assets/fotos/meson-emigrante-logo.svg';

export const IMAGES = {
	fotoApaisada1,
	fotoCuadrada2,
	fotoApaisada3,
	fotoVertical4,
	fotoVertical5,
	fotoVertical6,
	fotoVertical7,
	fotoApaisada8,
	fotoVertical9,
	fotoVertical10,
	logo,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Mes%C3%B3n+emigrante/@40.236896,-6.047368,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e421f5b4f84b5:0x474a186227b77f77!8m2!3d40.236896!4d-6.047368!16s%2Fg%2F1thkb0t7?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Mesón Emigrante',
	shortName: 'El Emigrante',
	tagline: 'Cocina casera extremeña en el Valle del Ambroz',
	claim: 'Menús, raciones y carnes a la parrilla en Zarza de Granadilla',
	summary:
		'Mesón de cocina casera española en Zarza de Granadilla (Cáceres), en el Valle del Ambroz: menús diarios, raciones generosas, carnes a la parrilla y postres caseros, a un paso de Granadilla y del yacimiento de Cáparra.',
	street: 'C. Pedro Ávila, 45',
	city: 'Zarza de Granadilla',
	postalCode: '10710',
	region: 'Cáceres',
	country: 'ES',
	landmark: 'Valle del Ambroz',
	phone: '697 20 14 46',
	phoneHref: 'tel:+34697201446',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=40.236896%2C-6.047368&t=&z=16&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 40.236896, lng: -6.047368 },
	featureId: '0xd3e421f5b4f84b5:0x474a186227b77f77',
	placeId: 'ChIJtYRPWx9CPg0Rd3-3J2IYSkc',
	plusCode: '6XP3+Q3',
	rating: 4.6,
	reviewCount: 770,
	hours: [
		{ days: 'Lunes', hours: 'Cerrado' },
		{ days: 'Martes', hours: 'Cerrado' },
		{ days: 'Miércoles', hours: 'Cerrado' },
		{ days: 'Jueves', hours: 'Cerrado' },
		{ days: 'Viernes', hours: '13:00 – 23:30' },
		{ days: 'Sábado', hours: '13:00 – 23:30' },
		{ days: 'Domingo', hours: '13:00 – 23:30' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: abre de viernes a domingo, de 13:00 a 23:30, y cierra de lunes a jueves. Otros directorios publican un horario de bar más amplio, así que conviene llamar antes de ir entre semana o en puentes.',
	openingHours: [
		{
			days: ['Friday', 'Saturday', 'Sunday'],
			opens: '13:00',
			closes: '23:30',
		},
	],
	categories: ['Restaurante', 'Cocina extremeña', 'Cocina casera', 'Carnes a la parrilla'],
	social: {
		facebook: 'https://www.facebook.com/p/Restaurants-Emigrante-100070685650293/',
	},
	siteUrl: 'https://www.sur-digital.com/meson-emigrante',
};

export const SUR_DIGITAL_URL = 'https://www.sur-digital.com/';

export const LEGAL = {
	razonSocial: 'Mesón Emigrante',
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
		icon: 'ri-coupon-3-line',
		title: 'Menú del día',
		text: 'Primero, segundo y postre, con menús de fin de semana y platos fuera de carta.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Carnes a la parrilla',
		text: 'Solomillo, entrecôte y carnes a la brasa, con guarnición y raciones generosas.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cocina de la tierra',
		text: 'Guisos, arroz caldoso, patatas revolconas y recetas extremeñas de siempre.',
	},
	{
		icon: 'ri-group-line',
		title: 'Para familias y grupos',
		text: 'Comedor amplio, menú infantil y tronas; mejor reservar el fin de semana.',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,6 ★' },
	{ label: 'Reseñas', value: '770' },
	{ label: 'La cocina', value: 'Casera' },
	{ label: 'Entorno', value: 'Ambroz' },
];

export const CARTA = [
	{
		icon: 'ri-coupon-3-line',
		kicker: 'De viernes a domingo',
		title: 'Menú del día',
		text: 'Primero, segundo y postre, con menús de fin de semana y la opción de pedir platos fuera de carta.',
	},
	{
		icon: 'ri-restaurant-line',
		kicker: 'Para empezar',
		title: 'Patatas revolconas con pulpo',
		text: 'Patatas revolconas con pulpo, uno de los primeros que más se repiten en las reseñas, junto a las ensaladas.',
	},
	{
		icon: 'ri-leaf-line',
		kicker: 'De la huerta',
		title: 'Ensalada de burra',
		text: 'Ensalada de burra y ensaladas mixtas abundantes, con producto fresco y aliños de la casa.',
	},
	{
		icon: 'ri-bowl-line',
		kicker: 'A fuego lento',
		title: 'Arroz caldoso',
		text: 'Arroz caldoso y guisos caseros, de los platos que se cocinan despacio y se sirven en raciones grandes.',
	},
	{
		icon: 'ri-fire-line',
		kicker: 'La parrilla',
		title: 'Solomillo y entrecôte',
		text: 'Carnes a la parrilla: solomillo, entrecôte y chuletón, con guarnición y el punto que pida el cliente.',
	},
	{
		icon: 'ri-restaurant-2-line',
		kicker: 'Cuchara',
		title: 'Albóndigas y guisos',
		text: 'Albóndigas, callos y guisos de la tierra, con el sabor de la cocina de siempre.',
	},
	{
		icon: 'ri-cake-3-line',
		kicker: 'Postres',
		title: 'Tarta de queso casera',
		text: 'Tarta de queso casera y otros postres de la casa, el cierre que más se repite en las reseñas.',
	},
	{
		icon: 'ri-group-line',
		kicker: 'Familias',
		title: 'Menú infantil y raciones',
		text: 'Menú infantil, tronas y raciones para compartir; un mesón pensado para venir en grupo o con niños.',
	},
];

export const VENTAJAS = [
	{ icon: 'ri-coupon-3-line', title: 'Menú diario' },
	{ icon: 'ri-fire-line', title: 'Carnes' },
	{ icon: 'ri-group-line', title: 'Grupos' },
	{ icon: 'ri-parking-box-line', title: 'Aparcamiento' },
];

export const REVIEWS = [
	{
		text: 'Las carnes han estado súper y la ensalada de burra de 10.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Sitio acogedor, mesón de los de siempre, comida casera con innovación y riquísima.',
		rating: 5,
		author: 'Reseña en Google',
		source: 'Google',
	},
	{
		text: 'Cantidad y buen producto. Pedimos ensalada y arroz caldoso, y de segundos albóndigas y carne a la parrilla.',
		rating: 5,
		author: 'Reseña en TripAdvisor',
		source: 'TripAdvisor',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Mesón Emigrante?',
		a: 'En la calle Pedro Ávila, 45, 10710 Zarza de Granadilla (Cáceres), en el Valle del Ambroz. Está cerca de Granadilla y del yacimiento de Cáparra; puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre de viernes a domingo de 13:00 a 23:30 y cierra de lunes a jueves. Otros directorios publican un horario de bar más amplio, así que conviene llamar antes de ir entre semana o en puentes.',
	},
	{
		q: '¿Cómo se reserva una mesa?',
		a: 'Las reservas se gestionan por teléfono, en el 697 20 14 46. La web no tramita reservas. Para grupos, celebraciones y fines de semana es recomendable llamar con antelación.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Cocina casera española y extremeña: menú del día, raciones, patatas revolconas con pulpo, ensalada de burra, arroz caldoso, albóndigas, guisos y carnes a la parrilla como solomillo y entrecôte. De postre, tarta de queso casera y otros dulces de la casa.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. La casa trabaja con menú del día y menús de fin de semana, además de platos fuera de carta. El precio y los platos se consultan en el restaurante o por teléfono; esta web no publica importes sin confirmar.',
	},
	{
		q: '¿Hay opciones sin gluten o para niños?',
		a: 'TripAdvisor recoge opciones sin gluten, y la casa dispone de menú infantil y tronas. Si necesitas alguna adaptación concreta, avisa al reservar por teléfono.',
	},
	{
		q: '¿El restaurante es accesible?',
		a: 'Su ficha de Google indica acceso para sillas de ruedas y asientos adaptados. Si necesitas alguna condición concreta en la mesa, avisa al reservar.',
	},
	{
		q: '¿Se puede ir en grupo o celebrar una comida?',
		a: 'Sí, el comedor es amplio y la casa trabaja con menús para grupos. Llama con antelación para organizar la mesa y el menú, sobre todo los fines de semana.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoVertical9,
		alt: 'Mesón Emigrante, restaurante de Zarza de Granadilla',
	},
	{ src: IMAGES.fotoApaisada3, alt: 'Comedor del Mesón Emigrante' },
	{ src: IMAGES.fotoVertical7, alt: 'Detalle de la mesa en el Mesón Emigrante' },
	{ src: IMAGES.fotoApaisada1, alt: 'Ambiente del mesón en el Valle del Ambroz' },
	{ src: IMAGES.fotoCuadrada2, alt: 'Rincón del restaurante en Zarza de Granadilla' },
	{ src: IMAGES.fotoApaisada8, alt: 'Platos de la cocina del Mesón Emigrante' },
	{ src: IMAGES.fotoVertical5, alt: 'Interior rústico del Mesón Emigrante' },
	{ src: IMAGES.fotoVertical6, alt: 'Fotografía de la ficha de Google Maps del Mesón Emigrante' },
	{ src: IMAGES.fotoVertical4, alt: 'Mesón Emigrante, en la calle Pedro Ávila' },
	{ src: IMAGES.fotoVertical10, alt: 'Otra imagen del Mesón Emigrante en Cáceres' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: 'Bar Restaurante El Emigrante',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34697201446',
	priceRange: '€€',
	currenciesAccepted: 'EUR',
	paymentAccepted: 'Efectivo, tarjeta de crédito',
	servesCuisine: ['Cocina extremeña', 'Cocina mediterránea', 'Cocina casera', 'Carnes a la parrilla'],
	areaServed: [
		{ '@type': 'City', name: 'Zarza de Granadilla' },
		{ '@type': 'AdministrativeArea', name: 'Valle del Ambroz' },
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
			name: 'Asientos adaptados para sillas de ruedas',
			value: true,
		},
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Menú infantil',
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
