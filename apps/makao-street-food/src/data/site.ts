/**
 * Datos de Makao - Street Food (Camino los Mártires · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no muestra ningún distintivo junto al nombre y no publica precios, así que no se
 * reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://makao-street-food.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Makao - Street Food',
	shortName: 'Makao',
	/** Categoría que publica Google en esta ficha: «Restaurante especializado en comida ecléctica». */
	category: 'Restaurante especializado en comida ecléctica',
	categories: ['Restaurante especializado en comida ecléctica'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Cam. los Mártires» y no publica número
	 * de portal: aquí se desarrolla la abreviatura a «Camino», como el resto de abreviaturas del
	 * repositorio («C.» pasa a «Calle» y «Av.» a «Avenida»). El código postal 13005 y el municipio
	 * (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Camino los Mártires',
	postalCode: '13005',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 683 30 73 81',
	latitude: 38.9939101,
	longitude: -3.9218651,
	/** Plus code que publica la ficha. */
	plusCode: 'X3VH+H7 Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,3 sobre 5 con 842 reseñas). */
	rating: 4.3,
	reviewCount: 842,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo ni recortarlo.
 */
export const descripcionLocal =
	'La mejor comida callejera de cada rincón del mundo en pleno centro de Ciudad Real.';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Makao+-+Street+Food/@38.9939101,-3.9218651,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3de61c5bf95:0xb8358fc79b593899!8m2!3d38.9939101!4d-3.9218651!16s%2Fg%2F11tdrgcqbw?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJlb_FYd7Daw0RmThZm8ePNbg&hl=es';

export const phoneHref = 'tel:+34683307381';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre de
 * lunes a domingo menos el martes, con dos turnos miércoles y jueves, un cierre largo de madrugada
 * viernes y sábado (hasta la 1:30) y solo mediodía lunes y domingo.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 y el de la 1:30 como 01:30 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '13:00 – 17:00',
		shifts: [{ open: '13:00', close: '17:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '13:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 17:00 · 20:00 – 24:00',
		shifts: [
			{ open: '13:00', close: '17:00' },
			{ open: '20:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 1:30',
		shifts: [{ open: '13:00', close: '01:30' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 1:30',
		shifts: [{ open: '13:00', close: '01:30' }],
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
export const hoursSummary = 'Abre todos los días menos el martes';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados
 * para sillas de ruedas. La ficha no publica ninguna otra.
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
 * entre « ».
 */
export const reviews = [
	{
		text: 'Las quesadillas con panceta exquisitas y pedimos hamburguesas muy ricas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Comida y servicios perfectos, buen ambiente y camareros muy atentos y amables.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La comida está buenísima, el local muy guay y la camarera muy atenta.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios ni carta, así que ninguna respuesta los reproduce.
 */
export const faqs = [
	{
		question: '¿Dónde está Makao - Street Food?',
		answer:
			'En el Camino los Mártires, con código postal 13005, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3VH+H7 Ciudad Real y las coordenadas 38.9939101, -3.9218651.',
	},
	{
		question: '¿Cuál es el horario de Makao - Street Food?',
		answer:
			'La ficha publica un horario de lunes a domingo menos el martes, que está cerrado. Lunes y domingo abre de 13:00 a 17:00; miércoles y jueves, de 13:00 a 17:00 y de 20:00 a 24:00; y viernes y sábado, de 13:00 a 1:30. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante especializado en comida ecléctica, y en su propia descripción se presenta como la mejor comida callejera de cada rincón del mundo en pleno centro de Ciudad Real. Tiene 4,3 sobre 5 con 842 reseñas, y en las que destaca se habla de las quesadillas con panceta, las hamburguesas y el ambiente del local.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 683 30 73 81.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Camino los Mártires y las coordenadas 38.9939101, -3.9218651. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3VH+H7 Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Tiene algún distintivo en Google Maps?',
		answer:
			'La ficha no muestra ninguna etiqueta junto al nombre, así que esta web no reproduce ninguna. Para saber qué se sirve y a qué hora, lo mejor es llamar al 683 30 73 81.',
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
		'Restaurante de comida callejera de todo el mundo en el Camino los Mártires de Ciudad Real, abierto de lunes a domingo menos el martes.',
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
	/* «Comida ecléctica» sí nombra una cocina concreta: se traduce al español. */
	servesCuisine: ['Ecléctica'],
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
