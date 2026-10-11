/**
 * Datos de Restaurante Zerurena (Errementeri, 22 · 48150 Sondika, Bizkaia).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 11 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, servicios de accesibilidad, descripción del
 * titular y reseñas destacadas con texto.
 *
 * La ficha **no publica horario semanal**, así que no se reproduce ninguno: por eso esta web no
 * tiene tabla de horario y lo dice abiertamente. La propia descripción del titular avisa de que
 * abren por reserva, así que el teléfono es la vía para confirmar. Tampoco publica precios ni
 * carta. Tampoco muestra ningún distintivo junto al nombre.
 *
 * La dirección se publica como «Errementeri, 22, 48150 Basozabal»: Basozabal es el barrio y el
 * código postal 48150 corresponde a Sondika, así que la localidad es Sondika y se documenta la
 * equivalencia. La provincia se publica como «Biscay»/«Bizkaia»: aquí se escribe «Bizkaia».
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-zerurena.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '11 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Zerurena',
	shortName: 'Zerurena',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	streetAddress: 'Errementeri, 22',
	postalCode: '48150',
	/**
	 * La ficha publica «48150 Basozabal»: Basozabal es el barrio y el 48150 es el código postal
	 * de Sondika, así que la localidad es Sondika.
	 */
	city: 'Sondika',
	/** Barrio que publica la ficha junto al código postal. */
	neighborhood: 'Basozabal',
	/** La ficha publica «Biscay»/«Bizkaia»: aquí se escribe «Bizkaia». */
	province: 'Bizkaia',
	region: 'País Vasco',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. Imprescindible: el local abre por reserva. */
	phone: '+34 685 73 73 64',
	latitude: 43.2991615,
	longitude: -2.9222949,
	/** Plus code que publica la ficha («73XH+M3 Basozabal» en corto). */
	plusCode: '8CMV73XH+M3',
	/** Valoración de la ficha en la fecha de consulta (4,8 sobre 5 con 276 reseñas). */
	rating: 4.8,
	reviewCount: 276,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Zerurena/@43.2991615,-2.9222949,17z/data=!3m1!4b1!4m6!3m5!1s0xd4e455c7bebeac1:0xba59f42a59775cb6!8m2!3d43.2991615!4d-2.9222949!16s%2Fg%2F11b75j19gh?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJwerre1xFTg0Rtlx3WSr0Wbo&hl=es';

export const phoneHref = 'tel:+34685737364';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Descripción publicada por el propio local en su ficha, en euskera y en español.
 *
 * Se reproduce tal cual: es la voz del titular, no de esta web. Es además la única pista de
 * horario que da la ficha: abren por reserva.
 */
export const descripcionLocal =
	'Gogoratu erreserbapean zabaltzen dugula!!\n¡¡Recordad que abrimos por reserva!!';

/* Sin `hours`: la ficha no publica ningún horario semanal y no se inventa uno. La descripción del
   titular avisa de que abren por reserva: hay que llamar al teléfono publicado. */

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Reseñas destacadas con texto que publica la ficha.
 *
 * Son las dos que destaca la respuesta de la ficha, las dos de 5 sobre 5. La respuesta no trae los
 * nombres de quienes las firman (solo sus avatares), así que se citan sin autor, con su
 * puntuación y su enlace al listado completo.
 */
export const resenas = [
	{
		text: 'Plato estrella: la ensaladilla, los platos de cuchara y los postres caseros',
		stars: 5,
	},
	{
		text: 'Un pescado buenísimo, todo para repetir.',
		stars: 5,
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica horario semanal, precios ni carta, así que ninguna respuesta los reproduce:
 * para el horario, la propia ficha remite a la reserva por teléfono.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante Zerurena?',
		answer:
			'En Errementeri, 22, con código postal 48150, en el barrio de Basozabal, en Sondika (Bizkaia, País Vasco). La ficha publica las coordenadas 43.2991615, -2.9222949 y el plus code 8CMV73XH+M3.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Zerurena?',
		answer:
			'La ficha no publica ningún horario semanal. Lo que sí dice el propio local en su ficha es que abren por reserva, así que hay que llamar al 685 73 73 64 para confirmar. Esta web no puede dar un horario que la ficha no publica.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante y las reseñas destacadas hablan de ensaladilla, platos de cuchara, postres caseros y pescado. Tiene 4,8 sobre 5 con 276 reseñas. La ficha no publica carta ni precios, así que esta web no los reproduce.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'No solo se puede: es que hay que hacerlo. El propio local avisa en su ficha de que abren por reserva, y el teléfono publicado es el 685 73 73 64. Esta web no permite reservar.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Errementeri, 22 y las coordenadas 43.2991615, -2.9222949. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 11 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en Errementeri, 22, en Sondika (Bizkaia): abre por reserva en el 685 73 73 64.',
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
	/* `acceptsReservations: true` se mantiene como en el resto de webs del repositorio: aquí con
	   más motivo, porque el local avisa de que abre por reserva. */
	acceptsReservations: true,
	/* Sin `servesCuisine`: la única categoría de la ficha es el genérico «Restaurante», que no es
	   una cocina, y la ficha no publica otra. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
	/* Sin `openingHoursSpecification`: la ficha no publica ningún horario semanal. */
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
 * Rellena los campos marcados como pendientes antes de publicar. Mientras falten, el aviso
 * amarillo de /aviso-legal sigue visible. El teléfono publicado en la ficha ya consta abajo.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
