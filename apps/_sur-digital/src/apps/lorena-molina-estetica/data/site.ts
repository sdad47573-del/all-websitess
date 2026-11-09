/**
 * Datos de Lorena Molina Estética Avanzada y Micropigmentación, centro de estética en la
 * Avenida de Carlos Haya, 204 (Local 1), en el distrito Bailén-Miraflores de Málaga (29010).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps (dirección,
 * teléfono, horario, categoría «salón de belleza» y una valoración de 4,3 con 118 reseñas) y
 * de sus perfiles públicos de Instagram (@lorena_molinaesteticavanzada) y Facebook, que
 * publican el mismo teléfono, la misma dirección y que la atención es **con cita previa**.
 *
 * No se publican tarifas ni un catálogo cerrado con precios: el centro no difunde una lista
 * de precios propia y no sería correcto inventarla. La web describe los tratamientos que sí
 * aparecen en la ficha, en sus redes y en las reseñas.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (fotos de la ficha
 * más una vista de la calle). Los nombres de archivo son descriptivos a propósito (Google
 * Imágenes los indexa con el nombre del archivo).
 */
import fotoCabina from '../assets/fotos/lorena-molina-cabina-estetica-malaga.jpg';
import fotoTratamiento from '../assets/fotos/lorena-molina-tratamiento-facial-malaga.jpg';
import fotoCalle from '../assets/fotos/lorena-molina-avenida-carlos-haya-malaga.jpg';

