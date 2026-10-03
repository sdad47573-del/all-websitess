/**
 * Datos de L'OASIS Restaurante & Cafetería.
 *
 * Nombre, dirección, teléfono, valoración, horarios y fotos se han extraído de la
 * ficha de Google Maps (`business.googleMaps`) y del perfil de Instagram. Cuando
 * Google no publica un dato (carta completa, correo, redes sociales) el campo se
 * deja vacío o se marca como pendiente en lugar de inventarlo.
 */

/** Imágenes de Google Maps (perfil) y Street View de la fachada. */
import mapsPortada from '../assets/fotos/maps-portada.jpg';
import streetview133 from '../assets/fotos/streetview-133.jpg';
import streetview90 from '../assets/fotos/streetview-90.jpg';
import streetview30 from '../assets/fotos/streetview-30.jpg';
import streetview180 from '../assets/fotos/streetview-180.jpg';
import streetview240 from '../assets/fotos/streetview-240.jpg';
import streetview300 from '../assets/fotos/streetview-300.jpg';

export const IMAGES = {
	mapsPortada,
	streetview133,
	streetview90,
	streetview30,
	streetview180,
	streetview240,
	streetview300,
};

export const BUSINESS = {
	name: "L'Oasis",
	fullName: "L'OASIS Restaurante & Cafetería",
	tagline: 'Restaurante y cafetería · Desayunos, comida y cena',
	summary:
		"Cocina halal en el Paseo de los Tilos, a dos minutos de la estación de tren María Zambrano. Desayunos de 8:00 a 15:00, comida y cena hasta la 1:00, abierto los siete días de la semana.",
	street: 'P.º de los Tilos, 37',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29006',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '951 72 54 01',
	phoneHref: 'tel:+34951725401',
	instagram: 'https://www.instagram.com/loasis.malaga/',
	tiktok: 'https://www.tiktok.com/@loasis.malaga',
	googleMaps:
		'https://www.google.com/maps/place/L%27OASIS/@36.7131892,-4.4359899,17z/data=!4m8!3m7!1sChIJ_zFUUtT3cg0ROuh7TkV6pg8:0xd72f7d4525431ff:0xfa67a454e7be83a!8m2!3d36.7131892!4d-4.4359899!9m1!1b1!16s%2Fg%2F11w1nd3frp',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=P.%C2%BA%20de%20los%20Tilos%2C%2037%2C%2029006%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	reviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJ_zFUUtT3cg0ROuh7TkV6pg8',
	placeId: 'ChIJ_zFUUtT3cg0ROuh7TkV6pg8',
	plusCode: 'PH77+7J Málaga',
	geo: { lat: 36.7131892, lng: -4.4359899 },
	rating: 4.9,
	reviewsCount: 613,
	priceRange: '€€',
	cuisine: ['Halal', 'Cafetería', 'Desayunos', 'Cocina mediterránea'],
	nearby: 'Estación de Málaga María Zambrano',
	mapUrl: 'https://loasismalaga.vercel.app',
};

/**
 * Horarios tal y como los publica Google: de martes a sábado (y lunes) abre a las
 * 8:00 y el domingo a las 9:00. Cierra a las 00:30 todos los días.
 */
export const HOURS = [
	{ days: 'Lunes', hours: '08:00 – 00:30' },
	{ days: 'Martes', hours: '08:00 – 00:30' },
	{ days: 'Miércoles', hours: '08:00 – 00:30' },
	{ days: 'Jueves', hours: '08:00 – 00:30' },
	{ days: 'Viernes', hours: '08:00 – 00:30' },
	{ days: 'Sábado', hours: '08:00 – 00:30' },
	{ days: 'Domingo', hours: '09:00 – 00:30' },
];

