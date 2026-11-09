/**
 * Datos de Bar Pallares (Calle Langreo, 5 · 03502 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * Particularidades de esta ficha:
 *
 * - Google publica **una sola categoría genérica**, «Restaurante», **sin cocina declarada**, y la
 *   ficha **no publica descripción del titular** (el campo llega vacío). Por eso **no hay
 *   `servesCuisine`**: no se inventa una cocina que la ficha no declara (mismo criterio que en
 *   restaurante-sur). Lo único que se sabe de la comida es lo que dicen las reseñas destacadas.
 * - **Abre los siete días de la semana** (no hay ningún día cerrado) y con un horario muy largo:
 *   de 8:00 a 1:00, es decir, hasta la madrugada.
 * - Publica **tres** servicios de accesibilidad (acceso, aseo y asientos), pero **no el aparcamiento**.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-pallares',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bar Pallares',
	shortName: 'Bar Pallares',
	/** Única categoría que publica Google en esta ficha: no declara ninguna cocina. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Langreo, 5»: aquí se desarrolla a
	 * «Calle Langreo, 5», como en el resto del repositorio.
	 */
	streetAddress: 'Calle Langreo, 5',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 965 86 57 65',
	latitude: 38.532197,
	longitude: -0.1652157,
	/** Plus code que publica la ficha. */
	plusCode: 'GRJM+VW Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 252 reseñas). */
	rating: 4.3,
	reviewCount: 252,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/**
 * Aviso de festivo que acompaña al horario en la respuesta de la ficha.
 *
 * Google lo publica junto al lunes (12 de octubre, Fiesta Nacional de España). Se muestra en la
 * sección de horario y no cambia la tabla.
 */
export const avisoFestivo = 'Fiesta Nacional de España: el horario podría ser diferente';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+Pallares/@38.532197,-0.1652157,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b21634c1df9:0x1087ef0ff2d95d59!8m2!3d38.532197!4d-0.1652157!16s%2Fg%2F11cmzkwgdw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ-R1MYyEbYg0RWV3Z8g_vhxA&hl=es';

export const phoneHref = 'tel:+34965865765';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 (sábado) cubre la semana completa: **abre de 8:00 a 1:00 los
 * siete días**, con horario continuo y **sin ningún día cerrado**. La ficha añade el aviso de que el
 * lunes (12 de octubre, Fiesta Nacional de España) el horario podría ser diferente.
 *
 * El cierre a la 1:00 es de madrugada y en los datos estructurados se escribe como `closes: '01:00'`.
 * Ningún día cerrado implica que salen las siete especificaciones de horario.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '8:00 – 1:00',
		shifts: [{ open: '08:00', close: '01:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abre de 8:00 a 1:00 todos los días, sin día de cierre';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados
 * para sillas de ruedas. **No publica el aparcamiento**, que sí aparece en otras fichas del lote.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera mantiene sus emojis y la
 * tercera su concordancia original «buena relación precio»). Dos son de 4 sobre 5 y una de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Te ponen tus tapitas con tu bebida y buenas raciones 👍🏾🍺',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La sepia buenísima, las bravas bien.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy ricos los arroces y con buena relación precio.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni web propia, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Bar Pallares?',
		answer:
			'En la Calle Langreo, 5, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GRJM+VW Benidorm y las coordenadas 38.532197, -0.1652157.',
	},
	{
		question: '¿Cuál es el horario de Bar Pallares?',
		answer:
			'La ficha publica un horario continuo de 8:00 a 1:00 los siete días de la semana, es decir, que cierra de madrugada. No hay ningún día marcado como cerrado. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google solo publica la categoría genérica «Restaurante», sin cocina declarada, y la ficha tampoco publica descripción del titular ni carta. Lo único que se puede contar es lo que dicen las tres reseñas que destaca Google: tapitas con la bebida y buenas raciones, la sepia, las bravas y los arroces con buena relación precio.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha solo publica el teléfono 965 86 57 65 y no ofrece reserva online. Esta web no permite reservar: para reservar mesa, usa ese número.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Langreo, 5 y las coordenadas 38.532197, -0.1652157. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRJM+VW Benidorm.',
	},
	{
		question: '¿Cierra algún día?',
		answer:
			'La ficha no marca ningún día como cerrado: publica el mismo horario, de 8:00 a 1:00, para los siete días. Además avisa de que el lunes 12 de octubre, Fiesta Nacional de España, el horario podría ser diferente.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica el aparcamiento adaptado.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 965 86 57 65.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 10 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante en la Calle Langreo, 5 de Benidorm, con horario continuo de 8:00 a 1:00 todos los días.',
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
	/*
	 * Sin `servesCuisine`: Google solo publica la categoría genérica «Restaurante» y la ficha no
	 * publica descripción del titular, así que no hay ninguna cocina declarada que copiar aquí.
	 */
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
