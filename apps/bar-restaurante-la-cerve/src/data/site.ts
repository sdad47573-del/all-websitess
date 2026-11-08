/**
 * Datos de Bar restaurante La Cerve — Euskadi Etorbidea, 53 (20110 Trintxerpe,
 * Pasaia, Gipuzkoa).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar restaurante La Cerve»,
 *   43.3233788,-1.9308223, feature 0xd51a592742bf8d9:0xeebbab3b91dec40
 *   (dirección, teléfono, horario, categoría, nota, reseñas, accesibilidad y
 *   «se admiten perros»).
 * - Reseñas publicadas en esa ficha: bocatas y raciones, pinchos, torreznos,
 *   croquetas, bocadillos, hamburguesas, sándwich y platos combinados.
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: la ficha no publica carta ni precios, así que la
 * sección de la carta resume lo que citan las reseñas y lo que muestran las
 * fotos del propio bar.
 */

export const BUSINESS = {
	name: 'Bar restaurante La Cerve',
	shortName: 'La Cerve',
	mark: 'LC',
	street: 'Euskadi Etorbidea, 53',
	city: 'Trintxerpe',
	municipality: 'Pasaia',
	region: 'Gipuzkoa',
	regionName: 'País Vasco',
	postalCode: '20110',
	country: 'ES',
	phoneDisplay: '943 39 23 86',
	phoneHref: 'tel:+34943392386',
	rating: 4.2,
	reviewsCount: 1837,
	siteUrl: 'https://bar-restaurante-la-cerve.vercel.app',
	geo: { lat: 43.3233788, lng: -1.9308223 },
	featureId: '0xd51a592742bf8d9:0xeebbab3b91dec40',
	placeId: 'ChIJ2fgrdJKlUQ0RQOwdubO66w4',
	cid: '1075158217125653568',
} as const;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+restaurante+La+Cerve/@43.3233788,-1.9308223,17z/data=!3m1!4b1!4m6!3m5!1s0xd51a592742bf8d9:0xeebbab3b91dec40!8m2!3d43.3233788!4d-1.9308223!16s%2Fg%2F1tg7bc9l',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.3233788%2C-1.9308223',
	embed: 'https://maps.google.com/maps?q=43.3233788,-1.9308223&z=17&hl=es&output=embed',
} as const;

/**
 * Horario de la ficha de Google: de lunes a jueves, de 8:00 a 23:00; el viernes
 * y el sábado alarga hasta las 2:00, y el domingo va de 10:00 a 23:00.
 */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–23:00' },
	{ day: 'Martes', value: '8:00–23:00' },
	{ day: 'Miércoles', value: '8:00–23:00' },
	{ day: 'Jueves', value: '8:00–23:00' },
	{ day: 'Viernes', value: '10:00–2:00' },
	{ day: 'Sábado', value: '10:00–2:00' },
	{ day: 'Domingo', value: '10:00–23:00' },
] as const;

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{ rating: 4, text: 'Buen servicio con buena cocina sacando buenos bocatas y raciones.' },
	{
		rating: 4,
		text: 'Servicio amable, pinchos, torreznos, croquetas, buena cerveza y fútbol',
	},
	{
		rating: 5,
		text: 'Tienen bocadillos,hamburguesas, sándwich, ptatos combinados variados...',
	},
] as const;

/**
 * Categoría y servicios que constan: Google lo clasifica como bar restaurante,
 * la ficha marca acceso, aseo y asientos adaptados (y que no hay aparcamiento
 * adaptado), y las reseñas hablan de bocatas, raciones, pinchos, torreznos,
 * croquetas, bocadillos, hamburguesas, sándwich y platos combinados.
 */
export const SERVICIOS = [
	'Bar restaurante',
	'Bocadillos y bocatas',
	'Raciones',
	'Pinchos',
	'Torreznos',
	'Croquetas',
	'Platos combinados',
	'Hamburguesas',
	'Se admiten perros',
	'Acceso para sillas de ruedas',
	'Aseo adaptado',
	'Asientos adaptados',
] as const;

