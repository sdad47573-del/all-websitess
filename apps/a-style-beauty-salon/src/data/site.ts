/**
 * Datos de A-Style Beauty Salón, salón de belleza en la Avenida de Carlos Haya, 72
 * (Cruz de Humilladero, 29010 Málaga).
 *
 * La información se ha recogido de la ficha pública del local en Google Maps (dirección,
 * teléfono, horario, categoría «salón de belleza», una valoración de 4,7 y las etiquetas
 * «LGBTQ+ friendly» e «Identifies as women-owned») y de su ficha en Fresha, que publica el
 * mismo horario y dirección.
 *
 * Dos ausencias importantes, y la web las respeta en lugar de rellenarlas:
 *
 * 1. **Google no publica el número de reseñas** de este local (solo la nota 4,7), así que el
 *    JSON-LD **no** incluye `aggregateRating`: emitir una valoración sin recuento sería datos
 *    que no constan. En la web se muestra el 4,7 que sí es público, enlazado a la ficha.
 * 2. **La ficha no publica catálogo de servicios ni web propia.** La sección de servicios
 *    describe las áreas habituales de un salón de belleza y avisa de que hay que confirmar por
 *    teléfono. Tampoco se publican precios.
 */

/**
 * Fotografías obtenidas de la ficha pública del comercio en Google Maps (fachada del local y un
 * tratamiento de cejas) más una vista de la calle. Los nombres de archivo son descriptivos a
 * propósito (Google Imágenes los indexa con el nombre del archivo).
 */
import fotoFachada from '@assets/A-STYLE-BEAUTY-SALON/a-style-beauty-salon-fachada-malaga.jpg';
import fotoCejas from '@assets/A-STYLE-BEAUTY-SALON/a-style-beauty-salon-cejas-malaga.jpg';
import fotoCalle from '@assets/A-STYLE-BEAUTY-SALON/a-style-beauty-salon-calle-carlos-haya-malaga.jpg';

export const IMAGES = {
	fotoFachada,
	fotoCejas,
	fotoCalle,
};

export const BUSINESS = {
	name: 'A-Style Beauty Salón',
	shortName: 'A-Style',
	tagline: 'Salón de belleza en la Avenida de Carlos Haya, Málaga',
	claim: 'Salón de belleza en Málaga, abierto de lunes a sábado',
	summary:
		'A-Style Beauty Salón es un salón de belleza en la Avenida de Carlos Haya, 72, en Cruz de Humilladero (Málaga). Trabajo de cejas, cuidado de la piel, uñas y bienestar, con cita previa por teléfono. Abierto de lunes a sábado y con valoración 4,7 en Google.',
	street: 'Avenida de Carlos Haya, 72',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	postalCode: '29010',
	region: 'Andalucía',
	country: 'ES',
	phoneDisplay: '651 19 18 42',
	phoneHref: 'tel:+34651191842',
	googleMaps:
		'https://www.google.com/maps/place/A-Style+Beauty+Sal%C3%B3n/@36.7223242,-4.4472098,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7dbfa96ab55:0x97203672d53445fd!8m2!3d36.7223242!4d-4.4472098!16s%2Fg%2F11l5ykwlt2',
	googleMapsEmbed:
		'https://maps.google.com/maps?q=Avenida%20de%20Carlos%20Haya%2C%2072%2C%2029010%20M%C3%A1laga&t=&z=17&ie=UTF8&iwloc=&output=embed',
	geo: { lat: 36.7223242, lng: -4.4472098 },
	/** Valoración pública de la ficha de Google. La web la muestra; el schema no. */
	rating: 4.7,
	/** La misma valoración con formato español, para mostrarla en la web. */
	ratingDisplay: '4,7',
	/**
	 * La ficha de Google no publica cuántas reseñas hay, así que no se inventa el dato: por eso
	 * `SCHEMA` no lleva `aggregateRating` y la web enlaza a la ficha para que se vea en Google.
	 */
	hasReviewCount: false,
	priceRange: '€€',
	categories: [
		'Salón de belleza',
		'Diseño de cejas',
		'Cuidado de la piel',
		'Tratamientos de belleza',
	],
	/** Coordenadas de la ficha en formato Plus Code, tal como las publica Google. */
	plusCode: 'PHC3+W4 Málaga',
	/** Etiquetas que la propia ficha de Google muestra del establecimiento. */
	lgbtqFriendly: true,
	womenOwned: true,
	/** La ficha de Fresha indica que la reserva se hace llamando al teléfono. */
	byAppointment: true,
	/**
	 * Horario de la ficha de Google, que coincide con el de Fresha. Todos los días aparecen
	 * marcados con asterisco, lo que suele indicar horario especial o holidays.
	 */
	hours: [
		{ days: 'Lunes', hours: '9:00 – 20:00' },
		{ days: 'Martes a viernes', hours: '10:00 – 20:00' },
		{ days: 'Sábado', hours: '10:00 – 15:00' },
		{ days: 'Domingo', hours: 'Cerrado' },
	],
	hoursNote:
		'Horario según la ficha de Google, que coincide con el que publica Fresha. Puede cambiar en festivos: llama antes de desplazarte.',
	/**
	 * URL canónica del sitio. Se usa para el canonical, el og:url, el sitemap y los datos
	 * estructurados: si el dominio final cambia hay que actualizarla aquí y en
	 * `astro.config.mjs` y `public/robots.txt`.
	 */
	siteUrl: 'https://a-style-beauty-salon.vercel.app',
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
	{ label: 'El local', href: '#galeria' },
	{ label: 'Dónde estamos', href: '#contacto' },
	{ label: 'Preguntas', href: '#faq' },
];

