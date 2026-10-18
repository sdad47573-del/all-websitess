/**
 * Datos de Floristería flores de mary
 * (Carrer del Cardenal Tedeschini, 10 · 08027 Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 18 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas y 3 extractos destacados, coordenadas, plus code,
 * horario semanal y accesibilidad.
 *
 * La ficha no publica web propia, así que no se reproduce ninguna. Los 3 extractos de reseñas se
 * reproducen literalmente y se citan como tales en la web. La ficha no publica precios, así que no
 * se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://floristeria-flores-de-mary.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería flores de mary',
	shortName: 'flores de mary',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Carrer del Cardenal Tedeschini, 10, Sant Andreu,
	 * 08027 Barcelona». «Sant Andreu» es el distrito y se conserva aparte.
	 */
	streetAddress: 'Carrer del Cardenal Tedeschini, 10',
	district: 'Sant Andreu',
	postalCode: '08027',
	city: 'Barcelona',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 612 41 45 23',
	latitude: 41.4255764,
	longitude: 2.1852912,
	/** Plus code que publica la ficha (completo: 8FH4C5GP+64). */
	plusCode: 'C5GP+64 Barcelona',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 139 reseñas). */
	rating: 4.9,
	reviewCount: 139,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'Hacemos Ramos personalizados, Centros, Bouquet de novia, solapas, pulseras, plantas de interior y exterior, y todo tipo de plantas de temporada. Hacemos envíos a domicilio.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+flores+de+mary/@41.4255764,2.1852912,17z/data=!3m1!4b1!4m6!3m5!1s0x12a4bdc2c74039e7:0xea5e5c08f7b4f0c5!8m2!3d41.4255764!4d2.1852912!16s%2Fg%2F11p16zzpsc?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5zlAx8K9pBIRxfC09whcXuo&hl=es';

export const phoneHref = 'tel:+34612414523';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 10:00 a 20:00 en un solo turno; el sábado y el domingo abre solo
 * por la mañana, de 10:00 a 15:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 20:00',
		shifts: [{ open: '10:00', close: '20:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 15:00',
		shifts: [{ open: '10:00', close: '15:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 15:00',
		shifts: [{ open: '10:00', close: '15:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 10:00 a 20:00; sábado y domingo de 10:00 a 15:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * El acceso para sillas de ruedas y el aseo adaptado figuran como disponibles; el aparcamiento
 * adaptado figura como no disponible («No hay aparcamiento accesible con silla de ruedas»).
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * Son los 3 que devolvía el endpoint de vista previa; se reproducen tal cual y se citan como
 * tales en la web. El endpoint no trae el nombre del autor, así que se publican sin firma.
 */
export const reviews = [
	{
		text: 'Super recomendables, me atendieron super bien, muchas gracias!!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente servicio, buen precio y los arreglos preciosos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me hicieron un arreglo increible.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería flores de mary?',
		answer:
			'En el Carrer del Cardenal Tedeschini, 10, con código postal 08027, en Barcelona, en Sant Andreu. Publica el plus code C5GP+64 Barcelona y las coordenadas 41.4255764, 2.1852912.',
	},
	{
		question: '¿Cuál es el horario de Floristería flores de mary?',
		answer:
			'La ficha publica de lunes a viernes de 10:00 a 20:00 en un solo turno y el sábado y el domingo solo por la mañana, de 10:00 a 15:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice: «Hacemos Ramos personalizados, Centros, Bouquet de novia, solapas, pulseras, plantas de interior y exterior, y todo tipo de plantas de temporada. Hacemos envíos a domicilio.»',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 612 41 45 23. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer del Cardenal Tedeschini, 10, en Sant Andreu de Barcelona, y las coordenadas 41.4255764, 2.1852912. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C5GP+64 Barcelona.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: el acceso para sillas de ruedas y el aseo adaptado figuran como disponibles, y el aparcamiento adaptado figura como no disponible.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 139 reseñas. Los 3 extractos que destaca se reproducen tal cual en esta web, sin añadir nada: hablan de atención super buena y recomendable, de excelente servicio con buen precio y arreglos preciosos y de un arreglo increíble. El enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción del titular, las reseñas destacadas y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en el Carrer del Cardenal Tedeschini de Barcelona, en Sant Andreu. Ramos personalizados, bouquet de novia y envíos a domicilio, según su ficha.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	telephone: business.phone,
	address: {
		'@type': 'PostalAddress',
		streetAddress: business.streetAddress,
		addressLocality: business.city,
		addressRegion: business.province,
		postalCode: business.postalCode,
		addressCountry: business.country,
	},
	geo: {
		'@type': 'GeoCoordinates',
		latitude: business.latitude,
		longitude: business.longitude,
	},
	hasMap: mapsUrl,
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	openingHoursSpecification: hours.flatMap((item) =>
		item.shifts.map((shift) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: item.dayOfWeek,
			opens: shift.open,
			closes: shift.close,
		})),
	),
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
};

export const faqSchema = {
	'@context': 'https://schema.org',
	'@type': 'FAQPage',
	'@id': `${site.siteUrl}/#faq`,
	mainEntity: faqs.map((faq) => ({
		'@type': 'Question',
		name: faq.question,
		acceptedAnswer: { '@type': 'Answer', text: faq.answer },
	})),
};

/**
 * Datos legales del titular (LSSI-CE).
 *
 * Rellena los tres campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
