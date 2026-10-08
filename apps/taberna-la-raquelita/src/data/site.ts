/**
 * Datos de Taberna La Raquelita (Avenida Tablas de Daimiel, 25 · 13004 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://taberna-la-raquelita.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Taberna La Raquelita',
	shortName: 'La Raquelita',
	/** Categoría que publica Google en esta ficha: «Taberna», la única. */
	category: 'Taberna',
	categories: ['Taberna'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. Tablas de Daimiel, N°25»: aquí se
	 * desarrolla a «Avenida Tablas de Daimiel, 25», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida Tablas de Daimiel, 25',
	postalCode: '13004',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 926 92 02 95',
	latitude: 38.9781073,
	longitude: -3.9247001,
	/** Plus code que publica la ficha. */
	plusCode: 'X3HG+64 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 710 reseñas). */
	rating: 4.5,
	reviewCount: 710,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal. En él el local se llama a sí mismo «Restaurante La Raquelita», mientras el nombre de la
 * ficha es «Taberna La Raquelita»: se publica tal cual, sin corregirlo.
 */
export const descripcionLocal =
	'Restaurante La Raquelita con carta, habitualmente sugerencias fuera de carta y menú del día entre semana.';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Taberna+La+Raquelita/@38.9781073,-3.9247001,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc33dea05db0d:0x45d762343085e874!8m2!3d38.9781073!4d-3.9247001!16s%2Fg%2F11c5b27blc?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJDdsF6j3Daw0RdOiFMDRi10U&hl=es';

export const phoneHref = 'tel:+34926920295';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local abre
 * de 9:00 a 17:00 todos los días que abre y añade un segundo turno de 19:30 a 24:00 de martes a
 * sábado; el miércoles y el domingo cierra por la noche y el lunes cierra todo el día.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
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
		service: '9:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 17:00 · 19:30 – 24:00',
		shifts: [
			{ open: '09:00', close: '17:00' },
			{ open: '19:30', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 17:00',
		shifts: [{ open: '09:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 9:00 a 17:00 y cenas de 19:30 a 24:00 (el miércoles y el domingo solo hasta las 17:00); el lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Dos son de 5 sobre 5 y una de 4
 * sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos ensalada miel mostaza, chipirones y croquetas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen servicio, profesionalidad, buena cocina y restaurante muy coqueto',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena atención de Javi y su equipo y buena comida y tapeo',
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
		question: '¿Dónde está Taberna La Raquelita?',
		answer:
			'En la Avenida Tablas de Daimiel, 25, con código postal 13004, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3HG+64 Ciudad Real y las coordenadas 38.9781073, -3.9247001.',
	},
	{
		question: '¿Cuál es el horario de Taberna La Raquelita?',
		answer:
			'La ficha publica un horario de 9:00 a 17:00 todos los días que abre, con un segundo turno de 19:30 a 24:00 de martes a sábado. El miércoles y el domingo cierra por la noche y el lunes cierra todo el día. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica solo como taberna, sin un tipo de cocina concreto. Tiene 4,5 sobre 5 con 710 reseñas, y en las reseñas que destaca se habla de una ensalada de miel y mostaza, chipirones y croquetas, del servicio y la cocina, y del tapeo y el trato del equipo.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 926 92 02 95.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida Tablas de Daimiel, 25 y las coordenadas 38.9781073, -3.9247001. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3HG+64 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 926 92 02 95.',
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
		'Taberna en la Avenida Tablas de Daimiel, 25 de Ciudad Real, con servicio de 9:00 a 17:00 y cenas de 19:30 a 24:00, cerrada los lunes.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Taberna» y la ficha no declara cocina. */
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
