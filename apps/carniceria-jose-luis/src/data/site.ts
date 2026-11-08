/**
 * Datos de Carnicería José Luis, carnicería en la calle Martínez de la Rosa, 177
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps
 * (dirección, teléfono, valoración de 4,8, categoría «carnicería» y horario) y se ha
 * contrastado con directorios locales (Cylex, Páginas Amarillas, Buscalis) que
 * publican la misma dirección y el mismo teléfono.
 *
 * Nota importante: la ficha de Google está **sin reclamar** y solo publica el horario
 * del miércoles (9:00–14:00), por lo que el horario se muestra como orientativo y hay
 * que confirmarlo. Tampoco hay reseñas de texto, así que este sitio **no inventa
 * opiniones**: solo se cita la valoración pública.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps: la foto de
 * la ficha y una vista de la calle Martínez de la Rosa. Los nombres de archivo son
 * descriptivos a propósito (Google Imágenes los indexa con el nombre del archivo).
 */
import fotoFicha from '../assets/fotos/carniceria-jose-luis-malaga.jpg';
import fotoCalle from '../assets/fotos/carniceria-jose-luis-calle-martinez-de-la-rosa-malaga.jpg';

export const IMAGES = {
	fotoFicha,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Carnicería José Luis',
	shortName: 'José Luis',
	tagline: 'Carnicería de barrio en Bailén-Miraflores',
	claim: 'Carne fresca, corte al momento y trato de toda la vida',
	summary:
		'Carnicería José Luis es una carnicería de barrio en la calle Martínez de la Rosa, 177, en Bailén-Miraflores (29010 Málaga). Carne fresca cortada al momento, embutidos y charcutería, y preparados para llevar a casa. Encargos por teléfono.',
	street: 'Calle Martínez de la Rosa, 177',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 39 18 59',
	phoneHref: 'tel:+34952391859',
	googleMaps:
		'https://www.google.com/maps/place/Carnicer%C3%ADa+Jos%C3%A9+Luis/@36.7280974,-4.4438477,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70ed2bb3811:0xcef33bd7c0ec7f99!8m2!3d36.7280974!4d-4.4438477!16s%2Fg%2F1tctn49h',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Mart%C3%ADnez%20de%20la%20Rosa%2C%20177%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7280974, lng: -4.4438477 },
	/** Valoración pública de la ficha de Google en la fecha de creación del sitio. */
	rating: 4.8,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,8',
	priceRange: '€',
	categories: ['Carnicería', 'Charcutería', 'Carne fresca', 'Embutidos'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PHH4+6F Málaga',
	/**
	 * La ficha de Google solo publica el horario del miércoles (9:00–14:00). Se deja
	 * un horario orientativo de mañanas que hay que confirmar con el establecimiento
	 * antes de publicar (ver README).
	 */
	hours: [{ days: 'Mañanas (por confirmar)', hours: '09:00 – 14:00' }],
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los
	 * datos estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://carniceria-jose-luis.vercel.app',
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
	{ label: 'Cómo llegar', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Productos y servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Carne fresca',
		text: 'Género del día en el mostrador, con el corte que necesites para cocinar en casa.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Corte al momento',
		text: 'Dinos si la quieres para plancha, guiso o barbacoa y te la preparamos al gusto.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Embutidos y charcutería',
		text: 'Embutidos y charcutería al peso, cortados en el momento para llevarte a casa.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Encargos por teléfono',
		text: 'Llama al 952 39 18 59, haznos el encargo y pásate a recogerlo por la carnicería.',
	},
];

/**
 * Categorías habituales de una carnicería de barrio. No es un catálogo con precios
 * (el establecimiento no los publica): describe el tipo de género que se atiende en
 * un mostrador de carnicería y charcutería.
 */
export const PRODUCTOS = [
	{
		icon: 'ri-restaurant-2-line',
		title: 'Carne de vacuno',
		text: 'Filetes, chuletas, piezas para guiso y cortes para plancha o parrilla.',
	},
	{
		icon: 'ri-restaurant-line',
		title: 'Cerdo y cerdo ibérico',
		text: 'Lomo, costillas, panceta, secreto y presa, además de piezas ibéricas.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Pollo y aves',
		text: 'Pollo entero o troceado, pechuga, muslos y alitas, según lo que necesites.',
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
		title: 'Preparados y elaborados',
		text: 'Albóndigas, hamburguesas y otros preparados listos para cocinar en poco tiempo.',
	},
	{
		icon: 'ri-time-line',
		title: 'Producto del día',
		text: 'El género cambia cada día; llama y te decimos qué hay en el mostrador.',
	},
];

