/**
 * Datos de Restaurante Asador "Los Olivares"
 * (Polígono Industrial Los Olivares, Calle Espeluy, 50 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-asador-los-olivares.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con las comillas incluidas. */
	name: 'Restaurante Asador "Los Olivares"',
	shortName: 'Los Olivares',
	/**
	 * Categorías que publica Google en esta ficha, en su orden: «Parrilla» (la primera y la que se
	 * usa como categoría principal), «Cafetería» y «Restaurante».
	 */
	category: 'Parrilla',
	categories: ['Parrilla', 'Cafetería', 'Restaurante'],
	/** Dirección publicada en la ficha, con el polígono y la calle. */
	streetAddress: 'Polígono Industrial Los Olivares, Calle Espeluy, 50',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 28 18 05',
	latitude: 37.7984383,
	longitude: -3.7821002,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6X9+95 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 615 reseñas). */
	rating: 4.3,
	reviewCount: 615,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin ampliarlo ni corregirlo.
 */
export const descripcionLocal =
	'Restaurante de 2 tenedores, muy familiar y de comida casera, con amplios salones. Ideal para tus eventos de empresa o para tus celebraciones familiares.';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Asador+%22Los+Olivares%22/@37.7984383,-3.7821002,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd6564dcf7bf1:0x3a290c20ee260eb8!8m2!3d37.7984383!4d-3.7821002!16s%2Fg%2F1tjcqt6p?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ8XvPTVbWbQ0RuA4m7iAMKTo&hl=es';

export const phoneHref = 'tel:+34953281805';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * de lunes a viernes de forma continua, de 6:30 a 19:00; el sábado y el domingo cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 * Ese día la ficha lo da abierto igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '6:30 – 19:00',
		shifts: [{ open: '06:30', close: '19:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '6:30 – 19:00',
		shifts: [{ open: '06:30', close: '19:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '6:30 – 19:00',
		shifts: [{ open: '06:30', close: '19:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '6:30 – 19:00',
		shifts: [{ open: '06:30', close: '19:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '6:30 – 19:00',
		shifts: [{ open: '06:30', close: '19:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De lunes a viernes, de 6:30 a 19:00; sábados y domingos cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas, y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Una es de 5 sobre 5 y las otras
 * dos de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Me ha gustado, buen menú y venden un aceite, riquísimo y a un precio razonable',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Está muy bien, hay buenas tapas y cerveza fresquita, buenos precios.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen servicio de camareros y baños limpios.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Asador "Los Olivares"?',
		answer:
			'En el Polígono Industrial Los Olivares, Calle Espeluy, 50, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code Q6X9+95 Jaén y las coordenadas 37.7984383, -3.7821002.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Asador "Los Olivares"?',
		answer:
			'La ficha publica un horario continuo de 6:30 a 19:00 de lunes a viernes, y el sábado y el domingo cerrado. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'El titular lo describe en su ficha como «un restaurante de 2 tenedores, muy familiar y de comida casera, con amplios salones», ideal para eventos de empresa y celebraciones familiares. Google lo clasifica a la vez como parrilla, cafetería y restaurante. Tiene 4,3 sobre 5 con 615 reseñas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 28 18 05.',
	},
	{
		question: '¿Sirve para celebraciones y eventos de empresa?',
		answer:
			'Es lo que anuncia su propia descripción en la ficha: «ideal para tus eventos de empresa o para tus celebraciones familiares», con amplios salones. Esta web se limita a recogerlo; para concretar menús, aforo o fechas, hay que llamar al 953 28 18 05.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Polígono Industrial Los Olivares, Calle Espeluy, 50 y las coordenadas 37.7984383, -3.7821002. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6X9+95 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 28 18 05.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante asador y de comida casera en el Polígono Industrial Los Olivares, Calle Espeluy, 50, de Jaén, con amplios salones para celebraciones.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio. */
	acceptsReservations: true,
	/* Sin `servesCuisine`: Google publica tipos de establecimiento, no una cocina concreta. */
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