/**
 * Datos legales del titular del sitio (LSSI-CE).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar, por ejemplo:
 *
 * 	razonSocial: 'L\'Oasis Málaga S.L.',
 * 	nif: 'B12345678',
 * 	email: 'info@loasismalaga.es',
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
	{ label: 'El local', href: '#local' },
	{ label: 'Desayunos', href: '#desayunos' },
	{ label: 'Carta', href: '#carta' },
	{ label: 'Halal', href: '#halal' },
	{ label: 'Galería', href: '#galeria' },
	{ label: 'FAQ', href: '#faq' },
	{ label: 'Contacto', href: '#contacto' },
];

/** Secciones con página propia (no anclas de la home). */
export const PAGE_NAV = [
	{ label: 'Carta completa', href: '/carta' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-sun-line',
		title: 'Abierto los siete días',
		text: 'De 8:00 a 00:30 de lunes a sábado y desde las 9:00 los domingos. Sin cierre entre semana.',
	},
	{
		icon: 'ri-train-line',
		title: 'Al lado de la estación',
		text: 'A dos minutos andando de la estación de tren María Zambrano, con parking muy cerca.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Comida halal',
		text: 'Cocina halal con carne de ternero y cordero, sin alcohol en la carta.',
	},
	{
		icon: 'ri-cup-line',
		title: 'Café de mañana',
		text: 'Zumo de naranja natural, café y bollería recién hecha desde las ocho de la mañana.',
	},
];

export const DESAYUNOS = {
	eyebrow: 'De 8:00 a 15:00',
	title: 'Desayunos desde primera hora',
	text: 'El local abre a las ocho, así que el desayuno se come tranquilo: huevos al gusto, pan recién hecho, queso, aceitunas, zumo de naranja recién exprimido y la bebida que te apetezca.',
	items: [
		{ name: 'Classic', text: 'Dos huevos (tortilla francesa o frito), pan, queso, aceitunas, zumo de naranja y bebida.' },
		{ name: 'Parisian', text: 'Croissant o pain au chocolat con café y zumo de naranja.' },
		{ name: 'Oasis', text: 'Huevos, pan, queso, aceitunas, zumo de naranja y bebida: el desayuno completo de la casa.' },
	],
	nota: 'Los precios y la composición concreta de cada desayuno cambian con frecuencia: llama al 951 72 54 01 y te los confirmamos.',
};

/**
 * Bloque «Comida halal».
 *
 * L'Oasis publica su perfil como restaurante halal y cafetería, y su cuenta de
 * Instagram lo repite en casi todas las publicaciones. Aquí solo se afirma lo
 * verificable: cocina halal, carne de ternera y cordero, y ausencia de alcohol.
 */
export const HALAL = {
	eyebrow: 'Cocina halal',
	title: 'Halal de verdad, sin atajos',
	text: 'Todo lo que sale de nuestra cocina está preparado conforme a las normas islámicas: carne de ternera y cordero certificada, sin alcohol en los platos ni en la bebida. Si tienes dudas con un ingrediente concreto, pregúntanos y te lo confirmamos.',
	puntos: [
		'Carne halal certificada',
		'Sin alcohol en la carta',
		'Zumo de naranja natural',
		'Cocina mediterránea y de mercado',
	],
};

export const HIGHLIGHTS_MENU = {
	eyebrow: 'De la carta',
	title: 'Lo que más se pide',
	text: 'La carta alterna cocina mediterránea con los platos de siempre de una cafetería malagueña. Estos son los que más repetimos nosotros; el resto está en la carta completa.',
	enlace: '/carta',
};

/** Platos destacados. Los precios concretos se confirman por teléfono. */
export const SPECIALTIES = [
	{
		icon: 'ri-cup-line',
		title: 'Desayuno completo',
		text: 'Huevos al gusto, pan, queso, aceitunas y zumo de naranja recién exprimido, de 8:00 a 15:00.',
		tag: 'De 8:00 a 15:00',
	},
	{
		icon: 'ri-bowl-line',
		title: 'Platos de la casa',
		text: 'Arroces, pasta yiterránea, entrantes y platos combinados, todo preparado con carne halal certificada.',
		tag: 'Cocina halal',
	},
	{
		icon: 'ri-restaurant-2-line',
		title: 'Comida y cena',
		text: 'Servicio de comida y cena hasta la una de la madrugada, con mesas para grupos y reuniones.',
		tag: 'Hasta 00:30',
	},
	{
		icon: 'ri-cake-3-line',
		title: 'Bollería y pastelería',
		text: 'Croissants, pain au chocolat y dulces hechos en casa cada mañana, para el desayuno o para la merienda.',
		tag: 'Hecho a diario',
	},
];

