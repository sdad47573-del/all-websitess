/**
 * Datos de EL TURKO KEBAB PIZZERIA — Av. Carlemany, 53, AD700
 * Escaldes-Engordany (Andorra).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «EL TURKO KEBAB PIZZERIA»,
 *   42.5086103,1.5405986, feature 0x12a58ae779209c67:0xe951168a986897e3.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, Plus Code,
 *   accesibilidad y fotos: respuesta pública de la ficha de Google consultada
 *   el 1 de noviembre de 2026 (4,1 · 658 reseñas).
 *
 * Avisos importantes:
 * - Google la clasifica solo como «Restaurante especializado en döner kebab»;
 *   «pizzería» aparece en el nombre comercial, no como categoría.
 * - La ficha no publica descripción, web, carta, precios ni servicio de comida
 *   para llevar o reparto: la web no los inventa.
 * - Abre todos los días de la semana, de 11:30 a 24:00.
 */

export const BUSINESS = {
	name: 'EL TURKO KEBAB PIZZERIA',
	fullName: 'EL TURKO KEBAB PIZZERIA',
	shortName: 'El Turko',
	mark: 'T',
	street: 'Av. Carlemany, 53',
	district: 'Escaldes-Engordany',
	city: 'Escaldes-Engordany',
	region: 'Andorra',
	postalCode: 'AD700',
	country: 'AD',
	siteUrl: 'https://el-turko-kebab-pizzeria.vercel.app',
	geo: { lat: 42.5086103, lng: 1.5405986 },
	featureId: '0x12a58ae779209c67:0xe951168a986897e3',
	placeId: 'ChIJZ5wgeeeKpRIR45domIoWUek',
	plusCode: 'GG5R+C6 Escaldes-Engordany',
	googleCategory: 'Restaurante especializado en döner kebab',
	phone: '+376 838 127',
	phoneHref: 'tel:+376838127',
	tagline: 'Döner kebab y pizza en la avenida Carlemany',
	description:
		'EL TURKO KEBAB PIZZERIA, en la Av. Carlemany, 53, de Escaldes-Engordany (AD700). Restaurante especializado en döner kebab con pizza, abierto todos los días de 11:30 a 24:00. 4,1 sobre 5 con 658 reseñas en Google.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/EL+TURKO+KEBAB+PIZZERIA/@42.5086103,1.5405986,17z/data=!3m1!4b1!4m6!3m5!1s0x12a58ae779209c67:0xe951168a986897e3!8m2!3d42.5086103!4d1.5405986!16s%2Fg%2F11cjkp3nn9?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=42.5086103%2C1.5405986',
	embed: 'https://maps.google.com/maps?q=42.5086103,1.5405986&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=42.5086103,1.5405986',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.1,
	count: 658,
	label: '4,1',
};

/** Horario que publica la ficha: todos los días, de 11:30 a medianoche. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:30–24:00' },
	{ dia: 'Martes', horas: '11:30–24:00' },
	{ dia: 'Miércoles', horas: '11:30–24:00' },
	{ dia: 'Jueves', horas: '11:30–24:00' },
	{ dia: 'Viernes', horas: '11:30–24:00' },
	{ dia: 'Sábado', horas: '11:30–24:00' },
	{ dia: 'Domingo', horas: '11:30–24:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El resto de días abre siempre, de 11:30 a 24:00.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Döner kebab',
	'Pizza',
	'Restaurante',
	'Todos los días',
	'Hasta las 24:00',
	'Escaldes-Engordany',
	'Av. Carlemany, 53',
	'4,1 en Google',
];

export const HIGHLIGHTS = [
	{
		title: 'Döner kebab y pizza',
		text: 'Google lo clasifica como «Restaurante especializado en döner kebab», y el propio nombre añade «pizzería»: dos cartas en el mismo local, una de kebab y otra de pizza, en el centro de Escaldes-Engordany.',
	},
	{
		title: 'Todos los días, hasta medianoche',
		text: 'Abre de 11:30 a 24:00 los siete días de la semana: comida, cena y lo que llega después. Es un horario continuo, sin cierre a mediodía, poco habitual en la parroquia.',
	},
	{
		title: 'Av. Carlemany, 53',
		text: 'Está en la avenida Carlemany, la calle comercial que une Escaldes-Engordany y Andorra la Vella, en el tramo de Escaldes. Plus Code GG5R+C6.',
	},
	{
		title: '658 opiniones',
		text: 'La ficha reúne 658 reseñas con una media de 4,1 sobre 5 (noviembre de 2026). Es una muestra amplia: hay quien destaca el kebab y quien señala que el local va de lleno en horas punta.',
	},
];

export const FAQ = [
	{
		q: '¿Dónde está El Turko?',
		a: 'En la Av. Carlemany, 53, de Escaldes-Engordany (AD700), en las coordenadas 42.5086103, 1.5405986 y Plus Code GG5R+C6. Es la avenida comercial que enlaza Escaldes con Andorra la Vella, así que queda a poca distancia a pie del centro de las dos parroquias. El mapa de esta página abre la ubicación exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 11:30 a 24:00, sin día de cierre. La ficha advierte de que en festivos —por ejemplo el Día de Todos los Santos— el horario podría ser distinto.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'El teléfono público de la ficha es el +376 838 127. Es la vía para preguntar por la carta, encargar o confirmar el horario de un día concreto; esta web no gestiona pedidos.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'Döner kebab —es la especialidad que figura como categoría en Google— y pizza, que aparece en el nombre del local. La ficha no publica carta ni precios, así que el surtido real, las salsas y los tamaños se consultan por teléfono o en el mostrador.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. Ni la ficha de Google ni esta web publican la carta: el establecimiento no la tiene colgada en su perfil. Los platos y los precios se preguntan en el +376 838 127 o directamente en el local.',
	},
	{
		q: '¿Se puede pedir para llevar o a domicilio?',
		a: 'Google no publica ni el servicio de comida para llevar ni el de reparto en esta ficha, así que esta web no lo da por hecho. Si necesitas recoger o que te lo lleven, confírmalo al llamar al +376 838 127.',
	},
	{
		q: '¿Es accesible?',
		a: 'El único dato de accesibilidad que publica la ficha es negativo: no hay aparcamiento adaptado para sillas de ruedas. Google no informa del acceso ni del interior del local.',
	},
	{
		q: '¿Cuál es la valoración en Google?',
		a: '4,1 sobre 5 con 658 reseñas (consultado el 1 de noviembre de 2026). Es una media con muchas opiniones, así que refleja la experiencia habitual del local, sin ser una nota perfecta.',
	},
	{
		q: '¿Cierra algún día?',
		a: 'No: la ficha marca los siete días de la semana con el mismo horario, de 11:30 a 24:00. Solo el aviso de festivos de Google puede alterarlo.',
	},
	{
		q: '¿Esta web es del restaurante?',
		a: 'No: es una página informativa creada con los datos y las fotos públicas de la ficha de Google Maps. No gestiona pedidos ni reservas y no está vinculada al local. Para cualquier gestión, el canal es el teléfono del establecimiento.',
	},
];

export const LEGAL = {
	razonSocial: 'EL TURKO KEBAB PIZZERIA',
	actualizado: 'Noviembre de 2026',
};
