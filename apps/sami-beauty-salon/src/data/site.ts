/**
 * Datos de Sami Beauty Salon, peluquería y centro de estética en la avenida de Carlos Haya, 23,
 * Local 3 (Cruz de Humilladero, 29010 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps: dirección, teléfono,
 * horario, categoría «centro de estética», valoración de 4,7 con 84 reseñas y 52 fotos.
 *
 * Dos detalles que la web respeta en lugar de rellenarlos:
 *
 * 1. **No hay web propia del salón.** Google ofrece la opción de «añadir sitio web» y no hay
 *    ninguna publicada. Lo que sí existe es una ficha de reserva dentro de Booksy, que es la vía
 *    online que el propio negocio enlaza desde Google, y así aparece en la web.
 * 2. **Google no publica el catálogo de servicios ni precios.** La sección de servicios describe
 *    las áreas del salón a partir de lo que cuentan las reseñas y de lo que anuncia el nombre del
 *    negocio, y avisa de que hay que confirmar por teléfono. No se inventan importes.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (la fachada del local y
 * una manicura) más una vista de la calle Carlos Haya desde Street View. Los nombres de archivo son
 * descriptivos a propósito: Google Imágenes los indexa con el nombre del archivo.
 */
import fotoFachada from '../assets/fotos/sami-beauty-salon-fachada-malaga.jpg';
import fotoManicura from '../assets/fotos/sami-beauty-salon-manicura.jpg';
import fotoCalle from '../assets/fotos/sami-beauty-salon-calle-carlos-haya.jpg';

export const IMAGES = {
	fotoFachada,
	fotoManicura,
	fotoCalle,
};

export const BUSINESS = {
	name: 'Sami Beauty Salon',
	shortName: 'Sami Beauty',
	tagline: 'Peluquería y estética en Carlos Haya, Málaga',
	claim: 'Peluquería y estética en el centro de Málaga, con cita online',
	summary:
		'Sami Beauty Salon es peluquería y centro de estética en la avenida de Carlos Haya, 23, Local 3 (Cruz de Humilladero, Málaga). Cortes, color, uñas y tratamientos de estética, con cita por teléfono o reserva online. Valorado con 4,7 sobre 5 en Google.',
	street: 'Av. de Carlos Haya, 23, Local 3',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '603 02 14 88',
	phoneHref: 'tel:+34603021488',
	googleMaps:
		'https://www.google.com/maps/place/Peluqueria+y+Estetica+SAMI+BEAUTY+SALON/@36.7215345,-4.4446701,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7c8e6ac1675:0x87c0bb43a788a362!8m2!3d36.7215345!4d-4.4446701!16s%2Fg%2F11khxtbxtg',
	/**
	 * Ficha de reserva en Booksy. Es el enlace que el propio negocio muestra en su perfil de
	 * Google («Reservar en línea»), así que se reproduce tal cual, sin inventar una web propia.
	 */
	reservation: 'https://booksy.com/es-es/rwg/134230_sami-beauty-salon_salon-de-unas_29485_malaga',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Av.%20de%20Carlos%20Haya%2C%2023%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7215345, lng: -4.4446701 },
	/** Valoración pública de la ficha de Google. */
	rating: 4.7,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,7',
	reviewsCount: 84,
	priceRange: '€€',
	categories: ['Peluquería', 'Centro de estética', 'Manicura', 'Cuidado del pelo'],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PHC4+J4 Málaga',
	byAppointment: true,
	/**
	 * Horario de la ficha de Google. De lunes a viernes abre a las 10:00 y cierra a las 19:00, y el
	 * sábado solo por la mañana. Todos los días aparecen marcados con asterisco, lo que suele
	 * indicar horario especial.
	 */
	hours: [
		{ days: 'Lunes a viernes', hours: '10:00 – 19:00' },
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
	siteUrl: 'https://sami-beauty-salon.vercel.app',
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
	{ label: 'Galería', href: '#galeria' },
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
		title: '4,7★ en Google',
		text: '84 reseñas y una valoración alta. La peluquería y el trato son lo que más se repite.',
	},
	{
		icon: 'ri-calendar-event-line',
		title: 'Cita online',
		text: 'Reserva desde la ficha de Booksy del salón o llama al 603 02 14 88.',
	},
	{
		icon: 'ri-time-line',
		title: 'Sin esperas',
		text: 'Las clientas destacan que te atienden a la hora citada. Se trabaja con hora cerrada.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En Carlos Haya',
		text: 'Local 3 de la avenida de Carlos Haya, 23, en Cruz de Humilladero (Málaga).',
	},
];

/**
 * Servicios del salón. La ficha de Google **no publica un catálogo de servicios**, así que esta
 * lista se apoya en lo que anuncian las reseñas de la ficha (pelo, uñas, pies, color, alisado) y
 * en la propia denominación del negocio, «peluquería y estética». La sección avisa de que hay que
 * confirmar por teléfono. Si el negocio pasa su carta real, sustituye este array por la lista
 * verdadera.
 */
