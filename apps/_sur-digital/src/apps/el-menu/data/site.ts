/**
 * Datos de El Menú — C. Sondalezas, 14 (Bailén-Miraflores, 29010 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «El Menú», 36.7234439,-4.4410394,
 *   feature 0xd72f70a5592e397:0xd50f06518fa64fb0.
 * - Nombre, dirección, categoría, teléfono, valoración, horario, accesibilidad
 *   y reseñas: ficha pública de Google consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta ni precios. La
 * web no inventa esos datos. Los platos que se citan son los que nombran las
 * reseñas y los que aparecen en la galería del local.
 */

export const BUSINESS = {
	name: 'El Menú',
	fullName: 'El Menú',
	shortName: 'El Menú',
	mark: 'EM',
	street: 'C. Sondalezas, 14',
	district: 'Bailén-Miraflores',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29010',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/el-menu',
	geo: { lat: 36.7234439, lng: -4.4410394 },
	featureId: '0xd72f70a5592e397:0xd50f06518fa64fb0',
	placeId: 'ChIJl-OSVQr3cg0RsE-mj1EGD9U',
	plusCode: '8C8QPHF5+9H',
	googleCategory: 'Restaurante especializado en pollo',
	phone: '952 30 52 53',
	phoneHref: 'tel:+34952305253',
	tagline: 'Asador de pollos y comidas para llevar en Bailén-Miraflores',
	description:
		'El Menú, en la calle Sondalezas, 14 (Bailén-Miraflores, 29010 Málaga). Asador de pollos y comidas caseras para llevar, con raciones generosas, de martes a domingo de 11:00 a 16:00.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/El+Men%C3%BA/@36.7234439,-4.4410394,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f70a5592e397:0xd50f06518fa64fb0!8m2!3d36.7234439!4d-4.4410394!16s%2Fg%2F1tdgr59g?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7234439%2C-4.4410394',
	embed: 'https://maps.google.com/maps?q=36.7234439,-4.4410394&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7234439,-4.4410394',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.5,
	count: 267,
	label: '4,5',
};

/** Horario que publica la ficha: cierra los lunes y abre al mediodía. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '11:00–16:00' },
	{ dia: 'Miércoles', horas: '11:00–16:00' },
	{ dia: 'Jueves', horas: '11:00–16:00' },
	{ dia: 'Viernes', horas: '11:00–16:00' },
	{ dia: 'Sábado', horas: '11:00–16:00' },
	{ dia: 'Domingo', horas: '11:00–16:00' },
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
	'Buenos precios',
	'Servicio rápido',
	'Acceso para sillas de ruedas',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina casera',
		text: 'Una de las reseñas de la ficha lo resume así: «Comida casera de gran calidad, con sabores auténticos y bien elaborados». Es la cocina que se sirve aquí, sin carta publicada en Google.',
	},
	{
		title: 'Raciones generosas',
		text: '«Buenas raciones y buenos precios, rapidez en atender», cuenta otra de las opiniones. La ficha destaca también el pollo como especialidad de la casa.',
	},
	{
		title: 'Al mediodía',
		text: 'El local abre de martes a domingo, de 11:00 a 16:00, y descansa los lunes. Es un horario de comidas, pensado para el menú del día y para recoger la comida a mediodía.',
	},
	{
		title: 'Comidas para llevar',
		text: 'El cartel de la fachada lo anuncia sin rodeos: «Asador de pollos El Menú. Comidas para llevar». El local está en la calle Sondalezas, 14, con acceso para sillas de ruedas según la ficha; no hay aparcamiento ni asientos adaptados.',
	},
];

/** Solo lo que nombran las reseñas y la categoría de la ficha. */
export const MENU = [
	{
		title: 'Del día',
		items: [
			{
				name: 'Plato del día',
				note: 'la pizarra cambia; la ficha no publica la carta, así que la comida del día se consulta en el local o por teléfono',
			},
			{
				name: 'Tortilla',
				note: '«La tortilla y la fideuá recomendables», dice una de las reseñas publicadas en Google',
			},
			{
				name: 'Fideuá',
				note: 'el otro plato que destaca esa misma reseña, junto a la tortilla',
			},
		],
	},
	{
		title: 'Del pollo',
		items: [
			{
				name: 'Pollo asado',
				note: 'Google clasifica el local como restaurante especializado en pollo; es la especialidad que anuncia la ficha',
			},
		],
	},
	{
		title: 'De la vitrina',
		items: [
			{
				name: 'Migas',
				note: 'la sartén de migas con chorizo y ajos que aparece en la galería del perfil de Google',
			},
			{
				name: 'Pescado al horno con patatas',
				note: 'doradas enteras con hierbas sobre patatas panadera, en una de las fotos del local',
			},
			{
				name: 'Guisos del día',
				note: 'estofado, albóndigas en salsa, pollo en salsa roja y pollo con pimientos en la vitrina',
			},
			{
				name: 'Redondos gratinados',
				note: 'redondos rebozados con queso fundido y tomate troceado, vistos en la galería',
			},
			{
				name: 'Borrachuelos de azúcar',
				note: 'dulces de la casa en tarrinas, con la etiqueta del obrador, en las fotos del perfil',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Buena comida casera, buenas raciones y buenos precios, rapidez en atender.',
		valor: 4,
	},
	{
		texto: 'Comida casera de gran calidad, con sabores auténticos y bien elaborados.',
		valor: 5,
	},
	{
		texto: 'La tortilla y la fideuá recomendables',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Menú?',
		a: 'En la calle Sondalezas, 14, en el barrio de Bailén-Miraflores (29010 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 11:00 a 16:00, y marca el lunes como cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La ficha lo clasifica como restaurante especializado en pollo y las reseñas hablan de comida casera, tortilla y fideuá. En la galería del local aparecen además migas, pescado al horno con patatas, guisos, albóndigas, redondos gratinados y borrachuelos. La carta completa no está publicada en Google: el plato del día se consulta en el local o por teléfono.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Una de las reseñas destaca los «buenos precios» y las «buenas raciones». Para saber el menú y el precio del día, lo mejor es llamar al 952 30 52 53.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica un sistema de reservas online ni un teléfono específico para ellas. El único canal que aparece es el teléfono del local, el 952 30 52 53.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'Sí. El cartel de la fachada anuncia «comidas para llevar» y la galería muestra las bandejas y tarrinas del local. La ficha de Google no detalla condiciones ni pedidos online, así que los encargos se consultan por teléfono en el 952 30 52 53.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha marca el acceso para sillas de ruedas, pero indica que no hay aparcamiento adaptado ni asientos adaptados. No publica más datos sobre el interior ni los aseos.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 4,5 sobre 5 con 267 reseñas en el momento de consultarla (octubre de 2026). Las opiniones destacadas elogian la comida casera, las raciones, los precios y la rapidez del servicio.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
