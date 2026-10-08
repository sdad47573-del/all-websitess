/**
 * Datos de Taberna 4 Esquinas (Calle Teodoro Calvache, 12 · 23001 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, descripción del local, carta ni precios, ni un
 * distintivo junto al nombre, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taberna-4-esquinas.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Taberna 4 Esquinas',
	shortName: '4 Esquinas',
	/**
	 * Categorías que publica Google, en su orden. La primera es la principal («Taberna»); se
	 * recogen las dos sin añadir ninguna otra que no aparezca.
	 */
	category: 'Taberna',
	categories: ['Taberna', 'Bar de tapas'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Teodoro Calvache, 12»: aquí se
	 * desarrolla la abreviatura a «Calle», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Teodoro Calvache, 12',
	postalCode: '23001',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 88 80 17',
	latitude: 37.7675146,
	longitude: -3.7858338,
	/** Plus code que publica la ficha. */
	plusCode: 'Q697+2M Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 1.280 reseñas). */
	rating: 4.3,
	reviewCount: 1280,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+4+Esquinas/@37.7675146,-3.7858338,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd77511757b2f:0x80611ae924e97a98!8m2!3d37.7675146!4d-3.7858338!16s%2Fg%2F11f3r1r4r6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJL3t1EXXXbQ0RmHrpJOkaYYA&hl=es';

export const phoneHref = 'tel:+34953888017';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * todos los días a mediodía, a las 12:00. De domingo a jueves cierra a medianoche (que la ficha
 * escribe como 24:00 y aquí, en los datos estructurados, como 00:00) y los viernes y sábados
 * alarga hasta la 1:00.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Aquí el lunes sí abre, así que se publica abierto **con la advertencia**.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 1:00',
		shifts: [{ open: '12:00', close: '01:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 1:00',
		shifts: [{ open: '12:00', close: '01:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abierto todos los días desde las 12:00 · de domingo a jueves hasta las 24:00 y viernes y sábados hasta la 1:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y **las dos están marcadas como no disponibles**: la ficha dice que no hay
 * aparcamiento ni asientos adaptados para sillas de ruedas. No publica el acceso ni el aseo, así
 * que no se declaran. Es la primera ficha del repositorio con todas sus entradas de accesibilidad
 * en negativo, y se muestran igual, con su marca de negación.
 */
export const accesibilidad = [
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. **No todas son de 5**: la primera
 * es de 4 y se reproduce igual. La segunda va entre comillas dobles en el original.
 */
export const reviews = [
	{
		text: 'Tapas generosas, raciones de gran calidad-precio y cerveza bien tirada y fría.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Carrillada en salsa o "alpargata" (pan tostado) lomo, pimiento y tomate...',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen lugar para tapear, en especial sus migas, buen trato',
		rating: 5,
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
		question: '¿Dónde está Taberna 4 Esquinas?',
		answer:
			'En la calle Teodoro Calvache, 12, con código postal 23001, en Jaén (Andalucía). La ficha publica el plus code Q697+2M Jaén y las coordenadas 37.7675146, -3.7858338.',
	},
	{
		question: '¿Cuál es el horario de Taberna 4 Esquinas?',
		answer:
			'Abre todos los días a las 12:00. De domingo a jueves cierra a medianoche y los viernes y sábados, a la 1:00. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como taberna y bar de tapas. Tiene 4,3 sobre 5 con 1.280 reseñas, y en las tres reseñas que destaca se habla de la calidad-precio de las raciones y la cerveza, de la carrillada en salsa y de las migas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 88 80 17.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Teodoro Calvache, 12 y las coordenadas 37.7675146, -3.7858338. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q697+2M Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos están marcadas como no disponibles: señala que no hay aparcamiento adaptado ni asientos adaptados para sillas de ruedas. No publica el acceso ni el aseo, así que no se declaran. Conviene llamar antes si necesitas acceso adaptado.',
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
		'Taberna y bar de tapas en la calle Teodoro Calvache, 12 de Jaén, abierto todos los días desde las 12:00.',
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
	/* Sin `servesCuisine`: Google publica «Taberna» y «Bar de tapas», que no declaran cocina. */
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
