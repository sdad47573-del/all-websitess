/**
 * Datos de Asador De Pollos Cazuela Filomena — C. Guadalbullón, 18,
 * Palma-Palmilla, 29011 Málaga.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador De Pollos Cazuela Filomena»,
 *   36.7390332,-4.4333191, feature 0xd72f7ac76ae869b:0x1286dd0162909bfd.
 * - Nombre, categoría, dirección, teléfono, valoración, horario y reseñas:
 *   ficha pública de Google consultada en octubre de 2026.
 *
 * La ficha no publica página web, carta, precios ni atributos de
 * accesibilidad. La web no inventa esos datos: los platos que se citan son
 * los que nombran las reseñas del propio perfil.
 */

export const BUSINESS = {
	name: 'Asador Cazuela Filomena',
	fullName: 'Asador De Pollos Cazuela Filomena',
	shortName: 'Filomena',
	mark: 'F',
	street: 'C. Guadalbullón, 18',
	district: 'Palma-Palmilla',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29011',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/asador-cazuela-filomena',
	geo: { lat: 36.7390332, lng: -4.4333191 },
	featureId: '0xd72f7ac76ae869b:0x1286dd0162909bfd',
	placeId: 'ChIJm4audqz3cg0R_ZuQYgHdhhI',
	googleCategory: 'Restaurante',
	phone: '639 20 15 65',
	phoneHref: 'tel:+34639201565',
	tagline: 'Pollo asado, cazuelas y menú del día en Palma-Palmilla',
	description:
		'Asador de pollos Cazuela Filomena, en C. Guadalbullón, 18 (Palma-Palmilla, 29011 Málaga). Pollo asado, pollo en salsa a la pimienta y menú del día, de martes a domingo de 10:00 a 15:30. 4,7 sobre 5 con 17 reseñas.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Asador+De+Pollos+Cazuela+Filomena/@36.7390332,-4.4333191,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f7ac76ae869b:0x1286dd0162909bfd!8m2!3d36.7390332!4d-4.4333191!16s%2Fg%2F11jm0p8vbd?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7390332%2C-4.4333191',
	embed: 'https://maps.google.com/maps?q=36.7390332,-4.4333191&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7390332,-4.4333191',
};

/** Valoración publicada en la ficha (octubre de 2026). */
export const RATING = {
	value: 4.7,
	count: 17,
	label: '4,7',
};

/** Horario que publica la ficha: mediodía, de martes a domingo. */
export const HORARIO = [
	{ dia: 'Lunes', horas: 'Cerrado', closed: true },
	{ dia: 'Martes', horas: '10:00–15:30' },
	{ dia: 'Miércoles', horas: '10:00–15:30' },
	{ dia: 'Jueves', horas: '10:00–15:30' },
	{ dia: 'Viernes', horas: '10:00–15:30' },
	{ dia: 'Sábado', horas: '10:00–15:30' },
	{ dia: 'Domingo', horas: '10:00–15:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. Confirma la apertura en Google o por teléfono antes de desplazarte.';

export const HIGHLIGHTS = [
	{
		title: 'El pollo en salsa a la pimienta',
		text: 'Es lo que más se repite en las reseñas: «Soy fan de su pollo en salsa a la pimienta». Se puede pedir junto al pollo asado clásico del asador.',
	},
	{
		title: 'El menú del día',
		text: 'Una de las reseñas cuenta que compró un menú y salió bien de precio: «me atendieron muy bien y de precio nada mal». La ficha no publica el menú ni el importe.',
	},
	{
		title: 'Mediodía, de martes a domingo',
		text: 'El local abre de 10:00 a 15:30 de martes a domingo y cierra los lunes. Es un asador de barrio pensado para comer a mediodía.',
	},
];

/** Solo lo que nombran las reseñas de la ficha. No hay carta publicada. */
export const MENU = [
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollo asado',
				note: 'la base de la casa; la ficha lo clasifica como restaurante y el negocio se presenta como asador de pollos',
			},
			{
				name: 'Pollo en salsa a la pimienta',
				note: 'la especialidad que destaca una de las reseñas de Google',
			},
		],
	},
	{
		title: 'A mediodía',
		items: [
			{
				name: 'Menú del día',
				note: 'citado en una reseña, que lo valora por la atención y el precio; la ficha no publica ni la lista ni el importe',
			},
			{
				name: 'Cazuelas de la casa',
				note: 'el nombre del asador las anuncia, aunque la ficha no detalla qué guisos hay cada día',
			},
		],
	},
];

/** Reseñas publicadas en la ficha, tal cual. */
export const RESENAS = [
	{
		texto: 'Soy fan de su pollo en salsa a la pimienta!',
		valor: 5,
	},
	{
		texto: 'Compré un menú, me atendieron muy bien y de precio nada mal, volveré 😃',
		valor: 5,
	},
	{
		texto: 'Gracias maruchi, amo asador de pollo filo, volveremos',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Asador Cazuela Filomena?',
		a: 'En la calle Guadalbullón, 18, en Palma-Palmilla (29011 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica de martes a domingo, de 10:00 a 15:30, y marca el lunes como cerrado. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'Las reseñas de la ficha hablan de pollo asado, pollo en salsa a la pimienta y menú del día. El nombre del negocio añade las cazuelas. La ficha no publica la carta completa.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'No. La ficha de Google no incluye carta ni importes; una reseña comenta que el menú estaba «de precio nada mal», pero sin cifra. Para saber qué hay y cuánto cuesta, llama al 639 20 15 65.',
	},
	{
		q: '¿Se puede pedir para llevar?',
		a: 'El negocio se presenta como asador de pollos, un formato habitual de recogida. La ficha no detalla el servicio: confírmalo por teléfono antes de acercarte.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'La ficha no publica reservas online ni un teléfono específico para ellas. El único canal que aparece es el 639 20 15 65.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha pública no publica atributos de accesibilidad, así que esta web no afirma nada al respecto. Si necesitas acceso adaptado, pregunta al local.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: '4,7 sobre 5 con 17 reseñas en el momento de consultar la ficha (octubre de 2026). Las opiniones destacan el pollo en salsa a la pimienta, el menú y la atención.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza un sitio propio ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
