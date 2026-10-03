/**
 * Datos de Mariló Díaz Salón de Estética, centro de estética en la calle Magistrado Salvador
 * Barbera, Bloque 3, Local 8 (se accede por la calle Francisco Vigil Escalera, 1), en el
 * distrito de Bailén-Miraflores de Málaga (29010).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps: dirección,
 * teléfono, horario con franja partida, categoría «salón de belleza», una valoración de 5,0 con
 * 65 reseñas y 51 fotos.
 *
 * Dos ausencias que la web respeta en lugar de rellenarlas:
 *
 * 1. **No hay web propia ni redes sociales** del salón (Google ofrece la opción de «añadir
 *    sitio web» y no se han localizado perfiles), así que el único contacto es el teléfono.
 * 2. **No se publica catálogo de servicios ni precios.** La sección de servicios describe las
 *    áreas del salón y avisa de que hay que confirmar por teléfono; no se inventan importes.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (fachada y una manicura)
 * más una vista de la calle. Los nombres de archivo son descriptivos a propósito (Google
 * Imágenes los indexa con el nombre del archivo).
 */
import fotoFachada from '../assets/fotos/marilo-diaz-estetica-fachada-malaga.jpg';
import fotoManicura from '../assets/fotos/marilo-diaz-estetica-manicura-malaga.jpg';
import fotoCalle from '../assets/fotos/marilo-diaz-estetica-calle-malaga.jpg';

