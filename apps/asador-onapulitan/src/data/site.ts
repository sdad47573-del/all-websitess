/**
 * Datos de Asador O'Napulitan — C. Lara Castañeda, 19, Puerto de la Torre
 * (29190 Málaga).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Asador O'Napulitan»,
 *   36.7355024,-4.4808437, feature 0xd72f1005a9aa7e3:0x376c2b5f1e18a46b.
 * - Nombre, dirección, categoría, teléfono, valoración, horario,
 *   descripción del negocio, reseñas y galería: ficha pública de Google
 *   consultada en octubre de 2026.
 *
 * Lo que la ficha NO publica: página web, redes sociales, carta, precios ni
 * datos de accesibilidad. La web no inventa esos datos. Los platos que se citan
 * son los que nombran la descripción del negocio y las reseñas de la ficha.
 */

export const BUSINESS = {
	name: "Asador O'Napulitan",
	fullName: "Asador O'Napulitan",
	shortName: 'O\'Napulitan',
	mark: 'ON',
	street: 'C. Lara Castañeda, 19',
	district: 'Puerto de la Torre',
	city: 'Málaga',
	region: 'Andalucía',
	postalCode: '29190',
	country: 'ES',
	siteUrl: 'https://asador-onapulitan.vercel.app',
	geo: { lat: 36.7355024, lng: -4.4808437 },
	featureId: '0xd72f1005a9aa7e3:0x376c2b5f1e18a46b',
	placeId: 'ChIJ46eaWgDxcg0Ra6QYHl8rbDc',
	plusCode: '8C8QPGP9+6M',
	googleCategory: 'Restaurante de comida para llevar',
	phone: '672 72 32 82',
	phoneHref: 'tel:+34672723282',
	tagline: 'Cocina napolitana casera en Puerto de la Torre',
	description:
		"Asador O'Napulitan, en C. Lara Castañeda, 19 (Puerto de la Torre, 29190 Málaga). Cocina casera napolitana para llevar, con recetas de familia y sabor de Nápoles, de lunes a domingo.",
};

export const MAPS = {
	place:
		"https://www.google.com/maps/place/Asador+O'Napulitan/@36.7355024,-4.4808437,17z/data=!3m1!4b1!4m6!3m5!1s0xd72f1005a9aa7e3:0x376c2b5f1e18a46b!8m2!3d36.7355024!4d-4.4808437!16s%2Fg%2F11zgvfw9t0?authuser=0&hl=es&entry=ttu",
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=36.7355024%2C-4.4808437',
	embed: 'https://maps.google.com/maps?q=36.7355024,-4.4808437&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=36.7355024,-4.4808437',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 5,
	count: 18,
	label: '5,0',
};

/** Horario que publica la ficha. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '11:30–15:30' },
	{ dia: 'Martes', horas: '11:30–16:00' },
	{ dia: 'Miércoles', horas: '11:30–16:00' },
	{ dia: 'Jueves', horas: '11:30–16:00' },
	{ dia: 'Viernes', horas: '11:30–16:00' },
	{ dia: 'Sábado', horas: '11:30–16:00' },
	{ dia: 'Domingo', horas: '11:30–16:00' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha avisa de que el Día de Todos los Santos el horario podría ser distinto. El horario puede cambiar sin previo aviso; confírmalo en Google o por teléfono antes de desplazarte.';

/** Lo que la ficha permite afirmar del local. */
export const SERVICIOS = [
	'Cocina napolitana',
	'Comida casera',
	'Recetas de familia',
	'Bocadillos',
	'Tiramisú',
	'Para llevar',
];

export const HIGHLIGHTS = [
	{
		title: 'Nápoles en Málaga',
		text: 'La ficha lo cuenta en primera persona: la historia nace de una tradición familiar que pasa «desde el corazón de Nápoles hasta Málaga». Cada plato quiere ser «un pedacito de nuestra tierra».',
	},
	{
		title: 'Cocina casera y más',
		text: 'El negocio se presenta como «Asador O\'Napulitan (cocina casera y más)». Esa es la carta de identidad: cocina de casa, con recetas auténticas y «MUCHO AMOR», según su descripción.',
	},
	{
		title: 'Bocadillos y tiramisú',
		text: 'Una de las reseñas destaca los dos: «Los bocadillos están deliciosos y los tiramisú son una delicia». La ficha no publica la carta completa.',
	},
	{
		title: 'Comida preparada diferente',
		text: 'Otra reseña resume la experiencia: «Es un gustazo tener cerca comida preparada diferente». En la vitrina aparecen pizza al taglio, croquetas, pasta frita y rollos rellenos, además de los pollos del asador.',
	},
];

