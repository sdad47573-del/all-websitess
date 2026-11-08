/**
 * Datos de Makao - Street Food — Cam. los Mártires, 13005 Ciudad Real.
 *
 * Fuente: ficha pública de Google Maps del establecimiento, consultada en
 * noviembre de 2026 (feature 0xd6bc3de61c5bf95:0xb8358fc79b593899, place id
 * ChIJlb_FYd7Daw0RmThZm8ePNbg, código /g/11tdrgcqbw).
 *
 * La ficha publica: «Makao - Street Food», categoría «Restaurante especializado
 * en comida ecléctica», teléfono 683 30 73 81, 4,3 sobre 5 con 841 reseñas,
 * horario de comidas y cenas con el martes cerrado, enlace de reservas y una
 * descripción firmada por el negocio. No publica carta con precios.
 */

export const BUSINESS = {
	name: 'Makao - Street Food',
	shortName: 'Makao',
	mark: 'MK',
	street: 'Cam. los Mártires',
	district: 'Ciudad Real',
	city: 'Ciudad Real',
	region: 'Castilla-La Mancha',
	regionName: 'Castilla-La Mancha',
	postalCode: '13005',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/makao-street-food',
	geo: { lat: 38.9939101, lng: -3.9218651 },
	featureId: '0xd6bc3de61c5bf95:0xb8358fc79b593899',
	placeId: 'ChIJlb_FYd7Daw0RmThZm8ePNbg',
	plusCode: '8CCRX3VH+H7',
	category: 'Restaurante especializado en comida ecléctica',
	categories: ['Restaurante especializado en comida ecléctica'],
	phone: '683 30 73 81',
	phoneHref: '+34683307381',
	rating: 4.3,
	reviewsCount: 841,
	tagline: 'Comida callejera del mundo en Ciudad Real',
	/** Descripción que firma el propio negocio en su ficha. */
	ownerDescription:
		'La mejor comida callejera de cada rincón del mundo en pleno centro de Ciudad Real.',
	description:
		'Makao - Street Food, comida callejera del mundo en el Camino de los Mártires, 13005 Ciudad Real. Quesadillas, hamburguesas y cocina ecléctica en un local con ambiente, para comer, cenar o reservar. Martes cerrado. Teléfono 683 30 73 81.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Makao+-+Street+Food/@38.9939101,-3.9218651,17z/data=!3m1!4b1!4m6!3m5!1s0xd6bc3de61c5bf95:0xb8358fc79b593899!8m2!3d38.9939101!4d-3.9218651!16s%2Fg%2F11tdrgcqbw',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=38.9939101%2C-3.9218651',
	embed: 'https://maps.google.com/maps?q=38.9939101,-3.9218651&z=17&hl=es&output=embed',
};

/** Enlace de reservas que publica la propia ficha de Google. */
export const RESERVAS =
	'https://bookings.agorapos.com/reservas/widget/1559/calendario/50db7692f80567d3cfe767117ae6302d43d005f0';

/** Horario que publica la ficha: comidas y cenas, con el martes cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '13:00–17:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '13:00–17:00 · 20:00–24:00' },
	{ dia: 'Jueves', horas: '13:00–17:00 · 20:00–24:00' },
	{ dia: 'Viernes', horas: '13:00–1:30' },
	{ dia: 'Sábado', horas: '13:00–1:30' },
	{ dia: 'Domingo', horas: '13:00–1:00' },
];

export const HORARIO_AVISO =
	'La ficha abre de 13:00 a 17:00 los lunes y de 13:00 a 17:00 y de 20:00 a 24:00 miércoles y jueves, mientras que viernes y sábado alarga hasta la 1:30 y el domingo hasta la 1:00. Los martes cierra. En festivos puede cambiar: la propia ficha avisa de que en el Día de Todos los Santos el horario podría ser distinto.';

/** Lo que la ficha y las reseñas permiten afirmar. */
export const SERVICIOS = [
	'Comida callejera',
	'Quesadillas',
	'Hamburguesas',
	'Para cenar',
	'Reservas online',
	'Martes cerrado',
];

/** Reseñas destacadas en la ficha, todas de cinco estrellas. */
export const RESENAS = [
	{
		quote: 'Las quesadillas con panceta exquisitas y pedimos hamburguesas muy ricas.',
		rating: 5,
	},
	{
		quote: 'Comida y servicios perfectos, buen ambiente y camareros muy atentos y amables.',
		rating: 5,
	},
	{
		quote: 'La comida está buenísima, el local muy guay y la camarera muy atenta.',
		rating: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Makao Street Food?',
		a: 'En el Camino de los Mártires, 13005 Ciudad Real. El mapa de esta página lleva al punto exacto que publica Google y el botón «Cómo llegar» abre las indicaciones en Google Maps.',
	},
	{
		q: '¿Cuál es el horario?',
		a: 'Los lunes de 13:00 a 17:00; miércoles y jueves de 13:00 a 17:00 y de 20:00 a 24:00; viernes y sábado de 13:00 a 1:30; y domingo de 13:00 a 1:00. Los martes cierra.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo clasifica como restaurante especializado en comida ecléctica y el negocio se presenta como «la mejor comida callejera de cada rincón del mundo». Las reseñas que Google destaca hablan de quesadillas con panceta y de hamburguesas. No hay carta publicada con precios.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Sí. La ficha de Google enlaza el calendario de reservas del propio restaurante, y en esta página tienes ese enlace en el botón «Reservar». Las reservas se gestionan en esa plataforma, no aquí.',
	},
	{
		q: '¿Hay opciones vegetarianas?',
		a: 'La ficha no publica carta ni alérgenos, así que esta página no lo afirma. Lo mejor es llamar al 683 30 73 81 y preguntar por las opciones del día.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica carta ni precios y esta web no inventa importes. Los precios se consultan en el local o llamando al teléfono publicado.',
	},
	{
		q: '¿El local es accesible?',
		a: 'La ficha marca entrada, aseo y asientos accesibles para sillas de ruedas.',
	},
	{
		q: '¿Qué valoración tiene en Google?',
		a: 'Cuatro coma tres sobre cinco con 841 reseñas. Las tres que Google destaca son de cinco estrellas y hablan de la comida, el ambiente y el trato; en la ficha están todas, también las que puntúan por debajo.',
	},
	{
		q: '¿Tiene web propia?',
		a: 'La ficha de Google no enlaza ninguna web del negocio, solo su calendario de reservas. Esta página es informativa y no es un canal oficial de pedidos.',
	},
];
