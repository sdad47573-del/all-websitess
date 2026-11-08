/**
 * Datos de Restaurante Las Cordobesas (Avenida Foietes, 10 · 03502 Benidorm · Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-las-cordobesas',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Las Cordobesas',
	shortName: 'Las Cordobesas',
	/** Categoría que publica Google en esta ficha: «Restaurante andaluz», la única. */
	category: 'Restaurante andaluz',
	categories: ['Restaurante andaluz'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. Foietes, 10»: aquí se desarrolla a
	 * «Avenida Foietes, 10», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida Foietes, 10',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 603 03 12 80',
	latitude: 38.5432506,
	longitude: -0.1357616,
	/** Plus code que publica la ficha. */
	plusCode: 'GVV7+8M Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 377 reseñas). */
	rating: 4.5,
	reviewCount: 377,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, con sus saltos de línea y sin corregir su puntuación (conserva «A que estas esperando» y
 * los signos de apertura dobles). Se pinta con `white-space: pre-line` para respetar los saltos.
 *
 * Ojo: este texto da un número de reservas (670 96 12 13) distinto del teléfono principal de la
 * ficha (`business.phone`, 603 03 12 80). Se publican los dos tal cual; ver el README.
 */
export const descripcionLocal = `Restaurante Las Cordobesas en Benidorm!
¿Quieres disfrutar de maravillosa comida andaluza?
A que estas esperando, ¡¡ven a AVENIDA FOIETES Nº 10!!
Te esperamos!
Reservas y consultas al 670961213`;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Las+Cordobesas/@38.5432506,-0.1357616,17z/data=!3m1!4b1!4m6!3m5!1s0xd6205fb0b0789a7:0xbf3a71fa12391231!8m2!3d38.5432506!4d-0.1357616!16s%2Fg%2F11kf3163pb?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJp4kHC_sFYg0RMRI5EvpxOr8&hl=es';

export const phoneHref = 'tel:+34603031280';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre la semana completa: abre de 10:00 a 22:00 de martes a
 * domingo y cierra los lunes.
 *
 * El lunes cerrado no genera ninguna entrada en los datos estructurados (seis especificaciones en
 * total).
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
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '10:00 – 22:00',
		shifts: [{ open: '10:00', close: '22:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Abre de 10:00 a 22:00 de martes a domingo; los lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ni el aseo ni el aparcamiento.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera mantiene el entrecomillado
 * de «pescaíto frito»). Dos son de 5 sobre 5 y una de 3 sobre 5.
 */
export const reviews = [
	{
		text: 'Pedimos 2 raciones de croquetas, 1 de bravas y la sepia familiar.',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El trato excelente los dueños y los camareros super amables!!!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Magnifico restaurante para tomar "pescaíto frito" y arroces.',
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
		question: '¿Dónde está Restaurante Las Cordobesas?',
		answer:
			'En la Avenida Foietes, 10, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GVV7+8M Benidorm y las coordenadas 38.5432506, -0.1357616.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Las Cordobesas?',
		answer:
			'La ficha publica un horario continuo de 10:00 a 22:00 de martes a domingo y el cierre los lunes. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmarlo por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante andaluz, la única categoría que publica la ficha. Tiene 4,5 sobre 5 con 377 reseñas, y en las reseñas que destaca se habla de raciones como croquetas, bravas y sepia, del trato de los dueños y los camareros, y del pescaíto frito y los arroces.',
	},
	{
		question: '¿Cómo se reserva?',
		answer:
			'La ficha publica el teléfono 603 03 12 80, y la descripción del titular indica además «Reservas y consultas al 670961213». Esta web no permite reservar: para reservar mesa, usa uno de esos dos números.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida Foietes, 10 y las coordenadas 38.5432506, -0.1357616. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVV7+8M Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ni el aseo ni el aparcamiento adaptado.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 603 03 12 80.',
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
		'Restaurante andaluz en la Avenida Foietes, 10 de Benidorm, con horario continuo de 10:00 a 22:00 y cierre los lunes.',
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
	 * `servesCuisine` recoge la cocina que declara la propia categoría de Google
	 * («Restaurante andaluz»).
	 */
	servesCuisine: ['Cocina andaluza'],
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
