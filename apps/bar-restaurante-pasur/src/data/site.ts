/**
 * Datos de Bar Restaurante Pasur (Pol. Ind. Autopista Sur, Calle Peri 15 ·
 * Nave 19 · 12006 Castellón de la Plana).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Bar Restaurante Pasur.
 *   Feature 0xd6000a61e64be89:0xe58d5ccf26c72bb3.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter del local y menú: reseñas públicas de Google y directorios de
 *   hostelería (menú diario, cocina casera, almuerzos de polígono).
 * - Fotos: galería pública de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios: el menú y los importes cambian y el titular no los ha
 * confirmado. Se describen las familias de la carta y el funcionamiento del menú.
 */

import fotoApaisada1 from '../assets/fotos/bar-restaurante-pasur-apaisada-01.jpg';
import fotoApaisada4 from '../assets/fotos/bar-restaurante-pasur-apaisada-04.jpg';
import fotoApaisada7 from '../assets/fotos/bar-restaurante-pasur-apaisada-07.jpg';
import fotoApaisada8 from '../assets/fotos/bar-restaurante-pasur-apaisada-08.jpg';
import fotoPanoramica6 from '../assets/fotos/bar-restaurante-pasur-panoramica-06.jpg';
import fotoVertical2 from '../assets/fotos/bar-restaurante-pasur-vertical-02.jpg';
import fotoVertical3 from '../assets/fotos/bar-restaurante-pasur-vertical-03.jpg';
import fotoVertical5 from '../assets/fotos/bar-restaurante-pasur-vertical-05.jpg';
import fotoVertical9 from '../assets/fotos/bar-restaurante-pasur-vertical-09.jpg';

