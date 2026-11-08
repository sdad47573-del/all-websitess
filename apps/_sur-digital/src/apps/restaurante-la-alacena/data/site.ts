/**
 * Datos de La Alacena (Carrer Isidoro Peris, 18 · 12200 Onda, Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Alacena.
 *   Feature 0xd600a6241345ac3:0x93c98475276d638f.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Carácter de la casa, mostrador, bocadillos, carnes y menú: reseñas públicas,
 *   GuiaOnda y publicaciones del propio local en redes.
 * - Fotos: galería pública de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios: el menú y los importes cambian y el titular no los ha
 * confirmado. Se describen las familias de la carta y el funcionamiento del menú.
 */

import fotoApaisada1 from '../assets/fotos/restaurante-la-alacena-apaisada-01.jpg';
import fotoApaisada3 from '../assets/fotos/restaurante-la-alacena-apaisada-03.jpg';
import fotoApaisada7 from '../assets/fotos/restaurante-la-alacena-apaisada-07.jpg';
import fotoPanoramica2 from '../assets/fotos/restaurante-la-alacena-panoramica-02.jpg';
import fotoVertical4 from '../assets/fotos/restaurante-la-alacena-vertical-04.jpg';
import fotoVertical5 from '../assets/fotos/restaurante-la-alacena-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/restaurante-la-alacena-vertical-06.jpg';
import fotoVertical8 from '../assets/fotos/restaurante-la-alacena-vertical-08.jpg';
import fotoVertical9 from '../assets/fotos/restaurante-la-alacena-vertical-09.jpg';
import fotoVertical10 from '../assets/fotos/restaurante-la-alacena-vertical-10.jpg';

