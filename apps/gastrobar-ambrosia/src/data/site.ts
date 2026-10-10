/**
 * Datos de GASTROBAR AMBROSÍA (Av. Beniardá, 31 · 03502 Benidorm).
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
	siteUrl: 'https://gastrobar-ambrosia.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, en mayúsculas. */
	name: 'GASTROBAR AMBROSÍA',
	shortName: 'Ambrosía',
	/** Categoría que publica Google en esta ficha: «Bar restaurante», la única. */
	category: 'Bar restaurante',
	categories: ['Bar restaurante'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. Beniardá, 31»: aquí se reproduce
	 * tal cual, como en otras webs del repositorio que conservan las abreviaturas de la ficha.
	 */
	streetAddress: 'Av. Beniardá, 31',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 611 09 52 86',
	latitude: 38.545581,
	longitude: -0.1331852,
	/** Plus code que publica la ficha. */
	plusCode: 'GVW8+6P Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 261 reseñas). */
	rating: 4.5,
	reviewCount: 261,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo: conserva los saltos de línea del original (aquí como `\n`), la falta de
 * espacio tras «Almuerzos.» y los espacios antes de los puntos finales («caseros .»).
 */
export const descripcionLocal =
	'Se sirven comida mediterránea desayunos.\nAlmuerzos.y cenas.\nMenu del dia caseros .\nVariedad en postres caseros .';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/GASTROBAR+AMBROS%C3%8DA/@38.545581,-0.1331852,17z/data=!3m1!4b1!4m6!3m5!1s0xd62053d4002d6c7:0x89659d134ff8ec19!8m2!3d38.545581!4d-0.1331852!16s%2Fg%2F11sc_34150?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJx9YCQD0FYg0RGez4TxOdZYk&hl=es';

export const phoneHref = 'tel:+34611095286';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. La ficha
 * publica el mismo tramo de 8:00 a 23:00 de sábado a miércoles y el viernes, y el jueves cierra.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '08:00 – 23:00',
		shifts: [{ open: '08:00', close: '23:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '08:00 – 23:00',
		shifts: [{ open: '08:00', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '08:00 – 23:00',
		shifts: [{ open: '08:00', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '08:00 – 23:00',
		shifts: [{ open: '08:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '08:00 – 23:00',
		shifts: [{ open: '08:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '08:00 – 23:00',
		shifts: [{ open: '08:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 8:00 a 23:00 (el jueves cierra)';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son tres entradas, y las tres figuran como disponibles: el acceso, el aseo y los asientos
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
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera corta la enumeración
 * con unos puntos suspensivos). Las tres son de 5 sobre 5.
 */
export const reviews = [
	{
		text: 'Ensaladilla rusa casera, paella, escalope ... todo buenísimo y buena cantidad.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Muy buena comida y a muy buen precio, sus arroces están muy buenos, repetiremos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los camareros muy serviciales y rápidos.',
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
		question: '¿Dónde está GASTROBAR AMBROSÍA?',
		answer:
			'En la Av. Beniardá, 31, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GVW8+6P Benidorm y las coordenadas 38.545581, -0.1331852.',
	},
	{
		question: '¿Cuál es el horario de GASTROBAR AMBROSÍA?',
		answer:
			'La ficha publica un horario continuado de 8:00 a 23:00 de sábado a miércoles y el viernes, y el jueves cerrado. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como bar restaurante, sin un tipo de cocina concreto. El titular cuenta en su ficha que sirve comida mediterránea, desayunos, almuerzos y cenas, menú del día casero y variedad de postres caseros. Tiene 4,5 sobre 5 con 261 reseñas, y en las reseñas que destaca se habla de ensaladilla rusa casera, paella y escalope, de arroces y buen precio, y de un servicio servicial y rápido.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 611 09 52 86.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. Beniardá, 31 y las coordenadas 38.545581, -0.1331852. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVW8+6P Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica tres entradas de accesibilidad y las tres figuran como disponibles: el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 611 09 52 86.',
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
		'Bar restaurante en la Av. Beniardá, 31 de Benidorm, con comida mediterránea, menú del día casero y postres caseros.',
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
	/* Sin `servesCuisine`: Google publica un tipo de establecimiento, no una cocina concreta. */
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