export const IMAGES = {
	fotoApaisada1,
	fotoApaisada4,
	fotoApaisada7,
	fotoApaisada8,
	fotoPanoramica6,
	fotoVertical2,
	fotoVertical3,
	fotoVertical5,
	fotoVertical9,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Bar+Restaurante+Pasur/@39.977112,-0.066699,17z/data=!3m1!4b1!4m6!3m5!1s0xd6000a61e64be89:0xe58d5ccf26c72bb3!8m2!3d39.977112!4d-0.066699!16s%2Fg%2F11b6d7t66n?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Bar Restaurante Pasur',
	shortName: 'Pasur',
	tagline: 'Cocina casera y almuerzos desde las 5:40',
	claim: 'El bar de polígono donde empieza el turno',
	summary:
		'Bar restaurante en el Polígono Industrial Autopista Sur de Castellón de la Plana: desayunos, almuerzos, bocadillos, menú del día y cocina casera de lunes a viernes.',
	street: 'Calle Peri, 15 · Nave 19',
	city: 'Castellón de la Plana',
	postalCode: '12006',
	region: 'Castellón',
	country: 'ES',
	landmark: 'Pol. Ind. Autopista Sur',
	phone: '622 79 11 61',
	phoneHref: 'tel:+34622791161',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.977112%2C-0.066699&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.977112, lng: -0.066699 },
	featureId: '0xd6000a61e64be89:0xe58d5ccf26c72bb3',
	placeId: 'ChIJib5kHqYAYA0RsyvHJs9cjeU',
	plusCode: 'WHGM+R8',
	rating: 4.4,
	reviewCount: 671,
	hours: [
		{ days: 'Lunes', hours: '5:40 – 16:00' },
		{ days: 'Martes', hours: '5:40 – 16:00' },
		{ days: 'Miércoles', hours: '5:40 – 16:00' },
		{ days: 'Jueves', hours: '5:40 – 16:00' },
		{ days: 'Viernes', hours: '5:30 – 16:00' },
		{ days: 'Sábado', hours: 'Cerrado' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. Solo abre de lunes a viernes, de madrugada y mediodía; en fiestas o puentes conviene llamar antes.',
	openingHours: [
		{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'], opens: '05:40', closes: '16:00' },
		{ days: ['Friday'], opens: '05:30', closes: '16:00' },
	],
	categories: ['Bar restaurante', 'Cocina casera', 'Almuerzos', 'Menú del día', 'Bocadillos'],
	siteUrl: 'https://bar-restaurante-pasur.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Bar Restaurante Pasur',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Octubre de 2026',
};

export const NAV = [
	{ label: 'El sitio', href: '#sitio' },
	{ label: 'La carta', href: '#carta' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Visítanos', href: '#visitanos' },
];

export const TURNO = [
	{ value: '05:40', label: 'Abrimos' },
	{ value: '16:00', label: 'Cerramos' },
	{ value: '4,4', label: '671 reseñas' },
	{ value: 'L–V', label: 'Solo entre semana' },
];

export const CASA_FACTS = [
	{ label: 'Apertura', value: '5:40' },
	{ label: 'Comedor', value: 'Amplio' },
	{ label: 'Cocina', value: 'Casera' },
	{ label: 'Valoración', value: '4,4 ★' },
];

export const CARTA = [
	{
		number: '01',
		title: 'A primera hora',
		text: 'Café, tostadas y bocadillos desde que se abre. El primer alto del turno, antes de que arranque el día.',
	},
	{
		number: '02',
		title: 'Bocadillos',
		text: 'Gran variedad y buen tamaño. «Gran variedad de bocadillos, servicio rápido y muy buen trato», resumen en Google.',
	},
	{
		number: '03',
		title: 'Menú del día',
		text: 'Varios primeros y segundos para elegir, con postre o café. Cambia cada día y se consulta en la barra.',
	},
	{
		number: '04',
		title: 'Cocina casera',
		text: 'Guisos, arroces y platos de cuchara. Comida sencilla, de la que se come todos los días.',
	},
	{
		number: '05',
		title: 'De la vitrina',
		text: 'Platos preparados listos para servir, para quien come con el tiempo justo y no quiere esperar.',
	},
	{
		number: '06',
		title: 'Postre y café',
		text: 'Para cerrar el almuerzo antes de volver al tajo: postre, café o una copa rápida en la barra.',
	},
];

export const REVIEWS = [
	{
		text: 'Buen sitio para almorzar, mucha variedad y las camareras muy simpáticas.',
		rating: 4,
	},
	{
		text: 'Buen trato, atienden bien y rápido.',
		rating: 5,
	},
	{
		text: 'Gran variedad de bocadillos, servicio rápido y muy buen trato.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurante Pasur?',
		a: 'En la calle Peri, 15, nave 19, dentro del Polígono Industrial Autopista Sur de Castellón de la Plana (12006). El rótulo de «Bar Restaurante Pasur» está en la fachada, junto a la entrada. Puedes abrir la ruta en Google Maps desde esta página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a jueves de 5:40 a 16:00 y los viernes de 5:30 a 16:00. Sábados y domingos cierra. Es un horario de turno de mañana: desayuno, almuerzo y comida, sin servicio de noche.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El menú cambia cada día y suele tener varios primeros y segundos para elegir, con postre o café. Los platos y el precio se consultan en la barra o llamando al 622 79 11 61.',
	},
	{
		q: '¿Se puede desayunar o almorzar?',
		a: 'Sí. El bar abre a las 5:40, así que hay café y bocadillos desde primera hora. A media mañana funciona el almuerzo, con bocadillos, platos de la vitrina y raciones.',
	},
	{
		q: '¿Tienen bocadillos para llevar?',
		a: 'Sí, hay una carta amplia de bocadillos y se pueden pedir para llevar. Para pedidos grandes o de un grupo de trabajo, mejor llamar antes al 622 79 11 61.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta, avisa al llamar.',
	},
	{
		q: '¿Se puede reservar mesa?',
		a: 'No hay reserva online. El comedor es amplio, pero para grupos conviene llamar con antelación al 622 79 11 61 y confirmarlo con el local.',
	},
	{
		q: '¿Dónde se aparca?',
		a: 'Al estar dentro del polígono, se aparca en la misma calle Peri y en las calles de las naves del entorno. A la hora del almuerzo se llena, así que conviene llegar con un poco de margen.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada8,
		alt: 'Fachada de Bar Restaurante Pasur en el polígono, con el rótulo sobre la puerta',
		caption: 'La fachada',
	},
	{
		src: IMAGES.fotoApaisada1,
		alt: 'Comedor amplio de Bar Restaurante Pasur con mesas y sillas de madera',
		caption: 'El comedor',
	},
	{
		src: IMAGES.fotoApaisada4,
		alt: 'Bocadillo grande de carne servido en el bar, con un refresco al lado',
		caption: 'Bocadillo de la casa',
	},
	{
		src: IMAGES.fotoPanoramica6,
		alt: 'Vitrina de Bar Restaurante Pasur con platos preparados y guisos',
		caption: 'La vitrina del día',
	},
	{
		src: IMAGES.fotoVertical2,
		alt: 'Pescado a la plancha con perejil y patatas fritas',
		caption: 'Pescado y patatas',
	},
	{
		src: IMAGES.fotoApaisada7,
		alt: 'Ensalada con lechuga, tomate, aceitunas y cebolla morada',
		caption: 'Ensalada',
	},
	{
		src: IMAGES.fotoVertical3,
		alt: 'Mesas de madera del comedor junto a la pared azul y los ventanales',
		caption: 'Mesas de madera',
	},
	{
		src: IMAGES.fotoVertical5,
		alt: 'Vista amplia del comedor de Pasur con todas las mesas preparadas',
		caption: 'Comedor amplio',
	},
	{
		src: IMAGES.fotoVertical9,
		alt: 'Vaso de cerveza fría servido en la barra de Pasur',
		caption: 'Cerveza fría',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: ['Pasur', 'Bar Pasur', 'Bar Restaurante Pasur Castellón'],
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34622791161',
	servesCuisine: ['Cocina casera', 'Cocina española', 'Mediterránea', 'Bocadillos'],
	areaServed: [
		{ '@type': 'City', name: 'Castellón de la Plana' },
		{ '@type': 'Place', name: 'Polígono Industrial Autopista Sur' },
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