export const IMAGES = {
	fotoCabina,
	fotoTratamiento,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Lorena Molina Estética Avanzada',
	shortName: 'Lorena Molina',
	tagline: 'Micropigmentación y estética avanzada en Málaga',
	claim: 'Micropigmentación, HIFU y tratamientos faciales con cita previa',
	summary:
		'Lorena Molina Estética Avanzada es un centro de micropigmentación y estética avanzada en la Avenida de Carlos Haya, 204 (Málaga). Micropigmentación de cejas, labios y ojos, microblading, HIFU 22D, exosomas, aumento e hidratación de labios y tratamientos faciales, con cita previa. Valorado con 4,3 sobre 5 en Google.',
	street: 'Avenida de Carlos Haya, 204, Local 1',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '642 02 13 59',
	phoneHref: 'tel:+34642021359',
	/** El centro concierta las citas por WhatsApp, como anuncian en sus redes. */
	whatsapp: 'https://wa.me/34642021359',
	instagram: 'https://www.instagram.com/lorena_molinaesteticavanzada/',
	facebook: 'https://www.facebook.com/p/Lorena-Molina-Est%C3%A9tica-Avanzada-61555647510836/',
	googleMaps:
		'https://www.google.com/maps/place/Lorena+Molina+Micropigmentacion+y+Est%C3%A9tica+Avanzada/@36.725403,-4.4576923,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f759b3fd6a95:0x8d173167c3d8a0b!8m2!3d36.725403!4d-4.4576923!16s%2Fg%2F11w2gwcs31',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20de%20Carlos%20Haya%2C%20204%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.725403, lng: -4.4576923 },
	/** Valoración pública de la ficha de Google en la fecha de creación del sitio. */
	rating: 4.3,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,3',
	reviewsCount: 118,
	priceRange: '€€',
	categories: [
		'Centro de estética',
		'Micropigmentación',
		'Microblading',
		'HIFU',
		'Estética avanzada',
	],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PGGR+5W Málaga',
	/** El centro atiende con cita previa, que se concierta por WhatsApp o teléfono. */
	byAppointment: true,
	/**
	 * Horario según la ficha de Google. La ficha marca el centro como «abierto 24 horas» de
	 * lunes a viernes (lo habitual cuando se trabaja con cita previa) y cerrado el fin de
	 * semana; el texto de esta web lo explica para no confundir a quien la visite.
	 */
	hours: [
		{ days: 'Lunes a viernes', hours: 'Con cita previa' },
		{ days: 'Sábado', hours: 'Cerrado' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'En la ficha de Google figura como «abierto 24 horas» de lunes a viernes y cerrado el fin de semana; se atiende siempre con cita previa, así que lo mejor es escribir por WhatsApp o llamar para concretar día y hora.',
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los datos
	 * estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://www.sur-digital.com/lorena-molina-estetica',
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
	{ label: 'El centro', href: '#centro' },
	{ label: 'Tratamientos', href: '#tratamientos' },
	{ label: 'Opiniones', href: '#opiniones' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [
	{ label: 'Productos y servicios', href: '/lorena-molina-estetica/servicios' },
	{ label: 'Aviso legal y privacidad', href: '/lorena-molina-estetica/aviso-legal' },
];

export const HIGHLIGHTS = [
	{
		icon: 'ri-star-line',
		title: '4,3★ en Google',
		text: 'Más de un centenar de reseñas destacan los resultados naturales y el trato personal.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Con cita previa',
		text: 'Se atiende con cita, que puedes pedir por WhatsApp o teléfono para elegir día y hora.',
	},
	{
		icon: 'ri-quill-pen-line',
		title: 'Micropigmentación',
		text: 'Cejas, labios y ojos: micropigmentación y microblading con acabado natural.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En Bailén-Miraflores',
		text: 'En la Avenida de Carlos Haya, 204, con transporte público y aparcamiento cerca.',
	},
];

/**
 * Tratamientos del centro. Se recogen los que aparecen en la ficha, en sus redes y en las
 * reseñas públicas (micropigmentación, microblading, HIFU, exosomas, labios, párpados,
 * manchas y remodelación corporal). No se publican precios porque el centro no difunde
 * una tarifa propia.
 */
export const SERVICIOS = [
	{
		icon: 'ri-quill-pen-line',
		title: 'Micropigmentación de cejas',
		text: 'Diseño y micropigmentación de cejas: pelo a pelo, sombreado o híbridas, con un acabado lo más natural posible.',
	},
	{
		icon: 'ri-brush-line',
		title: 'Microblading de cejas',
		text: 'Técnica pelo a pelo para rellenar huecos y dar forma a las cejas. Es uno de los servicios más mencionados en las reseñas.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Micropigmentación de labios',
		text: 'Color, definición y neutralización de labios con micropigmentación para un efecto más definido e hidratado.',
	},
	{
		icon: 'ri-eye-line',
		title: 'Micropigmentación de ojos',
		text: 'Delineado y realce de la mirada con micropigmentación, para quienes quieren destacar los ojos sin maquillaje diario.',
	},
	{
		icon: 'ri-pulse-line',
		title: 'HIFU 22D facial y corporal',
		text: 'Ultrasonidos focalizados de alta intensidad para tratar la flacidez y las arrugas en rostro y cuerpo, sin cirugía.',
	},
	{
		icon: 'ri-drop-line',
		title: 'Exosomas y tratamientos faciales',
		text: 'Terapia regenerativa con exosomas, combinable con HIFU y otros tratamientos, para mejorar la calidad de la piel.',
	},
	{
		icon: 'ri-magic-line',
		title: 'Párpados caídos sin cirugía',
		text: 'Eliminación del exceso de piel del párpado sin pasar por quirófano, uno de los tratamientos que más clientas piden.',
	},
	{
		icon: 'ri-sun-line',
		title: 'Manchas y remodelación corporal',
		text: 'Tratamiento de manchas localizadas y despigmentación, además de tratamientos de remodelación corporal.',
	},
];

/**
 * Por qué elegir el centro. Los puntos proceden de las reseñas y de la información publicada
 * por el propio centro en sus redes (atención con cita previa por WhatsApp).
 */
export const VENTAJAS = [
	{
		icon: 'ri-whatsapp-line',
		title: 'Cita por WhatsApp',
		text: 'Conciertan las citas por WhatsApp: cuentas lo que quieres, te asesoran y buscan el hueco que mejor te venga.',
	},
	{
		icon: 'ri-chat-check-line',
		title: 'Te explican todo',
		text: 'En las reseñas se repite que explica cada paso y resuelve las dudas antes de empezar el tratamiento.',
	},
	{
		icon: 'ri-leaf-line',
		title: 'Resultados naturales',
		text: 'La micropigmentación busca un efecto natural y delicado, no un cambio artificial.',
	},
	{
		icon: 'ri-shield-check-line',
		title: 'Higiene y confianza',
		text: 'Las clientas describen el centro como un sitio limpio y profesional que inspira confianza desde el primer momento.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Ambiente acogedor',
		text: 'Un espacio agradable y relajado, con un trato cercano y personalizado en cada visita.',
	},
	{
		icon: 'ri-graduation-cap-line',
		title: 'Formación y experiencia',
		text: 'Además de los tratamientos, imparte formación en micropigmentación y estética avanzada.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'Lorena es increíblemente simpática: explica todo lo que va a hacer y te hace sentir muy cómoda. Me hice un tratamiento 3 en 1 con HIFU, exosomas y aumento de labios, ¡y fue la primera vez que no sentí ningún dolor!',
		source: 'ARA ro · Reseña en Google',
	},
	{
		text: 'Servicio excelente y resultados increíbles. El sitio es muy profesional, limpio e inspira confianza desde el primer momento. Los resultados de la micropigmentación me encantaron: naturales y delicados.',
		source: 'Lucia Perez · Reseña en Google',
	},
];

/**
 * Temas que se repiten en las reseñas, según las etiquetas que la propia ficha agrupa
 * (resumen, no una cita textual).
 */
export const REVIEW_THEMES = [
	{ icon: 'ri-pulse-line', label: 'HIFU' },
	{ icon: 'ri-brush-line', label: 'Microblading' },
	{ icon: 'ri-sparkling-2-line', label: 'Relleno de labios' },
	{ icon: 'ri-chat-check-line', label: 'Explicación del proceso' },
	{ icon: 'ri-user-heart-line', label: 'Trato personal' },
	{ icon: 'ri-emotion-happy-line', label: 'Ambiente acogedor' },
];

/** Preguntas frecuentes reales del centro (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Lorena Molina Estética Avanzada?',
		a: 'En la Avenida de Carlos Haya, 204, Local 1, en el distrito Bailén-Miraflores de Málaga (29010). Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Hay que pedir cita?',
		a: 'Sí. El centro atiende con cita previa y la concierta por WhatsApp o teléfono. Escríbeme al 642 02 13 59, cuéntame qué tratamiento te interesa y buscamos el día que mejor te venga.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'En la ficha de Google el centro figura como «abierto 24 horas» de lunes a viernes y cerrado el fin de semana, porque se trabaja con cita previa. Lo más fiable es escribir por WhatsApp o llamar al 642 02 13 59 para concretar día y hora.',
	},
	{
		q: '¿Qué tratamientos ofrecen?',
		a: 'Micropigmentación de cejas, labios y ojos, microblading, HIFU 22D facial y corporal, exosomas, aumento e hidratación de labios, eliminación de párpados caídos sin cirugía, tratamiento de manchas y remodelación corporal, además de formación en micropigmentación y estética avanzada.',
	},
	{
		q: '¿Cuánto cuesta un tratamiento?',
		a: 'El centro no publica una tarifa de precios, así que en esta web no se inventan importes. Escríbeme por WhatsApp o llama al 642 02 13 59 y te informan del precio según el tratamiento que quieras hacerme.',
	},
	{
		q: '¿La micropigmentación queda natural?',
		a: 'Sí. Es uno de los puntos que más se repite en las reseñas: acabados naturales y delicados, con un estudio previo del diseño para que el resultado no se vea artificial.',
	},
	{
		q: '¿Duele el tratamiento?',
		a: 'Se aplica anestesia tópica para reducir las molestias. En las reseñas hay quien destaca que no sintió dolor durante el tratamiento, aunque la sensación varía según la persona y la zona.',
	},
	{
		q: '¿Ofrecen formación?',
		a: 'Sí. Además de atender a sus clientas, imparte formación en micropigmentación y estética avanzada. Pregunta por WhatsApp o en el 642 02 13 59 para conocer las próximas convocatorias.',
	},
];

/** Características del centro, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-quill-pen-line', label: 'Micropigmentación' },
	{ icon: 'ri-brush-line', label: 'Microblading' },
	{ icon: 'ri-sparkling-2-line', label: 'Micropigmentación de labios' },
	{ icon: 'ri-eye-line', label: 'Micropigmentación de ojos' },
	{ icon: 'ri-pulse-line', label: 'HIFU 22D' },
	{ icon: 'ri-drop-line', label: 'Exosomas' },
	{ icon: 'ri-magic-line', label: 'Párpados sin cirugía' },
	{ icon: 'ri-sun-line', label: 'Tratamiento de manchas' },
	{ icon: 'ri-calendar-check-line', label: 'Cita previa' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoCabina,
		alt: 'Cabina de tratamientos de Lorena Molina Estética Avanzada en Málaga',
	},
	{
		src: IMAGES.fotoTratamiento,
		alt: 'Tratamiento facial realizado en Lorena Molina Estética Avanzada (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Avenida de Carlos Haya, en Bailén-Miraflores (Málaga), donde está el centro',
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
	alternateName: 'Lorena Molina Estética Avanzada y Micropigmentación',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 642 02 13 59',
	priceRange: BUSINESS.priceRange,
	currenciesAccepted: 'EUR',
	/** Tratamientos y servicios que ofrece el centro. */
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
		name: 'Servicios de Lorena Molina Estética',
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
	sameAs: [BUSINESS.instagram, BUSINESS.facebook],
	amenityFeature: FEATURES.map((feature) => ({
		'@type': 'LocationFeatureSpecification',
		name: feature.label,
		value: true,
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '00:00',
			closes: '23:59',
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