/** Solo lo que nombran la descripción del negocio y las reseñas. */
export const MENU = [
	{
		title: 'De Nápoles a Málaga',
		items: [
			{
				name: 'Cocina casera napolitana',
				note: 'la propuesta que anuncia la ficha: recetas auténticas y tradición familiar',
			},
			{
				name: 'Bocadillos',
				note: '«los bocadillos están deliciosos», dice una de las reseñas; en la galería aparece uno con pollo, pimientos y salsa',
			},
			{
				name: 'Tiramisú',
				note: '«los tiramisú son una delicia», en palabras de una reseña',
			},
			{
				name: 'Recetas de familia',
				note: 'la tradición que pasa «de generación en generación», según la descripción del negocio',
			},
		],
	},
	{
		title: 'Del mostrador',
		items: [
			{
				name: 'Pizza al taglio',
				note: 'porciones rectangulares de pizza con tomate, mozzarella y albahaca en la vitrina de las fotos',
			},
			{
				name: 'Croquetas',
				note: 'fritas, en la vitrina y en una bandeja de la galería del local',
			},
			{
				name: 'Pasta frita',
				note: 'trozos de frittata de pasta, en una de las fotos del perfil',
			},
			{
				name: 'Rollos rellenos',
				note: 'de bacon y queso, en la bandeja de la galería; la ficha no publica precios',
			},
		],
	},
	{
		title: 'Del asador',
		items: [
			{
				name: 'Pollos asados',
				note: 'el asador giratorio y el cartel de «pollos asados recién hechos» aparecen en las fotos del local',
			},
			{
				name: 'Patatas',
				note: 'la bandeja de patatas que acompaña a los pollos en el asador, en la galería',
			},
		],
	},
];

/** Reseñas destacadas, tal como aparecen publicadas en la ficha. */
export const RESENAS = [
	{
		texto: 'Los bocadillos estan deliciosos y los tiramisú son una delicia.',
		valor: 5,
	},
	{
		texto: 'Es un gustazo tener cerca comida preparada diferente.',
		valor: 5,
	},
	{
		texto: 'Ellos son una familia encantadora y muy buenos cocineros.',
		valor: 5,
	},
];

export const FAQ = [
	{
		q: "¿Dónde está Asador O'Napulitan?",
		a: 'En la calle Lara Castañeda, 19, en Puerto de la Torre (29190 Málaga). El mapa de esta página abre las coordenadas exactas y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'La ficha publica el lunes de 11:30 a 15:30 y de martes a domingo de 11:30 a 16:00. El Día de Todos los Santos la propia ficha avisa de que el horario podría ser distinto.',
	},
	{
		q: '¿Qué se puede pedir?',
		a: 'La ficha lo presenta como «cocina casera y más» con recetas napolitanas de familia. Las reseñas nombran los bocadillos, los tiramisú y la comida preparada. La ficha no publica la carta completa.',
	},
	{
		q: '¿Se puede comer en el local?',
		a: 'Google lo clasifica como restaurante de comida para llevar. La ficha no detalla servicio de mesa ni terraza; conviene preguntar por teléfono antes de ir a sentarse.',
	},
	{
		q: '¿Cómo se encarga la comida?',
		a: 'El canal que publica la ficha es el teléfono: 672 72 32 82. No consta página web propia, red social ni sistema de pedidos online.',
	},
	{
		q: '¿Hay carta o precios publicados?',
		a: 'La ficha de Google no incluye carta ni importes. Las reseñas hablan de bocadillos, tiramisú y comida preparada, pero no citan precios. La disponibilidad se consulta por teléfono.',
	},
	{
		q: '¿Es accesible?',
		a: 'La ficha no publica datos de accesibilidad: no marca acceso, asientos ni aparcamiento adaptados. Conviene llamar antes si necesitas acceso para silla de ruedas.',
	},
	{
		q: '¿Qué valoración tiene?',
		a: 'La ficha tiene 5,0 sobre 5 con 18 reseñas en el momento de consultarla (noviembre de 2026). Las opiniones destacadas elogian los bocadillos, el tiramisú, la comida preparada y el trato de la familia.',
	},
	{
		q: '¿Tiene página web o redes sociales?',
		a: 'No consta. La ficha pública no enlaza página web ni perfiles sociales, y esta página no enlaza nada que no aparezca en ella.',
	},
];
