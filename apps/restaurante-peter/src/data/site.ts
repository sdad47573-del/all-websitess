/**
 * Datos de Restaurante Peter (Avenida de la Marina Baixa, 6 · 03509 Benidorm · Alicante).
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
	siteUrl: 'https://restaurante-peter.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '10 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Peter',
	shortName: 'Peter',
	/** Categoría que publica Google en esta ficha: «Restaurante mediterráneo», la única. */
	category: 'Restaurante mediterráneo',
	categories: ['Restaurante mediterráneo'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «Av. de la Marina Baixa, 6»: aquí se
	 * desarrolla a «Avenida de la Marina Baixa, 6», como en el resto del repositorio.
	 */
	streetAddress: 'Avenida de la Marina Baixa, 6',
	postalCode: '03509',
	/**
	 * Google guarda el municipio truncado como «Cala De» (es el barrio de La Cala, en el límite de
	 * Benidorm y Finestrat). El plus code que publica la ficha se resuelve como «GRFM+WM Benidorm»,
	 * así que se publica Benidorm y se deja anotado el componente truncado para confirmarlo.
	 */
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 680 42 15 03',
	latitude: 38.5248127,
	longitude: -0.1657927,
	/** Plus code que publica la ficha. */
	plusCode: 'GRFM+WM Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,5 sobre 5 con 2.428 reseñas). */
	rating: 4.5,
	reviewCount: 2428,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin corregir su redacción ni su puntuación (conserva «10.00», «13,00» y «domigo»).
 */
export const descripcionLocal =
	'Horario de reservas de 10.00 a 13,00 de miércoles a domigo preferiblemente por WhatsApp';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Peter/@38.5248127,-0.1657927,17z/data=!3m1!4b1!4m6!3m5!1s0xd621adf070776ed:0x4398c57938932d33!8m2!3d38.5248127!4d-0.1657927!16s%2Fg%2F11bw673j76?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7XYHB98aYg0RMy2TOHnFmEM&hl=es';

export const phoneHref = 'tel:+34680421503';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 10 de octubre de 2026 cubre la semana completa: sirve comidas de 13:00 a 16:00 de
 * miércoles a domingo, y cierra los lunes y los martes.
 *
 * Los días cerrados no generan ninguna entrada en los datos estructurados (cinco especificaciones
 * en total).
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
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '13:00 – 16:00',
		shifts: [{ open: '13:00', close: '16:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary =
	'Abre de miércoles a domingo, de 13:00 a 16:00; los lunes y los martes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cuatro entradas: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como
 * disponibles, y el aparcamiento adaptado, como no disponible. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (la tercera repite «y y»). Dos son de
 * 5 sobre 5 y una de 2 sobre 5.
 */
export const reviews = [
	{
		text: 'El arroz estaba buenísimo, el marisco muy bueno, las frituras muy ricas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Tres entrantes exquisitos: croquetas, pescadito frito y ensalada con frutas.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los camareros trabajan a toda pastilla y y son educados y eficaces.',
		rating: 2,
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
		question: '¿Dónde está Restaurante Peter?',
		answer:
			'En la Avenida de la Marina Baixa, 6, con código postal 03509, en Benidorm (Alicante). La ficha publica el plus code GRFM+WM Benidorm y las coordenadas 38.5248127, -0.1657927.',
	},
	{
		question: '¿Cuál es el horario de Restaurante Peter?',
		answer:
			'La ficha publica servicio de comidas de 13:00 a 16:00 de miércoles a domingo, y cierra los lunes y los martes. Es el horario publicado en la ficha consultada el 10 de octubre de 2026, y conviene confirmar por teléfono o WhatsApp antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante mediterráneo, la única categoría que publica la ficha. Tiene 4,5 sobre 5 con 2.428 reseñas, y en las reseñas que destaca se habla del arroz, el marisco y las frituras, y de entrantes como croquetas, pescadito frito y ensalada con frutas.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La descripción del titular de la ficha indica que el horario de reservas es de 10:00 a 13:00 de miércoles a domingo, preferiblemente por WhatsApp. Esta web no permite reservar: el contacto publicado es el 680 42 15 03.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Avenida de la Marina Baixa, 6 y las coordenadas 38.5248127, -0.1657927. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRFM+WM Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cuatro entradas de accesibilidad: el acceso, el aseo y los asientos adaptados para sillas de ruedas figuran como disponibles, y el aparcamiento adaptado para sillas de ruedas, como no disponible. No publica ninguna otra.',
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
		'Restaurante mediterráneo en la Avenida de la Marina Baixa, 6 de Benidorm, con servicio de comidas de miércoles a domingo.',
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
	/*
	 * `servesCuisine` traduce la categoría que publica Google («Restaurante mediterráneo»), que sí
	 * declara una cocina.
	 */
	servesCuisine: ['Cocina mediterránea'],
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
