/**
 * Datos de Cuevas Alí Babá (Calle del Espino, 17 · 13003 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, el distintivo que Google muestra junto al nombre,
 * la descripción del titular y las reseñas destacadas.
 *
 * Dos cosas que esta ficha NO publica y que por eso no existen en el fichero:
 *
 *  - **Horario.** Google devuelve el bloque de horario vacío (`null`), así que no hay `hours` ni
 *    `hoursSummary`, la portada no muestra ninguna tabla de horario y los datos estructurados no
 *    llevan `openingHoursSpecification`. Es la primera web del repositorio sin horario publicado.
 *  - **Accesibilidad.** El bloque de atributos viene vacío (`[]`), así que no hay `accesibilidad`,
 *    no se pinta la lista de servicios y el JSON-LD no lleva `amenityFeature`.
 *
 * La ficha tampoco publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/cuevas-ali-baba',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre del negocio. La ficha de Google lo publica en mayúsculas («CUEVAS ALÍ BABÁ»); en la web
	 * se escribe con capitalización normal, sin cambiar ninguna palabra, como se hace con las
	 * direcciones abreviadas del repositorio.
	 */
	name: 'Cuevas Alí Babá',
	shortName: 'Cuevas Alí Babá',
	/** Categoría que publica Google en esta ficha: «Restaurante marroquí», la única. */
	category: 'Restaurante marroquí',
	categories: ['Restaurante marroquí'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. del Espino, 17»: aquí se desarrolla
	 * la abreviatura a «Calle», como en el resto del repositorio. El código postal 13003 y el
	 * municipio (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle del Espino, 17',
	postalCode: '13003',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 632 54 50 75',
	latitude: 38.9915168,
	longitude: -3.9309657,
	/** Plus code que publica la ficha. */
	plusCode: 'X3R9+JJ Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,7 sobre 5 con 303 reseñas). */
	rating: 4.7,
	reviewCount: 303,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregir sus faltas de tilde ni sus erratas («arabe», «marroqui», «cuidad»,
 * «retaurantes»). Menciona a los propios cocineros, Samir y Bouchra, tal como lo escribió el local.
 */
export const descripcionLocal =
	'restaurante arabe marroqui unico en toda cuidad real y sus pueblos todo casero hecho por los propios Jefes samir y bouchra cocineros con titulo tecnicos de cocina y 20 años de experiencia en hoteles retaurantes y fincas';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/CUEVAS+AL%C3%8D+BAB%C3%81/@38.9915168,-3.9309657,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bbb34e080063f:0xadb56ca81c3be20f!8m2!3d38.9915168!4d-3.9309657!16s%2Fg%2F11rk8b2pp8?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJPwaA4DS7aw0RD-I7HKhsta0&hl=es';

export const phoneHref = 'tel:+34632545075';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/** Nota sobre el horario: la ficha no lo publica y la web no lo inventa. */
export const notaHorario =
	'La ficha de Google Maps de este local no publica ningún horario, así que esta web no muestra ninguno. Conviene llamar por teléfono para confirmar cuándo abre antes de ir.';

/** Nota sobre accesibilidad: la ficha no publica la lista de servicios. */
export const notaAccesibilidad =
	'La ficha no publica ningún servicio de accesibilidad, así que esta web no afirma nada sobre el acceso al local.';

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación, y se conservan los emojis que
 * escribió la persona. Las tres son de 5 sobre 5. Google guarda cada extracto entre comillas dobles;
 * aquí se quitan, porque la web ya presenta cada reseña entre « ».
 */
export const reviews = [
	{
		text: 'El té y las pastas no pueden faltar 🥳 Sin ninguna duda, volveremos!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Todo estaba buenísimo, el camarero es maravilloso, te tratan genial.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Es una visita obligada en la comarca, ya que la comida es exquisita.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * Se incluyen preguntas sobre el horario y la accesibilidad porque son los dos datos que esta ficha
 * no publica, y la respuesta lo explica sin inventar nada.
 */
export const faqs = [
	{
		question: '¿Dónde está Cuevas Alí Babá?',
		answer:
			'En la Calle del Espino, 17, con código postal 13003, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3R9+JJ Ciudad Real y las coordenadas 38.9915168, -3.9309657.',
	},
	{
		question: '¿Cuál es el horario de Cuevas Alí Babá?',
		answer:
			'La ficha de Google Maps de este local no publica ningún horario, así que esta web no muestra ninguno ni lo inventa. Para saber cuándo abre, lo mejor es llamar al 632 54 50 75 o consultar la propia ficha en Google Maps.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante marroquí. Tiene 4,7 sobre 5 con 303 reseñas, y el propio local se describe en su ficha como restaurante árabe marroquí, con cocina casera hecha por sus propios cocineros. En las reseñas que destaca se habla del té y las pastas, del trato y de la comida.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 632 54 50 75.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle del Espino, 17 y las coordenadas 38.9915168, -3.9309657. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3R9+JJ Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha de Google Maps de este local no publica ningún servicio de accesibilidad, así que esta web no puede afirmar nada sobre el acceso para sillas de ruedas. Conviene preguntar por teléfono antes de ir.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 632 54 50 75.',
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
		'Restaurante marroquí de cocina casera en la Calle del Espino, 17 de Ciudad Real.',
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
	/** Traduce a cocina la única categoría que publica Google: «cocina marroquí». */
	servesCuisine: ['Marroquí'],
	/* Sin `openingHoursSpecification`: la ficha no publica horario y no se inventa uno. */
	/* Sin `amenityFeature`: la ficha no publica servicios de accesibilidad. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
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
 * amarillo de /aviso-legal sigue visible.
 */
export const LEGAL = {
	razonSocial: '[pendiente de completar]',
	nif: '[pendiente de completar]',
	email: '[pendiente de completar]',
};