export const MENU = [
	{
		name: 'Desayunos',
		icon: 'ri-cup-line',
		items: [
			{
				name: 'Classic',
				description:
					'2 huevos (tortilla francesa o frito), pan, queso, aceitunas, zumo de naranja y bebida.',
				tags: ['Hasta las 15:00'],
			},
			{
				name: 'Parisian',
				description: 'Croissant o pain au chocolat recién horneado, café y zumo de naranja.',
				tags: ['De 8:00 a 15:00'],
			},
			{
				name: 'Desayuno Oasis',
				description: 'El desayuno completo de la casa: huevos, pan, queso, aceitunas, zumo y bebida.',
				tags: ['El más pedido'],
			},
			{
				name: 'Café e infusiones',
				description: 'Café, té, infusiones y leche para empezar la mañana o acompañarla.',
			},
		],
	},
	{
		name: 'Entrantes y tapas',
		icon: 'ri-restaurant-line',
		items: [
			{
				name: 'Tapas de la casa',
				description: 'Raciones mediterráneas para compartir: croquetas, hummus y entrantes para picar.',
				tags: ['Para compartir'],
			},
			{
				name: 'Ensaladas',
				description: 'De temporada, con producto de mercado y sin carne, para los que buscan algo ligero.',
				tags: ['Vegetariano'],
			},
			{
				name: 'Sopa del día',
				description: 'Guiso casero que cambia con el mercado. Pregunta por el de hoy.',
				tags: ['Hecho en casa'],
			},
		],
	},
	{
		name: 'Platos de fondo',
		icon: 'ri-bowl-line',
		items: [
			{
				name: 'Arroces y paellas',
				description: 'Arroz meloso y paella preparados con carne halal certificada.',
				tags: ['Cocina halal'],
			},
			{
				name: 'Pasta mediterránea',
				description: 'Pasta fresca con salsa de tomate, verduras de temporada y la salsa de la casa.',
				tags: ['Cocina mediterránea'],
			},
			{
				name: 'Pollo y cordero',
				description: 'Pollo asado, cordero y otras carnes. Todo preparado con aceite de oliva y especias suaves.',
				tags: ['Carne halal'],
			},
			{
				name: 'Pescado del día',
				description: 'Producto fresco del mercado. Lo que haya, se cocina al momento.',
				tags: ['según mercado'],
			},
		],
	},
	{
		name: 'Bebidas',
		icon: 'ri-goblet-line',
		items: [
			{
				name: 'Zumo de naranja natural',
				description: 'Exprimido al momento, para acompañar el desayuno o la comida.',
				tags: ['Natural'],
			},
			{
				name: 'Café y té',
				description: 'Café solo, cortado o con leche; tés e infusiones.',
			},
			{
				name: 'Refrescos y agua',
				description: 'La selección habitual para acompañar la comida.',
			},
			{
				name: 'Sin alcohol',
				description: 'Ninguna de nuestras bebidas contiene alcohol.',
				tags: ['Halal'],
			},
		],
	},
];

export const FEATURES = [
	{ icon: 'ri-shield-check-line', label: 'Cocina halal' },
	{ icon: 'ri-sun-line', label: 'Abierto 7/7' },
	{ icon: 'ri-time-line', label: 'De 8:00 a 00:30' },
	{ icon: 'ri-train-line', label: 'Junto a María Zambrano' },
	{ icon: 'ri-cup-line', label: 'Desayunos desde las 8:00' },
	{ icon: 'ri-cake-3-line', label: 'Bollería casera' },
	{ icon: 'ri-phone-line', label: '951 72 54 01' },
	{ icon: 'ri-map-pin-line', label: 'P.º de los Tilos, 37' },
];

export const REVIEWS = [
	{
		text: 'Sitio limpio y el servicio muy rápido. Calidad halal en el centro de Málaga a muy buen precio.',
		author: 'Reseña en Google',
		rating: 5,
	},
	{
		text: 'Quédate a desayunar antes de coger el tren. Buenos huevos, buen pan y muy buena conversación.',
		author: 'Reseña en Google',
		rating: 5,
	},
	{
		text: 'El personal es cercano y la comida casera. Ideal si buscas un sitio tranquilo cerca de la estación.',
		author: 'Reseña en Google',
		rating: 5,
	},
	{
		text: 'Café por la mañana y comida corrida por la tarde. Siempre hay hueco y acertamos.',
		author: 'Reseña en Google',
		rating: 5,
	},
];

