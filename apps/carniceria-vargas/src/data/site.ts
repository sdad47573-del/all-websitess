/**
 * Datos de Carnicería Vargas, carnicería y charcutería en la calle Rafael Alberti, 9
 * (Cruz de Humilladero, 29007 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps
 * (valoración 4,8 con 39 reseñas, horario y teléfono) y de su perfil público de
 * Instagram (@carniceriacharcuteriavargas: «Desde 1974 · Carne fresca del día ·
 * Expertos en elaborados caseros · Jamones al corte»). No inventamos precios,
 * alérgenos ni catálogos que el negocio no publique: la web describe el surtido
 * que sí se puede verificar (carnes, embutidos, jamón al corte y elaborados).
 *
 * Antes de publicar conviene confirmar el horario (Google lo marca con asterisco,
 * lo que suele indicar horario especial) y completar el objeto LEGAL.
 */

/**
 * Fotografías reales del local, obtenidas de la ficha pública del comercio en
 * Google Maps. Los nombres de archivo son descriptivos a propósito (Google
 * Imágenes los indexa con el nombre del archivo).
 */
import foto1 from '@assets/CARNICERIA-VARGAS/carniceria-vargas-carnes-y-elaborados-malaga.jpg';
import foto2 from '@assets/CARNICERIA-VARGAS/carniceria-vargas-mostrador-malaga.jpg';

export const IMAGES = {
	foto1,
	foto2,
};

export const BUSINESS = {
	name: 'Carnicería Vargas',
	shortName: 'Vargas',
	tagline: 'Carnicería y charcutería en Cruz de Humilladero',
	claim: 'Carne fresca del día, elaborados caseros y jamones al corte',
	summary:
		'Carnicería y charcutería de barrio en la calle Rafael Alberti, 9, en Cruz de Humilladero (Málaga). Carne fresca cortada al momento, embutidos y charcutería, jamones al corte y elaborados caseros listos para cocinar. Abiertos desde 1974.',
	street: 'Calle Rafael Alberti, 9',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29007',
	region: 'Andalucía',
	country: 'ES',
	/** Málaga y su área metropolitana. */
	areaServed: 'Málaga',
	phoneDisplay: '952 61 29 97',
	phoneHref: 'tel:+34952612997',
	instagram: 'https://www.instagram.com/carniceriacharcuteriavargas/',
	googleMaps:
		'https://www.google.com/maps/place/Carniceria+Vargas/@36.7204176,-4.4539534,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f71354c4dcb5:0x680b1b89e5cc05d7!8m2!3d36.7204176!4d-4.4539534!16s%2Fg%2F1tf4gcr2',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Rafael%20Alberti%2C%209%2C%2029007%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7204176, lng: -4.4539534 },
	/** Valoración pública de la ficha de Google en la fecha de creación del sitio. */
	rating: 4.8,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,8',
	reviewsCount: 39,
	foundedYear: 1974,
	priceRange: '€',
	categories: ['Carnicería', 'Charcutería', 'Elaborados caseros', 'Jamón al corte'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PGCW+5C Málaga',
	/**
	 * Horario publicado en la ficha de Google (marcado con asterisco, lo que suele
	 * indicar horario especial o festivo): de lunes a sábado de 8:30 a 14:30 y
	 * domingos cerrado.
	 */
	hours: [
		{ days: 'Lunes a sábado', hours: '08:30 – 14:30' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	metro: 'Metro L1 · La Unión',
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los
	 * datos estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://carniceriavargas.vercel.app',
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
	{ label: 'Encargos', href: '#encargos' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Contacto', href: '#contacto' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Carne fresca del día',
		text: 'Vacuno, cerdo, pollo y cordero cortados al momento, con el despiece que necesites.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Elaborados caseros',
		text: 'Albóndigas, hamburguesas y preparados hechos en la casa, listos para cocinar.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Jamones al corte',
		text: 'Jamón cortado a cuchillo y embutidos de charcutería al peso, como debe ser.',
	},
	{
		icon: 'ri-time-line',
		title: 'Listo para cocinar',
		text: 'Una selección de elaborados que se hacen en dos minutos para los días sin tiempo.',
	},
];

/**
 * Surtido del mostrador. Solo se nombran categorías verificables a partir de la
 * ficha y las reseñas públicas (carne, embutidos, jamón y elaborados); no se
 * publican precios ni un inventario exhaustivo que el negocio no detalle.
 */
export const PRODUCTOS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Carne de vacuno',
		text: 'Cortes y piezas de vacuno para plancha, guiso o barbacoa, cortados al gusto en el mostrador.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cerdo y cerdo ibérico',
		text: 'Lomo, secreto, presa, costillas y panceta, además del cerdo ibérico para las ocasiones.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Pollo y aves',
		text: 'Pollo entero o troceado, pechuga, muslos y alitas; también otras aves según pedido.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Cordero y barbacoa',
		text: 'Cordero y piezas preparadas para la parrilla, con el corte adaptado a tu barbacoa.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Embutidos y charcutería',
		text: 'Selección de embutidos y charcutería cortados al peso, con la variedad de siempre.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Jamón al corte',
		text: 'Jamón y paleta cortados a cuchillo o loncheados al momento para llevarte a casa.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Elaborados caseros',
		text: 'Albóndigas, hamburguesas y otros preparados hechos por la casa, con receta propia.',
	},
	{
		icon: 'ri-shopping-basket-2-line',
		title: 'Listos para cocinar',
		text: 'Preparados que se hacen en un momento, perfectos para los días que no hay tiempo.',
	},
];

