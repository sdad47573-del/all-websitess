/**
 * Datos de Gastro Molí (Av. de Benidorm, 13 · 03509 Finestrat · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * Particularidades de esta ficha:
 *
 * - Es la **primera ficha del lote en Finestrat** (las demás son de Benidorm y alrededores).
 * - Google publica **una sola categoría genérica**, «Restaurante», **sin cocina declarada**, y la
 *   ficha **no publica descripción del titular** (el campo llega vacío). Por eso **no hay
 *   `servesCuisine`**: no se inventa una cocina que la ficha no declara.
 * - El horario es **muy recortado**: abre solo **sábado, domingo y lunes**, y **cierra de martes a
 *   viernes**. Además cada día abierto tiene un horario distinto.
 * - Publica **tres** servicios de accesibilidad (acceso, aseo y asientos), pero **no el aparcamiento**.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/gastro-moli',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Gastro Molí',
	shortName: 'Molí',
	/** Única categoría que publica Google en esta ficha: no declara ninguna cocina. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de Benidorm, 13»: aquí se
	 * reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas.
	 */
	streetAddress: 'Av. de Benidorm, 13',
	postalCode: '03509',
	city: 'Finestrat',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Único teléfono publicado en la ficha. */
	phone: '+34 865 75 19 96',
	latitude: 38.5692906,
	longitude: -0.2100694,
	/** Plus code que publica la ficha. */
	plusCode: 'HQ9Q+PX Finestrat',
	/** Valoración de la ficha en la fecha de consulta (4,4 sobre 5 con 525 reseñas). */
	rating: 4.4,
	reviewCount: 525,
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
 * Google lo publica junto al lunes 12 de octubre, Fiesta Nacional de España, con el texto «Horario
 * de Fiesta Nacional de España»: es decir, el tramo que la ficha da para ese lunes es el horario de
 * festivo. Se recoge tal cual y se explica en la sección de horario, sin cambiar la tabla.
 */
export const avisoFestivo = 'Horario de Fiesta Nacional de España';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Gastro+Mol%C3%AD/@38.5692906,-0.2100694,17z/data=!3m1!4b1!4m6!3m5!1s0xd621c0a0c2c7531:0xaae95123c4d5a72b!8m2!3d38.5692906!4d-0.2100694!16s%2Fg%2F11zbqqhf5?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJMXUsDAocYg0RK6fVxCNR6ao&hl=es';

export const phoneHref = 'tel:+34865751996';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 (sábado) cubre del sábado 10 al viernes 16. La ficha
 * publica **tres días abiertos, cada uno con un horario distinto**, y **cuatro días cerrados**:
 *
 * - lunes, de 9:30 a 19:00, con el aviso de que es el horario de la Fiesta Nacional de España;
 * - martes, miércoles, jueves y viernes, cerrado;
 * - sábado, de 10:00 a 23:00;
 * - domingo, de 10:00 a 18:00.
 *
 * Los cuatro días cerrados llevan `shifts: []`, así que en los datos estructurados solo salen las
 * tres especificaciones de los días abiertos.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '9:30 – 19:00',
		shifts: [{ open: '09:30', close: '19:00' }],
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 23:00',
		shifts: [{ open: '10:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 18:00',
		shifts: [{ open: '10:00', close: '18:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Sábado, domingo y lunes; cierra de martes a viernes';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
 * adaptados para sillas de ruedas. **No publica el aparcamiento**, que sí aparece en otras fichas
 * del lote.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera mantiene sus puntos
 * suspensivos y sus dos signos de admiración). Dos son de 5 sobre 5 y **una de 1 sobre 5**: es una
 * reseña crítica y por eso se marca con el estilo `.quote.is-low`, sin suavizar ni censurar su
 * texto.
 */
export const reviews = [
	{
		text: 'Es una paella con un arroz suculento y bien surtida de marisco.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Pedimos pulpo, croquetas, ensalada de ventresca y arroz a banda.',
		rating: 1,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Me sirvieron un atun a la brasa con una salsa.. riquísimo!!',
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
		question: '¿Dónde está Gastro Molí?',
		answer:
			'En la Av. de Benidorm, 13, con código postal 03509, en Finestrat (Alicante). La ficha publica el plus code HQ9Q+PX Finestrat y las coordenadas 38.5692906, -0.2100694.',
	},
	{
		question: '¿Qué días abre Gastro Molí?',
		answer:
			'La ficha publica tres días abiertos y cuatro cerrados: abre el sábado (10:00 a 23:00), el domingo (10:00 a 18:00) y el lunes (9:30 a 19:00), y está cerrado de martes a viernes. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Cuál es el horario de cada día?',
		answer:
			'El sábado, de 10:00 a 23:00; el domingo, de 10:00 a 18:00; y el lunes, de 9:30 a 19:00. La ficha añade que el tramo del lunes 12, Fiesta Nacional de España, es el «Horario de Fiesta Nacional de España».',
	},
	{
		question: '¿Por qué cierra de martes a viernes?',
		answer:
			'Es lo que publica la ficha: los cuatro días aparecen como «Cerrado», sin ninguna explicación añadida. Esta web no interpreta el motivo; para confirmarlo, el teléfono publicado es el 865 75 19 96.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google solo publica la categoría genérica «Restaurante», sin cocina declarada, y la ficha tampoco publica descripción del titular ni carta. Lo único que se puede contar es lo que dicen las tres reseñas que destaca Google: una paella con arroz suculento y bien surtida de marisco, un atún a la brasa con salsa, y también un pulpo, unas croquetas, una ensalada de ventresca y un arroz a banda.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha publica un solo teléfono y no ofrece reserva online. Esta web no permite reservar: para reservar mesa, usa el 865 75 19 96.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Benidorm, 13 y las coordenadas 38.5692906, -0.2100694. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code HQ9Q+PX Finestrat.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica el aparcamiento adaptado.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 865 75 19 96.',
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
		'Restaurante en la Av. de Benidorm, 13 de Finestrat (Alicante), con servicio de sábado a lunes y cierre de martes a viernes.',
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
