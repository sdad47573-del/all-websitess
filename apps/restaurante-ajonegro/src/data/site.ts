/**
 * Datos de Restaurante AjoNegro - OPCIONES SIN GLUTEN (Polígono Los Olivares Calle Villatorres
 * Parcela 23 · 23009 Jaén).
 *
 * Todo sale de la ficha pública de Google Maps del negocio, leída el 8 de octubre de 2026 desde el
 * endpoint de vista previa de la propia ficha: nombre, dirección, teléfono, categorías, valoración
 * con número de reseñas, coordenadas, plus code, horario semanal, servicios de accesibilidad, la
 * descripción que publica el propio local, el distintivo que Google muestra junto al nombre y las
 * reseñas destacadas.
 *
 * La ficha no publica carta, precios ni web propia, así que no se reproduce ninguna de las tres
 * cosas (el precio del menú solo aparece dentro de la descripción del titular, y se cita con ella).
 */

/** URL canónica del sitio: repetida en `astro.config.mjs` y en `public/robots.txt`. */
export const site = {
	siteUrl: 'https://restaurante-ajonegro.vercel.app',
	/** Fecha en la que se consultó la ficha de Google Maps. */
	consultado: '8 de octubre de 2026',
} as const;

export const business = {
	/** Nombre tal como lo publica la ficha de Google Maps. */
	name: 'Restaurante AjoNegro - OPCIONES SIN GLUTEN',
	shortName: 'AjoNegro',
	/** Primera categoría que publica Google en esta ficha: «Bar restaurante». */
	category: 'Bar restaurante',
	/** Las cuatro categorías que publica la ficha, en el orden en que las da. */
	categories: [
		'Bar restaurante',
		'Restaurante de desayunos',
		'Restaurante de comida sin gluten',
		'Restaurante mediterráneo',
	],
	/**
	 * Dirección publicada en la ficha, tal cual: la partida del polígono, la calle y la parcela, sin
	 * abreviaturas que desarrollar.
	 */
	streetAddress: 'Polígono Los Olivares Calle Villatorres Parcela 23',
	postalCode: '23009',
	city: 'Jaén',
	province: 'Jaén',
	region: 'Andalucía',
	country: 'ES',
	/** Teléfono publicado en la ficha (es un móvil, no un fijo). */
	phone: '+34 648 71 97 39',
	latitude: 37.7992994,
	longitude: -3.7825202,
	/** Plus code que publica la ficha. */
	plusCode: 'Q6X8+PX Jaén',
	/** Valoración de la ficha en la fecha de consulta (4,4 con 646 reseñas). */
	rating: 4.4,
	reviewCount: 646,
	site: site.siteUrl,
} as const;

/**
 * Descripción que el propio local publica en su ficha de Google Maps (descripción del titular).
 *
 * Se reproduce literal, con sus saltos de línea, su falta de tildes en «MENU» y su espaciado
 * («13,50 €»), y va atribuida a la ficha. Es el único texto de este tipo que publica; el resto de
 * la web no añade descripciones. La web la muestra respetando los saltos de línea.
 */
export const descripcionLocal =
	'DESAYUNOS Y MENU DEL DÍA SIN GLUTEN. Garantizamos la ausencia total de contaminación cruzada. Personal con formación específica.\nVariedad de desayunos, bocadillos y tostadas, destacando la tostada de jamón al corte con AOVE de Jaén.\nLos platos que elaboramos son caseros y tradicionales, incluyendo productos de nuestra provincia.\nPrecio menú diario por 13€, SIN GLUTEN 13,50 €\nRealizamos todo tipo de eventos y celebraciones, incluso en fin de semana. Consulta sin compromiso.\nTe esperamos!';

/**
 * Distintivo que Google muestra junto al nombre en la ficha.
 *
 * Aquí publica «Brunch». Se recoge como dato de la ficha, sin ampliarlo ni interpretarlo.
 */
export const distintivo = 'Brunch';

