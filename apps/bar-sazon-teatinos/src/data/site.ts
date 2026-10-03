/**
 * Fotografías reales del local (todas de 1500 px de ancho largo).
 *
 * Los archivos llevan nombres descriptivos a propósito (Google Imágenes los indexa con
 * el nombre de archivo). Nota: en `src/assets/fotos` también vive `logo-sazon.jpg`,
 * que es el logotipo de la taberna (texto blanco sobre negro), no una fotografía: por eso
 * no entra ni en la galería ni en las secciones con foto.
 */
import type { CartaItem } from './carta';

import foto1 from '../assets/fotos/sazon-teatinos-barra-tapas-malaga.jpg';
import foto2 from '../assets/fotos/tapas-y-raciones-sazon-teatinos-malaga.jpg';
import foto3 from '../assets/fotos/platos-de-la-casa-sazon-teatinos-malaga.jpg';
import foto4 from '../assets/fotos/mesa-sazon-teatinos-malaga.jpg';

export const IMAGES = {
	foto1,
	foto2,
	foto3,
	foto4,
};

export const BUSINESS = {
	name: 'Sazón Teatinos',
	shortName: 'Sazón',
	tagline: 'Taberna de tapas, raciones y parrilla',
	summary:
		'Cocina casera, carnes a la brasa y tapeo sin complicaciones en el corazón de Teatinos. Terraza, pantallas para el fútbol y show de magia los jueves.',
	street: 'Calle Mesonero Romanos, 24B',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '951 44 97 89',
	phoneHref: 'tel:+34951449789',
	instagram: 'https://www.instagram.com/sazonteatinos/',
	facebook: 'https://www.facebook.com/p/SAZ%C3%93N-100082963227493/',
	googleMaps:
		'https://www.google.com/maps/place/Saz%C3%B3n+Teatinos/@36.7205856,-4.460495,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f778b839419d:0x1778e7fa00b63b52!8m2!3d36.7205856!4d-4.460495!16s%2Fg%2F11rqsxbprc',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Mesonero%20Romanos%2C%2024%2C%2029010%20M%C3%A1laga&t=&z=16&ie=UTF8&iwloc=&output=embed',
	reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJnUE5uHj3cg0RUju2APrneBc',
	digitalMenu: 'https://go.nordqr.com/ghb85b/',
	placeId: 'ChIJnUE5uHj3cg0RUju2APrneBc',
	geo: { lat: 36.7205856, lng: -4.460495 },
	rating: 4.7,
	reviewsCount: 2215,
	priceRange: '€',
	cuisine: ['Tapas', 'Cocina española', 'Parrilla', 'Andaluza'],
	metro: 'Metro L1 · Ciudad de la Justicia',
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los datos
	 * estructurados: si el dominio final cambia, hay que actualizarla aquí y en
	 * `astro.config.mjs`, `public/robots.txt` y `public/og.jpg`.
	 */
	siteUrl: 'https://sazonteatinos.vercel.app',
};

/**
 * Datos legales del titular del sitio (LSSI-CE).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar, por ejemplo:
 *
 * 	razonSocial: 'Sazón Hostelería S.L.',
 * 	nif: 'B12345678',
 * 	email: 'info@sazonteatinos.es',
 *
 * Al rellenarlos, el aviso amarillo de /aviso-legal desaparece solo y el correo pasa
 * a ser un enlace mailto. No hace falta tocar la página.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
	actualizado: 'Septiembre de 2026',
};

export const NAV = [
	{ label: 'La taberna', href: '#taberna' },
	{ label: 'Carta', href: '#carta' },
	{ label: 'Cocina casera', href: '#cocina-casera' },
	{ label: 'Especialidades', href: '#especialidades' },
	{ label: 'Magia', href: '#magia' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'Contacto', href: '#contacto' },
];

export const HOURS = [{ days: 'Lunes a domingo', hours: '12:30 – 00:00' }];

/**
 * Bloque «Cocina casera» (portada).
 *
 * Sazón **no publica un menú del día**: su carta digital solo tiene la carta general
 * (tapas, raciones, brasa, postres), sin menú de mediodía, sin precio ni días de servicio.
 * Por eso este bloque habla solo de lo verificable —cocina de mercado, tapeo en tres
 * tamaños y servicio a partir de las 12:30— y no promete un menú de precio cerrado.
 *
 * Si algún día el establecimiento confirma uno, basta con añadir aquí un objeto con sus
 * datos (días, precio, platos) y ampliar el componente `CocinaCasera.astro`.
 */
