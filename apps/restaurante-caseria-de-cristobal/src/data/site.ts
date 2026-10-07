/**
 * Datos del Restaurante Casería de Cristóbal. (JA-3210, 88 · 23002 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, servicios de accesibilidad, el distintivo que
 * Google muestra junto al nombre y las reseñas destacadas.
 *
 * Aviso importante sobre el horario: esta ficha **no publica ningún horario** (en la respuesta del
 * endpoint, `info[203]` viene a `null` y no aparece ninguna hora en todo el payload), así que la web
 * no muestra ninguna tabla ni declara horarios en los datos estructurados. Solo invita a confirmarlo
 * por teléfono.
 *
 * La ficha tampoco publica web propia, perfiles sociales, carta ni descripción del local.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-caseria-de-cristobal.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante Casería de Cristóbal',
	shortName: 'Casería de Cristóbal',
	/** Única categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante'],
	/** Dirección publicada en la ficha, tal cual la escribe Google (una carretera y su punto). */
	streetAddress: 'JA-3210, 88',
	postalCode: '23002',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (fijo). */
	phone: '+34 953 19 03 00',
	latitude: 37.7459689,
	longitude: -3.7907469,
	/** Plus code que publica la ficha. */
	plusCode: 'P6W5+9P Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 184 reseñas). */
	rating: 4.6,
	reviewCount: 184,
	site: site.siteUrl,
} as const;

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * En otras fichas ese hueco va vacío o con «Se admiten perros»; aquí publica «Brunch». Se recoge
 * como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+Caser%C3%ADa+de+Crist%C3%B3bal/@37.7459689,-3.7907469,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd9d65cb841f1:0x1700af19fe69c9d5!8m2!3d37.7459689!4d-3.7907469!16s%2Fg%2F11c1p949h6?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ8UG4XNbZbQ0R1clp_hmvABc&hl=es';

export const phoneHref = 'tel:+34953190300';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/** Un tramo horario en formato de 24 horas. */
type Turno = { open: string; close: string };

/** Un día de la semana con su horario publicado. */
type DiaHorario = {
	day: string;
	service: string;
	shifts: readonly Turno[];
	dayOfWeek: string;
};

/**
 * Horario semanal: **vacío a propósito**.
 *
 * La ficha de Google Maps de este restaurante no publica ningún horario (en la respuesta del
 * endpoint `info[203]` viene a `null` y no hay ninguna hora en todo el payload). Por eso la web no
 * enseña ninguna tabla de horarios y los datos estructurados no declaran
 * `openingHoursSpecification`: inventar un horario sería publicar un dato falso.
 *
 * La sección de horario de la portada, cuando esta lista está vacía, explica que la ficha no
 * publica horario y remite al teléfono del local.
 *
 * El tipo explícito es necesario precisamente porque la lista está vacía: sin él TypeScript
 * inferiría `never[]` y el `flatMap` de más abajo no compilaría. Si algún día se rellena, cada
 * entrada debe seguir la forma `{ day, service, shifts, dayOfWeek }`.
 */
export const hours: readonly DiaHorario[] = [];

/** Resumen del horario para la cabecera y las respuestas rápidas (la ficha no lo publica). */
export const hoursSummary = 'Horario no publicado en la ficha · confírmalo por teléfono';

/**
 * Servicios de accesibilidad que publica la ficha: el acceso, el aseo y los asientos adaptados para
 * sillas de ruedas están disponibles. La ficha no publica ningún dato de aparcamiento adaptado, así
 * que no se declara ninguno.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Son las tres que trae la respuesta de la ficha en la fecha de consulta y se citan tal cual, sin
 * corregir su redacción ni su puntuación. No todas son de 5: la ficha destaca una de 4 y se
 * reproduce igual.
 */
export const reviews = [
	{
		text: 'Un sitio agradable, buenos profesionales y atención exquisita.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Gema la Camarera que nos atendio, atenta, simpática y súper amable!',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Buena cocina, en concreto el bacalao es suave, delicioso y muy recomendable.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta, precios ni horario, así que ninguna respuesta los inventa.
 */
export const faqs = [
	{
		question: '¿Dónde está el Restaurante Casería de Cristóbal?',
		answer:
			'En la JA-3210, 88, con código postal 23002, en Jaén (Andalucía), en la carretera. La ficha publica el plus code P6W5+9P Jaén y las coordenadas 37.7459689, -3.7907469.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha de Google Maps de este restaurante no publica ningún horario, así que esta web no lo inventa: no hay tabla ni horario declarado. Lo más fiable es llamar al 953 19 03 00 o mirar la ficha de Google Maps, donde el horario puede aparecer actualizado.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica solo como restaurante, con 4,6 sobre 5 y 184 reseñas. La ficha no publica la carta, pero en las reseñas que destaca se habla de buena cocina, de un bacalao suave y del trato del personal.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch»?',
		answer:
			'Google muestra la etiqueta «Brunch» junto al nombre en la ficha. Es el único distintivo de ese tipo que publica y esta web no lo amplía ni lo interpreta: para cualquier detalle, conviene llamar al 953 19 03 00.',
	},
	{
		question: '¿Hace falta reservar?',
		answer:
			'La ficha no publica ningún dato sobre reservas, así que no se puede confirmar aquí. Para preguntar por mesas o disponibilidad, lo más directo es llamar al 953 19 03 00.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección JA-3210, 88 y las coordenadas 37.7459689, -3.7907469. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code P6W5+9P Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha marca como disponibles el acceso, el aseo y los asientos adaptados para sillas de ruedas. No publica ningún dato sobre aparcamiento adaptado.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 7 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

/** Horarios en formato schema.org: solo se generan si la ficha publicara algún turno (aquí, ninguno). */
const openingHoursSpecification = hours.flatMap((item) =>
	item.shifts.map((shift) => ({
		'@type': 'OpeningHoursSpecification' as const,
		dayOfWeek: item.dayOfWeek,
		opens: shift.open,
		closes: shift.close,
	})),
);

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Restaurante en la JA-3210, 88 de Jaén, con 4,6 sobre 5 y 184 reseñas en Google Maps.',
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
	/* Sin `servesCuisine`: Google solo publica la categoría «Restaurante» y no declara una cocina. */
	/* Sin `priceRange`: la ficha no publica ningún rango de precios y no se inventa uno. */
	/* Sin `sameAs`: la ficha no publica web propia ni perfiles sociales. */
	/* Sin `openingHoursSpecification`: la ficha no publica horario (la lista `hours` está vacía). */
	...(openingHoursSpecification.length ? { openingHoursSpecification } : {}),
	aggregateRating: {
		'@type': 'AggregateRating',
		ratingValue: business.rating,
		reviewCount: business.reviewCount,
		bestRating: 5,
	},
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