/** Enlace a la ficha del negocio, con su identificador de lugar y su identificador de canal. */
export const mapsUrl =
	'https://www.google.com/maps/place/Restaurante+AjoNegro+-+OPCIONES+SIN+GLUTEN/@37.7992994,-3.7825202,17z/data=!3m1!4b1!4m6!3m5!1s0xd6dd657ba23a11f:0xc35528a20118a513!8m2!3d37.7992994!4d-3.7825202!16s%2Fg%2F1q2vz4wht?hl=es';

/** Listado público de reseñas de la ficha. */
export const reviewsUrl =
	'https://search.google.com/local/reviews?placeid=ChIJH6EjulfWbQ0RE6UYAaIoVcM&hl=es';

export const phoneHref = 'tel:+34648719739';

export const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${business.latitude}%2C${business.longitude}`;

export const mapEmbedUrl = `https://maps.google.com/maps?q=${business.latitude}%2C${business.longitude}&z=16&output=embed`;

/**
 * Horario semanal que publica la ficha.
 *
 * La consulta del 8 de octubre de 2026 cubre del jueves 8 al miércoles 14 de octubre. El local
 * abre de martes a viernes un único turno de 7:00 a 17:00 (desayunos y menú del día), y cierra
 * sábado, domingo y lunes.
 *
 * El lunes lleva el aviso de que, al ser Fiesta Nacional de España, el horario podría ser
 * diferente. Ese día la ficha lo da cerrado igualmente, así que el aviso se recoge en el texto de
 * la sección de horario y no cambia la tabla.
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
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Tuesday',
	},
	{
		day: 'Miércoles',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Wednesday',
	},
	{
		day: 'Jueves',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Thursday',
	},
	{
		day: 'Viernes',
		service: '7:00 – 17:00',
		shifts: [{ open: '07:00', close: '17:00' }],
		dayOfWeek: 'Friday',
	},
	{
		day: 'Sábado',
		service: 'Cerrado',
		shifts: [],
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
export const hoursSummary = 'De martes a viernes, de 7:00 a 17:00';

/**
 * Servicios de accesibilidad que publica la ficha.
 *
 * Son cinco entradas: el acceso, el aparcamiento, el aseo y los asientos adaptados están
 * disponibles, y el bucle magnético asistencial aparece marcado como no disponible. La ficha no
 * publica ninguna otra.
 */
export const accesibilidad = [
	{ label: 'Acceso para sillas de ruedas', disponible: true },
	{ label: 'Aparcamiento adaptado para sillas de ruedas', disponible: true },
	{ label: 'Aseo adaptado para sillas de ruedas', disponible: true },
	{ label: 'Asientos adaptados sillas de ruedas', disponible: true },
	{ label: 'Bucle magnético asistencial', disponible: false },
] as const;

/**
 * Extractos literales de las reseñas que la ficha de Google Maps destaca.
 *
 * Se citan tal cual, sin corregir su redacción ni su puntuación (incluidas la mayúscula inicial en
 * minúscula y la falta de tilde de la tercera). Una es de 4 sobre 5 y dos de 5, y se reproducen
 * igual.
 */
