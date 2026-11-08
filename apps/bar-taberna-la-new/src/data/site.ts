/**
 * Datos de Taberna La New, taberna de cocina casera malagueña en Teatinos (Málaga).
 *
 * Todo lo que aparece aquí procede de fuentes públicas del propio local: su web de
 * reservas (CoverManager), su Instagram (@tabernalanew), la ficha de Google Maps y la
 * prensa (Diario Sur). No hay cifras inventadas: si un dato no está publicado (valoración
 * en Google, carta con precios, datos legales), se deja para completarlo.
 */

/**
 * Fotografías reales del local, publicadas por el propio negocio en su web de reservas.
 * Los nombres de archivo son descriptivos porque Google Imágenes los indexa.
 */
import portada from '../assets/fotos/taberna-la-new-portada.jpg';
import esencia from '../assets/fotos/taberna-la-new-esencia.jpg';
import foto1 from '../assets/fotos/taberna-la-new-malaga-1.jpg';
import foto2 from '../assets/fotos/taberna-la-new-malaga-2.jpg';
import foto3 from '../assets/fotos/taberna-la-new-malaga-3.jpg';
import foto4 from '../assets/fotos/taberna-la-new-malaga-4.jpg';
import foto5 from '../assets/fotos/taberna-la-new-malaga-5.jpg';
import foto6 from '../assets/fotos/taberna-la-new-malaga-6.jpg';

export const IMAGES = {
	portada,
	esencia,
	foto1,
	foto2,
	foto3,
	foto4,
	foto5,
	foto6,
};

export const BUSINESS = {
	name: 'Taberna La New',
	shortName: 'La New',
	tagline: 'Tradición malagueña con alma nueva',
	claim: 'Sabores con alma y tradición malagueña',
	summary:
		'Taberna de cocina casera malagueña en Teatinos (Málaga): guisos a fuego lento, producto fresco y tapas contemporáneas para compartir. Reservas todos los días.',
	street: 'Avenida de Gregorio Prieto, 19',
	local: 'Local 2',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono published en la web de reservas del local. */
	phoneDisplay: '951 43 20 89',
	phoneHref: 'tel:+34951432089',
	/** Línea de reservas publicada en su Instagram. */
	reservasDisplay: '611 67 21 97',
	reservasHref: 'tel:+34611672197',
	/** Segunda línea de reservas. */
	reservasAltDisplay: '624 04 50 09',
	reservasAltHref: 'tel:+34624045009',
	instagram: 'https://www.instagram.com/tabernalanew/',
	/** Sistema de reservas en línea que usa el local (CoverManager). */
	reservasUrl: 'https://restaurante.covermanager.com/taberna-la-new-malaga/',
	googleMaps:
		'https://www.google.com/maps/place/Taberna+la+New/@36.7205856,-4.4785194,15z/data=!4m10!1m2!2m1!1sRestaurantes!3m6!1s0xd72f75569404245:0xda688774cee8fdc0!8m2!3d36.7160292!4d-4.4632347!15sCgxSZXN0YXVyYW50ZXNaDiIMcmVzdGF1cmFudGVzkgEKcmVzdGF1cmFudJoBRENpOURRVWxSUVVOdlpFTm9kSGxqUmpsdlQyMUdSbFI2VmtKVE1rWkpWVzFrZWsxV1FuTldNVUp3VWtoR01GSlhZeEFC4AEA-gEECAAQRA!16s%2Fg%2F11x8w9xvdk',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20de%20Gregorio%20Prieto%2C%2019%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7160292, lng: -4.4632347 },
	cuisine: ['Cocina malagueña', 'Cocina casera', 'Tapas', 'Guisos'],
	metro: 'Metro L1 · Ciudad de la Justicia',
	/**
	 * URL canónica del sitio: se usa en el canonical, el og:url, el sitemap y los datos
	 * estructurados. Si el dominio final cambia, actualiza también `astro.config.mjs`
	 * (`site`) y `public/robots.txt`.
	 */
	siteUrl: 'https://taberna-lanew.vercel.app',
};

/**
 * Datos legales del titular del sitio (LSSI-CE).
 *
 * Rellena los tres campos antes de publicar:
 *
 * 	razonSocial: 'Taberna La New S.L.',
 * 	nif: 'B12345678',
 * 	email: 'info@tabernalanew.es',
 *
 * Al rellenarlos, el aviso amarillo de /aviso-legal desaparece solo y el correo pasa a
 * ser un enlace mailto. No hace falta tocar la página.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'La taberna', href: '#taberna' },
	{ label: 'Nuestra esencia', href: '#esencia' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Contacto', href: '#contacto' },
];

/** Secciones con página propia (no anclas de la portada). */
export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

/** Horario publicado por el local: dos servicios, todos los días. */
export const HOURS = [
	{ service: 'Comida', days: 'Lunes a domingo', hours: '12:00 – 16:00' },
	{ service: 'Cena', days: 'Lunes a domingo', hours: '20:00 – 00:00' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Guisos a fuego lento',
		text: 'Los guisos de toda la vida, cocinados despacio y servidos para compartir con pan.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina casera malagueña',
		text: 'Cocina tradicional elaborada con el máximo mimo y producto fresco de nuestra tierra.',
	},
	{
		icon: 'ri-copper-diamond-line',
		title: 'Tapas contemporáneas',
		text: 'La tradición con mirada actual, sin perder de vista el origen de cada plato.',
	},
	{
		icon: 'ri-map-pin-line',
		title: 'En pleno Teatinos',
		text: 'En la Avenida de Gregorio Prieto, junto a la Ciudad de la Justicia y el metro.',
	},
];

