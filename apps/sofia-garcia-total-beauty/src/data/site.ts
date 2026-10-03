/**
 * Datos de Sofía García Total Beauty, salón de belleza en la calle Mesonero Romanos, 10
 * (barriada Teatinos-Universidad, 29010 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps (dirección,
 * teléfono, categoría «peluquera» —beautician—, una valoración de 5,0 con 11 reseñas y 16
 * fotos) y de su perfil público de Instagram (@totalbeauty_sg), que publica la misma
 * dirección, el mismo teléfono y que las **citas son de lunes a viernes**.
 *
 * La ficha de Google **no publica horario** (ofrece la opción de «añadir horario»), así que
 * esta web no inventa uno: indica que el salón trabaja con cita previa de lunes a viernes, como
 * anuncia en Instagram, e invita a confirmar el día y la hora por teléfono.
 *
 * Tampoco se publican tarifas: el salón no difunde una lista de precios y no sería correcto
 * inventarla. La web describe los servicios que sí aparecen en la ficha y en las reseñas.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (fotos de la ficha más
 * una vista de la calle). Los nombres de archivo son descriptivos a propósito (Google Imágenes
 * los indexa con el nombre del archivo).
 */
import fotoRecepcion from '../assets/fotos/sofia-garcia-total-beauty-recepcion-malaga.jpg';
import fotoManicura from '../assets/fotos/sofia-garcia-total-beauty-manicura-malaga.jpg';
import fotoEsmaltes from '../assets/fotos/sofia-garcia-total-beauty-esmaltes-malaga.jpg';
import fotoCalle from '../assets/fotos/sofia-garcia-total-beauty-calle-mesonero-romanos-malaga.jpg';

