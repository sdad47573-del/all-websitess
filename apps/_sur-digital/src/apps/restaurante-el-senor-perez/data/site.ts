/**
 * Datos de Restaurante El Señor Perez (Av. del Rey Santo, 8 · 13001 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-el-senor-perez',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante El Señor Perez',
	shortName: 'El Señor Perez',
	/** Categoría que publica Google en esta ficha: «Restaurante de cocina castellana», la única. */
	category: 'Restaurante de cocina castellana',
	categories: ['Restaurante de cocina castellana'],
	/** Dirección publicada en la ficha: Avenida del Rey Santo, 8 (13001 Ciudad Real). */
	streetAddress: 'Av. del Rey Santo, 8',
	postalCode: '13001',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 610 43 64 06',
	latitude: 38.9823631,
	longitude: -3.9302084,
	/** Plus code que publica la ficha. */
	plusCode: 'X3J9+WW Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4 sobre 5 con 729 reseñas). */
	rating: 4,
	reviewCount: 729,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni ampliarlo: «Restaurante de cocina de producto con servicio de barra y
 * terraza exterior».
 */
export const descripcionLocal =
	'Restaurante de cocina de producto con servicio de barra y terraza exterior';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo: no se
 * afirma nada sobre días, horario ni contenido de ese servicio.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+El+Se%C3%B1or+Perez/@38.9823631,-3.9302084,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3fe3bb361ef:0x367fc1e9757a9774!8m2!3d38.9823631!4d-3.9302084!16s%2Fg%2F11qn2w1vmj?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ72GzO_7Daw0RdJd6denBfzY&hl=es';

export const phoneHref = 'tel:+34610436406';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre. El
 * local mantiene un horario continuado de 10:00 a 24:00 de lunes a viernes, abre a las 11:00 el
 * sábado y cierra a las 17:30 el domingo.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
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
		service: '10:00 – 24:00',
		shifts: [{ open: '10:00', close: '00:00' }],
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
		service: '11:00 – 24:00',
		shifts: [{ open: '11:00', close: '00:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 17:30',
		shifts: [{ open: '11:00', close: '17:30' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De 10:00 a 24:00 de lunes a viernes, desde las 11:00 el sábado y de 11:00 a 17:30 el domingo';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « », y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Aconsejo el tartar de atun y la tarta de queso.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El cochinillo y la carrillera que pedimos exquisitos, así como los postres.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Una ensaladilla muy rica y unos raviolis de berenjena excelentes.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante El Señor Perez?',
		answer:
			'En la Avenida del Rey Santo, 8, con código postal 13001, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3J9+WW Ciudad Real y las coordenadas 38.9823631, -3.9302084.',
	},
	{
		question: '¿Cuál es el horario de Restaurante El Señor Perez?',
		answer:
			'La ficha publica un horario continuado de 10:00 a 24:00 de lunes a viernes, de 11:00 a 24:00 el sábado y de 11:00 a 17:30 el domingo. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina castellana. Tiene 4 sobre 5 con 729 reseñas, y en las reseñas que destaca se habla del tartar de atún y la tarta de queso, del cochinillo y la carrillera con los postres, y de la ensaladilla y los raviolis de berenjena.',
	},
	{
		question: '¿Tiene barra y terraza?',
		answer:
			'Sí: es lo que describe el propio local en la descripción de su ficha, «Restaurante de cocina de producto con servicio de barra y terraza exterior». La ficha no detalla tamaños, número de mesas ni condiciones de la terraza, así que para cualquier detalle lo mejor es llamar al 610 43 64 06.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch»?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: no se afirma en qué días, en qué franja horaria ni con qué contenido se sirve. Para saberlo, hay que llamar al 610 43 64 06.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 610 43 64 06.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida del Rey Santo, 8 y las coordenadas 38.9823631, -3.9302084. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3J9+WW Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Restaurante de cocina castellana y de producto en la Avenida del Rey Santo, 8 de Ciudad Real, con servicio de barra y terraza exterior.',
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
	/* «Castellana» traduce la única categoría que publica Google: «Restaurante de cocina castellana». */
	servesCuisine: ['Castellana'],
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
