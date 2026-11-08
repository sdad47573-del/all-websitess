/**
 * Datos de ANTOLÍN FLORISTERÍA ( Antigua Lunaflor Floristería)
 * (Avenida de Velázquez, Calle Vicente Aleixandre, 1 · 29003 Málaga).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 17 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, descripción
 * del titular, valoración con número de reseñas, coordenadas, plus code, horario semanal,
 * accesibilidad y las reseñas destacadas.
 *
 * El nombre se reproduce tal como lo publica la ficha, en mayúsculas y con la mención a la antigua
 * Lunaflor entre paréntesis. La ficha no publica web propia ni precios, así que no se reproduce
 * ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://antolin-floristeria.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '17 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'ANTOLÍN FLORISTERÍA ( Antigua Lunaflor Floristería)',
	shortName: 'Antolín',
	/** Única categoría que publica Google en esta ficha. */
	category: 'Floristería',
	categories: ['Floristería'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Vicente Aleixandre, 1», junto a
	 * «Avenida de Velázquez»: aquí se desarrolla a «Avenida de Velázquez, Calle Vicente
	 * Aleixandre, 1», como en el resto del repositorio. «Carretera de Cádiz» es el distrito y se
	 * conserva aparte.
	 */
	streetAddress: 'Avenida de Velázquez, Calle Vicente Aleixandre, 1',
	district: 'Carretera de Cádiz',
	postalCode: '29003',
	city: 'Málaga',
	province: 'Málaga',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 630 36 60 62',
	latitude: 36.7002512,
	longitude: -4.4449136,
	/** Plus code que publica la ficha (corto; el completo es 8C8QPH24+42). */
	plusCode: 'PH24+42 Málaga',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 97 reseñas). */
	rating: 4.9,
	reviewCount: 97,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Se reproduce literalmente y se cita como tal en la web.
 */
export const descripcionLocal = [
	'Plantas, flores frescas y artificiales, cactus y suculentas con un poco de decoración para que puedas encontrar todo lo que buscas.',
	'Queremos que el cliente quede satisfecho y pueda ver su idea materializada. No hay prisas, no hay ramos estándares con distintos precios. Cuéntanos que quieres gastar y nos adaptamos a ti.',
	'Deseamos que te sientas como en casa.',
] as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/ANTOL%C3%8DN+FLORISTER%C3%8DA+(+Antigua+Lunaflor+Florister%C3%ADa)/@36.7002512,-4.4449136,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f762ea8a81dd:0xd8914db4f2fa6f05!8m2!3d36.7002512!4d-4.4449136!16s%2Fg%2F11rkb6x00s?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ3YGK6mL3cg0RBW_68rRNkdg&hl=es';

export const phoneHref = 'tel:+34630366062';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=17&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 17 de octubre de 2026 cubre del sábado 17 al viernes 23 de octubre. De lunes a
 * viernes abre dos turnos (mañana de 10:00 a 13:30 y tarde de 17:30 a 20:00); el sábado solo por
 * la mañana (10:00 a 13:30) y el domingo cierra.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '10:00 – 13:30 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '13:30' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '10:00 – 13:30 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '13:30' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '10:00 – 13:30 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '13:30' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '10:00 – 13:30 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '13:30' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '10:00 – 13:30 · 17:30 – 20:00',
		shifts: [
			{ open: '10:00', close: '13:30' },
			{ open: '17:30', close: '20:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '10:00 – 13:30',
		shifts: [{ open: '10:00', close: '13:30' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Dos turnos de lunes a viernes (10:00–13:30 y 17:30–20:00); sábado solo por la mañana; domingo cerrado';

/**
 * Servicio de accesibilidad que publica la ficha.
 *
 * Es una única entrada, y figura como disponible: el acceso para sillas de ruedas. La ficha no
 * publica ningún otro.
 */
export const accesibilidad = [{ label: 'Acceso para sillas de ruedas', disponible: true }] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Son de 4, 5 y 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Muy buena atención, eficaces y cumplidores en los encargos a domicilio.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Fui por una recomendación a preguntar por un ramo de novia.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un gran servicio y profesionalidad',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica web ni precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Antolín Floristería?',
		answer:
			'En la Avenida de Velázquez, Calle Vicente Aleixandre, 1, con código postal 29003, en Málaga, en Carretera de Cádiz. La ficha publica el plus code PH24+42 Málaga y las coordenadas 36.7002512, -4.4449136. Antes se llamaba Lunaflor Floristería, como recuerda el propio nombre de la ficha.',
	},
	{
		question: '¿Cuál es el horario de Antolín Floristería?',
		answer:
			'La ficha publica dos turnos de lunes a viernes: mañana de 10:00 a 13:30 y tarde de 17:30 a 20:00. El sábado abre solo por la mañana, de 10:00 a 13:30, y el domingo cierra. Es el horario de la ficha consultada el 17 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué vende la floristería?',
		answer:
			'Google la clasifica como floristería. Su propia descripción en la ficha anuncia plantas, flores frescas y artificiales, cactus y suculentas con decoración, sin ramos estándares: se adaptan a lo que quieras gastar para que veas tu idea materializada.',
	},
	{
		question: '¿Hacen encargos a domicilio?',
		answer:
			'Sí, según una de las reseñas que destaca la ficha: hablan de encargos a domicilio cumplidos con eficacia. Para pedirlo, lo más rápido es llamar al 630 36 60 62.',
	},
	{
		question: '¿Cuál es su teléfono?',
		answer:
			'El móvil que publica la ficha es el 630 36 60 62. Los botones de esta web abren la llamada o las indicaciones de Google Maps.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de Velázquez, Calle Vicente Aleixandre, 1, en Carretera de Cádiz de Málaga, y las coordenadas 36.7002512, -4.4449136. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code PH24+42 Málaga.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una entrada de accesibilidad y figura como disponible: el acceso para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué opinan los clientes?',
		answer:
			'La ficha publica un 4,9 sobre 5 con 97 reseñas. Google destaca tres extractos, que aquí se reproducen tal cual: uno de 4 sobre 5 sobre atención y encargos a domicilio, y dos de 5 sobre 5 sobre un ramo de novia y sobre servicio y profesionalidad.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos, la descripción y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 17 de octubre de 2026. No es su web oficial y no vende nada.',
	},
] as const;

export const floristSchema = {
	'@context': 'https://schema.org',
	'@type': 'Florist',
	'@id': `${site.siteUrl}/#floristeria`,
	name: business.name,
	description:
		'Floristería en la Avenida de Velázquez, Calle Vicente Aleixandre, 1 de Málaga, en Carretera de Cádiz. Plantas, flores frescas y artificiales, cactus y suculentas.',
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
