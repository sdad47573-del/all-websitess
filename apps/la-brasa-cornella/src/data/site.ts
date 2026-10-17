/**
 * Datos de La Brasa Cornellà
 * (Ctra. del Prat, 22 · 08940 Cornellà de Llobregat, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 17 de octubre de 2026:
 * nombre, dirección, teléfono, categoría, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad, la acción de reserva y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios ni datos de envío, así
 * que aquí no se reproducen. Los textos de las reseñas se copian literalmente, con su puntuación
 * original, y se citan como tales; la ficha no publica el nombre de quienes las firman (solo el
 * enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://la-brasa-cornella.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'La Brasa Cornellà',
	shortName: 'La Brasa',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Ctra. del Prat, 22',
	district: 'Cornellà de Llobregat',
	postalCode: '08940',
	city: 'Cornellà de Llobregat',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 933 77 52 71',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '933 77 52 71',
	latitude: 41.3515689,
	longitude: 2.0768554,
	/** Plus code que publica la ficha (completo: 8FH4932G+JP). */
	plusCode: '932G+JP Cornellà de Llobregat',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 102 reseñas). */
	rating: 4.7,
	reviewCount: 102,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/La+Brasa+Cornell%C3%A0/@41.3515689,2.0768554,17z/data=!3m1!4b1!4m6!3m5!1s0x12a49943e1712b21:0x7c3b92310f5a8ad1!8m2!3d41.3515689!4d2.0768554!16s%2Fg%2F11yr4df6yk?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJIStx4UOZpBIR0YpaDzGSO3w&hl=es';

/**
 * Acción «Reservar una mesa» que muestra la ficha.
 *
 * Google la enlaza a su flujo de reservas con el identificador de restaurante publicado en la
 * ficha. Se conserva tal cual, sin parámetros de sesión.
 */
export const reservationUrl = 'https://www.google.com/maps/reserve/v/dine/c/oFED85Jd3I4?hl=es';

export const phoneHref = 'tel:+34933775271';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. El martes abre de 9:30 a 17:00; de miércoles a jueves, de 9:30 a 23:00; el
 * viernes, de 9:30 a 24:00; el sábado, de 11:00 a 24:00, y el domingo, de 11:00 a 17:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '9:30 – 17:00',
		shifts: [{ open: '9:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:30 – 23:00',
		shifts: [{ open: '9:30', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:30 – 23:00',
		shifts: [{ open: '9:30', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:30 – 24:00',
		shifts: [{ open: '9:30', close: '24:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '24:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 17:00',
		shifts: [{ open: '11:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Lunes cerrado; martes de 9:30 a 17:00; miércoles y jueves de 9:30 a 23:00; viernes de 9:30 a 24:00; sábado de 11:00 a 24:00; domingo de 11:00 a 17:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Martes a domingo · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica tres entradas, todas disponibles: acceso, aseo y asientos adaptados para sillas de
 * ruedas. No publica ninguna entrada sobre aparcamiento adaptado.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Gratamente sorprendido, buena comida ,raciones abundantes y trato excelente.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Muy contento, buena atención de todos los camareros sobre todo de Andrea.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Muchas gracias y agradecidos .',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está La Brasa Cornellà?',
		answer:
			'En la Ctra. del Prat, 22, con código postal 08940, en Cornellà de Llobregat, Barcelona. Publica el plus code 932G+JP Cornellà de Llobregat y las coordenadas 41.3515689, 2.0768554.',
	},
	{
		question: '¿Cuál es el horario de La Brasa Cornellà?',
		answer:
			'La ficha publica que el lunes cierra; el martes abre de 9:30 a 17:00; de miércoles a jueves, de 9:30 a 23:00; el viernes, de 9:30 a 24:00; el sábado, de 11:00 a 24:00, y el domingo, de 11:00 a 17:00. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local únicamente como restaurante. La ficha no publica descripción del titular, carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 933 77 52 71. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha muestra la acción «Reservar una mesa», que enlaza al sistema de reservas de Google. Esta web reproduce ese mismo enlace; también puedes llamar al 933 77 52 71.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Ctra. del Prat, 22, en Cornellà de Llobregat, y las coordenadas 41.3515689, 2.0768554. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad, todas disponibles: acceso para sillas de ruedas, aseo adaptado y asientos adaptados. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,7 sobre 5 con 102 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la Ctra. del Prat, 22, Cornellà de Llobregat (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	acceptsReservations: true,
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina ni carta. */
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
