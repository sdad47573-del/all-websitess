/**
 * Datos de Bunbun chicken — C. Pozo Concejo, 13004 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc30068f93637:0xba47a80ad574d486, place id
 * ChIJNzb5aADDaw0RhtR01QqoR7o).
 *
 * La ficha publica: «Bunbun chicken», categoría «Restaurante especializado en
 * pollo», 4,6 sobre 5 con 73 reseñas, horario de mediodía y noche con el martes
 * cerrado, y código plus 8CCRX3PH+37. No publica teléfono, web propia ni carta:
 * los precios de esta web salen del cartel de la carta que aparece en las fotos
 * del propio perfil de Google Maps.
 */

export const BUSINESS = {
	name: 'Bunbun chicken',
	shortName: 'Bunbun Chicken',
	mark: 'BB',
	street: 'C. Pozo Concejo',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13004',
	country: 'ES',
	siteUrl: 'https://bunbun-chicken.vercel.app',
	geo: { lat: 38.9851811, lng: -3.9218462 },
	featureId: '0xd6bc30068f93637:0xba47a80ad574d486',
	placeId: 'ChIJNzb5aADDaw0RhtR01QqoR7o',
	plusCode: '8CCRX3PH+37',
	category: 'Restaurante especializado en pollo',
	categories: ['Restaurante especializado en pollo'],
	rating: 4.6,
	reviewsCount: 73,
	tagline: 'Pollo frito y hamburguesas en Ciudad Real',
	description:
		'Bunbun chicken, restaurante especializado en pollo en la calle Pozo Concejo, 13004 Ciudad Real. Pollo frito crujiente, hamburguesas, patatas, takoyaki y bubble tea, para comer allí o para llevar. De 12:00 a 16:30 y desde las 19:30; martes cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bunbun+chicken/@38.9851811,-3.9218462,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc30068f93637:0xba47a80ad574d486!8m2!3d38.9851811!4d-3.9218462!16s%2Fg%2F11xdxwn78q',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9851811%2C-3.9218462',
	embed: 'https://maps.google.com/maps?q=38.9851811,-3.9218462&z=17&hl=es&output=embed',
};

/** Horario que publica la ficha: dos servicios, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–16:30 · 19:30–24:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:00–16:30 · 19:30–24:00' },
	{ dia: 'Jueves', horas: '12:00–16:30 · 19:30–24:00' },
	{ dia: 'Viernes', horas: '12:00–16:30 · 19:30–0:30' },
	{ dia: 'Sábado', horas: '12:00–16:30 · 19:30–0:30' },
	{ dia: 'Domingo', horas: '12:00–16:30 · 19:30–0:30' },
];

export const HORARIO_AVISO =
	'La ficha da dos servicios: de 12:00 a 16:30 y desde las 19:30, que de domingo a jueves cierra a medianoche y los viernes y sábados a las 0:30. Los martes cierra. En festivos puede cambiar; la propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.';

/** Lo que la ficha y las fotos del local permiten afirmar. */
export const SERVICIOS = [
	'Pollo frito',
	'Hamburguesas',
	'Patatas',
	'Takoyaki',
	'Bubble tea',
	'Para tomar allí',
];

/** Reseñas destacadas en la ficha, con la puntuación de su autor. */
export const RESENAS = [
	{
		quote: 'Este menú que pedimos fue para compartir 2 personas y quedamos satisfechos.',
		rating: 5,
	},
	{
		quote: 'El pollo las salsas y las patatas están riquísimas.',
		rating: 5,
	},
	{
		quote: 'La cara que se me quedó cuando me trajeron un vasito de QUESO RALLADO.',
		rating: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Bunbun chicken?',
		a: 'En la calle Pozo Concejo, 13004 Ciudad Real. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Hay dos servicios: de 12:00 a 16:30 y desde las 19:30. De domingo a jueves cierra a medianoche; los viernes y sábados, a las 0:30. Los martes cierra todo el día.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como restaurante especializado en pollo. Las fotos de su perfil muestran bandejas de pollo frito con salsas, hamburguesas de pollo crujiente, patatas fritas y gajos, ensalada, takoyaki y bebidas tipo bubble tea. El cartel de la carta de esas fotos es de donde salen los precios de esta página.',
	},
	{
		q: '¿Cómo se encarga?',
		a: 'La ficha de Google no publica teléfono ni web, así que esta página no ofrece un canal de pedidos: reúne la dirección, el horario, las fotos y los precios del cartel, y enlaza a la ficha del local, donde aparecen los datos de contacto que Google tenga publicados.',
	},
	{
		q: '¿Se puede comer allí?',
		a: 'Sí. Las fotos del perfil muestran mesas, sillas y el mostrador del local, y las reseñas hablan de pedir menús para compartir. El restaurante tiene también «Hacer un pedido» en su ficha de Google, pero esta web no tramita encargos.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'Los precios que se ven en esta página son los del cartel de la carta fotografiado en el perfil: hamburguesa 4,95 €, patatas 2,95 €, ensalada 3,95 €, salchicha 2,55 €, pincho 3,55 € y bebidas desde 4,55 €. La ficha no publica carta, así que pueden cambiar.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma seis sobre cinco con 73 reseñas. Google destaca tres: dos de cinco estrellas y una de una estrella, quejas incluidas, y las tres están recogidas en esta página con su puntuación.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'No. La ficha de Google no enlaza ninguna web del negocio. Esta página es informativa y no es un canal oficial de pedidos.',
	},
];
