/**
 * Datos de Panadería Martínez Colombiana — C. Martínez de la Rosa, 116
 * (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: Panadería Martínez Colombiana,
 *   36.7279889,-4.4429089, feature 0xd72f7000964cd93:0x30a5b63813ed7751.
 * - Dirección, categoría, teléfono, valoración, reseñas y horario: ficha
 *   pública de Google (octubre de 2026).
 * - Fotos: galería del perfil de Google Maps del establecimiento.
 *
 * Lo que la web NO inventa: la ficha no publica descripción del negocio, carta,
 * precios ni métodos de pago. El mostrador recoge solo lo que se ve en las
 * fotos del perfil y lo que citan las reseñas (pan de queso, bocadillos), sin
 * importes y sin afirmar surtidos que no estén a la vista.
 */

export const BUSINESS = {
	name: 'Panadería Martínez Colombiana',
	shortName: 'Martínez',
	mark: 'M',
	street: 'C. Martínez de la Rosa, 116',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	phone: '658 27 16 05',
	phoneHref: 'tel:+34658271605',
	rating: 3.9,
	reviewsCount: 18,
	siteUrl: 'https://www.sur-digital.com/panaderia-martinez-colombiana',
	geo: { lat: 36.7279889, lng: -4.4429089 },
	featureId: '0xd72f7000964cd93:0x30a5b63813ed7751',
	placeId: 'ChIJk81kCQD3cg0RUXftEzi2pTA',
	googleCategory: 'Panadería',
	tagline: 'Panadería colombiana de barrio en Bailén-Miraflores',
	description:
		'Panadería Martínez Colombiana, en C. Martínez de la Rosa, 116 (Bailén-Miraflores, 29010 Málaga). Panadería colombiana de barrio, todos los días desde las 8:00. Teléfono 658 27 16 05.',
	hoursSummary: 'L 8:00–21:00 · M 8:00–17:00 · X–S 8:00–21:00 · D 8:00–19:00',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Panader%C3%ADa+Mart%C3%ADnez+Colombiana/@36.7279889,-4.4429089,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7000964cd93:0x30a5b63813ed7751!8m2!3d36.7279889!4d-4.4429089!16s%2Fg%2F11x8wbyv2g?authuser=0&hl=es&entry=ttu',
	cid: 'https://www.google.com/maps?cid=3503384963082172241',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7279889%2C-4.4429089',
	embed: 'https://maps.google.com/maps?q=36.7279889,-4.4429089&z=17&hl=es&output=embed',
};

/** Horario publicado en la ficha de Google. */
export const HOURS = [
	{ day: 'Lunes', value: '8:00–21:00' },
	{ day: 'Martes', value: '8:00–17:00' },
	{ day: 'Miércoles a sábado', value: '8:00–21:00' },
	{ day: 'Domingo', value: '8:00–19:00' },
];

export const HOURS_NOTE =
	'Horario de la ficha de Google. El 1 de noviembre (Día de Todos los Santos) puede variar; conviene llamar antes de ir.';

/** Reseñas publicadas en la ficha de Google Maps. */
export const REVIEWS = [
	{
		rating: 5,
		text: 'Nunca había probado el pan de queso y es una absoluta delicia.',
	},
	{
		rating: 1,
		text: 'Si queréis un bocadillo, ir a otro sitio.',
	},
	{
		rating: 5,
		text: 'Muy rico todo, y el servicio al cliente ni se diga. 10/10, súper recomendado.',
	},
];

/** Lo que las fotos del perfil y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Pan de queso',
	'Empanadas',
	'Bollería',
	'Tartas',
	'Productos colombianos',
	'Bebidas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pan de queso',
		text: 'Una reseña lo resume así: «nunca había probado el pan de queso y es una absoluta delicia». En la galería se ven las bandejas recién horneadas.',
	},
	{
		title: 'La vitrina',
		text: 'Empanadas, berlinas, bollos rebozados de azúcar, roscas de pan y tartas. Todo expuesto en el mostrador, según las fotos del perfil.',
	},
	{
		title: 'La despensa colombiana',
		text: 'Estanterías con productos envasados colombianos y nevera con bebidas, entre ellas aguas de coco y refrescos.',
	},
];

export const MENU_GROUPS = [
	{
		title: 'Del horno',
		items: [
			{ name: 'Pan de queso', note: 'El que destaca una de las reseñas; en la galería se ven las bandejas.' },
			{ name: 'Panes con queso', note: 'Alargados, con costra de queso recién horneada.' },
			{ name: 'Rosca de pan', note: 'Rosca grande en bolsa, tal como aparece en la vitrina.' },
		],
	},
	{
		title: 'Fritos y bollería',
		items: [
			{ name: 'Empanadas', note: 'Fritas, con relleno, en bandeja.' },
			{ name: 'Berlinas y donuts', note: 'Rebozados de azúcar, algunos con chocolate.' },
			{ name: 'Bollos azucarados', note: 'Redondos y rebozados, junto a los fritos.' },
			{ name: 'Tartas', note: 'En la vitrina, según las fotos del perfil.' },
		],
	},
	{
		title: 'Despensa',
		items: [
			{ name: 'Productos colombianos', note: 'Galletas y envasados en las estanterías del local.' },
			{ name: 'Bebidas', note: 'Nevera con refrescos y aguas de coco, entre otras.' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Panadería Martínez Colombiana?',
		a: 'En la calle Martínez de la Rosa, 116, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre la ubicación exacta y «Cómo llegar» lanza las indicaciones en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'El lunes abre de 8:00 a 21:00; el martes, de 8:00 a 17:00; de miércoles a sábado, de 8:00 a 21:00; y el domingo, de 8:00 a 19:00. El 1 de noviembre el horario podría variar.',
	},
	{
		q: '¿Cómo se puede contactar?',
		a: 'El teléfono de la ficha es el 658 27 16 05. La ficha no publica página web ni correo electrónico.',
	},
	{
		q: '¿Qué se puede comprar?',
		a: 'Las fotos del perfil muestran pan de queso, panes con costra de queso, empanadas, roscas, bollos azucarados, berlinas, tartas, productos colombianos envasados y bebidas. La ficha no publica carta ni precios, así que esta página no los inventa.',
	},
	{
		q: '¿Hay pan de queso?',
		a: 'Sí: una de las reseñas de Google lo menciona expresamente y en la galería aparecen las bandejas de panes con queso. La disponibilidad depende del día.',
	},
	{
		q: '¿Se puede pagar con tarjeta?',
		a: 'La ficha pública no indica los métodos de pago, así que esta página no los afirma. Lo mejor es preguntar en el propio establecimiento.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha de Google no publica información sobre accesibilidad, así que esta página no la afirma. Si necesitas un acceso concreto, llama antes al 658 27 16 05.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'Tiene 3,9 sobre 5 con 18 reseñas en Google. Esta página cita tres: dos de cinco estrellas y una de una estrella sobre los bocadillos, para no quedarse solo con lo bueno.',
	},
];