export const PAGE_NAV = [{ label: 'Aviso legal y privacidad', href: '/aviso-legal' }];

export const HIGHLIGHTS = [
	{
		icon: 'ri-time-line',
		title: 'Abierto 6 días',
		text: 'De lunes a viernes y hasta las 15:00 el sábado. El domingo cerrado.',
	},
	{
		icon: 'ri-star-line',
		title: '4,7 en Google',
		text: 'La valoración que publica la ficha del salón. Puedes leer las reseñas en Google Maps.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Cita por teléfono',
		text: 'La reserva se hace llamando: te confirman disponibilidad y tratamiento al 651 19 18 42.',
	},
	{
		icon: 'ri-map-pin-2-line',
		title: 'En Carlos Haya',
		text: 'Avenida de Carlos Haya, 72: muy cerca del centro y con transporte público a pie.',
	},
];

/**
 * Áreas del salón. La ficha de Google **no publica un catálogo de servicios** ni el salón tiene
 * web propia, así que esta lista describe las áreas habituales de un salón de belleza y la
 * sección avisa de que hay que confirmar por teléfono. Si el negocio pasa su carta de
 * servicios, sustituye este array por la lista real.
 */
export const SERVICIOS = [
	{
		icon: 'ri-quill-pen-line',
		title: 'Diseño de cejas',
		text: 'Trabajo de cejas: diseño, definición y acabado. Es el servicio que se aprecia en las fotos de la ficha del salón.',
	},
	{
		icon: 'ri-emotion-happy-line',
		title: 'Cuidado de la piel',
		text: 'Tratamientos faciales y cuidado de la piel, con un enfoque natural: que te veas bien sin hacer nada de más.',
	},
	{
		icon: 'ri-hand-2',
		title: 'Manicura y uñas',
		text: 'Manicuras, esmaltados y cuidado de las uñas. Pregunta por el acabado que prefieras.',
	},
	{
		icon: 'ri-scissors-line',
		title: 'Depilación',
		text: 'Depilación con distintas técnicas según la zona y tu piel. Llama para que te indiquen la opción adecuada.',
	},
	{
		icon: 'ri-brush-line',
		title: 'Maquillaje',
		text: 'Maquillaje de rostro y de ojos para ocasiones especiales, con acabado cuidado.',
	},
	{
		icon: 'ri-sparkling-2-line',
		title: 'Bienestar',
		text: 'Tratamientos de bienestar y cuidado personal para completar el servicio de belleza.',
	},
];

/**
 * Por qué elegir el salón. Los puntos proceden de la ficha de Google (horario, valoración y
 * las dos etiquetas del establecimiento) y de su ficha en Fresha (reserva por teléfono).
 */
