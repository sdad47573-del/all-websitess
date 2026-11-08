/**
 * Datos de Bar Restaurante Pasur — Pol. Ind. Autopista Sur,
 * Calle Peri 15, Nave 19, 12006 Castelló de la Plana.
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Bar Restaurante Pasur», 39.977112,
 *   -0.066699, feature 0xd6000a61e64be89:0xe58d5ccf26c72bb3 (dirección,
 *   teléfono, horario, categoría, nota, reseñas y accesibilidad).
 * - Reseñas públicas de Google citadas en la web.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   a src/assets/fotos/.
 *
 * La ficha no publica carta ni precios: se describen las familias de la
 * carta que citan las reseñas (almuerzos, bocadillos, menú del día) y no se
 * inventan importes.
 */

export const BUSINESS = {
	name: 'Pasur',
	fullName: 'Bar Restaurante Pasur',
	shortName: 'Pasur',
	mark: 'PS',
	street: 'Calle Peri, 15 · Nave 19',
	city: 'Castelló de la Plana',
	province: 'Castelló',
	region: 'Comunitat Valenciana',
	comarca: 'Plana Alta',
	postalCode: '12006',
	country: 'ES',
	phoneDisplay: '622 79 11 61',
	phoneHref: 'tel:+34622791161',
	rating: 4.4,
	reviewsCount: 671,
	siteUrl: 'https://www.sur-digital.com/bar-restaurante-pasur',
	geo: { lat: 39.977112, lng: -0.066699 },
	featureId: '0xd6000a61e64be89:0xe58d5ccf26c72bb3',
	placeId: 'ChIJib5kHqYAYA0RsyvHJs9cjeU',
	cid: '16540979051180272563',
	googleCats: ['Bar restaurante'],
	tagline: 'Almuerzos y bocadillos en el polígono, desde las 5:40',
	description:
		'Bar Restaurante Pasur, en el Polígono Industrial Autopista Sur (Calle Peri, 15, nave 19), Castelló de la Plana: almuerzos, bocadillos, menú del día y cocina casera desde las 5:40, de lunes a viernes. 4,4 en Google con 671 reseñas. Tel. 622 79 11 61.',
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Bar+Restaurante+Pasur/@39.977112,-0.066699,17z/data=!3m1!4b1!4m6!3m5!1s0xd6000a61e64be89:0xe58d5ccf26c72bb3!8m2!3d39.977112!4d-0.066699!16s%2Fg%2F11b6d7t66n?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=ES`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=39.977112,-0.066699&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: madrugada y mediodía, solo de lunes a viernes. */
export const HOURS = [
	{ day: 'Lunes', value: '5:40–16:00' },
	{ day: 'Martes', value: '5:40–16:00' },
	{ day: 'Miércoles', value: '5:40–16:00' },
	{ day: 'Jueves', value: '5:40–16:00' },
	{ day: 'Viernes', value: '5:30–16:00' },
	{ day: 'Sábado', value: 'Cerrado', closed: true },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const SERVICIOS = [
	'Almuerzos',
	'Bocadillos',
	'Menú del día',
	'Cocina casera',
	'Desayunos',
	'Café',
	'Comidas para llevar',
	'Comedor amplio',
	'Aparcamiento en la calle',
	'Reservas por teléfono',
];

/** Carta orientativa: la ficha no publica platos ni precios. */
export const MENU = [
	{
		title: 'A primera hora',
		items: [
			{
				name: 'Café y tostada',
				note: 'desde las 5:40, antes de que arranque el turno',
			},
			{
				name: 'Bocadillo de madrugada',
				note: 'para el primer alto del día, recién hecho en la barra',
			},
		],
	},
	{
		title: 'La vitrina',
		items: [
			{
				name: 'Platos preparados',
				note: 'la vitrina del bar, con guisos y platos listos para servir sin esperar',
			},
			{
				name: 'Ensalada de la casa',
				note: 'lechuga, tomate, aceitunas y cebolla morada',
			},
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{
				name: 'Bocadillo de carne',
				note: 'en pan de barra, bien cargado; «gran variedad de bocadillos», dice una reseña',
			},
			{
				name: 'Bocadillo para llevar',
				note: 'se piden en la barra; para grupos de trabajo conviene llamar antes',
			},
		],
	},
	{
		title: 'El almuerzo',
		items: [
			{
				name: 'Huevos con morcilla y albóndigas',
				note: 'el almuerzo de la casa, con pan para mojar',
			},
			{
				name: 'Ración para compartir',
				note: '«buen sitio para almorzar, mucha variedad», dice otra reseña',
			},
		],
	},
	{
		title: 'Menú del día',
		items: [
			{
				name: 'Menú del día',
				note: 'cambia cada día y se consulta en la barra; sin precio publicado en la ficha',
			},
			{
				name: 'Pescado a la plancha con patatas',
				note: 'con perejil y patatas fritas, como el de las fotos',
			},
		],
	},
	{
		title: 'Postre y café',
		items: [
			{
				name: 'Postre de la casa',
				note: 'lo que haya ese día, para cerrar la comida',
			},
			{
				name: 'Carajillo',
				note: 'en vaso de caña, el café de después del almuerzo',
			},
		],
	},
];

export const REVIEWS = [
	{ text: 'Buen sitio para almorzar, mucha variedad y las camareras muy simpáticas.', rating: 4 },
	{ text: 'Buen trato, atienden bien y rápido.', rating: 5 },
	{ text: 'Gran variedad de bocadillos, servicio rápido y muy buen trato.', rating: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está Bar Restaurante Pasur?',
		a: 'En la calle Peri, 15, nave 19, dentro del Polígono Industrial Autopista Sur de Castelló de la Plana (12006). Es un bar de polígono, pensado para quien trabaja en la zona: se llega en coche y se aparca en la misma calle. El botón «Cómo llegar» abre la ruta exacta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre de lunes a jueves de 5:40 a 16:00 y los viernes de 5:30 a 16:00. Sábados y domingos cierra. Es horario de turno de mañana: desayuno, almuerzo y comida, sin servicio de noche. En puentes o festivos conviene llamar antes al 622 79 11 61.',
	},
	{
		q: '¿Hay menú del día?',
		a: 'Sí. El menú cambia cada día y se consulta en la barra, junto con el precio, porque la ficha de Google no lo publica y esta web no inventa importes. Para saber qué hay antes de ir, se puede llamar al 622 79 11 61.',
	},
	{
		q: '¿Se puede desayunar o almorzar?',
		a: 'Sí. El bar abre a las 5:40, así que hay café y bocadillos desde primera hora. A media mañana funciona el almuerzo, que es lo que más citan las reseñas: «buen sitio para almorzar, mucha variedad».',
	},
	{
		q: '¿Tienen bocadillos para llevar?',
		a: 'Sí, hay una carta amplia de bocadillos y se pueden pedir para llevar. Para pedidos grandes o de un grupo de trabajo, mejor llamar antes al 622 79 11 61 y confirmarlo con el local.',
	},
	{
		q: '¿Se puede reservar mesa?',
		a: 'No hay reserva online ni formulario en esta web. El comedor es amplio, pero para grupos conviene llamar con antelación al 622 79 11 61 y confirmarlo con el restaurante.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google marca acceso, aseo y asientos adaptados para sillas de ruedas. Si necesitas alguna condición concreta, avisa al llamar.',
	},
	{
		q: '¿Dónde se aparca?',
		a: 'Al estar dentro del polígono, se aparca en la misma calle Peri y en las calles de las naves del entorno, en superficie. A la hora del almuerzo se llena, así que conviene llegar con un poco de margen.',
	},
];
