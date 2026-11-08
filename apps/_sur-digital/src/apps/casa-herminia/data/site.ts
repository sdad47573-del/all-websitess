/**
 * Datos de Restaurant - Bar Casa Herminia — Carrer Vilafamés, 4,
 * 12191 La Pobla Tornesa (Castellón).
 *
 * Fuentes públicas:
 * - Ficha de Google Maps aportada: «Restaurant - Bar Casa Herminia»,
 *   40.102729, -0.0018279, feature 0xd5ff88043460ea3:0x94b3a16339c50b38
 *   (dirección, teléfono, horario, categorías, nota y reseñas).
 * - Cartel del carajillo palmero del propio local: original de Casa Herminia,
 *   creado en 1998, servido en vaso de caña.
 * - Reseñas públicas de Google citadas en la web.
 * - Fotografías del perfil del establecimiento en Google Maps, descargadas a
 *   src/assets/fotos/.
 *
 * La ficha no publica carta ni precios: los platos salen de las fotos del
 * perfil y de las reseñas. No se inventan importes.
 */

export const BUSINESS = {
	name: 'Casa Herminia',
	fullName: 'Restaurant - Bar Casa Herminia',
	shortName: 'Casa Herminia',
	mark: 'CH',
	street: 'Carrer Vilafamés, 4',
	city: 'La Pobla Tornesa',
	province: 'Castellón',
	region: 'Comunitat Valenciana',
	comarca: 'Plana Alta',
	postalCode: '12191',
	country: 'ES',
	phoneDisplay: '964 33 81 25',
	phoneHref: 'tel:+34964338125',
	rating: 4.5,
	reviewsCount: 983,
	siteUrl: 'https://www.sur-digital.com/casa-herminia',
	geo: { lat: 40.102729, lng: -0.0018279 },
	featureId: '0xd5ff88043460ea3:0x94b3a16339c50b38',
	placeId: 'ChIJow5GQ4D4Xw0ROAvFOWOhs5Q',
	cid: '10715085385987590968',
	googleCats: ['Bar', 'Restaurante'],
	tagline: 'Almuerzos y carajillo palmero en La Pobla Tornesa',
	description:
		'Casa Herminia, bar restaurante de almuerzos en Carrer Vilafamés, 4, La Pobla Tornesa (Castellón): huevos, embutido y bocadillos desde las 7:00, olivas y cacahuetes en la mesa y el carajillo palmero de la casa. 4,5 en Google con 983 reseñas. Tel. 964 33 81 25.',
};

const DEST = `${BUSINESS.geo.lat}%2C${BUSINESS.geo.lng}`;

export const MAPS = {
	place:
		'https://www.google.com/maps/place/Restaurant+-+Bar+Casa+Herminia/@40.102729,-0.0018279,17z/data=!3m1!4b1!4m6!3m5!1s0xd5ff88043460ea3:0x94b3a16339c50b38!8m2!3d40.102729!4d-0.0018279!16s%2Fg%2F1tfx6704?authuser=0&hl=es',
	cid: `https://www.google.com/maps?cid=${BUSINESS.cid}`,
	reviews: `https://search.google.com/local/reviews?placeid=${BUSINESS.placeId}&hl=es&gl=ES`,
	directions: `https://www.google.com/maps/dir/?api=1&destination=${DEST}`,
	embed: 'https://maps.google.com/maps?q=40.102729,-0.0018279&z=17&hl=es&output=embed',
};

/** Horario de la ficha de Google: solo mañanas, con el domingo cerrado. */
export const HOURS = [
	{ day: 'Lunes', value: '7:00–15:30' },
	{ day: 'Martes', value: '7:00–15:30' },
	{ day: 'Miércoles', value: '7:00–15:30' },
	{ day: 'Jueves', value: '7:00–15:30' },
	{ day: 'Viernes', value: '7:00–15:30' },
	{ day: 'Sábado', value: '7:00–13:30' },
	{ day: 'Domingo', value: 'Cerrado', closed: true },
];

export const SERVICIOS = [
	'Almuerzos',
	'Bocadillos',
	'Plato de almuerzo',
	'Carajillo palmero',
	'Terraza',
	'Bar de pueblo',
	'Café y tapas',
	'Reservas por teléfono',
];

/**
 * Carta. La ficha no publica carta con precios: los platos salen de las fotos
 * del perfil y de las reseñas públicas.
 */