export const GALLERY = [
	{
		src: IMAGES.mapsPortada,
		alt: "Foto de perfil de L'Oasis Restaurante & Cafetería en el Paseo de los Tilos de Málaga",
		credit: 'Perfil de Google Maps',
	},
	{
		src: IMAGES.streetview133,
		alt: 'Fachada de L’Oasis en el Paseo de los Tilos, 37 de Málaga, vista desde el Paseo',
		credit: 'Google Street View',
	},
	{
		src: IMAGES.streetview90,
		alt: 'Entrada y escaparate de L’Oasis, cafetería halal junto a la estación María Zambrano',
		credit: 'Google Street View',
	},
	{
		src: IMAGES.streetview30,
		alt: 'Entorno de L’Oasis a primera hora, con el Paseo de los Tilos y la acera del local',
		credit: 'Google Street View',
	},
	{
		src: IMAGES.streetview180,
		alt: 'Vista del portal y del rincón de L’Oasis en el número 37 del Paseo de los Tilos',
		credit: 'Google Street View',
	},
	{
		src: IMAGES.streetview240,
		alt: 'Conjunto urbano donde se encuentra L’Oasis, en el barrio de Cruz de Humilladero',
		credit: 'Google Street View',
	},
];

/**
 * Preguntas frecuentes reales del negocio.
 *
 * Se usan dos veces: para pintar la sección de la portada y para generar el
 * `FAQPage` de schema.org, que es lo que permite que las respuestas aparezcan
 * como resultado enriquecido en Google.
 *
 * Solo se afirma lo que Google Maps o el propio local publica: horarios,
 * tipo de cocina, desayuno y ubicación. Si algún día cambia la oferta de
 * desayunos o el horario, actualiza solo este array.
 */
export const FAQS = [
	{
		question: '¿A qué hora abre L’Oasis?',
		answer:
			'Abrimos todos los días: de lunes a sábado de 8:00 a 00:30 y los domingos de 9:00 a 00:30. El desayuno se sirve hasta las 15:00 y la cena hasta la una de la madrugada.',
	},
	{
		question: '¿La comida es halal?',
		answer:
			'Sí. Toda la cocina se prepara conforme a las normas islámicas, con carne halal certificada y sin alcohol en ningún plato ni en ninguna bebida.',
	},
	{
		question: '¿Sirvéis desayuno?',
		answer:
			'Sí, de 8:00 a 15:00: huevos al gusto, pan, queso, aceitunas, zumo de naranja recién exprimido y bebida, además de croissants y bollería hecha cada mañana.',
	},
	{
		question: '¿Dónde estáis exactamente?',
		answer:
			'En el Paseo de los Tilos, 37, en el barrio de Cruz de Humilladero (29006 Málaga), a unos dos minutos andando de la estación de tren María Zambrano.',
	},
	{
		question: '¿Tenéis mesa para grupos?',
		answer:
			'Sí, tenemos mesas para grupos. Llámanos al 951 72 54 01 y te decimos qué día y qué hora te viene mejor.',
	},
	{
		question: '¿Cómo puedo reservar o pedir información?',
		answer:
			'Por teléfono al 951 72 54 01, de 8:00 a 00:30. La web es informativa: no hacemos reservas online.',
	},
];

/** Imagen social (1200×630), generada con `scripts/generate-og.mjs`. */
export const OG_IMAGE = `${BUSINESS.mapUrl}/og.jpg`;

/** La web como entidad, para enlazarla desde el grafo de cada página. */
export const ORGANIZATION_ID = `${BUSINESS.mapUrl}/#restaurante`;
export const WEBSITE_ID = `${BUSINESS.mapUrl}/#website`;

/**
 * Entidad `Restaurant` de schema.org.
 *
 * Se enlaza con `WebPage` y `BreadcrumbList` desde `buildSchemaGraph()` en el
 * layout. Incluye `ContactPoint`, `potentialAction` para el teléfono y las
 * reseñas de Google como `Review`, que es lo que Google usa para el panel de
 * información local.
 */