export const VENTAJAS = [
	{
		icon: 'ri-time-line',
		title: 'Horario amplio entre semana',
		text: 'Hasta las 20:00 de lunes a viernes, y el lunes además abre a las 9:00: encaja bien con la jornada laboral.',
	},
	{
		icon: 'ri-rainbow-line',
		title: 'LGBTQ+ friendly',
		text: 'La propia ficha de Google marca el salón como LGBTQ+ friendly: un espacio abierto a todo el mundo.',
	},
	{
		icon: 'ri-women-line',
		title: 'Negoio de mujeres',
		text: 'Google lo identifica como «women-owned», un negocio fundado y gestionado por mujeres.',
	},
	{
		icon: 'ri-phone-line',
		title: 'Reserva por teléfono',
		text: 'La cita se concierta llamando al 651 19 18 42, donde te confirman el tratamiento y la hora.',
	},
	{
		icon: 'ri-calendar-check-line',
		title: 'Abierto el sábado',
		text: 'El sábado atiende de 10:00 a 15:00, algo poco habitual en los salones de belleza.',
	},
	{
		icon: 'ri-bus-line',
		title: 'Fácil de llegar',
		text: 'En la Avenida de Carlos Haya, 72: el centro de Málaga queda a pocos minutos y el salón se distingue a primera vista por su rótulo negro.',
	},
];

/** Preguntas frecuentes (portada y FAQPage). */
export const FAQ = [
	{
		q: '¿Dónde está A-Style Beauty Salón?',
		a: 'En la Avenida de Carlos Haya, 72, en el distrito de Cruz de Humilladero de Málaga (29010). Puedes abrir la ubicación exacta en Google Maps desde el botón de esta página.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'El lunes de 9:00 a 20:00, de martes a viernes de 10:00 a 20:00 y el sábado de 10:00 a 15:00. El domingo está cerrado. Es el horario que publican tanto Google como Fresha, aunque puede cambiar en festivos.',
	},
	{
		q: '¿Hay que pedir cita?',
		a: 'Sí. La reserva se hace por teléfono: llama al 651 19 18 42 y te confirman la disponibilidad y el tratamiento que necesitas.',
	},
	{
		q: '¿Qué servicios ofrece?',
		a: 'A-Style es un salón de belleza: trabajo de cejas, cuidado de la piel, uñas, depilación, maquillaje y tratamientos de bienestar. Google no publica su carta completa de servicios, así que lo mejor es llamar al 651 19 18 42 y que te indiquen exactamente qué hacen.',
	},
	{
		q: '¿Cuánto cuestan los tratamientos?',
		a: 'El salón no publica precios, así que en esta web no se inventan importes. Llama al 651 19 18 42 y te pasan el precio del tratamiento que te interesa.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono es el 651 19 18 42. Es también la vía para reservar cita, consultar precios o preguntar por los tratamientos disponibles.',
	},
	{
		q: '¿Tiene reseñas en Google?',
		a: 'La ficha del salón muestra una valoración de 4,7, aunque Google no publica cuántas reseñas hay. Puedes leerlas todas y dejar tu reseña en la ficha de Google Maps.',
	},
	{
		q: '¿Es un espacio LGBTQ+ friendly?',
		a: 'Sí. La ficha de Google marca el salón como LGBTQ+ friendly e indica además que es un negocio fundado por mujeres.',
	},
];

/** Características del salón, para los datos estructurados. */
export const FEATURES = [
	{ icon: 'ri-time-line', label: 'Abierto de lunes a sábado' },
	{ icon: 'ri-phone-line', label: 'Cita por teléfono' },
	{ icon: 'ri-quill-pen-line', label: 'Diseño de cejas' },
	{ icon: 'ri-rainbow-line', label: 'LGBTQ+ friendly' },
	{ icon: 'ri-women-line', label: 'Negoio de mujeres' },
];

export const GALLERY = [
	{
		src: IMAGES.fotoFachada,
		alt: 'Fachada del salón A-Style Beauty en la Avenida de Carlos Haya (Málaga)',
	},
	{
		src: IMAGES.fotoCejas,
		alt: 'Tratamiento de cejas en A-Style Beauty Salón, Málaga',
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
	alternateName: 'A-Style Beauty',
	description: BUSINESS.summary,
	url: `${BUSINESS.siteUrl}/`,
	telephone: '+34 651 19 18 42',
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
		name: 'Servicios de A-Style Beauty Salon',
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
			dayOfWeek: ['Monday'],
			opens: '09:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Tuesday', 'Wednesday', 'Thursday', 'Friday'],
			opens: '10:00',
			closes: '20:00',
		},
		{
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: ['Saturday'],
			opens: '10:00',
			closes: '15:00',
		},
	],
	/**
	 * Sin `aggregateRating` a propósito: Google publica una nota de 4,7 pero **no** el número de
	 * reseñas, y `AggregateRating` exige `reviewCount` o `ratingCount`. Añádelo cuando el local
	 * tenga reseñas publicadas y quieras insertar su recuento.
	 */
};