export const IMAGES = {
	fotoApaisada1,
	fotoApaisada3,
	fotoApaisada7,
	fotoPanoramica2,
	fotoVertical4,
	fotoVertical5,
	fotoVertical6,
	fotoVertical8,
	fotoVertical9,
	fotoVertical10,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/La+Alacena/@39.9670517,-0.2605443,17z/data=!3m1!4b1!4m6!3m5!1s0xd600a6241345ac3:0x93c98475276d638f!8m2!3d39.9670517!4d-0.2605443!16s%2Fg%2F11g6vm4by8?authuser=0&hl=es';

export const BUSINESS = {
	name: 'La Alacena',
	shortName: 'La Alacena',
	tagline: 'Desayunos, almuerzos y carnes a la brasa en Onda',
	claim: 'La despensa de Onda, abierta todo el día',
	summary:
		'Bar restaurante de cocina casera en Onda (Castellón): desayunos, almuerzos, bocadillos montados en el mostrador, menú del día y carnes a la brasa.',
	street: 'Carrer Isidoro Peris, 18',
	city: 'Onda',
	postalCode: '12200',
	region: 'Castellón',
	country: 'ES',
	landmark: 'Onda · Plana Baixa',
	phone: '964 84 69 49',
	phoneHref: 'tel:+34964846949',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.9670517%2C-0.2605443&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.9670517, lng: -0.2605443 },
	featureId: '0xd600a6241345ac3:0x93c98475276d638f',
	placeId: 'ChIJw1o0QWIKYA0Rj2NtJ3WEyZM',
	plusCode: 'XP8Q+RQ',
	rating: 4.5,
	reviewCount: 453,
	hours: [
		{ days: 'Lunes', hours: '8:00 – 16:00' },
		{ days: 'Martes', hours: '8:00 – 16:00' },
		{ days: 'Miércoles', hours: '8:00 – 16:00' },
		{ days: 'Jueves', hours: '8:00 – 16:00' },
		{ days: 'Viernes', hours: '8:00 – 16:00' },
		{ days: 'Sábado', hours: '8:00 – 16:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026: abre de lunes a sábado, de 8:00 a 16:00, y cierra los domingos. En fiestas o puentes conviene llamar antes.',
	openingHours: [
		{
			days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '08:00',
			closes: '16:00',
		},
	],
	categories: ['Bar restaurante', 'Cocina casera', 'Desayunos', 'Almuerzos', 'Menú del día', 'Carnes a la brasa'],
	siteUrl: 'https://www.sur-digital.com/restaurante-la-alacena',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'La Alacena',
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

export const HIGHLIGHTS = [
	{
		icon: 'ri-cup-line',
		title: 'Desayunos',
		text: 'Café, tostadas y bocadillos desde las 8:00. El carajillo de la casa tiene su clientela.',
	},
	{
		icon: 'ri-bread-line',
		title: 'El mostrador',
		text: 'Se elige y se monta el bocadillo o el plato: carnes a la brasa y especialidades de la casa.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Menú del día',
		text: 'Generoso y casero, de lunes a viernes. Los fines de semana se pide de carta.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Carnes a la brasa',
		text: 'Chuletón, secreto ibérico y parrillada. Lo que más se pide, según quienes repiten.',
	},
];

export const CASA_FACTS = [
	{ label: 'Valoración', value: '4,5 ★' },
	{ label: 'Reseñas', value: '453' },
	{ label: 'Horario', value: 'L–S' },
	{ label: 'En Onda', value: 'Centro' },
];

export const CARTA = [
	{
		number: '01',
		title: 'Desayunos',
		text: 'Café, tostadas y bollería desde las 8:00. El carajillo acompaña a media mañana como manda la tradición.',
	},
	{
		number: '02',
		title: 'Bocadillos',
		text: 'Se montan en el mostrador, con pan crujiente y el relleno que se elige. El de secreto ibérico es de los que se repiten.',
	},
	{
		number: '03',
		title: 'Almuerzos',
		text: 'Bocadillo o plato a media mañana. «Los bocadillos para almorzar son muy recomendables, súper ricos», dicen en Google.',
	},
	{
		number: '04',
		title: 'Menú del día',
		text: 'De lunes a viernes, con varios platos para elegir y postre. Cocina casera, generosa y sin complicaciones.',
	},
	{
		number: '05',
		title: 'Carnes a la brasa',
		text: 'Chuletón, secreto ibérico y parrillada, con patatas. La parrilla es el centro de la carta.',
	},
	{
		number: '06',
		title: 'Arroces y cocina de casa',
		text: 'Paella y platos de siempre, de los que salen de la cocina al comedor sin adornos.',
	},
	{
		number: '07',
		title: 'Postres',
		text: 'Postres de verdad para terminar el menú, con café o un chupito de la casa.',
	},
	{
		number: '08',
		title: 'La barra',
		text: 'Café, cerveza fría y vino de la tierra. El mostrador donde empieza y termina la comida.',
	},
];

export const REVIEWS = [
	{
		text: 'Además los bocadillos para almorzar muy recomendables, súper ricos.',
		rating: 5,
		source: 'Google',
	},
	{
		text: 'He ido varias veces y tienen muy buena cocina.',
		rating: 5,
		source: 'Google',
	},
	{
		text: 'Increíble menú diario y carnes a la brasa… Postres de verdad, un placer.',
		rating: 5,
		source: 'TripAdvisor',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Alacena?',
		a: 'En el Carrer Isidoro Peris, 18, 12200 Onda (Castellón), en el centro del municipio. Puedes abrir la ruta exacta en Google Maps desde esta misma página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a sábado de 8:00 a 16:00 y cierra los domingos. Es horario de desayuno, almuerzo y comida; en fiestas o puentes conviene llamar antes.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí, de lunes a viernes. Es un menú casero y generoso, con varios platos para elegir y postre. Los platos y el precio se consultan en el local o llamando al 964 84 69 49.',
	},
	{
		q: '¿Y el fin de semana?',
		a: 'El sábado se come de carta. Según las reseñas, el menú diario se sirve de lunes a viernes y el fin de semana se pide de la carta.',
	},
	{
		q: '¿Se puede desayunar o almorzar?',
		a: 'Sí. Abre a las 8:00 con café, tostadas y bocadillos, y a media mañana funciona el almuerzo con bocadillos montados en el mostrador o platos de la casa.',
	},
	{
		q: '¿Qué hay que probar?',
		a: 'Las carnes a la brasa, el bocadillo de secreto ibérico y el chuletón con patatas son lo que más se repite en las reseñas. También la paella y los postres caseros.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'No hay reserva online. Para el mediodía, sobre todo los fines de semana, conviene llamar con antelación al 964 84 69 49 y confirmar la mesa con el local.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta, avisa al llamar.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada1,
		alt: 'Comedor de La Alacena en Onda, con mesas, sillas negras y cuadros en la pared',
		caption: 'El comedor',
	},
	{
		src: IMAGES.fotoApaisada3,
		alt: 'Dos bocadillos grandes de La Alacena servidos en una bandeja',
		caption: 'Bocadillos',
	},
	{
		src: IMAGES.fotoApaisada7,
		alt: 'Fachada de La Alacena en Onda, con el rótulo iluminado sobre la entrada',
		caption: 'La fachada',
	},
	{
		src: IMAGES.fotoVertical4,
		alt: 'Costillas a la brasa con maíz, pimientos y salsa',
		caption: 'A la brasa',
	},
	{
		src: IMAGES.fotoVertical5,
		alt: 'Entrecot a la brasa con patatas y un cuenco de frutos secos',
		caption: 'Chuletón y patatas',
	},
	{
		src: IMAGES.fotoVertical6,
		alt: 'Paella servida en la mesa de La Alacena',
		caption: 'Paella',
	},
	{
		src: IMAGES.fotoVertical8,
		alt: 'Postre de crema con canela y azúcar en La Alacena',
		caption: 'Postre de la casa',
	},
	{
		src: IMAGES.fotoVertical9,
		alt: 'Ensalada con lechuga, tomate, aceitunas y pepinillos',
		caption: 'Ensalada',
	},
	{
		src: IMAGES.fotoVertical10,
		alt: 'Chuletas a la brasa con patatas panadera',
		caption: 'Parrilla',
	},
	{
		src: IMAGES.fotoPanoramica2,
		alt: 'Vaso de cerveza fría servido en la barra de La Alacena',
		caption: 'La barra',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurante`,
	name: BUSINESS.name,
	alternateName: ['La Alacena Onda', 'Restaurante La Alacena'],
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34964846949',
	servesCuisine: ['Cocina casera', 'Cocina española', 'Carnes a la brasa', 'Mediterránea'],
	areaServed: [
		{ '@type': 'City', name: 'Onda' },
		{ '@type': 'AdministrativeArea', name: 'Plana Baixa' },
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
