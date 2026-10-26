/**
 * Datos de Antic - Restaurante (Carrer d'Herrero, 64D · 12005 Castelló de la Plana).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Antic - Restaurante.
 *   Feature 0xd6000817d86e849:0xa952ca4bc7fc1b97.
 * - Dirección, teléfono, categorías, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Descripción del local y de la cocina: descripción del propietario en Google.
 * - Fotos: galería pública de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: cambian y el titular no los ha
 * confirmado. Se describen las familias de la carta que constan en la ficha, en
 * las fotos y en las reseñas públicas.
 */

import fotoTerraza from '../assets/fotos/restaurante-antic-apaisada-01.jpg';
import fotoFachada from '../assets/fotos/restaurante-antic-apaisada-02.jpg';
import fotoHamburguesa from '../assets/fotos/restaurante-antic-apaisada-05.jpg';
import fotoCarajillo from '../assets/fotos/restaurante-antic-apaisada-09.jpg';
import fotoCalamar from '../assets/fotos/restaurante-antic-cuadrada-07.jpg';
import fotoCafe from '../assets/fotos/restaurante-antic-vertical-03.jpg';
import fotoCarajilloDetalle from '../assets/fotos/restaurante-antic-vertical-04.jpg';
import fotoBocadillo from '../assets/fotos/restaurante-antic-vertical-08.jpg';
import fotoEntrada from '../assets/fotos/restaurante-antic-vertical-10.jpg';
import fotoEnsalada from '../assets/fotos/restaurante-antic-vista-6-06.jpg';

export const IMAGES = {
	fotoTerraza,
	fotoFachada,
	fotoHamburguesa,
	fotoCarajillo,
	fotoCalamar,
	fotoCafe,
	fotoCarajilloDetalle,
	fotoBocadillo,
	fotoEntrada,
	fotoEnsalada,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Antic+-+Restaurante/@39.9783855,-0.0418767,17z/data=!3m1!4b1!4m6!3m5!1s0xd6000817d86e849:0xa952ca4bc7fc1b97!8m2!3d39.9783855!4d-0.0418767!16s%2Fg%2F11g6xb3szw?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Antic - Restaurante',
	shortName: 'Antic',
	tagline: 'Restaurante, cafetería y pizzería en el centro de Castelló',
	claim: 'De la primera cafè a la última pizza',
	summary:
		'Restaurante, bar, cafetería, pizzería y bocatería en el centre de Castelló. Interiores claros, terraza en la calle y cocina sencilla y moderna con menú del día y carta completa.',
	street: "Carrer d'Herrero, 64D",
	city: 'Castelló de la Plana',
	postalCode: '12005',
	region: 'Castellón',
	country: 'ES',
	landmark: 'Centre de Castelló',
	phone: '691 78 62 50',
	phoneHref: 'tel:+34691786250',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.9783855%2C-0.0418767&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.9783855, lng: -0.0418767 },
	featureId: '0xd6000817d86e849:0xa952ca4bc7fc1b97',
	placeId: 'ChIJSeiGfYEAYA0Rlxv8x0vKUqk',
	plusCode: '8CFXXXH5+96',
	rating: 4.2,
	reviewCount: 693,
	hours: [
		{ days: 'Lunes', hours: '7:30 – 23:00' },
		{ days: 'Martes', hours: '7:30 – 23:00' },
		{ days: 'Miércoles', hours: '7:30 – 23:00' },
		{ days: 'Jueves', hours: '7:30 – 23:00' },
		{ days: 'Viernes', hours: '7:30 – 23:00' },
		{ days: 'Sábado', hours: '9:00 – 24:00' },
		{ days: 'Domingo', hours: '9:00 – 16:00' },
	],
	hoursNote:
		'Según la ficha de Google en octubre de 2026. En fiestas o puentes conviene llamar antes: el horario puede cambiar.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '07:30',
			closes: '23:00',
		},
		{ days: ['Saturday'], opens: '09:00', closes: '23:59' },
		{ days: ['Sunday'], opens: '09:00', closes: '16:00' },
	],
	categories: ['Restaurante', 'Bar', 'Cafetería', 'Hamburguesería', 'Pizzería', 'Bocatería'],
	siteUrl: 'https://restaurante-antic.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Antic - Restaurante',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'La casa', href: '#casa' },
	{ label: 'La carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#visitanos' },
];

