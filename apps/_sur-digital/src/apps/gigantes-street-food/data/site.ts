/**
 * Datos de Gigantes Street Food (Calle Elisa Cendrero, 18 · 13003 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad y las
 * reseñas destacadas.
 *
 * La ficha no publica descripción del titular (`info[154]` = `null`), así que no hay
 * `descripcionLocal` y la portada no muestra el bloque de descripción. Tampoco muestra ningún
 * distintivo junto al nombre, ni publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/gigantes-street-food',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Gigantes Street Food',
	shortName: 'Gigantes',
	/** Primera categoría que publica Google en esta ficha: «Restaurante americano». */
	category: 'Restaurante americano',
	categories: ['Restaurante americano', 'Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Elisa Cendrero, 18»: aquí se
	 * desarrolla la abreviatura a «Calle», como en el resto del repositorio. El código postal 13003 y
	 * el municipio (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Elisa Cendrero, 18',
	postalCode: '13003',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 642 40 89 78',
	latitude: 38.9897263,
	longitude: -3.9276655,
	/** Plus code que publica la ficha. */
	plusCode: 'X3QC+VW Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 788 reseñas). */
	rating: 4.6,
	reviewCount: 788,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Gigantes+Street+Food/@38.9897263,-3.9276655,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3000965687d:0x41f004baad6b10b!8m2!3d38.9897263!4d-3.9276655!16s%2Fg%2F11y3jml53k?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJfWhlCQDDaw0RC7HWqksAHwQ&hl=es';

export const phoneHref = 'tel:+34642408978';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre de
 * jueves a domingo con dos turnos: comidas de 13:00 a 16:30 y cenas de 20:00 a 0:30. Cierra lunes,
 * martes y miércoles.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 0:30 se escribe como 00:30 en los datos estructurados.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:30 · 20:00 – 0:30',
		shifts: [
			{ open: '13:00', close: '16:30' },
			{ open: '20:00', close: '00:30' },
		],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De jueves a domingo, de 13:00 a 16:30 y de 20:00 a 0:30';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « ».
 */
export const reviews = [
	{
		text: 'Muy buena atención, los camareros muy atentos y cuidadosos con el servicio.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Quesadillas de jarrete increíbles y tarta de queso deliciosa',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El perrito con queso fundido y bacon sigue la misma línea de sabores intensos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica descripción del titular, ni distintivo, ni precios, ni carta, así que ninguna
 * respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Gigantes Street Food?',
		answer:
			'En la Calle Elisa Cendrero, 18, con código postal 13003, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3QC+VW Ciudad Real y las coordenadas 38.9897263, -3.9276655.',
	},
	{
		question: '¿Cuál es el horario de Gigantes Street Food?',
		answer:
			'La ficha publica un horario de jueves a domingo con dos turnos: de 13:00 a 16:30 y de 20:00 a 0:30. Cierra lunes, martes y miércoles. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como «Restaurante americano» y «Restaurante». Tiene 4,6 sobre 5 con 788 reseñas, y en las que destaca se habla de las quesadillas de jarrete, de la tarta de queso, del perrito con queso fundido y bacon y de la atención del personal.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 642 40 89 78.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Elisa Cendrero, 18 y las coordenadas 38.9897263, -3.9276655. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3QC+VW Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Tiene algún distintivo en Google Maps?',
		answer:
			'La ficha no muestra ninguna etiqueta junto al nombre, así que esta web no reproduce ninguna. Para saber qué se sirve y a qué hora, lo mejor es llamar al 642 40 89 78.',
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
		'Restaurante americano en la Calle Elisa Cendrero, 18 de Ciudad Real, abierto de jueves a domingo con dos turnos.',
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
	/* «Restaurante americano» sí nombra una cocina concreta: se traduce al español. */
	servesCuisine: ['Americana'],
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