export const SERVICIOS = [
	{
		icon: 'ri-scissors-line',
		title: 'Peluquería',
		text: 'Cortes para mujer y hombre. Varias clientas cuentan que el salonero captó el corte que querían sin necesidad de foto de referencia.',
	},
	{
		icon: 'ri-palette-line',
		title: 'Color y mechas',
		text: 'Color, mechas y alisado. Son algunos de los servicios más citados por quienes ya han ido al salón.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Manicura y uñas',
		text: 'Manicura y esmaltado de uñas. El salón tiene ficha de salón de uñas en Booksy para reservar sin llamar.',
	},
	{
		icon: 'ri-footprint-line',
		title: 'Cuidado de los pies',
		text: 'Pedicura y cuidado de los pies. Es el segundo tema más mencionado en las reseñas de la ficha.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Estética',
		text: 'Tratamientos de estética y cuidado personal en el mismo local, sin tener que buscar dos centros distintos.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Cuidado de la piel',
		text: 'Rutinas y productos para la piel, indicados para cada caso. Llama y te dicen qué te conviene.',
	},
];

/**
 * Por qué elegir el salón. Los puntos proceden de las reseñas públicas de Google y de la ficha
 * (horario, valoración y palabras que la propia ficha agrupa).
 */
export const VENTAJAS = [
	{
		icon: 'ri-star-line',
		title: '4,7 con 84 reseñas',
		text: 'Una valoración alta sostenida por más de ochenta opiniones. El salonero y el ambiente salen bien paradas.',
	},
	{
		icon: 'ri-time-line',
		title: 'Puntualidad',
		text: 'Varias reseñas cuentan que te atienden a la hora citada y sin esperas. En peluquería, eso lo es todo.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Corte sin foto',
		text: 'Hay clientas que fueron sin foto de referencia y salieron del salón con exactamente el corte que querían.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Atención personalizada',
		text: 'Las reseñas destacan que entienden lo que buscas desde el primer momento y que se trabaja con calma.',
	},
	{
		icon: 'ri-price-tag-3-line',
		title: 'Buenos precios',
		text: 'El precio es el tema más mencionado en las reseñas de la ficha, y siempre en positivo.',
	},
	{
		icon: 'ri-home-heart-line',
		title: 'Como en casa',
		text: 'La sensación de estar en casa es la frase que más se repite: es un salón al que la gente vuelve.',
	},
];

/** Opiniones reales de la ficha pública de Google (traducidas y resumidas). */
export const REVIEWS = [
	{
		text: 'He ido de improvisto porque no tengo tiempo de nada nunca. Me han atendido de forma maravillosa, un ambiente muy relajado y tranquilo. Me han hecho exactamente el corte que yo quería, incluso sin foto de referencia.',
		source: 'Laura Díaz Bedoya · Reseña en Google',
	},
	{
		text: 'Cynthia es maravillosa. Desde el primer momento ha entendido el rollo que quería de cortado y peinado y fue muy profesional. Muy rápida y muy dinámica. Se siente como en casa. A partir de ahora confiaré en vosotras.',
		source: 'LMaku · Reseña en Google',
	},
	{
		text: 'Excelente servicio. El personal es muy amable y servicial, hacen muy bien su trabajo. Mi sitio de confianza para peluquería y estética.',
		source: 'Silvia Borja · Reseña en Google',
	},
];

/**
 * Temas que se repiten en las reseñas, según las palabras que la propia ficha agrupa (resumen, no
 * una cita textual).
 */
export const REVIEW_THEMES = [
	{ icon: 'ri-price-tag-3-line', label: 'Precios' },
	{ icon: 'ri-footprint-line', label: 'Pies' },
	{ icon: 'ri-scissors-line', label: 'Peluquería' },
	{ icon: 'ri-home-heart-line', label: 'Ambiente' },
	{ icon: 'ri-calendar-check-line', label: 'Cita' },
	{ icon: 'ri-palette-line', label: 'Color y mechas' },
];