export const MENU = [
	{
		title: 'El almuerzo',
		items: [
			{
				name: 'Plato de almuerzo',
				note: 'huevos fritos, embutido, tomate, patatas y pan de pueblo',
			},
			{
				name: 'Olivas y encurtidos',
				note: 'el plato que se pone en la mesa antes que nada',
			},
			{ name: 'Cacahuetes', note: 'tostados, para picar mientras llega el bocadillo' },
			{ name: 'Pan de pueblo', note: 'en cesta de papel, recién cortado' },
		],
	},
	{
		title: 'Bocadillos',
		items: [
			{ name: 'Bocadillo de llom', note: 'con pimiento rojo asado, en pan de bocadillo' },
			{
				name: 'Bocadillo de longaniza',
				note: 'con huevo, de los que se piden a media mañana',
			},
			{
				name: 'Pinchos de tortilla',
				note: '«pedimos 2 pinchos de tortilla y 2 cafés», cuenta una reseña',
			},
		],
	},
	{
		title: 'El carajillo',
		items: [
			{
				name: 'Carajillo palmero',
				note: 'según el cartel de la casa, es original de este bar y se sirve en vaso de caña',
			},
			{ name: 'Café solo y cortado', note: 'de máquina, a cualquier hora de la mañana' },
		],
	},
	{
		title: 'De la barra',
		items: [
			{ name: 'Cerveza bien fría', note: 'de botella y de barril, con el almuerzo' },
			{ name: 'Refrescos', note: 'en botella, para la terraza' },
		],
	},
];


export const FAQ = [
	{
		q: '¿Dónde está Casa Herminia?',
		a: 'En el número 4 de la calle Vilafamés, en La Pobla Tornesa (12191), en la carretera que sube hacia Vilafamés. Es un bar de fachada de piedra con el toldo azul de «CASA HERMINIA» y una terraza a la sombra de la morera, con mesas y sillas blancas. El botón «Cómo llegar» abre la ruta exacta en Google Maps.',
	},
	{
		q: '¿Qué horario tiene?',
		a: 'Abre solo por las mañanas: de lunes a viernes de 7:00 a 15:30 y el sábado de 7:00 a 13:30. Los domingos cierra. No hay servicio de cena ni de tarde-noche, así que el almuerzo y la comida se hacen antes de las 15:30. En fiestas del pueblo y en verano el horario cambia: llama antes al 964 33 81 25.',
	},
	{
		q: '¿Qué es el carajillo palmero?',
		a: 'Es el carajillo de la casa, servido en vaso de caña. Según el cartel que hay en el local, el palmero es original de este bar, se inventó en Casa Herminia en 1998 y desde entonces se sirve así. Las reseñas lo citan con nombre propio: «excelente carajillo palmero».',
	},
	{
		q: '¿Qué es un almuerzo?',
		a: 'El almuerzo es la comida de media mañana típica de la provincia: un plato con huevos fritos, embutido, tomate y patatas, pan de pueblo y bebida, o un bocadillo con lo mismo dentro. En Casa Herminia se sirve desde primera hora, con olivas y cacahuetes en la mesa, y las reseñas lo describen como «típico bar de almuerzos».',
	},
	{
		q: '¿Hay carta y precios?',
		a: 'La ficha de Google no publica carta ni precios, y esta web no inventa importes: los platos que aparecen aquí son los de sus propias fotos y los que citan las reseñas. Precios, raciones y disponibilidad se consultan llamando al 964 33 81 25 o directamente en la barra.',
	},
	{
		q: '¿Se puede reservar?',
		a: 'Por teléfono, en el 964 33 81 25. No hay reserva online ni formulario en esta web. La terraza no es muy grande y a la hora punta del almuerzo se llena, así que para grupos conviene llamar el día antes.',
	},
	{
		q: '¿Es accesible para sillas de ruedas?',
		a: 'La ficha de Google no marca atributos de accesibilidad para este local, así que no se puede confirmar desde aquí. La terraza está a pie de calle, al mismo nivel que la acera; para el interior y el aseo, lo mejor es llamar antes al 964 33 81 25 y preguntar directamente.',
	},
	{
		q: '¿Es una parada de ciclistas?',
		a: 'Sí, por lo que cuentan las reseñas: una de ellas lo define como «típico bar de almuerzos ciclistas», y en las fotos aparecen cascos y bicis junto a las mesas. La ficha no publica aparcamiento para bicicletas, pero la terraza y la calle permiten dejarlas a la vista mientras se almuerza.',
	},
];
