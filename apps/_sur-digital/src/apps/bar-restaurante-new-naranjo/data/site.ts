/**
 * Datos de Bar - Restaurante New Naranjo (Av. de Andalucía · 03502 Benidorm).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * La ficha no publica carta ni precios, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-new-naranjo',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps, con sus guiones. */
	name: 'Bar - Restaurante New Naranjo',
	shortName: 'New Naranjo',
	/** Categoría que publica Google en esta ficha: «Restaurante», la única. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/**
	 * Dirección publicada en la ficha. Google solo publica la avenida, sin número, y con la
	 * abreviatura «Av.»: se reproduce abreviada, como en otras webs del repositorio que conservan
	 * las abreviaturas de la ficha.
	 */
	streetAddress: 'Av. de Andalucía',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 611 57 58 97',
	latitude: 38.5429977,
	longitude: -0.1251938,
	/** Plus code que publica la ficha. */
	plusCode: 'GVVF+5W Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,2 sobre 5 con 104 reseñas). */
	rating: 4.2,
	reviewCount: 104,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregirlo: mantiene el espacio antes de la coma, la falta de espacio tras «niños,»
 * y la ortografía del original («footbolin», «consumicion»).
 */
export const descripcionLocal =
	'Dispone Desayunos, Almuerzo comida y cena , tenemos un parque para los niños,Billar footbolin y podéis traer la comida y hacer la Barbacoa y paga la consumicion en el establecimiento';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bar+-+Restaurante+New+Naranjo/@38.5429977,-0.1251938,17z/data=!3m1!4b1!4m6!3m5!1s0xd6205059b96dd3b:0x862e224d85289167!8m2!3d38.5429977!4d-0.1251938!16s%2Fg%2F11kn1l1gyg?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJO92WmwUFYg0RZ5EohU0iLoY&hl=es';

export const phoneHref = 'tel:+34611575897';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. La ficha
 * publica el mismo tramo los siete días de la semana: de 11:00 a 1:00 de la madrugada, es decir,
 * un horario continuado que cruza la medianoche.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a la 1:00 del día siguiente se escribe como 01:00 en los datos estructurados.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Monday',
	},
	{
		day: 'Martes',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 01:00',
		shifts: [{ open: '11:00', close: '01:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'Todos los días de 11:00 a 1:00 de la madrugada';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas, y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la primera encadena «llendo» con
 * la ortografía del original). Dos son de 5 sobre 5 y una de 4 sobre 5.
 */
export const reviews = [
	{
		text: 'Buen menú para llevar, yo fui por una amiga y me gustó y sigo llendo',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Un kebab con una gran terraza y una parte con juguetes para niños.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Kebabs ricos y baratos, muy agradable',
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
		question: '¿Dónde está Bar - Restaurante New Naranjo?',
		answer:
			'En la Av. de Andalucía, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GVVF+5W Benidorm y las coordenadas 38.5429977, -0.1251938. Google no publica el número de portal.',
	},
	{
		question: '¿Cuál es el horario de Bar - Restaurante New Naranjo?',
		answer:
			'La ficha publica el mismo horario los siete días de la semana: de 11:00 a 1:00 de la madrugada, un tramo continuado que cruza la medianoche. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante, sin un tipo de cocina concreto. Tiene 4,2 sobre 5 con 104 reseñas, y en las reseñas que destaca se habla de un buen menú para llevar, de un kebab con una gran terraza y una parte con juguetes para niños, y de kebabs ricos y baratos.',
	},
	{
		question: '¿Hay terraza y sitio para los niños?',
		answer:
			'Es lo que publican la ficha y sus reseñas, no una comprobación propia: el titular cuenta en su descripción que hay un parque para los niños, billar y futbolín, y una de las reseñas destacadas habla de una gran terraza y de una parte con juguetes para niños. Para saber qué está disponible hoy, lo mejor es llamar al 611 57 58 97.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 611 57 58 97.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Andalucía y las coordenadas 38.5429977, -0.1251938. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GVVF+5W Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
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
		'Bar restaurante en la Av. de Andalucía de Benidorm, con horario continuado de 11:00 a 1:00 todos los días.',
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
