/**
 * Datos de Merci Nails, salón de uñas en la Plaza del Teatro, 6
 * (Distrito Centro, 29008 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps
 * (dirección, teléfono, horario, valoración de 4,5 con 105 reseñas, categoría «salón de
 * uñas» y la etiqueta «LGBTQ+ friendly») y de sus perfiles públicos de Instagram
 * (@merci.nails_95) y Facebook, que publican el mismo horario (10:00–21:00), la misma
 * dirección y que **no hace falta cita previa**.
 *
 * No se publican tarifas ni un catálogo cerrado de servicios: el salón no difunde una
 * lista de precios y no sería correcto inventarla. La web describe los servicios que sí
 * aparecen en la ficha, en sus redes y en las reseñas.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (fotos de la
 * ficha y vista de la calle). Los nombres de archivo son descriptivos a propósito
 * (Google Imágenes los indexa con el nombre del archivo).
 */
import fotoSalon from '@assets/MERCI-NAILS/merci-nails-salon-malaga.jpg';
import fotoManicura from '@assets/MERCI-NAILS/merci-nails-manicura-malaga.jpg';
import fotoCalle from '@assets/MERCI-NAILS/merci-nails-plaza-del-teatro-malaga.jpg';

export const IMAGES = {
	fotoSalon,
	fotoManicura,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Merci Nails',
	shortName: 'Merci',
	tagline: 'Salón de uñas en el centro de Málaga',
	claim: 'Manicura, pedicura y uñas acrílicas sin cita previa',
	summary:
		'Merci Nails es un salón de uñas en la Plaza del Teatro, 6, en pleno centro de Málaga. Manicura, pedicura, uñas acrílicas, semipermanente y nail art, con atención sin cita previa de lunes a sábado. Valorado con 4,5 sobre 5 en Google.',
	street: 'Plaza del Teatro, 6',
	district: 'Distrito Centro',
	city: 'Málaga',
	postalCode: '29008',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '673 18 79 34',
	phoneHref: 'tel:+34673187934',
	instagram: 'https://www.instagram.com/merci.nails_95/',
	facebook: 'https://www.facebook.com/61585921334668/',
	googleMaps:
		'https://www.google.com/maps/place/Merci+nails/@36.7234503,-4.4209318,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7b9b86fd98b:0x952a7c22ebd78ca0!8m2!3d36.7234503!4d-4.4209318!16s%2Fg%2F11zkc7w5f3',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Plaza%20del%20Teatro%2C%206%2C%2029008%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7234503, lng: -4.4209318 },
	/** Valoración pública de la ficha de Google en la fecha de creación del sitio. */
	rating: 4.5,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,5',
	reviewsCount: 105,
	priceRange: '€€',
	categories: ['Salón de uñas', 'Manicura', 'Pedicura', 'Nail art'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PHFH+9J Málaga',
	/** El salón atiende sin cita previa, como anuncian en sus redes. */
	walkIn: true,
	/** Etiqueta que la propia ficha de Google muestra del establecimiento. */
	lgbtqFriendly: true,
	/**
	 * Horario según la ficha de Google (marcado con asterisco, lo que suele indicar
	 * horario especial). Sus redes publican un horario continuo de 10:00 a 21:00.
	 */
	hours: [
		{ days: 'Lunes, martes, miércoles y jueves', hours: '10:00 – 21:00' },
		{ days: 'Viernes', hours: '12:00 – 21:00' },
		{ days: 'Sábado', hours: '10:00 – 21:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los
	 * datos estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://merci-nails.vercel.app',
};

/**
 * Datos legales del titular del sitio (LSSI-CE). Rellena los tres campos antes de
 * publicar; mientras falte alguno, /aviso-legal muestra un aviso y los campos
 * aparecen como «[pendiente de completar]».
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'El salón', href: '#salon' },
	{ label: 'Servicios', href: '#servicios' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-calendar-close-line',
		title: 'Sin cita previa',
		text: 'Puedes entrar directamente: el salón atiende por orden de llegada, sin reservar hora.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato amable',
		text: 'El personal atento y simpático es lo que más se repite en las reseñas.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Material desinfectado',
		text: 'Las reseñas destacan la limpieza del local y el material desinfectado en cada servicio.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En pleno centro',
		text: 'En la Plaza del Teatro, a un paso del Teatro Cervantes y del centro histórico de Málaga.',
	},
];

/**
 * Servicios del salón. Se recogen los que aparecen en la ficha, en sus redes y en las
 * reseñas públicas (manicura, pedicura, semipermanente, acrílicas, spa y diseño). No se
 * publican precios porque el salón no difunde una tarifa.
 */
export const SERVICIOS = [
	{
		icon: 'ri-hand-2',
		title: 'Manicura',
		text: 'Cuidado y esmaltado de las uñas de las manos, con acabado a tu gusto.',
	},
	{
		icon: 'ri-footprint-line',
		title: 'Pedicura',
		text: 'Uno de los servicios más mencionados en las reseñas; incluye el cuidado del pie completo.',
	},
	{
		icon: 'ri-drop-line',
		title: 'Esmalte semipermanente',
		text: 'Esmaltado de larga duración («permanent nail polish»), muy citado por la clientela.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Uñas acrílicas',
		text: 'Extensión y reconstrucción de uñas con acabado natural o decorado.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Nail art y diseño',
		text: 'Diseños y decoración personalizada: colores, formas y detalles al gusto.',
	},
	{
		icon: 'ri-seedling-line',
		title: 'Spa de manos y pies',
		text: 'Tratamientos de spa para cuidar e hidratar al mismo tiempo que la manicura.',
	},
	{
		icon: 'ri-tools-line',
		title: 'Retirada y reparación',
		text: 'Retirada de esmalte, arreglo de uñas rotas y puesta a punto de tu manicura.',
	},
	{
		icon: 'ri-translate-2',
		title: 'Atención en inglés',
		text: 'El salón está en el centro de Málaga y atiende también a clientela que habla inglés.',
	},
];

/**
 * Por qué elegir el salón. La etiqueta «LGBTQ+ friendly» la muestra la propia ficha de
 * Google; el resto de puntos proceden de las reseñas públicas.
 */
export const VENTAJAS = [
	{
		icon: 'ri-calendar-close-line',
		title: 'Entra cuando quieras',
		text: 'No hace falta reservar: llega, espera tu turno y sal con las uñas hechas.',
	},
	{
		icon: 'ri-time-line',
		title: 'Rápido cuando toca',
		text: 'En las reseñas se repite la rapidez: arreglar una uña rota en pocos minutos, por ejemplo.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Limpio y cuidado',
		text: 'El material desinfectado y la limpieza del local son dos puntos que destacan las clientas.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Ambiente acogedor',
		text: 'Las reseñas hablan de un sitio agradable y de un personal muy amable.',
	},
	{
		icon: 'ri-rainbow-line',
		title: 'Espacio inclusivo',
		text: 'La ficha de Google lo marca como LGBTQ+ friendly, un espacio para todo el mundo.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En el centro histórico',
		text: 'Plaza del Teatro, 6: perfecto para acercarte mientras paseas por el centro de Málaga.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'Un sitio maravilloso. Tenía unas uñas rotas y necesitaba ayuda: me las arreglaron y estuve dentro y fuera en diez minutos. ¡Muy atentas!',
		source: 'Creative Loomer · Reseña en Google',
	},
	{
		text: '¡Un sitio increíble! Entré sin cita y me atendieron enseguida, y las uñas me quedaron exactamente como quería.',
		source: 'Celia Holubar · Reseña en Google',
	},
	{
		text: 'Son muy amables y atienden estupendamente a quienes hablamos inglés. Las uñas quedan preciosas.',
		source: 'Maia Kim · Reseña en Google',
	},
];

/** Temas que se repiten en las reseñas (resumen, no una cita textual). */
export const REVIEW_THEMES = [
	{ icon: 'ri-heart-3-line', label: 'Personal amable' },
	{ icon: 'ri-footprint-line', label: 'Pedicura' },
	{ icon: 'ri-sparkling-2-line', label: 'Spa' },
	{ icon: 'ri-drop-line', label: 'Semipermanente' },
	{ icon: 'ri-shield-check-line', label: 'Material desinfectado' },
	{ icon: 'ri-hand-2', label: 'Uñas bonitas' },
];

/** Preguntas frecuentes reales del salón (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Merci Nails?',
		a: 'En la Plaza del Teatro, 6, en el Distrito Centro de Málaga (29008), a un paso del Teatro Cervantes y del centro histórico. Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Hay que pedir cita?',
		a: 'No. El salón atiende sin cita previa y anuncia «sin cita previa» en sus redes, así que puedes entrar directamente y esperar tu turno. Si quieres asegurarte, llama al 673 18 79 34.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Según la ficha de Google, abre de lunes a jueves y sábado de 10:00 a 21:00, el viernes desde las 12:00 y cierra el domingo. En sus redes publican un horario continuo de 10:00 a 21:00; conviene confirmar por teléfono en festivos.',
	},
	{
		q: '¿Qué servicios ofrecen?',
		a: 'Manicura, pedicura, esmalte semipermanente, uñas acrílicas, nail art, spa de manos y pies, y retirada o reparación de uñas.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'El salón no publica una tarifa de precios, así que en esta web no se inventan importes. Llama al 673 18 79 34 o consulta sus redes sociales para preguntar por el servicio que quieres.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Puedes llamar al 673 18 79 34 para resolver dudas sobre servicios, precios o disponibilidad.',
	},
	{
		q: '¿Atienden en inglés?',
		a: 'Sí. Al estar en el centro de Málaga atienden a clientela internacional, y las reseñas destacan que son amables también con quienes hablan inglés.',
	},
	{
		q: '¿Dónde puedo ver sus trabajos y promociones?',
		a: 'Publican diseños, trabajos y promociones en Instagram (@merci.nails_95) y en Facebook. Allí encontrarás el estilo de uñas que hacen y las ofertas del momento.',
	},
];

/** Características del salón, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-calendar-close-line', label: 'Sin cita previa' },
	{ icon: 'ri-hand-2', label: 'Manicura' },
	{ icon: 'ri-footprint-line', label: 'Pedicura' },
	{ icon: 'ri-drop-line', label: 'Esmalte semipermanente' },
	{ icon: 'ri-sparkling-2-line', label: 'Uñas acrílicas' },
	{ icon: 'ri-palette-line', label: 'Nail art' },
	{ icon: 'ri-seedling-line', label: 'Spa de manos y pies' },
	{ icon: 'ri-rainbow-line', label: 'LGBTQ+ friendly' },
	{ icon: 'ri-translate-2', label: 'Atención en inglés' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoSalon,
		alt: 'Salón Merci Nails, centro de uñas en la Plaza del Teatro (Málaga)',
	},
	{
		src: IMAGES.fotoManicura,
		alt: 'Manicura y uñas realizadas en Merci Nails, salón de uñas en Málaga',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Plaza del Teatro, en el centro de Málaga, donde se encuentra Merci Nails',
	},
];

/**
 * Reseñas reales de la ficha de Google, en formato schema.org. El autor se extrae del campo
 * `source` de cada cita, que ya incluye el nombre de quien la escribió.
 */
export const RESEÑAS_SCHEMA = REVIEWS.map((reseña) => ({
	author: reseña.source.split('·')[0].trim(),
	text: reseña.text,
}));

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'NailSalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Merci Nails Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 673 18 79 34',
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	/** Servicios que ofrece el salón. */
	knowsAbout: BUSINESS.categories,
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
	/**
	 * Catálogo de lo que ofrece el local. Google lo usa para mostrar los servicios o productos en
	 * los resultados locales. Solo se declara lo que ya aparece en la web: si el negocio pasa su
	 * carta real con precios, sustituye `SERVICIOS` y añade `price` a cada entrada.
	 */
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Merci Nails',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'NailSalon', name: BUSINESS.name },
			},
		})),
	},
	sameAs: [BUSINESS.instagram, BUSINESS.facebook],
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Saturday'],
			opens: '10:00',
			closes: '21:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Friday'],
			opens: '12:00',
			closes: '21:00',
		},
	],
	/**
	 * Reseñas reales de la ficha de Google. Se declaran además de la nota media porque son las que
	 * Google puede mostrar como testimonios en los resultados.
	 */
	review: RESEÑAS_SCHEMA.map((reseña) => ({
		'@type': 'Review',
		author: { '@type': 'Person', name: reseña.author },
		reviewRating: { '@type': 'Rating', ratingValue: BUSINESS.rating, bestRating: 5 },
		reviewBody: reseña.text,
		source: { '@type': 'GoogleBusiness', '@id': BUSINESS.googleMaps },
	})),
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewsCount,
		bestRating: 5,
	},
};