export const MARQUEE = [
	'Menú del día',
	'Pizzas al horno',
	'Bocadillos de calamares',
	'Paellas y arroces',
	'Hamburguesas',
	'Cafés y carajillos',
	'Terraza',
];

export const MOMENTS = [
	{
		time: '7:30',
		title: 'Café de primera',
		text: 'La cafetería arranca con café, tostadas y carajillo. El centro se despierta en la calle Herrero.',
		icon: 'ri-cup-line',
	},
	{
		time: '13:30',
		title: 'Menú del día',
		text: 'Cocina sencilla y moderna, con menú y carta completa. La pausa larga del mediodía.',
		icon: 'ri-restaurant-2-line',
	},
	{
		time: '17:00',
		title: 'La terraza',
		text: 'Sillas en la calle y una cerveza bien fría. Aquí la sobremesa se alarga sin prisa.',
		icon: 'ri-sun-line',
	},
	{
		time: '20:30',
		title: 'Pizzas y hamburguesas',
		text: 'Cena informal hasta el cierre: pizzas, hamburguesas y bocadillos recién hechos.',
		icon: 'ri-fire-line',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,2 ★' },
	{ label: 'Reseñas', value: '693' },
	{ label: 'Terraza', value: 'Sí' },
	{ label: 'Todos los días', value: 'Abierto' },
];

export const CARTA = [
	{
		number: '01',
		title: 'Desayunos y cafés',
		text: 'Café con leche, cortado y carajillo desde primera hora. Tostadas y bollería para acompañar. La cafetería abre a las 7:30.',
		tag: 'Desde las 7:30',
	},
	{
		number: '02',
		title: 'Bocadillos',
		text: 'Montados al momento, con el pan crujiente y el relleno a la vista. El de calamares a la romana y el de sepia son los que más se piden.',
		tag: 'Mostrador',
	},
	{
		number: '03',
		title: 'Menú del día',
		text: 'Cocina sencilla y moderna, con varios platos para elegir. Es la opción de mediodía y cambia a diario: se consulta en el local o por teléfono.',
		tag: 'Mediodía',
	},
	{
		number: '04',
		title: 'Pizzas y hamburguesas',
		text: 'Pizzas al horno y hamburguesas con patatas, para comer sin ceremonia. También a la hora de la cena.',
		tag: 'Horno',
	},
	{
		number: '05',
		title: 'Paellas y arroces',
		text: 'Uno de los platos que más se repiten en las reseñas. Se preparan en el local; conviene confirmar disponibilidad al llamar.',
		tag: 'Cocina de casa',
	},
	{
		number: '06',
		title: 'Ensaladas, pescados y carnes',
		text: 'Ensaladas completas, calamar a la plancha y platos de pescado y carne. La parte más de restaurante de la carta.',
		tag: 'Carta completa',
	},
];

export const REVIEWS = [
	{
		text: 'Paellas y bocadillos de calamares/sepia espectaculares.',
		rating: 5,
		source: 'Google',
	},
	{
		text: 'Sitio agradable, camareras atentas, buen servicio en general.',
		rating: 3,
		source: 'Google',
	},
	{
		text: 'Bocadillos muy ricos con un buen ambiente y un magnífico servicio.',
		rating: 5,
		source: 'Google',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoEntrada,
		alt: 'Fachada de Antic en la calle Herrero, con el rótulo Bocatería Cafetería Antic y la terraza delante',
		caption: 'La entrada',
	},
	{
		src: IMAGES.fotoCafe,
		alt: 'Café con leche con dibujo de corazón en la espuma, servido en taza blanca',
		caption: 'El café',
	},
	{
		src: IMAGES.fotoBocadillo,
		alt: 'Bocadillo de calamares a la romana con alioli en pan crujiente',
		caption: 'Bocadillo de calamares',
	},
	{
		src: IMAGES.fotoHamburguesa,
		alt: 'Hamburguesa con lechuga, tomate y cebolla acompañada de patatas fritas',
		caption: 'Hamburguesa',
	},
	{
		src: IMAGES.fotoCalamar,
		alt: 'Calamar a la plancha con patatas, gambas y mejillones en salsa',
		caption: 'Calamar a la plancha',
	},
	{
		src: IMAGES.fotoEnsalada,
		alt: 'Ensalada con medallones de queso de cabra, tomate, pepino y cebolla crujiente',
		caption: 'Ensalada de queso de cabra',
	},
	{
		src: IMAGES.fotoCarajillo,
		alt: 'Carajillo servido en vaso con hielo, sobre un platillo blanco y amarillo',
		caption: 'Carajillo',
	},
	{
		src: IMAGES.fotoTerraza,
		alt: 'Veladores de la terraza de Antic bajo una sombrilla blanca en la calle Herrero',
		caption: 'La terraza',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Antic - Restaurante?',
		a: "En el Carrer d'Herrero, 64D, 12005 Castelló de la Plana, en el centro de la ciudad. Puedes abrir la ruta exacta en Google Maps desde esta misma página.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:30 a 23:00, el sábado de 9:00 a 24:00 y el domingo de 9:00 a 16:00. Es horario de la ficha de Google; en festivos conviene llamar antes.',
	},
	{
		q: '¿Se puede desayunar?',
		a: 'Sí. Es cafetería y abre a las 7:30 de lunes a viernes, con café, tostadas y bollería. El fin de semana empieza a las 9:00.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. La ficha describe una cocina sencilla y moderna con menú y carta completa. Los platos cambian a diario y el precio se consulta en el local o llamando al 691 78 62 50.',
	},
	{
		q: '¿Hay terraza?',
		a: "Sí, el local tiene terraza con mesas en la calle Herrero, además de interiores claros. En días de lluvia o mucho calor conviene confirmar que está montada.",
	},
	{
		q: '¿Qué se puede pedir además del menú?',
		a: 'Carta completa: bocadillos, pizzas, hamburguesas con patatas, paellas y arroces, ensaladas, pescados y carnes. También café y carajillo a cualquier hora.',
	},
	{
		q: '¿Es apto para familias?',
		a: 'La descripción de la ficha lo presenta como un local de ambiente agradable y apto para todos los públicos. Hay mesas dentro y fuera.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica acceso, aseo, asientos y aparcamiento adaptados para sillas de ruedas. Si necesitas una condición concreta, avisa al llamar.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No hay reserva online. Para grupos o para el mediodía conviene llamar con antelación al 691 78 62 50 y confirmar la mesa con el local.',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: ['Antic Castelló', 'Antic Restaurante Castellón', 'Bocatería Antic'],
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34691786250',
	priceRange: '€€',
	servesCuisine: ['Mediterránea', 'Cocina casera', 'Pizza', 'Hamburguesas', 'Arroces'],
	areaServed: [
		{ '@type': 'City', name: 'Castelló de la Plana' },
		{ '@type': 'AdministrativeArea', name: 'Plana Alta' },
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
	openingHoursSpecification: BUSINESS.openingHours.map((tramo) => ({
		'@type': 'OpeningHoursSpecification',
		dayOfWeek: tramo.days,
		opens: tramo.opens,
		closes: tramo.closes,
	})),
	amenityFeature: [
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Terraza',
			value: true,
		},
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