export const COCINA_CASERA = {
	eyebrow: 'Cocina de mercado',
	title: 'El sabor de lo casero, cada día',
	text: 'Recetas tradicionales, guisos de temporada y producto de mercado, cocinados en la casa. Tapeo, raciones y brasa para compartir, también a mediodía: abrimos a las 12:30.',
	incluye: [
		'Platos de cuchara',
		'Tapa, media y ración',
		'Carnes a la parrilla',
		'Opciones sin gluten',
	],
	nota: 'Los guisos y los platos de temporada cambian según el mercado.',
};

/** Secciones con página propia (no anclas de la home). */
export const PAGE_NAV = [
	{ label: 'Carta completa', href: '/carta' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

/**
 * Bebidas. El local no publica su carta de bebidas (solo fotos en el menú digital), así que
 * aquí no hay precios: solo categorías, con el precio opcional por si algún día se confirma.
 */
export const BEBIDAS: CartaItem[] = [
	{
		name: 'Cervezas de barril',
		description: 'Bien tiradas y siempre frías.',
	},
	{
		name: 'Cervezas sin gluten',
		description: 'Mahou 5 Estrellas y Victoria 00 disponibles.',
		tags: ['Sin gluten'],
	},
	{
		name: 'Refrescos, agua y combinados',
		description: 'Selección de la casa para acompañar el tapeo.',
	},
	{
		name: 'Vinos, vermut y tintos de verano',
		description: 'Copa o botella. Pregunta por las referencias del día.',
	},
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-fire-line',
		title: 'Parrilla y asador',
		text: 'Carnes a la brasa: secreto y presa ibérica, lagarto, entraña con chimichurri y entrecot de vaca madurada.',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Cocina de abuela',
		text: 'Croquetas caseras, guisos de cuchara y tapas elaboradas cada día en la casa.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Magia los jueves',
		text: 'Show de magia en directo de 21:00 a 23:00 recorriendo las mesas de la taberna.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Terraza y deportes',
		text: 'Terraza exterior para el buen tiempo, pantallas para el fútbol y WiFi gratis.',
	},
];

export const MENU: { name: string; icon: string; items: CartaItem[] }[] = [
	{
		name: 'Tapas y entrantes',
		icon: 'ri-restaurant-line',
		items: [
			{
				name: 'Gildas',
				description: 'El clásico de la casa: anchoa, oliva y encurtido en un bocado.',
				tags: ['Hecho en casa'],
			},
			{
				name: 'Croquetas caseras',
				description: 'De jamón, gamba al pil pil o rabo de toro. Elaboradas a mano cada día.',
				tags: ['Hecho en casa'],
			},
			{
				name: 'Torreznos de Soria',
				description: 'Torrezno XL crujiente, directo desde Soria.',
				tags: ['Para compartir'],
			},
			{
				name: 'Chicharrones de Cádiz',
				description: 'Crujientes y sabrosos, ideales para empezar.',
			},
			{
				name: 'Flor de alcachofa con virutas de jamón',
				description: 'Alcachofa a la plancha con jamón y un buen aceite de oliva.',
				tags: ['Temporada'],
			},
			{
				name: 'Flamenquines',
				description:
					'De presa ibérica con cheddar o de pollo serranito, con patatas y pimientos del padrón.',
			},
		],
	},
	{
		name: 'Para compartir',
		icon: 'ri-hand-heart-line',
		items: [
			{
				name: 'Lingote brioche',
				description:
					'Nuestro brioche tostado, relleno de costilla asada a baja temperatura con bbq coreana.',
			},
			{
				name: 'Huevos rotos con rabo de toro',
				description: 'Guiso meloso con patata y huevo, para mojar pan. También en media y entera.',
			},
			{
				name: 'Mini burguer cabra',
				description: 'Pequeña, jugosa y con un toque de queso de cabra y cebolla caramelizada.',
			},
			{
				name: 'Entraña a la parrilla con chimichurri',
				description: 'A la brasa y con chimichurri casero, para compartir en el centro de la mesa.',
				tags: ['Para compartir'],
			},
		],
	},
	{
		name: 'Carnes a la parrilla',
		icon: 'ri-fire-line',
		items: [
			{
				name: 'Entrecot de vaca madurada',
				description: '350 gr a la brasa, jugoso por dentro y con corteza marcada.',
				tags: ['Asador'],
			},
			{
				name: 'Secreto y presa ibérica',
				description: 'Cerdo ibérico a la parrilla con sal gruesa y buen punto de brasa.',
				tags: ['Asador'],
			},
			{
				name: 'Lagarto ibérico',
				description: 'Raciones de 300 gr o tapas de 80 gr, a la brasa.',
				tags: ['Asador'],
			},
			{
				name: 'Carrillada ibérica al PX',
				description: 'Se deshace con el tenedor, con salsa al Pedro Ximénez.',
				tags: ['Hecho en casa'],
			},
		],
	},
	{
		name: 'Cocina de cuchara',
		icon: 'ri-bowl-line',
		items: [
			{
				name: 'Albóndigas en salsa de almendras',
				description: 'Receta de siempre, con la salsa de almendras de la abuela.',
				tags: ['Hecho en casa'],
			},
			{
				name: 'Rabo de toro con patatas fritas',
				description: 'Guiso de cuchara que se deshace en el plato.',
			},
			{
				name: 'Ensalada templada de queso de cabra',
				description: 'Para completar la mesa con algo fresco.',
			},
		],
	},
	{
		name: 'Bebidas',
		icon: 'ri-goblet-line',
		items: [
			{
				name: 'Cervezas de barril',
				description: 'Bien tiradas y siempre frías.',
			},
			{
				name: 'Cervezas sin gluten',
				description: 'Mahou 5 Estrellas y Victoria 00 disponibles.',
				tags: ['Sin gluten'],
			},
			{
				name: 'Refrescos, vinos y vermut',
				description: 'Selección de la casa para acompañar el tapeo.',
			},
		],
	},
];

export const SPECIALTIES = [
	{
		icon: 'ri-bread-line',
		title: 'Lingote brioche de costilla asada',
		text: 'Brioche tostado, costilla asada a baja temperatura, bbq coreana, pepinillos y cebolla encurtida. En formato lingote o mini brioche.',
		tag: 'De la carta',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Croquetas caseras',
		text: 'Cremosas por dentro y crujientes por fuera. De jamón ibérico, gamba al pil pil o rabo de toro, siempre hechas en casa.',
		tag: 'Hecho en casa',
	},
	{
		icon: 'ri-fire-line',
		title: 'Asador de carnes',
		text: 'Brasa, sal gruesa y respeto por el producto. Secreto y presa ibérica, lagarto, entraña con chimichurri y entrecot de vaca madurada.',
		tag: 'Parrilla',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Guisos y cuchara',
		text: 'Carrillada ibérica al PX, albóndigas en salsa de almendras, rabo de toro y guisos como los de casa.',
		tag: 'Cocina de abuela',
	},
];

/** Preguntas frecuentes reales del local (se muestran en la portada y en FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Sazón Teatinos?',
		a: 'En la calle Mesonero Romanos 24B, en Teatinos-Universidad (29010 Málaga), a unos minutos de la parada de metro L1 Ciudad de la Justicia.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Abrimos todos los días de 12:30 a 00:00, también a la hora del almuerzo.',
	},
	{
		q: '¿Se puede reservar mesa?',
		a: 'Sí, por teléfono en el 951 44 97 89. Para grupos, celebraciones y los jueves (día de magia) conviene llamar con antelación.',
	},
	{
		q: '¿Hay opciones sin gluten?',
		a: 'Sí: cervezas Mahou 5 Estrellas y Victoria 00, y patatas en freidora aparte para evitar la contaminación cruzada. Cuéntanos tus alergias y te ayudamos a elegir de la carta.',
	},
	{
		q: '¿Tenéis terraza?',
		a: 'Sí, tenemos terraza exterior para el buen tiempo. Dentro hay pantallas para ver el fútbol y WiFi gratis.',
	},
	{
		q: '¿Qué día hay show de magia?',
		a: 'Los jueves, de 21:00 a 23:00. La magia se hace en directo y recorre las mesas de la taberna.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'Sí, preparamos pedidos para llevar y también puedes encontrarnos en Glovo.',
	},
	{
		q: '¿Se admiten perros?',
		a: 'Sazón Teatinos es un local pet friendly, así que puedes venir con tu perro.',
	},
];

export const REVIEWS = [
	{
		text: 'Servicio espectacular, comida fabulosa, carta original y muy amplia. Personal amable y servicio rápido.',
		source: 'Reseña en Google',
	},
	{
		text: 'Las croquetas y el lingote brioche de rabo de toro son una pasada.',
		source: 'Reseña en Google',
	},
	{
		text: 'Sus trucos son de otro nivel. El mejor espectáculo de magia que he visto.',
		source: 'Reseña en Google',
	},
	{
		text: 'Se come muy bien por unos 30 € por persona con bebida. Relación calidad-precio inmejorable.',
		source: 'Reseña en Google',
	},
];

export const FEATURES = [
	{ icon: 'ri-sun-line', label: 'Terraza exterior' },
	{ icon: 'ri-tv-2-line', label: 'Pantallas deportivas' },
	{ icon: 'ri-wifi-line', label: 'WiFi gratis' },
	{ icon: 'ri-magic-line', label: 'Show de magia (jueves)' },
	{ icon: 'ri-takeaway-line', label: 'Comida para llevar' },
	{ icon: 'ri-e-bike-2-line', label: 'Delivery' },
	{ icon: 'ri-wheelchair-line', label: 'Local accesible' },
	{ icon: 'ri-bear-smile-line', label: 'Pet friendly' },
	{ icon: 'ri-seedling-line', label: 'Opciones sin gluten' },
	{ icon: 'ri-group-line', label: 'Grupos y celebraciones' },
	{ icon: 'ri-bowl-line', label: 'Cocina casera de mercado' },
	{ icon: 'ri-calendar-check-line', label: 'Reservas por teléfono' },
];

export const GALLERY = [
	{
		src: IMAGES.foto1,
		alt: 'Barra y sala de Sazón Teatinos, taberna de tapas en Teatinos (Málaga)',
	},
	{
		src: IMAGES.foto2,
		alt: 'Tapas y raciones para compartir en Sazón Teatinos (Málaga)',
	},
	{
		src: IMAGES.foto3,
		alt: 'Platos de la casa de Sazón Teatinos, cocina casera y parrilla en Málaga',
	},
	{ src: IMAGES.foto4, alt: 'Mesa con raciones en Sazón Teatinos, bar de tapas en Teatinos' },
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'SAZÓN | Tapas, Raciones y Parrilla',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 951 44 97 89',
	image: `${BUSINESS.siteUrl}/og.jpg`,
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	servesCuisine: BUSINESS.cuisine,
	areaServed: [{ '@type': 'City', name: 'Málaga' }],
	/** Servicios que ofrece el local (terraza, pantallas, WiFi, sin gluten…). */
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
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
	hasMenu: `${BUSINESS.siteUrl}/carta`,
	/** Enlaza con el nodo `Menu` que emite /carta (ver `src/data/schema.ts`). */
	menu: { '@id': `${BUSINESS.siteUrl}/carta#carta` },
	sameAs: [BUSINESS.instagram, BUSINESS.facebook],
	acceptsReservations: 'True',
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
			opens: '12:30',
			closes: '00:00',
		},
	],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewsCount,
		bestRating: 5,
	},
};
