/**
 * Datos del Restaurante La Marisqueria (Calle Sagrado Corazón de Jesús, 6 · 23005 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, distintivo, descripción del titular, servicios de
 * accesibilidad, horario semanal y las reseñas destacadas.
 *
 * La ficha no publica web propia, perfiles sociales, carta ni precios, así que no se reproduce
 * ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-marisqueria',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/**
	 * Nombre tal como lo publica la ficha de Google Maps: así, **sin tilde** en «Marisqueria».
	 * La descripción del titular sí escribe «La Marisquería», y esa diferencia se respeta.
	 */
	name: 'Restaurante La Marisqueria',
	shortName: 'La Marisqueria',
	/** Primera categoría que publica Google, la principal. */
	category: 'Restaurante',
	/** Las dos categorías que publica la ficha, en su orden. */
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha, con la abreviatura «C.» desarrollada a «Calle» como en la
	 * mayoría de webs del repositorio.
	 */
	streetAddress: 'Calle Sagrado Corazón de Jesús, 6',
	postalCode: '23005',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (fijo). */
	phone: '+34 953 27 14 14',
	latitude: 37.7757761,
	longitude: -3.7990144,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6G2+89 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,3 con 1007 reseñas). */
	rating: 4.3,
	reviewCount: 1007,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular («descripción del local») tal como la escribe el negocio en su perfil.
 *
 * Se reproduce **literal**, sin corregir su puntuación ni su redacción. Es la única web del
 * repositorio, junto con las otras trece que también la tienen, que muestra este texto: la ficha de
 * las demás viene vacía.
 *
 * Ojo: aquí el negocio escribe «La Marisquería» con tilde, mientras que el nombre de la ficha es
 * «La Marisqueria» sin ella. No se unifica ninguna de las dos.
 */
export const descripcionLocal =
	'Restaurante La Marisquería, en Jaén. Especializados en ricos y deliciosos platos de pescados y mariscos, paellas, caldosos. Ven y disfruta de las exquisitas especialidades de la casa, que te harán repetir.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Marisqueria/@37.7757761,-3.7990144,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd71136640b73:0x80f482432503b4b3!8m2!3d37.7757761!4d-3.7990144!16s%2Fg%2F1trszc0s?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJcwtkNhHXbQ0Rs7QDJUOC9IA&hl=es';

export const phoneHref = 'tel:+34953271414';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local cierra
 * el lunes y abre de martes a sábado en dos turnos: mediodía (13:00 a 18:00) y cena (desde las
 * 20:00 hasta medianoche). El domingo solo sirve el mediodía, de 13:00 a 17:00.
 *
 * El lunes 12, Fiesta Nacional de España, aparece cerrado con el aviso de que el horario podría ser
 * diferente, pero el lunes ya cierra el resto del año, así que el aviso no cambia la tabla.
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
		service: '13:00 – 18:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 18:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 18:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 18:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 18:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '18:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'De martes a sábado: 13:00–18:00 y 20:00–24:00; domingo: 13:00–17:00; lunes: cerrado';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Publica cuatro entradas: el acceso, el aseo y los asientos adaptados para sillas de ruedas
 * figuran como disponibles, y el aparcamiento adaptado como no disponible.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación (la segunda lleva un espacio antes de la coma y termina en
 * puntos suspensivos, y así se reproduce). Google devuelve cada reseña envuelta en comillas rectas;
 * aquí se quitan porque son el delimitador del propio campo y no forman parte del texto.
 */
export const reviews = [
	{
		text: 'Buen trato, buena cocina, buen marisco y muy buen pescadito frito.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Rápidos atentos ,buena comida de calidad y cerveza fresquita...',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Volveré para probar el arroz que es por encargo y me he quedado con las ganas.',
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
		question: '¿Dónde está el Restaurante La Marisqueria?',
		answer:
			'En la Calle Sagrado Corazón de Jesús, 6, con código postal 23005, en Jaén (Andalucía). La ficha publica el plus code Q6G2+89 Jaén y las coordenadas 37.7757761, -3.7990144.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha lo da abierto de martes a sábado en dos turnos: de 13:00 a 18:00 y de 20:00 a 24:00. El domingo solo abre de 13:00 a 17:00 y el lunes cierra. Es el horario publicado en la ficha consultada el 9 de octubre de 2026; conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de cocina hace?',
		answer:
			'Google lo clasifica como restaurante y como restaurante mediterráneo, que son las dos únicas categorías que publica la ficha. En su propia descripción dice estar especializado en platos de pescados y mariscos, paellas y caldosos. Tiene 4,3 sobre 5 con 1007 reseñas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica ningún sistema de reservas. Esta web no permite reservar: para preguntar por una mesa hay que llamar al 953 27 14 14.',
	},
	{
		question: '¿Qué es el arroz por encargo del que hablan las reseñas?',
		answer:
			'Aparece mencionado en una de las reseñas que destaca la ficha, que dice que volvería a probarlo. La ficha no publica carta ni condiciones de encargo, así que aquí no se añade nada más: para saber cómo funciona hay que preguntar al restaurante.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado como no disponible.',
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
		'Restaurante y restaurante mediterráneo en la Calle Sagrado Corazón de Jesús, 6 de Jaén, especializado en pescados y mariscos. Abre de martes a sábado en dos turnos y cierra los lunes.',
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
	/**
	 * Traduce a cocina la segunda categoría que publica Google («Restaurante mediterráneo»), como
	 * hacen las demás webs del repositorio con esa misma pareja de categorías. No se declara ninguna
	 * cocina más.
	 */
	servesCuisine: ['Mediterránea'],
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
