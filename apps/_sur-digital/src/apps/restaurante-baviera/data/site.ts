/**
 * Datos de Restaurante Baviera (Avenida Paz, 1 · 23600 Martos, Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el propio local, el distintivo que Google muestra junto al nombre y las
 * reseñas destacadas.
 *
 * La ficha no publica carta, precios, web propia ni perfiles sociales, así que no se reproduce
 * ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-baviera',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Baviera',
	shortName: 'Baviera',
	/**
	 * Única categoría que publica Google en esta ficha: «Restaurante mediterráneo».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. Paz, 1»: aquí se desarrolla la
	 * abreviatura a «Avenida Paz, 1», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida Paz, 1',
	postalCode: '23600',
	city: 'Martos',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono fijo publicado en la ficha. */
	phone: '+34 953 55 40 41',
	latitude: 37.7214794,
	longitude: -3.9745288,
	/** Plus code que publica la ficha. */
	plusCode: 'P2CG+H5 Martos',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 1103 reseñas). */
	rating: 4.4,
	reviewCount: 1103,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce literal, con su espaciado («Martos ,con») y sin corregirlo, y va atribuida a la
 * ficha. Es el único texto de este tipo que publica; el resto de la web no añade descripciones.
 */
export const descripcionLocal =
	'Restaurante ubicado en el centro de Martos ,con una solera de 35 años, el cual tiene menú de lunes a sábados y una carta de comida mediterránea';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Baviera/@37.7214794,-3.9745288,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dc5e9cfc219c5:0xe7cb80f4d6290042!8m2!3d37.7214794!4d-3.9745288!16s%2Fg%2F11c57jm1mf?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJxRnCz-nFbQ0RQgAp1vSAy-c&hl=es';

export const phoneHref = 'tel:+34953554041';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * abre todos los días un único turno de 10:30 a 17:00, sin cena.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Aquí el lunes sí abre, así que se publica abierto **con la advertencia**.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:30 – 17:00',
		shifts: [{ open: '10:30', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abierto todos los días · de 10:30 a 17:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas: el aseo y los asientos adaptados están disponibles, y el aparcamiento adaptado
 * aparece marcado como «no hay» (la queja es la única de las tres que la ficha da por no
 * disponible). No se publica ni el acceso ni ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. En esta ficha las tres son de 5;
 * la tercera va sin espacio detrás de la coma («atención,quien») y se reproduce igual.
 */
export const reviews = [
	{
		text: 'Cerveza súper fresquita y tapitas muy ricas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Entre semana ponen menús económicos y de muy buena calidad.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena cocina buen trato y buena atención,quien lo prueba repite',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios, así que ninguna respuesta los menciona más allá de lo que
 * dice la descripción del propio local.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Baviera?',
		answer:
			'En la Avenida Paz, 1, con código postal 23600, en Martos (provincia de Jaén, Andalucía). La ficha publica el plus code P2CG+H5 Martos y las coordenadas 37.7214794, -3.9745288.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Baviera?',
		answer:
			'Abre todos los días de la semana con un único turno, de 10:30 a 17:00. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo, con 4,4 sobre 5 y 1103 reseñas. En la descripción de su propia ficha dice que tiene menú de lunes a sábados y una carta de comida mediterránea, y en las tres reseñas que destaca se habla de la cerveza y las tapas, de los menús económicos entre semana y de la cocina y el trato.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 953 55 40 41.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida Paz, 1 y las coordenadas 37.7214794, -3.9745288. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code P2CG+H5 Martos.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad: marca como disponibles el aseo y los asientos adaptados para sillas de ruedas, y señala que no hay aparcamiento adaptado. No publica ninguna otra, así que no se declara ni el acceso ni el bucle magnético.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 953 55 40 41.',
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
		'Restaurante mediterráneo en la Avenida Paz, 1 de Martos (Jaén), abierto todos los días de 10:30 a 17:00.',
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
	/* `servesCuisine` traduce la única categoría que publica Google, «Restaurante mediterráneo». */
	servesCuisine: ['Cocina mediterránea'],
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
