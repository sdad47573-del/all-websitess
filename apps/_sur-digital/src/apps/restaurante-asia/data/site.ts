/**
 * Datos de Restaurante Asia — C. Pedro Martínez Artola, 12, Errekalde,
 * 48012 Bilbao (Bizkaia).
 *
 * Fuentes públicas:
 * - Enlace de Google Maps aportado: «Restaurante Asia», 43.2563478,-2.9356968,
 *   feature 0xd4e4f28eb3a55cf:0x2985eca46382db05.
 * - Nombre, dirección, teléfono, categoría, valoración, horario, accesibilidad y
 *   reseñas: ficha pública de Google consultada el 1 de noviembre de 2026.
 * - Fotos: perfil del establecimiento en Google Maps
 *   (scripts/fetch-maps-photos.mjs). Entre ellas está la carta impresa, de donde
 *   salen el segundo teléfono, el Bizum y el reparto gratuito con pedido mínimo.
 *
 * La ficha no publica carta con precios ni web propia: lo que aparece en la web
 * es lo que dice la ficha, lo que se lee en la carta fotografiada y lo que se
 * reconoce en las fotos del perfil.
 */

export const BUSINESS = {
	name: 'Restaurante Asia',
	fullName: 'Restaurante Asia',
	shortName: 'Asia',
	mark: '亚',
	street: 'C. Pedro Martínez Artola, 12',
	district: 'Errekalde',
	city: 'Bilbao',
	region: 'País Vasco',
	postalCode: '48012',
	country: 'ES',
	siteUrl: 'https://www.sur-digital.com/restaurante-asia',
	geo: { lat: 43.2563478, lng: -2.9356968 },
	featureId: '0xd4e4f28eb3a55cf:0x2985eca46382db05',
	placeId: 'ChIJz1U66yhPTg0RBduCY6TshSk',
	plusCode: '8CMV7347+GP',
	googleCategory: 'Restaurante chino',
	phone: '946 57 50 32',
	phoneHref: 'tel:+34946575032',
	phoneCard: '632 11 84 74',
	phoneCardHref: 'tel:+34632118474',
	tagline: 'Comida china en Bilbao',
	description:
		'Restaurante Asia, en la calle Pedro Martínez Artola, 12 (48012 Bilbao, Errekalde). Cocina china de siempre: arroces y tallarines, pato laqueado, dim sum, carnes y marisco, en un comedor con mesas redondas. De 12:00 a 16:00 y de 19:30 a 23:30; miércoles cerrado.',
};

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurante+Asia/@43.2563478,-2.9356968,17z/data=!4m6!3m5!1s0xd4e4f28eb3a55cf:0x2985eca46382db05!8m2!3d43.2563478!4d-2.9356968!16s%2Fg%2F11fjytk65z?authuser=0&hl=es&entry=ttu',
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es`,
	directions: 'https://www.google.com/maps/dir/?api=1&destination=43.2563478%2C-2.9356968',
	embed: 'https://maps.google.com/maps?q=43.2563478,-2.9356968&z=17&hl=es&output=embed',
	streetView: 'https://www.google.com/maps/@?api=1&map_action=pano&viewpoint=43.2563478,-2.9356968',
};

/** Valoración publicada en la ficha (1 de noviembre de 2026). */
export const RATING = {
	value: 4.4,
	count: 236,
	label: '4,4',
};

/** Horario que publica la ficha: mediodía y noche, con el miércoles cerrado. */
export const HORARIO = [
	{ dia: 'Lunes', horas: '12:00–16:00 · 19:30–23:30' },
	{ dia: 'Martes', horas: '12:00–16:00 · 19:30–23:30' },
	{ dia: 'Miércoles', horas: 'Cerrado', closed: true },
	{ dia: 'Jueves', horas: '12:00–16:00 · 19:30–23:30' },
	{ dia: 'Viernes', horas: '12:00–16:00 · 19:30–23:30' },
	{ dia: 'Sábado', horas: '12:00–16:00 · 19:30–23:30' },
	{ dia: 'Domingo', horas: '12:00–16:00 · 19:30–23:30' },
];

/** Aviso que acompaña al horario en la ficha. */
export const HORARIO_AVISO =
	'La ficha advertía de que el Día de Todos los Santos (1 de noviembre) el horario podría ser distinto. El horario puede cambiar sin aviso; confírmalo por teléfono antes de ir.';

/** Lo que la ficha, la carta y las fotos permiten afirmar. */
export const SERVICIOS = [
	'Restaurante chino',
	'Arroces y tallarines',
	'Pato laqueado',
	'Dim sum',
	'Marisco',
	'A domicilio gratis',
	'Comedor con mesas redondas',
	'Acceso adaptado',
];

export const HIGHLIGHTS = [
	{
		title: 'Cocina china, de la de siempre',
		text: 'La ficha lo clasifica como «restaurante chino» y su propia carta lo anuncia como «la comida china más auténtica». Arroces, tallarines, pato, dim sum y marisco: una carta larga de platos al wok y a la plancha.',
	},
	{
		title: 'Pato laqueado y dim sum',
		text: 'En las fotos del perfil aparecen el pato laqueado cortado en láminas con su salsa y las tiras de cebolleta, y una mesa llena de platos: dim sum al vapor en la cesta de bambú, cha siu bao, arroz frito con gambas y tallarines con ternera.',
	},
	{
		title: 'Mesas redondas y mural',
		text: 'El comedor tiene mesas redondas de mantel blanco con el disco giratorio en el centro, sillas negras y un gran mural de bambú con caracteres y farolillos. Es un sitio de mantel para venir en grupo y pedir varios platos al centro.',
	},
	{
		title: '4,4 sobre 5 con 236 reseñas',
		text: 'La ficha de Google le da 4,4 sobre 5 con 236 opiniones (noviembre de 2026). Las reseñas que se ven destacan el arroz frito, la costilla, el tofu y los fideos, y la sensación de comer comida china auténtica a buen precio.',
	},
];

/** Reseña publicada en la ficha pública de Google. */
export const RESENAS = [
	{
		texto: 'Arroz frito, costilla, tofu y fideos eran deliciosos!',
		valor: 5,
	},
];

/**
 * Lo que se reconoce en las fotos del perfil y lo que anuncia la carta
 * fotografiada. La ficha no publica precios, así que no se ponen importes.
 */
export const MENU = [
	{
		title: 'Arroces y tallarines',
		items: [
			{ name: 'Arroz tres delicias', note: 'el clásico de la casa, con huevo, jamón y verduras' },
			{ name: 'Arroz frito con gambas', note: 'con gambas y huevo, como el de las fotos con el wok' },
			{ name: 'Tallarines con ternera', note: 'fideos de arroz salteados con ternera y verduras' },
			{ name: 'Tallarines crujientes', note: 'en la carta impresa, en el apartado de arroces y pastas' },
		],
	},
	{
		title: 'Carnes y pato',
		items: [
			{ name: 'Pato laqueado', note: 'cortado en láminas, con salsa y tiras de cebolleta' },
			{ name: 'Costilla agridulce', note: 'la costilla que menciona la reseña de Google' },
			{ name: 'Pollo con curry', note: 'con arroz blanco, en la carta de carnes' },
			{ name: 'Ternera con verduras', note: 'salteada al wok' },
		],
	},
	{
		title: 'Marisco y dim sum',
		items: [
			{ name: 'Dim sum al vapor', note: 'en cesta de bambú, como se ve en la mesa de las fotos' },
			{ name: 'Cha siu bao', note: 'bollos rellenos de cerdo, al vapor' },
			{ name: 'Gambas con verduras', note: 'en el apartado de marisco de la carta' },
			{ name: 'Calamares con verduras', note: 'salteados, con la verdura al dente' },
		],
	},
	{
		title: 'Entrantes y postres',
		items: [
			{ name: 'Rollitos de primavera', note: 'de verdura o de marisco, en la carta de entrantes' },
			{ name: 'Tempura de verdura', note: 'rebozado ligero, para empezar' },
			{ name: 'Sopa agripicante', note: 'la sopa picante de la carta' },
			{ name: 'Mochi y helado frito', note: 'en el apartado de postres de la carta' },
		],
	},
];

export const FAQ = [
	{
		q: '¿Dónde está Restaurante Asia?',
		a: 'En la calle Pedro Martínez Artola, 12, barrio de Errekalde, 48012 Bilbao (Bizkaia). La ficha de Google sitúa el restaurante en las coordenadas 43.2563478, -2.9356968. El mapa de esta página abre esa posición exacta y el botón «Cómo llegar» lanza la ruta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Según la ficha de Google, abre todos los días de 12:00 a 16:00 y de 19:30 a 23:30, excepto el miércoles, que está cerrado todo el día. El día que se consultó la ficha (1 de noviembre) Google advertía de que el horario podría ser distinto por el Día de Todos los Santos.',
	},
	{
		q: '¿A qué teléfono se llama?',
		a: 'La ficha de Google publica el 946 57 50 32. La carta impresa que aparece en las fotos del perfil añade el 632 11 84 74, con la indicación de Bizum. No hay web propia ni reservas online: se llama para reservar o para pedir.',
	},
	{
		q: '¿Reparten a domicilio?',
		a: 'Sí. La carta que el restaurante tiene fotografiada en su perfil de Google anuncia «servicio a domicilio gratis, pedido mínimo 12 €». El reparto se pide por teléfono, en el 946 57 50 32 o en el 632 11 84 74. La ficha no detalla la zona de reparto, así que conviene preguntar por tu barrio.',
	},
	{
		q: '¿Hay que reservar?',
		a: 'La ficha no ofrece reservas online y el restaurante no tiene página propia. Las mesas se piden por teléfono, en el 946 57 50 32. El comedor tiene mesas redondas grandes, así que para grupos conviene llamar con tiempo.',
	},
	{
		q: '¿Qué se puede comer?',
		a: 'La carta tiene arroces y tallarines, carnes, pato, marisco, entrantes y postres. En las fotos del perfil aparecen arroz frito con gambas, tallarines con ternera y verduras, pato laqueado con su salsa, dim sum al vapor, cha siu bao, costilla, pollo y una mesa llena de platos para compartir.',
	},
	{
		q: '¿Cuánto cuesta?',
		a: 'La ficha no publica precios. La carta impresa del perfil los lleva impresos, pero pueden cambiar: el precio de cada plato se confirma al llamar o en el propio restaurante. El reparto es gratuito con un pedido mínimo de 12 €.',
	},
	{
		q: '¿Se puede ir en silla de ruedas?',
		a: 'La ficha marca acceso para sillas de ruedas y asientos adaptados. No marca aparcamiento adaptado, así que si vas en coche conviene mirar la zona antes.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'La ficha no la menciona y las fotos del perfil son todas del comedor de dentro, con mesas redondas y mantel blanco. La entrada da directamente a la calle, sin mesas en la acera a la vista.',
	},
];

export const LEGAL = {
	razonSocial: 'Restaurante Asia',
	actualizado: 'Noviembre de 2026',
};