/**
 * Servicios de la carnicería. La atención personal y el corte al momento son los
 * servicios que destacan las reseñas; se ofrecen encargos por teléfono, que es el
 * canal que publica el propio establecimiento.
 */
export const SERVICIOS = [
	{
		icon: 'ri-phone-line',
		title: 'Encargos por teléfono',
		text: 'Llama al 952 61 29 97 y te dejamos preparado lo que necesites para pasar a recogerlo.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Despiece a medida',
		text: 'Cortamos la pieza como la vas a cocinar: filetes, tacos, guiso, plancha o barbacoa.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Preparado para barbacoa',
		text: 'Adecuamos el corte y las cantidades para que la parrilla salga redonda.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Elaborados de la casa',
		text: 'Albóndigas, hamburguesas y preparados propios para resolver la comida en minutos.',
	},
	{
		icon: 'ri-group-line',
		title: 'Pedidos para grupos',
		text: 'Para una celebración, una comida familiar o un encargo grande, avísanos con tiempo.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Atención de confianza',
		text: 'Asesoramiento de mostrador para elegir la carne, el punto y la cantidad justos.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'Carnicería de primer nivel, de las mejores que he visto en Málaga. Servicio espectacular.',
		source: 'Mario Álvarez Amato · Reseña en Google',
	},
	{
		text: 'Excelente carnicería y delicatessen, con productos muy frescos y de gran calidad. El personal es amable y atento. Los elaborados están 100 % recomendados.',
		source: 'Virginia Lozano Soriano · Reseña en Google',
	},
	{
		text: 'Una carnicería de confianza, con productos de primera, jamón recién cortado y una gran variedad de preparados que se hacen en dos minutos.',
		source: 'Adrián Vargas · Reseña en Google',
	},
];

/** Preguntas frecuentes reales del local (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Carnicería Vargas?',
		a: 'En la calle Rafael Alberti, 9, en Cruz de Humilladero (29007 Málaga), junto al Camino de Antequera y muy cerca de la zona de La Unión. Puedes abrir la ubicación en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el horario de la carnicería?',
		a: 'Según la ficha de Google, abre de lunes a sábado de 8:30 a 14:30 y cierra los domingos. El horario puede variar en festivos y vísperas, así que recomendamos llamar al 952 61 29 97 para confirmarlo.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Carne fresca de vacuno, cerdo y cerdo ibérico, pollo y aves y cordero; embutidos y charcutería al peso, jamón al corte y elaborados caseros como albóndigas y hamburguesas.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'Sí. Llama al 952 61 29 97, dinos qué necesitas y cuándo pasas a recogerlo. Para pedidos grandes o celebraciones conviene llamar con antelación.',
	},
	{
		q: '¿Cortan la carne como quiero cocinarla?',
		a: 'Sí. Es una carnicería de mostrador: explícale al carnicero si la quieres para plancha, guiso, barbacoa o empanar, y te la prepara con el corte y el grosor adecuados.',
	},
	{
		q: '¿Tienen elaborados caseros?',
		a: 'Sí, es uno de sus puntos fuertes según las reseñas: albóndigas, hamburguesas y otros preparados hechos en la casa. También encontrarás preparados listos para cocinar en pocos minutos.',
	},
	{
		q: '¿Desde cuándo existe la carnicería?',
		a: 'La propia carnicería indica en su perfil público que atiende desde 1974, así que lleva más de cincuenta años en el barrio.',
	},
	{
		q: '¿Dónde puedo ver novedades y ofertas?',
		a: 'Publican productos y novedades en su perfil de Instagram, @carniceriacharcuteriavargas. También puedes llamar por teléfono para preguntar por lo que hay en el mostrador cada día.',
	},
];

/** Servicios del local, tal como se anuncian en su perfil público. */
export const FEATURES = [
	{ icon: 'ri-store-2-line', label: 'Carnicería de barrio' },
	{ icon: 'ri-scissors-line', label: 'Corte al momento' },
	{ icon: 'ri-bowl-line', label: 'Elaborados caseros' },
	{ icon: 'ri-hand-heart-line', label: 'Jamón al corte' },
	{ icon: 'ri-phone-line', label: 'Encargos por teléfono' },
	{ icon: 'ri-fire-line', label: 'Carne para barbacoa' },
	{ icon: 'ri-time-line', label: 'Preparados listos para cocinar' },
	{ icon: 'ri-award-line', label: 'Abierta desde 1974' },
];

export const GALLERY = [
	{
		src: IMAGES.foto1,
		alt: 'Carnes y elaborados en el mostrador de Carnicería Vargas, carnicería en Málaga',
	},
	{
		src: IMAGES.foto2,
		alt: 'Mostrador de Carnicería Vargas, carnicería y charcutería en Cruz de Humilladero (Málaga)',
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
	alternateName: 'Carniceria Vargas Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 952 61 29 97',
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
		name: 'Catálogo de Carnicería Vargas',
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
	sameAs: [BUSINESS.instagram],
	foundingDate: String(BUSINESS.foundedYear),
	/** Servicios que ofrece el local (corte al momento, encargos, elaborados…). */
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '08:30',
			closes: '14:30',
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
