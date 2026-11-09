/**
 * Datos de Abaceria Tinta De Toro (P.º de la Estación, 23 · 23007 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el propio local y las reseñas destacadas.
 *
 * La ficha no publica un distintivo junto al nombre, carta, precios ni una web propia, así que no
 * se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/abaceria-tinta-de-toro',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Abaceria Tinta De Toro',
	shortName: 'Tinta de Toro',
	/**
	 * Única categoría que publica Google en esta ficha: «Bar restaurante».
	 * No se añade ninguna otra que no aparezca.
	 */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/** Dirección publicada en la ficha, con la abreviatura «P.º» que usa Google. */
	streetAddress: 'P.º de la Estación, 23',
	postalCode: '23007',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha. Es un móvil, como en otras fichas del repositorio. */
	phone: '+34 681 03 31 55',
	latitude: 37.7734672,
	longitude: -3.7891136,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6F6+99 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,5 con 144 reseñas). */
	rating: 4.5,
	reviewCount: 144,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, con sus saltos de línea, sus emojis, sus almohadillas y su mención a
 * @tintadeto, y va atribuida a la ficha. Es el único texto de este tipo que publica.
 */
export const descripcionLocal =
	'| Tinta de toro 🩸es el nuevo espacio gastronómico en la capital de #Jaén que tienes que descubrir.\n\nEsta #abacería debe su nombre a esa arraigada costumbre en algunos lugares típicamente andaluces de, junto a la bebida, permitir consumir encurtidos o productos selectos ofertados por el propio establecimiento.\nCocina tradicional, tapas y raciones generosas de temporada que, unidas a un maridaje de vino perfecto de su amplia bodega 🍷o su gélida cerveza a -10°C 🍻, te harán sin duda, repetir.\n\nVuelve a enamorarte de los sabores de la cocina de tu tierra en su acogedora terraza y degusta sus exquisitos matices con Tinta de Toro. Encuentra tu nuevo sitio de #tapeo favorito en\n\n📍P.º de la Estación, 23\n➕ info y reservas en @tintadeto';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Abaceria+Tinta+De+Toro/@37.7734672,-3.7891136,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd76e67724385:0xffb838a3070176a2!8m2!3d37.7734672!4d-3.7891136!16s%2Fg%2F11k47_z2tf?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJhUNyZ27XbQ0RonYBB6M4uP8&hl=es';

export const phoneHref = 'tel:+34681033155';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. Cierra el
 * domingo. El viernes y el sábado encadenan un turno continuo que termina a las 2:00, y de lunes a
 * jueves (y el viernes a mediodía) hay un turno de mañana de 8:00 a 18:00 más otro de noche de
 * 19:45 a 2:00.
 *
 * La respuesta trae además el aviso de que el lunes 12, Fiesta Nacional de España, el horario
 * podría ser diferente. Aquí el lunes sí abre, así que se publica abierto **con la advertencia**.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '8:00 – 18:00 · 19:45 – 2:00',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:45', close: '02:00' },
		],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '8:00 – 18:00 · 19:45 – 2:00',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:45', close: '02:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '8:00 – 18:00 · 19:45 – 2:00',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:45', close: '02:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '8:00 – 18:00 · 19:45 – 2:00',
		shifts: [
			{ open: '08:00', close: '18:00' },
			{ open: '19:45', close: '02:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '8:00 – 2:00',
		shifts: [{ open: '08:00', close: '02:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 2:00',
		shifts: [{ open: '12:00', close: '02:00' }],
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
	'De lunes a sábado · abre a las 8:00 (sábado, a las 12:00) y cierra a las 2:00 los viernes y sábados · domingo cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Es una sola entrada y está disponible: el acceso para sillas de ruedas. La ficha no publica
 * ninguna otra, así que no se declara ni aseo, ni asientos, ni aparcamiento adaptados.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. En esta ficha las tres son de 5;
 * la tercera termina con un signo de exclamación sin abrir y se reproduce igual.
 */
export const reviews = [
	{
		text: 'Local muy acogedor y un trato exquisito de los camareros y del chef.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La cecina buenísima, muy recomendable, y el servicio excelente.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Totalmente recomendable el bocata de calamares, es exquisito!',
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
		question: '¿Dónde está Abaceria Tinta De Toro?',
		answer:
			'En el P.º de la Estación, 23, con código postal 23007, en Jaén (Andalucía). La ficha publica el plus code Q6F6+99 Jaén y las coordenadas 37.7734672, -3.7891136.',
	},
	{
		question: '¿Cuál es el horario de Abaceria Tinta De Toro?',
		answer:
			'Cierra los domingos. De lunes a jueves hay un turno de 8:00 a 18:00 y otro de 19:45 a 2:00; el viernes encadena de 8:00 a 2:00 y el sábado abre a las 12:00 y cierra a las 2:00. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como bar restaurante. Tiene 4,5 sobre 5 con 144 reseñas, y en las tres reseñas que destaca se habla del trato de los camareros y el chef, de la cecina y del bocata de calamares. En la descripción de su propia ficha se presenta como una abacería de cocina tradicional, tapas y raciones de temporada, con bodega de vinos y terraza.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no ofrece reserva en línea y esta web no permite reservar. La descripción que publica el propio local remite a la cuenta @tintadeto para información y reservas, y el teléfono publicado es el 681 03 31 55.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección P.º de la Estación, 23 y las coordenadas 37.7734672, -3.7891136. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6F6+99 Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica una única entrada de accesibilidad y está disponible: el acceso para sillas de ruedas. No publica aseo, asientos ni aparcamiento adaptados, así que no se declaran.',
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
		'Bar restaurante en el P.º de la Estación, 23 de Jaén, con tapas y raciones de temporada y terraza; cierra los domingos.',
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
	/* Sin `servesCuisine`: Google publica la categoría «Bar restaurante», que no declara cocina. */
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