/** Preguntas frecuentes reales del salón (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está Sami Beauty Salon?',
		a: 'En la avenida de Carlos Haya, 23, Local 3, en el barrio de Cruz de Humilladero, dentro del distrito de Carretera de Cádiz (29010 Málaga). Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'De lunes a viernes de 10:00 a 19:00, y el sábado de 10:00 a 14:00. El domingo está cerrado. Puede cambiar en festivos, así que llama antes de desplazarte.',
	},
	{
		q: '¿Cómo se pide cita?',
		a: 'De dos maneras: llamando al 603 02 14 88 o reservando online desde la ficha de Booksy que el salón enlaza en su perfil de Google. Varias reseñas destacan que te atienden a la hora citada sin esperas.',
	},
	{
		q: '¿Qué servicios ofrece?',
		a: 'El salón es de peluquería y estética: cortes, color, mechas, alisado, manicura, cuidado de los pies y tratamientos de estética. Google no publica su carta completa, así que lo mejor es llamar al 603 02 14 88 y preguntar por tu caso.',
	},
	{
		q: '¿Cuánto cuestan los servicios?',
		a: 'El salón no publica una tarifa en su ficha de Google, así que en esta web no se inventan importes. El precio es justamente uno de los temas más comentados en las reseñas, siempre de forma favorable: llama y te dirán el precio del servicio que te interesa.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono es el 603 02 14 88. Junto con la reserva online de Booksy, son las dos vías de contacto del salón, ya que no tiene web propia publicada.',
	},
	{
		q: '¿Por qué tiene tan buenas reseñas?',
		a: 'La valoración es de 4,7 con 84 reseñas. Lo que más se repite es la puntualidad, la atención personalizada, el ambiente relajado y que los precios están bien. Varias clientas dicen que el corte les salió exactamente como lo querían.',
	},
	{
		q: '¿Quién atiende en el salón?',
		a: 'En las reseñas se menciona expresamente a Cynthia, la peluquera, y las respuestas del negocio están firmadas por Lucía. El equipo es reducido y por eso se nota la atención personalizada de la que hablan las clientas.',
	},
];

/** Características del salón, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-scissors-line', label: 'Peluquería' },
	{ icon: 'ri-palette-line', label: 'Color y mechas' },
	{ icon: 'ri-hand-2', label: 'Manicura y uñas' },
	{ icon: 'ri-calendar-event-line', label: 'Cita online' },
	{ icon: 'ri-map-pin-2-line', label: 'Avenida de Carlos Haya' },
];

/**
 * Reseñas en formato schema.org. Son las mismas citas que se muestran en la web, atribuidas a su
 * autora y con la valoración de cinco estrellas que les corresponde en la ficha de Google. Se
 * declaran como reseñas reales de Google mediante `source`.
 */
export const RESEÑAS_SCHEMA = [
	{
		author: 'Laura Díaz Bedoya',
		text: 'He ido de improvisto porque no tengo tiempo de nada nunca. Me han atendido de forma maravillosa, un ambiente muy relajado y tranquilo. Me han hecho exactamente el corte que yo quería, incluso sin foto de referencia.',
		rating: 5,
	},
	{
		author: 'LMaku',
		text: 'Cynthia es maravillosa. Desde el primer momento ha entendido el rollo que quería de cortado y peinado y fue muy profesional. Muy rápida y muy dinámica. Se siente como en casa.',
		rating: 5,
	},
	{
		author: 'Silvia Borja',
		text: 'Excelente servicio. El personal es muy amable y servicial, hacen muy bien su trabajo. Mi sitio de confianza para peluquería y estética.',
		rating: 5,
	},
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Fachada del salón Sami Beauty Salon, peluquería y estética en Málaga',
	},
	{
		src: IMAGES.fotoManicura,
		alt: 'Manicura con diseño de corazones en el salón Sami Beauty Salon (Málaga)',
	},
	{
		src: IMAGES.fotoCalle,
		alt: 'Avenida de Carlos Haya, en Cruz de Humilladero (Málaga), donde está el salón',
	},
];

export const SCHEMA = {
	'@context': 'https://schema.org',
	'@type': 'BeautySalon',
	'@id': `${BUSINESS.siteUrl}/`,
	name: BUSINESS.name,
	alternateName: 'Peluquería y Estética Sami Beauty Salon',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 603 02 14 88',
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
	 * Perfil del salón en la plataforma de reservas que él mismo enlaza desde Google. Google lo
	 * usa para corroborar que el negocio existe en otra plataforma.
	 */
	sameAs: [BUSINESS.reservation],
	/** El salón es un negocio local con cita, sin compra online. */
	hasOfferCatalog: {
		'@type': 'OfferCatalog',
		name: 'Servicios de Sami Beauty Salon',
		itemListElement: SERVICIOS.map((servicio, index) => ({
			'@type': 'Offer',
			'@id': `${BUSINESS.siteUrl}/#servicio-${index + 1}`,
			itemOffered: {
				'@type': 'Service',
				name: servicio.title,
				description: servicio.text,
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
	/**
	 * Reseñas reales de la ficha de Google. Se incluyen además de la nota media porque son las que
	 * Google puede mostrar como testimonios en los resultados.
	 */
	review: RESEÑAS_SCHEMA.map((reseña) => ({
		'@type': 'Review',
		author: { '@type': 'Person', name: reseña.author },
		reviewRating: { '@type': 'Rating', ratingValue: reseña.rating, bestRating: 5 },
		reviewBody: reseña.text,
		source: { '@type': 'GoogleBusiness', '@id': BUSINESS.googleMaps },
	})),
	openingHoursSpecification: [
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '19:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '14:00',
		},
	],
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: BUSINESS.rating,
		reviewCount: BUSINESS.reviewsCount,
		bestRating: 5,
	},
};