/** Servicios propios de una carnicería de mostrador. */
export const SERVICIOS = [
	{
		icon: 'ri-phone-line',
		title: 'Encargos por teléfono',
		text: 'Llama al 952 39 18 59, dinos qué necesitas y pásate a recogerlo cuando esté preparado.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Corte a medida',
		text: 'Adaptamos el corte y el grosor a cómo vas a cocinar la carne.',
	},
	{
		icon: 'ri-fire-line',
		title: 'Preparado para barbacoa',
		text: 'Te dejamos las piezas listas para poner en la parrilla.',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Preparados para llevar',
		text: 'Albóndigas, hamburguesas y otros elaborados para resolver la comida en casa.',
	},
	{
		icon: 'ri-group-line',
		title: 'Pedidos para grupos',
		text: 'Para una celebración o una comida familiar, avísanos con antelación.',
	},
	{
		icon: 'ri-hand-heart-line',
		title: 'Atención de barrio',
		text: 'Asesoramiento en el mostrador para elegir la pieza, el punto y la cantidad.',
	},
];

/** Preguntas frecuentes reales del local (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Carnicería José Luis?',
		a: 'En la calle Martínez de la Rosa, 177, en Bailén-Miraflores (29010 Málaga). Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Puedes llamar a la carnicería al 952 39 18 59 para consultar el género del día, hacer un encargo o confirmar el horario.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google publica apertura por la mañana, de 9:00 a 14:00. El horario puede variar, así que recomendamos llamar al 952 39 18 59 antes de acercarte.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Carne fresca de vacuno, cerdo, pollo y aves y cordero; embutidos y charcutería al peso, jamón al corte y preparados como albóndigas o hamburguesas.',
	},
	{
		q: '¿Hacen encargos?',
		a: 'Sí. Llama al 952 39 18 59, dinos qué necesitas y cuándo pasas a recogerlo. Para pedidos grandes conviene avisar con antelación.',
	},
	{
		q: '¿Cortan la carne como quiero cocinarla?',
		a: 'Sí. Explícale en el mostrador si la quieres para plancha, guiso, empanar o barbacoa, y te la preparan con el corte y el grosor adecuados.',
	},
	{
		q: '¿Hay preparados listos para cocinar?',
		a: 'Además de la carne al corte, las carnicerías de barrio suelen tener albóndigas, hamburguesas y otros preparados. Pregunta por teléfono qué hay disponible ese día.',
	},
	{
		q: '¿Cómo llego en transporte público?',
		a: 'La carnicería está en la calle Martínez de la Rosa, en Bailén-Miraflores, con paradas de autobús cerca. Consulta la ruta más cómoda desde tu punto de partida en el mapa de esta página.',
	},
];

/** Servicios del local, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-store-2-line', label: 'Carnicería de barrio' },
	{ icon: 'ri-scissors-line', label: 'Corte al momento' },
	{ icon: 'ri-hand-heart-line', label: 'Embutidos y charcutería' },
	{ icon: 'ri-phone-line', label: 'Encargos por teléfono' },
	{ icon: 'ri-fire-line', label: 'Carne para barbacoa' },
	{ icon: 'ri-bowl-line', label: 'Preparados para llevar' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFicha,
		alt: 'Carnicería José Luis, carnicería en la calle Martínez de la Rosa (Bailén-Miraflores, Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Calle Martínez de la Rosa, en Bailén-Miraflores (Málaga), donde se encuentra Carnicería José Luis',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Store',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Carniceria Jose Luis Málaga',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 952 39 18 59',
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
		name: 'Catálogo de Carnicería José Luis',
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
	/** Servicios que ofrece el local. */
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	/**
	 * El horario publicado en Google solo cubre la mañana, así que se declara con el
	 * horario orientativo que hay que confirmar (ver README).
	 */
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '09:00',
			closes: '14:00',
		},
	],
	/**
	 * No se emite `aggregateRating`: la ficha pública muestra la valoración, pero no
	 * el número de reseñas, y Google exige `ratingCount`/`reviewCount` para aceptar
	 * una valoración agregada.
	 */
};