export const IMAGES = {
	fotoRecepcion,
	fotoManicura,
	fotoEsmaltes,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Sofía García Total Beauty',
	shortName: 'Total Beauty',
	tagline: 'Salón de belleza en el centro de Málaga',
	claim: 'Manicuras y diseños de uñas en el centro de Málaga',
	summary:
		'Sofía García Total Beauty es un salón de belleza en la calle Mesonero Romanos, 10, en el centro de Málaga. Manicuras, diseños de uñas y esmaltados con productos de alta calidad, con cita previa de lunes a viernes. Valorado con 5,0 sobre 5 en Google.',
	street: 'Calle Mesonero Romanos, 10',
	district: 'Teatinos-Universidad',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '613 60 18 91',
	phoneHref: 'tel:+34613601891',
	/** El salón concierta las citas por WhatsApp o teléfono, como anuncian en sus redes. */
	whatsapp: 'https://wa.me/34613601891',
	instagram: 'https://www.instagram.com/totalbeauty_sg/',
	googleMaps:
		'https://www.google.com/maps/place/Sof%C3%ADa+Garc%C3%ADa+Total+Beauty+-+Sal%C3%B3n+de+Belleza/@36.7247154,-4.4612508,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7f4e885c469:0x7ec142aaf22fe4d1!8m2!3d36.7247154!4d-4.4612508!16s%2Fg%2F11zbqkh758',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Mesonero%20Romanos%2C%2010%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7247154, lng: -4.4612508 },
	/** Valoración pública de la ficha de Google en la fecha de creación del sitio. */
	rating: 5,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '5,0',
	reviewsCount: 11,
	priceRange: '€€',
	categories: ['Salón de belleza', 'Manicura', 'Diseño de uñas', 'Esmaltado de uñas'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PGFQ+VF Málaga',
	/** El salón trabaja con cita previa, de lunes a viernes. */
	byAppointment: true,
	/**
	 * Horario. Google no publica horario para esta ficha, así que aquí solo se refleja lo que el
	 * propio salón anuncia en Instagram: citas de lunes a viernes.
	 */
	hours: [
		{ days: 'Lunes a viernes', hours: 'Con cita previa' },
		{ days: 'Sábado y domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'La ficha de Google todavía no publica horario para este salón. En su Instagram anuncia «citas de lunes a viernes»: escribe por WhatsApp o llama al 613 60 18 91 para confirmar el día y la hora exactos.',
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los datos
	 * estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://sofia-garcia-total-beauty.vercel.app',
};

/**
 * Datos legales del titular del sitio (LSSI-CE). Rellena los tres campos antes de publicar;
 * mientras falte alguno, /aviso-legal muestra un aviso y los campos aparecen como
 * «[pendiente de completar]».
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

export const PAGE_NAV = [
	{ label: 'Productos y servicios', href: '/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-star-fill',
		title: '5,0★ en Google',
		text: 'Valoración perfecta con 11 reseñas: el salón mejor puntuado de la zona.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita previa',
		text: 'Citas de lunes a viernes. Escríbele por WhatsApp o llámala para reservar.',
	},
	{
		icon: 'ri-focus-3-line',
		title: 'Cuidado al detalle',
		text: 'Lo que más repiten sus clientas: cada uña está cuidada y el acabado es impecable.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En Teatinos',
		text: 'En la calle Mesonero Romanos, 10, a pocos minutos del centro histórico.',
	},
];

/**
 * Servicios del salón. Se recogen los que aparecen en la ficha, en su perfil de Instagram y en
 * las reseñas públicas (manicuras, diseños de uñas, esmaltados y otros servicios de belleza).
 * No se publican precios porque el salón no difunde una tarifa.
 */
export const SERVICIOS = [
	{
		icon: 'ri-hand-2',
		title: 'Manicura',
		text: 'Manicuras esmaltadas y cuidadas al detalle. Es el servicio que más recomiendan sus clientas.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Diseño de uñas',
		text: 'Te propone ideas y te ayuda a elegir el diseño: explica las opciones y decides tú.',
	},
	{
		icon: 'ri-drop-line',
		title: 'Esmalte de alta calidad',
		text: 'Trabaja con productos de alta calidad: es lo que hace que las uñas te duren mucho tiempo.',
	},
	{
		icon: 'ri-brush-line',
		title: 'Acabado impecable',
		text: 'Cada manicura se esmolda y se repasa una a una para que el acabado quede perfecto.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Otros servicios de belleza',
		text: 'Además de las uñas, el salón ofrece otros servicios de belleza. Pregunta al reservar.',
	},
	{
		icon: 'ri-chat-heart-line',
		title: 'Te asesora sin prisa',
		text: 'Explica las opciones y te deja decidir con calma, sin presión por la manicura.',
	},
];

/**
 * Por qué elegir el salón. Los puntos proceden de las reseñas y de la información publicada por
 * el propio salón en Instagram (citas de lunes a viernes).
 */
export const VENTAJAS = [
	{
		icon: 'ri-star-line',
		title: 'Valoración perfecta',
		text: '5,0 sobre 5 en Google, y todas las reseñas disponibles son elogios al trabajo de Sofía.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Trato cercano',
		text: 'Sofía recibe con simpatía y trata a cada clienta como si fuera la única, según cuentan sus reseñas.',
	},
	{
		icon: 'ri-focus-3-line',
		title: 'Cuidado del detalle',
		text: 'El detalle es lo que más se repite en las reseñas: se ocupa de cada uña por separado.',
	},
	{
		icon: 'ri-drop-line',
		title: 'Productos de calidad',
		text: 'Usa productos de alta calidad, y por eso las uñas duran mucho tiempo.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Te ayuda a elegir',
		text: 'Te da ideas y te asesora para que el diseño sea el que te gusta de verdad.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Citas de lunes a viernes',
		text: 'Atiende de lunes a viernes con cita previa, concertada por WhatsApp o teléfono para elegir día y hora.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'Estoy muy contenta con el resultado. Sofía es súper simpática, profesional y muy detallista. El acabado de las uñas es precioso y el servicio excelente. Siempre me hago las manicuras con ella. La recomiendo totalmente.',
		source: 'Mercedes Jiménez · Reseña en Google',
	},
	{
		text: '¡Sofía es la mejor! Siempre te trata muy bien, te da ideas y te ayuda a elegir el diseño. Es muy cuidadosa con las uñas y los productos son de mucha calidad. ¡Las uñas me duran muchísimo!',
		source: 'Maria López · Reseña en Google',
	},
	{
		text: 'Llevo tiempo confiando en Sofía con mis uñas y no podría estar más feliz. Además de hacer un trabajo precioso y siempre impecable, pone muchísimo cuidado en cada detalle y en cada uña.',
		source: 'Noelia Rodriguez · Reseña en Google',
	},
];

/**
 * Temas que se repiten en las reseñas, según las etiquetas que la propia ficha agrupa
 * (resumen, no una cita textual).
 */
export const REVIEW_THEMES = [
	{ icon: 'ri-hand-2', label: 'Uñas' },
	{ icon: 'ri-focus-3-line', label: 'Cuidado del detalle' },
	{ icon: 'ri-heart-3-line', label: 'Trato cercano' },
	{ icon: 'ri-palette-line', label: 'Diseño' },
	{ icon: 'ri-sparkling-2-line', label: 'Resultado' },
];

/** Preguntas frecuentes reales del salón (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Sofía García Total Beauty?',
		a: 'En la calle Mesonero Romanos, 10, en el barrio de Teatinos-Universidad (29010 Málaga), a pocos minutos del centro histórico. Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Hay que pedir cita?',
		a: 'Sí, el salón trabaja con cita previa. Escríbele por WhatsApp o llama al 613 60 18 91 para reservar tu manicura y elegir día y hora.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'La ficha de Google todavía no publica horario. En su Instagram Sofía anuncia «citas de lunes a viernes», así que el salón atiende de lunes a viernes y cierra el fin de semana. Para confirmar la hora exacta, escribe por WhatsApp o llama al 613 60 18 91.',
	},
	{
		q: '¿Qué servicios ofrece?',
		a: 'Manicuras y esmaltados de uñas, diseño y acabado de uñas con mucho cuidado, y otros servicios de belleza además de la manicura. Si tienes algo concreto en mente, pregunta por WhatsApp y te dirán si lo hacen.',
	},
	{
		q: '¿Cuánto cuesta la manicura?',
		a: 'El salón no publica una tarifa de precios, así que en esta web no se inventan importes. Escríbele por WhatsApp o llama al 613 60 18 91 y te dirá el precio según el diseño y el acabado que elijas.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'Puedes llamar o escribir por WhatsApp al 613 60 18 91 para pedir cita, resolver dudas sobre diseños o consultar precios.',
	},
	{
		q: '¿Dónde puedo ver sus trabajos?',
		a: 'En su Instagram (@totalbeauty_sg) publica las manicuras que hace. Es la mejor forma de ver el estilo de sus diseños antes de decidirte.',
	},
	{
		q: '¿Por qué tiene tan buenas reseñas?',
		a: 'Las reseñas coinciden en tres cosas: Sofía es muy simpática y profesional, cuida cada detalle de cada uña y usa productos de alta calidad, por lo que las uñas duran mucho tiempo. La valoración media es de 5,0 con 11 reseñas en Google.',
	},
];

/** Características del salón, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-hand-2', label: 'Manicura' },
	{ icon: 'ri-palette-line', label: 'Diseño de uñas' },
	{ icon: 'ri-drop-line', label: 'Esmalte de alta calidad' },
	{ icon: 'ri-brush-line', label: 'Acabado esmolado' },
	{ icon: 'ri-focus-3-line', label: 'Atención al detalle' },
	{ icon: 'ri-calendar-check-line', label: 'Cita previa' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoRecepcion,
		alt: 'Recepción del salón Sofía García Total Beauty en Málaga',
	},
	{
		src: IMAGES.fotoManicura,
		alt: 'Manicura con esmalte morado realizada en Sofía García Total Beauty (Málaga)',
	},
	{
		src: IMAGES.fotoEsmaltes,
		alt: 'Esmaltes de uñas del salón Sofía García Total Beauty en Málaga',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Calle Mesonero Romanos, en Teatinos (Málaga), donde está el salón',
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
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Sofía García Total Beauty Salón de Belleza',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 613 60 18 91',
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
		name: 'Servicios de Sofía García Total Beauty',
		itemListElement: SERVICIOS.map((item, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#oferta-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: item.title,
				description: item.text,
				areaServed: BUSINESS.city,
				provider: { '@type': 'BeautySalon', name: BUSINESS.name },
			},
		})),
	},
	sameAs: [BUSINESS.instagram],
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	/**
	 * Sin `openingHoursSpecification`: la ficha de Google no publica horario para este salón y no
	 * conviene emitir unos datos que no constan. En cuanto el negocio los publique, añádelos aquí
	 * y en el array `hours`.
	 */
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
