/**
 * Datos de Asador de pollos y comida para llevar «El Laurel» —
 * C. Almogía, 14 (Cruz de Humilladero, 29007 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador de pollos y comida para llevar
 *   "El Laurel"», 36.717033,-4.4545256,
 *   feature 0xd72f76b862bbe7d:0x44c951e83162bd81.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. Los platos que se citan son los que nombran las
 * reseñas y los que aparecen en la galería del local.
 */

export const BUSINESS = {
	name: 'El Laurel',
	fullName: 'Asador de pollos y comida para llevar "El Laurel"',
	shortName: 'El Laurel',
	mark: 'EL',
	street: 'C. Almogía, 14',
	district: 'Cruz de Humilladero',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29007',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-el-laurel',
	geo: { lat: 36.717033, lng: -4.4545256 },
	featureId: '0xd72f76b862bbe7d:0x44c951e83162bd81',
	placeId: 'ChIJfb4rhmv3cg0Rgb1iMehRyUQ',
	plusCode: '8C8QPG8W+R5',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '615 30 02 63',
	phoneHref: 'tel:+34615300263',
	tagline: 'Pollo asado y comida casera para llevar en Cruz de Humilladero',
	description:
		'El Laurel, en la calle Almogía, 14 (Cruz de Humilladero, 29007 Málaga). Asador de pollos y comida casera para llevar, con raciones generosas, de miércoles a lunes de 12:30 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+de+pollos+y+comida+para+llevar+%22El+Laurel%22/@36.717033,-4.4545256,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f76b862bbe7d:0x44c951e83162bd81!8m2!3d36.717033!4d-4.4545256!16s%2Fg%2F11byz79s11?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.717033%2C-4.4545256',
	embed: 'https://maps.google.com/maps?q=36.717033,-4.4545256&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.717033,-4.4545256',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 169,
	label: '4,7',
};

/** Horario que publica la ficha: cierra los martes y abre al mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:30–16:00' },
	{ dia: 'Martes', horas: 'Cerrado', closed: true },
	{ dia: 'Miércoles', horas: '12:30–16:00' },
	{ dia: 'Jueves', horas: '12:30–16:00' },
	{ dia: 'Viernes', horas: '12:30–16:00' },
	{ dia: 'Sábado', horas: '12:30–16:00' },
	{ dia: 'Domingo', horas: '12:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Comida casera',
	'Especialidad en pollo',
	'Comidas para llevar',
	'Raciones generosas',
	'Trato agradable',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'El pollo',
		text: 'Google clasifica El Laurel como restaurante especializado en pollo, y el nombre del local lo dice aún más claro: «Asador de pollos y comida para llevar». El pollo es la casa.',
	},
	{
		title: 'Las migas',
		text: '«Las migas son las mejores que he probado en mi vida», escribe una de las reseñas de la ficha. No es un plato que anuncie el cartel, pero sí el que más ha marcado a quien lo ha probado.',
	},
	{
		title: 'Comida casera',
		text: 'Otra reseña lo cuenta así: «Comida casera muy buena, trato muy agradable y simpáticos y raciones generosas». La cocina del día y el trato de barrio son parte de la casa.',
	},
	{
		title: 'Para llevar',
		text: 'El nombre completo del negocio incluye «comida para llevar». El local está en la calle Almogía, 14, con acceso para sillas de ruedas según la ficha; no hay asientos adaptados.',
	},
];

/** Solo lo que nombran las reseñas y la categoría de la ficha. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'la ficha clasifica el local como restaurante especializado en pollo; es la especialidad del asador',
			},
			{
				name: 'Lasaña de pollo',
				note: '«La lasaña de pollo y la ensaladilla rusa que pedimos muy ricos», dice una de las reseñas',
			},
		],
	},
	{
		title: 'De la casa',
		items: [
			{
				name: 'Migas',
				note: '«Las migas son las mejores que he probado en mi vida», según una de las opiniones publicadas en Google',
			},
			{
				name: 'Ensaladilla rusa',
				note: 'el otro plato que destaca la reseña de la lasaña de pollo',
			},
			{
				name: 'Albóndigas en salsa',
				note: 'la bandeja de albóndigas en salsa de tomate que aparece en la vitrina',
			},
			{
				name: 'Arroz con gambas',
				note: 'la paellera de arroz con gambas y pimientos de la galería del local',
			},
			{
				name: 'Espaguetis con gambas',
				note: 'la bandeja de espaguetis con gambas que se ve en la vitrina',
			},
			{
				name: 'Pescado al horno con patatas',
				note: 'pescado entero al horno con patatas, pimientos y cebolla, en las fotos del local',
			},
			{
				name: 'Comida casera del día',
				note: 'la ficha no publica la carta; la cocina del día se consulta en el local o por teléfono',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'La lasaña de pollo y la ensaladilla rusa que pedimos muy ricos.',
		valor: 4,
	},
	{
		texto: 'Comida casera muy buena, trato muy agradable y simpáticos y raciones generosas.',
		valor: 5,
	},
	{
		texto: 'Las migas son las mejores que he probado en mi vida.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Laurel?',
		a: 'En la calle Almogía, 14, en el barrio de Cruz de Humilladero (29007 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de miércoles a lunes, de 12:30 a 16:00, y marca el martes como cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante especializado en pollo. Las reseñas nombran el pollo, la lasaña de pollo, la ensaladilla rusa, las migas y la comida casera. La carta completa no está publicada en Google: el plato del día se consulta en el local o por teléfono.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca las «raciones generosas». Para saber el menú y el precio del día, lo mejor es llamar al 615 30 02 63.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. El nombre del negocio es «Asador de pollos y comida para llevar El Laurel». La ficha no detalla condiciones ni pedidos online, así que los encargos se consultan por teléfono en el 615 30 02 63.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni un teléfono específico para ellas. El único canal que aparece es el teléfono del local, el 615 30 02 63.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca el acceso para sillas de ruedas, pero indica que no hay asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,7 sobre 5 con 169 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian las migas, la comida casera, las raciones y el trato.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