export const RESTAURANT_SCHEMA = {
	'@type': 'Restaurant',
	'@id': ORGANIZATION_ID,
	name: BUSINESS.name,
	alternateName: BUSINESS.fullName,
	description: BUSINESS.summary,
	url: `${BUSINESS.mapUrl}/`,
	telephone: '+34 951 72 54 01',
	image: [OG_IMAGE, ...GALLERY.map((photo) => `${BUSINESS.mapUrl}${photo.src.src}`)],
	logo: `${BUSINESS.mapUrl}/favicon.svg`,
	priceRange: BUSINESS.priceRange,
	servesCuisine: BUSINESS.cuisine,
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
	hasMenu: {
		'@type': 'Menu',
		'@id': `${BUSINESS.mapUrl}/carta#menu`,
		name: 'Carta de L’Oasis',
		inLanguage: 'es',
		url: `${BUSINESS.mapUrl}/carta`,
	},
	sameAs: [BUSINESS.instagram, BUSINESS.tiktok, BUSINESS.googleMaps],
	knowsLanguage: ['es'],
	acceptsReservations: 'False',
	paymentAccepted: 'Efectivo y tarjeta',
	currenciesAccepted: 'EUR',
	contactPoint: [
		{
			'@type': 'ContactPoint',
			telephone: '+34 951 72 54 01',
			contactType: 'reservations',
			areaServed: 'ES',
			availableLanguage: ['es'],
		},
	],
	potentialAction: {
		'@type': 'ReserveAction',
		target: {
			'@type': 'EntryPoint',
			urlTemplate: BUSINESS.phoneHref,
			actionPlatform: [
				'http://schema.org/TelephoneAction',
				'http://schema.org/MobileWebPlatform',
			],
		},
		result: { '@type': 'Reservation', name: 'Mesa en L’Oasis' },
	},
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
			opens: '08:00',
			closes: '00:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: 'Sunday',
			opens: '09:00',
			closes: '00:30',
		},
	],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewsCount,
		bestRating: 5,
		worstRating: 1,
	},
	review: REVIEWS.map((review) => ({
		'@type': 'Review',
		reviewBody: review.text,
		author: { '@type': 'Organization', name: review.author },
		reviewRating: {
			'@type': 'Rating',
			ratingValue: review.rating,
			bestRating: 5,
			worstRating: 1,
		},
	})),
	subjectOf: { '@id': `${BUSINESS.mapUrl}/#website` },
};

export const WEBSITE_SCHEMA = {
	'@type': 'WebSite',
	'@id': WEBSITE_ID,
	url: `${BUSINESS.mapUrl}/`,
	name: BUSINESS.fullName,
	description: BUSINESS.summary,
	inLanguage: 'es-ES',
	publisher: { '@id': ORGANIZATION_ID },
};

/** `FAQPage` con las preguntas de `FAQS`. */
export const FAQ_SCHEMA = {
	'@type': 'FAQPage',
	'@id': `${BUSINESS.mapUrl}/#faq`,
	mainEntity: FAQS.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};

/**
 * Construye el grafo de datos estructurados de una página.
 *
 * Un solo `<script type="application/ld+json">` con `@graph` es mejor que
 * varios scripts sueltos: permite referenciar las entidades con `@id` y es lo
 * que recomienda la documentación de Google.
 *
 * @param page   Datos de la página actual (título, ruta, idioma).
 * @param extra  Entidades adicionales específicas de la página (miga de pan, FAQ…).
 */
export function buildSchemaGraph(
	page: { name: string; path: string; description: string; lang?: string },
	extra: Record<string, unknown>[] = [],
) {
	return {
		'@context': 'https://schema.org',
		'@graph': [
			{
				'@type': 'WebPage',
				'@id': `${BUSINESS.mapUrl}${page.path}#webpage`,
				url: `${BUSINESS.mapUrl}${page.path}`,
				name: page.name,
				description: page.description,
				inLanguage: page.lang ?? 'es-ES',
				isPartOf: { '@id': WEBSITE_ID },
				about: { '@id': ORGANIZATION_ID },
				primaryImageOfPage: OG_IMAGE,
				breadcrumb: { '@id': `${BUSINESS.mapUrl}${page.path}#breadcrumb` },
			},
			{
				'@type': 'BreadcrumbList',
				'@id': `${BUSINESS.mapUrl}${page.path}#breadcrumb`,
				itemListElement: breadcrumbItems(page.path, page.name),
			},
			{ '@id': ORGANIZATION_ID, ...RESTAURANT_SCHEMA },
			{ '@id': WEBSITE_ID, ...WEBSITE_SCHEMA },
			...extra,
		],
	};
}

/** Miga de pan derivada de la ruta: `/carta` → Inicio › Carta. */
function breadcrumbItems(path: string, name: string) {
	const home = { position: 1, name: 'Inicio', item: `${BUSINESS.mapUrl}/` };
	// La portada no lleva miga de pan: solo «Inicio».
	if (path === '/' || path === '') return [home];
	return [home, { position: 2, name, item: `${BUSINESS.mapUrl}${path}` }];
}
