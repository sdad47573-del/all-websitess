/**
 * Datos de Bistrot Senséô (Av. Vicente Llorca Alós, 13 · 03502 Benidorm, Alicante).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción del titular y las reseñas destacadas.
 *
 * Es la primera ficha de este grupo de webs cuya descripción del titular publica un precio («menu à
 * partir de 15€»). Se reproduce literal, porque es lo que el negocio escribe en su perfil; en los
 * datos estructurados no se añade `priceRange`, porque la ficha no publica un rango de precios del
 * establecimiento, solo el precio de partida del menú dentro de ese texto.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://bistrot-senseo.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Bistrot Senséô',
	shortName: 'Senséô',
	/** Categoría que publica Google en esta ficha: «Restaurante francés», la única. */
	category: 'Restaurante francés',
	categories: ['Restaurante francés'],
	/**
	 * Dirección publicada en la ficha: Avenida Vicente Llorca Alós, 13 (03502 Benidorm).
	 *
	 * La dirección formateada que publica Google es «Av. Vicente Llorca Alós, 13, 03502 Benidorm,
	 * Alicante». Además, los datos del lugar guardan un componente «Planta G» que no forma parte de
	 * esa dirección formateada: se recoge en la web como dato aparte y se advierte en las preguntas
	 * frecuentes, sin meterlo dentro de la calle.
	 */
	streetAddress: 'Av. Vicente Llorca Alós, 13',
	/** Componente de planta que Google guarda en los datos del lugar, fuera de la dirección formateada. */
	planta: 'Planta G',
	postalCode: '03502',
	city: 'Benidorm',
	province: 'Alicante',
	region: 'Comunidad Valenciana',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 614 18 78 04',
	latitude: 38.5335454,
	longitude: -0.1562864,
	/** Plus code que publica la ficha. */
	plusCode: 'GRMV+CF Benidorm',
	/** Valoración de la ficha en la fecha de consulta (4,9 sobre 5 con 106 reseñas). */
	rating: 4.9,
	reviewCount: 106,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal, sin traducirlo, sin corregirlo y conservando sus tres líneas. Está escrita en francés y
 * menciona el precio de partida del menú («menu à partir de 15€»), la terraza con vistas al mar y el
 * bar de cócteles. La portada lo pinta respetando los saltos de línea con `white-space: pre-line`.
 */
export const descripcionLocal =
	'Cuisine française et méditerranéenne , spécialités française, spécialités des montagnes à base de fromages français, menu à partir de 15€\nTerrasse vue mer\nBar à cocktails';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Bistrot+Sens%C3%A9%C3%B4/@38.5335454,-0.1562864,17z/data=!3m1!4b1!4m6!3m5!1s0xd621b000ad20c1f:0x220d6b9baee62be1!8m2!3d38.5335454!4d-0.1562864!16s%2Fg%2F11yp5b66mb?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJHwzSCgAbYg0R4SvmrptrDSI&hl=es';

export const phoneHref = 'tel:+34614187804';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 (viernes) cubre del viernes 9 al jueves 15 de octubre. El
 * local mantiene un tramo continuo de 11:00 a 23:00 todos los días menos el martes, que cierra.
 *
 * La ficha trae dos marcas de festivo, y no son iguales:
 * - El viernes 9, «Día de la Comunidad Valenciana», va con el aviso de que el horario podría ser
 *   diferente.
 * - El lunes 12 publica directamente el horario de la Fiesta Nacional de España (11:00 – 23:00),
 *   que es el mismo tramo, pero es el horario de ese festivo y no el de un lunes cualquiera.
 */
export const hours = [
	{
		day: 'Lunes',
		service: '11:00 – 23:00',
		shifts: [{ open: '11:00', close: '23:00' }],
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
		service: '11:00 – 23:00',
		shifts: [{ open: '11:00', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '11:00 – 23:00',
		shifts: [{ open: '11:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '11:00 – 23:00',
		shifts: [{ open: '11:00', close: '23:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '11:00 – 23:00',
		shifts: [{ open: '11:00', close: '23:00' }],
		dayOfWeek: 'Saturday',
	},
	{
		day: 'Domingo',
		service: '11:00 – 23:00',
		shifts: [{ open: '11:00', close: '23:00' }],
		dayOfWeek: 'Sunday',
	},
] as const;

/** Resumen del horario para la cabecera y las respuestas rápidas. */
export const hoursSummary = 'De 11:00 a 23:00 todos los días menos el martes, que cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. No publica la entrada del aseo ni ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación. Las tres son de 5 sobre 5. Google
 * guarda cada extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña
 * entre « » y no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Comida muy rica, buen ambiente y mucha calidez en la atención.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Los dueños son increíbles súper majos con un trato muy agradable.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Recomendamos y volveremos sin duda.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La única referencia a un precio está en la descripción del titular («menu à partir de 15€») y se
 * reproduce ahí, dentro del texto del negocio; no se amplía a un rango de precios del local.
 */
export const faqs = [
	{
		question: '¿Dónde está Bistrot Senséô?',
		answer:
			'En la Av. Vicente Llorca Alós, 13, con código postal 03502, en Benidorm (Alicante). La ficha publica el plus code GRMV+CF Benidorm y las coordenadas 38.5335454, -0.1562864. Los datos del lugar guardan además un componente «Planta G» que no forma parte de la dirección formateada; conviene confirmarlo con el local.',
	},
	{
		question: '¿Cuál es el horario de Bistrot Senséô?',
		answer:
			'La ficha publica un tramo continuo de 11:00 a 23:00 todos los días menos el martes, que cierra. Es el horario de la ficha consultada el 9 de octubre de 2026, con dos marcas de festivo: el viernes 9, Día de la Comunidad Valenciana, con el aviso de que el horario podría ser diferente, y el lunes 12, del que publica el horario de la Fiesta Nacional de España. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante francés. Tiene 4,9 sobre 5 con 106 reseñas, y el propio local describe su cocina como francesa y mediterránea, con especialidades francesas y de montaña a base de quesos franceses. En las reseñas que destaca se habla de la comida, del ambiente y de la calidez en la atención de los dueños.',
	},
	{
		question: '¿Cuánto cuesta comer?',
		answer:
			'La ficha no publica una carta ni un rango de precios. Lo único que publica es la descripción del titular, donde el propio local escribe «menu à partir de 15€». Ese precio se reproduce dentro de la descripción, tal cual, y esta web no lo amplía ni lo convierte en una tarifa general. Para saber el menú y el precio de hoy hay que llamar al 614 18 78 04.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 614 18 78 04.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. Vicente Llorca Alós, 13 y las coordenadas 38.5335454, -0.1562864. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code GRMV+CF Benidorm.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica la entrada del aseo ni ninguna otra.',
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
		'Restaurante francés y mediterráneo en la Av. Vicente Llorca Alós, 13 de Benidorm, con terraza con vistas al mar, bar de cócteles y horario de 11:00 a 23:00 salvo el martes.',
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
	/* «Francesa» traduce la única categoría que publica Google: «Restaurante francés». */
	servesCuisine: ['Francesa', 'Mediterránea'],
	/*
	 * Sin `priceRange`: la ficha no publica un rango de precios del local. El único precio que
	 * aparece está dentro de la descripción del titular («menu à partir de 15€») y se reproduce ahí.
	 */
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
