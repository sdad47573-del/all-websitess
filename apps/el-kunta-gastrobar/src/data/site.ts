/**
 * Datos de El kunta gastrobar (Av. Constitución, 4 · 21550 Puebla de Guzmán, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, dirección, categoría, descripción del
 * titular, valoración con número de reseñas, coordenadas, plus code, los servicios de
 * accesibilidad y las reseñas destacadas.
 *
 * La ficha **no publica horario, teléfono, carta, precios, web propia ni distintivo**. Google
 * muestra en su lugar las sugerencias «Añadir horario», «Añadir teléfono» y «Añadir sitio web»,
 * que confirman que el negocio no los ha facilitado. Aquí no se reproduce ninguno de ellos y no
 * se inventa ninguno: es el segundo caso del repositorio sin teléfono publicado, después de
 * `restaurante-casa-manolo`.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://el-kunta-gastrobar.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con la «k» minúscula. */
	name: 'El kunta gastrobar',
	shortName: 'El kunta',
	/** Única categoría que publica Google, y declara cocina. */
	category: 'Restaurante andaluz',
	/** Las categorías de la ficha, en su orden: aquí solo hay una. */
	categories: ['Restaurante andaluz'],
	/** Dirección publicada en la ficha. */
	streetAddress: 'Av. Constitución, 4',
	postalCode: '21550',
	city: 'Puebla de Guzmán',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	latitude: 37.6115657,
	longitude: -7.2518225,
	/** Plus code que publica la ficha. */
	plusCode: 'JP6X+J7 Puebla de Guzmán',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 25 reseñas). */
	rating: 4.7,
	reviewCount: 25,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, con sus espacios sueltos antes de las comas («Guzmán ,el Kunta»,
 * «gastrobar ,ofrece»), su punto seguido de minúscula («tarde .con aparcamientos privados») y su
 * ausencia de punto final. Es el único texto de este tipo que publica.
 *
 * De esta descripción sale lo único que la ficha dice del horario —«desayunos tapas y comidas
 * desde las 6 de la mañana hasta las 18 de la tarde»—, que se recoge **atribuido al titular**,
 * porque la ficha no publica ninguna tabla de horarios.
 */
export const descripcionLocal =
	'Situado en la travesía de puebla de Guzmán ,el Kunta gastrobar ,ofrece desayunos tapas y comidas desde las 6 de la mañana hasta las 18 de la tarde .con aparcamientos privados';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/El+kunta+gastrobar/@37.6115657,-7.2518225,17z/data=!3m1!4b1!4m6!3m5!1s0xd1051c873b772c7:0xfc5348988c6da992!8m2!3d37.6115657!4d-7.2518225!16s%2Fg%2F11x61rgpnr?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJx3K3c8hREA0RkqltjJhIU_w&hl=es';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Lo que se puede decir del horario, para la cabecera y la franja de datos.
 *
 * Google no publica ningún tramo de apertura para esta ficha y muestra la sugerencia «Añadir
 * horario», así que no hay tabla que reproducir.
 */
export const hoursSummary = 'La ficha no publica horario';

/**
 * Nota que explica, en la sección de horario, por qué no hay tabla.
 *
 * Recoge la sugerencia que muestra Google y el único dato de horario que existe, que es el de la
 * descripción del titular, sin convertirlo en una tabla.
 */
export const horarioNota =
	'Google no publica ningún horario para esta ficha: en su lugar muestra la sugerencia «Añadir horario», que confirma que el negocio no lo ha facilitado. Lo único que dice del horario es la descripción del titular, que se reproduce arriba: «desayunos tapas y comidas desde las 6 de la mañana hasta las 18 de la tarde». Esta web no convierte esa frase en una tabla ni la amplía.';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * La ficha publica **una sola entrada**, los asientos adaptados para sillas de ruedas, y figura
 * como disponible. No publica acceso, aseo ni aparcamiento adaptados.
 */
