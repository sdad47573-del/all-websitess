/**
 * Datos de Carnicería NEW YORK, carnicería en la calle Corregidor Francisco de Molina, 16
 * (Cruz de Humilladero, 29006 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps (dirección,
 * teléfono, horario, valoración de 4,6 con 98 reseñas y categoría «carnicería») y de sus
 * perfiles públicos de Instagram (@carniceria_new_york) y Facebook (carnicerianewyork),
 * que publican la misma dirección y teléfono y anuncian ofertas semanales con precio.
 *
 * No se inventan precios de la carta ni un catálogo exhaustivo: solo se describe el tipo
 * de producto que se menciona en las reseñas (carnes de calidad, cortes preparados,
 * hamburguesas, alitas y elaborados) y se remite al mostrador y a las redes.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (fotos de la
 * ficha y vista de la calle). Los nombres de archivo son descriptivos a propósito
 * (Google Imágenes los indexa con el nombre del archivo).
 */
import fotoFicha from '../assets/fotos/carniceria-new-york-malaga.jpg';
import fotoCarnes from '../assets/fotos/carniceria-new-york-carnes-y-preparados-malaga.jpg';
import fotoCalle from '../assets/fotos/carniceria-new-york-calle-corregidor-francisco-de-molina-malaga.jpg';

export const IMAGES = {
	fotoFicha,
	fotoCarnes,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Carnicería New York',
	shortName: 'New York',
	tagline: 'Carnicería y elaborados en Cruz de Humilladero',
	claim: 'Carnes de calidad, cortes a tu gusto y elaborados propios',
	summary:
		'Carnicería New York es una carnicería en la calle Corregidor Francisco de Molina, 16, en la barriada de Los Corazones (Cruz de Humilladero, 29006 Málaga). Carnes de calidad con cortes preparados al momento, elaborados propios como hamburguesas y alitas, y ofertas que publican cada semana en sus redes.',
	street: 'Calle Corregidor Francisco de Molina, 16',
	district: 'Cruz de Humilladero',
	neighbourhood: 'Barriada de Los Corazones',
	city: 'Málaga',
	postalCode: '29006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '654 77 17 11',
	phoneHref: 'tel:+34654771711',
	instagram: 'https://www.instagram.com/carniceria_new_york/',
	facebook: 'https://www.facebook.com/carnicerianewyork/',
	googleMaps:
		'https://www.google.com/maps/place/Carnicer%C3%ADa+NEW+YORK/@36.7129951,-4.4517785,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76efbdf5371:0xb8ac5a530ff11de7!8m2!3d36.7129951!4d-4.4517785!16s%2Fg%2F1v2f1wh8',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Corregidor%20Francisco%20de%20Molina%2C%2016%2C%2029006%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7129951, lng: -4.4517785 },
	/** Valoración pública de la ficha de Google en la fecha de creación del sitio. */
	rating: 4.6,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,6',
	reviewsCount: 98,
	priceRange: '€',
	categories: ['Carnicería', 'Charcutería', 'Hamburguesas', 'Elaborados'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PG7X+57 Málaga',
	/**
	 * Horario publicado en la ficha de Google (marcado con asterisco, lo que suele
	 * indicar horario especial): de lunes a viernes de 9:00 a 14:30 y de 17:30 a 20:30;
	 * sábados y domingos cerrado.
	 */
	hours: [
		{ days: 'Lunes a viernes (mañana)', hours: '09:00 – 14:30' },
		{ days: 'Lunes a viernes (tarde)', hours: '17:30 – 20:30' },
		{ days: 'Sábado y domingo', hours: 'Cerrado' },
	],
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los
	 * datos estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://www.sur-digital.com/carniceria-new-york',
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
	{ label: 'La carnicería', href: '#carniceria' },
	{ label: 'Productos', href: '#productos' },
	{ label: 'Elaborados', href: '#elaborados' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Contacto', href: '#contacto' },
];

export const PAGE_NAV = [
	{ label: 'Productos y servicios', href: '/carniceria-new-york/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/carniceria-new-york/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-award-line',
		title: 'Carnes de calidad',
		text: 'Producto seleccionado y cortes preparados con esmero, como destacan las reseñas.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Elaborados propios',
		text: 'Hamburguesas, alitas y preparados de la casa, listos para cocinar en casa.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Corte a tu gusto',
		text: 'Dinos cómo vas a cocinar y te preparamos la pieza con el corte que necesites.',
	},
	{
		icon: 'ri-percent-line',
		title: 'Ofertas semanales',
		text: 'Publican ofertas con precio cada semana en su Instagram y su Facebook.',
	},
];

/**
 * Surtido de la carnicería. Se nombran las categorías habituales de un mostrador de
 * carnicería y los productos que aparecen en las reseñas públicas (carnes, cortes
 * preparados, hamburguesas, alitas y elaborados). No se publican precios fijos.
 */
export const PRODUCTOS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Carne de vacuno',
		text: 'Cortes de vacuno para plancha, guiso o parrilla, preparados al momento.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cerdo y cerdo ibérico',
		text: 'Lomo, costillas, panceta, secreto y presa, además de piezas ibéricas.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Pollo y aves',
		text: 'Pollo entero o troceado, pechuga, muslos y alitas, un clásico de la casa.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Cordero y barbacoa',
		text: 'Cordero y piezas preparadas para la parrilla, con el corte adaptado a tu barbacoa.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Embutidos y charcutería',
		text: 'Selección de embutidos y charcutería cortados al peso en el mostrador.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Jamón al corte',
		text: 'Jamón y paleta cortados al momento para llevarte a casa.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Elaborados y preparados',
		text: 'Hamburguesas, alitas y otros preparados de la casa, listos para cocinar.',
	},
	{
		icon: 'ri-percent-line',
		title: 'Ofertas de la semana',
		text: 'Cada semana publican ofertas con precio en Instagram y Facebook.',
	},
];

