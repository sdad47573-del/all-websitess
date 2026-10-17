/**
 * Datos de Floristería Hermanas Gómez
 * (Avenida de Daroca, 90 · 28017 Madrid).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, distrito, teléfono, categoría,
 * descripción del titular, valoración con número de reseñas, coordenadas,
 * plus code y horario semanal.
 *
 * La ficha no publica accesibilidad ni web propia, así que no se reproduce nada de eso. La vista
 * previa no incluía los textos de las reseñas, así que no se reproduce ningún extracto: solo la
 * nota, el recuento y el enlace. La descripción del titular se reproduce literalmente, con sus
 * erratas, y se cita como tal en la web. La ficha no publica precios, así que no se reproduce
 * ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://hermanas-gomez.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Floristería Hermanas Gómez',
	shortName: 'Hermanas Gómez',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha: «Floristería Hermanas Gómez, Av. de Daroca, 90,
	 * Cdad. Lineal, 28017 Madrid».
	 */
	streetAddress: 'Avenida de Daroca, 90',
	district: 'Ciudad Lineal',
	postalCode: '28017',
	city: 'Madrid',
	province: 'Madrid',
	region: 'Comunidad de Madrid',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha (también citado en su descripción). */
	phone: '+34 914 08 73 26',
	latitude: 40.4255114,
	longitude: -3.6467502,
	/** Plus code que publica la ficha (corto; el completo es 8CG9C9G3+67). */
	plusCode: 'C9G3+67 Madrid',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 54 reseñas). */
	rating: 4.5,
	reviewCount: 54,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente, con sus erratas, y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Empresa familiar que fue fundada en 1928, siendo la 3° generación de floristas.El género que ofrecemos es muy variado y siempre es de 1° calidad, somos cuatro hermanas que atendemos a nuestros clientes con agrado y simpatía, hacemos entregas a domicilio y también llevamos encargos a la sepultura de sus seres queridos, así como coronas o cualquier decoración que este relacionada con flores,como bodas, decoración de iglesias etc,nuestro teléfono es 91 4087326, trabajamos los 365 días del año. Esperamos poder estar a la altura de sus exigencias y formar parte de su agenda.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Florister%C3%ADa+Hermanas+G%C3%B3mez/@40.4255114,-3.6467502,17z/data=!3m1!4b1!4m6!3m5!1s0xd422f446163a4e5:0xda912ee5829af769!8m2!3d40.4255114!4d-3.6467502!16s%2Fg%2F1tgd7vhr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ5aRjYUQvQg0RafeaguUukdo&hl=es';

export const phoneHref = 'tel:+34914087326';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * De lunes a viernes abre de 9:30 a 18:00; el sábado y el domingo abre de 9:00 a 18:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 18:00',
		shifts: [{ open: '9:30', close: '18:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:30 – 18:00',
		shifts: [{ open: '9:30', close: '18:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 18:00',
		shifts: [{ open: '9:30', close: '18:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 18:00',
		shifts: [{ open: '9:30', close: '18:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 18:00',
		shifts: [{ open: '9:30', close: '18:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 18:00',
		shifts: [{ open: '9:00', close: '18:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 18:00',
		shifts: [{ open: '9:00', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De lunes a viernes de 9:30 a 18:00; sábado y domingo de 9:00 a 18:00';

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
 * La ficha no publica textos de reseñas, accesibilidad, web ni precios, así que ninguna respuesta
 * los menciona como datos.
 */
export const faqs = [
	{
		question: '¿Dónde está Floristería Hermanas Gómez?',
		answer:
			'En la Avenida de Daroca, 90, con código postal 28017, en el distrito de Ciudad Lineal, Madrid. Publica el plus code C9G3+67 Madrid y las coordenadas 40.4255114, -3.6467502.',
	},
	{
		question: '¿Cuál es el horario de Floristería Hermanas Gómez?',
		answer:
			'La ficha publica que de lunes a viernes abre de 9:30 a 18:00, y el sábado y el domingo de 9:00 a 18:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué ofrece la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha dice, literalmente, que es una empresa familiar fundada en 1928, tercera generación de floristas, con género variado de primera calidad, entregas a domicilio, encargos para sepulturas, coronas, bodas y decoración de iglesias, y que trabajan los 365 días del año.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 914 08 73 26. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Daroca, 90, en Madrid, y las coordenadas 40.4255114, -3.6467502. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code C9G3+67 Madrid.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha no publica datos de accesibilidad. Ante la duda, lo mejor es llamar al 914 08 73 26 y preguntar directamente.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,5 sobre 5 con 54 reseñas. La vista previa consultada no incluía los textos de las reseñas, así que aquí no se reproduce ningún extracto; el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Floristería familiar desde 1928 en la Avenida de Daroca, Ciudad Lineal, Madrid. Tercera generación de floristas: entregas a domicilio, coronas, bodas e iglesias.',
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
