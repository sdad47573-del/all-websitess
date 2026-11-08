/**
 * Datos de Bar Restaurante La Tasca — Carrer d'Àngel Pallarés, 14,
 * 12130 Sant Joan de Moró (Castelló).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «La Tasca», 40.0585697, -0.1357897,
 *   feature 0xd5ffd02099b788b:0xbf1fd19179e4dfda (dirección, teléfono,
 *   horario, categorías, nota, reseñas y accesibilidad).
 * - Descripción del comercio en la propia ficha: menú diario de 9 € y
 *   almuerzo a la brasa por 5 €, con montaditos, jamón y morro de cerdo
 *   a cargo de la casa un día a la semana.
 * - Reseñas públicas de Google citadas en la web.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas
 *   a src/assets/fotos/.
 *
 * La ficha no publica la carta completa: los platos salen de la descripción
 * del comercio, de sus fotos y de las reseñas. No se inventan importes.
 */

export const BUSINESS = {
	name: 'La Tasca',
	fullName: 'Bar Restaurante La Tasca',
	shortName: 'La Tasca',
	mark: 'LT',
	street: "Carrer d'Àngel Pallarés, 14",
	city: 'Sant Joan de Moró',
	province: 'Castelló',
	region: 'Comunitat Valenciana',
	comarca: 'Plana Alta',
	postalCode: '12130',
	country: 'ES',
	phoneDisplay: '623 11 60 45',
	phoneHref: 'tel:+34623116045',
	rating: 4.4,
	reviewsCount: 269,
	siteUrl: 'https://www.sur-digital.com/la-tasca',
	geo: { lat: 40.0585697, lng: -0.1357897 },
	featureId: '0xd5ffd02099b788b:0xbf1fd19179e4dfda',
	placeId: 'ChIJi3ibCQL9Xw0R2t_keZHRH78',
	cid: '13771956608267771866',
	googleCats: ['Bar restaurante'],
	tagline: 'Cocina casera y brasa en Sant Joan de Moró',
	description:
		"Bar Restaurante La Tasca, en Carrer d'Àngel Pallarés, 14, Sant Joan de Moró (Castelló): comida casera, menú diario de 9 € y almuerzo a la brasa por 5 €, con parrillada y sepia con patatas. 4,4 en Google con 269 reseñas. Tel. 623 11 60 45.",
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/La+Tasca/@40.0585697,-0.1357897,17z/data=!3m1!4b1!4m6!3m5!1s0xd5ffd02099b788b:0xbf1fd19179e4dfda!8m2!3d40.0585697!4d-0.1357897!16s%2Fg%2F11gznllq0y?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=ES`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=40.0585697,-0.1357897&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: mañana y mediodía, y viernes a domingo hasta medianoche. */
export const HOURS = [
	{ day: 'Lunes', value: '8:30–13:30' },
	{ day: 'Martes', value: '8:30–16:00' },
	{ day: 'Miércoles', value: '8:30–16:00' },
	{ day: 'Jueves', value: '8:30–16:00' },
	{ day: 'Viernes', value: '8:30–24:00' },
	{ day: 'Sábado', value: '8:30–24:00' },
	{ day: 'Domingo', value: '8:30–24:00' },
];

export const SERVICIOS = [
	'Menú diario',
	'Almuerzos',
	'Almuerzo a la brasa',
	'Parrillada',
	'Mariscada',
	'Fideuà',
	'Sepia con patatas',
	'Cocina casera',
	'Montaditos',
	'Terraza',
	'Comedor',
	'Reservas por teléfono',
];

/**
 * Carta. La ficha publica el precio del menú diario y del almuerzo a la brasa;
 * el resto de platos salen de las fotos del perfil y de las reseñas.
 */
export const MENU = [
	{
		title: 'El menú del día',
		items: [
			{
				name: 'Menú diario',
				note: '9 €, como anuncia la ficha del restaurante; el detalle del día se pregunta en la barra',
			},
			{
				name: 'Almuerzo a la brasa',
				note: '5 €, el almuerzo de media mañana con la brasa encendida',
			},
		],
	},
	{
		title: 'El almuerzo',
		items: [
			{
				name: 'Bocadillo de la casa',
				note: 'de bacon y queso, en pan de barra; en las fotos de la ficha aparece bien cargado',
			},
			{
				name: 'Plancha de almuerzo',
				note: 'huevos fritos, salchichas, pollo y pimientos sobre la plancha, para compartir',
			},
		],
	},
	{
		title: 'Para compartir',
		items: [
			{
				name: 'Parrillada',
				note: 'costillas, pollo y pimientos a la brasa; «la parrillada exquisita», dice una reseña',
			},
			{
				name: 'Mariscada',
				note: 'gambas, langostinos, mejillones y calamares en la bandeja grande de la casa',
			},
			{
				name: 'Pulpo a la brasa',
				note: 'con patata y pimentón, servido en plato llano',
			},
		],
	},
	{
		title: 'De la cocina',
		items: [
			{
				name: 'Fideuà de marisco',
				note: 'en paella, con langostinos, gambas y mejillones',
			},
			{
				name: 'Sepia con patatas',
				note: '«recomendable la sepia con patatas», apunta una reseña',
			},
			{
				name: 'Ensalada de la casa',
				note: '«una muy buena ensalada», añade la misma reseña',
			},
		],
	},
	{
		title: 'Postre y café',
		items: [
			{
				name: 'Copa de helado',
				note: 'con nata y barquillo, en copa de pie, como la de las fotos',
			},
			{
				name: 'Café y carajillo',
				note: 'para cerrar el almuerzo en la barra',
			},
		],
	},
];

export const REVIEWS = [
	{ text: 'Las raciones generosas a un precio razonable.', rating: 5 },
	{ text: 'Recomendable la sepia con patatas y una muy buena ensalada.', rating: 4 },
	{ text: 'Recomendable 100%: trato excelente y la parrillada exquisita.', rating: 5 },
];

export const FAQ = [
	{
		q: '¿Dónde está La Tasca?',
		a: "En el número 14 de la calle Àngel Pallarés, en Sant Joan de Moró (12130), en la Plana Alta. Está en el casco del pueblo, a pocos minutos de Castelló y de Borriol. El botón «Cómo llegar» abre la ruta exacta en Google Maps.",
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre todos los días. El lunes está abierto de 8:30 a 13:30; de martes a jueves, de 8:30 a 16:00; y de viernes a domingo, de 8:30 a 24:00. En festivos como el Día de Todos los Santos el horario puede cambiar, así que conviene llamar antes al 623 11 60 45.',
	},
	{
		q: '¿Cuánto cuesta comer?',
		a: 'La ficha del restaurante anuncia un menú diario de 9 € y un almuerzo a la brasa por 5 €. Son los dos precios que publica el propio establecimiento; el resto de la carta y las raciones se consultan por teléfono o en la barra, porque esta web no inventa importes.',
	},
	{
		q: '¿Qué se come en La Tasca?',
		a: 'Cocina casera de bar restaurante familiar. En sus fotos y reseñas aparecen la parrillada, la mariscada, el pulpo a la brasa, la fideuà de marisco, la sepia con patatas, la ensalada de la casa y los bocadillos, además de los montaditos, el jamón y el morro de cerdo que la casa pone un día a la semana. La ficha se define como «comida casera y menú y almuerzos populares».',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Por teléfono, en el 623 11 60 45. No hay reserva online ni formulario en esta web. Para grupos, fines de semana o días de fiesta conviene llamar con tiempo, sobre todo de viernes a domingo, cuando el horario se alarga hasta medianoche.',
	},
	{
		q: '¿Tiene terraza?',
		a: 'Sí, el local tiene terraza además del comedor. En las fotos de la ficha se ven las mesas de fuera y el comedor interior. No hay reserva de terraza: se ocupa según llegada.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google marca acceso, aseo y asientos adaptados para sillas de ruedas. No marca plaza de aparcamiento adaptada, así que el aparcamiento es el de la calle.',
	},
	{
		q: '¿Dónde se aparca?',
		a: 'El local no tiene aparcamiento propio. Se aparca en la calle Àngel Pallarés y en las calles del entorno, en superficie; al estar en el casco de un pueblo, salvo a la hora del almuerzo suele haber sitio cerca.',
	},
];
