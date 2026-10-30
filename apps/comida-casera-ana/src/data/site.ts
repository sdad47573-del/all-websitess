/**
 * Datos de Comida Casera Ana — Calle Fernández de Ribera, 34 (41005 Sevilla).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica carta ni precios: la web no inventa platos. Solo cita las
 * categorías de Google, la presentación del negocio y lo que dicen sus reseñas.
 */

export const BUSINESS = {
	name: 'Comida Casera Ana',
	shortName: 'Ana',
	mark: 'CA',
	street: 'Calle Fernández de Ribera, 34',
	district: 'Sevilla',
	city: 'Sevilla',
	region: 'Andalucía',
	postalCode: '41005',
	country: 'ES',
	siteUrl: 'https://comida-casera-ana.vercel.app',
	geo: { lat: 37.3762256, lng: -5.9695631 },
	featureId: '0xd126f4fef8757bb:0xf5e36b17f61e3841',
	placeId: 'ChIJu1eH709vEg0RQTge9hdr4_U',
	googleCategory: 'Tienda de comida para llevar',
	phone: '604 83 82 97',
	phoneHref: 'tel:+34604838297',
	tagline: 'Comida casera para llevar y a domicilio en Sevilla',
	description:
		'Comida Casera Ana, tienda de comida para llevar en Calle Fernández de Ribera, 34 (41005 Sevilla). Platos caseros preparados con ingredientes frescos y recetas de toda la vida, para recoger o a domicilio.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/COMIDA+CASERA+ANA+Tienda+de+comida+para+llevar/@37.3762256,-5.9695631,17z/data=!3m1!4b1!4m6!3m5!1s0xd126f4fef8757bb:0xf5e36b17f61e3841!8m2!3d37.3762256!4d-5.9695631!16s%2Fg%2F11x_71_q84',
	cid: 'https://www.google.com/maps?cid=117067538838100025925',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=37.3762256%2C-5.9695631',
	embed: 'https://maps.google.com/maps?q=37.3762256,-5.9695631&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=37.3762256,-5.9695631',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 4.8, count: 47, label: '4,8' };

/** Horario publicado en la ficha: jornada larga de lunes a viernes y sábado corto. */
export const HORARIO = [
	{ day: 'Lunes a viernes', value: '9:00 – 20:00' },
	{ day: 'Sábado', value: '9:00 – 16:00' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];
export const HORARIO_AVISO =
	'La ficha marca de 9:00 a 20:00 de lunes a viernes, de 9:00 a 16:00 el sábado y cierre los domingos. En festivos el horario puede variar: conviene confirmarlo por teléfono antes de ir.';

export const SERVICIOS = [
	'Comida casera',
	'Para llevar',
	'Comida a domicilio',
	'Ingredientes frescos',
	'Recetas de toda la vida',
];

export const HIGHLIGHTS = [
	{
		title: 'Casero, de verdad',
		text: 'El negocio se presenta en Google como comida casera «hecha con cariño y con el sabor de siempre», con ingredientes frescos y recetas de toda la vida.',
	},
	{
		title: 'Para llevar o a casa',
		text: 'Google lo clasifica como restaurante de comida para llevar, productor de alimentos y servicio de comida a domicilio. Se puede recoger en el local o pedir reparto.',
	},
	{
		title: 'De cuchara y vitrina',
		text: 'Sus fotos muestran lentejas con chorizo en cazuela, tortillas de patata, espinacas con garbanzos, croquetas y carnes guisadas: cocina de todos los días, para comer en casa.',
	},
	{
		title: 'Jornada larga',
		text: `Abre de 9:00 a 20:00 de lunes a viernes y de 9:00 a 16:00 el sábado, con cierre los domingos. Cuenta con ${RATING.count} reseñas y una media de ${RATING.label} sobre 5.`,
	},
];

/** La ficha no publica carta ni precios: se citan los platos que muestran sus fotos. */
export const MENU = [
	{
		title: 'Lo que se ve en la vitrina',
		items: [
			{
				name: 'Lentejas con chorizo',
				note: 'estofado en cazuela de barro, tal como aparece en las fotos del local',
			},
			{
				name: 'Tortilla de patata',
				note: 'en las fotos se ven varias tortillas enteras y empanadas en la bandeja',
			},
			{
				name: 'Espinacas con garbanzos',
				note: 'plato de cuchara que muestra una de las fotografías de la ficha',
			},
		],
	},
	{
		title: 'Para completar',
		items: [
			{
				name: 'Croquetas caseras',
				note: 'aparecen recién hechas en una bandeja blanca en las fotos del negocio',
			},
			{
				name: 'Carnes guisadas',
				note: 'otra de las bandejas que se ve en la galería del establecimiento',
			},
			{
				name: 'Postres',
				note: 'las fotos incluyen cookies y una tarta con merengue y frutos rojos',
			},
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{ texto: '«Comida casera de gran calidad, raciones generosas y precios muy ajustados.»', valor: 5 },
	{ texto: '«Comida exquisita, casera y muy buena relación calidad precio.»', valor: 5 },
	{
		texto: '«¡Uno de los mejores sabores de la comida casera que he probado en Sevilla!!»',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Comida Casera Ana?',
		a: 'En la calle Fernández de Ribera, 34, 41005 Sevilla. Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 604 83 82 97. Llama para consultar los platos del día, encargar o preguntar por el reparto.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha marca de 9:00 a 20:00 de lunes a viernes y de 9:00 a 16:00 el sábado; los domingos cierra. En festivos el horario puede cambiar, así que conviene confirmarlo al llamar.',
	},
	{
		q: '¿Se puede pedir a domicilio?',
		a: 'Google incluye el negocio en la categoría de comida a domicilio. La ficha no detalla zonas ni importes mínimos: pregunta por teléfono antes de encargar.',
	},
	{
		q: '¿Hay carta publicada?',
		a: 'No. La ficha no publica carta ni precios, y esta web no los inventa. La oferta es comida casera del día, así que lo mejor es llamar y preguntar qué hay.',
	},
	{
		q: '¿Cómo preparan la comida?',
		a: 'El propio negocio explica en su presentación que cocina con ingredientes frescos y recetas de toda la vida, buscando el sabor de la comida de casa.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas. Las opiniones visibles elogian la calidad, las raciones y la relación calidad-precio.`,
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha no menciona servicio de mesa ni terraza. El negocio se presenta como tienda de comida para llevar, así que cuenta con recoger el pedido o pedir reparto.',
	},
];