/**
 * Carta: la ficha no publica carta. Los platos salen de las reseñas publicadas
 * y de lo que muestran las fotos del perfil del bar.
 */
export const MENU = [
	{
		title: 'La barra',
		items: [
			{
				name: 'Cerveza natural',
				note: '«recién hecha», anuncia el cartel de la barra, con barriles de cobre',
			},
			{ name: 'Pinchos', note: 'citados en las reseñas del bar' },
			{ name: 'Torreznos', note: 'en las reseñas, junto a las croquetas' },
			{ name: 'Croquetas', note: 'en las reseñas del bar' },
		],
	},
	{
		title: 'Bocadillos y raciones',
		items: [
			{ name: 'Bocatas', note: '«buenos bocatas y raciones», en las reseñas' },
			{ name: 'Raciones', note: 'para compartir en la barra o la mesa' },
			{
				name: 'Sándwich',
				note: 'club sándwich con huevo, bacon y lechuga, en sus fotos',
			},
		],
	},
	{
		title: 'Ensaladas y hamburguesas',
		items: [
			{
				name: 'Ensalada César',
				note: 'pollo crujiente, tomate cherry, maíz, queso, bacon y salsa César, según su carta',
			},
			{
				name: 'Ensalada de pasta',
				note: 'lechuga, maíz, zanahoria, bonito y jamón York, según su carta',
			},
			{
				name: 'Ensalada de pollo, roquefort y nueces',
				note: 'en la carta que aparece en sus fotos',
			},
			{ name: 'Hamburguesas', note: 'con patatas fritas; en sus fotos, una con huevo frito' },
		],
	},
	{
		title: 'A la mesa',
		items: [
			{ name: 'Platos combinados', note: '«variados», según una reseña publicada' },
			{ name: 'Chuleta con patatas', note: 'en sus fotos, a la plancha y con patatas fritas' },
			{ name: 'Tarta de queso', note: 'con nata y coco rallado, en sus fotos' },
			{ name: 'Tiramisú', note: 'con nata y sirope de chocolate, en sus fotos' },
		],
	},
] as const;

export const FAQ = [
	{
		q: '¿Dónde está el Bar restaurante La Cerve?',
		a: 'En Euskadi Etorbidea, 53, en el 20110 Trintxerpe (Pasaia, Gipuzkoa). El mapa de esta página lleva directo al bar y «Cómo llegar» abre las indicaciones de Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a jueves abre de 8:00 a 23:00; el viernes y el sábado, de 10:00 a 2:00, y el domingo, de 10:00 a 23:00. Es el horario que publica su ficha de Google y puede cambiar, así que conviene confirmarlo por teléfono.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Lo que citan sus reseñas: bocatas y raciones, pinchos, torreznos, croquetas, bocadillos, hamburguesas, sándwich y platos combinados variados. La ficha de Google no publica carta, así que la oferta del día se consulta llamando al 943 39 23 86.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'La ficha lo clasifica como bar restaurante y sus reseñas hablan de platos combinados. La pizarra de la fachada que aparece en sus fotos anuncia el menú del día por 15 €, pero no publica la carta, así que el menú de hoy se pregunta por teléfono o en la barra.',
	},
	{
		q: '¿Se puede ver el fútbol?',
		a: 'Sí, una de las reseñas publicadas menciona el fútbol junto a los pinchos, los torreznos, las croquetas y la cerveza.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 943 39 23 86. La ficha de Google no ofrece reserva online y esta web tampoco.',
	},
	{
		q: '¿Es accesible y se admiten perros?',
		a: 'La ficha marca acceso para sillas de ruedas, aseo adaptado y asientos adaptados, y añade que se admiten perros. También indica que no hay aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,2 sobre 5 con 1.837 reseñas en Google. Las publicadas destacan el servicio, los bocatas y raciones, los pinchos, los torreznos, las croquetas y la cerveza.',
	},
	{
		q: '¿De quién es esta web?',
		a: 'Es una web informativa elaborada con los datos y las fotografías que el establecimiento publica en su ficha de Google Maps. No es su web oficial y no vende ni reserva nada.',
	},
] as const;
