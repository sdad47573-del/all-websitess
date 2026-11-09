/**
 * Datos de Puesto de Flores
 * (Calle de Santa Irene, s/n · 28017 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas,
 * plus code y horario semanal.
 *
 * La ficha no publica teléfono, así que esta web no muestra ningún botón de llamada ni ningún
 * número: solo las indicaciones y el mapa. La ficha no publica accesibilidad ni web propia, así que
 * no se reproduce nada de eso. La vista previa no incluía los textos de las reseñas, así que no se
 * reproduce ningún extracto: solo la nota, el recuento y el enlace. La descripción del titular se
 * reproduce literalmente, con sus erratas, y se cita como tal en la web. La ficha no publica
 * precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/puesto-flores',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Puesto de Flores',
	shortName: 'Puesto de Flores',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Puesto de Flores, C/ de Sta. Irene, S/N,
	 * Cdad. Lineal, 28017 Madrid».
	 */
	streetAddress: 'Calle de Santa Irene, s/n',
	district: 'Ciudad Lineal',
	postalCode: '28017',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/**
	 * La ficha no publica ningún teléfono: se deja vacío y la portada oculta los botones de
	 * llamada en lugar de inventar un número.
	 */
	phone: '',
	latitude: 40.4183687,
	longitude: -3.6497667,
	/** Plus code que publica la ficha (corto; el completo es 8CG8C992+83). */
	plusCode: 'C992+83 Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 41 reseñas). */
	rating: 4.6,
	reviewCount: 41,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Kiosko de Flores fundado hace 65 años. Disponemos de todo tipo de flor cortada. Hacemos ramos de novia y centros de todo tipo.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Puesto+de+Flores/@40.4183687,-3.6497667,17z/data=!3m1!4b1!4m6!3m5!1s0xd422f590ac691db:0x934374a9fd1d864d!8m2!3d40.4183687!4d-3.6497667!16s%2Fg%2F11hbk53dn8?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ25HGClkvQg0RTYYd_al0Q5M&hl=es';

/** La ficha no publica teléfono: no hay enlace de llamada. */
export const phoneHref = '';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 8:30 a 19:00, de lunes a domingo.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:30 – 19:00',
		shifts: [{ open: '8:30', close: '19:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 8:30 a 19:00, de lunes a domingo';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha no publica ninguno, así que la lista viene vacía y la web lo dice claramente.
 */
export const accesibilidad: readonly { label: string; disponible: boolean }[] = [];

/**
 * Extractos literales de las reseñas que destaca la ficha.
 *
 * La vista previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto:
 * la web publica solo la nota, el recuento y el enlace al listado completo.
 */
export const reviews = [] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica teléfono, textos de reseñas, accesibilidad, web ni precios, así que ninguna
 * respuesta los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Puesto de Flores?',
		answer:
			'En la Calle de Santa Irene, s/n, con código postal 28017, en el distrito de Ciudad Lineal, Madrid. Publica el plus code C992+83 Madrid y las coordenadas 40.4183687, -3.6497667.',
	},
	{
		question: '¿Cuál es el horario de Puesto de Flores?',
		answer:
			'La ficha publica que abre todos los días de 8:30 a 19:00, de lunes a domingo. Es el horario de la ficha consultada el 17 de octubre de 2026.',
	},
	{
		question: '¿Qué ofrece el puesto?',
		answer:
			'Google lo clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que es un kiosko de flores fundado hace 65 años, con todo tipo de flor cortada, ramos de novia y centros de todo tipo.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'La ficha no publica ningún teléfono, así que esta web no reproduce ninguno. Los botones de esta web abren las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de Santa Irene, s/n, en Madrid, y las coordenadas 40.4183687, -3.6497667. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C992+83 Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Es un puesto en la calle, y ante la duda lo mejor es acercarse y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,6 sobre 5 con 41 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Kiosko de flores en la Calle de Santa Irene, Ciudad Lineal, Madrid. Flor cortada, ramos de novia y centros. Abre todos los días de 8:30 a 19:00.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	/* Sin `telephone`: la ficha no publica ningún teléfono y no se inventa uno. */
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
