/**
 * Datos de Cooperativa Sierra de Espadán (Pl. de la Fuente, 24 · 12414 Algimia de
 * Almonacid, Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Cooperativa Sierra de Espadan.
 *   Feature 0xd6077272736eb81:0xe7c1fb1655f380ce.
 * - Dirección, teléfono, categoría, valoración, reseñas, horario y accesibilidad:
 *   ficha pública de Google (octubre de 2026).
 * - Reapertura del bar restaurante: Ayuntamiento de Algimia de Almonacid,
 *   «Inauguración del bar restaurante Cooperativa» (19 de julio de 2018).
 * - Fotos: galería pública de la ficha (scripts/fetch-maps-photos.mjs).
 *
 * No se publican precios ni una carta cerrada: el menú cambia a diario y el
 * titular no los ha confirmado. Se describen las familias de la carta.
 */

import fotoApaisada1 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-01.jpg';
import fotoApaisada2 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-02.jpg';
import fotoApaisada3 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-03.jpg';
import fotoApaisada4 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-04.jpg';
import fotoApaisada7 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-07.jpg';
import fotoApaisada8 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-08.jpg';
import fotoApaisada9 from '../assets/fotos/cooperativa-sierra-de-espadan-apaisada-09.jpg';
import fotoVertical5 from '../assets/fotos/cooperativa-sierra-de-espadan-vertical-05.jpg';
import fotoVertical6 from '../assets/fotos/cooperativa-sierra-de-espadan-vertical-06.jpg';
import fotoVertical10 from '../assets/fotos/cooperativa-sierra-de-espadan-vertical-10.jpg';

export const IMAGES = {
	fotoApaisada1,
	fotoApaisada2,
	fotoApaisada3,
	fotoApaisada4,
	fotoApaisada7,
	fotoApaisada8,
	fotoApaisada9,
	fotoVertical5,
	fotoVertical6,
	fotoVertical10,
};

const GOOGLE_MAPS =
	'https://www.google.com/maps/place/Cooperativa+Sierra+de+Espadan/@39.9135611,-0.4426775,17z/data=!3m1!4b1!4m6!3m5!1s0xd6077272736eb81:0xe7c1fb1655f380ce!8m2!3d39.9135611!4d-0.4426775!16s%2Fg%2F11gjw8k0_y?authuser=0&hl=es';

export const BUSINESS = {
	name: 'Cooperativa Sierra de Espadán',
	shortName: 'La Cooperativa',
	tagline: 'Cocina casera y terraza en la plaza de la Fuente',
	claim: 'El bar restaurante del pueblo, en la Sierra de Espadán',
	summary:
		'Bar restaurante de la Cooperativa Agrícola Sierra de Espadán, en la plaza de la Fuente de Algimia de Almonacid (Castellón): cocina casera, menú del día, carnes a la brasa, tapas, bocadillos y terraza.',
	street: 'Pl. de la Fuente, 24',
	city: 'Algimia de Almonacid',
	postalCode: '12414',
	region: 'Castellón',
	country: 'ES',
	landmark: 'Sierra de Espadán · Alto Palancia',
	phone: '617 02 59 14',
	phoneHref: 'tel:+34617025914',
	googleMaps: GOOGLE_MAPS,
	googleMapsEmbed:
		'https://maps.google.com/maps?q=39.9135611%2C-0.4426775&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 39.9135611, lng: -0.4426775 },
	featureId: '0xd6077272736eb81:0xe7c1fb1655f380ce',
	placeId: 'ChIJges2Jyd3YA0RzoDzVRb7wec',
	plusCode: 'WH74+CW',
	rating: 4.4,
	reviewCount: 201,
	hours: [
		{ days: 'Lunes', hours: '8:00 – 21:00' },
		{ days: 'Martes', hours: '8:00 – 13:00' },
		{ days: 'Miércoles', hours: '8:00 – 21:00' },
		{ days: 'Jueves', hours: '8:00 – 21:00' },
		{ days: 'Viernes', hours: '8:00 – 24:00' },
		{ days: 'Sábado', hours: '8:00 – 24:00' },
		{ days: 'Domingo', hours: '8:00 – 21:00' },
	],
	hoursNote:
		'Horario de la ficha de Google en octubre de 2026. En fiestas y puentes puede cambiar: llama antes si vienes de lejos.',
	openingHours: [
		{ days: ['Monday'], opens: '08:00', closes: '21:00' },
		{ days: ['Tuesday'], opens: '08:00', closes: '13:00' },
		{ days: ['Wednesday', 'Thursday'], opens: '08:00', closes: '21:00' },
		{ days: ['Friday', 'Saturday'], opens: '08:00', closes: '24:00' },
		{ days: ['Sunday'], opens: '08:00', closes: '21:00' },
	],
	categories: ['Bar restaurante', 'Cocina casera', 'Menú del día', 'Terraza'],
	siteUrl: 'https://cooperativa-sierra-de-espadan.vercel.app',
};

export const SUR_DIGITAL_URL = 'https://sur-digital.vercel.app/';

export const LEGAL = {
	razonSocial: 'Cooperativa Agrícola Sierra de Espadán',
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
		icon: 'ri-restaurant-line',
		title: 'Menú del día',
		text: 'Cocina casera que cambia cada día. El menú se consulta en la barra o por teléfono.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza en la plaza',
		text: 'Mesas al aire libre en la plaza de la Fuente, con la sierra de Espadán de fondo.',
	},
	{
		icon: 'ri-bread-line',
		title: 'Bocadillos y tapas',
		text: 'Bocadillos variados, embutidos y raciones para un almuerzo de pueblo.',
	},
	{
		icon: 'ri-goblet-line',
		title: 'La barra',
		text: 'Café, cerveza y vino de la tierra. El punto de encuentro de Algimia desde las 8:00.',
	},
];

