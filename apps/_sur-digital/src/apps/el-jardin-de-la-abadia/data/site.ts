/**
 * Datos de El Jardín de la Abadía Comida casera — Pl. Murillo Carrera, 6,
 * Carretera de Cádiz (29002 Málaga).
 * Ficha pública de Google Maps consultada en octubre de 2026.
 *
 * La ficha no publica descripción del negocio, carta ni precios. La web no
 * inventa esos datos: solo cita la categoría de Google y lo que mencionan las
 * reseñas públicas.
 */

export const BUSINESS = {
	name: 'El Jardín de la Abadía Comida casera',
	shortName: 'El Jardín de la Abadía',
	mark: 'JA',
	street: 'Pl. Murillo Carrera, 6',
	district: 'Carretera de Cádiz',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29002',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-jardin-de-la-abadia',
	geo: { lat: 36.7062204, lng: -4.4354665 },
	featureId: '0xd72f7cf6d978787:0x148dbc008bf30c62',
	placeId: 'ChIJh4eXbc_3cg0RYgzziwC8jRQ',
	googleCategory: 'Comida a domicilio',
	phone: '695 04 47 27',
	phoneHref: 'tel:+34695044727',
	tagline: 'Comida casera para llevar y a domicilio en Carretera de Cádiz',
	description:
		'El Jardín de la Abadía, comida casera en Pl. Murillo Carrera, 6, Carretera de Cádiz (29002 Málaga). Platos preparados para llevar y servicio a domicilio. Consulta la oferta del día por teléfono.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Jard%C3%ADn+de+la+Abad%C3%ADa+Comida+casera/@36.7062204,-4.4354665,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7cf6d978787:0x148dbc008bf30c62!8m2!3d36.7062204!4d-4.4354665!16s%2Fg%2F11rgqgbkmf',
	cid: 'https://www.google.com/maps?cid=107878214228389115200',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7062204%2C-4.4354665',
	embed: 'https://maps.google.com/maps?q=36.7062204,-4.4354665&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7062204,-4.4354665',
};

/** Valoración visible en la ficha pública al consultarla (octubre de 2026). */
export const RATING = { value: 3.6, count: 45, label: '3,6' };

/** Horario publicado: cierra los lunes y sirve a mediodía. */
export const HORARIO = [
	{ day: 'Lunes', value: 'Cerrado', closed: true },
	{ day: 'Martes a domingo', value: '11:00 – 16:00' },
];
export const HORARIO_AVISO =
	'La ficha de Google marca servicio de 11:00 a 16:00 de martes a domingo, con cierre los lunes. El cartel del escaparate, en cambio, anuncia platos de martes a sábado y cierre domingos y lunes. En festivos el horario puede variar: confírmalo por teléfono antes de pedir.';

/**
 * Parrilla que anuncia el cartel del escaparate, visible en una de las fotos de
 * la ficha. Puede haber cambiado: sirve como orientación, no como carta fija.
 */
export const PLATOS_DIA = [
	{ day: 'Martes', dishes: 'Lentejas, coles, bacalao con tomate' },
	{ day: 'Miércoles', dishes: 'Callos, cocido de fideos' },
	{ day: 'Jueves', dishes: 'Paella, potaje de judías' },
	{ day: 'Viernes', dishes: 'Gazpachuelo, puchero o potaje de garbanzos con bacalao' },
	{ day: 'Sábado', dishes: 'Paella, fideos, papas a lo pobre y cocido de papas' },
];

export const SERVICIOS = [
	'Comida casera',
	'Platos preparados',
	'Comida para llevar',
	'Comida a domicilio',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina casera',
		text: 'El propio nombre del establecimiento anuncia comida casera, y sus fotos muestran platos preparados en bandejas y tuppers listos para servir.',
	},
	{
		title: 'Para llevar o a domicilio',
		text: 'Google lo clasifica como servicio de comida a domicilio. El local está en la plaza Murillo Carrera, junto a la Carretera de Cádiz, y atiende a mediodía.',
	},
	{
		title: 'Opiniones dispares',
		text: `La ficha reúne ${RATING.count} reseñas con una media de ${RATING.label}. Hay clientes que destacan las albóndigas y la ensaladilla, y también quejas sobre platos concretos.`,
	},
];

/** Solo lo que aparece en la ficha: la categoría de Google y las reseñas. */
export const MENU = [
	{
		title: 'Según las reseñas',
		items: [
			{
				name: 'Albóndigas con salsa de almendras',
				note: 'uno de los platos que una reseña de la ficha califica como «muy buenas»',
			},
			{
				name: 'Ensaladilla rusa',
				note: 'citada en la misma opinión, junto a las albóndigas',
			},
			{
				name: 'Comida preparada',
				note: 'un cliente habitual de comida preparada describe el local como «un gran descubrimiento»',
			},
		],
	},
];

/** Opiniones publicadas en la ficha, tal como aparecen. */
export const RESENAS = [
	{
		texto: '«Las albóndigas con salsa de almendras y ensaladilla rusa muy buenas.»',
		valor: 5,
	},
	{
		texto: '«Soy consumidor de comida preparada hace años y ha sido un gran descubrimiento.»',
		valor: 5,
	},
	{
		texto: '«Dicen que es comida casera y te venden croquetas congeladas.»',
		valor: 1,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Jardín de la Abadía?',
		a: 'En la plaza Murillo Carrera, 6, en la zona de la Carretera de Cádiz (29002 Málaga). Puedes abrir la ficha o iniciar la ruta desde los botones de esta página.',
	},
	{
		q: '¿Cuál es el teléfono?',
		a: 'El teléfono de la ficha pública es el 695 04 47 27. Llama para consultar los platos del día, encargar o preguntar por el reparto a domicilio.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha de Google marca de 11:00 a 16:00 de martes a domingo, con cierre los lunes. El cartel del escaparate anuncia platos de martes a sábado y cierre domingos y lunes, así que conviene llamar antes de acercarse, sobre todo en fin de semana.',
	},
	{
		q: '¿Qué se come cada día?',
		a: 'El cartel del escaparate anuncia: martes lentejas, coles y bacalao con tomate; miércoles callos y cocido de fideos; jueves paella y potaje de judías; viernes gazpachuelo, puchero o potaje de garbanzos con bacalao; sábado paella, fideos, papas a lo pobre y cocido de papas. Es una parrilla orientativa que puede cambiar.',
	},
	{
		q: '¿Hay reparto a domicilio?',
		a: 'Google clasifica el negocio como servicio de comida a domicilio. La ficha no detalla zonas ni condiciones del reparto, así que conviene preguntarlo por teléfono.',
	},
	{
		q: '¿Qué platos preparan?',
		a: 'La ficha no publica carta ni precios. Las reseñas citan albóndigas con salsa de almendras, ensaladilla rusa y comida preparada. El surtido del día se consulta llamando.',
	},
	{
		q: '¿Es accesible?',
		a: 'Google marca acceso para sillas de ruedas. En cambio, indica que no hay aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: `Al consultar la ficha en octubre de 2026 mostraba ${RATING.label} sobre 5 con ${RATING.count} reseñas. Las opiniones están divididas: hay clientes muy satisfechos con los guisos y otros que critican el uso de producto congelado, así que conviene leerlas antes de pedir.`,
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'La ficha no describe servicio de mesa. El nombre y la categoría apuntan a comida casera preparada para llevar o a domicilio; pregunta al local si tiene mesas antes de acercarte.',
	},
];
