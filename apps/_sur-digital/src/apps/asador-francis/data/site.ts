/**
 * Datos de Asador De Pollos Y Comida Casera francis —
 * Carril Sta. Rosa, 2 (Cruz de Humilladero, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador De Pollos Y Comida Casera francis»,
 *   36.7217259,-4.4456258, feature 0xd72f70cc40a78d7:0xa0a1c90c9e368700.
 * - Nombre, dirección, categorías, teléfono, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada en octubre de 2026.
 *
 * La ficha no publica página web, carta ni precios. La web no inventa esos
 * datos: los platos que se citan son los que aparecen en la galería del local y
 * los que nombran las reseñas.
 */

export const BUSINESS = {
	name: 'Asador Francis',
	fullName: 'Asador De Pollos Y Comida Casera francis',
	shortName: 'Francis',
	mark: 'F',
	street: 'Carril Sta. Rosa, 2',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-francis',
	geo: { lat: 36.7217259, lng: -4.4456258 },
	featureId: '0xd72f70cc40a78d7:0xa0a1c90c9e368700',
	placeId: 'ChIJ13gKxAz3cg0RAIc2ngzJoaA',
	plusCode: '8C8QPHC3+MP',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '951 99 49 36',
	phoneHref: 'tel:+34951994936',
	/** Segundo número que aparece en el cartel de la fachada. */
	phoneAlt: '639 81 62 49',
	phoneAltHref: 'tel:+34639816249',
	tagline: 'Pollo asado y comida casera en Cruz de Humilladero',
	description:
		'Asador de pollos y comida casera Francis, en Carril de Santa Rosa, 2 (Cruz de Humilladero, 29010 Málaga). Menús y pollo asado, de miércoles a domingo de 9:30 a 16:30.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+De+Pollos+Y+Comida+Casera+francis/@36.7217259,-4.4456258,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70cc40a78d7:0xa0a1c90c9e368700!8m2!3d36.7217259!4d-4.4456258!16s%2Fg%2F11dyqx_k3z?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7217259%2C-4.4456258',
	embed: 'https://maps.google.com/maps?q=36.7217259,-4.4456258&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7217259,-4.4456258',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 211,
	label: '4,7',
};

/** Horario que publica la ficha: mediodía de miércoles a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '9:30–16:30' },
	{ dia: 'Jueves', horas: '9:30–16:30' },
	{ dia: 'Viernes', horas: '9:30–16:30' },
	{ dia: 'Sábado', horas: '9:30–16:30' },
	{ dia: 'Domingo', horas: '9:30–16:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Pollo asado',
	'Comida casera',
	'Menús',
	'Cocina del día',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'El horno, a la vista',
		text: 'Las fotos del local muestran dos hornos asadores y una plancha en la cocina. El pollo sale de ahí, entero, con la piel tostada y el jugo dentro.',
	},
	{
		title: 'La vitrina',
		text: 'Tortillas de patatas cuajadas en sartén grande, ensaladilla, pasta y guisos. La comida casera se elige a la vista, en el mostrador.',
	},
	{
		title: 'El menú del mediodía',
		text: '«Llevamos unos días probando los menús y estamos encantados», cuenta una reseña. La ficha no publica el menú de cada día ni el precio: se pregunta en el local o por teléfono.',
	},
];

/** Solo lo que nombran las reseñas y lo que aparece en las fotos del local. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'entero, al horno; el plato que da nombre al negocio y el que más se repite en las reseñas',
			},
			{
				name: 'Brochetas',
				note: 'a la plancha, servidas con patatas, queso rallado y cebolla morada en las fotos de la ficha',
			},
			{
				name: 'Costillas asadas',
				note: 'con patatas panadera, en bandeja, tal como aparecen en la vitrina del local',
			},
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Tortilla de patatas',
				note: 'cuajada en sartén grande y expuesta en la vitrina, en porciones',
			},
			{
				name: 'Ensaladilla',
				note: 'en la vitrina, junto a la pasta y los guisos del día',
			},
			{
				name: 'Patatas fritas',
				note: 'ración de acompañamiento; en las fotos aparecen en bandeja, con una salsa blanca al lado',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Llevamos unos días probando los menús y estamos encantados.',
		valor: 5,
	},
	{
		texto: 'Los pollos asados que más me han gustado de Málaga los he comprado aquí.',
		valor: 5,
	},
	{
		texto: 'Ahí se nota el esfuerzo y dedicación.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Francis?',
		a: 'En Carril de Santa Rosa, 2, en el barrio de Cruz de Humilladero (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de miércoles a domingo, de 9:30 a 16:30, y marca el lunes y el martes como cerrados. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante especializado en pollo y el nombre completo del negocio incluye «comida casera». En las fotos del local aparecen pollo asado, patatas, brochetas, costillas, tortillas, ensaladilla y pasta. La carta completa no está publicada en Google.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas habla de probar «los menús». Para saber el menú y el precio del día, lo mejor es llamar al 951 99 49 36.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni un teléfono específico para ellas. El único canal que aparece es el teléfono del local, el 951 99 49 36.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'La ficha no detalla si el local ofrece servicio para llevar. El cartel de la fachada anuncia pollo asado y comidas caseras, y el teléfono es la vía para preguntarlo antes de acercarse.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento ni asientos adaptados.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 211 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo asado, los menús y el esfuerzo de la casa.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
