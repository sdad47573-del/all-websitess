/**
 * Datos de Tania Panadería Pastelería — C. Poeta Ximénez Molina, 10
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Tania Panadería Pastelería,
 *   36.7261201,-4.4498736, feature 0xd72f711f70fc53b:0xf0b886844e63fbf3.
 * - Dirección, categoría, teléfono, valoración, reseñas, horario,
 *   accesibilidad y descripción del negocio: ficha pública de Google
 *   (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica carta cerrada ni precios, así
 * que el mostrador recoge solo lo que el propio negocio describe (pan integral
 * 100%, blanco y de soja, dulces y tartas por encargo, alimentación, bebidas y
 * charcutería al corte) y las reseñas citadas. No se muestran importes.
 */

export const BUSINESS = {
	name: 'Tania Panadería Pastelería',
	shortName: 'Tania',
	mark: 'T',
	street: 'C. Poeta Ximénez Molina, 10',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '666 92 95 95',
	phoneHref: 'tel:+34666929595',
	rating: 4.6,
	reviewsCount: 75,
	siteUrl: 'https://www.sur-digital.com/tania-panaderia-pasteleria',
	geo: { lat: 36.7261201, lng: -4.4498736 },
	featureId: '0xd72f711f70fc53b:0xf0b886844e63fbf3',
	placeId: 'ChIJO8UP9xH3cg0R8_tjToSGuPA',
	googleCategory: 'Panadería',
	tagline: 'Panadería y pastelería de barrio en Bailén-Miraflores',
	description:
		'Tania Panadería Pastelería, en C. Poeta Ximénez Molina, 10 (Bailén-Miraflores, 29010 Málaga). Pan integral 100%, blanco y de soja hecho a mano, dulces, tartas por encargo, alimentación, bebidas y charcutería al corte. Tiene 4,6 sobre 5 en Google con 75 reseñas.',
	hoursSummary: 'L–V 7:15–14:45 y 17:30–21:30 · S 8:15–15:00 y 17:30–21:30 · D 8:15–15:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Tania+Panader%C3%ADa+Pasteler%C3%ADa/@36.7261201,-4.4498736,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f711f70fc53b:0xf0b886844e63fbf3!8m2!3d36.7261201!4d-4.4498736!16s%2Fg%2F11cns8xrhn?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=17346248868629089267',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7261201%2C-4.4498736',
	embed: 'https://maps.google.com/maps?q=36.7261201,-4.4498736&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes a viernes', value: '7:15–14:45 · 17:30–21:30' },
	{ day: 'Sábado', value: '8:15–15:00 · 17:30–21:30' },
	{ day: 'Domingo', value: '8:15–15:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) puede variar; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		author: 'Reseña de Google',
		text: 'No sólo el pan: también tienen amplio surtido de dulces y pasteles.',
	},
	{
		rating: 4,
		author: 'Reseña de Google',
		text: 'La tarta de zanahoria buenísima.',
	},
	{
		rating: 4,
		author: 'Reseña de Google',
		text: 'Muy buen género y buena atención.',
	},
];

/** Lo que la ficha y la descripción del propio negocio permiten afirmar. */
export const SERVICIOS = [
	'Pan integral 100%',
	'Pan de soja (lunes y jueves)',
	'Tartas por encargo',
	'Charcutería al corte',
	'Alimentación',
	'Bebidas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan, hecho a mano',
		text: 'Pan integral 100%, pan blanco y pan de soja —este último solo lunes y jueves— elaborado diariamente a mano, según la descripción de la casa.',
	},
	{
		title: 'Dulces y tartas por encargo',
		text: 'La ficha anuncia variedad de dulces y tartas por encargo al gusto. Una reseña se queda con la tarta de zanahoria.',
	},
	{
		title: 'Despensa de barrio',
		text: 'Además del obrador, el local tiene alimentación, bebidas y charcutería al corte. Dos turnos: mañana y tarde.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Panes',
		items: [
			{ name: 'Pan integral 100%', note: 'Elaborado a diario, a mano.' },
			{ name: 'Pan blanco', note: 'Elaborado a diario, a mano.' },
			{ name: 'Pan de soja', note: 'Solo lunes y jueves.' },
		],
	},
	{
		title: 'Dulces y tartas',
		items: [
			{ name: 'Dulces variados', note: 'Surtido de la casa, según la ficha.' },
			{
				name: 'Tartas por encargo',
				note: 'Al gusto, por encargo. Se piden en el teléfono del obrador.',
			},
			{ name: 'Tarta de zanahoria', note: 'La que destaca una de las reseñas.' },
		],
	},
	{
		title: 'Despensa',
		items: [
			{ name: 'Charcutería al corte', note: 'Así la anuncia la ficha del local.' },
			{ name: 'Alimentación', note: 'Productos de despensa.' },
			{ name: 'Bebidas', note: 'Bebidas varias.' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Tania Panadería Pastelería?',
		a: 'En la calle Poeta Ximénez Molina, 10, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'De lunes a viernes abre de 7:15 a 14:45 y de 17:30 a 21:30; el sábado, de 8:15 a 15:00 y de 17:30 a 21:30; el domingo solo de 8:15 a 15:00. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Cómo se encarga una tarta?',
		a: 'La ficha indica que hay tartas por encargo al gusto. El teléfono del obrador es el 666 92 95 95; llama con antelación para concretar el tipo de tarta y la recogida.',
	},
	{
		q: '¿Qué pan hacen?',
		a: 'Pan integral 100%, pan blanco y pan de soja, elaborado diariamente a mano. El de soja se hace lunes y jueves, según la descripción del propio negocio en Google Maps.',
	},
	{
		q: '¿Venden algo más que pan y dulces?',
		a: 'Sí: la ficha describe alimentación, bebidas y charcutería al corte, además de los dulces y las tartas.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el propio establecimiento.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google indica que el local tiene acceso para sillas de ruedas. No publica información sobre aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 4,6 sobre 5 con 75 reseñas en Google. Las reseñas visibles elogian los dulces, la tarta de zanahoria, el género y la atención.',
	},
];