export const reviews = [
	{
		text: 'Venimos de Murcia y volveremos a repetir',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'El servicio regular, hablan a voces, aunque sirven rapido.',
		rating: 4,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
	{
		text: 'Atención exquisita y especial mención a María.(profesional, amable, atenta).',
		rating: 5,
		source: 'Reseña destacada en la ficha de Google Maps',
	},
] as const;

/**
 * Preguntas frecuentes respondidas solo con lo que publica la ficha.
 *
 * La ficha no publica carta ni precios fuera de la descripción del titular, así que ninguna
 * respuesta los menciona más allá de lo que dice esa descripción.
 */
export const faqs = [
	{
		question: '¿Dónde está Restaurante AjoNegro?',
		answer:
			'En el Polígono Los Olivares Calle Villatorres Parcela 23, con código postal 23009, en Jaén (Andalucía). La ficha publica el plus code Q6X8+PX Jaén y las coordenadas 37.7992994, -3.7825202.',
	},
	{
		question: '¿Cuál es el horario de Restaurante AjoNegro?',
		answer:
			'Abre de martes a viernes con un único turno, de 7:00 a 17:00, y cierra sábado, domingo y lunes. Es el horario publicado en la ficha consultada el 8 de octubre de 2026, con el aviso de que el lunes 12, Fiesta Nacional de España, podría ser diferente. Conviene confirmar por teléfono antes de ir.',
	},
	{
		question: '¿Qué tipo de comida sirve?',
		answer:
			'Google lo clasifica con cuatro categorías: bar restaurante, restaurante de desayunos, restaurante de comida sin gluten y restaurante mediterráneo. Tiene 4,4 sobre 5 con 646 reseñas. En la descripción de su propia ficha dice que garantiza la ausencia total de contaminación cruzada, que su personal tiene formación específica, que elabora platos caseros y tradicionales con productos de la provincia y que el menú diario cuesta 13 € (13,50 € sin gluten).',
	},
	{
		question: '¿Tiene opciones sin gluten?',
		answer:
			'Es lo que anuncia el propio nombre de la ficha, «Restaurante AjoNegro - OPCIONES SIN GLUTEN», y una de sus categorías publicadas es «Restaurante de comida sin gluten». En su descripción el local afirma que garantiza la ausencia total de contaminación cruzada y que su personal tiene formación específica. Esta web solo recoge esas afirmaciones; para cualquier detalle conviene llamar antes al 648 71 97 39.',
	},
	{
		question: '¿Se puede reservar?',
		answer:
			'La ficha no publica si se admiten reservas ni un sistema para hacerlas, y esta web no permite reservar. Menciona que realiza eventos y celebraciones, incluso en fin de semana, y remite a consultar. El teléfono publicado es el 648 71 97 39.',
	},
	{
		question: '¿Cómo se llega hasta allí?',
		answer:
			'La ficha publica la dirección Polígono Los Olivares Calle Villatorres Parcela 23 y las coordenadas 37.7992994, -3.7825202. Los botones de esta web abren las indicaciones de Google Maps desde el punto en el que estés y el mapa de abajo señala el lugar con el plus code Q6X8+PX Jaén.',
	},
	{
		question: '¿Es accesible el local?',
		answer:
			'La ficha publica cinco entradas de accesibilidad: marca como disponibles el acceso, el aparcamiento, el aseo y los asientos adaptados para sillas de ruedas, y señala que no hay bucle magnético asistencial.',
	},
	{
		question: '¿Qué significa el distintivo «Brunch» de la ficha?',
		answer:
			'Es la etiqueta que Google muestra junto al nombre en la ficha. Esta web la recoge tal cual y no la amplía ni la interpreta: para saber qué se sirve y a qué hora, lo mejor es llamar al 648 71 97 39.',
	},
	{
		question: '¿De quién es esta web?',
		answer:
			'Es una web informativa elaborada con los datos y las fotografías que el propio local publica en su ficha de Google Maps, consultada el 8 de octubre de 2026. No es su web oficial y no vende ni reserva nada.',
	},
] as const;

export const restaurantSchema = {
	'@context': 'https://schema.org',
	'@type': 'Restaurant',
	'@id': `${site.siteUrl}/#restaurante`,
	name: business.name,
	description:
		'Bar restaurante en el Polígono Los Olivares Calle Villatorres Parcela 23 de Jaén, con desayunos, menú del día y opciones sin gluten, abierto de martes a viernes de 7:00 a 17:00.',
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
	/* `servesCuisine` traduce la categoría «Restaurante mediterráneo» que publica Google. */
	servesCuisine: ['Cocina mediterránea'],
	/* Sin `priceRange`: el único precio publicado va dentro de la descripción del titular. */
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
