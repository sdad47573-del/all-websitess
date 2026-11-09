/**
 * Datos de Restaurant Casa Font de l'Alzina
 * (Carrer Mestre Cugat, 17 · 08791 Sant Llorenç d'Hortons, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, descripción del titular, valoración con número de
 * reseñas, coordenadas, plus code, horario semanal, accesibilidad, el distintivo «Brunch» y tres
 * reseñas destacadas.
 *
 * La ficha no publica web propia, carta, precios, acción de reserva ni datos de envío, así que
 * aquí no se reproducen. La descripción del titular y los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes firman las reseñas (solo el enlace a su perfil), de modo que se atribuyen a la
 * ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurant-casa-font-de-lalzina',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "Restaurant Casa Font de l'Alzina",
	shortName: "Font de l'Alzina",
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante de cocina catalana',
	categories: ['Restaurante de cocina catalana', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer Mestre Cugat, 17',
	district: "Sant Llorenç d'Hortons",
	postalCode: '08791',
	city: "Sant Llorenç d'Hortons",
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 937 71 61 73',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '937 71 61 73',
	latitude: 41.4650307,
	longitude: 1.8250682,
	/** Plus code que publica la ficha (completo: 8FH3FR8G+22). */
	plusCode: "FR8G+22 Sant Llorenç d'Hortons",
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 411 reseñas). */
	rating: 4.2,
	reviewCount: 411,
	site: null,
} as const;

/**
 * Descripción del titular publicada en la ficha, copiada literalmente.
 */
export const ownerDescription =
	'En nuestro restaurante, ofrecemos una amplia variedad de opciones para el desayuno, incluyendo platos elaborados, brasa, torradas y bocadillos. Te ofrecemos menús entre semana. Además, contamos con opciones para atender a personas con diferentes necesidades dietéticas, como veganos, celíacos y otros. Solo has de preguntar. Y finalmente los fines de semana abrimos por la noche para ofrecer cenas variadas, con nuestro jamón ibérico de la dehesa, nuestros entrecots o chuletones a la brasa y mas variedades que puedes degustar en nuestra terraza o en nuestros comedores interiores. Tambien nos ofrecemos para eventos de empresa como particulares allà donde sea necesario y como no, nuestro servicio de "Take away"';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	"https://www.google.com/maps/place/Restaurant+Casa+Font+de+l'Alzina/@41.4650307,1.8250682,17z/data=!3m1!4b1!4m6!3m5!1s0x12a462870f0a800b:0xf14c28d4e21f4d18!8m2!3d41.4650307!4d1.8250682!16s%2Fg%2F1tg97tj5?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJC4AKD4dipBIRGE0f4tQoTPE&hl=es';

export const phoneHref = 'tel:+34937716173';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * El lunes cierra. De martes a jueves y el domingo abre de 9:00 a 16:30; el viernes y el sábado,
 * de 9:00 a 16:30 y de 20:30 a 23:00.
 */
export const hours = [
	{ day: 'Lunes', service: 'Cerrado', shifts: [], dayOfWeek: 'Monday' },
	{
		day: 'Martes',
		service: '9:00 – 16:30',
		shifts: [{ open: '9:00', close: '16:30' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 16:30',
		shifts: [{ open: '9:00', close: '16:30' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 16:30',
		shifts: [{ open: '9:00', close: '16:30' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 16:30 · 20:30 – 23:00',
		shifts: [
			{ open: '9:00', close: '16:30' },
			{ open: '20:30', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 16:30 · 20:30 – 23:00',
		shifts: [
			{ open: '9:00', close: '16:30' },
			{ open: '20:30', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 16:30',
		shifts: [{ open: '9:00', close: '16:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'lunes cerrado; de martes a jueves y domingo de 9:00 a 16:30; viernes y sábado de 9:00 a 16:30 y de 20:30 a 23:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Menos el lunes · consulta el horario';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados
 * para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
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
		text: 'Personal amable, raciones abundantes y de muy buena calidad.',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'El pescado parecía pescado de lata rebozado y frito.',
		rating: 1,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Genial, todo bien presentado y muy rico, definitivamente volveremos.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: "¿Dónde está Restaurant Casa Font de l'Alzina?",
		answer:
			"En el Carrer Mestre Cugat, 17, con código postal 08791, en Sant Llorenç d'Hortons, Barcelona. Publica el plus code FR8G+22 Sant Llorenç d'Hortons y las coordenadas 41.4650307, 1.8250682.",
	},
	{
		question: "¿Cuál es el horario de Restaurant Casa Font de l'Alzina?",
		answer:
			'La ficha publica que el lunes cierra; de martes a jueves y el domingo abre de 9:00 a 16:30, y el viernes y el sábado, de 9:00 a 16:30 y de 20:30 a 23:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante de cocina catalana y restaurante mediterráneo, y muestra además el distintivo «Brunch». Su propia descripción habla de desayunos, brasa, menús entre semana, cenas de fin de semana y servicio «Take away». La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 937 71 61 73. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 937 71 61 73 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			"La ficha publica la dirección Carrer Mestre Cugat, 17, en Sant Llorenç d'Hortons, y las coordenadas 41.4650307, 1.8250682. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.",
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad, todas disponibles: acceso, aparcamiento, aseo y asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,2 sobre 5 con 411 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con sus puntuaciones originales de 4, 1 y 5 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 18 de octubre de 2026. No es su web oficial y no permite pedir ni pagar online.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		"Restaurante de cocina catalana en el Carrer Mestre Cugat, 17, Sant Llorenç d'Hortons (Barcelona). Datos y fotografías de su ficha de Google Maps.",
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
	acceptsReservations: false,
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
