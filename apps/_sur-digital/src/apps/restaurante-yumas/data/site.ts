/**
 * Datos del Restaurante Yuma's. (Av. de Andalucía, 74 · 23006 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 7 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, servicios de accesibilidad y reseñas destacadas.
 *
 * Aviso importante sobre el horario: esta ficha **no publica ningún horario**, así que la web no
 * muestra ninguna tabla ni declara horarios en los datos estructurados. Solo invita a confirmarlo
 * por teléfono.
 *
 * La ficha tampoco publica web propia, perfiles sociales, carta ni descripción del local.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/restaurante-yumas',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '7 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: "Restaurante Yuma's",
	shortName: "Yuma's",
	/** Primera categoría que publica Google, sin añadir ninguna que no aparezca. */
	category: 'Restaurante',
	categories: ['Restaurante', 'Restaurante mediterráneo'],
	/** Dirección publicada en la ficha, con la abreviatura «Av.» que usa Google. */
	streetAddress: 'Av. de Andalucía, 74',
	postalCode: '23006',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (fijo). */
	phone: '+34 953 22 82 73',
	latitude: 37.7786114,
	longitude: -3.8049623,
	/** Plus code que publica la ficha. */
	plusCode: 'Q5HW+C2 Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,6 con 247 reseñas). */
	rating: 4.6,
	reviewCount: 247,
	site: site.siteUrl,
} as const;

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	"https://www.google.com/maps/place/Restaurante+Yuma's/@37.7786114,-3.8049623,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd74ffbccaced:0x595a28ae72a83dce!8m2!3d37.7786114!4d-3.8049623!16s%2Fg%2F11fhz1_v5v?hl=es";

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ7azM-0_XbQ0Rzj2ocq4oWlk&hl=es';

export const phoneHref = 'tel:+34953228273';

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
 * endpoint `info[203]` viene a `null`). Tampoco aparece en los datos del negocio. Por eso la web no
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
 * corregir su redacción ni su puntuación.
 */
export const reviews = [
	{
		text: 'Ambiente familiar, buen servicio, buena comida y buen trato',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'La comida es buenísima y los camareros muy atentos.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Bocadillos estupendos y muy bien de precio al igual que los platos combinados.',
		rating: 4,
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
		question: "¿Dónde está el Restaurante Yuma's?",
		answer:
			'En la Av. de Andalucía, 74, con código postal 23006, en Jaén (Andalucía). La ficha publica el plus code Q5HW+C2 Jaén y las coordenadas 37.7786114, -3.8049623.',
	},
	{
		question: '¿Cuál es su horario?',
		answer:
			'La ficha de Google Maps de este restaurante no publica ningún horario, así que esta web no lo inventa: no hay tabla ni horario declarado. Lo más fiable es llamar al 953 22 82 73 o mirar la ficha de Google Maps, donde el horario puede aparecer actualizado.',
	},
	{
		question: '¿Qué tipo de local es?',
		answer:
			'Google lo clasifica como restaurante y restaurante mediterráneo, con 4,6 sobre 5 y 247 reseñas. La ficha no publica la carta, pero en las reseñas que destaca se habla de comida, de buen trato y de bocadillos y platos combinados.',
	},
	{
		question: '¿Hace falta reservar?',
		answer:
			'La ficha no publica ningún dato sobre reservas, así que no se puede confirmar aquí. Para preguntar por mesas o disponibilidad, lo más directo es llamar al 953 22 82 73.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Av. de Andalucía, 74 y las coordenadas 37.7786114, -3.8049623. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q5HW+C2 Jaén.',
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
		'Restaurante y cocina mediterránea en la Av. de Andalucía, 74 de Jaén. Con 4,6 sobre 5 y 247 reseñas en Google Maps.',
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
	/** Traduce a cocina la categoría que publica Google. No se declara ninguna otra. */
	servesCuisine: ['Mediterránea'],
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