export const CASA_FACTS = [
	{ label: 'La casa', value: 'Cooperativa' },
	{ label: 'Inauguración', value: '2018' },
	{ label: 'Valoración', value: '4,4 ★' },
	{ label: 'Reseñas', value: '201' },
];

export const CARTA = [
	{
		number: '01',
		title: 'Menú del día',
		text: 'Cocina casera de primero, segundo y postre. Cambia cada día, así que lo mejor es preguntar en el local o llamar antes de venir.',
	},
	{
		number: '02',
		title: 'Guisos de cuchara',
		text: 'Platos de siempre, de los que se comen despacio: legumbres, arroces y guisos de temporada.',
	},
	{
		number: '03',
		title: 'Carnes a la brasa',
		text: 'Chuletas y carnes a la parrilla con patatas, al punto de brasa. Uno de los platos que más se ven en la mesa.',
	},
	{
		number: '04',
		title: 'Tapas, raciones y bocadillos',
		text: 'Embutidos, tapas y bocadillos variados para la barra o la terraza. «Variados y sabrosos», dicen en Google.',
	},
	{
		number: '05',
		title: 'Dulces y café',
		text: 'Dulces de la tierra y repostería para terminar, con café o una copa.',
	},
	{
		number: '06',
		title: 'La bodega',
		text: 'Cerveza bien fría, vinos y refrescos. La barra abre a las 8:00 y aguanta hasta la noche.',
	},
];

export const REVIEWS = [
	{
		text: 'La fideuá estaba regular, lo demás muy bueno, la terraza increíble.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Bocadillos variados y sabrosos.',
		rating: 4,
		author: 'Reseña en Google',
	},
	{
		text: 'Buena atención, buen menú, volveremos seguro.',
		rating: 5,
		author: 'Reseña en Google',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Cooperativa Sierra de Espadán?',
		a: 'En la plaza de la Fuente, 24, 12414 Algimia de Almonacid (Castellón), en el centro del pueblo. Puedes abrir la ruta en Google Maps desde esta misma página.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según su ficha de Google, abre todos los días a las 8:00. Lunes, miércoles, jueves y domingo cierra a las 21:00; el martes solo abre de 8:00 a 13:00; y los viernes y sábados alarga hasta las 24:00. En fiestas conviene llamar antes.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. Es cocina casera y cambia a diario, por eso no publicamos el menú en la web: se consulta en el local o llamando al 617 02 59 14.',
	},
	{
		q: '¿Se puede ir solo a tomar algo?',
		a: 'Sí. Además del comedor, hay barra y terraza con tapas, raciones, embutidos y bocadillos. También se puede tomar café o una cerveza sin comer.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, la terraza está en la plaza de la Fuente y es una de las cosas que más destacan las reseñas. En verano y los fines de semana se llena, así que si vienes en grupo conviene avisar.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'Para tomar algo o comer del menú no hace falta reserva. Para grupos y comidas familiares es mejor llamar al 617 02 59 14 con antelación y confirmarlo con el local.',
	},
	{
		q: '¿Es accesible?',
		a: 'Su ficha de Google indica acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta, avisa al llamar.',
	},
	{
		q: '¿Cómo se llega?',
		a: 'Algimia de Almonacid está en la comarca del Alto Palancia, en la entrada del parque natural de la Sierra de Espadán. El bar está en la plaza de la Fuente, en el centro del casco urbano. Lo más sencillo es abrir la ruta en Google Maps.',
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoApaisada1,
		alt: 'Terraza de la Cooperativa Sierra de Espadán con sombrillas rojas y montañas al fondo',
		caption: 'La terraza',
	},
	{
		src: IMAGES.fotoApaisada4,
		alt: 'Fachada de la Cooperativa Agrícola Sierra Espadán de noche, con una hoguera en la plaza',
		caption: 'La fachada, en fiestas',
	},
	{
		src: IMAGES.fotoApaisada2,
		alt: 'Terraza llena una noche de verano en la plaza de la Fuente',
		caption: 'Noche en la plaza',
	},
	{
		src: IMAGES.fotoApaisada3,
		alt: 'Carne a la brasa con patatas servida en la mesa',
		caption: 'Carne a la brasa',
	},
	{
		src: IMAGES.fotoApaisada7,
		alt: 'Mesas de la terraza en la plaza, con las montañas al fondo',
		caption: 'Mesas con vistas',
	},
	{
		src: IMAGES.fotoApaisada8,
		alt: 'Música en directo en la terraza de la cooperativa',
		caption: 'Música en la terraza',
	},
	{
		src: IMAGES.fotoApaisada9,
		alt: 'Guiso de cuchara servido en un plato hondo',
		caption: 'Guiso de cuchara',
	},
	{
		src: IMAGES.fotoVertical5,
		alt: 'Caña de cerveza servida en la barra',
		caption: 'La barra',
	},
	{
		src: IMAGES.fotoVertical6,
		alt: 'Bocadillo de embutido con aceitunas y frutos secos',
		caption: 'Bocadillos',
	},
	{
		src: IMAGES.fotoVertical10,
		alt: 'Bandejas de dulces y repostería variada',
		caption: 'Dulces de la tierra',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/#restaurant`,
	name: BUSINESS.name,
	alternateName: BUSINESS.shortName,
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34617025914',
	servesCuisine: ['Cocina casera', 'Cocina española', 'Tapas'],
	areaServed: [
		{ '@type': 'City', name: 'Algimia de Almonacid' },
		{ '@type': 'AdministrativeArea', name: 'Alto Palancia' },
		{ '@type': 'Place', name: 'Sierra de Espadán' },
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
		{
			'@type': 'LocationFeatureSpecification',
			name: 'Terraza',
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
