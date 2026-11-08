/**
 * Datos de Rosa de los vientos (Av. Rosa dels Vents, 17 · 03570 Benidorm).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre y las reseñas destacadas.
 *
 * La ficha no publica descripción del titular, resumen del lugar, carta ni precios, así que no se
 * reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/rosa-de-los-vientos',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Rosa de los vientos',
	/**
	 * Nombre corto para el rótulo del mapa. La ficha no publica ninguna forma abreviada del nombre,
	 * así que se repite el nombre completo en vez de inventar un diminutivo.
	 */
	shortName: 'Rosa de los vientos',
	/** Categoría que publica Google en esta ficha: «Restaurante mediterráneo», la única. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. Rosa dels Vents, 17»: aquí se
	 * reproduce tal cual, como en otras webs del repositorio que conservan las abreviaturas.
	 */
	streetAddress: 'Av. Rosa dels Vents, 17',
	postalCode: '03570',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 648 88 75 46',
	latitude: 38.525247,
	longitude: -0.16909,
	/** Plus code que publica la ficha. */
	plusCode: 'GRGJ+39 Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 408 reseñas). */
	rating: 4.3,
	reviewCount: 408,
	site: site.siteUrl,
} as const;

/**
 * Cocina que se declara en los datos estructurados.
 *
 * Sale de la categoría publicada, «Restaurante mediterráneo», que sí nombra una cocina: es lo que
 * hacen las otras webs del repositorio con esa misma categoría (`las-coronas`, `restaurante-baviera`).
 */
export const cocina = ['Cocina mediterránea'] as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Rosa+de+los+vientos/@38.525247,-0.16909,16z/data=!3m1!4b1!4m6!3m5!1s0xd621b9e3c0c48c5:0x2dfb06d0389305ce!8m2!3d38.525247!4d-0.16909!16s%2Fg%2F11h6ycycq3?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJxUgMPJ4bYg0RzgWTONAG-y0&hl=es';

export const phoneHref = 'tel:+34648887546';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. La ficha
 * publica el mismo tramo, de 10:00 a 24:00, de sábado a miércoles y el viernes, y el jueves cierra.
 *
 * El lunes lleva una marca de festivo de **tipo 1**, «Horario de Fiesta Nacional de España»: no es
 * el aviso de que el horario podría cambiar, sino el horario propio de ese día, que aquí coincide
 * con el tramo habitual.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
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
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 10:00 a 24:00 (el jueves cierra)';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas, y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y
 * los asientos adaptados para sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera mantiene las tildes que
 * le faltan a «tenia» y «menu», y la segunda termina con un emoji, que se conserva). Las tres son
 * de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'El menu de paella tenia mejillones, ensalada, plato de pescado y paella!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Excelente trato, deliciosas y generosas raciones 👌🏻',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Las cantidades son abundantes, mejillones y arroz muy ricos.',
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
		question: '¿Dónde está Rosa de los vientos?',
		answer:
			'En la Av. Rosa dels Vents, 17, con código postal 03570, en Benidorm (Alicante). La ficha publica el plus code GRGJ+39 Benidorm y las coordenadas 38.525247, -0.16909.',
	},
	{
		question: '¿Cuál es el horario de Rosa de los vientos?',
		answer:
			'La ficha publica un horario continuado de 10:00 a 24:00 de sábado a miércoles y el viernes, y el jueves cerrado. El cierre a las 24:00 se escribe como 00:00 en los datos estructurados de esta web. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, donde el lunes 12 aparece con la marca «Horario de Fiesta Nacional de España»: la ficha da para ese día un horario propio de festivo, el mismo tramo. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo. Tiene 4,3 sobre 5 con 408 reseñas, y en las reseñas que destaca se habla de un menú de paella con mejillones, ensalada y plato de pescado, del trato y de raciones deliciosas y generosas, y de mejillones y arroz abundantes.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 648 88 75 46.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 648 88 75 46.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. Rosa dels Vents, 17 y las coordenadas 38.525247, -0.16909. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRGJ+39 Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad y las cuatro figuran como disponibles: el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante mediterráneo en la Av. Rosa dels Vents, 17 de Benidorm, con horario continuado de 10:00 a 24:00 y cerrado los jueves.',
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
	/* La cocina sí sale de la categoría publicada («Restaurante mediterráneo»). */
	servesCuisine: cocina,
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