/** Los dos pilares con los que el local se describe en su propia web. */
export const PILARES = [
	{
		icon: 'ri-stock-line',
		title: 'Tradición',
		text: 'Un rincón con alma malagueña: producto fresco seleccionado de nuestra tierra, guisos de toda la vida y el cariño de una taberna de barrio.',
	},
	{
		icon: 'ri-sparkling-line',
		title: 'Actualidad',
		text: 'El dinamismo de la ciudad se cuela en la carta: tapas contemporáneas pensadas para compartir, con la raíz malagueña siempre presente.',
	},
];

/** Mención de prensa real (título del artículo, sin parafrasear). */
export const PRESS = {
	outlet: 'Diario Sur',
	date: '24 de octubre de 2025',
	text: 'Taberna la New: renovando la tradición malagueña con personalidad e innovación culinaria',
};

/** Reseñas publicadas en la web de reservas del propio local. */
export const REVIEWS = [
	{
		author: 'Comunidad La New',
		text: 'La comida es excelente, todo casero y con un sabor andaluz increíble. El ambiente es super acogedor y el trato del personal te hace sentir como en casa. ¡Recomendado al 100%!',
	},
	{
		author: 'Manuel R.',
		text: 'Un lugar ideal en Teatinos para disfrutar de unas tapas espectaculares y buenos vinos. Las raciones son contundentes y el servicio es rápido y muy atento. ¡Volveremos seguro!',
	},
	{
		author: 'Cristina G.',
		text: 'Impresionante la carrillada y el ambiente de la taberna. Todo cuidado al detalle, la comida deliciosa y una relación calidad-precio magnífica. Una experiencia fantástica.',
	},
];

/** Servicios atribuidos a la ficha pública del local. */
export const FEATURES = [
	{ icon: 'ri-sun-line', label: 'Mesas al aire libre' },
	{ icon: 'ri-takeaway-line', label: 'Comida para llevar' },
	{ icon: 'ri-wheelchair-line', label: 'Acceso para sillas de ruedas' },
	{ icon: 'ri-bank-card-line', label: 'Se aceptan tarjetas' },
	{ icon: 'ri-snowflake-line', label: 'Aire acondicionado' },
	{ icon: 'ri-group-line', label: 'Grupos para compartir' },
	{ icon: 'ri-calendar-check-line', label: 'Reservas por teléfono y online' },
	{ icon: 'ri-empathize-line', label: 'Trato cercano' },
];

/** Preguntas frecuentes respondidas con datos publicados por el local. */
export const FAQ = [
	{
		q: '¿Dónde está Taberna La New?',
		a: 'En la Avenida de Gregorio Prieto 19, local 2, en el barrio de Teatinos-Universidad de Málaga (29010), junto a la Ciudad de la Justicia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abrimos todos los días: de 12:00 a 16:00 en el servicio de comida y de 20:00 a 00:00 en el de cena.',
	},
	{
		q: '¿Cómo reservo mesa?',
		a: `Por teléfono en el ${BUSINESS.reservasDisplay} o en el ${BUSINESS.reservasAltDisplay}, y también online desde la página de reservas del local.`,
	},
	{
		q: '¿Qué se cocina aquí?',
		a: 'Cocina casera malagueña: guisos cocinados a fuego lento, producto fresco y tapas contemporáneas, todo pensado para compartir.',
	},
	{
		q: '¿Se puede comer en la terraza?',
		a: 'Sí, el local cuenta con mesas al aire libre, además del salón climatizado.',
	},
	{
		q: '¿Se puede pedir comida para llevar?',
		a: 'Sí, se puede pedir comida para llevar en el propio local.',
	},
	{
		q: '¿El local es accesible?',
		a: 'Sí, tiene acceso para sillas de ruedas y se puede pagar con tarjeta.',
	},
];

export const GALLERY = [
	{ src: IMAGES.foto1, alt: 'Taberna La New, taberna de cocina malagueña en Teatinos (Málaga)' },
	{ src: IMAGES.foto2, alt: 'Comida casera en Taberna La New, Teatinos, Málaga' },
	{ src: IMAGES.foto3, alt: 'Platos de la casa de Taberna La New en Málaga' },
	{ src: IMAGES.foto4, alt: 'Ambiente de la taberna Taberna La New, Teatinos' },
	{ src: IMAGES.foto5, alt: 'Taberna La New en la Avenida de Gregorio Prieto, Málaga' },
	{ src: IMAGES.foto6, alt: 'Encuentros y comidas en Taberna La New (Málaga)' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Taberna la New',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 951 43 20 89',
	image: `${BUSINESS.siteUrl}/og.jpg`,
	currenciesAccepted: 'EUR',
	servesCuisine: BUSINESS.cuisine,
	areaServed: [{ '@type': 'City', name: 'Málaga' }],
	/** Servicios que ofrece el local, tomados de su ficha pública. */
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	address: {
		'@type': 'PostalAddress',
		streetAddress: `${BUSINESS.street}, ${BUSINESS.local}`,
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
	sameAs: [BUSINESS.instagram],
	acceptsReservations: 'True',
	/** Servicio de comida y servicio de cena, todos los días. */
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '12:00',
			closes: '16:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '20:00',
			closes: '00:00',
		},
	],
};
