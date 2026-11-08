/**
 * Datos de La Cuisinette Café Crepería — Av. de la Constitución, 24
 * (10400 Jaraíz de la Vera, Cáceres).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: La Cuisinette Café Creperia,
 *   40.0615139,-5.7518186, feature 0xd3e334264ffffff:0x2c655e3a7284f758
 *   (dirección, teléfono, horario, categoría, reseñas y accesibilidad).
 * - Fotos del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * Lo que la web NO inventa: nada. La carta no está publicada en la ficha, así
 * que solo se nombran los crepes que citan sus reseñas.
 */

export const BUSINESS = {
	name: 'La Cuisinette Café Crepería',
	shortName: 'La Cuisinette',
	mark: 'LC',
	street: 'Av. de la Constitución, 24',
	city: 'Jaraíz de la Vera',
	region: 'Cáceres',
	regionName: 'Extremadura',
	postalCode: '10400',
	country: 'ES',
	phoneDisplay: '600 07 30 98',
	phoneHref: 'tel:+34600073098',
	rating: 4.8,
	reviewsCount: 166,
	siteUrl: 'https://la-cuisinette.vercel.app',
	geo: { lat: 40.0615139, lng: -5.7518186 },
	featureId: '0xd3e334264ffffff:0x2c655e3a7284f758',
	placeId: 'ChIJ____ZEIzPg0RWPeEcjpeZSw',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Cuisinette+Caf%C3%A9+Creperia/@40.0615139,-5.7518186,17z/data=!3m1!4b1!4m6!3m5!1s0xd3e334264ffffff:0x2c655e3a7284f758!8m2!3d40.0615139!4d-5.7518186!16s%2Fg%2F11d_yvx748',
	cid: 'https://www.google.com/maps?cid=3199066715439036248',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=40.0615139%2C-5.7518186',
	embed: 'https://maps.google.com/maps?q=40.0615139,-5.7518186&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: solo cenas, con martes y miércoles cerrados. */
export const HOURS = [
	{ day: 'Lunes', value: '20:00–22:30' },
	{ day: 'Martes', value: 'Cerrado', closed: true },
	{ day: 'Miércoles', value: 'Cerrado', closed: true },
	{ day: 'Jueves', value: '20:00–22:30' },
	{ day: 'Viernes', value: '20:00–23:00' },
	{ day: 'Sábado', value: '20:00–23:00' },
	{ day: 'Domingo', value: '20:00–22:30' },
];

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Buena atención y unos crepes muy ricos y variados tanto salados como dulces.',
	},
	{ rating: 4, text: 'Muy buenos crepes y buen trato de la camarera' },
	{ rating: 5, text: 'Sitio totalmente recomendable, limpio y dueños encantadores.' },
];

/** Lo que la ficha de Google publica del local. */
export const SERVICIOS = [
	'Crepería en Jaraíz de la Vera',
	'Crepes dulces y salados',
	'Cenas',
	'Café',
	'Acceso para sillas de ruedas',
	'Comarca de La Vera',
];

/**
 * Carta resumida: la ficha no publica carta ni precios, así que solo se
 * nombran las elaboraciones que citan sus reseñas.
 */
export const MENU = [
	{
		title: 'Crepes dulces',
		items: [
			{ name: 'Crepe de chocolate', note: 'en las fotos del perfil de Google' },
			{ name: 'Crepe de coco rallado', note: 'en las fotos del perfil de Google' },
			{
				name: 'Crepe de mermelada de albaricoque',
				note: 'en las fotos del perfil de Google',
			},
			{
				name: 'Crepe con helado',
				note: 'en las fotos del perfil de Google',
			},
		],
	},
	{
		title: 'Galettes y crepes salados',
		items: [
			{
				name: 'Galette de queso de cabra, bacon y nueces',
				note: 'sobre trigo sarraceno, con ensalada de canónigos',
			},
			{
				name: 'Galette de jamón, champiñones y huevo',
				note: 'con queso fundido, en las fotos del perfil',
			},
			{ name: 'Galette de bacon y queso', note: 'en las fotos del perfil de Google' },
		],
	},
	{
		title: 'Para la sobremesa',
		items: [
			{ name: 'Café', note: 'el local se presenta como café y crepería' },
			{
				name: 'Crepes variados',
				note: '«muy ricos y variados tanto salados como dulces», según sus reseñas',
			},
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Cuisinette?',
		a: 'En la avenida de la Constitución, 24, del 10400 Jaraíz de la Vera (Cáceres), en plena comarca de La Vera. El mapa de esta página lleva directo al local y «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre solo por las noches: de 20:00 a 22:30 los lunes, jueves y domingos, y de 20:00 a 23:00 los viernes y sábados. Martes y miércoles cierra. Es el horario que publica su ficha de Google, así que conviene confirmarlo llamando antes.',
	},
	{
		q: '¿Cómo se reserva?',
		a: 'Por teléfono, en el 600 07 30 98. La ficha de Google no ofrece reserva online.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Crepes, dulces y salados. La ficha no publica carta ni precios, pero sus reseñas hablan de «crepes muy ricos y variados tanto salados como dulces».',
	},
	{
		q: '¿Hace falta reservar?',
		a: 'La ficha no lo indica. Al ser un local pequeño y con pocas horas de servicio, lo prudente es llamar al 600 07 30 98 antes de ir.',
	},
	{
		q: '¿Tiene buena valoración?',
		a: 'Sí: 4,8 sobre 5 con 166 reseñas en Google.',
	},
	{
		q: '¿Hay acceso adaptado?',
		a: 'La ficha de Google marca acceso para sillas de ruedas. No marca aparcamiento adaptado ni aseo adaptado.',
	},
];
