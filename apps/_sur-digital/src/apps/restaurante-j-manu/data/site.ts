/**
 * Datos de Restaurante J.Manu (Calle de la Palma, 15 · 03501 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * Particularidades de esta ficha:
 *
 * - Google publica **tres categorías de cocina** («Restaurante de cocina valenciana», «Restaurante
 *   mediterráneo» y «Restaurante de cocina española»), así que `servesCuisine` recoge las tres.
 * - **No publica descripción del titular** (el campo llega vacío), así que aquí no hay
 *   `descripcionLocal` y la portada no reproduce ninguna.
 * - El **domingo solo abre al mediodía** y el **lunes cierra**, y la ficha avisa de que ese lunes
 *   (12 de octubre, Fiesta Nacional de España) el horario podría ser diferente.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-j-manu',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante J.Manu',
	shortName: 'J.Manu',
	/** Primera categoría que publica Google: la que hace de categoría principal. */
	category: 'Restaurante de cocina valenciana',
	categories: [
		'Restaurante de cocina valenciana',
		'Restaurante mediterráneo',
		'Restaurante de cocina española',
	],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C/de la Palma, 15»: aquí se desarrolla a
	 * «Calle de la Palma, 15», como en el resto del repositorio.
	 */
	streetAddress: 'Calle de la Palma, 15',
	postalCode: '03501',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 659 77 94 66',
	latitude: 38.5371976,
	longitude: -0.1300436,
	/** Plus code que publica la ficha. */
	plusCode: 'GVP9+VX Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 575 reseñas). */
	rating: 4.5,
	reviewCount: 575,
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
	'https://www.google.com/maps/place/Restaurante+J.Manu/@38.5371976,-0.1300436,17z/data=!3m1!4b1!4m6!3m5!1s0xd6204e7e387540b:0x639e993547f1c46f!8m2!3d38.5371976!4d-0.1300436!16s%2Fg%2F12q4q04qh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJC1SH4-cEYg0Rb8TxRzWZnmM&hl=es';

export const phoneHref = 'tel:+34659779466';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 (sábado) cubre la semana completa: **de martes a sábado se
 * sirve mediodía (13:00–16:00) y noche (19:30–23:00)**; el **domingo solo hay mediodía** (13:00–16:00)
 * y el **lunes cierra**. La ficha añade el aviso de que ese lunes (12 de octubre, Fiesta Nacional de
 * España) el horario podría ser diferente.
 *
 * El lunes cerrado no genera ninguna entrada (11 especificaciones en total).
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
		service: '13:00 – 16:00 · 19:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '19:30', close: '23:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 16:00 · 19:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '19:30', close: '23:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:00 · 19:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '19:30', close: '23:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:00 · 19:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '19:30', close: '23:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00 · 19:30 – 23:00',
		shifts: [
			{ open: '13:00', close: '16:00' },
			{ open: '19:30', close: '23:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Come de 13:00 a 16:00 y cena de 19:30 a 23:00; el domingo solo mediodía y los lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y el aparcamiento adaptados para
 * sillas de ruedas. No publica ni el aseo ni los asientos.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la segunda conserva la admiración
 * final y el nombre «alioli» tal como lo escribió quien la firmó). Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos ensalada de la casa, variado de croquetas y la paella valenciana.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Venimos de Bilbao y nos acabamos de comer una paella de verduras deliciosa!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Comida casera, y el alioli le hacen con salmón y menta, espectacular!',
		rating: 5,
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
		question: '¿Dónde está Restaurante J.Manu?',
		answer:
			'En la Calle de la Palma, 15, con código postal 03501, en Benidorm (Alicante). La ficha publica el plus code GVP9+VX Benidorm y las coordenadas 38.5371976, -0.1300436.',
	},
	{
		question: '¿Cuál es el horario de Restaurante J.Manu?',
		answer:
			'La ficha publica mediodía de 13:00 a 16:00 y noche de 19:30 a 23:00 de martes a sábado. El domingo solo abre al mediodía, de 13:00 a 16:00, y los lunes cierra. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica con tres categorías: restaurante de cocina valenciana (la principal), restaurante mediterráneo y restaurante de cocina española. Tiene 4,5 sobre 5 con 575 reseñas, y en las reseñas que destaca se habla de la paella valenciana, de la paella de verduras y de comida casera.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha solo publica el teléfono 659 77 94 66 y no ofrece reserva online. Esta web no permite reservar: para reservar mesa, usa ese número.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle de la Palma, 15 y las coordenadas 38.5371976, -0.1300436. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVP9+VX Benidorm.',
	},
	{
		question: '¿Cierra algún día?',
		answer:
			'La ficha marca el lunes como cerrado. El domingo abre solo al mediodía. Además avisa de que el lunes 12 de octubre, Fiesta Nacional de España, el horario podría ser diferente.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y el aparcamiento adaptados para sillas de ruedas. No publica ni el aseo ni los asientos adaptados.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 659 77 94 66.',
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
		'Restaurante de cocina valenciana y mediterránea en la Calle de la Palma, 15 de Benidorm, con mediodía y noche de martes a sábado.',
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
	 * `servesCuisine` recoge las tres cocinas que declaran las categorías de Google.
	 */
	servesCuisine: ['Cocina valenciana', 'Cocina mediterránea', 'Cocina española'],
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
