/**
 * Datos de La Casita Del Pollo Asado Comidas Caseras/dlunch —
 * C. Tomás Escalonilla, 4 (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Casita Del Pollo Asado Comidas
 *   Caseras/dlunch», 36.7243082,-4.443062,
 *   feature 0xd72f70b90d92597:0xf5e491840c4f36f9.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad,
 *   descripción del negocio y reseñas: ficha pública de Google consultada en
 *   octubre de 2026.
 *
 * La propia ficha explica que el negocio cambió de nombre, con el mismo
 * propietario, y que ahora se denomina D’Lunch. No publica página web, carta ni
 * precios. La web no inventa esos datos: los platos que se citan son los que
 * nombran la descripción y las reseñas.
 */

export const BUSINESS = {
	name: 'La Casita del Pollo Asado',
	fullName: 'La Casita Del Pollo Asado Comidas Caseras/dlunch',
	shortName: 'La Casita',
	mark: 'LC',
	street: 'C. Tomás Escalonilla, 4',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://la-casita-del-pollo-asado.vercel.app',
	geo: { lat: 36.7243082, lng: -4.443062 },
	featureId: '0xd72f70b90d92597:0xf5e491840c4f36f9',
	placeId: 'ChIJlyXZkAv3cg0R-TZPDISR5PU',
	plusCode: '8C8QPHF4+PQ',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '744 70 73 39',
	phoneHref: 'tel:+34744707339',
	tagline: 'Comida casera y pollo asado para llevar en Bailén-Miraflores',
	description:
		'La Casita del Pollo Asado, en la calle Tomás Escalonilla, 4 (Bailén-Miraflores, 29010 Málaga). Comida casera para llevar, pollo asado y especialidades árabes, de lunes a domingo de 11:00 a 15:45.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Casita+Del+Pollo+Asado+Comidas+Caseras%2Fdlunch/@36.7243082,-4.443062,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70b90d92597:0xf5e491840c4f36f9!8m2!3d36.7243082!4d-4.443062!16s%2Fg%2F11cmg1ctvc?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7243082%2C-4.443062',
	embed: 'https://maps.google.com/maps?q=36.7243082,-4.443062&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7243082,-4.443062',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.6,
	count: 25,
	label: '4,6',
};

/** Horario que publica la ficha: todos los días al mediodía salvo el jueves. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:00–15:45' },
	{ dia: 'Martes', horas: '11:00–15:45' },
	{ dia: 'Miércoles', horas: '11:00–15:45' },
	{ dia: 'Jueves', horas: 'Cerrado', closed: true },
	{ dia: 'Viernes', horas: '11:00–15:45' },
	{ dia: 'Sábado', horas: '11:00–15:45' },
	{ dia: 'Domingo', horas: '11:00–15:45' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Pollo asado',
	'Especialidades árabes',
	'Para llevar',
	'Menú del día',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Comida casera para llevar',
		text: 'La descripción del negocio en Google lo dice así: «Somos un establecimiento de comida para llevar casera de calidad y venta al público rápida». Es la promesa de la casa.',
	},
	{
		title: 'Especialidades árabes',
		text: 'La misma descripción invita a «disfrutar de nuestra comida casera y especialidades árabes». La ficha no publica la lista de platos, pero la cocina árabe forma parte de la carta.',
	},
	{
		title: 'El pollo asado',
		text: 'Google clasifica el local como restaurante especializado en pollo. Una de las reseñas lo confirma: «Yo antes iba mucho y estaba muy bien los menús y el pollo buenísimo».',
	},
	{
		title: 'Ahora D’Lunch',
		text: 'La ficha avisa de que la empresa cambió de nombre manteniendo al mismo propietario y que ahora se denomina D’Lunch. El local sigue en la calle Tomás Escalonilla, 4.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'la ficha clasifica el local como restaurante especializado en pollo; una reseña lo llama «buenísimo»',
			},
			{
				name: 'Pollo y medio asado',
				note: 'el cartel del local lo anuncia con ración de patatas grande, ensalada y comida casera',
			},
			{
				name: 'Menú de dos pollos',
				note: 'el cartel lo muestra con ración de patatas grande, refresco de 2 litros y una garrafa de agua',
			},
		],
	},
	{
		title: 'Para acompañar',
		items: [
			{
				name: 'Ración de patatas',
				note: 'aparece en el cartel del local junto al pollo asado, en ración grande',
			},
			{
				name: 'Ensalada',
				note: 'el cartel la incluye en el combo de pollo y medio asado',
			},
		],
	},
	{
		title: 'Casero',
		items: [
			{
				name: 'Comida casera',
				note: '«comida para llevar casera de calidad», según la descripción del negocio en Google',
			},
			{
				name: 'Menú del día',
				note: '«estaba muy bien los menús», dice una de las reseñas; la ficha no publica el menú de cada día',
			},
			{
				name: 'Especialidades árabes',
				note: 'la descripción del negocio las menciona expresamente; la ficha no detalla qué platos son',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Yo antes iba mucho y estaba muy bien los menús y el pollo buenísimo',
		valor: 3,
	},
	{
		texto: 'Excelente atención al público y buena comida',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está La Casita del Pollo Asado?',
		a: 'En la calle Tomás Escalonilla, 4, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿La Casita es lo mismo que D’Lunch?',
		a: 'Sí. La ficha de Google explica que la empresa cambió de nombre manteniendo al mismo propietario y que actualmente se denomina D’Lunch. La dirección y el teléfono son los mismos.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de 11:00 a 15:45 de lunes a miércoles, viernes, sábado y domingo, y marca el jueves como cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La descripción del negocio habla de «comida para llevar casera de calidad» y de «especialidades árabes». El cartel del local anuncia el pollo y medio asado con patatas y ensalada, y el menú de dos pollos con patatas y refresco. Las reseñas nombran además los menús y el pollo asado.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca que los menús estaban «muy bien». Para saber el menú y el precio del día, lo mejor es llamar al 744 70 73 39.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. La descripción del negocio se presenta como «comida para llevar casera». La ficha no detalla condiciones ni pedidos online, así que los encargos se consultan por teléfono en el 744 70 73 39.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni un teléfono específico para ellas. El único canal que aparece es el teléfono del local, el 744 70 73 39.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca el acceso para sillas de ruedas. No publica datos sobre asientos, aseos ni aparcamiento adaptado.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,6 sobre 5 con 25 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian el pollo, los menús y la atención.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