export const accesibilidad = [
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son tres y se citan tal cual, sin corregir su redacción ni su puntuación (incluidas las
 * tildes que faltan en la tercera y su punto final). Google las guarda entre comillas dobles, pero
 * esas comillas son suyas y no forman parte del texto, así que no se reproducen. Las puntuaciones
 * son 5, 5 y 4.
 */
export const reviews = [
	{
		text: 'Buen sitio de comida casera!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Por destacar, el atún con tomate y la ensaladilla.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buenas comida y buen servicio, no estaría mal algo más de cantidad, volveré.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario, teléfono, carta ni precios, así que ninguna respuesta los inventa.
 */
export const faqs = [
	{
		question: '¿Dónde está El kunta gastrobar?',
		answer:
			'En la Av. Constitución, 4, con código postal 21550, en Puebla de Guzmán (Huelva). La ficha publica el plus code JP6X+J7 Puebla de Guzmán y las coordenadas 37.6115657, -7.2518225.',
	},
	{
		question: '¿Cuál es el horario de El kunta gastrobar?',
		answer:
			'La ficha de Google Maps no publica ningún horario: Google muestra la sugerencia «Añadir horario», que confirma que el negocio no lo ha facilitado. Por eso esta web no tiene tabla de horarios. Lo único que dice del horario es la descripción del titular, que habla de «desayunos tapas y comidas desde las 6 de la mañana hasta las 18 de la tarde»; es una frase suya, no un horario publicado por días, así que conviene comprobarla en la propia ficha antes de ir.',
	},
	{
		question: '¿Cuál es el teléfono de El kunta gastrobar?',
		answer:
			'La ficha no publica ningún teléfono: Google muestra la sugerencia «Añadir teléfono», que confirma que el negocio no lo ha facilitado. Por eso en esta web no aparece ninguno y no se inventa. Para contactar, la vía publicada es la propia ficha de Google Maps y sus reseñas.',
	},
	{
		question: '¿Qué se puede comer?',
		answer:
			'Google lo clasifica como restaurante andaluz. El titular describe la ficha como un gastrobar situado en la travesía de Puebla de Guzmán que ofrece «desayunos tapas y comidas» y que cuenta con «aparcamientos privados». En las reseñas que destaca la ficha se habla de comida casera, de atún con tomate y de ensaladilla. La ficha no publica carta ni precios, así que la web no los reproduce.',
	},
	{
		question: '¿Hay aparcamiento?',
		answer:
			'Es lo que publica el titular en su descripción: el local «con aparcamientos privados». La ficha no da más detalles, así que esta web no los añade.',
	},
	{
		question: '¿Es accesible para sillas de ruedas?',
		answer:
			'La ficha publica un solo dato de accesibilidad, los asientos adaptados para sillas de ruedas, y figura como disponible. No publica el acceso, el aseo ni el aparcamiento adaptados, y esta web no añade nada que la ficha no diga.',
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
		'Gastrobar de cocina andaluza en la Av. Constitución, 4 de Puebla de Guzmán, con desayunos, tapas y comidas.',
	url: `${site.siteUrl}/`,
	image: `${site.siteUrl}/og.jpg`,
	/* Sin `telephone`: la ficha de Google Maps no publica ningún teléfono y no se inventa uno. */
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
	/* La única categoría que publica Google, «Restaurante andaluz», declara esa cocina. */
	servesCuisine: ['Cocina andaluza'],
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	/*
	 * Sin `openingHoursSpecification`: la ficha no publica ningún horario (Google muestra la
	 * sugerencia «Añadir horario»), así que no hay franjas que declarar ni se inventan.
	 */
	amenityFeature: accesibilidad.map((item) => ({
		'@type': 'LocationFeatureSpecification',
		name: item.label,
		value: item.disponible,
	})),
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
 * amarillo de /aviso-legal sigue visible. La ficha no publica teléfono, así que el aviso legal
 * tampoco puede ofrecer ninguno: el canal de contacto que hay que rellenar es el correo.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
