/**
 * Datos de Restaurante La Purísima (Pl. San Francisco, 1 · 21410 Isla Cristina, Huelva).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 10 de octubre de 2026 desde
 * el endpoint de vista previa de la propia ficha: nombre, distintivo, dirección, teléfono,
 * categorías, descripción del titular, valoración con número de reseñas, coordenadas, plus code,
 * horario semanal, servicios de accesibilidad y las reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguno de ellos.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-la-purisima',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante La Purísima',
	shortName: 'La Purísima',
	/** Categoría principal: la primera de las cuatro que publica Google. */
	category: 'Restaurante',
	/** Las cuatro categorías de la ficha, en su orden. */
	categories: ['Restaurante', 'Restaurante andaluz', 'Brasería', 'Arrocería'],
	/** Dirección postal publicada en la ficha. */
	streetAddress: 'Pl. San Francisco, 1',
	postalCode: '21410',
	city: 'Isla Cristina',
	province: 'Huelva',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 619 64 74 68',
	latitude: 37.2037157,
	longitude: -7.3272477,
	/** Plus code que publica la ficha. */
	plusCode: '6M3F+F4 Isla Cristina',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 515 reseñas). */
	rating: 4.5,
	reviewCount: 515,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/**
 * Línea que la ficha publica **por delante de la dirección postal**, dentro del mismo bloque de
 * dirección: «A UN MINUTO DE LA LONJA .local climatizado».
 *
 * No es una calle ni un número, es texto del titular (dónde está y que el local está climatizado,
 * con el espacio suelto antes de «.local» tal como lo publica), así que se reproduce aparte y **no
 * se cuela como `streetAddress`** ni en los datos estructurados.
 */
export const notaLocal = 'A UN MINUTO DE LA LONJA .local climatizado';

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce **literal**, sin corregirla ni ampliarla, y va atribuida a la ficha: habla de platos
 * caseros, carnes a la brasa, guisos marineros y de su personal. Es un único párrafo.
 */
export const descripcionLocal =
	'Restaurante La Purísima, el auténtico paraíso gastronómico de Isla Cristina. Ofrecemos una amplia selección de platos caseros elaborados con pasión y cuidado. Cada receta es un homenaje a las tradiciones culinarias de la región y a la riqueza de los sabores locales. Si eres un amante de la carne a la brasa, te maravillarás con las mejores carnes para que disfrutes de su jugosidad y sabor inigualable. Para los aficionados a los guisos marineros, hemos preparado una selección de recetas que te transportarán a las raíces pesqueras de Isla Cristina. Cada plato está elaborado con ingredientes frescos y de la más alta calidad, garantizando una experiencia excepcional. Nuestro personal amable y atento te hará sentir como en casa. ¡Te esperamos!';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+La+Pur%C3%ADsima/@37.2037157,-7.3272477,17z/data=!3m1!4b1!4m6!3m5!1s0xd1024f47d531253:0x3a2c5755a7aa6d6!8m2!3d37.2037157!4d-7.3272477!16s%2Fg%2F11f120ymy7?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJUxJTffQkEA0R1qZ6WnXFogM&hl=es';

export const phoneHref = 'tel:+34619647468';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre del sábado 10 al viernes 16 de octubre. El local
 * cierra de lunes a miércoles; de jueves a sábado sirve mediodía y noche, y el domingo solo
 * mediodía.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
 *
 * El turno de noche se cierra a las 24:00, que en los datos estructurados se escribe como cierre a
 * las 00:00.
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
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: 'Cerrado',
		shifts: [],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '12:00 – 16:00 · 21:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '21:00', close: '00:00' },
		],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '12:00 – 16:00 · 21:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '21:00', close: '00:00' },
		],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 16:00 · 21:00 – 24:00',
		shifts: [
			{ open: '12:00', close: '16:00' },
			{ open: '21:00', close: '00:00' },
		],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '12:00 – 16:00',
		shifts: [{ open: '12:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Cierra de lunes a miércoles; de jueves a sábado abre mediodía y noche, y el domingo solo mediodía';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Aquí publica **cinco** entradas (dos más que las otras fichas del repositorio), y **solo las tres
 * primeras figuran como disponibles**: el acceso, el aseo y los asientos adaptados para sillas de
 * ruedas. El **aparcamiento** y el **bucle magnético** figuran expresamente como no disponibles.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Extractos de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluido el espacio suelto antes
 * de la coma de la segunda). La ficha las presenta entrecomilladas; esas comillas son del propio
 * Google y no forman parte del texto, así que no se reproducen. Las puntuaciones son 5, 3 y 5.
 */
export const reviews = [
	{
		text: 'Pedimos unas gambas tigre al ajillo, bacalao, morrillo de atún y calamares.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buen sitio con tapas muy ricas , no tienen cerveza sin gluten',
		rating: 3,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los camareros encantadores y rápidos está en medio de una plaza muy bonita.',
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
		question: '¿Dónde está Restaurante La Purísima?',
		answer:
			'En la Pl. San Francisco, 1, con código postal 21410, en Isla Cristina (Huelva). La ficha publica el plus code 6M3F+F4 Isla Cristina y las coordenadas 37.2037157, -7.3272477, y añade por delante de la dirección la línea «A UN MINUTO DE LA LONJA .local climatizado», que es texto del titular.',
	},
	{
		question: '¿Cuál es el horario de Restaurante La Purísima?',
		answer:
			'La ficha publica cierre de lunes a miércoles; de jueves a sábado abre de 12:00 a 16:00 y de 21:00 a 24:00, y el domingo solo de 12:00 a 16:00. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica a la vez como restaurante, restaurante andaluz, brasería y arrocería. En su propia descripción en la ficha habla de platos caseros, de carnes a la brasa y de guisos marineros. Tiene 4,5 sobre 5 con 515 reseñas, y en las que destaca se citan unas gambas tigre al ajillo, bacalao, morrillo de atún y calamares.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es el distintivo que Google muestra junto al nombre del local en la ficha, y aquí se recoge tal cual: «Brunch». La ficha no explica con más detalle a qué se refiere, así que esta web no lo interpreta.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. El teléfono publicado es el 619 64 74 68.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Pl. San Francisco, 1 y las coordenadas 37.2037157, -7.3272477. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code 6M3F+F4 Isla Cristina.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cinco entradas de accesibilidad: figuran como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas, y como no disponibles el aparcamiento adaptado y el bucle magnético asistencial.',
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
		'Restaurante andaluz y brasería en la Pl. San Francisco, 1 de Isla Cristina, con platos caseros, carnes a la brasa y guisos marineros; cierra de lunes a miércoles.',
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
	/* Se traducen las tres categorías que declaran cocina: andaluza, brasería y arrocería. */
	servesCuisine: ['Cocina andaluza', 'Brasería', 'Arrocería'],
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
