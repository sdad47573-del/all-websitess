/**
 * Datos de Nueva vida (Avenida de la Armada Española, 5 · 03502 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y la descripción del titular.
 *
 * Particularidades de esta ficha frente a las demás del repositorio:
 *
 * - Google solo publica **una categoría genérica**, «Restaurante», sin cocina declarada. La cocina
 *   italiana sale de la **descripción del titular**, que dice literalmente «restaurante italiano con
 *   cocina casera, pasta fresca, pizzas artesanales al horno…».
 * - La ficha **no destaca ninguna reseña** (llegó vacía), así que aquí no hay `reviews` y la portada
 *   no cita ninguna. Sí publica la valoración agregada: **5 sobre 5 con 5 reseñas**.
 * - Es la ficha con **más servicios de accesibilidad**: cuatro, y los cuatro disponibles (acceso,
 *   aparcamiento, aseo y asientos adaptados).
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/nueva-vida',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Nueva vida',
	shortName: 'Nueva vida',
	/** Única categoría que publica Google en esta ficha: no declara ninguna cocina. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de la Armada Española, 5»: aquí se
	 * desarrolla a «Avenida de la Armada Española, 5», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida de la Armada Española, 5',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 611 49 92 20',
	latitude: 38.5373412,
	longitude: -0.1402495,
	/** Plus code que publica la ficha. */
	plusCode: 'GVP5+WW Benidorm',
	/** Valoración de la ficha en la fecha de consulta (5 sobre 5 con 5 reseñas). */
	rating: 5,
	reviewCount: 5,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin tocar su puntuación ni sus mayúsculas: empieza en minúscula, escribe «italia» en
 * minúscula y alterna el nombre del local («Nueva Vida- New Life»). Se pinta con
 * `white-space: pre-line`, así que se ve como lo escribió el titular.
 *
 * Es también la única fuente de la cocina del local: Google solo publica la categoría «Restaurante».
 */
export const descripcionLocal = `en Nueva Vida- New Life traemos el auténtico sabor de italia al corazón de Benidorm. restaurante italiano con cocina casera, pasta fresca, pizzas artesanales al horno y recetas tradicionales preparadas con ingredientes 100% italianos. ambiente acogedor, familiar y atención cercana. la mejor cocina italiana de todo Benidorm solo la encuentras aquí! ven a probar la vera Italia! pasta pizza postres caseros y mucho amor`;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Se admiten perros». Se recoge como dato de la ficha, sin ampliarlo ni
 * interpretarlo.
 */
export const distintivo = 'Se admiten perros';

/**
 * Aviso de festivo que acompaña al horario en la respuesta de la ficha.
 *
 * Google lo publica junto al lunes (12 de octubre, Fiesta Nacional de España). Se muestra en la
 * sección de horario y no cambia la tabla.
 */
export const avisoFestivo = 'Fiesta Nacional de España: el horario podría ser diferente';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Nueva+vida/@38.5373412,-0.1402495,17z/data=!3m1!4b1!4m6!3m5!1s0xd620543a24f791b:0xd3bdf5518f7d0c3!8m2!3d38.5373412!4d-0.1402495!16s%2Fg%2F11nvygdb47?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJG3lPokMFYg0Rw9D3GFXfOw0&hl=es';

export const phoneHref = 'tel:+34611499220';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 (sábado) cubre la semana completa: **abre de 9:00 a 24:00 de
 * martes a domingo**, con dos excepciones de cierre de madrugada —**viernes hasta la 1:00** y
 * **sábado hasta la 1:30**—, y **el lunes cierra**. La ficha añade el aviso de que ese lunes
 * (12 de octubre, Fiesta Nacional de España) el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como `closes: '00:00'` en los datos estructurados, como en el
 * resto del repositorio; los cierres de madrugada, como `'01:00'` y `'01:30'`.
 *
 * El lunes cerrado no genera ninguna entrada (seis especificaciones en total).
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
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 1:00',
		shifts: [{ open: '09:00', close: '01:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '9:00 – 1:30',
		shifts: [{ open: '09:00', close: '01:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abre de 9:00 a 24:00; viernes hasta la 1:00 y sábado hasta la 1:30, y los lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas. Es la ficha del repositorio con más servicios de
 * este grupo.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas que destaca la ficha.
 *
 * Esta ficha **no destaca ninguna**: la respuesta de Google trae ese bloque vacío, así que no hay
 * extractos que citar y la portada no reproduce ninguno. La valoración agregada (5 sobre 5 con 5
 * reseñas) sí se publica, y se enlaza al listado público de reseñas de la ficha.
 */
export const reviews: readonly { text: string; rating: number; source: string }[] = [];

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni web propia, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Nueva vida?',
		answer:
			'En la Avenida de la Armada Española, 5, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GVP5+WW Benidorm y las coordenadas 38.5373412, -0.1402495.',
	},
	{
		question: '¿Cuál es el horario de Nueva vida?',
		answer:
			'La ficha publica un horario continuo de 9:00 a 24:00 de martes a domingo, con el viernes hasta la 1:00 y el sábado hasta la 1:30. Los lunes cierra. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google solo publica la categoría genérica «Restaurante», sin cocina declarada. La cocina se describe en la propia ficha, en palabras del titular: «restaurante italiano con cocina casera, pasta fresca, pizzas artesanales al horno y recetas tradicionales preparadas con ingredientes 100% italianos».',
	},
	{
		question: '¿Qué valoración tiene?',
		answer:
			'La ficha publica 5 sobre 5 con 5 reseñas. Son muy pocas reseñas, así que la nota hay que leerla con esa cautela. La ficha no destaca ninguna reseña con su texto, así que esta web no cita ninguna.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha solo publica el teléfono 611 49 92 20 y no ofrece reserva online. Esta web no permite reservar: para reservar mesa, usa ese número.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de la Armada Española, 5 y las coordenadas 38.5373412, -0.1402495. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVP5+WW Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas.',
	},
	{
		question: '¿Se admiten perros?',
		answer:
			'Google muestra junto al nombre la etiqueta «Se admiten perros», que es el distintivo que publica la ficha. Esta web la recoge tal cual y no la amplía: para cualquier detalle, lo mejor es llamar al 611 49 92 20.',
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
		'Restaurante en la Avenida de la Armada Española, 5 de Benidorm, con cocina casera italiana según la descripción de su titular y horario continuo de 9:00 a 24:00.',
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
	 * `servesCuisine` sale de la descripción del titular, que dice «restaurante italiano»: la
	 * categoría de Google («Restaurante») no declara ninguna cocina.
	 */
	servesCuisine: ['Cocina italiana'],
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