/**
 * Elaborados y servicio. Las hamburguesas y las alitas son los productos que más se
 * repiten en las reseñas, además del trato y el asesoramiento en el mostrador.
 */
export const ELABORADOS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Hamburguesas',
		text: 'Preparadas en la casa y listas para la plancha. Uno de los productos más mencionados en las reseñas.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Alitas y pinchitos',
		text: 'Alitas y brochetas preparadas para la parrilla o la plancha, con el adobo de la casa.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Preparados para cocinar',
		text: 'Productos ya preparados para resolver la comida con poco tiempo, sin renunciar al sabor.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Cortes al detalle',
		text: 'Trabajan la pieza con cortes cuidados, tal como destacan las reseñas de la carnicería.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Encargos por teléfono',
		text: 'Llama al 654 77 17 11, haznos el encargo y pásate a recogerlo cuando esté listo.',
	},
	{
		icon: 'ri-group-line',
		title: 'Pedidos para grupos',
		text: 'Para barbacoas, celebraciones o comidas familiares, avísanos con antelación.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'Carnicería especializada en producto de alta gama en Málaga. Destacan por ofrecer carnes de excelente calidad, con cortes preparados con mucho esmero. El personal es atento, profesional y conoce bien el producto.',
		source: 'Olga O R · Reseña en Google',
	},
	{
		text: 'Las alitas están increíbles, no había comido unas tan buenas. Las hamburguesas… ¡todo está buenísimo!',
		source: 'P. · Reseña en Google',
	},
];

/** Temas que se repiten en las reseñas (resumen, no una cita textual). */
export const REVIEW_THEMES = [
	{
		icon: 'ri-award-line',
		title: 'Calidad del producto',
		text: 'La calidad de la carne y de los productos es lo que más se repite en las reseñas.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Hamburguesas y elaborados',
		text: 'Las hamburguesas y los preparados de la casa aparecen una y otra vez entre los favoritos.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Trato y asesoramiento',
		text: 'El trato del mostrador y el conocimiento del producto salen bien valorados.',
	},
];

/** Preguntas frecuentes reales del local (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Carnicería New York?',
		a: 'En la calle Corregidor Francisco de Molina, 16, en la barriada de Los Corazones (Cruz de Humilladero, 29006 Málaga). Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a viernes abre de 9:00 a 14:30 y de 17:30 a 20:30. Los sábados y los domingos permanece cerrado. El horario puede cambiar en festivos, así que conviene llamar al 654 77 17 11 para confirmarlo.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Puedes llamar a la carnicería al 654 77 17 11 para consultar el producto del día, hacer un encargo o confirmar el horario.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Carnes de vacuno, cerdo, pollo y cordero; embutidos y charcutería al peso, jamón al corte y elaborados propios como hamburguesas y alitas.',
	},
	{
		q: '¿Qué destacan las reseñas?',
		a: 'Con una valoración de 4,6 sobre 5 y 98 reseñas, lo que más se repite es la calidad de la carne y de los productos, las hamburguesas y los elaborados, y el trato y el asesoramiento del personal.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'Sí. Llama al 654 77 17 11, dinos qué necesitas y cuándo pasas a recogerlo. Para pedidos grandes o barbacoas conviene avisar con antelación.',
	},
	{
		q: '¿Cortan la carne como quiero cocinarla?',
		a: 'Sí. Comenta en el mostrador si la quieres para plancha, guiso, empanar o barbacoa, y te la preparan con el corte y el grosor adecuados.',
	},
	{
		q: '¿Dónde publican las ofertas de la semana?',
		a: 'En su perfil de Instagram (@carniceria_new_york) y en su página de Facebook (carnicerianewyork), donde anuncian los productos de la semana. También puedes preguntar por teléfono.',
	},
];

/** Servicios del local, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-store-2-line', label: 'Carnicería de barrio' },
	{ icon: 'ri-scissors-line', label: 'Corte al momento' },
	{ icon: 'ri-restaurant-2-line', label: 'Hamburguesas y elaborados' },
	{ icon: 'ri-fire-line', label: 'Carne para barbacoa' },
	{ icon: 'ri-hand-heart-line', label: 'Embutidos y charcutería' },
	{ icon: 'ri-phone-line', label: 'Encargos por teléfono' },
	{ icon: 'ri-percent-line', label: 'Ofertas semanales' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoCarnes,
		alt: 'Carnes y preparados en el mostrador de Carnicería New York, carnicería en Cruz de Humilladero (Málaga)',
	},
	{
		src: IMAGES.fotoFicha,
		alt: 'Carnicería New York, carnicería en la calle Corregidor Francisco de Molina (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Calle Corregidor Francisco de Molina, en Cruz de Humilladero (Málaga), donde está Carnicería New York',
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
	'@type': 'Store',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Carniceria New York Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 654 77 17 11',
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	/** Categoría de negocio (carnicería/charcutería). */
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
	 * carta real con precios, sustituye `PRODUCTOS` y añade `price` a cada entrada.
	 */
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Catálogo de Carnicería New York',
		itemListElement: PRODUCTOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Product',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'Store', name: BUSINESS.name },
			},
		})),
	},
	sameAs: [BUSINESS.instagram, BUSINESS.facebook],
	/** Servicios que ofrece el local. */
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '09:00',
			closes: '14:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '17:30',
			closes: '20:30',
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
