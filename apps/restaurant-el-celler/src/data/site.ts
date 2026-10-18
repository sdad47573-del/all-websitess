/**
 * Datos de Restaurant El Celler
 * (Carrer Fitó, 20 · 08795 Olesa de Bonesvalls, Barcelona).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, consultada el 18 de octubre de 2026:
 * nombre, dirección, teléfono, categorías, valoración con número de reseñas, coordenadas, plus
 * code, horario semanal, accesibilidad y tres reseñas destacadas.
 *
 * La ficha no publica descripción del titular, web propia, carta, precios, acción de reserva ni
 * datos de envío, así que aquí no se reproducen. Los textos de las reseñas se copian
 * literalmente, con su puntuación original, y se citan como tales; la ficha no publica el nombre
 * de quienes las firman (solo el enlace a su perfil), de modo que se atribuyen a la ficha.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurant-el-celler.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '18 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurant El Celler',
	shortName: 'El Celler',
	/** Categorías que publica Google en esta ficha. */
	category: 'Restaurante de cocina catalana',
	categories: [
		'Restaurante de cocina catalana',
		'Restaurante de desayunos',
		'Restaurante mediterráneo',
	],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Carrer Fitó, 20',
	district: 'Olesa de Bonesvalls',
	postalCode: '08795',
	city: 'Olesa de Bonesvalls',
	province: 'Barcelona',
	region: 'Cataluña',
	country: 'ES',
	phone: '+34 667 56 45 77',
	/** El mismo teléfono como se marca desde España, sin prefijo. */
	phoneDisplay: '667 56 45 77',
	latitude: 41.3431628,
	longitude: 1.8416656,
	/** Plus code que publica la ficha. */
	plusCode: '8RVR+7M Olesa de Bonesvalls',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 571 reseñas). */
	rating: 4.4,
	reviewCount: 571,
	site: null,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurant+El+Celler/@41.3431628,1.8416656,17z/data=!3m1!4b1!4m6!3m5!1s0x12a480adec4ffaed:0x53feefcaac925558!8m2!3d41.3431628!4d1.8416656!16s%2Fg%2F1tf04tf6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7fpP7K2ApBIRWFWSrMrv_lM&hl=es';

export const phoneHref = 'tel:+34667564577';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * Abre todos los días de 9:00 a 16:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 16:00',
		shifts: [{ open: '9:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'todos los días de 9:00 a 16:00';

/** Versión corta del horario para la ficha y la portada. */
export const hoursShort = 'Todos los días · 9:00–16:00';

/**
 * Accesibilidad que publica la ficha.
 *
 * Publica una sola entrada, disponible: aseo adaptado para sillas de ruedas. No publica ningún
 * dato sobre acceso, aparcamiento ni asientos adaptados.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas que publica la ficha, copiadas literalmente.
 *
 * Google no muestra el nombre de quien firma en esta vista previa (solo el enlace a su perfil),
 * así que no se inventa uno: cada cita se atribuye a la ficha de Google Maps.
 */
export const reviews = [
	{
		text: 'Todo muy bien Almuerzos de p.m Pulpo brutal y las tortillas geniales',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Muy buena atención y nos han ofrecido opciones vegetarianas deliciosas.',
		rating: 5,
		source: 'Reseña publicada en Google Maps',
	},
	{
		text: 'Buen sitio para parar a desayunar en ruta de bici, tiene para dejar las bicis',
		rating: 4,
		source: 'Reseña publicada en Google Maps',
	},
] as const;

/** Preguntas frecuentes respondidas solo con lo que publica la ficha. */
export const faqs = [
	{
		question: '¿Dónde está Restaurant El Celler?',
		answer:
			'En el Carrer Fitó, 20, con código postal 08795, en Olesa de Bonesvalls, Barcelona. Publica el plus code 8RVR+7M Olesa de Bonesvalls y las coordenadas 41.3431628, 1.8416656.',
	},
	{
		question: '¿Cuál es el horario de Restaurant El Celler?',
		answer:
			'La ficha publica que abre todos los días de 9:00 a 16:00. Es el horario de la ficha consultada el 18 de octubre de 2026; conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina ofrece?',
		answer:
			'Google clasifica el local como restaurante de cocina catalana, de desayunos y mediterráneo. Las reseñas destacan el pulpo, las tortillas y las opciones vegetarianas. La ficha no publica carta ni precios, así que esta web no enumera platos ni tarifas.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El teléfono que publica la ficha es el 667 56 45 77. El botón de llamada de esta web abre el marcador del móvil.',
	},
	{
		question: '¿Se puede reservar mesa?',
		answer:
			'La ficha no muestra ningún sistema de reservas online, así que lo más directo es llamar al 667 56 45 77 para reservar o preguntar por la disponibilidad.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Carrer Fitó, 20, en Olesa de Bonesvalls, y las coordenadas 41.3431628, 1.8416656. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una sola entrada de accesibilidad, disponible: aseo adaptado para sillas de ruedas. No publica ningún dato sobre acceso, aparcamiento ni asientos adaptados.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,4 sobre 5 con 571 reseñas. Aquí se reproducen literalmente tres de las que destaca la ficha, con puntuaciones originales de 5, 5 y 4 sobre 5, y el enlace de la valoración abre el listado completo en Google Maps.',
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
		'Restaurante de cocina catalana en el Carrer Fitó, 20, Olesa de Bonesvalls (Barcelona). Datos y fotografías de su ficha de Google Maps.',
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
	/* Sin `priceRange`, `servesCuisine` ni `menu`: la ficha no publica precios, cocina detallada ni carta. */
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
