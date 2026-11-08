/**
 * Datos de Restaurante Urumea el Kubano — Alto de los Robles Kalea, 10
 * (20014 Donostia / San Sebastián, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Restaurante Urumea el Kubano, 43.3087219,-1.9670989,
 *   feature 0xd51aff33fce66d7:0x7040a80b3ec787b0 (dirección, categoría, teléfono,
 *   horario, nota, reseñas, idiomas y etiqueta «Brunch»).
 * - Reseñas publicadas en esa misma ficha.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha de Google no publica carta, precios, correo,
 * web propia ni descripción del local. La sección «Lo que cuentan las reseñas»
 * recoge solo lo que dicen sus opiniones.
 */

export const BUSINESS = {
	name: 'Restaurante Urumea el Kubano',
	shortName: 'Urumea el Kubano',
	mark: 'UK',
	street: 'Alto de los Robles Kalea, 10',
	city: 'Donostia / San Sebastián',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20014',
	country: 'ES',
	phone: '943 46 05 36',
	phoneHref: 'tel:+34943460536',
	rating: 4.5,
	reviewsCount: 123,
	siteUrl: 'https://www.sur-digital.com/restaurante-urumea-el-kubano',
	geo: { lat: 43.3087219, lng: -1.9670989 },
	featureId: '0xd51aff33fce66d7:0x7040a80b3ec787b0',
	placeId: 'ChIJ12bOP_OvUQ0RsIfHPguoQHA',
	/** Nombre alternativo que publica la ficha: «Urumea Jatetxea el Kubano». */
	alternateName: 'Urumea Jatetxea el Kubano',
	/** Categoría con la que Google clasifica el local. */
	tagline: 'Bar restaurante en Alto de los Robles, Donostia',
	description:
		'Bar restaurante en Alto de los Robles Kalea, 10 (20014 Donostia / San Sebastián). Cocina casera preparada al momento, con 4,5 sobre 5 en Google y 123 reseñas. Abre de domingo a viernes y cierra los sábados.',
	/** La ficha publica teléfono, pero ni web propia ni correo. */
	hasPublicPhone: true,
	/** Idiomas que declara la ficha. */
	languages: ['Español', 'Euskera'],
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Urumea+el+Kubano/@43.3087219,-1.9670989,17z/data=!3m1!4b1!4m6!3m5!1s0xd51aff33fce66d7:0x7040a80b3ec787b0!8m2!3d43.3087219!4d-1.9670989!16s%2Fg%2F1xgzd2v6',
	cid: 'https://www.google.com/maps?cid=8088649697008781232',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3087219%2C-1.9670989',
	embed: 'https://maps.google.com/maps?q=43.3087219,-1.9670989&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google: cierra los sábados. */
export const HOURS = [
	{ day: 'Domingo', value: '10:00–18:00' },
	{ day: 'Lunes', value: '10:00–21:00' },
	{ day: 'Martes', value: '10:00–21:00' },
	{ day: 'Miércoles', value: '10:00–21:00' },
	{ day: 'Jueves', value: '10:00–21:00' },
	{ day: 'Viernes', value: '10:00–21:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Excelente atención, ambiente acogedor, comida exquisita, sin duda volveremos.',
	},
	{ rating: 5, text: 'Buena comida y buen trato a un precio razonable.' },
	{ rating: 5, text: 'Muy buena atención y comida casera preparada en el momento.' },
];

/**
 * Señas de identidad que sí constan en la ficha: categoría, idiomas, etiqueta
 * de Google, dirección y el día que cierra.
 */
export const SERVICIOS = [
	'Bar restaurante',
	'Cocina casera',
	'Brunch, según la etiqueta de Google',
	'Español y euskera',
	'Alto de los Robles, 10',
	'Cierra los sábados',
];

/**
 * La ficha no publica carta ni precios, así que esto no es una carta: es lo que
 * dicen las reseñas del local, agrupado para que se lea de un vistazo.
 */
export const MENU = [
	{
		title: 'La cocina',
		items: [
			{
				name: 'Cocina casera',
				note: '«comida casera preparada en el momento», escribe una reseña',
			},
			{
				name: 'Comida «exquisita»',
				note: 'es la palabra que usa otra de las opiniones de Google',
			},
			{
				name: 'Brunch',
				note: 'la ficha de Google le pone esta etiqueta al local',
			},
		],
	},
	{
		title: 'El trato',
		items: [
			{
				name: 'Atención «excelente»',
				note: 'las tres reseñas destacadas coinciden en la atención',
			},
			{
				name: 'Buen trato',
				note: '«buena comida y buen trato», resume otra reseña',
			},
			{
				name: 'Español y euskera',
				note: 'los dos idiomas que declara la ficha del local',
			},
		],
	},
	{
		title: 'La cuenta',
		items: [
			{
				name: 'Precio razonable',
				note: '«a un precio razonable», dice una de las reseñas',
			},
			{
				name: 'Ambiente acogedor',
				note: '«ambiente acogedor», añade la misma opinión',
			},
			{
				name: 'Cierra los sábados',
				note: 'el resto de días abre de 10:00 en adelante',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Urumea el Kubano?',
		a: 'En Alto de los Robles Kalea, 10, del 20014 Donostia / San Sebastián (Gipuzkoa). El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a viernes de 10:00 a 21:00 y los domingos de 10:00 a 18:00. Los sábados cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo antes de ir.',
	},
	{
		q: '¿Cómo se reserva o se contacta?',
		a: 'Por teléfono, en el 943 46 05 36. La ficha de Google publica ese número, pero no un correo electrónico ni una web propia.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Sus reseñas hablan de comida casera preparada en el momento y la ficha lleva la etiqueta «Brunch». No hay carta ni precios publicados, así que para saber qué hay hoy lo más directo es llamar al 943 46 05 36.',
	},
	{
		q: '¿Se habla euskera?',
		a: 'La ficha de Google marca español y euskera como idiomas del local. Su nombre alternativo también está en euskera: Urumea Jatetxea el Kubano.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,5 sobre 5 con 123 reseñas en Google. Las opiniones destacadas elogian la atención, la comida casera y el precio.',
	},
];
