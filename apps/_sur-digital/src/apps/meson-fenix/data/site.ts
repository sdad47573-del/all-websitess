/**
 * Datos de Mesón Fénix (C. Félix Martí Alpera, 57 · 30205 Cartagena).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el titular y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/meson-fenix',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Mesón Fénix',
	shortName: 'Fénix',
	/** Única categoría que publica Google en esta ficha: «Restaurante». */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha (Google la abrevia como «C. Félix Martí Alpera, 57»). */
	streetAddress: 'C. Félix Martí Alpera, 57',
	postalCode: '30205',
	city: 'Cartagena',
	province: 'Murcia',
	region: 'Murcia',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 648 91 17 68',
	latitude: 37.6187502,
	longitude: -0.993981,
	/** Plus code que publica la ficha. */
	plusCode: 'J294+GC Cartagena',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 846 reseñas). */
	rating: 4.4,
	reviewCount: 846,
	site: site.siteUrl,
} as const;

/**
 * Descripción que publica el titular en la ficha, citada literal (sin corregir su redacción ni su
 * puntuación). Es el único texto descriptivo que firma el propio local.
 */
export const descripcion = 'Buenas comida y personal excelente. Muy bien situado';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Mes%C3%B3n+F%C3%A9nix/@37.6187502,-0.993981,17z/data=!3m1!4b1!4m6!3m5!1s0xd634319d9af5673:0xf6f77682d79e3b2a!8m2!3d37.6187502!4d-0.993981!16s%2Fg%2F11h825d98n?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJc1av2RlDYw0RKjue14J29_Y&hl=es';

export const phoneHref = 'tel:+34648911768';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local cierra
 * los lunes y abre el resto de la semana con horario continuado: de 8:30 a 24:00 de martes a
 * viernes, de 9:30 a 24:00 los sábados y de 9:30 a 17:00 los domingos.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente
 * (la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de la sección de
 * horario y no cambia la tabla).
 *
 * El cierre de los turnos de noche es a las 24:00, que en los datos estructurados se escribe como
 * cierre a las 00:00.
 */
export const hours = [
	{
		day: 'Lunes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:30 – 24:00',
		shifts: [{ open: '08:30', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:30 – 24:00',
		shifts: [{ open: '08:30', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:30 – 24:00',
		shifts: [{ open: '08:30', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:30 – 24:00',
		shifts: [{ open: '08:30', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:30 – 24:00',
		shifts: [{ open: '09:30', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:30 – 17:00',
		shifts: [{ open: '09:30', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Cerrado los lunes; de martes a sábado con horario continuado hasta las 24:00 y domingos hasta las 17:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Buena cena, buena compañía, buen trato y raciones generosas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La carta es de entrantes, carne, hamburguesas, bocadillos y un par de burritos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El entrecot está buenísimo y los camareros muy atentos.',
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
		question: '¿Dónde está Mesón Fénix?',
		answer:
			'En la C. Félix Martí Alpera, 57, con código postal 30205, en Cartagena (Murcia). La ficha publica el plus code J294+GC Cartagena y las coordenadas 37.6187502, -0.993981.',
	},
	{
		question: '¿Cuál es el horario de Mesón Fénix?',
		answer:
			'La ficha lo da cerrado los lunes. De martes a viernes abre de 8:30 a 24:00, los sábados de 9:30 a 24:00 y los domingos de 9:30 a 17:00, siempre con horario continuado. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante. Su descripción habla de buena comida y personal excelente. Tiene 4,4 sobre 5 con 846 reseñas, y en las que destaca se menciona la carta de entrantes, carne, hamburguesas, bocadillos y burritos, el entrecot y el trato del servicio.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 648 91 17 68.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección C. Félix Martí Alpera, 57 y las coordenadas 37.6187502, -0.993981, en Cartagena. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code J294+GC Cartagena.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 9 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la C. Félix Martí Alpera, 57 de Cartagena, con horario continuado de martes a domingo y cerrado los lunes.',
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
	/* Sin `servesCuisine`: la ficha no publica una cocina concreta y no se inventa una. */
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
