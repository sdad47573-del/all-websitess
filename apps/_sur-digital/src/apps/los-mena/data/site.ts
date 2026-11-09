/**
 * Datos de Los Mena (Calle Italia, 4 · 13005 Ciudad Real).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 9 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categoría, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, el
 * distintivo que Google muestra junto al nombre, la descripción del titular y las reseñas
 * destacadas.
 *
 * La ficha no publica precios, así que no se reproduce ninguno.
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://www.sur-digital.com/los-mena',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '9 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Los Mena',
	shortName: 'Los Mena',
	/** Categoría que publica Google en esta ficha: «Restaurante de cocina castellana», la única. */
	category: 'Restaurante de cocina castellana',
	categories: ['Restaurante de cocina castellana'],
	/**
	 * Dirección publicada en la ficha. Google la abrevia como «C. Italia, 4»: aquí se desarrolla la
	 * abreviatura a «Calle», como en el resto del repositorio. El código postal 13005 y el municipio
	 * (Ciudad Real) se publican tal cual.
	 */
	streetAddress: 'Calle Italia, 4',
	postalCode: '13005',
	city: 'Ciudad Real',
	province: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	country: 'ES',
	/** Teléfono móvil publicado en la ficha. */
	phone: '+34 627 34 80 57',
	latitude: 38.9804652,
	longitude: -3.9131735,
	/** Plus code que publica la ficha. */
	plusCode: 'X3JP+5P Ciudad Real',
	/** Valoración de la ficha en la fecha de consulta (4,6 sobre 5 con 139 reseñas). */
	rating: 4.6,
	reviewCount: 139,
	site: site.siteUrl,
} as const;

/**
 * Descripción del titular publicada en la ficha.
 *
 * Es el texto que el propio negocio escribe en su perfil («descripción del titular») y se reproduce
 * literal. La ficha la guarda en cuatro líneas, que se conservan con `\n` y se muestran como tales
 * (`.descripcion` usa `white-space: pre-line`).
 */
export const descripcionLocal =
	'Comida casera\nPostres caseros\nTapas manchegas y variadas\nRaciones variadas';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Los+Mena/@38.9804652,-3.9131735,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc382271097df:0xcd6722ea1ae815a9!8m2!3d38.9804652!4d-3.9131735!16s%2Fg%2F11v5_6x18r?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJ35cQJ4LDaw0RqRXoGuoiZ80&hl=es';

export const phoneHref = 'tel:+34627348057';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 9 de octubre de 2026 cubre del viernes 9 al jueves 15 de octubre. El local abre de
 * martes a jueves de 9:00 a 23:00, el viernes de 9:00 a 24:00 y el sábado de 12:00 a 24:00, y cierra
 * el domingo y el lunes.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser diferente.
 *
 * El cierre a las 24:00 se escribe como 00:00 en los datos estructurados.
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
		service: '9:00 – 23:00',
		shifts: [{ open: '09:00', close: '23:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '9:00 – 23:00',
		shifts: [{ open: '09:00', close: '23:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '9:00 – 23:00',
		shifts: [{ open: '09:00', close: '23:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '9:00 – 24:00',
		shifts: [{ open: '09:00', close: '00:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: '12:00 – 24:00',
		shifts: [{ open: '12:00', close: '00:00' }],
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
	'De martes a jueves de 9:00 a 23:00, el viernes de 9:00 a 24:00 y el sábado de 12:00 a 24:00; el domingo y el lunes cierra';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son dos entradas y las dos figuran como disponibles: el acceso y los asientos adaptados para
 * sillas de ruedas. La ficha no publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Aquí la ficha destaca **dos** (el resto de webs del repositorio suele traer tres), y se citan tal
 * cual, sin corregir su redacción ni su puntuación. Las dos son de 5 sobre 5. Google guarda cada
 * extracto entre comillas dobles; aquí se quitan, porque la web ya presenta cada reseña entre « » y
 * no forman parte del texto que escribió la persona.
 */
export const reviews = [
	{
		text: 'Raciones grandes y de calidad, muy buen servicio y buen ambiente.',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Acabamos de ir a cenar a este sitio de casualidad y un descubrimiento .',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica precios, así que ninguna respuesta los menciona.
 */
export const faqs = [
	{
		question: '¿Dónde está Los Mena?',
		answer:
			'En la Calle Italia, 4, con código postal 13005, en Ciudad Real (Castilla-La Mancha). La ficha publica el plus code X3JP+5P Ciudad Real y las coordenadas 38.9804652, -3.9131735.',
	},
	{
		question: '¿Cuál es el horario de Los Mena?',
		answer:
			'La ficha publica un horario de martes a jueves de 9:00 a 23:00, el viernes de 9:00 a 24:00 y el sábado de 12:00 a 24:00. El domingo y el lunes cierra. Es el horario publicado en la ficha consultada el 9 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica como restaurante de cocina castellana. Tiene 4,6 sobre 5 con 139 reseñas, y el propio local describe en su ficha comida casera, postres caseros, tapas manchegas y variadas y raciones variadas. En las reseñas que destaca se habla de raciones grandes y de calidad, del servicio y del ambiente.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica un sistema de reservas y esta web no permite reservar. El teléfono publicado es el 627 34 80 57.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Calle Italia, 4 y las coordenadas 38.9804652, -3.9131735. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code X3JP+5P Ciudad Real.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica dos entradas de accesibilidad y las dos figuran como disponibles: el acceso y los asientos adaptados para sillas de ruedas. No publica ninguna otra.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 627 34 80 57.',
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
		'Restaurante de cocina castellana con comida casera en la Calle Italia, 4 de Ciudad Real, abierto de martes a sábado y cerrado el domingo y el lunes.',
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
	/** Traduce a cocina la única categoría que publica Google: «cocina castellana». */
	servesCuisine: ['Castellana'],
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