export const IMAGES = {
	fotoFachada,
	fotoManicura,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Mariló Díaz Salón de Estética',
	shortName: 'Mariló Díaz',
	tagline: 'Salón de estética en Bailén-Miraflores, Málaga',
	claim: 'Estética y belleza en el centro de Málaga, con cita previa',
	summary:
		'Mariló Díaz Salón de Estética está en la calle Magistrado Salvador Barbera, Bloque 3, Local 8 (Bailén-Miraflores, Málaga). Manicuras, tratamientos de belleza y cuidado personal con cita previa, en un salón con ambiente familiar. Valorado con 5,0 sobre 5 en Google.',
	street: 'Magistrado Salvador Barbera, Bloque 3, Local 8',
	/**
	 * Google da la dirección del local en la calle Magistrado Salvador Barbera, pero el acceso
	 * se hace por la calle Francisco Vigil Escalera, 1. La ficha incluye ambas para que se
	 * pueda llegar sin perder tiempo.
	 */
	accessStreet: 'C. Francisco Vigil Escalera, 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '952 30 15 36',
	phoneHref: 'tel:+34952301536',
	googleMaps:
		'https://www.google.com/maps/place/Maril%C3%B3+D%C3%ADaz+Salon+De+Estetica/@36.723413,-4.4434529,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70b779ef3db:0x7020bd03a39631bb!8m2!3d36.723413!4d-4.4434529!16s%2Fg%2F11bxft8p58',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Calle%20Francisco%20Vigil%20Escalera%2C%201%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.723413, lng: -4.4434529 },
	/** Valoración pública de la ficha de Google. */
	rating: 5,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '5,0',
	reviewsCount: 65,
	priceRange: '€€',
	categories: ['Salón de estética', 'Manicura', 'Tratamientos de belleza', 'Cuidado personal'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PHF4+9J Málaga',
	/** El salón atiende con cita previa, que se concierta por teléfono. */
	byAppointment: true,
	/**
	 * Horario de la ficha de Google. De lunes a jueves tiene dos franjas: por la mañana y por
	 * la tarde. Todos los días aparecen marcados con asterisco, lo que suele indicar horario
	 * especial.
	 */
	hours: [
		{ days: 'Lunes a jueves', hours: '9:30 – 13:30 y 16:00 – 20:00' },
		{ days: 'Viernes', hours: '9:30 – 17:30' },
		{ days: 'Sábado', hours: '10:00 – 14:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según la ficha de Google. Puede cambiar en festivos: llama antes de desplazarte para confirmar tu cita.',
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los datos
	 * estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://marilo-diaz-estetica.vercel.app',
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
		text: 'Valoración perfecta con 65 reseñas. La mejor recomendación es la gente que lo conoce.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Cita previa',
		text: 'Se atiende con cita. Llama al 952 30 15 36 y te buscan el día y la hora que te venga bien.',
	},
	{
		icon: 'ri-home-heart-line',
		title: 'Ambiente familiar',
		text: 'Las reseñas destacan el trato cercano y que te sientes como en casa.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En Bailén-Miraflores',
		text: 'Magistrado Salvador Barbera, Bloque 3, Local 8, a un paso del centro de Málaga.',
	},
];

/**
 * Servicios del salón. La ficha de Google **no publica un catálogo de servicios** ni el salón
 * tiene web propia, así que esta lista describe las áreas de trabajo del salón y la sección
 * avisa de que hay que confirmar por teléfono. Si el negocio pasa su carta real, sustituye este
 * array por la lista verdadera.
 */
export const SERVICIOS = [
	{
		icon: 'ri-hand-2',
		title: 'Manicura y esmaltado',
		text: 'Manicuras y esmaltado de uñas, con el cuidado y el acabado que se ven en las fotos de la ficha del salón.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Tratamientos de belleza',
		text: 'Tratamientos de belleza y cuidado de la piel. Es lo que más mencionan sus clientas en las reseñas.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Cuidado facial',
		text: 'Limpieza y cuidado del rostro, con un enfoque sencillo y natural.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación con distintas técnicas según la zona y tu piel. Llama y te indican la opción adecuada.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Cuidado de la piel',
		text: 'Rutinas y productos para cuidar la piel, indicados para cada caso.',
	},
	{
		icon: 'ri-heart-3-line',
		title: 'Momento para ti',
		text: 'Un rato para ti en un salón pequeño y tranquilo, con gente que te trata de la misma manera desde el primer día.',
	},
];

/**
 * Por qué elegir el salón. Los puntos proceden de las reseñas públicas de Google y de la ficha
 * (horario, valoración y tiempo que llevan algunas clientas como clientas).
 */
export const VENTAJAS = [
	{
		icon: 'ri-star-line',
		title: 'Cinco estrellas',
		text: '5,0 sobre 5 en Google con 65 reseñas: ninguna valoración baja entre las que se pueden leer.',
	},
	{
		icon: 'ri-time-line',
		title: 'Más de 20 años de clientas',
		text: 'Hay clientas que llevan más de veinte años yendo. Es la mejor prueba de que el trabajo se sostiene en el tiempo.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Trato cercano',
		text: 'La amabilidad y el trato personal son lo primero que mencionan las reseñas, una y otra vez.',
	},
	{
		icon: 'ri-home-heart-line',
		title: 'Sensación de familia',
		text: 'Varias reseñas describen el salón como un sitio de familia, donde te sientes cuidada de verdad.',
	},
	{
		icon: 'ri-user-heart-line',
		title: 'Te reconocen cuando entras',
		text: 'El equipo es el mismo de siempre y tienen en cuenta el detalle de lo que te funciona: por eso hay clientas que no se cambian de salón.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Calidad garantizada',
		text: 'Las clientas repetidoras dicen que la calidad está garantizada. Si algo no te convence, lo dices y lo arreglan.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'Muy profesional, resultados inigualables, trato personal. Llevo más de 20 años como clienta y tienen el mejor personal.',
		source: 'ana M S · Reseña en Google',
	},
	{
		text: 'Servicio excelente, muy profesionales. Los recomiendo mucho. Tuvieron la amabilidad de encontrarme un hueco un sábado y me han ganado otra clienta.',
		source: 'Rocio Moral · Reseña en Google',
	},
	{
		text: 'El mejor sitio para mimarse. Lleva años siendo mi salón de belleza favorito: Mariló es increíble y Patri también. Se lo recomiendo a todo el mundo, la calidad está garantizada y lo pasarás genial con su personal tan majo.',
		source: 'Belén · Reseña en Google',
	},
];

/**
 * Temas que se repiten en las reseñas, según las etiquetas que la propia ficha agrupa
 * (resumen, no una cita textual).
 */
export const REVIEW_THEMES = [
	{ icon: 'ri-emotion-happy-line', label: 'Amabilidad' },
	{ icon: 'ri-sparkling-2-line', label: 'Tratamientos' },
	{ icon: 'ri-user-heart-line', label: 'Trato personal' },
	{ icon: 'ri-home-heart-line', label: 'Ambiente familiar' },
	{ icon: 'ri-shield-check-line', label: 'Calidad' },
];

/** Preguntas frecuentes reales del salón (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Mariló Díaz Salón de Estética?',
		a: 'En la calle Magistrado Salvador Barbera, Bloque 3, Local 8, en el distrito de Bailén-Miraflores de Málaga (29010). El acceso se hace por la calle Francisco Vigil Escalera, 1. Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a jueves de 9:30 a 13:30 y de 16:00 a 20:00; el viernes de 9:30 a 17:30; y el sábado de 10:00 a 14:00. El domingo está cerrado. Puede cambiar en festivos, así que llama antes de desplazarte.',
	},
	{
		q: '¿Hay que pedir cita?',
		a: 'Sí, el salón atiende con cita previa. Llama al 952 30 15 36 y te confirman la hora. Una clienta cuenta en su reseña que incluso le encontraron un hueco un sábado, así que merece la pena intentar si tienes poco margen.',
	},
	{
		q: '¿Qué servicios ofrece?',
		a: 'Es un salón de estética: manicura y esmaltado de uñas, tratamientos de belleza, cuidado facial y de la piel, y depilación. Google no publica su carta completa de servicios, así que lo mejor es llamar al 952 30 15 36 y preguntar por tu caso.',
	},
	{
		q: '¿Cuánto cuestan los tratamientos?',
		a: 'El salón no publica precios, así que en esta web no se inventan importes. Llama al 952 30 15 36 y te dirán el precio del tratamiento que te interesa.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono es el 952 30 15 36. Es también la única vía de contacto del salón, ya que no tiene web propia ni redes sociales publicadas.',
	},
	{
		q: '¿Por qué tiene tantas reseñas y tan buenas?',
		a: 'La valoración es de 5,0 con 65 reseñas. Lo que más se repite es el trato cercano, la sensación de ambiente familiar y la calidad del trabajo. Hay clientas que cuentan llevar más de veinte años yendo al salón.',
	},
	{
		q: '¿Quién atiende en el salón?',
		a: 'En las reseñas quienes más se mencionan son Mariló y Patri, siempre con comentarios muy buenos. El equipo es pequeño, y eso es justo lo que destacan las clientas más veteranas.',
	},
];

/** Características del salón, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-hand-2', label: 'Manicura y esmaltado' },
	{ icon: 'ri-sparkling-2-line', label: 'Tratamientos de belleza' },
	{ icon: 'ri-emotion-happy-line', label: 'Cuidado facial' },
	{ icon: 'ri-calendar-check-line', label: 'Cita previa' },
	{ icon: 'ri-home-heart-line', label: 'Ambiente familiar' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Fachada del salón Mariló Díaz, centro de estética en Málaga',
	},
	{
		src: IMAGES.fotoManicura,
		alt: 'Manicura en el salón Mariló Díaz de estética (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Calle Francisco Vigil Escalera, en Bailén-Miraflores (Málaga), donde está el salón',
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
	alternateName: 'Mariló Díaz Estética',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 952 30 15 36',
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	/** Áreas del salón. */
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
		name: 'Servicios de Mariló Díaz Estética',
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
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
			opens: '09:30',
			closes: '13:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
			opens: '16:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Friday'],
			opens: '09:30',
			closes: '17:30',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '14:00',
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
